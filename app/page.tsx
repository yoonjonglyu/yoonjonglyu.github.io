'use client';
import styled from 'styled-components';

import HomeContents from '../features/home/HomeContents';
import HomeSide from '../features/home/HomeSide';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

export default function RootPage() {
  return (
    <Container>
      <HomeContents />
      <HomeSide />
    </Container>
  );
}
