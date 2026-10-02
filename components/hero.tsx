import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { FocalMark } from '@/components/focal-mark'

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

      {/* oversized brand mark, bleeding off the right edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-20 hidden w-[34rem] lg:block xl:-right-10"
      >
        <Reveal>
          <FocalMark className="w-full opacity-[0.12]" />
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-8 sm:pt-40 sm:pb-20">
        <Reveal>
          <div className="flex items-center gap-4 text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
            <span className="text-accent">Focal Point</span>
            <span className="h-px w-8 bg-border" />
            <span>AI transformation, built to operate</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl font-serif text-[2.75rem] leading-[0.98] tracking-tight text-balance sm:text-7xl lg:text-[5.75rem]">
            Turn AI ambition into
            <br className="hidden sm:block" /> measurable{' '}
            <span className="text-accent">growth.</span>
          </h1>
        </Reveal>

        <div className="mt-10 grid gap-8 border-t border-border pt-8 sm:grid-cols-12 sm:gap-6">
          <Reveal delay={160} className="sm:col-span-7">
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
              Focal Point connects websites, campaigns, data, dashboards, and
              governed AI agents into one growth system—so the work gets
              smarter without the business getting messier.
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
                    Find the AI leverage
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" />
                  </a>
                }
              />
              <Button
                size="lg"
                variant="ghost"
                className="h-12 w-full px-5 text-base text-muted-foreground hover:text-foreground sm:w-auto"
                nativeButton={false}
                render={<a href="/work">See what operational AI looks like</a>}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={280}>
          <p className="mt-8 text-sm text-muted-foreground">
            Strategy, experience, intelligence, and hands-on implementation—led
            by Frank Torok in New York.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <figure className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src="/images/hero-systems-to-focal-point.png"
              alt="Editorial systems map showing disconnected workflows converging into one clear focal point."
              width={1920}
              height={819}
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="h-auto w-full"
            />
            <figcaption className="flex flex-col gap-2 border-t border-border px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <span>AI creates leverage only when the system beneath it can carry the weight.</span>
              <span className="font-mono uppercase tracking-[0.14em]">The Focal Point thesis</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
