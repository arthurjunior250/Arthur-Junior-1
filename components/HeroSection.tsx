'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink, User, Share2, Mail } from 'lucide-react'
import profileImage from '../assets/logo.png'
export function HeroSection() {
  const [greeting, setGreeting] = useState('Welcome')

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting('Good morning')
    } else if (hour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good evening')
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 lg:ml-64 lg:pt-20">
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-20 xl:px-32">
        <div className="flex-1 max-w-2xl space-y-8 animate-fade-in-up">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 backdrop-blur-md">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-white/70">{greeting}, I&apos;m Arthur</span>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight text-white lg:text-7xl">
              Crafting digital
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                experiences
              </span>
            </h1>
            <p className="max-w-xl text-lg text-white/60 leading-relaxed">
              Full-stack software engineer passionate about building beautiful, performant, and accessible web applications. I specialize in modern JavaScript, React, and cloud technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/pdf/Arthur CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            >
              Resume
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-6 py-3 font-medium text-white transition-all hover:bg-white/[0.1] hover:border-white/40"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 pt-8">
            <a
              href="https://github.com/arthurjunior250"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="GitHub"
            >
              <ExternalLink size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dusabimana-arthur-junior-a8189820a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="LinkedIn"
            >
              <User size={20} />
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
              href="mailto:arthurjunior250@gmail.com"
              className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/[0.05] border border-white/10 text-white/70 transition-all hover:bg-white/[0.1] hover:text-cyan-400 hover:border-white/30"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="hidden lg:flex flex-1 items-center justify-center animate-fade-in">
          <div className="relative w-80 h-80 ">
            {/* Glowing background */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-2xl" />

            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden p-1">
              <img
                src={profileImage.src}
                alt="Arthur Junior"
                className="w-80 h-80 object-cover  rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-2 -right-2 w-20 h-20 rounded-full bg-cyan-500/30 blur-2xl" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 rounded-full bg-blue-500/30 blur-2xl" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="flex flex-col gap-2">
            <div className="h-1 w-px bg-white/20" />
            <div className="animate-bounce h-1 w-px bg-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
