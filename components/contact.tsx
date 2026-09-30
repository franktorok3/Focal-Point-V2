'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Check, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { FocalMark } from '@/components/focal-mark'

const inputClasses =
  'w-full rounded-lg border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const body = (await response.json()) as { error?: string }

      if (!response.ok) throw new Error(body.error || 'The message could not be sent.')

      form.reset()
      setStatus('success')
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'The message could not be sent. Please email us directly.',
      )
      setStatus('error')
    }
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
                Tell us where the work feels tangled. We&apos;ll help identify
                the constraint and the most useful next step.
              </p>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer email?{' '}
                <a href="mailto:hello@focalpointny.com" className="font-medium text-foreground underline-offset-4 hover:text-accent hover:underline">
                  hello@focalpointny.com
                </a>
              </p>
              <p className="mt-3 text-sm text-muted-foreground">We typically respond within two business days.</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              {status === 'success' ? (
                <div role="status" className="flex min-h-96 flex-col items-start justify-center rounded-2xl border border-border bg-card p-8 sm:p-10">
                  <span className="inline-flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-6" />
                  </span>
                  <h3 className="mt-6 font-serif text-3xl tracking-tight">Your message is in the right place.</h3>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                    It has been delivered to the Focal Point inbox. We&apos;ll review the context and reply directly.
                  </p>
                  <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-medium underline underline-offset-4 hover:text-accent">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <input id="name" name="name" type="text" required autoComplete="name" placeholder="Jane Doe" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium">Work email</label>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={inputClasses} />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <input id="company" name="company" type="text" autoComplete="organization" placeholder="Company name" className={inputClasses} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="timeframe" className="text-sm font-medium">Timeframe</label>
                      <select id="timeframe" name="timeframe" defaultValue="" className={inputClasses}>
                        <option value="">Select one</option>
                        <option value="Now">Now</option>
                        <option value="Next 30–60 days">Next 30–60 days</option>
                        <option value="This quarter">This quarter</option>
                        <option value="Exploring">Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium">What needs to work better?</label>
                    <textarea id="message" name="message" required minLength={20} rows={5} placeholder="Tell us about the systems, handoffs, decisions, or goals involved." className={`${inputClasses} resize-y`} />
                  </div>

                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="mt-5 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                      {error} You can also email{' '}
                      <a className="underline" href="mailto:hello@focalpointny.com">hello@focalpointny.com</a>.
                    </p>
                  )}

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
                      By sending this form, you agree to our{' '}
                      <a href="/privacy" className="underline underline-offset-2">privacy policy</a>.
                    </p>
                    <Button type="submit" size="lg" disabled={status === 'sending'} className="group h-12 px-5 text-base">
                      {status === 'sending' ? (
                        <><LoaderCircle className="mr-2 size-4 animate-spin" />Sending securely</>
                      ) : (
                        <>Start a conversation<ArrowRight className="ml-1 size-4 transition-transform group-hover/button:translate-x-0.5" /></>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
