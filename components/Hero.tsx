'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Star, Clock, Shield } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const heroImages = [
  '/aussen.webp',
  '/drin1.webp',
  '/drin2.webp',
  '/drin3.webp'
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)

  // Preload alle Bilder beim Mount
  useEffect(() => {
    const preloadImages = heroImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })

    Promise.all(preloadImages).then(() => {
      setImagesLoaded(true)
    })
  }, [])

  useEffect(() => {
    if (!imagesLoaded) return
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Wechselt alle 5 Sekunden
    return () => clearInterval(interval)
  }, [imagesLoaded])
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-[#e9dbd2] to-primary-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-apple"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Professionelles Kosmetikstudio in{' '}
                <span className="gradient-text">Berlin Friedrichshain</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed font-apple"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Entdecken Sie unsere vielfältigen professionellen Dienstleistungen und lassen Sie sich von unserem Behandlungsangebot begeistern! 
                Unser erfahrenes Team steht Ihnen zur individuellen Beratung bezüglich Ihrer persönlichen Schönheitspflege und hochwertigen Produkten 
                in unserem erstklassigen Kosmetikstudio in Friedrichshain, Berlin, zur Verfügung.
              </motion.p>
            </div>

            {/* Opening Hours */}
            <motion.div 
              className="bg-[#e9dbd2]/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-primary-600" />
                <h3 className="text-lg font-semibold text-gray-900">Öffnungszeiten</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Mo–Fr</span>
                  <span className="font-medium">10:00–18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag</span>
                  <span className="font-medium">10:00–15:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span className="font-medium">Geschlossen</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a href="/termin" className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Termin anfragen</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/message/G5TR7ZJCEOXDO1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <WhatsAppIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Kontakt aufnehmen</span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-gray-600">4.9 Sterne (350+)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Zertifizierte Kosmetiker</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 p-2 shadow-2xl">
                <div className="h-full bg-[#e9dbd2] rounded-2xl shadow-lg overflow-hidden relative">
                  {/* Alle Bilder vorab laden, aber nur aktuelles anzeigen */}
                  {heroImages.map((src, index) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: index === currentImageIndex ? 1 : 0,
                        zIndex: index === currentImageIndex ? 10 : 0
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={src}
                        alt={`BeautySkin Kosmetikstudio - ${index === 0 ? 'Außenansicht' : `Innenansicht ${index}`}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Navigation Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                        aria-label={`Bild ${index + 1} anzeigen`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-lg animate-float">
              <span className="text-white text-2xl">✨</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{animationDelay: '2s'}}>
              <span className="text-white text-xl">💆‍♀️</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
