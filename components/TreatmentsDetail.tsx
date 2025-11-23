'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Clock, Star, CheckCircle, Sparkles, Heart, Eye, ChevronDown, ChevronUp } from 'lucide-react'
import AddTreatmentButton from './AddTreatmentButton'

// Function to get specific benefits for each treatment
const getTreatmentBenefits = (treatmentName: string) => {
  const benefitsMap: { [key: string]: string[] } = {
    // Gesichtsbehandlungen
    'BeautySkin Klassik': [
      'Professionelle Hautanalyse',
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Intensive Pflege',
      'Entspannende Massage',
      'Abschlusspflege'
    ],
    'BeautySkin Relax': [
      'Entspannende Massage',
      'Beruhigende Pflege',
      'Stressabbau',
      'Wohlbefinden',
      'Tiefenreinigung',
      'Regeneration'
    ],
    'BeautySkin Hautklar': [
      'Intensive Reinigung',
      'Klärende Wirkstoffe',
      'Porenreinigung',
      'Hautklarung',
      'Anti-Bakteriell',
      'Strahlende Haut'
    ],
    'BeautySkin Unreine Haut': [
      'Intensive Reinigung',
      'Entzündungshemmend',
      'Bakterienreduktion',
      'Hautberuhigung',
      'Narbenminderung',
      'Hautregeneration'
    ],
    'BeautySkin Reine Männersache': [
      'Männergerechte Pflege',
      'Intensive Reinigung',
      'Gesichtsmassage',
      'Schutzpflege',
      'Hautstraffung',
      'Anti-Aging'
    ],
    'BeautySkin Deluxe': [
      'Hautanalyse',
      'Tiefenreinigung',
      'Ultraschallpflege',
      'Augenpflege',
      'Premium-Maske',
      'Glow-Finish'
    ],
    // Apparative Behandlungen
    'Aqua Facial Behandlung': [
      'Tiefe Reinigung',
      'Intensive Hydratation',
      'Porenreinigung',
      'Hautstraffung',
      'Glow-Effekt',
      'Schmerzarm'
    ],
    'Skin Oximizer': [
      'Sauerstoffversorgung',
      'Verbesserte Durchblutung',
      'Strahlender Teint',
      'Hautregeneration',
      'Anti-Aging',
      'Energizing'
    ],
    'Micro Needling': [
      'Hauterneuerung',
      'Kollagenbildung',
      'Faltenreduktion',
      'Narbenminderung',
      'Porenverkleinerung',
      'Professionell'
    ],
    'Diamant Mikrodermabrasion': [
      'Glatte Haut',
      'Strahlender Teint',
      'Peeling-Effekt',
      'Hauterneuerung',
      'Professionell',
      'Schmerzarm'
    ],
    'Radiofrequenzbehandlung': [
      'Hautstraffung',
      'Kollagenbildung',
      'Faltenreduktion',
      'Konturierung',
      'Anti-Aging',
      'Langzeitwirkung'
    ],
    // Massagen
    'Nacken-Massage': [
      'Verspannungslösung',
      'Schmerzlinderung',
      'Durchblutungsförderung',
      'Stressabbau',
      'Beweglichkeit',
      'Schnelle Entlastung'
    ],
    'Entspannungsmassage mit Hot Stone': [
      'Muskelentspannung',
      'Wärmetherapie',
      'Stressabbau',
      'Durchblutungsförderung',
      'Wohlbefinden',
      'Pflegendes Öl'
    ],
    'Kopf-Nacken-Rückenmassage': [
      'Muskelentspannung',
      'Stressabbau',
      'Schmerzlinderung',
      'Durchblutungsförderung',
      'Kopffreiheit',
      'Wohlbefinden'
    ],
    'Brasilianische Lymphdrainage': [
      'Entschlackung',
      'Entwässerung',
      'Stoffwechselanregung',
      'Entspannung',
      'Wohlbefinden',
      'Straffung'
    ],
    // Augenbrauenkorrektur
    'Augenbrauenkorrektur (Zupfen oder Waxing)': [
      'Individuelle Formgebung',
      'Präzise Arbeit',
      'Gesichtsangepasst',
      'Definition',
      'Frischer Ausdruck',
      'Professionell'
    ],
    'Augenbrauen färben': [
      'Intensive Farbe',
      'Mehr Definition',
      'Ausdrucksstärke',
      'Langanhaltend',
      'Natürliches Ergebnis',
      'Professionell'
    ],
    'Wimpern färben': [
      'Intensive Farbe',
      'Ohne Mascara',
      'Natürlicher Look',
      'Langanhaltend',
      'Wasserfest',
      'Zeitersparnis'
    ],
    'Augenbrauen & Wimpern Kombipaket': [
      'Komplettbehandlung',
      'Perfekte Abstimmung',
      'Zeitersparnis',
      'Preisvorteil',
      'Ausdrucksstark',
      'Professionell'
    ]
  }
  
  return benefitsMap[treatmentName] || ['Professionelle Behandlung', 'Individuelle Beratung', 'Hochwertige Produkte', 'Entspannung']
}

