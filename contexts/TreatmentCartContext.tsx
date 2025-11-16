'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface Treatment {
  id: string
  name: string
  price?: string
  variant?: string
}

interface TreatmentCartContextType {
  selectedTreatments: Treatment[]
  addTreatment: (treatment: Treatment) => void
  removeTreatment: (treatmentId: string) => void
  clearTreatments: () => void
  getTreatmentCount: () => number
  isTreatmentSelected: (treatmentId: string) => boolean
}

const TreatmentCartContext = createContext<TreatmentCartContextType | undefined>(undefined)

export function TreatmentCartProvider({ children }: { children: React.ReactNode }) {
  const [selectedTreatments, setSelectedTreatments] = useState<Treatment[]>([])
  const [isClient, setIsClient] = useState(false)

  // Initialize from localStorage on client side
  useEffect(() => {
    setIsClient(true)
    const stored = localStorage.getItem('selectedTreatments')
    if (stored) {
      try {
        setSelectedTreatments(JSON.parse(stored))
      } catch (e) {
        console.error('Error parsing stored treatments:', e)
      }
    }
  }, [])

  // Save to localStorage whenever treatments change
  useEffect(() => {
    if (isClient) {
      localStorage.setItem('selectedTreatments', JSON.stringify(selectedTreatments))
    }
  }, [selectedTreatments, isClient])

  const addTreatment = (treatment: Treatment) => {
    setSelectedTreatments((prev) => {
      // Avoid duplicates
      if (prev.some((t) => t.id === treatment.id)) {
        return prev
      }
      return [...prev, treatment]
    })
  }

  const removeTreatment = (treatmentId: string) => {
    setSelectedTreatments((prev) => prev.filter((t) => t.id !== treatmentId))
  }

  const clearTreatments = () => {
    setSelectedTreatments([])
  }

  const getTreatmentCount = () => {
    return selectedTreatments.length
  }

  const isTreatmentSelected = (treatmentId: string) => {
    return selectedTreatments.some((t) => t.id === treatmentId)
  }

  return (
    <TreatmentCartContext.Provider
      value={{
        selectedTreatments,
        addTreatment,
        removeTreatment,
        clearTreatments,
        getTreatmentCount,
        isTreatmentSelected,
      }}
    >
      {children}
    </TreatmentCartContext.Provider>
  )
}

export function useTreatmentCart() {
  const context = useContext(TreatmentCartContext)
  if (context === undefined) {
    throw new Error('useTreatmentCart must be used within a TreatmentCartProvider')
  }
  return context
}

