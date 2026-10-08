'use client';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { rawLocaleAtom, localeInitializedAtom, getInitialLocale } from '../store/locale';
import { Locale, SUPPORTED_LOCALES, TranslationSchema } from '../lib/i18n/types';
import { dictionaries } from '../lib/i18n/dictionaries';

const STORAGE_KEY = 'isa_archive_locale';

export const useTranslation = () => {
  const [locale, setLocaleState] = useAtom(rawLocaleAtom);
  const [isInitialized, setIsInitialized] = useAtom(localeInitializedAtom);

  useEffect(() => {
    if (!isInitialized) {
      const initial = getInitialLocale();
      setLocaleState(initial);
      setIsInitialized(true);
      document.documentElement.lang = initial;
    }
  }, [isInitialized, setLocaleState, setIsInitialized]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {
      // 로컬 스토리지 에러 방어
    }
  };

  const t: TranslationSchema = dictionaries[locale] ?? dictionaries.en;

  return {
    locale,
    setLocale,
    t,
    locales: SUPPORTED_LOCALES,
  };
};

export default useTranslation;
