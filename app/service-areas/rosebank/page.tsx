import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Rosebank | Goshen Projects Solutions",
  description:
    "Premium construction and maintenance services in Rosebank. Expert solutions for Parktown, Saxonwold, Dunkeld, Forest Town and northern Johannesburg suburbs.",
}

export default function RosebankPage() {
  return (
    <ServiceAreaTemplate
      areaName="Rosebank"
      description="Goshen Projects Solutions serves Rosebank's sophisticated mix of heritage homes, modern apartments, and commercial properties with premium construction and maintenance services tailored to this prestigious area."
      suburbs={["Parktown", "Saxonwold", "Dunkeld", "Forest Town", "Parkhurst", "Greenside", "Westcliff", "Killarney"]}
      introduction="Rosebank represents the heart of Johannesburg's northern suburbs, combining historic properties with contemporary developments. Goshen Projects Solutions understands the unique requirements of this area, from sensitive heritage renovations to modern commercial fit-outs. Our expertise ensures that every project respects the character of Rosebank while meeting modern standards."
      servicesOffered={[
        "Heritage home renovations",
        "Modern apartment upgrades",
        "Commercial office fit-outs",
        "Retail space construction",
        "Plumbing and electrical services",
        "Roofing and waterproofing",
        "Interior and exterior painting",
        "Security system installations",
        "Climate control solutions",
        "Property maintenance programs",
      ]}
      whyChooseUs={[
        "Experience with heritage properties",
        "Understanding of Rosebank's character",
        "High-end finish expertise",
        "Relationships with local authorities",
        "Premium service standards",
        "Trusted by Rosebank property owners",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Morningside", href: "/service-areas/morningside" },
      ]}
    />
  )
}
