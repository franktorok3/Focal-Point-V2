import type { Metadata } from 'next'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'About Frank Torok',
  description:
    'Meet Frank Torok and the operating principles behind Focal Point, a founder-led systems and transformation consultancy.',
}

const principles = [
  ['Start with the operating truth', 'Trace the actual configuration, data, handoff, decision, and downstream action before prescribing a platform or automation.'],
  ['Preserve evidence boundaries', 'Reported, simulated, preview, approved, deployed, and verified are different states. The work names those boundaries instead of blending them.'],
  ['Build one durable system', 'New capability should strengthen the system of record, not create another tracker, control plane, or source of ambiguity.'],
  ['Design for recovery', 'Failure handling, rollback, ownership, and the next safe action belong in the design—not in a document written after launch.'],
]

export default function AboutPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <PageHero
          eyebrow="About Focal Point"
          title="The difficult part of AI is everything around the AI."
          description="Focal Point is a founder-led consultancy for organizations ready to connect customer experience, growth, data, operations, and AI into one working system."
        />
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Frank Torok · Founder & Principal</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight sm:text-5xl">The work begins where the demo ends.</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
              <p>Frank works at the intersection of customer experience, growth, operations, finance, data, and applied AI. He has led transformation from inside complex organizations—where technical choices have to survive real budgets, real teams, existing vendors, and imperfect data.</p>
              <p>Focal Point exists because the most expensive AI problems are rarely model problems. They live in the seams: between a customer action and a financial record, between an approval and an automation, or between a strategic priority and the system expected to carry it.</p>
              <p>The consultancy combines diagnosis, operating design, and hands-on implementation. Specialist collaborators can join when the work calls for them, while Focal Point retains accountability for the whole system.</p>
            </div>
          </div>
        </section>
        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Operating principles</p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {principles.map(([title, body], index) => (
                <article key={title} className="bg-card p-8 sm:p-10">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <h3 className="mt-7 font-serif text-3xl tracking-tight">{title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
