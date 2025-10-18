'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Clock, Star, CheckCircle, Sparkles, Heart, Eye, ChevronDown, ChevronUp } from 'lucide-react'

// Function to get specific benefits for each treatment
const getTreatmentBenefits = (treatmentName: string) => {
  const benefitsMap: { [key: string]: string[] } = {
    // Gesichtsbehandlungen
    'BeautySkin Klassik': [
      'Professionelle Hautanalyse',
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Intensive Pflege',
      'Entspannende Massage',
      'Abschlusspflege'
    ],
    'BeautySkin Relax': [
      'Entspannende Massage',
      'Beruhigende Pflege',
      'Stressabbau',
      'Wohlbefinden',
      'Tiefenreinigung',
      'Regeneration'
    ],
    'BeautySkin Hautklar': [
      'Intensive Reinigung',
      'Klärende Wirkstoffe',
      'Porenreinigung',
      'Hautklarung',
      'Anti-Bakteriell',
      'Strahlende Haut'
    ],
    'BeautySkin Unreine': [
      'Intensive Reinigung',
      'Entzündungshemmend',
      'Bakterienreduktion',
      'Hautberuhigung',
      'Narbenminderung',
      'Hautregeneration'
    ],
    'BeautySkin Reine Männersache': [
      'Männergerechte Pflege',
      'Intensive Reinigung',
      'Gesichtsmassage',
      'Schutzpflege',
      'Hautstraffung',
      'Anti-Aging'
    ],
    'BeautySkin Deluxe': [
      'Hautanalyse',
      'Tiefenreinigung',
      'Ultraschallpflege',
      'Augenpflege',
      'Premium-Maske',
      'Glow-Finish'
    ],
    'Fruchtsäurepeeling': [
      'Natürliche Fruchtsäuren',
      'Hauterneuerung',
      'Glatte Haut',
      'Strahlender Teint',
      'Anti-Aging',
      'Professionell'
    ],
    // Apparative Behandlungen
    'Aqua Facial Behandlung': [
      'Tiefe Reinigung',
      'Intensive Hydratation',
      'Porenreinigung',
      'Hautstraffung',
      'Glow-Effekt',
      'Schmerzarm'
    ],
    'Skin Oximizer': [
      'Sauerstoffversorgung',
      'Verbesserte Durchblutung',
      'Strahlender Teint',
      'Hautregeneration',
      'Anti-Aging',
      'Energizing'
    ],
    'Micro Needling': [
      'Hauterneuerung',
      'Kollagenbildung',
      'Faltenreduktion',
      'Narbenminderung',
      'Porenverkleinerung',
      'Professionell'
    ],
    'Diamant Mikrodermabrasion': [
      'Glatte Haut',
      'Strahlender Teint',
      'Peeling-Effekt',
      'Hauterneuerung',
      'Professionell',
      'Schmerzarm'
    ],
    'Radiofrequenzbehandlung': [
      'Hautstraffung',
      'Kollagenbildung',
      'Faltenreduktion',
      'Konturierung',
      'Anti-Aging',
      'Langzeitwirkung'
    ],
    // Massagen
    'Nacken-Massage': [
      'Verspannungslösung',
      'Schmerzlinderung',
      'Durchblutungsförderung',
      'Entspannung',
      'Stressabbau',
      'Wohlbefinden'
    ],
    'Entspannungsmassage mit Hot Stone': [
      'Tiefe Entspannung',
      'Wärmeeffekt',
      'Durchblutungsförderung',
      'Stressabbau',
      'Muskelentspannung',
      'Wohlbefinden'
    ],
    'Kopf-Nacken-Rückenmassage': [
      'Ganzheitliche Entspannung',
      'Verspannungslösung',
      'Durchblutungsförderung',
      'Stressabbau',
      'Kopfschmerzlinderung',
      'Wohlbefinden'
    ],
    'Lymphdrainage-Massage': [
      'Entstauung',
      'Entgiftung',
      'Durchblutungsförderung',
      'Schwellungsreduktion',
      'Immunsystemstärkung',
      'Wohlbefinden'
    ]
  }
  
  return benefitsMap[treatmentName] || ['Professionelle Behandlung', 'Individuelle Beratung', 'Hochwertige Produkte', 'Entspannung']
}

