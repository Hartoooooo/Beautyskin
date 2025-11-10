import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TerminForm from '@/components/TerminForm'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termin anfragen',
  description: 'Buchen Sie Ihren Termin bei BeautySkin in Berlin. Wählen Sie aus unserem umfangreichen Behandlungsangebot: Gesichtsbehandlungen, Massagen, Haarentfernung und mehr.',
  openGraph: {
    title: 'Termin anfragen - BeautySkin Berlin',
    description: 'Buchen Sie Ihren Termin bei BeautySkin. Wählen Sie aus unserem umfangreichen Behandlungsangebot.',
    url: 'https://beautyskin-studio.de/termin',
    images: [
      {
        url: '/aussen.webp',
        width: 1200,
        height: 630,
        alt: 'BeautySkin Kosmetikstudio Termin buchen',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Termin anfragen - BeautySkin Berlin',
    description: 'Buchen Sie Ihren Termin bei BeautySkin',
    images: ['/aussen.webp'],
  },
  alternates: {
    canonical: 'https://beautyskin-studio.de/termin',
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