// Function to get detailed process steps for each treatment
const getTreatmentProcess = (treatmentName: string) => {
  const processMap: { [key: string]: string[] } = {
    'BeautySkin Klassik': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage: Eine entspannende Massage von Gesicht, Hals und Dekolleté fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
      'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln.'
    ],
    'BeautySkin Deluxe': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell auf Ihre Hautbedürfnisse abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem sanften Enzympeeling vorbereitet, um abgestorbene Hautzellen zu entfernen und die Aufnahmefähigkeit der Haut zu verbessern.',
      'Ausreinigung: Verstopfte Poren und Unreinheiten werden schonend entfernt, um die Haut zu klären und für die Wirkstoffpflege vorzubereiten.',
      'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wird eingearbeitet, um die Haut intensiv zu versorgen und ihre Regeneration zu fördern.',
      'Augenkorrektur & Augenbrauenform: Bei Bedarf werden Augenbrauen in Form gebracht und kleine Korrekturen durchgeführt, um das gepflegte Gesamtbild zu unterstreichen.',
      'Gesicht-, Hals- & Dekolleté-Massage: Eine wohltuende Massage sorgt für Entspannung, fördert die Durchblutung und lässt die Haut praller und vitaler erscheinen.',
      'Maske mit Ultraschall: Eine hochwertige Maske wird mithilfe von Ultraschall tief in die Haut eingearbeitet, um die Wirkstoffaufnahme zu optimieren und das Ergebnis zu intensivieren.',
      'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird eine reichhaltige Pflege aufgetragen, die die Haut schützt und ihr ein strahlendes, frisches Aussehen verleiht.'
    ],
    'BeautySkin Relax': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Peeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und die Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage Gesicht, Hals, Dekolleté, Arme & Hände: Eine ausgedehnte Massage umfasst Gesicht, Hals, Dekolleté sowie Arme und Hände und sorgt für tiefgehende Entspannung und ein rundum gelöstes Hautgefühl.',
      'Maske: Eine passende Maske unterstützt die Hautregeneration und intensiviert das Ergebnis.',
      'Abschlusspflege mit Augencreme & UV-Schutz: Zum Abschluss wird die Haut mit einer pflegenden Creme und UV-Schutz versiegelt, während eine spezielle Augenpflege die empfindliche Partie um die Augen gezielt versorgt.'
    ],
    'BeautySkin Hautklar': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um alle folgenden Schritte individuell anzupassen.',
      'Reinigung & Enzympeeling: Die Haut wird sanft gereinigt und mit einem Enzympeeling vorbereitet, sodass abgestorbene Hautschüppchen gelöst werden und Wirkstoffe besser eindringen können.',
      'Ausreinigung: Unreinheiten und verstopfte Poren werden gründlich, aber schonend entfernt, um das Hautbild sichtbar zu klären.',
      'Wirkstoffpflege: Eine passende Wirkstoffampulle wird aufgetragen, um die Haut gezielt mit Feuchtigkeit, Beruhigung oder regenerierenden Inhaltsstoffen zu versorgen.',
      'Massage Gesicht, Hals & Dekolleté: Eine wohltuende Massage fördert die Durchblutung und sorgt für ein gelöstes, frisches Hautgefühl.',
      'Maske: Eine passende Maske beruhigt die Haut, unterstützt die Regeneration und verfeinert das Erscheinungsbild.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um das Ergebnis zu versiegeln und vor äußeren Einflüssen zu schützen.'
    ],
    'BeautySkin Unreine Haut': [
      'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung gezielt auf die Bedürfnisse unreiner Haut abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gereinigt und mit einem Enzympeeling vorbereitet, um überschüssige Hornschüppchen zu lösen und die Poren freizugeben.',
      'Intensive Ausreinigung: Verstopfungen und Unreinheiten werden gründlich entfernt, um die Haut tief zu klären und Unterlagerungen zu reduzieren.',
      'Wirkstoffampulle: Eine speziell ausgewählte Wirkstoffampulle wirkt talgregulierend und beruhigend auf irritierte Hautbereiche.',
      'Hochfrequenz-Stab: Zur Desinfektion der behandelten Partien wird der Hochfrequenz-Stab eingesetzt, um Entzündungen zu mindern und die Haut zu beruhigen.',
      'Maske: Eine passende Maske wird kombiniert, um die Haut zu klären und auszugleichen.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine passende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu stabilisieren.',
      'Hinweis: Bei dieser Behandlung wird ausschließlich mit Microsilver-Produkten gearbeitet.'
    ],
    'BeautySkin Reine Männersache': [
      'Hautanalyse: Zu Beginn wird der Hautzustand analysiert, um die Behandlung individuell auf die Bedürfnisse der Männerhaut abzustimmen.',
      'Reinigung & Enzympeeling: Die Haut wird gründlich gereinigt und mit einem Enzympeeling vorbereitet, damit abgestorbene Hautzellen gelöst werden und die Poren frei werden.',
      'Ausreinigung: Unreinheiten und Ablagerungen werden sanft, aber gründlich entfernt, um die Haut zu klären und ein frisches Hautgefühl zu schaffen.',
      'Wirkstoffampulle: Eine speziell ausgewählte Ampulle versorgt die Haut mit Feuchtigkeit und regenerierenden Wirkstoffen, die Vitalität und Spannkraft fördern.',
      'Hochfrequenz-Stab: Durch die Anwendung des Hochfrequenz-Stabs wird die Haut desinfiziert, beruhigt und die Durchblutung angeregt.',
      'Gesichtsmassage: Eine entspannende Massage löst Spannungen und sorgt für ein vitalisiertes, erholtes Erscheinungsbild.',
      'Maske: Eine passende Maske rundet die Behandlung ab und verleiht der Haut ein gepflegtes, ausgeglichenes Gefühl.',
      'Abschlusspflege mit UV-Schutz: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut vor äußeren Einflüssen zu bewahren.'
    ],
    'AHA Fruchtsäurepeeling': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um die Fruchtsäurekonzentration individuell auf Ihre Haut abzustimmen.',
      'Reinigung & Vorbereitung: Die Haut wird gründlich gereinigt und vorbereitet, damit die Fruchtsäure ihre volle Wirkung entfalten kann.',
      'AHA Fruchtsäurepeeling: Die dermato-kosmetischen Fruchtsäuren entfernen Verhornungen, verfeinern die Poren und mildern Falten sowie Pigmentstörungen. Gleichzeitig wird die Zellerneuerung aktiviert und die Bildung von körpereigenem Kollagen und Elastin angeregt.',
      'Wirkstoffampulle & Maske: Nach dem Peeling wird eine regenerierende Ampulle aufgetragen, gefolgt von einer beruhigenden Maske, um die Haut zu pflegen und zu stabilisieren.',
      'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und das Ergebnis zu bewahren.'
    ],
    'Anti-Aging Kräuter-Peeling (Herbs2Peel)': [
      'Hautanalyse: Zu Beginn wird der Hautzustand professionell analysiert, um die Kräutermischung optimal auf die individuellen Hautbedürfnisse abzustimmen.',
      'Reinigung & Vorbereitung: Die Haut wird gründlich gereinigt, damit die natürlichen Kräuterwirkstoffe optimal aufgenommen werden können.',
      'Kräuter-Peeling: Das Kräuterpeeling wird sanft einmassiert, wodurch die Hautregeneration aktiviert, das Hautbild verfeinert und die Zellerneuerung gefördert wird.',
      'Maske & Wirkstoffpflege: Eine pflegende Maske beruhigt die Haut, während eine Wirkstoffpflege Feuchtigkeit spendet und das Ergebnis unterstützt.',
      'Abschlusspflege: Zum Abschluss wird eine schützende Pflege mit UV-Schutz aufgetragen, um die Haut zu schützen und den Erneuerungsprozess zu stabilisieren.'
    ],
    'Aqua Facial Behandlung': [
      'Das Aqua Facial ist eine effektive, wasserbasierte Gesichtsbehandlung, bei der die Haut mit einem sanften Vakuum gereinigt und gleichzeitig mit Feuchtigkeit versorgt wird. Make-up-Reste, Talg, Schmutz und abgestorbene Hautzellen werden gelöst und direkt abgesaugt, ohne die Haut zu reizen.',
      'Während die Poren geklärt werden, werden hochwirksame Wirkstoffkomplexe eingeschleust, die die Haut glatter, frischer und strahlender wirken lassen. Ideal bei unreiner, fahler oder gestresster Haut – für einen sofort sichtbaren, ebenmäßigen Teint.',
      'Ideal geeignet bei: Unreine Haut & Mitesser, Verstopfte Poren & Akne-Anzeichen, Fahle oder müde Haut ohne Glow, Feuchtigkeitsmangel / gestresste Haut, Pigmentflecken & ungleichmäßiger Teint, Erste Falten / Haut wirkt grobporig',
      'Ergebnis: Die Haut wirkt nicht nur gereinigt, sondern sichtbar erfrischt, durchfeuchtet und feiner. Das Aqua Facial ist die perfekte Behandlung, wenn Sie sich ein klares, glattes und strahlendes Hautbild ohne Reizungen wünschen.'
    ],
    'Skin Oximizer': [
      'Der Skin Oximizer ist eine revitalisierende Gesichtsbehandlung, die die Haut mit Sauerstoff und regenerierenden Wirkstoffen versorgt. Durch gezielte Sauerstoffanreicherung wird die Hautdurchblutung angeregt, Zellen aktiviert und die Aufnahmefähigkeit für Wirkstoffe deutlich verbessert.',
      'Die Behandlung sorgt für ein frisches, pralles und sichtbar vitaleres Hautbild. Müdigkeit, fahler Teint und gestresste Hautstrukturen werden gemildert – ideal, wenn die Haut neue Energie und einen sofortigen Frischekick benötigt.',
      'Ideal geeignet bei: Fahler oder müder Haut, Sauerstoff- und Energiedefizit der Haut, Feuchtigkeitsmangel & gestresster Haut, Erschlaffter Hautstruktur & fehlender Spannkraft, Erschöpftem Teint ohne Ausstrahlung, Ersten Linien & mattem Hautbild',
      'Ergebnis: Die Haut wirkt erfrischt, rosig durchblutet und sichtbar vitaler. Der Skin Oximizer ist ideal, wenn die Haut neue Energie, mehr Ausstrahlung und einen natürlichen Glow erhalten soll.'
    ],
    'Micro Needling': [
      'Micro Needling ist eine hochwirksame Anti-Aging-Behandlung, bei der die Haut durch feine Mikronadeln gezielt stimuliert wird. Diese sanften Mikroverletzungen aktivieren die körpereigene Kollagen- und Elastinproduktion, wodurch die Hautstruktur langfristig gefestigt und geglättet wird.',
      'Die Behandlung verbessert die Aufnahme von Wirkstoffen, mildert Fältchen und Narben und sorgt für ein ebenmäßiges, vitales Hautbild. Ideal, um Hauterneuerung und Straffung auf natürliche Weise anzuregen.',
      'Ideal geeignet bei: Falten & Linien, Narben & Aknenarben, Grobporiger Haut, Elastizitätsverlust, Pigmentflecken & unebenem Teint, Müder, fahler Haut',
      'Ergebnis: Die Haut wirkt straffer, glatter und jugendlicher. Micro Needling fördert die natürliche Regeneration, verbessert die Hautstruktur sichtbar und sorgt für ein dauerhaft ebenmäßiges Hautbild.'
    ],
    'Diamant Microdermabrasion': [
      'Die Diamant Mikrodermabrasion ist eine sanfte, aber effektive Methode zur Hauterneuerung. Mit feinen Diamantaufsätzen werden abgestorbene Hautzellen abgetragen, wodurch die Haut glatter, klarer und aufnahmefähiger für Wirkstoffe wird. Diese mechanische Tiefenbehandlung regt die Zellerneuerung an und verfeinert das Hautbild sichtbar.',
      'Durch die kontrollierte Abtragung wirkt die Haut frischer, gleichmäßiger und strahlender. Ideal für alle, die ihr Hautbild verbessern, kleine Unebenheiten mindern und neue Hautfrische erleben möchten.',
      'Ideal geeignet bei: Grobporiger Haut, Pigmentflecken & Sonnenschäden, Narben & Aknenarben, Falten & Linien, Verhornter rauer Haut, Müdem fahlen Teint',
      'Vorteile: Hauterneuerung, Porenverfeinerung, Pigmentausgleich, Glatte Haut, Schmerzarm, Wirkstoffaufnahme',
      'Ergebnis: Die Haut wirkt sofort glatter, reiner und ebenmäßiger. Die Diamant Mikrodermabrasion ist perfekt, um den Teint aufzufrischen, die Hautstruktur zu verfeinern und einen jugendlich strahlenden Glow zu erzielen.'
    ],
    'Diamant Mikrodermabrasion': [
      'Die Diamant Mikrodermabrasion ist eine sanfte, aber effektive Methode zur Hauterneuerung. Mit feinen Diamantaufsätzen werden abgestorbene Hautzellen abgetragen, wodurch die Haut glatter, klarer und aufnahmefähiger für Wirkstoffe wird. Diese mechanische Tiefenbehandlung regt die Zellerneuerung an und verfeinert das Hautbild sichtbar.',
      'Durch die kontrollierte Abtragung wirkt die Haut frischer, gleichmäßiger und strahlender. Ideal für alle, die ihr Hautbild verbessern, kleine Unebenheiten mindern und neue Hautfrische erleben möchten.',
      'Ideal geeignet bei: Grobporiger Haut, Pigmentflecken & Sonnenschäden, Narben & Aknenarben, Falten & Linien, Verhornter, rauer Haut, Müdem, fahlen Teint',
      'Ergebnis: Die Haut wirkt sofort glatter, reiner und ebenmäßiger. Die Diamant Mikrodermabrasion ist perfekt, um den Teint aufzufrischen, die Hautstruktur zu verfeinern und einen jugendlich strahlenden Glow zu erzielen.'
    ],
    'Radiofrequenzbehandlung': [
      'Die Radiofrequenzbehandlung ist eine effektive Methode zur Hautstraffung und Verjüngung. Durch gezielte Erwärmung der tieferen Hautschichten wird die Kollagenproduktion stimuliert, die Elastizität verbessert und das Gewebe gestrafft – ganz ohne chirurgischen Eingriff.',
      'Die Behandlung sorgt für eine sichtbare Glättung der Haut, definiert die Gesichtskonturen und verleiht einen jugendlich frischen Ausdruck. Ideal, um erschlaffter Haut neue Spannkraft und Festigkeit zu schenken.',
      'Ideal geeignet bei: Falten & feinen Linien, Elastizitätsverlust, Erschlaffter Gesichtskontur, Müder, fahler Haut, Grobporiger Hautstruktur, Vorbeugung gegen Hautalterung',
      'Ergebnis: Die Haut wirkt straffer, glatter und frischer. Die Radiofrequenzbehandlung aktiviert die körpereigene Regeneration, stärkt das Bindegewebe und sorgt für ein langanhaltend verjüngtes Hautbild.'
    ],
    'Nacken-Massage': [
      'Eine gezielte Massage zur Lockerung der Nacken- und Schulterpartie. Durch sanften Druck und kreisende Bewegungen werden Verspannungen gelöst, die Durchblutung gefördert und muskuläre Blockaden gelindert.',
      'Ideal bei Stress, einseitiger Haltung oder nach langen Arbeitstagen.',
      'Ergebnis: Ein entspanntes Nacken- und Schultergefühl, spürbar mehr Leichtigkeit und neue Energie für den Alltag.'
    ],
    'Entspannungsmassage mit Hot Stone': [
      'Erleben Sie pure Entspannung und wohltuende Wärme für Körper und Geist. Sanfte, rhythmische Massagebewegungen fördern die Durchblutung, lösen Muskelverspannungen und bringen den Körper wieder in Balance.',
      'Die Hot Stone Massage kombiniert diese Technik mit warmen Basaltsteinen, die gezielt auf den Körper gelegt werden. Die gespeicherte Wärme dringt tief in die Muskulatur ein und sorgt für ein intensives Gefühl von Ruhe und Geborgenheit.',
      'Verwendet wird dabei hochwertiges, warmes Öl, das die Haut pflegt und die Entspannung zusätzlich vertieft.',
      'Ergebnis: Spürbar gelöste Muskeln, tiefe Entspannung und ein rundum harmonisches Körpergefühl – ideal, um den Alltag hinter sich zu lassen.'
    ],
    'Kopf-Nacken-Rückenmassage': [
      'Verspannungen im Nacken- und Rückenbereich gehören zu den häufigsten Beschwerden im Alltag – verursacht durch Stress, einseitige Belastung oder langes Sitzen. Diese Massage löst gezielt muskuläre Spannungen im Nacken-, Schulter- und Rückenbereich und sorgt für eine spürbare Entlastung.',
      'Durch sanfte, fließende Bewegungen und den Einsatz von warmem Öl werden Verspannungen gelockert und die Durchblutung gefördert. Die wohltuende Wärme der Hot Stones dringt tief in die Muskulatur ein und unterstützt die Entspannung zusätzlich.',
      'Ideal bei Verspannungen durch sitzende Tätigkeiten oder einseitige Belastungen – für mehr Beweglichkeit und innere Ruhe.',
      'Ergebnis: Ein gelöster Rücken, entspannter Nacken und ein klarer Kopf – für ein rundum leichtes und befreites Körpergefühl.'
    ],
    'Brasilianische Lymphdrainage': [
      'Die Brasilianische Lymphdrainage ist eine sanfte Massagetechnik, die das Lymphsystem aktiviert und den Abtransport von Schlackenstoffen und überschüssiger Flüssigkeit fördert.',
      'Durch gezielte, rhythmische Bewegungen wird der Lymphfluss angeregt, was zu einer Entschlackung, Entwässerung und Straffung des Gewebes führt.',
      'Ideal geeignet bei: Wassereinlagerungen, Cellulite, Schwellungen, Stoffwechselproblemen, Müdigkeit, Spannungsgefühl',
      'Ergebnis: Ein entschlackter Körper, verbesserte Durchblutung und ein spürbar leichteres Körpergefühl. Die Brasilianische Lymphdrainage unterstützt die natürliche Entgiftung und sorgt für mehr Vitalität.'
    ]
  }
  
  return processMap[treatmentName] || []
}

