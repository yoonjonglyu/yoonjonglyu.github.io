import generateMeta from '@lib/seo/generateMeta';

import WorkList from '@features/work/WorkList';

export const metadata = generateMeta({
  title: 'Work',
  description:
    'UI 아키텍처, 컴포넌트 시스템, 유틸 라이브러리, PWA 등 실제 제품 단위로 정리한 작업 목록입니다.',
  url: '/work',
  keywords: [
    'Frontend Portfolio',
    'UI Architecture',
    'Component System',
    'Utility Library',
    'Web Product',
  ],
  type: 'website',
  robots: true,
});

export default function WorkPage() {
  return <WorkList />;
}
