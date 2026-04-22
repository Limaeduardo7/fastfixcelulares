import { cn } from '@/lib/utils'

/**
 * React Bits - Marquee
 * Infinite horizontal scrolling strip.
 */
export default function Marquee({ items, className = '', itemClassName = '', speed = 28 }) {
  return (
    <div className={cn('overflow-hidden select-none', className)}>
      <div
        className="marquee-track flex w-max items-center"
        style={{ ['--marquee-duration']: `${speed}s` }}
      >
        {[0, 1].map(group => (
          <div
            key={group}
            aria-hidden={group === 1}
            className="flex min-w-max shrink-0 items-center gap-14 pr-14"
          >
            {items.map((item, i) => (
              <div key={`${group}-${i}`} className={cn('flex-shrink-0', itemClassName)}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
