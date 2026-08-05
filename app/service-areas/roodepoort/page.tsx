import type { Metadata } from "next"
import { ServiceAreaTemplate } from "@/components/service-area-template"

export const metadata: Metadata = {
  title: "Fire Detection, Suppression and Compliance in Roodepoort | Jero Fire Solutions",
  description:
    "Fire detection, extinguisher servicing, suppression, and OHS compliance in Roodepoort. Serving Wilgeheuwel, Honeydew, Constantia Kloof, Ruimsig, Florida and surrounding suburbs. Same day quotes available.",
  keywords:
    "fire detection Roodepoort, fire extinguisher servicing Wilgeheuwel, suppression systems Honeydew, OHS compliance Constantia Kloof, fire safety Radiokop",
  openGraph: {
    title: "Fire Detection, Suppression and Compliance in Roodepoort | Jero Fire Solutions",
    description:
      "Certified fire safety installation, servicing, and compliance work for Roodepoort homes and businesses.",
    images: [
      {
        url: "/jero-fire-technician-roodepoort.jpg",
        width: 1200,
        height: 630,
        alt: "Certified fire safety technician in Roodepoort by Jero Fire Solutions",
      },
    ],
  },
}

export default function RoodepoortPage() {
  return (
    <ServiceAreaTemplate
      areaName="Roodepoort"
      description="Jero Fire Solutions provides certified fire detection, extinguisher servicing, suppression systems, and OHS compliance throughout Roodepoort and its surrounding suburbs. From family homes to shops, offices, and industrial units, we keep buildings protected with honest pricing and documented workmanship."
      introImage="/jero-fire-technician-roodepoort.jpg"
      suburbs={[
        "Wilgeheuwel",
        "Honeydew",
        "Constantia Kloof",
        "Ruimsig",
        "Featherbrooke Estate",
        "Radiokop",
        "Florida",
        "Weltevredenpark",
        "Little Falls",
        "Strubensvalley",
        "Laser Park",
        "Quellerina",
      ]}
      introduction="Roodepoort covers a broad mix of residential suburbs, commercial districts, and industrial areas, and each one carries different fire safety and OHS compliance obligations. Jero Fire Solutions brings hands on, properly certified work to every job, whether that means servicing extinguishers in a family home in Wilgeheuwel, installing a suppression system in a commercial building in Radiokop, or auditing compliance for a business in Laser Park."
      servicesOffered={[
        "Fire detection and alarm system installation",
        "Alarm panel servicing and fault finding",
        "Fire extinguisher supply and annual servicing",
        "Extinguisher refills and certification",
        "Sprinkler and suppression system servicing",
        "Suppression system installation for offices and industrial units",
        "OHS compliance audits",
        "Staff fire safety training and evacuation drills",
        "Fire equipment maintenance contracts",
        "Fire hydrant installation and pressure testing",
        "Certificate of Compliance documentation",
        "Emergency callouts for faulty systems",
      ]}
      whyChooseUs={[
        "Certified technicians reaching Roodepoort quickly for same day quotes",
        "Experience across homes, retail, and industrial sites",
        "Technicians who understand OHS Act requirements, not just paperwork",
        "Honest assessments, even when the answer is a repair, not a sale",
        "A Certificate of Compliance issued on every completed job",
        "24 hour emergency response for fire safety faults",
      ]}
      nearbyAreas={[
        { name: "Randburg", href: "/service-areas/randburg" },
        { name: "Fourways", href: "/service-areas/fourways" },
        { name: "Johannesburg", href: "/service-areas/johannesburg" },
        { name: "Sandton", href: "/service-areas/sandton" },
        { name: "Midrand", href: "/service-areas/midrand" },
      ]}
    >
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">
              Fire Detection, Suppression, and Compliance Throughout Roodepoort
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort combines residential neighbourhoods, commercial developments, and industrial zones, and
                each one has its own fire safety requirements. Jero Fire Solutions brings the same standard to every
                job, whether that is servicing a smoke detector in a family home in Wilgeheuwel, testing a suppression
                system in a commercial building in Radiokop, or certifying fire equipment for a business in Laser Park.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Serving Roodepoort&apos;s Diverse Suburbs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our service coverage reaches across Roodepoort and all surrounding suburbs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Areas</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    We look after fire detection and extinguisher servicing in Roodepoort&apos;s established and
                    upmarket suburbs including:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Ruimsig and Featherbrooke Estate, premium homes and estates</li>
                    <li>Constantia Kloof and Little Falls, family neighbourhoods</li>
                    <li>Wilgeheuwel and Weltevredenpark, established suburbs</li>
                    <li>Honeydew and Florida, diverse residential properties</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial and Industrial Zones</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Detection, suppression, and compliance services for Roodepoort&apos;s business and industrial
                    districts:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Radiokop, offices, retail, and alarm systems</li>
                    <li>Laser Park, industrial units and suppression systems</li>
                    <li>Strubensvalley, mixed commercial developments</li>
                    <li>Quellerina, business parks and compliance audits</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Home Fire Safety in Roodepoort</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort homeowners trust us for smoke detector installation, extinguisher supply and servicing, and
                alarm panel repairs. We arrive with the right stock on hand so most servicing can be completed and
                certified on the first visit.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial and Industrial Fire Safety</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Roodepoort&apos;s shops, offices, and industrial units depend on systems that actually work when
                tested, not just once a year during a rushed audit. We service and certify alarm systems, suppression
                equipment, and fire hydrants, and we work around your operating hours to keep disruption to a minimum.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Emergency Callouts and Fast Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A faulty alarm panel or an expired extinguisher certificate is not something that can wait weeks for
                attention. Our emergency callout service covers Roodepoort around the clock, so a fire safety fault
                never has to wait until the next working day.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-bold text-lg mb-3">Need Fire Safety Work in Roodepoort?</h4>
                <p className="text-muted-foreground mb-4">
                  Contact us today for a free, no obligation quote. Whether you are in Wilgeheuwel, Honeydew,
                  Constantia Kloof, or any other Roodepoort suburb, our team is ready to help.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Dispatched from:</strong> Kempton Park, serving all of Gauteng<br />
                  <strong>Response Time:</strong> Same day across Roodepoort<br />
                  <strong>Emergency Service:</strong> Available 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServiceAreaTemplate>
  )
}
