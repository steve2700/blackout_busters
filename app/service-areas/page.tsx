import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  MapPin,
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Navigation,
  Star,
  Award,
  FileCheck,
  Zap,
  Sun,
  BatteryCharging,
  Wrench,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas | Blackout Busters - Johannesburg, Pretoria, Kempton Park & All Gauteng",
  description:
    "Blackout Busters provides electrical installation and repairs, solar, backup power, and compliance certificates (COC) across Gauteng including Johannesburg, Pretoria, Kempton Park, Sandton, Centurion, and more. Same day quotes and 24 hour emergency callouts.",
  keywords:
    "electrical service areas Gauteng, electrician Johannesburg, solar installation Pretoria, backup power Midrand, Sandton electrician, Centurion solar, Kempton Park electrical repairs, load shedding solutions Gauteng",
  openGraph: {
    title: "Service Areas | Blackout Busters Serving All Gauteng",
    description:
      "Electrical, solar, and backup power installations, repairs, and compliance across all major areas in Gauteng. Same day callouts, free quotes, and 24 hour emergency support.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blackout Busters service areas across Gauteng Province",
      },
    ],
  },
}

const serviceAreas = [
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    description:
      "Electrical installation and repairs, solar, backup power, and COC compliance across Johannesburg including Sandton, Rosebank, Fourways, Randburg, and the CBD.",
    suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Roodepoort"],
    highlight: true,
  },
  {
    name: "Pretoria",
    href: "/service-areas/pretoria",
    description:
      "Solar installation, backup power, electrical repairs, and compliance work throughout Pretoria and surrounding suburbs including Centurion, Montana, Hatfield, and Brooklyn.",
    suburbs: ["Centurion", "Montana", "Hatfield", "Silverton", "Brooklyn"],
    highlight: true,
  },
  {
    name: "Kempton Park",
    href: "/service-areas/kempton-park",
    description:
      "Home base for Blackout Busters, with rapid response electrical, solar, and backup power work across Kempton Park and Aston Manor.",
    suburbs: ["Aston Manor", "Birchleigh", "Edleen", "Glen Marais"],
    highlight: true,
  },
  {
    name: "Midrand",
    href: "/service-areas/midrand",
    description:
      "Reliable electrical repairs, solar installation, and inverter and battery backup work in Carlswald, Halfway House, and surrounding areas.",
    suburbs: ["Carlswald", "Halfway House", "Waterfall Estate"],
    highlight: true,
  },
  {
    name: "Sandton",
    href: "/service-areas/sandton",
    description:
      "Trusted electrical, solar, and backup power services for residential and commercial properties in Sandton, Morningside, Rivonia, and Bryanston.",
    suburbs: ["Morningside", "Rivonia", "Bryanston"],
  },
  {
    name: "Centurion",
    href: "/service-areas/centurion",
    description:
      "Expert solar installation, backup power, and electrical compliance solutions throughout Centurion including Highveld, Eldoraigne, and Irene.",
    suburbs: ["Highveld", "Eldoraigne", "Irene"],
  },
  {
    name: "Fourways",
    href: "/service-areas/fourways",
    description:
      "Professional electrical, solar, and backup power services in Fourways, Lonehill, Dainfern, and the northern suburbs of Johannesburg.",
    suburbs: ["Lonehill", "Dainfern", "Cedar Lakes"],
  },
  {
    name: "Randburg",
    href: "/service-areas/randburg",
    description:
      "Quality electrical repairs, solar, and backup power installation for residential and commercial properties in Randburg, Ferndale, and Blairgowrie.",
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff"],
  },
  {
    name: "Bedfordview",
    href: "/service-areas/bedfordview",
    description:
      "Comprehensive electrical, solar, and backup power services in Bedfordview, Edenvale, Germiston, and the East Rand suburbs.",
    suburbs: ["Edenvale", "Germiston", "Kensington"],
  },
  {
    name: "Rosebank",
    href: "/service-areas/rosebank",
    description:
      "Trusted electrical, solar, and compliance services in Rosebank, Parktown, Saxonwold, and the northern Johannesburg suburbs.",
    suburbs: ["Parktown", "Saxonwold", "Melrose"],
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Same Day Response",
    description: "Emergency callouts and quotes within hours, not days",
  },
  {
    icon: CheckCircle,
    title: "Free Callout Quotes",
    description: "No obligation assessments and honest quotations",
  },
  {
    icon: Navigation,
    title: "Kempton Park Base",
    description: "Based in Kempton Park for rapid deployment across the province",
  },
  {
    icon: MapPin,
    title: "Local Load Shedding Know-How",
    description: "We understand the power and backup needs of homes and businesses in each area",
  },
  {
    icon: Award,
    title: "Certified Electricians",
    description: "Qualified electricians with the certifications to sign off compliant work",
  },
  {
    icon: FileCheck,
    title: "Compliance Certificate (COC)",
    description: "A Certificate of Compliance issued on every completed job",
  },
]

const stats = [
  { value: "10", label: "Service Areas", sublabel: "Across Gauteng" },
  { value: "Same Day", label: "Callouts", sublabel: "Available Daily" },
  { value: "24/7", label: "Emergency Support", sublabel: "Always Available" },
  { value: "COC", label: "Certified Work", sublabel: "On Every Job" },
]

