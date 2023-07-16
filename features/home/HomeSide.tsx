import React from 'react';
import styled from 'styled-components';

import SideCard from '../../components/molecules/SideCard';

const SideArea = styled.aside`
  flex: 1;
  overflow: hidden;
`;

export interface HomeSideProps {}

const HomeSide: React.FC<HomeSideProps> = () => {
  return (
    <SideArea>
      <SideCard header={<h3>사이드바</h3>} />
    </SideArea>
  );
};

export default HomeSide;
