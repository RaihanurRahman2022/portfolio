import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

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
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="flex items-center justify-center p-6 md:p-8 h-32 md:h-40">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={200}
            height={80}
            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>

      <CardContent>
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
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-2">
          {liveUrl && (
            <Button size="sm" className="flex-1">
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
