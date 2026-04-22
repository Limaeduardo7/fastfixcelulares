import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * React Bits – CountUp
 * Animates a number from 0 to `end` when it enters the viewport.
 */
export default function CountUp({ end, duration = 1.5, className = '', prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true
    const start = performance.now()
    const total = duration * 1000

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / total, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString('pt-BR')}{suffix}
    </span>
  )
}
