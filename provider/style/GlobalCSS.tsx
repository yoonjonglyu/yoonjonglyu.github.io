'useclient'
import { createGlobalStyle } from 'styled-components';

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

export default GlobalCSS;