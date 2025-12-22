'use client';
import { type FC } from 'react';
import styled from 'styled-components';
import { allProjects, allPackages } from '@contentlayer/generated';

import TextItem from '@components/molecules/TextItem';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin: 32px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const SectionTitle = styled.h2`
  padding-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: inherit;
  opacity: 0.8;
  border-bottom: 0.5px solid #ecebeb7f;
`;

const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const ArchiveList: FC = () => {
  const projects = allProjects.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const packages = allPackages.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <Container>
      <Column>
        <SectionTitle style={{ borderColor: '#ecebebc1' }}>
          PROJECT
        </SectionTitle>
        <ListArea style={{ paddingTop: '12px' }}>
          {projects.map((item, index) => (
            <TextItem
              key={item.slug}
              href={`/archive/project/${item.slug}`}
              title={item.title}
              index={index + 1}
              stacks={item.stack}
              description={item.description}
              indexCircle={true}
            />
          ))}
        </ListArea>
      </Column>
      <Column style={{ marginTop: '4px' }}>
        <SectionTitle style={{ width: '88%' }}>PACKAGE</SectionTitle>
        <ListArea>
          {packages.map((item, index) => (
            <TextItem
              key={item.slug}
              href={`/archive/package/${item.slug}`}
              title={item.title}
              index={index + 1}
              stacks={item.stack}
              description={item.description}
            />
          ))}
        </ListArea>
      </Column>
    </Container>
  );
};

export default ArchiveList;
