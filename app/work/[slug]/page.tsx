import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/lib/content'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Contact } from '@/components/contact'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return {}
  return { title: study.title, description: study.summary }
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  return (
    <div className="min-h-dvh">
      <SiteNav />
      <main className="pt-16">
        <article>
          <header className="border-b border-border">
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{study.client}</p>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight text-balance sm:text-7xl">{study.title}</h1>
              <p className="mt-7 max-w-2xl text-xl leading-relaxed text-muted-foreground">{study.summary}</p>
              <p className="mt-8 text-xs uppercase tracking-[0.12em] text-muted-foreground">{study.label}</p>
              <div className="mt-10 flex flex-wrap gap-2">
                {study.disciplines.map((item) => <span key={item} className="rounded-full border border-border bg-card px-4 py-2 text-sm">{item}</span>)}
              </div>
            </div>
          </header>
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
            <Image src={study.image} alt={study.imageAlt} width={1792} height={896} priority sizes="(max-width: 768px) 100vw, 1152px" className="w-full rounded-2xl border border-border" />
          </div>
          <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-20">
            {[
              ['Situation', study.situation],
              ['What was actually happening', study.reality],
              ['The focal point', study.focalPoint],
            ].map(([heading, body]) => (
              <section key={heading} className="border-t border-border py-9">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">{heading}</p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{body}</p>
              </section>
            ))}
            <section className="border-t border-border py-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">System designed</p>
              <ul className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {study.system.map((item) => <li key={item} className="border-l-2 border-accent pl-5">{item}</li>)}
              </ul>
            </section>
            <section className="border-t border-border py-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">Evidence of improvement</p>
              <ul className="mt-5 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {study.evidence.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </section>
            <section className="border-y border-border py-9">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">What this made possible</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{study.next}</p>
            </section>
          </div>
        </article>
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
