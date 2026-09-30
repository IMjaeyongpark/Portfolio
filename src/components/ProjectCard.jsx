import Icon from './Icon'
import SkillBadge from './SkillBadge'
import ProjectImage from './ProjectImage'
import ProjectCover from './ProjectCover'
import ProjectOutcome from './ProjectOutcome'

export default function ProjectCard({ project, label = 'PROJECT', basePath = 'projects' }) {
  const projectLinks = project.links ?? (project.github ? [{ label: 'GitHub', url: project.github }] : [])
  const detailHref = `/${basePath}/${project.slug}`

  return (
    <article className="card project-card relative flex h-full flex-col overflow-hidden">
      <a href={detailHref} className="focus-ring absolute inset-0 z-10 rounded-2xl" aria-label={`${project.title} 상세 페이지로 이동`}><span className="sr-only">{project.title} 상세보기</span></a>
      <div className={`project-visual flex h-48 shrink-0 items-center justify-center border-b border-line ${project.architecture ? 'bg-white p-4' : 'bg-surface'}`}>
        {project.architecture ? <ProjectImage src={project.architecture} optimizedSrc={project.architectureThumbnail || project.architectureOptimized} alt="" width={project.architectureWidth} height={project.architectureHeight} pictureClassName="block h-full w-full" className="h-full w-full object-contain" /> : <ProjectCover project={project} />}
      </div>
      <div className="flex flex-1 flex-col break-keep p-6 [overflow-wrap:anywhere]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[13px] leading-5"><span className="experience-badge">{project.experience || label}</span><span className="tabular-nums text-muted">{project.period}</span></div>
        <h3 className="text-xl leading-snug font-bold tracking-[-0.02em] text-ink">{project.title}</h3>
        {project.status && project.status !== project.experience && <p className="mt-2 text-sm leading-6 text-muted">{project.status}</p>}
        <p className="mt-3 text-[15px] leading-7 text-muted">{project.description}</p>
        <ProjectOutcome outcome={project.outcome} className="mt-5" />
        <div className="mt-5 flex flex-wrap gap-2">{project.skills.slice(0, 4).map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}{project.skills.length > 4 && <SkillBadge tone={project.tone}>+{project.skills.length - 4}</SkillBadge>}</div>
        <ul className="mt-5 space-y-2 text-sm leading-6 text-muted">{project.role.slice(0, 2).map((item) => <li key={item} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-muted" />{item}</li>)}</ul>
        <div className="mt-auto pt-6"><div className="flex items-center justify-between gap-4 border-t border-line/70 pt-4">
          <div className="pointer-events-none relative z-20 flex min-w-0 flex-wrap gap-x-4">{projectLinks.slice(0, 2).map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring text-link pointer-events-auto">{link.label}<Icon name="external" size={14} /><span className="sr-only"> (새 탭에서 열기)</span></a>)}</div>
          <span aria-hidden="true" className="project-open-icon flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-surface text-ink"><Icon name="arrow" size={20} /></span>
        </div>
        </div>
      </div>
    </article>
  )
}
