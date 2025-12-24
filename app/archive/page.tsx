import generateMeta from '@lib/seo/generateMeta';

import ArchiveList from '@features/archive/ArchiveList';

export const metadata = generateMeta({
  title: 'Archive',
  description:
    '프론트엔드 개발 과정에서의 기록, 실험, 기술 정리를 모아둔 개인 아카이브입니다.',
  url: '/archive',
  image: `/api/og?title=ISA Archive`,
  keywords: [
    'frontend archive',
    'typescript projects',
    'javascript library',
    'personal development archive',
  ],
  type: 'website',
  robots: true,
});


export default function ArchivePage() {
  return <ArchiveList />;
}
