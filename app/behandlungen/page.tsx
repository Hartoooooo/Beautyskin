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
      <div className="pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unsere <span className="gradient-text">Behandlungen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Entdecken Sie unser umfassendes Angebot an professionellen Kosmetikbehandlungen.
              Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <a href="/gesichtsbehandlung" className="block group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  Gesichtsbehandlung
                </h3>
                <p className="text-gray-600 mb-6">
                  Professionelle Gesichtspflege für gesunde und strahlende Haut.
                </p>
                <p className="text-sm text-gray-500">6 verschiedene Behandlungen verfügbar</p>
              </div>
            </a>
            
            <a href="/apparative-behandlungen" className="block group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  Apparative Behandlungen
                </h3>
                <p className="text-gray-600 mb-6">
                  Moderne Technologie für intensive Hautverbesserung.
                </p>
                <p className="text-sm text-gray-500">5 verschiedene Behandlungen verfügbar</p>
              </div>
            </a>
            
            <a href="/massagen" className="block group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  Massagen
                </h3>
                <p className="text-gray-600 mb-6">
                  Entspannende Massagen für Körper und Seele.
                </p>
                <p className="text-sm text-gray-500">4 verschiedene Behandlungen verfügbar</p>
              </div>
            </a>
            
            <a href="/dauerhafte-haarentfernung" className="block group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  Dauerhafte Haarentfernung
                </h3>
                <p className="text-gray-600 mb-6">
                  Ice Diodenlaser für dauerhafte und schmerzarme Ergebnisse.
                </p>
                <p className="text-sm text-gray-500">Für Frauen und Männer</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
