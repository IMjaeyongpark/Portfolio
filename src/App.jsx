import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Career from './components/Career'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink selection:bg-lime selection:text-white">
      <Header />
      <main>
        <Intro />
        <Skills />
        <Projects />
        <MiniProjects />
        <Career />
      </main>
      <Footer />
    </div>
  )
}
