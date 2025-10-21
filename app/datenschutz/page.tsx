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
      <div>
        <section className="pt-20 pb-20 bg-white">
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
                      Inhaberin: Ysabel Busch<br />
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Was sind Cookies?</h3>
                  <p className="text-gray-700 mb-4">
                    Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die Ihr Browser speichert. Cookies richten auf Ihrem Endgerät keinen Schaden an und enthalten keine Viren.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Welche Cookies verwenden wir?</h3>
                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <p className="text-gray-700 mb-3"><strong>Technisch notwendige Cookies:</strong></p>
                    <p className="text-gray-700 mb-4">
                      Diese Cookies sind erforderlich, damit die Website funktioniert. Sie können in Ihrem Browser nicht deaktiviert werden. Diese Cookies speichern keine personenbezogenen Daten.
                    </p>
                    
                    <p className="text-gray-700 mb-3"><strong>Cookie-Einstellungen:</strong></p>
                    <p className="text-gray-700 mb-4">
                      Wir speichern Ihre Cookie-Präferenzen in einem Cookie namens "cookieConsent", um Ihre Auswahl zu merken. Dieses Cookie ist technisch notwendig und wird für 365 Tage gespeichert.
                    </p>

                    <p className="text-gray-700 mb-3"><strong>Analyse-Cookies (optional):</strong></p>
                    <p className="text-gray-700">
                      Wir verwenden Google Analytics nur mit Ihrer ausdrücklichen Einwilligung. Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. Die Daten werden anonymisiert erhoben.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Ihre Cookie-Einstellungen verwalten</h3>
                  <p className="text-gray-700 mb-4">
                    Sie können Ihre Cookie-Einstellungen jederzeit ändern. Weitere Informationen finden Sie auf unserer <a href="/cookies" className="text-primary-600 hover:text-primary-700 underline">Cookie-Richtlinie Seite</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Analyse-Tools und Werbung</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Analytics (optional)</h3>
                  <p className="text-gray-700 mb-4">
                    Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics nur mit Ihrer ausdrücklichen Einwilligung. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Google Analytics verwendet Cookies. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>IP-Anonymisierung:</strong> Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Rechtsgrundlage:</strong> Die Nutzung von Google Analytics erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen.
                  </p>
                  <p className="text-gray-700 mb-4">
                    <strong>Speicherdauer:</strong> Bei Google gespeicherte Daten auf Nutzer- und Ereignisebene, die mit Cookies verknüpft sind, werden nach 14 Monaten anonymisiert bzw. gelöscht.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Plugins und Tools</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Fonts (lokales Hosting)</h3>
                  <p className="text-gray-700 mb-4">
                    Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ihre Rechte nach DSGVO</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Auskunftsrecht</h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Recht auf Berichtigung, Löschung und Einschränkung</h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben das Recht, die Berichtigung oder Löschung Ihrer personenbezogenen Daten zu verlangen. Sie können auch die Einschränkung der Verarbeitung verlangen.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Widerspruchsrecht</h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben das Recht, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Beschwerderecht bei der Aufsichtsbehörde</h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-gray-700 mb-4">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                  <p className="text-gray-700 mb-4">
                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
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
