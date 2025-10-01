import { Calendar, Clock, Share2, ChevronLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"

// Mock article data - in production, this would come from a CMS or database
const article = {
  slug: "water-purification-methods-compared",
  title: "Water Purification Methods Compared: Filters vs. Tablets vs. UV",
  excerpt: "We tested 15 different water purification methods in real-world conditions. Here's what actually works.",
  category: "Gear Reviews",
  date: "2025-01-12",
  readTime: "8 min read",
  author: {
    name: "Mike Thompson",
    bio: "Former Army medic and wilderness survival instructor with 15+ years of field experience.",
    avatar: "/survival-expert-portrait.jpg",
  },
  image: "/water-purification-filter-system-testing.jpg",
  content: `
    <p>Access to clean drinking water is the most critical element of any survival situation. You can survive weeks without food, but only days without water. That's why having reliable water purification methods is non-negotiable for preppers.</p>

    <p>Over the past six months, we've tested 15 different water purification methods in various conditions—from clear mountain streams to murky pond water. Here's what we learned.</p>

    <h2>The Three Main Categories</h2>

    <h3>1. Physical Filters</h3>
    <p>Physical filters work by forcing water through microscopic pores that trap bacteria, protozoa, and sediment. The best filters can remove particles as small as 0.1 microns.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>No chemicals or waiting time</li>
      <li>Can filter large quantities quickly</li>
      <li>Improves taste and clarity</li>
      <li>Long-term cost-effective</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>Can clog with sediment</li>
      <li>Requires maintenance</li>
      <li>Most don't remove viruses</li>
      <li>Can freeze and crack in cold weather</li>
    </ul>

    <h3>2. Chemical Treatment (Tablets)</h3>
    <p>Chemical purification uses iodine or chlorine dioxide to kill microorganisms. Tablets are lightweight and have a long shelf life.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>Extremely lightweight and portable</li>
      <li>Long shelf life (4-5 years)</li>
      <li>Kills viruses, bacteria, and protozoa</li>
      <li>No moving parts to break</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>30-minute wait time</li>
      <li>Chemical taste</li>
      <li>Doesn't remove sediment or improve clarity</li>
      <li>Less effective in cold water</li>
    </ul>

    <h3>3. UV Light Purification</h3>
    <p>UV purifiers use ultraviolet light to destroy the DNA of microorganisms, rendering them unable to reproduce and cause illness.</p>

    <p><strong>Pros:</strong></p>
    <ul>
      <li>Fast (60-90 seconds)</li>
      <li>No chemicals or taste change</li>
      <li>Kills viruses, bacteria, and protozoa</li>
      <li>Compact and easy to use</li>
    </ul>

    <p><strong>Cons:</strong></p>
    <ul>
      <li>Requires batteries or charging</li>
      <li>Doesn't work in murky water</li>
      <li>Doesn't remove sediment</li>
      <li>Can break if dropped</li>
    </ul>

    <h2>Our Testing Methodology</h2>
    <p>We tested each method with water samples from five different sources:</p>
    <ul>
      <li>Clear mountain stream</li>
      <li>Stagnant pond</li>
      <li>River water with visible sediment</li>
      <li>Rainwater collection</li>
      <li>Tap water (control)</li>
    </ul>

    <p>Each sample was tested for bacterial contamination before and after treatment using standard water quality testing kits.</p>

    <h2>Top Recommendations</h2>

    <h3>Best Overall: Sawyer Mini Water Filter</h3>
    <p>The Sawyer Mini consistently performed well across all water sources. It's affordable ($25), lightweight (2 oz), and can filter up to 100,000 gallons. The 0.1-micron filter removes 99.99999% of bacteria and protozoa.</p>

    <p><strong>Best for:</strong> Bug-out bags, hiking, everyday carry</p>

    <h3>Best for International Travel: Aquatabs</h3>
    <p>When traveling to areas where viral contamination is a concern, chemical treatment is essential. Aquatabs are lightweight, effective against all pathogens including viruses, and have a 5-year shelf life.</p>

    <p><strong>Best for:</strong> International travel, backup purification, long-term storage</p>

    <h3>Best for Base Camp: Katadyn Gravity BeFree</h3>
    <p>For filtering large quantities at a base camp or bug-out location, gravity filters are unbeatable. The Katadyn BeFree can filter 10 liters in just 2-3 minutes with zero effort.</p>

    <p><strong>Best for:</strong> Base camps, family preparedness, group situations</p>

    <h2>The Bottom Line</h2>
    <p>Don't rely on a single purification method. A layered approach is best:</p>
    <ul>
      <li><strong>Primary:</strong> Quality filter (Sawyer, LifeStraw, Katadyn)</li>
      <li><strong>Backup:</strong> Chemical tablets (Aquatabs, Potable Aqua)</li>
      <li><strong>Emergency:</strong> Boiling (always works, requires fuel)</li>
    </ul>

    <p>Remember: the best water purification system is the one you have with you when you need it. Invest in quality gear, learn how to use it properly, and always carry backup options.</p>
  `,
  relatedPosts: [
    {
      slug: "food-storage-mistakes",
      title: "5 Critical Food Storage Mistakes That Could Cost You",
      image: "/emergency-food-storage.jpg",
    },
    {
      slug: "grid-down-communication",
      title: "Grid-Down Communication: HAM Radio Setup for Beginners",
      image: "/ham-radio-setup.jpg",
    },
  ],
}

export default function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
            <Link href="/blog" className="flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      <article className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16">
          {/* Main Content Column */}
          <div className="max-w-[680px]">
            {/* Article Header */}
            <div className="mb-12">
              <Badge variant="outline" className="mb-6 text-xs uppercase tracking-wider">
                {article.category}
              </Badge>

              <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-foreground text-balance">
                {article.title}
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light text-pretty">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <figure className="mb-12 -mx-4 sm:mx-0">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm text-muted-foreground italic mt-3 px-4 sm:px-0">
                Testing water purification systems in real-world conditions
              </figcaption>
            </figure>

            <div className="article-content text-foreground">
              {/* Drop cap for first paragraph */}
              <p className="first-letter:text-7xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:leading-none first-letter:text-foreground text-lg leading-relaxed mb-6">
                Access to clean drinking water is the most critical element of any survival situation. You can survive
                weeks without food, but only days without water. That's why having reliable water purification methods
                is non-negotiable for preppers.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Over the past six months, we've tested 15 different water purification methods in various
                conditions—from clear mountain streams to murky pond water. Here's what we learned.
              </p>

              <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mt-16 mb-6 text-foreground">
                The Three Main Categories
              </h2>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-12 mb-4 text-foreground">
                1. Physical Filters
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Physical filters work by forcing water through microscopic pores that trap bacteria, protozoa, and
                sediment. The best filters can remove particles as small as 0.1 microns.
              </p>

              <div className="bg-muted border-l-4 border-foreground p-6 my-8">
                <p className="font-semibold text-foreground mb-3">Pros:</p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li>• No chemicals or waiting time</li>
                  <li>• Can filter large quantities quickly</li>
                  <li>• Improves taste and clarity</li>
                  <li>• Long-term cost-effective</li>
                </ul>

                <p className="font-semibold text-foreground mb-3">Cons:</p>
                <ul className="space-y-2 text-foreground">
                  <li>• Can clog with sediment</li>
                  <li>• Requires maintenance</li>
                  <li>• Most don't remove viruses</li>
                  <li>• Can freeze and crack in cold weather</li>
                </ul>
              </div>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-12 mb-4 text-foreground">
                2. Chemical Treatment (Tablets)
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                Chemical purification uses iodine or chlorine dioxide to kill microorganisms. Tablets are lightweight
                and have a long shelf life.
              </p>

              <div className="bg-muted border-l-4 border-foreground p-6 my-8">
                <p className="font-semibold text-foreground mb-3">Pros:</p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li>• Extremely lightweight and portable</li>
                  <li>• Long shelf life (4-5 years)</li>
                  <li>• Kills viruses, bacteria, and protozoa</li>
                  <li>• No moving parts to break</li>
                </ul>

                <p className="font-semibold text-foreground mb-3">Cons:</p>
                <ul className="space-y-2 text-foreground">
                  <li>• 30-minute wait time</li>
                  <li>• Chemical taste</li>
                  <li>• Doesn't remove sediment or improve clarity</li>
                  <li>• Less effective in cold water</li>
                </ul>
              </div>

              <blockquote className="my-12 py-8 border-y border-border">
                <p className="font-serif text-2xl md:text-3xl font-light italic text-foreground text-center leading-relaxed">
                  "The best water purification system is the one you have with you when you need it."
                </p>
              </blockquote>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-12 mb-4 text-foreground">
                3. UV Light Purification
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                UV purifiers use ultraviolet light to destroy the DNA of microorganisms, rendering them unable to
                reproduce and cause illness.
              </p>

              <div className="bg-muted border-l-4 border-foreground p-6 my-8">
                <p className="font-semibold text-foreground mb-3">Pros:</p>
                <ul className="space-y-2 text-foreground mb-6">
                  <li>• Fast (60-90 seconds)</li>
                  <li>• No chemicals or taste change</li>
                  <li>• Kills viruses, bacteria, and protozoa</li>
                  <li>• Compact and easy to use</li>
                </ul>

                <p className="font-semibold text-foreground mb-3">Cons:</p>
                <ul className="space-y-2 text-foreground">
                  <li>• Requires batteries or charging</li>
                  <li>• Doesn't work in murky water</li>
                  <li>• Doesn't remove sediment</li>
                  <li>• Can break if dropped</li>
                </ul>
              </div>

              <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mt-16 mb-6 text-foreground">
                Our Testing Methodology
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                We tested each method with water samples from five different sources:
              </p>
              <ul className="space-y-3 text-lg text-foreground mb-6 ml-6">
                <li>• Clear mountain stream</li>
                <li>• Stagnant pond</li>
                <li>• River water with visible sediment</li>
                <li>• Rainwater collection</li>
                <li>• Tap water (control)</li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                Each sample was tested for bacterial contamination before and after treatment using standard water
                quality testing kits.
              </p>

              <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mt-16 mb-6 text-foreground">
                Top Recommendations
              </h2>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-12 mb-4 text-foreground">
                Best Overall: Sawyer Mini Water Filter
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                The Sawyer Mini consistently performed well across all water sources. It's affordable ($25), lightweight
                (2 oz), and can filter up to 100,000 gallons. The 0.1-micron filter removes 99.99999% of bacteria and
                protozoa.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Best for:</strong> Bug-out bags, hiking, everyday carry
              </p>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-12 mb-4 text-foreground">
                Best for International Travel: Aquatabs
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                When traveling to areas where viral contamination is a concern, chemical treatment is essential.
                Aquatabs are lightweight, effective against all pathogens including viruses, and have a 5-year shelf
                life.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Best for:</strong> International travel, backup purification,
                long-term storage
              </p>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-12 mb-4 text-foreground">
                Best for Base Camp: Katadyn Gravity BeFree
              </h3>
              <p className="text-lg leading-relaxed mb-6">
                For filtering large quantities at a base camp or bug-out location, gravity filters are unbeatable. The
                Katadyn BeFree can filter 10 liters in just 2-3 minutes with zero effort.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                <strong className="text-foreground">Best for:</strong> Base camps, family preparedness, group situations
              </p>

              <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mt-16 mb-6 text-foreground">
                The Bottom Line
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Don't rely on a single purification method. A layered approach is best:
              </p>
              <ul className="space-y-3 text-lg text-foreground mb-6 ml-6">
                <li>
                  <strong className="text-foreground">Primary:</strong> Quality filter (Sawyer, LifeStraw, Katadyn)
                </li>
                <li>
                  <strong className="text-foreground">Backup:</strong> Chemical tablets (Aquatabs, Potable Aqua)
                </li>
                <li>
                  <strong className="text-foreground">Emergency:</strong> Boiling (always works, requires fuel)
                </li>
              </ul>

              <p className="text-lg leading-relaxed mb-6">
                Remember: the best water purification system is the one you have with you when you need it. Invest in
                quality gear, learn how to use it properly, and always carry backup options.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex items-start gap-4">
                <img
                  src={article.author.avatar || "/placeholder.svg"}
                  alt={article.author.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1">About the Author</p>
                  <p className="font-serif text-xl font-semibold text-foreground mb-2">{article.author.name}</p>
                  <p className="text-muted-foreground leading-relaxed">{article.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="mt-12 p-6 bg-muted border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Affiliate Disclosure:</strong> This article contains affiliate
                links. If you purchase through these links, we may earn a commission at no additional cost to you. We
                only recommend products we've personally tested and believe in.
              </p>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-8 space-y-8">
              {/* Share Actions */}
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Share</p>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" size="sm" className="justify-start bg-transparent">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Article
                  </Button>
                </div>
              </div>

              {/* Premium CTA */}
              <Card className="p-6 bg-foreground text-background border-0">
                <div className="flex items-start gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[family-name:var(--font-bebas-neue)] text-lg font-bold mb-2">Premium Access</h3>
                    <p className="text-sm opacity-80 mb-4 leading-relaxed">
                      Get detailed testing data, comparison spreadsheets, and exclusive discount codes.
                    </p>
                    <Button asChild size="sm" className="w-full bg-background text-foreground hover:bg-background/90">
                      <Link href="/premium">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Related Articles */}
              <div>
                <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Related Reading</p>
                <div className="space-y-6">
                  {article.relatedPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <div className="aspect-video overflow-hidden mb-3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-serif font-semibold text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                        {post.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="lg:hidden mt-16 max-w-[680px]">
          <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl font-bold mb-8 text-foreground">
            Related Articles
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {article.relatedPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <div className="aspect-video overflow-hidden mb-3">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-serif font-semibold text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                  {post.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
