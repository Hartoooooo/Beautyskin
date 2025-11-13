import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Gesichtsbehandlung',
  description: 'Professionelle Gesichtsbehandlungen für gesunde und strahlende Haut in Berlin-Friedrichshain. BeautySkin Klassik, Relax, Hautklar, Unreine Haut, Deluxe und mehr. Individuelle Beratung mit CNC-Produkten. Ab 49€.',
  keywords: [
    'Gesichtsbehandlung Berlin',
    'Gesichtsbehandlung Friedrichshain',
    'BeautySkin Klassik',
    'BeautySkin Deluxe',
    'Gesichtsbehandlung CNC',
    'Professionelle Gesichtspflege Berlin',
    'Anti-Aging Behandlung Berlin',
    'Hautpflege Berlin',
    'Kosmetikstudio Berlin',
    'Gesichtsbehandlung ab 49€',
  ],
  openGraph: {
    title: 'Gesichtsbehandlung | BeautySkin Berlin',
    description: 'Professionelle Gesichtsbehandlungen für gesunde und strahlende Haut. BeautySkin Klassik, Relax, Hautklar und mehr.',
    url: `${siteUrl}/gesichtsbehandlung`,
    images: [`${siteUrl}/Gesichtsbehandlungen.webp`],
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: `${siteUrl}/gesichtsbehandlung`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const treatments = [
  {
    id: 1,
    title: 'BeautySkin Klassik',
    subtitle: 'Klassische Gesichtsbehandlung',
    description: 'Erleben Sie eine tiefenreinigende Klassik-Behandlung, die Hautpflege und Entspannung harmonisch vereint.',
    duration: '60 Min',
    price: '69€',
    benefits: [
      'Professionelle Hautanalyse',
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Intensive Pflege',
      'Entspannende Massage',
      'Abschlusspflege'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage: Eine entspannende Massage von Gesicht, Hals und Dekolleté fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
      'LED & Abschlusspflege: LED Skin Light unterstützt die Regeneration der Haut. Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln.'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Erste Behandlung',
      'Regelmäßige Pflege',
      'Gesunde Haut',
      'Anti-Aging',
      'Entspannung'
    ]
  },
  {
    id: 2,
    title: 'BeautySkin Deluxe',
    subtitle: 'Premium Gesichtsbehandlung - Besonders beliebt!',
    description: 'Erleben Sie eine luxuriöse Gesichtsbehandlung, die intensive Pflege, sichtbare Hautverfeinerung und pure Entspannung miteinander verbindet.',
    duration: '60 Min',
    price: '89€',
    benefits: [
      'Hautanalyse',
      'Tiefenreinigung',
      'Ultraschallpflege',
      'Augenpflege',
      'Premium-Maske',
      'Glow-Finish'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell auf Ihre Hautbedürfnisse abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem sanften Enzympeeling vorbereitet, um abgestorbene Hautzellen zu entfernen und die Aufnahmefähigkeit der Haut zu verbessern.',
      'Ausreinigung: Verstopfte Poren und Unreinheiten werden schonend entfernt, um die Haut zu klären und für die Wirkstoffpflege vorzubereiten.',
      'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wird eingearbeitet, um die Haut intensiv zu versorgen und ihre Regeneration zu fördern.',
      'Augenkorrektur & Augenbrauenform: Bei Bedarf werden Augenbrauen in Form gebracht und kleine Korrekturen durchgeführt, um das gepflegte Gesamtbild zu unterstreichen.',
      'Gesicht-, Hals- & Dekolleté-Massage: Eine wohltuende Massage sorgt für Entspannung, fördert die Durchblutung und lässt die Haut praller und vitaler erscheinen.',
      'Maske mit Ultraschall: Eine hochwertige Maske wird mithilfe von Ultraschall tief in die Haut eingearbeitet, um die Wirkstoffaufnahme zu optimieren und das Ergebnis zu intensivieren.',
      'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird eine reichhaltige Pflege aufgetragen, die die Haut schützt und ihr ein strahlendes, frisches Aussehen verleiht.'
    ],
    suitableFor: [
      'Anspruchsvolle Haut',
      'Premium Pflege',
      'Anti-Aging',
      'Besondere Anlässe',
      'Verwöhnmomente',
      'Alle Hauttypen'
    ]
  },
  {
    id: 3,
    title: 'BeautySkin Relax',
    subtitle: 'Entspannende Gesichtsbehandlung',
    description: 'Genießen Sie ein intensives Pflege- und Massage-Erlebnis für vollkommene Hautentspannung und spürbare Regeneration.',
    duration: '60 Min',
    price: '75€',
    benefits: [
      'Entspannende Massage',
      'Beruhigende Pflege',
      'Stressabbau',
      'Wohlbefinden',
      'Tiefenreinigung',
      'Regeneration'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage Gesicht, Hals, Dekolleté, Arme & Hände: Eine ausgedehnte Massage umfasst Gesicht, Hals, Dekolleté sowie Arme und Hände und sorgt für tiefgehende Entspannung und ein rundum gelöstes Hautgefühl.',
      'Maske & LED Skin Light: Eine passende Maske unterstützt die Hautregeneration und wird durch LED-Lichttherapie intensiviert.',
      'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird die Haut mit einer pflegenden Creme und UV-Schutz versiegelt, während eine spezielle Augenpflege die empfindliche Partie um die Augen gezielt versorgt.'
    ],
    suitableFor: [
      'Gestresste Haut',
      'Empfindliche Haut',
      'Entspannungssuchende',
      'Stressabbau',
      'Wohlbefinden',
      'Regeneration'
    ]
  },
  {
    id: 4,
    title: 'BeautySkin Hautklar',
    subtitle: 'Behandlung für klare Haut',
    description: 'Erleben Sie eine klärende Behandlung, die die Haut tiefenreinigt und das Hautbild sichtbar verfeinert.',
    duration: '45 Min',
    price: '49€',
    benefits: [
      'Intensive Reinigung',
      'Klärende Wirkstoffe',
      'Porenreinigung',
      'Hautklarung',
      'Anti-Bakteriell',
      'Strahlende Haut'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Enzympeeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage Gesicht, Hals & Dekolleté: Eine wohltuende Massage fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
      'Maske: Eine passende Maske beruhigt die Haut, unterstützt die Regeneration und verfeinert das Erscheinungsbild.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln und vor äußeren Einflüssen zu schützen.'
    ],
    suitableFor: [
      'Unreine Haut',
      'Große Poren',
      'Fettige Haut',
      'Mischhaut',
      'Hautklarung',
      'Anti-Bakteriell'
    ]
  },
  {
    id: 5,
    title: 'BeautySkin Unreine',
    subtitle: 'Intensive Behandlung für unreine Haut',
    description: 'Erleben Sie eine intensiv klärende Behandlung, die Unreinheiten vermindert und das Hautbild rein und ausgeglichen erscheinen lässt.',
    duration: '60 Min',
    price: '75€',
    benefits: [
      'Intensive Reinigung',
      'Entzündungshemmend',
      'Bakterienreduktion',
      'Hautberuhigung',
      'Narbenminderung',
      'Hautregeneration'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung gezielt auf die Bedürfnisse unreiner Haut abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gereinigt und mit einem Enzympeeling vorbereitet, um überschüssige Hornschüppchen zu lösen und die Poren freizugeben.',
      'Intensive Ausreinigung: Verstopfungen und Unreinheiten werden gründlich entfernt, um die Haut tief zu klären und Unterlagerungen zu reduzieren.',
      'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wirkt talgregulierend und beruhigend auf irritierte Hautbereiche.',
      'Hochfrequenz-Stab: Zur Desinfektion der behandelten Partien wird der Hochfrequenz-Stab eingesetzt, um Entzündungen zu mindern und die Haut zu beruhigen.',
      'LED Skin Light & Maske: LED-Lichttherapie unterstützt die Regeneration und wird mit einer passenden Maske kombiniert, um die Haut zu klären und auszugleichen.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine passende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu stabilisieren.',
      'Hinweis: Bei dieser Behandlung wird ausschließlich mit Microsilver-Produkten gearbeitet.'
    ],
    suitableFor: [
      'Problematische Haut',
      'Akne',
      'Entzündungen',
      'Narben',
      'Empfindliche Haut',
      'Hautregeneration'
    ]
  },
  {
    id: 6,
    title: 'BeautySkin Reine Männersache',
    subtitle: 'Speziell für Männer',
    description: 'Erleben Sie eine tiefenreinigende Gesichtsbehandlung, die speziell auf die Bedürfnisse männlicher Haut abgestimmt ist.',
    duration: '60 Min',
    price: '69€',
    benefits: [
      'Männergerechte Pflege',
      'Intensive Reinigung',
      'Gesichtsmassage',
      'Schutzpflege',
      'Hautstraffung',
      'Anti-Aging'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung individuell auf die Bedürfnisse der Männerhaut abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem Enzympeeling vorbereitet, damit abgestorbene Hautzellen gelöst werden und die Poren frei werden.',
      'Ausreinigung: Unreinheiten und Ablagerungen werden sanft, aber gründlich entfernt, um die Haut zu klären und ein frisches Hautgefühl zu schaffen.',
      'Wirkstoffampulle: Eine speziell ausgewählte Ampulle versorgt die Haut mit Feuchtigkeit und regenerierenden Wirkstoffen, die Vitalität und Spannkraft fördern.',
      'Hochfrequenz-Stab: Durch die Anwendung des Hochfrequenz-Stabs wird die Haut desinfiziert, beruhigt und die Durchblutung angeregt.',
      'Gesichtsmassage: Eine entspannende Massage löst Spannungen und sorgt für ein vitalisiertes, erholtes Erscheinungsbild.',
      'Maske: Eine passende Maske rundet die Behandlung ab und verleiht der Haut ein gepflegtes, ausgeglichenes Gefühl.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut vor äußeren Einflüssen zu bewahren.'
    ],
    suitableFor: [
      'Männer',
      'Bartträger',
      'Rasierprobleme',
      'Männliche Haut',
      'Anti-Aging',
      'Pflegeeinsteiger'
    ]
  },
  {
    id: 7,
    title: 'AHA Fruchtsäurepeeling',
    subtitle: 'Hautverfeinernde Fruchtsäurebehandlung',
    description: 'Erleben Sie eine hautverfeinernde Gesichtsbehandlung mit hochwirksamen Fruchtsäuren, die die Hautstruktur glätten, Poren verfeinern und das Hautbild sichtbar verbessern.',
    duration: '45 Min',
    price: '69€',
    benefits: [
      'Porenverfeinerung',
      'Faltenminderung',
      'Pigmentausgleich',
      'Regeneration',
      'Zellaktivierung',
      'Hautglättung'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um die Fruchtsäurekonzentration individuell auf Ihre Haut abzustimmen.',
      'Reinigung & Vorbereitung: Die Haut wird gründlich gereinigt und vorbereitet, damit die Fruchtsäure ihre volle Wirkung entfalten kann.',
      'AHA Fruchtsäurepeeling: Die dermato-kosmetischen Fruchtsäuren entfernen Verhornungen, verfeinern die Poren und mildern Falten sowie Pigmentstörungen. Gleichzeitig wird die Zellerneuerung aktiviert und die Bildung von körpereigenem Kollagen und Elastin angeregt.',
      'Wirkstoffampulle & Maske: Nach dem Peeling wird eine regenerierende Ampulle aufgetragen, gefolgt von einer beruhigenden Maske, um die Haut zu pflegen und zu stabilisieren.',
      'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu bewahren.'
    ],
    suitableFor: [
      'Reife Haut',
      'Falten & Linien',
      'Pigmentflecken',
      'Grobporige Haut',
      'Verhornungen',
      'Anti-Aging'
    ]
  },
  {
    id: 8,
    title: 'Kräuter-Peeling (Herbs2Peel)',
    subtitle: 'Natürliches Regenerations-Peeling',
    description: 'Erleben Sie ein natürliches, professionelles Kräuter-Peeling zur Regeneration und Korrektur der Haut – individuell abgestimmt auf Ihren Hauttyp.',
    duration: '60 Min',
    price: '99€',
    benefits: [
      'Natürliche Regeneration',
      'Hauterneuerung',
      'Porenverfeinerung',
      'Zellaktivierung',
      'Gleichmäßiger Teint',
      'Strahlende Frische'
    ],
    process: [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um die Kräutermischung optimal auf die individuellen Hautbedürfnisse abzustimmen.',
      'Reinigung & Vorbereitung: Die Haut wird gründlich gereinigt, damit die natürlichen Kräuterwirkstoffe optimal aufgenommen werden können.',
      'Kräuter-Peeling: Das Kräuterpeeling wird sanft einmassiert, wodurch die Hautregeneration aktiviert, das Hautbild verfeinert und die Zellerneuerung gefördert wird.',
      'Maske & Wirkstoffpflege: Eine pflegende Maske beruhigt die Haut, während eine Wirkstoffpflege Feuchtigkeit spendet und das Ergebnis unterstützt.',
      'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und den Erneuerungsprozess zu stabilisieren.'
    ],
    suitableFor: [
      'Unreine Haut',
      'Akne-Anzeichen',
      'Anti-Aging',
      'Hautstraffung',
      'Pigmentflecken',
      'Regenerationsbedarf'
    ]
  }
]

export default function GesichtsbehandlungPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Gesichtsbehandlung',
    provider: {
      '@type': 'BeautySalon',
      name: 'BeautySkin',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R&Y Slivio-Meier-Straße 6',
        addressLocality: 'Berlin',
        postalCode: '10247',
        addressCountry: 'DE',
      },
      telephone: '+491704482725',
      email: 'beautyskin.studio@icloud.com',
    },
    areaServed: {
      '@type': 'City',
      name: 'Berlin',
    },
    description: 'Professionelle Gesichtsbehandlungen für gesunde und strahlende Haut. BeautySkin Klassik, Relax, Hautklar, Unreine Haut, Deluxe und mehr.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '49',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '49',
        priceCurrency: 'EUR',
        unitText: 'ab',
      },
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <TreatmentsDetail treatmentId={1} />
      <Footer />
    </main>
  )
}
