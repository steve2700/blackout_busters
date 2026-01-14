import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Goshen Projects | Request a Quote in Gauteng",
  description:
    "Contact Goshen Projects for construction, renovations, maintenance, paving, civil works, security, or solar solutions in Gauteng. Get a free consultation and quotation today.",
  openGraph: {
    title: "Contact Goshen Projects | Request a Quote in Gauteng",
    description:
      "Get in touch with Goshen Projects for all your construction, maintenance, and infrastructure needs in Pretoria, Johannesburg, and Gauteng.",
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["Gauteng, South Africa", "Serving Pretoria & Johannesburg"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 (0) 00 000 0000"],
    href: "tel:+27000000000",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@goshenprojects.co.za"],
    href: "mailto:info@goshenprojects.co.za",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 07:00 - 17:00", "Saturday: 08:00 - 14:00"],
  },
]

const serviceAreas = [
  "Pretoria",
  "Johannesburg",
  "Sandton",
  "Midrand",
  "Centurion",
  "Fourways",
  "Randburg",
  "Bedfordview",
  "Rosebank",
  "Morningside",
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
              Contact Goshen Projects
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/80 md:text-xl">
              For construction, renovations, maintenance, paving, civil works, security, or solar solutions in Gauteng,
              contact us today for a consultation or quotation. Our team is ready to provide professional advice
              tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-2 text-2xl font-bold">Request a Quote</h2>
              <p className="mb-8 text-muted-foreground">
                Fill out the form below and our team will get back to you within 24 hours with a detailed quotation and
                project support.
              </p>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-2 text-2xl font-bold">Get in Touch</h2>
              <p className="mb-8 text-muted-foreground">
                Have questions or need more information? Reach out to us through any of the channels below.
              </p>

              <div className="mb-8 space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.details.map((detail) =>
                        info.href ? (
                          <a key={detail} href={info.href} className="block text-muted-foreground hover:text-secondary">
                            {detail}
                          </a>
                        ) : (
                          <p key={detail} className="text-muted-foreground">
                            {detail}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mb-8">
                <h3 className="mb-4 font-semibold">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Service Areas */}
              <div className="rounded-xl bg-muted p-6">
                <h3 className="mb-4 font-semibold">Service Areas in Gauteng</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span key={area} className="inline-flex items-center gap-1 rounded-full bg-card px-3 py-1 text-sm">
                      <MapPin className="h-3 w-3 text-secondary" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
