import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { SelectedWork } from '@/components/selected-work'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Case studies in data lineage, governed AI operations, structured intake, and accountable systems design.',
}

export default function WorkPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <PageHero eyebrow="Selected work" title="Show the operating problem, not just the finished interface." description="These cases focus on the decisions, evidence, and system design beneath the implementation. Client identifiers are withheld where required." />
        <SelectedWork />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
