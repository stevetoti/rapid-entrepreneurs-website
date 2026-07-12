'use client'

import { ReactNode, useEffect, useRef, useState } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
  viewport?: boolean
  once?: boolean
}

// Progressive-enhancement reveal: the server renders content fully visible,
// so it never disappears if JavaScript or animations fail. After hydration,
// elements below the fold are hidden and animated in when they scroll into view.
export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  viewport = true,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    if (!viewport) {
      // Animate immediately on mount
      setHidden(true)
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => setHidden(false)))
      return () => cancelAnimationFrame(raf)
    }

    const rect = el.getBoundingClientRect()
    const alreadyInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0
    if (alreadyInView) return // keep visible — no flash on above-the-fold content

    setHidden(true)
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setHidden(false)
            if (once) io.disconnect()
          } else if (!once) {
            setHidden(true)
          }
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [viewport, once])

  const offsets: Record<NonNullable<FadeInProps['direction']>, string> = {
    up: 'translateY(32px)',
    down: 'translateY(-32px)',
    left: 'translateX(32px)',
    right: 'translateX(-32px)',
    none: 'none',
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? offsets[direction] : 'none',
        transition: `opacity ${duration}s cubic-bezier(0.25, 0.4, 0.25, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 0.4, 0.25, 1) ${delay}s`,
        willChange: hidden ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </div>
  )
}