// Function to get detailed process steps for each treatment
const getTreatmentProcess = (treatmentName: string) => {
  const processMap: { [key: string]: string[] } = {
    'BeautySkin Klassik': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage: Eine entspannende Massage von Gesicht, Hals und Dekolleté fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
      'LED & Abschlusspflege: LED Skin Light unterstützt die Regeneration der Haut. Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln.'
    ],
    'BeautySkin Deluxe': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell auf Ihre Hautbedürfnisse abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem sanften Enzympeeling vorbereitet, um abgestorbene Hautzellen zu entfernen und die Aufnahmefähigkeit der Haut zu verbessern.',
      'Ausreinigung: Verstopfte Poren und Unreinheiten werden schonend entfernt, um die Haut zu klären und für die Wirkstoffpflege vorzubereiten.',
      'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wird eingearbeitet, um die Haut intensiv zu versorgen und ihre Regeneration zu fördern.',
      'Augenkorrektur & Augenbrauenform: Bei Bedarf werden Augenbrauen in Form gebracht und kleine Korrekturen durchgeführt, um das gepflegte Gesamtbild zu unterstreichen.',
      'Gesicht-, Hals- & Dekolleté-Massage: Eine wohltuende Massage sorgt für Entspannung, fördert die Durchblutung und lässt die Haut praller und vitaler erscheinen.',
      'Maske mit Ultraschall: Eine hochwertige Maske wird mithilfe von Ultraschall tief in die Haut eingearbeitet, um die Wirkstoffaufnahme zu optimieren und das Ergebnis zu intensivieren.',
      'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird eine reichhaltige Pflege aufgetragen, die die Haut schützt und ihr ein strahlendes, frisches Aussehen verleiht.'
    ],
    'BeautySkin Relax': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage Gesicht, Hals, Dekolleté, Arme & Hände: Eine ausgedehnte Massage umfasst Gesicht, Hals, Dekolleté sowie Arme und Hände und sorgt für tiefgehende Entspannung und ein rundum gelöstes Hautgefühl.',
      'Maske & LED Skin Light: Eine passende Maske unterstützt die Hautregeneration und wird durch LED-Lichttherapie intensiviert.',
      'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird die Haut mit einer pflegenden Creme und UV-Schutz versiegelt, während eine spezielle Augenpflege die empfindliche Partie um die Augen gezielt versorgt.'
    ],
    'BeautySkin Hautklar': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Enzympeeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage Gesicht, Hals & Dekolleté: Eine wohltuende Massage fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
      'Maske: Eine passende Maske beruhigt die Haut, unterstützt die Regeneration und verfeinert das Erscheinungsbild.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln und vor äußeren Einflüssen zu schützen.'
    ],
    'BeautySkin Unreine': [
      'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung gezielt auf die Bedürfnisse unreiner Haut abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gereinigt und mit einem Enzympeeling vorbereitet, um überschüssige Hornschüppchen zu lösen und die Poren freizugeben.',
      'Intensive Ausreinigung: Verstopfungen und Unreinheiten werden gründlich entfernt, um die Haut tief zu klären und Unterlagerungen zu reduzieren.',
      'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wirkt talgregulierend und beruhigend auf irritierte Hautbereiche.',
      'Hochfrequenz-Stab: Zur Desinfektion der behandelten Partien wird der Hochfrequenz-Stab eingesetzt, um Entzündungen zu mindern und die Haut zu beruhigen.',
      'LED Skin Light & Maske: LED-Lichttherapie unterstützt die Regeneration und wird mit einer passenden Maske kombiniert, um die Haut zu klären und auszugleichen.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine passende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu stabilisieren.',
      'Hinweis: Bei dieser Behandlung wird ausschließlich mit Microsilver-Produkten gearbeitet.'
    ],
    'BeautySkin Reine Männersache': [
      'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung individuell auf die Bedürfnisse der Männerhaut abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem Enzympeeling vorbereitet, damit abgestorbene Hautzellen gelöst werden und die Poren frei werden.',
      'Ausreinigung: Unreinheiten und Ablagerungen werden sanft, aber gründlich entfernt, um die Haut zu klären und ein frisches Hautgefühl zu schaffen.',
      'Wirkstoffampulle: Eine speziell ausgewählte Ampulle versorgt die Haut mit Feuchtigkeit und regenerierenden Wirkstoffen, die Vitalität und Spannkraft fördern.',
      'Hochfrequenz-Stab: Durch die Anwendung des Hochfrequenz-Stabs wird die Haut desinfiziert, beruhigt und die Durchblutung angeregt.',
      'Gesichtsmassage: Eine entspannende Massage löst Spannungen und sorgt für ein vitalisiertes, erholtes Erscheinungsbild.',
      'Maske: Eine passende Maske rundet die Behandlung ab und verleiht der Haut ein gepflegtes, ausgeglichenes Gefühl.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut vor äußeren Einflüssen zu bewahren.'
    ]
  }
  
  return processMap[treatmentName] || []
}

