// File path: app/fencing-gates-access-control/page.tsx
// Clean URL: https://goshenprojects.co.za/fencing-gates-access-control

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Fence, Lock, Shield, Smartphone, Wrench, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Fencing, Gates & Access Control in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional fencing, gates and access control solutions in Gauteng. Palisade fencing, electric fencing, automated gates, garage doors, intercoms, biometric access control & security barriers for residential, commercial & industrial properties in Pretoria, Johannesburg & Midrand. Expert installation and maintenance. Same-day quotes.",
  keywords: "fencing Gauteng, electric gates Pretoria, palisade fencing Johannesburg, gate automation Midrand, access control systems, garage doors, intercom systems, electric fencing, security barriers, driveway gates",
  openGraph: {
    title: "Fencing, Gates & Access Control | Goshen Projects Solutions Gauteng",
    description:
      "Customizable and reliable security fencing, automated gates, and access control solutions for properties in Pretoria, Johannesburg & Gauteng. 500+ installations completed. Professional installation and maintenance.",
    images: [
      {
        url: "/electric-gate-installation-at-residential-property.jpg",
        width: 1200,
        height: 630,
        alt: "Professional fencing, gates and access control installation in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function FencingGatesAccessControlPage() {
  return (
    <ServicePageTemplate
      title="Fencing, Gates & Access Control"
      description="Our comprehensive security solutions are customizable, reliable, and designed to provide maximum protection and peace of mind. From robust perimeter fencing to sophisticated automated gates and intelligent access control systems, we deliver professional security infrastructure for residential estates, commercial properties, and industrial facilities throughout Gauteng. With over 10 years of experience and 500+ successful installations, we secure your property with quality materials and expert craftsmanship."
      icon={Fence}
      heroImage="/electric-gate-installation-at-residential-property.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "Palisade steel fencing",
        "Electric fencing & energizers",
        "Automated electric gates",
        "Gate automation & motors",
        "Sliding & swing gates",
        "Garage door installation & automation",
        "Intercom & video entry systems",
        "Biometric access control",
        "Remote control & smartphone integration",
        "Security barriers & boom gates",
        "Pedestrian & driveway gates",
        "Fence & gate repairs & maintenance",
      ]}
      benefits={[
        {
          title: "Maximum Security & Protection",
          description:
            "Effective physical barriers and intelligent access control systems that significantly deter intruders, prevent unauthorized entry, and protect your property, assets, and loved ones 24/7.",
          icon: Shield,
        },
        {
          title: "Custom-Designed Solutions",
          description:
            "Every property has unique security requirements. We design fencing, gates, and access systems specifically tailored to your property layout, security threats, aesthetic preferences, and budget constraints.",
          icon: Award,
        },
        {
          title: "Convenient Automation & Smart Control",
          description:
            "Automated gates with remote controls, smartphone apps, and integration with existing security systems provide effortless access management without compromising security or convenience.",
          icon: Smartphone,
        },
        {
          title: "Premium Quality Materials",
          description:
            "We use heavy-duty galvanized steel, powder-coated finishes, high-torque motors, and weather-resistant components built to withstand South African conditions and attempted breaches.",
          icon: Fence,
        },
        {
          title: "Expert Professional Installation",
          description:
            "Our experienced technicians ensure proper installation of gates, motors, sensors, and access control systems with correct alignment, secure mounting, and reliable operation from day one.",
          icon: Wrench,
        },
        {
          title: "Ongoing Maintenance & Support",
          description:
            "Comprehensive maintenance plans, emergency repair services, motor servicing, and technical support to keep your security systems operational and functioning optimally at all times.",
          icon: Lock,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Security Assessment & Site Survey",
          description: "We evaluate your property's security vulnerabilities, access points, perimeter requirements, and discuss your specific security concerns, automation preferences, and budget.",
        },
        {
          step: 2,
          title: "Custom Design & Quotation",
          description: "Detailed proposal including fencing specifications, gate designs, automation options, access control recommendations, material breakdown, and transparent pricing with installation timeline.",
        },
        {
          step: 3,
          title: "Professional Installation",
          description: "Expert installation of fencing, gates, motors, and access control systems with proper foundations, secure mounting, electrical connections, and rigorous testing for smooth operation.",
        },
        {
          step: 4,
          title: "Training, Testing & Handover",
          description: "Comprehensive system demonstration, remote control programming, app setup, user training, and provision of maintenance guidelines with warranty documentation.",
        },
      ]}
      relatedServices={[
        { 
          title: "CCTV & Surveillance", 
          href: "/cctv-alarm-surveillance",
          icon: Shield,
        },
        { 
          title: "Electrical Installation", 
          href: "/electrical-services",
          icon: Lock,
        },
        { 
          title: "Building Construction", 
          href: "/building-construction-renovations",
          icon: Fence,
        },
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: Wrench,
        },
      ]}
      serviceAreas={[
        "Pretoria",
        "Johannesburg",
        "Midrand",
        "Sandton",
        "Centurion",
        "Fourways",
        "Randburg",
        "Rosebank",
        "Bedfordview",
        "Roodepoort",
      ]}
    >
      {/* Additional Content Section */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Fencing, Gates & Access Control?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> providing security fencing and access control solutions across Gauteng, Goshen Projects Solutions has established itself as a trusted name in perimeter security. Based in <strong>Midrand at 22 Richards Dr</strong>, we've successfully completed <strong>500+ fencing, gate, and access control installations</strong> for residential estates, commercial properties, and industrial facilities throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Security Infrastructure Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need robust perimeter fencing for an industrial site, automated gates for a residential estate, or sophisticated access control for a commercial building, our security specialists deliver professional solutions tailored to your specific requirements:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Perimeter Fencing Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Palisade steel fencing, electric fencing with energizers, razor wire, welded mesh panels, and security-grade perimeter barriers.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Automated Gate Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    Sliding gates, swing gates, cantilever gates with high-torque motors, safety beams, remote controls, and smartphone integration.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Garage Door Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Sectional garage doors, roller doors, automated openers, safety sensors, and battery backup systems for reliable operation.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Access Control & Intercoms</h4>
                  <p className="text-sm text-muted-foreground">
                    Biometric systems, keypad entry, card readers, video intercoms, visitor management, and integrated security platforms.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Premium Fencing Materials & Construction</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We install high-quality palisade fencing manufactured from galvanized steel with powder-coated finishes in various colors (green, black, grey, charcoal). Our palisade panels are available in different heights (1.8m, 2.1m, 2.4m) with pale options (W-section, D-section) to suit your security level requirements. Electric fencing systems use certified energizers compliant with South African standards, with multiple zones, alarm outputs, and monitoring capabilities. All fencing includes proper foundations, secure mounting, and anti-climb features.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Gate Automation Technology</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We install premium gate motors from leading manufacturers including CENTURION, ET Systems, and CAME—brands known for reliability and durability. Our automated gate systems include safety features such as photocell beams, anti-crush sensors, obstacle detection, battery backup for load shedding, and multiple control options (remote controls, keypads, smartphone apps, intercom integration). Sliding gates are ideal for limited space and heavy traffic, while swing gates suit traditional aesthetics and smaller openings.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Intelligent Access Control Systems</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern access control goes beyond simple locks and keys. We design and install sophisticated systems including biometric fingerprint readers, facial recognition, proximity card systems, keypad entry, and integrated platforms that log all access events. For residential estates and commercial buildings, we provide video intercom systems with HD cameras, door release control, and remote access via smartphone. These systems integrate seamlessly with CCTV surveillance and alarm systems for comprehensive security management.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial & Industrial Security Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We specialize in large-scale security infrastructure for commercial properties, industrial facilities, warehouses, and construction sites. This includes heavy-duty boom gates for vehicle access control, pedestrian turnstiles, security barriers, perimeter intrusion detection, and multi-site access control management. Our solutions handle high-traffic volumes while maintaining security integrity and providing detailed access logs for compliance and monitoring purposes.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Maintenance, Repairs & Emergency Callouts</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Gate motors and automation systems require regular maintenance to ensure reliable operation. We offer comprehensive maintenance contracts including motor servicing, track cleaning, sensor calibration, battery replacement, and lubrication. Our emergency repair service handles gate motor failures, track damage, remote control issues, and automation malfunctions. Our strategically positioned teams provide <strong>rapid response times</strong> throughout Gauteng, with average arrival times of <strong>20-40 minutes</strong> for emergency callouts.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Integration with Existing Security Systems</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our access control and gate automation systems integrate seamlessly with your existing security infrastructure. We connect gates to alarm systems, link intercoms to CCTV cameras, integrate biometric access with time and attendance systems, and provide unified control through single management platforms. This integration creates a comprehensive security ecosystem where all components work together efficiently.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Residential Estate Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For residential estates, townhouse complexes, and gated communities, we provide complete security solutions including perimeter fencing, main entrance gate automation, boom gate systems, visitor management, biometric access for residents, video intercoms, and integration with estate security control rooms. Our systems handle both vehicle and pedestrian access with separate control protocols for residents, visitors, contractors, and service providers.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Warranty & Quality Assurance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All our installations come with comprehensive warranties covering materials and workmanship. Gate motors typically carry manufacturer warranties of 1-3 years depending on the brand and model. We provide detailed maintenance schedules, troubleshooting guides, and ongoing technical support. Our commitment to quality ensures your security infrastructure remains operational and effective for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
