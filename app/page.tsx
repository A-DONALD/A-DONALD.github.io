import Hero from '@/pages/Hero'
import Certifications from '@/pages/Certifications'
import Contact from '@/pages/Contact'
import Footer from '@/pages/Footer'
import Formation from '@/pages/Formation'
import Projects from '@/pages/Projects'
import Skills from '@/pages/Skills'
import DownloadButton from '@/components/DownloadBtn'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <div className='container mx-auto py-16 text-center'>
        <div className='flex flex-wrap justify-center items-center'>
          <div className="w-full md:w-1/2">
            <Formation />
          </div>
          <div className="w-full md:w-1/2">
            <Certifications />
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
      <DownloadButton btnName='Télécharger' fileURL="/docs/CV.pdf" dwnldName="CV-Donald-Youngoua.pdf" />
    </main >
  )
}
