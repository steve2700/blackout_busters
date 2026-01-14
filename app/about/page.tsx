import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Target, Eye, CheckCircle, Users, Shield, Award, Leaf, Handshake, ArrowRight, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "About Goshen Projects | Construction & Infrastructure Experts in Gauteng",
  description:
    "Learn about Goshen Projects - Gauteng's trusted integrated service provider for construction, infrastructure, maintenance & security solutions. Our mission, vision, and commitment to excellence.",
  openGraph: {
    title: "About Goshen Projects | Construction & Infrastructure Experts in Gauteng",
    description:
      "Gauteng's trusted integrated service provider. Skilled professionals delivering construction, maintenance, and infrastructure solutions in Pretoria & Johannesburg.",
  },
}

const values = [
  {
    icon: Award,
    title: "Excellence in Every Project",
    description:
      "We deliver the highest standards of workmanship, ensuring client satisfaction, safety, and long-term value in every project we undertake.",
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description:
      "We maintain strict adherence to South African building, electrical, and plumbing regulations, prioritizing safety at every step.",
  },
  {
    icon: Leaf,
    title: "Innovation & Sustainability",
    description:
      "We embrace innovative solutions and sustainable practices, offering cost-effective approaches that are environmentally responsible.",
  },
  {
    icon: Handshake,
    title: "Long-term Relationships",
    description:
      "We build lasting partnerships with our clients through trust, transparency, and consistent delivery of exceptional results.",
  },
]

const team = [
  "Highly skilled engineers",
  "Experienced technicians",
  "Professional carpenters",
  "Licensed plumbers",
  "Qualified electricians",
  "Dedicated project managers",
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              About Goshen Projects
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/80 md:text-xl">
              Founded with the vision to provide top-quality, reliable, and fully integrated building and infrastructure
              services in Gauteng, Goshen Projects has become a trusted partner for residential, commercial, industrial,
              and public sector clients.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Who We Are
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Trusted Partner for Construction & Infrastructure in Gauteng
              </h2>
              <p className="mb-4 text-muted-foreground">
                Goshen Projects is a proudly South African company delivering comprehensive construction, property
                maintenance, civil works, paving, security, electrical, plumbing, solar, and renovation services
                specifically for clients in Gauteng, including Pretoria and Johannesburg.
              </p>
              <p className="mb-6 text-muted-foreground">
                We specialize in providing reliable, high-quality services for residential, commercial, industrial, and
                public sector projects. Our team ensures efficient project execution, minimizing the need for multiple
                contractors and guaranteeing quality, compliance, and professionalism from start to finish.
              </p>
              <p className="text-muted-foreground">
                We are committed to innovative solutions, sustainability, and exceeding client expectations in every
                project we undertake.
              </p>
            </div>
            <div className="relative">
              <img
                src="/construction-team-meeting-on-site-in-gauteng-south-.jpg"
                alt="Goshen Projects team meeting on a construction site in Gauteng"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl bg-card p-8 shadow-sm lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Our Mission</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Deliver excellence in every project, ensuring client satisfaction, safety, and long-term value.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Maintain the highest standards of safety, compliance, and quality in all our work.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Foster sustainable and innovative solutions in every project we undertake.
                  </span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-card p-8 shadow-sm lg:p-12">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Eye className="h-7 w-7" />
              </div>
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">Our Vision</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Become the most trusted and sought-after multi-service construction and maintenance company in
                    Gauteng.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Empower communities by delivering quality infrastructure and property solutions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-muted-foreground">
                    Lead in innovation, sustainability, and service excellence within the South African construction
                    industry.
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <img
                src="/diverse-construction-team-working-together-in-gaut.jpg"
                alt="Diverse Goshen Projects team working together"
                className="rounded-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Our Team
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                A Team Committed to Excellence
              </h2>
              <p className="mb-6 text-muted-foreground">
                We bring together a team of highly skilled professionals committed to excellence. Our years of
                experience in construction, maintenance, and infrastructure sectors allow us to provide tailored
                solutions for residential, commercial, and industrial clients.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                {team.map((member) => (
                  <div key={member} className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-secondary" />
                    <span className="text-sm">{member}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Work With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Our Values
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              The Principles That Guide Us
            </h2>
            <p className="text-muted-foreground">
              Our core values shape every decision we make and every project we deliver.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Ready to Partner with Goshen Projects?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact us today to discuss your construction, maintenance, or infrastructure project. We&apos;re here to
              provide expert guidance and tailored solutions.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
