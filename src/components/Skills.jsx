import { skillGroups } from '../data/skills'
import Icon from './Icon'
import SkillBadge from './SkillBadge'

const groupTones = ['lime', 'blue', 'violet', 'cyan', 'orange', 'blue']
const groupIcons = ['backend', 'database', 'devops', 'iac', 'server', 'cloud']
const iconStyles = [
  'border-lime/30 bg-lime/10 text-lime',
  'border-sky-400/30 bg-sky-400/10 text-sky-300',
  'border-violet-400/30 bg-violet-400/10 text-violet-300',
  'border-cyan-400/30 bg-cyan-400/10 text-cyan-300',
  'border-orange-400/30 bg-orange-400/10 text-orange-300',
  'border-sky-400/30 bg-sky-400/10 text-sky-300',
]

export default function Skills() {
  return (
    <section id="skills" className="section-space border-y border-white/6 bg-white/[0.012] scroll-mt-16">
      <div className="page-container">
        <div className="mb-12 sm:mb-16">
          <p className="eyebrow">01 — Expertise</p>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-copy">서비스 개발과 배포, 인프라 운영에 활용한 기술입니다.</p>
        </div>
        <div className="border-t border-line">
          {skillGroups.map((group, index) => (
            <article key={group.category} className="grid gap-5 border-b border-line px-1 py-7 transition-colors hover:bg-white/[0.018] sm:grid-cols-[13rem_1fr] sm:items-start sm:px-6 sm:py-8">
              <div className="flex items-center gap-3">
                <span className={`flex size-10 shrink-0 items-center justify-center border ${iconStyles[index]}`}>
                  <Icon name={groupIcons[index]} size={20} />
                </span>
                <h3 className="text-sm font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">{group.skills.map((skill) => <SkillBadge key={skill} tone={groupTones[index]}>{skill}</SkillBadge>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
