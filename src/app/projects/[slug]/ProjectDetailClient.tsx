'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ProjectData } from '@/lib/data/projects'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'
import { ArrowLeft, ArrowRight, ExternalLink, X, ZoomIn } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

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
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isLightboxOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false)
      } else if (e.key === 'ArrowRight' && isLightboxOpen) {
        setActiveImageIndex(prev => (prev + 1) % project.images.length)
      } else if (e.key === 'ArrowLeft' && isLightboxOpen) {
        setActiveImageIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen, project.images.length])

  const sections = useMemo(() => [
    { id: 'overview', title: 'Overview' },
    { id: 'key-features', title: 'Key Features' },
    ...(project.architecture ? [{ id: 'architecture', title: 'Architecture' }] : []),
    ...(project.techDecisions ? [{ id: 'tech-decisions', title: 'Tech Decisions' }] : []),
    { id: 'role', title: 'Role' }
  ], [project.architecture, project.techDecisions])

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
              {project.category.split(',').map((cat) => (
                <span key={cat} className="bg-white/5 px-2 py-1 rounded">{cat.trim()}</span>
              ))}
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

          {/* Interactive Image Carousel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-12 rounded-2xl overflow-hidden border border-[var(--border)] aspect-video bg-[var(--bg-surface)] group"
          >
            {project.images.map((img, index) => (
              <div 
                key={index}
                className={`absolute inset-0 w-full h-full cursor-zoom-in transition-opacity duration-700 ${index === activeImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                onClick={() => setIsLightboxOpen(true)}
              >
                <Image
                  src={img} 
                  alt={`${project.name} screenshot ${index + 1}`} 
                  fill
                  className="object-contain" 
                  unoptimized
                />
                <div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md border border-white/10 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <ZoomIn size={16} />
                </div>
              </div>
            ))}
            
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={() => setActiveImageIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  onClick={() => setActiveImageIndex(prev => (prev + 1) % project.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                  aria-label="Next image"
                >
                  <ArrowRight size={16} />
                </button>
                <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
                  {project.images.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setActiveImageIndex(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`w-2 h-2 rounded-full transition-all ${i === activeImageIndex ? 'bg-[var(--accent)] w-6' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </>
            )}
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
              <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">{"// overview"}</p>
              <div className="text-white/70 leading-relaxed text-lg space-y-4">
                <p>{project.overview}</p>
              </div>
            </section>

            <section id="key-features" className="scroll-mt-32">
              <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">{"// key features"}</p>
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
                <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">{"// architecture"}</p>
                <div className="text-white/70 leading-relaxed text-lg space-y-4">
                  <p>{project.architecture}</p>
                </div>
              </section>
            )}

            {project.techDecisions && (
              <section id="tech-decisions" className="scroll-mt-32">
                <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">{"// tech decisions"}</p>
                <div className="text-white/70 leading-relaxed text-lg space-y-4">
                  <p>{project.techDecisions}</p>
                </div>
              </section>
            )}

            <section id="role" className="scroll-mt-32">
              <p className="text-[var(--accent)] text-xs font-mono tracking-widest mb-6">{"// role"}</p>
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

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveImageIndex(prev => prev === 0 ? project.images.length - 1 : prev - 1)
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft size={20} />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveImageIndex(prev => (prev + 1) % project.images.length)
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Next image"
                >
                  <ArrowRight size={20} />
                </button>
              </>
            )}

            {/* Zoomed Image Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[80vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={project.images[activeImageIndex]} 
                alt={`${project.name} screenshot detail ${activeImageIndex + 1}`}
                fill
                className="object-contain rounded-lg shadow-2xl"
                unoptimized
              />
            </motion.div>
            
            {/* Image counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/50 border border-white/10 px-4 py-2 rounded-full text-sm font-mono text-white/80">
              {activeImageIndex + 1} / {project.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
