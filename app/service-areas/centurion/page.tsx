import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Centurion | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Centurion. Serving Highveld, Eldoraigne, Irene, Wierdapark, Zwartkop and all Centurion suburbs. Same day quotes available.",
}

export default function CenturionPage() {
  return (
    <ServiceAreaTemplate
      areaName="Centurion"
      description="Blackout Busters provides certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates throughout Centurion. From family homes in established suburbs to modern developments and businesses, we keep the power reliable and certificates current."
      introImage="/solar-panel-roof-installation.png"
      suburbs={[
        "Highveld",
        "Eldoraigne",
        "Irene",
        "Wierdapark",
        "Zwartkop",
        "Die Hoewes",
        "Rooihuiskraal",
        "Lyttelton",
        "Clubview",
      ]}
      introduction="Centurion offers suburban living with easy access to both Pretoria and Johannesburg, and a mix of family homes, office parks, and industrial sites that all feel load shedding in their own way. Blackout Busters has become a trusted choice in the area for electrical repairs, solar installation, backup power, and compliance work that actually gets done properly. Our electricians understand what Centurion homes and businesses need to stay powered, protected, and compliant."
      servicesOffered={[
        "Electrical installation and new wiring",
        "Electrical repairs and fault finding",
        "Solar panel system installation",
        "Inverter and battery backup power installation",
        "Generator installation and servicing",
        "DB board upgrades and replacements",
        "Compliance certificates (COC) for sales and audits",
        "Load shedding solutions and consultations",
        "Geyser installation and repairs",
        "CCTV and security system installation",
        "Prepaid meter installation",
        "Emergency 24 hour electrical callouts",
      ]}
      whyChooseUs={[
        "Certified electricians reaching Centurion quickly for same day quotes",
        "Experience across homes, office parks, and industrial sites",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
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
