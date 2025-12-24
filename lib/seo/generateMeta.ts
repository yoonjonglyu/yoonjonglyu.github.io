import { type Metadata } from 'next';

import LogoImage from '../../assets/images/ryu-dev.png';
import Favicon16 from '../../assets/favicon_io/favicon-16x16.png';
import Favicon32 from '../../assets/favicon_io/favicon-32x32.png';
import FaviconApp from '../../assets/favicon_io/apple-touch-icon.png';

const SITE_NAME = 'ISA - Archive';
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
  const title = `${source.title} | ${SITE_NAME}`;
  const description = source.description;
  const url = source.url ? `${SITE_URL}${source.url}` : SITE_URL;
  const image = source.image ?? LogoImage.src;
  const isRobot = source.robots
    ? { index: true, follow: true }
    : { index: false, follow: false };

  return {
    metadataBase: new URL('https://yoonjonglyu.github.io'),
    title,
    description,
    keywords: source.keywords,
    authors: [{ name: 'YOON JONG RYU', url: 'https://github.com/yoonjonglyu' }],
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: image }],
      type: source.type ?? 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: isRobot,
    icons: {
      icon: [
        { url: Favicon16.src, sizes: '16x16', type: 'image/png' },
        { url: Favicon32.src, sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: FaviconApp.src, sizes: '180x180' }],
    }
  };
};

export default generateMeta;
