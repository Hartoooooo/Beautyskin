import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import FloatingBookingButton from '@/components/FloatingBookingButton'
import ClientProviders from '@/components/ClientProviders'
import { LocalBusinessSchema, WebsiteSchema } from '@/components/StructuredData'

const siteUrl = 'https://www.beautyskin-berlin.de'
const siteName = 'BeautySkin Kosmetikstudio Berlin'
const siteDescription = 'Professionelles Kosmetikstudio in Berlin Friedrichshain. Gesichtsbehandlungen, Microneedling, Aqua Facial, dauerhafte Haarentfernung, Massagen. Jetzt Termin anfragen: +49 170 4482725'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'BeautySkin - Professionelles Kosmetikstudio in Berlin Friedrichshain',
    template: '%s | BeautySkin Berlin'
  },
  description: siteDescription,
  keywords: [
    'Kosmetikstudio Berlin',
    'Kosmetikstudio Berlin Friedrichshain',
    'Gesichtsbehandlung Berlin',
    'Microneedling Berlin',
    'Aqua Facial Berlin',
    'Hydrafacial Berlin',
    'Dauerhafte Haarentfernung Berlin',
    'Ice Diodenlaser Berlin',
    'Massagen Berlin',
    'Augenbrauenkorrektur Berlin',
    'Apparative Kosmetik Berlin',
    'Kosmetikerin Berlin',
    'Beauty Salon Berlin',
    'Hautpflege Berlin'
  ],
  authors: [{ name: 'BeautySkin', url: siteUrl }],
  creator: 'BeautySkin',
  publisher: 'BeautySkin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    title: 'BeautySkin - Professionelles Kosmetikstudio in Berlin Friedrichshain',
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/aussen.webp`,
        width: 1200,
        height: 630,
        alt: 'BeautySkin Kosmetikstudio Berlin - Außenansicht',
      },
      {
        url: `${siteUrl}/drin1.webp`,
        width: 1200,
        height: 630,
        alt: 'BeautySkin Kosmetikstudio Berlin - Behandlungsraum',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeautySkin - Professionelles Kosmetikstudio in Berlin Friedrichshain',
    description: siteDescription,
    images: [`${siteUrl}/aussen.webp`],
    creator: '@beautyskin',
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
  verification: {
    // Google Search Console Verification (später hinzufügen)
    // google: 'YOUR_VERIFICATION_CODE',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#454545" />
      </head>
      <body className="antialiased">
        <LocalBusinessSchema />
        <WebsiteSchema />
        <ClientProviders>
          {children}
          <CookieConsent />
          <FloatingBookingButton />
        </ClientProviders>
      </body>
    </html>
  )
}
