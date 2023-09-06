'use client';
import React, { useEffect } from 'react';
import { styled } from 'styled-components';

import PostCard from '../../components/molecules/PostCard';

import useToyList from '../../hooks/toy/useToyList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`;

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
  const { toyList, updateToyList } = useToyList();

  useEffect(() => {
    updateToyList();
  }, []);

  return (
    <Container>
      <ListArea>
        {toyList.map((item, key) => (
          <PostCard
            key={item.idx}
            thumnail={{ src: item.img, alt: item.title }}
            href={`/toy/article?post=${item.idx}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </ListArea>
    </Container>
  );
};

export default ToyList;
