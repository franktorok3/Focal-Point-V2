'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { FocalMark } from '@/components/focal-mark'

const links = [
  { label: 'Method', href: '#method' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Engagements', href: '#engagements' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-foreground"
          aria-label="Focal Point home"
        >
          <FocalMark className="size-5 text-accent" />
          <span className="text-lg font-medium tracking-tight">
            Focal Point
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="h-9 px-4"
            nativeButton={false}
            render={<a href="#contact">Start a conversation</a>}
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-1 inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-3 h-11"
              nativeButton={false}
              render={
                <a href="#contact" onClick={() => setOpen(false)}>
                  Start a conversation
                </a>
              }
            />
          </div>
        </div>
      )}
    </header>
  )
}
