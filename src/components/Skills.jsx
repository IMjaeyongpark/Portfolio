import { skillGroups } from '../data/skills'
import Icon from './Icon'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'

const groupTones = ['lime', 'blue', 'violet', 'cyan', 'orange', 'blue', 'violet']
const groupIcons = ['backend', 'database', 'devops', 'iac', 'server', 'cloud', 'briefcase']
const iconStyles = [
  'bg-blue-50 text-blue-600',
  'bg-sky-50 text-sky-600',
  'bg-violet-50 text-violet-600',
  'bg-cyan-50 text-cyan-600',
  'bg-orange-50 text-orange-600',
  'bg-indigo-50 text-indigo-600',
  'bg-fuchsia-50 text-fuchsia-600',
]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 bg-white py-12 sm:py-16">
      <div className="page-container">
        <Reveal className="mb-8 sm:mb-10">
          <p className="eyebrow">Core Skills</p>
          <h2 className="section-title">Skills & Tools</h2>
          <p className="section-copy">서비스 개발과 배포, 인프라 운영에 활용한 기술입니다.</p>
        </Reveal>
        <div className="grid gap-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 45}>
              <article className="group grid rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_40px_rgba(49,130,246,0.10)] sm:grid-cols-[13rem_1fr] sm:items-center sm:gap-4">
                <div className="flex items-center gap-2.5">
                  <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${iconStyles[index]}`}>
                    <Icon name={groupIcons[index]} size={19} />
                  </span>
                  <h3 className="text-base leading-5 font-semibold text-ink">{group.category}</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-0">{group.skills.map((skill) => <SkillBadge key={skill} tone={groupTones[index]}>{skill}</SkillBadge>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
