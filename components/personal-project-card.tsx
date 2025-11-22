import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, Network } from "lucide-react"
import type React from "react"

interface PersonalProjectCardProps {
  title: string
  description: string
  tech: string
  keyLearning: string
  useCase: string
  githubUrl: string
  architecture?: React.ReactNode
}

export function PersonalProjectCard({
  title,
  description,
  tech,
  keyLearning,
  useCase,
  githubUrl,
  architecture,
}: PersonalProjectCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 sm:gap-3 lg:gap-4">
          <CardTitle className="text-lg sm:text-xl lg:text-xl pr-2 flex-1 min-w-0">{title}</CardTitle>
          <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
            {architecture && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="sm" variant="outline" className="cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 min-w-[60px] sm:min-w-[70px] lg:min-w-[75px] px-2 sm:px-3">
                    <Network className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm whitespace-nowrap">Arch</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="architecture-dialog max-h-[90vh] bg-card border-border p-0 flex flex-col">
                  <DialogHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b">
                    <DialogTitle className="text-base sm:text-lg">{title} - System Architecture</DialogTitle>
                  </DialogHeader>
                  <div className="overflow-y-auto overflow-x-auto px-2 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4 flex-1 scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent">
                    {architecture}
                  </div>
                </DialogContent>
              </Dialog>
            )}
            <Button size="sm" variant="outline" asChild className="flex items-center justify-center gap-1.5 sm:gap-2 min-w-[60px] sm:min-w-[70px] lg:min-w-[75px] px-2 sm:px-3">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2">
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-4 lg:h-4 flex-shrink-0" />
                <span className="text-xs sm:text-sm whitespace-nowrap">Code</span>
              </a>
            </Button>
          </div>
        </div>
        <CardDescription className="text-sm sm:text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex-grow">
        <div>
          <h4 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tech.split(", ").map((technology, index) => (
              <Badge key={index} variant="secondary" className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5">
                {technology}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Key Learning:</h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{keyLearning}</p>
        </div>

        <div>
          <h4 className="font-semibold text-xs sm:text-sm mb-1.5 sm:mb-2">Use Case:</h4>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{useCase}</p>
        </div>

      </CardContent>
    </Card>
  )
}
