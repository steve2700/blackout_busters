import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ArrowRight, Clock, MapPin, ShieldCheck, FileCheck } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const PHONE_TEL = "tel:+27836171112"
const PHONE_DISPLAY = "+27 83 617 1112"
const WHATSAPP_HREF =
  "https://wa.me/27836171112?text=" +
  encodeURIComponent("Hi Blackout Busters, I'd like to make an inquiry.")
const EMAIL = "info@blackoutbusterssa.co.za"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Circuit-grid pattern instead of a stock photo */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(255,184,0,0.6) 39px, transparent 40px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(255,184,0,0.6) 39px, transparent 40px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90" />

      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm border border-white/10">
            <ShieldCheck className="h-4 w-4 text-accent" />
            Free, No-Obligation Quote
          </div>

          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Don't Wait For The Next Outage.
          </h2>
          <p className="mb-10 text-pretty text-lg text-primary-foreground/80 md:text-xl">
            Contact Blackout Busters today. Our team handles electrical installation and repairs, solar
            and backup power, generators, DB board upgrades, and compliance certificates across
            Johannesburg, Pretoria, and the rest of Gauteng.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
              className="border-white/30 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm h-14 px-8 text-base"
            >
              <a href={`mailto:${EMAIL}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email Us Directly
              </a>
            </Button>
          </div>

          {/* Features Grid */}
          <div className="mb-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mx-auto">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-white">Same Day Response</p>
              <p className="mt-1 text-xs text-white/70">Quick turnaround on all quotes</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mx-auto">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-white">On-Site Assessments</p>
              <p className="mt-1 text-xs text-white/70">Serving all of Gauteng</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 mx-auto">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <p className="text-sm font-medium text-white">No Obligation Quote</p>
              <p className="mt-1 text-xs text-white/70">Honest, upfront pricing</p>
            </div>
          </div>

          {/* Qualitative highlights — no unverified certification or year claims */}
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-primary-foreground/20 pt-12">
            <div className="flex flex-col items-center gap-1.5 text-center">
              <Clock className="h-6 w-6 text-accent" />
              <p className="text-sm font-semibold text-primary-foreground">Prompt Response</p>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="flex flex-col items-center gap-1.5 text-center">
              <MapPin className="h-6 w-6 text-accent" />
              <p className="text-sm font-semibold text-primary-foreground">Gauteng-Wide Coverage</p>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="flex flex-col items-center gap-1.5 text-center">
              <FileCheck className="h-6 w-6 text-accent" />
              <p className="text-sm font-semibold text-primary-foreground">COC on Every Job</p>
            </div>
            <div className="h-12 w-px bg-primary-foreground/20" />
            <div className="flex flex-col items-center gap-1.5 text-center">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <p className="text-sm font-semibold text-primary-foreground">24/7 Emergency Support</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Learn more about our company and values
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
