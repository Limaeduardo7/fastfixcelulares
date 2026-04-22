import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'bg-[#18181b] border border-white/[.07] rounded-2xl overflow-hidden transition-colors data-[state=open]:border-orange-500/40',
      className
    )}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between gap-5 px-6 py-[22px] text-[16.5px] font-medium text-white text-left cursor-pointer',
        '[&[data-state=open]>span]:bg-orange-500/16 [&[data-state=open]>span]:border-orange-500/50 [&[data-state=open]>span]:rotate-45',
        className
      )}
      {...props}
    >
      {children}
      <span className="w-8 h-8 rounded-full grid place-items-center flex-shrink-0 bg-white/[.04] border border-white/[.08] transition-all duration-200">
        <Plus className="w-3.5 h-3.5 text-white" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('px-6 pb-6 text-ink-200 text-[15px] leading-relaxed', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
