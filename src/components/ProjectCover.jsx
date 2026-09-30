import Icon from './Icon'

export default function ProjectCover({ project }) {
  const { icon = 'backend', title = project.title, subtitle = project.skills.slice(0, 3).join(' · ') } = project.cover ?? {}

  return (
    <div className="project-cover flex h-full w-full flex-col items-center justify-center gap-3 px-5 text-center">
      <Icon name={icon} size={36} className="shrink-0 text-accent" />
      <div>
        <p className="text-base leading-6 font-semibold text-ink">{title}</p>
        <p className="mt-1.5 text-sm leading-6 text-muted">{subtitle}</p>
      </div>
    </div>
  )
}
