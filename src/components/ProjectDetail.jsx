import { useEffect } from 'react'
import Icon from './Icon'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'
import ProjectImage from './ProjectImage'
import ProjectOutcome from './ProjectOutcome'

function DetailSection({ id, title, children }) {
  return (
    <Reveal animate>
      <section id={id} className="grid scroll-mt-20 gap-4 border-t border-line py-8 sm:grid-cols-[9rem_1fr] sm:gap-8 md:scroll-mt-48 lg:scroll-mt-36">
        <h2 className="text-lg font-semibold text-ink">{title}</h2>
        <div className="min-w-0 max-w-[70ch] break-keep text-base leading-8 text-muted [overflow-wrap:anywhere]">{children}</div>
      </section>
    </Reveal>
  )
}

export default function ProjectDetail({ project, backHref = '/#projects' }) {
  const projectLinks = project.links ?? (project.github ? [{ label: 'Repository', url: project.github }] : [])
  const caseSections = [
    { key: 'challenges', title: '해결 과제', problemLabel: '과제', solutionLabel: '접근 방법', problemClass: 'text-muted', items: project.challenges },
    { key: 'troubleshooting', title: '트러블슈팅', problemLabel: '발생한 문제', solutionLabel: '해결 방법', problemClass: 'text-red-700', items: project.troubleshooting },
  ].filter((section) => section.items?.length > 0)
  const summarySections = [
    { key: 'achievements', title: '성과', items: project.achievements },
    { key: 'improvements', title: '향후 개선', items: project.improvements },
  ].filter((section) => section.items?.length > 0)
  const sections = [
    { id: 'detail-purpose', title: '프로젝트 목적' },
    { id: 'detail-role', title: '담당 역할' },
    { id: 'detail-implementation', title: '주요 구현' },
    ...caseSections.map((section) => ({ id: `detail-${section.key}`, title: section.title })),
    ...summarySections.map((section) => ({ id: `detail-${section.key}`, title: section.title })),
    ...(project.evidence?.length ? [{ id: 'detail-evidence', title: '코드·설정 자료' }] : []),
  ]

  useEffect(() => {
    const previousTitle = document.title
    document.title = `${project.title} | Portfolio`
    window.scrollTo(0, 0)
    return () => { document.title = previousTitle }
  }, [project.title])

  return (
    <main id="main-content" tabIndex={-1} className="min-h-[calc(100vh-4rem)] bg-white">
      <article aria-labelledby="project-detail-title">
        <header className="border-b border-line bg-white">
          <div className="page-container break-keep py-12 [overflow-wrap:anywhere] sm:py-16">
            <Reveal><a href={backHref} className="focus-ring text-link"><Icon name="arrow" size={16} className="rotate-180" /> 프로젝트 목록</a></Reveal>
            <Reveal>
              <div className="mt-7 flex flex-wrap items-center gap-4 text-sm">
                {project.experience && <span className="experience-badge">{project.experience}</span>}
                <p className="tabular-nums text-muted">{project.period}</p>
              </div>
              <h1 id="project-detail-title" className="mt-4 max-w-4xl text-3xl leading-tight font-bold tracking-[-0.025em] text-ink sm:text-5xl">{project.title}</h1>
              {project.status && <p className="mt-4 text-sm leading-6 font-medium text-muted">{project.status}</p>}
              <p className="mt-5 max-w-[70ch] text-base leading-8 text-muted sm:text-lg">{project.description}</p>
              <ProjectOutcome outcome={project.outcome} className="mt-7 max-w-2xl" />
            </Reveal>
            <Reveal><div className="mt-7 flex flex-wrap gap-2">{project.skills.map((skill) => <SkillBadge key={skill} tone={project.tone}>{skill}</SkillBadge>)}</div></Reveal>
          </div>
        </header>

        <nav aria-label="프로젝트 상세 목차" className="border-b border-line bg-panel md:sticky md:top-16 md:z-30">
          <div className="page-container flex flex-wrap gap-x-2 gap-y-1 py-2">
            {sections.map((section) => <a key={section.id} href={`#${section.id}`} className="focus-ring text-link nav-link rounded-md px-3">{section.title}</a>)}
          </div>
        </nav>

        <div className="page-container py-12 sm:py-16">
          {project.architecture && <Reveal animate><figure className="mb-10 overflow-hidden rounded-2xl border border-line bg-white"><ProjectImage src={project.architecture} optimizedSrc={project.architectureOptimized} alt={project.architectureAlt || `${project.title} Architecture`} width={project.architectureWidth} height={project.architectureHeight} /><figcaption className="flex items-center justify-between gap-3 border-t border-line px-4 text-sm text-muted"><span>System Architecture</span><a href={project.architecture} target="_blank" rel="noreferrer" className="focus-ring text-link">원본 보기<Icon name="external" size={14} /><span className="sr-only"> (새 탭에서 열기)</span></a></figcaption></figure></Reveal>}

          {project.images?.length > 0 && (
            <Reveal animate>
              <section className="mb-10" aria-labelledby="project-images-title">
                <div className="mb-4 flex items-end justify-between gap-4"><h2 id="project-images-title" className="text-lg font-semibold text-ink">Project Images</h2><span className="text-sm text-muted">{project.images.length} images</span></div>
                <div className="grid gap-4 md:grid-cols-2">
                  {project.images.map((image, index) => <figure key={`${image.src}-${index}`} className={`${project.images.length % 2 === 1 && index === 0 ? 'md:col-span-2' : ''} overflow-hidden rounded-2xl border border-line bg-white`}><img src={image.src} alt={image.alt || `${project.title} 프로젝트 이미지 ${index + 1}`} width={image.width} height={image.height} className="h-auto w-full object-contain" loading="lazy" decoding="async" />{image.caption && <figcaption className="border-t border-line px-4 py-3 text-sm text-muted">{image.caption}</figcaption>}</figure>)}
                </div>
              </section>
            </Reveal>
          )}

          <div>
            <DetailSection id="detail-purpose" title="프로젝트 목적"><p>{project.purpose}</p></DetailSection>
            <DetailSection id="detail-role" title="담당 역할"><ul className="space-y-2">{project.role.map((item) => <li key={item} className="flex gap-3"><span className="mt-3.5 size-1 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul></DetailSection>
            <DetailSection id="detail-implementation" title="주요 구현">
              {project.workflow?.length > 0 && (
                <ol aria-label="구현 흐름" className="mb-6 flex flex-wrap items-center gap-2">
                  {project.workflow.map((step, index) => (
                    <li key={step} className="flex max-w-full items-center gap-2">
                      <span className="rounded-lg bg-surface px-3 py-2 text-sm leading-6 font-semibold text-ink"><span className="mr-2">{index + 1}.</span>{step}</span>
                      {index < project.workflow.length - 1 && <Icon name="arrow" size={13} className="shrink-0 text-muted" />}
                    </li>
                  ))}
                </ol>
              )}
              <ul className="space-y-4">{project.details.map((item) => <li key={item} className="flex gap-3"><span className="mt-3.5 size-1 shrink-0 rounded-full bg-accent" /><span>{item.split(/(파이프라인|Jenkinsfile)/g).map((part, index) => /^(파이프라인|Jenkinsfile)$/.test(part) ? <strong key={index} className="font-semibold text-ink">{part}</strong> : part)}</span></li>)}</ul>
            </DetailSection>
            {caseSections.map((section) => (
              <DetailSection key={section.key} id={`detail-${section.key}`} title={section.title}>
                <div className="divide-y divide-line">
                  {section.items.map((item, index) => (
                    <dl key={`${item.problem}-${index}`} className="space-y-5 py-7 first:pt-0 last:pb-0">
                      <div><dt className={`text-sm font-semibold ${section.problemClass}`}>{section.problemLabel}</dt><dd className="mt-1">{item.problem}</dd></div>
                      <div><dt className="text-sm font-semibold text-accent">{section.solutionLabel}</dt><dd className="mt-1">{item.solution}</dd></div>
                      <div><dt className="text-sm font-semibold text-ink">결과</dt><dd className="mt-1 font-semibold text-ink">{item.result}</dd></div>
                    </dl>
                  ))}
                </div>
              </DetailSection>
            ))}
            {summarySections.map((section) => (
              <DetailSection key={section.key} id={`detail-${section.key}`} title={section.title}>
                {section.note && <p className="mb-4 text-muted">{section.note}</p>}
                <ul className="space-y-3">{section.items.map((item) => <li key={item} className="flex gap-3"><span className="mt-3.5 size-1 shrink-0 rounded-full bg-accent" />{item}</li>)}</ul>
              </DetailSection>
            ))}
            {project.evidence?.length > 0 && (
              <DetailSection id="detail-evidence" title="코드·설정 자료">
                {project.evidenceNote && <p className="mb-4 text-muted">{project.evidenceNote}</p>}
                <ul className="grid gap-x-6 sm:grid-cols-2">
                  {project.evidence.map((source) => (
                    <li key={source.url} className="min-w-0">
                      <a href={source.url} target="_blank" rel="noreferrer" className="focus-ring evidence-link block h-full border-b border-line py-4">
                        <span className="evidence-label flex items-start justify-between gap-3 font-semibold text-ink">{source.label}<Icon name="external" size={15} className="mt-1 shrink-0 text-muted" /></span>
                        <span className="mt-2 block text-sm leading-6 text-muted">{source.description}</span>
                        <span className="sr-only"> (새 탭에서 열기)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </DetailSection>
            )}
          </div>

          {projectLinks.length > 0 && <Reveal><div className="mt-8 flex flex-wrap gap-3">{projectLinks.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring button-secondary pressable">{link.label} <Icon name="external" size={14} /><span className="sr-only"> (새 탭에서 열기)</span></a>)}</div></Reveal>}

          {project.video?.youtubeId && <Reveal animate><section className="mt-10" aria-labelledby="project-video-title"><div className="mb-4 flex items-end justify-between gap-4"><h2 id="project-video-title" className="text-lg font-semibold text-ink">Project Video</h2><span className="text-sm text-muted">YouTube</span></div><div className="aspect-video overflow-hidden rounded-2xl border border-line bg-black"><iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${project.video.youtubeId}`} title={project.video.title || `${project.title} 소개 영상`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></section></Reveal>}
        </div>
      </article>
    </main>
  )
}
