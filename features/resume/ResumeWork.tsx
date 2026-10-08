import { type FC } from 'react';
import { allWorks } from '@contentlayer/generated';
import { useTranslation } from '@hooks/useTranslation';
import { getLocalizedDocs } from '@lib/content';

import ReadItem from '@components/molecules/ReadItem';

const ResumeWork: FC = () => {
  const { locale } = useTranslation();
  const localizedWorks = getLocalizedDocs(allWorks, locale);

  const works = localizedWorks
    .filter(
      (work): work is typeof work & { resume: NonNullable<typeof work.resume> } =>
        Boolean(work.resume && work.resume.title),
    )
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <>
      {works.map((work) => {
        const title = `${work.resume.title ?? ''}${work.resume.role ? ` — ${work.resume.role}` : ''}`;
        const sub = work.resume.skills?.length
          ? work.resume.skills.join(' · ')
          : '';
        return (
          <ReadItem
            key={work.slug}
            title={title}
            sub={sub}
            desc={work.resume.description ?? ''}
          />
        );
      })}
    </>
  );
};

export default ResumeWork;
