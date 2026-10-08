export type Locale = 'en' | 'ko' | 'ja' | 'zh-TW';

export interface LocaleInfo {
  code: Locale;
  label: string;
  shortLabel: string;
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'ko', label: '한국어', shortLabel: 'KO' },
  { code: 'ja', label: '日本語', shortLabel: 'JA' },
  { code: 'zh-TW', label: '繁體中文', shortLabel: '繁體' },
];

export const DEFAULT_LOCALE: Locale = 'en';

export interface TranslationSchema {
  nav: {
    resume: string;
    work: string;
    archive: string;
  };
  footer: {
    designedBy: string;
    rights: string;
  };
  home: {
    title1: string;
    title2: string;
    subtitle1: string;
    subtitle2: string;
    projects: string;
    packages: string;
    loading: string;
    refreshNotice: string;
  };
  resume: {
    focusTitle: string;
    workTitle: string;
    skillsTitle: string;
    contactTitle: string;
    headerRole: string;
    headerSummaryBold: string;
    headerSummaryText: string;
    focusDesc: string;
    focusHighlights: string[];
    skillCategories: {
      ai: string;
      frontend: string;
      mobile: string;
      security: string;
      state: string;
      tooling: string;
    };
  };
  archive: {
    backToArchive: string;
    github: string;
    npm: string;
    website: string;
  };
  common: {
    language: string;
  };
}
