import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-3xl font-bold tracking-tight mb-8">기술 스택</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="space-y-4">
            <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <Badge key={skill} variant="outline" className="text-base py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
