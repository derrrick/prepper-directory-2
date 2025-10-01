import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { createClient } from "@supabase/ssr"
import type Stripe from "stripe"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error("[v0] Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  // Create Supabase admin client for updating user data
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {},
    },
  })

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session

        // Get customer email to find user
        const customerEmail = session.customer_email || session.customer_details?.email

        if (!customerEmail) {
          console.error("[v0] No customer email found in session")
          break
        }

        // Get subscription details
        const subscriptionId = session.subscription as string
        const customerId = session.customer as string

        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId)

          // Update user profile with subscription info
          const { error } = await supabase
            .from("profiles")
            .update({
              subscription_status: "premium",
              stripe_customer_id: customerId,
              stripe_subscription_id: subscriptionId,
              subscription_ends_at: new Date(subscription.current_period_end * 1000).toISOString(),
              updated_at: new Date().toISOString(),
            })
            .eq("email", customerEmail)

          if (error) {
            console.error("[v0] Error updating profile:", error)
          } else {
            console.log("[v0] Successfully activated premium for:", customerEmail)
          }
        }
        break
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        // Update subscription status and end date
        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_status: subscription.status === "active" ? "premium" : "free",
            subscription_ends_at: new Date(subscription.current_period_end * 1000).toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId)

        if (error) {
          console.error("[v0] Error updating subscription:", error)
        }
        break
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription
        const customerId = subscription.customer as string

        // Downgrade to free
        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_status: "free",
            stripe_subscription_id: null,
            subscription_ends_at: null,
            updated_at: new Date().toISOString(),
          })
          .eq("stripe_customer_id", customerId)

        if (error) {
          console.error("[v0] Error canceling subscription:", error)
        } else {
          console.log("[v0] Successfully canceled subscription for customer:", customerId)
        }
        break
      }

      default:
        console.log("[v0] Unhandled event type:", event.type)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("[v0] Webhook handler error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 })
  }
}
