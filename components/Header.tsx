'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin, ChevronDown, Home, Calendar, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBehandlungenOpen, setIsBehandlungenOpen] = useState(false)
  const [isMobileBehandlungenOpen, setIsMobileBehandlungenOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Termin anfragen', href: '/termin' },
  ]

  const behandlungen = [
    { name: 'Gesichtsbehandlung', href: '/gesichtsbehandlung' },
    { name: 'Apparative Behandlungen', href: '/apparative-behandlungen' },
    { name: 'Massagen', href: '/massagen' },
    { name: 'Dauerhafte Haarentfernung', href: '/dauerhafte-haarentfernung' },
    { name: 'Augenbrauenkorrektur', href: '/augenbrauenkorrektur' },
  ]

  return (
    <>
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#efefef]/95 backdrop-blur-md shadow-lg' : 'bg-[#efefef] shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/bs Logo+.png"
                alt="BeautySkin Logo"
                width={180}
                height={60}
                className="h-10 md:h-11 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Zentriert */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 font-vogue"
            >
              Home
            </Link>
            
            {/* Behandlungen Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsBehandlungenOpen(true)}
              onMouseLeave={() => setIsBehandlungenOpen(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 font-vogue"
              >
                <span>Behandlungen</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ease-in-out ${isBehandlungenOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Unsichtbare Brücke zwischen Button und Dropdown */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-80 h-2 transition-all duration-300 ${
                isBehandlungenOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`} />
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 w-80 bg-[#e9dbd2] rounded-2xl shadow-2xl py-4 px-2 transition-all duration-300 ease-in-out origin-top ${
                isBehandlungenOpen 
                  ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' 
                  : 'opacity-0 scale-95 pointer-events-none -translate-y-2'
              }`} style={{ marginTop: '8px', paddingTop: '12px' }}>
                {behandlungen.map((behandlung, index) => (
                  <Link
                    key={behandlung.name}
                    href={behandlung.href}
                    className="block px-6 py-3 rounded-xl hover:bg-[#454545]/10 transition-all duration-200 group"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-[#454545] transition-colors duration-200 font-vogue">
                      {behandlung.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Contact Info - Rechts */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+491704482725" className="flex items-center space-x-1 hover:text-primary-600 transition-colors duration-200">
              <Phone className="h-4 w-4" />
              <span className="font-sans">+49 170 4482725</span>
            </a>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span className="text-base">Berlin</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative z-50 p-2 rounded-lg text-gray-700 hover:bg-white/20 active:scale-95 transition-all duration-200"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
              if (isMenuOpen) {
                setIsMobileBehandlungenOpen(false)
              }
            }}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile Navigation - Modern Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => {
                setIsMenuOpen(false)
                setIsMobileBehandlungenOpen(false)
              }}
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                damping: 30, 
                stiffness: 300 
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-[70] md:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-5 flex items-center justify-between">
                <Image
                  src="/bs Logo+.png"
                  alt="BeautySkin Logo"
                  width={140}
                  height={46}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsMobileBehandlungenOpen(false)
                  }}
                  className="p-2 rounded-lg hover:bg-gray-100 active:scale-95 transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Navigation Content */}
              <div className="px-6 py-8">
                {/* Main Navigation */}
                <nav className="space-y-2">
                  <Link
                    href="/"
                    className="flex items-center space-x-4 px-4 py-4 rounded-2xl hover:bg-[#e9dbd2]/50 active:scale-98 transition-all duration-200 group"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsMobileBehandlungenOpen(false)
                    }}
                >
                    <div className="w-10 h-10 rounded-xl bg-[#e9dbd2] flex items-center justify-center group-hover:bg-[#454545] transition-colors duration-200">
                      <Home className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900 font-vogue">Home</span>
                </Link>
              
                    <Link
                    href="/termin"
                    className="flex items-center space-x-4 px-4 py-4 rounded-2xl hover:bg-[#e9dbd2]/50 active:scale-98 transition-all duration-200 group"
                    onClick={() => {
                      setIsMenuOpen(false)
                      setIsMobileBehandlungenOpen(false)
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#e9dbd2] flex items-center justify-center group-hover:bg-[#454545] transition-colors duration-200">
                      <Calendar className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <span className="text-lg font-semibold text-gray-900 font-vogue">Termin anfragen</span>
                  </Link>

                  {/* Behandlungen Section */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setIsMobileBehandlungenOpen(!isMobileBehandlungenOpen)}
                      className="w-full flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-[#e9dbd2]/50 active:scale-98 transition-all duration-200 group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-[#e9dbd2] flex items-center justify-center group-hover:bg-[#454545] transition-colors duration-200">
                          <Sparkles className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-200" />
                        </div>
                        <span className="text-lg font-semibold text-gray-900 font-vogue">Behandlungen</span>
                      </div>
                      <ChevronDown 
                        className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                          isMobileBehandlungenOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {isMobileBehandlungenOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 pt-2">
                            {behandlungen.map((behandlung, index) => (
                              <motion.div
                                key={behandlung.name}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={behandlung.href}
                                  className="block px-4 py-3.5 rounded-xl hover:bg-[#e9dbd2]/30 active:scale-98 transition-all duration-200 group"
                                  onClick={() => {
                                    setIsMenuOpen(false)
                                    setIsMobileBehandlungenOpen(false)
                                  }}
                    >
                                  <span className="text-base font-medium text-gray-700 group-hover:text-[#454545] transition-colors duration-200 font-vogue">
                                    {behandlung.name}
                                  </span>
                    </Link>
                              </motion.div>
                  ))}
                </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
              </div>
                </nav>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>

                {/* Contact Information */}
                <div className="space-y-4 px-4">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider font-vogue">Kontakt</h3>
                  
                  <a 
                    href="tel:+491704482725" 
                    className="flex items-center space-x-4 px-4 py-3 rounded-xl hover:bg-[#e9dbd2]/30 active:scale-98 transition-all duration-200 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#e9dbd2] flex items-center justify-center group-hover:bg-[#454545] transition-colors duration-200">
                      <Phone className="h-5 w-5 text-gray-700 group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Telefon</p>
                      <p className="text-base font-semibold text-gray-900 font-sans">+49 170 4482725</p>
                    </div>
                </a>

                  <div className="flex items-start space-x-4 px-4 py-3">
                    <div className="w-10 h-10 rounded-xl bg-[#e9dbd2] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-1">Adresse</p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Silvio-Meier-Straße 6<br />
                        10247 Berlin
                      </p>
                </div>
              </div>
            </div>
          </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
