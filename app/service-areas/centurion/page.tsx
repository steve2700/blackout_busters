import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Centurion | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Centurion. Serving Highveld, Eldoraigne, Irene, Wierdapark, Zwartkop and all Centurion suburbs. Same day quotes available.",
}

export default function CenturionPage() {
  return (
    <ServiceAreaTemplate
      areaName="Centurion"
      description="Jero Fire Solutions provides certified fire detection, extinguisher servicing, suppression systems, and OHS compliance throughout Centurion. From family homes in established suburbs to modern developments and businesses, we keep buildings protected and certificates current."
      introImage="/jero-fire-technician-centurion.jpg"
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
      introduction="Centurion offers suburban living with easy access to both Pretoria and Johannesburg, and a mix of family homes, office parks, and industrial sites that each carry different fire safety obligations. Jero Fire Solutions has become a trusted choice in the area for detection systems, extinguisher servicing, suppression work, and OHS compliance that actually gets checked properly, not just signed off. Our technicians understand what Centurion homes and businesses need to stay protected and compliant."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for offices and industrial sites",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Centurion quickly for same day quotes",
        "Experience across homes, office parks, and industrial sites",
        "Technicians who understand OHS Act requirements, not just paperwork",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
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
