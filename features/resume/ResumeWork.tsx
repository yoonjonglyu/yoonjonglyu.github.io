import { type FC } from 'react';
import { allWorks } from '@contentlayer/generated';

import ReadItem from '@components/molecules/ReadItem';

const ResumeWork: FC = () => {
  const works = allWorks
    // .filter((work) => work.featured) // Resume에는 핵심 Work만
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  return (
    <>
      {works.map((work) => (
        <ReadItem
          key={work.slug}
          title={`${work.resume.title} — ${work.resume.role}`}
          sub={work.resume.skills.join(' · ')}
          desc={work.resume.description}
        />
      ))}
      <ReadItem
        title='Asharyu Design System — Author'
        sub='TypeScript · React · Storybook'
        desc='A Storybook-based component library designed to support consistent UI patterns and component reuse across projects.'
      />
    </>
  );
};

export default ResumeWork;
