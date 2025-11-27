import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 pb-20">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">연락하기</h2>
            <p className="text-muted-foreground text-lg">
              새로운 프로젝트나 협업 기회에 대해 이야기 나누고 싶습니다. 언제든 편하게 연락주세요.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">이메일</p>
                <p className="text-muted-foreground">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">전화번호</p>
                <p className="text-muted-foreground">010-1234-5678</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">위치</p>
                <p className="text-muted-foreground">서울, 대한민국</p>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>메시지 보내기</CardTitle>
            <CardDescription>아래 양식을 작성해주시면 확인 후 답변 드리겠습니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    이름
                  </label>
                  <Input id="name" placeholder="홍길동" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    이메일
                  </label>
                  <Input id="email" placeholder="hello@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  제목
                </label>
                <Input id="subject" placeholder="프로젝트 의뢰 건" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  내용
                </label>
                <Textarea id="message" placeholder="내용을 입력해주세요." className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                보내기
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
