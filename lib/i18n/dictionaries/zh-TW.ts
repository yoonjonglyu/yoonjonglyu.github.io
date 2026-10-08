import { TranslationSchema } from '../types';

export const zhTW: TranslationSchema = {
  nav: {
    resume: '履歷表',
    work: '精選作品',
    archive: '檔案庫',
  },
  footer: {
    designedBy: 'Designed by YOONJONGRYU(github:yoonjonglyu)',
    rights: 'All rights reserved.',
  },
  home: {
    title1: 'Building Products.',
    title2: 'Architecting Systems.',
    subtitle1: '設計具備高擴展性的 UI 系統，',
    subtitle2: '並將其打造為實際運行的線上產品。',
    projects: '專案',
    packages: '套件庫',
    loading: '載入資源中...',
    refreshNotice: '若畫面未正常顯示，請嘗試重新整理頁面。',
  },
  resume: {
    focusTitle: '核心領域',
    workTitle: '工作經歷',
    skillsTitle: '專業技能',
    contactTitle: '聯絡方式',
    headerRole: '軟體工程師與 UI 架構師 · AI 代理與移動端安全',
    headerSummaryBold: '從 AI 代理安全架構到端側加密應用及複合 UI 系統，獨立設計並發布實體產品的全端工程師。',
    headerSummaryText: '深耕大語言模型自律代理框架（Brain）、零知識加密移動金庫（SeedVault）與 Storybook 設計系統架構。',
    focusDesc: `專注於高擴展性 UI 系統、端側隱私安全及自律 AI 代理架構的軟體工程師。

• 建構管控 LLM 自律推理與工具調用的代理框架（Brain）及多層安全防護網（Guardrails）
• 運用 TypeScript、React 19、Next.js 16 與 Storybook 設計組件驅動型設計系統與多語系 Web 平台
• 正式上架 Google Play：基於 Argon2id 與 AES-256-GCM 的端側零知識安全金庫應用（SeedVault）
• 打造高效能 PWA（Serwist）與端側 AI 視覺追蹤等離線優先（Offline-First）技術架構

從前期規格、架構設計、密碼學應用、AI 代理協同到商店發布，具備獨立完成全流程之工程能力。`,
    focusHighlights: [
      '軟體工程師',
      'AI 代理',
      'UI 架構師',
      'TypeScript',
      'React 19',
      'Next.js 16',
      'Storybook',
      'PWA',
      '離線優先',
      '端側安全',
      'Argon2id',
      'Brain Harness',
    ],
    skillCategories: {
      ai: 'AI 代理與大模型協同',
      frontend: '前端架構與核心技術',
      mobile: '移動端與混合架構',
      security: '安全防護與密碼學',
      state: '狀態管理與樣式系統',
      tooling: '測試與建置基礎架構',
    },
  },
  archive: {
    backToArchive: '← 返回檔案庫',
    github: 'GitHub',
    npm: 'NPM',
    website: '官方網站',
  },
  common: {
    language: '語言',
  },
};
