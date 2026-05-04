import Contact from '@/src/components/sections/Contact'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Axel Björnfot',
  description: 'Get in touch',
}

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Contact />
    </main>
  )
}
