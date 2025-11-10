import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'
import { ServiceSchema } from '@/components/StructuredData'

export const metadata = {
  title: 'Dauerhafte Haarentfernung Berlin | Ice Diodenlaser',
  description: 'Professionelle dauerhafte Haarentfernung mit Ice Diodenlaser in Berlin Friedrichshain. Schmerzarm, effektiv und sicher für alle Hauttypen. Jetzt Termin buchen ab 15€.',
  alternates: {
    canonical: 'https://www.beautyskin-berlin.de/dauerhafte-haarentfernung',
  },
  openGraph: {
    title: 'Dauerhafte Haarentfernung Berlin - Ice Diodenlaser | BeautySkin',
    description: 'Schmerzarme dauerhafte Haarentfernung mit modernstem Ice Diodenlaser. Für Damen und Herren.',
    url: 'https://www.beautyskin-berlin.de/dauerhafte-haarentfernung',
    images: [{ url: 'https://www.beautyskin-berlin.de/Haarentfernunhg.webp' }],
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
  return (
    <main className="min-h-screen">
      <ServiceSchema
        name="Dauerhafte Haarentfernung mit Ice Diodenlaser Berlin"
        description="Professionelle dauerhafte Haarentfernung mit Ice Diodenlaser in Berlin Friedrichshain. Schmerzarm, effektiv und sicher für alle Hauttypen und Körperbereiche."
        category="Dauerhafte Haarentfernung"
        priceRange="15€ - 110€"
        duration="15-60 Minuten"
        url="https://www.beautyskin-berlin.de/dauerhafte-haarentfernung"
      />
      <Header />
      <TreatmentsDetail treatmentId={4} />
      <Footer />
    </main>
  )
}
