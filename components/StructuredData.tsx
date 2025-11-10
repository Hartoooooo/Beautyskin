'use client'

import Script from 'next/script'

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://www.beautyskin-berlin.de/#organization",
    "name": "BeautySkin Kosmetikstudio",
    "alternateName": "BeautySkin Berlin",
    "description": "Professionelles Kosmetikstudio in Berlin Friedrichshain. Spezialisiert auf Gesichtsbehandlungen, Microneedling, Aqua Facial, dauerhafte Haarentfernung und Massagen.",
    "url": "https://www.beautyskin-berlin.de",
    "logo": "https://www.beautyskin-berlin.de/bs%20Logo+.png",
    "image": [
      "https://www.beautyskin-berlin.de/aussen.webp",
      "https://www.beautyskin-berlin.de/drin1.webp",
      "https://www.beautyskin-berlin.de/drin2.webp",
      "https://www.beautyskin-berlin.de/drin3.webp"
    ],
    "telephone": "+491704482725",
    "email": "beautyskin.studio@icloud.com",
    "priceRange": "€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R&Y Slivio-Meier-Straße 6",
      "addressLocality": "Berlin",
      "addressRegion": "Berlin",
      "postalCode": "10247",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "52.5145",
      "longitude": "13.4532"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "350",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Ysabel Busch",
      "jobTitle": "Inhaberin & Kosmetikerin"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "52.5145",
        "longitude": "13.4532"
      },
      "geoRadius": "20000"
    },
    "serviceType": [
      "Gesichtsbehandlung",
      "Microneedling",
      "Aqua Facial",
      "Dauerhafte Haarentfernung",
      "Massagen",
      "Augenbrauenkorrektur",
      "Apparative Kosmetikbehandlungen"
    ],
    "paymentAccepted": "Cash, EC-Card",
    "currenciesAccepted": "EUR",
    "sameAs": [
      "https://www.instagram.com/beautyskin.kosmetik/",
      "https://wa.me/message/G5TR7ZJCEOXDO1"
    ]
  }

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.beautyskin-berlin.de/#website",
    "url": "https://www.beautyskin-berlin.de",
    "name": "BeautySkin Kosmetikstudio Berlin",
    "description": "Professionelle Kosmetikbehandlungen in Berlin Friedrichshain",
    "publisher": {
      "@id": "https://www.beautyskin-berlin.de/#organization"
    },
    "inLanguage": "de-DE",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.beautyskin-berlin.de/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  category: string
  priceRange?: string
  duration?: string
  url: string
}

export function ServiceSchema({ name, description, category, priceRange, duration, url }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": name,
    "description": description,
    "provider": {
      "@id": "https://www.beautyskin-berlin.de/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": "Berlin"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url,
      "servicePhone": "+491704482725",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "R&Y Slivio-Meier-Straße 6",
          "addressLocality": "Berlin",
          "postalCode": "10247",
          "addressCountry": "DE"
        }
      }
    },
    "category": category,
    ...(priceRange && { "priceRange": priceRange }),
    ...(duration && { "serviceOutput": duration })
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  )
}

