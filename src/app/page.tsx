import Hero from '@/src/components/sections/Hero'
import About from '@/src/components/sections/About'
import Contact from '@/src/components/sections/Contact'

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
    </main>
  )
}
