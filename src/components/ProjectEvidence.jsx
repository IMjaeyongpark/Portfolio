import Icon from './Icon'

function EvidenceLinks({ sources }) {
  if (!sources.length) return null

  return (
    <ul className="grid gap-x-6 sm:grid-cols-2">
      {sources.map((source) => (
        <li key={source.url} className="min-w-0">
          <a href={source.url} target="_blank" rel="noreferrer" className="focus-ring evidence-link block h-full border-b border-line py-4">
            <span className="evidence-label flex items-start justify-between gap-3 font-semibold text-ink">{source.label}<Icon name="external" size={15} className="mt-1 shrink-0 text-muted" /></span>
            <span className="mt-2 block text-sm leading-6 text-muted">{source.description}</span>
            <span className="sr-only"> (새 탭에서 열기)</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

function ScopeNotes({ items }) {
  if (!items?.length) return null

  return <dl className="mb-6 space-y-4">{items.map((item) => <div key={item.title}><dt className="text-sm font-semibold text-ink">{item.title}</dt><dd className="mt-1 text-base leading-7 text-muted">{item.description}</dd></div>)}</dl>
}

export default function ProjectEvidence({ project, sources }) {
  const primary = sources.filter((source) => !source.supplemental)
  const supplemental = sources.filter((source) => source.supplemental)
  const hasVersions = Boolean(project.versionInfo?.length)
  const hasSupplemental = supplemental.length > 0

  return (
    <>
      {project.evidenceNote && <p className="mb-4 text-muted">{project.evidenceNote}</p>}
      <ScopeNotes items={project.evidenceScope} />
      <EvidenceLinks sources={primary} />
      {(hasVersions || hasSupplemental) && (
        <details className="group mt-6 border-y border-line">
          <summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {hasVersions && hasSupplemental ? '버전·보조 자료 보기' : hasVersions ? '버전 정보 보기' : '보조 자료 보기'}
            <Icon name="arrow" size={18} className="shrink-0 rotate-90 group-open:-rotate-90" />
          </summary>
          <div className="pb-5 pt-2">
            <ScopeNotes items={project.versionInfo} />
            <EvidenceLinks sources={supplemental} />
          </div>
        </details>
      )}
    </>
  )
}
