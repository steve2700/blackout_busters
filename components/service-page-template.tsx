import type { ReactNode } from "react"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowRight, type LucideIcon } from "lucide-react"

interface ServicePageTemplateProps {
  title: string
  description: string
  icon: LucideIcon
  heroImage: string
  features: string[]
  benefits: { title: string; description: string }[]
  process?: { step: number; title: string; description: string }[]
  relatedServices?: { title: string; href: string }[]
  children?: ReactNode
}

export function ServicePageTemplate({
  title,
  description,
  icon: Icon,
  heroImage,
  features,
  benefits,
  process,
  relatedServices,
  children,
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: title }]} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <Icon className="h-8 w-8" />
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                {title} in Gauteng
              </h1>
              <p className="text-pretty text-lg text-primary-foreground/80">{description}</p>
            </div>
            <div className="hidden lg:block">
              <img src={heroImage || "/placeholder.svg"} alt={`${title} - Goshen Projects`} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                What We Offer
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">Our {title} Services</h2>
              <p className="mb-8 text-muted-foreground">
                Goshen Projects provides comprehensive {title.toLowerCase()} solutions for residential, commercial, and
                industrial clients across Pretoria, Johannesburg, and the wider Gauteng region.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:hidden">
              <img src={heroImage || "/placeholder.svg"} alt={`${title} - Goshen Projects`} className="rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Why Choose Us
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">Benefits of Our {title}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {process && (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Our Process
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">How We Work</h2>
              <p className="text-muted-foreground">
                Our streamlined process ensures efficient project execution from start to finish.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-secondary-foreground">
                    {step.step}
                  </div>
                  <h3 className="mb-2 font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Content */}
      {children}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold">Related Services</h2>
            <div className="flex flex-wrap gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  {service.title}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact Goshen Projects today for a free consultation and quotation for your {title.toLowerCase()} project
              in Gauteng.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Request a Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
