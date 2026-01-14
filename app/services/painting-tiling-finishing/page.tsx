import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { PaintBucket } from "lucide-react"

export const metadata: Metadata = {
  title: "Painting, Tiling & Finishing Services | Goshen Projects Gauteng",
  description:
    "Professional painting, tiling, and finishing services in Gauteng. Interior & exterior painting, floor & wall tiling in Pretoria & Johannesburg.",
  openGraph: {
    title: "Painting, Tiling & Finishing | Goshen Projects Gauteng",
    description: "Quality finishes that add value, beauty, and long-lasting quality to properties in Gauteng.",
  },
}

export default function PaintingTilingFinishingPage() {
  return (
    <ServicePageTemplate
      title="Painting, Tiling & Finishing Services"
      description="Our finishes add value, beauty, and long-lasting quality to any property. From interior and exterior painting to floor and wall tiling, we deliver exceptional finishing touches for homes and businesses across Gauteng."
      icon={PaintBucket}
      heroImage="/painter-applying-paint-to-interior-walls-in-gauteng.jpg"
      features={[
        "Interior painting",
        "Exterior painting",
        "Floor tiling",
        "Wall tiling",
        "Surface preparation",
        "Sealing & coating",
        "Decorative finishes",
        "Texture coatings",
        "Wallpaper installation",
      ]}
      benefits={[
        {
          title: "Expert Application",
          description: "Professional painters and tilers with years of experience delivering flawless results.",
        },
        {
          title: "Quality Products",
          description: "We use premium paints, tiles, and materials for lasting beauty and durability.",
        },
        {
          title: "Surface Preparation",
          description: "Proper preparation ensures the best adhesion and finish for long-lasting results.",
        },
        {
          title: "Color Consultation",
          description: "We help you choose colors and finishes that complement your space and style.",
        },
        {
          title: "Clean Workmanship",
          description: "Neat, tidy work with thorough cleanup after completion.",
        },
        {
          title: "Variety of Finishes",
          description: "From matte to gloss, textured to smooth - we offer a wide range of finishing options.",
        },
      ]}
      relatedServices={[
        { title: "Building Construction & Renovations", href: "/services/building-construction-renovations" },
        { title: "Property Maintenance", href: "/services/property-maintenance" },
        { title: "Waterproofing Services", href: "/services/waterproofing-services" },
        { title: "Kitchen & Bathroom Cupboards", href: "/services/kitchen-bathroom-cupboards" },
      ]}
    />
  )
}
