import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Massagen',
  description: 'Entspannende Massagen für Körper und Seele in Berlin-Friedrichshain. Nacken-Massage, Hot Stone Massage, Kopf-Nacken-Rückenmassage. Professionelle Entspannung und Verspannungslösung. Ab 25€.',
  keywords: [
    'Massage Berlin',
    'Massage Friedrichshain',
    'Nackenmassage Berlin',
    'Hot Stone Massage Berlin',
    'Rückenmassage Berlin',
    'Entspannungsmassage Berlin',
    'Verspannungslösung Berlin',
    'Professionelle Massage Berlin',
    'Wellness Massage Berlin',
    'Massage ab 25€',
  ],
  openGraph: {
    title: 'Massagen | BeautySkin Berlin',
    description: 'Entspannende Massagen für Körper und Seele. Nacken-Massage, Hot Stone, Kopf-Nacken-Rückenmassage und mehr.',
    url: `${siteUrl}/massagen`,
    images: [`${siteUrl}/Massagen Startseite.webp`],
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: `${siteUrl}/massagen`,
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
    title: 'Nacken-Massage',
    subtitle: 'Entspannung für Nacken und Schultern',
    description: 'Entspannende Massage speziell für Nacken und Schultern zur Linderung von Verspannungen.',
    duration: '15 Min',
    price: '25€',
    benefits: [
      'Verspannungslösung',
      'Schmerzlinderung',
      'Durchblutungsförderung',
      'Entspannung',
      'Stressabbau',
      'Wohlbefinden'
    ],
    process: [
      'Beratung',
      'Vorbereitung',
      'Nacken-Massage',
      'Schultermassage',
      'Entspannungsphase',
      'Nachpflege'
    ],
    suitableFor: [
      'Verspannte Muskulatur',
      'Schulter-Nacken-Beschwerden',
      'Stressabbau',
      'Entspannung',
      'Arbeitsbelastung',
      'Wohlbefinden'
    ]
  },
  {
    id: 2,
    title: 'Entspannungsmassage mit Hot Stone',
    subtitle: 'Wohltuende Massage mit warmen Steinen',
    description: 'Entspannungsmassage mit warmen Steinen für tiefe Entspannung und Wohlbefinden.',
    duration: '45 Min',
    price: '59€',
    benefits: [
      'Tiefe Entspannung',
      'Wärmeeffekt',
      'Durchblutungsförderung',
      'Stressabbau',
      'Muskelentspannung',
      'Wohlbefinden'
    ],
    process: [
      'Beratung',
      'Vorbereitung',
      'Hot Stone Massage',
      'Entspannungsphase',
      'Nachpflege',
      'Entspannungstipps'
    ],
    suitableFor: [
      'Stressabbau',
      'Entspannungssuchende',
      'Verspannte Muskulatur',
      'Wohlbefinden',
      'Regeneration',
      'Wärme liebende'
    ]
  },
  {
    id: 3,
    title: 'Kopf-Nacken-Rückenmassage',
    subtitle: 'Umfassende Massage für den ganzen Oberkörper',
    description: 'Umfassende Massage für Kopf, Nacken und Rücken zur ganzheitlichen Entspannung.',
    duration: '30 Min',
    price: '39€',
    benefits: [
      'Ganzheitliche Entspannung',
      'Verspannungslösung',
      'Durchblutungsförderung',
      'Stressabbau',
      'Kopfschmerzlinderung',
      'Wohlbefinden'
    ],
    process: [
      'Beratung',
      'Vorbereitung',
      'Kopfmassage',
      'Nackenmassage',
      'Rückenmassage',
      'Entspannungsphase'
    ],
    suitableFor: [
      'Ganzheitliche Entspannung',
      'Kopfschmerzen',
      'Rückenbeschwerden',
      'Stressabbau',
      'Verspannte Muskulatur',
      'Wohlbefinden'
    ]
  }
]

export default function MassagenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Massage',
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
    description: 'Entspannende Massagen für Körper und Seele. Nacken-Massage, Hot Stone Massage, Kopf-Nacken-Rückenmassage.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '25',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '25',
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
      <TreatmentsDetail treatmentId={3} />
      <Footer />
    </main>
  )
}
