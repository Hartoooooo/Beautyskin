'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBehandlungenOpen, setIsBehandlungenOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBehandlungenOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Impressum', href: '/impressum' },
  ]

  const behandlungen = [
    { name: 'Gesichtsbehandlung', href: '/gesichtsbehandlung' },
    { name: 'Apparative Behandlungen', href: '/apparative-behandlungen' },
    { name: 'Massagen', href: '/massagen' },
    { name: 'Dauerhafte Haarentfernung', href: '/dauerhafte-haarentfernung' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold gradient-text">
              BeautySkin
            </Link>
          </div>

          {/* Desktop Navigation - Zentriert */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Home
            </Link>
            
            {/* Behandlungen Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsBehandlungenOpen(!isBehandlungenOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                <span>Behandlungen</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isBehandlungenOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 w-80 bg-white rounded-2xl shadow-2xl py-4 px-2 transition-all duration-300 origin-top ${
                isBehandlungenOpen 
                  ? 'opacity-100 scale-100 pointer-events-auto' 
                  : 'opacity-0 scale-95 pointer-events-none'
              }`}>
                {behandlungen.map((behandlung, index) => (
                  <Link
                    key={behandlung.name}
                    href={behandlung.href}
                    onClick={() => setIsBehandlungenOpen(false)}
                    className="block px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <span className="text-gray-700 font-medium group-hover:text-primary-600 transition-colors duration-200">
                      {behandlung.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              href="/impressum"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
            >
              Impressum
            </Link>
          </nav>

          {/* Contact Info - Rechts */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+49 170 4482725</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Berlin</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Behandlungen Section in Mobile */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-900 mb-2">Behandlungen</p>
                <div className="space-y-1 pl-2">
                  {behandlungen.map((behandlung) => (
                    <Link
                      key={behandlung.name}
                      href={behandlung.href}
                      className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-sm font-medium">{behandlung.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2 text-sm text-gray-600 border-t border-gray-200 mt-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+49 170 4482725</span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>R&Y Slivio-Meier-Straße 6, 10247 Berlin</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
