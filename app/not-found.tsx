import { ArrowLeft } from 'lucide-react'
import { FocalMark } from '@/components/focal-mark'

export default function NotFound() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-5">
      <div className="max-w-xl text-center">
        <FocalMark className="mx-auto size-10 text-accent" />
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">404 · Outside the frame</p>
        <h1 className="mt-5 font-serif text-5xl tracking-tight sm:text-7xl">This is not the focal point.</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">The page may have moved, or the link may be incomplete.</p>
        <a href="/" className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 hover:text-accent"><ArrowLeft className="size-4" />Return home</a>
      </div>
    </main>
  )
}
