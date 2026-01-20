import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, CheckCircle, Award, Zap, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Goshen Projects Solutions | Free Quote in Gauteng - Pretoria, Johannesburg & Midrand",
  description:
    "Contact Goshen Projects Solutions for construction, renovations, maintenance, paving, civil works, security systems, or solar solutions in Gauteng. Free consultation and same-day quotes. Call +27 61 530 7314 or visit us at 22 Richards Dr, Midrand.",
  keywords: "contact Goshen Projects, construction quote Gauteng, free consultation Pretoria, building contractor Johannesburg, Midrand construction company, emergency services",
  openGraph: {
    title: "Contact Goshen Projects Solutions | Free Quote in Gauteng",
    description:
      "Get in touch for all construction, maintenance, and infrastructure needs in Pretoria, Johannesburg, and Gauteng. Free quotes, 24/7 emergency support, same-day response.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Goshen Projects Solutions",
      },
    ],
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    details: ["22 Richards Dr, Halfway House", "Midrand 1632, South Africa"],
    href: "https://www.google.com/maps?q=22+Richards+Dr,+Halfway+House,+Midrand+1632",
    highlight: true,
  },
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: ["+27 61 530 7314"],
    href: "tel:+27615307314",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@goshenprojects.co.za"],
    href: "mailto:info@goshenprojects.co.za",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 5:00 PM", "24/7 Emergency Support"],
    highlight: false,
  },
]

const serviceAreas = [
  { name: "Pretoria", featured: true },
  { name: "Johannesburg", featured: true },
  { name: "Midrand", featured: true },
  { name: "Sandton", featured: false },
  { name: "Centurion", featured: false },
  { name: "Fourways", featured: false },
  { name: "Randburg", featured: false },
  { name: "Bedfordview", featured: false },
  { name: "Rosebank", featured: false },
  { name: "Roodepoort", featured: false },
]

