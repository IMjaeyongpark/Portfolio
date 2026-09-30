export default function ProjectOutcome({ outcome, className = '' }) {
  if (!outcome) return null

  return (
    <dl className={`project-outcome ${className}`}>
      <dt className="flex items-center gap-3 text-sm leading-6 font-semibold text-ink">
        <span className="shrink-0">결과·진행 상태</span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </dt>
      <dd className="mt-2 text-base leading-7 font-semibold text-ink">{outcome}</dd>
    </dl>
  )
}
