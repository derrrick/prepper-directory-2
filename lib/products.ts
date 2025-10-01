export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  features: string[]
  popular?: boolean
}

// Source of truth for all subscription products
export const PRODUCTS: Product[] = [
  {
    id: "monthly-premium",
    name: "Monthly Premium",
    description: "Full access to all premium features",
    priceInCents: 900, // Updated to $9/month
    features: [
      "Advanced threat analysis reports",
      "Detailed gear comparison tools",
      "Downloadable checklists & guides",
      "Ad-free experience",
      "Priority email support",
      "Monthly expert webinars",
    ],
  },
  {
    id: "annual-premium",
    name: "Annual Premium",
    description: "Save 27% with annual billing",
    priceInCents: 7900, // Updated to $79/year (saves $29)
    popular: true,
    features: [
      "All Monthly Premium features",
      "Save $29 per year",
      "Exclusive annual member resources",
      "Early access to new tools",
      "Private community access",
      "Quarterly expert consultations",
    ],
  },
]
