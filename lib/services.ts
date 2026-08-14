import {
  Zap,
  Wrench,
  Settings2,
  SearchCheck,
  Sun,
  BatteryCharging,
  Fuel,
  Activity,
  FileCheck,
  CreditCard,
  Building2,
  Droplets,
  Camera,
  Siren,
  type LucideIcon,
} from "lucide-react"

export const SITE = {
  name: "Blackout Busters",
  url: "https://www.blackoutbusterssa.co.za",
  phoneDisplay: "+27 83 617 1112",
  phoneTel: "tel:+27836171112",
  phoneSchema: "+27-83-617-1112",
  whatsapp:
    "https://wa.me/27836171112?text=" +
    encodeURIComponent("Hi Blackout Busters, I'd like to make an inquiry."),
  email: "info@blackoutbusterssa.co.za",
  region: "Gauteng",
  base: "Kempton Park",
}

export interface ServiceBenefit {
  title: string
  description: string
  icon?: LucideIcon
}

export interface ServiceProcessStep {
  step: number
  title: string
  description: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface Service {
  slug: string
  title: string
  navTitle: string
  metaTitle: string
  metaDescription: string
  keywords: string
  icon: LucideIcon
  category: string
  tagline: string
  description: string
  image: string
  imageAlt: string
  priceRange?: string
  responseTime?: string
  features: string[]
  benefits: ServiceBenefit[]
  process: ServiceProcessStep[]
  faqs: ServiceFaq[]
  related: string[]
}

/**
 * Single source of truth for every Blackout Busters service.
 * Header, footer, services hub, sitemap, and the [service] route all read from here.
 */
export const services: Service[] = [
  {
    slug: "electrical-installation",
    title: "Electrical Installation",
    navTitle: "Electrical Installation",
    metaTitle: "Electrical Installation in Gauteng | Certified Wiring & COC",
    metaDescription:
      "Professional electrical installation in Gauteng. New wiring, circuits, DB boards, and fittings installed to SANS code with a Certificate of Compliance. Call Blackout Busters on 083 617 1112.",
    keywords:
      "electrical installation Gauteng, house wiring Johannesburg, new circuit installation Pretoria, certified electrician, DB board installation, electrical COC",
    icon: Zap,
    category: "Electrical Core",
    tagline:
      "New wiring, circuits, and fittings installed to code for homes and businesses, signed off with a Certificate of Compliance.",
    description:
      "Whether you are wiring a new build, adding circuits for a renovation, or fitting out a commercial space, Blackout Busters installs it safely and to SANS standard. Every job is planned properly, installed by a certified electrician, and handed over with the paperwork you need for insurers and buyers.",
    image: "/electrician-installing-wiring.png",
    imageAlt: "Blackout Busters electrician installing new wiring in a Gauteng home",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "New home and building wiring",
      "Additional plug points and circuits",
      "Light fittings, switches, and dimmers",
      "Distribution board installation",
      "Stove, oven, and appliance connections",
      "Certificate of Compliance on completion",
    ],
    benefits: [
      {
        title: "Installed to SANS Code",
        description: "Every circuit is wired to the South African standard so it passes inspection the first time.",
        icon: FileCheck,
      },
      {
        title: "One Team, Start to Finish",
        description: "The electrician who plans your installation is the one who signs it off, so nothing gets lost.",
        icon: Zap,
      },
      {
        title: "Clean, Documented Work",
        description: "Neat cable runs, labelled boards, and a compliance certificate you can hand over without a follow up call.",
        icon: SearchCheck,
      },
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "We look at the whole property, your load needs, and the existing board before quoting." },
      { step: 2, title: "Written Quote", description: "A clear, itemised quote with no hidden extras, sized to what you actually need." },
      { step: 3, title: "Installation", description: "Certified electricians install to code with tidy cable runs and minimal disruption." },
      { step: 4, title: "Test & Certify", description: "We test every circuit and hand over a Certificate of Compliance on completion." },
    ],
    faqs: [
      {
        question: "Do you provide a Certificate of Compliance with an installation?",
        answer:
          "Yes. Every electrical installation we complete is tested and signed off with a Certificate of Compliance (COC), which you can hand to your insurer, auditor, or a property buyer.",
      },
      {
        question: "Can you install extra plug points in an existing home?",
        answer:
          "Absolutely. We add plug points, dedicated circuits, and light fittings to existing homes and businesses across Gauteng, and we make sure the board can handle the additional load.",
      },
      {
        question: "How quickly can you quote?",
        answer:
          "We aim to provide same day quotes for most electrical installation work in Johannesburg, Pretoria, and Kempton Park. Call 083 617 1112 or send a WhatsApp to get started.",
      },
    ],
    related: ["electrical-repairs", "db-board-upgrades-compliance-certificates", "maintenance"],
  },
  {
    slug: "electrical-repairs",
    title: "Electrical Repairs",
    navTitle: "Electrical Repairs",
    metaTitle: "Electrical Repairs in Gauteng | Fast Fault Finding",
    metaDescription:
      "Fast, reliable electrical repairs in Gauteng. Tripping breakers, faulty plugs, and failing components fixed by certified electricians. Emergency callouts available. Call 083 617 1112.",
    keywords:
      "electrical repairs Gauteng, tripping breaker fix, electrician Johannesburg, emergency electrician Pretoria, fault finding, power failure repair",
    icon: Wrench,
    category: "Electrical Core",
    tagline: "Fast, reliable fixes for faults, trips, and failing electrical components, done right the first time.",
    description:
      "When a breaker keeps tripping or a plug point stops working, you want it fixed properly, not patched. Blackout Busters tracks down the real cause of the fault, repairs it safely, and makes sure the rest of the installation is sound before we leave. Emergency callouts are available across Gauteng.",
    image: "/electrician-repairing-db-board.png",
    imageAlt: "Blackout Busters electrician repairing a tripping distribution board in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "Tripping breaker diagnosis",
      "Faulty plug and switch repairs",
      "Short circuit and earth fault repair",
      "Distribution board fault finding",
      "Wiring fault repairs",
      "Emergency electrical callouts",
    ],
    benefits: [
      {
        title: "We Find the Real Cause",
        description: "We diagnose the actual fault instead of resetting a breaker and hoping it holds.",
        icon: SearchCheck,
      },
      {
        title: "Available for Emergencies",
        description: "Urgent electrical faults do not wait for business hours, and neither do we.",
        icon: Siren,
      },
      {
        title: "Safe and Compliant",
        description: "Repairs are done to code, and we flag anything else that puts your property at risk.",
        icon: FileCheck,
      },
    ],
    process: [
      { step: 1, title: "Callout", description: "Tell us what is happening and we book a visit, fast tracking genuine emergencies." },
      { step: 2, title: "Diagnosis", description: "We test the installation and find the true source of the fault." },
      { step: 3, title: "Repair", description: "We fix the fault safely and confirm the circuit is stable." },
      { step: 4, title: "Safety Check", description: "We check the surrounding installation and advise on anything else at risk." },
    ],
    faqs: [
      {
        question: "My breaker keeps tripping. Can you help?",
        answer:
          "Yes. A breaker that keeps tripping is usually a sign of an overloaded circuit, a faulty appliance, or a wiring fault. We test the circuit, find the cause, and repair it safely rather than just resetting it.",
      },
      {
        question: "Do you offer emergency electrical callouts?",
        answer:
          "We do. For urgent faults such as a total power failure, burning smell, or exposed live wiring, call 083 617 1112 and we will prioritise your callout.",
      },
      {
        question: "Which areas do you cover for repairs?",
        answer:
          "We repair electrical faults across Gauteng, including Johannesburg, Pretoria, Kempton Park, Midrand, Sandton, and Centurion.",
      },
    ],
    related: ["fault-finding-inspections", "electrical-installation", "emergency-247-callout"],
  },
  {
    slug: "maintenance",
    title: "Electrical Maintenance",
    navTitle: "Electrical Maintenance",
    metaTitle: "Electrical Maintenance in Gauteng | Scheduled Servicing",
    metaDescription:
      "Scheduled electrical maintenance in Gauteng for homes and businesses. Catch faults before they become outages with planned inspections and servicing. Call Blackout Busters on 083 617 1112.",
    keywords:
      "electrical maintenance Gauteng, planned electrical servicing, preventative maintenance Johannesburg, commercial electrical maintenance, DB board servicing",
    icon: Settings2,
    category: "Electrical Core",
    tagline: "Scheduled electrical maintenance that catches small problems before they become outages.",
    description:
      "The cheapest fault is the one you catch early. Blackout Busters offers scheduled electrical maintenance for homes, offices, and industrial sites, checking boards, connections, and circuits so faults are found on a planned visit rather than in the dark. Ideal for landlords, complexes, and businesses that cannot afford downtime.",
    image: "/electrician-servicing-panel.png",
    imageAlt: "Blackout Busters electrician on a scheduled maintenance visit in Gauteng",
    priceRange: "Maintenance plans",
    responseTime: "Planned visits",
    features: [
      "Scheduled inspections",
      "Distribution board servicing",
      "Connection and torque checks",
      "Thermal fault detection",
      "Multi site maintenance plans",
      "Compliance record keeping",
    ],
    benefits: [
      {
        title: "Fewer Surprise Outages",
        description: "Planned checks catch loose connections and failing components before they trip you offline.",
        icon: Settings2,
      },
      {
        title: "Kinder on the Budget",
        description: "Preventative servicing costs a fraction of an emergency callout and lost trading time.",
        icon: Activity,
      },
      {
        title: "One Point of Contact",
        description: "One team keeps the records for every site, so you always know what was checked and when.",
        icon: FileCheck,
      },
    ],
    process: [
      { step: 1, title: "Site Review", description: "We assess your property and set a maintenance schedule that fits how you use it." },
      { step: 2, title: "Planned Visit", description: "We arrive on schedule and inspect boards, circuits, and connections." },
      { step: 3, title: "Report", description: "You get a clear report of what was checked and anything that needs attention." },
      { step: 4, title: "Repair or Renew", description: "We fix minor issues on the spot and quote anything larger before it fails." },
    ],
    faqs: [
      {
        question: "How often should electrical maintenance be done?",
        answer:
          "It depends on the property. Most homes benefit from a yearly check, while busy commercial and industrial sites are often serviced quarterly. We set a schedule that matches your usage.",
      },
      {
        question: "Do you offer maintenance plans for multiple properties?",
        answer:
          "Yes. We manage planned electrical maintenance across multiple sites for landlords, complexes, and businesses, with a single point of contact and shared records.",
      },
      {
        question: "What does a maintenance visit include?",
        answer:
          "We inspect the distribution board, test key circuits, check connections for heat and looseness, and report anything that needs attention before it causes an outage.",
      },
    ],
    related: ["fault-finding-inspections", "db-board-upgrades-compliance-certificates", "commercial-industrial-electrical"],
  },
  {
    slug: "fault-finding-inspections",
    title: "Fault Finding & Inspections",
    navTitle: "Fault Finding & Inspections",
    metaTitle: "Electrical Fault Finding & Inspections in Gauteng",
    metaDescription:
      "Electrical fault finding and inspections in Gauteng. We diagnose the real cause of trips, power loss, and faults, not just the symptom. Call Blackout Busters on 083 617 1112.",
    keywords:
      "electrical fault finding Gauteng, electrical inspection Johannesburg, tripping circuit diagnosis, earth fault detection, electrical testing Pretoria",
    icon: SearchCheck,
    category: "Electrical Core",
    tagline: "Diagnostics that find the actual cause of a fault, not just the symptom.",
    description:
      "Some electrical faults hide. A circuit trips at random, a light flickers, or half the house loses power for no obvious reason. Blackout Busters uses proper testing to isolate the real cause, then explains exactly what is wrong and what it takes to fix it, so you are not paying to replace parts on a guess.",
    image: "/electrician-testing-circuit.png",
    imageAlt: "Blackout Busters electrician using a meter to find an electrical fault in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "Intermittent fault diagnosis",
      "Earth leakage testing",
      "Circuit tracing and mapping",
      "Thermal imaging checks",
      "Pre purchase electrical inspections",
      "Written inspection reports",
    ],
    benefits: [
      {
        title: "Root Cause, Not Guesswork",
        description: "We test methodically so you pay to fix the real fault, not to swap parts on a hunch.",
        icon: SearchCheck,
      },
      {
        title: "Clear Reporting",
        description: "You get a plain explanation of what is wrong and what the repair involves.",
        icon: FileCheck,
      },
      {
        title: "Peace of Mind",
        description: "A full inspection before buying or renting tells you what you are really taking on.",
        icon: Settings2,
      },
    ],
    process: [
      { step: 1, title: "Describe the Fault", description: "Tell us what happens and when, so we know where to start looking." },
      { step: 2, title: "Systematic Testing", description: "We use meters and thermal checks to isolate the fault safely." },
      { step: 3, title: "Diagnosis", description: "We pinpoint the cause and explain it in plain language." },
      { step: 4, title: "Repair Quote", description: "You get a clear quote to fix it, with no pressure and no guesswork." },
    ],
    faqs: [
      {
        question: "Why does my circuit trip only sometimes?",
        answer:
          "Intermittent trips are often caused by moisture, a failing appliance, or a partial earth fault. These are exactly the kind of hidden problems our testing is designed to isolate.",
      },
      {
        question: "Do you do pre purchase electrical inspections?",
        answer:
          "Yes. Before you buy or rent a property we can inspect the electrical installation and give you a written report on its condition and compliance.",
      },
      {
        question: "Do you give a report after the inspection?",
        answer:
          "We provide a written report explaining what we found, what it means, and what any recommended repairs involve.",
      },
    ],
    related: ["electrical-repairs", "maintenance", "db-board-upgrades-compliance-certificates"],
  },
  {
    slug: "solar-installation",
    title: "Solar Installation",
    navTitle: "Solar Installation",
    metaTitle: "Solar Installation in Gauteng | Panels Sized for Real Usage",
    metaDescription:
      "Solar installation in Gauteng sized for real usage patterns. Grid tied and hybrid solar systems designed, installed, and certified by Blackout Busters. Call 083 617 1112.",
    keywords:
      "solar installation Gauteng, solar panels Johannesburg, hybrid solar system Pretoria, grid tied solar, solar power for home, solar installer Kempton Park",
    icon: Sun,
    category: "Solar & Backup Power",
    tagline: "Panel systems sized and installed for real Gauteng usage patterns, not a one size fits all package.",
    description:
      "Solar only pays off when the system actually matches how you use power. Blackout Busters sizes your solar installation around your real consumption and roof, installs it cleanly, and certifies the work. From a modest panel and inverter setup to a full hybrid system with battery storage, we build it to last and to keep you running through load shedding.",
    image: "/solar-panel-roof-installation.png",
    imageAlt: "Blackout Busters technicians installing solar panels on a Gauteng roof",
    priceRange: "Free quotes",
    responseTime: "Free site survey",
    features: [
      "Grid tied and hybrid systems",
      "Correct system sizing",
      "Roof mounting and cabling",
      "Inverter and battery integration",
      "Monitoring setup",
      "Certificate of Compliance",
    ],
    benefits: [
      {
        title: "Sized to Your Usage",
        description: "We design around your real consumption so you are not overpaying or under powered.",
        icon: Sun,
      },
      {
        title: "Load Shedding Ready",
        description: "Hybrid setups keep the essentials running when the grid goes down.",
        icon: BatteryCharging,
      },
      {
        title: "Certified and Clean",
        description: "Tidy installation, proper mounting, and a compliance certificate on completion.",
        icon: FileCheck,
      },
    ],
    process: [
      { step: 1, title: "Site Survey", description: "We assess your roof, usage, and goals to design the right system." },
      { step: 2, title: "System Design", description: "A proposal sized to your consumption, with clear costs and expected output." },
      { step: 3, title: "Installation", description: "Panels, inverter, and cabling installed neatly and safely." },
      { step: 4, title: "Commission & Certify", description: "We commission the system, set up monitoring, and hand over the paperwork." },
    ],
    faqs: [
      {
        question: "How big a solar system do I need?",
        answer:
          "It depends on what you want to run and for how long. We survey your usage and roof, then size a system that meets your goals without paying for capacity you will not use.",
      },
      {
        question: "Will solar keep my power on during load shedding?",
        answer:
          "A hybrid solar system with battery storage keeps your essential circuits running through load shedding. A grid tied system without batteries will not, so we match the design to your needs.",
      },
      {
        question: "Do you certify the installation?",
        answer:
          "Yes. Our solar installations are done to code and signed off with a Certificate of Compliance.",
      },
    ],
    related: ["backup-power-inverter-battery", "load-shedding-solutions", "generator-installation-servicing"],
  },
  {
    slug: "backup-power-inverter-battery",
    title: "Backup Power (Inverter & Battery)",
    navTitle: "Backup Power (Inverter & Battery)",
    metaTitle: "Inverter & Battery Backup Power in Gauteng",
    metaDescription:
      "Inverter and battery backup power systems installed in Gauteng. Keep your lights, wifi, and essentials running through load shedding. Sized and certified by Blackout Busters. Call 083 617 1112.",
    keywords:
      "inverter installation Gauteng, battery backup Johannesburg, load shedding backup power, inverter and battery Pretoria, home backup power system",
    icon: BatteryCharging,
    category: "Solar & Backup Power",
    tagline: "Inverter and battery setups that kick in the moment the power drops.",
    description:
      "A good backup system takes over so smoothly you barely notice the grid is down. Blackout Busters sizes and installs inverter and battery systems that keep your lights, wifi, and essentials running through load shedding. We match the system to what you actually need to power and for how long, then install and certify it properly.",
    image: "/inverter-battery-installation.png",
    imageAlt: "Blackout Busters technician installing an inverter and battery backup system in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Free site survey",
    features: [
      "Inverter sizing and installation",
      "Lithium and other battery options",
      "Essential circuit wiring",
      "Automatic changeover",
      "Solar ready configurations",
      "Certificate of Compliance",
    ],
    benefits: [
      {
        title: "Seamless Switchover",
        description: "Your essentials stay on the moment the grid drops, with no manual switching.",
        icon: BatteryCharging,
      },
      {
        title: "Sized Correctly",
        description: "We match capacity to what you need to run, so you are never caught short mid stage.",
        icon: Activity,
      },
      {
        title: "Ready for Solar",
        description: "We can configure the system so you can add solar panels later without starting over.",
        icon: Sun,
      },
    ],
    process: [
      { step: 1, title: "Needs Assessment", description: "We work out what you need to keep running and for how long." },
      { step: 2, title: "System Sizing", description: "We size the inverter and battery to your load and budget." },
      { step: 3, title: "Installation", description: "We wire your essential circuits and install the system safely." },
      { step: 4, title: "Test & Certify", description: "We test the changeover and hand over a compliance certificate." },
    ],
    faqs: [
      {
        question: "What will an inverter and battery system run?",
        answer:
          "That depends on the size. We commonly set systems up to run lights, wifi, TVs, and small appliances. Tell us what you need to keep on and we size accordingly.",
      },
      {
        question: "How long will the battery last during load shedding?",
        answer:
          "Runtime depends on battery capacity and your load. We size the system so it comfortably covers a typical load shedding stage for the circuits you choose.",
      },
      {
        question: "Can I add solar later?",
        answer:
          "Yes. We can install a solar ready backup system now so you can add panels later without replacing the inverter or battery.",
      },
    ],
    related: ["solar-installation", "generator-installation-servicing", "load-shedding-solutions"],
  },
  {
    slug: "generator-installation-servicing",
    title: "Generator Installation & Servicing",
    navTitle: "Generator Installation & Servicing",
    metaTitle: "Generator Installation & Servicing in Gauteng",
    metaDescription:
      "Standby generator installation and servicing in Gauteng. Correct sizing, safe installation, and scheduled servicing for homes and businesses. Call Blackout Busters on 083 617 1112.",
    keywords:
      "generator installation Gauteng, standby generator Johannesburg, generator servicing Pretoria, changeover switch, backup generator business",
    icon: Fuel,
    category: "Solar & Backup Power",
    tagline: "Sizing, installation, and servicing for standby generators that start when you need them.",
    description:
      "A generator is only useful if it starts and carries the load. Blackout Busters sizes standby generators to your property, installs them safely with a proper changeover, and keeps them serviced so they are ready when the grid fails. We work with homes, offices, and industrial sites across Gauteng.",
    image: "/standby-generator-installation.png",
    imageAlt: "Blackout Busters technician installing a standby generator in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "Generator sizing",
      "Safe installation",
      "Automatic and manual changeover",
      "Scheduled servicing",
      "Fault repairs",
      "Compliance sign off",
    ],
    benefits: [
      {
        title: "Sized to Carry the Load",
        description: "We size the generator to your real demand so it runs what you need without strain.",
        icon: Fuel,
      },
      {
        title: "Safe Changeover",
        description: "Proper changeover keeps your generator and the grid safely isolated.",
        icon: FileCheck,
      },
      {
        title: "Kept Ready",
        description: "Scheduled servicing means it starts and carries the load the day you actually need it.",
        icon: Settings2,
      },
    ],
    process: [
      { step: 1, title: "Load Assessment", description: "We work out what the generator needs to power and how it will run." },
      { step: 2, title: "Sizing & Quote", description: "We recommend the right generator and changeover setup with clear costs." },
      { step: 3, title: "Installation", description: "We install the generator and changeover safely and to code." },
      { step: 4, title: "Service Plan", description: "We set up scheduled servicing so it stays ready for the next outage." },
    ],
    faqs: [
      {
        question: "What size generator do I need?",
        answer:
          "It depends on what you want to run. We assess your load and recommend a generator that carries it comfortably, rather than one that runs flat out or wastes fuel.",
      },
      {
        question: "Do you install the changeover switch too?",
        answer:
          "Yes. A safe changeover, manual or automatic, is part of a proper generator installation and keeps the generator and grid supply safely isolated.",
      },
      {
        question: "Can you service a generator you did not install?",
        answer:
          "We can. We service and repair standby generators regardless of who installed them, and can set up a scheduled maintenance plan.",
      },
    ],
    related: ["backup-power-inverter-battery", "load-shedding-solutions", "commercial-industrial-electrical"],
  },
  {
    slug: "load-shedding-solutions",
    title: "Load Shedding Solutions",
    navTitle: "Load Shedding Solutions",
    metaTitle: "Load Shedding Solutions in Gauteng | Free Consultation",
    metaDescription:
      "Load shedding solutions for Gauteng homes and businesses. A free consultation to match the right backup power setup to your budget and needs. Call Blackout Busters on 083 617 1112.",
    keywords:
      "load shedding solutions Gauteng, backup power consultation, load shedding help Johannesburg, inverter vs generator, keep power on load shedding",
    icon: Activity,
    category: "Solar & Backup Power",
    tagline: "A consultation to match the right backup setup to your budget and your needs.",
    description:
      "There is no single right answer to load shedding. An inverter, a generator, a solar hybrid, or a mix of all three might suit you best. Blackout Busters starts with a straight talking consultation about how you use power and what you can spend, then recommends the setup that gives you the most uptime for your money.",
    image: "/home-backup-power-panel.png",
    imageAlt: "Blackout Busters advising on a load shedding backup power setup in Gauteng",
    priceRange: "Free consultation",
    responseTime: "Same day",
    features: [
      "Honest needs assessment",
      "Inverter vs generator advice",
      "Solar hybrid options",
      "Phased upgrade plans",
      "Budget matched proposals",
      "Full installation and certification",
    ],
    benefits: [
      {
        title: "Advice Before Product",
        description: "We start with what you need, not with what we would like to sell you.",
        icon: Activity,
      },
      {
        title: "Options at Every Budget",
        description: "From a small inverter to a full hybrid system, we show you the trade offs clearly.",
        icon: BatteryCharging,
      },
      {
        title: "One Team to Deliver",
        description: "The same team that advises you installs and certifies the solution.",
        icon: FileCheck,
      },
    ],
    process: [
      { step: 1, title: "Consultation", description: "We talk through how you use power and what going without costs you." },
      { step: 2, title: "Options", description: "We lay out inverter, generator, and solar options with honest pros and cons." },
      { step: 3, title: "Proposal", description: "You get a proposal matched to your budget and your priorities." },
      { step: 4, title: "Install", description: "We install and certify the solution you choose." },
    ],
    faqs: [
      {
        question: "Should I get an inverter or a generator?",
        answer:
          "Both have a place. Inverters are quiet and low maintenance for lighter loads, while generators carry heavier loads for longer. In our consultation we help you choose based on what you need to run.",
      },
      {
        question: "Is the consultation really free?",
        answer:
          "Yes. We would rather spend time understanding your needs up front than sell you the wrong system. The consultation and quote are free.",
      },
      {
        question: "Can I upgrade in phases?",
        answer:
          "Definitely. Many clients start with backup power and add solar later. We plan the first phase so the next one is easy.",
      },
    ],
    related: ["backup-power-inverter-battery", "solar-installation", "generator-installation-servicing"],
  },
  {
    slug: "db-board-upgrades-compliance-certificates",
    title: "DB Board Upgrades & COC",
    navTitle: "DB Board Upgrades & COC",
    metaTitle: "DB Board Upgrades & Compliance Certificates (COC) in Gauteng",
    metaDescription:
      "Distribution board upgrades and Certificates of Compliance (COC) in Gauteng for property sales, audits, and insurance. Issued by certified electricians. Call Blackout Busters on 083 617 1112.",
    keywords:
      "COC certificate Gauteng, electrical compliance certificate Johannesburg, DB board upgrade, distribution board replacement, certificate of compliance property sale",
    icon: FileCheck,
    category: "Compliance & Upgrades",
    tagline: "Distribution board upgrades and Certificates of Compliance for sales, audits, and insurance.",
    description:
      "A Certificate of Compliance is often the one document standing between you and a property transfer or an insurance payout. Blackout Busters inspects your installation, upgrades or repairs your distribution board where needed, and issues a valid COC that reflects what is actually installed. No shortcuts, no signing off work we have not checked.",
    image: "/db-board-upgrade.png",
    imageAlt: "Blackout Busters electrician upgrading a distribution board in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "Certificate of Compliance (COC)",
      "Distribution board upgrades",
      "Board replacement and rewiring",
      "Earth leakage installation",
      "Pre sale compliance checks",
      "Insurance and audit documentation",
    ],
    benefits: [
      {
        title: "A COC You Can Rely On",
        description: "We inspect the real installation and issue a certificate that reflects it, not a rubber stamp.",
        icon: FileCheck,
      },
      {
        title: "Sale and Audit Ready",
        description: "Documentation you can hand to a buyer, insurer, or auditor without a follow up call.",
        icon: Building2,
      },
      {
        title: "Faults Fixed First",
        description: "If something fails, we quote and fix it so your certificate is honest and valid.",
        icon: Wrench,
      },
    ],
    process: [
      { step: 1, title: "Inspection", description: "We inspect and test the installation against the compliance standard." },
      { step: 2, title: "Report", description: "We tell you exactly what passes and what needs work, with clear costs." },
      { step: 3, title: "Upgrade or Repair", description: "We upgrade the board or repair faults so the installation complies." },
      { step: 4, title: "Issue COC", description: "We issue a valid Certificate of Compliance for your records." },
    ],
    faqs: [
      {
        question: "When do I need a Certificate of Compliance?",
        answer:
          "You typically need a valid COC when selling a property, and often for insurance and business audits. It confirms the electrical installation meets the required standard.",
      },
      {
        question: "What if my board fails the inspection?",
        answer:
          "We give you a clear report and quote to fix or upgrade whatever failed. Once the installation complies, we issue the certificate. We do not sign off work that is not up to standard.",
      },
      {
        question: "Do I need a new DB board?",
        answer:
          "Not always. Sometimes a repair or the addition of earth leakage protection is enough. If a full upgrade is the safer choice, we explain why before quoting.",
      },
    ],
    related: ["electrical-installation", "fault-finding-inspections", "prepaid-meter-installation"],
  },
  {
    slug: "prepaid-meter-installation",
    title: "Prepaid Meter Installation",
    navTitle: "Prepaid Meter Installation",
    metaTitle: "Prepaid Meter Installation in Gauteng | Sub Metering",
    metaDescription:
      "Prepaid meter installation and replacement in Gauteng, done properly and signed off. Ideal for landlords and complexes. Call Blackout Busters on 083 617 1112.",
    keywords:
      "prepaid meter installation Gauteng, sub meter Johannesburg, prepaid electricity meter, landlord prepaid meter, tenant metering Pretoria",
    icon: CreditCard,
    category: "Compliance & Upgrades",
    tagline: "Prepaid meter setup and replacement, done properly and signed off.",
    description:
      "Prepaid metering takes the guesswork and the arguments out of shared electricity. Blackout Busters supplies and installs prepaid and sub meters for landlords, complexes, and businesses, wired in correctly and signed off. No more chasing tenants for usage or splitting a single bill by hand.",
    image: "/prepaid-meter-installation.png",
    imageAlt: "Blackout Busters electrician installing a prepaid electricity meter in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "Prepaid meter supply",
      "Sub meter installation",
      "Meter replacement",
      "Landlord and complex metering",
      "Correct wiring and sign off",
      "Fault repairs",
    ],
    benefits: [
      {
        title: "No More Usage Disputes",
        description: "Each unit pays for exactly what it uses, so there is nothing to argue about.",
        icon: CreditCard,
      },
      {
        title: "Wired In Correctly",
        description: "Meters are installed and connected properly, then signed off.",
        icon: FileCheck,
      },
      {
        title: "Ideal for Landlords",
        description: "Perfect for rentals, complexes, and shared commercial spaces.",
        icon: Building2,
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "We check your supply and work out the right metering setup." },
      { step: 2, title: "Quote", description: "A clear quote for the meters and installation." },
      { step: 3, title: "Installation", description: "We install and connect the meters correctly." },
      { step: 4, title: "Sign Off", description: "We test, confirm, and hand over the paperwork." },
    ],
    faqs: [
      {
        question: "Can you install prepaid meters for a rental property?",
        answer:
          "Yes. Prepaid and sub meters are ideal for landlords and complexes because each tenant pays for their own usage. We install and sign them off correctly.",
      },
      {
        question: "Can you replace a faulty prepaid meter?",
        answer:
          "We can supply and fit a replacement prepaid meter and make sure it is wired and configured correctly.",
      },
      {
        question: "Do you install sub meters for businesses?",
        answer:
          "We do. Sub metering is a clean way to split electricity costs across units in a shared commercial building.",
      },
    ],
    related: ["db-board-upgrades-compliance-certificates", "electrical-installation", "commercial-industrial-electrical"],
  },
  {
    slug: "commercial-industrial-electrical",
    title: "Commercial & Industrial Electrical",
    navTitle: "Commercial & Industrial Electrical",
    metaTitle: "Commercial & Industrial Electrical in Gauteng",
    metaDescription:
      "Commercial and industrial electrical work in Gauteng. Larger scale installations, three phase, maintenance, and compliance for businesses and sites. Call Blackout Busters on 083 617 1112.",
    keywords:
      "commercial electrician Gauteng, industrial electrical Johannesburg, three phase installation, factory electrical, office fit out electrical, commercial COC",
    icon: Building2,
    category: "Compliance & Upgrades",
    tagline: "Larger scale electrical work for commercial and industrial sites, with the compliance to match.",
    description:
      "Commercial and industrial sites cannot afford electrical downtime or a compliance surprise. Blackout Busters handles larger scale installations, three phase work, maintenance, and compliance for offices, retail, and industrial premises across Gauteng. We work around your operating hours and keep the documentation an audit expects.",
    image: "/commercial-electrical-work.png",
    imageAlt: "Blackout Busters electrician working on a commercial three phase installation in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Planned or urgent",
    features: [
      "Three phase installations",
      "Office and retail fit outs",
      "Industrial machine wiring",
      "Distribution and sub board work",
      "Planned maintenance contracts",
      "Commercial compliance certificates",
    ],
    benefits: [
      {
        title: "Minimal Downtime",
        description: "We plan around your trading hours so the work does not cost you business.",
        icon: Building2,
      },
      {
        title: "Audit Ready Paperwork",
        description: "Documentation and certificates that stand up to an inspection.",
        icon: FileCheck,
      },
      {
        title: "Scales With You",
        description: "From a single office fit out to a full industrial site, we scale to the job.",
        icon: Settings2,
      },
    ],
    process: [
      { step: 1, title: "Site Assessment", description: "We assess the site, the load, and your operational needs." },
      { step: 2, title: "Scope & Quote", description: "A detailed scope and quote, with a plan that fits your schedule." },
      { step: 3, title: "Delivery", description: "We deliver the work with minimal disruption to your operation." },
      { step: 4, title: "Compliance", description: "We test, certify, and hand over full documentation." },
    ],
    faqs: [
      {
        question: "Do you work outside business hours?",
        answer:
          "Yes. For commercial and industrial clients we plan larger work around your trading or production hours to keep downtime to a minimum.",
      },
      {
        question: "Do you do three phase installations?",
        answer:
          "We do. We handle three phase distribution, machine wiring, and sub board work for industrial and larger commercial sites.",
      },
      {
        question: "Can you handle compliance for a whole building?",
        answer:
          "Yes. We inspect, upgrade where needed, and issue the compliance documentation your insurer or auditor requires.",
      },
    ],
    related: ["electrical-installation", "maintenance", "db-board-upgrades-compliance-certificates"],
  },
  {
    slug: "geyser-installation-repairs",
    title: "Geyser Installation & Repairs",
    navTitle: "Geyser Installation & Repairs",
    metaTitle: "Geyser Installation & Repairs in Gauteng",
    metaDescription:
      "Geyser installation and repairs in Gauteng, including the electrical connection, in one visit. Elements, thermostats, and new geysers. Call Blackout Busters on 083 617 1112.",
    keywords:
      "geyser installation Gauteng, geyser repair Johannesburg, geyser element replacement, geyser thermostat, geyser electrical connection Pretoria",
    icon: Droplets,
    category: "Home & Safety Extras",
    tagline: "Geyser installs, repairs, and electrical connection work in one visit.",
    description:
      "A geyser is both a plumbing and an electrical job, and doing both in one visit saves you time and money. Blackout Busters installs new geysers, replaces elements and thermostats, and handles the electrical connection safely. If your geyser has stopped heating or is tripping the power, we find out why and fix it.",
    image: "/geyser-installation-repair.png",
    imageAlt: "Blackout Busters technician installing and connecting a geyser in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "New geyser installation",
      "Element replacement",
      "Thermostat replacement",
      "Electrical connection",
      "Tripping geyser diagnosis",
      "Safety and isolator checks",
    ],
    benefits: [
      {
        title: "One Visit, One Team",
        description: "We handle the install and the electrical connection together, so there is no second callout.",
        icon: Droplets,
      },
      {
        title: "Fault Finding Included",
        description: "If your geyser trips the power, we find the real cause instead of guessing.",
        icon: SearchCheck,
      },
      {
        title: "Done Safely",
        description: "Correct isolator, earthing, and connection so the installation is safe and compliant.",
        icon: FileCheck,
      },
    ],
    process: [
      { step: 1, title: "Assessment", description: "We check the geyser, the wiring, and the isolator to find the issue." },
      { step: 2, title: "Quote", description: "A clear quote for the repair or the new geyser and connection." },
      { step: 3, title: "Work", description: "We install or repair and complete the electrical connection safely." },
      { step: 4, title: "Test", description: "We test the heating and the safety devices before we leave." },
    ],
    faqs: [
      {
        question: "My geyser trips the power. What is wrong?",
        answer:
          "A geyser that trips the power usually has a failed element or a moisture problem. We test it, find the cause, and repair it safely rather than guessing.",
      },
      {
        question: "Can you handle both the geyser and the wiring?",
        answer:
          "Yes. Because a geyser is both a plumbing and an electrical job, we handle the installation and the electrical connection in one visit.",
      },
      {
        question: "Do you replace geyser elements and thermostats?",
        answer:
          "We do. Replacing a failed element or thermostat is often cheaper than a full geyser replacement, and we will tell you honestly which makes sense.",
      },
    ],
    related: ["electrical-repairs", "electrical-installation", "maintenance"],
  },
  {
    slug: "cctv-security-installation",
    title: "CCTV & Security Installation",
    navTitle: "CCTV & Security Installation",
    metaTitle: "CCTV & Security Installation in Gauteng",
    metaDescription:
      "CCTV and security camera installation in Gauteng, wired in alongside your electrical work. Cameras, cabling, and remote viewing set up by Blackout Busters. Call 083 617 1112.",
    keywords:
      "CCTV installation Gauteng, security cameras Johannesburg, camera installation Pretoria, remote viewing setup, home security cameras, business CCTV",
    icon: Camera,
    category: "Home & Safety Extras",
    tagline: "Camera systems installed and wired in alongside your electrical work.",
    description:
      "Because we are already handling your wiring, adding CCTV is clean and cost effective. Blackout Busters installs camera systems for homes and businesses, runs the cabling properly, and sets up remote viewing so you can check in from your phone. Cameras placed where they matter, powered reliably, and tidy.",
    image: "/cctv-camera-installation.png",
    imageAlt: "Blackout Busters technician installing a CCTV security camera in Gauteng",
    priceRange: "Free quotes",
    responseTime: "Same day",
    features: [
      "Camera system installation",
      "Correct camera placement",
      "Neat cabling",
      "Remote viewing setup",
      "Recorder installation",
      "Reliable power supply",
    ],
    benefits: [
      {
        title: "Bundled With Electrical",
        description: "Adding cameras while we handle your wiring keeps the whole job neat and affordable.",
        icon: Camera,
      },
      {
        title: "Placed Where It Counts",
        description: "We place cameras to actually cover the entry points and blind spots that matter.",
        icon: SearchCheck,
      },
      {
        title: "View From Anywhere",
        description: "We set up remote viewing so you can check your property from your phone.",
        icon: Activity,
      },
    ],
    process: [
      { step: 1, title: "Walk Through", description: "We walk the property and plan camera placement and cabling." },
      { step: 2, title: "Quote", description: "A clear quote for the cameras, recorder, and installation." },
      { step: 3, title: "Installation", description: "We mount cameras, run cabling neatly, and power everything reliably." },
      { step: 4, title: "Setup", description: "We configure recording and remote viewing and show you how it works." },
    ],
    faqs: [
      {
        question: "Can I view my cameras remotely?",
        answer:
          "Yes. We set up remote viewing so you can watch live and recorded footage from your phone or computer.",
      },
      {
        question: "Can you add cameras during my electrical work?",
        answer:
          "That is the ideal time. Since we are already running cabling, adding CCTV is cleaner and more cost effective than a separate job.",
      },
      {
        question: "How many cameras do I need?",
        answer:
          "It depends on your property and the areas you want covered. We walk the site and recommend placement that covers the points that matter without overspending.",
      },
    ],
    related: ["electrical-installation", "emergency-247-callout", "maintenance"],
  },
  {
    slug: "emergency-247-callout",
    title: "Emergency 24 Hour Callout",
    navTitle: "Emergency / 24 Hour Callout",
    metaTitle: "Emergency Electrician in Gauteng | 24 Hour Callout",
    metaDescription:
      "24 hour emergency electrician in Gauteng. Power failures, burning smells, and dangerous faults handled fast by certified electricians. Call Blackout Busters now on 083 617 1112.",
    keywords:
      "emergency electrician Gauteng, 24 hour electrician Johannesburg, power failure callout, electrical emergency Pretoria, after hours electrician",
    icon: Siren,
    category: "Home & Safety Extras",
    tagline: "Urgent electrical faults do not wait for business hours, and neither do we.",
    description:
      "Some electrical problems cannot wait until morning. A total power failure, a burning smell, sparking, or exposed live wiring is dangerous and needs attention now. Blackout Busters offers a 24 hour emergency callout across Gauteng, with certified electricians who make the situation safe first and then fix the fault properly.",
    image: "/emergency-electrician-callout.png",
    imageAlt: "Blackout Busters emergency electrician responding to a fault at night in Gauteng",
    priceRange: "Callout applies",
    responseTime: "24/7",
    features: [
      "24 hour availability",
      "Total power failure response",
      "Burning smell and sparking faults",
      "Exposed wiring made safe",
      "After hours and weekend callouts",
      "Follow up repairs",
    ],
    benefits: [
      {
        title: "Around the Clock",
        description: "Certified electricians available day and night, including weekends.",
        icon: Siren,
      },
      {
        title: "Safety First",
        description: "We make the situation safe immediately, then diagnose and repair the fault.",
        icon: FileCheck,
      },
      {
        title: "Across Gauteng",
        description: "We respond to emergencies throughout Johannesburg, Pretoria, and the wider province.",
        icon: Activity,
      },
    ],
    process: [
      { step: 1, title: "Call Us", description: "Phone 083 617 1112 and describe the emergency." },
      { step: 2, title: "Rapid Response", description: "We dispatch a certified electrician to you as fast as possible." },
      { step: 3, title: "Make Safe", description: "We isolate the danger and make the installation safe." },
      { step: 4, title: "Repair", description: "We repair the fault, or plan the full repair if parts are needed." },
    ],
    faqs: [
      {
        question: "What counts as an electrical emergency?",
        answer:
          "A burning smell, sparking, exposed live wiring, or a total power failure are all emergencies. If in doubt, switch off at the main and call us on 083 617 1112.",
      },
      {
        question: "Are you really available 24/7?",
        answer:
          "Yes. Our emergency callout line operates around the clock, including nights and weekends, across Gauteng.",
      },
      {
        question: "What should I do while I wait?",
        answer:
          "If it is safe to do so, switch off the affected circuit or the main supply and keep people away from the area until we arrive.",
      },
    ],
    related: ["electrical-repairs", "fault-finding-inspections", "backup-power-inverter-battery"],
  },
]

export const serviceCategories = [
  "Electrical Core",
  "Solar & Backup Power",
  "Compliance & Upgrades",
  "Home & Safety Extras",
] as const

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getRelatedServices(slug: string): Service[] {
  const service = getService(slug)
  if (!service) return []
  return service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((s): s is Service => Boolean(s))
}
