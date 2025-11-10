import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'AGB - BeautySkin',
  description: 'Allgemeine Geschäftsbedingungen von BeautySkin Kosmetikstudio Berlin.',
}

export default function AGBPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <section className="pt-20 pb-20 bg-[#e9dbd2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen</h1>
            
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Geltungsbereich</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen zwischen BeautySkin (nachfolgend "Anbieter" oder "wir") und den Kunden (nachfolgend "Kunde" oder "Sie") im Zusammenhang mit den auf dieser Website angebotenen kosmetischen Behandlungen und Dienstleistungen.
                  </p>
                  <p>
                    Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Vertragsgegenstand und Leistungsbeschreibung</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1.1 Leistungsangebot</h3>
                  <p className="text-gray-700 mb-4">
                    BeautySkin bietet kosmetische Behandlungen und Dienstleistungen an, die auf dieser Website beschrieben sind. Die genauen Leistungsbeschreibungen finden Sie auf den jeweiligen Unterseiten unserer Website.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1.2 Terminanfrage - Keine verbindliche Buchung</h3>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-4 rounded-r-lg">
                    <p className="text-gray-800 font-semibold mb-2">Wichtig:</p>
                    <p className="text-gray-700 mb-2">
                      Über diese Website können Sie ausschließlich eine <strong>unverbindliche Terminanfrage</strong> stellen. Die Übermittlung einer Terminanfrage stellt <strong>keine verbindliche Buchung</strong> dar und begründet keinen Anspruch auf einen Termin.
                    </p>
                    <p className="text-gray-700">
                      Ein verbindlicher Behandlungsvertrag kommt erst zustande, wenn wir Ihre Terminanfrage bestätigt haben und Sie diese Bestätigung angenommen haben. Wir behalten uns vor, Terminanfragen ohne Angabe von Gründen abzulehnen.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Vertragsschluss</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Terminanfrage</h3>
                  <p className="text-gray-700 mb-4">
                    Wenn Sie über unser Kontaktformular oder telefonisch einen Termin anfragen, handelt es sich dabei um eine unverbindliche Anfrage. Wir prüfen Ihre Anfrage und melden uns bei Ihnen, um einen passenden Termin zu vereinbaren.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Vertragsbestätigung</h3>
                  <p className="text-gray-700 mb-4">
                    Ein verbindlicher Behandlungsvertrag kommt erst durch unsere schriftliche oder mündliche Bestätigung des Termins zustande. Die Bestätigung kann per E-Mail, telefonisch oder auf andere Weise erfolgen.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Preise und Zahlungsbedingungen</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1 Preise</h3>
                  <p className="text-gray-700 mb-4">
                    Alle auf dieser Website angegebenen Preise verstehen sich in Euro und enthalten die gesetzliche Mehrwertsteuer. Die Preise können sich ändern. Maßgeblich ist der Preis, der zum Zeitpunkt der verbindlichen Terminbestätigung gilt.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2 Zahlung</h3>
                  <p className="text-gray-700 mb-4">
                    Die Zahlung erfolgt in der Regel vor Ort im Studio bar oder per EC-Karte. Über die akzeptierten Zahlungsmethoden informieren wir Sie bei der Terminbestätigung.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Termine und Absagen</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Terminvereinbarung</h3>
                  <p className="text-gray-700 mb-4">
                    Termine werden nach Verfügbarkeit vergeben. Wir bemühen uns, Ihren Wunschtermin zu berücksichtigen, können jedoch keine Garantie für die Verfügbarkeit eines bestimmten Termins geben.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Absage durch den Kunden</h3>
                  <p className="text-gray-700 mb-4">
                    Bitte sagen Sie vereinbarte Termine mindestens 24 Stunden vorher ab. Bei kurzfristigen Absagen (weniger als 24 Stunden vorher) oder Nichterscheinen behalten wir uns vor, eine Ausfallgebühr in Höhe von 50% des Behandlungspreises zu erheben.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Absage durch BeautySkin</h3>
                  <p className="text-gray-700 mb-4">
                    Wir behalten uns vor, Termine aus betrieblichen Gründen oder aufgrund höherer Gewalt zu verschieben oder abzusagen. In diesem Fall werden wir Sie umgehend informieren und einen Ersatztermin anbieten.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Durchführung der Behandlung</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Gesundheitszustand</h3>
                  <p className="text-gray-700 mb-4">
                    Sie sind verpflichtet, uns vor der Behandlung über gesundheitliche Beschwerden, Allergien, Medikamenteneinnahme oder andere Umstände zu informieren, die die Behandlung beeinträchtigen könnten. Wir behalten uns vor, Behandlungen bei gesundheitlichen Bedenken abzulehnen.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Behandlungsergebnis</h3>
                  <p className="text-gray-700 mb-4">
                    Wir führen alle Behandlungen mit größter Sorgfalt durch. Ein bestimmtes Behandlungsergebnis kann jedoch nicht garantiert werden, da individuelle Faktoren wie Hauttyp, Alter, Lebensweise und Gesundheitszustand das Ergebnis beeinflussen können.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Nebenwirkungen</h3>
                  <p className="text-gray-700 mb-4">
                    Bei kosmetischen Behandlungen können vorübergehende Nebenwirkungen wie Rötungen, Schwellungen oder leichte Irritationen auftreten. Diese sind in der Regel harmlos und klingen innerhalb weniger Stunden oder Tage ab.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Haftung</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Haftungsausschluss</h3>
                  <p className="text-gray-700 mb-4">
                    Wir haften nur für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung unsererseits beruhen. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, es sei denn, es handelt sich um die Verletzung einer wesentlichen Vertragspflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Haftungsbeschränkung</h3>
                  <p className="text-gray-700 mb-4">
                    Die Haftung für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit bleibt unberührt. Im Übrigen ist die Haftung auf typischerweise vorhersehbare Schäden begrenzt.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Datenschutz</h2>
                  <p className="text-gray-700 mb-4">
                    Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Informationen zur Erhebung, Verarbeitung und Nutzung Ihrer Daten finden Sie in unserer <a href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">Datenschutzerklärung</a>.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Widerrufsrecht</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.1 Kein Widerrufsrecht bei Dienstleistungen</h3>
                  <p className="text-gray-700 mb-4">
                    Bei Dienstleistungen, die vollständig erbracht wurden und deren Erbringung der Kunde ausdrücklich zugestimmt hat, besteht kein Widerrufsrecht, wenn die Leistung vollständig erbracht wurde und der Kunde zuvor ausdrücklich zugestimmt hat, dass die Leistung vor Ablauf der Widerrufsfrist erbracht wird.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">8.2 Gutscheine</h3>
                  <p className="text-gray-700 mb-4">
                    Für Gutscheine gelten gesonderte Bedingungen. Informationen hierzu erhalten Sie bei Erwerb des Gutscheins.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Urheberrecht und Markenrecht</h2>
                  <p className="text-gray-700 mb-4">
                    Alle auf dieser Website verwendeten Texte, Bilder, Grafiken und sonstigen Inhalte sind urheberrechtlich geschützt. Eine Vervielfältigung, Verbreitung oder sonstige Nutzung bedarf unserer vorherigen schriftlichen Zustimmung.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Schlussbestimmungen</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10.1 Anwendbares Recht</h3>
                  <p className="text-gray-700 mb-4">
                    Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10.2 Salvatorische Klausel</h3>
                  <p className="text-gray-700 mb-4">
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">10.3 Änderungen der AGB</h3>
                  <p className="text-gray-700 mb-4">
                    Wir behalten uns vor, diese AGB jederzeit zu ändern. Maßgeblich ist die jeweils aktuelle Version auf unserer Website.
                  </p>
                </div>

                <div className="bg-primary-50 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Kontakt</h2>
                  <p className="text-gray-700 mb-4">
                    Bei Fragen zu diesen AGB können Sie uns jederzeit kontaktieren:
                  </p>
                  <div className="text-gray-700">
                    <p><strong>BeautySkin</strong><br />
                    Inhaberin: Ysabel Busch</p>
                    <p className="mt-2">R&Y Slivio-Meier-Straße 6<br />
                    10247 Berlin<br />
                    Deutschland</p>
                    <p className="mt-2">
                      Telefon: +49 170 4482725<br />
                      E-Mail: beautyskin.studio@icloud.com
                    </p>
                  </div>
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

