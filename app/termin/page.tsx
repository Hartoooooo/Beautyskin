import { Suspense } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TerminForm from '@/components/TerminForm'

export const metadata = {
  title: 'Termin anfragen - BeautySkin',
  description: 'Buchen Sie Ihren Termin bei BeautySkin. Wählen Sie aus unserem umfangreichen Behandlungsangebot.',
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
