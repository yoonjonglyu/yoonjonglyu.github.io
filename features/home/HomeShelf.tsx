import React from 'react';
import styled from 'styled-components';

import Card from '../../components/atoms/Card';

export interface HomeShelfProps {}

const HomeShelf: React.FC<HomeShelfProps> = () => {
  return (
    <Card
      css={`
        min-height: 400px;
      `}>
      아카이브 선반
      <p>한 칸에 들어가는 아이템 갯수는 3에서 4가 기본이나 유동적으로</p>
    </Card>
  );
};

export default HomeShelf;
