import { Work, Package, Project } from '@contentlayer/generated';
import { DEFAULT_LOCALE, Locale } from './i18n/types';

interface IdentifiableDoc {
  slug: string;
  locale: string;
  order?: number;
}

/**
 * 모든 고유 slug 목록을 반환합니다. (generateStaticParams용)
 */
export const getUniqueSlugs = <T extends IdentifiableDoc>(docs: T[]): string[] => {
  const slugSet = new Set<string>();
  docs.forEach((doc) => {
    if (doc.slug) slugSet.add(doc.slug);
  });
  return Array.from(slugSet);
};

/**
 * 주어진 언어(locale)에 맞는 문서를 우선 선택하고, 없을 경우 기본 언어(en)로 fallback 처리한 목록을 반환합니다.
 */
export const getLocalizedDocs = <T extends IdentifiableDoc>(
  docs: T[],
  currentLocale: string = DEFAULT_LOCALE,
): T[] => {
  const uniqueSlugs = getUniqueSlugs(docs);

  const localizedList = uniqueSlugs.map((slug) => {
    // 1. 현재 선택된 언어 문서 탐색
    const matched = docs.find((d) => d.slug === slug && d.locale === currentLocale);
    if (matched) return matched;

    // 2. 기본 언어(en) fallback 탐색
    const fallbackEn = docs.find((d) => d.slug === slug && d.locale === DEFAULT_LOCALE);
    if (fallbackEn) return fallbackEn;

    // 3. 둘 다 없으면 해당 slug의 첫 번째 문서
    return docs.find((d) => d.slug === slug)!;
  });

  return localizedList.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};

/**
 * 특정 slug의 문서를 주어진 언어로 찾고, 없을 경우 기본 언어(en)로 fallback합니다.
 */
export const getLocalizedDocBySlug = <T extends IdentifiableDoc>(
  docs: T[],
  slug: string,
  currentLocale: string = DEFAULT_LOCALE,
): T | undefined => {
  const matched = docs.find((d) => d.slug === slug && d.locale === currentLocale);
  if (matched) return matched;

  return docs.find((d) => d.slug === slug && d.locale === DEFAULT_LOCALE);
};

/**
 * 특정 slug에 대해 생성된 모든 언어 번역본 데이터를 매핑합니다.
 */
export const getDocTranslations = <
  T extends IdentifiableDoc & { title: string; body: { code: string } },
>(
  docs: T[],
  slug: string,
): Record<string, { title: string; content: string }> => {
  const translations: Record<string, { title: string; content: string }> = {};

  docs
    .filter((d) => d.slug === slug)
    .forEach((d) => {
      translations[d.locale] = {
        title: d.title,
        content: d.body.code,
      };
    });

  return translations;
};
