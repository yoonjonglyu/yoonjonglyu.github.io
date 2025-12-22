'use client';

import { type FC } from 'react';
import styled from 'styled-components';

import PanelCard from '@components/molecules/PanelCard';
import { allWorks } from '@contentlayer/generated';

const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 38px auto 0;
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

const WorkList: FC = () => {
  const works = allWorks
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <Container>
      <Intro>
        <p>
          Selected works focused on UI architecture, component systems, and
          interaction patterns designed for real-world products.
        </p>
      </Intro>

      <List>
        {works.map((work) => (
          <PanelCard
            key={work.slug}
            href={`/work/${work.slug}`}
            title={work.title}
            summary={work.summary}
            stacks={work.tags ?? []}
            thumbnail={{
              src: work.thumbnail ?? '',
              alt: `${work.title} thumbnail`,
            }}
            featured={work.featured}
          />
        ))}
      </List>
    </Container>
  );
};

export default WorkList;
