import { useEffect } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'

function DetailSection({ number, title, children }) {
  return (
    <Reveal>
      <section className="grid gap-4 border-t border-line py-8 sm:grid-cols-[9rem_1fr]">
        <div><span className="mr-2 text-[10px] font-bold text-lime">{number}</span><h3 className="inline text-sm font-semibold text-ink">{title}</h3></div>
        <div className="text-sm leading-7 text-[#4e5968]">{children}</div>
      </section>
    </Reveal>
  )
}

export default function ProjectDetail({ project, backHref = '/#projects' }) {
  const projectLinks = project.links ?? (project.github ? [{ label: 'Repository', url: project.github }] : [])

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${project.title} | Portfolio`
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [project.title])

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-[#f7f8fa]">
      <article aria-labelledby="project-detail-title">
        <header className="border-b border-line bg-white">
          <div className="page-container py-12 sm:py-16">
            <Reveal><a href={backHref} className="focus-ring inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-lime"><Icon name="arrow" size={16} className="rotate-180" /> 프로젝트 목록</a></Reveal>
            <Reveal delay={80}>
              <p className="mt-10 text-xs font-semibold text-lime">{project.period}</p>
              <h1 id="project-detail-title" className="mt-4 max-w-4xl text-4xl font-bold tracking-[-0.05em] text-ink sm:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-lg">{project.description}</p>
            </Reveal>
            <Reveal delay={160}><div className="mt-7 flex flex-wrap gap-2">{project.skills.map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}</div></Reveal>
          </div>
        </header>

        <div className="page-container py-12 sm:py-16">
          {project.architecture && <Reveal><figure className="mb-10 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_18px_50px_rgba(15,23,42,0.04)]"><img src={project.architecture} alt={project.architectureAlt || `${project.title} Architecture`} className="h-auto w-full" /><figcaption className="border-t border-line px-4 py-3 text-[10px] font-semibold tracking-wider text-muted uppercase">System Architecture</figcaption></figure></Reveal>}

          {project.images?.length > 0 && (
            <Reveal>
              <section className="mb-10" aria-labelledby="project-images-title">
                <div className="mb-4 flex items-end justify-between gap-4"><h2 id="project-images-title" className="text-sm font-semibold text-ink">Project Images</h2><span className="text-[10px] font-semibold text-muted">{String(project.images.length).padStart(2, '0')} IMAGES</span></div>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.images.map((image, index) => <figure key={`${image.src}-${index}`} className={`${project.images.length % 2 === 1 && index === 0 ? 'md:col-span-2' : ''} overflow-hidden rounded-2xl border border-line bg-white`}><img src={image.src} alt={image.alt || `${project.title} 프로젝트 이미지 ${index + 1}`} className="h-auto w-full object-contain" loading="lazy" />{image.caption && <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">{image.caption}</figcaption>}</figure>)}
                </div>
              </section>
            </Reveal>
          )}

          <div className="rounded-2xl border border-line bg-white px-5 shadow-[0_18px_50px_rgba(15,23,42,0.04)] sm:px-8">
            <DetailSection number="01" title="프로젝트 목적"><p>{project.purpose}</p></DetailSection>
            <DetailSection number="02" title="담당 역할"><ul className="space-y-2">{project.role.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 size-1 shrink-0 rounded-full bg-lime" />{item}</li>)}</ul></DetailSection>
            <DetailSection number="03" title="주요 구현"><ul className="space-y-3">{project.details.map((item) => <li key={item} className="flex gap-3"><span className="mt-2.5 text-[10px] text-lime">—</span>{item}</li>)}</ul></DetailSection>
            {project.troubleshooting?.length > 0 && <DetailSection number="04" title="트러블슈팅"><div className="space-y-6">{project.troubleshooting.map((item, index) => <div key={`${item.problem}-${index}`} className="space-y-4 rounded-2xl border border-line bg-[#f7f8fa] p-5"><div><span className="text-[10px] font-semibold tracking-wider text-red-500 uppercase">Problem</span><p className="mt-1">{item.problem}</p></div><div><span className="text-[10px] font-semibold tracking-wider text-lime uppercase">Solution</span><p className="mt-1">{item.solution}</p></div><div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3"><span className="text-[10px] font-semibold tracking-wider text-blue-700 uppercase">Result</span><p className="mt-1 font-medium text-[#333d4b]">{item.result}</p></div></div>)}</div></DetailSection>}
          </div>

          {projectLinks.length > 0 && <Reveal><div className="mt-8 flex flex-wrap gap-3">{projectLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">{link.label} <Icon name="external" size={14} /></a>)}</div></Reveal>}

          {project.video?.youtubeId && <Reveal><section className="mt-10" aria-labelledby="project-video-title"><div className="mb-4 flex items-end justify-between gap-4"><h2 id="project-video-title" className="text-sm font-semibold text-ink">Project Video</h2><span className="text-[10px] font-semibold text-muted">YOUTUBE</span></div><div className="aspect-video overflow-hidden rounded-2xl border border-line bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`} title={project.video.title || `${project.title} 소개 영상`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></section></Reveal>}
        </div>
      </article>
    </main>
  )
}
