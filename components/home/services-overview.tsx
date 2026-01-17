import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Wrench,
  Droplets,
  Zap,
  Home,
  Shield,
  Hammer,
  PaintBucket,
  Construction,
  Fence,
  Camera,
  Sun,
  ArrowRight,
  Car,
  Snowflake,
} from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Building Construction & Renovations",
    description:
      "New residential, commercial, and industrial buildings. Renovations, refurbishments, and home extensions.",
    href: "/services/building-construction-renovations",
    image: "/modern-building-construction-site-with-scaffolding.jpg",
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Comprehensive residential and commercial maintenance, preventative programs, and facility management.",
    href: "/services/property-maintenance",
    image: "/property-maintenance-worker-fixing-repairs-profess.jpg",
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Complete plumbing installations and repairs, leak detection, drain cleaning, and geyser maintenance.",
    href: "/services/plumbing-services",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
  },
  {
    icon: Zap,
    title: "Electrical Services",
    description:
      "Electrical installations, rewiring, fault finding, lighting installations, and comprehensive maintenance.",
    href: "/services/electrical-services",
    image: "/electrician-working-on-electrical-panel-wiring-sou.jpg",
  },
  {
    icon: Home,
    title: "Roofing & Repairs",
    description:
      "Expert roof leak detection and repairs, tile and IBR roofing, waterproofing, and gutter installations.",
    href: "/services/roofing-services",
    image: "/roofer-installing-tiles-on-residential-roof-south-.jpg",
  },
  {
    icon: Shield,
    title: "Waterproofing",
    description:
      "Professional waterproofing for roofs, balconies, bathrooms, foundations, and damp proofing solutions.",
    href: "/services/waterproofing-services",
    image: "/waterproofing-membrane-application-on-roof-south-a.jpg",
  },
  {
    icon: Hammer,
    title: "Carpentry Services",
    description: "Quality roof timber structures, doors, frames, decking, pergolas, cabinetry, and repairs.",
    href: "/services/carpentry-services",
    image: "/carpenter-craftsman-working-on-wood-cabinetry-work.jpg",
  },
  {
    icon: Construction,
    title: "Kitchen & Bathroom",
    description: "Custom kitchen cupboards, bathroom vanities, storage units, and built-in cupboards.",
    href: "/services/kitchen-bathroom-cupboards",
    image: "/modern-kitchen-renovation-with-white-cabinets-sout.jpg",
  },
  {
    icon: PaintBucket,
    title: "Painting & Tiling",
    description: "Interior and exterior painting, floor and wall tiling, surface preparation, and decorative finishes.",
    href: "/services/painting-tiling-finishing",
    image: "/professional-painter-painting-interior-wall-home-r.jpg",
  },
  {
    icon: Car,
    title: "Paving & Driveways",
    description: "Brick paving, tar paving, driveway construction, walkways, parking areas, and resurfacing.",
    href: "/services/paving-driveways-surfacing",
    image: "/brick-paving-driveway-installation-residential-sou.jpg",
  },
  {
    icon: Fence,
    title: "Fencing & Access Control",
    description: "Palisade fencing, electric fencing, electric gate automation, and intercom systems.",
    href: "/services/fencing-gates-access-control",
    image: "/modern-palisade-security-fencing-gate-installation.jpg",
  },
  {
    icon: Camera,
    title: "CCTV & Security",
    description: "State-of-the-art CCTV installations, alarm systems, remote monitoring, and security maintenance.",
    href: "/services/cctv-alarm-surveillance",
    image: "/cctv-security-camera-installation-professional-mon.jpg",
  },
  {
    icon: Sun,
    title: "Solar Solutions",
    description: "Solar power installations, solar geysers, inverter and battery backup systems.",
    href: "/services/solar-energy-solutions",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Snowflake,
    title: "Air Conditioning",
    description:
      "Professional air conditioning installation, servicing, and maintenance for efficient climate control.",
    href: "/services/air-conditioning-services",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    icon: Construction,
    title: "Road & Civil Works",
    description: "Road construction, earthworks, site preparation, stormwater drainage, and concrete works.",
    href: "/services/road-construction-civil-works",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Our Services
          </span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Comprehensive Solutions for Every Project
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            From construction and renovations to maintenance and security, Goshen Projects provides integrated solutions
            that minimize the need for multiple contractors while guaranteeing quality, compliance, and professionalism.
          </p>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden border-border transition-all duration-300 hover:border-secondary hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/modern-renovated-kitchen-interior-design-south-afr.jpg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-lg">
                  <service.icon className="h-6 w-6" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
                >
                  Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.slice(6).map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-secondary hover:shadow-lg"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                <service.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-medium truncate group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground">View Details</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8">
            <Link href="/services">
              View All 16 Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
