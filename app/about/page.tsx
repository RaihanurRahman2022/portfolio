"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Award,
  Users,
  TrendingUp,
} from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, scalable solutions that make a real impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                I'm a dedicated Senior Software Engineer with over 5 years of experience at SELISE Digital Platforms,
                where I've led key projects and specialized in full-stack development. My expertise spans from building
                scalable ERP systems serving 50k+ users to leading teams of 7-8 developers.
              </p>
              <p className="text-lg mb-6">
                I have a strong background in competitive programming, ranking 22nd in ACM ICPC Dhaka Regional among
                190+ teams, with a Codeforces rating of 1686. I've solved 2500+ algorithmic problems and participated in
                350+ contests.
              </p>
              <p className="text-lg">
                I graduated with a Bachelor's in Computer Science and Engineering from Daffodil International University
                with a 3.97 GPA, and I'm passionate about continuous learning and delivering high-quality solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">50k+</h3>
                  <p className="text-sm text-muted-foreground">Active Users Served</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">30%</h3>
                  <p className="text-sm text-muted-foreground">Efficiency Improvement</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">22nd</h3>
                  <p className="text-sm text-muted-foreground">ACM ICPC Ranking</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Code2 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold mb-1">2500+</h3>
                  <p className="text-sm text-muted-foreground">Problems Solved</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
