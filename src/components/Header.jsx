import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { navigation, portfolio } from '../data/portfolio'

export default function Header() {
  const isHomePage = window.location.pathname === '/'
  const [activeHref, setActiveHref] = useState(isHomePage ? '#top' : null)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)
  const navigationRef = useRef(null)
  const scrollTargetRef = useRef(null)
  const scrollUnlockTimerRef = useRef(null)
  const [indicator, setIndicator] = useState(null)

  const handleNavigation = (event, item) => {
    setMenuOpen(false)
    if (!isHomePage) return

    const target = document.querySelector(item.href)
    if (!target) return

    event.preventDefault()
    scrollTargetRef.current = item.href
    setActiveHref(item.href)
    window.history.replaceState(null, '', item.href)

    if (scrollUnlockTimerRef.current) window.clearTimeout(scrollUnlockTimerRef.current)

    if (item.href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    scrollUnlockTimerRef.current = window.setTimeout(() => {
      scrollTargetRef.current = null
    }, 1200)
  }

  useLayoutEffect(() => {
    const nav = navigationRef.current
    const updateIndicator = () => {
      const activeLink = nav?.querySelector('[aria-current="page"]')
      if (!activeLink || !nav.offsetWidth) return
      setIndicator({ left: activeLink.offsetLeft, top: activeLink.offsetTop, width: activeLink.offsetWidth, height: activeLink.offsetHeight })
    }
    updateIndicator()
    const observer = new ResizeObserver(updateIndicator)
    if (nav) {
      observer.observe(nav)
      nav.querySelectorAll('a').forEach((link) => observer.observe(link))
    }
    return () => observer.disconnect()
  }, [activeHref, menuOpen])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!isHomePage) return undefined

    const updateActiveSection = () => {
      if (scrollTargetRef.current) {
        const target = document.querySelector(scrollTargetRef.current)
        const arrived = scrollTargetRef.current === '#top'
          ? window.scrollY < 4
          : target && Math.abs(target.getBoundingClientRect().top - 64) < 8

        if (!arrived) return
        scrollTargetRef.current = null
        if (scrollUnlockTimerRef.current) window.clearTimeout(scrollUnlockTimerRef.current)
      }

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
      if (scrollUnlockTimerRef.current) window.clearTimeout(scrollUnlockTimerRef.current)
    }
  }, [isHomePage])

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white/95 shadow-[0_2px_16px_rgba(15,23,42,0.025)] backdrop-blur-xl">
      <div className="page-container flex h-16 items-center justify-between">
        <a href={isHomePage ? '#top' : '/#top'} className="focus-ring text-sm font-black tracking-[0.04em] text-ink sm:text-base">
          {portfolio.brand}<span className="text-lime">.</span>
        </a>
        <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMenuOpen(!menuOpen)} className="focus-ring flex size-11 items-center justify-center rounded-xl border border-line bg-white text-ink sm:hidden">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <nav ref={navigationRef} id="main-navigation" aria-label="주요 메뉴" className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col gap-1 border-b border-line bg-white p-4 shadow-lg sm:relative sm:inset-auto sm:flex sm:flex-row sm:items-center sm:rounded-full sm:border sm:bg-slate-50/70 sm:p-1 sm:shadow-none`}>
          {indicator && <span aria-hidden="true" className="nav-indicator pointer-events-none absolute left-0 top-0 rounded-xl bg-white shadow-sm ring-1 ring-blue-100 sm:rounded-full" style={{ width: indicator.width, height: indicator.height, transform: `translate(${indicator.left}px, ${indicator.top}px)` }} />}
          {navigation.map((item) => {
            const isActive = activeHref === item.href || (!isHomePage && window.location.pathname.startsWith(`/${item.href.slice(1)}/`))

            return (
              <a
                key={item.href}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={(event) => handleNavigation(event, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`focus-ring relative z-10 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-300 sm:rounded-full sm:px-3 sm:py-2 ${isActive ? 'text-lime' : 'text-muted hover:text-ink'}`}
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
