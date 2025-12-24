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
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
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
      <body>
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
