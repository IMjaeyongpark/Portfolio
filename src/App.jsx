import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-ink text-white selection:bg-lime selection:text-ink">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(188,255,84,0.09),transparent_28%)]" />
      <Header />
      <main className="relative z-10">
        <Intro />
        <Skills />
        <Projects />
        <MiniProjects />
      </main>
      <Footer />
    </div>
  )
}
