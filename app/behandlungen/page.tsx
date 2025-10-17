import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

export const metadata = {
  title: 'Behandlungen - BeautySkin',
  description: 'Alle unsere professionellen Kosmetikbehandlungen im Überblick. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr.',
}

export default function BehandlungenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TreatmentsDetail />
      <Footer />
    </main>
  )
}
