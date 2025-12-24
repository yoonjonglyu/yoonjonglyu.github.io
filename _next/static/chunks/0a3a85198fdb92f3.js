(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,86351,e=>{"use strict";var t=e.i(43476),r=e.i(97053);let n=r.default.div.withConfig({displayName:"Card__Container",componentId:"sc-132c4da7-0"})`
  position: relative;
  min-height: 200px;
  padding: 6px 12px;
  background: var(--color-background-card);
  border-radius: 12px;
  ${({css:e})=>`${e}`}
`;e.s(["default",0,e=>(0,t.jsx)(n,{...e})])},96848,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getMDXComponent=function(e,t){return l(e,t).default},r.getMDXExport=l;var n=d(e.r(71645)),o=d(e.r(74080)),i=d(e.r(43476));function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function d(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&({}).hasOwnProperty.call(e,i)){var d=o?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(n,i,d):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}function l(e,t){let r={React:n,ReactDOM:o,_jsx_runtime:i,...t};return Function(...Object.keys(r),e)(...Object.values(r))}},15175,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e.r(96848);Object.keys(n).forEach(function(e){"default"===e||"__esModule"===e||e in r&&r[e]===n[e]||Object.defineProperty(r,e,{enumerable:!0,get:function(){return n[e]}})})},63616,(e,t,r)=>{t.exports=e.r(15175)},83688,e=>{"use strict";var t=e.i(43476),r=e.i(97053),n=e.i(86351),o=e.i(71645),i=e.i(63616);let a={React:o,ReactDOM:e.i(74080),_jsx_runtime:t},d={h1:e=>(0,t.jsx)("h1",{...e}),h2:e=>(0,t.jsx)("h2",{...e}),p:e=>(0,t.jsx)("p",{...e}),ul:e=>(0,t.jsx)("ul",{...e}),code:e=>(0,t.jsx)("code",{...e})},l=({code:e})=>{let r=o.useMemo(()=>((e,t={})=>{let r={...a,...t};return(0,i.getMDXComponent)(e,r)})(e),[e]);return(0,t.jsx)(r,{components:d})},c=r.default.div.withConfig({displayName:"ContentsCard__ContentsHeader",componentId:"sc-2d49bd79-0"})`
  margin-bottom: 24px;
  padding: 12px 4px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, var(--color-point), transparent) 1;

  & h2,
  & h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -0.5px;
  }
`,p=r.default.div.withConfig({displayName:"ContentsCard__ContentsBody",componentId:"sc-2d49bd79-1"})`
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  /* MDX 내부의 링크 강조 */
  a {
    color: var(--color-point);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    margin: 40px 0;
  }

  iframe {
    width: 100%;
    min-height: 500px;
    background: #000;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 20px 0;
  }

  /* 코드 블록 디자인 고도화 (다크 테마) */
  pre {
    background: #161b22;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 20px;
    margin: 24px 0;
    overflow-x: auto;
    font-family: 'Fira Code', monospace;
    font-size: 0.95em;
    color: #e6edf3;
  }

  /* Syntax Highlighting (GitHub Dark 스타일 테마 적용) */
  .pl-k {
    color: #ff7b72;
  } /* 키워드 */
  .pl-v {
    color: #ffa657;
  } /* 변수 */
  .pl-en {
    color: #d2a8ff;
  } /* 함수 */
  .pl-ent {
    color: #7ee787;
  } /* 태그 */
  .pl-c1,
  .pl-s {
    color: #a5d6ff;
  } /* 문자열, 숫자 */
  .pl-c {
    color: #8b949e;
  } /* 주석 */
`;var s=(0,r.default)(n.default).withConfig({displayName:"ContentsCard___StyledCard",componentId:"sc-2d49bd79-2"})`
        flex: 1;
        min-height: 600px;
        padding: 40px; /* 내부 여백 확장 */
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(20px);
        @media (max-width: 768px) {
          padding: 16px;
        }
        ${e=>e.$_css}
      `;e.s(["default",0,({header:e,contents:r,CSS:n})=>(0,t.jsxs)(s,{$_css:n,children:[(0,t.jsx)(c,{children:e}),(0,t.jsx)(p,{children:(0,t.jsx)(l,{code:r})})]})],83688)},65942,e=>{"use strict";var t=e.i(43476),r=e.i(97053),n=e.i(83688);let o=r.default.article.withConfig({displayName:"WorkArticle__Container",componentId:"sc-86586407-0"})`
  display: flex;
  justify-content: center;
  margin: 24px 3px 80px;
`,i=r.default.section.withConfig({displayName:"WorkArticle__ArticleArea",componentId:"sc-86586407-1"})`
  width: 100%;
  max-width: 820px;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;e.s(["default",0,({title:e,content:r})=>{let a=r.split("\n---\n").map(e=>e.trim()).filter(Boolean);return(0,t.jsx)(o,{children:(0,t.jsx)(i,{children:a.map((r,o)=>(0,t.jsx)(n.default,{header:0===o?e:null,contents:r},o))})})}])}]);