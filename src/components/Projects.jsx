import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="section-space scroll-mt-16 bg-[#f7f8fa]">
      <div className="page-container">
        <div className="mb-10 sm:mb-12">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">문제를 해결하고, 운영으로 이어진 프로젝트</h2>
          <p className="section-copy">기술 선택의 이유와 문제 해결 과정을 중심으로 정리한 프로젝트입니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index} onOpen={() => setSelectedProject(project)} />)}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
