import { motion } from "motion/react"

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      className="text-h2 md:text-h1 font-display font-bold tracking-tight mb-12"
      initial={{ clipPath: 'inset(100% 0 0 0)', y: 20 }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)', y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h2>
  )
}
