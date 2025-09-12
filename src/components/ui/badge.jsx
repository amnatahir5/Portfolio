import { cn } from "../../lib/utils"

const badgeVariants = {
  variant: {
    default: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    destructive: "border-transparent bg-destructive text-white",
    outline: "text-foreground",
  },
}

function Badge({ className, variant = "default", children, ...props }) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-colors"
  const variantClasses = badgeVariants.variant[variant] || badgeVariants.variant.default

  return (
    <span className={cn(baseClasses, variantClasses, className)} {...props}>
      {children}
    </span>
  )
}

export { Badge }
