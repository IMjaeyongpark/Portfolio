import { careerItems } from '../data/career'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Career() {
  return (
    <section id="career" className="section-space scroll-mt-16 bg-[#f7f8fa]">
      <div className="page-container">
        <Reveal className="mb-8 sm:mb-10">
          <p className="eyebrow">Career</p>
          <h2 className="section-title">실무에서 쌓아온 경험</h2>
          <p className="section-copy">개발과 운영 과정에서 맡은 역할과 주요 성과를 시간순으로 정리했습니다.</p>
        </Reveal>

        <div className="space-y-6">
          {careerItems.map((career, careerIndex) => (
            <Reveal key={`${career.organization}-${career.period}`} delay={careerIndex * 80}>
              <article className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
                <div>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-blue-50 text-lime">
                    <Icon name="briefcase" size={20} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold tracking-[-0.025em] text-ink">{career.organization}</h3>
                  <p className="mt-2 text-sm font-semibold text-lime">{career.role}</p>
                  <p className="mt-2 text-xs text-muted">{career.period}</p>
                  <p className="mt-5 text-sm leading-6 text-muted">{career.summary}</p>
                </div>

                <ol className="relative space-y-7 border-l border-line pl-6">
                  {career.experiences.map((experience) => (
                    <li key={`${experience.title}-${experience.period}`} className="relative">
                      <span className="absolute top-1.5 -left-[1.78rem] size-2.5 rounded-full border-2 border-white bg-lime ring-1 ring-blue-200" />
                      <p className="text-xs font-semibold text-lime">{experience.period}</p>
                      <h4 className="mt-1.5 text-base font-bold tracking-[-0.02em] text-ink">{experience.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted">{experience.description}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
