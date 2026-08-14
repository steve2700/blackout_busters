import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Electrical, Solar & Backup Power in Randburg | Blackout Busters",
  description:
    "Electrical installation and repairs, solar, inverter and battery backup, and compliance certificates (COC) in Randburg. Serving Ferndale, Blairgowrie, Northcliff, Boskruin, Fairland and surrounding suburbs. Same day quotes available.",
  openGraph: {
    title: "Electrical, Solar & Backup Power in Randburg | Blackout Busters",
    description:
      "Certified electrical, solar, and backup power installation, repairs, and compliance work for Randburg homes, complexes, and businesses.",
  },
}

export default function RandburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Randburg"
      description="Blackout Busters provides certified electrical installation and repairs, solar, inverter and battery backup, and compliance certificates across Randburg. From established family homes and townhouse complexes to shops and offices, we keep the power reliable and certificates current."
      introImage="/electrician-repairing-db-board.png"
      suburbs={[
        "Ferndale",
        "Blairgowrie",
        "Northcliff",
        "Boskruin",
        "Fairland",
        "Bordeaux",
        "Randpark Ridge",
        "Fontainebleau",
      ]}
      introduction="Randburg blends established family homes, townhouse complexes, and busy commercial areas, and all of them feel the strain of an unreliable grid. Blackout Busters has become a dependable choice in Randburg for electrical repairs, solar, backup power, and compliance work that is honest about what a property actually needs. Whether it is a body corporate needing DB boards upgraded across a whole complex or a business needing a backup power system installed, our electricians arrive prepared and leave the paperwork correct."
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
        "Certified electricians reaching Randburg quickly for same day quotes",
        "Experience with body corporate and complex wide work",
        "A Certificate of Compliance (COC) issued on every completed job",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for electrical faults",
        "Load shedding know-how, from a single plug to a full backup system",
      ]}
      nearbyAreas={[
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
      ]}
    />
  )
}
