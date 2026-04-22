import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        whatsapp:
          'bg-gradient-to-b from-[#2DDD6C] to-[#19B356] text-white rounded-full shadow-[0_14px_40px_-12px_rgba(37,211,102,.65),inset_0_1px_0_rgba(255,255,255,.25)] hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-12px_rgba(37,211,102,.8),inset_0_1px_0_rgba(255,255,255,.25)]',
        ghost:
          'text-white rounded-full border border-white/14 bg-white/[.03] hover:bg-white/[.07] hover:border-white/25',
        topbar:
          'bg-whatsapp text-white rounded-full shadow-[0_6px_20px_-6px_rgba(37,211,102,.6)] hover:-translate-y-px hover:shadow-[0_10px_26px_-6px_rgba(37,211,102,.75)]',
        service:
          'w-full bg-gradient-to-b from-[#2DDD6C] to-[#19B356] text-white rounded-[14px] shadow-[0_10px_28px_-10px_rgba(37,211,102,.6),inset_0_1px_0_rgba(255,255,255,.25)] hover:-translate-y-px',
      },
      size: {
        sm:  'px-4 py-2.5 text-sm',
        md:  'px-5 py-4 text-[15.5px]',
        lg:  'px-[26px] py-[18px] text-base',
        xl:  'px-9 py-[22px] text-lg',
        icon:'w-10 h-10',
      },
    },
    defaultVariants: { variant: 'whatsapp', size: 'lg' },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

export { Button, buttonVariants }
