'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Cookie, Settings, Check } from 'lucide-react'
import Link from 'next/link'

// Google Analytics ID aus Umgebungsvariable
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-98JK9GPT7B'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
  })

  useEffect(() => {
    // Prüfe, ob bereits eine Cookie-Einwilligung vorhanden ist
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      // Zeige Banner nach kurzer Verzögerung
      const timer = setTimeout(() => setShowBanner(true), 1000)
      return () => clearTimeout(timer)
    } else {
      // Lade gespeicherte Präferenzen
      const savedPreferences = JSON.parse(consent)
      setPreferences(savedPreferences)
      
      // Lade Google Analytics wenn zugestimmt
      if (savedPreferences.analytics) {
        loadGoogleAnalytics()
      }
    }

    // Lausche auf Event zum Öffnen der Cookie-Einstellungen
    const handleOpenSettings = () => {
      const consent = localStorage.getItem('cookieConsent')
      if (consent) {
        const savedPreferences = JSON.parse(consent)
        setPreferences(savedPreferences)
      }
      setShowSettings(true)
    }

    window.addEventListener('openCookieSettings', handleOpenSettings)
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings)
  }, [])

  const loadGoogleAnalytics = () => {
    // Google Analytics laden (GA4) - nur nach Cookie-Zustimmung
    if (typeof window !== 'undefined' && !window.gtag && GA_ID) {
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=None;Secure'
        });
      `
      document.head.appendChild(script2)
    }
  }

  const acceptAll = () => {
    const newPreferences = { necessary: true, analytics: true }
    setPreferences(newPreferences)
    saveCookieConsent(newPreferences)
    loadGoogleAnalytics()
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptNecessary = () => {
    const newPreferences = { necessary: true, analytics: false }
    setPreferences(newPreferences)
    saveCookieConsent(newPreferences)
    setShowBanner(false)
    setShowSettings(false)
  }

  const saveSettings = () => {
    saveCookieConsent(preferences)
    if (preferences.analytics) {
      loadGoogleAnalytics()
    }
    setShowSettings(false)
    setShowBanner(false)
  }

  const saveCookieConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs))
    
    // Setze Cookie für 365 Tage
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 365)
    document.cookie = `cookieConsent=${JSON.stringify(prefs)};expires=${expiryDate.toUTCString()};path=/;SameSite=Lax`
  }

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showSettings && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Cookie className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Cookies & Datenschutz</h3>
                  </div>
                  <button
                    onClick={() => setShowBanner(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Schließen"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Wir verwenden Cookies, um Ihnen ein optimales Website-Erlebnis zu bieten. 
                  Technisch notwendige Cookies sind für die Funktionalität der Website erforderlich. 
                  Analyse-Cookies helfen uns, die Website zu verbessern. Sie können Ihre Einwilligung jederzeit widerrufen.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Check className="h-5 w-5" />
                    <span>Alle akzeptieren</span>
                  </button>
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Einstellungen</span>
                  </button>
                </div>

                <div className="mt-4 text-center">
                  <Link href="/datenschutz" className="text-sm text-gray-500 hover:text-gray-700 underline">
                    Datenschutzerklärung
                  </Link>
                  <span className="mx-2 text-gray-300">•</span>
                  <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-700 underline">
                    Cookie-Richtlinie
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setShowSettings(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">Cookie-Einstellungen</h2>
                    </div>
                    <button
                      onClick={() => setShowSettings(false)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Wählen Sie aus, welche Cookies Sie zulassen möchten. Ihre Auswahl wird für 365 Tage gespeichert.
                  </p>

                  <div className="space-y-4">
                    {/* Notwendige Cookies */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Technisch notwendige Cookies
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Diese Cookies sind für die Funktion der Website erforderlich und können nicht deaktiviert werden.
                          </p>
                          <p className="text-xs text-gray-500">
                            Speichert: Cookie-Präferenzen
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end px-1">
                            <div className="w-4 h-4 bg-white rounded-full" />
                          </div>
                          <p className="text-xs text-gray-500 mt-1 text-center">Immer aktiv</p>
                        </div>
                      </div>
                    </div>

                    {/* Analyse Cookies */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Analyse-Cookies (Google Analytics)
                          </h3>
                          <p className="text-sm text-gray-600 mb-2">
                            Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren. 
                            Alle Daten werden anonymisiert erfasst.
                          </p>
                          <p className="text-xs text-gray-500">
                            Anbieter: Google Ireland Limited
                          </p>
                        </div>
                        <div className="ml-4">
                          <button
                            onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                            className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                              preferences.analytics ? 'bg-green-500 justify-end' : 'bg-gray-300 justify-start'
                            } px-1`}
                          >
                            <div className="w-4 h-4 bg-white rounded-full" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={saveSettings}
                      className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 text-white hover:shadow-lg px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Einstellungen speichern
                    </button>
                    <button
                      onClick={acceptAll}
                      className="flex-1 bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Alle akzeptieren
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <Link href="/datenschutz" className="text-sm text-gray-500 hover:text-gray-700 underline">
                      Datenschutzerklärung
                    </Link>
                    <span className="mx-2 text-gray-300">•</span>
                    <Link href="/cookies" className="text-sm text-gray-500 hover:text-gray-700 underline">
                      Cookie-Richtlinie
                    </Link>
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

// TypeScript-Erweiterung für window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
    dataLayer?: any[]
  }
}

