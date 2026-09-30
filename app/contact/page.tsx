import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation with Focal Point about systems, transformation, data, operations, or applied AI.',
}

export default function ContactPage() {
  return <div className="min-h-dvh"><SiteNav /><main className="pt-16"><Contact /></main><SiteFooter /></div>
}
