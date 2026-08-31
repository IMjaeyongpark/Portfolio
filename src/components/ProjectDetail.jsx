import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon'
import SkillBadge from './SkillBadge'

function DetailSection({ number, title, children }) {
  return <section className="grid gap-4 border-t border-line py-8 sm:grid-cols-[8rem_1fr]"><div><span className="mr-2 font-mono text-[10px] text-lime">{number}</span><h3 className="inline text-sm font-semibold text-white">{title}</h3></div><div className="text-sm leading-7 text-[#b7bbbf]">{children}</div></section>
}

export default function ProjectDetail({ project, onClose }) {
  const closeButtonRef = useRef(null)
  const projectLinks = project.links ?? (project.github ? [{ label: 'Repository', url: project.github }] : [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const handleKey = (event) => { if (event.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', handleKey) }
  }, [onClose])

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <article role="dialog" aria-modal="true" aria-labelledby="project-detail-title" className="modal-enter max-h-[94dvh] w-full max-w-6xl overflow-y-auto border border-line bg-[#22262a] shadow-2xl sm:max-h-[92vh]">
        <header className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-[#22262a]/95 px-5 py-4 backdrop-blur sm:px-8">
          <span className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">Project detail</span>
          <button ref={closeButtonRef} onClick={onClose} type="button" className="focus-ring flex size-9 cursor-pointer items-center justify-center border border-line text-muted transition-colors hover:border-white/30 hover:text-white" aria-label="상세보기 닫기"><Icon name="close" /></button>
        </header>
        <div className="px-5 py-10 sm:px-10 sm:py-14">
          <div className="mb-12">
            <p className="mb-4 font-mono text-xs text-lime">{project.period}</p>
            <h2 id="project-detail-title" className="text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">{project.title}</h2>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">{project.skills.map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}</div>
          </div>
          {project.architecture && <figure className="mb-10 overflow-hidden border border-line bg-[#090a0b]"><img src={project.architecture} alt={project.architectureAlt || `${project.title} Architecture`} className="h-auto w-full" /><figcaption className="border-t border-line px-4 py-3 font-mono text-[10px] tracking-wider text-muted uppercase">System Architecture</figcaption></figure>}
          {project.images?.length > 0 && (
            <section className="mb-10" aria-labelledby="project-images-title">
              <div className="mb-4 flex items-end justify-between gap-4">
                <h3 id="project-images-title" className="text-sm font-semibold text-white">Project Images</h3>
                <span className="font-mono text-[10px] text-muted">{String(project.images.length).padStart(2, '0')} IMAGES</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {project.images.map((image, index) => (
                  <figure key={`${image.src}-${index}`} className={`${project.images.length % 2 === 1 && index === 0 ? 'md:col-span-2' : ''} overflow-hidden border border-line bg-[#090a0b]`}>
                    <img src={image.src} alt={image.alt || `${project.title} 프로젝트 이미지 ${index + 1}`} className="h-auto w-full object-contain" loading="lazy" />
                    {image.caption && <figcaption className="border-t border-line px-4 py-3 text-xs text-muted">{image.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </section>
          )}
          <DetailSection number="01" title="프로젝트 목적"><p>{project.purpose}</p></DetailSection>
          <DetailSection number="02" title="담당 역할"><ul className="space-y-2">{project.role.map((item) => <li key={item} className="flex gap-3"><span className="mt-3 size-1 shrink-0 bg-lime" />{item}</li>)}</ul></DetailSection>
          <DetailSection number="03" title="주요 구현"><ul className="space-y-3">{project.details.map((item) => <li key={item} className="flex gap-3"><span className="mt-2.5 font-mono text-[10px] text-white/35">—</span>{item}</li>)}</ul></DetailSection>
          {project.troubleshooting?.length > 0 && <DetailSection number="04" title="트러블슈팅"><div className="space-y-8">{project.troubleshooting.map((item, index) => <div key={`${item.problem}-${index}`} className="space-y-4"><div><span className="text-[10px] font-semibold tracking-wider text-white/35 uppercase">Problem</span><p className="mt-1">{item.problem}</p></div><div><span className="text-[10px] font-semibold tracking-wider text-white/35 uppercase">Solution</span><p className="mt-1">{item.solution}</p></div><div className="border-l-2 border-lime bg-lime/[0.04] px-4 py-3"><span className="text-[10px] font-semibold tracking-wider text-lime uppercase">Result</span><p className="mt-1 text-[#d6d9db]">{item.result}</p></div></div>)}</div></DetailSection>}
          {projectLinks.length > 0 && <div className="mt-8 flex flex-wrap gap-3">{projectLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 border border-white bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-lime hover:bg-lime"><Icon name="github" size={17} /> {link.label} <Icon name="external" size={14} /></a>)}</div>}
          {project.video?.youtubeId && (
            <section className="mt-10" aria-labelledby="project-video-title">
              <div className="mb-4 flex items-end justify-between gap-4">
                <h3 id="project-video-title" className="text-sm font-semibold text-white">Project Video</h3>
                <span className="font-mono text-[10px] text-muted">YOUTUBE</span>
              </div>
              <div className="aspect-video overflow-hidden border border-line bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`}
                  title={project.video.title || `${project.title} 소개 영상`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </section>
          )}
        </div>
      </article>
    </div>,
    document.body,
  )
}
