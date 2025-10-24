'use client'

import { TreatmentCartProvider } from '@/contexts/TreatmentCartContext'

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TreatmentCartProvider>
      {children}
    </TreatmentCartProvider>
  )
}

