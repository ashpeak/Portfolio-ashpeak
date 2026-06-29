'use client'

import { motion } from 'motion/react'

const items = [
  'Next.js', '•', 'React', '•', 'TypeScript', '•', 'Node.js', '•',
  'PostgreSQL', '•', 'Tailwind', '•', 'Hono', '•', 'Docker', '•',
  'Socket.io', '•', 'Redis', '•', 'Prisma', '•', 'Drizzle', '•',
  'MongoDB', '•', 'Vite', '•', 'Git', '•', 'React Native', '•', 'VS Code', '•', 'Codex', '•', 'AWS', '•',
]

export function Marquee() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="relative w-full overflow-hidden py-6 select-none" style={{ background: '#080808' }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to right, #080808, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10" style={{ background: 'linear-gradient(to left, #080808, transparent)' }} />

      <motion.div
        className="flex items-center gap-6 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          },
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={
              item === '•'
                ? 'text-[var(--accent)] text-lg opacity-40'
                : 'text-sm font-mono text-white/25 tracking-widest uppercase hover:text-[var(--accent)] transition-colors duration-300 cursor-default'
            }
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
