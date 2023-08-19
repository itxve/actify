import React from 'react'
import { tv } from 'tailwind-variants'
import { useTabs } from './TabsContext'

const variants = tv({
  base: 'flex items-center justify-center gap-2 py-1 px-2 text-base font-normal leading-relaxed select-none cursor-pointer',
  variants: {
    active: {
      true: 'bg-primary rounded-lg'
    }
  }
})

const Tab = React.forwardRef((props, ref) => {
  const { active, setActive } = useTabs()
  const { className, value, children, ...rest } = props

  return (
    <li
      role="tab"
      {...rest}
      ref={ref}
      data-value={value}
      onClick={() => setActive(value)}
      className={variants({ active: active == value, className })}
    >
      {children}
    </li>
  )
})

export default Tab
