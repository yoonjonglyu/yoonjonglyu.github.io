import { type FC } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  margin-bottom: 56px;
`;

const Name = styled.h1`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const Title = styled.p`
  margin-top: 6px;
  font-size: 15px;
  color: #9ca3af;
`;

const Summary = styled.p`
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.6;
  color: #d1d5db;
  max-width: 720px;
`;

const ResumeHeader: FC = () => (
  <HeaderWrap>
    <Name>YOON JONG RYU</Name>
    <Title>Frontend Engineer · Remote-ready</Title>
    <Summary>
      Frontend engineer focused on component-driven architecture and
      type-safe UI development. Experienced in building Storybook-based
      design systems, PWAs, and reusable utility libraries.
    </Summary>
  </HeaderWrap>
);
export default ResumeHeader;