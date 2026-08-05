import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Bedfordview | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Bedfordview and the East Rand. Serving Edenvale, Germiston, Kensington, and surrounding areas. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Bedfordview | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Bedfordview and East Rand homes and businesses.",
  },
}

export default function BedfordviewPage() {
  return (
    <ServiceAreaTemplate
      areaName="Bedfordview"
      description="Jero Fire Solutions provides fire detection, extinguisher servicing, suppression systems, and OHS compliance across Bedfordview and the greater East Rand. From upmarket homes to shops, offices, and industrial facilities, we keep buildings protected and certificates current."
      introImage="/jero-fire-technician-industrial-gauteng.jpg"
      suburbs={["Edenvale", "Germiston", "Kensington", "Kempton Park", "Boksburg", "Benoni", "East Rand Mall area"]}
      introduction="Bedfordview and the greater East Rand feature a wide mix of properties, from upmarket homes to retail centres, offices, and industrial facilities, each with different fire safety and OHS compliance requirements. Jero Fire Solutions serves this region with detection, suppression, extinguisher servicing, and compliance work that holds up under an actual audit, not just a signature on a form. Whether it is a single extinguisher service or a full alarm system installation, our technicians treat every site the same way, properly."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for commercial sites",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Technicians reaching the East Rand quickly for same day quotes",
        "Experience across homes, retail, offices, and industrial sites",
        "Certified technicians who understand OHS Act requirements",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Kempton Park", href: "/service-areas/kempton-park" },
      ]}
    />
  )
}
