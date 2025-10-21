import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TreatmentsDetail } from '@/components/TreatmentsDetail'

export const metadata = {
  title: 'Massagen - BeautySkin',
  description: 'Entspannende Massagen für Körper und Seele. Nacken-Massage, Hot Stone, Kopf-Nacken-Rückenmassage und Lymphdrainage.',
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
  return (
    <main className="min-h-screen">
      <Header />
      <TreatmentsDetail treatmentId={3} />
      <Footer />
    </main>
  )
}
