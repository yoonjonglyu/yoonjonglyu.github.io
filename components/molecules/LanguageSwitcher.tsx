'use client';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from '@hooks/useTranslation';
import { Locale } from '../../lib/i18n/types';

const Container = styled.div`
  position: relative;
  display: inline-block;
  user-select: none;
`;

const TriggerButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid
    ${({ $isOpen }) =>
      $isOpen ? 'var(--color-point)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ $isOpen }) => ($isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.75)')};
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.25);
  }

  & svg {
    width: 13px;
    height: 13px;
    fill: currentColor;
    opacity: 0.8;
  }

  & span.arrow {
    display: inline-block;
    font-size: 0.6rem;
    transition: transform 0.2s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    opacity: 0.6;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  min-width: 110px;
  margin: 0;
  padding: 4px;
  background: rgba(18, 21, 31, 0.98);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.45);
  z-index: 10000;
  display: flex !important;
  flex-direction: column !important;
  gap: 2px !important;
  animation: fadeIn 0.12s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MenuItem = styled.button<{ $isSelected: boolean }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 8px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  font-size: 0.78rem;
  line-height: 1.3;
  font-weight: ${({ $isSelected }) => ($isSelected ? '600' : '400')};
  color: ${({ $isSelected }) =>
    $isSelected ? 'var(--color-point)' : 'rgba(255, 255, 255, 0.85)'};
  background: ${({ $isSelected }) =>
    $isSelected ? 'rgba(255, 255, 255, 0.08)' : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.12s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
  }

  & span.short {
    font-size: 0.68rem;
    color: rgba(255, 255, 255, 0.4);
    margin-left: auto;
  }
`;

const GlobeIcon = () => (
  <svg viewBox='0 0 24 24'>
    <path d='M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.18a15.82 15.82 0 00-1.42-5.07A8.02 8.02 0 0119.93 11zM12 4.07c.88 1.4 1.57 3.12 1.84 4.93H10.16C10.43 7.19 11.12 5.47 12 4.07zM4.07 13h3.18c.15 1.8.64 3.53 1.42 5.07A8.02 8.02 0 014.07 13zm3.18-2H4.07a8.02 8.02 0 014.6-5.07c-.78 1.54-1.27 3.27-1.42 5.07zM12 19.93c-.88-1.4-1.57-3.12-1.84-4.93h3.68c-.27 1.81-.96 3.53-1.84 4.93zm2.5-6.93H9.5a13.9 13.9 0 010-2h5a13.9 13.9 0 010 2zm.83 5.07c.78-1.54 1.27-3.27 1.42-5.07h3.18a8.02 8.02 0 01-4.6 5.07z' />
  </svg>
);

export const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale, locales } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLocaleInfo =
    locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    setIsOpen(false);
  };

  return (
    <Container ref={containerRef}>
      <TriggerButton
        type='button'
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label='Select Language'
        aria-expanded={isOpen}>
        <GlobeIcon />
        <span>{currentLocaleInfo.shortLabel}</span>
        <span className='arrow'>▼</span>
      </TriggerButton>

      {isOpen && (
        <DropdownMenu role='menu'>
          {locales.map((item) => {
            const isSelected = item.code === locale;
            return (
              <MenuItem
                key={item.code}
                type='button'
                $isSelected={isSelected}
                role='menuitem'
                onClick={() => handleSelect(item.code)}>
                <span>{item.label}</span>
                <span className='short'>{item.shortLabel}</span>
              </MenuItem>
            );
          })}
        </DropdownMenu>
      )}
    </Container>
  );
};

export default LanguageSwitcher;
