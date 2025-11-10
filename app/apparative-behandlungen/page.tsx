import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'
import { ServiceSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'Apparative Kosmetikbehandlungen Berlin',
  description: 'Hochmoderne apparative Behandlungen in Berlin Friedrichshain. Aqua Facial, Microneedling, Diamant Mikrodermabrasion, Radiofrequenz. Professionelle Hautverbesserung mit neuester Technologie.',
  alternates: {
    canonical: 'https://www.beautyskin-berlin.de/apparative-behandlungen',
  },
  openGraph: {
    title: 'Apparative Kosmetikbehandlungen Berlin - BeautySkin',
    description: 'Neueste Technologie für Ihre Haut: Aqua Facial, Microneedling, Radiofrequenz und mehr in Berlin Friedrichshain.',
    url: 'https://www.beautyskin-berlin.de/apparative-behandlungen',
    images: [{ url: 'https://www.beautyskin-berlin.de/apparativ.webp' }],
  },
}

const treatments = [
  {
    id: 1,
    title: 'Aqua Facial Behandlung',
    subtitle: 'Revolutionäre Wasserbehandlung',
    description: 'Revolutionäre Aqua Facial Behandlung für tiefe Reinigung und intensive Hydratation der Haut.',
    duration: '75 Min',
    price: '95€',
    benefits: [
      'Tiefe Reinigung',
      'Intensive Hydratation',
      'Porenreinigung',
      'Hautstraffung',
      'Glow-Effekt',
      'Schmerzarm'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Aqua Facial Behandlung',
      'Hydratation',
      'Beruhigende Pflege',
      'Abschlusspflege'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Trockene Haut',
      'Fettige Haut',
      'Mischhaut',
      'Anti-Aging',
      'Hauterneuerung'
    ]
  },
  {
    id: 2,
    title: 'Skin Oximizer',
    subtitle: 'Sauerstoffbehandlung',
    description: 'Moderne Sauerstoffbehandlung für strahlende und gesunde Haut mit verbesserter Durchblutung.',
    duration: '60 Min',
    price: '85€',
    benefits: [
      'Sauerstoffversorgung',
      'Verbesserte Durchblutung',
      'Strahlender Teint',
      'Hautregeneration',
      'Anti-Aging',
      'Energizing'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Sauerstoffbehandlung',
      'Durchblutungsförderung',
      'Regenerative Pflege',
      'Schutzpflege'
    ],
    suitableFor: [
      'Stumpfe Haut',
      'Müde Haut',
      'Anti-Aging',
      'Durchblutungsförderung',
      'Energizing',
      'Hautregeneration'
    ]
  },
  {
    id: 3,
    title: 'Micro Needling',
    subtitle: 'Hauterneuerung durch Mikronadeln',
    description: 'Professionelles Micro Needling für Hauterneuerung und Kollagenbildung mit minimalen Nadeln.',
    duration: '90 Min',
    price: '120€',
    benefits: [
      'Hauterneuerung',
      'Kollagenbildung',
      'Faltenreduktion',
      'Narbenminderung',
      'Porenverkleinerung',
      'Professionell'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Micro Needling',
      'Serum-Infusion',
      'Beruhigende Pflege',
      'Nachsorge'
    ],
    suitableFor: [
      'Reife Haut',
      'Faltenbehandlung',
      'Narbenbehandlung',
      'Anti-Aging',
      'Hauterneuerung',
      'Porenverkleinerung'
    ]
  },
  {
    id: 4,
    title: 'Diamant Mikrodermabrasion',
    subtitle: 'Professionelle Diamantbehandlung',
    description: 'Die Diamant Mikrodermabrasion ist eine sanfte, aber effektive Methode zur Hauterneuerung. Mit feinen Diamantaufsätzen werden abgestorbene Hautzellen abgetragen, wodurch die Haut glatter, klarer und aufnahmefähiger für Wirkstoffe wird. Diese mechanische Tiefenbehandlung regt die Zellerneuerung an und verfeinert das Hautbild sichtbar.',
    duration: '70 Min',
    price: '90€',
    benefits: [
      'Glatte Haut',
      'Strahlender Teint',
      'Peeling-Effekt',
      'Hauterneuerung',
      'Professionell',
      'Schmerzarm'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Diamant Mikrodermabrasion',
      'Reinigung',
      'Beruhigende Pflege',
      'Schutzpflege'
    ],
    suitableFor: [
      'Rauhe Haut',
      'Stumpfe Haut',
      'Hauterneuerung',
      'Peeling-Bedarf',
      'Anti-Aging',
      'Glatte Haut'
    ]
  },
  {
    id: 5,
    title: 'Radiofrequenzbehandlung',
    subtitle: 'Wärmeenergie für Straffung',
    description: 'Moderne Radiofrequenzbehandlung für Hautstraffung und -verbesserung durch kontrollierte Wärmeenergie.',
    duration: '80 Min',
    price: '110€',
    benefits: [
      'Hautstraffung',
      'Kollagenbildung',
      'Faltenreduktion',
      'Konturierung',
      'Anti-Aging',
      'Langzeitwirkung'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Radiofrequenzbehandlung',
      'Kühlung',
      'Beruhigende Pflege',
      'Nachsorge'
    ],
    suitableFor: [
      'Schlaffe Haut',
      'Faltenbehandlung',
      'Konturierung',
      'Anti-Aging',
      'Straffung',
      'Reife Haut'
    ]
  }
]

export default function ApparativeBehandlungenPage() {
  return (
    <main className="min-h-screen">
      <ServiceSchema
        name="Apparative Kosmetikbehandlungen Berlin"
        description="Hochmoderne apparative Behandlungen mit neuester Technologie. Aqua Facial, Microneedling, Diamant Mikrodermabrasion, Radiofrequenz und mehr in Berlin Friedrichshain."
        category="Apparative Kosmetik"
        priceRange="85€ - 120€"
        duration="60-90 Minuten"
        url="https://www.beautyskin-berlin.de/apparative-behandlungen"
      />
      <Header />
      <TreatmentsDetail treatmentId={2} />
      <Footer />
    </main>
  )
}
