import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import FloatingBookingButton from '@/components/FloatingBookingButton'
import ClientProviders from '@/components/ClientProviders'

const siteUrl = 'https://www.beautyskin-berlin.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BeautySkin - Professionelles Kosmetikstudio in Berlin',
    template: '%s | BeautySkin Berlin'
  },
  description: 'Professionelle Kosmetikbehandlungen in Berlin-Friedrichshain. Hydrafacial, Microneedling, Gesichtsbehandlungen, dauerhafte Haarentfernung und mehr. Jetzt Termin anfragen unter +49 170 4482725!',
  keywords: [
    'Kosmetikstudio Berlin',
    'Gesichtsbehandlung Berlin',
    'Hydrafacial Berlin',
    'Microneedling Berlin',
    'dauerhafte Haarentfernung Berlin',
    'Laser Haarentfernung Berlin',
    'Kosmetik Friedrichshain',
    'Beauty Berlin',
    'Skincare Berlin',
    'Anti-Aging Berlin',
    'Professionelle Kosmetik',
    'BeautySkin',
    'Raquel Hardel'
  ],
  authors: [{ name: 'BeautySkin', url: siteUrl }],
  creator: 'BeautySkin',
  publisher: 'BeautySkin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'BeautySkin Berlin',
    title: 'BeautySkin - Professionelles Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin-Friedrichshain. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr.',
    images: [
      {
        url: `${siteUrl}/raquel.webp`,
        width: 1200,
        height: 630,
        alt: 'BeautySkin Kosmetikstudio Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeautySkin - Professionelles Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin-Friedrichshain. Jetzt Termin anfragen!',
    images: [`${siteUrl}/raquel.webp`],
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    // Google Search Console kann hier hinzugefügt werden
    // google: 'verification-code',
  },
  category: 'Beauty & Kosmetik',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#454545',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'BeautySkin',
    image: `${siteUrl}/raquel.webp`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+491704482725',
    email: 'beautyskin.studio@icloud.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Silvio-Meier-Straße 6',
      addressLocality: 'Berlin',
      postalCode: '10247',
      addressRegion: 'Berlin',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.5109,
      longitude: 13.4616,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'City',
      name: 'Berlin',
    },
    sameAs: [
      'https://www.instagram.com/beautyskin.kosmetik/',
    ],
  }

  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#454545" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <ClientProviders>
          {children}
          <CookieConsent />
          <FloatingBookingButton />
        </ClientProviders>
      </body>
    </html>
  )
}
