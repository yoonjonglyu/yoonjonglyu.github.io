'use client';
import { type FC } from 'react';
import { styled } from 'styled-components';
import { notFound } from 'next/navigation';
import { allProjects } from '@contentlayer/generated';

import ContentsCard from '../../components/molecules/ContentsCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;
const ArticleArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;
export interface ProjectArticleProps {
  params: {
    slug: string;
  };
}

const ProjectArticle: FC<ProjectArticleProps> = ({ params }) => {
  const project = allProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <Container>
      <ArticleArea>
        <ContentsCard header={project.title} contents={project.body.code} />
      </ArticleArea>
    </Container>
  );
};

export default ProjectArticle;
