import { useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * React Bits – SpotlightCard
 * Card with a radial spotlight overlay that follows the cursor.
 * The spotlight is a separate absolute layer — it does NOT override the card background.
 */
export default function SpotlightCard({ className, children, spotlightColor = 'rgba(255,106,26,.12)' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: '50%', y: '50%' })
  const [visible, setVisible] = useState(false)

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({ x: `${e.clientX - rect.left}px`, y: `${e.clientY - rect.top}px` })
    setVisible(true)
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setVisible(false)}
      className={cn('relative overflow-hidden', className)}
    >
      {/* Spotlight overlay — purely visual, does not affect bg color */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(400px circle at ${pos.x} ${pos.y}, ${spotlightColor}, transparent 70%)`,
        }}
      />
      {/* Content sits above the overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {children}
      </div>
    </div>
  )
}
