import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TerminForm from '@/components/TerminForm'

export const metadata = {
  title: 'Termin buchen Berlin',
  description: 'Buchen Sie jetzt Ihren Termin bei BeautySkin in Berlin Friedrichshain. Kosmetikbehandlungen, Massagen, Haarentfernung und mehr. Telefonisch: +49 170 4482725 oder per Kontaktformular.',
  alternates: {
    canonical: 'https://www.beautyskin-berlin.de/termin',
  },
  openGraph: {
    title: 'Termin buchen - BeautySkin Berlin',
    description: 'Vereinbaren Sie jetzt Ihren Termin im BeautySkin Kosmetikstudio in Berlin Friedrichshain.',
    url: 'https://www.beautyskin-berlin.de/termin',
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
