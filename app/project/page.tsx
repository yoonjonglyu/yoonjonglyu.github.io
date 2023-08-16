'use client';
import { Metadata } from 'next';
import styled from 'styled-components';

import ProjectList from '../../features/project/ProjectList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;

export const metadata: Metadata = {
  title: 'project',
  description: 'project',
};

export default function ProjectPage() {
  return (
    <Container>
      <ProjectList />
    </Container>
  );
}
