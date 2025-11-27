import * as React from 'react'
import { cn } from '@/lib/utils'

const RadioGroup = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div className={cn('grid gap-2', className)} ref={ref} {...props}>
      {children}
    </div>
  )
})
RadioGroup.displayName = 'RadioGroup'

const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      type="radio"
      className={cn(
        'h-4 w-4 rounded-full border-slate-300 text-slate-900 focus:ring-2 focus:ring-slate-950 focus:ring-offset-2',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
