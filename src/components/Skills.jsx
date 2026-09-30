import { skillGroups } from '../data/skills'
import Icon from './Icon'
import Reveal from './Reveal'
import SkillBadge from './SkillBadge'

const groupTones = ['lime', 'blue', 'violet', 'cyan', 'orange', 'blue', 'violet']
const groupIcons = ['backend', 'database', 'devops', 'iac', 'server', 'cloud', 'briefcase']
export default function Skills() {
  return (
    <section id="skills" className="section-space scroll-mt-16 bg-white" aria-labelledby="skills-title">
      <div className="page-container">
        <Reveal animate className="mb-8 sm:mb-10">
          <h2 id="skills-title" className="section-title">Skills & Tools</h2>
          <p className="section-copy">서비스 개발과 배포, 인프라 운영에 활용한 기술입니다.</p>
        </Reveal>
        <div className="border-t border-line">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} animate delay={(index % 3) * 30}>
              <article className="grid gap-3 border-b border-line py-3.5 sm:grid-cols-[14rem_1fr] sm:items-center sm:gap-5">
                <div className="flex items-center gap-2.5">
                  <span className="icon-surface">
                    <Icon name={groupIcons[index]} size={20} />
                  </span>
                  <h3 className="text-base leading-5 font-semibold text-ink">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">{group.skills.map((skill) => <SkillBadge key={skill} tone={groupTones[index]}>{skill}</SkillBadge>)}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
