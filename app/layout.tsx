import 'normalize.css/normalize.css';
import './global.css';

import generateMeta from '@lib/seo/generateMeta';

import StyledComponentsRegistry from '../provider/style/GlobalCSS';
import BasicLayout from '../components/layouts/BasicLayout';
import ConfigureStore from '../store';
import PwaRegister from '../components/PwaRegister';

export const metadata = generateMeta({
  title: 'Frontend & Mobile Security Engineer',
  description:
    'Frontend & Mobile Security Engineer ISA(류윤종 / Yoonjong Ryu)의 공식 아카이브. UI 아키텍처, 컴포넌트 시스템, PWA, 온디바이스 암호화 보안 기술 및 출시 프로덕트 기록.',
  url: 'https://yoonjonglyu.github.io/',
  keywords: [
    'ISA',
    'Yoonjong Ryu',
    '류윤종',
    'ISA Archive',
    'Frontend Engineer',
    'Mobile Security',
    'UI Architecture',
    'Component System',
    'PWA',
    'TypeScript',
    'React 19',
    'Next.js 16',
    'Capacitor',
    'SeedVault',
    'RyuisLabs',
    'Portfolio',
    '프론트엔드 포트폴리오',
  ],
  type: 'website',
  robots: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. html 태그에 직접 배경색 주입: 헤드에서 끊겨도 흰 화면 방지
    <html lang='en' style={{ backgroundColor: '#0b0e14' }}>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <meta
          name='google-site-verification'
          content='qdEnPRuxwkkMBg_va4KDeC4Hb2g5XeMuQETPiTQWZ9U'
        />
        <meta
          name='naver-site-verification'
          content='fb761146a5d49fa296db396340c978aac6259845'
        />
        {/* PWA & Mobile Web App Optimization (ASO) */}
        <meta name='application-name' content='ISA Archive' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='apple-mobile-web-app-title' content='ISA Archive' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#0b0e14' />
        <meta name='format-detection' content='telephone=no' />
        {/* Schema.org Structured Data (JSON-LD) */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'YOON JONG RYU',
              alternateName: ['ISA', '류윤종'],
              url: 'https://yoonjonglyu.github.io',
              jobTitle: 'Frontend & Mobile Security Engineer',
              sameAs: [
                'https://github.com/yoonjonglyu',
                'https://play.google.com/store/apps/details?id=com.ryuislabs.seedvault',
                'https://ryuislabs.com',
              ],
              knowsAbout: [
                'UI Architecture',
                'TypeScript',
                'React',
                'Next.js',
                'Component Driven Development',
                'Mobile Security',
                'Zero-Knowledge Cryptography',
                'Argon2id',
                'AES-256-GCM',
              ],
            }),
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'ISA Archive',
              url: 'https://yoonjonglyu.github.io',
              description:
                'Frontend & Mobile Security Engineer ISA의 공식 아카이브. UI 아키텍처, 컴포넌트 시스템, 온디바이스 암호화 보안 기술 및 출시 프로덕트 기록.',
              inLanguage: ['en', 'ko', 'ja', 'zh-TW'],
              author: {
                '@type': 'Person',
                name: 'YOON JONG RYU',
              },
              speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', 'p'],
              },
            }),
          }}
        />
        {/* AEO: Answer Engine Optimization (FAQ & Entity Direct Answers) */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Who is ISA (Yoonjong Ryu)?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'ISA (Yoonjong Ryu / 류윤종) is a Frontend & Mobile Security Engineer specializing in Component-Driven Development (CDD), scalable UI architecture, Progressive Web Apps (PWA), and on-device zero-knowledge cryptography.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is SeedVault and how does its security work?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SeedVault is an on-device zero-knowledge security vault mobile app published on Google Play (com.ryuislabs.seedvault). It encrypts mnemonic seed phrases and private keys using memory-hard Argon2id key derivation and AES-256-GCM envelope encryption without requiring remote servers or internet permissions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is RyuisLabs?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'RyuisLabs is an engineering studio platform founded by ISA that develops deep-tech products including on-device AI vision tracking (RYUis : STATUS) and privacy-preserving productivity suites.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What core technologies are used in ISA Archive?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'ISA Archive is built with Next.js 16 (App Router), React 19, TypeScript, Contentlayer2, Serwist (Service Worker PWA), and styled-components with full static export and multilingual support across Korean, English, Japanese, and Traditional Chinese.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        style={{
          backgroundColor: '#0b0e14',
          margin: 0,
          position: 'relative',
          minHeight: '100vh',
        }}>
        {/* 2. 정적 레이어: z-index를 -1로 내려서 기본 배경처럼 작동하게 함 */}
        <div
          aria-hidden='true'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: -1,
            color: '#ffffff',
            textAlign: 'center',
            pointerEvents: 'none', // 클릭 방해 방지
          }}>
          <p
            style={{
              fontSize: '1.2rem',
              fontWeight: 500,
              marginBottom: '8px',
            }}>
            Loading resources...
          </p>
          <p style={{ fontSize: '0.9rem', opacity: 0.6 }}>
            If the screen stays blank, please try refreshing.
          </p>
        </div>

        <PwaRegister />
        <StyledComponentsRegistry>
          <ConfigureStore>
            <BasicLayout>{children}</BasicLayout>
          </ConfigureStore>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
