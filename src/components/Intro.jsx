import { portfolio } from '../data/portfolio'
import Icon from './Icon'

export default function Intro() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0d0f14] text-white">
      <div className="absolute -top-40 -left-40 size-96 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute -right-40 -bottom-40 size-96 rounded-full bg-violet-500/15 blur-[120px]" />
      <div className="page-container relative flex min-h-[78vh] flex-col items-center justify-center py-24 text-center sm:py-32">
        <p className="text-xs font-semibold tracking-[0.18em] text-blue-400 uppercase sm:text-sm">{portfolio.role}</p>
        <h1 className="mt-6 text-5xl leading-none font-black tracking-[-0.06em] sm:text-7xl">{portfolio.name}</h1>
        <p className="mt-6 whitespace-pre-line text-xl leading-tight font-semibold tracking-[-0.03em] text-white/85 sm:text-3xl">{portfolio.intro}</p>
        <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">{portfolio.supportingText}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {portfolio.github && <a href={portfolio.github} target="_blank" rel="noreferrer" className="focus-ring group inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"><Icon name="github" size={17} /> GitHub <Icon name="external" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>}
          {portfolio.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="focus-ring group inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/75 transition-colors hover:border-white/40 hover:text-white">{link.label}<Icon name="external" size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>)}
        </div>
        <a href="#projects" className="focus-ring mt-14 inline-flex flex-col items-center gap-2 text-xs text-white/40 transition-colors hover:text-white/70"><span>역량 확인하기</span><span aria-hidden="true">↓</span></a>
      </div>
    </section>
  )
}
