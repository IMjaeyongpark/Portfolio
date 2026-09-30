import { portfolio } from '../data/portfolio'
import Icon from './Icon'

export default function Footer() {
  const topHref = window.location.pathname === '/' ? '#top' : '/#top'

  return (
    <footer className="border-t border-line bg-surface">
      <div className="page-container flex flex-col justify-between gap-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:py-12">
        <div><p className="font-bold text-ink">{portfolio.name} <span className="ml-1 font-normal text-muted">Developer Portfolio</span></p><p className="mt-1 text-[13px]">© {new Date().getFullYear()} All rights reserved.</p></div>
        <a className="focus-ring button-secondary self-start sm:self-auto" href={topHref}>Back to top <Icon name="arrow" size={16} className="-rotate-90" /></a>
      </div>
    </footer>
  )
}
