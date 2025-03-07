'use client'
import { tv } from 'tailwind-variants'
import { createPortal } from 'react-dom'
import React, { forwardRef } from 'react'
import { useBottomSheets } from './BottomSheetsContext'
import themes from '../../themes'
const { scrim } = themes()

const rootVariants = tv({
  base: scrim({
    className:
      'fixed overflow-hidden inset-0 transform ease-in-out transition-opacity opacity-0 duration-500 pointer-events-none'
  }),
  variants: {
    open: {
      true: 'opacity-100 pointer-events-auto'
    }
  }
})

const innerVariants = tv({
  base: 'absolute flex flex-col bg-transparent left-10 right-10 bottom-0 translate-y-full transition-transform ease-in-out',
  variants: {
    open: {
      true: 'translate-y-0'
    }
  }
})

const Content: React.FC<React.HTMLAttributes<HTMLDivElement>> = forwardRef(
  ({ style, className, children, ...rest }, ref: React.Ref<HTMLDivElement>) => {
    const open = useBottomSheets((s) => s.open)
    const setOpen = useBottomSheets((s) => s.setOpen)

    return (
      <>
        {createPortal(
          <div
            ref={ref}
            {...rest}
            style={style}
            onClick={() => setOpen(false)}
            className={rootVariants({ className, open })}
          >
            <div
              className={innerVariants({ open })}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="inline-flex h-9 w-full cursor-grab flex-col items-center justify-start gap-3 p-4 bg-surface rounded-t-[100px]">
                <div className="h-1 w-8 bg-outline/40 rounded-[100px]"></div>
              </div>
              <div className="flex-1 max-h-[calc(100vh-72px)] overflow-y-auto">
                <p className="bg-surface p-2">{children}</p>
              </div>
            </div>
          </div>,
          document.body
        )}
      </>
    )
  }
)

export { Content }
