import * as React from 'react'
import { cn } from '@/lib/utils'

function Badge({ className, variant = 'orange', ...props }) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[.04em] border',
        variant === 'orange' && 'bg-orange-500/[.14] text-orange-300 border-orange-500/30',
        variant === 'green'  && 'bg-whatsapp/[.14] text-green-300 border-whatsapp/30',
        className
      )}
      {...props}
    />
  )
}

export { Badge }
