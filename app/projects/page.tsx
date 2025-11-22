"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { PersonalProjectCard } from "@/components/personal-project-card"

import { ArchitectureDiagram } from "@/components/architecture-diagram"

export default function Projects() {
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
      title: "PersonalVault File Server",
      description: "A complete file management system that turns your PC into a personal cloud server with REST API, authentication, and concurrent file processing.",
      tech: "Go, Gin Framework, GORM, JWT, REST API, Concurrent Processing",
      keyLearning: "Go concurrency (goroutines), JWT authentication, GORM database operations, middleware patterns, file system security, Windows API integration",
      useCase: "Personal file server for accessing files from anywhere with secure authentication and efficient concurrent uploads",
      githubUrl: "https://github.com/RaihanurRahman2022/PersonalVault",
      architecture: <ArchitectureDiagram />,
    },
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen">
      {/* Office Projects Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Office Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Major enterprise projects I've worked on at SELISE Digital Platforms, showcasing scalable solutions
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {officeProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Personal Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Side projects built with Go, showcasing my passion for clean code and efficient solutions
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {personalProjects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <PersonalProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
