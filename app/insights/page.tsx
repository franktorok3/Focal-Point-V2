import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import { insights } from '@/lib/content'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Field notes on operating systems, applied AI with controls, decision-ready data, and transformation.',
}

export default function InsightsPage() {
  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main>
        <PageHero eyebrow="Field notes" title="Ideas for building through complexity." description="Practical thinking for leaders connecting systems, data, operations, finance, and AI." />
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="grid gap-6 lg:grid-cols-3">
              {insights.map((insight) => (
                <article key={insight.slug} className="group flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">{insight.pillar}</p>
                  <h2 className="mt-7 font-serif text-3xl leading-tight tracking-tight">
                    <a href={`/insights/${insight.slug}`} className="group-hover:text-accent">{insight.title}</a>
                  </h2>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-muted-foreground">{insight.description}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                    <span>{insight.readTime}</span>
                    <a href={`/insights/${insight.slug}`} aria-label={`Read ${insight.title}`} className="inline-flex size-9 items-center justify-center rounded-full border border-border group-hover:border-accent group-hover:text-accent">
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
