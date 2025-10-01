/*
"use client"

import { Check } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { PRODUCTS } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"

export default function PremiumPage() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "annual">("annual")

  const selectedProduct = PRODUCTS.find((p) => p.id.includes(billingInterval))!
  const monthlySavings = billingInterval === "annual" ? (9 * 12 - 79).toFixed(0) : null

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Upgrade Your Preparedness</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Get unlimited access to advanced threat analysis, detailed gear comparisons, downloadable resources, and
              expert guidance to keep you and your family prepared.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center bg-muted p-1 rounded-lg">
              <button
                onClick={() => setBillingInterval("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingInterval === "monthly"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingInterval("annual")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                  billingInterval === "annual"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <span className="ml-2 text-xs text-primary">Save ${monthlySavings}</span>
              </button>
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="p-8 border-primary shadow-lg shadow-primary/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                <p className="text-muted-foreground">{selectedProduct.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${(selectedProduct.priceInCents / 100).toFixed(2)}</span>
                  <span className="text-muted-foreground">/{billingInterval === "monthly" ? "month" : "year"}</span>
                </div>
                {billingInterval === "annual" && (
                  <p className="text-sm text-primary mt-2">Save ${monthlySavings} compared to monthly billing</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {selectedProduct.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full">
                <Link href={`/premium/checkout?product=${selectedProduct.id}`}>Get Started</Link>
              </Button>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12">What You Get with Premium</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Advanced Threat Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Weekly reports on emerging threats, geopolitical risks, and regional preparedness needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Expert Resources</h3>
                <p className="text-sm text-muted-foreground">
                  Downloadable guides, checklists, and training materials from industry professionals
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Community Access</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with like-minded preppers and learn from expert-led webinars and Q&A sessions
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have access until the end of
                  your billing period.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Is my payment information secure?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We use Stripe for payment processing, which is PCI-DSS compliant and trusted by millions
                  of businesses worldwide. We never store your payment information.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">What if I'm not satisfied?</h3>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not completely satisfied with your premium
                  membership, contact us for a full refund.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Do you offer team or family plans?</h3>
                <p className="text-sm text-muted-foreground">
                  Not yet, but we're working on it! Contact us at support@prepper.directory if you're interested in a
                  family or group plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
*/

// Temporary placeholder - premium page will be revisited later
export default function PremiumPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Premium Coming Soon</h1>
        <p className="text-muted-foreground">We're working on something special. Check back later!</p>
      </div>
    </div>
  )
}
