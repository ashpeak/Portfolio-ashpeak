'use client'

import { motion } from 'motion/react'

interface StaggerTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
}

export function StaggerText({ text, className = '', delay = 0, stagger = 0.03 }: StaggerTextProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  const child = {
    hidden: { y: 40, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', perspective: '500px', gap: '0 0.3em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={child}
          style={{ display: 'inline-block', transformOrigin: 'bottom' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
