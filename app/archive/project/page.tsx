import generateMeta from '@lib/seo/generateMeta';

import ProjectList from '@features/project/ProjectList';
export const metadata = generateMeta({
  title: 'Projects',
  description:
    'ISA가 기획·개발에 참여한 프론트엔드 중심의 프로젝트 기록입니다. UI 아키텍처, 상태 관리, 컴포넌트 설계 경험을 중심으로 정리되어 있습니다.',
  url: '/archive/project',
  keywords: [
    'frontend project',
    'react project',
    'pwa project',
    'component driven development',
  ],
  type: 'website',
  robots: true,
});


export default function ProjectPage() {
  return <ProjectList />;
}
