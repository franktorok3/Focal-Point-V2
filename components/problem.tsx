import { Reveal } from '@/components/reveal'

const frictions = [
  'Disconnected tools',
  'Unclear ownership',
  'Scattered data',
  'Slow execution',
  'No single system of record',
]

export function Problem() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
              The real problem
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Growth rarely stalls for the reasons leaders expect. The
              bottleneck is almost never the market — it&apos;s the way work is
              organized.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={100}>
            <h2 className="font-serif text-3xl leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Most organizations don&apos;t have a marketing problem. They have a{' '}
              <span className="text-accent">clarity problem.</span>
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
              The symptoms show up everywhere — but they trace back to the same
              root cause.
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
