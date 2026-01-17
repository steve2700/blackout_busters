import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Service Areas | Goshen Projects Serving Gauteng, Pretoria & Johannesburg",
  description:
    "Goshen Projects provides construction, maintenance, and infrastructure services throughout Gauteng including Pretoria, Johannesburg, Sandton, Centurion, Midrand, Fourways, and more.",
  openGraph: {
    title: "Service Areas | Goshen Projects Serving Gauteng",
    description:
      "Professional construction and maintenance services across all major areas in Gauteng province. Fast response times and free on-site consultations.",
  },
}

const serviceAreas = [
  {
    name: "Pretoria",
    href: "/service-areas/pretoria",
    description:
      "Comprehensive construction and maintenance services throughout Pretoria and surrounding suburbs including Montana, Hatfield, Menlyn, Brooklyn, and Centurion.",
    suburbs: ["Montana", "Hatfield", "Menlyn", "Brooklyn", "Waterkloof", "Centurion", "Lynnwood"],
    highlight: true,
  },
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    description:
      "Full-service construction, renovation, and infrastructure solutions across Johannesburg including Sandton, Rosebank, Fourways, Randburg, and the CBD.",
    suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Parktown", "CBD", "Melrose"],
    highlight: true,
  },
  {
    name: "Sandton",
    href: "/service-areas/sandton",
    description:
      "Premium construction and property maintenance for residential and commercial properties in Sandton, Morningside, Rivonia, and Sunninghill.",
    suburbs: ["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park"],
  },
  {
    name: "Midrand",
    href: "/service-areas/midrand",
    description:
      "Reliable construction and infrastructure services in Midrand, Carlswald, Halfway House, and the surrounding industrial areas.",
    suburbs: ["Carlswald", "Halfway House", "Vorna Valley", "Glen Austin"],
  },
  {
    name: "Centurion",
    href: "/service-areas/centurion",
    description:
      "Expert construction, renovation, and maintenance solutions throughout Centurion including Highveld, Eldoraigne, and Irene.",
    suburbs: ["Highveld", "Eldoraigne", "Irene", "Wierdapark", "Zwartkop"],
  },
  {
    name: "Fourways",
    href: "/service-areas/fourways",
    description:
      "Professional building and property services in Fourways, Lonehill, Dainfern, and the northern suburbs of Johannesburg.",
    suburbs: ["Lonehill", "Dainfern", "Broadacres", "Cedar Lakes"],
  },
  {
    name: "Randburg",
    href: "/service-areas/randburg",
    description:
      "Quality construction and maintenance for residential and commercial properties in Randburg, Ferndale, and Blairgowrie.",
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff", "Boskruin"],
  },
  {
    name: "Bedfordview",
    href: "/service-areas/bedfordview",
    description: "Comprehensive construction services in Bedfordview, Edenvale, Germiston, and the East Rand suburbs.",
    suburbs: ["Edenvale", "Germiston", "Kensington", "Kempton Park"],
  },
  {
    name: "Rosebank",
    href: "/service-areas/rosebank",
    description:
      "Premium construction and renovation services in Rosebank, Parktown, Saxonwold, and the northern Johannesburg suburbs.",
    suburbs: ["Parktown", "Saxonwold", "Dunkeld", "Forest Town"],
  },
  {
    name: "Morningside",
    href: "/service-areas/morningside",
    description:
      "Expert building and property maintenance in Morningside, Sandton Central, and the surrounding upmarket residential areas.",
    suburbs: ["Sandton Central", "Atholl", "Inanda", "Sandown"],
  },
]

const benefits = [
  "Same-day response for emergency services",
  "Free on-site consultations and quotations",
  "Strategically located teams for quick service",
  "Local knowledge and expertise in each area",
  "Compliant with all local building regulations",
  "Trusted by residents and businesses across Gauteng",
]

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/gauteng-service-areas-map.webp?height=600&width=1600"
            alt="Gauteng map service areas"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Service Areas" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <MapPin className="h-4 w-4 text-accent" />
              Serving All of Gauteng Province
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Professional Services Across Pretoria, Johannesburg & Gauteng
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/80 md:text-xl">
              Goshen Projects delivers expert construction, maintenance, and infrastructure solutions throughout the
              Gauteng province. Our strategically positioned teams ensure fast response times and exceptional service
              quality across all major areas.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Coverage Areas
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Where We Serve in Gauteng
            </h2>
            <p className="text-muted-foreground">
              From residential homes to commercial buildings and industrial facilities, we provide comprehensive
              services across all major areas in Gauteng.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <Card
                key={area.name}
                className={`group overflow-hidden transition-all hover:shadow-xl ${
                  area.highlight ? "border-secondary shadow-lg" : "border-border"
                }`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        area.highlight ? "bg-secondary text-secondary-foreground" : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <MapPin className="h-6 w-6" />
                    </div>
                    {area.highlight && (
                      <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                        Primary Area
                      </span>
                    )}
                  </div>

                  <h3 className="mb-2 text-xl font-bold">{area.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{area.description}</p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs font-medium text-muted-foreground">Suburbs Covered:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.suburbs.map((suburb) => (
                        <span
                          key={suburb}
                          className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={area.href}
                    className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
                  >
                    View Area Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Local Gauteng Service Provider
              </h2>
              <p className="mb-8 text-muted-foreground">
                As a locally-based company with teams strategically positioned throughout Gauteng, we understand the
                unique needs of each area and provide tailored solutions with rapid response times.
              </p>

              <ul className="mb-8 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Request a Free Quote
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/gauteng-service-areas-map.webp?height=600&width=600"
                  alt="Goshen Projects service coverage map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-6 shadow-2xl border border-border">
                <p className="text-4xl font-bold text-secondary">10+</p>
                <p className="text-sm text-muted-foreground">Service Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Get Professional Service in Your Area
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact us today to discuss your project needs. We provide free consultations and detailed quotations for
              all areas across Gauteng.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Today
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                <Link href="/services">
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
