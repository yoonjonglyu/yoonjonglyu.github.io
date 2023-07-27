import React from 'react';
import styled from 'styled-components';

import Card from '../../components/atoms/Card';
import HomeBanner from './HomeBanner';

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
      <Card
        css={`
          min-height: 400px;
        `}>
        아카이브
      </Card>
    </ContentsArea>
  );
};

export default HomeContents;
