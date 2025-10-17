import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TreatmentsSection from '@/components/TreatmentsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TreatmentsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
