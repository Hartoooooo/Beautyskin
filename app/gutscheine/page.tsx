import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Gift, Sparkles, Heart, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Gutscheine - BeautySkin',
  description: 'Verschenken Sie Wohlbefinden und Schönheit mit einem Gutschein von BeautySkin Kosmetikstudio Berlin.',
}

export default function GutscheinePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div>
        <section className="pt-20 pb-20 bg-[#e9dbd2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#454545] rounded-full mb-6">
                <Gift className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Gutscheine</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Verschenken Sie Wohlbefinden und Schönheit – der perfekte Geschenk für Ihre Liebsten
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Info Box */}
              <div className="bg-[#454545] rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-start space-x-4">
                  <Sparkles className="h-8 w-8 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">BeautySkin Gutscheine</h2>
                    <p className="text-white/90 leading-relaxed mb-4">
                      Ein Gutschein von BeautySkin ist das perfekte Geschenk für alle, die sich etwas Gutes tun möchten. 
                      Ob für Geburtstag, Weihnachten, Muttertag oder einfach zwischendurch – unsere Gutscheine ermöglichen 
                      Ihren Liebsten eine individuelle Auswahl aus unserem umfassenden Behandlungsangebot.
                    </p>
                    <p className="text-white/90 leading-relaxed">
                      Unsere Gutscheine sind flexibel einsetzbar und können für alle unsere Behandlungen verwendet werden. 
                      Sie haben eine Gültigkeitsdauer von 12 Monaten und können sowohl in unserem Studio als auch telefonisch eingelöst werden.
                    </p>
                  </div>
                </div>
              </div>

              {/* Gutschein Optionen */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#e9dbd2] rounded-2xl p-8 shadow-lg border-2 border-[#454545]/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="h-6 w-6 text-[#454545]" />
                    <h3 className="text-2xl font-bold text-gray-900">Flexibler Betrag</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Wählen Sie einen individuellen Betrag ab 25€. Der Gutschein kann für alle unsere Behandlungen 
                    verwendet werden – von Gesichtsbehandlungen über Massagen bis hin zu apparativen Behandlungen.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-2">Verfügbare Beträge:</p>
                    <div className="flex flex-wrap gap-2">
                      {[25, 50, 75, 100, 150, 200].map((amount) => (
                        <span key={amount} className="px-3 py-1 bg-[#454545] text-white rounded-lg text-sm font-semibold">
                          {amount}€
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Oder wählen Sie einen individuellen Betrag</p>
                  </div>
                </div>

                <div className="bg-[#e9dbd2] rounded-2xl p-8 shadow-lg border-2 border-[#454545]/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <Gift className="h-6 w-6 text-[#454545]" />
                    <h3 className="text-2xl font-bold text-gray-900">Behandlungs-Gutschein</h3>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Verschenken Sie eine spezifische Behandlung aus unserem Angebot. 
                    Ideal, wenn Sie genau wissen, welche Behandlung perfekt für den Beschenkten ist.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-600 mb-2">Beliebte Geschenk-Behandlungen:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Gesichtsbehandlung ab 49€</li>
                      <li>• Aqua Facial Behandlung ab 75€</li>
                      <li>• Entspannungsmassage mit Hot Stone ab 45€</li>
                      <li>• Micro Needling ab 90€</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bestellung */}
              <div className="bg-gradient-to-br from-[#454545] to-[#303030] rounded-3xl p-8 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-6 text-center">Gutschein bestellen</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <Phone className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Telefonisch</h3>
                    <p className="text-white/90 mb-4">
                      Rufen Sie uns an und wir erstellen Ihren Gutschein persönlich für Sie.
                    </p>
                    <a 
                      href="tel:+491704482725" 
                      className="inline-block bg-white text-[#454545] hover:bg-white/90 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                      +49 170 4482725
                    </a>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <Mail className="h-8 w-8 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Per E-Mail</h3>
                    <p className="text-white/90 mb-4">
                      Schreiben Sie uns eine E-Mail mit Ihrem Wunschbetrag oder der gewünschten Behandlung.
                    </p>
                    <a 
                      href="mailto:beautyskin.studio@icloud.com?subject=Gutschein Bestellung" 
                      className="inline-block bg-white text-[#454545] hover:bg-white/90 font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
                    >
                      E-Mail senden
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-white/80 mb-4">
                    Oder besuchen Sie uns direkt im Studio und lassen Sie sich vor Ort beraten.
                  </p>
                  <Link 
                    href="/termin"
                    className="inline-block bg-[#e9dbd2] text-[#454545] hover:bg-[#e9dbd2]/90 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                  >
                    Termin anfragen
                  </Link>
                </div>
              </div>

              {/* Hinweise */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Wichtige Hinweise</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#454545] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Gültigkeitsdauer</p>
                      <p>Unsere Gutscheine sind 12 Monate ab Ausstellungsdatum gültig.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#454545] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Einlösung</p>
                      <p>Gutscheine können für alle Behandlungen verwendet werden. Bei höherem Betrag wird der Restbetrag gutgeschrieben.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#454545] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Terminvereinbarung</p>
                      <p>Bitte vereinbaren Sie vorab einen Termin telefonisch oder über unser Online-Formular.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#454545] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Nicht übertragbar</p>
                      <p>Gutscheine sind nicht übertragbar und können nicht gegen Bargeld eingetauscht werden.</p>
                    </div>
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


