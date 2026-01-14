import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Hammer } from "lucide-react"

export const metadata: Metadata = {
  title: "Carpentry Services | Goshen Projects Gauteng",
  description:
    "Professional carpentry services in Gauteng. Roof timber, doors, frames, decking, pergolas, and cabinetry in Pretoria & Johannesburg.",
  openGraph: {
    title: "Carpentry Services | Goshen Projects Gauteng",
    description: "Quality woodwork combining functionality with aesthetic appeal for homes and businesses in Gauteng.",
  },
}

export default function CarpentryServicesPage() {
  return (
    <ServicePageTemplate
      title="Carpentry Services"
      description="We provide high-quality woodwork that combines functionality with aesthetic appeal. Our skilled carpenters create custom solutions for residential and commercial properties throughout Gauteng."
      icon={Hammer}
      heroImage="/carpenter-working-on-custom-cabinetry-in-gauteng-so.jpg"
      features={[
        "Roof timber structures",
        "Doors & frames",
        "Trims & moldings",
        "Decking",
        "Pergolas",
        "Cabinetry",
        "General carpentry repairs",
        "Custom woodwork",
        "Furniture repairs",
      ]}
      benefits={[
        {
          title: "Skilled Craftsmen",
          description: "Our carpenters bring years of experience and attention to detail to every project.",
        },
        {
          title: "Custom Solutions",
          description: "We create bespoke woodwork tailored to your specific requirements and space.",
        },
        {
          title: "Quality Materials",
          description: "We source the best timber and materials for durability and aesthetic appeal.",
        },
        {
          title: "Functional & Beautiful",
          description: "Our work balances practical functionality with visual appeal.",
        },
        {
          title: "Precision Work",
          description: "Accurate measurements and precise craftsmanship for perfect results.",
        },
        {
          title: "Repair Expertise",
          description: "We also restore and repair existing woodwork to like-new condition.",
        },
      ]}
      relatedServices={[
        { title: "Kitchen & Bathroom Cupboards", href: "/services/kitchen-bathroom-cupboards" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Roofing & Roof Leak Repairs", href: "/services/roofing-services" },
        { title: "Painting, Tiling & Finishing", href: "/services/painting-tiling-finishing" },
      ]}
    />
  )
}
