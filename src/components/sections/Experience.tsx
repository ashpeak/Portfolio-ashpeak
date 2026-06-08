'use client'

import { motion } from 'motion/react'
import { SectionLabel } from '../ui/SectionLabel'
import { SectionTitle } from '../ui/SectionTitle'
import { experience } from '@/lib/data'
import { Chip } from '../ui/Chip'

export default function Experience() {
  return (
    <section className="py-24 md:py-32 px-6 max-w-4xl mx-auto">
      <SectionLabel>experience</SectionLabel>
      <SectionTitle>Where I&apos;ve Worked.</SectionTitle>

      <div className="relative border-l border-[var(--border)] ml-4 md:ml-0">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative pl-8 md:pl-12 pb-16 last:pb-0"
          >
            {/* Timeline Dot — pulses on hover */}
            <motion.div
              className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-[var(--border)] group-hover:bg-[var(--accent)] transition-colors duration-300"
              whileHover={{ scale: 2 }}
            />
            
            {/* Hover border effect layer */}
            <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-[var(--accent)] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500 ease-out" />

            {/* Background Number */}
            <motion.div
              className="absolute -left-4 md:-left-12 -top-6 text-[80px] font-display font-bold text-white/[0.03] group-hover:text-white/[0.08] transition-colors duration-500 pointer-events-none select-none z-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
            >
              {exp.id}
            </motion.div>

            <motion.div
              className="relative z-10 p-6 rounded-2xl bg-transparent group-hover:bg-[var(--bg-elevated)] transition-colors duration-300 border border-transparent group-hover:border-[var(--border)]"
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">{exp.role}</h3>
                  <p className="text-white/60 font-medium">
                    {exp.company} · {exp.type}
                  </p>
                </div>
                <motion.div
                  className="text-[var(--accent)] font-mono text-sm px-3 py-1 rounded-full border border-[var(--accent)]/20 bg-[var(--accent)]/5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  {exp.period}
                </motion.div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    className="text-white/70 text-sm md:text-base flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.06 + 0.3 }}
                  >
                    <span className="text-[var(--accent)] mt-1 opacity-50">—</span> {bullet}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech, j) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + j * 0.04 + 0.5 }}
                  >
                    <Chip>{tech}</Chip>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
