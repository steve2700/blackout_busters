import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, ArrowRight, CheckCircle, Clock, Phone, CalendarCheck } from "lucide-react"

const primaryAreas = [
  { name: "Johannesburg", href: "/service-areas/johannesburg", suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Roodepoort"] },
  { name: "Pretoria", href: "/service-areas/pretoria", suburbs: ["Centurion", "Montana", "Hatfield", "Silverton", "Brooklyn"] },
  { name: "Kempton Park", href: "/service-areas/kempton-park", suburbs: ["Aston Manor", "Birchleigh", "Edleen", "Glen Marais"] },
  { name: "Midrand", href: "/service-areas/midrand", suburbs: ["Carlswald", "Halfway House", "Waterfall Estate"] },
]

const extendedAreas = [
  { name: "Sandton", href: "/service-areas/sandton", suburbs: ["Morningside", "Rivonia", "Bryanston"] },
  { name: "Centurion", href: "/service-areas/centurion", suburbs: ["Highveld", "Eldoraigne", "Irene"] },
  { name: "Fourways", href: "/service-areas/fourways", suburbs: ["Lonehill", "Dainfern", "Cedar Lakes"] },
  { name: "Randburg", href: "/service-areas/randburg", suburbs: ["Ferndale", "Blairgowrie", "Northcliff"] },
  { name: "Bedfordview", href: "/service-areas/bedfordview", suburbs: ["Edenvale", "Germiston", "Kensington"] },
  { name: "Rosebank", href: "/service-areas/rosebank", suburbs: ["Parktown", "Saxonwold", "Melrose"] },
]

const benefits = [
  { icon: Clock, text: "Same day response for emergency callouts", highlight: true },
  { icon: CheckCircle, text: "Free quotes across Gauteng", highlight: false },
  { icon: CalendarCheck, text: "Scheduled compliance visits and annual servicing", highlight: false },
  { icon: Phone, text: "24/7 emergency support hotline available", highlight: false },
]

export function ServiceAreasPreview() {
  return (
    <section
      className="py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/20 relative"
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby="service-areas-heading"
    >
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Service Coverage
            </span>
            <h2
              id="service-areas-heading"
              className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              itemProp="name"
            >
              Dispatched From Kempton Park, Covering <span className="text-secondary">All of Gauteng</span>
            </h2>
            <p className="mb-6 text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
              <strong>Jero Fire Solutions</strong> is based in Aston Manor, Kempton Park, with technicians dispatched across <strong>Johannesburg, Pretoria</strong>, and every major Gauteng suburb for installations, servicing, and compliance work.
            </p>

            {/* Benefits List */}
            <div className="mb-8 space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                    benefit.highlight ? "bg-accent/10 border border-accent/20" : "hover:bg-muted/50"
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    benefit.highlight ? "bg-accent/20" : "bg-secondary/10"
                  }`}>
                    <benefit.icon className={`h-4 w-4 ${benefit.highlight ? "text-accent" : "text-secondary"}`} aria-hidden="true" />
                  </div>
                  <span className={benefit.highlight ? "font-semibold" : "text-muted-foreground"}>
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg h-12 px-8 transition-transform hover:scale-105">
                <Link href="/service-areas">
                  View All Service Areas
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10 h-12 px-8 transition-transform hover:scale-105">
                <Link href="tel:+27781336684">
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Call: +27 78 133 6684
                </Link>
              </Button>
            </div>
          </div>

          {/* Coverage Radius Diagram — replaces the stock map + fake pins */}
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 400 400" className="w-full max-w-md" role="img" aria-label="Coverage radius from Jero Fire Solutions headquarters in Kempton Park">
              <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 6" />
              <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 6" />
              <circle cx="200" cy="200" r="60" fill="var(--color-secondary)" fillOpacity="0.08" stroke="currentColor" className="text-secondary" strokeWidth="1.5" />

              {/* Single pulse tied to the real HQ, not scattered fake pins */}
              <circle cx="200" cy="200" r="8" fill="var(--color-accent)" opacity="0.35">
                <animate attributeName="r" values="8;40;8" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="200" cy="200" r="8" fill="var(--color-accent)" />

              {/* Ring labels */}
              <text x="200" y="152" textAnchor="middle" className="fill-secondary text-[11px] font-semibold">Primary</text>
              <text x="200" y="92" textAnchor="middle" className="fill-muted-foreground text-[11px] font-semibold">Extended</text>

              {/* Primary area labels around the inner ring */}
              <text x="200" y="60" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Pretoria</text>
              <text x="345" y="205" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Johannesburg</text>
              <text x="60" y="205" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Midrand</text>
              <text x="200" y="350" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Sandton</text>
            </svg>

            {/* HQ label pinned to the center */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 text-center">
              <p className="text-[10px] font-bold text-accent-foreground bg-accent px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                HQ — Kempton Park
              </p>
            </div>
          </div>
        </div>

        {/* Area Directory */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
              Primary Coverage
            </h3>
            <p className="text-muted-foreground text-sm mb-6">Fastest scheduling, most frequent visits.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {primaryAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all hover:-translate-y-1"
                  itemProp="areaServed"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-secondary flex-shrink-0" aria-hidden="true" />
                    <h4 className="font-semibold text-sm group-hover:text-secondary transition-colors truncate">
                      {area.name}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{area.suburbs.join(", ")}</p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
              Extended Coverage
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Can&apos;t find your suburb? Contact us — we cover the entire Gauteng province.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {extendedAreas.map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-lg transition-all hover:-translate-y-1"
                  itemProp="areaServed"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="h-3.5 w-3.5 text-secondary flex-shrink-0" aria-hidden="true" />
                    <h4 className="font-semibold text-sm group-hover:text-secondary transition-colors truncate">
                      {area.name}
                    </h4>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{area.suburbs.join(", ")}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
