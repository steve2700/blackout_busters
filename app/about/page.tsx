import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import {
  Target,
  Eye,
  CheckCircle,
  Users,
  Shield,
  ShieldCheck,
  Award,
  Handshake,
  ArrowRight,
  Phone,
  Star,
  Clock,
  Siren,
  FireExtinguisher,
  ClipboardCheck,
  GraduationCap,
  Droplets,
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Jero Fire Solutions | Fire Detection and Compliance Specialists in Gauteng",
  description:
    "Jero Fire Solutions installs, services, and certifies fire detection, suppression, and safety equipment for homes and businesses across Gauteng, keeping people safe and sites compliant.",
  keywords:
    "about Jero Fire Solutions, fire safety company Gauteng, fire compliance Johannesburg, fire equipment servicing Pretoria, OHS Act compliance",
  openGraph: {
    title: "About Jero Fire Solutions | Fire Detection and Compliance Specialists in Gauteng",
    description:
      "Certified technicians delivering fire detection, suppression, and compliance services across Gauteng, so your site stays protected and your certificates stay current.",
    images: [
      {
        url: "/jero-fire-team-technicians-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "Jero Fire Solutions technician team in Gauteng",
      },
    ],
  },
}

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance Without Shortcuts",
    description:
      "A certificate only means something if the work behind it is real. Every system we install or service is signed off honestly, not rubber stamped.",
  },
  {
    icon: Shield,
    title: "People Before Paperwork",
    description:
      "Compliance exists because fires cost lives, not just money. We design and service systems around what actually protects the people in a building.",
  },
  {
    icon: Clock,
    title: "We Answer When It Matters",
    description:
      "A fire alarm fault or an expired extinguisher certificate is not something that can wait weeks. We treat urgent callouts as urgent.",
  },
  {
    icon: Handshake,
    title: "Contracts, Not Once Off Jobs",
    description:
      "Fire safety is not a single visit, it is an ongoing responsibility. We would rather keep a client for years through maintenance contracts than sell a single service and disappear.",
  },
]

const team = [
  { role: "Certified fire detection technicians", icon: Siren },
  { role: "Extinguisher service technicians", icon: FireExtinguisher },
  { role: "Suppression system specialists", icon: Droplets },
  { role: "OHS compliance auditors", icon: ClipboardCheck },
  { role: "Fire safety trainers", icon: GraduationCap },
  { role: "Dedicated support team", icon: Users },
]

