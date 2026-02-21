'use client'

import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  className?: string
  viewport?: boolean
  once?: boolean
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  viewport = true,
  once = true,
}: FadeInProps) {
  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView={viewport ? 'visible' : undefined}
      animate={!viewport ? 'visible' : undefined}
      viewport={viewport ? { once, margin: '-50px' } : undefined}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
