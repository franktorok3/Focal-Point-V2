'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { FocalMark } from '@/components/focal-mark'

const inputClasses =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <FocalMark className="size-8 text-accent" />
              <h2 className="mt-7 font-serif text-4xl leading-[1.05] tracking-tight text-balance sm:text-6xl">
                Let&apos;s find the focal point.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
                Tell us where things feel tangled. We&apos;ll help you find the
                single point of clarity that brings the whole system into focus.
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer email?{' '}
                <a
                  href="mailto:hello@focalpoint.ny"
                  className="font-medium text-foreground underline-offset-4 hover:text-accent hover:underline"
                >
                  hello@focalpoint.ny
                </a>
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {submitted ? (
                <div className="flex h-full min-h-72 flex-col items-start justify-center rounded-2xl border border-border bg-card p-8 sm:p-10">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-2xl tracking-tight">
                    Thank you — we&apos;ll be in touch.
                  </h3>
                  <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
                    We read every message and typically respond within two
                    business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Jane Doe"
                        className={inputClasses}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="jane@company.com"
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-foreground"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      className={inputClasses}
                    />
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      What feels tangled?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us a little about your systems, team, and goals."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="group mt-6 h-12 w-full px-5 text-base sm:w-auto"
                  >
                    Start a conversation
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" />
                  </Button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