const stats = [
  { value: "Certified", label: "Technicians", sublabel: "Trained & Qualified" },
  { value: "Compliant", label: "Certification", sublabel: "OHS Act Aligned" },
  { value: "Same Day", label: "Quotes", sublabel: "No Waiting Around" },
  { value: "24 Hour", label: "Emergency Callouts", sublabel: "Always Available" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs variant="onDark" items={[{ label: "About Us" }]} />
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
              About <span className="text-accent">Jero Fire Solutions</span>
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
              Fire safety is not something you notice until the moment it fails. {" "}
              <strong className="text-white">Jero Fire Solutions</strong> exists to make sure that moment never happens, through honest installations, proper servicing, and certification that actually holds up.
            </p>

            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-2xl md:text-3xl font-bold text-accent mb-1">{stat.value}</p>
                  <p className="text-sm font-semibold text-white">{stat.label}</p>
                  <p className="text-xs text-white/70">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/Organization">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Who We Are
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl" itemProp="name">
                Fire Safety Handled Properly, Not Just Signed Off
              </h2>
              <p className="mb-4 text-muted-foreground leading-relaxed" itemProp="description">
                <strong>Jero Fire Solutions</strong> installs, services, and certifies fire detection systems, extinguishers, suppression equipment, and hydrants for homes and businesses across{" "}
                <strong>Gauteng</strong>, including <strong>Johannesburg, Pretoria, and Kempton Park</strong>.
              </p>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                A lot of fire safety compliance in South Africa gets treated as a box to tick once a year. We do not work that way. Every system we touch gets tested properly, every certificate we issue reflects what we actually found on site, and every client gets told the truth about what their building needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether it is a single extinguisher service or a full detection and suppression installation for a commercial site, the standard does not change.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <ShieldCheck className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">OHS Act Aligned</p>
                    <p className="text-xs text-muted-foreground">Certified Technicians</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                  <Clock className="h-5 w-5 text-secondary flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">24 Hour Available</p>
                    <p className="text-xs text-muted-foreground">Emergency Callouts</p>
                  </div>
                </div>
              </div>

              <meta itemProp="address" content="Aston Manor, Kempton Park, Johannesburg, Gauteng, South Africa" />
              <meta itemProp="areaServed" content="Gauteng, Johannesburg, Pretoria, Kempton Park" />
            </div>

            <div className="relative">
              {/* PLACEHOLDER: swap for a real photo of the Jero Fire Solutions team or a technician on site */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/jero-fire-team-technicians-gauteng.jpg"
                  alt="Jero Fire Solutions technicians preparing for a fire safety inspection in Gauteng"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
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

      {/* Mission and Vision */}
      <section className="bg-gradient-to-b from-muted to-muted/50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl group-hover:text-secondary transition-colors">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Make sure every detection, suppression, and extinguisher system we touch <strong>actually works when it is needed</strong>, not just on paper.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Give clients <strong>honest assessments</strong>, even when the truth is that something needs replacing rather than patching.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Keep clients <strong>compliant year round</strong>, not scrambling to fix expired certificates before an audit.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Train staff and site teams so they know what to do <strong>before an emergency</strong>, not only after one.
                  </span>
                </li>
              </ul>
            </div>

            <div className="group rounded-2xl bg-card p-8 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg group-hover:scale-110 transition-transform">
                <Eye className="h-7 w-7" aria-hidden="true" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl group-hover:text-secondary transition-colors">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Be the fire safety provider Gauteng businesses call <strong>before an inspector forces them to</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Change how fire compliance is seen, from an annual formality to <strong>an ongoing standard worth maintaining</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Reduce preventable fire damage and injury across the sites and communities we serve.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="text-muted-foreground leading-relaxed">
                    Build a reputation where our name on a certificate means <strong>something was genuinely checked</strong>.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1 relative">
              {/* PLACEHOLDER: swap for a real photo of a technician servicing an alarm panel or extinguisher */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
                <Image
                  src="/jero-fire-technician-servicing-panel.jpg"
                  alt="Jero Fire Solutions technician servicing a fire alarm panel in Gauteng"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute bottom-4 left-4 rounded-xl bg-primary/95 backdrop-blur-sm px-4 py-3 shadow-xl ring-2 ring-white/20">
                <div className="flex items-center gap-2 text-primary-foreground">
                  <Users className="h-5 w-5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold">Certified Technicians</p>
                    <p className="text-xs opacity-90">Trained & Compliant</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Our Team
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                People Who Understand <span className="text-secondary">What They Are Certifying</span>
              </h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Every technician on our team is trained on the specific systems they work on, detection, suppression, extinguishers, or hydrants, rather than being a generalist stretched across everything. That is what lets us stand behind every certificate we sign.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-3">
                {team.map((member) => (
                  <div key={member.role} className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-secondary/10 hover:border-secondary/30 border border-transparent transition-all">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 flex-shrink-0">
                      <member.icon className="h-4 w-4 text-secondary" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-medium">{member.role}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105">
                  <Link href="/contact">
                    Work With Our Team
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-secondary/30 hover:bg-secondary/10 transition-transform hover:scale-105">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-gradient-to-b from-muted/50 to-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Our Core Values
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Why Our Certificates Are <span className="text-secondary">Worth Trusting</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              These are not values we picked because they sound good. They are what separates a real fire safety inspection from a rubber stamp.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-xl hover:border-secondary/50 hover:-translate-y-2"
              >
                <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-sm font-bold text-secondary-foreground shadow-lg ring-2 ring-white/20">
                  {index + 1}
                </div>

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:scale-110 transition-all">
                  <value.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-lg font-bold group-hover:text-secondary transition-colors">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full rounded-b-2xl" />
              </div>
            ))}
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
              Ready to Get Your Site <span className="text-accent">Properly Protected?</span>
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed">
              Contact us today to discuss detection, suppression, extinguishers, training, or a maintenance contract. We will tell you honestly what your site needs, not just what is easiest to sell.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 text-base font-semibold transition-transform hover:scale-105">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Get Your Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 text-base font-semibold transition-transform hover:scale-105">
                <Link href="tel:+27781336684">Call: +27 78 133 6684</Link>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/70">
              Serving Gauteng • Certified & Compliant • 24 Hour Emergency Support
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
