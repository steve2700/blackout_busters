// File path: app/cctv-alarm-surveillance/page.tsx
// Clean URL: https://goshenprojects.co.za/cctv-alarm-surveillance

import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Camera, Shield, Smartphone, Eye, Lock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "CCTV, Alarm & Surveillance Systems in Gauteng | Goshen Projects Solutions - Pretoria, Johannesburg & Midrand",
  description:
    "Professional CCTV camera installation, alarm systems, and security surveillance solutions in Gauteng. 24/7 remote monitoring, HD & 4K cameras, motion detection, and smart security systems for residential, commercial & industrial properties in Pretoria, Johannesburg & Midrand. Licensed security installers with same-day quotes.",
  keywords: "CCTV installation Gauteng, alarm systems Pretoria, security cameras Johannesburg, surveillance systems Midrand, remote monitoring, HD cameras, 4K security cameras, motion detection, access control integration",
  openGraph: {
    title: "CCTV, Alarm & Surveillance Systems | Goshen Projects Solutions Gauteng",
    description:
      "State-of-the-art security surveillance systems for homes and businesses in Pretoria, Johannesburg & Gauteng. 24/7 monitoring, HD/4K cameras, smart detection. 500+ installations completed.",
    images: [
      {
        url: "/cctv-camera-installation-on-commercial-building-in.jpg",
        width: 1200,
        height: 630,
        alt: "Professional CCTV and surveillance system installation in Gauteng - Goshen Projects Solutions",
      },
    ],
  },
}

export default function CCTVAlarmSurveillancePage() {
  return (
    <ServicePageTemplate
      title="CCTV, Alarm & Surveillance Systems"
      description="We implement state-of-the-art surveillance systems tailored to residential, commercial, and industrial security needs. From advanced CCTV camera installations to integrated alarm systems with remote monitoring, Goshen Projects Solutions provides comprehensive security solutions across Gauteng. With over 10 years of experience and 500+ successful installations, we protect what matters most to you."
      icon={Camera}
      heroImage="/cctv-camera-installation-on-commercial-building-in.jpg"
      priceRange="Competitive Rates"
      responseTime="Same-day"
      features={[
        "HD & 4K CCTV camera installation",
        "Wireless & IP camera systems",
        "Comprehensive alarm systems",
        "24/7 remote monitoring solutions",
        "Motion detection & smart alerts",
        "Night vision & infrared cameras",
        "DVR/NVR recording systems",
        "Mobile app integration & control",
        "Video analytics & facial recognition",
        "Perimeter security systems",
        "Integration with access control",
        "Cloud storage & backup solutions",
      ]}
      benefits={[
        {
          title: "24/7 Real-Time Monitoring",
          description:
            "Keep constant watch over your property with live remote viewing from anywhere in the world. Access your cameras and receive instant alerts via mobile app, desktop, or tablet.",
          icon: Eye,
        },
        {
          title: "Crime Deterrent & Prevention",
          description:
            "Visible surveillance cameras and alarm systems significantly reduce the likelihood of criminal activity, theft, and unauthorized access to your property.",
          icon: Shield,
        },
        {
          title: "HD Evidence Collection",
          description:
            "Crystal-clear 4K footage provides indisputable evidence for security incidents, insurance claims, and legal proceedings with time-stamped recordings.",
          icon: Camera,
        },
        {
          title: "Smart Detection Technology",
          description:
            "Advanced AI-powered motion detection, facial recognition, and intelligent alerts reduce false alarms while ensuring you're notified of genuine security threats.",
          icon: Smartphone,
        },
        {
          title: "Custom Security Design",
          description:
            "Every property is unique. We design surveillance systems specifically for your layout, identifying blind spots and vulnerable areas to ensure complete coverage.",
          icon: CheckCircle,
        },
        {
          title: "Ongoing Support & Maintenance",
          description:
            "Comprehensive maintenance plans, technical support, system upgrades, and rapid response to keep your security infrastructure functioning optimally 24/7.",
          icon: Lock,
        },
      ]}
      process={[
        {
          step: 1,
          title: "Security Assessment",
          description: "We conduct a thorough on-site evaluation of your property, identifying security vulnerabilities, coverage requirements, and optimal camera placement locations.",
        },
        {
          step: 2,
          title: "System Design & Quote",
          description: "Our security experts design a customized surveillance solution with detailed equipment specifications, coverage maps, and transparent pricing with no hidden costs.",
        },
        {
          step: 3,
          title: "Professional Installation",
          description: "Certified technicians install your CCTV cameras, alarm systems, and monitoring equipment with minimal disruption, ensuring optimal positioning and functionality.",
        },
        {
          step: 4,
          title: "Training & Activation",
          description: "Complete system walkthrough, mobile app setup, user training, and 24/7 activation with ongoing technical support and maintenance options.",
        },
      ]}
      relatedServices={[
        { 
          title: "Fencing, Gates & Access Control", 
          href: "/fencing-gates-access-control",
          icon: Lock,
        },
        { 
          title: "Electrical Installation", 
          href: "/electrical-services",
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
          icon: Camera,
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
            <h2 className="mb-8 text-3xl font-bold">Why Choose Goshen Projects Solutions for Your Security Systems?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                With <strong>over 10 years of experience</strong> in security system installations across Gauteng, Goshen Projects Solutions has become the trusted choice for CCTV and surveillance solutions. Based in <strong>Midrand at 22 Richards Dr</strong>, we've successfully completed <strong>500+ security installations</strong> for homes, businesses, and industrial facilities throughout <strong>Pretoria, Johannesburg</strong>, and surrounding areas.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Comprehensive Security Solutions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you need a simple home security camera setup or a complex multi-site commercial surveillance system with integrated alarm and access control, our certified security specialists deliver tailored solutions that meet your exact requirements:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Residential Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Home CCTV systems, alarm installations, video doorbells, and smart home security integration with mobile monitoring.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Commercial Surveillance</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-camera systems for offices, retail stores, warehouses, and business premises with employee and customer monitoring.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Industrial Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Heavy-duty surveillance for factories, construction sites, and industrial complexes with perimeter protection and analytics.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h4 className="font-bold text-lg mb-2 text-secondary">Smart Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration with access control, gate automation, alarm systems, and smart building management platforms.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 mt-8">Advanced Camera Technology</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We install premium surveillance equipment from leading manufacturers, including HD and 4K cameras, infrared night vision, wide-angle lenses, PTZ (pan-tilt-zoom) cameras, and weatherproof outdoor units. Our systems offer crystal-clear footage day and night, with remote viewing capabilities from any device.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Intelligent Monitoring & Alerts</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern security systems go beyond simple recording. Our installations include AI-powered motion detection, facial recognition, license plate reading, intrusion detection, and customizable alert notifications sent directly to your smartphone, ensuring you're always informed of security events in real-time.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Rapid Response Across Gauteng</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Security concerns require immediate attention. Our strategically positioned teams provide <strong>fast response times</strong> throughout Gauteng, with average arrival times of <strong>20-40 minutes</strong> depending on your location. We offer emergency callouts, system troubleshooting, and ongoing maintenance to keep your security infrastructure operational 24/7.
              </p>

              <h3 className="text-2xl font-bold mb-4 mt-8">Compliance & Certification</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                All our installations comply with South African security standards and electrical regulations. Our technicians are certified professionals who follow industry best practices for cable management, camera positioning, and system integration, ensuring your surveillance system is reliable, legal, and insurance-compliant.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServicePageTemplate>
  )
}
