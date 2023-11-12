import Hero from '@/pages/Hero'
import Certifs from '@/pages/Certifs'
import Contact from '@/pages/Contact'
import Footer from '@/pages/Footer'
import Formation from '@/pages/Formation'
import Navbar from '@/pages/Navbar'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Formation />
      <Certifs />
      <Contact />
      <Footer />
    </main>
  )
}
