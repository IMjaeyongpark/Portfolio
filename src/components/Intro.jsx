import { portfolio } from '../data/portfolio'
import Icon from './Icon'
import Reveal from './Reveal'

export default function Intro() {
  return (
    <section id="top" className="bg-[#fafaf9] text-ink" aria-labelledby="intro-name">
      <div className="page-container pt-20 pb-8 sm:pt-28 sm:pb-10 lg:pt-32">
        <Reveal>
          <div className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.16em] text-muted uppercase">
            <span className="h-px w-8 bg-lime" aria-hidden="true" />
            <p>{portfolio.role}</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-12 pb-14 sm:mt-12 sm:pb-20 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <Reveal delay={80}><h1 id="intro-name" className="text-6xl leading-none font-bold tracking-[0] sm:text-7xl">{portfolio.name}<span className="text-lime">.</span></h1></Reveal>
            <Reveal delay={160}><p className="mt-8 whitespace-pre-line text-xl leading-[1.65] font-medium tracking-normal text-[#404954] sm:text-2xl">{portfolio.intro}</p></Reveal>
            <Reveal delay={240}><p className="mt-4 max-w-sm text-sm leading-7 text-muted">{portfolio.supportingText}</p></Reveal>
            <Reveal delay={320}>
              <a href="#projects" className="focus-ring group mt-8 inline-flex items-center gap-8 rounded-xl bg-ink px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#354152]">{portfolio.projectLinkLabel}<span aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">↘</span></a>
            </Reveal>
          </div>
          <Reveal delay={240} className="lg:pt-2">
            <aside aria-label={portfolio.focusTitle}>
              <p className="mb-3 text-[10px] font-semibold tracking-[0.18em] text-muted uppercase">{portfolio.focusTitle}</p>
              <ol>
                {portfolio.focusAreas.map((area, index) => (
                  <li key={area.title} className="grid grid-cols-[2rem_1fr] gap-3 border-t border-[#dedfdd] py-5">
                    <span className="pt-1 font-mono text-[10px] text-muted">{String(index + 1).padStart(2, '0')}</span>
                    <div><h2 className="text-base font-semibold tracking-normal">{area.title}</h2><p className="mt-1.5 text-xs leading-6 text-muted">{area.description}</p></div>
                  </li>
                ))}
              </ol>
            </aside>
          </Reveal>
        </div>
        <Reveal delay={360}>
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#dedfdd] pt-6">
            <p className="text-[10px] font-medium tracking-[0.15em] text-muted uppercase">{portfolio.homeCaption}</p>
            <div className="flex flex-wrap items-center gap-6">
              {portfolio.github && <a href={portfolio.github} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 py-2 text-xs font-semibold text-muted transition-colors hover:text-ink"><Icon name="github" size={15} /> GitHub <Icon name="external" size={12} /></a>}
              {portfolio.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 py-2 text-xs font-semibold text-muted transition-colors hover:text-ink">{link.label}<Icon name="external" size={12} /></a>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
