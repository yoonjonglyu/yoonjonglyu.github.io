'use client';
import { type FC } from 'react';
import styled from 'styled-components';
import { allProjects } from '@contentlayer/generated';
import { useTranslation } from '@hooks/useTranslation';
import { getLocalizedDocs } from '@lib/content';

import TextItem from '@components/molecules/TextItem';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;
const ListArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const ProjectList: FC = () => {
  const { locale } = useTranslation();
  const projects = getLocalizedDocs(allProjects, locale);

  return (
    <Container>
      <ListArea>
        {projects.map((item, index) => (
          <TextItem
            key={item.slug}
            href={`/archive/project/${item.slug}`}
            title={item.title}
            index={index + 1}
            stacks={item.stack}
            description={item.description}
          />
        ))}
      </ListArea>
    </Container>
  );
};

export default ProjectList;
