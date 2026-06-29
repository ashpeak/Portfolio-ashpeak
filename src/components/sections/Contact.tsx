'use client'

import { SectionLabel } from '../ui/SectionLabel'
import { SectionTitle } from '../ui/SectionTitle'
import { personalInfo } from '@/lib/data'
import { Mail } from 'lucide-react'
import { MagneticWrap } from '../motion/MagneticWrap'
import { motion } from 'motion/react'

const LinkedinIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
)

const XIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
)
import { FadeUp } from '../motion/FadeUp'

export default function Contact() {
  return (
    <section id="contact" className="pt-12 pb-4 md:pt-20 md:pb-8 px-6 max-w-6xl mx-auto">
      <SectionLabel>contact</SectionLabel>
      <SectionTitle>Let&apos;s Work Together.</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <FadeUp>
          <div>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Let&apos;s build<br />something great.
            </h3>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--green-dot)] animate-pulse" />
              <span className="text-sm font-medium text-white/80">Available · Remote / India</span>
            </div>
            <p className="text-white/50 text-sm">Reply within 24 hours</p>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-4">

          <FadeUp delay={0.2}>
            <MagneticWrap strength={0.12}>
              <a href={personalInfo.linkedin} target="_blank" className="block group">
                <motion.div
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] group-hover:border-[#0A66C2] group-hover:bg-[var(--bg-elevated)] transition-all duration-300 flex items-center gap-6"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0A66C2] transition-colors">
                    <LinkedinIcon size={24} className="group-hover:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-lg">LinkedIn</h4>
                    <p className="text-white/60 font-mono text-sm">/ashpeak</p>
                  </div>
                  <motion.span
                    className="text-white/20 group-hover:text-[#0A66C2] transition-colors text-xl"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </a>
            </MagneticWrap>
          </FadeUp>

          <FadeUp delay={0.1}>
            <MagneticWrap strength={0.12}>
              <a href={`mailto:${personalInfo.email}`} className="block group">
                <motion.div
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] group-hover:border-[var(--accent)] group-hover:bg-[var(--bg-elevated)] transition-all duration-300 flex items-center gap-6"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:text-black transition-colors">
                    <Mail size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-lg">Email</h4>
                    <p className="text-white/60 font-mono text-sm">{personalInfo.email}</p>
                  </div>
                  <motion.span
                    className="text-white/20 group-hover:text-[var(--accent)] transition-colors text-xl"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </a>
            </MagneticWrap>
          </FadeUp>

          <FadeUp delay={0.3}>
            <MagneticWrap strength={0.12}>
              <a href={personalInfo.x} target="_blank" className="block group">
                <motion.div
                  className="p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg-surface)] group-hover:border-[#ffffff] group-hover:bg-[var(--bg-elevated)] transition-all duration-300 flex items-center gap-6"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ffffff] transition-colors">
                    <XIcon size={20} className="group-hover:text-black" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-display font-bold text-lg">X (Twitter)</h4>
                    <p className="text-white/60 font-mono text-sm">@ashishs61</p>
                  </div>
                  <motion.span
                    className="text-white/20 group-hover:text-[#ffffff] transition-colors text-xl"
                    whileHover={{ x: 4 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </a>
            </MagneticWrap>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
