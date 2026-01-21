import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Johannesburg | Goshen Projects Solutions",
  description:
    "Expert construction, renovation, and maintenance services across Johannesburg. Serving Sandton, Rosebank, Fourways, Randburg, Parktown, and all JHB suburbs.",
  openGraph: {
    title: "Construction & Maintenance Services in Johannesburg",
    description:
      "Professional building, renovation, and property maintenance solutions for Johannesburg residential and commercial properties.",
  },
}

export default function JohannesburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Johannesburg"
      description="Goshen Projects Solutions delivers premium construction, renovation, and maintenance services throughout Johannesburg, South Africa's economic hub. From luxury homes in the northern suburbs to commercial developments in the CBD, we provide tailored solutions for every project."
      suburbs={[
        "Sandton",
        "Rosebank",
        "Fourways",
        "Randburg",
        "Parktown",
        "Melrose",
        "Hyde Park",
        "Bryanston",
        "Norwood",
        "Houghton",
        "Johannesburg CBD",
        "Melville",
        "Greenside",
        "Parkhurst",
        "Illovo",
      ]}
      introduction="Johannesburg is a dynamic city with diverse construction and maintenance needs, from historic properties in established suburbs to cutting-edge developments in business districts. Goshen Projects Solutions has built a reputation as a trusted service provider across all of Johannesburg, delivering exceptional workmanship for residential homeowners, commercial property managers, and industrial facility operators. Our comprehensive service offering means you only need one contractor for all your building and maintenance requirements."
      servicesOffered={[
        "Luxury home construction and renovations",
        "Office and retail fit-outs",
        "Industrial facility maintenance",
        "High-rise building services",
        "Plumbing and electrical installations",
        "HVAC and air conditioning services",
        "Security and access control systems",
        "Roofing and waterproofing",
        "Interior and exterior painting",
        "Landscaping and paving",
        "Property maintenance contracts",
        "Emergency repair services",
      ]}
      whyChooseUs={[
        "Extensive experience with Johannesburg's diverse property types",
        "Teams strategically located across JHB for rapid response",
        "Understanding of high-security requirements for premium properties",
        "Expertise in both residential and commercial projects",
        "Strong track record with property management companies",
        "Competitive pricing without compromising quality",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Bedfordview", href: "/service-areas/bedfordview" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
