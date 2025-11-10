'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MapPin, Mail, Clock, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const reviews = [
  {
    text: 'Ein sehr schönes Studio, Behandlung hat mir gut gefallen, für langfristige Ergebnisse müssen sicher mehrere Anwendungen durchgeführt werden :)',
    author: 'Migle',
    treatment: 'Radiofrequenzbehandlung fürs Gesicht',
    treatedBy: 'Raquel',
    timeAgo: 'vor etwa 22 Stunden'
  },
  {
    text: 'Wie immer alles tipi topi! Freue mich aufs nächste Mal',
    author: 'Lili',
    treatment: 'Hydrating Facial',
    treatedBy: 'Raquel',
    timeAgo: 'vor 9 Tagen'
  },
  {
    text: 'Super entspannende Behandlung! Ich habe mich sehr wohl gefühlt und Ysabel hat abschließend noch hilfreiche Tipps zur Nachversorgung gegeben. Ich komme auf jeden Fall wieder!',
    author: 'Lea',
    treatment: 'Microdermabrasion',
    treatedBy: 'Ysabel',
    timeAgo: 'vor 15 Tagen'
  },
  {
    text: 'Wirklich immer super! Sie nimmt sich wirklich viel Zeit und geht auf individuelle Bedürfnisse ein. Pure Wohltuung!',
    author: 'Lea',
    treatment: 'Radiofrequenzbehandlung fürs Gesicht',
    treatedBy: 'Raquel',
    timeAgo: 'vor 16 Tagen'
  },
  {
    text: 'Eine sehr angenehme und professionelle Behandlung. Ich komme gern wieder.',
    author: 'Linda',
    treatment: 'Gesichtsbehandlungen',
    treatedBy: 'Ysabel',
    timeAgo: 'vor 18 Tagen'
  }
]

export default function ContactSection() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000) // Wechselt alle 5 Sekunden
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="kontakt" className="py-20 bg-[#e9dbd2]">
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
                      <p>Mo-Fr: 10-18 Uhr</p>
                      <p>Samstag: 10-15 Uhr</p>
                      <p>Sonntag: Geschlossen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bewertungen */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Star className="h-8 w-8 text-yellow-500 fill-current" />
                  <h3 className="text-2xl font-bold text-gray-900">Bewertungen</h3>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="star-gradient">
                          <stop offset="95%" stopColor="#fbbf24" />
                          <stop offset="95%" stopColor="transparent" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5"
                        style={{
                          fill: i < 4 ? '#fbbf24' : 'url(#star-gradient)',
                          color: '#fbbf24'
                        }}
                      />
                    ))}
                    <span className="text-xl font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    aus <a 
                      href="https://www.treatwell.de/ort/beauty-skin-r-y-kosmetikstudio/bewertungen/seite-3/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 font-semibold underline transition-colors duration-200"
                    >
                      340+ Bewertungen
                    </a>
                  </p>
                </div>
              </div>
              
              {/* Review Carousel */}
              <div className="relative h-48 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="space-y-3">
                      <p className="text-gray-700 italic leading-relaxed">
                        &quot;{reviews[currentReview].text}&quot;
                      </p>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-gray-900">
                          {reviews[currentReview].author}
                        </p>
                        <p className="text-xs text-gray-600">
                          Behandelt von {reviews[currentReview].treatedBy} • {reviews[currentReview].treatment}
                        </p>
                        <p className="text-xs text-gray-500">
                          {reviews[currentReview].timeAgo}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center space-x-2 mt-4">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentReview ? 'bg-yellow-500 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="h-full min-h-[600px] rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=BeautySkin+R%26Y+Slivio-Meier-Straße+6+10247+Berlin&zoom=15"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '600px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BeautySkin Standort - R&Y Slivio-Meier-Straße 6, 10247 Berlin"
              ></iframe>
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
              <a href="/termin" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                Termin anfragen
              </a>
              <a href="/termin" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-block">
                Beratung anfragen
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
