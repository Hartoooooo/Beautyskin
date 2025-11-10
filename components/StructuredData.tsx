export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'BeautySkin',
    image: 'https://beautyskin-studio.de/aussen.webp',
    '@id': 'https://beautyskin-studio.de',
    url: 'https://beautyskin-studio.de',
    telephone: '+491704482725',
    email: 'beautyskin.studio@icloud.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R&Y Slivio-Meier-Straße 6',
      addressLocality: 'Berlin',
      postalCode: '10247',
      addressRegion: 'Berlin',
      addressCountry: 'DE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.5159,
      longitude: 13.4543,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '15:00',
      },
    ],
    priceRange: '€€',
    areaServed: {
      '@type': 'City',
      name: 'Berlin',
    },
    sameAs: [
      'https://www.instagram.com/beautyskin.kosmetik/',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BeautySkin',
    url: 'https://beautyskin-studio.de',
    logo: 'https://beautyskin-studio.de/bs Logo+.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+491704482725',
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['German'],
    },
    sameAs: [
      'https://www.instagram.com/beautyskin.kosmetik/',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}

