import { miniProjects } from '../data/miniProjects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function MiniProjects() {
  return (
    <section id="mini-projects" className="section-space scroll-mt-16 bg-white">
      <div className="page-container">
        <Reveal className="mb-10 sm:mb-12">
          <p className="eyebrow">Experiments</p>
          <h2 className="section-title">Mini Projects</h2>
          <p className="section-copy">API 연동과 서비스 개발, 알고리즘 구현 경험을 담은 개인·연구·대학 프로젝트입니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 80} className="h-full">
              <ProjectCard
                project={project}
                index={index}
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
