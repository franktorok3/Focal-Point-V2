import { Reveal } from '@/components/reveal'

const steps = [
  {
    num: '01',
    title: 'Find the signal',
    body: 'Trace the real customer journey, decision, data, and handoff. The useful AI opportunity is usually hiding beneath the loudest request.',
  },
  {
    num: '02',
    title: 'Build the spine',
    body: 'Connect the experience, campaign, data, dashboard, and operating workflow around one accountable source of truth.',
  },
  {
    num: '03',
    title: 'Put AI to work',
    body: 'Add intelligence where it can improve a decision, accelerate an action, or remove friction—and prove what happened downstream.',
  },
]

export function Method() {
  return (
    <section id="method" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
            The method
          </p>
          <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
            Less AI theater. More operating advantage.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-secondary/60 sm:p-10">
                <span className="font-mono text-sm text-accent">
                  {step.num}
                </span>
                <h3 className="mt-8 font-serif text-3xl tracking-tight sm:text-4xl">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