// Function to get duration for each specific treatment
const getTreatmentDuration = (treatmentName: string, categoryId: number) => {
  if (categoryId === 1) {
    // Gesichtsbehandlung
    const durationMap: { [key: string]: string } = {
      'BeautySkin Klassik': '60 Min',
      'BeautySkin Deluxe': '60 Min',
      'BeautySkin Relax': '60 Min',
      'BeautySkin Hautklar': '45 Min',
      'BeautySkin Unreine Haut': '60 Min',
      'BeautySkin Reine Männersache': '60 Min',
      'AHA Fruchtsäurepeeling': '45 Min',
      'Anti-Aging Kräuter-Peeling (Herbs2Peel)': '60 Min'
    }
    return durationMap[treatmentName] || '60 Min'
  } else if (categoryId === 2) {
    // Apparative Behandlungen
    const durationMap: { [key: string]: string } = {
      'Aqua Facial Behandlung': '60 Min',
      'Skin Oximizer': '60 Min',
      'Microneedling mit Hyaluronsäure': '60 Min',
      'Microneedling mit Exosomen / PDRN': '60 Min',
      'Diamant Microdermabrasion': '60 Min',
      'Diamant Mikrodermabrasion': '60 Min',
      'Radiofrequenzbehandlung': '60 Min'
    }
    return durationMap[treatmentName] || '60 Min'
  } else if (categoryId === 3) {
    // Massagen
    const durationMap: { [key: string]: string } = {
      'Nacken-Massage': '15 Min',
      'Entspannungsmassage mit Hot Stone': '45 Min',
      'Kopf-Nacken-Rückenmassage': '30 Min',
      'Brasilianische Lymphdrainage': '60 Min'
    }
    return durationMap[treatmentName] || '60 Min'
  } else if (categoryId === 5) {
    // Augenbrauenkorrektur
    const durationMap: { [key: string]: string } = {
      'Augenbrauenkorrektur (Zupfen oder Waxing)': '15 Min',
      'Augenbrauen färben': '15 Min',
      'Wimpern färben': '15 Min',
      'Augenbrauen & Wimpern Kombipaket': '30 Min'
    }
    return durationMap[treatmentName] || '15 Min'
  }
  return '60 Min'
}

