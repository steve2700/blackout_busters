import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Rosebank | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Rosebank. Serving Parktown, Saxonwold, Dunkeld, Forest Town, Killarney and northern Johannesburg suburbs. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Rosebank | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Rosebank homes, apartments, and businesses.",
  },
}

export default function RosebankPage() {
  return (
    <ServiceAreaTemplate
      areaName="Rosebank"
      description="Jero Fire Solutions serves Rosebank's mix of heritage homes, modern apartments, offices, and retail spaces with certified fire detection, extinguisher servicing, suppression systems, and OHS compliance. We keep buildings protected and compliance certificates current with fast, professional service."
      introImage="/jero-fire-technician-rosebank.jpg"
      suburbs={["Parktown", "Saxonwold", "Dunkeld", "Forest Town", "Parkhurst", "Greenside", "Westcliff", "Killarney"]}
      introduction="Rosebank sits at the centre of Johannesburg's northern suburbs, combining older homes with modern apartment blocks, offices, and busy retail. Jero Fire Solutions helps residents and businesses in Rosebank with everything from an expired extinguisher certificate to full alarm and suppression system servicing for an office or shopping precinct. Our certified technicians know the area well and respond quickly with work that is done properly and backed by full compliance documentation."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for restaurants and offices",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Technicians reaching Rosebank quickly for same day callouts",
        "Certified technicians who understand OHS Act requirements",
        "Experience with apartments, offices, and retail spaces",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for fire safety faults",
        "A Certificate of Compliance issued on every completed job",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Morningside", href: "/service-areas/morningside" },
      ]}
    />
  )
}
