'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Star, CheckCircle, Sparkles, Zap, Heart, Eye, Shield } from 'lucide-react'

const detailedTreatments = [
  {
    id: 1,
    title: 'Hydrafacial',
    subtitle: 'Revolutionäre Hautbehandlung',
    description: 'Hydrafacial kombiniert die Hautabtragung, Tiefenausreinigung und Dermalinfusion von Antioxidantien, Vitaminen und Hyaluron. Mit Kaltlicht und Lymphdrainage auf einer Plattform.',
    fullDescription: 'Unsere HydraFacial Behandlung in Berlin wird individuell an Ihren Hauttyp angepasst. Für fettige, trockene oder empfindliche Haut, feine Linien oder Fältchen gibt es unterschiedliche Anwendungen durch die Aufsätze, Seren und die Kombinationsmöglichkeit der Lymphdrainage und der Lichttherapie.',
    icon: Sparkles,
    duration: '60 Min',
    price: 'ab 89€',
    benefits: [
      'Tiefenreinigung der Poren',
      'Hydratation der Haut',
      'Anti-Aging Wirkung',
      'Reduzierung von Unreinheiten',
      'Straffere Haut',
      'Lichttherapie inklusive'
    ],
    process: [
      'Hautanalyse und Beratung',
      'Tiefenreinigung mit HydraFacial',
      'Peeling und Extraktion',
      'Serum-Infusion',
      'Lymphdrainage',
      'Abschlusspflege'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Trockene Haut',
      'Fettige Haut',
      'Mischhaut',
      'Empfindliche Haut',
      'Anti-Aging Bedürfnisse'
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    features: ['Tiefenreinigung', 'Hydratation', 'Anti-Aging', 'Lichttherapie']
  },
  {
    id: 2,
    title: 'Maria Galland',
    subtitle: 'Luxuriöse Gesichtspflege',
    description: 'Unsere Verwöhnbehandlungen der Maria Galland Gesichtspflege beinhalten Reinigung, Hautanalyse, Peeling, Tiefenreinigung und eine belebende Augen-, und Gesichtspflege.',
    fullDescription: 'Maria Galland Verwöhnbehandlungen mit Hautanalyse, Peeling, Tiefenreinigung, ätherischen Ölen, Wirkstoffkonzentrat und vielem mehr. Eine ganzheitliche Behandlung für Ihre Haut.',
    icon: Heart,
    duration: '90 Min',
    price: 'ab 120€',
    benefits: [
      'Professionelle Hautanalyse',
      'Sanftes Peeling',
      'Tiefenreinigung',
      'Augenbrauenkorrektur',
      'Wirkstoffkonzentrat',
      'Entspannende Massage'
    ],
    process: [
      'Beratung und Hautanalyse',
      'Reinigung und Peeling',
      'Tiefenreinigung',
      'Augenbrauenkorrektur',
      'Wirkstoffkonzentrat',
      'Gesichts-, Hals- und Decolletémassage',
      'Powermaske',
      'Abschlusspflege'
    ],
    suitableFor: [
      'Reife Haut',
      'Trockene Haut',
      'Stressgeplagte Haut',
      'Anti-Aging',
      'Entspannungssuchende',
      'Luxus-Behandlung'
    ],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100',
    features: ['Hautanalyse', 'Peeling', 'Massage', 'Powermaske']
  },
  {
    id: 3,
    title: 'Team Dr. Joseph',
    subtitle: 'High-Tech Naturkosmetik',
    description: 'Alle unsere Verwöhnbehandlungen der Dr Joseph Gesichtspflege beinhalten Reinigung, Hautanalyse, Peeling, Tiefenreinigung und hautspezifische Pflege.',
    fullDescription: 'Unsere Körperpflege schützt und unterstützt Ihre Haut von den Fingerspitzen bis zu den Zehen mit modernster High-Tech Naturkosmetik von Team Dr. Joseph.',
    icon: Zap,
    duration: '75 Min',
    price: 'ab 110€',
    benefits: [
      'High-Tech Naturkosmetik',
      'Hautanalyse',
      'Peeling',
      'Tiefenreinigung',
      'Ätherische Öle',
      'Wirkstoffkonzentrat'
    ],
    process: [
      'Hautanalyse',
      'Reinigung und Peeling',
      'Tiefenreinigung',
      'Ätherische Öle',
      'Wirkstoffkonzentrat',
      'Gesichts-, Hals- und Decolletémassage',
      'Hautspezifische Powermaske',
      'Abschlusspflege'
    ],
    suitableFor: [
      'Naturkosmetik-Liebhaber',
      'Alle Hauttypen',
      'Sensible Haut',
      'Anti-Aging',
      'Nachhaltigkeitsbewusste',
      'High-Tech Fans'
    ],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    features: ['High-Tech', 'Naturkosmetik', 'Wirkstoffe', 'Massage']
  },
  {
    id: 4,
    title: 'Micro-Needling',
    subtitle: 'Intensive Anti-Aging-Behandlung',
    description: 'Unser kosmetisches Micro-Needling ist eine intensive Anti-Aging-Behandlung, die hocheffektive Wirkstoffe in die Haut einschleusen.',
    fullDescription: 'Micro-Needling stimuliert die natürliche Kollagenproduktion der Haut und ermöglicht eine bessere Aufnahme von Wirkstoffen. Ideal für Anti-Aging und Hauterneuerung.',
    icon: Shield,
    duration: '60 Min',
    price: 'ab 95€',
    benefits: [
      'Stimuliert Kollagenproduktion',
      'Verbesserte Wirkstoffaufnahme',
      'Reduziert Falten',
      'Glättet Narben',
      'Strafft die Haut',
      'Minimiert Poren'
    ],
    process: [
      'Hautanalyse',
      'Reinigung und Desinfektion',
      'Micro-Needling Behandlung',
      'Serum-Infusion',
      'Beruhigende Maske',
      'Sonnenschutz'
    ],
    suitableFor: [
      'Reife Haut',
      'Faltenbehandlung',
      'Narbenbehandlung',
      'Anti-Aging',
      'Hauterneuerung',
      'Große Poren'
    ],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    features: ['Anti-Aging', 'Wirkstoffe', 'Hauterneuerung', 'Professionell']
  },
  {
    id: 5,
    title: 'IPL Haarentfernung',
    subtitle: 'Dauerhafte Haarentfernung',
    description: 'Unsere Körperpflege schützt und unterstützt Ihre Haut von den Fingerspitzen bis zu den Zehen mit modernster IPL-Technologie.',
    fullDescription: 'IPL (Intense Pulsed Light) Technologie für dauerhafte Haarentfernung. Schmerzarm, effektiv und für alle Hauttypen geeignet.',
    icon: Eye,
    duration: '30-90 Min',
    price: 'ab 45€',
    benefits: [
      'Dauerhafte Haarentfernung',
      'Schmerzarm',
      'Alle Hauttypen',
      'Schnelle Behandlung',
      'Keine Ausfallzeiten',
      'Langfristig kostengünstig'
    ],
    process: [
      'Beratung und Hautanalyse',
      'Vorbereitung der Haut',
      'IPL-Behandlung',
      'Beruhigende Pflege',
      'Nachsorge-Empfehlungen'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Dunkle Haare',
      'Große Behandlungsflächen',
      'Zeitersparend',
      'Dauerhafte Lösung',
      'Schmerzempfindliche'
    ],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100',
    features: ['Dauerhaft', 'Schmerzarm', 'Effektiv', 'Moderne Technik']
  },
  {
    id: 6,
    title: 'Permanent Makeup',
    subtitle: 'Professionelle Permanent-Makeup',
    description: 'Unsere Profi-Behandlung Permanent Make-up in Berlin für natürliche und langanhaltende Ergebnisse.',
    fullDescription: 'Professionelle Permanent-Makeup Behandlungen für Augenbrauen, Lippen und Eyeliner. Natürliche Ergebnisse, die bis zu 2 Jahre halten.',
    icon: Sparkles,
    duration: '120 Min',
    price: 'ab 280€',
    benefits: [
      'Bis zu 2 Jahre haltbar',
      'Natürliche Ergebnisse',
      'Zeitersparend',
      'Professionelle Ausführung',
      'Individuelle Beratung',
      'Nachbehandlung inklusive'
    ],
    process: [
      'Beratung und Design',
      'Anästhesie',
      'Permanent-Makeup Behandlung',
      'Nachbehandlung',
      'Pflegeanleitung',
      'Kontrolle nach 4-6 Wochen'
    ],
    suitableFor: [
      'Augenbrauen',
      'Lippen',
      'Eyeliner',
      'Zeitersparend',
      'Sportlerinnen',
      'Allergikerinnen'
    ],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'from-rose-50 to-rose-100',
    features: ['Natürlich', 'Langanhaltend', 'Professionell', 'Beratung']
  }
]

export function TreatmentsDetail() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Unsere <span className="gradient-text">Behandlungen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Entdecken Sie unser umfassendes Angebot an professionellen Kosmetikbehandlungen. 
              Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {detailedTreatments.map((treatment, index) => (
              <motion.div
                key={treatment.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center`}>
                        <treatment.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                          {treatment.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                          {treatment.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {treatment.fullDescription}
                    </p>

                    {/* Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Clock className="h-5 w-5 text-primary-600" />
                          <span className="font-semibold text-gray-900">Behandlungsdauer</span>
                        </div>
                        <p className="text-gray-600">{treatment.duration}</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <Star className="h-5 w-5 text-primary-600" />
                          <span className="font-semibold text-gray-900">Preis</span>
                        </div>
                        <p className="text-gray-600">{treatment.price}</p>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Vorteile</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {treatment.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <button className={`btn-primary bg-gradient-to-r ${treatment.color}`}>
                        Termin buchen
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`h-96 bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg relative overflow-hidden`}>
                    <div className="h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${treatment.color} rounded-full flex items-center justify-center`}>
                          <treatment.icon className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{treatment.title}</h3>
                        <p className="text-gray-600">{treatment.subtitle}</p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {treatment.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Bereit für Ihre Traumbehandlung?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Lassen Sie sich von unserem Expertenteam beraten und finden Sie die perfekte 
              Behandlung für Ihre individuellen Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Kostenlose Beratung
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Termin buchen
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
