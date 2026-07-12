'use client'

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from 'react'

type Phase = 'idle' | 'hidden' | 'visible'

interface StaggerContextValue {
  phase: Phase
  delay: number
  staggerDelay: number
}

// 'idle' = server-rendered / JS unavailable → children stay fully visible.
const StaggerContext = createContext<StaggerContextValue>({
  phase: 'idle',
  delay: 0,
  staggerDelay: 0.1,
})

interface StaggerContainerProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  className?: string
}

// Progressive-enhancement stagger reveal: content is visible in server HTML;
// after hydration, below-the-fold grids hide and stagger in on scroll.
export default function StaggerContainer({
  children,
  delay = 0,
  staggerDelay = 0.1,
  className = '',
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return

    const rect = el.getBoundingClientRect()
    const alreadyInView = rect.top < window.innerHeight * 0.85 && rect.bottom > 0
    if (alreadyInView) return // keep visible

    setPhase('hidden')
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPhase('visible')
          io.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <StaggerContext.Provider value={{ phase, delay, staggerDelay }}>
      <div ref={ref} className={className}>
        {children}
      </div>
    </StaggerContext.Provider>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const { phase, delay, staggerDelay } = useContext(StaggerContext)
  const ref = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (el && el.parentElement) {
      const i = Array.prototype.indexOf.call(el.parentElement.children, el)
      if (i >= 0) setIndex(i)
    }
  }, [])

  const hidden = phase === 'hidden'
  const itemDelay = delay + index * staggerDelay

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? 'translateY(28px)' : 'none',
        transition: `opacity 0.5s cubic-bezier(0.25, 0.4, 0.25, 1) ${itemDelay}s, transform 0.5s cubic-bezier(0.25, 0.4, 0.25, 1) ${itemDelay}s`,
      }}
    >
      {children}
    </div>
  )
}
