import { MetadataRoute } from 'next'

const siteUrl = 'https://www.beautyskin-berlin.de'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl
  const now = new Date()

  // Statische Seiten mit optimierten Prioritäten und Change Frequencies
  const routes = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/behandlungen',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/termin',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/gesichtsbehandlung',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/apparative-behandlungen',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/dauerhafte-haarentfernung',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/massagen',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/augenbrauenkorrektur',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/impressum',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      route: '/datenschutz',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      route: '/cookies',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
    {
      route: '/agb',
      priority: 0.3,
      changeFrequency: 'yearly' as const,
    },
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))

  return routes
}

