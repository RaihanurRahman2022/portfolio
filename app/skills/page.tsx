"use client"

import type React from "react"

import { AnimatedSkillsSection } from "@/components/animated-skills-section"
import { CompetitiveProgrammingShowcase } from "@/components/competitive-programming-showcase"
import { TechJourneyTimeline } from "@/components/tech-journey-timeline"

export default function Skills() {
  return (
    <div className="min-h-screen">
      {/* Skills Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <AnimatedSkillsSection />

          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Tech Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From competitive programming to enterprise architecture and beyond
              </p>
            </div>
            <TechJourneyTimeline />
          </div>

          <div className="mt-24">
            <CompetitiveProgrammingShowcase />
          </div>
        </div>
      </section>
    </div>
  )
}
