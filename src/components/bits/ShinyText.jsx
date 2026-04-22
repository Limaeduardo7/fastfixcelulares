import { cn } from '@/lib/utils'

/**
 * React Bits – ShinyText
 * Text with an animated shine sweep effect.
 */
export default function ShinyText({ text, className = '', speed = 3 }) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent select-none', className)}
      style={{
        backgroundImage:
          'linear-gradient(90deg, #FF8A3D 0%, #FFA86A 40%, #fff 50%, #FFA86A 60%, #FF8A3D 100%)',
        backgroundSize: '200% auto',
        animation: `shine ${speed}s linear infinite`,
        WebkitBackgroundClip: 'text',
      }}
    >
      {text}
    </span>
  )
}
