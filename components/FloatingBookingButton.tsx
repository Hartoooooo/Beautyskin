'use client'

import { useState, useEffect } from 'react'
import { Calendar, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTreatmentCart } from '@/contexts/TreatmentCartContext'

export default function FloatingBookingButton() {
  const pathname = usePathname()
  const { getTreatmentCount, selectedTreatments, removeTreatment } = useTreatmentCart()
  const treatmentCount = getTreatmentCount()
  const [showTooltip, setShowTooltip] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  // Button auf Impressum und Datenschutz Seiten ausblenden
  const hideOnPages = ['/impressum', '/datenschutz']
  if (hideOnPages.includes(pathname)) {
    return null
  }

  useEffect(() => {
    const checkVisibility = () => {
      let shouldHide = false

      // Auf Startseite: Prüfe ob Hero im Viewport ist
      if (pathname === '/') {
        const heroSection = document.querySelector('section[class*="min-h-screen"]') as HTMLElement
        if (heroSection) {
          const heroRect = heroSection.getBoundingClientRect()
          const heroInViewport = heroRect.top < window.innerHeight && heroRect.bottom > 0
          if (heroInViewport) {
            shouldHide = true
          }
        }
      }

      // Auf allen Seiten: Prüfe ob Footer im Viewport ist
      if (!shouldHide) {
        const footer = document.querySelector('footer') as HTMLElement
        if (footer) {
          const footerRect = footer.getBoundingClientRect()
          const footerInViewport = footerRect.top < window.innerHeight && footerRect.bottom > 0
          if (footerInViewport) {
            shouldHide = true
          }
        }
      }

      setIsVisible(!shouldHide)
    }

    // Initial check nach kurzer Verzögerung, damit DOM geladen ist
    const timeoutId = setTimeout(checkVisibility, 100)

    // Event listener für Scroll
    window.addEventListener('scroll', checkVisibility, { passive: true })
    window.addEventListener('resize', checkVisibility, { passive: true })

    // Intersection Observer für bessere Performance
    const observers: IntersectionObserver[] = []

    // Hero Observer (nur auf Startseite)
    if (pathname === '/') {
      const heroSection = document.querySelector('section[class*="min-h-screen"]')
      if (heroSection) {
        const heroObserver = new IntersectionObserver(
          (entries) => {
            const heroVisible = entries.some(entry => entry.isIntersecting)
            if (heroVisible) {
              setIsVisible(false)
            } else {
              // Prüfe Footer wenn Hero nicht sichtbar
              const footer = document.querySelector('footer')
              if (footer) {
                const footerRect = footer.getBoundingClientRect()
                const footerInViewport = footerRect.top < window.innerHeight && footerRect.bottom > 0
                setIsVisible(!footerInViewport)
              } else {
                setIsVisible(true)
              }
            }
          },
          { threshold: 0.1, rootMargin: '0px' }
        )
        heroObserver.observe(heroSection)
        observers.push(heroObserver)
      }
    }

    // Footer Observer (auf allen Seiten)
    const footer = document.querySelector('footer')
    if (footer) {
      const footerObserver = new IntersectionObserver(
        (entries) => {
          const footerVisible = entries.some(entry => entry.isIntersecting)
          if (footerVisible) {
            setIsVisible(false)
          } else {
            // Prüfe Hero wenn Footer nicht sichtbar (nur auf Startseite)
            if (pathname === '/') {
              const heroSection = document.querySelector('section[class*="min-h-screen"]')
              if (heroSection) {
                const heroRect = heroSection.getBoundingClientRect()
                const heroInViewport = heroRect.top < window.innerHeight && heroRect.bottom > 0
                setIsVisible(!heroInViewport)
              } else {
                setIsVisible(true)
              }
            } else {
              setIsVisible(true)
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px' }
      )
      footerObserver.observe(footer)
      observers.push(footerObserver)
    }

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('scroll', checkVisibility)
      window.removeEventListener('resize', checkVisibility)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [pathname])

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      {/* Tooltip mit ausgewählten Behandlungen */}
      <AnimatePresence>
        {showTooltip && treatmentCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full right-0 mb-4 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3">
              <h3 className="text-white font-semibold text-lg">Ausgewählte Behandlungen</h3>
            </div>
            <div className="max-h-96 overflow-y-auto p-2">
              {selectedTreatments.map((treatment) => (
                <div
                  key={treatment.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900 font-medium text-sm truncate">
                      {treatment.name}
                    </p>
                    {treatment.price && (
                      <p className="text-gray-500 text-xs">{treatment.price}</p>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      removeTreatment(treatment.id)
                    }}
                    className="ml-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Behandlung entfernen"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 px-4 py-3 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                Klicken Sie auf den Button, um einen Termin zu buchen
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Link href={treatmentCount > 0 ? "/termin?skip=3" : "/termin"}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group"
        >
          <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold text-lg hidden sm:inline">
            Termin buchen
          </span>
          
          {/* Badge für Behandlungsanzahl */}
          <AnimatePresence>
            {treatmentCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center shadow-lg cursor-pointer"
              >
                {treatmentCount}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </Link>
    </motion.div>
  )
}

