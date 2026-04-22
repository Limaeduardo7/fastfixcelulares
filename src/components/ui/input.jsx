import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={cn(
      'w-full px-3.5 py-3.5 font-body text-white bg-[#1a1a1e] border border-white/[.08] rounded-xl outline-none transition-colors',
      'placeholder:text-ink-400',
      'focus:border-orange-500/60 focus:bg-[#222226]',
      className
    )}
    ref={ref}
    {...props}
  />
))
Input.displayName = 'Input'

export { Input }
