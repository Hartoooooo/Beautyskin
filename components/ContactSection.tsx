'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Gift, Star } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kontakt & <span className="gradient-text">Standort</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Besuchen Sie uns in unserem modernen Kosmetikstudio in Berlin. 
            Wir freuen uns auf Ihren Besuch!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Studio Info */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                BeautySkin Studio
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600">
                      R&Y Slivio-Meier-Straße 6<br />
                      10247 Berlin
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefon</p>
                    <p className="text-gray-600">+49 170 4482725</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">E-Mail</p>
                    <p className="text-gray-600">beautyskin.studio@icloud.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900">Öffnungszeiten</p>
                    <div className="text-gray-600 space-y-1">
                      <p>Montag: 10:00–18:00</p>
                      <p>Dienstag: 10:00–18:00</p>
                      <p>Mittwoch: 10:00–18:00</p>
                      <p>Donnerstag: 10:00–18:00</p>
                      <p>Freitag: 10:00–18:00</p>
                      <p>Samstag: 10:00–15:00</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gutscheine */}
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Gift className="h-8 w-8 text-secondary-600" />
                <h3 className="text-2xl font-bold text-gray-900">Gutscheine</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Verschenken Sie Wohlfühlmomente! Unsere Gutscheine sind das perfekte Geschenk 
                für Ihre Liebsten.
              </p>
              <button className="btn-primary w-full">
                Gutschein bestellen
              </button>
            </div>

            {/* Bewertungen */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="h-8 w-8 text-yellow-500 fill-current" />
                <h3 className="text-2xl font-bold text-gray-900">Bewertungen</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-lg font-semibold text-gray-900">5.0</span>
                </div>
                <p className="text-gray-600">
                  "Wundervolle Behandlungen und sehr freundliches Personal. 
                  Kann ich nur weiterempfehlen!"
                </p>
                <p className="text-sm text-gray-500">- Maria K.</p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-full min-h-[600px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center shadow-lg">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 text-primary-600 mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Unser Standort
                  </h3>
                  <p className="text-gray-600">
                    R&Y Slivio-Meier-Straße 6<br />
                    10247 Berlin
                  </p>
                  <p className="text-sm text-gray-500 mt-4">
                    Gut erreichbar mit öffentlichen Verkehrsmitteln
                  </p>
                </div>
                <button className="btn-secondary">
                  Route planen
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Bereit für Ihre Traumbehandlung?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Buchen Sie jetzt Ihren Termin und erleben Sie professionelle Kosmetik auf höchstem Niveau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Termin buchen
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Beratung anfragen
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
