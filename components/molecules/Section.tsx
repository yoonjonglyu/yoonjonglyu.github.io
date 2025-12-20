import { type FC, ReactNode } from 'react';
import styled from 'styled-components';

const SectionWrap = styled.section`
  margin-top: 64px;
`;

const SectionTitle = styled.h2`
  font-size: 13px;
  letter-spacing: 0.12em;
  color: #9ca3af;
  margin-bottom: 20px;
`;

export interface SectionProps {
  title: string;
  children?: ReactNode;
}

const Section: FC<SectionProps> = ({ title, children }) => (
  <SectionWrap>
    <SectionTitle>{title.toUpperCase()}</SectionTitle>
    {children}
  </SectionWrap>
);

export default Section;