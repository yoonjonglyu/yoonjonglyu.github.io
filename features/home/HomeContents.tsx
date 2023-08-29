'use client';
import React from 'react';
import styled from 'styled-components';

import HomeBanner from './HomeBanner';
import HomeShelf from './HomeShelf';
import HomeSide from './HomeSide';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;

const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export interface HomeContentsProps {}

const HomeContents: React.FC<HomeContentsProps> = () => {
  return (
    <Container>
      <ContentsArea>
        <HomeBanner />
        <HomeShelf />
      </ContentsArea>
      <HomeSide />
    </Container>
  );
};

export default HomeContents;
