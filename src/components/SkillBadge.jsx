const toneStyles = {
  lime: 'border-blue-200 bg-blue-50 text-blue-700',
  blue: 'border-sky-200 bg-sky-50 text-sky-700',
  violet: 'border-violet-200 bg-violet-50 text-violet-700',
  orange: 'border-orange-200 bg-orange-50 text-orange-700',
  cyan: 'border-cyan-200 bg-cyan-50 text-cyan-700',
  neutral: 'border-line bg-[#f4f5f7] text-[#4e5968]',
}

export default function SkillBadge({ children, accent = false, tone = 'neutral' }) {
  const colorStyle = accent ? toneStyles.lime : toneStyles[tone] || toneStyles.neutral

  return <span className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-semibold ${colorStyle}`}>{children}</span>
}
