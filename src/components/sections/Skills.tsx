'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { SectionLabel } from '../ui/SectionLabel'
import { SectionTitle } from '../ui/SectionTitle'
import { skills } from '@/lib/data'
import { FadeUp } from '../motion/FadeUp'
import { cn } from '@/lib/utils'

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools']

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills = skills.filter(skill => 
    activeCategory === 'All' ? true : skill.category === activeCategory
  )

  return (
    <section className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionLabel>skills</SectionLabel>
      <SectionTitle>What I Work With.</SectionTitle>

      <FadeUp>
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "filter-tab",
                activeCategory === cat && "active"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </FadeUp>

      <motion.div layout className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredSkills.map(skill => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] hover:border-[var(--border-accent)] transition-colors aspect-square"
            >
              <div className="w-8 h-8 bg-white/10 rounded-md" /> {/* Placeholder for SVG */}
              <span className="text-xs font-medium text-center text-white/80">{skill.name}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
