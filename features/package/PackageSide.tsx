import React from 'react';
import styled from 'styled-components';

import SideCard from '../../components/molecules/SideCard';

const SideArea = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: hidden;
  overflow-x: auto;
`;

export interface PackageSideProps {}

const PackageSide: React.FC<PackageSideProps> = () => {
  return (
    <SideArea>
      <SideCard header='패키지 목록' />
    </SideArea>
  );
};

export default PackageSide;
