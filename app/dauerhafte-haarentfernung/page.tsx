import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  title: 'Dauerhafte Haarentfernung',
  description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser in Berlin-Friedrichshain. Schmerzarm, sicher und effektiv für alle Hauttypen. Laser Haarentfernung für Gesicht, Beine, Arme, Bikinizone. Preise ab 15€. Jetzt Termin anfragen!',
  keywords: [
    'Laser Haarentfernung Berlin',
    'Dauerhafte Haarentfernung Berlin',
    'Laser Haarentfernung Friedrichshain',
    'Ice Diodenlaser Berlin',
    'Laser Epilation Berlin',
    'Haarentfernung Gesicht Berlin',
    'Laser Beine Berlin',
    'Laser Bikinizone Berlin',
    'Schmerzarme Haarentfernung Berlin',
    'Professionelle Laser Haarentfernung',
  ],
  openGraph: {
    title: 'Dauerhafte Haarentfernung | BeautySkin Berlin',
    description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser. Schmerzarm und effektiv für alle Hauttypen.',
    url: `${siteUrl}/dauerhafte-haarentfernung`,
    images: [`${siteUrl}/Dauerhaft Hero.webp`],
    type: 'website',
    locale: 'de_DE',
  },
  alternates: {
    canonical: `${siteUrl}/dauerhafte-haarentfernung`,
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

const femaleTreatments = [
  { name: 'Gesicht komplett', price: '40€' },
  { name: 'Kinn', price: '15€' },
  { name: 'Wangen', price: '25€' },
  { name: 'Hals', price: '25€' },
  { name: 'Nacken', price: '35€' },
  { name: 'Schultern', price: '40€' },
  { name: 'Achseln', price: '35€' },
  { name: 'Brust', price: '30€' },
  { name: 'Arme komplett', price: '60€' },
  { name: 'Unterarm', price: '35€' },
  { name: 'Hände', price: '20€' },
  { name: 'Rücken', price: '50€' },
  { name: 'Bikinizone', price: '45€' },
  { name: 'Bikizone und Intimbereich', price: '60€' },
  { name: 'Unterschenkel', price: '45€' },
  { name: 'Oberschenkel', price: '55€' },
  { name: 'Beine komplett', price: '99€' },
  { name: 'Po', price: '35€' },
  { name: 'Pofalte', price: '25€' },
  { name: 'Füße', price: '20€' }
]

const maleTreatments = [
  { name: 'Wangen', price: '25€' },
  { name: 'Brust', price: '60€' },
  { name: 'Schultern', price: '45€' },
  { name: 'Achseln', price: '40€' },
  { name: 'Arme komplett', price: '75€' },
  { name: 'Unterer Rücken', price: '55€' },
  { name: 'Rücken', price: '80€' },
  { name: 'Bauch', price: '65€' },
  { name: 'Unterschenkel', price: '75€' },
  { name: 'Oberschenkel', price: '65€' },
  { name: 'Beine komplett', price: '110€' }
]

export default function DauerhafteHaarentfernungPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Dauerhafte Haarentfernung',
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
    description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser. Schmerzarm, sicher und effektiv für alle Hauttypen.',
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
      <TreatmentsDetail treatmentId={4} />
      <Footer />
    </main>
  )
}
