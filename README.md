# BeautySkin Website

Eine hochmoderne Website für das BeautySkin Kosmetikstudio in Berlin, entwickelt mit Next.js und Tailwind CSS.

## Features

- 🎨 Modernes, responsives Design
- ⚡ Schnelle Performance mit Next.js
- 📱 Mobile-first Ansatz
- 🎭 Smooth Animationen mit Framer Motion
- 🎯 SEO-optimiert
- ♿ Accessibility-freundlich

## Technologien

- **Next.js 14** - React Framework
- **TypeScript** - Typsichere Entwicklung
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animationen
- **Lucide React** - Icons

## Installation

1. Repository klonen:
```bash
git clone <repository-url>
cd beautyskin-website
```

2. Dependencies installieren:
```bash
npm install
```

3. Entwicklungsserver starten:
```bash
npm run dev
```

4. Website im Browser öffnen: [http://localhost:3000](http://localhost:3000)

## Projektstruktur

```
├── app/                    # App Router (Next.js 13+)
│   ├── globals.css        # Globale Styles
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Startseite
│   ├── behandlungen/      # Behandlungen-Seite
│   ├── impressum/         # Impressum
│   └── datenschutz/       # Datenschutz
├── components/            # React Komponenten
│   ├── Header.tsx         # Navigation
│   ├── Hero.tsx           # Hero-Section
│   ├── TreatmentsSection.tsx
│   ├── TreatmentsDetail.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── public/               # Statische Assets
```

## Seiten

- **Startseite** (`/`) - Hero, Behandlungen, Kontakt
- **Behandlungen** (`/behandlungen`) - Detaillierte Behandlungssübersicht
- **Impressum** (`/impressum`) - Rechtliche Informationen
- **Datenschutz** (`/datenschutz`) - Datenschutzerklärung

## Deployment

Das Projekt kann auf verschiedenen Plattformen deployed werden:

### Vercel (empfohlen)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload des /out Ordners
```

## Customization

### Farben anpassen
Die Farben können in `tailwind.config.js` angepasst werden:

```javascript
colors: {
  primary: {
    // Anpassen der Primärfarben
  }
}
```

### Inhalte ändern
Alle Texte und Inhalte befinden sich in den entsprechenden Komponenten in `/components/`.

## Kontakt

**BeautySkin**
Silvio-Meier-Straße 6
10247 Berlin

Telefon: 030 - 12345678
E-Mail: info@beautyskin-berlin.de

## Lizenz

Dieses Projekt ist für BeautySkin entwickelt worden.
# Beautyskin
