import { Reveal } from '@/components/reveal'

const frictions = [
  'Journeys that break at the handoff',
  'Campaigns that forget what they learned',
  'Dashboards that cannot explain the number',
  'Automation with no accountable owner',
  'AI experiments with no path to production',
]

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
              The AI gap
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Most organizations do not lack AI ideas. They lack the operating
              conditions that make those ideas useful, measurable, and safe.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              AI doesn&apos;t fix a fragmented business. It makes the{' '}
              <span className="text-accent">fragmentation move faster.</span>
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              When customer journeys, data, ownership, and decisions live in
              separate places, adding a model creates speed without direction.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
            {frictions.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 60}>
                <div className="flex h-full items-center gap-3 bg-card px-5 py-5">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
