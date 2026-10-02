import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { FocalMark } from '@/components/focal-mark'

const principles = [
  'Start with the decision, not the demo.',
  'Make the data earn the dashboard.',
  'Give every agent a boundary, an owner, and a way back.',
]

export function Founder() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <FocalMark className="size-9 text-accent" />
          <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/60">
            Founder-led by design
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-[1.04] tracking-tight text-balance sm:text-6xl">
            AI strategy that survives contact with reality.
          </h2>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={100}>
            <p className="text-xl leading-relaxed text-primary-foreground/80 text-pretty sm:text-2xl">
              Focal Point is led by Frank Torok, a systems and transformation
              leader working where customer experience, growth, finance, data,
              operations, and AI collide.
            </p>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/65">
              The work begins where the pitch deck ends: with the actual data,
              handoffs, incentives, and systems that determine whether an idea
              can operate. When specialist support is needed, Focal Point brings
              the right collaborators around one accountable growth system.
            </p>
          </Reveal>

          <div className="mt-10 border-t border-primary-foreground/15">
            {principles.map((principle, index) => (
              <Reveal key={principle} delay={140 + index * 60}>
                <div className="flex gap-5 border-b border-primary-foreground/15 py-5">
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                  <p className="text-base text-primary-foreground/80">{principle}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <a
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary-foreground transition-colors hover:text-accent"
            >
              Meet Frank and read the operating principles
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
