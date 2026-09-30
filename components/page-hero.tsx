import { FocalMark } from '@/components/focal-mark'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border pt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <FocalMark className="size-7 text-accent" />
        <p className="mt-7 text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] tracking-tight text-balance sm:text-7xl">
          {title}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty sm:text-xl">
          {description}
        </p>
      </div>
    </section>
  )
}
