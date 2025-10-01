"use server"

import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"
import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export async function startCheckoutSession(productId: string, userEmail?: string) {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    customer_email: userEmail,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
          recurring: productId.includes("monthly") ? { interval: "month" } : { interval: "year" },
        },
        quantity: 1,
      },
    ],
    mode: "subscription",
  })

  return session.client_secret
}

export async function createCustomerPortalSession() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Get user's Stripe customer ID
  const { data: profile } = await supabase.from("profiles").select("stripe_customer_id").eq("id", user.id).single()

  if (!profile?.stripe_customer_id) {
    throw new Error("No Stripe customer found")
  }

  // Create portal session
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: profile.stripe_customer_id,
    return_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/account`,
  })

  redirect(portalSession.url)
}
