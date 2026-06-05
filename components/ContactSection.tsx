'use client'

import { useEffect, useRef, useState } from 'react'
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react'

interface ContactSectionProps {
  onVisible?: (visible: boolean) => void
}

export function ContactSection({ onVisible }: ContactSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('[v0] Form submitted:', formState)
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative min-h-screen py-20 lg:ml-64 lg:py-32"
    >
      <div className="px-6 lg:px-12">
        <div className="max-full space-y-12">
          {/* Section heading */}
          <div className={`space-y-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-white lg:text-5xl">Let&apos;s Connect</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
            <p className="max-w-xl text-white/70">
              I&apos;m always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
          </div>

          {/* Contact info grid */}
          <div className={`grid gap-6 md:grid-cols-3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <a
              href="mailto:arthurjunior88741@gmail.com"
              className="glass group p-6 transition-all hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-sm text-white/60 group-hover:text-cyan-400 transition-colors">
                arthurjunior88741@gmail.com
              </p>
            </a>

            <a
              href="tel:+250787691306"
              className="glass group p-6 transition-all hover:bg-white/[0.08]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                <Phone className="text-cyan-400" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-sm text-white/60 group-hover:text-cyan-400 transition-colors">
                +250787691306
              </p>
            </a>

            <div className="glass p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                <MapPin className="text-cyan-400" size={24} />
              </div>
              <h3 className="font-semibold text-white mb-2">Location</h3>
              <p className="text-sm text-white/60">Kigali, Rwanda</p>
            </div>
          </div>

          {/* Contact form */}
          {/* <div
            className={`glass p-8 lg:p-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          >
            <h3 className="mb-8 text-2xl font-bold text-white">Send me a message</h3>

            {submitted ? (
              <div className="flex items-center justify-center rounded-lg bg-green-500/10 border border-green-500/30 py-8">
                <div className="text-center">
                  <p className="text-green-400 font-semibold">Message sent successfully!</p>
                  <p className="text-sm text-green-400/70 mt-1">I&apos;ll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      required
                      className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
                >
                  Send Message
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div> */}
        </div>
      </div>
    </section>
  )
}
