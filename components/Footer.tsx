'use client'

import { GitBranch, Link, Share2, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-white/[0.02] backdrop-blur-xl backdrop-saturate-150">
      <div className="px-6 py-12 lg:ml-64 lg:px-12">
        <div className="max-full space-y-8">
          {/* Social links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/arthurjunior250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dusabimana-arthur-junior-a8189820a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="LinkedIn"
            >
              <Link size={20} />
            </a>
            <a
              href="https://x.com/arthurjunior250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="Twitter"
            >
              <Share2 size={20} />
            </a>
            <a
              href="mailto:arthurjunior88741@gmail.com"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />

          {/* Footer content */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-semibold text-white mb-2">Arthur Junior</h3>
              <p className="text-sm text-white/60">
                Full-stack software engineer crafting beautiful digital experiences.
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-white/60">
                © {currentYear} Arthur Junior. All rights reserved.
              </p>
              <p className="text-xs text-white/40 mt-2">
                Designed & built with modern web technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
