import { projects } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-8">프로젝트</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden h-full">
            <div className="relative h-48 w-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                <Link href={project.links.github} target="_blank">
                  <Github className="mr-2 h-4 w-4" /> 코드
                </Link>
              </Button>
              <Button asChild size="sm" className="flex-1">
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" /> 데모
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
