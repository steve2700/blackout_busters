import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Randburg | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Randburg. Serving Ferndale, Blairgowrie, Northcliff, Boskruin, Fairland and surrounding suburbs. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Randburg | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Randburg homes, complexes, and businesses.",
  },
}

export default function RandburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Randburg"
      description="Jero Fire Solutions provides certified fire detection, extinguisher servicing, suppression systems, and OHS compliance across Randburg. From established family homes and townhouse complexes to shops and offices, we keep buildings protected and certificates current."
      introImage="/jero-fire-technician-residential-gauteng.jpg"
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
      introduction="Randburg blends established family homes, townhouse complexes, and busy commercial areas, and all of them carry fire safety obligations that are easy to overlook until an insurer or an inspector asks for proof. Jero Fire Solutions has become a dependable choice in Randburg for detection systems, extinguisher servicing, and compliance work that is honest about what a site actually needs. Whether it is a body corporate needing extinguishers serviced across a whole complex or a business needing a suppression system tested, our technicians arrive prepared and leave the paperwork correct."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for offices and retail",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Randburg quickly for same day quotes",
        "Experience with body corporate and complex wide servicing",
        "Technicians who understand OHS Act requirements, not just paperwork",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
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
