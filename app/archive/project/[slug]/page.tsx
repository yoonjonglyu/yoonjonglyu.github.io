import { notFound } from 'next/navigation';

import { allProjects } from '@contentlayer/generated';
import generateMeta from '@lib/seo/generateMeta';

import ProjectArticle from '@features/project/ProjectArticle';

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) return {};

  return generateMeta({
    title: project.title,
    description: project.description,
    url: `/archive/project/${project.slug}`,
    image: `/api/og?title=${encodeURIComponent(
      project.title,
    )}&desc=${encodeURIComponent(project.description)}`,
    keywords: project.tags,
    type: 'article',
    robots: true,
  });
}

export async function generateStaticParams() {
  // 1. 데이터가 있는지 확인 (방어 코드)
  if (!allProjects) return [];
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function PackageArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const packageInfo = allProjects.find((p) => p.slug === slug);

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
