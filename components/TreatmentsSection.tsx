'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Heart, Star, Eye } from 'lucide-react'
import Link from 'next/link'

const treatments = [
  {
    id: 1,
    title: 'Hydrafacial',
    subtitle: 'Hautgesundheit verbessern',
    description: 'Unsere HydraFacial Behandlung wird individuell an Ihren Hauttyp angepasst. Für fettige, trockene oder empfindliche Haut, feine Linien oder Fältchen gibt es unterschiedliche Anwendungen.',
    icon: Sparkles,
    features: ['Tiefenreinigung', 'Hydratation', 'Anti-Aging', 'Lichttherapie'],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    id: 2,
    title: 'Maria Galland',
    subtitle: 'Gesichtspflege',
    description: 'Unsere Verwöhnbehandlungen der Maria Galland Gesichtspflege beinhalten Reinigung, Hautanalyse, Peeling, Tiefenreinigung und eine belebende Augen-, und Gesichtspflege.',
    icon: Heart,
    features: ['Hautanalyse', 'Peeling', 'Massage', 'Powermaske'],
    color: 'from-pink-500 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  },
  {
    id: 3,
    title: 'Team Dr. Joseph',
    subtitle: 'High-Tech Naturkosmetik',
    description: 'Alle unsere Verwöhnbehandlungen der Dr Joseph Gesichtspflege beinhalten Reinigung, Hautanalyse, Peeling, Tiefenreinigung und hautspezifische Pflege.',
    icon: Zap,
    features: ['High-Tech', 'Naturkosmetik', 'Wirkstoffe', 'Massage'],
    color: 'from-green-500 to-green-600',
    bgColor: 'from-green-50 to-green-100'
  },
  {
    id: 4,
    title: 'Micro-Needling',
    subtitle: 'Intensive Anti-Aging-Behandlung',
    description: 'Unser kosmetisches Micro-Needling ist eine intensive Anti-Aging-Behandlung, die hocheffektive Wirkstoffe in die Haut einschleusen.',
    icon: Star,
    features: ['Anti-Aging', 'Wirkstoffe', 'Hauterneuerung', 'Professionell'],
    color: 'from-purple-500 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: 5,
    title: 'IPL Haarentfernung',
    subtitle: 'Dauerhafte Haarentfernung',
    description: 'Unsere Körperpflege schützt und unterstützt Ihre Haut von den Fingerspitzen bis zu den Zehen mit modernster IPL-Technologie.',
    icon: Eye,
    features: ['Dauerhaft', 'Schmerzarm', 'Effektiv', 'Moderne Technik'],
    color: 'from-orange-500 to-orange-600',
    bgColor: 'from-orange-50 to-orange-100'
  },
  {
    id: 6,
    title: 'Permanent Makeup',
    subtitle: 'Profi-Behandlung',
    description: 'Unsere Profi-Behandlung Permanent Make-up in Berlin für natürliche und langanhaltende Ergebnisse.',
    icon: Sparkles,
    features: ['Natürlich', 'Langanhaltend', 'Professionell', 'Beratung'],
    color: 'from-rose-500 to-rose-600',
    bgColor: 'from-rose-50 to-rose-100'
  }
]

export default function TreatmentsSection() {
  return (
    <section className="py-20 bg-gray-50">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <treatment.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {treatment.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-600 mb-4">
                      {treatment.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {treatment.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {treatment.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-white/70 rounded-full text-sm font-medium text-gray-700"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link
                      href="/behandlungen"
                      className={`inline-flex items-center space-x-2 text-white bg-gradient-to-r ${treatment.color} hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 group-hover:scale-105`}
                    >
                      <span>Mehr erfahren</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
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
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Alle Behandlungen entdecken
            </h3>
            <p className="text-gray-600 mb-6">
              Lassen Sie sich von unserem Expertenteam beraten und finden Sie die perfekte Behandlung für Ihre Bedürfnisse.
            </p>
            <Link href="/behandlungen" className="btn-primary inline-flex items-center space-x-2">
              <span>Alle Behandlungen ansehen</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
