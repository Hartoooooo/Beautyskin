import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import FloatingBookingButton from '@/components/FloatingBookingButton'
import ClientProviders from '@/components/ClientProviders'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://beautyskin-studio.de'),
  title: {
    default: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
    template: '%s | BeautySkin'
  },
  description: 'Professionelle Kosmetikbehandlungen in Berlin. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr. Jetzt Termin anfragen unter +49 170 4482725!',
  authors: [{ name: 'BeautySkin', url: 'https://beautyskin-studio.de' }],
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
    url: 'https://beautyskin-studio.de',
    siteName: 'BeautySkin',
    title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr.',
    images: [
      {
        url: '/aussen.webp',
        width: 1200,
        height: 630,
        alt: 'BeautySkin Kosmetikstudio Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
    description: 'Professionelle Kosmetikbehandlungen in Berlin',
    images: ['/aussen.webp'],
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
    canonical: 'https://beautyskin-studio.de',
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#454545" />
        <meta name="msapplication-TileColor" content="#454545" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <ClientProviders>
          {children}
          <CookieConsent />
          <FloatingBookingButton />
        </ClientProviders>
      </body>
    </html>
  )
}
