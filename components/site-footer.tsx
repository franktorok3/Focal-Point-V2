import { FocalMark } from '@/components/focal-mark'

const links = [
  { label: 'Method', href: '#method' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Engagements', href: '#engagements' },
  { label: 'Contact', href: '#contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <FocalMark className="size-5 text-accent" />
            <span className="text-lg font-medium tracking-tight">
              Focal Point
            </span>
          </a>

          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Focal Point NY. All rights reserved.</p>
          <p>Simplify. Focus. Expand.</p>
        </div>
      </div>
    </footer>
  )
}
