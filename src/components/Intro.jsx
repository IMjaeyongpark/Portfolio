import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'

const focusIcons = ['cloud', 'iac', 'devops', 'database']

export default function Intro() {
  return (
    <section id="top" className="bg-surface text-ink" aria-labelledby="intro-name">
      <div className="page-container pt-14 pb-6 sm:pt-20 sm:pb-8 lg:flex lg:min-h-[calc(100svh-4rem)] lg:flex-col lg:pt-8 lg:pb-6">
        <div className="grid gap-10 pb-10 sm:pb-12 lg:flex-1 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:py-8">
          <div className={window.location.hash ? undefined : 'hero-intro'}>
            <Reveal><h1 id="intro-name" className="text-6xl leading-none font-bold tracking-[0em] sm:text-7xl">{portfolio.name}<span className="text-lime">.</span></h1></Reveal>
            <Reveal><p className="mt-4 text-sm font-medium text-accent">{portfolio.role}</p></Reveal>
            <Reveal><p className="mt-6 whitespace-pre-line text-xl leading-[1.65] font-medium tracking-normal text-ink sm:text-2xl">{portfolio.intro}</p></Reveal>
            <Reveal><p className="mt-4 max-w-[42ch] text-base leading-7 text-muted">{portfolio.supportingText}</p></Reveal>
            <Reveal>
              <a href="#projects" className="focus-ring button-primary pressable mt-7">{portfolio.projectLinkLabel}<Icon name="arrow" size={18} className="rotate-90" /></a>
            </Reveal>
          </div>
          <Reveal className="lg:pt-2">
            <aside aria-label={portfolio.focusTitle}>
              <p className="mb-3 text-sm font-medium text-muted">{portfolio.focusTitle}</p>
              <ul>
                {portfolio.focusAreas.map((area, index) => (
                  <li key={area.title} className="flex gap-3 border-t border-line py-4">
                    <span className="icon-surface mt-0.5"><Icon name={focusIcons[index]} size={18} /></span>
                    <div><h2 className="text-base font-semibold tracking-normal">{area.title}</h2><p className="mt-1.5 text-sm leading-6 text-muted">{area.description}</p></div>
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>
        </div>
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-3">
            <p className="text-sm text-muted">{portfolio.homeCaption}</p>
            <div className="flex flex-wrap items-center gap-6">
              {portfolio.github && <a href={portfolio.github} target="_blank" rel="noreferrer" className="focus-ring text-link"><Icon name="github" size={17} /> GitHub <Icon name="external" size={14} /><span className="sr-only"> (새 탭에서 열기)</span></a>}
              {portfolio.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring text-link">{link.label}<Icon name="external" size={14} /><span className="sr-only"> (새 탭에서 열기)</span></a>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
