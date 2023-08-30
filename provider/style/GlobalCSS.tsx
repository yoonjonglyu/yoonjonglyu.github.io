'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  createGlobalStyle,
} from 'styled-components';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}

export const GlobalCSS = createGlobalStyle`
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
          color: #fff;
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
