import { portfolio } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="page-container flex items-center justify-between py-8 text-[11px] text-muted sm:py-10">
        <span>© {new Date().getFullYear()} {portfolio.name}</span>
        <a className="focus-ring transition-colors hover:text-white" href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}
