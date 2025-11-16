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
    treatment: 'Diamant Microdermabrasion',
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
                <div className="hidden lg:flex items-center space-x-3">
                  <Star className="h-8 w-8 text-yellow-500 fill-current" />
                  <h3 className="text-2xl font-bold text-gray-900">Bewertungen</h3>
                </div>
                <div className="w-full lg:w-auto lg:text-right">
                  <div className="flex items-center justify-center lg:justify-end space-x-2">
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
                    <span className="hidden lg:inline text-xl font-bold text-gray-900">4.9</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1 text-center lg:text-right">
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
                        "{reviews[currentReview].text}"
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
          <div className="relative bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-8 text-white">
            {/* Silberne innere Linie mit Glanz */}
            <div className="absolute inset-2 border-2 border-[#C0C0C0] rounded-3xl pointer-events-none shadow-[inset_0_0_10px_rgba(192,192,192,0.5),0_0_5px_rgba(255,255,255,0.3)]"></div>
            {/* Left SVG - Desktop only */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-32 h-32 opacity-60 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                width="100%" height="100%" viewBox="0 0 491.277 491.277"
                preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="silverGradientContact" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8E8E8" stopOpacity="1" />
                    <stop offset="50%" stopColor="#C0C0C0" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A8A8A8" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  <g fill="url(#silverGradientContact)">
                    <path d="M365.357,342.949c10.828-11.556,24.953-19.777,39.383-26.006c5.012-2.16,14.438-7.693,20.137-7.285
                      c-23-1.879-47.396-3.166-69.342,5.313c-19.17,7.399-34.711,22.08-46.74,38.408c-7.945,10.791-13.664,22.64-20.029,34.378
                      c-7.805,14.394-18.084,35.635-34.885,41.457c21.262-2.372,42.03-11.665,58.613-24.996
                      C333.795,387.1,346.857,362.701,365.357,342.949z"/>
                    <path d="M412.115,325.927c-23.885,12.72-39.061,28.859-55.406,49.869c-11.891,15.273-25.311,32.773-41.949,43.232
                      c-13.164,8.274-32.138,18.12-47.951,19.566c37.631,22.785,85.082,22.107,122.438-0.749c34.471-21.097,47.23-55.99,66.723-89.035
                      c6.162-10.44,14.021-19.901,23.16-27.87c2.143-1.869,8.91-9.084,12.148-8.957C464.186,309.781,436.332,313.027,412.115,325.927z"/>
                    <path d="M301.938,219.472c-6.801,9.233-11.693,19.371-17.139,29.415c-6.679,12.315-15.476,30.493-29.851,35.474
                      c18.194-2.027,35.964-9.982,50.153-21.39c18.227-14.644,29.402-35.521,45.232-52.421c9.266-9.887,21.352-16.924,33.695-22.255
                      c4.287-1.85,12.355-6.582,17.23-6.232c-19.682-1.608-40.557-2.708-59.33,4.545C325.529,192.938,312.229,205.5,301.938,219.472z"/>
                    <path d="M448.053,192.094c1.836-1.6,7.625-7.771,10.395-7.665c-23.18-1.886-47.012,0.892-67.732,11.931
                      c-20.436,10.884-33.42,24.694-47.408,42.672c-10.174,13.071-21.656,28.045-35.895,36.992
                      c-11.266,7.082-27.498,15.505-41.031,16.743c32.198,19.495,72.805,18.916,104.766-0.643
                      c29.494-18.049,40.412-47.906,57.092-76.182C433.506,207.006,440.236,198.91,448.053,192.094z"/>
                    <path d="M125.916,342.949c18.502,19.752,31.565,44.151,52.864,61.266c16.58,13.333,37.349,22.625,58.614,24.997
                      c-16.803-5.821-27.082-27.063-34.886-41.457c-6.365-11.737-12.084-23.587-20.03-34.377c-12.029-16.33-27.573-31.009-46.739-38.409
                      c-21.945-8.479-46.339-7.189-69.341-5.312c5.698-0.41,15.125,5.121,20.136,7.285C100.963,323.17,115.086,331.393,125.916,342.949z"/>
                    <path d="M35.307,348.815c19.492,33.046,32.253,67.94,66.723,89.034c37.354,22.858,84.807,23.534,122.438,0.75
                      c-15.817-1.447-34.788-11.292-47.951-19.566c-16.64-10.459-30.059-27.959-41.949-43.233
                      c-16.348-21.009-31.524-37.149-55.407-49.868C54.942,313.029,27.09,309.783,0,311.988c3.238-0.125,10.005,7.088,12.148,8.959
                      C21.286,328.912,29.147,338.373,35.307,348.815z"/>
                    <path d="M149.342,186.607c-18.776-7.254-39.652-6.153-59.333-4.545c4.876-0.349,12.941,4.382,17.229,6.232
                      c12.347,5.332,24.433,12.365,33.697,22.255c15.831,16.9,27.01,37.778,45.233,52.421c14.188,11.406,31.958,19.359,50.154,21.391
                      c-14.378-4.98-23.172-23.158-29.85-35.475c-5.445-10.043-10.339-20.181-17.138-29.415
                      C179.044,205.5,165.743,192.938,149.342,186.607z"/>
                    <path d="M32.824,184.429c2.771-0.106,8.562,6.065,10.396,7.665c7.817,6.816,14.546,14.913,19.815,23.849
                      c16.678,28.276,27.596,58.132,57.092,76.183c31.961,19.561,72.566,20.137,104.765,0.643c-13.533-1.238-29.767-9.666-41.031-16.744
                      c-14.236-8.947-25.72-23.921-35.894-36.992c-13.986-17.978-26.971-31.79-47.407-42.674
                      C79.838,185.318,56.004,182.539,32.824,184.429z"/>
                    <path d="M295.538,145.18c-13.04,19.136-30.979,34.597-41.298,55.575c-8.039,16.334-11.926,35.411-9.939,53.609
                      c1.726-15.117,17.546-27.663,28.111-36.868c8.615-7.504,17.441-14.492,24.971-23.141c11.393-13.092,20.748-28.811,23.354-46.198
                      c2.984-19.905-2.641-40.039-8.502-58.895c1.404,4.682-1.455,13.587-2.326,18.174C307.4,120.651,303.166,133.981,295.538,145.18z"/>
                    <path d="M231.523,247c-1.742-13.478,2.941-31.155,7.394-43.694c5.628-15.846,17.737-30.317,28.275-43.096
                      c14.495-17.571,25.141-33.255,31.307-55.571c6.257-22.632,3.771-46.497-3.126-68.705c0.707,2.683-4.052,9.677-5.215,11.817
                      c-4.949,9.117-11.382,17.448-18.953,24.539c-23.958,22.443-50.716,39.61-61.901,72.331
                      C197.187,180.074,205.474,219.829,231.523,247z"/>
                  </g>
                </g>
              </svg>
            </div>

            {/* Right SVG - Desktop only */}
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-32 h-32 opacity-60 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                width="100%" height="100%" viewBox="0 0 491.277 491.277"
                preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="silverGradientContactRight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8E8E8" stopOpacity="1" />
                    <stop offset="50%" stopColor="#C0C0C0" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A8A8A8" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  <g fill="url(#silverGradientContactRight)">
                    <path d="M365.357,342.949c10.828-11.556,24.953-19.777,39.383-26.006c5.012-2.16,14.438-7.693,20.137-7.285
                      c-23-1.879-47.396-3.166-69.342,5.313c-19.17,7.399-34.711,22.08-46.74,38.408c-7.945,10.791-13.664,22.64-20.029,34.378
                      c-7.805,14.394-18.084,35.635-34.885,41.457c21.262-2.372,42.03-11.665,58.613-24.996
                      C333.795,387.1,346.857,362.701,365.357,342.949z"/>
                    <path d="M412.115,325.927c-23.885,12.72-39.061,28.859-55.406,49.869c-11.891,15.273-25.311,32.773-41.949,43.232
                      c-13.164,8.274-32.138,18.12-47.951,19.566c37.631,22.785,85.082,22.107,122.438-0.749c34.471-21.097,47.23-55.99,66.723-89.035
                      c6.162-10.44,14.021-19.901,23.16-27.87c2.143-1.869,8.91-9.084,12.148-8.957C464.186,309.781,436.332,313.027,412.115,325.927z"/>
                    <path d="M301.938,219.472c-6.801,9.233-11.693,19.371-17.139,29.415c-6.679,12.315-15.476,30.493-29.851,35.474
                      c18.194-2.027,35.964-9.982,50.153-21.39c18.227-14.644,29.402-35.521,45.232-52.421c9.266-9.887,21.352-16.924,33.695-22.255
                      c4.287-1.85,12.355-6.582,17.23-6.232c-19.682-1.608-40.557-2.708-59.33,4.545C325.529,192.938,312.229,205.5,301.938,219.472z"/>
                    <path d="M448.053,192.094c1.836-1.6,7.625-7.771,10.395-7.665c-23.18-1.886-47.012,0.892-67.732,11.931
                      c-20.436,10.884-33.42,24.694-47.408,42.672c-10.174,13.071-21.656,28.045-35.895,36.992
                      c-11.266,7.082-27.498,15.505-41.031,16.743c32.198,19.495,72.805,18.916,104.766-0.643
                      c29.494-18.049,40.412-47.906,57.092-76.182C433.506,207.006,440.236,198.91,448.053,192.094z"/>
                    <path d="M125.916,342.949c18.502,19.752,31.565,44.151,52.864,61.266c16.58,13.333,37.349,22.625,58.614,24.997
                      c-16.803-5.821-27.082-27.063-34.886-41.457c-6.365-11.737-12.084-23.587-20.03-34.377c-12.029-16.33-27.573-31.009-46.739-38.409
                      c-21.945-8.479-46.339-7.189-69.341-5.312c5.698-0.41,15.125,5.121,20.136,7.285C100.963,323.17,115.086,331.393,125.916,342.949z"/>
                    <path d="M35.307,348.815c19.492,33.046,32.253,67.94,66.723,89.034c37.354,22.858,84.807,23.534,122.438,0.75
                      c-15.817-1.447-34.788-11.292-47.951-19.566c-16.64-10.459-30.059-27.959-41.949-43.233
                      c-16.348-21.009-31.524-37.149-55.407-49.868C54.942,313.029,27.09,309.783,0,311.988c3.238-0.125,10.005,7.088,12.148,8.959
                      C21.286,328.912,29.147,338.373,35.307,348.815z"/>
                    <path d="M149.342,186.607c-18.776-7.254-39.652-6.153-59.333-4.545c4.876-0.349,12.941,4.382,17.229,6.232
                      c12.347,5.332,24.433,12.365,33.697,22.255c15.831,16.9,27.01,37.778,45.233,52.421c14.188,11.406,31.958,19.359,50.154,21.391
                      c-14.378-4.98-23.172-23.158-29.85-35.475c-5.445-10.043-10.339-20.181-17.138-29.415
                      C179.044,205.5,165.743,192.938,149.342,186.607z"/>
                    <path d="M32.824,184.429c2.771-0.106,8.562,6.065,10.396,7.665c7.817,6.816,14.546,14.913,19.815,23.849
                      c16.678,28.276,27.596,58.132,57.092,76.183c31.961,19.561,72.566,20.137,104.765,0.643c-13.533-1.238-29.767-9.666-41.031-16.744
                      c-14.236-8.947-25.72-23.921-35.894-36.992c-13.986-17.978-26.971-31.79-47.407-42.674
                      C79.838,185.318,56.004,182.539,32.824,184.429z"/>
                    <path d="M295.538,145.18c-13.04,19.136-30.979,34.597-41.298,55.575c-8.039,16.334-11.926,35.411-9.939,53.609
                      c1.726-15.117,17.546-27.663,28.111-36.868c8.615-7.504,17.441-14.492,24.971-23.141c11.393-13.092,20.748-28.811,23.354-46.198
                      c2.984-19.905-2.641-40.039-8.502-58.895c1.404,4.682-1.455,13.587-2.326,18.174C307.4,120.651,303.166,133.981,295.538,145.18z"/>
                    <path d="M231.523,247c-1.742-13.478,2.941-31.155,7.394-43.694c5.628-15.846,17.737-30.317,28.275-43.096
                      c14.495-17.571,25.141-33.255,31.307-55.571c6.257-22.632,3.771-46.497-3.126-68.705c0.707,2.683-4.052,9.677-5.215,11.817
                      c-4.949,9.117-11.382,17.448-18.953,24.539c-23.958,22.443-50.716,39.61-61.901,72.331
                      C197.187,180.074,205.474,219.829,231.523,247z"/>
                  </g>
                </g>
              </svg>
            </div>

            <div className="relative z-10">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
