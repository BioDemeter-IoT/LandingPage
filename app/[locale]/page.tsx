import { setRequestLocale } from "next-intl/server"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FeaturesSection } from "@/components/features-section"
import { MockupsSection } from "@/components/mockups-section"
import { IoTSection } from "@/components/iot-section"
import { AISection } from "@/components/ai-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { TeamSection } from "@/components/team-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <BenefitsSection />
        <HowItWorksSection />
        <FeaturesSection />
        <MockupsSection />
        <IoTSection />
        <AISection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <TeamSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
