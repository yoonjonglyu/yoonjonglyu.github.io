'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import GlobalCSS from '../../provider/style/GlobalCSS';

const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  box-sizing: border-box;
`;
const Header = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 44px;
  padding: 3px;
  background: var(--color-background-card);
  border-bottom: 0.5px solid #66666691;
  z-index: 999999;
`;
const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 3px;
  margin: 0 auto;
  gap: 18px;
  box-sizing: border-box;

  & strong {
    color: var(--color-point);
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2rem;
  }
  & ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 6px;
  }
  & ul li {
    display: inline-block;
    color: var(--color-rare);
  }
  & a {
    text-decoration: none;
    color: inherit;
  }
  & ul li a:hover {
    color: var(--color-point);
  }

  @media (max-width: 1024px) {
    gap: 8px;
  }
`;
const Contents = styled.main`
  flex-grow: 1;
  width: 100%;
  max-width: 1200px;
  margin: 44px auto 0 auto;
`;
const Footer = styled.footer`
  padding: 4px 0;
  background: var(--color-background-card);

  & small {
    display: block;
    text-align: center;
    color: var(--color-unique);
  }
`;

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Wrap>
      <GlobalCSS />
      <Header>
        <HeaderNav>
        <Link href='/'><strong>ISA Archive</strong></Link>
          <ul>
            <li>
              <Link href='/toy'>Toy</Link>
            </li>
            <li>
              <Link href='/snippet'>Snippet</Link>
            </li>
            <li>
              <Link href='/project'>Project</Link>
            </li>
            <li>
              <Link href='/package'>Package</Link>
            </li>
          </ul>
        </HeaderNav>
      </Header>
      <Contents>{children}</Contents>
      <Footer>
        <small>© 2023 ISA(yunjonglyu)</small>
      </Footer>
    </Wrap>
  );
};

export default BasicLayout;
