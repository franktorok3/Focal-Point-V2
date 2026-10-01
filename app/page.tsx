import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Capabilities } from '@/components/capabilities'
import { Method } from '@/components/method'
import { Founder } from '@/components/founder'
import { SelectedWork } from '@/components/selected-work'
import { Offerings } from '@/components/offerings'
import { InsightsPreview } from '@/components/insights-preview'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Capabilities />
        <Method />
        <Founder />
        <SelectedWork />
        <Offerings />
        <InsightsPreview />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
