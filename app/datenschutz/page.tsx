import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Datenschutz - BeautySkin',
  description: 'Datenschutzerklärung von BeautySkin Kosmetikstudio Berlin.',
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Datenschutz auf einen Blick</h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Datenerfassung auf dieser Website</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p className="text-gray-700 mb-4">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Wie erfassen wir Ihre Daten?</h3>
                  <p className="text-gray-700 mb-4">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Datenschutz</h3>
                  <p className="text-gray-700 mb-4">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Hinweis zur verantwortlichen Stelle</h3>
                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <p className="text-gray-700">
                      <strong>BeautySkin</strong><br />
                      R&Y Slivio-Meier-Straße 6<br />
                      10247 Berlin<br />
                      Deutschland
                    </p>
                    <p className="text-gray-700 mt-2">
                      Telefon: +49 170 4482725<br />
                      E-Mail: beautyskin.studio@icloud.com
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Server-Log-Dateien</h3>
                  <p className="text-gray-700 mb-4">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontaktformular</h3>
                  <p className="text-gray-700 mb-4">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Plugins und Tools</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Fonts (lokales Hosting)</h3>
                  <p className="text-gray-700 mb-4">
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. eRecht24 Safe Sharing</h2>
                  <p className="text-gray-700 mb-4">
                    Diese Datenschutzerklärung wurde mit dem Datenschutzerklärungs-Generator der eRecht24 erstellt.
                  </p>
                </div>

                <div className="bg-primary-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihre Rechte</h2>
                  <p className="text-gray-700 mb-4">
                    Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
                  </p>
                  <p className="text-gray-700">
                    Bei Fragen zum Datenschutz können Sie uns jederzeit unter den oben genannten Kontaktdaten erreichen.
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
