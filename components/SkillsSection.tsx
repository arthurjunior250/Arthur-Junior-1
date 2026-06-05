'use client'

import { useEffect, useRef, useState } from 'react'

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'HTML/CSS'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    name: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'AWS', 'GitHub Actions', 'Vercel', 'Figma'],
  },
  {
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Team Leadership', 'Communication', 'Mentoring', 'Agile', 'Technical Writing'],
  },
]

interface SkillsSectionProps {
  onVisible?: (visible: boolean) => void
}

export function SkillsSection({ onVisible }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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
      id="skills"
      ref={sectionRef}
      className="relative min-h-screen py-20 lg:ml-64 lg:py-32"
    >
      <div className="px-6 lg:px-12">
        <div className="max-full space-y-12">
          {/* Section heading */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">Skills & Tools</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
          </div>

          {/* Skills grid */}
          <div className={`grid gap-8 lg:grid-cols-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className="glass p-8 transition-all duration-300 hover:bg-white/[0.08]"
                style={{
                  animationDelay: isVisible ? `${categoryIndex * 0.1}s` : '0s',
                }}
              >
                <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <button
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${hoveredSkill === skill
                          ? 'border-cyan-400 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-500/20'
                          : 'border-white/20 bg-white/[0.05] text-white/70 hover:border-white/40'
                        }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className={`glass p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="mb-4 font-semibold text-white">Always Learning</h3>
            <p className="text-white/70 leading-relaxed">
              I'm passionate about staying at the forefront of web development. Currently exploring: AI/ML integration in web apps, Web3 technologies, and advanced performance optimization techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
