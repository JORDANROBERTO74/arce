import React from "react"

interface BadgeProps extends React.ComponentPropsWithoutRef<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ children, className, ...props }: BadgeProps, forwardedRef) => {
    return (
      <span
        ref={forwardedRef}
        className="z-10 block w-fit rounded-lg border border-emerald-200/20 bg-emerald-50/50 px-3 py-1.5 font-semibold uppercase leading-4 tracking-tighter sm:text-sm dark:border-emerald-800/30 dark:bg-emerald-900/20"
        {...props}
      >
        <span className="bg-gradient-to-b from-emerald-500 to-emerald-600 bg-clip-text text-transparent dark:from-emerald-200 dark:to-emerald-400">
          {children}
        </span>
      </span>
    )
  },
)

Badge.displayName = "Badge"

export { Badge, type BadgeProps }
