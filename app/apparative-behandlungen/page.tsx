import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Apparative Behandlungen',
  description: 'Hochmoderne apparative Behandlungen für intensive Hautverbesserung in Berlin-Friedrichshain. Aqua Facial, Skin Oximizer, Microneedling, Diamant Microdermabrasion und Radiofrequenzbehandlung. Ab 69€.',
  keywords: [
    'Apparative Behandlungen Berlin',
    'Aqua Facial Berlin',
    'Micro Needling Berlin',
    'Skin Oximizer Berlin',
    'Diamant Microdermabrasion Berlin',
    'Radiofrequenzbehandlung Berlin',
    'Hydrafacial Berlin',
    'Professionelle Hautbehandlung Berlin',
    'Anti-Aging Geräte Berlin',
    'Hautstraffung Berlin',
  ],
  openGraph: {
    title: 'Apparative Behandlungen | BeautySkin Berlin',
    description: 'Hochmoderne apparative Behandlungen für intensive Hautverbesserung. Aqua Facial, Skin Oximizer, Micro Needling und mehr.',
    url: `${siteUrl}/apparative-behandlungen`,
    images: [`${siteUrl}/apparativ.webp`],
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: `${siteUrl}/apparative-behandlungen`,
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Apparative Behandlungen',
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
    },
    areaServed: {
      '@type': 'City',
      name: 'Berlin',
    },
    description: 'Hochmoderne apparative Behandlungen für intensive Hautverbesserung. Aqua Facial, Skin Oximizer, Microneedling, Diamant Microdermabrasion und Radiofrequenzbehandlung.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '69',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '69',
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
      <TreatmentsDetail treatmentId={2} />
      <Footer />
    </main>
  )
}
