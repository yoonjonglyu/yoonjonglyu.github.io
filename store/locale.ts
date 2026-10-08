import { atom } from 'jotai';
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES } from '../lib/i18n/types';

const STORAGE_KEY = 'isa_archive_locale';

export const getInitialLocale = (): Locale => {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;

  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && SUPPORTED_LOCALES.some((l) => l.code === saved)) {
      return saved;
    }

    const browserLang = navigator.language?.toLowerCase() || '';
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('zh')) return 'zh-TW';
  } catch {
    // localStorage 접근 제한 환경 대비
  }

  return DEFAULT_LOCALE;
};

// 기본 atom
export const rawLocaleAtom = atom<Locale>(DEFAULT_LOCALE);

// 초기화 여부 atom
export const localeInitializedAtom = atom<boolean>(false);
