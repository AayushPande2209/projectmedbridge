import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedSection from "@/components/featured-section"
import PartnerLogos from "@/components/partner-logos"
import ProblemSection from "@/components/problem-section"
import HowItWorks from "@/components/how-it-works"
import ImpactMetrics from "@/components/impact-metrics"
import OurTeamSection from "@/components/our-team-section"
import PartnershipForm from "@/components/partnership-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedSection />
      <PartnerLogos />
      <ProblemSection />
      <HowItWorks />
      {/* <ImpactMetrics /> */}
      <OurTeamSection />
      <PartnershipForm />
      <Footer />
    </main>
  )
}
