import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Droplets,
  Siren,
  FireExtinguisher,
  GraduationCap,
  Wrench,
  ShieldCheck,
  CheckCircle,
  Phone,
  ArrowRight,
  FileCheck,
  ClipboardCheck,
  Gauge,
  Waves,
  Settings2,
} from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

export const metadata: Metadata = {
  title: "Sprinkler & Suppression Systems",
  description:
    "Sprinkler and fire suppression system installation, inspection, and maintenance for commercial and industrial properties across Gauteng.",
}

const included = [
  {
    icon: Waves,
    title: "Wet & Dry Sprinkler Systems",
    description: "Sprinkler networks designed and installed for the layout and risk profile of your building.",
  },
  {
    icon: Settings2,
    title: "Suppression System Installation",
    description: "Gas and chemical suppression for server rooms, kitchens, and equipment-sensitive areas.",
  },
  {
    icon: Gauge,
    title: "Inspection & Testing",
    description: "Regular inspection of pipework, heads, valves, and pressure to confirm the system will fire correctly.",
  },
  {
    icon: FileCheck,
    title: "Valve & Pump Maintenance",
    description: "Servicing of control valves and pump sets that keep the system pressurized and ready.",
  },
]

const benefits = [
  "Automatic response contains fire spread before it becomes uncontrollable",
  "Protects high-value equipment, stock, and server rooms",
  "Often a legal requirement for commercial and industrial occupancies",
  "Supports lower insurance risk ratings for covered properties",
]

const process = [
  {
    step: "01",
    title: "Site Assessment & Design",
    description: "We assess the building and design a sprinkler or suppression layout suited to the risk.",
  },
  {
    step: "02",
    title: "Installation",
    description: "Pipework, heads, valves, and suppression equipment installed with minimal disruption.",
  },
  {
    step: "03",
    title: "Pressure Testing & Commissioning",
    description: "Full system pressure test and commissioning before handover.",
  },
  {
    step: "04",
    title: "Ongoing Inspection",
    description: "Scheduled inspection and maintenance to keep the system compliant and reliable.",
  },
]

const relatedServices = [
  { icon: Siren, title: "Fire Detection & Alarm Systems", href: "/fire-detection-alarm-systems" },
  { icon: FireExtinguisher, title: "Fire Extinguisher Supply & Servicing", href: "/fire-extinguisher-supply-servicing" },
  { icon: GraduationCap, title: "Fire Safety Training & Compliance", href: "/fire-safety-training-compliance" },
  { icon: Wrench, title: "Fire Equipment Maintenance Contracts", href: "/fire-equipment-maintenance-contracts" },
  { icon: ShieldCheck, title: "Fire Hydrant Installation & Testing", href: "/fire-hydrant-installation-testing" },
]

export default function SprinklerSuppressionSystemsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/sprinkler-system-installation-gauteng.jpg"
            alt="Jero Fire Solutions technician installing a sprinkler system in Gauteng"
            fill
            className="object-cover opacity-20"
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80" />
        </div>

        <div className="container relative mx-auto px-4 py-16 lg:px-8 lg:py-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-primary-foreground">Sprinkler &amp; Suppression Systems</span>
          </nav>

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Droplets className="h-7 w-7" aria-hidden="true" />
            </div>
            <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              Sprinkler &amp; Suppression Systems
            </h1>
            <p className="mb-8 text-pretty text-lg text-primary-foreground/80 md:text-xl">
              Installation, inspection, and maintenance of sprinkler and suppression systems &mdash; automatic protection for commercial and industrial properties.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-14 px-8">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get a Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#25D366]/90 h-14 px-8">
                <a href="https://wa.me/27781336684" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              What&apos;s Included
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Complete Suppression Coverage
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((item) => (
              <Card key={item.title} className="border-border transition-all hover:border-accent hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Image */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border order-2 lg:order-1">
              <Image
                src="/suppression-system-testing-commercial.jpg"
                alt="Jero Fire Solutions technician testing a suppression system in a commercial building"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Why It Matters
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Automatic Protection When It Matters Most
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Our Process
            </span>
            <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
              From Design to Commissioning
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="relative rounded-2xl border border-border bg-card p-6">
                <span className="mb-3 block text-4xl font-black text-primary/10">{item.step}</span>
                <h3 className="mb-2 text-base font-bold">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">
              Related Fire Safety Services
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-5 text-center transition-all hover:border-secondary hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <service.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold leading-snug group-hover:text-secondary transition-colors">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-2xl border-2 border-accent/30 bg-card p-8 lg:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary" aria-hidden="true" />
            <ClipboardCheck className="mx-auto mb-4 h-10 w-10 text-accent" aria-hidden="true" />
            <h2 className="mb-4 text-2xl font-bold lg:text-3xl">
              Need Sprinkler or Suppression Cover?
            </h2>
            <p className="mb-8 max-w-2xl mx-auto text-muted-foreground">
              Get a free, no obligation quote for sprinkler and suppression system installation or servicing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8">
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8">
                <Link href="tel:+27781336684">
                  Call: +27 78 133 6684
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
