import React from 'react';
import styled from 'styled-components';

import Card from '../../components/atoms/Card';

const ContentsArea = styled.section`
  flex: 3;
  overflow: hidden;
`;

export interface HomeContentsProps {}

const HomeContents: React.FC<HomeContentsProps> = () => {
  return (
    <ContentsArea>
      <Card>asd</Card>
    </ContentsArea>
  );
};

export default HomeContents;
