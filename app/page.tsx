import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import PartnerLogos from "@/components/partner-logos"
import ShipmentStory from "@/components/shipment-story"
import NewsSection from "@/components/news-section"
import HowItWorks from "@/components/how-it-works"
import OurTeamSection from "@/components/our-team-section"
import PartnershipForm from "@/components/partnership-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PartnerLogos />
      <ShipmentStory />
      <NewsSection />
      <HowItWorks />
      <OurTeamSection />
      <PartnershipForm />
      <Footer />
    </main>
  )
}
