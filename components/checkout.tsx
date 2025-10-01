"use client"

import { useCallback, useState, useEffect } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useRouter } from "next/navigation"

import { startCheckoutSession } from "@/app/actions/stripe"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function Checkout({ productId, userEmail }: { productId: string; userEmail?: string }) {
  const router = useRouter()
  const [isComplete, setIsComplete] = useState(false)

  const startCheckoutSessionForProduct = useCallback(
    () => startCheckoutSession(productId, userEmail),
    [productId, userEmail],
  )

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        router.push("/account?success=true")
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isComplete, router])

  return (
    <div id="checkout" className="w-full">
      {isComplete ? (
        <div className="text-center py-12">
          <div className="rounded-full bg-green-100 dark:bg-green-900/20 w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
          <p className="text-muted-foreground">Redirecting to your account...</p>
        </div>
      ) : (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{
            fetchClientSecret: startCheckoutSessionForProduct,
            onComplete: () => setIsComplete(true),
          }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}
