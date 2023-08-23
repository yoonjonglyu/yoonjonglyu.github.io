'use client';
import { Metadata } from 'next';
import styled from 'styled-components';

import ProjectArticle from '../../../features/project/ProjectArticle';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;

export const metadata: Metadata = {
  title: 'project-Article',
  description: 'project-article',
};

export default function ProjectArticlePage() {
  return (
    <Container>
      <ProjectArticle title='Project Article' contents={'asdadsads'} />
    </Container>
  );
}
