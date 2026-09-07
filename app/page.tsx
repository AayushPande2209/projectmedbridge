import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import ShipmentStory from "@/components/shipment-story"
import NewsSection from "@/components/news-section"
import HowSuppliesMove from "@/components/how-supplies-move"
import OurTeamSection from "@/components/our-team-section"
import PartnershipForm from "@/components/partnership-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ShipmentStory />
      <NewsSection />
      <HowSuppliesMove />
      <OurTeamSection />
      <PartnershipForm />
      <Footer />
    </main>
  )
}
