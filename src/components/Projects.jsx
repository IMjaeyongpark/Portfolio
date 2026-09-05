import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-16 bg-[#f7f8fa]">
      <div className="page-container">
        <Reveal className="mb-10 sm:mb-12">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">문제를 해결하고, 운영으로 이어진 프로젝트</h2>
          <p className="section-copy">기술 선택의 이유와 문제 해결 과정을 중심으로 정리한 프로젝트입니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <Reveal key={`${project.title}-${index}`} delay={(index % 2) * 90} className="h-full"><ProjectCard project={project} index={index} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
