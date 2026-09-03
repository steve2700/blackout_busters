import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services, serviceCategories, SITE } from "@/lib/services"
import { ArrowRight, FileCheck, ClipboardCheck, BellRing, Phone } from "lucide-react"

const PHONE_TEL = SITE.phoneTel
const PHONE_DISPLAY = SITE.phoneDisplay

// Short intro line per category, keyed to the category names in lib/services.ts
const categoryBlurbs: Record<string, string> = {
  "Electrical Core": "The everyday work that keeps a property safe and running.",
  "Solar & Backup Power": "For when the grid can't be trusted to stay on.",
  "Compliance & Upgrades": "The paperwork and panel work that keeps you covered.",
  "Home & Safety Extras": "The services that usually get bundled in alongside electrical work.",
}

const inclusions = [
  {
    icon: FileCheck,
    title: "Compliance Certificate (COC)",
    description: "Documentation you can hand to an auditor, insurer, or buyer without a follow-up call.",
  },
  {
    icon: ClipboardCheck,
    title: "Full Site Assessment",
    description: "We look at the whole installation, not just the fault on the job card.",
  },
  {
    icon: BellRing,
    title: "Follow-Up Service Reminder",
    description: "We keep track of when your next maintenance or inspection is due.",
  },
]

export function ServicesOverview() {
  // Group the single source of truth by category, preserving category order
  const groups = serviceCategories.map((category) => ({
    label: category,
    blurb: categoryBlurbs[category] ?? "",
    services: services.filter((service) => service.category === category),
  }))

  // Running position for the ItemList schema across all groups
  let position = 0

  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            itemProp="name"
          >
            Electrical, Solar &amp; Backup Power in Gauteng
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
            <strong>Blackout Busters</strong> covers everything from a single faulty plug point to a full backup power
            system. Installations, repairs, and the compliance paperwork to prove it, across{" "}
            <strong>Johannesburg, Pretoria, and Gauteng</strong>.
          </p>
        </div>

        {/* Grouped services — 4 categories instead of one long flat grid */}
        <div className="space-y-14">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3">
                <h3 className="text-xl font-bold">{group.label}</h3>
                <p className="text-sm text-muted-foreground">{group.blurb}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {group.services.map((service) => {
                  position += 1
                  const currentPosition = position
                  return (
                    <Card
                      key={service.slug}
                      className="group relative flex flex-col overflow-hidden border-border p-0 transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1"
                      itemScope
                      itemType="https://schema.org/Service"
                      itemProp="itemListElement"
                    >
                      <meta itemProp="position" content={String(currentPosition)} />
                      {/* Service image — lazy-loaded and optimized by next/image */}
                      <Link
                        href={`/${service.slug}`}
                        className="relative block aspect-[16/10] overflow-hidden bg-muted"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.imageAlt}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          itemProp="image"
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                        <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-primary shadow-sm backdrop-blur-sm">
                          <service.icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                      </Link>
                      <CardContent className="flex flex-1 flex-col p-5">
                        <h4
                          className="mb-1.5 text-sm font-bold transition-colors group-hover:text-primary"
                          itemProp="name"
                        >
                          {service.title}
                        </h4>
                        <p className="mb-3 flex-1 text-xs leading-relaxed text-muted-foreground" itemProp="description">
                          {service.tagline}
                        </p>
                        <Link
                          href={`/${service.slug}`}
                          className="inline-flex items-center text-xs font-semibold text-primary transition-colors hover:text-accent"
                          itemProp="url"
                        >
                          Learn More
                          <ArrowRight
                            className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </Link>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {inclusions.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-bold">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border-2 border-accent/30 bg-card p-8 lg:p-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-primary via-accent to-primary"
            aria-hidden="true"
          />

          <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4">Not Sure Which Service You Need?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us what's going on and we'll point you at the right fix, from a quick repair to a full backup power
            setup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <a href={PHONE_TEL}>
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                Call {PHONE_DISPLAY}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="/services">
                View All 14 Services
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
