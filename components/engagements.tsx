import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const models = [
  {
    name: 'Strategy Sprint',
    duration: 'Focused',
    body: 'A fast, intensive engagement to align direction, define priorities, and produce a clear plan of action.',
  },
  {
    name: 'Systems Audit',
    duration: 'Diagnostic',
    body: 'A deep review of your tools, data, and workflows to surface friction and map the path to a single system of record.',
  },
  {
    name: 'Growth Engine Build',
    duration: 'Implementation',
    body: 'Hands-on design and build of the marketing, automation, and AI systems that power scalable growth.',
  },
  {
    name: 'Fractional Marketing / AI Operations',
    duration: 'Ongoing',
    body: 'Embedded strategic leadership to run and continuously evolve your marketing and AI operations.',
  },
]

export function Engagements() {
  return (
    <section id="engagements" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
            Engagement models
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
            Ways to work together.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {models.map((model, i) => (
            <Reveal key={model.name} delay={(i % 2) * 80}>
              <a
                href="#contact"
                className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-secondary/60 sm:p-10"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
                    {model.duration}
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-tight text-balance sm:text-3xl">
                  {model.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {model.body}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
