'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Check } from 'lucide-react'
import { useTreatmentCart, Treatment } from '@/contexts/TreatmentCartContext'

interface AddTreatmentButtonProps {
  treatment: Treatment
  className?: string
}

export default function AddTreatmentButton({ treatment, className = '' }: AddTreatmentButtonProps) {
  const { addTreatment, removeTreatment, isTreatmentSelected } = useTreatmentCart()
  const [isAnimating, setIsAnimating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  
  const isSelected = isTreatmentSelected(treatment.id)

  const handleClick = () => {
    if (isSelected) {
      removeTreatment(treatment.id)
      return
    }

    // Flug-Animation starten
    setIsAnimating(true)
    
    // Behandlung zum Warenkorb hinzufügen
    addTreatment(treatment)

    // Animation nach 800ms beenden
    setTimeout(() => {
      setIsAnimating(false)
    }, 800)
  }

  return (
    <>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`${className} ${
          isSelected
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-primary-600 hover:bg-primary-700'
        } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
      >
        {isSelected ? (
          <>
            <Check className="h-5 w-5" />
            <span>Ausgewählt</span>
          </>
        ) : (
          <>
            <Plus className="h-5 w-5" />
            <span>Behandlung auswählen</span>
          </>
        )}
      </button>

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
            <div className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow-2xl whitespace-nowrap font-semibold">
              {treatment.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

