import { useState } from 'react'
import { miniProjects } from '../data/miniProjects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function MiniProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="mini-projects" className="section-space scroll-mt-16 bg-white">
      <div className="page-container">
        <div className="mb-10 sm:mb-12">
          <p className="eyebrow">Experiments</p>
          <h2 className="section-title">Mini Projects</h2>
          <p className="section-copy">새로운 기술과 문제 해결 방법을 작은 결과물로 검증한 개인 프로젝트입니다.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              label="MINI"
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
