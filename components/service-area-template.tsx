import type { ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Phone, ArrowRight, MapPin, Building2, Wrench, Zap, Shield } from "lucide-react"

interface ServiceAreaTemplateProps {
  areaName: string
  description: string
  suburbs: string[]
  heroImage?: string
  introduction: string
  servicesOffered: string[]
  whyChooseUs: string[]
  nearbyAreas: { name: string; href: string }[]
  children?: ReactNode
}

const popularServices = [
  { icon: Building2, title: "Construction & Renovations", href: "/services/building-construction-renovations" },
  { icon: Wrench, title: "Property Maintenance", href: "/services/property-maintenance" },
  { icon: Zap, title: "Electrical Services", href: "/services/electrical-services" },
  { icon: Shield, title: "Security Systems", href: "/services/cctv-alarm-surveillance" },
]

export function ServiceAreaTemplate({
  areaName,
  description,
  suburbs,
  heroImage,
  introduction,
  servicesOffered,
  whyChooseUs,
  nearbyAreas,
  children,
}: ServiceAreaTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src={heroImage || "/gauteng-map-area.jpg?height=600&width=1600"}
            alt={`Goshen Projects services in ${areaName}`}
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />
        </div>

        <div className="container relative mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: areaName }]} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
                <MapPin className="h-4 w-4 text-accent" />
                Service Area
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Construction & Maintenance Services in {areaName}
              </h1>
              <p className="mb-8 text-pretty text-lg text-primary-foreground/80">{description}</p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    <Phone className="mr-2 h-5 w-5" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                >
                  <Link href="/services">
                    View Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6">
                <h3 className="mb-4 text-lg font-semibold text-white">Suburbs We Cover in {areaName}</h3>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
                    <span key={suburb} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                About Our Services
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Your Trusted Partner in {areaName}
              </h2>
              <p className="mb-6 text-muted-foreground">{introduction}</p>

              <div className="mb-6 lg:hidden">
                <h3 className="mb-3 text-sm font-medium">Suburbs We Cover:</h3>
                <div className="flex flex-wrap gap-2">
                  {suburbs.map((suburb) => (
                    <span key={suburb} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                      {suburb}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt={`Construction services in ${areaName}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
              Our Services
            </span>
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Services Available in {areaName}
            </h2>
            <p className="text-muted-foreground">
              We provide a comprehensive range of construction, maintenance, and infrastructure services to residential,
              commercial, and industrial clients in {areaName}.
            </p>
          </div>

          <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicesOffered.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-xl bg-card p-4 border border-border">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm">{service}</span>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popularServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex items-center gap-3 rounded-xl bg-card p-4 border border-border transition-all hover:border-secondary hover:shadow-lg"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <service.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium group-hover:text-secondary transition-colors">
                  {service.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {whyChooseUs.map((reason, index) => (
                  <Card key={index} className="border-border">
                    <CardContent className="p-4">
                      <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/20 text-accent text-sm font-bold">
                        {index + 1}
                      </div>
                      <p className="text-sm text-muted-foreground">{reason}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                Why {areaName} Residents & Businesses Trust Goshen Projects
              </h2>
              <p className="mb-6 text-muted-foreground">
                With years of experience serving {areaName} and the surrounding areas, we understand the unique needs of
                local residential and commercial properties. Our commitment to quality, transparency, and customer
                satisfaction has made us the preferred choice for construction and maintenance services.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      {/* Nearby Areas */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold">Also Serving Nearby Areas</h2>
          <div className="flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="inline-flex items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-medium transition-all hover:bg-secondary hover:text-secondary-foreground border border-border"
              >
                <MapPin className="h-4 w-4" />
                {area.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Ready to Start Your Project in {areaName}?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Contact Goshen Projects today for a free consultation and quotation. Our team is ready to provide expert
              guidance and tailored solutions for your {areaName} property.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Request a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
