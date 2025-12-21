'use client';
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 배경색을 깊이감 있는 다크 톤으로 고정 */
  background-color: #0b0e14; 
  color: #ffffff;
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px; /* 높이를 조금 키워 여유를 줌 */
  z-index: 99999;
  /* 유리 질감 적용 */
  background: rgba(11, 14, 20, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 양 끝 정렬 */
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
  box-sizing: border-box;

  & strong {
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.5px;
    background: linear-gradient(to right, #fff, var(--color-point));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
  }

  & ul {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 32px; /* 간격 확장 */
  }

  & ul li a {
    font-size: 0.95rem;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;

    /* 호버 시 밑줄 애니메이션 */
    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--color-point);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: #fff;
      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 16px;
    & ul { gap: 16px; }
  }
`;

const Contents = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1240px;
  margin: 80px auto 40px auto; /* 헤더 높이만큼 마진 */
  padding: 0 20px;
  box-sizing: border-box;
`;

const Footer = styled.footer`
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);

  & small {
    display: block;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    font-size: 0.8rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Wrap>
      <Header>
        <HeaderNav>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <strong>ISA Archive</strong>
          </Link>
          <ul>
            <li><Link href='/resume'>Resume</Link></li>
            <li><Link href='/work'>Work</Link></li>
            <li><Link href='/archive'>Archive</Link></li>
          </ul>
        </HeaderNav>
      </Header>
      
      <Contents>{children}</Contents>
      
      <Footer>
        <small>© 2025 ISA Archive • Designed by YOONJONGRYU(github:yunjonglyu)</small>
      </Footer>
    </Wrap>
  );
};

export default BasicLayout;