import { ArrowUpRight } from 'lucide-react'
import { insights } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function InsightsPreview() {
  return (
    <section id="insights" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Field notes
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
                Strong opinions, operationally tested.
              </h2>
            </div>
            <a href="/insights" className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent">
              Explore all insights <ArrowUpRight className="size-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-border">
          {insights.map((insight, index) => (
            <Reveal key={insight.slug} delay={index * 70}>
              <article className="group grid gap-5 border-b border-border py-8 sm:grid-cols-12 sm:items-start sm:py-10">
                <div className="sm:col-span-3">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                    {insight.pillar}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{insight.readTime}</p>
                </div>
                <div className="sm:col-span-7">
                  <h3 className="font-serif text-2xl leading-tight tracking-tight sm:text-3xl">
                    <a href={`/insights/${insight.slug}`} className="transition-colors group-hover:text-accent">
                      {insight.title}
                    </a>
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {insight.description}
                  </p>
                </div>
                <div className="sm:col-span-2 sm:text-right">
                  <a
                    href={`/insights/${insight.slug}`}
                    aria-label={`Read ${insight.title}`}
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-accent group-hover:text-accent"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
