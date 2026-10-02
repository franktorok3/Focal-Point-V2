import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'
import { offerings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Focal Point about systems, transformation, data, operations, or applied AI.',
}

type ContactPageProps = {
  searchParams: Promise<{ service?: string | string[] }>
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { service } = await searchParams
  const serviceSlug = typeof service === 'string' ? service : undefined
  const offering = offerings.find((item) => item.slug === serviceSlug)
  const selectedService = offering ? { slug: offering.slug, name: offering.name } : undefined

  return <div className="min-h-dvh"><SiteNav /><main className="pt-16"><Contact selectedService={selectedService} /></main><SiteFooter /></div>
}
