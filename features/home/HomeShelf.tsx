import { type FC, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import Card from '@components/atoms/Card';
import WCarousel from '@components/organisms/WCarousel';
import useSelectList from '@hooks/select/useSelectList';
import NoImage from '../../assets/images/noimg.png';

const Item = styled.ul`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 320px;
  padding: 10px 5px;
  list-style: none;
  box-sizing: border-box;
  touch-action: pan-y;

  & li {
    flex: 1;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03); /* 아주 투명한 화이트 */
    border: 1px solid rgba(255, 255, 255, 0.08); /* 은은한 테두리 */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px); /* 유리 질감 */
  }

  & li:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.07);
    border-color: var(--color-point); /* 포인트 컬러로 강조 */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }

  & li a {
    display: block;
    color: inherit;
    text-decoration: none;
    -webkit-user-drag: none;
  }

  /* 이미지 영역 오버레이 효과 */
  & .img-wrapper {
    position: relative;
    width: 100%;
    height: 140px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 60%,
        rgba(32, 37, 53, 0.8)
      );
    }
  }

  & li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    pointer-events: none;
  }

  & li:hover img {
    transform: scale(1.1); /* 호버 시 이미지 확대 */
  }

  & li h2 {
    margin: 15px 15px 8px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & li p {
    margin: 0 15px 15px;
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(203, 213, 245, 0.7); /* 서브 텍스트 명도 조절 */

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    gap: 15px;
  }
`;

const HomeShelf: FC = () => {
  const { selectList, updateSelectList } = useSelectList();

  useEffect(() => {
    updateSelectList();
  }, []);

  // 끊김 방지를 위한 메모이제이션
  const carouselItems = useMemo(() => {
    if (!selectList.length) return [];

    const chunks = [selectList.slice(0, 3), selectList.slice(3, 6)];

    return chunks.map((items, key) => (
      <Item key={key}>
        {items.map((item) => (
          <li key={item.idx}>
            <Link href={item.href || ''} draggable='false'>
              <div className='img-wrapper'>
                <Image
                  src={item.img || NoImage}
                  alt={item.title || 'article'}
                  layout='fill'
                  draggable={false}
                />
              </div>
            </Link>
            <Link href={item.href || ''} draggable='false'>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          </li>
        ))}
      </Item>
    ));
  }, [selectList]);

  return (
    <Card
      css={`
        padding: 6px;
        background: #12151f; /* 배경색 통일 */
        border: 1px solid rgba(255, 255, 255, 0.05);
      `}>
      {carouselItems.length > 0 && (
        <WCarousel items={carouselItems} carouselHeight='320px' />
      )}
    </Card>
  );
};

export default HomeShelf;
