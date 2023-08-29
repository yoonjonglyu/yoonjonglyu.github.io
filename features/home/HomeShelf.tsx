import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import Card from '../../components/atoms/Card';
import WCarousel from '../../components/organisms/WCarousel';

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
  return (
    <Card
      css={`
        min-height: 300px;
        @media (max-width: 1024px) {
          min-height: 920px;
        }
      `}>
      <WCarousel
        items={[0, 1].map((item) => {
          return (
            <Item key={item}>
              <li>
                <Image src={NoImage} alt='article' />
                <h2>제목</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </li>
              <li>
                <Image src={NoImage} alt='article' />
                <h2>제목</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </li>
              <li>
                <Image src={NoImage} alt='article' />
                <h2>제목</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </li>
            </Item>
          );
        })}
        carouselHeight='300px'
      />
    </Card>
  );
};

export default HomeShelf;
