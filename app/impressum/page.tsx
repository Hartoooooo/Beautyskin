import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen von BeautySkin Kosmetikstudio Berlin. Inhaberin: Ysabel Busch, R&Y Slivio-Meier-Straße 6, 10247 Berlin.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${siteUrl}/impressum`,
  },
  openGraph: {
    title: 'Impressum | BeautySkin Berlin',
    description: 'Impressum und rechtliche Informationen von BeautySkin Kosmetikstudio Berlin.',
    url: `${siteUrl}/impressum`,
    type: 'website',
    locale: 'de_DE',
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <section className="pt-20 pb-20 bg-[#e9dbd2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Anbieter</h2>
                <div className="space-y-4 text-gray-700">
                  <p><strong>BeautySkin</strong><br />
                  Inhaberin: Ysabel Busch</p>
                  <p>R&Y Slivio-Meier-Straße 6<br />
                  10247 Berlin<br />
                  Deutschland</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Telefon:</strong> +49 170 4482725</p>
                    <p><strong>E-Mail:</strong> beautyskin.studio@icloud.com</p>
                    <p><strong>Website:</strong> www.beautyskin-berlin.de</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
                  <p className="text-gray-700">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    DE123456789
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Verantwortlich für den Inhalt</h2>
                  <p className="text-gray-700">
                    Ysabel Busch<br />
                    BeautySkin<br />
                    R&Y Slivio-Meier-Straße 6<br />
                    10247 Berlin
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Inhalte</h3>
                  <p className="text-gray-700 mb-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Haftung für Links</h3>
                  <p className="text-gray-700 mb-4">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Urheberrecht</h3>
                  <p className="text-gray-700 mb-4">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Online-Streitbeilegung</h2>
                  <p className="text-gray-700">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                    <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 ml-1">
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
