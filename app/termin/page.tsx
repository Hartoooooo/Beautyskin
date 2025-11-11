import type { Metadata } from 'next'
import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TerminForm from '@/components/TerminForm'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Termin anfragen',
  description: 'Buchen Sie Ihren Termin bei BeautySkin in Berlin-Friedrichshain. Wählen Sie aus unserem umfangreichen Behandlungsangebot: Gesichtsbehandlungen, Hydrafacial, Microneedling, dauerhafte Haarentfernung und mehr. Jetzt unverbindlich Termin anfragen!',
  keywords: [
    'Termin Kosmetikstudio Berlin',
    'Termin Beauty Berlin',
    'Kosmetik Termin Friedrichshain',
    'Behandlung buchen Berlin',
    'Termin anfragen Berlin',
    'BeautySkin Termin',
    'Kosmetikstudio Terminvereinbarung',
    'Online Termin buchen Berlin',
    'Gesichtsbehandlung Termin Berlin',
    'Laser Haarentfernung Termin Berlin',
  ],
  openGraph: {
    title: 'Termin anfragen | BeautySkin Berlin',
    description: 'Buchen Sie Ihren Termin bei BeautySkin in Berlin. Wählen Sie aus unserem umfangreichen Behandlungsangebot.',
    url: `${siteUrl}/termin`,
    images: [`${siteUrl}/raquel.webp`],
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: `${siteUrl}/termin`,
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

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Laden...</p>
      </div>
    </div>
  )
}

export default function TerminPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <TerminForm />
      </Suspense>
      <Footer />
    </main>
  )
}
