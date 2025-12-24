import { notFound } from 'next/navigation';

import { allWorks } from '@contentlayer/generated';
import generateMeta from '@lib/seo/generateMeta';

import WorkArticle from '@features/work/WorkArticle';

type PageProps = {
  params: Promise<{ slug: string }>;
};

/** ✅ SSG */
export async function generateStaticParams() {
  return allWorks.map((work) => ({
    slug: work.slug,
  }));
}
/** ✅ 메타데이터는 여기서 생성 */
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const work = allWorks.find((p) => p.slug === slug);

  if (!work) return {};

  return generateMeta({
    title: work.title,
    description: work.summary,
    url: `/work/${work.slug}`,
    image:
      work.thumbnail ??
      `/api/og?title=${encodeURIComponent(
        work.title,
      )}&desc=${encodeURIComponent(work.summary)}`,
    keywords: work.tags,
    type: 'article',
    robots: true,
  });
}

/** ✅ 페이지 본문 */
export default async function WorkArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const work = allWorks.find((p) => p.slug === slug);

  if (!work) return notFound();

  return <WorkArticle title={work.title} content={work.body.code} />;
}
