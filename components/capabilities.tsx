import { Reveal } from '@/components/reveal'

const capabilities = [
  {
    number: '01',
    title: 'AI-powered experiences',
    body: 'Websites, landing pages, personalization, and customer journeys that use intelligence to remove friction—not add another gimmick.',
    detail: 'Web · UX · Content systems · Conversion',
  },
  {
    number: '02',
    title: 'Intelligent campaigns',
    body: 'Campaign strategy, audience intelligence, content operations, CRM, and automation designed as one learning loop.',
    detail: 'Campaigns · CRM · Lifecycle · Optimization',
  },
  {
    number: '03',
    title: 'Decision intelligence',
    body: 'Dashboards and analysis that can explain the number, trace the evidence, and help a leader decide what happens next.',
    detail: 'Dashboards · Attribution · Forecasting · Reporting',
  },
  {
    number: '04',
    title: 'Agentic operations',
    body: 'AI agents and workflows with memory, approvals, recovery paths, and proof that the intended action actually happened.',
    detail: 'Agents · Automation · Integrations · Governance',
  },
]

export function Capabilities() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">One growth system</p>
          <div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="font-serif text-4xl leading-[1.04] tracking-tight text-balance sm:text-6xl lg:col-span-8">
              AI is not a service line. It is a new way for the whole system to work.
            </h2>
            <p className="text-base leading-relaxed text-primary-foreground/65 lg:col-span-4">
              Experience creates the signal. Campaigns activate it. Intelligence explains it. Operations make it repeatable.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 70}>
              <article className="h-full bg-primary p-7 sm:p-9">
                <span className="font-mono text-xs text-accent">{capability.number}</span>
                <h3 className="mt-7 font-serif text-3xl tracking-tight">{capability.title}</h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-primary-foreground/70">{capability.body}</p>
                <p className="mt-7 border-t border-primary-foreground/15 pt-5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-primary-foreground/45">
                  {capability.detail}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
