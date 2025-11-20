"use client"

import type React from "react"

import { motion } from "framer-motion"
import { AnimatedCounter } from "@/components/animated-counter"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code2,
  Award,
  Users,
  TrendingUp,
} from "lucide-react"

export default function About() {
  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: "+",
      label: "Active Users Served",
    },
    {
      icon: TrendingUp,
      value: 30,
      suffix: "%",
      label: "Efficiency Improvement",
    },
    {
      icon: Award,
      value: 22,
      suffix: "nd",
      label: "ACM ICPC Ranking",
    },
    {
      icon: Code2,
      value: 2500,
      suffix: "+",
      label: "Problems Solved",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating efficient, scalable solutions that make a real impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1 text-xl sm:text-2xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
