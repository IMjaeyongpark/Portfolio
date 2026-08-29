import Icon from './Icon'
import SkillBadge from './SkillBadge'

export default function ProjectCard({ project, index, onOpen, label = 'PROJECT' }) {
  const projectLinks = project.links ?? (project.github ? [{ label: 'GitHub', url: project.github }] : [])

  return (
    <article className="card group flex min-h-[25rem] flex-col p-6 transition-colors hover:border-white/25 sm:p-8">
      <div className="flex items-start justify-between gap-5">
        <span className="font-mono text-xs text-white/25">{label} / {String(index + 1).padStart(2, '0')}</span>
        <span className="text-xs text-muted">{project.period}</span>
      </div>
      <div className="mt-14 sm:mt-18">
        <h3 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
      </div>
      <div className="mt-7 flex flex-wrap gap-2">{project.skills.slice(0, 5).map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}{project.skills.length > 5 && <SkillBadge tone={project.tone}>+{project.skills.length - 5}</SkillBadge>}</div>
      <div className="mt-auto flex items-end justify-between gap-5 pt-10">
        <div>
          <ul className="space-y-2 text-xs leading-5 text-[#b9bdc1]">{project.role.slice(0, 2).map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 bg-lime" />{item}</li>)}</ul>
          {projectLinks.length > 0 && <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">{projectLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 text-xs font-semibold text-white transition-colors hover:text-lime" onClick={(event) => event.stopPropagation()}>{link.label}<Icon name="external" size={13} /></a>)}</div>}
        </div>
        <button type="button" onClick={onOpen} className="focus-ring group/button flex size-11 shrink-0 cursor-pointer items-center justify-center border border-line bg-white text-ink transition-colors hover:bg-lime" aria-label={`${project.title} 상세보기`}><Icon name="arrow" className="transition-transform group-hover/button:translate-x-0.5" /></button>
      </div>
    </article>
  )
}
