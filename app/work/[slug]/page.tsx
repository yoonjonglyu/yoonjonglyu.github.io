import { Metadata } from 'next';
import {allWorks} from '@contentlayer/generated';
import { notFound } from 'next/navigation';

import PackageContents from '@features/package/PackageContents';

export const metadata: Metadata = {
  title: 'ISA Archive - Work',
  description: 'about Work',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'work',
    'project',
    'package',
  ],
  openGraph: {
    images: [`/api/og?title=Work`]
  },
};
export async function generateStaticParams() {
  return allWorks.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PackageArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>; // 1. Promise 타입으로 정의
}) {
  const resolvedParams = await params; // 2. await로 값 추출
  const workInfo = allWorks.find((p) => p.slug === resolvedParams.slug);

  if (!workInfo) return notFound();

  return <PackageContents content={workInfo.body.code} />;
}
