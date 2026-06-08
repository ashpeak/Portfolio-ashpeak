'use client'

import { motion } from 'motion/react'
import { SectionLabel } from '../ui/SectionLabel'
import { SectionTitle } from '../ui/SectionTitle'
import { projects } from '@/lib/data'
import { BentoCard } from '../ui/BentoCard'
import { ArrowUpRight } from 'lucide-react'
import { FadeUp } from '../motion/FadeUp'
import { cn } from '@/lib/utils'

export default function Projects() {
  const bentoContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const bentoItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="projects" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionLabel>projects</SectionLabel>
      <SectionTitle>Things I&apos;ve Built.</SectionTitle>

      <motion.div
        variants={bentoContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {projects.slice(0, 5).map((project, i) => (
          <motion.div 
            key={project.id} 
            variants={bentoItem}
            className={cn(project.featured && "lg:col-span-2")}
          >
            <BentoCard className="h-full group flex flex-col cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-display font-bold text-xl">{project.name}</h3>
                <motion.div
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-black transition-colors"
                  whileHover={{ rotate: 45 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ArrowUpRight size={16} />
                </motion.div>
              </div>
              <p className="text-white/60 mb-6 flex-1">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, j) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + j * 0.05 }}
                    className="text-xs font-mono text-white/40 hover:text-[var(--accent)] transition-colors cursor-default"
                  >
                    [{tech}]
                  </motion.span>
                ))}
              </div>
            </BentoCard>
          </motion.div>
        ))}
        
        {/* View All Card */}
        <motion.div variants={bentoItem}>
          <a href={projects[0].github} className="block h-full">
            <BentoCard className="h-full flex items-center justify-center group hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors duration-300">
              <div className="flex items-center gap-2 group-hover:text-black transition-colors font-display font-bold text-lg">
                View All Projects <motion.span className="group-hover:translate-x-1 transition-transform">→</motion.span>
              </div>
            </BentoCard>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
