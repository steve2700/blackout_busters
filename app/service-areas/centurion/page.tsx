import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Construction & Maintenance Services in Centurion | Goshen Projects Solutions",
  description:
    "Expert construction and maintenance services in Centurion. Serving Highveld, Eldoraigne, Irene, Wierdapark, Zwartkop and all Centurion suburbs.",
}

export default function CenturionPage() {
  return (
    <ServiceAreaTemplate
      areaName="Centurion"
      description="Goshen Projects Solutions provides trusted construction and maintenance services throughout Centurion. From family homes in established suburbs to modern developments, we deliver quality workmanship for every property type."
      suburbs={[
        "Highveld",
        "Eldoraigne",
        "Irene",
        "Wierdapark",
        "Zwartkop",
        "Die Hoewes",
        "Wierda Park",
        "Rooihuiskraal",
        "Lyttelton",
        "Clubview",
      ]}
      introduction="Centurion offers an ideal blend of suburban living with easy access to both Pretoria and Johannesburg. Goshen Projects Solutions has established itself as a reliable service provider in this area, understanding the needs of Centurion's family-oriented communities and growing commercial sector. Our local presence ensures prompt service and familiarity with the area's specific requirements."
      servicesOffered={[
        "Home renovations and additions",
        "New home construction",
        "Kitchen and bathroom upgrades",
        "Plumbing repairs and installations",
        "Electrical work and lighting",
        "Roofing and gutter services",
        "Driveway paving and repairs",
        "Boundary wall construction",
        "Security upgrades",
        "Solar installations",
        "Pool maintenance",
        "General property maintenance",
      ]}
      whyChooseUs={[
        "Strong presence in the Centurion community",
        "Understanding of family home requirements",
        "Experience with Centurion's diverse property styles",
        "Quick response times from local teams",
        "Trusted by Centurion homeowners for years",
        "Competitive pricing for quality work",
      ]}
      nearbyAreas={[
        { name: "Pretoria", href: "/service-areas/pretoria" },
        { name: "Midrand", href: "/service-areas/midrand" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
      ]}
    />
  )
}
