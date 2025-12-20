'use client';
import { type FC } from 'react';
import styled from 'styled-components';

import PanelCard from '@components/molecules/PanelCard';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 38px;
`;

const Intro = styled.header`
  max-width: 640px;
  margin-bottom: 60px;
  border-left: 2px solid var(--color-point);
  padding-left: 16px;

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    opacity: 0.75;
    margin: 0;
  }
`;

const List = styled.section`
  display: flex;
  flex-direction: column;

  & > *:nth-child(even) {
    transform: translateX(48px);
  }

  @media (max-width: 1024px) {
    & > * {
      transform: none !important;
    }
  }
`;

const dumyWorks = [
  {
    href: '/work/memo',
    title: 'Memo — PWA Memo Application',
    summary:
      'Offline-first memo application focused on speed, minimal UI, and ephemeral planning.',
    stacks: ['TypeScript', 'React', 'PWA'],
    thumbnail: { src: '', alt: 'Memo App Screenshot' },
  },
  {
    href: '/work/portfolio',
    title: 'Portfolio Website',
    summary:
      'A personal portfolio website showcasing projects and skills using modern web technologies.',
    stacks: ['Next.js', 'Styled-Components', 'Vercel'],
    thumbnail: { src: '', alt: 'Portfolio Screenshot' },
  },
];

const WorkList: FC = () => {
  return (
    <Container>
      <Intro>
        <p>
          Selected works focused on UI architecture, component systems, and
          interaction patterns designed for real-world products.
        </p>
      </Intro>

      <List>
        {dumyWorks.map((work, index) => (
          <PanelCard
            key={work.title}
            href={work.href}
            title={work.title}
            summary={work.summary}
            stacks={work.stacks}
            thumbnail={work.thumbnail}
            featured={index === 0}
          />
        ))}
      </List>
    </Container>
  );
};

export default WorkList;
