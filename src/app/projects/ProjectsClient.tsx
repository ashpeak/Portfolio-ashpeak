'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { projectsData } from '@/lib/data/projects'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { BentoCard } from '@/components/ui/BentoCard'
import { Chip } from '@/components/ui/Chip'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

export default function ProjectsClient() {
  const router = useRouter()
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'Full-Stack', 'AI/ML', 'Open Source']

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter)

  return (
    <>
      <SectionLabel>projects</SectionLabel>
      <SectionTitle>All Projects.</SectionTitle>

      {/* Filter Row */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`filter-tab ${filter === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              layout
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <BentoCard 
                className="h-full flex flex-col p-6 md:p-8 hover:border-[var(--accent)] transition-colors cursor-pointer group"
                onClick={() => router.push(`/projects/${project.slug}`)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl mb-2 group-hover:text-[var(--accent)] transition-colors">{project.name}</h3>
                    <div className="flex items-center gap-3 text-sm font-mono mb-4">
                      <span className="text-white/60">{project.date}</span>
                      <span className="text-[var(--border-strong)]">|</span>
                      <span className={project.status === 'Completed' ? 'text-[var(--green-dot)]' : 'text-yellow-500'}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300 group-hover:rotate-45 shrink-0 ml-4">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                
                <p className="text-white/70 leading-relaxed mb-8 flex-1">{project.tagline}</p>
                
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-6 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map(tech => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                    {project.stack.length > 3 && (
                      <Chip>+{project.stack.length - 3}</Chip>
                    )}
                  </div>
                  
                  <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className="p-2 -m-2 text-white/40 hover:text-white transition-colors">
                        <GithubIcon size={20} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" className="p-2 -m-2 text-white/40 hover:text-[var(--accent)] transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </BentoCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
