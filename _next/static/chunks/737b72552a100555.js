(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,86351,e=>{"use strict";var r=e.i(43476),t=e.i(97053);let o=t.default.div.withConfig({displayName:"Card__Container",componentId:"sc-132c4da7-0"})`
  position: relative;
  min-height: 200px;
  padding: 6px 12px;
  background: var(--color-background-card);
  border-radius: 12px;
  ${({css:e})=>`${e}`}
`;e.s(["default",0,e=>(0,r.jsx)(o,{...e})])},96848,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMDXComponent=function(e,r){return l(e,r).default},t.getMDXExport=l;var o=d(e.r(71645)),n=d(e.r(74080)),i=d(e.r(43476));function a(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}function d(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a(r);if(t&&t.has(e))return t.get(e);var o={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&({}).hasOwnProperty.call(e,i)){var d=n?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(o,i,d):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}function l(e,r){let t={React:o,ReactDOM:n,_jsx_runtime:i,...r};return Function(...Object.keys(t),e)(...Object.values(t))}},15175,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e.r(96848);Object.keys(o).forEach(function(e){"default"===e||"__esModule"===e||e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})})},63616,(e,r,t)=>{r.exports=e.r(15175)},83688,e=>{"use strict";var r=e.i(43476),t=e.i(97053),o=e.i(86351),n=e.i(71645),i=e.i(63616);let a={React:n,ReactDOM:e.i(74080),_jsx_runtime:r},d={h1:e=>(0,r.jsx)("h1",{...e}),h2:e=>(0,r.jsx)("h2",{...e}),p:e=>(0,r.jsx)("p",{...e}),ul:e=>(0,r.jsx)("ul",{...e}),code:e=>(0,r.jsx)("code",{...e})},l=({code:e})=>{let t=n.useMemo(()=>((e,r={})=>{let t={...a,...r};return(0,i.getMDXComponent)(e,t)})(e),[e]);return(0,r.jsx)(t,{components:d})},c=t.default.div.withConfig({displayName:"ContentsCard__ContentsHeader",componentId:"sc-2d49bd79-0"})`
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
`,p=t.default.div.withConfig({displayName:"ContentsCard__ContentsBody",componentId:"sc-2d49bd79-1"})`
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
`;var s=(0,t.default)(o.default).withConfig({displayName:"ContentsCard___StyledCard",componentId:"sc-2d49bd79-2"})`
        flex: 1;
        min-height: 600px;
        padding: 40px; /* 내부 여백 확장 */
        background: rgba(255, 255, 255, 0.02);
        backdrop-filter: blur(20px);
        @media (max-width: 768px) {
          padding: 16px;
        }
        ${e=>e.$_css}
      `;e.s(["default",0,({header:e,contents:t,CSS:o})=>(0,r.jsxs)(s,{$_css:o,children:[(0,r.jsx)(c,{children:e}),(0,r.jsx)(p,{children:(0,r.jsx)(l,{code:t})})]})],83688)},93157,e=>{"use strict";var r=e.i(43476),t=e.i(97053),o=e.i(22016),n=e.i(83688);let i=t.styled.div.withConfig({displayName:"ProjectArticle__Container",componentId:"sc-d5dc2b30-0"})`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin: 24px 3px;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`,a=t.styled.section.withConfig({displayName:"ProjectArticle__ArticleArea",componentId:"sc-d5dc2b30-1"})`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 3px;
  overflow: hidden;
  & a {
    color: var(--color-rare);
  }
`,d=t.styled.div.withConfig({displayName:"ProjectArticle__ArticleLinkConainer",componentId:"sc-d5dc2b30-2"})`
  display: flex;
  flex-direction: row;
  height: auto;
  gap: 12px;
`;e.s(["default",0,({title:e,content:t,repository:l,homepage:c})=>(0,r.jsx)(i,{children:(0,r.jsxs)(a,{children:[(0,r.jsx)(n.default,{header:e,contents:t}),(0,r.jsxs)(d,{children:[(0,r.jsx)(o.default,{href:"/archive",style:{textDecoration:"none"},children:"← Back to Archive"}),(0,r.jsx)(o.default,{href:l,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:"Github"}),(0,r.jsx)(o.default,{href:c,style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer",children:"Web"})]})]})})])}]);