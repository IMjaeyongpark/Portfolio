import { useState } from 'react'
import { miniProjects } from '../data/miniProjects'
import ProjectCard from './ProjectCard'
import ProjectDetail from './ProjectDetail'
import Reveal from './Reveal'

export default function MiniProjects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="mini-projects" className="section-space scroll-mt-16 bg-white">
      <div className="page-container">
        <Reveal className="mb-10 sm:mb-12">
          <p className="eyebrow">Experiments</p>
          <h2 className="section-title">Mini Projects</h2>
          <p className="section-copy">새로운 기술과 문제 해결 방법을 작은 결과물로 검증한 개인 프로젝트입니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {miniProjects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 3) * 80} className="h-full">
              <ProjectCard
                project={project}
                index={index}
                label="MINI"
                onOpen={() => setSelectedProject(project)}
              />
            </Reveal>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
