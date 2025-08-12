import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface SkillCardProps {
  category: string
  skills: string[]
  icon: React.ReactNode
}

export function SkillCard({ category, skills, icon }: SkillCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-primary mr-3">{icon}</div>
          <h3 className="text-lg font-semibold">{category}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
