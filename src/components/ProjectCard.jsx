import Icon from './Icon'
import SkillBadge from './SkillBadge'

const visualStyles = {
  lime: 'from-blue-100 via-slate-50 to-cyan-100',
  blue: 'from-sky-100 via-slate-50 to-blue-100',
  violet: 'from-violet-100 via-slate-50 to-fuchsia-100',
  orange: 'from-orange-100 via-amber-50 to-rose-100',
  cyan: 'from-cyan-100 via-slate-50 to-emerald-100',
}

export default function ProjectCard({ project, index, label = 'PROJECT', basePath = 'projects' }) {
  const projectLinks = project.links ?? (project.github ? [{ label: 'GitHub', url: project.github }] : [])
  const detailHref = `/${basePath}/${project.slug}`

  return (
    <article className="card project-card group relative flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
      <a href={detailHref} className="focus-ring absolute inset-0 z-10 rounded-2xl" aria-label={`${project.title} 상세 페이지로 이동`}><span className="sr-only">{project.title} 상세보기</span></a>
      <div className={`project-visual relative flex h-48 items-center justify-center overflow-hidden border-b border-line bg-gradient-to-br ${visualStyles[project.tone] || visualStyles.blue}`}>
        {project.architecture ? <img src={project.architecture} alt="" loading="lazy" decoding="async" className="h-full w-full bg-white object-contain p-3 pt-12 transition-transform duration-500 group-hover:scale-[1.025]" /> : <><span aria-hidden="true" className="absolute -right-8 -bottom-24 size-64 rounded-full border border-white/90 bg-white/20" /><span aria-hidden="true" className="absolute -right-2 -bottom-16 size-48 rounded-full border border-white/90" /><span className="relative text-7xl font-light tracking-[-0.08em] text-slate-500/35">{String(index + 1).padStart(2, '0')}</span></>}
        <div className="absolute top-4 left-4 z-[1] flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-ink backdrop-blur">{label}</span>
        </div>
        <span className="absolute top-4 right-4 z-[1] rounded-full border border-white/70 bg-white/90 px-2.5 py-1 text-[10px] font-medium text-muted backdrop-blur">{project.period}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-[-0.03em] text-ink transition-colors group-hover:text-lime">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.skills.slice(0, 4).map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}{project.skills.length > 4 && <SkillBadge tone={project.tone}>+{project.skills.length - 4}</SkillBadge>}</div>
        <ul className="mt-6 space-y-2 text-xs leading-5 text-[#4e5968]">{project.role.slice(0, 2).map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-lime" />{item}</li>)}</ul>
        <div className="mt-auto pt-6"><div className="flex items-center justify-between gap-4 border-t border-line/70 pt-4">
          <div className="pointer-events-none relative z-20 flex min-w-0 flex-wrap gap-x-3 gap-y-2">{projectLinks.slice(0, 2).map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring pointer-events-auto inline-flex min-h-9 items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-lime">{link.label}<Icon name="external" size={12} /></a>)}</div>
          <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line bg-white text-muted transition-colors group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-lime"><Icon name="arrow" size={15} className="transition-transform group-hover:translate-x-0.5" /></span>
        </div>
        </div>
      </div>
    </article>
  )
}
