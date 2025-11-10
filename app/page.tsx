import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TreatmentsSection from '@/components/TreatmentsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
  description: 'Professionelle Kosmetikbehandlungen in Berlin Friedrichshain. Gesichtsbehandlungen, Hydrafacial, Microneedling, Massagen und dauerhafte Haarentfernung. Jetzt Termin anfragen!',
  openGraph: {
    title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin Friedrichshain. Gesichtsbehandlungen, Hydrafacial, Microneedling, Massagen und dauerhafte Haarentfernung.',
    url: 'https://beautyskin-studio.de',
    siteName: 'BeautySkin',
    images: [
      {
        url: '/aussen.webp',
        width: 1200,
        height: 630,
        alt: 'BeautySkin Kosmetikstudio Berlin Friedrichshain',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin Friedrichshain',
    images: ['/aussen.webp'],
  },
  alternates: {
    canonical: 'https://beautyskin-studio.de',
  },
}

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
