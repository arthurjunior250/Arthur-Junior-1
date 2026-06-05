'use client'

import { useEffect, useRef, useState } from 'react'

interface Experience {
  id: string
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'MIU Creative Agency',
    role: 'IT Developer',
    period: '2022 - Present',
    description:
      'development of scalable web applications using WordPress,React and Node.js, collaborating with cross-functional teams to deliver high-quality solutions.',
    highlights: [
      'Gathered and analyzed client requirements, translating them into scalable application features and technical specifications.',
      'Developed and maintained WordPress and CMS-based websites, customizing themes and layouts to meet business and user needs.',
      'Collaborated with UI/UX designers to implement user-friendly, accessible, and responsive interfaces.',
      'Worked within Agile frameworks, consistently delivering features on time and meeting project objectives.',
      'Participated in code reviews, debugging, and performance optimization to improve overall system quality.',
      'Designed and enhanced web applications to improve usability, performance, and user engagement.',
      'Identified and resolved software issues, ensuring high availability and reliability of applications.',
      'Built responsive front-end interfaces using JavaScript, HTML, and CSS, ensuring cross-device compatibility.',
      'Integrated third-party APIs and external services to extend application functionality.',
      'Collaborated with developers and product managers to design efficient and scalable software solutions.',
      'Applied best practices in coding, testing, and documentation to ensure maintainable and clean codebases.',
      'Continuously improved technical skills across modern web technologies and development tools.',
      'Optimized websites for performance, speed, and cross-browser compatibility.',
    ],
  },
  {
    id: '2',
    company: ' ZIDIO Tech Solutions',
    role: 'Full-Stack Developer',
    period: '2024 - 2024',
    description:
      'Designed and developed web applications using React, Node.js, and MongoDB, focusing on user experience, performance, and security.',
    highlights: [
      'Developed and maintained a Feedback Collection System with real-time data submission, secure authentication, and analytics tools for feedback tracking.',
      'Designed and implemented a Real-Time Chat Application with instant messaging, group chat functionality, and end-to-end encryption for secure communication.',
      'Built and managed an Online Learning Platform with interactive course management, live virtual classes, and secure payment integration.',
      'Ensured data security through encryption, regular audits, and feedback moderation tools.',
      'Integrated multi-channel accessibility for seamless user experiences across devices.',
    ],
  },
  {
    id: '3',
    company: 'Andela Rwanda',
    role: 'Junior Developer',
    period: '2022 - 2022',
    description: 'Started my professional journey building features for early-stage product. Collaborated with senior developers to learn best practices and contribute to codebases using JavaScript, React, and Node.js.',
    highlights: [
      'Developed a personal portfolio website to showcase projects and technical skills, improving online visibility and professional presentation.',
      'Collaborated in a team to build a bus tracking simulation application, enabling users to monitor vehicle movements and locations in real time.',
      'Analyzed project requirements and translated them into functional and scalable application components.',
      'Participated in code reviews, applying feedback to improve code quality and align with industry standards.',
      'Designed, developed, tested, and documented software applications following best practices in software development.',
    ],
  },
  {
    id: '4',
    company: 'STES Group Ltd',
    role: 'Software Developer',
    period: '2021 - 2021',
    description: 'Contributed to the development of IoT-based systems, including smart irrigation and home automation solutions, focusing on system reliability and performance.',
    highlights: [
      'Contributed to the development of IoT-based systems, including smart irrigation and home automation solutions, focusing on system reliability and performance.',
      'Collaborated with cross-functional teams to implement code improvements, debug issues, and enhance system functionality.',
      'Applied structured development practices and tools to reduce errors and improve code quality.',
      'Supported system integration by ensuring smooth communication between hardware components and software applications.',
    ],
  },
]

interface ExperienceTimelineProps {
  onVisible?: (visible: boolean) => void
}

export function ExperienceTimeline({ onVisible }: ExperienceTimelineProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeExp, setActiveExp] = useState(experiences[0].id)

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
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-20 lg:ml-64 lg:py-32"
    >
      <div className="px-6 lg:px-12">
        <div className="max-full space-y-12">
          {/* Section heading */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">Experience</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
          </div>

          {/* Timeline */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative cursor-pointer transition-all"
                onClick={() => setActiveExp(exp.id)}
              >
                {/* Timeline dot and line */}
                <div className="absolute -left-6 top-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan-400 bg-white/[0.02] hover:bg-white/[0.1]">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                </div>

                {/* Timeline line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-0 top-16 h-12 w-px bg-gradient-to-b from-cyan-400 to-transparent" />
                )}

                {/* Content card */}
                <div className={`glass ml-12 p-6 transition-all ${activeExp === exp.id ? 'bg-white/[0.08] border-cyan-400/50' : 'hover:bg-white/[0.05]'}`}>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-sm text-cyan-400">{exp.company}</p>
                      <p className="text-xs text-white/50">{exp.period}</p>
                    </div>

                    <p className="text-white/70 leading-relaxed">{exp.description}</p>

                    {activeExp === exp.id && (
                      <ul className="space-y-2 pt-4 border-t border-white/10">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex gap-3 text-sm text-white/60">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
