"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import { useSearchParams } from "next/navigation"

const guides = [
  {
    title: "Complete Water Storage Guide",
    difficulty: "Beginner",
    category: "Essential",
    description: "Everything you need to know about storing water safely for emergencies.",
    slug: "water-storage-guide",
    readTime: "12 min",
    premium: false,
  },
  {
    title: "Grid-Down Communication Systems",
    difficulty: "Advanced",
    category: "Communications",
    description: "Ham radio, mesh networks, and offline communication strategies.",
    slug: "grid-down-communications",
    readTime: "18 min",
    premium: true, // Marked as premium - advanced technical content
  },
  {
    title: "Urban Apartment Preparedness",
    difficulty: "Beginner",
    category: "Urban",
    description: "How to prep effectively in limited space without drawing attention.",
    slug: "urban-apartment-prep",
    readTime: "10 min",
    premium: false,
  },
  {
    title: "Building a Medical Kit",
    difficulty: "Intermediate",
    category: "Medical",
    description: "Essential medical supplies and training for emergency situations.",
    slug: "medical-kit-guide",
    readTime: "15 min",
    premium: false,
  },
  {
    title: "Food Preservation Methods",
    difficulty: "Intermediate",
    category: "Food",
    description: "Canning, dehydrating, and long-term food storage techniques.",
    slug: "food-preservation",
    readTime: "20 min",
    premium: false,
  },
  {
    title: "Financial Preparedness Strategy",
    difficulty: "Beginner",
    category: "Financial",
    description: "Protecting your wealth and building resilience against economic disruption.",
    slug: "financial-preparedness",
    readTime: "14 min",
    premium: false,
  },
  {
    title: "Bug Out Bag Essentials",
    difficulty: "Beginner",
    category: "Essential",
    description: "The complete checklist for a 72-hour emergency evacuation kit.",
    slug: "bug-out-bag",
    readTime: "16 min",
    premium: false,
  },
  {
    title: "Home Security Hardening",
    difficulty: "Intermediate",
    category: "Security",
    description: "Physical security measures to protect your home and family.",
    slug: "home-security",
    readTime: "22 min",
    premium: true, // Marked as premium - detailed security tactics
  },
  {
    title: "Off-Grid Power Solutions",
    difficulty: "Advanced",
    category: "Grid-Down",
    description: "Solar, generators, and battery systems for long-term power independence.",
    slug: "off-grid-power",
    readTime: "25 min",
    premium: true, // Marked as premium - advanced technical guide
  },
]

export default function GuidesPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [searchQuery, setSearchQuery] = useState("")

  const categories = [
    "all",
    "beginner",
    "essential",
    "urban",
    "medical",
    "grid-down",
    "communications",
    "food",
    "financial",
    "security",
  ]

  const filteredGuides = guides.filter((guide) => {
    const matchesCategory =
      selectedCategory === "all" ||
      guide.category.toLowerCase() === selectedCategory.toLowerCase() ||
      guide.difficulty.toLowerCase() === selectedCategory.toLowerCase()
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-bebas-neue)] mb-4 tracking-wide">
            PREPAREDNESS GUIDES
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Comprehensive, field-tested guides for every aspect of emergency preparedness.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search guides..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className="capitalize"
              >
                {cat === "grid-down" ? "Grid-Down" : cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing {filteredGuides.length} {filteredGuides.length === 1 ? "guide" : "guides"}
        </p>

        {/* Guides Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide, i) => (
            <Link key={i} href={`/guides/${guide.slug}`}>
              <Card className="rounded-lg border-0 bg-muted p-6 hover:bg-muted/80 transition-colors cursor-pointer h-full">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="rounded-md bg-black text-white dark:bg-black dark:text-white">
                      {guide.difficulty}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                      {guide.premium && (
                        <Badge variant="outline" className="rounded-md border-primary text-primary">
                          Premium
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold tracking-tight hover:text-primary transition-colors">
                    {guide.title}
                  </CardTitle>
                  <CardDescription className="font-normal">{guide.category}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-sm text-muted-foreground font-normal">{guide.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No guides found</h3>
            <p className="text-muted-foreground mb-6">Try adjusting your search or filter criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("all")
                setSearchQuery("")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  )
}
