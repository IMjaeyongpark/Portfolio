import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { navigation, portfolio } from '../data/portfolio'
import Icon from './Icon'

export default function Header() {
  const isHomePage = window.location.pathname === '/'
  const initialHash = window.location.hash
  const initialActiveHref = navigation.some((item) => item.href === initialHash) ? initialHash : '#top'
  const [activeHref, setActiveHref] = useState(isHomePage ? initialActiveHref : null)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef(null)
  const headerRef = useRef(null)
  const navigationRef = useRef(null)
  const scrollTargetRef = useRef(null)
  const scrollUnlockTimerRef = useRef(null)
  const [indicator, setIndicator] = useState(null)
  const [keyboardNavigation, setKeyboardNavigation] = useState(false)

  useLayoutEffect(() => {
    if (!isHomePage || !window.location.hash) return undefined

    const hash = window.location.hash
    const target = document.querySelector(hash)
    if (!target) return undefined

    let scrollFrame
    const renderFrame = window.requestAnimationFrame(() => {
      scrollFrame = window.requestAnimationFrame(() => {
        if (hash === '#top') {
          window.scrollTo({ top: 0, behavior: 'instant' })
        } else {
          target.scrollIntoView({ behavior: 'instant', block: 'start' })
        }
        setActiveHref(navigation.some((item) => item.href === hash) ? hash : '#projects')
      })
    })

    return () => {
      window.cancelAnimationFrame(renderFrame)
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame)
    }
  }, [isHomePage])

  const handleNavigation = (event, item) => {
    // Keep modified clicks available for opening a section in another tab.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
    setKeyboardNavigation(event.detail === 0)
    setMenuOpen(false)
    if (!isHomePage) return

    const target = document.querySelector(item.href)
    if (!target) return

    event.preventDefault()
    scrollTargetRef.current = item.href
    setActiveHref(item.href)
    window.history.replaceState(null, '', item.href)

    if (scrollUnlockTimerRef.current) window.clearTimeout(scrollUnlockTimerRef.current)

    const behavior = event.detail === 0 || window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
    if (item.href === '#top') {
      window.scrollTo({ top: 0, behavior })
    } else {
      target.scrollIntoView({ behavior, block: 'start' })
    }
    if (event.detail === 0) {
      target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
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
      setIndicator({ left: activeLink.offsetLeft + 12, top: activeLink.offsetTop + activeLink.offsetHeight - 2, width: activeLink.offsetWidth - 24 })
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
    if (!menuOpen) return undefined
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    const closeOutside = (event) => {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 768px)')
    const closeOnDesktop = () => { if (desktop.matches) setMenuOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('focusin', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      window.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('focusin', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
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

      const activeItem = [...navigation].reverse().find((item) => {
        const section = document.querySelector(item.href)
        return section && section.getBoundingClientRect().top <= 120
      })

      setActiveHref(activeItem?.href ?? '#top')
    }

    let observer
    const observeSections = () => {
      observer?.disconnect()
      // A band below the fixed header tracks even very tall sections.
      observer = new IntersectionObserver(updateActiveSection, { rootMargin: `-64px 0px -${Math.max(0, window.innerHeight - 120)}px 0px`, threshold: 0 })
      document.querySelectorAll('main > section').forEach((section) => observer.observe(section))
      updateActiveSection()
    }
    const unlock = () => {
      scrollTargetRef.current = null
      updateActiveSection()
    }
    observeSections()
    window.addEventListener('resize', observeSections)
    window.addEventListener('scrollend', unlock)
    window.addEventListener('wheel', unlock, { passive: true })
    window.addEventListener('touchstart', unlock, { passive: true })

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', observeSections)
      window.removeEventListener('scrollend', unlock)
      window.removeEventListener('wheel', unlock)
      window.removeEventListener('touchstart', unlock)
      if (scrollUnlockTimerRef.current) window.clearTimeout(scrollUnlockTimerRef.current)
    }
  }, [isHomePage])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-40 border-b border-line bg-white">
      <div className="page-container flex h-16 items-center justify-between">
        <a href={isHomePage ? '#top' : '/#top'} onClick={(event) => handleNavigation(event, { href: '#top' })} className="focus-ring flex min-h-11 items-center text-sm font-bold tracking-[0.04em] text-ink sm:text-base">
          {portfolio.brand}<span className="text-lime">.</span>
        </a>
        <button ref={menuButton} type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMenuOpen(!menuOpen)} className="focus-ring pressable flex size-11 items-center justify-center rounded-xl bg-surface text-ink md:hidden">
          <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
        </button>
        <nav ref={navigationRef} id="main-navigation" aria-label="주요 메뉴" className={`${menuOpen ? 'flex' : 'hidden'} ${keyboardNavigation ? 'nav-no-motion' : ''} absolute inset-x-0 top-16 flex-col gap-1 border-b border-line bg-white p-4 md:relative md:inset-auto md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:p-0`}>
          {indicator && <span aria-hidden="true" className="nav-indicator pointer-events-none absolute top-0 left-0 z-20 hidden h-0.5 w-px bg-accent md:block" style={{ transform: `translate(${indicator.left}px, ${indicator.top}px) scaleX(${indicator.width})` }} />}
          {navigation.map((item) => {
            const isActive = activeHref === item.href || (!isHomePage && (item.paths ?? [`/${item.href.slice(1)}/`]).some((path) => window.location.pathname.startsWith(path)))

            return (
              <a
                key={item.href}
                href={isHomePage ? item.href : `/${item.href}`}
                onClick={(event) => handleNavigation(event, item)}
                aria-current={isActive ? 'page' : undefined}
                className={`focus-ring nav-link relative z-10 flex min-h-11 items-center rounded-md px-3 py-3 text-sm font-normal ${isActive ? 'bg-accent-soft text-accent' : 'text-muted hover:text-ink'}`}
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
