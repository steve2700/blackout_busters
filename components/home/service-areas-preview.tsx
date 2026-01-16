import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, CheckCircle } from "lucide-react"

const areas = [
  { name: "Pretoria", href: "/service-areas/pretoria", highlight: true, suburbs: ["Centurion", "Montana", "Hatfield"] },
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    highlight: true,
    suburbs: ["Sandton", "Rosebank", "Fourways"],
  },
  { name: "Sandton", href: "/service-areas/sandton", suburbs: ["Morningside", "Rivonia"] },
  { name: "Midrand", href: "/service-areas/midrand", suburbs: ["Carlswald", "Halfway House"] },
  { name: "Centurion", href: "/service-areas/centurion", suburbs: ["Highveld", "Eldoraigne"] },
  { name: "Fourways", href: "/service-areas/fourways", suburbs: ["Lonehill", "Dainfern"] },
  { name: "Randburg", href: "/service-areas/randburg", suburbs: ["Ferndale", "Blairgowrie"] },
  { name: "Bedfordview", href: "/service-areas/bedfordview", suburbs: ["Edenvale", "Germiston"] },
  { name: "Rosebank", href: "/service-areas/rosebank", suburbs: ["Parktown", "Saxonwold"] },
  { name: "Morningside", href: "/service-areas/morningside", suburbs: ["Sandton Central"] },
]

export function ServiceAreasPreview() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Service Areas
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Proudly Serving All of Gauteng
            </h2>
            <p className="mb-6 text-pretty text-lg text-muted-foreground">
              Goshen Projects delivers professional construction, maintenance, and infrastructure solutions throughout
              the Gauteng province. Our teams are strategically positioned to serve clients across Pretoria,
              Johannesburg, and all major suburbs in the region.
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Same-day response for emergency services</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Free on-site consultations across Gauteng</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">Strategically located teams for quick service</span>
              </div>
            </div>

            <div className="mb-8 flex flex-wrap gap-2">
              {areas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    area.highlight
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/25"
                      : "bg-muted text-foreground hover:bg-secondary/10 hover:text-secondary border border-border"
                  }`}
                >
                  <MapPin className="h-3.5 w-3.5" />
                  {area.name}
                </Link>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/service-areas">
                View All Service Areas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl">
              <Image
                src="/gauteng-service-area.jpg?height=600&width=800"
                alt="Goshen Projects service areas map - Gauteng, Pretoria, Johannesburg"
                width={800}
                height={600}
                className="w-full"
              />
              {/* Map Overlay Points */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 animate-pulse">
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-accent shadow-lg" />
                    <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-accent opacity-75" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 animate-pulse" style={{ animationDelay: "0.5s" }}>
                  <div className="relative">
                    <div className="h-4 w-4 rounded-full bg-secondary shadow-lg" />
                    <div className="absolute inset-0 h-4 w-4 animate-ping rounded-full bg-secondary opacity-75" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-accent p-6 text-accent-foreground shadow-2xl">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm font-medium">Areas Served</p>
            </div>

            {/* Secondary floating card */}
            <div className="absolute -top-4 -left-4 rounded-xl bg-card p-4 shadow-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Gauteng Province</p>
                  <p className="text-xs text-muted-foreground">Full Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
