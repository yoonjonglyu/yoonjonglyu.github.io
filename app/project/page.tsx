'use client';
import { Metadata } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
`;

export const metadata: Metadata = {
  title: 'project',
  description: 'project',
};

export default function ProjectPage() {
  return <Container></Container>;
}
