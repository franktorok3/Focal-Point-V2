import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getInsight, insights } from '@/lib/content'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) return {}
  return {
    title: insight.title,
    description: insight.description,
    alternates: { canonical: `/insights/${insight.slug}` },
    openGraph: { type: 'article', title: insight.title, description: insight.description },
  }
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const insight = getInsight(slug)
  if (!insight) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.description,
    datePublished: '2026-09-30',
    dateModified: '2026-09-30',
    author: { '@type': 'Person', name: 'Frank Torok' },
    publisher: { '@type': 'Organization', name: 'Focal Point NY', url: 'https://www.focalpointny.com' },
    mainEntityOfPage: `https://www.focalpointny.com/insights/${insight.slug}`,
  }

  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main className="pt-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, '\\u003c') }} />
        <article>
          <header className="border-b border-border">
            <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{insight.pillar}</p>
              <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight text-balance sm:text-7xl">{insight.title}</h1>
              <p className="mt-8 text-xl leading-relaxed text-muted-foreground">{insight.description}</p>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                <span>By Frank Torok</span><span>{insight.date}</span><span>{insight.readTime}</span>
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
            <p className="border-l-2 border-accent pl-6 font-serif text-2xl leading-relaxed tracking-tight sm:text-3xl">{insight.thesis}</p>
            {insight.sections.map((section) => (
              <section key={section.heading} className="mt-14">
                <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">{section.heading}</h2>
                <div className="mt-6 space-y-5 text-lg leading-[1.8] text-muted-foreground">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-7 space-y-4 border-y border-border py-7">
                    {section.bullets.map((bullet) => <li key={bullet} className="flex gap-4 text-base leading-relaxed text-muted-foreground"><span className="text-accent">—</span>{bullet}</li>)}
                  </ul>
                )}
              </section>
            ))}
            <div className="mt-16 rounded-2xl border border-border bg-secondary/40 p-7 sm:p-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Make it operational</p>
              <h2 className="mt-4 font-serif text-3xl tracking-tight">Where is complexity hiding in your system?</h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">An AI &amp; Growth Systems Audit finds the opportunity, evidence, ownership, and constraints before you fund another impressive dead end.</p>
              <a href="/contact?service=systems-clarity-audit" className="mt-6 inline-block text-sm font-medium underline underline-offset-4 hover:text-accent">Discuss an audit</a>
            </div>
          </div>
        </article>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
