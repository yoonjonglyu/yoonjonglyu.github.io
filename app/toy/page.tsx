'use client';
import { Metadata } from 'next';
import styled from 'styled-components';

import ToyList from '../../features/toy/ToyList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;

export const metadata: Metadata = {
  title: 'toy',
  description: 'toy',
};

export default function ToyPage() {
  return (
    <Container>
      <ToyList />
    </Container>
  );
}
