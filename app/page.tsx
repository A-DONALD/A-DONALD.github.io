import Aboutme from '@/components/Aboutme'
import Certifs from '@/components/Certifs'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Formation from '@/components/Formation'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Aboutme />
      <Skills />
      <Projects />
      <Formation />
      <Certifs />
      <Contact />
      <Footer />
    </main>
  )
}
