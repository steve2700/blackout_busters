import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Johannesburg | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance across Johannesburg. Serving Sandton, Rosebank, Fourways, Randburg, Bryanston and all JHB suburbs. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Johannesburg | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Johannesburg homes and businesses.",
  },
}

export default function JohannesburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Johannesburg"
      description="Jero Fire Solutions delivers certified fire detection, extinguisher servicing, suppression systems, and OHS compliance throughout Johannesburg. From homes in the northern suburbs to shops, offices, and restaurants in the city, we keep buildings protected and certificates current."
      introImage="/jero-fire-technician-johannesburg.jpg"
      suburbs={[
        "Sandton",
        "Rosebank",
        "Fourways",
        "Randburg",
        "Parktown",
        "Melrose",
        "Hyde Park",
        "Bryanston",
        "Norwood",
        "Houghton",
        "Johannesburg CBD",
        "Melville",
        "Greenside",
        "Parkhurst",
        "Illovo",
      ]}
      introduction="Johannesburg is a fast moving city where a faulty alarm panel, an expired extinguisher certificate, or a suppression system that has never been properly tested can quickly become a real liability for a home or business. Jero Fire Solutions has built a reputation across Johannesburg for fire safety work that is actually done properly, helping households, shops, offices, and restaurants stay protected and compliant. With one trusted team for detection, suppression, extinguishers, and training, you only need to make one call."
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
        "Technicians positioned across Johannesburg for rapid response",
        "Certified technicians who understand OHS Act requirements",
        "Experience across homes, restaurants, offices, and commercial sites",
        "Honest assessments, even when the answer is a repair, not a sale",
        "24 hour emergency response for fire safety faults",
        "A Certificate of Compliance issued on every completed job",
      ]}
      nearbyAreas={[
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Bedfordview", href: "/service-areas/bedfordview" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
