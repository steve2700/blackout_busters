// File path: app/electrical-services/page.tsx
// Clean URL: https://www.zecoconstruction.co.za/electrical-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Zap, Shield, Award, Lightbulb, Battery, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Electrical Services & Installations in Gauteng | ZECO Construction - Pretoria, Johannesburg & Midrand",
  description:
    "Professional electrical services in Gauteng. Licensed electricians for installations, rewiring, fault finding, repairs, lighting, electrical maintenance, DB board upgrades, COC certificates for residential, commercial & industrial properties in Pretoria, Johannesburg & Midrand. SANS 10142 compliant. Emergency callouts available. Same-day quotes.",
  keywords: "electrician Gauteng, electrical installations Pretoria, rewiring Johannesburg, electrical repairs Midrand, COC certificate, electrical compliance, lighting installations, DB board upgrades, fault finding, licensed electricians",
  openGraph: {
    title: "Electrical Services & Installations | ZECO Construction Gauteng",
    description:
      "Licensed electricians providing safe, compliant electrical services for homes and businesses in Pretoria, Johannesburg & Gauteng. 24/7 emergency callouts, COC certificates, 500+ installations completed.",
    images: [
      {
        url: "/electrician-working-on-electrical-panel-in-gauteng.jpg",
        width: 1200,
        height: 630,
        alt: "Professional electrical services and installations in Gauteng - ZECO Construction",
      },
    ],
  },
}

