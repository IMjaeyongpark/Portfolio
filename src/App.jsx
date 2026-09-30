import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import AIEnvironment from './components/AIEnvironment'
import Career from './components/Career'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './data/projects'
import { miniProjects } from './data/miniProjects'

export default function App() {
  useEffect(() => {
    const root = document.documentElement
    const navigationKeys = new Set(['Tab', 'Enter', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'])
    const keyboard = (event) => { if (navigationKeys.has(event.key)) root.dataset.input = 'keyboard' }
    const pointer = () => { root.dataset.input = 'pointer' }
    document.addEventListener('keydown', keyboard, true)
    document.addEventListener('pointerdown', pointer, true)
    return () => {
      document.removeEventListener('keydown', keyboard, true)
      document.removeEventListener('pointerdown', pointer, true)
      delete root.dataset.input
    }
  }, [])

  const [, type, slug] = window.location.pathname.split('/')
  const isMiniProject = type === 'mini-projects'
  const project = type === 'projects'
    ? projects.find((item) => item.slug === slug)
    : isMiniProject
      ? miniProjects.find((item) => item.slug === slug)
      : null
  const isProjectRoute = type === 'projects' || isMiniProject

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-ink">
      <a href="#main-content" className="skip-link focus-ring">본문으로 바로가기</a>
      <Header />
      <div className="h-16 bg-white" aria-hidden="true" />
      {project ? (
        <ProjectDetail project={project} backHref={isMiniProject ? '/#mini-projects' : '/#projects'} />
      ) : isProjectRoute ? (
        <main id="main-content" tabIndex={-1} className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-surface px-5 text-center">
          <div>
            <p className="text-sm font-semibold text-lime">404</p>
            <h1 className="mt-3 text-3xl font-bold text-ink">프로젝트를 찾을 수 없습니다.</h1>
            <a href="/#projects" className="focus-ring mt-7 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">프로젝트 목록으로</a>
          </div>
        </main>
      ) : (
        <main id="main-content" tabIndex={-1}><Intro /><Skills /><Projects /><MiniProjects /><Career /><AIEnvironment /></main>
      )}
      <Footer />
    </div>
  )
}
import { useEffect } from 'react'
