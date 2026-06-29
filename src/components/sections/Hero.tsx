'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { personalInfo, roles } from '@/lib/data'
import { Button } from '@/components/ui/Button'
import { FadeUp } from '@/components/motion/FadeUp'
import { MagneticWrap } from '@/components/motion/MagneticWrap'
import { TextScramble } from '@/components/motion/TextScramble'
import { FloatingParticles } from '@/components/motion/FloatingParticles'
import { Mail } from 'lucide-react'
import Link from 'next/link'

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
)

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
)

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(current => (current + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center px-6 pt-20">
      {/* Floating particles background */}
      <FloatingParticles />

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[100px] opacity-30" />
      </div>

      <div className="max-w-3xl mx-auto w-full flex flex-col items-center text-center relative z-10">
        
        <FadeUp delay={0.2} animateOnMount={true}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--green-dot)] animate-pulse" />
            <span className="text-xs font-medium text-white/80">Available for opportunities</span>
          </div>
        </FadeUp>

        {/* Name with text scramble effect */}
        <div className="font-display font-bold leading-none tracking-[-0.03em] mb-6">
          <FadeUp delay={0.3} animateOnMount={true}>
            <h1 className="text-display md:text-[120px]">
              <TextScramble text="Ashish" delay={0.5} speed={25} />
            </h1>
          </FadeUp>
          <FadeUp delay={0.4} animateOnMount={true}>
            <h1 className="text-display md:text-[120px]">
              <TextScramble text="Singh" delay={0.6} speed={25} />
              <span className="text-[var(--accent)]">.</span>
            </h1>
          </FadeUp>
        </div>

        <FadeUp delay={0.5} animateOnMount={true} className="h-8 md:h-10 mb-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              initial={{ y: 24, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -24, opacity: 0, filter: 'blur(8px)' }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-h3 md:text-h2 font-display text-white/90"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </FadeUp>

        <FadeUp delay={0.6} animateOnMount={true}>
          <p className="text-lg md:text-xl text-white/60 max-w-lg mb-10 font-body">
            I build scalable web products end-to-end — from APIs to UIs.
          </p>
        </FadeUp>

        {/* Magnetic buttons */}
        <FadeUp delay={0.7} animateOnMount={true}>
          <div className="flex items-center gap-4 mb-12">
            <MagneticWrap strength={0.2}>
              <Link href="/#projects"><Button variant="primary">View Projects</Button></Link>
            </MagneticWrap>
            <MagneticWrap strength={0.2}>
              <Link href="/resume"><Button variant="ghost">Resume ↗</Button></Link>
            </MagneticWrap>
          </div>
        </FadeUp>

        {/* Magnetic social links */}
        <FadeUp delay={0.8} animateOnMount={true}>
          <div className="flex items-center gap-6">
            <MagneticWrap strength={0.4}>
              <a href={personalInfo.github} target="_blank" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <GithubIcon size={20} /> <span className="text-sm font-medium">GitHub</span>
              </a>
            </MagneticWrap>
            <MagneticWrap strength={0.4}>
              <a href={personalInfo.linkedin} target="_blank" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <LinkedinIcon size={20} /> <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </MagneticWrap>
            <MagneticWrap strength={0.4}>
              <a href={`mailto:${personalInfo.email}`} className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={20} /> <span className="text-sm font-medium">Email</span>
              </a>
            </MagneticWrap>
          </div>
        </FadeUp>

        {/* Scroll indicator */}
        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>

      </div>
    </section>
  )
}
