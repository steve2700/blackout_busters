import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Sandton | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Sandton. Serving Morningside, Rivonia, Sunninghill, Bryanston, Hyde Park and surrounding suburbs. Same day quotes available.",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Sandton | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Sandton homes, offices, and businesses.",
  },
}

export default function SandtonPage() {
  return (
    <ServiceAreaTemplate
      areaName="Sandton"
      description="Jero Fire Solutions delivers certified fire detection, extinguisher servicing, suppression systems, and OHS compliance across Sandton. From executive homes and apartment blocks to corporate offices and retail, we keep buildings protected and compliance certificates current to the high standards the area expects."
      introImage="/jero-fire-technician-commercial-gauteng.jpg"
      suburbs={["Morningside", "Rivonia", "Sunninghill", "Bryanston", "Hyde Park", "Sandown", "Atholl", "Illovo"]}
      introduction="As the financial and business heart of Johannesburg, Sandton depends on buildings that stay safe and compliant every day of the year. Jero Fire Solutions helps households, offices, restaurants, and retailers in Sandton with fire detection, suppression, extinguisher servicing, and OHS compliance. Whether it is an alarm panel that keeps faulting in a corporate office or an expired extinguisher certificate in an apartment block, our certified technicians respond quickly with work that is done properly and documented in full."
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
        "Technicians reaching Sandton quickly for same day callouts",
        "Certified technicians who understand OHS Act requirements",
        "Experience with executive homes and corporate buildings",
        "Discrete, professional service with minimal disruption",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Rosebank", href: "/service-areas/rosebank" },
        { name: "Morningside", href: "/service-areas/morningside" },
        { name: "Randburg", href: "/service-areas/randburg" },
      ]}
    />
  )
}
