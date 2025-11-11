import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Augenbrauenkorrektur',
  description: 'Professionelle Augenbrauenkorrektur und Wimpernfärbung in Berlin-Friedrichshain. Perfekt geformte Augenbrauen für mehr Ausdruck. Zupfen, Waxing und Färben. Ab 15€.',
  keywords: [
    'Augenbrauenkorrektur Berlin',
    'Augenbrauen zupfen Berlin',
    'Augenbrauen waxing Berlin',
    'Wimpern färben Berlin',
    'Augenbrauen färben Berlin',
    'Brow Shaping Berlin',
    'Professionelle Augenbrauenpflege Berlin',
    'Augenbrauenkorrektur Friedrichshain',
    'Brow Correction Berlin',
    'Augenbrauen Design Berlin',
  ],
  openGraph: {
    title: 'Augenbrauenkorrektur | BeautySkin Berlin',
    description: 'Professionelle Augenbrauenkorrektur und Wimpernfärbung. Perfekt geformte Augenbrauen für mehr Ausdruck.',
    url: `${siteUrl}/augenbrauenkorrektur`,
    images: [`${siteUrl}/pinzette.webp`],
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: `${siteUrl}/augenbrauenkorrektur`,
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
    title: 'Augenbrauenkorrektur (Zupfen oder Waxing)',
    subtitle: 'Perfekte Augenbrauenform',
    description: 'Professionelle Formgebung Ihrer Augenbrauen durch Zupfen oder Waxing, individuell auf Ihre Gesichtsform abgestimmt.',
    duration: '15 Min',
    price: '15€',
    benefits: [
      'Individuelle Formgebung',
      'Präzise Arbeit',
      'Gesichtsangepasst',
      'Definition',
      'Frischer Ausdruck',
      'Professionell'
    ],
    process: [
      'Beratung zur optimalen Augenbrauenform',
      'Anpassung an Ihre Gesichtsform',
      'Präzises Zupfen oder Waxing',
      'Beruhigende Pflege'
    ],
    suitableFor: [
      'Alle Augenbrauenformen',
      'Unregelmäßige Brauen',
      'Definition gewünscht',
      'Regelmäßige Pflege',
      'Natürlicher Look',
      'Gesichtsbetonung'
    ]
  },
  {
    id: 2,
    title: 'Augenbrauen färben',
    subtitle: 'Intensive Farbe für ausdrucksstarke Brauen',
    description: 'Professionelles Färben der Augenbrauen für mehr Definition und Ausdruckskraft.',
    duration: '15 Min',
    price: '15€',
    benefits: [
      'Intensive Farbe',
      'Mehr Definition',
      'Ausdrucksstärke',
      'Langanhaltend',
      'Natürliches Ergebnis',
      'Professionell'
    ],
    process: [
      'Farbberatung',
      'Auswahl der passenden Farbe',
      'Professionelles Färben',
      'Einwirkzeit',
      'Sanfte Reinigung'
    ],
    suitableFor: [
      'Helle Augenbrauen',
      'Mehr Ausdruck gewünscht',
      'Natürlicher Look',
      'Langanhaltende Farbe',
      'Definition',
      'Alle Hauttypen'
    ]
  },
  {
    id: 3,
    title: 'Wimpern färben',
    subtitle: 'Intensive Farbe für ausdrucksstarke Wimpern',
    description: 'Professionelles Färben der Wimpern für einen natürlich intensiven Augenaufschlag ohne Mascara.',
    duration: '15 Min',
    price: '15€',
    benefits: [
      'Intensive Farbe',
      'Ohne Mascara',
      'Natürlicher Look',
      'Langanhaltend',
      'Wasserfest',
      'Zeitersparnis'
    ],
    process: [
      'Farbberatung',
      'Augenschutz',
      'Professionelles Färben',
      'Einwirkzeit',
      'Sanfte Reinigung'
    ],
    suitableFor: [
      'Helle Wimpern',
      'Natürlicher Look',
      'Ohne tägliche Mascara',
      'Urlaub & Strand',
      'Sport & Schwimmen',
      'Zeitersparnis'
    ]
  },
  {
    id: 4,
    title: 'Augenbrauen & Wimpern Kombipaket',
    subtitle: 'Zupfen und Färben für den perfekten Look',
    description: 'Komplettpaket: Augenbrauenkorrektur durch Zupfen und Färben von Augenbrauen und Wimpern für einen perfekt abgestimmten Look.',
    duration: '30 Min',
    price: '40€',
    benefits: [
      'Komplettbehandlung',
      'Perfekte Abstimmung',
      'Zeitersparnis',
      'Preisvorteile',
      'Ausdrucksstark',
      'Professionell'
    ],
    process: [
      'Umfassende Beratung',
      'Augenbrauenformung durch Zupfen',
      'Farbauswahl',
      'Färben von Augenbrauen und Wimpern',
      'Pflegende Abschlussbehandlung'
    ],
    suitableFor: [
      'Komplettlösung gewünscht',
      'Optimales Ergebnis',
      'Zeitersparnis',
      'Besondere Anlässe',
      'Regelmäßige Pflege',
      'Maximaler Ausdruck'
    ]
  }
]

export default function AugenbrauenkorrekturPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Augenbrauenkorrektur',
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
    description: 'Professionelle Augenbrauenkorrektur und Wimpernfärbung. Perfekt geformte Augenbrauen für mehr Ausdruck.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      price: '15',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '15',
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
      <TreatmentsDetail treatmentId={5} />
      <Footer />
    </main>
  )
}