// Function to get duration for each specific treatment
const getTreatmentDuration = (treatmentName: string, categoryId: number) => {
  if (categoryId === 1) {
    // Gesichtsbehandlung
    const durationMap: { [key: string]: string } = {
      'BeautySkin Klassik': '60 Min',
      'BeautySkin Deluxe': '60 Min',
      'BeautySkin Relax': '60 Min',
      'BeautySkin Hautklar': '45 Min',
      'BeautySkin Unreine': '60 Min',
      'BeautySkin Reine Männersache': '60 Min'
    }
    return durationMap[treatmentName] || '60 Min'
  } else if (categoryId === 2) {
    // Apparative Behandlungen
    const durationMap: { [key: string]: string } = {
      'Aqua Facial Behandlung': '75 Min',
      'Skin Oximizer': '60 Min',
      'Micro Needling': '90 Min',
      'Diamant Mikrodermabrasion': '70 Min',
      'Radiofrequenzbehandlung': '80 Min',
      'Fruchtsäurepeeling': '90 Min'
    }
    return durationMap[treatmentName] || '60 Min'
  } else if (categoryId === 3) {
    // Massagen
    const durationMap: { [key: string]: string } = {
      'Nacken-Massage': '30 Min',
      'Entspannungsmassage mit Hot Stone': '90 Min',
      'Kopf-Nacken-Rückenmassage': '60 Min',
      'Lymphdrainage-Massage': '45 Min'
    }
    return durationMap[treatmentName] || '60 Min'
  }
  return '60 Min'
}

