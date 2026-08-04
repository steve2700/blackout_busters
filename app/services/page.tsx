import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Siren,
  FireExtinguisher,
  Droplets,
  GraduationCap,
  Wrench,
  ShieldCheck,
  ArrowRight,
  Phone,
  CheckCircle,
  Award,
  Clock,
  Star,
  MapPin,
  Shield,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Fire Detection, Suppression and Compliance in Gauteng | Jero Fire Solutions",
  description:
    "Explore Jero Fire Solutions: fire detection and alarm systems, extinguisher servicing, sprinkler and suppression systems, safety training, maintenance contracts, and hydrant testing across Gauteng.",
  keywords:
    "fire detection Gauteng, fire extinguisher servicing Pretoria, sprinkler installation Johannesburg, fire safety training, fire equipment maintenance contract, fire hydrant testing",
  openGraph: {
    title: "Our Services | Jero Fire Solutions Gauteng",
    description:
      "Fire detection, suppression, extinguisher servicing, training, and compliance services for Johannesburg, Pretoria, and the wider Gauteng region.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jero Fire Solutions fire safety technicians in Gauteng",
      },
    ],
  },
}

const services = [
  {
    icon: Siren,
    title: "Fire Detection & Alarm Systems",
    description:
      "Smoke detectors, heat detectors, and alarm panels supplied, installed, and maintained by certified technicians for early warning and compliance.",
    href: "/fire-detection-alarm-systems",
    features: ["Smoke & heat detectors", "Alarm panels & sounders", "New build & retrofit", "Compliance certification", "System testing"],
    featured: true,
  },
  {
    icon: FireExtinguisher,
    title: "Fire Extinguisher Supply & Servicing",
    description:
      "Sales, annual servicing, refills, and certification for portable fire extinguishers across homes, offices, and industrial sites.",
    href: "/fire-extinguisher-supply-servicing",
    features: ["Supply & installation", "Annual servicing", "Refills & recharging", "Certification & tagging", "Site audits"],
    featured: true,
  },
  {
    icon: Droplets,
    title: "Sprinkler & Suppression Systems",
    description:
      "Installation, inspection, and maintenance of sprinkler and fire suppression systems for commercial and industrial buildings.",
    href: "/sprinkler-suppression-systems",
    features: ["System installation", "Pressure testing", "Scheduled inspection", "Suppression agents", "Compliance reports"],
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Fire Safety Training & Compliance",
    description:
      "Staff fire awareness training, evacuation drills, and OHS compliance audits delivered by certified trainers.",
    href: "/fire-safety-training-compliance",
    features: ["Staff awareness training", "Evacuation drills", "OHS compliance audits", "Certificates & records", "Refresher sessions"],
    featured: false,
  },
  {
    icon: Wrench,
    title: "Fire Equipment Maintenance Contracts",
    description:
      "Scheduled maintenance contracts for extinguishers, alarms, and suppression systems that keep every certificate current.",
    href: "/fire-equipment-maintenance-contracts",
    features: ["Scheduled servicing", "Multi site contracts", "Priority response", "Compliance records", "Single point of contact"],
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "Fire Hydrant Installation & Testing",
    description:
      "Installation, pressure testing, and certification of fire hydrants for commercial and industrial sites.",
    href: "/fire-hydrant-installation-testing",
    features: ["Hydrant installation", "Pressure testing", "Flow testing", "Certification", "Scheduled retesting"],
    featured: false,
  },
]

const stats = [
  { value: "6", label: "Service Categories", icon: Award },
  { value: "Certified", label: "Technicians", icon: ShieldCheck },
  { value: "Same Day", label: "Quotes", icon: Clock },
  { value: "24 Hour", label: "Emergency Support", icon: Phone },
]

const benefits = [
  {
    icon: CheckCircle,
    title: "One Fire Safety Partner",
    description: "Detection, suppression, extinguishers, and compliance handled by one accountable team",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Trained and certified technicians who understand what they are signing off on",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for your peace of mind",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description: "Same day quotes and rapid response when a certificate is about to lapse",
  },
]

export default function ServicesPage() {
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
              <span>Fire Detection, Suppression & Compliance</span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              <span className="text-accent">6</span> Fire Safety Services <br />Across Gauteng
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed mb-8">
              <strong className="text-white">Jero Fire Solutions</strong> installs, services, and certifies fire safety systems for homes and businesses. From detection and suppression to training and compliance, we serve{" "}
              <strong className="text-white">Johannesburg, Pretoria, Kempton Park</strong>, and the greater Gauteng region.
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

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              What We Offer
            </span>
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Our <span className="text-secondary">Complete Service Range</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              From detection systems to compliance training, we keep your building and the people in it protected
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className={`group flex flex-col transition-all hover:shadow-2xl hover:-translate-y-2 ${
                  service.featured ? "border-2 border-secondary ring-1 ring-secondary/20" : "border-border"
                }`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all group-hover:scale-110 ${
                        service.featured
                          ? "bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg"
                          : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
                      }`}
                    >
                      <service.icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    {service.featured && (
                      <span className="rounded-full bg-gradient-to-r from-accent to-accent/80 px-3 py-1 text-xs font-bold text-accent-foreground shadow-md">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-secondary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="mb-4 flex-1 leading-relaxed">{service.description}</CardDescription>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-bold text-secondary hover:text-secondary/80 transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-muted to-muted/50 border border-border">
            <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" aria-hidden="true" />
            <h3 className="text-2xl font-bold mb-2">Serving All of Gauteng</h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              All services available across Johannesburg, Pretoria, Kempton Park, Midrand, Sandton, and many more areas in the Gauteng province
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
                The <span className="text-secondary">Jero Fire Solutions</span> Advantage
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We built our name in Gauteng on fire safety work done properly, not just signed off. Every certificate reflects what our technicians actually found and fixed on site.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Integrated Services</h3>
                    <p className="text-sm text-muted-foreground">One company for detection, suppression, extinguishers, and compliance with clear accountability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold mb-1">Certified Professionals</h3>
                    <p className="text-sm text-muted-foreground">Trained, certified, fully insured, and experienced technicians</p>
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
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              {/* PLACEHOLDER: swap for a real photo of the Jero Fire Solutions team or a technician on site */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/jero-fire-team-technicians-gauteng.jpg"
                  alt="Jero Fire Solutions technicians ready for a fire safety inspection in Gauteng"
                  fill
                  className="object-cover"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-accent to-accent/90 p-6 text-accent-foreground shadow-2xl ring-2 ring-white/20">
                <ShieldCheck className="h-8 w-8 mb-1" aria-hidden="true" />
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
              If it protects your building from fire, we can most likely help. Contact us to discuss your specific site and receive a tailored, no obligation quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Request Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold">
                <Link href="tel:+27781336684">Call: +27 78 133 6684</Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              24 Hour Emergency Support • Same Day Quotes • Licensed and Insured • Serving All Gauteng
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
