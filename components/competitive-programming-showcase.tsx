import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Code, TrendingUp } from "lucide-react"

export function CompetitiveProgrammingShowcase() {
  const achievements = [
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "ACM ICPC Regional",
      value: "22nd Place",
      description: "Among 190+ teams in Dhaka Regional 2019",
      highlight: true,
    },
    {
      icon: <Target className="w-8 h-8 text-blue-500" />,
      title: "Codeforces Rating",
      value: "1686",
      description: "Peak rating with handle: Raihanur_R",
      highlight: true,
    },
    {
      icon: <Code className="w-8 h-8 text-green-500" />,
      title: "Problems Solved",
      value: "2500+",
      description: "Across various online judges",
      highlight: false,
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: "Contests Participated",
      value: "350+",
      description: "Online and onsite competitions",
      highlight: false,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Competitive Programming Excellence</h3>
        <p className="text-muted-foreground">
          Proven problem-solving skills through competitive programming achievements
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className={`${achievement.highlight ? "ring-2 ring-primary/20 bg-primary/5" : ""} hover:shadow-lg transition-all duration-300`}
          >
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-4">{achievement.icon}</div>
              <h4 className="font-semibold text-lg mb-1">{achievement.title}</h4>
              <div className="text-2xl font-bold text-primary mb-2">{achievement.value}</div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="flex flex-wrap justify-center gap-2">
          <Badge variant="outline" className="bg-primary/10">
            Data Structures & Algorithms
          </Badge>
          <Badge variant="outline" className="bg-primary/10">
            Dynamic Programming
          </Badge>
          <Badge variant="outline" className="bg-primary/10">
            Graph Theory
          </Badge>
          <Badge variant="outline" className="bg-primary/10">
            Mathematical Problem Solving
          </Badge>
        </div>
      </div>
    </div>
  )
}
