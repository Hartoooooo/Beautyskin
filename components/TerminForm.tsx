'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Sparkles, Eye, Calendar, User, Mail, Phone, MessageSquare, ArrowRight, ArrowLeft, Check, Clock, ChevronDown, ChevronUp, Info } from 'lucide-react'
import { useTreatmentCart } from '@/contexts/TreatmentCartContext'
import { useSearchParams } from 'next/navigation'

interface FormData {
  category: string
  treatments: string[]
  treatmentsByCategory: { [key: string]: string[] }
  firstName: string
  lastName: string
  email: string
  phone: string
  date: string
  time: string
  message: string
}

interface TreatmentDetail {
  name: string
  price: string
  duration: string
  description: string
  benefits: string[]
  process: string[]
}

const treatmentCategories = [
  {
    id: 'gesichtsbehandlung',
    name: 'Gesichtsbehandlung',
    icon: Heart,
    color: 'from-gray-600 to-gray-700',
    treatments: [
      { 
        name: 'BeautySkin Klassik', 
        price: '69€', 
        duration: '60 Min', 
        description: 'Erleben Sie eine tiefenreinigende Klassik-Behandlung, die Hautpflege und Entspannung harmonisch vereint.',
        benefits: ['Professionelle Hautanalyse', 'Tiefenreinigung', 'Sanftes Peeling', 'Intensive Pflege', 'Entspannende Massage', 'Abschlusspflege'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
          'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
          'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
          'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
          'Massage: Eine entspannende Massage von Gesicht, Hals und Dekolleté fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
          'LED & Abschlusspflege: LED Skin Light unterstützt die Regeneration der Haut. Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln.'
        ]
      },
      { 
        name: 'BeautySkin Deluxe', 
        price: '89€', 
        duration: '60 Min', 
        description: 'Erleben Sie eine luxuriöse Gesichtsbehandlung, die intensive Pflege, sichtbare Hautverfeinerung und pure Entspannung miteinander verbindet.',
        benefits: ['Hautanalyse', 'Tiefenreinigung', 'Ultraschallpflege', 'Augenpflege', 'Premium-Maske', 'Glow-Finish'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell auf Ihre Hautbedürfnisse abzustimmen.',
          'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem sanften Enzympeeling vorbereitet, um abgestorbene Hautzellen zu entfernen und die Aufnahmefähigkeit der Haut zu verbessern.',
          'Ausreinigung: Verstopfte Poren und Unreinheiten werden schonend entfernt, um die Haut zu klären und für die Wirkstoffpflege vorzubereiten.',
          'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wird eingearbeitet, um die Haut intensiv zu versorgen und ihre Regeneration zu fördern.',
          'Augenkorrektur & Augenbrauenform: Bei Bedarf werden Augenbrauen in Form gebracht und kleine Korrekturen durchgeführt, um das gepflegte Gesamtbild zu unterstreichen.',
          'Gesicht-, Hals- & Dekolleté-Massage: Eine wohltuende Massage sorgt für Entspannung, fördert die Durchblutung und lässt die Haut praller und vitaler erscheinen.',
          'Maske mit Ultraschall: Eine hochwertige Maske wird mithilfe von Ultraschall tief in die Haut eingearbeitet, um die Wirkstoffaufnahme zu optimieren und das Ergebnis zu intensivieren.',
          'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird eine reichhaltige Pflege aufgetragen, die die Haut schützt und ihr ein strahlendes, frisches Aussehen verleiht.'
        ]
      },
      { 
        name: 'BeautySkin Relax', 
        price: '75€', 
        duration: '60 Min', 
        description: 'Genießen Sie ein intensives Pflege- und Massage-Erlebnis für vollkommene Hautentspannung und spürbare Regeneration.',
        benefits: ['Entspannende Massage', 'Beruhigende Pflege', 'Stressabbau', 'Wohlbefinden', 'Tiefenreinigung', 'Regeneration'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
          'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
          'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
          'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
          'Massage Gesicht, Hals, Dekolleté, Arme & Hände: Eine ausgedehnte Massage umfasst Gesicht, Hals, Dekolleté sowie Arme und Hände und sorgt für tiefgehende Entspannung und ein rundum gelöstes Hautgefühl.',
          'Maske & LED Skin Light: Eine passende Maske unterstützt die Hautregeneration und wird durch LED-Lichttherapie intensiviert.',
          'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird die Haut mit einer pflegenden Creme und UV-Schutz versiegelt, während eine spezielle Augenpflege die empfindliche Partie um die Augen gezielt versorgt.'
        ]
      },
      { 
        name: 'BeautySkin Hautklar', 
        price: '49€', 
        duration: '45 Min', 
        description: 'Erleben Sie eine klärende Behandlung, die die Haut tiefenreinigt und das Hautbild sichtbar verfeinert.',
        benefits: ['Intensive Reinigung', 'Klärende Wirkstoffe', 'Porenreinigung', 'Hautklarung', 'Anti-Bakteriell', 'Strahlende Haut'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
          'Reinigung & Enzympeeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und Wirkstoffe besser eindringen können.',
          'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
          'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
          'Massage Gesicht, Hals & Dekolleté: Eine wohltuende Massage fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
          'Maske: Eine passende Maske beruhigt die Haut, unterstützt die Regeneration und verfeinert das Erscheinungsbild.',
          'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln und vor äußeren Einflüssen zu schützen.'
        ]
      },
      { 
        name: 'BeautySkin Unreine', 
        price: '75€', 
        duration: '60 Min', 
        description: 'Erleben Sie eine intensiv klärende Behandlung, die Unreinheiten vermindert und das Hautbild rein und ausgeglichen erscheinen lässt.',
        benefits: ['Intensive Reinigung', 'Entzündungshemmend', 'Bakterienreduktion', 'Hautberuhigung', 'Narbenminderung', 'Hautregeneration'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung gezielt auf die Bedürfnisse unreiner Haut abzustimmen.',
          'Reinigung & Enzympeeling: Die Haut wird gereinigt und mit einem Enzympeeling vorbereitet, um überschüssige Hornschüppchen zu lösen und die Poren freizugeben.',
          'Intensive Ausreinigung: Verstopfungen und Unreinheiten werden gründlich entfernt, um die Haut tief zu klären und Unterlagerungen zu reduzieren.',
          'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wirkt talgregulierend und beruhigend auf irritierte Hautbereiche.',
          'Hochfrequenz-Stab: Zur Desinfektion der behandelten Partien wird der Hochfrequenz-Stab eingesetzt, um Entzündungen zu mindern und die Haut zu beruhigen.',
          'LED Skin Light & Maske: LED-Lichttherapie unterstützt die Regeneration und wird mit einer passenden Maske kombiniert, um die Haut zu klären und auszugleichen.',
          'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine passende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu stabilisieren.',
          'Hinweis: Bei dieser Behandlung wird ausschließlich mit Microsilver-Produkten gearbeitet.'
        ]
      },
      { 
        name: 'BeautySkin Reine Männersache', 
        price: '69€', 
        duration: '60 Min', 
        description: 'Erleben Sie eine tiefenreinigende Gesichtsbehandlung, die speziell auf die Bedürfnisse männlicher Haut abgestimmt ist.',
        benefits: ['Männergerechte Pflege', 'Intensive Reinigung', 'Gesichtsmassage', 'Schutzpflege', 'Hautstraffung', 'Anti-Aging'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung individuell auf die Bedürfnisse der Männerhaut abzustimmen.',
          'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem Enzympeeling vorbereitet, damit abgestorbene Hautzellen gelöst werden und die Poren frei werden.',
          'Ausreinigung: Unreinheiten und Ablagerungen werden sanft, aber gründlich entfernt, um die Haut zu klären und ein frisches Hautgefühl zu schaffen.',
          'Wirkstoffampulle: Eine speziell ausgewählte Ampulle versorgt die Haut mit Feuchtigkeit und regenerierenden Wirkstoffen, die Vitalität und Spannkraft fördern.',
          'Hochfrequenz-Stab: Durch die Anwendung des Hochfrequenz-Stabs wird die Haut desinfiziert, beruhigt und die Durchblutung angeregt.',
          'Gesichtsmassage: Eine entspannende Massage löst Spannungen und sorgt für ein vitalisiertes, erholtes Erscheinungsbild.',
          'Maske: Eine passende Maske rundet die Behandlung ab und verleiht der Haut ein gepflegtes, ausgeglichenes Gefühl.',
          'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut vor äußeren Einflüssen zu bewahren.'
        ]
      },
      { 
        name: 'AHA Fruchtsäurepeeling', 
        price: '69€', 
        duration: '45 Min', 
        description: 'Erleben Sie eine hautverfeinernde Gesichtsbehandlung mit hochwirksamen Fruchtsäuren, die die Hautstruktur glätten, Poren verfeinern und das Hautbild sichtbar verbessern.',
        benefits: ['Porenverfeinerung', 'Faltenminderung', 'Pigmentausgleich', 'Regeneration', 'Zellaktivierung', 'Hautglättung'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um die Fruchtsäurekonzentration individuell auf Ihre Haut abzustimmen.',
          'Reinigung & Vorbereitung: Die Haut wird gründlich gereinigt und vorbereitet, damit die Fruchtsäure ihre volle Wirkung entfalten kann.',
          'AHA Fruchtsäurepeeling: Die dermato-kosmetischen Fruchtsäuren entfernen Verhornungen, verfeinern die Poren und mildern Falten sowie Pigmentstörungen. Gleichzeitig wird die Zellerneuerung aktiviert und die Bildung von körpereigenem Kollagen und Elastin angeregt.',
          'Wirkstoffampulle & Maske: Nach dem Peeling wird eine regenerierende Ampulle aufgetragen, gefolgt von einer beruhigenden Maske, um die Haut zu pflegen und zu stabilisieren.',
          'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu bewahren.'
        ]
      },
      { 
        name: 'Kräuter-Peeling (Herbs2Peel)', 
        price: '99€', 
        duration: '60 Min', 
        description: 'Erleben Sie ein natürliches, professionelles Kräuter-Peeling zur Regeneration und Korrektur der Haut – individuell abgestimmt auf Ihren Hauttyp.',
        benefits: ['Natürliche Regeneration', 'Hauterneuerung', 'Porenverfeinerung', 'Zellaktivierung', 'Gleichmäßiger Teint', 'Strahlende Frische'],
        process: [
          'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um die Kräutermischung optimal auf die individuellen Hautbedürfnisse abzustimmen.',
          'Reinigung & Vorbereitung: Die Haut wird gründlich gereinigt, damit die natürlichen Kräuterwirkstoffe optimal aufgenommen werden können.',
          'Kräuter-Peeling: Das Kräuterpeeling wird sanft einmassiert, wodurch die Hautregeneration aktiviert, das Hautbild verfeinert und die Zellerneuerung gefördert wird.',
          'Maske & Wirkstoffpflege: Eine pflegende Maske beruhigt die Haut, während eine Wirkstoffpflege Feuchtigkeit spendet und das Ergebnis unterstützt.',
          'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und den Erneuerungsprozess zu stabilisieren.'
        ]
      }
    ]
  },
  {
    id: 'apparative',
    name: 'Apparative Behandlungen',
    icon: Sparkles,
    color: 'from-gray-600 to-gray-700',
    treatments: [
      { 
        name: 'Aqua Facial Behandlung', 
        price: '79€', 
        duration: '60 Min', 
        description: 'Revolutionäre Aqua Facial Behandlung für tiefe Reinigung und intensive Hydratation der Haut.',
        benefits: ['Tiefe Reinigung', 'Intensive Hydratation', 'Porenreinigung', 'Hautstraffung', 'Glow-Effekt', 'Schmerzarm'],
        process: ['Hautanalyse', 'Vorbereitung', 'Aqua Facial Behandlung', 'Hydratation', 'Beruhigende Pflege', 'Abschlusspflege']
      },
      { 
        name: 'Skin Oximizer', 
        price: '99€', 
        duration: '60 Min', 
        description: 'Moderne Sauerstoffbehandlung für strahlende und gesunde Haut mit verbesserter Durchblutung.',
        benefits: ['Sauerstoffversorgung', 'Verbesserte Durchblutung', 'Strahlender Teint', 'Hautregeneration', 'Anti-Aging', 'Energizing'],
        process: ['Hautanalyse', 'Vorbereitung', 'Sauerstoffbehandlung', 'Durchblutungsförderung', 'Regenerative Pflege', 'Schutzpflege']
      },
      { 
        name: 'Microneedling mit Hyaluronsäure', 
        price: '99€', 
        duration: '60 Min', 
        description: 'Professionelles Microneedling für Hauterneuerung und Kollagenbildung mit minimalen Nadeln und Hyaluronsäure.',
        benefits: ['Hauterneuerung', 'Kollagenbildung', 'Faltenreduktion', 'Narbenminderung', 'Porenverkleinerung', 'Professionell'],
        process: ['Hautanalyse', 'Vorbereitung', 'Microneedling', 'Hyaluronsäure-Infusion', 'Beruhigende Pflege', 'Nachsorge']
      },
      { 
        name: 'Microneedling mit Exosomen / PDRN', 
        price: '125€', 
        duration: '60 Min', 
        description: 'Professionelles Microneedling für Hauterneuerung und Kollagenbildung mit minimalen Nadeln und Exosomen oder PDRN.',
        benefits: ['Hauterneuerung', 'Kollagenbildung', 'Faltenreduktion', 'Narbenminderung', 'Porenverkleinerung', 'Professionell'],
        process: ['Hautanalyse', 'Vorbereitung', 'Microneedling', 'Exosomen/PDRN-Infusion', 'Beruhigende Pflege', 'Nachsorge']
      },
      { 
        name: 'Microdermabrasion', 
        price: '69€', 
        duration: '60 Min', 
        description: 'Die Microdermabrasion ist eine sanfte, aber effektive Methode zur Hauterneuerung. Mit feinen Diamantaufsätzen werden abgestorbene Hautzellen abgetragen, wodurch die Haut glatter, klarer und aufnahmefähiger für Wirkstoffe wird. Diese mechanische Tiefenbehandlung regt die Zellerneuerung an und verfeinert das Hautbild sichtbar.',
        benefits: ['Glatte Haut', 'Strahlender Teint', 'Peeling-Effekt', 'Hauterneuerung', 'Professionell', 'Schmerzarm'],
        process: ['Hautanalyse', 'Vorbereitung', 'Microdermabrasion', 'Reinigung', 'Beruhigende Pflege', 'Schutzpflege']
      },
      { 
        name: 'Radiofrequenzbehandlung', 
        price: '75€', 
        duration: '60 Min', 
        description: 'Moderne Radiofrequenzbehandlung für Hautstraffung und -verbesserung durch kontrollierte Wärmeenergie.',
        benefits: ['Hautstraffung', 'Kollagenbildung', 'Faltenreduktion', 'Konturierung', 'Anti-Aging', 'Langzeitwirkung'],
        process: ['Hautanalyse', 'Vorbereitung', 'Radiofrequenzbehandlung', 'Kühlung', 'Beruhigende Pflege', 'Nachsorge']
      }
    ]
  },
  {
    id: 'massagen',
    name: 'Massagen',
    icon: Heart,
    color: 'from-gray-600 to-gray-700',
    treatments: [
      { 
        name: 'Nacken-Massage', 
        price: '25€', 
        duration: '15 Min', 
        description: 'Eine gezielte Massage zur Lockerung der Nacken- und Schulterpartie. Durch sanften Druck und kreisende Bewegungen werden Verspannungen gelöst.',
        benefits: ['Verspannungslösung', 'Schmerzlinderung', 'Durchblutungsförderung', 'Stressabbau', 'Beweglichkeit', 'Schnelle Entlastung'],
        process: ['Beratung', 'Vorbereitung', 'Nacken-Massage', 'Schultermassage', 'Entspannungsphase', 'Nachpflege']
      },
      { 
        name: 'Entspannungsmassage mit Hot Stone', 
        price: '59€', 
        duration: '45 Min', 
        description: 'Erleben Sie pure Entspannung und wohltuende Wärme für Körper und Geist. Die Hot Stone Massage kombiniert rhythmische Bewegungen mit warmen Basaltsteinen.',
        benefits: ['Muskelentspannung', 'Wärmetherapie', 'Stressabbau', 'Durchblutungsförderung', 'Wohlbefinden', 'Pflegendes Öl'],
        process: ['Beratung', 'Vorbereitung', 'Hot Stone Massage', 'Entspannungsphase', 'Nachpflege', 'Entspannungstipps']
      },
      { 
        name: 'Kopf-Nacken-Rückenmassage', 
        price: '39€', 
        duration: '30 Min', 
        description: 'Diese Massage löst gezielt muskuläre Spannungen im Nacken-, Schulter- und Rückenbereich durch sanfte Bewegungen und warmes Öl.',
        benefits: ['Muskelentspannung', 'Stressabbau', 'Schmerzlinderung', 'Durchblutungsförderung', 'Kopffreiheit', 'Wohlbefinden'],
        process: ['Beratung', 'Vorbereitung', 'Kopfmassage', 'Nackenmassage', 'Rückenmassage', 'Entspannungsphase']
      }
    ]
  },
  {
    id: 'haarentfernung',
    name: 'Dauerhafte Haarentfernung',
    icon: Eye,
    color: 'from-gray-600 to-gray-700',
    treatments: [
      { 
        name: 'Gesicht komplett', 
        price: '40€', 
        duration: '20 Min', 
        description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser für das gesamte Gesicht.',
        benefits: ['Dauerhafte Ergebnisse', 'Schmerzarm durch Kühlung', 'Alle Hauttypen', 'Schnelle Behandlung', 'Keine Ausfallzeiten', 'Langfristig kostengünstig'],
        process: ['Beratung und Hautanalyse', 'Vorbereitung der Haut', 'Ice Diodenlaser-Behandlung', 'Beruhigende Pflege', 'Nachsorge-Empfehlungen', 'Terminplanung']
      },
      { 
        name: 'Kinn', 
        price: '15€', 
        duration: '10 Min', 
        description: 'Ice Diodenlaser-Behandlung für dauerhaft glatte Haut am Kinn.',
        benefits: ['Dauerhafte Ergebnisse', 'Schmerzarm', 'Präzise', 'Schnell', 'Effektiv', 'Langfristig kostengünstig'],
        process: ['Hautanalyse', 'Vorbereitung', 'Ice Diodenlaser-Behandlung', 'Beruhigende Pflege', 'Nachsorge-Empfehlungen', 'Folgetermin']
      },
      { 
        name: 'Wangen', 
        price: '25€', 
        duration: '15 Min', 
        description: 'Ice Diodenlaser-Behandlung für glatte Wangen.',
        benefits: ['Dauerhafte Ergebnisse', 'Schmerzarm', 'Alle Hauttypen', 'Präzise', 'Effektiv', 'Zeitsparend'],
        process: ['Hautanalyse', 'Vorbereitung', 'Ice Diodenlaser-Behandlung', 'Beruhigende Pflege', 'Nachsorge-Empfehlungen', 'Folgetermin']
      },
      { 
        name: 'Achseln', 
        price: '35€', 
        duration: '15 Min', 
        description: 'Ice Diodenlaser für dauerhaft glatte Achseln.',
        benefits: ['Dauerhafte Ergebnisse', 'Schmerzarm', 'Keine Rasur mehr', 'Schnell', 'Effektiv', 'Hautschonend'],
        process: ['Hautanalyse', 'Vorbereitung', 'Ice Diodenlaser-Behandlung', 'Beruhigende Pflege', 'Nachsorge-Empfehlungen', 'Folgetermin']
      },
      { 
        name: 'Beine komplett', 
        price: '99€', 
        duration: '60 Min', 
        description: 'Ice Diodenlaser-Behandlung für dauerhaft glatte Beine.',
        benefits: ['Dauerhafte Ergebnisse', 'Keine Rasur mehr', 'Glatte Haut', 'Zeitsparend', 'Langfristig günstig', 'Hautschonend'],
        process: ['Hautanalyse', 'Vorbereitung', 'Ice Diodenlaser-Behandlung', 'Beruhigende Pflege', 'Nachsorge-Empfehlungen', 'Folgetermin']
      },
      { 
        name: 'Weitere Bereiche', 
        price: 'Auf Anfrage', 
        duration: 'Variabel', 
        description: 'Individuelle Bereiche können gerne angefragt werden. Wir beraten Sie umfassend zu den Möglichkeiten.',
        benefits: ['Individuelle Beratung', 'Maßgeschneidert', 'Alle Körperbereiche', 'Professionell', 'Dauerhafte Lösung', 'Flexible Termine'],
        process: ['Ausführliche Beratung', 'Hautanalyse', 'Individuelle Planung', 'Ice Diodenlaser-Behandlung', 'Nachsorge', 'Terminplanung']
      }
    ]
  },
  {
    id: 'augenbrauen',
    name: 'Augenbrauenkorrektur',
    icon: Eye,
    color: 'from-gray-600 to-gray-700',
    treatments: [
      { 
        name: 'Augenbrauenkorrektur (Zupfen/Waxing)', 
        price: '15€', 
        duration: '15 Min', 
        description: 'Professionelle Formgebung Ihrer Augenbrauen durch Zupfen oder Waxing, individuell auf Ihre Gesichtsform abgestimmt.',
        benefits: ['Individuelle Formgebung', 'Präzise Arbeit', 'Gesichtsangepasst', 'Definition', 'Frischer Ausdruck', 'Professionell'],
        process: ['Beratung zur optimalen Augenbrauenform', 'Anpassung an Ihre Gesichtsform', 'Präzises Zupfen oder Waxing', 'Beruhigende Pflege']
      },
      { 
        name: 'Augenbrauen färben', 
        price: '15€', 
        duration: '15 Min', 
        description: 'Professionelles Färben der Augenbrauen für mehr Definition und Ausdruckskraft.',
        benefits: ['Intensive Farbe', 'Mehr Definition', 'Ausdrucksstärke', 'Langanhaltend', 'Natürliches Ergebnis', 'Professionell'],
        process: ['Farbberatung', 'Auswahl der passenden Farbe', 'Professionelles Färben', 'Einwirkzeit', 'Sanfte Reinigung']
      },
      { 
        name: 'Wimpern färben', 
        price: '15€', 
        duration: '15 Min', 
        description: 'Professionelles Färben der Wimpern für einen natürlich intensiven Augenaufschlag ohne Mascara.',
        benefits: ['Intensive Farbe', 'Ohne Mascara', 'Natürlicher Look', 'Langanhaltend', 'Wasserfest', 'Zeitersparnis'],
        process: ['Farbberatung', 'Augenschutz', 'Professionelles Färben', 'Einwirkzeit', 'Sanfte Reinigung']
      },
      { 
        name: 'Kombipaket Augenbrauen & Wimpern', 
        price: '40€', 
        duration: '30 Min', 
        description: 'Komplettpaket: Augenbrauenkorrektur durch Zupfen und Färben von Augenbrauen und Wimpern für einen perfekt abgestimmten Look.',
        benefits: ['Komplettbehandlung', 'Perfekte Abstimmung', 'Zeitersparnis', 'Preisvorteil', 'Ausdrucksstark', 'Professionell'],
        process: ['Umfassende Beratung', 'Augenbrauenformung durch Zupfen', 'Farbauswahl', 'Färben von Augenbrauen und Wimpern', 'Pflegende Abschlussbehandlung']
      }
    ]
  }
]

