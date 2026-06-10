import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ExperienceTimeline } from '@/components/ExperienceTimeline'
import { SkillsSection } from '@/components/SkillsSection'
import { ProjectsGrid } from '@/components/ProjectsGrid'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground">
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <ProjectsGrid />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
