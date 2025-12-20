import { type FC } from 'react';
import styled from 'styled-components';

const FooterWrap = styled.footer`
  margin-top: 80px;
  font-size: 14px;
  color: #9ca3af;
`;

const ResumeFooter: FC = () => (
  <FooterWrap>
    GitHub · Email · LinkedIn
  </FooterWrap>
);


export default ResumeFooter;