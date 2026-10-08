import { type Metadata } from 'next';

import LogoImage from '../../assets/images/ryu-dev.png';
import Favicon16 from '../../assets/favicon_io/favicon-16x16.png';
import Favicon32 from '../../assets/favicon_io/favicon-32x32.png';
import FaviconApp from '../../assets/favicon_io/apple-touch-icon.png';

const SITE_NAME = 'ISA Archive';
const SITE_URL = 'https://yoonjonglyu.github.io';

export interface MetaSource {
  title: string;
  description: string;
  image?: string;
  url?: string;
  keywords?: string[];
  type?: 'article' | 'website';
  robots?: boolean;
}

type generateMetaProps = (source: MetaSource) => Metadata;

const generateMeta: generateMetaProps = (source) => {
  const title =
    source.title === SITE_NAME || source.title.includes(SITE_NAME)
      ? source.title
      : `${source.title} | ${SITE_NAME}`;
  const description = source.description;
  const canonicalUrl = source.url ? (source.url.startsWith('http') ? source.url : `${SITE_URL}${source.url}`) : SITE_URL;
  const image = source.image ?? LogoImage.src;
  const isRobot = source.robots
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large' as const,
          'max-snippet': -1,
        },
      }
    : { index: false, follow: false };

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords: source.keywords ?? [
      'Frontend Engineer',
      'UI Architecture',
      'TypeScript',
      'React',
      'Next.js',
      'PWA',
      'Zero-Knowledge',
      'Mobile Security',
      'Portfolio',
    ],
    authors: [{ name: 'YOON JONG RYU', url: 'https://github.com/yoonjonglyu' }],
    creator: 'YOON JONG RYU',
    publisher: 'YOON JONG RYU',
    category: 'technology',
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'ko-KR': canonicalUrl,
        'ja-JP': canonicalUrl,
        'zh-TW': canonicalUrl,
        'x-default': canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      alternateLocale: ['ko_KR', 'ja_JP', 'zh_TW'],
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: source.type ?? 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@yoonjonglyu',
      site: '@yoonjonglyu',
      images: [image],
    },
    robots: isRobot,
    icons: {
      icon: [
        { url: Favicon16.src, sizes: '16x16', type: 'image/png' },
        { url: Favicon32.src, sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: FaviconApp.src, sizes: '180x180' }],
    },
  };
};

export default generateMeta;
