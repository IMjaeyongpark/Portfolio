import { skillGroups } from '../data/skills'
import Icon from './Icon'
import SkillBadge from './SkillBadge'

const groupTones = ['lime', 'blue', 'violet', 'cyan', 'orange', 'blue']
const groupIcons = ['backend', 'database', 'devops', 'iac', 'server', 'cloud']
const iconStyles = [
  'bg-blue-50 text-blue-600',
  'bg-sky-50 text-sky-600',
  'bg-violet-50 text-violet-600',
  'bg-cyan-50 text-cyan-600',
  'bg-orange-50 text-orange-600',
  'bg-indigo-50 text-indigo-600',
]

export default function Skills() {
  return (
    <section id="skills" className="section-space scroll-mt-16 bg-white">
      <div className="page-container">
        <div className="mb-10 sm:mb-12">
          <p className="eyebrow">Core Skills</p>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-copy">서비스 개발과 배포, 인프라 운영에 활용한 기술입니다.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <article key={group.category} className="group rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(49,130,246,0.10)]">
              <div className="flex items-center gap-3">
                <span className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${iconStyles[index]}`}>
                  <Icon name={groupIcons[index]} size={20} />
                </span>
                <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{group.skills.map((skill) => <SkillBadge key={skill} tone={groupTones[index]}>{skill}</SkillBadge>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
