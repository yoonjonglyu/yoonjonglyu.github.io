(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,29785,e=>{"use strict";var t=e.i(22986),a=e.i(48265),i=e.i(15829);[...t.default,...a.default,...i.default],e.s([],29785)},83606,e=>{"use strict";var t=e.i(48265);e.s(["allWorks",()=>t.default])},76683,e=>{e.v("/_next/static/media/noimg.1da5a54b.png")},31200,e=>{"use strict";var t=e.i(43476),a=e.i(97053),i=e.i(22016),n=e.i(74733),r=e.i(52919);let o=a.default.article.withConfig({displayName:"PanelCard__Panel",componentId:"sc-1441c0f8-0"})`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 140px;

  ${({$featured:e})=>e&&`
      max-width: 1080px;
    `}

  @media (max-width: 1024px) {
    margin: 0 auto 68px;
  }
`,s=a.default.div.withConfig({displayName:"PanelCard__Thumbnail",componentId:"sc-1441c0f8-1"})`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
  background: #0b1020;

  img {
    object-fit: cover;
    transition: transform 0.6s ease, opacity 0.4s ease;
  }

  ${o}:hover & img {
    transform: scale(${({$featured:e})=>e?1.06:1.04});
    opacity: 0.9;
  }
`,d=a.default.div.withConfig({displayName:"PanelCard__Caption",componentId:"sc-1441c0f8-2"})`
  margin-top: 28px;
  padding-left: 4px;
  max-width: 720px;
`,l=a.default.h3.withConfig({displayName:"PanelCard__Title",componentId:"sc-1441c0f8-3"})`
  font-size: ${({$featured:e})=>e?"1.8rem":"1.45rem"};
  font-weight: 600;
  margin: 0 0 8px;
  line-height: 1.3;

  a {
    color: inherit;
    text-decoration: none;

    &:focus-visible {
      outline: 2px solid var(--color-point);
      outline-offset: 4px;
      border-radius: 4px;
    }
  }
`,c=a.default.p.withConfig({displayName:"PanelCard__Summary",componentId:"sc-1441c0f8-4"})`
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.4s ease, transform 0.4s ease;
  margin: 0;

  ${o}:hover & {
    opacity: 0.75;
    transform: translateY(0);
  }
  @media screen and (max-width: 768px) {
    opacity: 0.75;
    transform: translateY(0);
  }
`,p=a.default.ul.withConfig({displayName:"PanelCard__StackList",componentId:"sc-1441c0f8-5"})`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
`,m=a.default.li.withConfig({displayName:"PanelCard__StackItem",componentId:"sc-1441c0f8-6"})`
  font-size: 0.75rem;
  opacity: 0.6;
  letter-spacing: 0.02em;
`,f=a.default.span.withConfig({displayName:"PanelCard__FeaturedBadge",componentId:"sc-1441c0f8-7"})`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  color: var(--color-point);
`,h=({href:e,title:a,summary:h,stacks:x,thumbnail:u,featured:g=!1})=>(0,t.jsxs)(o,{$featured:g,children:[(0,t.jsx)(s,{$featured:g,children:(0,t.jsx)(i.default,{href:e,tabIndex:-1,children:(0,t.jsx)(n.default,{src:u?.src,alt:u?.alt||a,fill:!0,preload:g,noImage:r.default.src})})}),(0,t.jsxs)(d,{children:[g&&(0,t.jsx)(f,{children:"FEATURED WORK"}),(0,t.jsx)(l,{$featured:g,children:(0,t.jsx)(i.default,{href:e,children:a})}),(0,t.jsx)(c,{children:h}),x&&x.length>0&&(0,t.jsxs)(p,{children:[x.slice(0,3).map(e=>(0,t.jsx)(m,{children:e},e)),x.length>3&&(0,t.jsxs)(m,{children:["+",x.length-3]})]})]})]});e.i(29785);var x=e.i(83606);let u=a.default.section.withConfig({displayName:"WorkList__Container",componentId:"sc-d5222756-0"})`
  max-width: 1200px;
  width: 100%;
  margin: 38px auto 0;
`,g=a.default.header.withConfig({displayName:"WorkList__Intro",componentId:"sc-d5222756-1"})`
  max-width: 640px;
  margin-bottom: 60px;
  border-left: 2px solid var(--color-point);
  padding-left: 16px;

  p {
    font-size: 1.3rem;
    line-height: 1.6;
    opacity: 0.75;
    margin: 0;
  }
`,w=a.default.section.withConfig({displayName:"WorkList__List",componentId:"sc-d5222756-2"})`
  display: flex;
  flex-direction: column;

  & > *:nth-child(even) {
    transform: translateX(48px);
  }

  @media (max-width: 1024px) {
    & > * {
      transform: none !important;
    }
  }
`;e.s(["default",0,()=>{let e=x.allWorks.slice().sort((e,t)=>(e.order??0)-(t.order??0));return(0,t.jsxs)(u,{children:[(0,t.jsx)(g,{children:(0,t.jsx)("p",{children:"Selected works focused on UI architecture, component systems, and interaction patterns designed for real-world products."})}),(0,t.jsx)(w,{children:e.map(e=>(0,t.jsx)(h,{href:`/work/${e.slug}`,title:e.title,summary:e.summary,stacks:e.tags??[],thumbnail:{src:e.thumbnail??"",alt:`${e.title} thumbnail`},featured:e.featured},e.slug))})]})}],31200)}]);