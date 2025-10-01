import { Calendar, Clock, TrendingUp, AlertTriangle, Zap } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import SiteHeader from "@/components/site-header"
import NewsletterForm from "@/components/newsletter-form"

// Mock blog data - in production, this would come from a CMS or database
const featuredPost = {
  slug: "2025-threat-landscape-analysis",
  title: "2025 Threat Landscape: What Preppers Need to Know",
  excerpt:
    "A comprehensive analysis of emerging threats, from supply chain vulnerabilities to climate-driven disasters. Essential reading for serious preparedness planning.",
  category: "Threat Analysis",
  date: "2025-01-15",
  readTime: "12 min read",
  image: "/emergency-preparedness-threat-analysis-map.jpg",
  premium: true,
}

const recentPosts = [
  {
    slug: "water-purification-methods-compared",
    title: "Water Purification Methods Compared: Filters vs. Tablets vs. UV",
    excerpt: "We tested 15 different water purification methods in real-world conditions. Here's what actually works.",
    category: "Gear Reviews",
    date: "2025-01-12",
    readTime: "8 min read",
    image: "/water-purification-filter-system.jpg",
  },
  {
    slug: "food-storage-mistakes",
    title: "5 Critical Food Storage Mistakes That Could Cost You",
    excerpt:
      "Don't let these common errors ruin your emergency food supply. Learn from our mistakes so you don't have to.",
    category: "Skills & Training",
    date: "2025-01-10",
    readTime: "6 min read",
    image: "/emergency-food-storage-pantry.jpg",
  },
  {
    slug: "grid-down-communication",
    title: "Grid-Down Communication: HAM Radio Setup for Beginners",
    excerpt:
      "When cell towers fail, HAM radio becomes essential. Here's how to get started with amateur radio for emergency comms.",
    category: "Skills & Training",
    date: "2025-01-08",
    readTime: "10 min read",
    image: "/ham-radio-emergency-communication-setup.jpg",
  },
  {
    slug: "urban-vs-rural-preparedness",
    title: "Urban vs. Rural Preparedness: Different Strategies for Different Environments",
    excerpt:
      "Your location dramatically affects your preparedness strategy. Here's how to adapt your plans to your environment.",
    category: "Strategy",
    date: "2025-01-05",
    readTime: "9 min read",
    image: "/urban-city-skyline-vs-rural-countryside.jpg",
  },
  {
    slug: "best-bug-out-bags-2025",
    title: "Best Bug-Out Bags of 2025: Tested and Reviewed",
    excerpt: "We put 12 popular bug-out bags through rigorous testing. Find out which ones are worth your money.",
    category: "Gear Reviews",
    date: "2025-01-03",
    readTime: "15 min read",
    image: "/tactical-bug-out-bag-backpack-gear.jpg",
  },
  {
    slug: "economic-collapse-indicators",
    title: "Economic Collapse Indicators: What to Watch in 2025",
    excerpt:
      "Understanding the warning signs can give you time to prepare. Here are the key economic indicators to monitor.",
    category: "Threat Analysis",
    date: "2025-01-01",
    readTime: "11 min read",
    image: "/economic-charts-financial-crisis-indicators.jpg",
    premium: true,
  },
]

const categories = [
  { name: "All Posts", count: 127, icon: Zap },
  { name: "Threat Analysis", count: 23, icon: AlertTriangle },
  { name: "Gear Reviews", count: 45, icon: TrendingUp },
  { name: "Skills & Training", count: 38, icon: Clock },
  { name: "Strategy", count: 21, icon: Calendar },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Shared Header */}
      <SiteHeader />

      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-bebas-neue)]">
            Prepa Articles & Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl text-pretty">
            Expert insights, gear reviews, and threat analysis to keep you informed and prepared. Updated weekly with
            actionable intelligence.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <div>
            {/* Featured Post */}
            <div className="mb-12">
              <div className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                FEATURED ANALYSIS
              </div>

              <Card className="overflow-hidden border-primary/50 hover:border-primary transition-colors">
                <Link href={`/blog/${featuredPost.slug}`}>
                  <div className="aspect-[2/1] relative overflow-hidden">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {featuredPost.premium && (
                      <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Premium</Badge>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <Badge variant="outline">{featuredPost.category}</Badge>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors text-balance">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-pretty">{featuredPost.excerpt}</p>
                  </div>
                </Link>
              </Card>
            </div>

            {/* Recent Posts Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <Card key={post.slug} className="overflow-hidden hover:border-primary/50 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <div className="aspect-video relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {post.premium && (
                          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs">
                            Premium
                          </Badge>
                        )}
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-bold mb-2 hover:text-primary transition-colors text-balance leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 text-pretty">{post.excerpt}</p>
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-8 text-center">
                <Button variant="outline" size="lg">
                  Load More Posts
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.name}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors text-left"
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </span>
                      <span className="text-xs text-muted-foreground">{category.count}</span>
                    </button>
                  )
                })}
              </div>
            </Card>

            {/* Newsletter CTA */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="font-bold mb-2">Weekly Threat Briefing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get our weekly analysis of emerging threats and preparedness updates delivered to your inbox.
              </p>
              <NewsletterForm variant="card" source="blog-sidebar" />
              <p className="text-xs text-muted-foreground mt-3">
                No spam. Unsubscribe anytime. Your privacy is protected.
              </p>
            </Card>

            {/* Premium CTA */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Unlock Premium Analysis</h3>
                  <p className="text-sm text-muted-foreground">
                    Get access to in-depth threat reports, expert webinars, and advanced tools.
                  </p>
                </div>
              </div>
              <Button asChild className="w-full" size="sm">
                <Link href="/premium">Upgrade to Premium</Link>
              </Button>
            </Card>

            {/* Popular Posts */}
            <Card className="p-6">
              <h3 className="font-bold mb-4">Most Popular</h3>
              <div className="space-y-4">
                {recentPosts.slice(0, 3).map((post, idx) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group hover:bg-accent p-2 -m-2 rounded-lg transition-colors"
                  >
                    <div className="flex gap-3">
                      <span className="text-2xl font-bold text-primary/30 shrink-0">{idx + 1}</span>
                      <div>
                        <h4 className="text-sm font-semibold group-hover:text-primary transition-colors leading-tight mb-1 text-balance">
                          {post.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">{post.readTime}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
