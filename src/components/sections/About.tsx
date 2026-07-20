'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { SectionLabel } from '../ui/SectionLabel'
import { SectionTitle } from '../ui/SectionTitle'
import { BentoCard } from '../ui/BentoCard'
import { personalInfo } from '@/lib/data'
import { CountUp } from '../motion/CountUp'
import { MapPin, ArrowRight, Code2, Coffee, GitBranch } from 'lucide-react'
import dynamic from 'next/dynamic'
const GitHubCalendar = dynamic(() => import('react-github-calendar').then(mod => mod.GitHubCalendar), { ssr: false })

interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const selectLastHalfYear = (contributions: Activity[]) => {
  if (contributions.length === 0) return contributions;

  const lastEntry = contributions[contributions.length - 1];
  const lastDate = new Date(lastEntry.date);

  const startDate = new Date(lastDate);
  startDate.setMonth(startDate.getMonth() - 6);

  // Align start date to the Sunday of that week
  const startDayOfWeek = startDate.getUTCDay();
  startDate.setUTCDate(startDate.getUTCDate() - startDayOfWeek);

  // Filter contributions
  const filtered = contributions.filter((day) => {
    const d = new Date(day.date);
    return d >= startDate;
  });

  // Pad the end to the Saturday of the last week
  const endDayOfWeek = lastDate.getUTCDay();
  const daysToSaturday = 6 - endDayOfWeek;

  if (daysToSaturday > 0) {
    const padStart = new Date(lastDate);
    for (let i = 1; i <= daysToSaturday; i++) {
      const nextDate = new Date(padStart);
      nextDate.setUTCDate(nextDate.getUTCDate() + i);
      const yyyy = nextDate.getUTCFullYear();
      const mm = String(nextDate.getUTCMonth() + 1).padStart(2, '0');
      const dd = String(nextDate.getUTCDate()).padStart(2, '0');
      const dateStr = `${yyyy}-${mm}-${dd}`;
      filtered.push({
        date: dateStr,
        count: 0,
        level: 0,
      });
    }
  }

  return filtered;
};

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
    <section id="about" className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
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
            <div className="w-24 h-24 rounded-full border-2 border-[var(--accent)] shrink-0 overflow-hidden bg-white/5 relative">
              <Image
                src="/ashish.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
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
            <h4 className="font-display font-bold text-lg">Greater Noida, UP</h4>
            <p className="text-white/50">India</p>
          </BentoCard>
        </motion.div>

        {/* Card: Stats with animated counters */}
        <motion.div variants={bentoItem} className="lg:col-span-3">
          <BentoCard className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code2 size={18} className="text-[var(--accent)]" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  <CountUp end={4} suffix="+" />
                </div>
                <p className="text-white/40 text-sm font-mono mt-1">Years Coding</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GitBranch size={18} className="text-[var(--accent)]" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  <CountUp end={30} suffix="+" />
                </div>
                <p className="text-white/40 text-sm font-mono mt-1">Projects Built</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Coffee size={18} className="text-[var(--accent)]" />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  <CountUp end={1000} suffix="+" />
                </div>
                <p className="text-white/40 text-sm font-mono mt-1">Coffees Consumed</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-[var(--accent)] text-lg">⚡</span>
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white">
                  <CountUp end={1500} suffix="+" />
                </div>
                <p className="text-white/40 text-sm font-mono mt-1">Commits</p>
              </div>
            </div>
          </BentoCard>
        </motion.div>

        {/* Card E: GitHub */}
        <motion.div variants={bentoItem} className="md:col-span-2">
          <BentoCard className="h-full p-8 flex flex-col justify-center overflow-hidden">
            <h4 className="font-display font-bold text-lg mb-4">GitHub Activity</h4>
            <div className="w-full flex justify-center text-sm">
              <GitHubCalendar
                username="ashpeak"
                colorScheme="dark"
                theme={{
                  dark: ['#161b22', '#324005', '#5a7309', '#8aa815', '#c8ff00']
                }}
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                transformData={selectLastHalfYear}
                labels={{
                  totalCount: '{{count}} contributions in the last 6 months',
                }}
              />
            </div>
          </BentoCard>
        </motion.div>

        {/* Card D: Building */}
        <motion.div variants={bentoItem}>
          <BentoCard className="h-full flex flex-col justify-between p-8">
            <div>
              <h4 className="font-display font-bold text-lg mb-1">Currently Building</h4>
              <a
                href="https://shattermoon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] text-sm mb-4 font-mono hover:underline inline-block"
              >
                shattermoon.com
              </a>
              <p className="text-white/60 text-sm">App & Game Studio.</p>
            </div>
            <a href="https://shattermoon.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium text-white hover:text-[var(--accent)] transition-colors mt-4">
              Visit <ArrowRight size={14} />
            </a>
          </BentoCard>
        </motion.div>

      </motion.div>
    </section>
  )
}
