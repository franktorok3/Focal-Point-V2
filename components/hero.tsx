import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { FocalRings } from '@/components/focal-rings'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.9 0.005 85 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.9 0.005 85 / 0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(ellipse 90% 70% at 65% 10%, black, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 70% at 65% 10%, black, transparent 80%)',
        }}
      />

      {/* geometric focal point, bleeding off the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-10 hidden w-[34rem] lg:block xl:-right-12"
      >
        <Reveal>
          <FocalRings className="w-full" />
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20">
        <Reveal>
          <div className="flex items-center gap-4 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <span className="text-accent">Focal Point</span>
            <span className="h-px w-8 bg-border" />
            <span>Strategy &amp; Systems — New York</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl font-serif text-[2.75rem] leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-[5.75rem]">
            Simplify the systems
            <br className="hidden sm:block" /> behind{' '}
            <span className="text-accent">growth.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-12 sm:gap-6">
          <Reveal delay={160} className="sm:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
              Focal Point helps organizations connect marketing, operations,
              data, and AI into clearer, faster, more scalable workflows.
            </p>
          </Reveal>

          <Reveal delay={240} className="sm:col-span-5">
            <div className="flex flex-col gap-3 sm:items-end">
              <Button
                size="lg"
                className="group h-12 w-full px-5 text-base sm:w-auto"
                nativeButton={false}
                render={
                  <a href="#contact">
                    Start a conversation
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="ghost"
                className="h-12 w-full px-5 text-base text-muted-foreground hover:text-foreground sm:w-auto"
                nativeButton={false}
                render={<a href="#services">Explore our work</a>}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
