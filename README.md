# Resume & Portfolio Template

이 프로젝트는 Next.js, TypeScript, Tailwind CSS를 사용하여 구축된 현대적이고 반응형인 이력서 및 포트폴리오 웹사이트 템플릿입니다.

## ✨ 주요 기능

- **모던한 디자인**: 깔끔하고 전문적인 UI.
- **반응형 레이아웃**: 모바일, 태블릿, 데스크탑 등 모든 기기에서 완벽하게 작동.
- **다크 모드 지원**: `next-themes`를 이용한 라이트/다크 모드 전환.
- **쉬운 커스터마이징**: `lib/data.ts` 파일 하나로 콘텐츠 관리.
- **SEO 최적화**: Next.js의 강력한 기능을 활용한 검색 엔진 최적화.
- **컴포넌트 기반**: 재사용 가능한 UI 컴포넌트 (Radix UI 기반).

## 🛠 기술 스택

- **Framework**: [Next.js 16](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) (via shadcn/ui pattern)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (예정/가능)

## 🚀 시작하기

### 1. 저장소 복제 (Clone)

```bash
git clone <repository-url>
cd resume-portfolio-template
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 📂 프로젝트 구조

```
├── app/                # Next.js App Router 페이지 및 레이아웃
├── components/         # 리액트 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트 (버튼, 카드 등)
│   └── ...             # 섹션별 컴포넌트 (Hero, About 등)
├── lib/                # 유틸리티 함수 및 데이터
│   ├── data.ts         # 포트폴리오 데이터 (이곳을 수정하세요!)
│   └── utils.ts        # 유틸리티 함수
├── public/             # 정적 파일 (이미지 등)
└── styles/             # 전역 스타일
```

## 📝 커스터마이징 방법

가장 쉬운 방법은 `lib/data.ts` 파일을 수정하는 것입니다. 이 파일에는 이름, 직함, 소개, 경력, 프로젝트, 기술 스택 등 웹사이트에 표시되는 모든 데이터가 포함되어 있습니다.

1. `lib/data.ts`를 엽니다.
2. `personalInfo`, `experiences`, `projects`, `skills` 등의 객체를 본인의 정보로 수정합니다.
3. 변경 사항이 즉시 반영되는지 확인합니다.

## 🚢 배포 (Deployment)

이 프로젝트는 [Vercel](https://vercel.com/)에 배포하는 것이 가장 쉽습니다.

1. GitHub에 코드를 푸시합니다.
2. Vercel에 로그인하고 새 프로젝트를 추가합니다.
3. GitHub 저장소를 연결하고 배포 버튼을 누릅니다.

## 📄 라이선스

MIT License
