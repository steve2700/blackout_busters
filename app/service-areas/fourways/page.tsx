import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Fourways | Goshen Projects",
  description:
    "Professional construction and maintenance in Fourways. Expert services for Lonehill, Dainfern, Broadacres, Cedar Lakes and surrounding areas.",
}

export default function FourwaysPage() {
  return (
    <ServiceAreaTemplate
      areaName="Fourways"
      description="Goshen Projects delivers quality construction and maintenance services to Fourways' upmarket residential estates and commercial developments. We understand the premium standards expected in this desirable area."
      suburbs={[
        "Lonehill",
        "Dainfern",
        "Broadacres",
        "Cedar Lakes",
        "Chartwell",
        "Pineslopes",
        "Douglasdale",
        "Magaliesig",
      ]}
      introduction="Fourways has evolved into one of Johannesburg's most sought-after areas, featuring premier residential estates, modern commercial developments, and excellent amenities. Goshen Projects provides the high-quality construction and maintenance services that Fourways property owners expect, from luxury home renovations to estate common area maintenance."
      servicesOffered={[
        "Estate home renovations",
        "Custom kitchen and bathroom designs",
        "Outdoor living space construction",
        "Swimming pool installations",
        "Landscaping and irrigation",
        "Security system upgrades",
        "Smart home integration",
        "Energy-efficient solutions",
        "Property maintenance programs",
        "Commercial fit-outs",
      ]}
      whyChooseUs={[
        "Approved by major Fourways estates",
        "Premium quality workmanship",
        "Understanding of estate rules and regulations",
        "Experience with luxury finishes",
        "Discrete and professional approach",
        "Strong referral network in Fourways",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
