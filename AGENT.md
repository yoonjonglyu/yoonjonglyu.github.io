# AGENT.md - 프로젝트 가이드 및 컨텍스트 문서

이 문서는 AI Agent(Antigravity 및 각종 어시스턴트)와 개발자가 프로젝트를 효율적으로 이해하고, 일관된 아키텍처 원칙에 따라 기능을 유지보수 및 확장할 수 있도록 작성된 프로젝트 종합 가이드입니다.

---

## 1. 프로젝트 개요 (Overview)

- **프로젝트명**: `yoonjonglyu.github.io` (ISA Archive)
- **목적**: 프론트엔드 엔지니어 ISA(Yoonjong Ryu)의 개발 작업(Work), 오픈소스 유틸리티(Package), 개인/연구 프로젝트(Project), 그리고 커리어 이력(Resume)을 체계적으로 아카이빙하는 정적 웹 플랫폼.
- **배포 주소**: [https://yoonjonglyu.github.io/](https://yoonjonglyu.github.io/)
- **Storybook**: [Chromatic 배포 링크](https://64ee73e8852cf4ea07ac0a39-kfakumochy.chromatic.com/)
- **호스팅 환경**: GitHub Pages (`gh-pages` 브랜치)
- **아키텍처 모델**: Next.js App Router 기반의 완전 정적 사이트 (Static Site Generation / `output: 'export'`)

---

## 2. 주요 기술 스택 (Tech Stack)

| 분류 | 기술 / 라이브러리 | 버전 / 비고 |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.0.10` (`output: 'export'`, Webpack 빌드) |
| **Runtime / Core** | React / ReactDOM | `19.2.3` |
| **Language** | TypeScript | `^5.9.3` |
| **Content Engine** | Contentlayer2 (`next-contentlayer2`, `contentlayer2`) | `^0.5.8` (MDX 문서 파싱 및 타입 자동 생성) |
| **Styling** | styled-components, normalize.css | `^6.1.19` (SSR 레지스트리 적용) |
| **State Management** | Jotai | `^2.16.0` |
| **PWA / Service Worker** | Serwist (`@serwist/next`, `@serwist/sw`, `@serwist/precaching`) | `^9.5.0` (`app/sw-root.ts` -> `public/sw.js`) |
| **UI Documentation** | Storybook, Chromatic | `^10.1.10` (`@storybook/nextjs-vite`) |
| **Testing** | Vitest, Playwright Browser | Vitest `^4.0.16` (Storybook 컴포넌트 인터랙션 테스트) |
| **Package Manager** | Yarn (v1) | `yarn.lock` 관리 |

---

## 3. 디렉터리 구조 및 역할 (Directory Structure)

```txt
yoonjonglyu.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 자동 빌드 & 배포 워크플로우
├── .storybook/                 # Storybook 설정 및 Vitest 테스트 셋업
├── app/                        # Next.js App Router (페이지 및 레이아웃)
│   ├── archive/                # 아카이브 (package, project) 목록 및 상세 페이지
│   ├── resume/                 # 이력서 페이지
│   ├── work/                   # 주요 작업(Work) 목록 및 상세 페이지 ([slug])
│   ├── layout.tsx              # 최상위 루트 레이아웃 (Providers, PwaRegister, SEO)
│   ├── page.tsx                # 메인 홈 페이지 (HomeContents 렌더링)
│   ├── manifest.ts             # PWA Web Manifest 설정
│   └── sw-root.ts              # Serwist Service Worker 엔트리포인트
├── components/                 # Atomic Design 기반 공통 UI 컴포넌트
│   ├── atoms/                  # Card, Img 등 원자 단위 컴포넌트
│   ├── molecules/              # ContentsCard, PanelCard, PostCard, ReadItem 등 복합 분자 컴포넌트
│   ├── organisms/              # WCarousel 등 유기체 컴포넌트
│   ├── layouts/                # BasicLayout (Header, Nav, Footer 등 프레임 레이아웃)
│   ├── mdx.tsx                 # MDX 렌더링용 커스텀 컴포넌트 매핑
│   └── PwaRegister.tsx         # PWA Service Worker 브라우저 등록 컴포넌트
├── content/                    # Contentlayer MDX 문서 원본 (다국어 분기 구조)
│   ├── en/                     # 영어 (기본 언어 / Fallback)
│   │   ├── packages/           # npm 패키지 및 유틸 라이브러리 문서
│   │   ├── projects/           # 개인 및 협업 프로젝트 문서
│   │   └── works/              # 커리어 주요 프로덕트 작업 문서
│   ├── ko/                     # 한국어 번역 문서
│   ├── ja/                     # 일본어 번역 문서
│   └── zh-TW/                  # 번체 중국어 번역 문서
├── features/                   # 도메인/화면별 비즈니스 로직 및 전용 뷰 컴포넌트
│   ├── archive/                # 아카이브 관련 뷰
│   ├── home/                   # 홈 화면 섹션 (HomeBanner, HomeShelf, HomeSide 등)
│   ├── package/                # 패키지 전용 뷰
│   ├── project/                # 프로젝트 전용 뷰
│   ├── resume/                 # 이력서 전용 뷰 (Header, Focus, Skill, Work, Footer)
│   └── work/                   # Work 목록 및 아티클 상세 뷰
├── hooks/                      # useTranslation 등 전역 훅
├── lib/                        # 공통 라이브러리 및 헬퍼 함수
│   ├── content.ts              # 다국어 문서 필터링 및 fallback 처리 헬퍼
│   ├── i18n/                   # 다국어(EN/KO/JA/ZH-TW) 사전 및 타입 정의
│   └── seo/                    # generateMeta 등 SEO 메타 태그 생성기
├── provider/                   # Context Provider 모음
│   └── style/                  # StyledComponentsRegistry (SSR 스타일 주입)
├── public/                     # 정적 에셋 (파비콘, PWA 아이콘, 이미지 등)
├── store/                      # Jotai 전역 상태 관리 모듈 (locale atom 등)
├── contentlayer.config.ts      # Contentlayer 스키마 (Work, Package, Project) 정의
├── next.config.js              # Next.js 설정 (Serwist, Contentlayer, styled-components)
├── tsconfig.json               # TypeScript 컴파일러 및 Path Alias 설정
└── vitest.config.ts            # Vitest 및 Storybook 테스트 설정
```

---

## 4. 핵심 아키텍처 및 설계 원칙 (Core Architecture)

### 4.1 Content-Driven Multi-locale Architecture (Contentlayer2 + lib/content.ts)
- 모든 작업물(`Work`, `Package`, `Project`)은 `content/{locale}/` 디렉터리의 MDX 파일로 작성 및 관리됩니다.
- 지원 로케일: `en`(기본값), `ko`, `ja`, `zh-TW`.
- `contentlayer.config.ts`에서 각 MDX 경로로부터 `locale`과 순수 `slug`를 자동 계산(computed fields)합니다.
- `lib/content.ts`를 통해 로케일별 문서 조회 및 Fallback 파이프라인을 일원화했습니다:
  - `getLocalizedDocs(docs, locale)`: 현재 로케일 문서 목록을 반환하며, 번역본이 없는 slug는 기본 `en` 문서로 자동 fallback 채움.
  - `getLocalizedDocBySlug(docs, slug, locale)`: 지정된 slug와 locale에 맞는 문서를 조회하고 없을 시 `en` 반환.
  - `getUniqueSlugs(docs)`: 정적 빌드(`generateStaticParams`) 시 언어 간 중복 슬러그가 발생하지 않도록 고유 slug 목록 반환.
  - `getDocTranslations(docs, slug)`: 상세 페이지에서 클라이언트 측 실시간 언어 전환을 지원하기 위해 모든 언어의 제목/본문 사전을 번들링하여 전달.
- 정적 배포(`output: 'export'`) 특성에 맞춰 URL 구조(`/[slug]`)를 파괴하지 않고도, 상단 언어 선택기 변경 시 즉각 클라이언트 상태(`useTranslation`)와 연동되어 상세 문서와 목록이 리로드 없이 실시간 번역 전환됩니다.

### 4.2 Static Export (`output: 'export'`)
- 정적 웹 호스팅(GitHub Pages)을 지원하기 위해 `next.config.js`에 `output: 'export'`가 지정되어 있습니다.
- 동적 서버 런타임(Node.js API 라우트, SSR 동적 렌더링)을 사용할 수 없으며, 모든 라우트는 빌드 타임에 정적 HTML로 생성되어야 합니다 (`generateStaticParams` 활용).
- 이미지 최적화는 `images: { unoptimized: true }`로 처리됩니다.

### 4.3 스타일링 & 렌더링 (styled-components & Dark Theme)
- styled-components v6를 사용하며, Next.js App Router에서의 스타일 깜빡임(FOUC) 방지를 위해 `provider/style/GlobalCSS.tsx`에서 `StyledComponentsRegistry`를 통해 초기 스타일을 주입합니다.
- 다크 톤 테마(`#0b0e14`)를 기본으로 하며, HTML 바디 레벨에서 배경색을 지정해 초기 로딩 깜빡임을 방지합니다.

### 4.4 PWA & 오프라인 캐싱 (Serwist)
- `@serwist/next`를 통해 서비스 워커(`app/sw-root.ts` → `public/sw.js`)를 빌드하고, `components/PwaRegister.tsx`를 통해 프로덕션 브라우저 환경에서 서비스 워커를 등록합니다.
- Serwist는 현재 Turbopack과 호환되지 않으므로, Next.js 빌드 시 Webpack 모드(`next build --webpack`)를 강제합니다.

### 4.5 Atomic Design & Storybook 주도 개발
- 컴포넌트는 `atoms`, `molecules`, `organisms`, `layouts` 계층으로 엄격히 분리되어 있습니다.
- UI 컴포넌트마다 `.stories.tsx`가 함께 존재하며, Storybook 10과 Vitest-Playwright를 통한 인터랙션 테스트가 연동되어 있습니다.

### 4.6 다국어 지원 (i18n 시스템)
- **기본 언어**: English (`en`)
- **지원 언어**: English (`en`), 한국어 (`ko`), 日本語 (`ja`), 繁體中文 (`zh-TW`)
- **아키텍처**: 클라이언트 상태 기반 i18n (Jotai 전역 상태 + `localStorage` 영속화 + 브라우저 언어 자동 감지)
- **모듈 구조**:
  - `lib/i18n/types.ts`: 지원 언어 목록 및 타입 정의
  - `lib/i18n/dictionaries/`: 언어별 번역 사전 (`en.ts`, `ko.ts`, `ja.ts`, `zh-TW.ts`)
  - `hooks/useTranslation.ts`: `locale`, `setLocale`, `t`, `locales`를 제공하는 커스텀 훅
  - `components/molecules/LanguageSwitcher.tsx`: 헤더 우측의 드롭다운 언어 스위처 UI 컴포넌트

### 4.7 프로젝트 및 작업 컬렉션 (Collections)
- **Works (주요 커리어 & 출시 프로덕트)** (정렬 순):
  1. `ability-gravity`: 능력 중력과 시간 (Flutter)
  2. `asharyu-design`: asharyu 디자인 토큰 시스템
  3. `seedvault`: Argon2id + AES-256-GCM 온디바이스 제로 지식 암호화 금고 (Google Play 출시)
  4. `daoxin`: 도심 (React, Jotai, Capacitor)
  5. `memo`: MemoFlow (React, PWA, Storybook)
  6. `isa-archive`: 포트폴리오 아카이브 웹
  7. `custom-swipe`: 터치 제스처 스와이프 라이브러리
  8. `isa-util`: 프론트엔드 유틸리티 함수 컬렉션
- **Projects (개인 및 연구 프로젝트)** (정렬 순):
  1. `ability-gravity`: 초능력 컨셉 몰입형 타이머 (Flutter)
  2. `seedvault`: 가상자산 지갑 프로젝트의 규제 장벽 극복 및 스핀오프 모바일 보안 앱 (React 19, Capacitor 8, Argon2id, AES-256-GCM)
  3. `memo`: 오프라인 우선 휘발성 플래너 MemoFlow (React, Tailwind CSS, Storybook, PWA, Capacitor)
  4. `isa-archive`: 컴포넌트 주도 포트폴리오 아카이브 (Next.js 16, Storybook, Contentlayer2)
  5. `daoxin`: 선협 동양철학 루틴 트래커 (React, Jotai, Vanilla CSS, Capacitor)
  6. `jjryuarchive`: 전주류씨 수곡파 디지털 아카이브 (Next.js 16, React 19, Tailwind CSS 4, asharyu-design-token)
  7. `ryuislabs`: 온디바이스 AI 비전 및 딥테크 제품군 엔지니어링 웹 플랫폼 (Next.js 16, React 19, Tailwind CSS 4, CSS Modules)

### 4.8 검색/답변/생성 엔진 최적화 (SEO, ASO, GEO, AEO)
- **웹 SEO (Search Engine Optimization)**:
  - `app/sitemap.ts`: 모든 라우트, Work, Project, Package 고유 슬러그를 포함하는 동적 정적 사이트맵(`sitemap.xml`) 생성.
  - `app/robots.ts`: 크롤러 허용 및 사이트맵 인덱싱 지시자(`robots.txt`) 제공.
  - `lib/seo/generateMeta.ts`: 정식 표준 규격(Canonical URL), 언어별 hreflang alternates(`en-US`, `ko-KR`, `ja-JP`, `zh-TW`), Googlebot 확장 지시자, OpenGraph 다국어 로케일 명시.
  - **Schema.org 구조화 데이터 (JSON-LD)**:
    - 루트 레이아웃: `Person` (ISA / YOON JONG RYU) 및 `WebSite` 엔티티 정의 (소셜, GitHub, 구글플레이, RyuisLabs 연동).
    - 상세 페이지: `TechArticle`, `SoftwareApplication`, `SoftwareSourceCode` 구조화 데이터 자동 주입.
- **웹 앱 스토어 최적화 (PWA ASO)**:
  - `app/manifest.ts`: 데스크톱(Wide) 및 모바일(Narrow) 스크린샷 메타데이터, 바로가기 단축키(Shortcuts), 카테고리(`developer tools`, `productivity`, `utilities`), `display_override: ['window-controls-overlay', 'standalone', 'minimal-ui']` 등 Chrome/Edge의 **Rich Install UI** 및 스토어 패키징(PWABuilder, Google Play TWA, Windows Store) 설치 요건 완비.
  - `app/layout.tsx`: iOS/Safari 전용 `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title`, `theme-color`, `mobile-web-app-capable` 메타 태그 완비.
- **생성형 AI 엔진 최적화 (GEO - Generative Engine Optimization)**:
  - `public/llms.txt`: ChatGPT Search, Perplexity, Claude, Cursor 등 LLM 에이전트 전용 요약 인덱스 문서 제공.
  - `public/llms-full.txt`: 깊이 있는 RAG 인제스천을 위한 기술 명세, 아키텍처 철학, 작품 카탈로그 전문 문서 제공.
  - `app/robots.ts`: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended` 등 주요 AI 크롤러 전용 경로 명시 허용.
- **답변 엔진 최적화 (AEO - Answer Engine Optimization)**:
  - `FAQPage` Schema.org JSON-LD 주입: Google AI Overviews, Featured Snippets, Perplexity Direct Answer를 위한 핵심 4대 Q&A(엔지니어 소개, SeedVault 보안 원리, RyuisLabs, 사이트 아키텍처) 구조화.
  - `SpeakableSpecification` 연동: 음성 검색(Siri, Google Assistant)을 위한 낭독 가능 CSS 셀렉터 지정.

---

## 5. 주요 명령어 (Scripts & Workflows)

```bash
# 1. 의존성 설치
yarn install

# 2. 로컬 개발 서버 실행 (Contentlayer 빌드 후 Next.js 구동 권장)
yarn contentlayer
yarn dev

# 3. Contentlayer 수동 빌드
yarn contentlayer

# 4. 정적 사이트 빌드 (prebuild에서 contentlayer 자동 실행)
yarn build

# 5. 린트 검사
yarn lint

# 6. Storybook 실행 (로컬 포트 6006)
yarn storybook

# 7. Storybook 빌드
yarn build-storybook

# 8. Chromatic 배포
yarn chromatic
```

---

## 6. 배포 파이프라인 (.github/workflows/deploy.yml)

1. **Trigger**: `main` 브랜치에 코드가 push되거나 수동(workflow_dispatch) 실행 시 동작.
2. **Node 버전**: Node.js 20 환경에서 실행.
3. **빌드 순서**:
   - `yarn install`
   - `yarn contentlayer` (MDX 데이터 생성)
   - `yarn run build` (`out/` 디렉터리에 정적 에셋 생성)
4. **후처리 (Prepare static files)**:
   - `touch out/.nojekyll` (Jekyll 빌드 비활성화)
   - `cp out/index.html out/404.html` (SPA 라우팅 지원)
   - `robots.txt`, `ads.txt`, `app-ads.txt` 생성
   - `cicirello/generate-sitemap`을 통한 sitemap 자동 생성
5. **배포 타깃**: `JamesIves/github-pages-deploy-action`을 사용하여 `gh-pages` 브랜치로 자동 푸시.

---

## 7. AI Agent 작업 시 주의사항 (Guidelines for Agents)

1. **Next.js 16 & React 19 호환성**:
   - React 19 호환을 위해 `package.json`의 `resolutions` 및 `overrides`가 정의되어 있습니다. 패키지 설치/업데이트 시 버전 충돌이 발생하지 않도록 주의하십시오.
2. **Turbopack 사용 금지**:
   - Serwist 플러그인 제약으로 인해 빌드 시 Turbopack(`--turbo`)을 활성화하지 마십시오. Webpack 모드로 실행해야 합니다.
3. **정적 빌드 제약 (`output: 'export'`)**:
   - `getServerSideProps`, Server Actions, Node.js 전용 런타임 API, 동적 헤더/쿠키 읽기 등 SSR 전용 기능을 도입하지 마십시오.
   - 동적 파라미터가 있는 라우트(예: `[slug]`) 추가 시 반드시 `generateStaticParams`를 구현해야 빌드가 성공합니다.
4. **Contentlayer 스키마 동기화**:
   - MDX 프론트매터(Frontmatter) 속성을 추가하거나 수정할 경우, 반드시 `contentlayer.config.ts`의 스키마를 함께 업데이트하고 `yarn contentlayer`를 실행하여 타입을 재생성해야 합니다.
5. **컴포넌트 추가 시 컨벤션**:
   - 재사용 컴포넌트는 `components/{atoms,molecules,organisms}`에 위치시키고, 전용 비즈니스 로직/페이지 뷰는 `features/{domain}`에 배치하십시오.
   - 신규 UI 컴포넌트 작성 시 가능한 `.stories.tsx`를 함께 구성하여 디자인 시스템의 일관성을 유지하십시오.
6. **Path Aliases 준수**:
   - `@/*`, `@components/*`, `@features/*`, `@hooks/*`, `@lib/*`, `@contentlayer/generated`, `@provider/*` 등 지정된 경로 별칭을 일관되게 사용하십시오.
