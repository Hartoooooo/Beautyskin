import type { Metadata } from 'next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TreatmentsSection from '@/components/TreatmentsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'BeautySkin - Professionelles Kosmetikstudio in Berlin',
  description: 'Professionelle Kosmetikbehandlungen in Berlin-Friedrichshain. Hydrafacial, Microneedling, Gesichtsbehandlungen, dauerhafte Haarentfernung und mehr. Jetzt Termin anfragen unter +49 170 4482725!',
  keywords: [
    'Kosmetikstudio Berlin',
    'Kosmetikstudio Friedrichshain',
    'Gesichtsbehandlung Berlin',
    'Hydrafacial Berlin',
    'Microneedling Berlin',
    'Laser Haarentfernung Berlin',
    'Beauty Berlin',
    'Skincare Berlin',
    'Anti-Aging Berlin',
    'Professionelle Kosmetik Berlin',
    'BeautySkin',
    'Raquel Hardel',
  ],
  openGraph: {
    title: 'BeautySkin - Professionelles Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin-Friedrichshain. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr.',
    url: siteUrl,
    images: [`${siteUrl}/raquel.webp`],
    type: 'website',
    locale: 'de_DE',
    siteName: 'BeautySkin Berlin',
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
