import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Phone,
  Blocks,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Construction, Maintenance & Infrastructure Solutions in Gauteng",
  description:
    "Explore Goshen Projects' comprehensive services: construction, renovations, plumbing, electrical, roofing, waterproofing, paving, security systems, solar solutions, and more in Gauteng.",
  openGraph: {
    title: "Our Services | Goshen Projects - Gauteng's One-Stop Service Provider",
    description:
      "16+ professional services including construction, maintenance, civil works, security, and energy solutions for Pretoria, Johannesburg & Gauteng.",
  },
}

const services = [
  {
    icon: Building2,
    title: "Building Construction & Renovations",
    description:
      "New residential, commercial, and industrial buildings. Renovations, refurbishments, fit-outs, home extensions, structural alterations, office and retail space optimization, and structural repairs.",
    href: "/services/building-construction-renovations",
    features: [
      "New residential builds",
      "Commercial construction",
      "Renovations & refurbishments",
      "Home extensions",
      "Structural alterations",
    ],
  },
  {
    icon: Wrench,
    title: "Property Maintenance",
    description:
      "Comprehensive residential and commercial maintenance, preventative maintenance programs, general repairs, handyman services, and ongoing facility maintenance support for Gauteng properties.",
    href: "/services/property-maintenance",
    features: [
      "Residential maintenance",
      "Commercial maintenance",
      "Preventative programs",
      "General repairs",
      "Facility support",
    ],
  },
  {
    icon: Droplets,
    title: "Plumbing Services",
    description:
      "Complete plumbing installations and repairs, leak detection, burst pipe repairs, drain cleaning and unblocking, geyser installation and maintenance, bathroom and kitchen plumbing.",
    href: "/services/plumbing-services",
    features: ["Installations & repairs", "Leak detection", "Burst pipe repairs", "Geyser services", "Drain cleaning"],
  },
  {
    icon: Zap,
    title: "Electrical Repairs & Installations",
    description:
      "Electrical installations and rewiring, fault finding and repairs, interior and exterior lighting installations, power point installations, and comprehensive electrical maintenance.",
    href: "/services/electrical-services",
    features: [
      "Installations & rewiring",
      "Fault finding",
      "Lighting installations",
      "Power points",
      "Electrical maintenance",
    ],
  },
  {
    icon: Home,
    title: "Roofing & Roof Leak Repairs",
    description:
      "Expert roof leak detection and repairs, tile, IBR, and corrugated roofing, waterproofing and sealing, gutter installation and repairs using high-quality materials.",
    href: "/services/roofing-services",
    features: [
      "Leak detection & repairs",
      "Tile roofing",
      "IBR & corrugated roofing",
      "Waterproofing",
      "Gutter installation",
    ],
  },
  {
    icon: Shield,
    title: "Waterproofing Services",
    description:
      "Professional waterproofing for roofs, balconies, and bathrooms, foundation and wall waterproofing, damp proofing to protect against moisture and water damage.",
    href: "/services/waterproofing-services",
    features: [
      "Roof waterproofing",
      "Balcony waterproofing",
      "Foundation protection",
      "Wall waterproofing",
      "Damp proofing",
    ],
  },
  {
    icon: Hammer,
    title: "Carpentry Services",
    description:
      "Quality roof timber structures, doors, frames, and trims, decking, pergolas, and cabinetry, general carpentry repairs combining functionality with aesthetic appeal.",
    href: "/services/carpentry-services",
    features: ["Roof timber structures", "Doors & frames", "Decking & pergolas", "Cabinetry", "Carpentry repairs"],
  },
  {
    icon: Construction,
    title: "Kitchen & Bathroom Cupboards",
    description:
      "Custom kitchen cupboards, bathroom vanities and storage units, built-in cupboards, cupboard repairs and upgrades designed to maximize space, functionality, and style.",
    href: "/services/kitchen-bathroom-cupboards",
    features: [
      "Custom kitchen cupboards",
      "Bathroom vanities",
      "Storage solutions",
      "Built-in cupboards",
      "Repairs & upgrades",
    ],
  },
  {
    icon: PaintBucket,
    title: "Painting, Tiling & Finishing",
    description:
      "Interior and exterior painting, floor and wall tiling, surface preparation and sealing, decorative finishes that add value, beauty, and long-lasting quality to any property.",
    href: "/services/painting-tiling-finishing",
    features: [
      "Interior painting",
      "Exterior painting",
      "Floor & wall tiling",
      "Surface preparation",
      "Decorative finishes",
    ],
  },
  {
    icon: Car,
    title: "Paving, Driveways & Surfacing",
    description:
      "Brick paving, tar paving, driveway construction, walkways and parking areas, paving repairs and resurfacing creating durable and visually appealing surfaces.",
    href: "/services/paving-driveways-surfacing",
    features: ["Brick paving", "Tar paving", "Driveway construction", "Walkways & parking", "Repairs & resurfacing"],
  },
  {
    icon: Construction,
    title: "Road Construction & Civil Works",
    description:
      "Road construction, earthworks and site preparation, stormwater drainage systems, concrete works and foundations, kerbing and road surfacing to engineering standards.",
    href: "/services/road-construction-civil-works",
    features: ["Road construction", "Earthworks", "Stormwater drainage", "Concrete works", "Kerbing & surfacing"],
  },
  {
    icon: Blocks,
    title: "Concrete Works & Bricklaying",
    description:
      "Concrete slabs and foundations, pathways and driveways, bricklaying and plastering, structural concrete works providing durable, precise, and high-quality masonry solutions.",
    href: "/services/concrete-works-bricklaying",
    features: ["Concrete slabs", "Foundations", "Bricklaying", "Plastering", "Structural concrete"],
  },
  {
    icon: Fence,
    title: "Fencing, Gates & Access Control",
    description:
      "Palisade fencing, electric fencing, electric gates and automation, garage doors, intercom systems providing customizable and reliable security solutions.",
    href: "/services/fencing-gates-access-control",
    features: ["Palisade fencing", "Electric fencing", "Gate automation", "Garage doors", "Intercom systems"],
  },
  {
    icon: Camera,
    title: "CCTV, Alarm & Surveillance Systems",
    description:
      "State-of-the-art CCTV installations, alarm systems, remote monitoring, security system maintenance tailored to residential and commercial needs.",
    href: "/services/cctv-alarm-surveillance",
    features: ["CCTV installation", "Alarm systems", "Remote monitoring", "Security maintenance", "Custom solutions"],
  },
  {
    icon: Sun,
    title: "Solar & Energy Solutions",
    description:
      "Solar power installations, solar geysers, inverter and battery backup systems, energy efficiency solutions helping reduce energy costs while promoting sustainable practices.",
    href: "/services/solar-energy-solutions",
    features: ["Solar power", "Solar geysers", "Inverter systems", "Battery backup", "Energy efficiency"],
  },
  {
    icon: Snowflake,
    title: "Air Conditioning Services",
    description:
      "Professional air conditioning installation, servicing, and maintenance ensuring efficient and reliable climate control for homes and businesses.",
    href: "/services/air-conditioning-services",
    features: ["AC installation", "Servicing", "Maintenance", "Climate control", "Efficiency optimization"],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Our Services in Gauteng
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/80 md:text-xl">
              Goshen Projects offers 16+ comprehensive services covering construction, maintenance, infrastructure,
              security, and energy solutions. We minimize the need for multiple contractors by providing integrated,
              professional services across Pretoria, Johannesburg, and the greater Gauteng region.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group flex flex-col border-border transition-all hover:border-secondary hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <CardDescription className="mb-4 flex-1">{service.description}</CardDescription>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-sm font-semibold text-secondary hover:underline"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
              Need a Service Not Listed?
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Our integrated approach means we can often accommodate specialized requests. Contact us to discuss your
              specific project needs and receive a tailored quotation.
            </p>
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Request a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
