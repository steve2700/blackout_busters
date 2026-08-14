import { Button } from "@/components/ui/button"
import { X, Check, Phone, ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import Link from "next/link"

const PHONE_TEL = "tel:+27836171112"
const PHONE_DISPLAY = "+27 83 617 1112"
const WHATSAPP_HREF =
  "https://wa.me/27836171112?text=" +
  encodeURIComponent("Hi Blackout Busters, I'd like to make an inquiry.")

const comparisons = [
  {
    before: "Guessing which contractor to trust for electrical vs. solar",
    after: "One team for electrical, solar, and backup power",
  },
  {
    before: "No paperwork after the job is done",
    after: "Compliance Certificate (COC) provided on every job",
  },
  {
    before: "Days of waiting for a callback on a quote",
    after: "Same-day response on quote requests",
  },
  {
    before: "Load shedding catches the household off guard",
    after: "Backup power solutions sized for how you actually use power",
  },
  {
    before: "Vague pricing that changes once the van arrives",
    after: "Straightforward, no-obligation quotes upfront",
  },
  {
    before: "Contractors who only take on small residential jobs",
    after: "Residential, commercial, and industrial capability",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background" aria-labelledby="why-choose-us-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Why Blackout Busters
          </span>
          <h2
            id="why-choose-us-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
          >
            There's a Better Way to Deal With Load Shedding
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
            Most households and businesses in Gauteng have been let down by an outage at the worst
            possible time. Here's what changes once Blackout Busters is on the job.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border">
          {/* Column headers */}
          <div className="grid grid-cols-2 border-b border-border">
            <div className="px-5 py-4 sm:px-8">
              <p className="text-sm font-semibold text-muted-foreground">The Usual Way</p>
            </div>
            <div className="bg-primary px-5 py-4 sm:px-8">
              <p className="text-sm font-semibold text-primary-foreground">The Blackout Busters Way</p>
            </div>
          </div>

          {comparisons.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 ${i !== comparisons.length - 1 ? "border-b border-border" : ""}`}
            >
              <div className="flex items-start gap-3 px-5 py-5 sm:px-8">
                <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">{row.before}</p>
              </div>
              <div className="flex items-start gap-3 bg-primary/[0.03] px-5 py-5 sm:px-8">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed">{row.after}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-14 px-8 text-base"
          >
            <a href={PHONE_TEL}>
              <Phone className="mr-2 h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 h-14 px-8 text-base"
          >
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="mr-2 h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 px-8 text-base"
          >
            <Link href="/services">
              See Everything We Do
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
