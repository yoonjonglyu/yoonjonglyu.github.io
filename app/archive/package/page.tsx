import generateMeta from '@lib/seo/generateMeta';

import PackageList from '@features/package/PackageList';

export const metadata = generateMeta({
  title: 'Packages',
  description:
    'ISA가 설계·개발·유지 중인 TypeScript 기반 유틸리티 및 라이브러리 패키지 모음입니다. 재사용성과 구조 설계를 중심으로 한 코드 자산을 기록합니다.',
  url: '/archive/package',
  keywords: [
    'typescript package',
    'javascript library',
    'utility library',
    'npm package',
  ],
  type: 'website',
  robots: true,
});

export default function PackagePage() {
  return <PackageList />;
}
