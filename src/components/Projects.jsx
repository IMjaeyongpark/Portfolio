import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="section-space scroll-mt-16 bg-[#f7f8fa]">
      <div className="page-container">
        <Reveal className="mb-10 sm:mb-12">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">배포 환경과 운영 문제를 개선한 경험</h2>
          <p className="section-copy">Kubernetes 이전, 사내 테스트 VM 자동화, 개인 GitOps 구축과 실무 운영 개선 순으로 정리했습니다. 각 프로젝트에서 맡은 일과 결과·진행 상태를 확인할 수 있습니다.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => <Reveal key={`${project.title}-${index}`} delay={(index % 2) * 90} className="h-full"><ProjectCard project={project} index={index} /></Reveal>)}
        </div>
      </div>
    </section>
  )
}
