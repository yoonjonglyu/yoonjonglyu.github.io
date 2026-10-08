'use client';
import React from 'react';
import styled, { css } from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LanguageSwitcher from '../molecules/LanguageSwitcher';
import { useTranslation } from '@hooks/useTranslation';

const Wrap = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #0b0e14;
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

  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;

const NavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 12px;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    gap: 12px;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ $isActive }) => ($isActive ? '#fff' : 'rgba(255, 255, 255, 0.6)')};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  /* 호버 및 활성 상태 밑줄 애니메이션 */
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    width: ${({ $isActive }) => ($isActive ? '100%' : '0')};
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
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background: rgba(255, 255, 255, 0.02);

  & small {
    display: block;
    text-align: center;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8rem;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1024px) {
    padding: 24px 16px;
    & small {
      font-size: 0.72rem;
      letter-spacing: 0.4px;
    }
  }
`;

interface BasicLayoutProps {
  children: React.ReactNode;
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const navItems = [
    { label: t.nav.resume, href: '/resume' },
    { label: t.nav.work, href: '/work' },
    { label: t.nav.archive, href: '/archive' },
  ];

  return (
    <Wrap>
      <Header>
        <HeaderNav>
          <Link href='/' style={{ textDecoration: 'none' }}>
            <strong>ISA Archive</strong>
          </Link>
          <NavRight>
            <NavList>
              {navItems.map((item) => {
                const isActive = pathname?.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      $isActive={isActive}
                      aria-current={isActive ? 'page' : undefined}>
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </NavList>
            <LanguageSwitcher />
          </NavRight>
        </HeaderNav>
      </Header>

      <Contents>{children}</Contents>

      <Footer>
        <small>
          © {currentYear} ISA Archive • {t.footer.designedBy}
        </small>
      </Footer>
    </Wrap>
  );
};

export default BasicLayout;
