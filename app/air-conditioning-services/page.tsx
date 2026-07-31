// File path: app/air-conditioning-services/page.tsx
// Clean URL: https://goshenprojects.co.za/air-conditioning-services

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Snowflake, Zap, Award, Shield, Clock, Wrench, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Air Conditioning Services in Gauteng | AC Installation, Repairs & Maintenance | Goshen Projects Solutions",
  description:
    "Professional air conditioning installation, servicing, repairs and maintenance in Gauteng. Expert AC technicians for residential & commercial HVAC systems in Pretoria, Johannesburg & Midrand. Split systems, ducted AC, climate control. Licensed & certified. Same-day service available.",
  keywords: "air conditioning Gauteng, AC installation Pretoria, aircon repairs Johannesburg, HVAC services Midrand, split system installation, ducted air conditioning, AC maintenance, climate control, commercial HVAC",
  openGraph: {
    title: "Air Conditioning Services | Goshen Projects Solutions Gauteng",
    description: "Efficient and reliable climate control solutions for homes and businesses in Gauteng. Professional AC installation, servicing & repairs. Same-day service available.",
    images: [
      {
        url: "/air-conditioning-technician-installing-ac-unit-in-.jpg",
        width: 1200,
        height: 630,
        alt: "Professional air conditioning installation in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function AirConditioningServicesPage() {
  return (
    <ServicePageTemplate
      title="Air Conditioning Services"
      description="Stay comfortable all year round with professional air conditioning solutions from Goshen Projects Solutions. We provide expert AC installation, servicing, repairs, and maintenance for residential, commercial, and industrial properties throughout Gauteng. Our certified technicians work with all major brands to ensure efficient and reliable climate control tailored to your needs."
      icon={Snowflake}
      heroImage="/air-conditioning-technician-installing-ac-unit-in-.jpg"
      priceRange="From R5,500"
      responseTime="Same-day"
      features={[
        "Complete AC installation services",
        "Split system air conditioning",
        "Ducted HVAC systems",
        "Multi-split installations",
        "Inverter air conditioners",
        "Regular AC servicing & maintenance",
        "Emergency AC repairs",
        "Climate control optimization",
        "Energy-efficient units",
        "Commercial HVAC solutions",
        "Gas refilling & recharging",
        "AC unit cleaning & sanitization",
      ]}
      benefits={[
        {
          title: "Year-Round Comfort",
          description: "Stay cool in summer and warm in winter with efficient, reliable climate control systems installed and maintained by our expert technicians.",
          icon: Snowflake,
        },
        {
          title: "Energy Efficiency",
          description: "We install and recommend energy-efficient inverter units that minimize running costs and reduce your electricity bills significantly.",
          icon: Zap,
        },
        {
          title: "Certified Technicians",
          description: "Qualified and experienced AC technicians providing expert installation, repairs, and maintenance services for all major brands.",
          icon: Award,
        },
        {
          title: "All Major Brands",
          description: "We work with all leading air conditioning brands including Daikin, Samsung, LG, Midea, Panasonic, and more for both supply and service.",
          icon: Building2,
        },
        {
          title: "Preventative Maintenance",
          description: "Scheduled servicing keeps your system running efficiently, extends its lifespan, and prevents costly breakdowns and repairs.",
          icon: Wrench,
        },
        {
          title: "Fast Response Times",
          description: "Same-day service for installations and emergency repairs. We understand the urgency of AC breakdowns, especially during extreme weather.",
          icon: Clock,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Free Consultation",
          description: "We assess your space, cooling needs, budget, and recommend the best AC solution for optimal comfort and efficiency.",
        },
        {
          step: 2,
          title: "Professional Installation",
          description: "Our certified technicians install your AC system with precision, ensuring proper placement, connection, and testing.",
        },
        {
          step: 3,
          title: "System Testing",
          description: "Comprehensive testing of cooling capacity, airflow, thermostat settings, and overall system performance.",
        },
        {
          step: 4,
          title: "Maintenance Plan",
          description: "We offer scheduled maintenance plans to keep your system running efficiently year-round with regular servicing.",
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
          icon: Wrench,
        },
        { 
          title: "Building Construction", 
          href: "/building-construction-renovations",
          icon: Building2,
        },
        { 
          title: "Solar & Energy Solutions", 
          href: "/solar-energy-solutions",
          icon: Shield,
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
            <h2 className="mb-8 text-3xl font-bold">Complete Air Conditioning Solutions for Gauteng</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a new air conditioning installation for your home, office AC repairs, or regular maintenance for your commercial HVAC system, <strong>Goshen Projects Solutions</strong> has the expertise and experience to deliver reliable, energy-efficient climate control solutions across <strong>Pretoria, Johannesburg, Midrand</strong>, and all of Gauteng.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Our Air Conditioning Services</h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Snowflake className="h-5 w-5" />
                    Residential AC Installation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Split systems, multi-split units, and ducted air conditioning for homes of all sizes. We handle everything from single-room solutions to whole-house climate control.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Commercial HVAC Systems
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Large-scale HVAC installations for offices, retail spaces, restaurants, and industrial facilities requiring powerful and efficient climate control.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Wrench className="h-5 w-5" />
                    AC Repairs & Emergency Service
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Fast response for AC breakdowns, refrigerant leaks, compressor issues, thermostat problems, and all air conditioning repairs.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border hover:border-secondary/50 transition-all">
                  <h4 className="font-bold text-lg mb-2 text-secondary flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Maintenance & Servicing
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Regular servicing including filter cleaning, gas top-ups, coil cleaning, and performance optimization to maximize efficiency and lifespan.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Why Choose Our AC Services?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> in HVAC services across Gauteng, our certified technicians have installed and serviced <strong>hundreds of air conditioning systems</strong>. We work with all major brands and use only quality components to ensure your comfort and satisfaction.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Energy-Efficient AC Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern inverter air conditioners can reduce your energy consumption by up to <strong>40% compared to older units</strong>. We specialize in recommending and installing energy-efficient models that provide superior cooling while minimizing your electricity bills. Our experts will assess your space and usage patterns to recommend the perfect system for your needs and budget.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Brands We Work With</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We install, service, and repair all major air conditioning brands including:
              </p>
              <ul className="grid md:grid-cols-3 gap-2 mb-6">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Daikin
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Samsung
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  LG
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Midea
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Panasonic
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Alliance
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Hisense
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  Mitsubishi
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  And more...
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 mt-8">Maintenance Plans Available</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Keep your air conditioning system running at peak efficiency with our scheduled maintenance plans. Regular servicing includes filter cleaning, refrigerant level checks, electrical connection inspection, and performance optimization. Our maintenance contracts ensure your AC is ready when you need it most.
              </p>

              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 border border-border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-secondary" />
                  Emergency AC Repairs Available
                </h3>
                <p className="text-muted-foreground mb-4">
                  Air conditioning breakdowns never happen at a convenient time. That's why we offer same-day emergency repair services across Gauteng. Call us at <strong className="text-secondary">+27 61 530 7314</strong> for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
