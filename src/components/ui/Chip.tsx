import { cn } from "@/lib/utils"

export function Chip({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={cn("chip", className)}>
      {children}
    </span>
  )
}
