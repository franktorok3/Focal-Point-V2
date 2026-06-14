import { Reveal } from '@/components/reveal'

const sectors = [
  'Enterprise brands',
  'Startups',
  'Nonprofits',
  'SaaS',
  'Spirits',
  'Publishing',
  'Consumer brands',
]

export function Experience() {
  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
              Experience
            </p>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-balance sm:text-5xl">
              Trusted across categories and stages.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
              The same clarity problem shows up everywhere — from venture-backed
              startups to century-old institutions. We&apos;ve solved it across
              a wide range of industries.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-border bg-card px-5 py-2.5 text-base font-medium text-foreground transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {sector}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
              {[
                { k: '7+', v: 'Industries served' },
                { k: '1', v: 'System of record' },
                { k: '\u221e', v: 'Less complexity' },
              ].map((stat) => (
                <div key={stat.v} className="bg-card px-6 py-8">
                  <dt className="font-serif text-4xl tracking-tight text-accent">
                    {stat.k}
                  </dt>
                  <dd className="mt-2 text-sm text-muted-foreground">
                    {stat.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
