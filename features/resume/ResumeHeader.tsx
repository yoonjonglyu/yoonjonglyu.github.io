import { type FC } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  margin-bottom: 96px;
`;

const Name = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.2;

  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 48px;
    height: 2px;
    background: var(--color-point);
    opacity: 0.9;
  }
`;

const Title = styled.p`
  margin-top: 18px;
  font-size: 14px;
  color: #9ca3af;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const Summary = styled.p`
  margin-top: 28px;
  font-size: 15px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 680px;

  strong {
    color: #ffffff;
    font-weight: 500;
  }
`;

const ResumeHeader: FC = () => (
  <HeaderWrap>
    <Name>YOON JONG RYU</Name>
    <Title>Frontend Engineer · Remote-ready</Title>
    <Summary>
      <strong>
        Frontend engineer focused on component-driven architecture and
        type-safe UI development.
      </strong>{' '}
      Experienced in building Storybook-based design systems, PWAs, and
      reusable utility libraries.
    </Summary>
  </HeaderWrap>
);

export default ResumeHeader;
