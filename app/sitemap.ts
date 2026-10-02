import type { MetadataRoute } from 'next'
import { caseStudies, insights } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.focalpointny.com'
  const updated = new Date('2026-10-01')
  const staticRoutes = ['', '/about', '/services', '/work', '/insights', '/contact', '/privacy', '/terms']
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: updated, changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const), priority: route === '' ? 1 : 0.7 })),
    ...caseStudies.map((study) => ({ url: `${base}/work/${study.slug}`, lastModified: updated, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...insights.map((insight) => ({ url: `${base}/insights/${insight.slug}`, lastModified: new Date(insight.publishedAt), changeFrequency: 'monthly' as const, priority: 0.7 })),
  ]
}
