import type { Metadata, Viewport } from 'next'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import FloatingBookingButton from '@/components/FloatingBookingButton'
import ClientProviders from '@/components/ClientProviders'

export const metadata: Metadata = {
  title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
  description: 'Professionelle Kosmetikbehandlungen in Berlin. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr. Jetzt Termin anfragen unter +49 170 4482725!',
  keywords: 'Kosmetik, Berlin, Hydrafacial, Microneedling, Gesichtsbehandlung, Beauty, Skincare',
  authors: [{ name: 'BeautySkin' }],
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
        <ClientProviders>
          {children}
          <CookieConsent />
          <FloatingBookingButton />
        </ClientProviders>
      </body>
    </html>
  )
}
