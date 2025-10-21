'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <section className="pt-20 pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie-Richtlinie</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Was sind Cookies?</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Cookies sind kleine Textdateien, die auf Ihrem Computer oder Mobilgerät gespeichert werden, 
                    wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen 
                    über einen bestimmten Zeitraum zu speichern, sodass Sie diese nicht bei jedem Besuch der Website 
                    oder beim Wechseln zwischen verschiedenen Seiten erneut eingeben müssen.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Wie verwenden wir Cookies?</h2>
                  <p className="text-gray-700 mb-4">
                    Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern, Analysen durchzuführen und 
                    relevante Inhalte anzuzeigen. Einige Cookies sind erforderlich, damit die Website ordnungsgemäß 
                    funktioniert, während andere nur mit Ihrer Zustimmung gesetzt werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Arten von Cookies auf unserer Website</h2>
                  
                  <div className="space-y-6">
                    {/* Notwendige Cookies */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        1. Technisch notwendige Cookies (immer aktiv)
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht 
                        deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte 
                        Aktionen gesetzt, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 text-gray-900 font-semibold">Cookie-Name</th>
                              <th className="text-left py-2 text-gray-900 font-semibold">Zweck</th>
                              <th className="text-left py-2 text-gray-900 font-semibold">Dauer</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            <tr className="border-b border-gray-100">
                              <td className="py-3">cookieConsent</td>
                              <td className="py-3">Speichert Ihre Cookie-Präferenzen</td>
                              <td className="py-3">365 Tage</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Analyse Cookies */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        2. Analyse-Cookies (optional - nur mit Ihrer Zustimmung)
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die 
                        Leistung unserer Website messen und verbessern können. Sie helfen uns zu verstehen, 
                        welche Seiten am beliebtesten sind und wie Besucher sich auf der Website bewegen.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 mt-4">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 text-gray-900 font-semibold">Cookie-Name</th>
                              <th className="text-left py-2 text-gray-900 font-semibold">Anbieter</th>
                              <th className="text-left py-2 text-gray-900 font-semibold">Zweck</th>
                              <th className="text-left py-2 text-gray-900 font-semibold">Dauer</th>
                            </tr>
                          </thead>
                          <tbody className="text-gray-700">
                            <tr className="border-b border-gray-100">
                              <td className="py-3">_ga</td>
                              <td className="py-3">Google Analytics</td>
                              <td className="py-3">Unterscheidet Benutzer</td>
                              <td className="py-3">2 Jahre</td>
                            </tr>
                            <tr className="border-b border-gray-100">
                              <td className="py-3">_ga_*</td>
                              <td className="py-3">Google Analytics</td>
                              <td className="py-3">Speichert Session-Daten</td>
                              <td className="py-3">2 Jahre</td>
                            </tr>
                            <tr>
                              <td className="py-3">_gid</td>
                              <td className="py-3">Google Analytics</td>
                              <td className="py-3">Unterscheidet Benutzer</td>
                              <td className="py-3">24 Stunden</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-blue-100 rounded-lg p-4 mt-4">
                        <p className="text-sm text-gray-800">
                          <strong>Hinweis:</strong> Alle Analyse-Daten werden anonymisiert erfasst. 
                          Ihre IP-Adresse wird gekürzt, bevor sie gespeichert wird. 
                          Google Analytics wird nur geladen, wenn Sie diesem zugestimmt haben.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Ihre Cookie-Einstellungen verwalten</h2>
                  <p className="text-gray-700 mb-4">
                    Sie haben jederzeit die Möglichkeit, Ihre Cookie-Einstellungen zu ändern. 
                    Sie können Ihre Einwilligung widerrufen oder Cookies in den Einstellungen Ihres Browsers blockieren.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie-Einstellungen ändern</h3>
                    <p className="text-gray-700 mb-4">
                      Um Ihre Cookie-Einstellungen zu ändern, klicken Sie auf den Button unten. 
                      Dies öffnet das Cookie-Einstellungen-Fenster, in dem Sie Ihre Präferenzen anpassen können.
                    </p>
                    <button 
                      onClick={() => {
                        if (typeof window !== 'undefined') {
                          const event = new CustomEvent('openCookieSettings');
                          window.dispatchEvent(event);
                        }
                      }}
                      className="bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Cookie-Einstellungen öffnen
                    </button>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies in Ihrem Browser verwalten</h2>
                  <p className="text-gray-700 mb-4">
                    Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so einstellen, 
                    dass er Cookies ablehnt oder Sie benachrichtigt, wenn Cookies gesendet werden.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie-Verwaltung nach Browser:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li><strong>Google Chrome:</strong> Einstellungen → Datenschutz und Sicherheit → Cookies und andere Websitedaten</li>
                      <li><strong>Mozilla Firefox:</strong> Einstellungen → Datenschutz & Sicherheit → Cookies und Website-Daten</li>
                      <li><strong>Safari:</strong> Einstellungen → Datenschutz → Cookies und Website-Daten</li>
                      <li><strong>Microsoft Edge:</strong> Einstellungen → Cookies und Websiteberechtigungen → Cookies</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Weitere Informationen</h2>
                  <p className="text-gray-700 mb-4">
                    Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, können Sie uns jederzeit kontaktieren:
                  </p>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700">
                      <strong>E-Mail:</strong> beautyskin.studio@icloud.com<br />
                      <strong>Telefon:</strong> +49 170 4482725
                    </p>
                  </div>
                </div>

                <div className="bg-primary-50 rounded-2xl p-8">
                  <p className="text-gray-700 text-sm">
                    <strong>Letzte Aktualisierung:</strong> Oktober 2025
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

