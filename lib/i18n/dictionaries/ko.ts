import { TranslationSchema } from '../types';

export const ko: TranslationSchema = {
  nav: {
    resume: '이력서',
    work: '주요 작업',
    archive: '아카이브',
  },
  footer: {
    designedBy: 'Designed by YOONJONGRYU(github:yoonjonglyu)',
    rights: 'All rights reserved.',
  },
  home: {
    title1: 'Building Products.',
    title2: 'Architecting Systems.',
    subtitle1: '확장 가능한 UI 시스템을 설계하고,',
    subtitle2: '실제 라이브 제품으로 구현하여 배포합니다.',
    projects: '프로젝트',
    packages: '패키지',
    loading: '리소스 로딩 중...',
    refreshNotice: '화면이 나오지 않을 경우 새로고침을 시도해 주세요.',
  },
  resume: {
    focusTitle: '전문 분야',
    workTitle: '경력 및 작업',
    skillsTitle: '기술 스택',
    contactTitle: '연락처',
    headerRole: '소프트웨어 엔지니어 & UI 아키텍트 · AI 에이전트 & 모바일 보안',
    headerSummaryBold: 'AI 에이전트 하네스부터 온디바이스 보안 앱, 복합 UI 아키텍처까지 실서비스를 직접 설계하고 배포하는 엔지니어입니다.',
    headerSummaryText: 'LLM 자율 에이전트 오케스트레이션(Brain), 제로 지식 암호화 모바일 앱(SeedVault), Storybook 기반 디자인 시스템 구축에 전문성을 갖추고 있습니다.',
    focusDesc: `확장 가능한 UI 시스템, 온디바이스 보안, 그리고 자율 AI 에이전트 아키텍처를 설계하는 소프트웨어 엔지니어입니다.

• LLM 자율 추론 및 툴 실행을 통제하는 에이전트 하네스(Brain)와 다계층 가드레일 시스템 구축
• TypeScript, React 19, Next.js 16, Storybook 기반의 컴포넌트 주도 디자인 시스템 및 다국어 웹 아키텍처 설계
• Argon2id와 AES-256-GCM 기반 제로 지식 모바일 보안 앱(SeedVault) Google Play 정식 출시 및 운영
• 성능 중심의 PWA(Serwist)와 온디바이스 AI 비전 등 오프라인 우선(Offline-First) 환경 구축

기획과 아키텍처 수립부터 암호학, AI 오케스트레이션, 실서비스 스토어 배포까지 전 과정을 독립적으로 완수합니다.`,
    focusHighlights: [
      '소프트웨어 엔지니어',
      'AI 에이전트',
      'UI 아키텍트',
      'TypeScript',
      'React 19',
      'Next.js 16',
      'Storybook',
      'PWA',
      '오프라인 우선',
      '온디바이스 보안',
      'Argon2id',
      'Brain Harness',
    ],
    skillCategories: {
      ai: 'AI & 에이전트 오케스트레이션',
      frontend: '프론트엔드 & 아키텍처',
      mobile: '모바일 & 하이브리드',
      security: '보안 & 제로지식 암호학',
      state: '상태 관리 & 스타일링',
      tooling: '테스팅 & 빌드 인프라',
    },
  },
  archive: {
    backToArchive: '← 아카이브로 돌아가기',
    github: 'GitHub',
    npm: 'NPM',
    website: '웹사이트',
  },
  common: {
    language: '언어',
  },
};