const popularServices = [
  { icon: Zap, title: "Electrical Repairs", href: "/electrical-repairs" },
  { icon: Sun, title: "Solar Installation", href: "/solar-installation" },
  { icon: BatteryCharging, title: "Backup Power (Inverter & Battery)", href: "/backup-power-inverter-battery" },
  { icon: Wrench, title: "DB Board Upgrades & COC", href: "/db-board-upgrades-compliance-certificates" },
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        {/* Background photo + pattern */}
        <div className="absolute inset-0">
          <Image
            src="/solar-panel-roof-installation.png"
            alt="Blackout Busters electrical and solar work across Gauteng"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        </div>
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs variant="onDark" items={[{ label: "Service Areas" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Serving All of Gauteng Province</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Electrical, Solar &amp; Backup Power Across{" "}
              <span className="text-accent">Johannesburg, Pretoria &amp; All Gauteng</span>
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed mb-8">
              <strong className="text-white">Blackout Busters</strong> delivers electrical installation and repairs,
              solar, inverter and battery backup, generators, and compliance certificates throughout Gauteng province.
              Dispatched from our Kempton Park base, with <strong className="text-white">same day callouts</strong> and a
              Certificate of Compliance on every completed job.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                  <p className="text-xs text-white/70">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 lg:py-28" itemScope itemType="https://schema.org/Service">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Coverage Areas
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Where We Serve in <span className="text-secondary">Gauteng Province</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From homes to businesses, we provide comprehensive electrical, solar, backup power, and compliance
              services across all major areas in Gauteng.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Card
                key={area.name}
                className={`group overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  area.highlight ? "border-2 border-secondary shadow-lg ring-1 ring-secondary/20" : "border-border"
                }`}
                itemProp="areaServed"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${
                        area.highlight
                          ? "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <MapPin className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {area.highlight && (
                      <span className="rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                        PRIMARY
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-bold group-hover:text-secondary transition-colors">{area.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{area.description}</p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 text-secondary" aria-hidden="true" />
                      Suburbs Covered:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.suburbs.map((suburb) => (
                        <span
                          key={suburb}
                          className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground hover:bg-secondary/10 hover:text-secondary transition-colors"
                        >
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={area.href}
                    className="inline-flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors"
                  >
                    View Full Area Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Services */}
          <div className="mt-16 mb-8">
            <h3 className="mb-6 text-center text-xl font-bold">Popular Services Across Gauteng</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group flex items-center gap-3 rounded-xl bg-card p-5 border border-border transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold group-hover:text-secondary transition-colors block">
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-secondary transition-colors mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Areas CTA */}
          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border">
            <h3 className="text-xl font-bold mb-2">Don&apos;t See Your Area Listed?</h3>
            <p className="text-muted-foreground mb-4">
              We serve the entire Gauteng province. Contact us to discuss your specific location.
            </p>
            <Button asChild variant="outline" className="border-secondary/30 hover:bg-secondary/10">
              <Link href="/contact">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Contact Us About Your Area
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Local <span className="text-secondary">Gauteng Electrical &amp; Solar Team</span>
              </h2>
              <p className="mb-8 text-muted-foreground text-lg leading-relaxed">
                Dispatched from Kempton Park, we understand the load shedding and power needs of each area we serve,
                with reliable response times across the province.
              </p>

              <div className="grid gap-4 mb-8">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary flex-shrink-0">
                      <benefit.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105"
                >
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-secondary/30 hover:bg-secondary/10 transition-transform hover:scale-105"
                >
                  <Link href="tel:+27836171112">Call: +27 83 617 1112</Link>
                </Button>
              </div>
            </div>

            {/* Coverage Radius Diagram — no fake map pins */}
            <div className="relative flex items-center justify-center">
              <svg
                viewBox="0 0 400 400"
                className="w-full max-w-md"
                role="img"
                aria-label="Coverage radius from Blackout Busters base in Kempton Park"
              >
                <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" className="text-border" strokeWidth="1.5" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="60" fill="var(--color-secondary)" fillOpacity="0.08" stroke="currentColor" className="text-secondary" strokeWidth="1.5" />

                <circle cx="200" cy="200" r="8" fill="var(--color-accent)" opacity="0.35">
                  <animate attributeName="r" values="8;40;8" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="200" r="8" fill="var(--color-accent)" />

                <text x="200" y="152" textAnchor="middle" className="fill-secondary text-[11px] font-semibold">Primary</text>
                <text x="200" y="92" textAnchor="middle" className="fill-muted-foreground text-[11px] font-semibold">Extended</text>

                <text x="200" y="60" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Pretoria</text>
                <text x="345" y="205" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Johannesburg</text>
                <text x="60" y="205" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Midrand</text>
                <text x="200" y="350" textAnchor="middle" className="fill-foreground text-[13px] font-bold">Sandton</text>
              </svg>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-4 text-center">
                <p className="text-[10px] font-bold text-accent-foreground bg-accent px-2 py-0.5 rounded-full shadow-md whitespace-nowrap">
                  Base — Kempton Park
                </p>
              </div>

              {/* Response Time Badge */}
              <div className="absolute -top-4 -left-4 rounded-xl bg-secondary px-4 py-3 shadow-xl ring-2 ring-white/20 transition-transform hover:scale-110">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-secondary-foreground" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-secondary-foreground">Same Day</p>
                    <p className="text-xs text-secondary-foreground/80">Callouts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Get Power Sorted <span className="text-accent">in Your Area Today</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact us for your electrical, solar, backup power, or compliance needs. We provide free quotes, same day
              callouts, and honest assessments for all areas across Gauteng. Certified, insured, and ready to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Request Free Quote
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold transition-transform hover:scale-105"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              24 Hour Emergency Support • Same Day Callouts • Free Quotes • Certified &amp; Insured
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
