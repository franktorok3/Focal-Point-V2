import { ArrowRight, Check } from 'lucide-react'
import { offerings } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function Offerings() {
  return (
    <section id="services" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            How we engage
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
            Diagnose the constraint. Build the system. Keep it moving.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Three offers create a clear path from uncertainty to operating
            capability. Start where the organization actually is.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {offerings.map((offering, index) => (
            <Reveal key={offering.slug} delay={index * 90}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">{offering.number}</span>
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {offering.eyebrow}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-3xl leading-tight tracking-tight">
                  {offering.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {offering.summary}
                </p>
                <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed">
                  <strong>Best for:</strong> {offering.bestFor}
                </p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {offering.duration}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-border pt-6">
                  {offering.deliverables.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`/contact?service=${offering.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium hover:text-accent"
                >
                  Discuss this engagement <ArrowRight className="size-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
