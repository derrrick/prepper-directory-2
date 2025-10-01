import { CheckCircle2, AlertTriangle, Heart, DollarSign, ClipboardList, Package, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import SiteHeader from "@/components/site-header"

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <article className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-12">
            <Badge variant="outline" className="mb-6 text-xs uppercase tracking-wider">
              Beginner's Guide
            </Badge>

            <h1 className="font-[family-name:var(--font-bebas-neue)] text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] text-foreground text-balance">
              How to Start Prepping: Your Complete Beginner's Guide
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light text-pretty">
              Evidence-backed preparedness in four practical steps. No fear-mongering, just smart planning.
            </p>

            <div className="flex items-center gap-6 text-sm text-muted-foreground border-t border-border pt-6">
              <span>Updated January 2025</span>
              <span>•</span>
              <span>15 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-4 sm:mx-0">
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src="/emergency-preparedness-supplies-organized-on-shelv.jpg"
                alt="Organized emergency preparedness supplies"
                className="w-full h-full object-cover"
              />
            </div>
            <figcaption className="text-sm text-muted-foreground italic mt-3 px-4 sm:px-0">
              Preparedness doesn't have to be overwhelming—start with the basics and build from there.
            </figcaption>
          </figure>

          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg leading-relaxed mb-6 first-letter:text-7xl first-letter:font-[family-name:var(--font-bebas-neue)] first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-foreground">
              So you're ready to start prepping and to be ready for any emergency or disaster? You're in the right
              place. This guide will walk you through the fundamentals of preparedness—what it actually means, what it
              takes to be prepared, and the practical steps to cover your bases.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Prepping can be easier than you think. We'll show you the basics of preparedness in four straightforward
              steps, backed by evidence and real-world experience. No conspiracy theories, no doomsday scenarios—just
              practical preparation for real emergencies.
            </p>
          </div>

          {/* Table of Contents */}
          <Card className="mb-16 bg-muted border-0">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide">
                What You'll Learn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav className="grid gap-3">
                <a href="#already-begun" className="text-primary hover:underline flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  You've Already Begun Prepping
                </a>
                <a href="#prioritize-risks" className="text-primary hover:underline flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Step 1: Prioritize Your Risks
                </a>
                <a href="#make-plan" className="text-primary hover:underline flex items-center gap-2">
                  <ClipboardList className="h-4 w-4" />
                  Step 2: Make a Plan
                </a>
                <a href="#starter-kits" className="text-primary hover:underline flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Step 3: Build Your Starter Kits
                </a>
                <a href="#train" className="text-primary hover:underline flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Step 4: Train and Practice
                </a>
              </nav>
            </CardContent>
          </Card>

          {/* Section 1: You've Already Begun */}
          <section id="already-begun" className="mb-16 scroll-mt-20">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mb-6 text-foreground">
              You've Already Begun Prepping
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Here's something that might surprise you: <strong>you're already a prepper</strong>. Don't believe us?
                Consider this:
              </p>

              <Card className="bg-muted border-0 my-8">
                <CardContent className="p-8">
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Do you have a savings account?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Do you have first aid supplies?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Do you have a smoke detector?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Do you have any insurance?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <span>Do you keep gas in your car?</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                All of these are preparations to avoid or mitigate disasters and emergencies. You don't need to use
                band-aids often, but you keep some on hand anyway. Buying the box before you get a cut is being
                prepared. <strong>Applying this principle to your life in a broad sense is prepping.</strong>
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground italic border-l-4 border-primary pl-6 my-8">
                "Preparedness is not about fear—it's about taking reasonable precautions against known risks. You
                already do this every day."
              </p>
            </div>
          </section>

          {/* Section 2: Prioritize Your Risks */}
          <section id="prioritize-risks" className="mb-16 scroll-mt-20">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Step 1: Prioritize Your Risks
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                What could possibly go wrong? At this point in your life, you've had a few things go wrong already.
                Experience is the greatest teacher, but you haven't encountered it all yet. There are so many things
                that can go wrong in life that we can't successfully list them all out.
              </p>

              <div className="my-8 rounded-lg overflow-hidden">
                <img
                  src="/risk-assessment-chart-with-probability-and-impact-.jpg"
                  alt="Risk assessment matrix"
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground italic mt-2">
                  Risk analysis helps you prioritize what to prepare for based on probability and impact.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                Understanding Risk Analysis
              </h3>

              <p className="text-lg leading-relaxed">
                It's not all doom and gloom, though. There is a whole section of science dedicated to figuring this all
                out called <strong>risk analysis</strong>. History and statistics combine to provide us with a pretty
                good idea of what could happen.
              </p>

              <p className="text-lg leading-relaxed">
                Insurance companies use these extensively—their actuaries regularly calculate and quantify risks to
                create insurance policies. Their profitability is a testament to the calculations working. The US
                military also uses risk analysis extensively for both combat scenarios and emergency management.
              </p>

              <Card className="bg-primary/5 border-0 my-8">
                <CardContent className="p-8">
                  <h4 className="font-bebas-neue text-xl tracking-wide mb-4">Common High-Priority Risks</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold mb-2">Natural Disasters</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Severe weather (location-dependent)</li>
                        <li>• Earthquakes (if in seismic zones)</li>
                        <li>• Floods and hurricanes</li>
                        <li>• Wildfires</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Personal Emergencies</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Job loss or income disruption</li>
                        <li>• Medical emergencies</li>
                        <li>• Home fires</li>
                        <li>• Power outages</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Infrastructure Failures</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Extended power outages</li>
                        <li>• Water supply disruptions</li>
                        <li>• Supply chain issues</li>
                        <li>• Communication breakdowns</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Economic Disruptions</h5>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Inflation and currency devaluation</li>
                        <li>• Banking system issues</li>
                        <li>• Market crashes</li>
                        <li>• Recession impacts</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <Heart className="h-6 w-6 text-primary" />
                Health and Fitness for Preppers
              </h3>

              <p className="text-lg leading-relaxed">
                When you think of preppers in the media, you may not picture a fit and healthy person. This is a common
                misconception since poor health and a low level of fitness can have an{" "}
                <strong>even greater impact</strong> during a disaster or emergency.
              </p>

              <p className="text-lg leading-relaxed">
                Your body is your most important survival tool. No amount of gear can compensate for poor health or low
                fitness levels. Consider these priorities:
              </p>

              <ul className="space-y-3 text-lg my-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Cardiovascular fitness:</strong> Can you walk several miles carrying a pack? Run if needed?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Strength and endurance:</strong> Can you lift heavy objects, move debris, or perform
                    physical labor for extended periods?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Chronic conditions:</strong> Do you have medications you depend on? What's your backup plan
                    if supply chains are disrupted?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span>
                    <strong>Mental health:</strong> Stress management and emotional resilience are critical in
                    emergencies.
                  </span>
                </li>
              </ul>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Financial Preparedness
              </h3>

              <p className="text-lg leading-relaxed">
                Financial preparedness is often overlooked but is one of the most practical forms of preparation. Most
                emergencies you'll face in life are financial in nature—job loss, medical bills, car repairs, home
                maintenance.
              </p>

              <Card className="bg-muted border-0 my-8">
                <CardContent className="p-8">
                  <h4 className="font-bebas-neue text-xl tracking-wide mb-4">Financial Preparedness Checklist</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Emergency fund:</strong> 3-6 months of expenses in easily accessible savings
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Reduce debt:</strong> High-interest debt is a vulnerability in any crisis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Diversify income:</strong> Multiple income streams provide resilience
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Physical cash:</strong> Keep some cash at home for when cards don't work
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <strong>Important documents:</strong> Copies of insurance, IDs, deeds in waterproof container
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Make a Plan */}
          <section id="make-plan" className="mb-16 scroll-mt-20">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Step 2: Make a Plan
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Once you understand your risks, it's time to make a plan. A good emergency plan doesn't need to be
                complicated—it just needs to answer the basic questions: What will you do? Where will you go? How will
                you communicate?
              </p>

              <div className="my-8 rounded-lg overflow-hidden">
                <img
                  src="/family-reviewing-emergency-evacuation-plan-togethe.jpg"
                  alt="Family planning for emergencies"
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground italic mt-2">
                  A solid plan involves everyone in your household and covers multiple scenarios.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                Essential Planning Components
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas-neue text-xl tracking-wide">Communication Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">How will your family stay in touch if separated?</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Designate an out-of-state contact person</li>
                      <li>• Establish meeting points (home, neighborhood, out-of-area)</li>
                      <li>• Keep a list of important phone numbers written down</li>
                      <li>• Consider alternative communication methods (ham radio, etc.)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas-neue text-xl tracking-wide">Evacuation Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">Know when to stay and when to go.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Identify multiple evacuation routes from your area</li>
                      <li>• Know where you'll go (family, friends, hotels, shelters)</li>
                      <li>• Keep vehicle fueled (at least half tank)</li>
                      <li>• Have go-bags ready for each family member</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas-neue text-xl tracking-wide">Shelter-in-Place Plan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">Sometimes staying home is the safest option.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Know how to shut off utilities (gas, water, electricity)</li>
                      <li>• Identify the safest room in your home</li>
                      <li>• Stock supplies for 2+ weeks without leaving</li>
                      <li>• Have backup heating/cooling options</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas-neue text-xl tracking-wide">Special Needs Planning</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm">Account for unique family requirements.</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Medications and medical equipment</li>
                      <li>• Infant and child care supplies</li>
                      <li>• Pet evacuation and care plans</li>
                      <li>• Elderly or disabled family member needs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-primary/5 border-0 my-8">
                <CardContent className="p-8">
                  <h4 className="font-bebas-neue text-xl tracking-wide mb-4">Action Item: Family Meeting</h4>
                  <p className="mb-4">
                    Schedule a family meeting this week to discuss your emergency plan. Make sure everyone knows:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Where the emergency supplies are kept</li>
                    <li>✓ The family meeting points</li>
                    <li>✓ The out-of-state contact person</li>
                    <li>✓ When to evacuate vs. shelter in place</li>
                    <li>✓ How to shut off utilities if needed</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Starter Kits */}
          <section id="starter-kits" className="mb-16 scroll-mt-20">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Step 3: Build Your Starter Kits
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Now that you have a plan, it's time to gather the supplies you'll need. Don't try to buy everything at
                once—build your preparedness gradually, starting with the essentials.
              </p>

              <div className="my-8 rounded-lg overflow-hidden">
                <img
                  src="/organized-emergency-kit-with-labeled-containers-an.jpg"
                  alt="Well-organized emergency kit"
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground italic mt-2">
                  Start with basic kits and expand over time as your budget allows.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                The 72-Hour Kit (Bug Out Bag)
              </h3>

              <p className="text-lg leading-relaxed">
                Your first priority should be a 72-hour emergency kit for each family member. This is designed to
                sustain you for three days if you need to evacuate quickly or if help is delayed.
              </p>

              <Card className="bg-muted border-0 my-8">
                <CardHeader>
                  <CardTitle className="font-bebas-neue text-xl tracking-wide">
                    Essential 72-Hour Kit Contents
                  </CardTitle>
                  <CardDescription>Per person - adjust quantities for family size</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-bold mb-3">Water & Food</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 1 gallon water per person per day (3 gallons total)</li>
                        <li>• Water purification tablets or filter</li>
                        <li>• Non-perishable, high-calorie foods</li>
                        <li>• Energy bars, nuts, dried fruit</li>
                        <li>• Manual can opener</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-3">Shelter & Warmth</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Emergency blanket or sleeping bag</li>
                        <li>• Rain poncho or tarp</li>
                        <li>• Extra clothing (weather appropriate)</li>
                        <li>• Sturdy shoes or boots</li>
                        <li>• Hand warmers (if cold climate)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-3">First Aid & Hygiene</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Comprehensive first aid kit</li>
                        <li>• Prescription medications (7-day supply)</li>
                        <li>• Personal hygiene items</li>
                        <li>• Toilet paper and wet wipes</li>
                        <li>• Hand sanitizer</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-3">Tools & Communication</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Flashlight with extra batteries</li>
                        <li>• Multi-tool or knife</li>
                        <li>• Emergency radio (hand-crank or battery)</li>
                        <li>• Whistle for signaling</li>
                        <li>• Waterproof matches or lighter</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-3">Documents & Money</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Copies of important documents</li>
                        <li>• Emergency contact information</li>
                        <li>• Cash in small bills</li>
                        <li>• Local maps</li>
                        <li>• USB drive with digital copies</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold mb-3">Miscellaneous</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Duct tape</li>
                        <li>• Paracord (50-100 feet)</li>
                        <li>• Plastic bags (various sizes)</li>
                        <li>• Paper and pencil</li>
                        <li>• Entertainment (cards, book)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                The Two-Week Home Kit
              </h3>

              <p className="text-lg leading-relaxed">
                After your 72-hour kit, focus on building supplies to shelter in place for two weeks. This covers most
                realistic emergency scenarios where you'll stay home but may lose power, water, or access to stores.
              </p>

              <Card className="bg-muted border-0 my-8">
                <CardHeader>
                  <CardTitle className="font-bebas-neue text-xl tracking-wide">
                    Two-Week Home Supply Priorities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-primary text-2xl">1</span>
                        Water Storage
                      </h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        1 gallon per person per day for 14 days (56 gallons for family of 4)
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Store-bought bottled water (easiest option)</li>
                        <li>• Water storage containers (food-grade)</li>
                        <li>• Water filtration system (Berkey, LifeStraw, etc.)</li>
                        <li>• Know your water heater holds 30-50 gallons</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-primary text-2xl">2</span>
                        Food Storage
                      </h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Focus on foods your family actually eats with long shelf life
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Canned goods (vegetables, fruits, meats, soups)</li>
                        <li>• Dried goods (rice, pasta, beans, oats)</li>
                        <li>• Peanut butter, honey, cooking oil</li>
                        <li>• Comfort foods and treats (morale matters)</li>
                        <li>• Pet food if applicable</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-primary text-2xl">3</span>
                        Power & Light
                      </h5>
                      <p className="text-sm text-muted-foreground mb-2">Prepare for extended power outages</p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Multiple flashlights and headlamps</li>
                        <li>• Batteries (lots of them, various sizes)</li>
                        <li>• Solar chargers for phones and devices</li>
                        <li>• Portable power station (optional but valuable)</li>
                        <li>• Candles and oil lamps (use safely)</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-primary text-2xl">4</span>
                        Heating & Cooking
                      </h5>
                      <p className="text-sm text-muted-foreground mb-2">Alternative methods when utilities are down</p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Camp stove with fuel (propane or butane)</li>
                        <li>• Charcoal grill (outdoor use only)</li>
                        <li>• Portable heater (propane, kerosene - ventilation critical)</li>
                        <li>• Extra blankets and warm clothing</li>
                        <li>• Firewood if you have a fireplace</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold mb-2 flex items-center gap-2">
                        <span className="text-primary text-2xl">5</span>
                        Sanitation
                      </h5>
                      <p className="text-sm text-muted-foreground mb-2">Often overlooked but critically important</p>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                        <li>• Toilet paper (lots of it)</li>
                        <li>• Portable toilet or bucket with bags</li>
                        <li>• Cleaning supplies and disinfectants</li>
                        <li>• Soap, shampoo, toothpaste</li>
                        <li>• Feminine hygiene products</li>
                        <li>• Garbage bags</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-0 my-8">
                <CardContent className="p-8">
                  <h4 className="font-bebas-neue text-xl tracking-wide mb-4">Budget-Friendly Building Strategy</h4>
                  <p className="mb-4">Don't feel pressured to buy everything at once. Build your supplies gradually:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <strong>Week 1-2:</strong> Focus on water storage and 72-hour kits
                    </li>
                    <li>
                      <strong>Week 3-4:</strong> Add one week of shelf-stable food
                    </li>
                    <li>
                      <strong>Month 2:</strong> Expand to two weeks of food, add lighting solutions
                    </li>
                    <li>
                      <strong>Month 3:</strong> Add cooking/heating alternatives, improve first aid
                    </li>
                    <li>
                      <strong>Ongoing:</strong> Rotate stock, upgrade gear, expand to 30+ days
                    </li>
                  </ul>
                  <p className="mt-4 text-sm">
                    <strong>Pro tip:</strong> Buy a few extra items each grocery trip. An extra $10-20 per week adds up
                    quickly without straining your budget.
                  </p>
                </CardContent>
              </Card>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                Specialized Kits to Consider
              </h3>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="text-lg font-bebas-neue tracking-wide">Vehicle Kit</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>Keep in your car at all times:</p>
                    <ul className="space-y-1 mt-2">
                      <li>• Water and snacks</li>
                      <li>• Blanket</li>
                      <li>• First aid kit</li>
                      <li>• Jumper cables</li>
                      <li>• Flashlight</li>
                      <li>• Basic tools</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="text-lg font-bebas-neue tracking-wide">Work/EDC Kit</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>Everyday carry essentials:</p>
                    <ul className="space-y-1 mt-2">
                      <li>• Small first aid kit</li>
                      <li>• Multi-tool</li>
                      <li>• Flashlight</li>
                      <li>• Water bottle</li>
                      <li>• Snacks</li>
                      <li>• Phone charger</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="text-lg font-bebas-neue tracking-wide">Pet Kit</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-1">
                    <p>Don't forget your animals:</p>
                    <ul className="space-y-1 mt-2">
                      <li>• 2 weeks of food</li>
                      <li>• Water and bowls</li>
                      <li>• Medications</li>
                      <li>• Leash/carrier</li>
                      <li>• Vet records</li>
                      <li>• Comfort items</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 5: Train and Practice */}
          <section id="train" className="mb-16 scroll-mt-20">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Step 4: Train and Practice
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Having supplies and a plan is only half the battle. You need to practice using your gear and executing
                your plans. This is where many preppers fall short—they buy equipment but never actually use it.
              </p>

              <div className="my-8 rounded-lg overflow-hidden">
                <img
                  src="/family-practicing-emergency-drill-outdoors-with-ca.jpg"
                  alt="Family practicing emergency skills"
                  className="w-full h-auto"
                />
                <p className="text-sm text-muted-foreground italic mt-2">
                  Regular practice turns plans into instincts and reveals gaps in your preparation.
                </p>
              </div>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                Essential Skills to Develop
              </h3>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas-neue text-xl tracking-wide">Basic Skills</CardTitle>
                    <CardDescription>Master these fundamentals first</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-bold text-foreground mb-1">First Aid & CPR</p>
                      <p>Take a certified course. This is your most important skill.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Fire Starting</p>
                      <p>Practice with matches, lighters, and alternative methods.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Water Purification</p>
                      <p>Know multiple methods: boiling, filtering, chemical treatment.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Food Preparation</p>
                      <p>Cook with your emergency stove. Try your stored foods.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted border-0">
                  <CardHeader>
                    <CardTitle className="font-bebas-neue text-xl tracking-wide">Intermediate Skills</CardTitle>
                    <CardDescription>Build on your foundation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-muted-foreground">
                    <div>
                      <p className="font-bold text-foreground mb-1">Navigation</p>
                      <p>Learn to use a map and compass. Don't rely only on GPS.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Basic Repairs</p>
                      <p>Plumbing, electrical, carpentry basics for home emergencies.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Food Preservation</p>
                      <p>Canning, dehydrating, fermenting for long-term storage.</p>
                    </div>
                    <div>
                      <p className="font-bold text-foreground mb-1">Self-Defense</p>
                      <p>Situational awareness and basic self-defense training.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                Practice Drills to Run
              </h3>

              <Card className="bg-muted border-0 my-8">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold mb-2">Monthly: Power Outage Drill</h5>
                      <p className="text-sm text-muted-foreground">
                        Turn off your main breaker for an evening. Practice cooking, lighting, and entertainment without
                        power. Time how long your phone batteries last. Test your backup power solutions.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Quarterly: Bug Out Drill</h5>
                      <p className="text-sm text-muted-foreground">
                        Set a timer for 15 minutes. See if your family can grab bug out bags and evacuate. Drive your
                        evacuation routes. Time how long it takes to reach your destination.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Quarterly: Camping Weekend</h5>
                      <p className="text-sm text-muted-foreground">
                        Use your emergency gear for a camping trip. This tests your equipment in a low-stakes
                        environment and builds skills. Plus, it's fun family time.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-bold mb-2">Annually: Full Emergency Simulation</h5>
                      <p className="text-sm text-muted-foreground">
                        Pick a weekend to live entirely off your emergency supplies. No grocery stores, no restaurants,
                        no modern conveniences. This reveals gaps in your preparation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mt-8 mb-4 text-foreground">
                Maintenance and Review
              </h3>

              <p className="text-lg leading-relaxed">
                Preparedness is not a one-time project—it requires ongoing maintenance and updates.
              </p>

              <Card className="bg-primary/5 border-0 my-8">
                <CardContent className="p-8">
                  <h4 className="font-bebas-neue text-xl tracking-wide mb-4">Regular Maintenance Schedule</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold mb-2">Every 6 Months:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Check expiration dates on food, water, medications</li>
                        <li>• Test batteries and replace as needed</li>
                        <li>• Review and update emergency contacts</li>
                        <li>• Rotate clothing for seasonal changes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2">Annually:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Full inventory of all supplies</li>
                        <li>• Update important documents and photos</li>
                        <li>• Reassess risks and adjust plans</li>
                        <li>• Upgrade or replace worn equipment</li>
                        <li>• Review insurance coverage</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <h2 className="font-[family-name:var(--font-bebas-neue)] text-3xl md:text-4xl font-bold mb-6 text-foreground">
              You're Ready to Begin
            </h2>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Congratulations—you now have a solid foundation for emergency preparedness. Remember, prepping is a
                journey, not a destination. You don't need to do everything at once, and you don't need to prepare for
                every possible scenario.
              </p>

              <p className="text-lg leading-relaxed">
                Start with the basics: assess your risks, make a plan, build your 72-hour kit, and practice your skills.
                Each step you take makes you more resilient and better prepared for whatever life throws your way.
              </p>

              <Card className="bg-primary/5 border-0 my-8">
                <CardContent className="p-8">
                  <h3 className="font-bebas-neue text-2xl tracking-wide mb-4">Your Next Steps</h3>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>
                        <strong>This week:</strong> Hold a family meeting to discuss emergency plans
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>
                        <strong>This month:</strong> Build your first 72-hour kit
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">3.</span>
                      <span>
                        <strong>Next 3 months:</strong> Expand to two weeks of home supplies
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-primary">4.</span>
                      <span>
                        <strong>Ongoing:</strong> Practice skills, maintain supplies, stay informed
                      </span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <Button size="lg" asChild>
                  <Link href="/tools">Try Our Food Storage Calculator</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/gear">Browse Recommended Gear</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Related Resources */}
          <section className="border-t border-border pt-12">
            <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl font-bold mb-6 text-foreground">
              Continue Learning
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-muted border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bebas-neue tracking-wide">Water Storage Guide</CardTitle>
                  <CardDescription>Essential resource</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deep dive into water storage methods, purification, and long-term solutions.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/blog">Read Guide →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bebas-neue tracking-wide">First Aid Essentials</CardTitle>
                  <CardDescription>Critical skills</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    What to include in your medical kit and basic first aid skills everyone should know.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/blog">Read Guide →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted border-0">
                <CardHeader>
                  <CardTitle className="text-lg font-bebas-neue tracking-wide">Gear Reviews</CardTitle>
                  <CardDescription>Tested equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Honest reviews of emergency gear, tools, and equipment from real-world testing.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary" asChild>
                    <Link href="/gear">Browse Gear →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </div>
  )
}
