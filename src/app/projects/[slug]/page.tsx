import { Metadata } from 'next'
import { projectsData } from '@/lib/data/projects'
import ProjectDetailClient from './ProjectDetailClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: `${project.name} | Projects | Ashish Singh`,
    description: project.tagline,
    openGraph: {
      images: project.images
    }
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projectIndex = projectsData.findIndex((p) => p.slug === slug)
  if (projectIndex === -1) notFound()

  const project = projectsData[projectIndex]
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : null

  return <ProjectDetailClient project={project} prevProject={prevProject} nextProject={nextProject} />
}
