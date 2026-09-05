import Icon from './Icon'
import SkillBadge from './SkillBadge'

const visualStyles = {
  lime: 'from-blue-600 to-cyan-400',
  blue: 'from-sky-600 to-blue-400',
  violet: 'from-violet-600 to-fuchsia-400',
  orange: 'from-orange-500 to-amber-300',
  cyan: 'from-cyan-600 to-emerald-400',
}

export default function ProjectCard({ project, index, label = 'PROJECT', basePath = 'projects' }) {
  const projectLinks = project.links ?? (project.github ? [{ label: 'GitHub', url: project.github }] : [])
  const detailHref = `/${basePath}/${project.slug}`

  return (
    <article className="card group relative flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(49,130,246,0.10)]">
      <a href={detailHref} className="focus-ring absolute inset-0 z-10 rounded-2xl" aria-label={`${project.title} 상세 페이지로 이동`}><span className="sr-only">{project.title} 상세보기</span></a>
      <div className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${visualStyles[project.tone] || visualStyles.blue}`}>
        {project.architecture ? <img src={project.architecture} alt="" className="h-full w-full bg-white object-contain transition-transform duration-500 group-hover:scale-105" /> : <span className="text-7xl font-black tracking-[-0.08em] text-white/25">{String(index + 1).padStart(2, '0')}</span>}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-ink backdrop-blur">{label}</span>
        </div>
        <span className="absolute top-4 right-4 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur">{project.period}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold tracking-[-0.03em] text-ink transition-colors group-hover:text-lime">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.skills.slice(0, 4).map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}{project.skills.length > 4 && <SkillBadge tone={project.tone}>+{project.skills.length - 4}</SkillBadge>}</div>
        <ul className="mt-6 space-y-2 text-xs leading-5 text-[#4e5968]">{project.role.slice(0, 2).map((item) => <li key={item} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-lime" />{item}</li>)}</ul>
        <div className="mt-auto flex items-end justify-between gap-4 pt-7">
          <div className="relative z-20 flex min-w-0 flex-wrap gap-x-3 gap-y-2">{projectLinks.slice(0, 2).map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 text-xs font-semibold text-muted transition-colors hover:text-lime">{link.label}<Icon name="external" size={12} /></a>)}</div>
          <span aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-colors group-hover:bg-lime"><Icon name="arrow" size={15} className="transition-transform group-hover:translate-x-0.5" /></span>
        </div>
      </div>
    </article>
  )
}
