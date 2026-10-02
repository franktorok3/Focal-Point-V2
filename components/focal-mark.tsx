import { cn } from '@/lib/utils'

export function FocalMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <path
        className="fill-foreground"
        d="M3 5h8.5c6.8 0 11.2 3.8 17.2 11.2l-5.4 4.2C18.4 14.4 15.6 12 11 12H3V5Zm0 15h9.5c4.8 0 8.1 1.1 12.2 3.8L22.4 27c-3.5-2-6.2-2.5-10.2-2.5H3V20Zm0 16h8c4.6 0 7.4-2.4 12.3-8.4l5.4 4.2C22.7 39.2 18.3 43 11.5 43H3v-7Z"
      />
      <path className="fill-accent" d="m22.5 16.5 11 7.5-11 7.5 3.3-7.5-3.3-7.5Z" />
      <path className="fill-foreground" d="M33 20.5h12V27.5H33z" />
    </svg>
  )
}
