'use client';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

const GlobalCSS = createGlobalStyle`
   :root {
    --color-background-space: #12172f;
    --color-background-card: #1e202c;
    --color-point: #8a40b8;
    --color-rare: #c4c118;
    --color-unique: #9e2e06;
    --color-legend: #6e0303;
  }
  body {
    background: var(--color-background-space);
    font-family: 'Noto Sans', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
    &::-webkit-scrollbar {
      width: 8px;
      background: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-point);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-track {
      background: var(--color-background-card);
      border-radius: 12px;
    }
  }
`;
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
  align-items: center;
  position: fixed;
  width: 100%;
  height: 44px;
  padding: 3px;
  background: var(--color-background-card);
  border-bottom: 0.5px solid #66666691;
`;
const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 960px;
  padding: 0 8px;
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
  & ul li a {
    text-decoration: none;
    color: inherit;
  }
  & ul li a:hover {
    color: var(--color-point);
  }
`;
const Contents = styled.main`
  flex-grow: 1;
  margin-top: 44px;
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

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Wrap>
      <GlobalCSS />
      <Header>
        <HeaderNav>
          <strong>ISA Archive</strong>
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

export default DefaultLayout;