const treatments = [
  {
    id: 1,
    title: 'Gesichtsbehandlung',
    subtitle: 'Professionelle Gesichtspflege',
    description: 'Unsere professionellen Gesichtsbehandlungen für gesunde und strahlende Haut.',
    fullDescription: 'Unsere hochqualitative Gesichtsbehandlung pflegt und revitalisiert die Haut mit einer Maske und optionalen Seren. Sie hinterlässt ein strahlendes, erfrischtes und verjüngtes Hautbild.',
    icon: Heart,
    duration: '45-60 Min',
    price: 'ab 49€',
    benefits: [
      'Professionelle Hautanalyse',
      'Tiefenreinigung',
      'Sanftes Peeling',
      'Intensive Pflege',
      'Entspannende Massage',
      'Individuelle Beratung'
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
      'Trockene Haut',
      'Fettige Haut',
      'Mischhaut',
      'Empfindliche Haut',
      'Anti-Aging'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['BeautySkin Klassik', 'BeautySkin Deluxe', 'AHA Peeling', 'Anti-Aging Kräuter-Peeling'],
    treatments: [
      {
        name: 'BeautySkin Klassik',
        description: 'Klassische Gesichtsbehandlung mit Reinigung, Peeling und Pflege',
        price: '69€'
      },
      {
        name: 'BeautySkin Deluxe',
        description: 'Premium Gesichtsbehandlung mit exklusiver Pflege',
        price: '89€'
      },
      {
        name: 'BeautySkin Relax',
        description: 'Entspannende Gesichtsbehandlung mit Massage und beruhigender Pflege',
        price: '75€'
      },
      {
        name: 'BeautySkin Hautklar',
        description: 'Spezielle Behandlung für klare und reine Haut',
        price: '49€'
      },
      {
        name: 'BeautySkin Unreine Haut',
        description: 'Intensive Behandlung für unreine und problematische Haut',
        price: '75€'
      },
      {
        name: 'BeautySkin Reine Männersache',
        description: 'Speziell für Männer entwickelte Gesichtsbehandlung',
        price: '69€'
      },
      {
        name: 'AHA Fruchtsäurepeeling',
        description: 'Hautverfeinernde Behandlung mit Fruchtsäuren',
        price: '69€'
      },
      {
        name: 'Anti-Aging Kräuter-Peeling (Herbs2Peel)',
        description: 'natürliches professionelles Kräuterpeeling zur Regeneration und Korrektur der Haut individuel angepasst an ihren Hauttyp. Gesicht, Hals, Dekollete. Kur angebot 4 Behandlung für 450€',
        price: 'ab 120€',
        variants: [
          { name: 'Normale Behandlung', price: '120€' },
          { name: 'Kur-Angebot (4 Behandlungen)', price: '450€' }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Apparative Behandlungen',
    subtitle: 'Moderne Technologie für optimale Ergebnisse',
    description: 'Hochmoderne apparative Behandlungen für intensive Hautverbesserung.',
    fullDescription: 'Eine apparative Gesichtsbehandlung im Kosmetikstudio verwendet modernste Technologien, um spezielle Hautprobleme zu behandeln. Je nach Bedarf können verschiedene Geräte eingesetzt werden, um die Haut zu reinigen, zu glätten oder zu straffen.',
    icon: Sparkles,
    duration: '60 Min',
    price: 'ab 69€',
    benefits: [
      'Moderne Geräte',
      'Intensive Behandlung',
      'Schnelle Ergebnisse',
      'Schmerzarm',
      'Alle Hauttypen geeignet',
      'Professionelle Ausführung'
    ],
    process: [
      'Hautanalyse',
      'Vorbereitung',
      'Apparative Behandlung',
      'Beruhigende Pflege',
      'Nachsorge',
      'Pflegeanleitung'
    ],
    suitableFor: [
      'Anti-Aging',
      'Hauterneuerung',
      'Faltenbehandlung',
      'Narbenbehandlung',
      'Große Poren',
      'Alle Hauttypen'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Aqua Facial', 'Skin Oximizer', 'Micro Needling', 'Radiofrequenz'],
    treatments: [
      {
        name: 'Aqua Facial Behandlung',
        description: 'Revolutionäre Wasserbehandlung für tiefe Reinigung und Hydratation',
        price: '79€'
      },
      {
        name: 'Skin Oximizer',
        description: 'Sauerstoffbehandlung für strahlende und gesunde Haut',
        price: '99€'
      },
      {
        name: 'Micro Needling',
        description: 'Minimale Nadelbehandlung für Hauterneuerung und Kollagenbildung',
        price: 'ab 99€',
        variants: [
          { name: 'Hyaluronsäure', price: '99€' },
          { name: 'Exosomen / PDRN', price: '125€' }
        ]
      },
      {
        name: 'Diamant Microdermabrasion',
        description: 'Die Diamant Mikrodermabrasion ist eine sanfte, aber effektive Methode zur Hauterneuerung.',
        price: '69€'
      },
      {
        name: 'Radiofrequenzbehandlung',
        description: 'Wärmeenergie für Straffung und Hautverbesserung',
        price: '75€'
      }
    ]
  },
  {
    id: 3,
    title: 'Massagen',
    subtitle: 'Entspannung und Wohlbefinden',
    description: 'Entspannende Massagen für Körper und Seele.',
    fullDescription: 'Eine entspannende Massage ist eine wahre Wohltat für Körper und Geist. Die Massage ist eine der ältesten Formen der Heilung und ein großartiger Weg, um schnell in einen entspannten Geisteszustand zu gelangen.',
    icon: Heart,
    duration: '15-45 Min',
    price: 'ab 25€',
    benefits: [
      'Entspannung der Muskulatur',
      'Verbesserte Durchblutung',
      'Stressabbau',
      'Wohlbefinden',
      'Verspannungslösung',
      'Regeneration'
    ],
    process: [
      'Beratung',
      'Vorbereitung',
      'Massagebehandlung',
      'Entspannungsphase',
      'Nachpflege',
      'Entspannungstipps'
    ],
    suitableFor: [
      'Verspannte Muskulatur',
      'Stressabbau',
      'Entspannungssuchende',
      'Durchblutungsförderung',
      'Wohlbefinden',
      'Regeneration'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Nacken-Massage', 'Hot Stone', 'Rücken-Massage'],
    treatments: [
      {
        name: 'Nacken-Massage',
        description: 'Entspannende Massage für Nacken und Schultern',
        price: '25€'
      },
      {
        name: 'Entspannungsmassage mit Hot Stone',
        description: 'Wohltuende Massage mit warmen Steinen für tiefe Entspannung',
        price: '59€'
      },
      {
        name: 'Kopf-Nacken-Rückenmassage',
        description: 'Umfassende Massage für Kopf, Nacken und Rücken',
        price: '39€'
      },
      {
        name: 'Brasilianische Lymphdrainage',
        description: 'Sanfte Massage zur Aktivierung des Lymphsystems',
        price: 'ab 99€',
        variants: [
          { name: 'Körper', price: '99€' },
          { name: 'Körper + Gesicht', price: '120€' }
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Dauerhafte Haarentfernung',
    subtitle: 'Ice Diodenlaser für dauerhafte Ergebnisse',
    description: 'Professionelle dauerhafte Haarentfernung mit modernstem Ice Diodenlaser.',
    fullDescription: 'Unsere dauerhafte Haarentfernung nutzt modernste Ice Diodenlaser-Technologie für langfristige Ergebnisse. Schmerzarm, effektiv und für alle Hauttypen geeignet.',
    icon: Eye,
    duration: '15-60 Min',
    price: 'ab 15€',
    benefits: [
      'Dauerhafte Ergebnisse',
      'Schmerzarm durch Kühlung',
      'Alle Hauttypen',
      'Schnelle Behandlung',
      'Keine Ausfallzeiten',
      'Langfristig kostengünstig'
    ],
    process: [
      'Beratung und Hautanalyse',
      'Vorbereitung der Haut',
      'Ice Diodenlaser-Behandlung',
      'Beruhigende Pflege',
      'Nachsorge-Empfehlungen',
      'Terminplanung'
    ],
    suitableFor: [
      'Alle Hauttypen',
      'Dunkle Haare',
      'Große Behandlungsflächen',
      'Zeitersparend',
      'Dauerhafte Lösung',
      'Schmerzempfindliche'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Ice Diodenlaser', 'Dauerhaft', 'Schmerzarm', 'Effektiv'],
    treatments: [
      {
        name: 'Für Frauen',
        description: 'Spezielle Preise für weibliche Kunden',
        price: 'Gesicht komplett 40€, Kinn 15€, Wangen 25€, Hals 25€, Nacken 35€, Schultern 40€, Achseln 35€, Brust 30€, Arme komplett 60€, Unterarm 35€, Hände 20€, Rücken 50€, Bikinizone 45€, Bikizone und Intimbereich, Unterschenkel, Oberschenkel, Beine komplett 99€, Po, Pofalte, Füße 20€'
      },
      {
        name: 'Für Männer',
        description: 'Spezielle Preise für männliche Kunden',
        price: 'Wangen 25€, Brust 60€, Schultern 45€, Achseln 40€, Arme komplett 75€, Unterer Rücken 55€, Rücken 80€, Bauch 65€, Unterschenkel 75€, Oberschenkel 65€, Beine komplett 110€'
      }
    ]
  },
  {
    id: 5,
    title: 'Augenbrauenkorrektur',
    subtitle: 'Perfekte Augenbrauen & Wimpern',
    description: 'Professionelle Augenbrauen- und Wimpernbehandlungen für einen ausdrucksstarken Blick.',
    fullDescription: '',
    icon: Eye,
    duration: '15-30 Min',
    price: 'ab 15€',
    benefits: [
      'Individuelle Formgebung',
      'Professionelle Färbung',
      'Mehr Ausdruck',
      'Definition',
      'Langanhaltend',
      'Zeitersparnis'
    ],
    process: [
      'Beratung zur Form und Farbe',
      'Individuelle Anpassung',
      'Professionelle Behandlung',
      'Qualitätskontrolle',
      'Pflegetipps',
      'Nachsorge-Empfehlungen'
    ],
    suitableFor: [
      'Alle Gesichtsformen',
      'Helle Brauen/Wimpern',
      'Mehr Definition',
      'Natürlicher Look',
      'Zeitersparnis',
      'Besondere Anlässe'
    ],
    color: 'from-gray-600 to-gray-700',
    bgColor: 'from-gray-50 to-gray-100',
    features: ['Zupfen', 'Waxing', 'Färben', 'Kombipaket'],
    treatments: [
      {
        name: 'Augenbrauenkorrektur (Zupfen oder Waxing)',
        description: 'Professionelle Formgebung durch Zupfen oder Waxing',
        price: '15€'
      },
      {
        name: 'Augenbrauen färben',
        description: 'Intensive Farbe für mehr Definition',
        price: '15€'
      },
      {
        name: 'Wimpern färben',
        description: 'Natürlich intensive Wimpern ohne Mascara',
        price: '15€'
      },
      {
        name: 'Augenbrauen & Wimpern Kombipaket',
        description: 'Zupfen und Färben – Komplettpaket zum Vorteilspreis',
        price: '40€'
      }
    ]
  }
]

export function TreatmentsDetail({ treatmentId }: { treatmentId: number }) {
  const treatment = treatments.find(t => t.id === treatmentId)
  const [expandedTreatments, setExpandedTreatments] = useState<{ [key: number]: boolean }>({})
  
  if (!treatment) {
    return <div>Behandlung nicht gefunden</div>
  }

  const toggleTreatment = (index: number) => {
    setExpandedTreatments(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`${treatment.id === 3 ? 'bg-[#e9dbd2]' : `bg-gradient-to-br ${treatment.bgColor} via-[#e9dbd2] ${treatment.bgColor}`} pt-20 ${treatment.id === 2 ? 'pb-6' : treatment.id === 3 ? 'pb-8' : 'pb-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {treatment.id === 4 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Dauerhafte Haarentfernung
              </h1>
              <p className="text-xl text-gray-700 font-medium">
                Ice Diodenlaser für dauerhafte Ergebnisse
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-white/90 rounded-xl px-6 py-3 shadow-lg">
                  <p className="text-lg font-bold text-gray-900">Ice Diodenlaser</p>
                </div>
                <div className="bg-white/90 rounded-xl px-6 py-3 shadow-lg">
                  <p className="text-lg font-bold text-gray-900">Dauerhaft</p>
                </div>
                <div className="bg-white/90 rounded-xl px-6 py-3 shadow-lg">
                  <p className="text-lg font-bold text-gray-900">Schmerzarm</p>
                </div>
                <div className="bg-white/90 rounded-xl px-6 py-3 shadow-lg">
                  <p className="text-lg font-bold text-gray-900">Effektiv</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                <span className="gradient-text">{treatment.title}</span>
              </h1>
              {treatment.fullDescription && (
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {treatment.fullDescription}
              </p>
              )}
            </motion.div>
          )}
        </div>
      </section>

      {/* Treatment Detail */}
      <section className={`${treatment.id === 2 ? 'pt-8 pb-20' : 'py-20'} bg-[#e9dbd2]`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {treatment.id !== 1 && treatment.id !== 2 && treatment.id !== 3 && treatment.id !== 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Content */}
                <div className="flex flex-col lg:h-[384px] lg:justify-between">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${treatment.color} rounded-2xl flex items-center justify-center`}>
                        <treatment.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                          {treatment.title}
                        </h2>
                        <p className="text-xl text-gray-600">
                          {treatment.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    {treatment.fullDescription && (
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {treatment.fullDescription}
                    </p>
                    )}
                  </div>

                  {/* Benefits - Bündig mit Bild unten */}
                  <div className="mt-auto">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Vorteile</h3>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {treatment.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div>
                  {treatment.id === 4 ? (
                    <div className="h-96 rounded-3xl shadow-lg relative overflow-hidden">
                      <Image
                        src="/Dauerhaft Hero.webp"
                        alt="Dauerhafte Haarentfernung"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-8">
                        <div className="grid grid-cols-2 gap-8 text-center">
                          <div>
                            <p className="text-white font-semibold text-sm mb-px">Behandlungsdauer</p>
                            <p className="text-white font-bold text-lg">{treatment.duration}</p>
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm mb-px">Preis</p>
                            <p className="text-white font-bold text-lg">{treatment.price}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className={`h-96 bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg relative overflow-hidden`}>
                      <div className="h-full bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${treatment.color} rounded-full flex items-center justify-center`}>
                            <treatment.icon className="h-12 w-12 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{treatment.title}</h3>
                          <p className="text-gray-600">{treatment.subtitle}</p>
                          
                          {/* Features */}
                          <div className="flex flex-wrap gap-2 justify-center">
                            {treatment.features.map((feature, featureIndex) => (
                              <span
                                key={featureIndex}
                                className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* Info Section for Haarentfernung */}
            {treatment.id === 4 && (
              <div className="mt-16 mb-16">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* SICHER */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#454545] rounded-3xl overflow-hidden text-white flex flex-col"
                  >
                    {/* Bild-Header mit SICHER */}
                    <div className="relative h-48">
                      <Image
                        src="/Sichherheit.webp"
                        alt="Sichere Laser-Haarentfernung"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#454545]/60 flex items-center justify-center">
                        <h3 className="text-3xl font-bold text-white">SICHER</h3>
                      </div>
                    </div>
                    
                    {/* Text-Bereich */}
                    <div className="p-8 space-y-4 text-white/90 leading-relaxed flex-1">
                      <p>
                        Unsere Geräte für die dauerhafte Laser-Haarentfernung nutzen modernste Technik für maximale Sicherheit.
                      </p>
                      <p>
                        Eine einstellbare Pulsdauer und Stärke der Laserschüsse ermöglicht es, für jeden Haut- und Haartyp die optimale Einstellung zu finden und diese individuell auf jeden Kunden anzupassen. So können wir bei jedem nachhaltige und dauerhafte Ergebnisse erzielen.
                      </p>
                      <p>
                        Die stärksten und effektivsten Kühlsysteme auf dem Markt (ICE Technology & Kryogen Spray) sowie kontrollierbare Eindringtiefe garantieren eine gefahrlose und verbrennungsfreie Behandlung.
                      </p>
                    </div>
                  </motion.div>

                  {/* EFFEKTIV */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-[#454545] rounded-3xl overflow-hidden text-white flex flex-col"
                  >
                    {/* Bild-Header mit EFFEKTIV */}
                    <div className="relative h-48">
                      <Image
                        src="/beine.webp"
                        alt="Effektive Laser-Haarentfernung"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#454545]/60 flex items-center justify-center">
                        <h3 className="text-3xl font-bold text-white">EFFEKTIV</h3>
                      </div>
                    </div>
                    
                    {/* Text-Bereich */}
                    <div className="p-8 space-y-4 text-white/90 leading-relaxed flex-1">
                      <p>
                        Unser Studio für dauerhafte Haarentfernung ist mit den derzeit leistungsstärksten Laser- und Nadelepilations-Geräten auf dem Markt ausgestattet, sodass die Behandlung bei allen Haut- und Haartypen möglich ist.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <span className="text-white font-bold">✓</span>
                          <p><strong>ALEXANDRIT-Laser:</strong> Für hellere Haut- und Haartypen</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-white font-bold">✓</span>
                          <p><strong>DIODEN-Laser:</strong> Ideal für tief sitzende dunklere Haarfollikel</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-white font-bold">✓</span>
                          <p><strong>YAG-Laser:</strong> Für dunkelhäutige bzw. gebräunte Kunden</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-white font-bold">✓</span>
                          <p><strong>NADELEPILATION:</strong> Für hartnäckige hellere Härchen, die für das Lasergerät schwer erkennbar oder zu fein sind</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* SCHMERZARM */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-[#454545] rounded-3xl overflow-hidden text-white flex flex-col"
                  >
                    {/* Bild-Header mit SCHMERZARM */}
                    <div className="relative h-48">
                      <Image
                        src="/Dauerhaft Hero.webp"
                        alt="Schmerzarme Laser-Haarentfernung"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-[#454545]/60 flex items-center justify-center">
                        <h3 className="text-3xl font-bold text-white">SCHMERZARM</h3>
                      </div>
                    </div>
                    
                    {/* Text-Bereich */}
                    <div className="p-8 space-y-4 text-white/90 leading-relaxed flex-1">
                      <p>
                        Schmerzen waren schon immer ein großes Problem bei Laserbehandlungen – <strong>NICHT MEHR!</strong>
                      </p>
                      <p>
                        Die bei uns verwendeten Geräte von Alma Lasers und Candela verfügen über innovative Kühlsysteme und sorgen für ein angenehm kühlendes Gefühl auf der zu behandelnden Hautzone, sodass Sie die Laser-Haarentfernung so schmerzarm und angenehm wie möglich erleben können.
                      </p>
                      <div className="space-y-2 mt-4">
                        <p><strong>Kontaktkühlung ICE Technology</strong> (bis zu minus 16 Grad Celsius)</p>
                        <p><strong>DCD™ und ICD™ Kryogen-Kühlung</strong></p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Specific Treatments */}
            <div className={treatment.id === 2 ? 'mt-8' : treatment.id === 3 ? 'mt-0' : 'mt-16'}>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
                Verfügbare Behandlungen
              </h3>
              
              {treatment.id === 1 || treatment.id === 2 || treatment.id === 3 ? (
                // Special layout for Gesichtsbehandlung, Apparative Behandlungen and Massagen - one treatment per row
                <div className="space-y-8">
                  {treatment.treatments.map((subTreatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative`}
                    >
                      {/* Besonders beliebt Badge */}
                      {(subTreatment.name === 'BeautySkin Deluxe' || subTreatment.name === 'Aqua Facial Behandlung' || subTreatment.name === 'Brasilianische Lymphdrainage') && (
                        <div className="absolute -top-3 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg ring-2 ring-red-400/50 z-10">
                          Von Kunden empfohlen
                        </div>
                      )}
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Treatment Info */}
                        <div className="lg:col-span-2">
                          <div className="space-y-6">
                            <div>
                              <h4 className="text-3xl font-bold text-gray-900 mb-3">
                                {subTreatment.name}
                                {(subTreatment as any).variants && subTreatment.name !== 'Brasilianische Lymphdrainage' && subTreatment.name !== 'Micro Needling' && subTreatment.name !== 'Anti-Aging Kräuter-Peeling (Herbs2Peel)' && (
                                  <span className="text-lg font-normal text-gray-600 ml-2">
                                    ({((subTreatment as any).variants as Array<{name: string, price: string}>).map(v => v.name).join(' / ')})
                                  </span>
                                )}
                              </h4>
                              {(() => {
                                const desc = subTreatment.description || ''
                                const kurMatch = desc.match(/Kur angebot.*?(\d+.*?€)/i)
                                const mainDesc = kurMatch ? desc.substring(0, desc.indexOf('Kur angebot')).trim() : desc
                                
                                return (
                                  <p className="text-lg text-gray-600">
                                    {mainDesc}
                                  </p>
                                )
                              })()}
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="text-xl font-bold text-gray-900 mb-4">Vorteile</h5>
                              <div className="grid sm:grid-cols-2 gap-2">
                                {getTreatmentBenefits(subTreatment.name).map((benefit, benefitIndex) => (
                                  <div key={benefitIndex} className="flex items-center space-x-2">
                                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-gray-600 text-sm">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Expandable Treatment Details */}
                            {getTreatmentProcess(subTreatment.name).length > 0 && (
                              <div className="border-t border-gray-200 pt-4">
                                <button
                                  onClick={() => toggleTreatment(index)}
                                  className="flex items-center justify-between w-full text-left hover:text-gray-900 transition-colors"
                                >
                                  <span className="text-lg font-semibold text-gray-800">
                                    Behandlungsablauf
                                  </span>
                                  {expandedTreatments[index] ? (
                                    <ChevronUp className="h-5 w-5 text-gray-600" />
                                  ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-600" />
                                  )}
                                </button>

                                <AnimatePresence>
                                  {expandedTreatments[index] && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-4 space-y-2">
                                        {getTreatmentProcess(subTreatment.name).map((step, stepIndex) => {
                                          const parts = step.split(':')
                                          const hasColon = parts.length > 1
                                          
                                          return (
                                            <p key={stepIndex} className="text-gray-700 text-sm leading-relaxed">
                                              {hasColon ? (
                                                <>
                                                  <span className="font-bold">{parts[0]}:</span>
                                                  {parts.slice(1).join(':')}
                                                </>
                                              ) : (
                                                step
                                              )}
                                            </p>
                                          )
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex flex-col items-center lg:items-end lg:h-full">
                          {/* Price and Duration - Desktop in einer Zeile, oben */}
                          <div className="w-full lg:w-auto">
                            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-4">
                              <div className="lg:text-right">
                                <div className="flex items-center lg:justify-end space-x-2 mb-2">
                                  <Clock className="h-5 w-5 text-gray-600" />
                                  <span className="font-semibold text-sm text-gray-900">Dauer</span>
                                </div>
                                <p className="text-gray-600 text-lg font-semibold">
                                  {getTreatmentDuration(subTreatment.name, treatment.id)}
                                </p>
                              </div>
                              <div className="lg:text-right">
                                <div className="flex items-center lg:justify-end space-x-2 mb-2">
                                  <Star className="h-5 w-5 text-gray-600" />
                                  <span className="font-semibold text-sm text-gray-900">Preis</span>
                                </div>
                                {(subTreatment as any).variants ? (
                                  <p className="text-gray-600 text-lg font-semibold">
                                    {subTreatment.name === 'Brasilianische Lymphdrainage' || subTreatment.name === 'Micro Needling' || subTreatment.name === 'Anti-Aging Kräuter-Peeling (Herbs2Peel)'
                                      ? subTreatment.price 
                                      : ((subTreatment as any).variants as Array<{name: string, price: string}>).map(v => v.price).join('/')}
                                  </p>
                                ) : (
                                <p className="text-gray-600 text-lg font-semibold">
                                  {subTreatment.price}
                                </p>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          {/* Kur-Angebot für Anti-Aging Kräuter-Peeling */}
                          {(() => {
                            const desc = subTreatment.description || ''
                            const kurMatch = desc.match(/Kur angebot.*?(\d+.*?€)/i)
                            return kurMatch && subTreatment.name === 'Anti-Aging Kräuter-Peeling (Herbs2Peel)' ? (
                              <div className="w-full lg:w-auto mt-4 lg:mt-6">
                                <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-400 rounded-xl p-4 shadow-lg">
                                  <div className="flex flex-col items-center lg:items-end">
                                    <p className="text-sm font-semibold text-red-700 mb-1">Kur-Angebot</p>
                                    <p className="text-xs text-red-600 mb-2">4 Behandlungen</p>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-lg line-through text-red-500">480€</span>
                                      <span className="text-lg font-bold text-red-700">450€</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : null
                          })()}
                          
                          {/* Button - independent, aligned with Behandlungsablauf */}
                          <div className="w-full lg:w-auto lg:mt-auto lg:pt-4">
                            <AddTreatmentButton 
                              treatment={{
                                id: `${treatment.id}-${index}`,
                                name: subTreatment.name,
                                price: subTreatment.price
                              }}
                              variants={(subTreatment as any).variants}
                              className="w-full lg:w-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : treatment.id === 4 ? (
                // Special layout for Haarentfernung
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className={`bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg`}>
                    <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Für Frauen</h4>
                    
                    {/* Gesicht */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Gesicht</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Gesicht komplett</span>
                            <span className="text-[#454545] font-bold">40€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Kinn</span>
                            <span className="text-[#454545] font-bold">15€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Wangen</span>
                            <span className="text-[#454545] font-bold">25€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Hals</span>
                            <span className="text-[#454545] font-bold">25€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Nacken</span>
                            <span className="text-[#454545] font-bold">35€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Oberkörper */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Oberkörper</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Schultern</span>
                            <span className="text-[#454545] font-bold">40€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Brust</span>
                            <span className="text-[#454545] font-bold">30€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Rücken</span>
                            <span className="text-[#454545] font-bold">50€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Intimbereich */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Intimbereich</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Bikinizone</span>
                            <span className="text-[#454545] font-bold">45€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Bikizone und Intimbereich</span>
                            <span className="text-[#454545] font-bold">60€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Po</span>
                            <span className="text-[#454545] font-bold">35€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Pofalte</span>
                            <span className="text-[#454545] font-bold">25€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arme */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Arme</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Arme komplett</span>
                            <span className="text-[#454545] font-bold">60€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Achseln</span>
                            <span className="text-[#454545] font-bold">35€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Unterarm</span>
                            <span className="text-[#454545] font-bold">35€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Hände</span>
                            <span className="text-[#454545] font-bold">20€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Beine */}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Beine</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Unterschenkel</span>
                            <span className="text-[#454545] font-bold">45€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Oberschenkel</span>
                            <span className="text-[#454545] font-bold">55€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Beine komplett</span>
                            <span className="text-[#454545] font-bold">99€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Füße</span>
                            <span className="text-[#454545] font-bold">20€</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${treatment.bgColor} rounded-3xl p-8 shadow-lg`}>
                    <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Für Männer</h4>

                    {/* Gesicht */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Gesicht</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Wangen</span>
                            <span className="text-[#454545] font-bold">25€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Oberkörper */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Oberkörper</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Brust</span>
                            <span className="text-[#454545] font-bold">60€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Schultern</span>
                            <span className="text-[#454545] font-bold">45€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Rücken</span>
                            <span className="text-[#454545] font-bold">80€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Bauch</span>
                            <span className="text-[#454545] font-bold">65€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Arme */}
                    <div className="mb-8">
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Arme</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Arme komplett</span>
                            <span className="text-[#454545] font-bold">75€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Achseln</span>
                            <span className="text-[#454545] font-bold">40€</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Beine */}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-[#454545]">Beine</h5>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Unterschenkel</span>
                            <span className="text-[#454545] font-bold">75€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Oberschenkel</span>
                            <span className="text-[#454545] font-bold">65€</span>
                          </div>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-900 font-medium text-sm">Beine komplett</span>
                            <span className="text-[#454545] font-bold">110€</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : treatment.id === 5 ? (
                // Special layout for Augenbrauenkorrektur - 4 treatments in one row with smaller text
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {treatment.treatments.map((subTreatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${treatment.bgColor} rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full`}
                    >
                      <div className="flex flex-col flex-grow h-full">
                        <div className="mb-3">
                          <h4 className="text-base font-bold text-gray-900">
                            {subTreatment.name}
                          </h4>
                        </div>
                        
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-lg font-bold text-gray-900">
                            {subTreatment.price}
                          </span>
                        </div>

                        <div className="mt-auto">
                          <AddTreatmentButton 
                            treatment={{
                              id: `${treatment.id}-sub-${index}`,
                              name: subTreatment.name,
                              price: subTreatment.price
                            }}
                            variants={(subTreatment as any).variants}
                            className="w-full text-sm py-2"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Standard layout for other treatments
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {treatment.treatments.map((subTreatment, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-gradient-to-br ${treatment.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative`}
                    >
                      {/* Besonders beliebt Badge */}
                      {(subTreatment.name === 'BeautySkin Deluxe' || subTreatment.name === 'Aqua Facial Behandlung' || subTreatment.name === 'Brasilianische Lymphdrainage') && (
                        <div className="absolute -top-2.5 right-3 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-bold px-3.5 py-1.5 rounded-full shadow-lg ring-2 ring-red-400/50 z-10">
                          Von Kunden empfohlen
                        </div>
                      )}
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-2">
                            {subTreatment.name}
                          </h4>
                          {(() => {
                            const desc = subTreatment.description || ''
                            const kurMatch = desc.match(/Kur angebot.*?(\d+.*?€)/i)
                            const mainDesc = kurMatch ? desc.substring(0, desc.indexOf('Kur angebot')).trim() : desc
                            
                            return (
                              <p className="text-gray-600 text-sm">
                                {mainDesc}
                              </p>
                            )
                          })()}
                        </div>
                        
                        <div className="flex flex-col items-end space-y-3">
                          <div className="flex justify-between items-center w-full">
                            <span className="text-2xl font-bold text-gray-900">
                              {subTreatment.price}
                            </span>
                          </div>
                          {(() => {
                            const desc = subTreatment.description || ''
                            const kurMatch = desc.match(/Kur angebot.*?(\d+.*?€)/i)
                            return kurMatch && subTreatment.name === 'Anti-Aging Kräuter-Peeling (Herbs2Peel)' ? (
                              <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-400 rounded-lg p-3 shadow-md w-full">
                                <div className="flex flex-col items-end">
                                  <p className="text-xs font-semibold text-red-700">Kur-Angebot</p>
                                  <p className="text-xs text-red-600 mb-1">4 Behandlungen</p>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-base line-through text-red-500">480€</span>
                                    <span className="text-base font-bold text-red-700">450€</span>
                                  </div>
                                </div>
                              </div>
                            ) : null
                          })()}
                        </div>

                        <AddTreatmentButton 
                          treatment={{
                            id: `${treatment.id}-sub-${index}`,
                            name: subTreatment.name,
                            price: subTreatment.price
                          }}
                          variants={(subTreatment as any).variants}
                          className="w-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Info Section - How it works */}
            {treatment.id === 4 && (
              <div className="mt-20 space-y-16">
                {/* Hauptüberschrift */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Alles über Laser-Haarentfernung</h2>
                  <div className="w-24 h-1 bg-[#454545] mx-auto"></div>
                </motion.div>

                {/* Wie funktioniert die Laser-Haarentfernung? */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white/70 rounded-3xl p-8 md:p-10 shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Wie funktioniert die Laser-Haarentfernung?</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Die Laser-Haarentfernung funktioniert durch gezielte Wärmeeinwirkung auf die Haarwurzel. Ein medizinisches Lasergerät wird über die Haut geführt und sendet konzentrierte Lichtstrahlen mit spezifischer Wellenlänge, Intensität und Pulsdauer aus.
                    </p>
                    <p>
                      Der Haarfarbstoff Melanin nimmt die gebündelte Lichtenergie auf und wandelt sie in Wärme um. Diese Wärmeentwicklung führt zur Verödung der Haarwurzel. Innerhalb von ein bis drei Wochen fällt das Haar aus und neues Haar kann nicht mehr oder nur sehr fein nachwachsen.
                    </p>
                    <div className="bg-[#454545]/10 rounded-xl p-4 mt-6 border-l-4 border-[#454545]">
                      <p className="font-semibold text-gray-900">
                        Damit ist die Laser-Haarentfernung effektiv und schonend zugleich.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Unsere Laser-Technologie - Prominent platziert */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#454545] to-[#303030] rounded-3xl p-8 md:p-10 shadow-xl text-white"
                >
                  <h3 className="text-2xl font-bold mb-4">Unsere Laser-Technologie</h3>
                  <p className="text-white/90 leading-relaxed text-lg">
                    Wir setzen auf den Goldstandard der Branche mit dem <strong>Diodenlaser (810 nm)</strong>, der Effizienz und Sicherheit für mittlere Hauttypen bietet.
                  </p>
                </motion.div>

                {/* Vorteile im Grid */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                  >
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Warum Laser statt andere Methoden?</h3>
                    <p className="text-gray-600">Vergleichen Sie die Vorteile</p>
                  </motion.div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Vorteile gegenüber IPL */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      viewport={{ once: true }}
                      className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Vorteile gegenüber IPL-Systemen</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Im Gegensatz zur IPL-Methode (Intense Pulse Light), die mit einem breiten Lichtspektrum arbeitet, gelangt das Licht eines Lasers gezielter und tiefer in die Haarwurzel. So erzielen wir eine deutlich effektivere Haarentfernung mit weniger Sitzungen und schneller sichtbaren, langanhaltenden Ergebnissen. Zudem ist die Laser-Methode hautschonender, da die Energie präzise auf die Haarwurzel abgegeben wird und nicht die umliegende Haut erhitzt.
                      </p>
                    </motion.div>

                    {/* Vorteile gegenüber Nadel-Epilation */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white/70 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Vorteile gegenüber der Nadel-Epilation</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Die Nadel-Epilation (auch Elektro-Epilation) erfordert, dass eine dünne Nadel in jeden Haarkanal einzeln eingeführt wird – ein aufwendiger und schmerzhafter Prozess, der für große Areale nicht empfehlenswert ist. Die Laser-Haarentfernung bietet dagegen eine sanfte und schonende Alternative, die auch für größere Körperbereiche ideal geeignet ist.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Ist Laser-Haarentfernung für mich geeignet? */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/70 rounded-3xl p-8 md:p-10 shadow-lg"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Ist Laser-Haarentfernung für mich geeignet?</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      In unserem Studio für dauerhafte Laser-Haarentfernung setzen wir auf modernste Technologie und bieten Effizienz und Sicherheit für unterschiedliche Haut- und Haartypen. Die Behandlung ist schonend zur Haut und leistungsstark genug, um die Haarfollikel dauerhaft zu veröden.
                    </p>
                    <div className="bg-gray-50 rounded-xl p-5 mt-6 border-l-4 border-[#454545]">
                      <p className="font-semibold text-gray-900 mb-2">Grundsätzlich gilt:</p>
                      <p>
                        Je dunkler die Haare, umso besser das Ergebnis. Sehr blonde, weiße, graue oder rote Haare lassen sich dagegen kaum behandeln, da ihnen dunkle Pigmente fehlen, die der Laser erfassen kann. Auch die Dicke des Haares spielt eine Rolle – dickere Haare werden besser erfasst als leichtes Flaumhaar.
                      </p>
                    </div>
                    <div className="bg-[#454545]/10 rounded-xl p-5 mt-6">
                      <p className="font-semibold text-gray-900">
                        Sie möchten wissen, ob eine Behandlung in Ihrem Fall Erfolg verspricht? Wir beraten Sie gern persönlich in unserem Studio!
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#e9dbd2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative bg-[#454545] rounded-3xl p-8 shadow-lg text-white mx-auto max-w-7xl"
          >
            {/* Silberne innere Linie mit Glanz */}
            <div className="absolute inset-2 border-2 border-[#C0C0C0] rounded-3xl pointer-events-none shadow-[inset_0_0_10px_rgba(192,192,192,0.5),0_0_5px_rgba(255,255,255,0.3)]"></div>
            
            {/* Left SVG - Desktop only */}
            <div className="hidden lg:block absolute left-12 top-1/2 -translate-y-1/2 w-32 h-32 opacity-60 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                width="100%" height="100%" viewBox="0 0 491.277 491.277"
                preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="silverGradientLeftDetail" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8E8E8" stopOpacity="1" />
                    <stop offset="50%" stopColor="#C0C0C0" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A8A8A8" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  <g fill="url(#silverGradientLeftDetail)">
                    <path d="M365.357,342.949c10.828-11.556,24.953-19.777,39.383-26.006c5.012-2.16,14.438-7.693,20.137-7.285
                      c-23-1.879-47.396-3.166-69.342,5.313c-19.17,7.399-34.711,22.08-46.74,38.408c-7.945,10.791-13.664,22.64-20.029,34.378
                      c-7.805,14.394-18.084,35.635-34.885,41.457c21.262-2.372,42.03-11.665,58.613-24.996
                      C333.795,387.1,346.857,362.701,365.357,342.949z"/>
                    <path d="M412.115,325.927c-23.885,12.72-39.061,28.859-55.406,49.869c-11.891,15.273-25.311,32.773-41.949,43.232
                      c-13.164,8.274-32.138,18.12-47.951,19.566c37.631,22.785,85.082,22.107,122.438-0.749c34.471-21.097,47.23-55.99,66.723-89.035
                      c6.162-10.44,14.021-19.901,23.16-27.87c2.143-1.869,8.91-9.084,12.148-8.957C464.186,309.781,436.332,313.027,412.115,325.927z"/>
                    <path d="M301.938,219.472c-6.801,9.233-11.693,19.371-17.139,29.415c-6.679,12.315-15.476,30.493-29.851,35.474
                      c18.194-2.027,35.964-9.982,50.153-21.39c18.227-14.644,29.402-35.521,45.232-52.421c9.266-9.887,21.352-16.924,33.695-22.255
                      c4.287-1.85,12.355-6.582,17.23-6.232c-19.682-1.608-40.557-2.708-59.33,4.545C325.529,192.938,312.229,205.5,301.938,219.472z"/>
                    <path d="M448.053,192.094c1.836-1.6,7.625-7.771,10.395-7.665c-23.18-1.886-47.012,0.892-67.732,11.931
                      c-20.436,10.884-33.42,24.694-47.408,42.672c-10.174,13.071-21.656,28.045-35.895,36.992
                      c-11.266,7.082-27.498,15.505-41.031,16.743c32.198,19.495,72.805,18.916,104.766-0.643
                      c29.494-18.049,40.412-47.906,57.092-76.182C433.506,207.006,440.236,198.91,448.053,192.094z"/>
                    <path d="M125.916,342.949c18.502,19.752,31.565,44.151,52.864,61.266c16.58,13.333,37.349,22.625,58.614,24.997
                      c-16.803-5.821-27.082-27.063-34.886-41.457c-6.365-11.737-12.084-23.587-20.03-34.377c-12.029-16.33-27.573-31.009-46.739-38.409
                      c-21.945-8.479-46.339-7.189-69.341-5.312c5.698-0.41,15.125,5.121,20.136,7.285C100.963,323.17,115.086,331.393,125.916,342.949z"/>
                    <path d="M35.307,348.815c19.492,33.046,32.253,67.94,66.723,89.034c37.354,22.858,84.807,23.534,122.438,0.75
                      c-15.817-1.447-34.788-11.292-47.951-19.566c-16.64-10.459-30.059-27.959-41.949-43.233
                      c-16.348-21.009-31.524-37.149-55.407-49.868C54.942,313.029,27.09,309.783,0,311.988c3.238-0.125,10.005,7.088,12.148,8.959
                      C21.286,328.912,29.147,338.373,35.307,348.815z"/>
                    <path d="M149.342,186.607c-18.776-7.254-39.652-6.153-59.333-4.545c4.876-0.349,12.941,4.382,17.229,6.232
                      c12.347,5.332,24.433,12.365,33.697,22.255c15.831,16.9,27.01,37.778,45.233,52.421c14.188,11.406,31.958,19.359,50.154,21.391
                      c-14.378-4.98-23.172-23.158-29.85-35.475c-5.445-10.043-10.339-20.181-17.138-29.415
                      C179.044,205.5,165.743,192.938,149.342,186.607z"/>
                    <path d="M32.824,184.429c2.771-0.106,8.562,6.065,10.396,7.665c7.817,6.816,14.546,14.913,19.815,23.849
                      c16.678,28.276,27.596,58.132,57.092,76.183c31.961,19.561,72.566,20.137,104.765,0.643c-13.533-1.238-29.767-9.666-41.031-16.744
                      c-14.236-8.947-25.72-23.921-35.894-36.992c-13.986-17.978-26.971-31.79-47.407-42.674
                      C79.838,185.318,56.004,182.539,32.824,184.429z"/>
                    <path d="M295.538,145.18c-13.04,19.136-30.979,34.597-41.298,55.575c-8.039,16.334-11.926,35.411-9.939,53.609
                      c1.726-15.117,17.546-27.663,28.111-36.868c8.615-7.504,17.441-14.492,24.971-23.141c11.393-13.092,20.748-28.811,23.354-46.198
                      c2.984-19.905-2.641-40.039-8.502-58.895c1.404,4.682-1.455,13.587-2.326,18.174C307.4,120.651,303.166,133.981,295.538,145.18z"/>
                    <path d="M231.523,247c-1.742-13.478,2.941-31.155,7.394-43.694c5.628-15.846,17.737-30.317,28.275-43.096
                      c14.495-17.571,25.141-33.255,31.307-55.571c6.257-22.632,3.771-46.497-3.126-68.705c0.707,2.683-4.052,9.677-5.215,11.817
                      c-4.949,9.117-11.382,17.448-18.953,24.539c-23.958,22.443-50.716,39.61-61.901,72.331
                      C197.187,180.074,205.474,219.829,231.523,247z"/>
                  </g>
                </g>
              </svg>
            </div>

            {/* Right SVG - Desktop only */}
            <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-32 h-32 opacity-60 drop-shadow-[0_0_8px_rgba(192,192,192,0.6)]">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
                width="100%" height="100%" viewBox="0 0 491.277 491.277"
                preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="silverGradientRightDetail" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8E8E8" stopOpacity="1" />
                    <stop offset="50%" stopColor="#C0C0C0" stopOpacity="1" />
                    <stop offset="100%" stopColor="#A8A8A8" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <g>
                  <g fill="url(#silverGradientRightDetail)">
                    <path d="M365.357,342.949c10.828-11.556,24.953-19.777,39.383-26.006c5.012-2.16,14.438-7.693,20.137-7.285
                      c-23-1.879-47.396-3.166-69.342,5.313c-19.17,7.399-34.711,22.08-46.74,38.408c-7.945,10.791-13.664,22.64-20.029,34.378
                      c-7.805,14.394-18.084,35.635-34.885,41.457c21.262-2.372,42.03-11.665,58.613-24.996
                      C333.795,387.1,346.857,362.701,365.357,342.949z"/>
                    <path d="M412.115,325.927c-23.885,12.72-39.061,28.859-55.406,49.869c-11.891,15.273-25.311,32.773-41.949,43.232
                      c-13.164,8.274-32.138,18.12-47.951,19.566c37.631,22.785,85.082,22.107,122.438-0.749c34.471-21.097,47.23-55.99,66.723-89.035
                      c6.162-10.44,14.021-19.901,23.16-27.87c2.143-1.869,8.91-9.084,12.148-8.957C464.186,309.781,436.332,313.027,412.115,325.927z"/>
                    <path d="M301.938,219.472c-6.801,9.233-11.693,19.371-17.139,29.415c-6.679,12.315-15.476,30.493-29.851,35.474
                      c18.194-2.027,35.964-9.982,50.153-21.39c18.227-14.644,29.402-35.521,45.232-52.421c9.266-9.887,21.352-16.924,33.695-22.255
                      c4.287-1.85,12.355-6.582,17.23-6.232c-19.682-1.608-40.557-2.708-59.33,4.545C325.529,192.938,312.229,205.5,301.938,219.472z"/>
                    <path d="M448.053,192.094c1.836-1.6,7.625-7.771,10.395-7.665c-23.18-1.886-47.012,0.892-67.732,11.931
                      c-20.436,10.884-33.42,24.694-47.408,42.672c-10.174,13.071-21.656,28.045-35.895,36.992
                      c-11.266,7.082-27.498,15.505-41.031,16.743c32.198,19.495,72.805,18.916,104.766-0.643
                      c29.494-18.049,40.412-47.906,57.092-76.182C433.506,207.006,440.236,198.91,448.053,192.094z"/>
                    <path d="M125.916,342.949c18.502,19.752,31.565,44.151,52.864,61.266c16.58,13.333,37.349,22.625,58.614,24.997
                      c-16.803-5.821-27.082-27.063-34.886-41.457c-6.365-11.737-12.084-23.587-20.03-34.377c-12.029-16.33-27.573-31.009-46.739-38.409
                      c-21.945-8.479-46.339-7.189-69.341-5.312c5.698-0.41,15.125,5.121,20.136,7.285C100.963,323.17,115.086,331.393,125.916,342.949z"/>
                    <path d="M35.307,348.815c19.492,33.046,32.253,67.94,66.723,89.034c37.354,22.858,84.807,23.534,122.438,0.75
                      c-15.817-1.447-34.788-11.292-47.951-19.566c-16.64-10.459-30.059-27.959-41.949-43.233
                      c-16.348-21.009-31.524-37.149-55.407-49.868C54.942,313.029,27.09,309.783,0,311.988c3.238-0.125,10.005,7.088,12.148,8.959
                      C21.286,328.912,29.147,338.373,35.307,348.815z"/>
                    <path d="M149.342,186.607c-18.776-7.254-39.652-6.153-59.333-4.545c4.876-0.349,12.941,4.382,17.229,6.232
                      c12.347,5.332,24.433,12.365,33.697,22.255c15.831,16.9,27.01,37.778,45.233,52.421c14.188,11.406,31.958,19.359,50.154,21.391
                      c-14.378-4.98-23.172-23.158-29.85-35.475c-5.445-10.043-10.339-20.181-17.138-29.415
                      C179.044,205.5,165.743,192.938,149.342,186.607z"/>
                    <path d="M32.824,184.429c2.771-0.106,8.562,6.065,10.396,7.665c7.817,6.816,14.546,14.913,19.815,23.849
                      c16.678,28.276,27.596,58.132,57.092,76.183c31.961,19.561,72.566,20.137,104.765,0.643c-13.533-1.238-29.767-9.666-41.031-16.744
                      c-14.236-8.947-25.72-23.921-35.894-36.992c-13.986-17.978-26.971-31.79-47.407-42.674
                      C79.838,185.318,56.004,182.539,32.824,184.429z"/>
                    <path d="M295.538,145.18c-13.04,19.136-30.979,34.597-41.298,55.575c-8.039,16.334-11.926,35.411-9.939,53.609
                      c1.726-15.117,17.546-27.663,28.111-36.868c8.615-7.504,17.441-14.492,24.971-23.141c11.393-13.092,20.748-28.811,23.354-46.198
                      c2.984-19.905-2.641-40.039-8.502-58.895c1.404,4.682-1.455,13.587-2.326,18.174C307.4,120.651,303.166,133.981,295.538,145.18z"/>
                    <path d="M231.523,247c-1.742-13.478,2.941-31.155,7.394-43.694c5.628-15.846,17.737-30.317,28.275-43.096
                      c14.495-17.571,25.141-33.255,31.307-55.571c6.257-22.632,3.771-46.497-3.126-68.705c0.707,2.683-4.052,9.677-5.215,11.817
                      c-4.949,9.117-11.382,17.448-18.953,24.539c-23.958,22.443-50.716,39.61-61.901,72.331
                      C197.187,180.074,205.474,219.829,231.523,247z"/>
                  </g>
                </g>
              </svg>
            </div>
            
            <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-4">
              Bereit für Ihre Traumbehandlung?
            </h2>
            <p className="text-white mb-6">
              Lassen Sie sich von unserem Expertenteam beraten und finden Sie die perfekte 
              Behandlung für Ihre individuellen Bedürfnisse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/termin" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block">
                Kostenlose Beratung
              </a>
              <a href="/termin" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 inline-block">
                Termin anfragen
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}