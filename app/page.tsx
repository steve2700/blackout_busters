import { HeroSection } from "@/components/home/hero-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ServiceAreasPreview } from "@/components/home/service-areas-preview"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ServiceAreasPreview />
      <CTASection />
    </>
  )
}
