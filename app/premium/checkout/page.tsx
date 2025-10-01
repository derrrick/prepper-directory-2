import { Suspense } from "react"
import { notFound, redirect } from "next/navigation"
import Checkout from "@/components/checkout"
import { PRODUCTS } from "@/lib/products"
import SiteHeader from "@/components/site-header"
import { createClient } from "@/lib/supabase/server"

async function CheckoutContent({ searchParams }: { searchParams: { product?: string } }) {
  const productId = searchParams.product

  if (!productId) {
    notFound()
  }

  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirect to login if not authenticated
  if (!user) {
    redirect(`/auth/login?redirect=/premium/checkout?product=${productId}`)
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Complete Your Purchase</h1>
            <p className="text-muted-foreground">
              You're subscribing to <span className="font-semibold text-foreground">{product.name}</span> - $
              {(product.priceInCents / 100).toFixed(2)}/{product.id.includes("monthly") ? "month" : "year"}
            </p>
          </div>

          <Checkout productId={productId} userEmail={user.email} />
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage({ searchParams }: { searchParams: { product?: string } }) {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-background flex items-center justify-center">Loading checkout...</div>}
    >
      <CheckoutContent searchParams={searchParams} />
    </Suspense>
  )
}
