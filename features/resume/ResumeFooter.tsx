import { type FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterWrap = styled.footer`
  margin-bottom: 12px;
  font-size: 14px;
  color: #9ca3af;
  & a {
    color: #9ca3af;
    text-decoration: none;
  }
  & .disabled {
    pointer-events: none;
    cursor: default;
    color: rgba(156, 163, 175, 0.6);
  }
`;

const ResumeFooter: FC = () => (
  <FooterWrap>
    <Link
      href='https://github.com/yoonjonglyu'
      target='_blank'
      rel='noopener noreferrer'>
      GitHub
    </Link>
    ·
    <Link
      href='mailto:yoonjonglyu@gmail.com'
      target='_blank'
      rel='noopener noreferrer'>
      Email
    </Link>
    ·
    <Link
      className='disabled'
      href='https://www.linkedin.com/in/dev-isa-ryu-b081171b9/'
      target='_blank'
      aria-disabled='true'
      rel='noopener noreferrer'>
      LinkedIn
    </Link>
  </FooterWrap>
);

export default ResumeFooter;
