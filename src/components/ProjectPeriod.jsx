export default function ProjectPeriod({ period, maintenancePeriod, align = 'left' }) {
  return (
    <span className={`grid gap-1 tabular-nums text-muted ${align === 'right' ? 'text-right' : ''}`}>
      <span>{maintenancePeriod ? `구축 ${period}` : period}</span>
      {maintenancePeriod && <span>하자보수 {maintenancePeriod}</span>}
    </span>
  )
}
