import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export const personalInfo = {
  name: "김개발",
  title: "프론트엔드 엔지니어",
  description:
    "사용자 경험을 최우선으로 생각하며, 확장 가능한 웹 애플리케이션을 구축하는 것을 좋아합니다. React, Next.js, TypeScript 생태계에 깊은 관심을 가지고 있습니다.",
  email: "contact@example.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:contact@example.com",
      icon: Mail,
    },
  ],
}

export const experiences = [
  {
    company: "테크 스타트업 A",
    role: "Senior Frontend Developer",
    period: "2022.03 - 현재",
    description:
      "핵심 제품의 프론트엔드 아키텍처를 설계하고 리드했습니다. 레거시 코드를 Next.js로 마이그레이션하여 성능을 40% 개선했습니다.",
    skills: ["React", "Next.js", "TypeScript", "GraphQL"],
  },
  {
    company: "웹 에이전시 B",
    role: "Frontend Developer",
    period: "2020.01 - 2022.02",
    description:
      "다양한 클라이언트의 반응형 웹사이트를 제작했습니다. 디자인 시스템을 구축하여 개발 생산성을 높였습니다.",
    skills: ["Vue.js", "SCSS", "JavaScript"],
  },
]

export const projects = [
  {
    title: "이커머스 대시보드",
    description: "판매 데이터를 시각화하고 재고를 관리할 수 있는 관리자 대시보드입니다.",
    image: "/general-data-dashboard.png",
    tags: ["Next.js", "Tailwind CSS", "Recharts", "Supabase"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "여행 일정 플래너",
    description: "AI를 활용하여 개인화된 여행 일정을 추천해주는 서비스입니다.",
    image: "/travel-app.jpg",
    tags: ["React", "OpenAI API", "Zustand", "Framer Motion"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    title: "실시간 채팅 앱",
    description: "Socket.io를 활용한 그룹 채팅 및 파일 공유 기능을 제공하는 웹 앱입니다.",
    image: "/chat-app.jpg",
    tags: ["Node.js", "Socket.io", "React", "Redis"],
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
]

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Supabase", "Prisma"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
]
