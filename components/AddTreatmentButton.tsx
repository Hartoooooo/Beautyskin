'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Check, ChevronDown } from 'lucide-react'
import { useTreatmentCart, Treatment } from '@/contexts/TreatmentCartContext'

interface Variant {
  name: string
  price: string
}

interface AddTreatmentButtonProps {
  treatment: Treatment
  className?: string
  variants?: string[] | Variant[]
}

export default function AddTreatmentButton({ treatment, className = '', variants }: AddTreatmentButtonProps) {
  const { addTreatment, removeTreatment, isTreatmentSelected, selectedTreatments } = useTreatmentCart()
  const [isAnimating, setIsAnimating] = useState(false)
  
  // Normalisiere Varianten zu einem einheitlichen Format
  const normalizedVariants = variants?.map(v => 
    typeof v === 'string' ? { name: v, price: '' } : v
  ) || []
  
  const [selectedVariant, setSelectedVariant] = useState<Variant | string>(
    normalizedVariants[0] || ''
  )
  const [showVariantDropdown, setShowVariantDropdown] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const getVariantId = (variant: Variant | string) => {
    return typeof variant === 'string' ? variant : variant.name
  }
  
  const treatmentId = variants && selectedVariant ? `${treatment.id}-${getVariantId(selectedVariant)}` : treatment.id
  const isSelected = isTreatmentSelected(treatmentId)
  
  // Finde die ausgewählte Variante, falls vorhanden
  const selectedTreatmentVariant = selectedTreatments.find(t => t.id === treatmentId)

  const handleClick = () => {
    if (isSelected) {
      removeTreatment(treatmentId)
      return
    }

    if (variants && !showVariantDropdown) {
      setShowVariantDropdown(true)
      return
    }

    // Flug-Animation starten
    setIsAnimating(true)
    
    // Behandlung zum Warenkorb hinzufügen
    const variantName = typeof selectedVariant === 'string' ? selectedVariant : selectedVariant.name
    const variantPrice = typeof selectedVariant === 'string' ? undefined : selectedVariant.price
    const treatmentToAdd = {
      ...treatment,
      id: treatmentId,
      name: variantName ? `${treatment.name} (${variantName})` : treatment.name,
      price: variantPrice || treatment.price,
      variant: variantName || undefined
    }
    addTreatment(treatmentToAdd)

    // Animation nach 800ms beenden
    setTimeout(() => {
      setIsAnimating(false)
      setShowVariantDropdown(false)
    }, 800)
  }

  const handleVariantSelect = (variant: Variant | string) => {
    setSelectedVariant(variant)
    const variantName = typeof variant === 'string' ? variant : variant.name
    const variantPrice = typeof variant === 'string' ? undefined : variant.price
    const newTreatmentId = `${treatment.id}-${variantName}`
    
    // Flug-Animation starten
    setIsAnimating(true)
    
    // Behandlung zum Warenkorb hinzufügen
    const treatmentToAdd = {
      ...treatment,
      id: newTreatmentId,
      name: `${treatment.name} (${variantName})`,
      price: variantPrice || treatment.price,
      variant: variantName
    }
    addTreatment(treatmentToAdd)

    // Animation nach 800ms beenden
    setTimeout(() => {
      setIsAnimating(false)
      setShowVariantDropdown(false)
    }, 800)
  }

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`${className} ${
          isSelected
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800'
        } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl w-full`}
      >
        {isSelected ? (
          <>
            <Check className="h-5 w-5" />
            <span>Ausgewählt</span>
            {selectedTreatmentVariant?.variant && (
              <span className="text-xs">({selectedTreatmentVariant.variant})</span>
            )}
          </>
        ) : (
          <>
            <Plus className="h-5 w-5" />
            <span>Behandlung auswählen</span>
            {variants && <ChevronDown className="h-4 w-4 ml-1" />}
          </>
        )}
      </button>

      {/* Varianten Dropdown */}
      <AnimatePresence>
        {showVariantDropdown && variants && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 w-full bg-gradient-to-r from-gray-600 to-gray-700 border-2 border-gray-500 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="p-3 bg-gradient-to-r from-gray-600 to-gray-700 border-b border-gray-500">
              <p className="text-sm font-semibold text-white">Variante wählen:</p>
            </div>
            {normalizedVariants.map((variant, index) => {
              const variantName = typeof variant === 'string' ? variant : variant.name
              const variantPrice = typeof variant === 'string' ? '' : variant.price
              return (
                <button
                  key={index}
                  onClick={() => handleVariantSelect(variant)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-500/50 hover:text-white transition-colors border-b border-gray-500/50 last:border-b-0 text-white font-medium flex items-center justify-between"
                >
                  <span>{variantName}</span>
                  {variantPrice && (
                    <span className="text-gray-200 font-semibold ml-2">{variantPrice}</span>
                  )}
                </button>
              )
            })}
            {treatment.name !== 'Micro Needling' && treatment.name !== 'Brasilianische Lymphdrainage' && (
              <button
                onClick={() => setShowVariantDropdown(false)}
                className="w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-500/50 hover:text-white transition-colors border-t border-gray-500/50"
              >
                Abbrechen
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fliegendes Element zur Animation */}
      <AnimatePresence>
        {isAnimating && buttonRef.current && (
          <motion.div
            initial={{
              position: 'fixed',
              left: buttonRef.current.getBoundingClientRect().left,
              top: buttonRef.current.getBoundingClientRect().top,
              opacity: 1,
              scale: 1,
            }}
            animate={{
              left: window.innerWidth - 100,
              top: window.innerHeight - 100,
              opacity: 0,
              scale: 0.3,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            className="pointer-events-none z-[60]"
          >
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-4 py-2 rounded-lg shadow-2xl whitespace-nowrap font-semibold">
              {treatment.name}
              {selectedVariant && variants && (
                <span className="text-xs ml-2">
                  ({typeof selectedVariant === 'string' ? selectedVariant : selectedVariant.name})
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

