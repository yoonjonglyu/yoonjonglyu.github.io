import { type FC } from 'react';
import { allWorks } from '@contentlayer/generated';

import ReadItem from '@components/molecules/ReadItem';

const ResumeWork: FC = () => {
  const works = allWorks
    // .filter((work) => work.featured) // Resume에는 핵심 Work만
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return (
    <>
      {/* {works.map((work) => (
        <ReadItem
          key={work.slug}
          title={work.title}
          sub={work.tags?.join(' · ') ?? ''}
          desc={work.summary}
        />
      ))} */}
      <ReadItem
        title='Memo — PWA Memo Application'
        sub='TypeScript · React · Storybook'
        desc='Component-driven PWA memo application optimized for short-lived planning and fast input workflows, with offline support and cross-device installation.'
      />
      <ReadItem
        title='Isa Util — TypeScript Utility Library'
        sub='TypeScript · Node.js'
        desc='A reusable utility library focused on async orchestration and identifier-based request control, designed for maintainability across multiple projects.'
      />
      <ReadItem
        title='Portfolio — Personal Archive Website'
        sub='TypeScript · React · Next.js'
        desc='A content-driven personal archive built to organize projects, packages, and work history with a clear information hierarchy.'
      />
      <ReadItem
        title='Asharyu Design — React Component Library'
        sub='TypeScript · React · Storybook'
        desc='A Storybook-based component library designed to support consistent UI patterns and component reuse across projects.'
      />
    </>
  );
};

export default ResumeWork;
