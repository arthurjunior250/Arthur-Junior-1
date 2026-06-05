'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'
import profileImage from '../assets/logo.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const handleNavClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      let current = 'home'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            current = section
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed left-0 top-0 hidden h-screen w-64 flex-col gap-8 border-r border-white/5 bg-white/[0.02] px-8 py-12 backdrop-blur-xl backdrop-saturate-150 lg:flex">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <span className="text-lg font-bold text-cyan-400">
              {/* <img
                src={profileImage.src}
                alt="Arthur Junior"
                className="w-20 h-20 object-contain  rounded-2xl transition-transform duration-300 hover:scale-105"
              /> */}
              AJ
            </span>
          </div>
          <span className="text-sm font-semibold text-white">Arthur Junior</span>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1)
            const isActive = activeSection === sectionId
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-2 text-sm font-medium transition-colors ${isActive
                  ? 'text-cyan-400'
                  : 'text-white/70 hover:text-cyan-400'
                  }`}
              >
                <span className={`absolute left-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-400 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 pt-6">
          <a
            href="https://github.com/arthurjunior250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-cyan-400"
          >
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/dusabimana-arthur-junior-a8189820a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-cyan-400"
          >
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/arthurjunior250"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-cyan-400"
          >
            <span>Twitter</span>
          </a>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-6 py-4 backdrop-blur-xl backdrop-saturate-150 lg:hidden">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
            <span className="text-xs font-bold text-cyan-400">AJ</span>
          </div>
          <span className="text-xs font-semibold text-white">Arthur</span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white/70 hover:text-cyan-400"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed left-0 right-0 top-16 z-40 flex flex-col gap-2 border-b border-white/5 bg-white/[0.02] px-6 py-4 backdrop-blur-xl backdrop-saturate-150 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              className="px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
