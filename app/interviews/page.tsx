import { Play, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"

const interviews = [
  {
    title: "Former Navy SEAL on Urban Survival",
    expert: "Mike Thompson",
    expertise: "Military Tactics",
    duration: "45 min",
    date: "Jan 15, 2025",
    description: "Learn tactical approaches to urban survival from a 20-year special operations veteran.",
    thumbnail: "/navy-seal-tactical-training.jpg",
  },
  {
    title: "Wilderness Medicine with Dr. Sarah Chen",
    expert: "Dr. Sarah Chen",
    expertise: "Emergency Medicine",
    duration: "38 min",
    date: "Jan 8, 2025",
    description: "Essential medical skills for remote emergencies when professional help is hours away.",
    thumbnail: "/wilderness-medical-training.jpg",
  },
  {
    title: "Off-Grid Living: 10 Years of Lessons",
    expert: "James Martinez",
    expertise: "Homesteading",
    duration: "52 min",
    date: "Dec 28, 2024",
    description: "Real-world insights from a decade of completely off-grid living in rural Montana.",
    thumbnail: "/off-grid-cabin-solar-panels.jpg",
  },
  {
    title: "Communications Expert on Grid-Down Scenarios",
    expert: "Robert Hayes",
    expertise: "Ham Radio",
    duration: "41 min",
    date: "Dec 20, 2024",
    description: "How to maintain communications when traditional infrastructure fails.",
    thumbnail: "/ham-radio-equipment-setup.jpg",
  },
]

export default function InterviewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-bebas-neue)] mb-4 tracking-wide">
            EXPERT INTERVIEWS
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            In-depth conversations with survival experts, military veterans, medical professionals, and field-tested
            preppers.
          </p>
        </div>
      </section>

      {/* Featured Interview */}
      <section className="container mx-auto px-4 pb-12">
        <Card className="overflow-hidden border-0 bg-muted">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative aspect-video md:aspect-auto">
              <img
                src={interviews[0].thumbnail || "/placeholder.svg"}
                alt={interviews[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Button size="lg" className="rounded-full h-16 w-16 p-0">
                  <Play className="h-6 w-6 ml-1" />
                </Button>
              </div>
              <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4">{interviews[0].expertise}</Badge>
              <h2 className="text-3xl font-bold mb-3">{interviews[0].title}</h2>
              <p className="text-lg text-muted-foreground mb-4">{interviews[0].description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {interviews[0].duration}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {interviews[0].date}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center font-bold">
                  {interviews[0].expert
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="font-semibold">{interviews[0].expert}</div>
                  <div className="text-sm text-muted-foreground">{interviews[0].expertise} Expert</div>
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                <Play className="h-4 w-4 mr-2" />
                Watch Full Interview
              </Button>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* All Interviews */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-6">All Interviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviews.slice(1).map((interview, i) => (
            <Card
              key={i}
              className="overflow-hidden border-0 bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
            >
              <div className="relative aspect-video">
                <img
                  src={interview.thumbnail || "/placeholder.svg"}
                  alt={interview.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button size="lg" className="rounded-full h-12 w-12 p-0">
                    <Play className="h-5 w-5 ml-0.5" />
                  </Button>
                </div>
                <Badge className="absolute top-3 right-3 bg-black/80 text-white">{interview.duration}</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2">{interview.expertise}</Badge>
                <CardTitle className="text-lg hover:text-primary transition-colors">{interview.title}</CardTitle>
                <CardDescription>{interview.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold">
                    {interview.expert
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{interview.expert}</div>
                    <div className="text-xs text-muted-foreground">{interview.date}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="bg-primary/5 border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Want to be interviewed?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for experienced preppers, survival experts, and professionals to share their
              knowledge with our community.
            </p>
            <Button size="lg" variant="outline">
              Apply to be Featured
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
