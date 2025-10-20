"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { AnimatedDesignation } from "@/components/animated-designation"
import { Button } from "@/components/ui/button"

export default function Home() {
  const designations = [
    "Senior Software Engineer",
    "Tech Lead",
    "Competitive Programmer",
    "Problem Solver",
    "Full Stack Developer",
    "Tech Enthusiast",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">MD Raihanur Rahman</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
                <AnimatedDesignation designations={designations} className="text-primary font-semibold" /> | Building
                Innovative Web Applications
              </p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Senior Software Engineer with 5+ years of experience at SELISE Digital Platforms, specializing in
                scalable systems, full-stack development, and leading cross-functional teams to deliver impactful
                solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <Link href="/projects">View Projects</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <Image
                  src="/profile-no-bg.png"
                  alt="MD Raihanur Rahman"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
