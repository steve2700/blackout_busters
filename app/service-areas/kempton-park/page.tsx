import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Kempton Park | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Kempton Park. Home base of Jero Fire Solutions, serving Aston Manor, Birchleigh, Edleen, Glen Marais and surrounds with rapid same day response.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Kempton Park | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Kempton Park homes and businesses, dispatched from our local base.",
  },
}

export default function KemptonParkPage() {
  return (
    <ServiceAreaTemplate
      areaName="Kempton Park"
      description="Kempton Park is home base for Jero Fire Solutions. From our offices in Aston Manor we deliver certified fire detection, extinguisher servicing, suppression systems, and OHS compliance to homes, factories, warehouses, and businesses across the area, with the fastest response times anywhere in our coverage."
      introImage="/jero-fire-technician-kempton-park.jpg"
      responseTime="Rapid same day"
      suburbs={[
        "Aston Manor",
        "Birchleigh",
        "Edleen",
        "Glen Marais",
        "Bonaero Park",
        "Van Riebeeck Park",
        "Norkem Park",
        "Kempton Park CBD",
        "Terenure",
        "Pomona",
        "Rhodesfield",
        "Isando",
      ]}
      introduction="Kempton Park is where Jero Fire Solutions is based, so it is the area we know best and reach fastest. With our offices at 18 Profusa Street in Aston Manor, we are minutes away from most homes and businesses in the area, from residential suburbs to the industrial and warehousing zones around Isando and Pomona. When an alarm panel faults, an extinguisher certificate expires, or a suppression system needs testing, we can be on site quickly to put it right and keep your compliance current."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for warehouses and offices",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Based in Aston Manor for the fastest response in the area",
        "Certified technicians who understand OHS Act requirements",
        "Experience across homes, factories, warehouses, and offices",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for fire safety faults",
        "A Certificate of Compliance issued on every completed job",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Midrand", href: "/service-areas/midrand" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Bedfordview", href: "/service-areas/bedfordview" },
        { name: "Pretoria", href: "/service-areas/pretoria" },
      ]}
    />
  )
}
