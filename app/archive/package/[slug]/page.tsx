import { notFound } from 'next/navigation';

import { allPackages } from '@contentlayer/generated';
import { getDocTranslations, getLocalizedDocBySlug, getUniqueSlugs } from '@lib/content';
import generateMeta from '@lib/seo/generateMeta';

import PackageArticle from '@features/package/PackageArticle';

export const dynamicParams = false;

export async function generateStaticParams() {
  if (!allPackages) return [];
  return getUniqueSlugs(allPackages).map((slug) => ({ slug }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pkg = getLocalizedDocBySlug(allPackages, slug, 'en');
  if (!pkg) return {};

  return generateMeta({
    title: pkg.title,
    description: pkg.description,
    url: `/archive/package/${pkg.slug}`,
    image: `/archive/package/${pkg.slug}/opengraph-image`,
    keywords: pkg.tags,
    type: 'article',
    robots: true,
  });
}

export default async function PackageArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const packageInfo = getLocalizedDocBySlug(allPackages, slug, 'en');

  if (!packageInfo) return notFound();

  const translations = getDocTranslations(allPackages, slug);

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            name: packageInfo.title,
            description: packageInfo.description,
            programmingLanguage: 'TypeScript',
            author: {
              '@type': 'Person',
              name: 'YOON JONG RYU',
              url: 'https://yoonjonglyu.github.io',
            },
            url: `https://yoonjonglyu.github.io/archive/package/${slug}`,
            codeRepository: packageInfo.repository,
            keywords: packageInfo.tags?.join(', '),
          }),
        }}
      />
      <PackageArticle
        title={packageInfo.title}
        content={packageInfo.body.code}
        repository={packageInfo.repository}
        homepage={packageInfo.homepage}
        translations={translations}
      />
    </>
  );
}
