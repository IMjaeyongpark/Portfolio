const toneStyles = {
  lime: 'border-lime/30 bg-lime/10 text-lime',
  blue: 'border-sky-400/30 bg-sky-400/10 text-sky-300',
  violet: 'border-violet-400/30 bg-violet-400/10 text-violet-300',
  orange: 'border-orange-400/30 bg-orange-400/10 text-orange-300',
  cyan: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  neutral: 'border-line bg-white/[0.025] text-[#c8cbce]',
}

export default function SkillBadge({ children, accent = false, tone = 'neutral' }) {
  const colorStyle = accent ? toneStyles.lime : toneStyles[tone] || toneStyles.neutral

  return <span className={`inline-flex items-center border px-3 py-1.5 text-xs font-semibold ${colorStyle}`}>{children}</span>
}
