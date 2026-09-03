import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Phone,
  CheckCircle,
  Award,
  Clock,
  ShieldCheck,
  MapPin,
} from "lucide-react"

const PHONE_TEL = "tel:+27836171112"
const PHONE_DISPLAY = "+27 83 617 1112"

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

const services = [
  {
    icon: Zap,
    title: "Electrical Installation",
    description: "New wiring, circuits, and fittings installed to code for homes, offices, and industrial sites.",
    href: "/electrical-installation",
    features: ["New wiring & circuits", "Distribution boards", "New build & renovations", "Compliance certification", "Testing & sign-off"],
    featured: true,
  },
  {
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Fast, reliable fixes for faults, trips, and failing electrical components.",
    href: "/electrical-repairs",
    features: ["Fault repairs", "Tripping DBs", "Socket & switch faults", "Rewiring sections", "Emergency call-outs"],
    featured: false,
  },
  {
    icon: Sun,
    title: "Solar Installation",
    description: "Panel systems sized and installed to match real household or business usage.",
    href: "/solar-installation",
    features: ["System design", "Panel installation", "Grid-tied & hybrid setups", "Monitoring setup", "Compliance certification"],
    featured: true,
  },
  {
    icon: Settings2,
    title: "Maintenance",
    description: "Scheduled electrical maintenance to catch problems before they cause an outage.",
    href: "/maintenance",
    features: ["Scheduled visits", "Preventative checks", "Multi-site contracts", "Priority response", "Service records"],
    featured: false,
  },
  {
    icon: BatteryCharging,
    title: "Backup Power (Inverter & Battery)",
    description: "Inverter and battery setups that kick in the moment the grid goes down.",
    href: "/backup-power-inverter-battery",
    features: ["Inverter installation", "Battery sizing", "Auto changeover", "Load assessment", "Compliance certification"],
    featured: false,
  },
  {
    icon: Fuel,
    title: "Generator Installation & Servicing",
    description: "Sizing, installation, and servicing for standby generators.",
    href: "/generator-installation-servicing",
    features: ["Generator sizing", "Installation & wiring", "Auto-start setup", "Scheduled servicing", "Fuel system checks"],
    featured: false,
  },
  {
    icon: Activity,
    title: "Load Shedding Solutions",
    description: "A consultation to match the right backup setup to your budget and needs.",
    href: "/load-shedding-solutions",
    features: ["Usage assessment", "System comparison", "Budget planning", "Stage-based recommendations", "Ongoing advice"],
    featured: false,
  },
  {
    icon: FileCheck,
    title: "DB Board Upgrades & COC",
    description: "Distribution board upgrades and Certificates of Compliance for sales, audits, and insurance.",
    href: "/db-board-upgrades-compliance-certificates",
    features: ["DB board upgrades", "Certificate of Compliance", "Pre-sale inspections", "Insurance requirements", "Fault correction"],
    featured: false,
  },
  {
    icon: Droplets,
    title: "Geyser Installation & Repairs",
    description: "Geyser installs, repairs, and the electrical connection work that goes with them.",
    href: "/geyser-installation-repairs",
    features: ["Geyser installation", "Element & thermostat repairs", "Leak-related electrical faults", "Timer installation", "Replacement quotes"],
    featured: false,
  },
  {
    icon: Camera,
    title: "CCTV & Security Installation",
    description: "Camera systems installed and wired in alongside your electrical work.",
    href: "/cctv-security-installation",
    features: ["Camera installation", "Wiring & power runs", "Remote viewing setup", "System upgrades", "Maintenance"],
    featured: false,
  },
  {
    icon: SearchCheck,
    title: "Fault Finding & Inspections",
    description: "Diagnostics that find the actual cause, not just the symptom.",
    href: "/fault-finding-inspections",
    features: ["Fault diagnostics", "Pre-purchase inspections", "Insurance inspections", "Thermal checks", "Written reports"],
    featured: false,
  },
  {
    icon: CreditCard,
    title: "Prepaid Meter Installation",
    description: "Prepaid meter setup and replacement, done properly and signed off.",
    href: "/prepaid-meter-installation",
    features: ["New meter installation", "Meter replacement", "Municipal coordination", "Faulty meter diagnosis", "Sign-off documentation"],
    featured: false,
  },
  {
    icon: Siren,
    title: "Emergency / 24-Hour Callout",
    description: "Urgent electrical faults don't wait for business hours — neither do we.",
    href: "/emergency-247-callout",
    features: ["24-hour availability", "Urgent fault response", "Safety-first triage", "Temporary fixes on-site", "Follow-up repairs"],
    featured: false,
  },
  {
    icon: Building2,
    title: "Commercial & Industrial Electrical",
    description: "Larger-scale electrical work for commercial and industrial sites.",
    href: "/commercial-industrial-electrical",
    features: ["Three-phase installations", "Panel & switchgear work", "Site maintenance contracts", "Compliance documentation", "Scheduled shutdown work"],
    featured: false,
  },
]

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
              <Zap className="h-4 w-4 text-accent" aria-hidden="true" />
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
              From a single faulty plug point to a full backup power system, we keep your property running.
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
              {/* TODO: swap for a real photo of the Blackout Busters team or a technician on site */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/blackout-busters-team-electricians-gauteng.jpg"
                  alt="Blackout Busters electricians ready for an installation in Gauteng"
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
