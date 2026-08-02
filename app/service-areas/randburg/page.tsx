import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Appliance, Aircon and Refrigeration Repairs in Randburg | Cold Fix Services",
  description:
    "Air conditioning, refrigeration, and appliance repairs in Randburg. Serving Ferndale, Blairgowrie, Northcliff, Boskruin, Fairland and surrounding suburbs. Same day callouts available.",
  openGraph: {
    title: "Appliance, Aircon and Refrigeration Repairs in Randburg | Cold Fix Services",
    description:
      "Reliable air conditioning, refrigeration, and appliance repairs for Randburg homes, complexes, and businesses.",
  },
}

export default function RandburgPage() {
  return (
    <ServiceAreaTemplate
      areaName="Randburg"
      description="Cold Fix Services provides trusted air conditioning, refrigeration, and appliance repairs across Randburg. From established family homes and townhouse complexes to shops and offices, we keep your cooling and appliances working reliably."
      introImage="/washing_machine_repairs.jpg"
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
      introduction="Randburg blends established family homes, townhouse complexes, and busy commercial areas, and all of them rely on working fridges, freezers, air conditioners, and appliances. Cold Fix Services has become a dependable choice in Randburg for fast repairs and honest advice. Whether it is a washing machine that has stopped mid cycle or an aircon that needs a gas refill, our technicians arrive prepared to get things running again."
      servicesOffered={[
        "Air conditioning installation and servicing",
        "Aircon repairs and gas refills",
        "Fridge and freezer repairs",
        "Chest freezer and bar fridge repairs",
        "Cold room installation and repair",
        "Commercial and display fridge servicing",
        "Washing machine and tumble dryer repairs",
        "Dishwasher, oven, and stove repairs",
        "Ice machine repairs and servicing",
        "Emergency breakdown callouts",
        "Scheduled maintenance contracts",
        "Appliance water and gas connections",
      ]}
      whyChooseUs={[
        "Local technicians reaching Randburg quickly for same day callouts",
        "Experience with body corporate and complex work",
        "Refrigerant handling certified and fully insured teams",
        "Honest, upfront quotes with no hidden costs",
        "Quality parts and lasting repairs on every job",
        "24 hour emergency support for cooling breakdowns",
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
