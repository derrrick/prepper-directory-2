"use client"

import type React from "react"

import { useState } from "react"
import {
  Calculator,
  Droplets,
  Package,
  CheckCircle,
  Download,
  AlertTriangle,
  DollarSign,
  Home,
  Users,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import LeadMagnetModal from "@/components/lead-magnet-modal"
import { subscribeToNewsletter } from "@/app/actions/newsletter"

export default function ToolsPage() {
  const [householdSize, setHouseholdSize] = useState("4")
  const [duration, setDuration] = useState("90")
  const [dietType, setDietType] = useState("standard")
  const [showResults, setShowResults] = useState(false)
  const [showLeadMagnet, setShowLeadMagnet] = useState(false)
  const [waterPeople, setWaterPeople] = useState("4")
  const [waterDays, setWaterDays] = useState("30")
  const [waterClimate, setWaterClimate] = useState("moderate")
  const [showWaterResults, setShowWaterResults] = useState(false)

  const [checklistScenario, setChecklistScenario] = useState("basic")
  const [checklistDuration, setChecklistDuration] = useState("72-hour")
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const [updateEmail, setUpdateEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const calculateFood = () => {
    const size = Number.parseInt(householdSize)
    const days = Number.parseInt(duration)

    if (isNaN(size) || size < 1 || size > 20) {
      alert("Please enter a valid household size (1-20 people)")
      return
    }

    if (isNaN(days) || days < 1 || days > 730) {
      alert("Please enter a valid duration (1-730 days)")
      return
    }

    setShowResults(true)
  }

  const calculateWater = () => {
    const people = Number.parseInt(waterPeople)
    const days = Number.parseInt(waterDays)

    if (isNaN(people) || people < 1 || people > 20) {
      alert("Please enter a valid number of people (1-20)")
      return
    }

    if (isNaN(days) || days < 1 || days > 365) {
      alert("Please enter a valid duration (1-365 days)")
      return
    }

    setShowWaterResults(true)
  }

  const downloadResults = () => {
    setShowLeadMagnet(true)
  }

  const handleUpdatesSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    const result = await subscribeToNewsletter(updateEmail, "premium-tools-updates")

    if (result.success) {
      setSubmitMessage({ type: "success", text: result.message || "Thanks! We'll keep you updated." })
      setUpdateEmail("")
    } else {
      setSubmitMessage({ type: "error", text: result.error || "Something went wrong. Please try again." })
    }

    setIsSubmitting(false)
  }

  // Calculate food storage needs
  const caloriesPerPerson = dietType === "high-activity" ? 2500 : dietType === "low-activity" ? 1800 : 2000
  const totalCalories = Number.parseInt(householdSize) * Number.parseInt(duration) * caloriesPerPerson
  const totalPounds = Math.round(totalCalories / 1650)

  const estimatedCost = Math.round(totalPounds * 3.5) // Rough estimate: $3.50 per pound
  const storageSpace = Math.round(totalPounds / 40) // Rough estimate: 40 lbs per cubic foot

  // Calculate water needs
  const waterPerPersonPerDay = waterClimate === "hot" ? 1.5 : waterClimate === "cold" ? 0.75 : 1
  const totalWaterGallons = Math.round(Number.parseInt(waterPeople) * Number.parseInt(waterDays) * waterPerPersonPerDay)
  const waterContainers = Math.ceil(totalWaterGallons / 5)
  const waterCost = Math.round(waterContainers * 15) // $15 per 5-gallon container

  const checklistCategories = {
    basic: {
      "Water & Food": [
        "1 gallon water per person per day (3-day supply)",
        "Non-perishable food (3-day supply)",
        "Manual can opener",
        "Paper plates, cups, and utensils",
      ],
      "First Aid & Medications": [
        "First aid kit",
        "Prescription medications (7-day supply)",
        "Over-the-counter medications (pain relievers, anti-diarrhea)",
        "Medical supplies (glasses, hearing aids, etc.)",
      ],
      "Tools & Supplies": [
        "Battery-powered or hand-crank radio (NOAA Weather Radio)",
        "Flashlight and extra batteries",
        "Whistle (to signal for help)",
        "Dust masks or N95 respirators",
        "Plastic sheeting and duct tape",
        "Moist towelettes and garbage bags",
        "Wrench or pliers (to turn off utilities)",
        "Local maps",
      ],
      "Documents & Communication": [
        "Copies of important documents (insurance, ID, bank records)",
        "Cell phone with chargers and backup battery",
        "Emergency contact list",
        "Cash and credit cards",
      ],
      "Personal Items": [
        "Change of clothing and sturdy shoes",
        "Sleeping bag or blanket per person",
        "Personal hygiene items",
        "Infant formula and diapers (if applicable)",
        "Pet food and supplies (if applicable)",
      ],
    },
    extended: {
      "Water & Food": [
        "1 gallon water per person per day (30-day supply)",
        "Long-term food storage (30-day supply)",
        "Water purification tablets or filter",
        "Cooking equipment (camp stove, fuel)",
        "Food storage containers",
        "Vitamins and supplements",
      ],
      "Shelter & Warmth": [
        "Tent or tarp",
        "Emergency blankets (mylar)",
        "Hand warmers and heat packs",
        "Extra clothing layers",
        "Rain gear and waterproof boots",
        "Sleeping pads",
      ],
      "Power & Light": [
        "Solar charger or generator",
        "Extra batteries (various sizes)",
        "LED lanterns",
        "Glow sticks",
        "Candles and matches (waterproof)",
      ],
      Sanitation: [
        "Portable toilet or bucket with bags",
        "Toilet paper and paper towels",
        "Soap and hand sanitizer",
        "Bleach for water treatment",
        "Feminine hygiene products",
        "Trash bags",
      ],
      "Security & Defense": [
        "Personal protection items",
        "Door/window reinforcement supplies",
        "Pepper spray or bear spray",
        "Two-way radios",
      ],
    },
    bugout: {
      "The Bag": ["Durable backpack (40-65L capacity)", "Rain cover for pack", "Compression sacks"],
      "Survival Essentials": [
        "Water filter or purification system",
        "3-day food supply (freeze-dried meals)",
        "Fire starter kit (matches, lighter, ferro rod)",
        "Multi-tool or survival knife",
        "Paracord (50-100 feet)",
        "Emergency shelter (tent or tarp)",
        "Sleeping bag (appropriate for climate)",
        "Sleeping pad",
      ],
      "Navigation & Communication": [
        "Compass and maps",
        "GPS device (with extra batteries)",
        "Emergency whistle",
        "Signal mirror",
        "Two-way radio",
      ],
      "Medical & Hygiene": [
        "Compact first aid kit",
        "Prescription medications",
        "Water purification tablets",
        "Toilet paper and trowel",
        "Soap and sanitizer",
      ],
      Clothing: [
        "Extra socks and underwear",
        "Weather-appropriate layers",
        "Rain jacket and pants",
        "Hat and gloves",
        "Sturdy boots (already worn)",
      ],
    },
  }

  const currentChecklist = checklistCategories[checklistScenario as keyof typeof checklistCategories]

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-[family-name:var(--font-bebas-neue)]">
            Prep Calculators
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Free tools to help you plan your emergency supplies. Calculate exactly what you need based on your household
            size, location, and threat level.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-primary">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Food Storage Calculator</CardTitle>
              <CardDescription>Calculate exactly what you need for your household</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Free</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Water Storage Calculator</CardTitle>
              <CardDescription>Plan your water reserves with cost estimates</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Free</Badge>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Emergency Kit Checklist</CardTitle>
              <CardDescription>Customizable checklists for any scenario</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary">Free</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Calculator Tabs */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <Tabs defaultValue="food" className="w-full">
          <TabsList className="w-full justify-start mb-8">
            <TabsTrigger value="food">Food Storage</TabsTrigger>
            <TabsTrigger value="water">Water Storage</TabsTrigger>
            <TabsTrigger value="checklist">Kit Checklist</TabsTrigger>
          </TabsList>

          {/* Food Storage Calculator */}
          <TabsContent value="food" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Calculate Your Needs</CardTitle>
                  <CardDescription>Enter your household details to get personalized recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="household-size">Household Size</Label>
                    <Select value={householdSize} onValueChange={setHouseholdSize}>
                      <SelectTrigger id="household-size">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4 people</SelectItem>
                        <SelectItem value="5">5 people</SelectItem>
                        <SelectItem value="6">6 people</SelectItem>
                        <SelectItem value="8">8 people</SelectItem>
                        <SelectItem value="10">10+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration">Storage Duration (days)</Label>
                    <Select value={duration} onValueChange={setDuration}>
                      <SelectTrigger id="duration">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 days (72 hours)</SelectItem>
                        <SelectItem value="7">1 week (7 days)</SelectItem>
                        <SelectItem value="14">2 weeks (14 days)</SelectItem>
                        <SelectItem value="30">1 month (30 days)</SelectItem>
                        <SelectItem value="90">3 months (90 days)</SelectItem>
                        <SelectItem value="180">6 months (180 days)</SelectItem>
                        <SelectItem value="365">1 year (365 days)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="diet-type">Activity Level</Label>
                    <Select value={dietType} onValueChange={setDietType}>
                      <SelectTrigger id="diet-type">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low-activity">Low Activity (1,800 cal/day)</SelectItem>
                        <SelectItem value="standard">Standard (2,000 cal/day)</SelectItem>
                        <SelectItem value="high-activity">High Activity (2,500 cal/day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={calculateFood}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Storage Needs
                  </Button>
                </CardContent>
              </Card>

              {showResults && (
                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle>Your Food Storage Plan</CardTitle>
                    <CardDescription>
                      For {householdSize} {Number.parseInt(householdSize) === 1 ? "person" : "people"} over {duration}{" "}
                      days
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground">Total Calories Needed</div>
                          <div className="text-2xl font-bold">{totalCalories.toLocaleString()}</div>
                        </div>
                        <CheckCircle className="h-8 w-8 text-primary" />
                      </div>

                      <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <div className="text-sm text-muted-foreground">Estimated Food Weight</div>
                          <div className="text-2xl font-bold">{totalPounds} lbs</div>
                        </div>
                        <Package className="h-8 w-8 text-accent" />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="text-sm text-muted-foreground">Estimated Cost</div>
                          <div className="text-xl font-bold">${estimatedCost}</div>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="text-sm text-muted-foreground">Storage Space</div>
                          <div className="text-xl font-bold">{storageSpace} cu ft</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold">Recommended Breakdown:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Grains (rice, pasta, oats)</span>
                          <span className="font-medium">{Math.round(totalPounds * 0.35)} lbs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Proteins (beans, canned meat)</span>
                          <span className="font-medium">{Math.round(totalPounds * 0.25)} lbs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fruits & Vegetables (canned/dried)</span>
                          <span className="font-medium">{Math.round(totalPounds * 0.2)} lbs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Fats & Oils (cooking oil, peanut butter)</span>
                          <span className="font-medium">{Math.round(totalPounds * 0.1)} lbs</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Other (sugar, salt, spices)</span>
                          <span className="font-medium">{Math.round(totalPounds * 0.1)} lbs</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-accent" />
                        Storage Tips
                      </h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Store in cool, dry, dark location (50-70°F ideal)</li>
                        <li>• Use airtight containers to prevent pests</li>
                        <li>• Rotate stock: First In, First Out (FIFO)</li>
                        <li>• Label everything with purchase/expiry dates</li>
                      </ul>
                    </div>

                    <Button onClick={downloadResults} className="w-full bg-transparent" variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download Detailed Shopping List
                    </Button>

                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold mb-3">Recommended Products:</h4>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-between bg-transparent" asChild>
                          <Link href="/gear">
                            <span>View Food Storage Containers</span>
                            <span className="text-xs text-muted-foreground">Affiliate</span>
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-between bg-transparent" asChild>
                          <Link href="/gear">
                            <span>Browse Long-Term Food Kits</span>
                            <span className="text-xs text-muted-foreground">Affiliate</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>

          {/* Water Storage Calculator */}
          <TabsContent value="water" className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Calculate Water Needs</CardTitle>
                  <CardDescription>Plan your water storage based on household size and climate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="water-people">Number of People</Label>
                    <Input
                      id="water-people"
                      type="number"
                      min="1"
                      max="20"
                      value={waterPeople}
                      onChange={(e) => setWaterPeople(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="water-days">Duration (days)</Label>
                    <Input
                      id="water-days"
                      type="number"
                      min="1"
                      max="365"
                      value={waterDays}
                      onChange={(e) => setWaterDays(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="climate">Climate</Label>
                    <Select value={waterClimate} onValueChange={setWaterClimate}>
                      <SelectTrigger id="climate">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cold">Cold (0.75 gal/person/day)</SelectItem>
                        <SelectItem value="moderate">Moderate (1 gal/person/day)</SelectItem>
                        <SelectItem value="hot">Hot (1.5 gal/person/day)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    onClick={calculateWater}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    <Calculator className="h-4 w-4 mr-2" />
                    Calculate Water Needs
                  </Button>
                </CardContent>
              </Card>

              {showWaterResults && (
                <Card className="border-primary">
                  <CardHeader>
                    <CardTitle>Your Water Storage Plan</CardTitle>
                    <CardDescription>
                      For {waterPeople} {Number.parseInt(waterPeople) === 1 ? "person" : "people"} over {waterDays} days
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Total Water Needed</div>
                      <div className="text-3xl font-bold">{totalWaterGallons} gallons</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        That's approximately {waterContainers} five-gallon containers
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground">Container Cost</div>
                        <div className="text-xl font-bold">${waterCost}</div>
                      </div>
                      <div className="p-4 bg-muted rounded-lg">
                        <div className="text-sm text-muted-foreground">Storage Space</div>
                        <div className="text-xl font-bold">{Math.ceil(waterContainers * 0.5)} sq ft</div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm">Storage Recommendations:</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Store in food-grade containers (BPA-free)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Keep in cool, dark location (avoid direct sunlight)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Rotate every 6-12 months for best quality</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Consider water filtration as backup system</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Add 8 drops bleach per gallon for long-term storage</span>
                        </li>
                      </ul>
                    </div>

                    <Button className="w-full bg-transparent" variant="outline" asChild>
                      <Link href="/gear">
                        <Droplets className="h-4 w-4 mr-2" />
                        View Water Storage Solutions
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )}

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Water Purification Options</CardTitle>
                  <CardDescription>Backup systems for extended emergencies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "Gravity Filter System",
                        capacity: "2-3 gallons",
                        price: "$249",
                        best: "Families",
                        description: "No power needed, filters 6,000 gallons",
                      },
                      {
                        name: "Portable Filter",
                        capacity: "Personal use",
                        price: "$24",
                        best: "Bug-out bags",
                        description: "Lightweight, filters 1,000 gallons",
                      },
                      {
                        name: "UV Purifier",
                        capacity: "1L per minute",
                        price: "$99",
                        best: "Quick treatment",
                        description: "Kills 99.9% of bacteria and viruses",
                      },
                    ].map((option, i) => (
                      <div
                        key={i}
                        className="p-4 border border-border rounded-lg hover:border-primary transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="font-semibold">{option.name}</div>
                            <div className="text-sm text-muted-foreground">{option.capacity}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold">{option.price}</div>
                          </div>
                        </div>
                        <Badge variant="outline" className="mb-3">
                          {option.best}
                        </Badge>
                        <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                        <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                          <Link href="/gear">View Details</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Kit Checklist */}
          <TabsContent value="checklist" className="space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Customize Your Checklist</CardTitle>
                  <CardDescription>Select your scenario and duration</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="checklist-scenario">Scenario Type</Label>
                    <Select value={checklistScenario} onValueChange={setChecklistScenario}>
                      <SelectTrigger id="checklist-scenario">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic Emergency (72-hour)</SelectItem>
                        <SelectItem value="extended">Extended Emergency (30-day)</SelectItem>
                        <SelectItem value="bugout">Bug-Out Bag</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Checklist Info</h4>
                    <p className="text-sm text-muted-foreground">
                      {checklistScenario === "basic" &&
                        "Essential items for short-term emergencies like power outages or severe weather."}
                      {checklistScenario === "extended" &&
                        "Comprehensive supplies for longer-term situations requiring self-sufficiency."}
                      {checklistScenario === "bugout" &&
                        "Portable gear for evacuation scenarios when you need to leave quickly."}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Quick Stats:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Total Items</span>
                        <span className="font-medium">
                          {Object.values(currentChecklist).reduce((acc, items) => acc + items.length, 0)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Checked</span>
                        <span className="font-medium text-primary">
                          {Object.keys(checkedItems).filter((key) => checkedItems[key]).length}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          {Math.round(
                            (Object.keys(checkedItems).filter((key) => checkedItems[key]).length /
                              Object.values(currentChecklist).reduce((acc, items) => acc + items.length, 0)) *
                              100,
                          ) || 0}
                          %
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-transparent" variant="outline" onClick={downloadResults}>
                    <Download className="h-4 w-4 mr-2" />
                    Download Checklist PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>
                    {checklistScenario === "basic" && "Basic Emergency Kit Checklist"}
                    {checklistScenario === "extended" && "Extended Emergency Supplies"}
                    {checklistScenario === "bugout" && "Bug-Out Bag Checklist"}
                  </CardTitle>
                  <CardDescription>Check off items as you acquire them</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {Object.entries(currentChecklist).map(([category, items]) => (
                      <div key={category} className="space-y-3">
                        <h3 className="font-semibold text-lg border-b border-border pb-2">{category}</h3>
                        <div className="space-y-2">
                          {items.map((item, index) => {
                            const itemKey = `${checklistScenario}-${category}-${index}`
                            return (
                              <div
                                key={itemKey}
                                className="flex items-start gap-3 p-2 rounded hover:bg-muted/50 transition-colors"
                              >
                                <Checkbox
                                  id={itemKey}
                                  checked={checkedItems[itemKey] || false}
                                  onCheckedChange={(checked) => {
                                    setCheckedItems((prev) => ({
                                      ...prev,
                                      [itemKey]: checked as boolean,
                                    }))
                                  }}
                                  className="mt-1"
                                />
                                <Label
                                  htmlFor={itemKey}
                                  className={`text-sm cursor-pointer flex-1 ${
                                    checkedItems[itemKey] ? "line-through text-muted-foreground" : ""
                                  }`}
                                >
                                  {item}
                                </Label>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Premium Upsell */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4">Coming soon</Badge>
                <h2 className="text-3xl font-bold mb-4">More advanced planning tools are coming</h2>
                <p className="text-lg text-muted-foreground">
                  Take your preparedness to the next level with professional-grade tools and features.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    icon: <AlertTriangle className="h-8 w-8" />,
                    title: "Multi-Scenario Planner",
                    description:
                      "Plan for multiple threats simultaneously (nuclear, pandemic, economic collapse, natural disasters)",
                  },
                  {
                    icon: <Package className="h-8 w-8" />,
                    title: "Inventory Manager",
                    description:
                      "Track your supplies with barcode scanning, low-stock alerts, and automatic reorder reminders",
                  },
                  {
                    icon: <Calculator className="h-8 w-8" />,
                    title: "Expiry Tracking",
                    description: "Never waste food with automatic rotation schedules and expiration date notifications",
                  },
                  {
                    icon: <DollarSign className="h-8 w-8" />,
                    title: "Budget Optimizer",
                    description:
                      "Find the most cost-effective supplies while meeting all nutritional and safety requirements",
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Family Profiles",
                    description:
                      "Manage dietary restrictions, medical needs, and special requirements for each family member",
                  },
                  {
                    icon: <Home className="h-8 w-8" />,
                    title: "Location Risk Analysis",
                    description:
                      "Get personalized threat assessments based on your specific location and local hazards",
                  },
                ].map((feature, i) => (
                  <div key={i} className="text-center p-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="max-w-md mx-auto">
                <form onSubmit={handleUpdatesSignup} className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={updateEmail}
                      onChange={(e) => setUpdateEmail(e.target.value)}
                      required
                      className="flex-1"
                      disabled={isSubmitting}
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      disabled={isSubmitting}
                    >
                      <Zap className="h-4 w-4 mr-2" />
                      {isSubmitting ? "Signing up..." : "Sign Up"}
                    </Button>
                  </div>
                  {submitMessage && (
                    <p
                      className={`text-sm text-center ${
                        submitMessage.type === "success" ? "text-primary" : "text-destructive"
                      }`}
                    >
                      {submitMessage.text}
                    </p>
                  )}
                  {!submitMessage && (
                    <p className="text-sm text-muted-foreground text-center">
                      Be the first to know when premium features launch.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <LeadMagnetModal
        isOpen={showLeadMagnet}
        onClose={() => setShowLeadMagnet(false)}
        title="Get Your Detailed Shopping List"
        description="We'll send you a comprehensive breakdown with specific product recommendations, storage tips, and meal planning guides."
        source="food-calculator"
      />
    </div>
  )
}
