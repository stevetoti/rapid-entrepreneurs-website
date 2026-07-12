'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg'
          : 'bg-deep-blue border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logos/rapid-logo.jpg"
              alt="Rapid Entrepreneurs"
              width={44}
              height={44}
              className="rounded-xl shadow-lg transition-transform duration-200 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <span
                className={`font-display font-bold text-xl transition-colors ${
                  isScrolled ? 'text-deep-blue' : 'text-white'
                }`}
              >
                Rapid
              </span>
              <span className="font-display font-bold text-xl text-vibrant-orange"> Entrepreneurs</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-colors duration-200 group ${
                  isScrolled
                    ? 'text-gray-700 hover:text-vibrant-orange'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vibrant-orange transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="/get-started"
              className="btn-primary text-sm px-6 py-3 hover:scale-105 active:scale-95"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors active:scale-90 ${
              isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-deep-blue' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-deep-blue' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t shadow-xl overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-vibrant-orange font-medium py-3 px-4 rounded-lg hover:bg-vibrant-orange/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center text-sm px-6 py-3"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
