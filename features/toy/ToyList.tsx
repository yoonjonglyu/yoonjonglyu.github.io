import React from 'react';
import { styled } from 'styled-components';

import PostCard from '../../components/molecules/PostCard';

const ListArea = styled.section`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export interface ToyListProps {}

const ToyList: React.FC<ToyListProps> = () => {
  return (
    <ListArea>
      {new Array(20).fill(true).map((item, key) => (
        <PostCard
          key={key}
          thumnail={{ alt: 'test' }}
          href='/'
          title='item'
          description='item description'
        />
      ))}
    </ListArea>
  );
};

export default ToyList;
