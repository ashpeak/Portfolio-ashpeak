import { Metadata } from 'next'
import Link from 'next/link'
import { personalInfo, experience, projects } from '@/lib/data'
import { ArrowLeft, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: `Resume | ${personalInfo.name}`,
  description: `Resume of ${personalInfo.name} - ${personalInfo.title}`,
}

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6 bg-[var(--bg-base)]">
      <div className="max-w-3xl mx-auto">

        {/* Top Navigation */}
        <div className="flex items-center justify-between mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors font-mono text-sm">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <a href={personalInfo.resume} download="Ashish_Singh_Resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="flex items-center gap-2 py-2 px-4 rounded-md text-sm">
              <Download size={16} /> Download PDF
            </Button>
          </a>
        </div>

        {/* Resume Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold">{personalInfo.name}</h1>
          <p className="text-lg text-white/80">{personalInfo.title}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-mono text-[var(--accent)] mt-4">
            <span className="text-white/60">{personalInfo.location}</span>
            <span className="text-white/20">|</span>
            <a href={`mailto:${personalInfo.email}`} className="hover:underline hover:text-white transition-colors">{personalInfo.email}</a>
            <span className="text-white/20">|</span>
            <a href={personalInfo.github} target="_blank" className="hover:underline hover:text-white transition-colors">GitHub</a>
            <span className="text-white/20">|</span>
            <a href={personalInfo.linkedin} target="_blank" className="hover:underline hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="space-y-14">

          {/* Summary */}
          <section>
            <h2 className="text-xl font-display font-bold mb-4 text-white border-b border-white/10 pb-2">Summary</h2>
            <p className="text-white/70 leading-relaxed text-sm">
              {personalInfo.bio}
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-display font-bold mb-4 text-white border-b border-white/10 pb-2">Skills</h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4">
                <span className="text-white/90 font-medium">Languages</span>
                <span className="text-white/60">TypeScript, JavaScript, SQL, HTML, CSS</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4">
                <span className="text-white/90 font-medium">Frontend</span>
                <span className="text-white/60">React, Next.js, Tailwind CSS, Framer Motion, Redux</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4">
                <span className="text-white/90 font-medium">Backend</span>
                <span className="text-white/60">Node.js, Express, Hono, REST APIs, Socket.io</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4">
                <span className="text-white/90 font-medium">Databases</span>
                <span className="text-white/60">PostgreSQL, MongoDB, Redis, Prisma</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] gap-4">
                <span className="text-white/90 font-medium">Tools & Cloud</span>
                <span className="text-white/60">Git, Docker, Vercel, Firebase, GCP, AWS</span>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-display font-bold mb-6 text-white border-b border-white/10 pb-2">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1 gap-1">
                    <h3 className="font-bold text-white text-base">{exp.company}</h3>
                    <span className="text-white/50 font-mono text-xs">{exp.period}</span>
                  </div>
                  <div className="text-sm text-[var(--accent)] font-medium mb-3">{exp.role}</div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-white/70 mb-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="pl-1 leading-relaxed">{bullet}</li>
                    ))}
                  </ul>
                  <div className="text-xs font-mono text-white/50 mt-4">
                    <span className="text-white/80 font-sans font-medium">Tech:</span> {exp.stack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-xl font-display font-bold mb-6 text-white border-b border-white/10 pb-2">Personal Projects</h2>
            <div className="space-y-8">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <div className="mb-2">
                    <h3 className="font-bold text-white text-base inline-block">{proj.name}</h3>
                    <span className="text-white/50 mx-2">—</span>
                    <span className="text-sm text-[var(--accent)]">{proj.desc}</span>
                  </div>
                  <div className="text-xs font-mono text-white/50">
                    <span className="text-white/80 font-sans font-medium">Tech:</span> {proj.stack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
