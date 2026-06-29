'use client'

import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "motion/react"

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'ghost'
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={cn(variant === 'primary' ? 'btn-primary' : 'btn-ghost', className)}
      {...props}
    >
      {children}
    </motion.button>
  )
}
