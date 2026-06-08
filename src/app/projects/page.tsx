import { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Projects | Ashish Singh',
  description: 'A collection of my full-stack, AI, and open-source projects.',
}

export default function ProjectsPage() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
      <ProjectsClient />
    </main>
  )
}
