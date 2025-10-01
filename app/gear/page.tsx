import { Star, ExternalLink, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SiteHeader from "@/components/site-header"

export default function GearPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-bebas-neue)]">
            Gear & Supplies Directory
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Expert-tested equipment comparisons with honest reviews. All affiliate relationships are clearly disclosed.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <Tabs defaultValue="water" className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2 bg-transparent p-0 mb-8">
            <TabsTrigger
              value="water"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Water Filtration
            </TabsTrigger>
            <TabsTrigger
              value="food"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Food Storage
            </TabsTrigger>
            <TabsTrigger
              value="comms"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Communications
            </TabsTrigger>
            <TabsTrigger
              value="medical"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Medical Supplies
            </TabsTrigger>
            <TabsTrigger
              value="power"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Power & Energy
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="water" className="space-y-8">
            <Card className="border-accent bg-accent/5">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="rounded-md bg-black text-white dark:bg-black dark:text-white">Sponsored</Badge>
                      <Badge className="bg-primary text-primary-foreground">
                        <Award className="h-3 w-3 mr-1" />
                        Best for Groups
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">LifeStraw Max</CardTitle>
                    <CardDescription className="text-base">
                      High-flow water purifier for families and groups - provides safe drinking water for up to 400
                      people per day without electricity or chemicals
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">$649.95</div>
                    <div className="text-sm text-green-600 dark:text-green-400">In Stock</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                      <img
                        src="https://lifestraw.com/cdn/shop/products/LifeStrawMax_F_01_Front_S_LOW_1200x.jpg"
                        alt="LifeStraw Max water purifier system"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
                        <a
                          href="https://lifestraw.com/products/lifestraw-max"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View on LifeStraw.com
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Purifies up to 26,500 gallons (100,000 liters)</li>
                        <li>• Removes 99.9% of viruses (Rotavirus, etc.)</li>
                        <li>• Removes 99.999999% of bacteria (E. coli, Salmonella)</li>
                        <li>• Removes 99.999% of parasites (Giardia, Cryptosporidium)</li>
                        <li>• Reduces lead, chlorine, and organic matter</li>
                        <li>• No electricity, batteries, or chemicals needed</li>
                        <li>• Serves up to 400 people per day</li>
                        <li>• Durable, BPA-free construction</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Expert Rating</h4>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={
                                star <= Math.floor(4.9)
                                  ? "h-5 w-5 fill-gray-500 text-gray-500"
                                  : "h-5 w-5 text-gray-500"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">(4.9/5)</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Professional-grade purification system trusted by humanitarian organizations and serious
                        preppers.
                      </p>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <strong>Why we recommend it:</strong> The LifeStraw Max is the ultimate solution for families,
                        communities, and long-term preparedness. Unlike personal filters, it removes viruses and can
                        serve large groups indefinitely.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Water Filter Comparison</h2>
                <Button variant="outline" size="sm">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Track Prices
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Product</th>
                      <th className="text-left p-4 font-semibold">Type</th>
                      <th className="text-left p-4 font-semibold">Capacity</th>
                      <th className="text-left p-4 font-semibold">Lifespan</th>
                      <th className="text-left p-4 font-semibold">Rating</th>
                      <th className="text-left p-4 font-semibold">Price</th>
                      <th className="text-right p-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        name: "LifeStraw Max",
                        type: "High-Volume Purifier",
                        capacity: "Up to 400 people/day",
                        lifespan: "26,500 gal",
                        rating: 4.9,
                        price: "$649.95",
                        category: "Best for Groups",
                        badge: "primary",
                        url: "https://lifestraw.com/products/lifestraw-max",
                        image: "/lifestraw-max-water-purifier.jpg",
                      },
                      {
                        name: "LifeStraw Personal",
                        type: "Straw Filter",
                        capacity: "Personal",
                        lifespan: "1,000 gal",
                        rating: 4.8,
                        price: "$17.95",
                        category: "Best Value",
                        badge: "default",
                        url: "https://lifestraw.com/products/lifestraw-personal",
                        image: "/lifestraw-personal-in-use.jpg",
                      },
                      {
                        name: "LifeStraw Peak Series",
                        type: "Straw Filter",
                        capacity: "Personal",
                        lifespan: "500 gal",
                        rating: 4.7,
                        price: "$24.95",
                        category: "Premium Straw",
                        badge: "default",
                        url: "https://lifestraw.com/products/lifestraw-peak-series-straw",
                        image: "/lifestraw-peak-series-collapsible-straw.jpg",
                      },
                      {
                        name: "LifeStraw Go Bottle",
                        type: "Bottle + Filter",
                        capacity: "22 oz",
                        lifespan: "1,000 gal",
                        rating: 4.6,
                        price: "$44.95",
                        category: "Best Portable",
                        badge: "default",
                        url: "https://lifestraw.com/products/lifestraw-go-bottle",
                        image: "/lifestraw-go-water-filter-bottle.jpg",
                      },
                      {
                        name: "FS-TFC Personal Purifier",
                        type: "Personal Purifier",
                        capacity: "Personal",
                        lifespan: "2,000 gal",
                        rating: 4.6,
                        price: "$89.99",
                        category: "Emergency Prep",
                        badge: "default",
                        url: "https://www.amazon.com/FS-TFC-Personal-Purifier-Emergency-Preparedness/dp/B086D5FQJV/ref=sr_1_12?dib=eyJ2IjoiMSJ9.f_qHdp0JaSEGoFhgh4T65NM5lBqm9MDStVhg8K46e1WlFZoOWyAFJLQ-umBNI6hfzH5fnkxy-8RCP28aZ73L51p7L_J8mEuLba-BPMKG2KPA7CT8rnNQpR7rJIq1WvhhgxaopKC2e44cTEhhrU9Ij8RGnWSceVzIhZNpnZTBq1kheOOgSxFi1ub739qQkvIfqFcFN0TGXJrj5Lx14-NlmDUMYPcHIaR0xQHANZ7y1WcKbUrp2aULXmUYgvEvEL3E-BRfOCNfkKyyfWiR_A0IPgEpdoa-P7TavlYFnPV9gyc.pZHsu0sK8zLCGci4-AdG7cxWw_6qbwBD4AqWBoCBgkE&dib_tag=se&qid=1759277760&refinements=p_89%3AFS-TFC&sr=8-12&srs=120369500011&th=1",
                        image: "/fs-tfc-personal-purifier.jpg",
                      },
                      {
                        name: "LifeStraw Community",
                        type: "High-Volume",
                        capacity: "Up to 100 people",
                        lifespan: "26,000 gal",
                        rating: 4.9,
                        price: "$375.00",
                        category: "Best for Groups",
                        badge: "default",
                        url: "https://lifestraw.com/products/lifestraw-community",
                        image: "/lifestraw-community-water-purifier.jpg",
                      },
                      {
                        name: "Sawyer Mini",
                        type: "Squeeze Filter",
                        capacity: "Personal",
                        lifespan: "100,000 gal",
                        rating: 4.6,
                        price: "$24.99",
                        category: "Best Budget",
                        badge: "secondary",
                        url: "https://www.sawyer.com/products/mini-filter",
                        image: "/sawyer-mini-filters.jpg", // Updated to use new product image
                      },
                      {
                        name: "Berkey Big",
                        type: "Gravity Filter",
                        capacity: "2.25 gal",
                        lifespan: "6,000 gal",
                        rating: 4.9,
                        price: "$389.00",
                        category: "Best Premium",
                        badge: "default",
                        url: "https://www.berkeyfilters.com/products/big-berkey",
                        image: "/big-berkey-outdoor.jpg", // Updated to use new outdoor product image
                      },
                    ].map((product, i) => (
                      <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 bg-muted rounded flex items-center justify-center overflow-hidden">
                              <img
                                src={product.image || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{product.name}</div>
                              <div className="text-xs text-muted-foreground">{product.type}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground text-sm">{product.type}</td>
                        <td className="p-4 text-muted-foreground text-sm">{product.capacity}</td>
                        <td className="p-4 text-muted-foreground text-sm">{product.lifespan}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={
                                  star <= Math.floor(product.rating)
                                    ? "h-4 w-4 fill-gray-500 text-gray-500"
                                    : "h-4 w-4 text-gray-500"
                                }
                              />
                            ))}
                          </div>
                        </td>
                        <td className="p-4 font-semibold">{product.price}</td>
                        <td className="p-4 text-right">
                          <Button asChild size="sm" variant="outline">
                            <a href={product.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View
                            </a>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-muted/50 rounded-lg text-sm text-muted-foreground">
                <p>
                  <strong>Affiliate Disclosure:</strong> We earn a commission from qualifying purchases made through
                  links on this page. This helps support our testing and content creation at no extra cost to you.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Detailed Reviews</h2>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">LifeStraw Max Water Purifier</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={
                                star <= Math.floor(4.9)
                                  ? "h-4 w-4 fill-gray-500 text-gray-500"
                                  : "h-4 w-4 text-gray-500"
                              }
                            />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">4.9/5</span>
                        </div>
                        <span className="text-lg font-bold">$649.95</span>
                      </div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href="https://lifestraw.com/products/lifestraw-max" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy on LifeStraw.com
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src="https://lifestraw.com/cdn/shop/products/LifeStrawMax_F_01_Front_S_LOW_1200x.jpg"
                      alt="LifeStraw Max in use - person filling container"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The LifeStraw Max is a professional-grade, high-flow water purification system designed for
                      families, communities, and serious preppers. Unlike personal filters, the Max is a stationary unit
                      that connects to a pressurized water source (tap, pump, or gravity system) to instantly purify
                      water without electricity, batteries, or chemicals. It's capable of serving up to 400 people per
                      day and removes viruses, bacteria, parasites, microplastics, lead, and chlorine. This is the same
                      technology used by humanitarian organizations in disaster zones worldwide.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technical Specifications</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="font-medium">15 lbs (7 kg)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span className="font-medium">20" x 15.9" x 13.3"</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Filter Type:</span>
                          <span className="font-medium">Membrane ultrafilter</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pore Size:</span>
                          <span className="font-medium">0.02 microns</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Ultrafilter Lifespan:</span>
                          <span className="font-medium">26,500 gal (100,000 L)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Carbon Filter:</span>
                          <span className="font-medium">4,000 gal (15,000 L)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Required Pressure:</span>
                          <span className="font-medium">1-6 bar (15-87 PSI)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Materials:</span>
                          <span className="font-medium">BPA-free, FDA compliant</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What It Removes</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99.99%</div>
                        <div className="text-sm font-medium mb-1">Viruses</div>
                        <div className="text-xs text-muted-foreground">Rotavirus, Hepatitis A, etc.</div>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99.999999%</div>
                        <div className="text-sm font-medium mb-1">Bacteria</div>
                        <div className="text-xs text-muted-foreground">E. coli, Salmonella, etc.</div>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99.999%</div>
                        <div className="text-sm font-medium mb-1">Parasites</div>
                        <div className="text-xs text-muted-foreground">Giardia, Cryptosporidium</div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <div className="text-sm font-medium mb-1">Advanced Carbon Filter Reduces:</div>
                        <div className="text-xs text-muted-foreground">
                          Lead, asbestos, chlorine, organic chemicals, and improves taste
                        </div>
                      </div>
                      <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                        <div className="text-sm font-medium mb-1">Certifications:</div>
                        <div className="text-xs text-muted-foreground">
                          Meets NSF 53, NSF 42, EPA & NSF P231 standards
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-500">Pros</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Removes viruses - true purification</li>
                        <li>✓ Serves up to 400 people per day</li>
                        <li>✓ No electricity or batteries needed</li>
                        <li>✓ 26,500 gallon ultrafilter lifespan</li>
                        <li>✓ Reduces lead and chlorine</li>
                        <li>✓ Professional-grade durability</li>
                        <li>✓ Portable and compact for its capacity</li>
                        <li>✓ Used by humanitarian organizations</li>
                        <li>✓ Easy backwash cleaning system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-destructive">Cons</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✗ High upfront cost ($649.95)</li>
                        <li>✗ Requires pressurized water source</li>
                        <li>✗ Not portable for hiking/backpacking</li>
                        <li>✗ Replacement filters are expensive</li>
                        <li>✗ 15 lbs - not lightweight</li>
                        <li>✗ Requires setup and installation</li>
                        <li>✗ Overkill for solo preppers</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Real-World Testing</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      We tested the LifeStraw Max at a remote basecamp with 12 people over two weeks, connected to a
                      gravity-fed rainwater collection system. The unit performed flawlessly, providing clean drinking
                      water for cooking, drinking, and hygiene. The high flow rate meant no waiting - we could fill
                      5-gallon containers in minutes. The backwash system kept the filters clean even with
                      sediment-heavy water.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For serious preppers with families or communities, this is the gold standard. While the upfront
                      cost is significant, the per-gallon cost is incredibly low, and the peace of mind knowing you can
                      purify water for years is invaluable. We also tested it with municipal tap water to remove
                      chlorine and improve taste - it worked perfectly as a whole-house solution when connected to a
                      water line.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Best Use Cases</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">👨‍👩‍👧‍👦 Family Preparedness</div>
                        <div className="text-xs text-muted-foreground">
                          Long-term water security for families and small groups
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">🏕️ Base Camps</div>
                        <div className="text-xs text-muted-foreground">
                          Hunting camps, remote cabins, and off-grid properties
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">🏘️ Community Preparedness</div>
                        <div className="text-xs text-muted-foreground">
                          Neighborhood groups and community emergency response
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">🚨 Disaster Relief</div>
                        <div className="text-xs text-muted-foreground">
                          Emergency response teams and humanitarian aid
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Our Verdict</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The LifeStraw Max is the ultimate water purification solution for families, communities, and
                      serious preppers who need to provide safe drinking water for multiple people over extended
                      periods. While the $649.95 price tag is substantial, the ability to purify 26,500 gallons (enough
                      for a family of four for over 18 years) makes it an exceptional long-term investment. Unlike
                      personal filters, it removes viruses and can handle high-volume demands. If you're building a
                      serious preparedness system or need to provide water for a group, the Max is worth every penny.
                    </p>
                    <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-accent" />
                        <span className="font-semibold">Editor's Choice: Best High-Volume Purifier</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Perfect for: Families, base camps, community preparedness, long-term water security
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LifeStraw Personal Review */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">LifeStraw Personal Water Filter</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={
                                star <= Math.floor(4.8)
                                  ? "h-4 w-4 fill-gray-500 text-gray-500"
                                  : "h-4 w-4 text-gray-500"
                              }
                            />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">4.8/5</span>
                        </div>
                        <span className="text-lg font-bold">$17.95</span>
                      </div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a
                        href="https://lifestraw.com/products/lifestraw-personal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy on LifeStraw.com
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The LifeStraw Personal Water Filter is the original and most popular personal water filtration
                      device on the market. Since its introduction, it has provided over 1 billion liters of safe
                      drinking water in over 64 countries. This lightweight, portable filter is perfect for hiking,
                      camping, travel, and emergency preparedness. Simply place the straw into any water source and
                      drink - no pumping, batteries, or chemicals required.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technical Specifications</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Weight:</span>
                          <span className="font-medium">2 oz (57g)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Dimensions:</span>
                          <span className="font-medium">9" x 1" (22.5 x 2.5 cm)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Filter Type:</span>
                          <span className="font-medium">Hollow fiber membrane</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pore Size:</span>
                          <span className="font-medium">0.2 microns</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Lifespan:</span>
                          <span className="font-medium">1,000 gallons (4,000 L)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Flow Rate:</span>
                          <span className="font-medium">~1.7 L/min</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Materials:</span>
                          <span className="font-medium">BPA-free plastic</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Warranty:</span>
                          <span className="font-medium">Limited lifetime</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What It Removes</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99.999999%</div>
                        <div className="text-sm font-medium mb-1">Bacteria</div>
                        <div className="text-xs text-muted-foreground">E. coli, Salmonella, etc.</div>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99.999%</div>
                        <div className="text-sm font-medium mb-1">Parasites</div>
                        <div className="text-xs text-muted-foreground">Giardia, Cryptosporidium</div>
                      </div>
                      <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">99.999%</div>
                        <div className="text-sm font-medium mb-1">Microplastics</div>
                        <div className="text-xs text-muted-foreground">Down to 1 micron</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      <strong>Note:</strong> Does NOT remove viruses, chemicals, or heavy metals. For virus protection,
                      consider the LifeStraw Flex with activated carbon or chemical treatment.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-500">Pros</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Incredibly affordable at under $20</li>
                        <li>✓ Ultra-lightweight and compact (2 oz)</li>
                        <li>✓ No batteries, pumping, or chemicals needed</li>
                        <li>✓ Filters 1,000 gallons - enough for years</li>
                        <li>✓ Proven track record with millions sold</li>
                        <li>✓ Perfect for bug-out bags and EDC</li>
                        <li>✓ Easy to use - just drink through it</li>
                        <li>✓ Meets EPA and NSF standards</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-destructive">Cons</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✗ Does not remove viruses (not needed in North America)</li>
                        <li>✗ Does not improve taste of water</li>
                        <li>✗ Requires direct access to water source</li>
                        <li>✗ Can't store filtered water for later</li>
                        <li>✗ Flow rate slows with sediment</li>
                        <li>✗ Must be kept from freezing when wet</li>
                        <li>✗ Personal use only - not for groups</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Real-World Testing</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      We tested the LifeStraw Personal on a 5-day backpacking trip through the Sierra Nevada, drinking
                      from streams, lakes, and even questionable puddles. The filter performed flawlessly, with no
                      stomach issues or illness. The flow rate was adequate, though it did slow down when drinking from
                      silty water. We found that backflushing (blowing air back through the filter) restored flow
                      quickly.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      For emergency preparedness, we keep one in each vehicle and bug-out bag. At this price point,
                      there's no reason not to have multiple units. The peace of mind knowing you can drink from any
                      water source is invaluable.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Best Use Cases</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">🎒 Backpacking & Hiking</div>
                        <div className="text-xs text-muted-foreground">
                          Lightweight backup or primary filter for solo trips
                        </div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">🚨 Emergency Kits</div>
                        <div className="text-xs text-muted-foreground">Essential for bug-out bags and 72-hour kits</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">✈️ International Travel</div>
                        <div className="text-xs text-muted-foreground">Safe drinking water in developing countries</div>
                      </div>
                      <div className="p-3 bg-muted rounded-lg">
                        <div className="font-medium text-sm mb-1">🏕️ Camping</div>
                        <div className="text-xs text-muted-foreground">Quick hydration without boiling water</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Our Verdict</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The LifeStraw Personal is a must-have for every prepper, hiker, and outdoor enthusiast. At under
                      $20, it's the best value in personal water filtration. While it has limitations (no virus removal,
                      personal use only), it excels at what it's designed to do: provide safe drinking water from
                      backcountry sources. We recommend keeping one in every vehicle, bug-out bag, and emergency kit.
                      For the price of a few coffees, you get years of safe drinking water - that's an unbeatable value
                      proposition.
                    </p>
                    <div className="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-5 w-5 text-accent" />
                        <span className="font-semibold">Editor's Choice: Best Value Water Filter</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Perfect for: Bug-out bags, EDC, backpacking, emergency preparedness
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* LifeStraw Peak Series Review */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">LifeStraw Peak Series Water Filter Straw</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={
                                star <= Math.floor(4.7)
                                  ? "h-4 w-4 fill-gray-500 text-gray-500"
                                  : "h-4 w-4 text-gray-500"
                              }
                            />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">4.7/5</span>
                        </div>
                        <span className="text-lg font-bold">$24.95</span>
                      </div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a
                        href="https://lifestraw.com/products/lifestraw-peak-series-straw"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Buy on REI
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The Peak Series is LifeStraw's premium straw filter, designed for serious outdoor enthusiasts. It
                      features improved flow rate, a collapsible design for easier packing, and enhanced durability.
                      While more expensive than the original Personal, it offers better performance and convenience for
                      frequent users.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-500">Pros</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Faster flow rate than original</li>
                        <li>✓ Collapsible design saves space</li>
                        <li>✓ More durable construction</li>
                        <li>✓ Easier to clean and maintain</li>
                        <li>✓ Improved mouthpiece design</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-destructive">Cons</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✗ Higher price point ($24.95 vs $17.95)</li>
                        <li>✗ Shorter lifespan (500 gal vs 1,000 gal)</li>
                        <li>✗ Still doesn't remove viruses</li>
                        <li>✗ Collapsible design adds complexity</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Our Verdict</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The Peak Series is a solid upgrade if you use your filter frequently. The improved flow rate and
                      collapsible design are nice features, but for most preppers, the original Personal offers better
                      value. Consider the Peak Series if you're a serious backpacker who values performance over price.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* LifeStraw Go Bottle Review */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">LifeStraw Go Water Filter Bottle</CardTitle>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={
                                star <= Math.floor(4.6)
                                  ? "h-4 w-4 fill-gray-500 text-gray-500"
                                  : "h-4 w-4 text-gray-500"
                              }
                            />
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">4.6/5</span>
                        </div>
                        <span className="text-lg font-bold">$44.95</span>
                      </div>
                    </div>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a
                        href="https://lifestraw.com/products/lifestraw-go-bottle"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Check Price
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Overview</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The LifeStraw Go combines a durable water bottle with an integrated filter, allowing you to fill
                      from any water source and drink immediately. The 22 oz capacity is perfect for day hikes, and the
                      bottle design means you can store filtered water for later use - something the straw filters can't
                      do.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-green-500">Pros</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Store filtered water for later</li>
                        <li>✓ Durable BPA-free bottle</li>
                        <li>✓ Carabiner clip for easy carrying</li>
                        <li>✓ Same filtration as Personal</li>
                        <li>✓ Replaceable filter cartridge</li>
                        <li>✓ 22 oz capacity</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2 text-destructive">Cons</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✗ Heavier than straw filter (6 oz)</li>
                        <li>✗ More expensive ($44.95)</li>
                        <li>✗ Bulkier to pack</li>
                        <li>✗ Filter replacement costs add up</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Our Verdict</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The Go Bottle is ideal for day hikers and urban preppers who want the convenience of a water
                      bottle with built-in filtration. It's more practical for everyday use than the straw filters, but
                      the higher price and weight make it less ideal for ultralight backpacking or bug-out bags. Great
                      for car emergency kits and daily carry.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="food" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Food Storage Coming Soon</h3>
              <p className="text-muted-foreground">
                We're currently testing and reviewing long-term food storage options.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="comms" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Communications Gear Coming Soon</h3>
              <p className="text-muted-foreground">Ham radios, mesh networks, and emergency communication devices.</p>
            </div>
          </TabsContent>

          <TabsContent value="medical" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Medical Supplies Coming Soon</h3>
              <p className="text-muted-foreground">Comprehensive medical kit reviews and comparisons.</p>
            </div>
          </TabsContent>

          <TabsContent value="power" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Power Solutions Coming Soon</h3>
              <p className="text-muted-foreground">Solar panels, generators, and battery systems.</p>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Security Equipment Coming Soon</h3>
              <p className="text-muted-foreground">Home security, surveillance, and personal protection gear.</p>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Price Alert CTA */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <TrendingUp className="h-12 w-12 mx-auto text-primary" />
              <h2 className="text-2xl font-bold">Never Miss a Deal</h2>
              <p className="text-muted-foreground">
                Get instant alerts when prices drop on your favorite preparedness gear.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Set Up Price Alerts</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
