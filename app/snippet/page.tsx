'use client';
import { Metadata } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export const metadata: Metadata = {
  title: 'snippet',
  description: 'snippet',
};

export default function SnippetPage() {
  return <Container></Container>;
}
