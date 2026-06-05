import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(variant === 'primary' ? 'btn-primary' : 'btn-ghost', className)}
      {...props}
    >
      {children}
    </button>
  )
}
