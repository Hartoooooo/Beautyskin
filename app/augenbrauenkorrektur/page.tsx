import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

export const metadata = {
  title: 'Augenbrauenkorrektur - BeautySkin',
  description: 'Professionelle Augenbrauenkorrektur und Wimpernfärbung. Perfekt geformte Augenbrauen für mehr Ausdruck.',
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
  return (
    <main className="min-h-screen">
      <Header />
      <TreatmentsDetail treatmentId={5} />
      <Footer />
    </main>
  )
}

