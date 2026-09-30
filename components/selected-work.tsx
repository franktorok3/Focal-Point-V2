import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { caseStudies } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <div className="grid gap-6 border-b border-border pb-10 sm:grid-cols-12 sm:items-end">
            <div className="sm:col-span-8">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Selected work
              </p>
              <h2 className="mt-5 max-w-3xl font-serif text-3xl leading-[1.05] tracking-tight text-balance sm:text-5xl">
                Systems work, shown at the level where it becomes real.
              </h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-4">
              Client identifiers are withheld where required. The operating
              problem, design choices, and evidence boundaries remain intact.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1">
                <a href={`/work/${study.slug}`} className="block overflow-hidden border-b border-border">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    width={1792}
                    height={896}
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </a>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {study.client}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight">
                    <a href={`/work/${study.slug}`} className="hover:text-accent">
                      {study.title}
                    </a>
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.summary}
                  </p>
                  <a
                    href={`/work/${study.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
                  >
                    Read the case study <ArrowUpRight className="size-4 text-accent" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
