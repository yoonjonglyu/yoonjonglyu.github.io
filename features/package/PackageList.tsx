'use client';
import { type FC } from 'react';
import styled from 'styled-components';
import { allPackages } from '@contentlayer/generated';

import TextItem from '@components/molecules/TextItem';

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
  const packages = allPackages.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <Container>
      <ListArea>
        {packages.map((item, index) => (
          <TextItem
            key={item.slug}
            href={`/archive/package/${item.slug}`}
            title={item.title}
            index={index + 1}
            stacks={item.stack}
            description={item.description}
          />
        ))}
      </ListArea>
    </Container>
  );
};

export default PackageList;
