import React from 'react';
import styled from 'styled-components';

import HomeBanner from './HomeBanner';
import HomeShelf from './HomeShelf';

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
    <ContentsArea>
      <HomeBanner />
      <HomeShelf />
    </ContentsArea>
  );
};

export default HomeContents;
