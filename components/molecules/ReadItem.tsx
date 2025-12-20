import { type FC } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin-bottom: 24px;
  break-inside: avoid;
`;

const ItemTitle = styled.div`
  font-size: 16px;

  font-weight: 600;
  white-space: pre-line;
`;

const ItemSub = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #9ca3af;
  white-space: pre-line;
`;

const ItemDesc = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
`;
const Highlight = styled.span`
  color: var(--color-point);
  font-weight: 500;
`;

export interface ReadItemProps {
  title?: string;
  sub?: string;
  desc?: string;
  highlight?: string[];
}

const ReadItem: FC<ReadItemProps> = ({ title, sub, desc, highlight = [] }) => (
  <Item>
    {title && <ItemTitle>{title}</ItemTitle>}
    {sub && <ItemSub>{sub}</ItemSub>}
    {desc && (
      <ItemDesc>
        {highlight.length > 0 ? highlightKeywords(desc, highlight) : desc}
      </ItemDesc>
    )}
  </Item>
);

export default ReadItem;

function highlightKeywords(text: string, keywords: string[]) {
  const parts = text.split(
    new RegExp(`(${keywords.map(escapeRegExp).join('|')})`, 'gi'),
  );
  return (
    <>
      {parts.map((part, index) =>
        keywords.some(
          (keyword) => keyword.toLowerCase() === part.toLowerCase(),
        ) ? (
          <Highlight key={index}>{part}</Highlight>
        ) : (
          part
        ),
      )}
    </>
  );
}

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
