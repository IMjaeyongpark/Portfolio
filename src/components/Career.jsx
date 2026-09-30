import { careerItems } from '../data/career'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Career() {
  return (
    <section id="career" className="section-space scroll-mt-16 bg-surface" aria-labelledby="career-title">
      <div className="page-container">
        <Reveal animate className="mb-8 sm:mb-10">
          <h2 id="career-title" className="section-title">실무에서 쌓아온 경험</h2>
          <p className="section-copy">개발과 운영 과정에서 맡은 역할과 주요 성과를 시간순으로 정리했습니다.</p>
        </Reveal>

        <div className="space-y-6">
          {careerItems.map((career) => (
            <Reveal key={`${career.organization}-${career.period}`}>
              <article className="grid gap-8 border-t border-line pt-8 lg:grid-cols-[15rem_1fr] lg:gap-12">
                <Reveal animate>
                  <div className="flex items-start gap-3">
                    <span className="icon-surface"><Icon name="briefcase" size={18} /></span>
                    <h3 className="pt-0.5 text-xl leading-7 font-bold tracking-[-0.025em] text-ink">{career.organization}</h3>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-lime">{career.role}</p>
                  <p className="mt-2 text-sm tabular-nums text-muted">{career.period}</p>
                  <p className="mt-5 text-base leading-7 text-muted">{career.summary}</p>
                </Reveal>

                <ol className="relative space-y-7 border-l border-line pl-6">
                  {career.experiences.map((experience) => (
                    <li key={`${experience.title}-${experience.period}`} className="relative">
                      <span className="absolute top-1.5 -left-[1.78rem] size-2.5 rounded-full border-2 border-white bg-lime ring-1 ring-blue-200" />
                      <Reveal animate>
                        <p className="text-sm font-medium tabular-nums text-accent">{experience.period}</p>
                        <h4 className="mt-1.5 text-base font-semibold tracking-[-0.02em] text-ink">{experience.title}</h4>
                        <p className="mt-2 text-base leading-7 text-muted">{experience.description}</p>
                      </Reveal>
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
