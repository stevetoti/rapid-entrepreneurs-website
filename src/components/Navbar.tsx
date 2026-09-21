'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'
import { servicePages } from '@/lib/service-pages'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/success-stories', label: 'Success Stories' },
  { href: '/contact', label: 'Contact' },
]

const serviceDropdownLinks = servicePages.map((service) => ({
  href: `/services/${service.slug}`,
  label: service.label,
  icon: service.icon,
}))

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
            {navLinks.map((link) =>
              link.href === '/services' ? (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center gap-1 font-medium transition-colors duration-200 py-2 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-vibrant-orange'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-vibrant-orange transition-all duration-300 group-hover:w-full" />
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-64">
                      {serviceDropdownLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-gray-700 hover:text-vibrant-orange hover:bg-vibrant-orange/5 font-medium text-sm transition-all"
                        >
                          <span className="text-lg">{service.icon}</span>
                          {service.label}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/services"
                          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-deep-blue hover:text-vibrant-orange hover:bg-vibrant-orange/5 font-semibold text-sm transition-all"
                        >
                          All Services →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
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
          isOpen ? 'max-h-[calc(100vh-5rem)] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 space-y-2">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-vibrant-orange font-medium py-3 px-4 rounded-lg hover:bg-vibrant-orange/5 transition-all"
              >
                {link.label}
              </Link>
              {link.href === '/services' && (
                <div className="ml-4 border-l-2 border-vibrant-orange/20 pl-2 space-y-1">
                  {serviceDropdownLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-gray-600 hover:text-vibrant-orange text-sm py-2 px-4 rounded-lg hover:bg-vibrant-orange/5 transition-all"
                    >
                      <span>{service.icon}</span>
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
