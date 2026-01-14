import { MetadataRoute } from 'next';

import Icon192 from '../assets/favicon_io/android-chrome-192x192.png';
import Icon512 from '../assets/favicon_io/android-chrome-512x512.png';
import AppleIcon from '../assets/favicon_io/apple-touch-icon.png'; // 애플 전용 아이콘

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: 'isa-root-pwa',
    scope: '/',
    name: 'Frontend Engineer ISA',
    short_name: 'ISA',
    description: 'ISA의 개인 아카이브입니다. UI 아키텍처 및 제품 중심 기록을 담고 있습니다.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0e14',
    theme_color: '#0b0e14',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: AppleIcon.src,
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: Icon192.src,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: Icon192.src,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: Icon512.src,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: Icon512.src,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}