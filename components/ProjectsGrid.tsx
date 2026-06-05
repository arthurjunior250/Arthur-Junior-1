'use client'

import { useEffect, useRef, useState } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  link?: string
  github?: string
  image?: string
  color: 'cyan' | 'blue' | 'purple'
}

const projects: Project[] = [
  {
    id: '1',
    title: 'AI Content Generator',
    description: 'Smart content generation platform using modern AI models',
    longDescription:
      'A full-stack SaaS application that leverages cutting-edge AI models to generate high-quality content for various use cases. Features real-time generation, customizable templates, and batch processing capabilities.',
    tags: ['Next.js', 'TypeScript', 'OpenAI API', 'Tailwind CSS', 'Prisma', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com',
    color: 'cyan',
  },
  {
    id: '2',
    title: 'Real-Time Analytics Dashboard',
    description: 'Live data visualization and monitoring platform',
    longDescription:
      'Enterprise-grade analytics dashboard with real-time data streaming, custom visualization widgets, and predictive analytics. Processes 100K+ events per second with sub-100ms latency.',
    tags: ['React', 'WebSockets', 'Python', 'PostgreSQL', 'D3.js', 'AWS'],
    link: 'https://example.com',
    github: 'https://github.com',
    color: 'blue',
  },
  {
    id: '3',
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with checkout and inventory',
    longDescription:
      'Complete e-commerce solution with product catalog, shopping cart, payment processing, order management, and inventory tracking. Integrated with multiple payment gateways and shipping providers.',
    tags: ['Next.js', 'Stripe', 'MongoDB', 'Node.js', 'Redis', 'Docker'],
    link: 'https://example.com',
    github: 'https://github.com',
    color: 'cyan',
  },
  {
    id: '4',
    title: 'Social Collaboration App',
    description: 'Real-time collaboration tool for remote teams',
    longDescription:
      'Features real-time collaborative editing, video conferencing integration, task management, and communication tools. Supports 10,000+ concurrent users with seamless performance.',
    tags: ['React', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Docker'],
    link: 'https://example.com',
    github: 'https://github.com',
    color: 'blue',
  },
  {
    id: '5',
    title: 'Personal Finance Tracker',
    description: 'Smart expense tracking and financial planning app',
    longDescription:
      'Comprehensive personal finance management tool with budgeting, expense categorization, investment tracking, and AI-powered financial insights and recommendations.',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'Supabase', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com',
    color: 'cyan',
  },
  {
    id: '6',
    title: 'API Development Kit',
    description: 'Open-source toolkit for building scalable APIs',
    longDescription:
      'Comprehensive SDK for rapid API development with built-in authentication, rate limiting, validation, and documentation generation. Used by 500+ developers.',
    tags: ['TypeScript', 'Node.js', 'Jest', 'GraphQL', 'OpenAPI', 'NPM'],
    link: 'https://example.com',
    github: 'https://github.com',
    color: 'blue',
  },
]

const colorClasses = {
  cyan: 'from-cyan-500/20 to-cyan-500/0 hover:from-cyan-500/30',
  blue: 'from-blue-500/20 to-blue-500/0 hover:from-blue-500/30',
  purple: 'from-purple-500/20 to-purple-500/0 hover:from-purple-500/30',
}

interface ProjectsGridProps {
  onVisible?: (visible: boolean) => void
}

export function ProjectsGrid({ onVisible }: ProjectsGridProps) {
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
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-20 lg:ml-64 lg:py-32"
    >
      <div className="px-6 lg:px-12">
        <div className="max-w-5xl space-y-12">
          {/* Section heading */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">Featured Projects</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
          </div>

          {/* Projects grid */}
          <div className={`grid gap-6 lg:grid-cols-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl backdrop-saturate-150 transition-all hover:border-white/20 hover:bg-white/[0.05] ${
                  colorClasses[project.color]
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s',
                }}
              >
                {/* Background gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Content */}
                <div className="relative space-y-4 p-8">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/70">{project.description}</p>
                  </div>

                  {/* Long description */}
                  <p className="text-sm text-white/60 leading-relaxed">{project.longDescription}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 text-xs font-medium text-white/70 group-hover:text-cyan-400 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 border-t border-white/10 pt-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-2 text-sm font-medium text-white/70 transition-all hover:text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30"
                      >
                        <span>View Project</span>
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/70 transition-all hover:text-cyan-400 hover:bg-white/[0.1]"
                      >
                        <span>Code</span>
                        <GitBranch size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <p className="text-white/60 mb-4">Interested in seeing more?</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-6 py-3 font-medium text-white transition-all hover:bg-white/[0.1] hover:border-white/40"
            >
              Explore on GitHub
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
