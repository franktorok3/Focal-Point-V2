import { Reveal } from '@/components/reveal'

const questions = [
  {
    question: 'What kind of organization is the best fit?',
    answer:
      'Focal Point is most useful when growth or transformation crosses teams and systems: marketing, operations, finance, customer data, reporting, and AI. The organization is usually established enough to feel the cost of fragmentation and motivated enough to change it.',
  },
  {
    question: 'Do you replace our existing team, agency, or platforms?',
    answer:
      'Usually not. The work starts by clarifying how the current people and tools should work together. Focal Point can lead the design and implementation, coordinate specialists, and strengthen the internal operating model without forcing a wholesale platform replacement.',
  },
  {
    question: 'Do you build AI agents?',
    answer:
      'Yes, when an agent is the right component. The engagement begins with the operating problem and the required controls. Any agent is designed around authenticated tools, durable state, explicit approvals, exception handling, and verified downstream action.',
  },
  {
    question: 'What happens after the audit?',
    answer:
      'You receive a decision-ready map and prioritized plan that your team can execute. If useful, Focal Point can lead the build or remain embedded through Fractional Transformation & AI Operations.',
  },
]

export function FAQ() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">Good questions</p>
          <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight sm:text-5xl">
            Before we start.
          </h2>
        </Reveal>
        <div className="lg:col-span-8">
          {questions.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="group border-t border-border py-6 last:border-b">
                <summary className="cursor-pointer list-none font-serif text-2xl tracking-tight marker:hidden">
                  <span className="flex items-start justify-between gap-6">
                    {item.question}
                    <span aria-hidden="true" className="font-sans text-xl text-accent transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
