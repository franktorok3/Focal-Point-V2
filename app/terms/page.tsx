import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = { title: 'Terms' }

export default function TermsPage() {
  return (
    <div className="min-h-dvh"><SiteNav /><main>
      <PageHero eyebrow="Terms" title="Website terms." description="Basic terms governing use of the public Focal Point website." />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-20 text-base leading-relaxed text-muted-foreground sm:px-8">
        <section><h2 className="font-serif text-3xl text-foreground">Informational content</h2><p className="mt-4">The website provides general information about Focal Point services and perspectives. It is not legal, financial, accounting, security, or other regulated professional advice.</p></section>
        <section><h2 className="font-serif text-3xl text-foreground">Engagements</h2><p className="mt-4">Submitting a form or exchanging email does not create a consulting relationship. Work begins only under a mutually accepted written agreement defining scope, responsibilities, fees, confidentiality, and other terms.</p></section>
        <section><h2 className="font-serif text-3xl text-foreground">Content</h2><p className="mt-4">Unless otherwise stated, website text, visual design, and original media belong to Focal Point NY and may not be republished commercially without permission.</p></section>
        <p className="text-sm">Last updated September 30, 2026. These terms should be reviewed with qualified counsel before relying on them as final legal language.</p>
      </div>
    </main><SiteFooter /></div>
  )
}
