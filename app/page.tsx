"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectCard } from "@/components/project-card"
import { PersonalProjectCard } from "@/components/personal-project-card"
import { BackToTop } from "@/components/back-to-top"
import { AnimatedDesignation } from "@/components/animated-designation"
import { CompetitiveProgrammingShowcase } from "@/components/competitive-programming-showcase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Database,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Server,
  Smartphone,
  GitBranch,
  MessageCircle,
  Github,
  Linkedin,
} from "lucide-react"
import { AnimatedSkillsSection } from "@/components/animated-skills-section"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const designations = [
    "Senior Software Engineer",
    "Tech Lead",
    "Competitive Programmer",
    "Problem Solver",
    "Full Stack Developer",
    "Tech Enthusiast",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Reset form
        setFormData({ name: "", email: "", message: "" })
        alert("Thank you for your message! I'll get back to you soon.")
      } else {
        alert("Sorry, there was an error sending your message. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Sorry, there was an error sending your message. Please try again.")
    }
  }

  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/MD_Raihanur_Rahman_Resume.pdf"
    link.download = "MD_Raihanur_Rahman_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const officeProjects = [
    {
      title: "Swiss Leaders Platform",
      description: "Scalable ERP system serving 50k+ active users with event campaign and legal insurance modules.",
      image: "/swiss-leaders-logo.png",
      technologies: ["Angular", ".NET", "MongoDB", "Redis", "RabbitMQ", "RESTful APIs"],
      achievements: [
        "Serving 50k+ active users",
        "Enhanced operational efficiency",
        "Improved system stability and user experience",
      ],
    },
    {
      title: "EwoPharma ERP",
      description: "Comprehensive ERP system for 10k+ employee pharmaceutical firm with CRM and document management.",
      image: "/ewo-logo.svg",
      technologies: ["Angular", ".NET", "MongoDB", "Redis", "RabbitMQ", "RESTful APIs"],
      achievements: [
        "Built for 10k+ employees",
        "Role-based access control implementation",
        "60% reduction in report generation time",
      ],
    },
    {
      title: "Delta Security Services",
      description: "ERP system automating legacy workflows for 25k+ employees with secure Google Drive integration.",
      image: "/delta-logo.svg",
      technologies: ["Angular", ".NET", "MongoDB", "Redis", "RabbitMQ", "RESTful APIs"],
      achievements: [
        "Automated workflows for 25k+ employees",
        "Secure role-specific Google Drive access",
        "50% reduction in manual workload",
      ],
    },
  ]

  const personalProjects = [
    {
      title: "Task Manager CLI",
      description:
        "A feature-rich command-line task manager to add, list, and remove tasks with persistent JSON storage.",
      tech: "Go, JSON, File I/O, CLI interaction",
      keyLearning: "Structs, JSON serialization, modular CLI design, handling user input",
      useCase: "Quickly manage tasks from the terminal without needing a UI",
      githubUrl: "https://github.com/RaihanurRahman2022/task-manager-cli",
    },
    {
      title: "File Analytics",
      description: "A tool to read, parse, and analyze large datasets from files to generate insights.",
      tech: "Go, File I/O, Data Parsing, String Manipulation",
      keyLearning: "Efficient file reading, buffer management, data processing algorithms",
      useCase: "Automating file-based reporting and log analysis",
      githubUrl: "https://github.com/RaihanurRahman2022/file-analytics",
    },
    {
      title: "Simple Web Server",
      description: "A minimal HTTP server built from scratch using Go's standard library, supporting basic routing.",
      tech: "Go (net/http), REST principles",
      keyLearning: "HTTP request/response handling, routing logic, server lifecycle management",
      useCase: "Serving static/dynamic content without heavy frameworks",
      githubUrl: "https://github.com/RaihanurRahman2022/simple-web-server",
    },
    {
      title: "Sheikh Enterprise Backend",
      description: "Backend API for managing enterprise operations including employee records, inventory, and sales.",
      tech: "Go, REST APIs, JSON, Data Persistence",
      keyLearning: "API structuring, separation of concerns, CRUD operations in Go",
      useCase: "Lightweight backend for small to medium business applications",
      githubUrl: "https://github.com/RaihanurRahman2022/Sheikh-Enterprise-Backend",
    },
    {
      title: "System Monitoring Tool",
      description: "A CLI-based system resource monitoring tool for tracking CPU, memory, and disk usage in real-time.",
      tech: "Go, OS/System Calls, CLI Output Formatting",
      keyLearning: "Accessing system stats via Go, concurrent data fetching",
      useCase: "Developers or sysadmins monitoring performance without heavy GUI tools",
      githubUrl: "https://github.com/RaihanurRahman2022/system-monitoring-tool",
    },
  ]

  const skills = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Angular", "Redux"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      category: "Backend",
      skills: ["C#", "ASP.NET Core", "RESTful APIs", "Node.js"],
      icon: <Server className="w-6 h-6" />,
    },
    {
      category: "Database",
      skills: ["SQL Server", "MongoDB", "Database Design"],
      icon: <Database className="w-6 h-6" />,
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "CI/CD Pipelines", "Azure", "Agile"],
      icon: <GitBranch className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
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
                  <a href="#projects">View Projects</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#contact">Contact Me</a>
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

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
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

      {/* Office Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Office Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Major enterprise projects I've worked on at SELISE Digital Platforms, showcasing scalable solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {officeProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Personal Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Side projects built with Go, showcasing my passion for clean code and efficient solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <PersonalProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <AnimatedSkillsSection />

          <div className="mt-16">
            <CompetitiveProgrammingShowcase />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <a href="mailto:raihanur.rahman.2022@gmail.com" className="hover:text-primary transition-colors">
                      raihanur.rahman.2022@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <a href="tel:+8801881898980" className="hover:text-primary transition-colors">
                      +8801881898980
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-5 h-5 text-primary mr-3" />
                    <a
                      href="https://wa.me/8801881898980"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      WhatsApp: +8801881898980
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="w-5 h-5 text-primary mr-3" />
                    <a
                      href="https://github.com/RaihanurRahman2022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      RaihanurRahman2022
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="w-5 h-5 text-primary mr-3" />
                    <a
                      href="https://linkedin.com/in/raihanur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      raihanur
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-3" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  )
}