export default function TerminForm() {
  const searchParams = useSearchParams()
  const { selectedTreatments, clearTreatments } = useTreatmentCart()
  const skipToStep3 = searchParams.get('skip') === '3'
  
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    category: '',
    treatments: [],
    treatmentsByCategory: {},
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [expandedTreatment, setExpandedTreatment] = useState<number | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)

  // Behandlungen aus Cart laden und direkt zu Step 3 springen
  useEffect(() => {
    if (skipToStep3 && selectedTreatments.length > 0) {
      // Gruppiere Behandlungen nach Kategorie basierend auf dem Namen
      const treatmentsByCategory: { [key: string]: string[] } = {}
      
      selectedTreatments.forEach(treatment => {
        // Finde die passende Kategorie für diese Behandlung
        for (const category of treatmentCategories) {
          const matchingTreatment = category.treatments.find(t => t.name === treatment.name)
          if (matchingTreatment) {
            if (!treatmentsByCategory[category.id]) {
              treatmentsByCategory[category.id] = []
            }
            treatmentsByCategory[category.id].push(treatment.name)
            break
          }
        }
      })

      // Setze die erste Kategorie als aktive Kategorie
      const firstCategory = Object.keys(treatmentsByCategory)[0]
      if (firstCategory) {
        setFormData(prev => ({
          ...prev,
          category: firstCategory,
          treatments: treatmentsByCategory[firstCategory] || [],
          treatmentsByCategory: treatmentsByCategory
        }))
        setStep(3)
      }
    }
  }, [skipToStep3, selectedTreatments])

  const selectedCategory = treatmentCategories.find(cat => cat.id === formData.category)

  // Hole gespeicherte Behandlungen für eine Kategorie
  const getTreatmentsForCategory = (categoryId: string) => {
    return formData.treatmentsByCategory[categoryId] || []
  }

  // Prüfe, ob mindestens eine Behandlung ausgewählt ist
  const hasAnySelectedTreatments = () => {
    return Object.values(formData.treatmentsByCategory).some(treatments => treatments.length > 0)
  }

  // Hole alle ausgewählten Behandlungen aus allen Kategorien
  const getAllSelectedTreatments = () => {
    const allTreatments: Array<{ name: string; categoryId: string; categoryName: string }> = []
    
    Object.keys(formData.treatmentsByCategory).forEach(categoryId => {
      const treatments = formData.treatmentsByCategory[categoryId]
      const category = treatmentCategories.find(cat => cat.id === categoryId)
      
      treatments.forEach(treatmentName => {
        allTreatments.push({
          name: treatmentName,
          categoryId: categoryId,
          categoryName: category?.name || ''
        })
      })
    })
    
    return allTreatments
  }

  // Berechne die Gesamtdauer aller ausgewählten Behandlungen aus allen Kategorien
  const getTotalDuration = () => {
    let totalMinutes = 0
    
    Object.keys(formData.treatmentsByCategory).forEach(categoryId => {
      const treatments = formData.treatmentsByCategory[categoryId]
      const category = treatmentCategories.find(cat => cat.id === categoryId)
      
      if (category) {
        treatments.forEach(treatmentName => {
          const treatment = category.treatments.find(t => t.name === treatmentName)
          if (treatment) {
            const durationMatch = treatment.duration.match(/(\d+)/)
            if (durationMatch) {
              totalMinutes += parseInt(durationMatch[1])
            }
          }
        })
      }
    })
    
    return totalMinutes
  }

  // Generiere verfügbare Zeitslots basierend auf Datum und Gesamtdauer
  const getAvailableTimeSlots = () => {
    if (!formData.date) return []
    
    const selectedDate = new Date(formData.date)
    const dayOfWeek = selectedDate.getDay() // 0 = Sonntag, 6 = Samstag
    
    // Sonntag geschlossen
    if (dayOfWeek === 0) return []
    
    // Öffnungszeiten
    const openTime = 10 // 10:00
    const closeTime = dayOfWeek === 6 ? 15 : 18 // Samstag bis 15:00, sonst bis 18:00
    
    const totalDuration = getTotalDuration()
    const slots: string[] = []
    
    // Bestimme Slot-Intervall basierend auf den ausgewählten Kategorien
    // Wenn mindestens eine stündliche Kategorie dabei ist, verwende 60 Min Interval
    const hasHourlyCategory = Object.keys(formData.treatmentsByCategory).some(categoryId => 
      categoryId === 'gesichtsbehandlung' || 
      categoryId === 'apparative' || 
      categoryId === 'massagen'
    )
    const interval = hasHourlyCategory ? 60 : 30
    
    // Generiere Slots
    for (let hour = openTime; hour < closeTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const slotTime = hour + minute / 60
        const endTime = slotTime + totalDuration / 60
        
        // Nur Slots anzeigen, bei denen die Behandlung vor Geschäftsschluss endet
        if (endTime <= closeTime) {
          const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
          slots.push(timeString)
        }
      }
    }
    
    return slots
  }

  const availableTimeSlots = getAvailableTimeSlots()

  const handleCategorySelect = (categoryId: string) => {
    // Lade zuvor gespeicherte Behandlungen für diese Kategorie
    const savedTreatments = formData.treatmentsByCategory[categoryId] || []
    setFormData({ 
      ...formData, 
      category: categoryId, 
      treatments: savedTreatments 
    })
    setStep(2)
  }

  const handleTreatmentToggle = (treatmentName: string) => {
    const currentTreatments = formData.treatments
    const newTreatments = currentTreatments.includes(treatmentName)
      ? currentTreatments.filter(t => t !== treatmentName)
      : [...currentTreatments, treatmentName]
    
    // Speichere die Behandlungen für die aktuelle Kategorie
    const updatedTreatmentsByCategory = {
      ...formData.treatmentsByCategory,
      [formData.category]: newTreatments
    }
    
    setFormData({
      ...formData,
      treatments: newTreatments,
      treatmentsByCategory: updatedTreatmentsByCategory
    })
  }

  const toggleExpanded = (index: number) => {
    setExpandedTreatment(expandedTreatment === index ? null : index)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const form = e.currentTarget as HTMLFormElement
    const formDataToSend = new FormData(form)
    
    try {
      // Sende das Formular an FormSubmit
      const response = await fetch('https://formsubmit.co/ajax/hartmanntimon@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        // Erfolgreich abgesendet
        setSubmitted(true)
      } else {
        // Fehler beim Absenden
        alert('Es gab einen Fehler beim Absenden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
      }
    } catch (error) {
      // Fehler beim Absenden
      console.error('Fehler beim Absenden des Formulars:', error)
      alert('Es gab einen Fehler beim Absenden Ihrer Anfrage. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.')
    }
  }

  const resetForm = () => {
    setFormData({
      category: '',
      treatments: [],
      treatmentsByCategory: {},
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      message: ''
    })
    setStep(1)
    setSubmitted(false)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-[#e9dbd2] to-gray-50 pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-apple">
              Termin <span className="gradient-text">anfragen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-apple">
              Wählen Sie Ihre gewünschte Behandlung und teilen Sie uns Ihren Wunschtermin mit. 
              Wir melden uns schnellstmöglich bei Ihnen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#e9dbd2]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <>
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex items-center justify-center space-x-4">
                  {[
                    { number: 1, label: 'Kategorie' },
                    { number: 2, label: 'Behandlung' },
                    { number: 3, label: 'Details' }
                  ].map((stepItem, index) => (
                    <div key={stepItem.number} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                          step >= stepItem.number 
                            ? 'bg-[#454545] text-white' 
                            : 'bg-[#454545]/30 text-[#454545]'
                        }`}>
                          {step > stepItem.number ? <Check className="h-6 w-6" /> : stepItem.number}
                        </div>
                        <p className="text-sm text-gray-600 font-medium mt-2">{stepItem.label}</p>
                      </div>
                      {stepItem.number < 3 && (
                        <div className={`w-16 h-1 mx-2 mb-6 transition-all duration-300 ${
                          step > stepItem.number ? 'bg-[#454545]' : 'bg-[#454545]/30'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {/* Step 1: Category Selection */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                      Wählen Sie eine Behandlungskategorie
                    </h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {treatmentCategories.map((category) => {
                        const selectedCount = getTreatmentsForCategory(category.id).length
                        const selectedTreatments = getTreatmentsForCategory(category.id)
                        
                        return (
                          <motion.button
                            key={category.id}
                            onClick={() => handleCategorySelect(category.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative bg-gradient-to-br ${category.id === formData.category ? 'ring-4 ring-gray-300' : ''} from-gray-50 to-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-left`}
                          >
                            {selectedCount > 0 && (
                              <div 
                                className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group/badge z-10"
                                onMouseEnter={(e) => {
                                  e.stopPropagation()
                                  setHoveredCategory(category.id)
                                }}
                                onMouseLeave={(e) => {
                                  e.stopPropagation()
                                  setHoveredCategory(null)
                                }}
                              >
                                <span className="text-white font-bold text-sm">{selectedCount}</span>
                                
                                {/* Tooltip */}
                                {hoveredCategory === category.id && (
                                  <div className="absolute top-12 right-0 w-64 bg-white rounded-xl shadow-2xl p-4 border-2 border-green-500 z-50">
                                    <div className="absolute -top-2 right-3 w-4 h-4 bg-white border-l-2 border-t-2 border-green-500 transform rotate-45"></div>
                                    <h4 className="font-bold text-gray-900 mb-2 text-sm">Ausgewählte Behandlungen:</h4>
                                    <ul className="space-y-1">
                                      {selectedTreatments.map((treatment, idx) => (
                                        <li key={idx} className="text-xs text-gray-700 flex items-start">
                                          <Check className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                                          <span>{treatment}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            )}
                            
                            <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
                              <category.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {category.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {category.treatments.length} Behandlungen verfügbar
                            </p>
                          </motion.button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Treatment Selection */}
                {step === 2 && selectedCategory && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
                      Wählen Sie Ihre Behandlung(en)
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                      Sie können mehrere Behandlungen auswählen
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {selectedCategory.treatments.map((treatment, index) => (
                        <div key={treatment.name} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg overflow-hidden">
                          <div className="flex items-center justify-between p-6">
                            <button
                              onClick={() => handleTreatmentToggle(treatment.name)}
                              className="flex-1 flex items-center justify-between text-left group"
                            >
                              <div className="flex items-center space-x-4">
                                {formData.treatments.includes(treatment.name) && (
                                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="h-5 w-5 text-white" />
                                  </div>
                                )}
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                                    {treatment.name}
                                  </h3>
                                  <div className="flex items-center space-x-4 mt-1">
                                    <span className="text-sm text-gray-600 flex items-center space-x-1">
                                      <Clock className="h-4 w-4" />
                                      <span>{treatment.duration}</span>
                                    </span>
                                    <span className="text-sm font-semibold text-gray-700">
                                      {treatment.price}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </button>
                            
                            <button
                              onClick={() => toggleExpanded(index)}
                              className="ml-4 p-2 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                              {expandedTreatment === index ? (
                                <ChevronUp className="h-5 w-5 text-gray-600" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-gray-600" />
                              )}
                            </button>
                          </div>

                          <AnimatePresence>
                            {expandedTreatment === index && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6 pt-2 border-t border-gray-200">
                                  <div className="bg-[#e9dbd2]/70 rounded-xl p-4 space-y-4">
                                    {/* Beschreibung */}
                                    <div className="flex items-start space-x-2">
                                      <Info className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                          {treatment.description}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Dauer & Preis */}
                                    <div className="grid grid-cols-2 gap-4">
                                      <div className="bg-gray-50 rounded-lg p-3">
                                        <p className="text-xs text-gray-600 mb-1">Dauer</p>
                                        <p className="text-sm font-semibold text-gray-900">{treatment.duration}</p>
                                      </div>
                                      <div className="bg-gray-50 rounded-lg p-3">
                                        <p className="text-xs text-gray-600 mb-1">Preis</p>
                                        <p className="text-sm font-semibold text-gray-900">{treatment.price}</p>
                                      </div>
                                    </div>

                                    {/* Vorteile */}
                                    <div>
                                      <h4 className="text-sm font-bold text-gray-900 mb-2">Vorteile</h4>
                                      <div className="grid grid-cols-2 gap-2">
                                        {treatment.benefits.map((benefit, idx) => (
                                          <div key={idx} className="flex items-center space-x-2">
                                            <Check className="h-3 w-3 text-green-600 flex-shrink-0" />
                                            <span className="text-xs text-gray-700">{benefit}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    {/* Behandlungsablauf */}
                                    <div>
                                      <h4 className="text-sm font-bold text-gray-900 mb-2">Behandlungsablauf</h4>
                                      <div className="space-y-1">
                                        {treatment.process.map((step, idx) => {
                                          const parts = step.split(':')
                                          const hasColon = parts.length > 1
                                          
                                          return (
                                            <p key={idx} className="text-xs text-gray-700 leading-relaxed">
                                              {hasColon ? (
                                                <>
                                                  <span className="font-bold">{parts[0]}:</span>
                                                  {parts.slice(1).join(':')}
                                                </>
                                              ) : (
                                                step
                                              )}
                                            </p>
                                          )
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <button
                        onClick={() => setStep(1)}
                        className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Weitere Behandlung wählen</span>
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        disabled={!hasAnySelectedTreatments()}
                        className={`flex-1 ${
                          hasAnySelectedTreatments()
                            ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg'
                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        } px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                      >
                        <span>Weiter</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Personal Information */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                      Ihre Kontaktdaten
                    </h2>

                    <form 
                      action="https://formsubmit.co/hartmanntimon@gmail.com" 
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* FormSubmit Konfiguration */}
                      <input 
                        type="hidden" 
                        name="_subject" 
                        value={formData.firstName && formData.lastName 
                          ? `Neue Terminanfrage von ${formData.firstName} ${formData.lastName}` 
                          : 'Neue Terminanfrage'} 
                      />
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_template" value="table" />
                      
                      {/* Behandlungsdaten als verstecktes Feld */}
                      <input 
                        type="hidden" 
                        name="behandlungen" 
                        value={getAllSelectedTreatments().map(treatment => {
                          const category = treatmentCategories.find(cat => cat.id === treatment.categoryId)
                          const treatmentDetail = category?.treatments.find(t => t.name === treatment.name)
                          return `${treatment.name} (${treatment.categoryName}) - ${treatmentDetail?.duration || 'N/A'}, ${treatmentDetail?.price || 'N/A'}`
                        }).join('; ')} 
                      />
                      <input 
                        type="hidden" 
                        name="kategorien" 
                        value={Object.keys(formData.treatmentsByCategory).map(catId => {
                          const cat = treatmentCategories.find(c => c.id === catId)
                          return cat?.name || catId
                        }).join(', ')} 
                      />
                      
                      {/* Selected Treatments Summary */}
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Gewählte Behandlungen:</h3>
                        <div className="space-y-4">
                          {Object.keys(formData.treatmentsByCategory).map(categoryId => {
                            const category = treatmentCategories.find(cat => cat.id === categoryId)
                            const treatments = formData.treatmentsByCategory[categoryId]
                            
                            if (treatments.length === 0) return null
                            
                            return (
                              <div key={categoryId} className="border-l-4 border-gray-400 pl-4">
                                <h4 className="text-sm font-semibold text-gray-600 mb-2">{category?.name}</h4>
                                <div className="space-y-2">
                                  {treatments.map((treatmentName, index) => {
                                    const treatmentDetail = category?.treatments.find(t => t.name === treatmentName)
                                    return (
                                      <div key={`${categoryId}-${index}`} className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                          <Check className="h-4 w-4 text-green-600" />
                                          <span className="text-gray-700">{treatmentName}</span>
                                        </div>
                                        {treatmentDetail && (
                                          <div className="flex items-center space-x-3 text-sm">
                                            <span className="text-gray-600">{treatmentDetail.duration}</span>
                                            <span className="font-semibold text-gray-900">{treatmentDetail.price}</span>
                                          </div>
                                        )}
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Vorname *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="vorname"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                              placeholder="Ihr Vorname"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Nachname *
                          </label>
                          <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="text"
                              name="nachname"
                              required
                              value={formData.lastName}
                              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                              placeholder="Ihr Nachname"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            E-Mail *
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                              placeholder="ihre@email.de"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Telefon *
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                            <input
                              type="tel"
                              name="telefon"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                              placeholder="+49 123 456789"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Wunschdatum *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            name="datum"
                            required
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value, time: '' })}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors"
                          />
                        </div>
                        {/* Verstecktes Feld für formatiertes Datum */}
                        <input 
                          type="hidden" 
                          name="wunschdatum" 
                          value={formData.date ? new Date(formData.date).toLocaleDateString('de-DE', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          }) : ''} 
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Öffnungszeiten: Mo-Fr 10:00-18:00, Sa 10:00-15:00, So geschlossen
                        </p>
                      </div>

                      <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Wunschuhrzeit *
                          </label>
                          
                          {formData.date ? (
                            availableTimeSlots.length > 0 ? (
                              <>
                                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-3 mb-3">
                                  <p className="text-xs text-gray-700">
                                    <strong>Gesamtdauer:</strong> {getTotalDuration()} Minuten
                                    {' • '}
                                    Verfügbare Zeitfenster für das gewählte Datum
                                  </p>
                                </div>
                                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 max-h-48 overflow-y-auto p-2 bg-gray-50 rounded-xl">
                                  {availableTimeSlots.map((slot) => (
                                    <button
                                      key={slot}
                                      type="button"
                                      onClick={() => setFormData({ ...formData, time: slot })}
                                      className={`py-2 px-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                                        formData.time === slot
                                          ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg'
                                          : 'bg-[#e9dbd2] text-gray-700 hover:bg-gray-100 border border-gray-200'
                                      }`}
                                    >
                                      {slot}
                                    </button>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                                <p className="text-sm text-gray-700">
                                  {new Date(formData.date).getDay() === 0 
                                    ? 'Sonntags haben wir geschlossen. Bitte wählen Sie ein anderes Datum.'
                                    : 'Für die ausgewählte Behandlungsdauer sind an diesem Tag keine passenden Zeitfenster mehr verfügbar. Bitte wählen Sie einen anderen Tag oder reduzieren Sie die Anzahl der Behandlungen.'}
                                </p>
                              </div>
                            )
                          ) : (
                            <div className="bg-gray-100 rounded-xl p-4 text-center">
                              <Clock className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">
                                Bitte wählen Sie zuerst ein Datum
                              </p>
                            </div>
                          )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Nachricht (optional)
                        </label>
                          <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                            <textarea
                              name="nachricht"
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              rows={4}
                              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-gray-400 focus:outline-none transition-colors resize-none"
                              placeholder="Haben Sie besondere Wünsche oder Fragen?"
                            />
                          </div>
                        </div>
                        {/* Verstecktes Feld für Uhrzeit */}
                        <input type="hidden" name="uhrzeit" value={formData.time || ''} />

                      <div className="bg-blue-50 border-l-4 border-blue-500 rounded-xl p-6">
                        <p className="text-sm text-gray-700">
                          <strong>Hinweis:</strong> Dies ist eine unverbindliche Terminanfrage. 
                          Wir werden uns schnellstmöglich bei Ihnen melden, um den Termin zu bestätigen. 
                          Mit dem Absenden akzeptieren Sie unsere{' '}
                          <a href="/datenschutz" className="text-primary-600 hover:text-primary-700 underline">
                            Datenschutzerklärung
                          </a>.
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <ArrowLeft className="h-5 w-5" />
                          <span>Zurück</span>
                        </button>
                        <button
                          type="submit"
                          disabled={!formData.time}
                          className={`flex-1 ${
                            formData.time
                              ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg'
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          } px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                        >
                          <span>Anfrage absenden</span>
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            /* Success Message */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Check className="h-12 w-12 text-white" />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Vielen Dank!
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Ihre Terminanfrage wurde erfolgreich übermittelt. 
                Wir melden uns schnellstmöglich bei Ihnen zur Terminbestätigung.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Zusammenfassung:</h3>
                <div className="space-y-4 text-left">
                  <div>
                    <p className="text-sm text-gray-600 mb-2">Behandlungen:</p>
                    {Object.keys(formData.treatmentsByCategory).map(categoryId => {
                      const category = treatmentCategories.find(cat => cat.id === categoryId)
                      const treatments = formData.treatmentsByCategory[categoryId]
                      
                      if (treatments.length === 0) return null
                      
                      return (
                        <div key={categoryId} className="mb-3">
                          <p className="text-xs font-semibold text-gray-500 mb-1">{category?.name}</p>
                          {treatments.map((treatmentName, index) => {
                            const treatmentDetail = category?.treatments.find(t => t.name === treatmentName)
                            return (
                              <div key={`${categoryId}-${index}`} className="flex items-center justify-between mt-1 ml-2">
                                <p className="text-gray-900">{treatmentName}</p>
                                {treatmentDetail && (
                                  <span className="text-sm text-gray-600">{treatmentDetail.price}</span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )
                    })}
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Wunschtermin:</p>
                    <p className="text-gray-900">
                      {new Date(formData.date).toLocaleDateString('de-DE', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      {formData.time && ` um ${formData.time} Uhr`}
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                Neue Anfrage erstellen
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Haben Sie Fragen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Rufen Sie uns gerne direkt an oder schreiben Sie uns eine E-Mail.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="tel:+491704482725"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Phone className="h-6 w-6 text-gray-600" />
              <span className="text-lg font-semibold text-gray-900">+49 170 4482725</span>
            </a>
            <a
              href="mailto:beautyskin.studio@icloud.com"
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Mail className="h-6 w-6 text-gray-600" />
              <span className="text-lg font-semibold text-gray-900">beautyskin.studio@icloud.com</span>
            </a>
          </div>

          <div className="mt-8 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6">
            <div className="flex items-center justify-center space-x-2 text-gray-700">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Öffnungszeiten:</span>
              <span>Mo-Fr 10:00-18:00, Sa 10:00-15:00</span>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

