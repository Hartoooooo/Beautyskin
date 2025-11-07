'use client'

import { motion } from 'framer-motion'
import { Award, Heart, Star, Users } from 'lucide-react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-20 bg-[#e9dbd2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Über uns</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="aspect-[4/5] relative">
                <Image
                  src="/20251105_0844_Frau%20mit%20Beauty-Logo_remix_01k99ffe3fe06bc09dx1y3bdbz.webp"
                  alt="Raquel Hardel - Gründerin & Kosmetikerin bei BeautySkin"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-[#e9dbd2] rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Erfahrung seit</p>
                  <p className="text-xl font-bold text-gray-900">2018</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Raquel Hardel
              </h3>
              <p className="text-lg text-primary-600 font-medium mb-6">
                Gründerin & Kosmetikerin
              </p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Willkommen bei BeautySkin R&Y, Ihrem persönlichen Rückzugsort in ruhiger Lage im lebendigen Friedrichshain – für Menschen, die Schönheit, Qualität und Entspannung schätzen.
                </p>
                <p>
                  Ich bin Raquel Hardel, gebürtige Peruanerin und seit über 30 Jahren mit Herz und Heimat in Deutschland verwurzelt. Seit mehr als 15 Jahren begleite ich als Kosmetikerin Menschen auf ihrem Weg zu gesunder, strahlender Haut – mit fundiertem Fachwissen, Feingefühl und echter Begeisterung.
                </p>
                <p>
                  Meine Spezialisierung liegt auf hochwertigen Gesichtsbehandlungen und wirkungsvoller Anti-Aging-Kosmetik. Ich arbeite ausschließlich mit den renommierten CNC-Produkten, die für sichtbare Ergebnisse auf höchstem Niveau stehen.
                </p>
                <p className="font-semibold text-gray-900">
                  Was mich besonders macht?
                </p>
                <p>
                  Ich nehme mir Zeit. Für Sie. Für Ihre Haut. Und für ein Erlebnis, das über Kosmetik hinausgeht:
                </p>
                <p>
                  Wohltuende Düfte, sanftes Licht, warme Töne und ein Raum, der zur Ruhe einlädt.
                </p>
                <p>
                  Individuelle Beratung, tiefe Entspannung und spürbare Wirkung – das ist meine Handschrift.
                </p>
                <p>
                  Ich freue mich darauf, Sie persönlich kennenzulernen und Ihnen bei BeautySkin R&Y eine kleine Auszeit voller Luxus und Achtsamkeit zu schenken.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Zertifiziert</h4>
                  <p className="text-sm text-gray-600">Professionelle Ausbildung</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Leidenschaft</h4>
                  <p className="text-sm text-gray-600">Mit Herz & Hingabe</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">350+ Kunden</h4>
                  <p className="text-sm text-gray-600">Zufriedene Stammkunden</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Top Qualität</h4>
                  <p className="text-sm text-gray-600">Premium Produkte</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