const benefits = [
  {
    icon: CheckCircle,
    text: "Same-day response & quotes",
  },
  {
    icon: Shield,
    text: "Licensed & fully insured",
  },
  {
    icon: Award,
    text: "500+ completed projects",
  },
  {
    icon: Zap,
    text: "24/7 emergency support",
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 py-16 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
              <Phone className="h-4 w-4 text-accent animate-pulse" aria-hidden="true" />
              <span>Available 24/7 for Emergencies</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Get Your <span className="text-accent">Free Quote</span> Today
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/90 md:text-xl leading-relaxed">
              For construction, renovations, maintenance, paving, civil works, security systems, or solar solutions in <strong className="text-white">Gauteng</strong>,
              contact <strong className="text-white">Goshen Projects Solutions</strong> today. Our expert team provides free consultations, same-day quotes, and professional advice
              tailored to your project needs.
            </p>

            {/* Quick Benefits */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.text} className="flex items-center gap-2 text-sm text-white/90">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                    <benefit.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-16 lg:py-24" itemScope itemType="https://schema.org/ContactPage">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Request Quote
              </span>
              <h2 className="mb-2 text-3xl font-bold">Get Your Free Quote in 24 Hours</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Fill out the form below with your project details. Our team will review your requirements and get back to you within 24 hours with a detailed, no-obligation quotation and expert recommendations.
              </p>
              
              <ContactForm />

              {/* Trust Indicators Below Form */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">No Hidden Fees</p>
                    <p className="text-xs text-muted-foreground">Transparent pricing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-muted">
                  <Shield className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold">Fully Licensed</p>
                    <p className="text-xs text-muted-foreground">NHBRC & CIDB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
                Contact Details
              </span>
              <h2 className="mb-2 text-3xl font-bold">Get in Touch With Us</h2>
              <p className="mb-8 text-muted-foreground leading-relaxed">
                Have questions or need urgent assistance? Reach out to us through any of the channels below. We're here to help with immediate support.
              </p>

              <div className="mb-8 space-y-4" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <meta itemProp="contactType" content="Customer Service" />
                <meta itemProp="areaServed" content="Gauteng, South Africa" />
                <meta itemProp="availableLanguage" content="English" />
                
                {contactInfo.map((info) => (
                  <div 
                    key={info.title} 
                    className={`group flex items-start gap-4 p-4 rounded-xl transition-all ${
                      info.highlight 
                        ? 'bg-secondary/5 border-2 border-secondary/20 hover:border-secondary/40 hover:shadow-lg' 
                        : 'bg-muted hover:bg-muted/80'
                    }`}
                  >
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${
                      info.highlight ? 'bg-secondary text-secondary-foreground' : 'bg-secondary/10 text-secondary'
                    } group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{info.title}</h3>
                      {info.details.map((detail, index) =>
                        info.href ? (
                          <a 
                            key={detail} 
                            href={info.href} 
                            className={`block transition-colors ${
                              info.highlight 
                                ? 'text-secondary font-semibold hover:text-secondary/80' 
                                : 'text-muted-foreground hover:text-secondary'
                            }`}
                            target={info.icon === MapPin ? "_blank" : undefined}
                            rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                            itemProp={info.icon === Phone ? "telephone" : info.icon === Mail ? "email" : undefined}
                          >
                            {detail}
                            {index === 1 && info.title === "Business Hours" && (
                              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                                <Zap className="h-3 w-3" aria-hidden="true" /> URGENT
                              </span>
                            )}
                          </a>
                        ) : (
                          <p key={detail} className="text-muted-foreground">
                            {detail}
                            {index === 1 && info.title === "Business Hours" && (
                              <span className="ml-2 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs font-semibold text-accent">
                                <Zap className="h-3 w-3" aria-hidden="true" /> EMERGENCY
                              </span>
                            )}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links - Updated */}
              <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-muted to-muted/50">
                <h3 className="mb-4 font-bold flex items-center gap-2">
                  <span>Connect With Us</span>
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/goshenprojectssolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-[#1877F2] hover:text-white hover:scale-110 hover:shadow-lg"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/goshenprojectssolutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:scale-110 hover:shadow-lg"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.x.com/goshen_projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-all hover:bg-black hover:text-white hover:scale-110 hover:shadow-lg"
                    aria-label="X (Twitter)"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Follow us for project updates, tips, and special offers
                </p>
              </div>

              {/* Service Areas - Enhanced */}
              <div className="rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 p-6 border border-border">
                <h3 className="mb-4 font-bold flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-secondary" aria-hidden="true" />
                  We Serve All of Gauteng
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {serviceAreas.map((area) => (
                    <span 
                      key={area.name} 
                      className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                        area.featured
                          ? 'bg-secondary text-secondary-foreground shadow-md hover:shadow-lg hover:scale-105'
                          : 'bg-card hover:bg-secondary/10 hover:scale-105'
                      }`}
                    >
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {area.name}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Don't see your area? <a href="tel:+27615307314" className="text-secondary font-semibold hover:underline">Call us</a> - we cover the entire province!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - New */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Visit Our Office in Midrand</h2>
            <p className="text-muted-foreground">
              Located at 22 Richards Dr, Halfway House - strategically positioned to serve all of Gauteng
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0!2d28.1242!3d-25.9967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDU5JzQ4LjEiUyAyOMKwMDcnMjcuMSJF!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Goshen Projects Solutions Office Location - 22 Richards Dr, Midrand"
            />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <MapPin className="h-8 w-8 text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold">Easy to Find</p>
                <p className="text-sm text-muted-foreground">Central Midrand location</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Clock className="h-8 w-8 text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold">Walk-ins Welcome</p>
                <p className="text-sm text-muted-foreground">Mon-Fri, 8 AM - 5 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
              <Phone className="h-8 w-8 text-secondary flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-semibold">Call Ahead</p>
                <p className="text-sm text-muted-foreground">+27 61 530 7314</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
