import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = { title: 'Privacy' }

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh"><SiteNav /><main>
      <PageHero eyebrow="Privacy" title="A straightforward approach to your information." description="This page explains what the Focal Point website collects and why." />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-20 text-base leading-relaxed text-muted-foreground sm:px-8">
        <section><h2 className="font-serif text-3xl text-foreground">Information you provide</h2><p className="mt-4">When you submit the contact form, Focal Point receives the name, email address, company, selected engagement, timeframe, and message you choose to provide. The information is used to evaluate and respond to your inquiry.</p></section>
        <section><h2 className="font-serif text-3xl text-foreground">Website measurement</h2><p className="mt-4">The site uses privacy-oriented Vercel Web Analytics to understand aggregate site usage and improve the experience. Focal Point does not sell personal information.</p></section>
        <section><h2 className="font-serif text-3xl text-foreground">Retention and requests</h2><p className="mt-4">Inquiry information is retained only as long as it remains useful for the relationship or is required for legitimate business and legal purposes. To request access, correction, or deletion, email <a href="mailto:hello@focalpointny.com" className="text-foreground underline">hello@focalpointny.com</a>.</p></section>
        <p className="text-sm">Last updated September 30, 2026. This notice should be reviewed with qualified counsel as the business and measurement stack evolve.</p>
      </div>
    </main><SiteFooter /></div>
  )
}
