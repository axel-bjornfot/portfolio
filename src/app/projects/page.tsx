import Projects from '@/src/components/sections/Projects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Axel Björnfot',
  description: 'Selected work — design systems, dashboards, and developer tools.',
}

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Projects />
    </main>
  )
}
