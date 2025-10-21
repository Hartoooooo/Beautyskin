'use client'

import { Calendar } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

export default function FloatingBookingButton() {
  const pathname = usePathname()

  // Button auf Impressum und Datenschutz Seiten ausblenden
  const hideOnPages = ['/impressum', '/datenschutz']
  if (hideOnPages.includes(pathname)) {
    return null
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link href="/termin">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 group"
        >
          <Calendar className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-semibold text-lg hidden sm:inline">
            Termin buchen
          </span>
        </motion.button>
      </Link>
    </motion.div>
  )
}

