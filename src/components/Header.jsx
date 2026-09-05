import { useEffect, useState } from 'react'
import { navigation, portfolio } from '../data/portfolio'

export default function Header() {
  const [activeHref, setActiveHref] = useState('#top')

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 120
      const activeItem = [...navigation].reverse().find((item) => {
        const section = document.querySelector(item.href)
        return section && section.offsetTop <= marker
      })

      setActiveHref(activeItem?.href ?? '#top')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white/90 backdrop-blur-xl">
      <div className="page-container flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring text-sm font-black tracking-[0.04em] text-ink sm:text-base">
          {portfolio.brand}<span className="text-lime">.</span>
        </a>
        <nav aria-label="주요 메뉴" className="flex items-center">
          {navigation.map((item) => {
            const isActive = activeHref === item.href

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`focus-ring rounded-lg px-1 py-2 text-[10px] font-semibold transition-colors sm:px-3 sm:text-sm ${isActive ? 'bg-blue-50 text-lime' : 'text-muted hover:bg-[#f2f4f6] hover:text-ink'}`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
