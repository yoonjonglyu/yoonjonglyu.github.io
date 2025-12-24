import React from 'react';
import { styled } from 'styled-components';
import Link from 'next/link';

import Img from '@components/atoms/Img';
import Card from '@components/atoms/Card';

import NoImage from '../../assets/images/noimg.png';

const CardThumnail = styled.div`
  & img {
    width: 100%;
    height: 160px;
  }
`;
const CardBody = styled.div`
  height: 100px;
  padding: 16px;

  & h3 {
    margin: 0;
    padding: 0;
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  & p {
    display: -webkit-box;
    margin: 8px 0;
    font-size: 0.9rem;
    word-break: break-word;
    overflow-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export interface PostCardProps {
  thumnail: { src?: string; alt: string };
  title: string;
  description: string;
  href: string;
}

const PostCard: React.FC<PostCardProps> = (props) => {
  const { thumnail, title, description, href } = props;

  return (
    <Card
      css={`
        width: 98%;
        max-width: 280px;
        padding: 0;
        border-radius: 4px;
        overflow: hidden;

        & a {
          color: inherit;
          text-decoration: none;
        }
        & a:hover {
          color: var(--color-point);
        }
        @media (max-width: 590px) {
          max-width: unset;
          margin: 0 auto;
        }
      `}>
      <CardThumnail>
        <Link href={href}>
          <Img src={thumnail.src || NoImage} alt={thumnail.alt} noImage={NoImage.src} />
        </Link>
      </CardThumnail>
      <CardBody>
        <Link href={href}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Link>
      </CardBody>
    </Card>
  );
};

export default PostCard;
