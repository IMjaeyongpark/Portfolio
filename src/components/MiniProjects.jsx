import { useState } from 'react'
import { miniProjects } from '../data/miniProjects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'

export default function MiniProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="mini-projects" className="section-space border-t border-white/6 bg-white/[0.012] scroll-mt-16">
      <div className="page-container">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">03 — Experiments</p>
            <h2 className="section-title">Mini Projects</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted">새로운 기술과 문제 해결 방법을 작은 결과물로 검증한 개인 프로젝트입니다.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
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
