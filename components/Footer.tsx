import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    studio: [
      { name: 'Behandlungen', href: '/behandlungen' },
      { name: 'Termine', href: '#termin' },
      { name: 'Kontakt', href: '#kontakt' },
    ],
    legal: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
      { name: 'Cookie-Richtlinie', href: '/cookies' },
      { name: 'AGB', href: '/agb' },
      { name: 'Widerrufsbelehrung', href: '/widerruf' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">BeautySkin</h3>
                <p className="text-gray-300 mt-2">
                  Ihr professionelles Kosmetikstudio in Berlin für natürliche Schönheit und Wohlbefinden.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/beautyskin.kosmetik/?igsh=cWs1dDlwcjljMmll"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label="BeautySkin auf Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  aria-label="BeautySkin auf Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/message/G5TR7ZJCEOXDO1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label="BeautySkin auf WhatsApp"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Studio Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Studio</h4>
              <ul className="space-y-3">
                {footerLinks.studio.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      R&Y Slivio-Meier-Straße 6<br />
                      10247 Berlin
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:+491704482725"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    +49 170 4482725
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:beautyskin.studio@icloud.com"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    beautyskin.studio@icloud.com
                  </a>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div className="text-gray-300 text-sm">
                    <p>Mo–Fr: 10:00–18:00</p>
                    <p>Sa: 10:00–15:00</p>
                    <p>So: Geschlossen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-gray-400 text-sm">
                © {currentYear} BeautySkin. Alle Rechte vorbehalten.
              </div>
              <div className="text-gray-400 text-xs mt-1">
                Umsetzung von Neoklar<sup className="text-[0.6em]">TM</sup>
              </div>
            </div>
            <div className="text-gray-400 text-sm">
              Professionelle Kosmetik in Berlin
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
