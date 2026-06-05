'use client'

import { useEffect, useRef, useState } from 'react'

interface AboutSectionProps {
  onVisible?: (visible: boolean) => void
}

export function AboutSection({ onVisible }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        onVisible?.(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [onVisible])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen py-20 lg:ml-64 lg:py-32"
    >
      <div className="px-6 lg:px-12">
        <div className="max-full space-y-12">
          {/* Section heading */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">About Me</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
          </div>

          {/* Content grid */}
          <div className={`grid gap-8 lg:grid-cols-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Left column */}
            <div className="space-y-6">
              <p className="text-white/70 leading-relaxed">
                I'm a passionate full-stack software engineer with a keen eye for building elegant solutions to complex problems. With over 5 years of experience in web development, I've had the opportunity to work with diverse teams on projects ranging from startups to enterprise applications.
              </p>
              <p className="text-white/70 leading-relaxed">
                My journey in tech started with a curiosity about how things work on the internet. Since then, I've developed a deep expertise in modern JavaScript frameworks, cloud infrastructure, and user experience design. I believe great software is the intersection of functionality, performance, and beautiful design.
              </p>
              <p className="text-white/70 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or exploring new technologies that could improve the developer experience.
              </p>
            </div>

            {/* Right column - Highlights */}
            <div className="space-y-4">
              <div className="glass p-6 hover:bg-white/[0.08] transition-all">
                <h3 className="mb-3 flex items-center gap-3 font-semibold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                    ⚡
                  </span>
                  Expertise
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• Full-stack web development (React, Next.js, Node.js)</li>
                  <li>• TypeScript & modern JavaScript</li>
                  <li>• Database design & optimization</li>
                  <li>• Cloud platforms (AWS, Vercel, Netlify)</li>
                </ul>
              </div>

              <div className="glass p-6 hover:bg-white/[0.08] transition-all">
                <h3 className="mb-3 flex items-center gap-3 font-semibold text-white">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400">
                    🎯
                  </span>
                  Approach
                </h3>
                <ul className="space-y-2 text-sm text-white/60">
                  <li>• User-centered design thinking</li>
                  <li>• Scalable architecture planning</li>
                  <li>• Performance optimization</li>
                  <li>• Continuous learning & improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
