import React from 'react';
import styled from 'styled-components';

const ContentsArea = styled.section`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
`;

export interface PackageContentsProps {}

const PackageContents: React.FC = () => {
  return <ContentsArea>패키지 설명문</ContentsArea>;
};

export default PackageContents;
