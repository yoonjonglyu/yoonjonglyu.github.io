import generateMeta from '@lib/seo/generateMeta';

import Resume from '@features/resume/Resume';

export const metadata = generateMeta({
  title: 'Resume',
  description:
    'Frontend Engineer ISA의 이력 요약입니다. 프로젝트, 라이브러리 개발 경험과 기술 스택을 정리했습니다.',
  url: '/resume',
  keywords: [
    'Frontend Engineer Resume',
    'React Developer',
    'TypeScript',
    'UI Architecture',
  ],
  type: 'website',
  robots: true,
});

export default function ResumePage() {
  return <Resume />;
}
