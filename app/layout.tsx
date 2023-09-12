import { Metadata } from 'next';
import 'normalize.css/normalize.css';

import StyledComponentsRegistry, {
  GlobalCSS,
} from '../provider/style/GlobalCSS';
import BasicLayout from '../components/layouts/BasicLayout';
import ConfigureStore from '../store';
import ReactQueryProvider from '../provider/query/QueryProvider';

export const metadata: Metadata = {
  title: 'ISA Archive',
  description: 'dev ISA archive',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='kr'>
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
