'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Heart, Star, Eye } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const treatments = [
  {
    id: 1,
    title: 'Gesichtsbehandlung',
    subtitle: 'Professionelle Gesichtspflege',
    description: 'Unsere professionellen Gesichtsbehandlungen für gesunde und strahlende Haut. Mit hochwertigen Produkten und modernen Techniken.',
    icon: Heart,
    image: '/Gesichtsbehandlungen.webp',
    features: ['B.Skin Klassik', 'B.Skin Deluxe', 'AHA Peeling', 'Kräuter-Peeling'],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    duration: '45-60 Min',
    price: 'ab 49€',
    treatments: [
      'BeautySkin Klassik',
      'BeautySkin Deluxe',
      'BeautySkin Relax', 
      'BeautySkin Hautklar',
      'BeautySkin Unreine',
      'BeautySkin Reine Männersache',
      'AHA Fruchtsäurepeeling',
      'Kräuter-Peeling (Herbs2Peel)'
    ]
  },
  {
    id: 2,
    title: 'Apparative Behandlungen',
    subtitle: 'Technologie für optimale Ergebnisse',
    description: 'Hochmoderne apparative Behandlungen für intensive Hautverbesserung. Mit neuesten Geräten für beste Resultate.',
    icon: Sparkles,
    image: '/apparativ.webp',
    features: ['Aqua Facial', 'Skin Oximizer', 'Micro Needling', 'Radiofrequenz'],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    duration: '45-90 Min',
    price: 'ab 75€',
    treatments: [
      'Aqua Facial Behandlung',
      'Skin Oximizer',
      'Micro Needling',
      'Diamant Mikrodermabrasion',
      'Radiofrequenzbehandlung'
    ]
  },
  {
    id: 3,
    title: 'Massagen',
    subtitle: 'Entspannung und Wohlbefinden',
    description: 'Entspannende Massagen für Körper und Seele. Zur Verbesserung der Durchblutung und Entspannung der Muskulatur.',
    icon: Heart,
    image: '/Massagen%20Startseite.webp',
    features: ['Nacken-Massage', 'Hot Stone', 'Rücken-Massage'],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    duration: '15-45 Min',
    price: 'ab 25€',
    treatments: [
      'Nacken-Massage',
      'Entspannungsmassage mit Hot Stone',
      'Kopf-Nacken-Rückenmassage'
    ]
  },
  {
    id: 4,
    title: 'Dauerhafte Haarentfernung',
    subtitle: 'Ice Diodenlaser für dauerhafte Ergebnisse',
    description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser. Schmerzarm und effektiv.',
    icon: Eye,
    image: '/Haarentfernunhg.webp',
    features: ['Ice Diodenlaser', 'Dauerhaft', 'Schmerzarm', 'Effektiv'],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    duration: '15-60 Min',
    price: 'ab 15€',
    treatments: [
      'Für Frauen: Gesicht komplett 40€, Kinn 15€, Wangen 25€, Hals 25€, Nacken 35€, Schultern 40€, Achseln 35€, Brust 30€, Arme komplett 60€, Unterarm 35€, Hände 20€, Rücken 50€, Bikinizone 45€, Beine komplett 99€, Füße 20€',
      'Für Männer: Wangen 25€, Brust 60€, Schultern 45€, Achseln 40€, Arme komplett 75€, Rücken 80€, Bauch 65€, Beine komplett 110€'
    ]
  },
  {
    id: 5,
    title: 'Augenbrauenkorrektur',
    subtitle: 'Perfekte Augenbrauen & Wimpern',
    description: 'Professionelle Augenbrauen- und Wimpernbehandlungen für einen ausdrucksstarken Blick.',
    icon: Eye,
    image: '/pinzette.webp',
    features: ['Zupfen', 'Waxing', 'Färben', 'Kombipaket'],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    duration: '15-30 Min',
    price: 'ab 15€',
    treatments: [
      'Augenbrauenkorrektur (Zupfen oder Waxing)',
      'Augenbrauen färben',
      'Wimpern färben',
      'Augenbrauen & Wimpern Kombipaket'
    ]
  }
]

export default function TreatmentsSection() {
  return (
    <section className="py-20 bg-[#e9dbd2]">
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
            Unsere <span className="gradient-text">Behandlungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecken Sie unser umfassendes Angebot an professionellen Kosmetikbehandlungen, 
            die individuell auf Ihre Bedürfnisse abgestimmt sind.
          </p>
        </motion.div>

        {/* Treatments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}
            >
              <div className={`h-full bg-gradient-to-br ${treatment.bgColor} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover flex flex-col ${treatment.image ? `relative ${index < 3 ? 'min-h-[380px]' : 'min-h-[350px]'}` : ''}`}>
                {/* Full height image for cards with images */}
                {treatment.image ? (
                  <>
                    <div className="absolute inset-0 w-full h-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={treatment.image}
                        alt={treatment.title}
                        fill
                        className={`object-cover ${treatment.id === 4 ? 'object-left' : ''}`}
                      />
                      {/* Gradient Overlay from bottom to middle */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      {/* Gradient Overlay from top to middle - more subtle */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
                    </div>
                    {/* Title and Subtitle overlay - top left */}
                    <div className="absolute top-0 left-0 p-6 z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {treatment.title}
                      </h3>
                      <p className="text-lg font-medium text-white/90">
                        {treatment.subtitle}
                      </p>
                    </div>

                    {/* Content overlay - bottom */}
                    <div className="relative z-10 flex-1 flex flex-col justify-end p-8">
                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {treatment.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div>
                        <Link
                          href={
                            treatment.id === 1 ? '/gesichtsbehandlung' :
                            treatment.id === 2 ? '/apparative-behandlungen' :
                            treatment.id === 3 ? '/massagen' :
                            treatment.id === 4 ? '/dauerhafte-haarentfernung' :
                            '/augenbrauenkorrektur'
                          }
                          className={`inline-flex items-center space-x-2 text-white bg-gradient-to-r ${treatment.color} hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105`}
                        >
                          <span>Mehr erfahren</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center m-8 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <treatment.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-8 space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {treatment.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-600 mb-4">
                          {treatment.subtitle}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2">
                        {treatment.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2.5 py-1 bg-[#e9dbd2]/70 rounded-full text-xs font-medium text-gray-700"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link
                          href={
                            treatment.id === 1 ? '/gesichtsbehandlung' :
                            treatment.id === 2 ? '/apparative-behandlungen' :
                            treatment.id === 3 ? '/massagen' :
                            treatment.id === 4 ? '/dauerhafte-haarentfernung' :
                            '/augenbrauenkorrektur'
                          }
                          className={`inline-flex items-center space-x-2 text-white bg-gradient-to-r ${treatment.color} hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105`}
                        >
                          <span>Mehr erfahren</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-[#454545] rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Alle Behandlungen entdecken
            </h3>
            <p className="text-white mb-6">
              Lassen Sie sich von unserem Expertenteam beraten und finden Sie die perfekte Behandlung für Ihre Bedürfnisse.
            </p>
            <Link href="/behandlungen" className="bg-[#e9dbd2] text-gray-900 hover:bg-[#e9dbd2]/90 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
              <span>Alle Behandlungen ansehen</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
