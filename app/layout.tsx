import 'normalize.css/normalize.css';
import './global.css';

import generateMeta from '@lib/seo/generateMeta';

import StyledComponentsRegistry from '../provider/style/GlobalCSS';
import BasicLayout from '../components/layouts/BasicLayout';
import ConfigureStore from '../store';
import ReactQueryProvider from '../provider/query/QueryProvider';


export const metadata = generateMeta({
  title: 'Frontend Engineer',
  description:
    'ISA의 개인 아카이브입니다. UI 아키텍처, 컴포넌트 시스템, 유틸 라이브러리, PWA 등 실제 제품 중심의 작업을 기록합니다.',
  url: 'https://yoonjonglyu.github.io/',
  keywords: [
    'Frontend Engineer',
    'UI Architecture',
    'Component System',
    'TypeScript',
    'React',
    'Portfolio',
    'Web Application',
    '개발',
    '프론트엔드',
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
        {/* 폰트/구글 검증 등 필수 메타만 상단 유지 */}
        <meta
          name='google-site-verification'
          content='qdEnPRuxwkkMBg_va4KDeC4Hb2g5XeMuQETPiTQWZ9U'
        />
        <meta
          name='naver-site-verification'
          content='fb761146a5d49fa296db396340c978aac6259845'
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

        <StyledComponentsRegistry>
          <ConfigureStore>
            <ReactQueryProvider>
              <BasicLayout>{children}</BasicLayout>
            </ReactQueryProvider>
          </ConfigureStore>
        </StyledComponentsRegistry>

        {/* 3. 무거운 외부 스크립트는 body 끝으로 이동 */}
        {/* 애드센스가 head에서 데이터 대역폭을 뺏어가는 것을 방지합니다. */}
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2309708500958644'
          crossOrigin='anonymous'
        />
      </body>
    </html>
  );
}
