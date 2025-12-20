import { FC } from 'react';
import styled from 'styled-components';
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
    alt: string;
  };
  featured?: boolean;
}

const Panel = styled.article<{ featured?: boolean }>`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 140px;
  ${(props) =>
    props.featured &&
    `
  max-width: 1080px;
`}
  @media (max-width: 1024px) {
    margin: 0 auto 68px;
  }
`;

const PanelLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: inherit;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 8px;
  background: #0b1020;

  img {
    object-fit: cover;
    transition: transform 0.6s ease, opacity 0.4s ease;
  }

  ${PanelLink}:hover & img {
    transform: scale(1.04);
    opacity: 0.9;
  }
`;

const Caption = styled.div`
  margin-top: 28px;
  padding-left: 4px;
`;

const Title = styled.h3`
  font-size: 1.45rem;
  font-weight: 600;
  margin: 0 0 8px;
`;

const Summary = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.75;
  max-width: 680px;
  margin: 0;
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

const PanelCard: FC<PanelCardProps> = ({
  href,
  title,
  summary,
  stacks,
  thumbnail,
  featured = false,
}) => {
  return (
    <Panel featured={featured}>
      <PanelLink href={href}>
        <Thumbnail>
          <Image
            src={thumbnail?.src || NoImage}
            alt={thumbnail?.alt || title}
            fill
            priority={false}
          />
        </Thumbnail>

        <Caption>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>

          {stacks && stacks.length > 0 && (
            <StackList>
              {stacks.slice(0, 3).map((stack) => (
                <StackItem key={stack}>{stack}</StackItem>
              ))}
            </StackList>
          )}
        </Caption>
      </PanelLink>
    </Panel>
  );
};

export default PanelCard;
