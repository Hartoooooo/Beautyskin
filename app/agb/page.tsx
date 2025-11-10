import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AGB - BeautySkin',
  description: 'Allgemeine Geschäftsbedingungen von BeautySkin Kosmetikstudio Berlin.',
}

export default function AGPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <section className="pt-20 pb-20 bg-[#e9dbd2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              {/* Punkt 1 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Geltungsbereich</h2>
                <p className="text-gray-700">
                  Diese Allgemeinen Geschäftsbedingungen gelten für alle Anfragen, Terminvereinbarungen und Behandlungen zwischen dem Kosmetikstudio BeautySkin, Inhaberin Ysabel Busch, R&Y Slivio-Meier-Straße 6, 10247 Berlin (nachfolgend „Studio" genannt), und den Kundinnen und Kunden (nachfolgend „Kunde" genannt).
                </p>
              </div>

              {/* Punkt 2 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Terminvereinbarung und Vertragsabschluss</h2>
                <p className="text-gray-700 mb-4">
                  Termine können telefonisch, per E-Mail oder über das Kontaktformular der Website angefragt werden. Ein verbindlicher Termin kommt erst durch eine ausdrückliche Bestätigung durch das Studio zustande.
                </p>
                <p className="text-gray-700">
                  Die Nutzung der Website dient ausschließlich der Termin-Anfrage. Es findet kein Online-Vertragsabschluss über Dienstleistungen oder Produktkäufe statt.
                </p>
              </div>

              {/* Widerrufsrecht */}
              <div className="bg-[#454545] rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold text-white mb-4">Widerrufsrecht</h2>
                <p className="text-white/90 mb-4">
                  Da über die Website von BeautySkin keine Dienstleistungen oder Produkte online gekauft werden, besteht kein gesetzliches Widerrufsrecht im Sinne des Fernabsatzrechts.
                </p>
                <p className="text-white/90 mb-4">
                  Die Terminvereinbarung erfolgt lediglich als Anfrage; der Vertrag über die Behandlung kommt erst vor Ort oder nach individueller Terminbestätigung zustande.
                </p>
                <p className="text-white/90">
                  Sollte ein Kunde einen bestätigten Termin nicht wahrnehmen können, gelten die unter Punkt 4 genannten Bedingungen zur Stornierung und Terminabsage.
                </p>
              </div>

              {/* Punkt 3 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Leistungen und Preise</h2>
                <p className="text-gray-700">
                  Die angebotenen Behandlungen und Leistungen sowie die dazugehörigen Preise ergeben sich aus der jeweils gültigen Preisliste des Studios. Preisänderungen behält sich das Studio vor, wobei der bei der Terminbestätigung genannte Preis maßgeblich ist.
                </p>
              </div>

              {/* Punkt 4 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Terminabsagen und Verspätungen</h2>
                <p className="text-gray-700 mb-4">
                  Terminabsagen müssen spätestens 24 Stunden vor dem vereinbarten Termin erfolgen. Erfolgt keine rechtzeitige Absage, kann das Studio eine Ausfallpauschale von bis zu 50 % des Behandlungspreises berechnen.
                </p>
                <p className="text-gray-700">
                  Bei verspätetem Erscheinen kann sich die Behandlungszeit entsprechend verkürzen; der volle Preis ist dennoch zu entrichten.
                </p>
              </div>

              {/* Punkt 5 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Haftung</h2>
                <p className="text-gray-700 mb-4">
                  Das Studio übernimmt keine Haftung für etwaige allergische Reaktionen, die aufgrund unvollständiger oder unrichtiger Angaben des Kunden zu Allergien, Krankheiten oder Medikamenteneinnahmen entstehen.
                </p>
                <p className="text-gray-700">
                  Für mitgebrachte Wertgegenstände übernimmt das Studio keine Haftung.
                </p>
              </div>

              {/* Punkt 6 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Datenschutz</h2>
                <p className="text-gray-700 mb-4">
                  Personenbezogene Daten des Kunden werden ausschließlich zur Terminvereinbarung, Durchführung und Abrechnung von Behandlungen verwendet. Eine Weitergabe an Dritte erfolgt nicht, es sei denn, das Studio ist gesetzlich dazu verpflichtet.
                </p>
                <p className="text-gray-700">
                  Weitere Informationen hierzu finden Sie in der Datenschutzerklärung.
                </p>
              </div>

              {/* Punkt 7 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Salvatorische Klausel</h2>
                <p className="text-gray-700">
                  Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                </p>
              </div>

              {/* Punkt 8 */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Anwendbares Recht</h2>
                <p className="text-gray-700">
                  Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}

