# 포트폴리오 구현 및 커스터마이징 가이드

이 문서는 제공된 템플릿을 사용하여 나만의 포트폴리오 사이트를 완성하기 위한 단계별 가이드입니다.

## 1단계: 환경 설정 및 설치

가장 먼저 프로젝트를 로컬 환경에서 실행할 수 있도록 준비합니다.

1.  **Node.js 설치 확인**: 터미널에서 `node -v`를 입력하여 Node.js가 설치되어 있는지 확인합니다. (v18 이상 권장)
2.  **패키지 설치**:
    ```bash
    npm install
    ```
3.  **개발 서버 실행**:
    ```bash
    npm run dev
    ```
    브라우저 주소창에 `http://localhost:3000`을 입력하여 사이트가 정상적으로 뜨는지 확인합니다.

## 2단계: 기본 정보 수정 (`lib/data.ts`)

사이트의 핵심 콘텐츠는 `lib/data.ts` 파일에 모여 있습니다. 코드를 깊게 건드리지 않고도 내용만 바꿔서 내 사이트로 만들 수 있습니다.

1.  `lib/data.ts` 파일을 엽니다.
2.  **`personalInfo` 수정**:
    *   `name`: 본인 이름 (예: "홍길동")
    *   `title`: 직함 (예: "Full Stack Developer")
    *   `description`: 간단한 자기소개. Hero 섹션에 표시됩니다.
    *   `email`: 연락처 이메일.
    *   `socials`: GitHub, LinkedIn 등 소셜 링크 URL을 본인 것으로 변경합니다.
3.  **`experiences` (경력) 수정**:
    *   각 객체는 하나의 경력을 나타냅니다.
    *   `company`, `role`, `period`, `description`, `skills`를 본인의 경력에 맞게 수정하거나 추가/삭제하세요.
4.  **`projects` (프로젝트) 수정** (파일에 존재한다면):
    *   프로젝트 이름, 설명, 사용 기술, 데모 링크, 깃허브 링크 등을 수정합니다.
    *   이미지가 필요한 경우 `public` 폴더에 이미지를 넣고 경로를 지정하세요.
5.  **`skills` (기술) 수정**:
    *   본인이 사용할 수 있는 기술 스택을 카테고리별로 정리하거나 나열하세요.

## 3단계: 컴포넌트 및 레이아웃 조정

데이터 수정만으로 부족하다면 컴포넌트를 직접 수정할 수 있습니다.

*   **섹션 순서 변경**: `app/page.tsx` 파일에서 컴포넌트의 배치 순서를 변경하면 사이트의 섹션 순서가 바뀝니다.
    ```tsx
    // 예: Skills를 Experience보다 먼저 보여주고 싶을 때
    <HeroSection />
    <AboutSection />
    <SkillsSection /> {/* 위치 변경 */}
    <ExperienceSection />
    ...
    ```
*   **헤더/푸터 수정**:
    *   `components/site-header.tsx`: 로고, 네비게이션 메뉴 항목 등을 수정합니다.
    *   `components/site-footer.tsx`: 저작권 문구, 추가 링크 등을 수정합니다.
*   **UI 스타일 변경**:
    *   `app/globals.css`: 전역 스타일이나 Tailwind 커스텀 설정을 수정합니다.
    *   각 컴포넌트 파일(`components/*.tsx`) 내의 `className`을 수정하여 Tailwind 클래스로 스타일을 조정합니다.

## 4단계: 이미지 및 에셋 관리

*   **프로필 사진**: `public` 폴더에 본인의 프로필 사진을 넣으세요 (예: `me.jpg`).
*   **프로젝트 이미지**: 프로젝트 스크린샷 등을 `public/projects/` 폴더 등을 만들어 정리하고 `lib/data.ts`에서 해당 경로를 참조하도록 합니다.
*   **파비콘(Favicon)**: `app/favicon.ico` 또는 `app/icon.png`를 교체하여 브라우저 탭에 표시되는 아이콘을 변경합니다.

## 5단계: SEO 및 메타데이터 설정

검색 엔진 최적화를 위해 메타데이터를 설정합니다.

1.  `app/layout.tsx` 또는 `app/page.tsx`를 엽니다.
2.  `metadata` 객체를 찾아 수정합니다.
    ```typescript
    export const metadata: Metadata = {
      title: "홍길동 | 프론트엔드 개발자",
      description: "프론트엔드 개발자 홍길동의 포트폴리오입니다.",
      // ... 기타 설정
    };
    ```

## 6단계: 배포 (Deployment)

완성된 포트폴리오를 인터넷에 공개합니다.

1.  **GitHub 저장소 생성**: 코드를 GitHub에 올립니다.
2.  **Vercel 배포**:
    *   Vercel에 가입하고 GitHub 계정으로 로그인합니다.
    *   "Add New..." -> "Project"를 클릭합니다.
    *   방금 올린 GitHub 저장소를 선택하고 "Import"를 누릅니다.
    *   설정 변경 없이 "Deploy"를 클릭하면 자동으로 빌드 및 배포가 진행됩니다.
3.  **도메인 연결** (선택 사항): 개인 도메인이 있다면 Vercel 설정에서 연결할 수 있습니다.

## 팁 & 주의사항

*   **아이콘**: `lucide-react` 라이브러리를 사용 중입니다. [Lucide 아이콘 목록](https://lucide.dev/icons)에서 원하는 아이콘을 찾아 `import` 하여 사용할 수 있습니다.
*   **다크 모드**: 우측 상단의 테마 토글 버튼이 잘 작동하는지, 다크 모드에서 텍스트가 잘 보이는지 확인하세요.
*   **모바일 확인**: 크롬 개발자 도구(F12)의 모바일 뷰를 통해 스마트폰에서도 레이아웃이 깨지지 않는지 수시로 확인하세요.
