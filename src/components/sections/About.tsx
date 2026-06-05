'use client'

import { motion } from 'motion/react'
import { SectionLabel } from '../ui/SectionLabel'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { personalInfo } from '@/lib/data'
import { FadeUp } from '../motion/FadeUp'
import { MapPin, ArrowRight } from 'lucide-react'

export default function About() {
  const bentoContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
  }

  const bentoItem = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } }
  }

  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      <SectionLabel>about</SectionLabel>
      <SectionTitle>Who I Am.</SectionTitle>

      <motion.div 
        variants={bentoContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
      >
        {/* Card A: Bio */}
        <motion.div variants={bentoItem} className="md:col-span-2">
          <BentoCard className="h-full flex flex-col md:flex-row items-center md:items-start gap-6 relative p-8">
            <div className="w-24 h-24 rounded-full border-2 border-[var(--accent)] shrink-0 overflow-hidden bg-white/5">
              {/* Add avatar img here */}
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-display font-bold mb-1">Ashish Singh</h3>
              <p className="text-[var(--accent)] font-mono text-sm mb-4">Full-stack dev</p>
              <p className="text-white/70 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">#builder</span>
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">#fullstack</span>
                <span className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded">#oss</span>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Card B: Location */}
        <motion.div variants={bentoItem}>
          <BentoCard className="h-full flex flex-col justify-center items-center text-center p-8 relative">
            <MapPin size={32} className="text-[var(--accent)] mb-4" />
            <h4 className="font-display font-bold text-lg">Dadri, UP</h4>
            <p className="text-white/50">India</p>
          </BentoCard>
        </motion.div>

        {/* Card F: Vibe / Music */}
        <motion.div variants={bentoItem}>
          <BentoCard className="h-full flex flex-col justify-center p-8">
            <h4 className="font-display font-bold text-lg mb-2">Vibe Check</h4>
            <p className="text-white/60 text-sm">Codes best with music playing 🎵</p>
          </BentoCard>
        </motion.div>

        {/* Card E: GitHub */}
        <motion.div variants={bentoItem} className="md:col-span-2">
          <BentoCard className="h-full p-8 flex flex-col justify-center">
            <h4 className="font-display font-bold text-lg mb-4">GitHub Activity</h4>
            <img src={`https://ghchart.rshah.org/C8FF00/${personalInfo.handle}`} alt="GitHub Heatmap" className="w-full opacity-80 mix-blend-screen invert" style={{ filter: 'hue-rotate(180deg) brightness(1.5)' }} />
          </BentoCard>
        </motion.div>

        {/* Card D: Building */}
        <motion.div variants={bentoItem}>
          <BentoCard className="h-full flex flex-col justify-between p-8">
            <div>
              <h4 className="font-display font-bold text-lg mb-1">Currently Building</h4>
              <p className="text-[var(--accent)] text-sm mb-4 font-mono">startupideadb.com</p>
              <p className="text-white/60 text-sm">Startup ideas aggregation platform.</p>
            </div>
            <a href="#" className="flex items-center gap-1 text-sm font-medium text-white hover:text-[var(--accent)] transition-colors mt-4">
              Visit <ArrowRight size={14} />
            </a>
          </BentoCard>
        </motion.div>

      </motion.div>
    </section>
  )
}
