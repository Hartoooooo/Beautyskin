import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BeautySkin - Ihr Kosmetikstudio in Berlin',
  description: 'Professionelle Kosmetikbehandlungen in Berlin. Hydrafacial, Microneedling, Gesichtsbehandlungen und mehr. Jetzt Termin buchen unter +49 170 4482725!',
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
        <meta name="theme-color" content="#475569" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
