import { FocalMark } from '@/components/focal-mark'

const links = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <a href="/" className="flex items-center gap-2.5">
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

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Focal Point NY. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="mailto:hello@focalpointny.com" className="hover:text-foreground">hello@focalpointny.com</a>
            <a href="https://www.linkedin.com/company/focalpointny/" target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href="/privacy" className="hover:text-foreground">Privacy</a>
            <a href="/terms" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
