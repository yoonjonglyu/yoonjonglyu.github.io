import { TranslationSchema } from '../types';

export const en: TranslationSchema = {
  nav: {
    resume: 'Resume',
    work: 'Work',
    archive: 'Archive',
  },
  footer: {
    designedBy: 'Designed by YOONJONGRYU(github:yoonjonglyu)',
    rights: 'All rights reserved.',
  },
  home: {
    title1: 'Building Products.',
    title2: 'Architecting Systems.',
    subtitle1: 'Designing scalable UI systems and',
    subtitle2: 'shipping them as real, live products.',
    projects: 'Project',
    packages: 'Package',
    loading: 'Loading resources...',
    refreshNotice: 'If the screen stays blank, please try refreshing.',
  },
  resume: {
    focusTitle: 'Focus',
    workTitle: 'Work',
    skillsTitle: 'Skills',
    contactTitle: 'Contact',
    headerRole: 'Software Engineer & UI Architect · AI Agents & Mobile Security',
    headerSummaryBold: 'End-to-end engineer shipping real products - from AI agent harnesses to on-device security apps and scalable UI architecture.',
    headerSummaryText: 'Specialized in autonomous LLM agent orchestration (Brain), zero-knowledge cryptography (SeedVault), and design token systems.',
    focusDesc: `Software engineer focused on scalable UI systems, on-device security, and autonomous AI agent architectures.

• Architects LLM agent harnesses (Brain) with autonomous tool calling, multi-layer guardrails, and self-correction loops
• Designs component-driven design systems and multi-locale web platforms using TypeScript, React 19, Next.js 16, and Storybook
• Shipped SeedVault to Google Play: an on-device zero-knowledge security vault powered by Argon2id and AES-256-GCM
• Develops offline-first PWAs and on-device privacy-preserving vision systems

Independently delivers end-to-end — from systems architecture and cryptography to AI orchestration and live app store releases.`,
    focusHighlights: [
      'Software Engineer',
      'AI Agents',
      'UI Architect',
      'TypeScript',
      'React 19',
      'Next.js 16',
      'Storybook',
      'PWA',
      'offline-first',
      'On-Device Security',
      'Argon2id',
      'Brain Harness',
    ],
    skillCategories: {
      ai: 'AI & Agent Orchestration',
      frontend: 'Frontend & Architecture',
      mobile: 'Mobile & Hybrid Systems',
      security: 'Security & Cryptography',
      state: 'State Management & Styling',
      tooling: 'Testing & Build Infrastructure',
    },
  },
  archive: {
    backToArchive: '← Back to Archive',
    github: 'GitHub',
    npm: 'NPM',
    website: 'Website',
  },
  common: {
    language: 'Language',
  },
};