export default function ElectricalServicesPage() {
  return (
    <ServicePageTemplate
      title="Electrical Services & Installations"
      description="Our licensed electricians are trained to handle complex electrical projects while prioritizing safety, regulatory compliance, and energy efficiency. From simple repairs and fault finding to complete rewiring, new installations, and electrical upgrades, we provide professional electrical services across Gauteng. With over 10 years of experience and 500+ successful projects, we deliver reliable, certified electrical solutions for residential, commercial, and industrial clients."
      icon={Zap}
      heroImage="/electrician-working-on-electrical-panel-in-gauteng.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "Complete electrical installations",
        "House & commercial rewiring",
        "Electrical fault finding & diagnostics",
        "Emergency electrical repairs",
        "Interior & exterior lighting installations",
        "LED lighting upgrades",
        "Power point & plug installations",
        "DB board upgrades & replacements",
        "Earth leakage & surge protection",
        "Electrical compliance (COC) certificates",
        "Electrical maintenance & inspections",
        "Energy-efficient solutions & audits",
      ]}
      benefits={[
        {
          title: "Fully Licensed & Certified Electricians",
          description:
            "All our electricians are registered, licensed, and certified to work on electrical installations in South Africa. We maintain strict professional standards and ongoing training to stay current with regulations.",
          icon: Award,
        },
        {
          title: "Safety-First Approach",
          description:
            "Electrical safety is paramount in every project. We follow rigorous safety protocols, use proper PPE, conduct thorough testing, and ensure all installations meet SANS 10142 electrical safety standards.",
          icon: Shield,
        },
        {
          title: "COC Certificates & Full Compliance",
          description:
            "We issue legal Certificate of Compliance (COC) documents for all installation work as required by South African law. Essential for property sales, insurance claims, and municipal compliance.",
          icon: CheckCircle,
        },
        {
          title: "Energy Efficiency Expertise",
          description:
            "We advise on and install energy-efficient lighting, LED conversions, power factor correction, and smart solutions to significantly reduce your electricity consumption and monthly costs.",
          icon: Battery,
        },
        {
          title: "Reliable & Professional Service",
          description:
            "Prompt response times, clear communication, transparent pricing, and professional conduct throughout your electrical project. We respect your property and leave work areas clean.",
          icon: Lightbulb,
        },
        {
          title: "Comprehensive Service Range",
          description:
            "From minor repairs and plug replacements to major commercial installations, complete building rewires, and industrial electrical projects—we handle all electrical work with expertise.",
          icon: Zap,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Electrical Assessment & Inspection",
          description: "We thoroughly evaluate your electrical system, identify any faults, hazards, code violations, or inefficiencies, and discuss your specific requirements and safety concerns.",
        },
        {
          step: 2,
          title: "Detailed Quotation & Planning",
          description: "Comprehensive quote provided including materials breakdown, labor costs, compliance certificate fees, project timeline, and any necessary upgrades or safety improvements required.",
        },
        {
          step: 3,
          title: "Professional Installation/Repair",
          description: "Licensed electricians complete all work following strict safety protocols, using quality materials, proper cable sizing, correct terminations, and adherence to electrical codes.",
        },
        {
          step: 4,
          title: "Testing, Certification & Handover",
          description: "Thorough electrical testing (insulation resistance, earth continuity, polarity), issuance of COC certificates where required, system demonstration, and comprehensive documentation.",
        },
      ]}
      relatedServices={[
        { 
          title: "Waterproofing Services", 
          href: "/waterproofing-services",
          icon: Shield,
        },
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: CheckCircle,
        },
        { 
          title: "Building Construction", 
          href: "/building-construction-renovations",
          icon: Award,
        },
        { 
          title: "Carpentry Services", 
          href: "/carpentry-services",
          icon: Zap,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose ZECO Construction for Electrical Services?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> providing electrical services across Gauteng, ZECO Construction has become the trusted choice for safe, compliant, and professional electrical work. Based in <strong>Gauteng</strong>, our licensed electricians have successfully completed <strong>500+ electrical projects</strong> for homes, businesses, and industrial facilities throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Electrical Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need emergency fault finding, a complete house rewire, new lighting installations, or electrical compliance certificates, our qualified electricians deliver safe, certified solutions tailored to your specific requirements:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Electrical Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete home wiring, rewiring, lighting installations, plug points, DB board upgrades, geyser connections, stove installations, and COC certificates.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial Electrical Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Office electrical installations, retail lighting, emergency lighting, three-phase power, distribution boards, equipment installations, and maintenance contracts.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Industrial Electrical Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Heavy-duty installations, motor circuits, control panels, machinery wiring, factory lighting, power distribution, and industrial electrical maintenance.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Emergency Repairs & Fault Finding</h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 emergency callouts, electrical fault diagnostics, tripping breakers, power failures, earth leakage issues, and urgent electrical repairs.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Licensed Professionals & Regulatory Compliance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All our electricians are registered with the Department of Employment and Labour, hold valid wireman's licenses, and are authorized to issue Certificate of Compliance (COC) documents. Every installation strictly adheres to SANS 10142-1 (Wiring of Premises) standards, ensuring your electrical system is safe, legal, and insurance-compliant. We stay current with the latest electrical regulations and best practices through ongoing professional development.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Certificate of Compliance (COC) Certificates</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A COC certificate is a legal requirement in South Africa for property sales, transfers, new installations, and alterations. Our licensed electricians conduct thorough electrical inspections, perform required tests (insulation resistance, earth continuity, polarity verification), and issue legally valid COC certificates accepted by municipalities, conveyancing attorneys, and insurance companies. Without a valid COC, property transactions cannot proceed, making this an essential service for homeowners and businesses.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Energy-Efficient Lighting & Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Reduce your electricity consumption and monthly bills with our energy-efficient electrical solutions. We specialize in LED lighting conversions (reducing consumption by up to 80%), motion sensor installations, timer switches, smart lighting controls, and power factor correction for commercial clients. Our energy audits identify inefficiencies and provide actionable recommendations to lower your energy costs while maintaining optimal lighting and functionality.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">DB Board Upgrades & Safety Improvements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many older properties have outdated distribution boards (DB boards) that don't meet current safety standards or capacity requirements. We upgrade old-style fuse boxes to modern circuit breaker panels with earth leakage protection, surge protection, and adequate circuit capacity for modern electrical demands. These upgrades significantly improve electrical safety, prevent fires, protect expensive appliances, and ensure compliance with current regulations.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Rapid Emergency Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Electrical emergencies require immediate attention. Our <strong>24/7 emergency callout service</strong> ensures you're never left without power or facing dangerous electrical faults. Our strategically positioned teams provide <strong>rapid response times</strong> throughout Gauteng, with average arrival times of <strong>20-40 minutes</strong> depending on your location. We carry comprehensive stock of common electrical components to resolve most emergencies on the first visit.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Quality Materials & Workmanship</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use only high-quality electrical materials from reputable suppliers—including certified cables (SABS approved), quality circuit breakers, proper conduit, weatherproof fittings, and branded lighting fixtures. Our electricians follow proper installation techniques including correct cable sizing, appropriate protection ratings, secure terminations, proper earthing, and neat cable management. All work is tested and verified before completion.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Transparent Pricing & Detailed Quotes</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide detailed, itemized quotations that clearly break down material costs, labor charges, COC certificate fees, and any additional requirements. No hidden costs or unexpected surprises. Our competitive pricing reflects fair value for licensed, certified electrical work performed to the highest safety standards with full legal compliance and documentation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
