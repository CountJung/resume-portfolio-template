import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-10 md:pt-20 pb-10">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              안녕하세요, <br />
              <span className="text-primary">{personalInfo.name}</span>입니다.
            </h1>
            <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
          </div>
          <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto md:mx-0">{personalInfo.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Button asChild size="lg">
              <Link href="#contact">
                연락하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              이력서 다운로드 <Download className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-4 justify-center md:justify-start pt-4">
            {personalInfo.socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-muted">
            <Image src="/diverse-person-portrait.png" alt="Profile" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  )
}
