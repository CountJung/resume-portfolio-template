import { experiences } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-8">경력</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-muted-foreground">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
