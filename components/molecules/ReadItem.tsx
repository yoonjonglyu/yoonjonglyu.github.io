import { type FC } from 'react';
import styled from 'styled-components';

const Item = styled.div`
  margin-bottom: 24px;
  break-inside: avoid;
`;

const ItemTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const ItemSub = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: #9ca3af;
`;

const ItemDesc = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
`;

export interface ReadItemProps {
  title?: string;
  sub?: string;
  desc?: string;
}

const ReadItem: FC<ReadItemProps> = ({ title, sub, desc }) => (
  <Item>
    <ItemTitle>{title}</ItemTitle>
    <ItemSub>{sub}</ItemSub>
    <ItemDesc>{desc}</ItemDesc>
  </Item>
);

export default ReadItem;
