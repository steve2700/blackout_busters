import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { services, serviceCategories, SITE } from "@/lib/services"
import {
  ArrowRight,
  Phone,
  CheckCircle,
  CheckCircle2,
  Award,
  Clock,
  ShieldCheck,
  MapPin,
  FileCheck,
} from "lucide-react"

const PHONE_TEL = SITE.phoneTel
const PHONE_DISPLAY = SITE.phoneDisplay

export const metadata: Metadata = {
  title: "Our Services | Electrical Installation, Repairs & Solar Solutions in Gauteng | Blackout Busters",
  description:
    "Explore Blackout Busters: electrical installation and repairs, solar installation, backup power, generator servicing, DB board upgrades and compliance certificates (COC) across Gauteng.",
  keywords:
    "electrical installation Gauteng, electrical repairs Pretoria, solar installation Johannesburg, backup power inverter battery, generator servicing, DB board upgrade, compliance certificate COC, load shedding solutions",
  openGraph: {
    title: "Our Services | Blackout Busters Gauteng",
    description:
      "Electrical, solar, and backup power services for Johannesburg, Pretoria, and the wider Gauteng region.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blackout Busters electrical and solar technicians in Gauteng",
      },
    ],
  },
}

const categoryBlurbs: Record<string, string> = {
  "Electrical Core": "The everyday work that keeps a property safe and running.",
  "Solar & Backup Power": "For when the grid can't be trusted to stay on.",
  "Compliance & Upgrades": "The paperwork and panel work that keeps you covered.",
  "Home & Safety Extras": "The services that usually get bundled in alongside electrical work.",
}

const stats = [
  { value: "14", label: "Services", icon: Award },
  { value: "4", label: "Service Categories", icon: ShieldCheck },
  { value: "Same Day", label: "Quotes", icon: Clock },
  { value: "24 Hour", label: "Emergency Support", icon: Phone },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "One Accountable Team",
    description: "Electrical, solar, backup power, and compliance handled by one company, start to finish",
  },
  {
    icon: Award,
    title: "Full Range Capability",
    description: "From a single household repair to commercial and industrial-scale electrical work",
  },
  {
    icon: FileCheck,
    title: "Compliance on Every Job",
    description: "Certificates of Compliance (COC) provided so you have the paperwork you need",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same day quotes and emergency callouts when something can't wait",
  },
]

export default function ServicesPage() {
  const groups = serviceCategories.map((category) => ({
    label: category,
    blurb: categoryBlurbs[category] ?? "",
    services: services.filter((service) => service.category === category),
  }))

  let rowIndex = 0

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "Services" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              <span>Electrical, Solar &amp; Backup Power</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              <span className="text-accent">14</span> Electrical &amp; Solar Services <br />Across Gauteng
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed mb-8">
              <strong className="text-white">Blackout Busters</strong> installs, repairs, and certifies
              electrical and solar systems for homes and businesses. From backup power to compliance
              certificates, we serve <strong className="text-white">Johannesburg, Pretoria, Kempton Park</strong>,
              and the greater Gauteng region.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <stat.icon className="h-6 w-6 text-accent mx-auto mb-2" aria-hidden="true" />
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-muted py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
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
        </div>
      </section>

      {/* Services — alternating editorial rows, grouped by category */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Our <span className="text-secondary">Complete Service Range</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From a single faulty plug point to a full backup power system, we keep your property running.
            </p>
          </div>

          <div className="space-y-24">
            {groups.map((group) => (
              <div key={group.label}>
                <div className="mb-10 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-4">
                  <h3 className="text-2xl font-bold">{group.label}</h3>
                  <p className="text-sm text-muted-foreground">{group.blurb}</p>
                </div>

                <div className="space-y-16">
                  {group.services.map((service) => {
                    const reversed = rowIndex % 2 === 1
                    rowIndex += 1
                    const features = service.features ?? []

                    return (
                      <div
                        key={service.slug}
                        className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
                        itemScope
                        itemType="https://schema.org/Service"
                      >
                        <div className={reversed ? "md:order-2" : ""}>
                          <Link
                            href={`/${service.slug}`}
                            className="group relative block aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border"
                            aria-label={`Learn more about ${service.title}`}
                          >
                            <Image
                              src={service.image || "/placeholder.svg"}
                              alt={service.imageAlt}
                              fill
                              sizes="(max-width: 768px) 100vw, 50vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              itemProp="image"
                            />
                            <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-primary shadow-md backdrop-blur-sm">
                              <service.icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                          </Link>
                        </div>

                        <div className={reversed ? "md:order-1" : ""}>
                          <h4 className="mb-3 text-2xl font-bold" itemProp="name">
                            {service.title}
                          </h4>
                          <p className="mb-5 text-muted-foreground leading-relaxed" itemProp="description">
                            {service.tagline}
                          </p>
                          {features.length > 0 && (
                            <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                              {features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          <Link
                            href={`/${service.slug}`}
                            itemProp="url"
                            className="inline-flex items-center text-sm font-bold text-secondary transition-colors hover:text-secondary/80"
                          >
                            Learn More
                            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center p-8 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border">
            <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-2">Serving All of Gauteng</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              All services available across Johannesburg, Pretoria, Kempton Park, Midrand, Sandton, and many
              more areas in the Gauteng province
            </p>
            <Button asChild variant="outline" size="lg" className="border-secondary/30 hover:bg-secondary/10">
              <Link href="/service-areas">
                View Service Areas
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Why Choose Us
              </span>
              <h2 className="text-3xl font-bold mb-6 md:text-4xl">
                The <span className="text-secondary">Blackout Busters</span> Advantage
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We built Blackout Busters around a simple idea: one team should be able to handle the
                electrical work and the backup power that goes with it, without you needing two different
                contractors and two different quotes.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Integrated Services</h3>
                    <p className="text-sm text-muted-foreground">One company for electrical, solar, backup power, and compliance with clear accountability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Documentation You Can Use</h3>
                    <p className="text-sm text-muted-foreground">Compliance Certificates (COC) provided for audits, insurance, and property sales</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Transparent Pricing</h3>
                    <p className="text-sm text-muted-foreground">Clear quotes, no hidden fees, and honest advice on every job</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg">
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10">
                  <a href={PHONE_TEL}>Call: {PHONE_DISPLAY}</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* Real team photo — fixes the broken placeholder reference */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/blackout-busters-team-gauteng.png"
                  alt="The Blackout Busters team, electrical and solar technicians serving Gauteng"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <FileCheck className="h-8 w-8 mb-1" aria-hidden="true" />
                <p className="text-sm font-semibold">Compliance</p>
                <p className="text-xs opacity-90">Done Properly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Need a Service <span className="text-accent">Not Listed?</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              If it involves electricity or backup power, we can most likely help. Contact us to discuss
              your specific site and receive a tailored, no obligation quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold">
                <a href={PHONE_TEL}>
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold">
                <Link href="/contact">Request Free Quote</Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              24 Hour Emergency Support • Same Day Quotes • Serving All Gauteng
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
