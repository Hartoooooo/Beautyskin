'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#e9dbd2]/95 backdrop-blur-md shadow-lg' : 'bg-[#e9dbd2] shadow-md'
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
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#e9dbd2] rounded-lg shadow-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 font-vogue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Behandlungen Section in Mobile */}
              <div className="px-3 py-2">
                <p className="text-sm font-semibold text-gray-900 mb-2 font-vogue">Behandlungen</p>
                <div className="space-y-1 pl-2">
                  {behandlungen.map((behandlung) => (
                    <Link
                      key={behandlung.name}
                      href={behandlung.href}
                      className="block py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-sm font-medium font-vogue">{behandlung.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2 text-sm text-gray-600 border-t border-gray-200 mt-2 pt-2">
                <a href="tel:+491704482725" className="flex items-center space-x-2 hover:text-primary-600 transition-colors duration-200">
                  <Phone className="h-4 w-4" />
                  <span className="font-sans">+49 170 4482725</span>
                </a>
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
