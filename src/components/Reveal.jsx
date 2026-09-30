import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = 0, animate = false }) {
  const elementRef = useRef(null)
  const hasRevealedRef = useRef(false)
  const [state, setState] = useState('visible')

  useEffect(() => {
    const element = elementRef.current
    if (!element || !animate) return undefined

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer
    const show = () => {
      hasRevealedRef.current = true
      setState('visible')
      observer?.disconnect()
    }
    const configure = () => {
      observer?.disconnect()
      if (motionPreference.matches || hasRevealedRef.current || !('IntersectionObserver' in window)) {
        show()
        return
      }
      // Use the observer's layout snapshot, not a synchronous read per component.
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) show()
        else if (!hasRevealedRef.current && entry.boundingClientRect.top >= (entry.rootBounds?.bottom ?? window.innerHeight)) setState('pending')
      }, { threshold: 0, rootMargin: '0px 0px -24px' })
      observer.observe(element)
    }
    configure()
    motionPreference.addEventListener('change', configure)
    element.addEventListener('focusin', show)

    return () => {
      observer?.disconnect()
      motionPreference.removeEventListener('change', configure)
      element.removeEventListener('focusin', show)
    }
  }, [animate])

  return (
    <div
      ref={elementRef}
      data-reveal={animate ? 'scroll' : undefined}
      className={`reveal ${state === 'visible' ? 'reveal-visible' : 'reveal-pending'} ${className}`}
      style={animate ? { '--reveal-delay': `${Math.max(0, Math.min(delay, 60))}ms` } : undefined}
    >
      {children}
    </div>
  )
}
