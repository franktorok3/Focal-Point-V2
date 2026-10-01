import { Reveal } from '@/components/reveal'

const services = [
  {
    no: '01',
    title: 'AI-powered experiences',
    body: 'Build websites, content systems, and customer journeys that use intelligence to remove friction—not add another gimmick.',
    tags: ['Web', 'UX', 'Conversion'],
  },
  {
    no: '02',
    title: 'Intelligent campaigns',
    body: 'Connect campaign strategy, audience intelligence, content operations, CRM, and optimization into one learning loop.',
    tags: ['Campaigns', 'CRM', 'Lifecycle'],
  },
  {
    no: '03',
    title: 'Decision intelligence',
    body: 'Build dashboards and analysis that can explain the number, trace the evidence, and sharpen the next decision.',
    tags: ['Dashboards', 'Attribution', 'Forecasting'],
  },
  {
    no: '04',
    title: 'Agentic operations',
    body: 'Design agents and workflows with memory, approvals, recovery paths, and verified downstream action.',
    tags: ['Agents', 'Automation', 'Governance'],
  },
  {
    no: '05',
    title: 'Data and identity architecture',
    body: 'Give customers, transactions, campaigns, and decisions durable definitions before asking AI to reason across them.',
    tags: ['Identity', 'Lineage', 'Data model'],
  },
  {
    no: '06',
    title: 'AI governance and adoption',
    body: 'Turn policy into operating design: clear boundaries, accountable owners, usable controls, and a path from pilot to practice.',
    tags: ['Controls', 'Adoption', 'Operating model'],
  },
]

export function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <div className="grid gap-6 border-b border-border pb-10 sm:grid-cols-12 sm:items-end">
            <div className="sm:col-span-8">
              <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
                Capabilities
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
                AI across the system—not bolted onto the side.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-4">
              We work across the full stack of growth—from the experience a
              customer sees to the evidence and operations behind it.
            </p>
          </div>
        </Reveal>

        <div>
          {services.map((service, i) => (
            <Reveal key={service.no} delay={(i % 2) * 70}>
              <div className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:py-9">
                <div className="flex items-baseline gap-4 sm:col-span-5">
                  <span className="font-mono text-xs text-muted-foreground tabular-nums transition-colors group-hover:text-accent">
                    {service.no}
                  </span>
                  <h3 className="font-serif text-2xl leading-tight tracking-tight transition-colors group-hover:text-accent sm:text-[1.75rem]">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-5 sm:text-base">
                  {service.body}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 sm:col-span-2 sm:justify-end">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs tracking-wide text-muted-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
