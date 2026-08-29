import { portfolio } from '../data/portfolio'
import Icon from './Icon'

export default function Intro() {
  return (
    <section id="top" className="page-container flex min-h-[92vh] items-center pt-20">
      <div className="max-w-4xl py-20">
        <div className="eyebrow"><span className="size-1.5 rounded-full bg-lime shadow-[0_0_14px_#bcff54]" />{portfolio.role}</div>
        <h1 className="text-[clamp(1.25rem,6.25vw,5rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-[#d2d5d8]">
          {portfolio.intro.split('\n').map((line) => <span key={line} className="block whitespace-nowrap">{line}</span>)}
        </h1>
        <div className="mt-8 flex flex-col items-start gap-7 sm:mt-10 sm:flex-row sm:items-center">
          <p className="max-w-md text-sm leading-7 text-muted sm:text-base">{portfolio.supportingText}</p>
          <div className="flex flex-wrap gap-3">
            {portfolio.github && <a href={portfolio.github} target="_blank" rel="noreferrer" className="focus-ring group inline-flex shrink-0 items-center gap-2 border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lime"><Icon name="github" size={17} /> GitHub <Icon name="external" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>}
            {portfolio.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring group inline-flex shrink-0 items-center gap-2 border border-line bg-white px-4 py-3 text-sm font-semibold text-ink transition-colors hover:bg-lime">{link.label}<Icon name="external" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>)}
          </div>
        </div>
      </div>
    </section>
  )
}
