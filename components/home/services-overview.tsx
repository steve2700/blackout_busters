import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Zap,
  Wrench,
  Settings2,
  SearchCheck,
  Sun,
  BatteryCharging,
  Fuel,
  Activity,
  FileCheck,
  CreditCard,
  Building2,
  Droplets,
  Camera,
  Siren,
  ArrowRight,
  ClipboardCheck,
  BellRing,
  Phone,
} from "lucide-react"

const PHONE_TEL = "tel:+27836171112"
const PHONE_DISPLAY = "+27 83 617 1112"

type ServiceGroup = {
  label: string
  blurb: string
  services: {
    icon: typeof Zap
    title: string
    description: string
    href: string
  }[]
}

const groups: ServiceGroup[] = [
  {
    label: "Electrical Core",
    blurb: "The everyday work that keeps a property safe and running.",
    services: [
      {
        icon: Zap,
        title: "Electrical Installation",
        description: "New wiring, circuits, and fittings installed to code for homes and businesses.",
        href: "/electrical-installation",
      },
      {
        icon: Wrench,
        title: "Electrical Repairs",
        description: "Fast, reliable fixes for faults, trips, and failing electrical components.",
        href: "/electrical-repairs",
      },
      {
        icon: Settings2,
        title: "Maintenance",
        description: "Scheduled electrical maintenance to catch problems before they become outages.",
        href: "/maintenance",
      },
      {
        icon: SearchCheck,
        title: "Fault Finding & Inspections",
        description: "Diagnostics that find the actual cause, not just the symptom.",
        href: "/fault-finding-inspections",
      },
    ],
  },
  {
    label: "Solar & Backup Power",
    blurb: "For when the grid can't be trusted to stay on.",
    services: [
      {
        icon: Sun,
        title: "Solar Installation",
        description: "Panel systems sized and installed for real Gauteng usage patterns.",
        href: "/solar-installation",
      },
      {
        icon: BatteryCharging,
        title: "Backup Power (Inverter & Battery)",
        description: "Inverter and battery setups that kick in the moment the power drops.",
        href: "/backup-power-inverter-battery",
      },
      {
        icon: Fuel,
        title: "Generator Installation & Servicing",
        description: "Sizing, installation, and servicing for standby generators.",
        href: "/generator-installation-servicing",
      },
      {
        icon: Activity,
        title: "Load Shedding Solutions",
        description: "A consultation to match the right backup setup to your budget and needs.",
        href: "/load-shedding-solutions",
      },
    ],
  },
  {
    label: "Compliance & Upgrades",
    blurb: "The paperwork and panel work that keeps you covered.",
    services: [
      {
        icon: FileCheck,
        title: "DB Board Upgrades & COC",
        description: "Distribution board upgrades and Certificates of Compliance for sales, audits, and insurance.",
        href: "/db-board-upgrades-compliance-certificates",
      },
      {
        icon: CreditCard,
        title: "Prepaid Meter Installation",
        description: "Prepaid meter setup and replacement, done properly and signed off.",
        href: "/prepaid-meter-installation",
      },
      {
        icon: Building2,
        title: "Commercial & Industrial Electrical",
        description: "Larger-scale electrical work for commercial and industrial sites.",
        href: "/commercial-industrial-electrical",
      },
    ],
  },
  {
    label: "Home & Safety Extras",
    blurb: "The services that usually get bundled in alongside electrical work.",
    services: [
      {
        icon: Droplets,
        title: "Geyser Installation & Repairs",
        description: "Geyser installs, repairs, and electrical connection work in one visit.",
        href: "/geyser-installation-repairs",
      },
      {
        icon: Camera,
        title: "CCTV & Security Installation",
        description: "Camera systems installed and wired in alongside your electrical work.",
        href: "/cctv-security-installation",
      },
      {
        icon: Siren,
        title: "Emergency / 24-Hour Callout",
        description: "Urgent electrical faults don't wait for business hours, and neither do we.",
        href: "/emergency-247-callout",
      },
    ],
  },
]

const inclusions = [
  {
    icon: FileCheck,
    title: "Compliance Certificate (COC)",
    description: "Documentation you can hand to an auditor, insurer, or buyer without a follow-up call.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Site Assessment",
    description: "We look at the whole installation, not just the fault on the job card.",
  },
  {
    icon: BellRing,
    title: "Follow-Up Service Reminder",
    description: "We keep track of when your next maintenance or inspection is due.",
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
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            itemProp="name"
          >
            Electrical, Solar &amp; Backup Power in Gauteng
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
            <strong>Blackout Busters</strong> covers everything from a single faulty plug point to a full
            backup power system. Installations, repairs, and the compliance paperwork to prove it,
            across <strong>Johannesburg, Pretoria, and Gauteng</strong>.
          </p>
        </div>

        {/* Grouped services — 4 categories instead of one long flat grid */}
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                <h3 className="text-xl font-bold">{group.label}</h3>
                <p className="text-sm text-muted-foreground">{group.blurb}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.services.map((service) => (
                  <Card
                    key={service.href}
                    className="group relative overflow-hidden border-border transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1"
                    itemScope
                    itemType="https://schema.org/Service"
                    itemProp="itemListElement"
                  >
                    <CardContent className="relative p-5">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                        <service.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h4 className="mb-1.5 text-sm font-bold group-hover:text-primary transition-colors" itemProp="name">
                        {service.title}
                      </h4>
                      <p className="mb-3 text-xs text-muted-foreground leading-relaxed" itemProp="description">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center text-xs font-semibold text-primary hover:text-accent transition-colors"
                        itemProp="url"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
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

        {/* CTA */}
        <div className="mt-12 rounded-2xl border-2 border-accent/30 bg-card p-8 lg:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />

          <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us what's going on and we'll point you at the right fix, from a quick repair to a full
            backup power setup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <a href={PHONE_TEL}>
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="/services">
                View All 14 Services
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
