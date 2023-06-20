'use client';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalCSS = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
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
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0;
  padding: 0;
`;
const HeaderNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 44px;
  padding: 3px;
  background: var(--color-background-card);
  box-sizing: border-box;
  & div {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 960px;
    padding: 0 8px;
    margin: 0 auto;
    gap: 16px;
  }
  & span {
    color: var(--color-point);
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2rem;
  }
  & ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 8px;
  }
  & ul li {
    display: inline-block;
    color: var(--color-rare);
  }
`;
const Contents = styled.main`
  margin-top: 44px;
`;
const Footer = styled.footer``;

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Wrap>
      <GlobalCSS />
      <header>
        <HeaderNav>
          <div>
            <span>ISA Archive</span>
            <ul>
              <li>Toy</li>
              <li>Code</li>
              <li>Project</li>
              <li>Package</li>
            </ul>
          </div>
        </HeaderNav>
      </header>
      <Contents>{children}</Contents>
      <Footer></Footer>
    </Wrap>
  );
};

export default DefaultLayout;
