import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-16 bg-surface" aria-labelledby="projects-title">
      <div className="page-container">
        <Reveal animate className="mb-8 sm:mb-10">
          <h2 id="projects-title" className="section-title">배포 환경과 운영 문제를 개선한 경험</h2>
          <p className="section-copy">최근 프로젝트부터 시간순으로 정리했습니다. 각 프로젝트에서 맡은 일과 결과·진행 상태를 확인할 수 있습니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <Reveal key={project.slug} animate delay={(index % 2) * 40} className="h-full"><ProjectCard project={project} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
