import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allProjects } from '@contentlayer/generated';

import ProjectArticle from '@features/project/ProjectArticle';

export const metadata: Metadata = {
  title: 'ISA Archive - Project Article',
  description: 'about project Article',
  keywords: [
    'devlop',
    'ISA',
    'frontend',
    'archive',
    '개발',
    '프론트엔드',
    'react',
    'project',
  ],
};
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}
export default async function PackageArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>; // 1. Promise 타입으로 정의
}) {
  const resolvedParams = await params; // 2. await로 값 추출
  const packageInfo = allProjects.find((p) => p.slug === resolvedParams.slug);

  if (!packageInfo) return notFound();
  return (
    <ProjectArticle
      title={packageInfo.title}
      content={packageInfo.body.code}
      repository={packageInfo.repository}
      homepage={packageInfo.homepage}
    />
  );
}
