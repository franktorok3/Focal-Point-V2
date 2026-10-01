import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Offerings } from '@/components/offerings'
import { Capabilities } from '@/components/capabilities'
import { Method } from '@/components/method'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Consulting Services',
  description:
    'AI-powered experiences, intelligent campaigns, decision intelligence, agentic operations, and the systems that connect them.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <PageHero eyebrow="Services" title="From AI ambition to operating advantage." description="Connect the experience, campaign, intelligence, and operating system around the outcome the organization actually needs." />
        <Capabilities />
        <Method />
        <Offerings />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
