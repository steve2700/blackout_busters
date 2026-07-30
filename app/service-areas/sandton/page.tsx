import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Sandton | ZECO Construction",
  description:
    "Premium construction and maintenance services in Sandton. Expert solutions for upmarket residential and commercial properties in Morningside, Rivonia, Sunninghill & more.",
}

export default function SandtonPage() {
  return (
    <ServiceAreaTemplate
      areaName="Sandton"
      description="ZECO Construction provides premium construction and maintenance services tailored to Sandton's upmarket residential and commercial properties. We understand the high standards expected in this prestigious area."
      suburbs={["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park", "Sandown", "Atholl", "Inanda"]}
      introduction="As Johannesburg's financial and business hub, Sandton demands the highest quality construction and maintenance services. ZECO Construction specializes in serving Sandton's discerning property owners with premium solutions that match the area's prestigious reputation. From executive homes to corporate offices, we deliver excellence in every project."
      servicesOffered={[
        "Luxury home renovations and extensions",
        "Corporate office fit-outs",
        "High-end kitchen and bathroom remodeling",
        "Smart home installations",
        "Waterproofing services",
        "Pool construction and maintenance",
        "Landscaping and outdoor living spaces",
        "Commercial property maintenance",
        "Carpentry and custom cabinetry",
        "Kitchen and bathroom cupboards",
      ]}
      whyChooseUs={[
        "Experience with Sandton's premium properties",
        "Understanding of upmarket finishes and materials",
        "Discrete and professional service",
        "Flexible scheduling to minimize disruption",
        "Premium workmanship guaranteed",
        "Excellent references from Sandton clients",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Morningside", href: "/service-areas/morningside" },
        { name: "Randburg", href: "/service-areas/randburg" },
      ]}
    />
  )
}
