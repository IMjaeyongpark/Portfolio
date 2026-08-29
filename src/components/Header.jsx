import { navigation, portfolio } from '../data/portfolio'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/6 bg-ink/75 backdrop-blur-xl">
      <div className="page-container flex h-16 items-center justify-between sm:h-18">
        <a href="#top" className="focus-ring flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-full bg-lime text-[10px] font-black text-ink">PF</span>
          <span>{portfolio.brand}<span className="text-lime">.</span></span>
        </a>
        <nav aria-label="주요 메뉴" className="flex items-center gap-3 sm:gap-8">
          {navigation.map((item) => <a key={item.href} href={item.href} className="focus-ring text-[11px] text-muted transition-colors hover:text-white sm:text-sm">{item.label}</a>)}
        </nav>
      </div>
    </header>
  )
}
