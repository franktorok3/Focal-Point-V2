import { Reveal } from '@/components/reveal'

const steps = [
  {
    num: '01',
    title: 'Simplify',
    body: 'Cut the noise. We map what exists, retire what doesn\u2019t serve growth, and reduce your stack to the systems that actually move the business.',
  },
  {
    num: '02',
    title: 'Focus',
    body: 'Align on what matters. We define clear ownership, a single source of truth, and the priorities that turn scattered effort into momentum.',
  },
  {
    num: '03',
    title: 'Expand',
    body: 'Scale with confidence. We build the workflows, automation, and AI infrastructure that let you grow without re-creating the chaos.',
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
            A repeatable path from complexity to clarity.
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
