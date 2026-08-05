import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Morningside | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Morningside. Serving Sandton Central, Atholl, Inanda, Sandown, Benmore and surrounding areas. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Morningside | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Morningside homes and businesses.",
  },
}

export default function MorningsidePage() {
  return (
    <ServiceAreaTemplate
      areaName="Morningside"
      description="Jero Fire Solutions provides certified fire detection, extinguisher servicing, suppression systems, and OHS compliance throughout Morningside. From luxury homes to apartments and businesses, we handle every site with the same discretion and care."
      introImage="/jero-fire-technician-morningside.jpg"
      suburbs={["Sandton Central", "Atholl", "Inanda", "Sandown", "Benmore", "Strathavon"]}
      introduction="Morningside is one of Johannesburg's most desirable residential areas, home to luxury properties and high value businesses that cannot afford an insurer or auditor finding a lapsed fire certificate. Jero Fire Solutions looks after Morningside homeowners and businesses with detection, suppression, extinguisher servicing, and compliance work that stands up to real scrutiny, not a rushed sign off. Whether it is a residential alarm system or full compliance documentation for a business, our technicians deliver careful, properly certified work."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for offices and residences",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Morningside quickly for same day quotes",
        "Experience with premium homes and high value business sites",
        "Discreet, professional service with attention to detail",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
      ]}
    />
  )
}
