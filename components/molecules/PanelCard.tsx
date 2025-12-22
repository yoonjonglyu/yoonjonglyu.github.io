import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

import NoImage from '../../assets/images/noimg.png';

export interface PanelCardProps {
  href: string;
  title: string;
  summary: string;
  stacks?: string[];
  thumbnail?: {
    src?: string;
    alt?: string;
  };
  featured?: boolean;
}

const Panel = styled.article<{ $featured?: boolean }>`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 140px;

  ${({ $featured }) =>
    $featured &&
    `
      max-width: 1080px;
    `}

  @media (max-width: 1024px) {
    margin: 0 auto 68px;
  }
`;

const Thumbnail = styled.div<{ $featured?: boolean }>`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
  background: #0b1020;

  img {
    object-fit: cover;
    transition: transform 0.6s ease, opacity 0.4s ease;
  }

  ${Panel}:hover & img {
    transform: scale(${({ $featured }) => ($featured ? 1.06 : 1.04)});
    opacity: 0.9;
  }
`;

const Caption = styled.div`
  margin-top: 28px;
  padding-left: 4px;
  max-width: 720px;
`;

const Title = styled.h3<{ $featured: boolean }>`
  font-size: ${({ $featured }) => ($featured ? '1.8rem' : '1.45rem')};
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.3;

  a {
    color: inherit;
    text-decoration: none;

    &:focus-visible {
      outline: 2px solid var(--color-point);
      outline-offset: 4px;
      border-radius: 4px;
    }
  }
`;

const Summary = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  margin: 0;

  ${Panel}:hover & {
    opacity: 0.75;
    transform: translateY(0);
  }
  @media screen and (max-width: 768px) {
    opacity: 0.75;
    transform: translateY(0);
  }
`;

const StackList = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const StackItem = styled.li`
  font-size: 0.75rem;
  opacity: 0.6;
  letter-spacing: 0.02em;
`;

const FeaturedBadge = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--color-point);
`;

const PanelCard: FC<PanelCardProps> = ({
  href,
  title,
  summary,
  stacks,
  thumbnail,
  featured = false,
}) => {
  const [imgsrc, setImgsrc] = useState(thumbnail?.src || NoImage);

  return (
    <Panel $featured={featured}>
      <Thumbnail $featured={featured}>
        <Link href={href} tabIndex={-1}>
          <Image
            src={imgsrc}
            alt={thumbnail?.alt || title}
            fill
            priority={featured}
            onError={() => setImgsrc(NoImage)}
          />
        </Link>
      </Thumbnail>

      <Caption>
        {featured && <FeaturedBadge>FEATURED WORK</FeaturedBadge>}

        <Title $featured={featured}>
          <Link href={href}>{title}</Link>
        </Title>

        <Summary>{summary}</Summary>

        {stacks && stacks.length > 0 && (
          <StackList>
            {stacks.slice(0, 3).map((stack) => (
              <StackItem key={stack}>{stack}</StackItem>
            ))}
            {stacks.length > 3 && <StackItem>+{stacks.length - 3}</StackItem>}
          </StackList>
        )}
      </Caption>
    </Panel>
  );
};

export default PanelCard;
