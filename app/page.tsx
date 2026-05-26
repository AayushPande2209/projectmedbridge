export const dynamic = 'force-static'

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import FeaturedSection from "@/components/featured-section"
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
      <ProblemSection />
      <HowItWorks />
      {/* <ImpactMetrics /> */}
      <OurTeamSection />
      <PartnershipForm />
      <Footer />
    </main>
  )
}