const treatments = [
  {
    id: 1,
    title: 'Gesichtsbehandlung',
    subtitle: 'Professionelle Gesichtspflege',
    description: 'Unsere professionellen Gesichtsbehandlungen für gesunde und strahlende Haut.',
    fullDescription: 'Unsere Gesichtsbehandlungen umfassen eine umfassende Hautanalyse, professionelle Reinigung, sanftes Peeling und intensive Pflege. Wir verwenden hochwertige Produkte und moderne Techniken, um Ihre Haut optimal zu versorgen und zu verwöhnen.',
    icon: Heart,
    duration: '60-90 Min',
    price: 'ab 65€',
    benefits: [
      'Professionelle Hautanalyse',
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Intensive Pflege',
      'Entspannende Massage',
      'Individuelle Beratung'
    ],
    process: [
      'Beratung und Hautanalyse',
      'Reinigung und Peeling',
      'Tiefenreinigung',
      'Gesichtsmassage',
      'Intensive Pflege',
      'Abschlusspflege'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Trockene Haut',
      'Fettige Haut',
      'Mischhaut',
      'Empfindliche Haut',
      'Anti-Aging'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['BeautySkin Klassik', 'BeautySkin Relax', 'BeautySkin Hautklar', 'Deluxe'],
    treatments: [
      {
        name: 'BeautySkin Klassik',
        description: 'Klassische Gesichtsbehandlung mit Reinigung, Peeling und Pflege',
        price: '69€'
      },
      {
        name: 'BeautySkin Deluxe',
        description: 'Premium Gesichtsbehandlung mit exklusiver Pflege - Besonders beliebt!',
        price: '89€'
      },
      {
        name: 'BeautySkin Relax',
        description: 'Entspannende Gesichtsbehandlung mit Massage und beruhigender Pflege',
        price: '75€'
      },
      {
        name: 'BeautySkin Hautklar',
        description: 'Spezielle Behandlung für klare und reine Haut',
        price: '49€'
      },
      {
        name: 'BeautySkin Unreine',
        description: 'Intensive Behandlung für unreine und problematische Haut',
        price: '75€'
      },
      {
        name: 'BeautySkin Reine Männersache',
        description: 'Speziell für Männer entwickelte Gesichtsbehandlung',
        price: '69€'
      }
    ]
  },
  {
    id: 2,
    title: 'Apparative Behandlungen',
    subtitle: 'Moderne Technologie für optimale Ergebnisse',
    description: 'Hochmoderne apparative Behandlungen für intensive Hautverbesserung.',
    fullDescription: 'Unsere apparativen Behandlungen nutzen modernste Technologie für intensive Hautverbesserung. Mit professionellen Geräten erzielen wir optimale Ergebnisse für Ihre Haut.',
    icon: Sparkles,
    duration: '45-90 Min',
    price: 'ab 75€',
    benefits: [
      'Moderne Geräte',
      'Intensive Behandlung',
      'Schnelle Ergebnisse',
      'Schmerzarm',
      'Alle Hauttypen geeignet',
      'Professionelle Ausführung'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Apparative Behandlung',
      'Beruhigende Pflege',
      'Nachsorge',
      'Pflegeanleitung'
    ],
    suitableFor: [
      'Anti-Aging',
      'Hauterneuerung',
      'Faltenbehandlung',
      'Narbenbehandlung',
      'Große Poren',
      'Alle Hauttypen'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Aqua Facial', 'Skin Oximizer', 'Micro Needling', 'Fruchtsäurepeeling'],
    treatments: [
      {
        name: 'Aqua Facial Behandlung',
        description: 'Revolutionäre Wasserbehandlung für tiefe Reinigung und Hydratation',
        price: '95€'
      },
      {
        name: 'Skin Oximizer',
        description: 'Sauerstoffbehandlung für strahlende und gesunde Haut',
        price: '85€'
      },
      {
        name: 'Micro Needling',
        description: 'Minimale Nadelbehandlung für Hauterneuerung und Kollagenbildung',
        price: '120€'
      },
      {
        name: 'Diamant Mikrodermabrasion',
        description: 'Professionelle Diamantbehandlung für glatte Haut',
        price: '90€'
      },
      {
        name: 'Radiofrequenzbehandlung',
        description: 'Wärmeenergie für Straffung und Hautverbesserung',
        price: '110€'
      },
      {
        name: 'Fruchtsäurepeeling',
        description: 'Professionelles Fruchtsäurepeeling für glatte und strahlende Haut',
        price: '90€'
      }
    ]
  },
  {
    id: 3,
    title: 'Massagen',
    subtitle: 'Entspannung und Wohlbefinden',
    description: 'Entspannende Massagen für Körper und Seele.',
    fullDescription: 'Unsere Massagen dienen der Entspannung und dem Wohlbefinden. Sie verbessern die Durchblutung, entspannen die Muskulatur und fördern das allgemeine Wohlbefinden.',
    icon: Heart,
    duration: '30-90 Min',
    price: 'ab 35€',
    benefits: [
      'Entspannung der Muskulatur',
      'Verbesserte Durchblutung',
      'Stressabbau',
      'Wohlbefinden',
      'Verspannungslösung',
      'Regeneration'
    ],
    process: [
      'Beratung',
      'Vorbereitung',
      'Massagebehandlung',
      'Entspannungsphase',
      'Nachpflege',
      'Entspannungstipps'
    ],
    suitableFor: [
      'Verspannte Muskulatur',
      'Stressabbau',
      'Entspannungssuchende',
      'Durchblutungsförderung',
      'Wohlbefinden',
      'Regeneration'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Nacken-Massage', 'Hot Stone', 'Rücken-Massage', 'Lymphdrainage'],
    treatments: [
      {
        name: 'Nacken-Massage',
        description: 'Entspannende Massage für Nacken und Schultern',
        price: '35€'
      },
      {
        name: 'Entspannungsmassage mit Hot Stone',
        description: 'Wohltuende Massage mit warmen Steinen für tiefe Entspannung',
        price: '65€'
      },
      {
        name: 'Kopf-Nacken-Rückenmassage',
        description: 'Umfassende Massage für Kopf, Nacken und Rücken',
        price: '75€'
      },
      {
        name: 'Lymphdrainage-Massage',
        description: 'Spezielle Massage zur Entstauung und Entgiftung',
        price: '55€'
      }
    ]
  },
  {
    id: 4,
    title: 'Dauerhafte Haarentfernung',
    subtitle: 'Ice Diodenlaser für dauerhafte Ergebnisse',
    description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser.',
    fullDescription: 'Unsere dauerhafte Haarentfernung nutzt modernste Ice Diodenlaser-Technologie für langfristige Ergebnisse. Schmerzarm, effektiv und für alle Hauttypen geeignet.',
    icon: Eye,
    duration: '15-60 Min',
    price: 'ab 15€',
    benefits: [
      'Dauerhafte Ergebnisse',
      'Schmerzarm durch Kühlung',
      'Alle Hauttypen',
      'Schnelle Behandlung',
      'Keine Ausfallzeiten',
      'Langfristig kostengünstig'
    ],
    process: [
      'Beratung und Hautanalyse',
      'Vorbereitung der Haut',
      'Ice Diodenlaser-Behandlung',
      'Beruhigende Pflege',
      'Nachsorge-Empfehlungen',
      'Terminplanung'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Dunkle Haare',
      'Große Behandlungsflächen',
      'Zeitersparend',
      'Dauerhafte Lösung',
      'Schmerzempfindliche'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Ice Diodenlaser', 'Dauerhaft', 'Schmerzarm', 'Effektiv'],
    treatments: [
      {
        name: 'Für Frauen',
        description: 'Spezielle Preise für weibliche Kunden',
        price: 'Gesicht komplett 40€, Kinn 15€, Wangen 25€, Hals 25€, Nacken 35€, Schultern 40€, Achseln 35€, Brust 30€, Arme komplett 60€, Unterarm 35€, Hände 20€, Rücken 50€, Bikinizone 45€, Bikizone und Intimbereich, Unterschenkel, Oberschenkel, Beine komplett 99€, Po, Pofalte, Füße 20€'
      },
      {
        name: 'Für Männer',
        description: 'Spezielle Preise für männliche Kunden',
        price: 'Wangen 25€, Brust 60€, Schultern 45€, Achseln 40€, Arme komplett 75€, Unterer Rücken 55€, Rücken 80€, Bauch 65€, Unterschenkel 75€, Oberschenkel 65€, Beine komplett 110€'
      }
    ]
  }
]

export function TreatmentsDetail({ treatmentId }: { treatmentId: number }) {
  const treatment = treatments.find(t => t.id === treatmentId)
  const [expandedTreatments, setExpandedTreatments] = useState<{ [key: number]: boolean }>({})
  
  if (!treatment) {
    return <div>Behandlung nicht gefunden</div>
  }

  const toggleTreatment = (index: number) => {
    setExpandedTreatments(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${treatment.bgColor} via-white ${treatment.bgColor} pt-20 pb-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">{treatment.title}</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {treatment.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatment Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {treatment.id !== 1 && treatment.id !== 2 && treatment.id !== 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Content */}
                <div>
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
                <div>
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
            )}

            {/* Specific Treatments */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Verfügbare Behandlungen
              </h3>
              
              {treatment.id === 1 || treatment.id === 2 || treatment.id === 3 ? (
                // Special layout for Gesichtsbehandlung, Apparative Behandlungen and Massagen - one treatment per row
                <div className="space-y-8">
                  {treatment.treatments.map((subTreatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="grid lg:grid-cols-3 gap-8 items-center">
                        {/* Treatment Info */}
                        <div className="lg:col-span-2">
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-3xl font-bold text-gray-900 mb-3">
                                {subTreatment.name}
                              </h4>
                              <p className="text-lg text-gray-600">
                                {subTreatment.description}
                              </p>
                            </div>

                            {/* Price and Duration */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white/70 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Clock className="h-5 w-5 text-gray-600" />
                                  <span className="font-semibold text-gray-900">Behandlungsdauer</span>
                                </div>
                                <p className="text-gray-600 text-lg font-semibold">
                                  {getTreatmentDuration(subTreatment.name, treatment.id)}
                                </p>
                              </div>
                              <div className="bg-white/70 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-2">
                                  <Star className="h-5 w-5 text-gray-600" />
                                  <span className="font-semibold text-gray-900">Preis</span>
                                </div>
                                <p className="text-gray-600 text-lg font-semibold">
                                  {subTreatment.price}
                                </p>
                              </div>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="text-xl font-bold text-gray-900 mb-4">Vorteile</h5>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {getTreatmentBenefits(subTreatment.name).map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Expandable Treatment Details */}
                            {getTreatmentProcess(subTreatment.name).length > 0 && (
                              <div className="border-t border-gray-200 pt-4">
                                <button
                                  onClick={() => toggleTreatment(index)}
                                  className="flex items-center justify-between w-full text-left hover:text-gray-900 transition-colors"
                                >
                                  <span className="text-lg font-semibold text-gray-800">
                                    Behandlungsablauf
                                  </span>
                                  {expandedTreatments[index] ? (
                                    <ChevronUp className="h-5 w-5 text-gray-600" />
                                  ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-600" />
                                  )}
                                </button>

                                <AnimatePresence>
                                  {expandedTreatments[index] && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-4 space-y-2">
                                        {getTreatmentProcess(subTreatment.name).map((step, stepIndex) => {
                                          const parts = step.split(':')
                                          const hasColon = parts.length > 1
                                          
                                          return (
                                            <div key={stepIndex} className="flex items-start space-x-2">
                                              <span className="text-gray-600 mt-1.5">•</span>
                                              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                                                {hasColon ? (
                                                  <>
                                                    <span className="font-bold">{parts[0]}:</span>
                                                    {parts.slice(1).join(':')}
                                                  </>
                                                ) : (
                                                  step
                                                )}
                                              </p>
                                            </div>
                                          )
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Visual and CTA */}
                        <div className="flex flex-col items-center space-y-6">
                          <div className={`w-32 h-32 bg-gradient-to-br ${treatment.color} rounded-full flex items-center justify-center`}>
                            <treatment.icon className="h-16 w-16 text-white" />
                          </div>
                          <button className={`w-full bg-gradient-to-r ${treatment.color} text-white hover:shadow-lg px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                            Termin buchen
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : treatment.id === 4 ? (
                // Special layout for Haarentfernung
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className={`bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg`}>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Für Frauen</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Gesicht komplett</span>
                          <span className="text-orange-600 font-bold">40€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Kinn</span>
                          <span className="text-orange-600 font-bold">15€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Wangen</span>
                          <span className="text-orange-600 font-bold">25€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Hals</span>
                          <span className="text-orange-600 font-bold">25€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Nacken</span>
                          <span className="text-orange-600 font-bold">35€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Schultern</span>
                          <span className="text-orange-600 font-bold">40€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Achseln</span>
                          <span className="text-orange-600 font-bold">35€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Brust</span>
                          <span className="text-orange-600 font-bold">30€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Arme komplett</span>
                          <span className="text-orange-600 font-bold">60€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Unterarm</span>
                          <span className="text-orange-600 font-bold">35€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Hände</span>
                          <span className="text-orange-600 font-bold">20€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Rücken</span>
                          <span className="text-orange-600 font-bold">50€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Bikinizone</span>
                          <span className="text-orange-600 font-bold">45€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Beine komplett</span>
                          <span className="text-orange-600 font-bold">99€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Füße</span>
                          <span className="text-orange-600 font-bold">20€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg`}>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Für Männer</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Wangen</span>
                          <span className="text-orange-600 font-bold">25€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Brust</span>
                          <span className="text-orange-600 font-bold">60€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Schultern</span>
                          <span className="text-orange-600 font-bold">45€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Achseln</span>
                          <span className="text-orange-600 font-bold">40€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Arme komplett</span>
                          <span className="text-orange-600 font-bold">75€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Rücken</span>
                          <span className="text-orange-600 font-bold">80€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Bauch</span>
                          <span className="text-orange-600 font-bold">65€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Unterschenkel</span>
                          <span className="text-orange-600 font-bold">75€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Oberschenkel</span>
                          <span className="text-orange-600 font-bold">65€</span>
                        </div>
                      </div>
                      <div className="bg-white/70 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 font-medium text-sm">Beine komplett</span>
                          <span className="text-orange-600 font-bold">110€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Standard layout for other treatments
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {treatment.treatments.map((subTreatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${treatment.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {subTreatment.name}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {subTreatment.description}
                          </p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-gray-900">
                            {subTreatment.price}
                          </span>
                        </div>

                        <button className={`w-full bg-gradient-to-r ${treatment.color} text-white hover:shadow-lg px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                          Termin buchen
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r ${treatment.color}`}>
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
              <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Kostenlose Beratung
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Termin buchen
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}