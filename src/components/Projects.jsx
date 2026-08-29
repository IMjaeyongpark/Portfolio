import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-space scroll-mt-16">
      <div className="page-container">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
          <div><p className="eyebrow">02 — Selected work</p><h2 className="section-title">Projects</h2></div>
          <p className="max-w-md text-sm leading-7 text-muted">기술 선택의 이유와 문제 해결 과정을 중심으로 정리한 프로젝트입니다.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index} onOpen={() => setSelectedProject(project)} />)}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
