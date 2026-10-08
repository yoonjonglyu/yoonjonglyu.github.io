import { notFound } from 'next/navigation';

import { allWorks } from '@contentlayer/generated';
import generateMeta from '@lib/seo/generateMeta';
import {
  getUniqueSlugs,
  getLocalizedDocBySlug,
  getDocTranslations,
} from '@lib/content';

import WorkArticle from '@features/work/WorkArticle';

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** ✅ SSG */
export async function generateStaticParams() {
  if (!allWorks) return [];
  return getUniqueSlugs(allWorks).map((slug) => ({ slug }));
}

/** ✅ 메타데이터 생성 (기본 영어 또는 사용 가능한 문서 우선) */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const work = getLocalizedDocBySlug(allWorks, slug, 'en');

  if (!work) return {};

  return generateMeta({
    title: work.title,
    description: work.summary,
    url: `/work/${work.slug}`,
    image: work.thumbnail ?? `/work/${work.slug}/opengraph-image`,
    keywords: work.tags,
    type: 'article',
    robots: true,
  });
}

/** ✅ 페이지 본문 (실시간 다국어 전환 지원) */
export default async function WorkArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const translations = getDocTranslations(allWorks, slug);

  if (Object.keys(translations).length === 0) return notFound();

  // 기본 영어 또는 첫 번째 사용 가능한 문서
  const defaultWork = getLocalizedDocBySlug(allWorks, slug, 'en');

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: defaultWork?.title,
            description: defaultWork?.summary,
            author: {
              '@type': 'Person',
              name: 'YOON JONG RYU',
              url: 'https://yoonjonglyu.github.io',
            },
            url: `https://yoonjonglyu.github.io/work/${slug}`,
            keywords: defaultWork?.tags?.join(', '),
          }),
        }}
      />
      <WorkArticle
        title={defaultWork?.title}
        content={defaultWork?.body.code}
        translations={translations}
      />
    </>
  );
}
