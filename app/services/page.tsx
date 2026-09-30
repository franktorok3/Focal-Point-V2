import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Offerings } from '@/components/offerings'
import { Method } from '@/components/method'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Consulting Services',
  description:
    'Systems clarity, operating system implementation, and fractional transformation and AI operations for growing organizations.',
}

export default function ServicesPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <PageHero eyebrow="Services" title="A clear path from constraint to capability." description="Start with the decision the organization needs to make—not a predetermined platform, dashboard, or AI tool." />
        <Method />
        <Offerings />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
