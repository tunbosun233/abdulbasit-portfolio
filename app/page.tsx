import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyWorkWithMe } from "@/components/why-work-with-me"
import { TechStack } from "@/components/tech-stack"
import { ManagementServices } from "@/components/management-services"
import { WorkSamples } from "@/components/work-samples"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <WhyWorkWithMe />
      <TechStack />
      <ManagementServices />
      <WorkSamples />
      <Testimonials />
      <Contact />
    </main>
  )
}
