// File path: app/plumbing-services/page.tsx
// Clean URL: https://goshenprojects.co.za/plumbing-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Droplets, Wrench, Clock, ShieldCheck, TrendingUp, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Plumbing Services in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional plumbing services in Gauteng. Installations, repairs, leak detection, burst pipes, drain cleaning, geyser installation & repairs, bathroom & kitchen plumbing for residential & commercial properties in Pretoria, Johannesburg & Midrand. Licensed plumbers, 24/7 emergency service, compliance guaranteed. Same-day quotes.",
  keywords: "plumbers Gauteng, plumbing services Pretoria, emergency plumber Johannesburg, geyser installation Midrand, burst pipes, leak detection, drain cleaning, bathroom plumbing, kitchen plumbing, plumbing repairs",
  openGraph: {
    title: "Plumbing Services | Goshen Projects Solutions Gauteng",
    description:
      "Expert plumbing installations, repairs, and maintenance for homes and businesses. Licensed plumbers, modern equipment, compliance guaranteed. 24/7 emergency service. Serving Pretoria, Johannesburg & Gauteng.",
    images: [
      {
        url: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
        width: 1200,
        height: 630,
        alt: "Professional plumbing services in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function PlumbingServicesPage() {
  return (
    <ServicePageTemplate
      title="Plumbing Services"
      description="Keep your property's plumbing systems functioning flawlessly with expert plumbing services from licensed, experienced professionals. From routine maintenance and minor repairs to complex installations and emergency burst pipe responses, we deliver reliable plumbing solutions that ensure water efficiency, prevent costly damage, and maintain compliance with South African plumbing standards. With over 10 years of experience, modern diagnostic equipment, and commitment to quality workmanship, our plumbing team serves residential, commercial, and industrial clients across Gauteng with prompt, professional service you can trust."
      icon={Droplets}
      heroImage="/professional-plumber-working-on-pipes-in-a-gauteng-.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day / 24/7 Emergency"
      features={[
        "Complete plumbing installations (new builds & renovations)",
        "Plumbing repairs & maintenance",
        "Emergency plumbing services (24/7)",
        "Leak detection & repairs",
        "Burst pipe repairs & replacements",
        "Drain cleaning & unblocking",
        "Geyser installation & replacements",
        "Geyser repairs & maintenance",
        "Bathroom plumbing (toilets, basins, showers, baths)",
        "Kitchen plumbing (sinks, dishwashers, taps)",
        "Water pressure optimization",
        "Pipe repairs, replacements & rerouting",
        "Water meter installations",
        "Backflow prevention & testing",
        "Compliance certificates (COC)",
      ]}
      benefits={[
        {
          title: "Licensed & Experienced Plumbers",
          description:
            "Our team comprises licensed plumbers with 10+ years of experience, extensive technical knowledge, and proven expertise handling residential, commercial, and industrial plumbing challenges of all complexities.",
          icon: ShieldCheck,
        },
        {
          title: "Modern Diagnostic Equipment",
          description:
            "We utilize advanced leak detection technology, CCTV drain inspection cameras, pressure testing equipment, and electronic locating tools for accurate diagnosis and efficient repairs without unnecessary excavation.",
          icon: Wrench,
        },
        {
          title: "Compliance & Code Standards",
          description:
            "All plumbing work meets SANS 10252 standards and National Building Regulations. We provide Certificates of Compliance (COC) for installations, ensuring legal compliance and insurance validity.",
          icon: CheckCircle,
        },
        {
          title: "24/7 Emergency Response",
          description:
            "Burst pipes, major leaks, and plumbing emergencies don't wait for business hours. Our emergency plumbing service provides rapid response when you need urgent assistance to minimize water damage.",
          icon: Clock,
        },
        {
          title: "Quality Materials & Warranties",
          description:
            "We install only premium plumbing materials from reputable suppliers—durable pipes, reliable fixtures, quality fittings—backed by manufacturer warranties and our workmanship guarantee for lasting peace of mind.",
          icon: TrendingUp,
        },
        {
          title: "Transparent Pricing & Quotations",
          description:
            "Honest, itemized quotes with no hidden fees or surprise charges. You'll understand exactly what work is required, what it costs, and what you're paying for before any work commences.",
          icon: Droplets,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Problem Assessment & Diagnosis",
          description: "Our plumber inspects the issue thoroughly, uses diagnostic equipment where needed, explains the problem clearly, identifies underlying causes, and discusses potential solutions with you.",
        },
        {
          step: 2,
          title: "Transparent Quotation & Approval",
          description: "Receive detailed quotation covering materials, labor, and any additional work required. We explain options, recommend best solutions for your situation and budget, and proceed only with your approval.",
        },
        {
          step: 3,
          title: "Professional Repair or Installation",
          description: "Expert plumbers complete work efficiently using quality materials, proper techniques, and compliance with standards. We minimize disruption, protect your property, and maintain clean work practices throughout.",
        },
        {
          step: 4,
          title: "Testing, Certification & Cleanup",
          description: "Comprehensive system testing for leaks, pressure, and functionality. Issue Certificates of Compliance where required. Thorough cleanup leaving your property spotless and plumbing fully operational.",
        },
      ]}
      relatedServices={[
        { 
          title: "Waterproofing Services", 
          href: "/waterproofing-services",
          icon: Droplets,
        },
        { 
          title: "Property Maintenance", 
          href: "/property-maintenance",
          icon: Wrench,
        },
        { 
          title: "Kitchen & Bathroom Cupboards", 
          href: "/kitchen-bathroom-cupboards",
          icon: CheckCircle,
        },
        { 
          title: "Building Renovations", 
          href: "/building-construction-renovations",
          icon: ShieldCheck,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Plumbing Services?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of plumbing experience</strong> across Gauteng, Goshen Projects Solutions delivers reliable, professional plumbing services for residential, commercial, and industrial clients. Based in <strong>Midrand at 22 Richards Dr</strong>, our licensed plumbers have completed <strong>thousands of plumbing installations, repairs, and emergency callouts</strong> throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas. We combine technical expertise, modern equipment, and customer-focused service to solve plumbing challenges efficiently and effectively.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Plumbing Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need routine maintenance, emergency repairs, new installations, or complete plumbing system upgrades, our experienced team handles all aspects of residential and commercial plumbing:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Plumbing Installations</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete plumbing for new builds, additions, and renovations including water supply systems, drainage networks, hot water installations, and fixture installations with full compliance certification.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Repairs & Maintenance</h4>
                  <p className="text-sm text-muted-foreground">
                    Dripping taps, leaking pipes, toilet repairs, blocked drains, water pressure issues, valve replacements, and preventive maintenance to keep plumbing systems functioning optimally.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Emergency Plumbing</h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 emergency response for burst pipes, major leaks, blocked sewers, geyser failures, and other urgent plumbing disasters requiring immediate attention to minimize damage.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Geyser Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Geyser installations (electric & solar), repairs, thermostat replacements, element replacements, valve servicing, timer installations, and maintenance for all geyser brands and types.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Emergency Plumbing Services - 24/7 Response</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Plumbing emergencies cause stress, inconvenience, and potentially significant water damage if not addressed immediately. Our 24/7 emergency plumbing service provides rapid response when you need urgent assistance. Common plumbing emergencies include burst pipes causing flooding, major leaks damaging property, blocked sewers backing up, geysers bursting and flooding ceilings, no water supply issues, and frozen or cracked pipes in winter. We respond quickly with equipped vehicles, diagnose problems efficiently, implement immediate solutions to stop damage, and perform permanent repairs. Our emergency service operates after hours, weekends, and public holidays—because plumbing emergencies don't respect business hours.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Leak Detection & Repairs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Water leaks waste water, increase utility bills, cause structural damage, promote mold growth, and indicate underlying plumbing problems. We specialize in detecting and repairing leaks using advanced technology and proven methods. Our leak detection services utilize electronic acoustic leak detection equipment, thermal imaging cameras for hidden leaks, pressure testing to isolate leak zones, CCTV drain inspection for underground leaks, and moisture meters for wall and floor leaks. We locate leaks accurately without unnecessary excavation or wall demolition. Once detected, we repair leaks using appropriate methods—pipe repairs, joint resealing, valve replacements, tap repairs, or complete pipe replacement where corrosion or damage is extensive. Early leak detection prevents costly water damage and reduces water waste.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Burst Pipe Repairs & Replacements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Burst pipes cause immediate flooding, water damage, and require urgent attention. Common causes include aging corroded pipes, freezing temperatures causing expansion, excessive water pressure, ground movement and settling, and poor installation or inferior materials. Our burst pipe service includes emergency water shutoff to stop flooding, damage assessment and containment, temporary repairs for immediate relief, permanent pipe repairs or replacements, testing for other weak sections, and coordination with insurance assessors if needed. We repair burst pipes using modern materials including copper pipes, PEX piping, HDPE pipes, and stainless steel where appropriate. Pipe replacements receive pressure testing and compliance certification ensuring safe, reliable water supply restoration.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Drain Cleaning & Unblocking Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Blocked drains cause slow drainage, unpleasant odors, backups, and potential sewage overflow. We provide comprehensive drain cleaning and unblocking for kitchen sinks blocked by grease and food debris, bathroom basins clogged with hair and soap, shower and bath drains, toilets blocked by foreign objects, main sewer lines, stormwater drains, and floor drains. Our drain cleaning methods include high-pressure water jetting to clear blockages and clean pipe walls, mechanical augering for stubborn blockages, chemical treatments where appropriate, and root cutting for tree root intrusion. We use CCTV drain inspection cameras to identify blockage causes, assess pipe condition, and verify clearing effectiveness. Preventive drain maintenance helps avoid recurring blockages and extends drainage system life.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Geyser Installation & Replacements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Geysers provide hot water essential for daily comfort. We install and replace geysers of all types and sizes including electric geysers (50L to 400L capacity), solar geysers with electric backup, heat pump systems for energy efficiency, gas geysers (instantaneous and storage), and commercial high-capacity units. Our geyser installation service includes site assessment and sizing recommendations, removal of old geysers, installation of new units with proper mounting, connection to water supply and electrical systems, installation of drip trays and overflow pipes, thermostat setting and testing, installation of timers for load shedding, and compliance certification. We work with quality brands including Kwikot, Geyserwise, Suntech, and others. Proper installation ensures safety, efficiency, and longevity while meeting insurance requirements and building regulations.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Geyser Repairs & Maintenance</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Regular geyser maintenance prevents failures, extends lifespan, and maintains energy efficiency. We provide geyser repairs and servicing including element replacements (heating elements burn out over time), thermostat replacements and adjustments, valve replacements (pressure relief valves, isolation valves), leak repairs (tanks, fittings, connections), timer installations and repairs, anode replacements to prevent corrosion, and complete geyser servicing. Warning signs your geyser needs attention include lukewarm or cold water, water taking longer to heat, unusual noises (rumbling, hissing), water leaks from geyser or overflow pipes, discolored rusty water, and tripped electricity breakers. Annual geyser servicing detects problems early, extends geyser life by years, improves energy efficiency, and prevents catastrophic failures. We service all geyser brands and types.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Bathroom Plumbing Installation & Repairs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bathroom plumbing encompasses numerous fixtures and systems requiring expert installation and maintenance. Our bathroom plumbing services include toilet installation and repairs (including dual-flush mechanisms, cisterns, seats), basin and pedestal installations, tap installations and repairs (mixer taps, pillar taps, basin mixers), shower installations (mixer showers, thermostatic showers), bath installations and drain connections, bidet installations, and towel rail plumbing. We handle bathroom renovations with complete replumbing, relocating fixtures, upgrading to modern water-saving fixtures, and ensuring compliance with water regulations. Bathroom plumbing requires waterproofing integration, proper fall on waste pipes, ventilation considerations, and access for future maintenance. We coordinate with bathroom fitters, tilers, and electricians ensuring seamless bathroom projects.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Kitchen Plumbing Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kitchen plumbing serves sinks, dishwashers, waste disposal units, and sometimes refrigerators with ice makers. We provide kitchen plumbing including sink installations (single, double, undermount, farmhouse sinks), tap installations (mixer taps, boiling water taps, water filter taps), dishwasher plumbing connections, waste disposal unit installations, water filter system installations, and kitchen renovations with complete replumbing. Kitchen plumbing must accommodate modern appliances, provide adequate drainage capacity, prevent grease buildup in drains, and maintain proper water pressure. We install grease traps for commercial kitchens, backflow prevention where required, and proper venting for drainage systems. Kitchen plumbing integrates with cupboard installations, benchtop layouts, and appliance placements requiring coordination during renovations.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Water Pressure Optimization</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Water pressure affects shower performance, appliance function, and daily convenience. Low water pressure causes weak showers, slow-filling toilets, poor washing machine performance, and frustration. High water pressure causes noisy pipes, leaking taps, damaged appliances, and wasted water. We diagnose and resolve water pressure issues caused by municipal supply variations, clogged pipes or filters, undersized pipes, faulty pressure reducing valves, height differences in multi-story buildings, and aging corroded pipes restricting flow. Solutions include pressure pump installations for low pressure, pressure reducing valves for high pressure, pipe replacements to improve flow, filter cleaning or replacement, and pressure tank installations. Optimal water pressure enhances comfort, protects appliances, and improves water efficiency throughout your property.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Pipe Repairs, Replacements & Rerouting</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pipes deteriorate over time due to corrosion, age, ground movement, and environmental factors. We provide pipe repair and replacement services for corroded pipes leaking or compromised, cracked or broken pipes, frozen and burst pipes, undersized pipes restricting flow, outdated galvanized steel pipes, and pipes damaged during construction or landscaping. Our pipe replacement services use modern materials including copper pipes (durable, reliable, traditional choice), PEX piping (flexible, freeze-resistant, easy installation), HDPE pipes (durable plastic for underground use), and stainless steel for specific applications. We perform pipe rerouting when fixtures relocate during renovations, avoiding obstacles like foundations or trees, improving layouts for better flow, and replacing exposed pipes with concealed routing. All pipe work receives pressure testing and compliance certification ensuring safe, leak-free operation.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Commercial & Industrial Plumbing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Commercial and industrial properties have complex plumbing requirements, higher usage demands, and compliance obligations. We serve offices, retail stores, restaurants and cafes, schools and universities, hospitals and medical facilities, factories and warehouses, apartment complexes, and hotels. Commercial plumbing services include installation of commercial-grade fixtures, high-capacity water heating systems, grease traps and fat separators, backflow prevention devices, water meter installations, irrigation systems, and fire sprinkler systems (in partnership with fire specialists). We provide preventive maintenance contracts, emergency plumbing response, compliance testing and certification, and water efficiency audits. Commercial projects require minimal disruption to operations, after-hours work scheduling, adherence to health and safety regulations, and coordination with facility managers and other trades.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Water Meter Installations & Replacements</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Water meters measure consumption for billing, monitor usage patterns, and detect leaks through abnormal readings. We install and replace water meters for municipal requirements, sub-metering for apartments and complexes, irrigation metering for separate billing, industrial process metering, and leak detection monitoring. Water meter services include new meter installations with proper sizing, meter replacements for faulty or outdated units, meter relocations for access or safety, and meter testing for accuracy. We work with municipalities for approvals, ensure compliance with regulations, install meter boxes and protection, and provide certification. Accurate water metering enables fair billing, identifies leaks quickly, encourages water conservation, and helps manage water costs effectively.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Backflow Prevention & Testing</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Backflow occurs when water flows backward in plumbing systems, potentially contaminating potable water supplies with pollutants, chemicals, or sewage. Prevention is legally required in certain applications. We install backflow prevention devices on irrigation systems, fire sprinkler systems, chemical mixing stations, commercial kitchens, medical facilities, and industrial processes. Devices include reduced pressure zone (RPZ) valves, double check valve assemblies, atmospheric vacuum breakers, and pressure vacuum breakers. We provide annual backflow testing as required by municipalities, certification and documentation, repairs and replacements of faulty devices, and compliance consultation. Proper backflow prevention protects public health, meets regulatory requirements, and avoids penalties and liability.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Plumbing Compliance & Certification</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Plumbing work in South Africa must comply with SANS 10252 standards and National Building Regulations. Non-compliant plumbing creates safety hazards, insurance complications, and legal liability. We ensure all plumbing work meets required standards and provide Certificates of Compliance (COC) for new installations, alterations to existing systems, geyser installations, and property transfers (occupancy certificates). Our compliance services include proper material specifications, correct pipe sizing and installation, appropriate fixture installations, backflow prevention where required, and documentation of work completed. Certificates of Compliance are legally required, validate insurance claims, satisfy property transfer requirements, and demonstrate work quality and safety. We handle municipal submissions, inspections, and approvals ensuring hassle-free compliance.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Water Efficiency & Conservation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Water scarcity and rising costs make water efficiency increasingly important. We help property owners reduce water consumption through water-saving fixture installations (low-flow showerheads, dual-flush toilets, aerator taps), leak detection and repairs preventing waste, greywater systems for garden irrigation, rainwater harvesting systems, efficient irrigation controllers and sensors, and water efficiency audits. Water conservation benefits include reduced water bills, lower sewage charges, environmental responsibility, reduced strain on municipal supply, and preparation for water restrictions. We advise on practical water-saving measures, install water-efficient systems, and help qualify for green building certifications. Even simple upgrades like fixing leaks and installing aerators produce measurable savings.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Quality Materials & Trusted Brands</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Plumbing materials directly affect system reliability, longevity, and maintenance requirements. We use only quality materials from reputable suppliers and trusted brands. Pipe materials include copper (durable, antimicrobial properties), PEX (flexible, freeze-resistant), HDPE (plastic, corrosion-resistant), and stainless steel (premium, high-pressure applications). Fixtures and fittings come from Cobra Taps, Grohe, Hansgrohe, and other quality manufacturers. Geysers from Kwikot, Suntech, and Geyserwise. Valves, connectors, and components from recognized suppliers. Quality materials cost slightly more initially but deliver superior performance, longer service life, fewer failures and repairs, better warranties and support, and compliance with standards. We never compromise on material quality—it's fundamental to reliable plumbing systems.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Preventive Maintenance Programs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Preventive maintenance prevents emergencies, extends system life, and reduces long-term costs. We offer maintenance contracts for commercial properties, residential complexes, body corporates, and individual homeowners. Services include scheduled inspections, geyser servicing and testing, drain maintenance and cleaning, leak checks and pressure testing, valve exercising and testing, fixture inspections and minor repairs, and detailed reporting with recommendations. Maintenance programs detect problems early before they become emergencies, maintain optimal system performance, fulfill insurance requirements, budget plumbing costs predictably, and extend equipment and system lifespans. Regular maintenance is especially valuable for aging properties, complex systems, and high-value installations where failures cause significant disruption or damage.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Transparent Pricing & Quotations</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide honest, detailed quotations with no hidden fees or surprise charges. Quotes itemize materials and components, labor costs and time estimates, additional work required (preparation, access, restoration), call-out fees for emergency service, and compliance certification costs. Quotations clearly explain what work will be performed, what problems will be solved, what guarantees apply, and what ongoing maintenance is recommended. For emergency work requiring immediate action, we provide estimated costs upfront and confirm final charges after completion. Transparent pricing builds trust, eliminates misunderstandings, allows informed decisions, and ensures you receive fair value for quality plumbing services. Our reputation depends on honest dealing and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
