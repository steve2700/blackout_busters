import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Johannesburg | Cold Fix Services",
  description:
    "Air conditioning, refrigeration, and appliance repairs across Johannesburg. Serving Sandton, Rosebank, Fourways, Randburg, Bryanston and all JHB suburbs. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Johannesburg | Cold Fix Services",
    description:
      "Reliable air conditioning, refrigeration, and appliance repairs for Johannesburg homes and businesses.",
  },
}

export default function JohannesburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Johannesburg"
      description="Cold Fix Services delivers air conditioning, refrigeration, and appliance repairs throughout Johannesburg. From homes in the northern suburbs to shops, offices, and restaurants in the city, we keep your cooling and appliances running with fast, professional service."
      introImage="/commercial-refrigeration-display.png"
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
      introduction="Johannesburg is a fast moving city where a broken fridge, cold room, or air conditioner can quickly become a real problem for a home or business. Cold Fix Services has built a strong reputation across Johannesburg, helping households, shops, offices, and restaurants keep their cooling and appliances working. With one trusted team for aircon, refrigeration, and appliance repairs, you only need to make one call."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and bar refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Technicians positioned across Johannesburg for rapid response",
        "Refrigerant handling certified and fully insured teams",
        "Experience with both homes and commercial refrigeration",
        "Honest, upfront quotes with no hidden costs",
        "24 hour emergency support for cooling breakdowns",
        "Quality parts and lasting repairs on every job",
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
