import 'normalize.css/normalize.css';

import generateMeta from '@lib/seo/generateMeta';

import StyledComponentsRegistry, {
  GlobalCSS,
} from '../provider/style/GlobalCSS';
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
    <html lang='en'>
      <head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin=''
        />
        <script
          async
          src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2309708500958644'
          crossOrigin='anonymous'></script>
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
          backgroundColor: '#0b0e14', // 변수 대신 실제 색상값 직접 입력 (즉시 적용용)
          margin: 0,
          position: 'relative', // 자식 요소들의 기준점
        }}>
        {/* 1. 하이드레이션 전까지만 보일 정적 레이어 */}
        {/* JS 로딩 여부와 상관없이 무조건 렌더링됨 */}
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
            zIndex: 0, // 가장 아래에 배치
            color: '#ffffff',
            textAlign: 'center',
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
                <GlobalCSS />
                <BasicLayout>{children}</BasicLayout>
              </ReactQueryProvider>
            </ConfigureStore>
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
