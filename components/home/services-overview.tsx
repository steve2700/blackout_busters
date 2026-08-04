import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Siren,
  FireExtinguisher,
  Droplets,
  GraduationCap,
  Wrench,
  ShieldCheck,
  ArrowRight,
  FileCheck,
  ClipboardCheck,
  BellRing,
} from "lucide-react"

const services = [
  {
    icon: Siren,
    number: "01",
    title: "Fire Detection & Alarm Systems",
    description:
      "Smoke detectors, heat detectors, and alarm panels supplied, installed, and maintained for homes, offices, and industrial sites.",
    href: "/fire-detection-alarm-systems",
    keywords: "fire alarm installation, smoke detectors, heat detectors",
  },
  {
    icon: FireExtinguisher,
    number: "02",
    title: "Fire Extinguisher Supply & Servicing",
    description:
      "Sales, annual servicing, refills, and certification to keep your extinguishers compliant and ready when it counts.",
    href: "/fire-extinguisher-supply-servicing",
    keywords: "fire extinguisher servicing, extinguisher certification, refills",
  },
  {
    icon: Droplets,
    number: "03",
    title: "Sprinkler & Suppression Systems",
    description:
      "Installation, inspection, and maintenance of sprinkler and suppression systems for commercial and industrial properties.",
    href: "/sprinkler-suppression-systems",
    keywords: "sprinkler system installation, suppression systems, fire sprinklers",
  },
  {
    icon: GraduationCap,
    number: "04",
    title: "Fire Safety Training & Compliance",
    description:
      "Evacuation drills, staff fire safety training, and OHS compliance audits so your team knows what to do and your business stays covered.",
    href: "/fire-safety-training-compliance",
    keywords: "fire safety training, evacuation drills, OHS compliance audit",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Fire Equipment Maintenance Contracts",
    description:
      "Scheduled servicing contracts for commercial clients, so detection and suppression equipment is always inspection-ready.",
    href: "/fire-equipment-maintenance-contracts",
    keywords: "fire equipment maintenance, servicing contract, scheduled inspections",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Fire Hydrant Installation & Testing",
    description:
      "Installation, pressure testing, and certification of fire hydrants for new developments and existing properties.",
    href: "/fire-hydrant-installation-testing",
    keywords: "fire hydrant installation, hydrant pressure testing, hydrant certification",
  },
]

const inclusions = [
  {
    icon: FileCheck,
    title: "Certificate of Compliance",
    description: "Every completed job comes with the documentation you need for audits, insurance, and OHS records.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Site Assessment",
    description: "We inspect the full site, not just the equipment on the job card, and flag anything else that needs attention.",
  },
  {
    icon: BellRing,
    title: "Follow-Up Inspection Reminder",
    description: "We track when your next annual service or certification renewal is due, so nothing lapses unnoticed.",
  },
]

export function ServicesOverview() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            itemProp="name"
          >
            Fire Detection, Suppression &amp; Compliance in Gauteng
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
            From alarm systems and extinguisher servicing to sprinkler installation and OHS compliance audits, <strong>Jero Fire Solutions</strong> protects properties across <strong>Johannesburg, Pretoria, and Gauteng</strong>. One certified team for every part of your fire safety plan.
          </p>
        </div>

        {/* Services Grid — icon-first, numbered, no photography */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.href}
              className="group relative overflow-hidden border-border transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />

              {/* Watermark number */}
              <span
                className="pointer-events-none absolute -top-4 right-2 text-7xl font-black text-primary/5 group-hover:text-accent/10 transition-colors select-none"
                aria-hidden="true"
              >
                {service.number}
              </span>

              <CardContent className="relative p-6">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3
                  className="mb-2 text-lg font-bold group-hover:text-primary transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 text-sm text-muted-foreground leading-relaxed"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-accent transition-colors"
                  itemProp="url"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's included — replaces vanity stats with concrete service inclusions */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {inclusions.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA — outlined card instead of a solid gradient block */}
        <div className="mt-12 rounded-2xl border-2 border-accent/30 bg-card p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />

          <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4">
            Need a Compliance Certificate Before Your Next Audit?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free, no obligation quote from Gauteng&apos;s certified fire detection, suppression, and compliance team. Full documentation provided on every job.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="/contact">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="/services">
                View All 6 Services
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
