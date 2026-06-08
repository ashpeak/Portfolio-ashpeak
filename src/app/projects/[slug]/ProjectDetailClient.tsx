'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { ProjectData } from '@/lib/data/projects'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
)

interface Props {
  project: ProjectData
  prevProject: ProjectData | null
  nextProject: ProjectData | null
}

export default function ProjectDetailClient({ project, prevProject, nextProject }: Props) {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'key-features', title: 'Key Features' },
    ...(project.architecture ? [{ id: 'architecture', title: 'Architecture' }] : []),
    ...(project.techDecisions ? [{ id: 'tech-decisions', title: 'Tech Decisions' }] : []),
    { id: 'role', title: 'Role' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -60% 0px' }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sections])

  return (
    <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
      <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 font-mono text-sm">
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="flex flex-col lg:flex-row gap-16 relative">
        {/* Main Content (65%) */}
        <div className="w-full lg:w-[65%]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">{project.name}</h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm font-mono text-white/60">
              <span>{project.date}</span>
              <span className="text-[var(--border-strong)]">|</span>
              <span className="text-white/80">{project.role.split('—')[0].trim()}</span>
              <span className="text-[var(--border-strong)]">|</span>
              <span className={project.status === 'Completed' ? 'text-[var(--green-dot)]' : 'text-yellow-500'}>{project.status}</span>
              <span className="text-[var(--border-strong)]">|</span>
              <span className="bg-white/5 px-2 py-1 rounded">{project.category}</span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <GithubIcon size={16} /> GitHub ↗
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank">
                  <Button variant="primary" className="flex items-center gap-2">
                    <ExternalLink size={16} /> Live ↗
                  </Button>
                </a>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-12">
              {project.stack.map(tech => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-[var(--border)] mb-12 aspect-video bg-[var(--bg-surface)] relative group"
          >
            {/* If actual images exist in public/projects/ directory, uncomment this: */}
            {/* <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-700" /> */}
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-sm">
              [ {project.name} Screenshot ]
            </div>
          </motion.div>

          {/* Mobile TOC */}
          <div className="lg:hidden flex overflow-x-auto gap-6 py-4 mb-12 border-y border-[var(--border)] no-scrollbar font-mono text-sm whitespace-nowrap">
            {sections.map(s => (
              <button 
                key={s.id}
                onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                className={`transition-colors ${activeSection === s.id ? 'text-[var(--accent)]' : 'text-white/50'}`}
              >
                {activeSection === s.id ? '> ' : ''}{s.title}
              </button>
            ))}
          </div>

          <div className="space-y-20">
            <section id="overview" className="scroll-mt-32">
              <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">// overview</p>
              <div className="text-white/70 leading-relaxed text-lg space-y-4">
                <p>{project.overview}</p>
              </div>
            </section>

            <section id="key-features" className="scroll-mt-32">
              <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">// key features</p>
              <ul className="space-y-6">
                {project.keyFeatures.map((f, i) => (
                  <li key={i} className="text-white/70 leading-relaxed flex items-start gap-3">
                    <span className="text-[var(--accent)] mt-1 opacity-50">—</span>
                    <div>
                      <strong className="text-white font-medium block mb-1 text-lg">{f.title}</strong> 
                      <span className="text-base">{f.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {project.architecture && (
              <section id="architecture" className="scroll-mt-32">
                <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">// architecture</p>
                <div className="text-white/70 leading-relaxed text-lg space-y-4">
                  <p>{project.architecture}</p>
                </div>
              </section>
            )}

            {project.techDecisions && (
              <section id="tech-decisions" className="scroll-mt-32">
                <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">// tech decisions</p>
                <div className="text-white/70 leading-relaxed text-lg space-y-4">
                  <p>{project.techDecisions}</p>
                </div>
              </section>
            )}

            <section id="role" className="scroll-mt-32">
              <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">// role</p>
              <div className="text-white/70 leading-relaxed text-lg space-y-4">
                <p>{project.role}</p>
              </div>
            </section>
          </div>

          <div className="mt-32 pt-8 border-t border-[var(--border)] flex justify-between items-center">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="group flex flex-col gap-2">
                <span className="text-white/40 text-xs font-mono uppercase tracking-wider flex items-center gap-1 group-hover:text-[var(--accent)] transition-colors"><ArrowLeft size={14} /> Previous</span>
                <span className="font-display font-bold text-xl group-hover:text-white transition-colors text-white/80">{prevProject.name}</span>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="group flex flex-col gap-2 text-right">
                <span className="text-white/40 text-xs font-mono uppercase tracking-wider flex items-center justify-end gap-1 group-hover:text-[var(--accent)] transition-colors">Next <ArrowRight size={14} /></span>
                <span className="font-display font-bold text-xl group-hover:text-white transition-colors text-white/80">{nextProject.name}</span>
              </Link>
            ) : <div />}
          </div>
        </div>

        {/* Sticky TOC (35%) */}
        <div className="hidden lg:block w-[35%] relative">
          <div className="sticky top-32 p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]">
            <h4 className="font-display font-bold text-lg mb-6">Contents</h4>
            <ul className="space-y-4 font-mono text-sm">
              {sections.map(s => (
                <li key={s.id}>
                  <button 
                    onClick={() => document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className={`block w-full text-left transition-colors ${activeSection === s.id ? 'text-[var(--accent)]' : 'text-white/50 hover:text-white'}`}
                  >
                    {activeSection === s.id ? '> ' : ''}{s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
