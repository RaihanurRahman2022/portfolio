"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  achievements?: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  achievements,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      <Card className="h-full group hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30">
        <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900" style={{ transform: "translateZ(50px)" }}>
          <div className="flex items-center justify-center p-6 md:p-8 h-32 md:h-40">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={200}
              height={80}
              className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-lg"
            />
          </div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
        </div>

        <CardHeader style={{ transform: "translateZ(20px)" }}>
          <CardTitle className="text-xl group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>

        <CardContent style={{ transform: "translateZ(20px)" }}>
          {achievements && (
            <ul className="text-sm text-muted-foreground mb-4 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs bg-primary/5 hover:bg-primary/10 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 mt-auto">
            {liveUrl && (
              <Button size="sm" className="flex-1 group/btn" asChild>
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Live Demo
                </a>
              </Button>
            )}
            {githubUrl && (
              <Button size="sm" variant="outline" className="flex-1 bg-transparent group/btn" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
