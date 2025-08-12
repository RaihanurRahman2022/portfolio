import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface PersonalProjectCardProps {
  title: string
  description: string
  tech: string
  keyLearning: string
  useCase: string
  githubUrl: string
}

export function PersonalProjectCard({
  title,
  description,
  tech,
  keyLearning,
  useCase,
  githubUrl,
}: PersonalProjectCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Code
            </a>
          </Button>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {tech.split(", ").map((technology, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {technology}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Key Learning:</h4>
          <p className="text-sm text-muted-foreground">{keyLearning}</p>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Use Case:</h4>
          <p className="text-sm text-muted-foreground">{useCase}</p>
        </div>
      </CardContent>
    </Card>
  )
}
