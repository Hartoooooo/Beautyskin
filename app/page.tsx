import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TreatmentsSection from '@/components/TreatmentsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TreatmentsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
