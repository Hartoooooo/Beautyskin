import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

export const metadata = {
  title: 'Gesichtsbehandlung - BeautySkin',
  description: 'Professionelle Gesichtsbehandlungen für gesunde und strahlende Haut. BeautySkin Klassik, Relax, Hautklar und mehr.',
}

const treatments = [
  {
    id: 1,
    title: 'BeautySkin Klassik',
    subtitle: 'Klassische Gesichtsbehandlung',
    description: 'Unsere klassische Gesichtsbehandlung mit Reinigung, Peeling und intensiver Pflege für gesunde und strahlende Haut.',
    duration: '60 Min',
    price: '65€',
    benefits: [
      'Professionelle Hautanalyse',
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Intensive Pflege',
      'Entspannende Massage',
      'Abschlusspflege'
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
      'Erste Behandlung',
      'Regelmäßige Pflege',
      'Gesunde Haut',
      'Anti-Aging',
      'Entspannung'
    ]
  },
  {
    id: 2,
    title: 'BeautySkin Relax',
    subtitle: 'Entspannende Gesichtsbehandlung',
    description: 'Eine entspannende Gesichtsbehandlung mit Massage und beruhigender Pflege für Körper und Seele.',
    duration: '75 Min',
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
      'Beratung und Entspannung',
      'Sanfte Reinigung',
      'Entspannungsmassage',
      'Beruhigende Pflege',
      'Entspannungsphase',
      'Abschlusspflege'
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
    id: 3,
    title: 'BeautySkin Hautklar',
    subtitle: 'Behandlung für klare Haut',
    description: 'Spezielle Behandlung für klare und reine Haut mit intensiver Reinigung und klärenden Wirkstoffen.',
    duration: '70 Min',
    price: '80€',
    benefits: [
      'Intensive Reinigung',
      'Klärende Wirkstoffe',
      'Porenreinigung',
      'Hautklarung',
      'Anti-Bakteriell',
      'Strahlende Haut'
    ],
    process: [
      'Hautanalyse',
      'Intensive Reinigung',
      'Klärendes Peeling',
      'Porenreinigung',
      'Klärende Pflege',
      'Schutzpflege'
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
    id: 4,
    title: 'BeautySkin unreine Haut',
    subtitle: 'Intensive Behandlung für unreine Haut',
    description: 'Intensive Behandlung für unreine und problematische Haut mit speziellen Wirkstoffen und Techniken.',
    duration: '80 Min',
    price: '85€',
    benefits: [
      'Intensive Reinigung',
      'Entzündungshemmend',
      'Bakterienreduktion',
      'Hautberuhigung',
      'Narbenminderung',
      'Hautregeneration'
    ],
    process: [
      'Detaillierte Hautanalyse',
      'Intensive Reinigung',
      'Entzündungshemmende Behandlung',
      'Beruhigende Pflege',
      'Regenerationsmaske',
      'Schutzpflege'
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
    id: 5,
    title: 'BeautySkin reine Männersache',
    subtitle: 'Speziell für Männer',
    description: 'Speziell für Männer entwickelte Gesichtsbehandlung mit maskuliner Pflege und männergerechter Behandlung.',
    duration: '65 Min',
    price: '70€',
    benefits: [
      'Männergerechte Pflege',
      'Intensive Reinigung',
      'Bartpflege',
      'Hautstraffung',
      'Anti-Aging',
      'Maskuline Duftstoffe'
    ],
    process: [
      'Beratung und Hautanalyse',
      'Intensive Reinigung',
      'Bartpflege',
      'Gesichtsmassage',
      'Straffende Pflege',
      'Abschlusspflege'
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
    id: 6,
    title: 'Fruchtsäurepeeling',
    subtitle: 'Professionelles Fruchtsäurepeeling',
    description: 'Professionelles Fruchtsäurepeeling für glatte und strahlende Haut mit natürlichen Fruchtsäuren.',
    duration: '90 Min',
    price: '90€',
    benefits: [
      'Natürliche Fruchtsäuren',
      'Hauterneuerung',
      'Glatte Haut',
      'Strahlender Teint',
      'Anti-Aging',
      'Professionell'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Fruchtsäurepeeling',
      'Neutralisation',
      'Beruhigende Pflege',
      'Schutzpflege'
    ],
    suitableFor: [
      'Reife Haut',
      'Faltenbehandlung',
      'Hauterneuerung',
      'Stumpfe Haut',
      'Anti-Aging',
      'Glatte Haut'
    ]
  }
]

export default function GesichtsbehandlungPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TreatmentsDetail treatmentId={1} />
      <Footer />
    </main>
  )
}
