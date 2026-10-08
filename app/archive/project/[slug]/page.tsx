import { notFound } from 'next/navigation';

import { allProjects } from '@contentlayer/generated';
import { getDocTranslations, getLocalizedDocBySlug, getUniqueSlugs } from '@lib/content';
import generateMeta from '@lib/seo/generateMeta';

import ProjectArticle from '@features/project/ProjectArticle';

export const dynamicParams = false;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getLocalizedDocBySlug(allProjects, slug, 'en');
  if (!project) return {};

  return generateMeta({
    title: project.title,
    description: project.description,
    url: `/archive/project/${project.slug}`,
    image: `/archive/project/${project.slug}/opengraph-image`,
    keywords: project.tags,
    type: 'article',
    robots: true,
  });
}

export async function generateStaticParams() {
  if (!allProjects) return [];
  return getUniqueSlugs(allProjects).map((slug) => ({ slug }));
}

export default async function ProjectArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const projectInfo = getLocalizedDocBySlug(allProjects, slug, 'en');

  if (!projectInfo) return notFound();

  const translations = getDocTranslations(allProjects, slug);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: projectInfo.title,
            description: projectInfo.description,
            applicationCategory: 'DeveloperApplication',
            operatingSystem: 'All',
            author: {
              '@type': 'Person',
              name: 'YOON JONG RYU',
              url: 'https://yoonjonglyu.github.io',
            },
            url: `https://yoonjonglyu.github.io/archive/project/${slug}`,
            sameAs: [projectInfo.repository, projectInfo.homepage].filter(Boolean),
            keywords: projectInfo.tags?.join(', '),
          }),
        }}
      />
      <ProjectArticle
        title={projectInfo.title}
        content={projectInfo.body.code}
        repository={projectInfo.repository}
        homepage={projectInfo.homepage}
        translations={translations}
      />
    </>
  );
}
