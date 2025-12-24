import { notFound } from 'next/navigation';

import { allPackages } from '@contentlayer/generated';
import generateMeta from '@lib/seo/generateMeta';

import PackageArticle from '@features/package/PackageArticle';

export async function generateStaticParams() {
  return allPackages.map((project) => ({
    slug: project.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const pkg = allPackages.find((p) => p.slug === slug);
  if (!pkg) return {};

  return generateMeta({
    title: pkg.title,
    description: pkg.description,
    url: `/archive/package/${pkg.slug}`,
    image: `/api/og?title=${encodeURIComponent(
      pkg.title,
    )}&desc=${encodeURIComponent(pkg.description)}`,
    keywords: pkg.tags,
    type: 'article',
    robots: true,
  });
}
export default async function PackageArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const packageInfo = allPackages.find((p) => p.slug === slug);

  if (!packageInfo) return notFound();

  return (
    <PackageArticle
      title={packageInfo.title}
      content={packageInfo.body.code}
      repository={packageInfo.repository}
      homepage={packageInfo.homepage}
    />
  );
}
