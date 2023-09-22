import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Card from '../../components/atoms/Card';
import WCarousel from '../../components/organisms/WCarousel';

import useSelectList from '../../hooks/select/useSelectList';

import NoImage from '../../assets/images/noimg.png';

const Item = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  height: 300px;
  padding: 3px;
  list-style: none;
  box-sizing: border-box;

  & li {
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #282828;
  }
  & li img {
    width: 100%;
    height: 155px;
  }
  & li h2 {
    margin: 6px 0 3px 0;
    font-size: 1rem;
  }
  & li p {
    display: -webkit-box;
    width: 100%;
    margin: 8px 0;
    padding: 0 12px;
    font-size: 0.8rem;
    line-height: 1rem;
    box-sizing: border-box;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 920px;
  }
`;

export interface HomeShelfProps {}

const HomeShelf: React.FC<HomeShelfProps> = () => {
  const { selectList, updateSelectList } = useSelectList();

  useEffect(() => {
    updateSelectList();
  }, []);

  return (
    <Card
      css={`
        min-height: 300px;
        @media (max-width: 1024px) {
          min-height: 920px;
        }
      `}>
      <WCarousel
        items={[selectList.slice(0, 3), selectList.slice(3, 6)].map(
          (items: typeof selectList, key) => {
            return (
              <Item key={key}>
                {items.map((item) => {
                  return (
                    <li key={item.idx}>
                      <Image src={item.img || NoImage} alt='article' />
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </li>
                  );
                })}
              </Item>
            );
          },
        )}
        carouselHeight='300px'
      />
    </Card>
  );
};

export default HomeShelf;
