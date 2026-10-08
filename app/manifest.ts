import { MetadataRoute } from 'next';

import Icon192 from '../assets/favicon_io/android-chrome-192x192.png';
import Icon512 from '../assets/favicon_io/android-chrome-512x512.png';
import AppleIcon from '../assets/favicon_io/apple-touch-icon.png';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: 'https://yoonjonglyu.github.io/',
    scope: '/',
    name: 'ISA Archive - Frontend & Mobile Security Engineering',
    short_name: 'ISA Archive',
    description:
      'Frontend Engineer ISA(Yoonjong Ryu)의 공식 아카이브. UI 아키텍처, 컴포넌트 시스템, PWA 및 온디바이스 모바일 보안 기술 기록.',
    start_url: '/?source=pwa',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#0b0e14',
    theme_color: '#0b0e14',
    orientation: 'any',
    lang: 'ko',
    dir: 'ltr',
    categories: ['developer tools', 'productivity', 'utilities'],
    prefer_related_applications: false,
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
    screenshots: [
      {
        src: '/content/archive.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'ISA Archive 데스크톱 메인 뷰',
      },
      {
        src: '/content/memo.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'ISA Archive 모바일 PWA 뷰',
      },
    ],
    shortcuts: [
      {
        name: 'Works',
        short_name: 'Works',
        url: '/work',
        description: '주요 출시 프로덕트 및 작업물',
        icons: [{ src: Icon192.src, sizes: '192x192' }],
      },
      {
        name: 'Archive',
        short_name: 'Archive',
        url: '/archive',
        description: '프로젝트 및 패키지 아카이브',
        icons: [{ src: Icon192.src, sizes: '192x192' }],
      },
      {
        name: 'Resume',
        short_name: 'Resume',
        url: '/resume',
        description: '엔지니어 이력서',
        icons: [{ src: Icon192.src, sizes: '192x192' }],
      },
    ],
  };
}