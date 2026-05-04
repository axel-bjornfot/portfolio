import About from '@/src/components/sections/About'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Axel Björnfot',
  description: 'Software developer based in Stockholm',
}

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col">
      <About />
    </main>
  )
}
