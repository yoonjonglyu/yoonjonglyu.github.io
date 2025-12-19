'use client';
import { type FC } from 'react';
import styled from 'styled-components';
import { allPackages } from '@contentlayer/generated';

import PostCard from '@components/molecules/PostCard';

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

const PackageList: FC = () => {
  return (
    <Container>
      <ListArea>
        {allPackages.map((item) => (
          <PostCard
            key={item.slug}
            thumnail={{ src: '', alt: item.title }}
            href={`/archive/package/${item.slug}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </ListArea>
    </Container>
  );
};

export default PackageList;
