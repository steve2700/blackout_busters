import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Bedfordview | Cold Fix Services",
  description:
    "Air conditioning, refrigeration, and appliance repairs in Bedfordview and the East Rand. Serving Edenvale, Germiston, Kensington, Kempton Park and surrounding areas. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Bedfordview | Cold Fix Services",
    description:
      "Reliable air conditioning, refrigeration, and appliance repairs for Bedfordview and East Rand homes and businesses.",
  },
}

export default function BedfordviewPage() {
  return (
    <ServiceAreaTemplate
      areaName="Bedfordview"
      description="Cold Fix Services provides air conditioning, refrigeration, and appliance repairs across Bedfordview and the greater East Rand. From upmarket homes to shops, offices, and industrial facilities, we keep your cooling and appliances running reliably."
      introImage="/air_conditioner_installed_kemptonpark.jpg"
      suburbs={["Edenvale", "Germiston", "Kensington", "Kempton Park", "Boksburg", "Benoni", "East Rand Mall area"]}
      introduction="Bedfordview and the greater East Rand feature a wide mix of properties, from upmarket homes to retail centres and industrial facilities. Cold Fix Services serves this region with reliable cooling and appliance repairs, understanding the practical needs of East Rand homes and businesses. Whether it is a fridge, freezer, air conditioner, or appliance that needs attention, our technicians respond quickly with quality work."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Restaurant and retail refrigeration repairs",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Technicians reaching the East Rand quickly for same day callouts",
        "Experience with homes, retail, and industrial refrigeration",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "24 hour emergency support for cooling breakdowns",
      ]}
      nearbyAreas={[
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    />
  )
}
