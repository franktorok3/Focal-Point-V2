import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Problem } from '@/components/problem'
import { Method } from '@/components/method'
import { Services } from '@/components/services'
import { Experience } from '@/components/experience'
import { Engagements } from '@/components/engagements'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Services />
        <Experience />
        <Engagements />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
