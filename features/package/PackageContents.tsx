import React from 'react';
import styled from 'styled-components';

import Card from '../../components/atoms/Card';

const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export interface PackageContentsProps {}

const PackageContents: React.FC = () => {
  return (
    <ContentsArea>
      <Card
        css={`
          height: 600px;
          overflow: auto;
        `}></Card>
    </ContentsArea>
  );
};

export default PackageContents;
