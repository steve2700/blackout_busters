// File path: app/solar-energy-solutions/page.tsx
// Clean URL: https://goshenprojects.co.za/solar-energy-solutions

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Sun, Battery, Zap, TrendingDown, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Solar Power & Energy Solutions in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional solar power installation and energy solutions in Gauteng. Solar panel systems, solar geysers, inverters, battery backup, load shedding solutions, grid-tie & off-grid systems for residential & commercial properties in Pretoria, Johannesburg & Midrand. Reduce electricity costs, achieve energy independence, beat load shedding. Certified technicians, quality components, comprehensive warranties.",
  keywords: "solar power Gauteng, solar panels Pretoria, solar installation Johannesburg, solar geysers Midrand, inverter systems, battery backup, load shedding solutions, solar energy, grid-tie solar, off-grid solar, energy independence",
  openGraph: {
    title: "Solar Power & Energy Solutions | Goshen Projects Solutions Gauteng",
    description:
      "Reduce energy costs and beat load shedding with professional solar solutions. Solar panels, inverters, batteries, solar geysers. Certified installation, quality components. Serving Pretoria, Johannesburg & Gauteng.",
    images: [
      {
        url: "/solar-panel-installation-on-rooftop-in-gauteng-sout.jpg",
        width: 1200,
        height: 630,
        alt: "Professional solar power installation and energy solutions in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function SolarEnergySolutionsPage() {
  return (
    <ServicePageTemplate
      title="Solar Power & Energy Solutions"
      description="Achieve energy independence and eliminate load shedding frustration with professional solar power solutions. From complete solar panel installations to battery backup systems and solar geysers, we deliver comprehensive energy solutions reducing electricity costs while providing reliable power for homes and businesses. With certified technicians, premium solar components, and proven system designs, we've helped hundreds of Gauteng properties achieve energy independence. Whether you need grid-tie systems reducing monthly bills, off-grid independence, or hybrid systems with battery backup, our solar expertise delivers sustainable, cost-effective power solutions tailored to your energy needs and budget."
      icon={Sun}
      heroImage="/solar-panel-installation-on-rooftop-in-gauteng-sout.jpg"
      priceRange="Custom Quotes Based on Energy Needs"
      responseTime="Free Energy Assessments Available"
      features={[
        "Complete solar power installations",
        "Residential solar panel systems",
        "Commercial solar solutions",
        "Solar geyser installations",
        "Hybrid inverter systems",
        "Battery backup systems (lithium & lead-acid)",
        "Load shedding solutions",
        "Grid-tie solar systems",
        "Off-grid solar systems",
        "Solar carports & structures",
        "Energy monitoring systems",
        "Solar maintenance & repairs",
        "System upgrades & expansions",
        "Solar financing options",
        "COC certification & compliance",
      ]}
      benefits={[
        {
          title: "Energy Independence & Load Shedding Protection",
          description:
            "Break free from Eskom dependency with solar power providing reliable electricity during load shedding and outages. Battery systems ensure continuous power for essential appliances, security systems, internet connectivity, and daily activities without disruption.",
          icon: Battery,
        },
        {
          title: "Significant Cost Savings",
          description:
            "Dramatically reduce monthly electricity bills with free solar energy. Typical systems pay for themselves in 4-7 years through savings, with 25+ year solar panel lifespans providing decades of reduced costs and protection from electricity price increases.",
          icon: TrendingDown,
        },
        {
          title: "Environmental Sustainability",
          description:
            "Reduce your carbon footprint by generating clean, renewable energy from the sun. Each solar installation eliminates tons of CO2 emissions annually, contributing to environmental protection while demonstrating corporate or personal sustainability commitment.",
          icon: Sun,
        },
        {
          title: "Increased Property Value",
          description:
            "Solar installations increase property values significantly. Buyers prioritize homes with solar power for lower operating costs and energy independence. Commercial properties with solar demonstrate operational efficiency and environmental responsibility.",
          icon: TrendingDown,
        },
        {
          title: "Certified Professional Installation",
          description:
            "Certified solar technicians ensure safe, compliant installations meeting electrical regulations and building codes. Proper system design, quality workmanship, electrical certification, and comprehensive commissioning deliver optimal performance and safety.",
          icon: Shield,
        },
        {
          title: "Quality Components & Warranties",
          description:
            "Premium tier-1 solar panels, reputable inverters, and quality batteries from established manufacturers. Comprehensive warranties including 25-year panel performance warranties, 5-10 year inverter warranties, and workmanship guarantees protecting your investment.",
          icon: CheckCircle,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Energy Assessment & Site Survey",
          description: "Comprehensive energy consumption analysis reviewing electricity bills, usage patterns, and requirements. Site survey assessing roof condition, orientation, shading, available space, and electrical infrastructure determining optimal system design.",
        },
        {
          step: 2,
          title: "Custom System Design & Quotation",
          description: "Detailed system design specifying panel layout, inverter selection, battery capacity, and component specifications. Comprehensive quote including equipment costs, installation labor, electrical certification, and financing options with expected savings calculations and payback period.",
        },
        {
          step: 3,
          title: "Professional Installation & Certification",
          description: "Expert installation by certified technicians including roof mounting, panel installation, inverter setup, battery integration, and electrical connections. Rigorous safety compliance, quality workmanship, system testing, and electrical COC certification ensuring safe, compliant operation.",
        },
        {
          step: 4,
          title: "Commissioning, Training & Support",
          description: "Complete system commissioning verifying performance, handover documentation including warranties and manuals, comprehensive training on system operation and monitoring, and ongoing support ensuring optimal performance throughout system life.",
        },
      ]}
      relatedServices={[
        { 
          title: "Electrical Services", 
          href: "/electrical-services",
          icon: Zap,
        },
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: Shield,
        },
        { 
          title: "Building Construction & Renovations", 
          href: "/building-construction-renovations",
          icon: CheckCircle,
        },
        { 
          title: "Roofing & Roof Leak Repairs", 
          href: "/roofing-roof-leak-repairs",
          icon: Sun,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Solar Energy?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>extensive solar installation experience</strong> across Gauteng, Goshen Projects Solutions provides professional solar power and energy solutions for residential and commercial properties seeking energy independence and cost savings. Based in <strong>Midrand at 22 Richards Dr</strong>, our certified solar technicians have designed and installed <strong>hundreds of solar systems</strong> throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas. From complete solar panel installations with battery backup to solar geysers and system upgrades, we deliver quality energy solutions using premium components, proven designs, and professional installation ensuring reliable, cost-effective solar power for decades.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Solar & Energy Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need complete solar power systems, battery backup for load shedding, solar water heating, or system upgrades, our certified solar specialists provide tailored energy solutions:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Complete Solar Power Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    Grid-tie, off-grid, or hybrid solar installations with panels, inverters, batteries, and monitoring. Custom-designed for your energy needs providing power independence, cost savings, and load shedding protection with professional installation and certification.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Battery Backup Systems</h4>
                  <p className="text-sm text-muted-foreground">
                    Lithium or lead-acid battery systems storing solar energy for nighttime use and load shedding backup. Inverter systems seamlessly switch to battery power during outages ensuring continuous electricity for essential loads without interruption.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Solar Geyser Installations</h4>
                  <p className="text-sm text-muted-foreground">
                    Solar water heating systems reducing geyser electricity consumption by 50-70%. High-pressure and low-pressure systems with quality collectors, insulated tanks, and backup elements providing hot water even during cloudy periods with minimal operating costs.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial Solar Solutions</h4>
                  <p className="text-sm text-muted-foreground">
                    Large-scale solar installations for businesses, warehouses, retail centers, and industrial facilities. Reduce operating costs, demonstrate sustainability, protect against electricity volatility, and improve bottom line with professional commercial solar systems.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-12">Quality Components & Certifications</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Solar system quality depends on component selection and professional installation. We use premium components including Tier 1 solar panels from established manufacturers with 25-year performance warranties and proven reliability, quality inverters from reputable brands with local support and comprehensive warranties, reliable batteries with appropriate technology for application and expected lifespans, certified electrical components meeting South African regulations, and quality mounting systems engineered for local wind conditions. Component certifications include solar panel IEC certifications verifying quality and performance standards, inverter certifications for safety and grid compliance, battery safety certifications, and electrical compliance with SANS standards. Installation certifications include licensed electrician performing electrical work, Certificate of Compliance (COC) for electrical installation, structural engineer certification for significant roof loads where required, and accredited installer credentials from manufacturers. Quality assurance includes component inspection on delivery, professional installation following best practices, systematic testing before commissioning, electrical testing and certification, and performance verification at handover ensuring safe, compliant, high-performing solar systems.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Environmental & Financial Benefits</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Solar energy provides both environmental and financial advantages. Environmental benefits include significant reduction in carbon footprint with typical residential systems offsetting 3-5 tons of CO2 annually, decreased reliance on fossil fuel power generation, contribution to South Africa's renewable energy targets, and demonstration of environmental stewardship. Financial benefits include immediate electricity cost reduction from day one, protection from electricity price escalation averaging 7-10% annually in South Africa, excellent return on investment with 15-25% IRR typical, increased property values with solar adding 3-5% to home values, and available tax incentives for commercial installations including accelerated depreciation. Long-term savings are substantial with typical residential systems saving R500,000-R1,000,000 over 25-year lifespans, commercial systems delivering even greater savings proportional to consumption, and solar providing hedge against energy cost inflation protecting budgets for decades. Solar energy independence provides security against grid instability, load shedding protection maintaining business continuity and home comfort, and energy sovereignty reducing vulnerability to utility rate structures and policy changes.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Get Started with Solar Energy</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Starting your solar journey is straightforward with professional guidance. Contact Goshen Projects Solutions for free energy assessment reviewing your consumption, site evaluation, and energy goals. We'll design custom solar solution optimized for your property, usage patterns, and budget with detailed quotation itemizing all costs, savings projections, financing options, and expected payback period. Our certified technicians handle complete professional installation including all electrical work, certifications, and commissioning with comprehensive training on system operation and monitoring. Ongoing support ensures optimal performance throughout system life with monitoring assistance, maintenance services, troubleshooting support, and expansion options as energy needs grow. Whether you're considering small grid-tie system reducing monthly bills, complete off-grid independence, hybrid system with battery backup, or commercial installation for your business, we provide expert guidance, quality components, professional installation, and reliable support delivering sustainable, cost-effective solar energy solutions. Take control of your energy future today with solar power providing independence, savings, and sustainability for decades to come.
              </p>

              <div className="mt-12 p-8 rounded-xl bg-primary/5 border border-primary/20">
                <h4 className="text-xl font-bold mb-4">Ready to Go Solar?</h4>
                <p className="text-muted-foreground mb-6">
                  Contact us today for a free energy assessment and custom solar solution designed for your property. Our solar experts will evaluate your energy needs, assess your site, and provide detailed quotation with savings projections and financing options. Start saving with solar energy while achieving independence from load shedding and electricity price increases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Free Solar Assessment
                  </a>
                  <a 
                    href="tel:+27615307314" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                  >
                    Call Solar Specialists
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
