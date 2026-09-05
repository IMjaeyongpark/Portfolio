import Header from './components/Header'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Career from './components/Career'
import Projects from './components/Projects'
import MiniProjects from './components/MiniProjects'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import { projects } from './data/projects'
import { miniProjects } from './data/miniProjects'

export default function App() {
  const [, type, slug] = window.location.pathname.split('/')
  const isMiniProject = type === 'mini-projects'
  const project = type === 'projects'
    ? projects.find((item) => item.slug === slug)
    : isMiniProject
      ? miniProjects.find((item) => item.slug === slug)
      : null
  const isProjectRoute = type === 'projects' || isMiniProject

  return (
    <div className="min-h-screen overflow-hidden bg-white text-ink selection:bg-lime selection:text-white">
      <Header />
      <div className="h-16 bg-white" aria-hidden="true" />
      {project ? (
        <ProjectDetail project={project} backHref={isMiniProject ? '/#mini-projects' : '/#projects'} />
      ) : isProjectRoute ? (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-[#f7f8fa] px-5 text-center">
          <div>
            <p className="text-sm font-semibold text-lime">404</p>
            <h1 className="mt-3 text-3xl font-bold text-ink">프로젝트를 찾을 수 없습니다.</h1>
            <a href="/#projects" className="focus-ring mt-7 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">프로젝트 목록으로</a>
          </div>
        </main>
      ) : (
        <main><Intro /><Skills /><Projects /><MiniProjects /><Career /></main>
      )}
      <Footer />
    </div>
  )
}
