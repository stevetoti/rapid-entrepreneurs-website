'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowingCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
}

export default function GlowingCard({
  children,
  className = '',
  glowColor = 'rgba(239, 94, 51, 0.3)',
}: GlowingCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Glow effect */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"
        style={{ background: glowColor }}
      />
      {/* Card content */}
      <div className="relative bg-white rounded-2xl p-8 border border-gray-100 group-hover:border-vibrant-orange/30 transition-colors duration-300 h-full">
        {children}
      </div>
    </motion.div>
  )
}
