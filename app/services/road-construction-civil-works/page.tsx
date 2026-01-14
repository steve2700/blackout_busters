import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Road Construction & Civil Works | Goshen Projects Gauteng",
  description:
    "Professional road construction and civil works in Gauteng. Earthworks, drainage systems, concrete foundations in Pretoria & Johannesburg.",
  openGraph: {
    title: "Road Construction & Civil Works | Goshen Projects Gauteng",
    description: "Civil engineering projects performed to engineering standards for long-lasting infrastructure.",
  },
}

export default function RoadConstructionCivilWorksPage() {
  return (
    <ServicePageTemplate
      title="Road Construction & Civil Works"
      description="Our civil works are performed to engineering standards, ensuring long-lasting infrastructure. We provide comprehensive civil engineering solutions for public and private sector projects throughout Gauteng."
      icon={Construction}
      heroImage="/road-construction-equipment-at-work-in-gauteng-sout.jpg"
      features={[
        "Road construction",
        "Earthworks",
        "Site preparation",
        "Stormwater drainage systems",
        "Concrete works",
        "Foundations",
        "Kerbing",
        "Road surfacing",
        "Infrastructure development",
      ]}
      benefits={[
        {
          title: "Engineering Standards",
          description: "All work meets strict engineering specifications for safety and durability.",
        },
        {
          title: "Experienced Team",
          description: "Civil engineers and skilled workers with extensive infrastructure project experience.",
        },
        {
          title: "Quality Materials",
          description: "We use specified materials that meet or exceed project requirements.",
        },
        {
          title: "Project Management",
          description: "Professional project management ensures timely completion within budget.",
        },
        {
          title: "Safety Compliance",
          description: "Strict adherence to health and safety regulations on all sites.",
        },
        {
          title: "Long-Lasting Results",
          description: "Infrastructure built to last and serve communities for decades.",
        },
      ]}
      relatedServices={[
        { title: "Paving, Driveways & Surfacing", href: "/services/paving-driveways-surfacing" },
        { title: "Concrete Works & Bricklaying", href: "/services/concrete-works-bricklaying" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Fencing, Gates & Access Control", href: "/services/fencing-gates-access-control" },
      ]}
    />
  )
}
