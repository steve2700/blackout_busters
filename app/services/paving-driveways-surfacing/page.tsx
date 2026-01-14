import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Paving, Driveways & Surfacing | Goshen Projects Gauteng",
  description:
    "Professional paving and surfacing services in Gauteng. Brick paving, tar paving, driveways, walkways in Pretoria & Johannesburg.",
  openGraph: {
    title: "Paving, Driveways & Surfacing | Goshen Projects Gauteng",
    description:
      "Durable and visually appealing surfaces designed to withstand traffic and weather conditions in Gauteng.",
  },
}

export default function PavingDrivewaysSurfacingPage() {
  return (
    <ServicePageTemplate
      title="Paving, Driveways & Surfacing"
      description="We create durable and visually appealing surfaces designed to withstand traffic and weather conditions. From residential driveways to commercial parking areas, we deliver quality paving solutions across Gauteng."
      icon={Car}
      heroImage="/brick-paving-installation-for-driveway-in-gauteng-s.jpg"
      features={[
        "Brick paving",
        "Tar paving",
        "Driveway construction",
        "Walkways",
        "Parking areas",
        "Paving repairs",
        "Resurfacing",
        "Patio paving",
        "Pool surrounds",
      ]}
      benefits={[
        {
          title: "Durability",
          description: "Our paving is built to withstand heavy traffic and South African weather conditions.",
        },
        {
          title: "Visual Appeal",
          description: "Enhance your property's curb appeal with attractive paving designs and patterns.",
        },
        {
          title: "Variety of Options",
          description: "Choose from brick, concrete, tar, and other materials to suit your needs and budget.",
        },
        {
          title: "Proper Drainage",
          description: "We ensure proper grading and drainage to prevent water pooling and damage.",
        },
        {
          title: "Low Maintenance",
          description: "Quality paving requires minimal maintenance while lasting for years.",
        },
        {
          title: "Expert Installation",
          description: "Correct base preparation and installation for long-lasting results.",
        },
      ]}
      relatedServices={[
        { title: "Road Construction & Civil Works", href: "/services/road-construction-civil-works" },
        { title: "Concrete Works & Bricklaying", href: "/services/concrete-works-bricklaying" },
        { title: "Fencing, Gates & Access Control", href: "/services/fencing-gates-access-control" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
      ]}
    />
  )
}
