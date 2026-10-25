import { miniProjects } from '../data/miniProjects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function MiniProjects() {
  return (
    <section id="mini-projects" className="section-space scroll-mt-16 bg-white" aria-labelledby="mini-projects-title">
      <div className="page-container">
        <Reveal animate className="mb-8 sm:mb-10">
          <h2 id="mini-projects-title" className="section-title">Mini Projects</h2>
          <p className="section-copy">서비스 유지보수와 API 연동, 개인 프로젝트 개발 경험을 모았습니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project, index) => (
            <Reveal key={project.slug} animate delay={(index % 3) * 30} className="h-full">
              <ProjectCard
                project={project}
                label="MINI"
                basePath="mini-projects"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
