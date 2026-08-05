import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Fourways | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Fourways. Serving Lonehill, Dainfern, Broadacres, Cedar Lakes, Douglasdale and surrounding areas. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Fourways | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Fourways estates, homes, and businesses.",
  },
}

export default function FourwaysPage() {
  return (
    <ServiceAreaTemplate
      areaName="Fourways"
      description="Jero Fire Solutions delivers certified fire detection, extinguisher servicing, suppression systems, and OHS compliance across Fourways' residential estates and commercial developments. From luxury homes to shopping centres and offices, we keep buildings protected and certificates current."
      introImage="/jero-fire-technician-retail-gauteng.jpg"
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
      introduction="Fourways has grown into one of Johannesburg's most sought after areas, with premier residential estates, modern shopping centres, and busy commercial developments, each carrying its own fire safety and compliance obligations. Jero Fire Solutions provides the detection, suppression, extinguisher servicing, and compliance work that Fourways property owners and body corporates actually need, from alarm servicing in an estate home to a full suppression system for a shopping centre. Our technicians understand estate access requirements and work efficiently to get systems tested, certified, and back online."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for retail and commercial sites",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Fourways quickly for same day quotes",
        "Experience working within security estates and their access rules",
        "Technicians who understand OHS Act requirements, not just paperwork",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
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
