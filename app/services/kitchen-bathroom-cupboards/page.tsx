import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Construction } from "lucide-react"

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Cupboards | Goshen Projects Gauteng",
  description:
    "Custom kitchen and bathroom cupboards in Gauteng. Built-in cupboards, vanities, and storage solutions in Pretoria & Johannesburg.",
  openGraph: {
    title: "Kitchen & Bathroom Cupboards | Goshen Projects Gauteng",
    description: "Custom cupboards designed to maximize space, functionality, and style in your Gauteng property.",
  },
}

export default function KitchenBathroomCupboardsPage() {
  return (
    <ServicePageTemplate
      title="Kitchen & Bathroom Cupboards"
      description="We design cupboards to maximize space, functionality, and style in homes and offices. From custom kitchen cupboards to bathroom vanities, we create storage solutions that perfectly fit your space and needs."
      icon={Construction}
      heroImage="/custom-kitchen-cupboards-installation-in-gauteng-so.jpg"
      features={[
        "Custom kitchen cupboards",
        "Bathroom vanities",
        "Storage units",
        "Built-in cupboards",
        "Bedroom cupboards",
        "Office storage",
        "Cupboard repairs",
        "Cupboard upgrades",
        "Modern designs",
      ]}
      benefits={[
        {
          title: "Custom Design",
          description:
            "Every cupboard is designed specifically for your space, ensuring perfect fit and maximum functionality.",
        },
        {
          title: "Space Optimization",
          description: "We maximize storage space with clever design solutions for even the smallest areas.",
        },
        {
          title: "Quality Finishes",
          description: "Choose from a wide range of materials, colors, and finishes to match your décor.",
        },
        {
          title: "Modern Styles",
          description: "Contemporary designs that add value and appeal to your property.",
        },
        {
          title: "Durable Construction",
          description: "Built to last with quality materials and expert craftsmanship.",
        },
        {
          title: "Professional Installation",
          description: "Precise installation ensuring perfect alignment and smooth operation.",
        },
      ]}
      relatedServices={[
        { title: "Carpentry Services", href: "/services/carpentry-services" },
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Plumbing Services", href: "/services/plumbing-services" },
        { title: "Painting, Tiling & Finishing", href: "/services/painting-tiling-finishing" },
      ]}
    />
  )
}
