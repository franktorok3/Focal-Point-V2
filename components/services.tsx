import { Reveal } from '@/components/reveal'

const services = [
  {
    no: '01',
    title: 'Brand & positioning strategy',
    body: 'Sharpen who you are, who you serve, and why it matters — the foundation every system is built on.',
    tags: ['Positioning', 'Messaging', 'Narrative'],
  },
  {
    no: '02',
    title: 'Marketing operations',
    body: 'Connect teams, tools, and processes into one coordinated engine with clear ownership end to end.',
    tags: ['Process', 'Tooling', 'Ownership'],
  },
  {
    no: '03',
    title: 'AI workflow design',
    body: 'Identify where AI removes friction and design dependable, human-in-the-loop workflows around it.',
    tags: ['Automation', 'Agents', 'Governance'],
  },
  {
    no: '04',
    title: 'CRM & automation planning',
    body: 'Architect the data model, lifecycle stages, and automations that keep your pipeline moving.',
    tags: ['Data model', 'Lifecycle', 'Routing'],
  },
  {
    no: '05',
    title: 'Analytics & dashboard strategy',
    body: 'Define the metrics that matter and the reporting that turns data into decisions, not noise.',
    tags: ['Metrics', 'Reporting', 'Insight'],
  },
  {
    no: '06',
    title: 'Campaign systems & lead generation',
    body: 'Build repeatable campaign systems that generate, qualify, and route demand at scale.',
    tags: ['Demand', 'Campaigns', 'Pipeline'],
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
                Six disciplines, one connected system.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-4">
              We work across the full stack of growth — from the story you tell
              to the systems that deliver it.
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
