import { type FC } from 'react';
import styled from 'styled-components';

import Link from 'next/link';

const Item = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 16px;
  padding: 20px 0;

  transition: color 0.15s ease;

  &:hover h3 {
    color: #c084fc;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
  
`;

const Index = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.6;
`;

const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-decoration: none;
  &:active {
    opacity: 0.8;
  }
  

`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`;

const Description = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`;

const StackList = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 4px;
  flex-wrap: wrap;
`;

const Stack = styled.span`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;

  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.75);

  white-space: nowrap;
`;

export interface TextItemProps {
  index: number;
  title: string;
  description: string;
  stacks: string[];
  href?: string;
}

const TextItem: FC<TextItemProps> = ({
  index,
  title,
  description,
  stacks,
  href
}) => {
  return (
    <Item>
      <Index>{String(index).padStart(2, '0')}</Index>

      <Content href={href || '#'}>
        <Title>{title}</Title>
        <Description>{description}</Description>

        <StackList>
          {stacks.map((stack) => (
            <Stack key={stack}>{stack}</Stack>
          ))}
        </StackList>
      </Content>
    </Item>
  );
};

export default TextItem;
