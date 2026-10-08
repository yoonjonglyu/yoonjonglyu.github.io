import { MetadataRoute } from 'next';
import { allWorks, allProjects, allPackages } from '@contentlayer/generated';
import { getUniqueSlugs } from '@lib/content';

const BASE_URL = 'https://yoonjonglyu.github.io';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. 고정 정적 라우트
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/archive`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/resume`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // 2. Works 상세 페이지 (고유 slug)
  const workSlugs = getUniqueSlugs(allWorks ?? []);
  workSlugs.forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 3. Projects 상세 페이지
  const projectSlugs = getUniqueSlugs(allProjects ?? []);
  projectSlugs.forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/archive/project/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // 4. Packages 상세 페이지
  const packageSlugs = getUniqueSlugs(allPackages ?? []);
  packageSlugs.forEach((slug) => {
    routes.push({
      url: `${BASE_URL}/archive/package/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return routes;
}
