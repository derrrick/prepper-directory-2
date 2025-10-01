import { PocketKnife as Knife, Zap, BookOpen, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import NewsletterForm from "@/components/newsletter-form"

export default function HomePage() {
  return (
    <div className="min-h-screen text-foreground shadow-none bg-background dark:!bg-border">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[120px] font-bold tracking-wide uppercase text-balance font-display">
            When the Lights Go Out, Stay Ready
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-normal text-balance">
            Your Complete Preparedness Resource
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-normal text-pretty">
            Evidence-backed guides, tested gear, and hard skills — built for every stage of preparedness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:opacity-90 shadow-md hover:shadow-lg transition-all"
              asChild
            >
              <Link href="/tools">Start Your Free Storage Calculator</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent" asChild>
              <Link href="/gear">Browse Recommended Gear</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="rounded-lg border-0 bg-muted p-6">
            <CardHeader className="p-0 mb-4">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">New to Prepping?</CardTitle>
              <CardDescription className="font-normal">Start with the essentials</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground font-normal mb-4">
                Complete beginner's guide with curated starter kits and step-by-step plans.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/get-started">Get Started →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 bg-muted p-6">
            <CardHeader className="p-0 mb-4">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">Food Storage Calculator</CardTitle>
              <CardDescription className="font-normal">Plan your supplies</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground font-normal mb-4">
                Interactive tool to calculate exactly what you need for your household.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/tools">Calculate Now →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 bg-muted p-6">
            <CardHeader className="p-0 mb-4">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">This Week's Analysis</CardTitle>
              <CardDescription className="font-normal">Current threat assessment</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground font-normal mb-4">
                Expert analysis of current events through a preparedness lens.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/blog">Read Analysis →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-lg border-0 bg-muted p-6">
            <CardHeader className="p-0 mb-4">
              <div className="h-12 w-12 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                <Knife className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl font-bold tracking-tight">Featured Expert</CardTitle>
              <CardDescription className="font-normal">Learn from the best</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-sm text-muted-foreground font-normal mb-4">
                In-depth interviews with survival experts and field-tested professionals.
              </p>
              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                <Link href="/interviews">Watch Interview →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trending Topics */}
      <section id="guides" className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-2">Trending Preparedness Topics</h2>
            <p className="text-muted-foreground font-normal">Expert guides for every scenario</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button variant="default" size="sm" asChild>
              <Link href="/guides">All</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/guides?category=beginner">Beginner</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/guides?category=grid-down">Grid-Down</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/guides?category=urban">Urban</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/guides?category=medical">Medical</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Complete Water Storage Guide",
              difficulty: "Beginner",
              category: "Essential",
              description: "Everything you need to know about storing water safely for emergencies.",
              sponsored: false,
              slug: "water-storage-guide",
            },
            {
              title: "Grid-Down Communication Systems",
              difficulty: "Advanced",
              category: "Communications",
              description: "Ham radio, mesh networks, and offline communication strategies.",
              sponsored: true,
              slug: "grid-down-communications",
            },
            {
              title: "Urban Apartment Preparedness",
              difficulty: "Beginner",
              category: "Urban",
              description: "How to prep effectively in limited space without drawing attention.",
              sponsored: false,
              slug: "urban-apartment-prep",
            },
            {
              title: "Building a Medical Kit",
              difficulty: "Intermediate",
              category: "Medical",
              description: "Essential medical supplies and training for emergency situations.",
              sponsored: false,
              slug: "medical-kit-guide",
            },
            {
              title: "Food Preservation Methods",
              difficulty: "Intermediate",
              category: "Food",
              description: "Canning, dehydrating, and long-term food storage techniques.",
              sponsored: false,
              slug: "food-preservation",
            },
            {
              title: "Financial Preparedness Strategy",
              difficulty: "Beginner",
              category: "Financial",
              description: "Protecting your wealth and building resilience against economic disruption.",
              sponsored: true,
              slug: "financial-preparedness",
            },
          ].map((guide, i) => (
            <Link key={i} href={`/guides/${guide.slug}`}>
              <Card className="rounded-lg border-0 bg-muted p-6 hover:bg-muted/80 transition-colors cursor-pointer h-full">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="rounded-md bg-black text-white dark:bg-black dark:text-white">
                      {guide.difficulty}
                    </Badge>
                    {guide.sponsored && (
                      <Badge variant="outline" className="rounded-md font-mono text-xs border-muted-foreground/30">
                        Sponsored
                      </Badge>
                    )}
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

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="bg-transparent" asChild>
            <Link href="/guides">View All Guides</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-4 py-12">
        <Card className="rounded-lg bg-primary/5 border-0">
          <CardContent className="p-6 md:p-12">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Join 10,000+ Preppers</h2>
              <p className="text-lg text-muted-foreground font-normal">
                Get weekly tips, gear deals, and threat analysis delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto pt-4">
                <NewsletterForm variant="inline" source="homepage-cta" />
              </div>
              <p className="text-xs text-muted-foreground font-normal">
                No spam. Unsubscribe anytime. We respect your OPSEC.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t border-border mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Knife className="h-5 w-5 text-primary" />
                <span className="font-bold tracking-tight">prepper.directory</span>
              </div>
              <p className="text-sm text-muted-foreground font-normal">Your complete preparedness resource hub.</p>
            </div>
            <div>
              <h3 className="font-bold tracking-tight mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                <li>
                  <Link href="/guides" className="hover:text-foreground transition-colors">
                    Essential Guides
                  </Link>
                </li>
                <li>
                  <Link href="/gear" className="hover:text-foreground transition-colors">
                    Gear Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Skills Training
                  </Link>
                </li>
                <li>
                  <Link href="/tools" className="hover:text-foreground transition-colors">
                    Tools
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-tight mb-4">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/interviews" className="hover:text-foreground transition-colors">
                    Expert Interviews
                  </Link>
                </li>
                <li>
                  <Link href="/get-started" className="hover:text-foreground transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/premium" className="hover:text-foreground transition-colors">
                    Premium Access
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold tracking-tight mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground font-normal">
                <li>
                  <Link href="/privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate-disclosure" className="hover:text-foreground transition-colors">
                    Affiliate Disclosure
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-foreground transition-colors">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground font-normal">
            <p>© 2025 prepper.directory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
