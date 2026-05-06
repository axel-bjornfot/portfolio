import Hero from '@/src/components/sections/Hero'
import Projects from '@/src/components/sections/Projects'
import About from '@/src/components/sections/About'
import Contact from '@/src/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}
