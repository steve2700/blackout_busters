import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Blocks } from "lucide-react"

export const metadata: Metadata = {
  title: "Concrete Works & Bricklaying | Goshen Projects Gauteng",
  description:
    "Professional concrete and bricklaying services in Gauteng. Foundations, slabs, pathways, plastering in Pretoria & Johannesburg.",
  openGraph: {
    title: "Concrete Works & Bricklaying | Goshen Projects Gauteng",
    description: "Durable, precise, and high-quality masonry solutions for Gauteng properties.",
  },
}

export default function ConcreteWorksBricklayingPage() {
  return (
    <ServicePageTemplate
      title="Concrete Works & Bricklaying"
      description="We provide durable, precise, and high-quality masonry solutions. From foundations to decorative brickwork, our skilled masons deliver excellent results for residential and commercial projects across Gauteng."
      icon={Blocks}
      heroImage="/bricklayer-working-on-construction-site-in-gauteng-.jpg"
      features={[
        "Concrete slabs",
        "Foundations",
        "Pathways",
        "Driveways",
        "Bricklaying",
        "Plastering",
        "Structural concrete",
        "Retaining walls",
        "Decorative brickwork",
      ]}
      benefits={[
        {
          title: "Skilled Masons",
          description: "Experienced bricklayers and concrete specialists delivering precise results.",
        },
        {
          title: "Quality Concrete",
          description: "Proper mixing ratios and curing for strong, durable concrete structures.",
        },
        {
          title: "Structural Integrity",
          description: "Sound foundations and structures that meet building standards.",
        },
        {
          title: "Precision Work",
          description: "Accurate measurements and level work for professional results.",
        },
        {
          title: "Versatile Solutions",
          description: "From basic slabs to complex structural work, we handle it all.",
        },
        {
          title: "Weather Resistant",
          description: "Properly finished concrete and brickwork that withstands the elements.",
        },
      ]}
      relatedServices={[
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Road Construction & Civil Works", href: "/services/road-construction-civil-works" },
        { title: "Paving, Driveways & Surfacing", href: "/services/paving-driveways-surfacing" },
        { title: "Waterproofing Services", href: "/services/waterproofing-services" },
      ]}
    />
  )
}
