import { cn } from '@/lib/utils'

/**
 * Concentric "focal point" geometric mark — converging rings, crosshair
 * guides, and a solid center. Used as an editorial visual motif.
 */
export function FocalRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      className={cn('text-foreground', className)}
      aria-hidden="true"
    >
      {/* crosshair guides */}
      <line
        x1="200"
        y1="0"
        x2="200"
        y2="400"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />
      <line
        x1="0"
        y1="200"
        x2="400"
        y2="200"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.12"
      />

      {/* concentric rings, tightening toward center */}
      {[190, 150, 112, 76, 44].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          stroke="currentColor"
          strokeWidth="1"
          opacity={0.1 + i * 0.06}
        />
      ))}

      {/* accent ring */}
      <circle
        cx="200"
        cy="200"
        r="44"
        stroke="var(--color-accent)"
        strokeWidth="1.5"
        opacity="0.9"
      />

      {/* solid focal center */}
      <circle cx="200" cy="200" r="9" fill="var(--color-accent)" />

      {/* tick marks on the outer ring */}
      {[0, 90, 180, 270].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 200 + Math.cos(rad) * 190
        const y1 = 200 + Math.sin(rad) * 190
        const x2 = 200 + Math.cos(rad) * 174
        const y2 = 200 + Math.sin(rad) * 174
        return (
          <line
            key={deg}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            opacity="0.35"
          />
        )
      })}
    </svg>
  )
}
