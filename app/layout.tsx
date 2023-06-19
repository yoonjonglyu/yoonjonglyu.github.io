import { Metadata } from 'next';
import 'normalize.css/normalize.css';

import DefaultLayout from '../components/layouts/defaultLayout';

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
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  );
}
