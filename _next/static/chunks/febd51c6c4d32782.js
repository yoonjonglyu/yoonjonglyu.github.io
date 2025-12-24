(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,83606,e=>{"use strict";var t=e.i(48265);e.s(["allWorks",()=>t.default])},29785,e=>{"use strict";var t=e.i(22986),i=e.i(48265),n=e.i(15829);[...t.default,...i.default,...n.default],e.s([],29785)},55319,e=>{"use strict";var t=e.i(43476),i=e.i(97053);let n=i.default.section.withConfig({displayName:"Section__SectionWrap",componentId:"sc-7657ac1f-0"})`
  margin-top: 64px;
`,o=i.default.h2.withConfig({displayName:"Section__SectionTitle",componentId:"sc-7657ac1f-1"})`
  font-size: 13px;
  letter-spacing: 0.12em;
  color: #9ca3af;
  margin-bottom: 20px;
`,a=({title:e,children:i})=>(0,t.jsxs)(n,{children:[(0,t.jsx)(o,{children:e.toUpperCase()}),i]}),r=i.default.header.withConfig({displayName:"ResumeHeader__HeaderWrap",componentId:"sc-fc851830-0"})`
  margin-bottom: 96px;
`,s=i.default.h1.withConfig({displayName:"ResumeHeader__Name",componentId:"sc-fc851830-1"})`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.015em;
  line-height: 1.2;

  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 48px;
    height: 2px;
    background: var(--color-point);
    opacity: 0.9;
  }
`,l=i.default.p.withConfig({displayName:"ResumeHeader__Title",componentId:"sc-fc851830-2"})`
  margin-top: 18px;
  font-size: 14px;
  color: #9ca3af;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`,c=i.default.p.withConfig({displayName:"ResumeHeader__Summary",componentId:"sc-fc851830-3"})`
  margin-top: 28px;
  font-size: 15px;
  line-height: 1.7;
  color: #d1d5db;
  max-width: 680px;

  strong {
    color: #ffffff;
    font-weight: 500;
  }
`,d=()=>(0,t.jsxs)(r,{children:[(0,t.jsx)(s,{children:"YOON JONG RYU"}),(0,t.jsx)(l,{children:"Frontend Engineer · Remote-ready"}),(0,t.jsxs)(c,{children:[(0,t.jsx)("strong",{children:"Frontend engineer focused on component-driven architecture and type-safe UI development."})," ","Experienced in building Storybook-based design systems, PWAs, and reusable utility libraries."]})]}),p=i.default.div.withConfig({displayName:"ReadItem__Item",componentId:"sc-80046938-0"})`
  margin-bottom: 24px;
  break-inside: avoid;
`,m=i.default.div.withConfig({displayName:"ReadItem__ItemTitle",componentId:"sc-80046938-1"})`
  font-size: 16px;

  font-weight: 600;
  white-space: pre-line;
`,f=i.default.div.withConfig({displayName:"ReadItem__ItemSub",componentId:"sc-80046938-2"})`
  margin-top: 4px;
  font-size: 12px;
  color: #9ca3af;
  white-space: pre-line;
`,h=i.default.p.withConfig({displayName:"ReadItem__ItemDesc",componentId:"sc-80046938-3"})`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-line;
`,g=i.default.span.withConfig({displayName:"ReadItem__Highlight",componentId:"sc-80046938-4"})`
  color: var(--color-point);
  font-weight: 500;
`,u=({title:e,sub:i,desc:n,highlight:o=[]})=>{var a,r;let s;return(0,t.jsxs)(p,{children:[e&&(0,t.jsx)(m,{children:e}),i&&(0,t.jsx)(f,{children:i}),n&&(0,t.jsx)(h,{children:o.length>0?(a=n,r=o,s=a.split(RegExp(`(${r.map(x).join("|")})`,"gi")),(0,t.jsx)(t.Fragment,{children:s.map((e,i)=>r.some(t=>t.toLowerCase()===e.toLowerCase())?(0,t.jsx)(g,{children:e},i):e)})):n})]})};function x(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}let b=()=>(0,t.jsx)(u,{desc:`UI Architect and Frontend Engineer focused on designing scalable, reusable UI systems.

• Architects component-based design systems using TypeScript, React, and Storybook
• Structures frontend codebases for long-term maintainability in solo or small-team environments
• Experienced in PWA and offline-first applications with performance-conscious UI design

Comfortable owning frontend architecture end-to-end in remote and freelance contexts.`,highlight:["UI Architect","Frontend Engineer","TypeScript","React","Storybook","PWA","offline-first"]});e.i(29785);var y=e.i(83606);let j=()=>(y.allWorks.sort((e,t)=>(e.order??0)-(t.order??0)),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{title:"Memo — PWA Memo Application",sub:"TypeScript · React · Storybook",desc:"Component-driven PWA memo application optimized for short-lived planning and fast input workflows, with offline support and cross-device installation."}),(0,t.jsx)(u,{title:"Isa Util — TypeScript Utility Library",sub:"TypeScript · Node.js",desc:"A reusable utility library focused on async orchestration and identifier-based request control, designed for maintainability across multiple projects."}),(0,t.jsx)(u,{title:"Portfolio — Personal Archive Website",sub:"TypeScript · React · Next.js",desc:"A content-driven personal archive built to organize projects, packages, and work history with a clear information hierarchy."}),(0,t.jsx)(u,{title:"Asharyu Design — React Component Library",sub:"TypeScript · React · Storybook",desc:"A Storybook-based component library designed to support consistent UI patterns and component reuse across projects."})]})),w=i.default.ul.withConfig({displayName:"ResumeSkill__SkillList",componentId:"sc-c888735a-0"})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  font-size: 14px;
  color: #d1d5db;
`,_=i.default.li.withConfig({displayName:"ResumeSkill__Skill",componentId:"sc-c888735a-1"})`
  list-style: none;
`,I=()=>(0,t.jsxs)(w,{children:[(0,t.jsx)(_,{children:"TypeScript"}),(0,t.jsx)(_,{children:"React"}),(0,t.jsx)(_,{children:"Storybook"}),(0,t.jsx)(_,{children:"Next.js"}),(0,t.jsx)(_,{children:"PWA"}),(0,t.jsx)(_,{children:"Design Systems"})]});var k=e.i(22016);let S=i.default.footer.withConfig({displayName:"ResumeFooter__FooterWrap",componentId:"sc-af828304-0"})`
  margin-bottom: 12px;
  font-size: 14px;
  color: #9ca3af;
  & a {
    color: #9ca3af;
    text-decoration: none;
  }
  & .disabled {
    pointer-events: none;
    cursor: default;
    color: rgba(156, 163, 175, 0.6);
  }
`,v=()=>(0,t.jsxs)(S,{children:[(0,t.jsx)(k.default,{href:"https://github.com/yoonjonglyu",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),"·",(0,t.jsx)(k.default,{href:"mailto:yoonjonglyu@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"Email"}),"·",(0,t.jsx)(k.default,{className:"disabled",href:"https://www.linkedin.com/in/dev-isa-ryu-b081171b9/",target:"_blank","aria-disabled":"true",rel:"noopener noreferrer",children:"LinkedIn"})]}),R=i.default.main.withConfig({displayName:"Resume__Container",componentId:"sc-86caea03-0"})`
  width: 794px;
  min-height: 1123px;
  margin: 0 auto;
  padding: 64px 56px;
  background: #0b1020;
  color: #e5e7eb;
  font-size: 14px;
  line-height: 1.6;
`,C=i.default.div.withConfig({displayName:"Resume__PageBreak",componentId:"sc-86caea03-1"})`
  page-break-before: always;
`;e.s(["default",0,()=>(0,t.jsxs)(R,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(a,{title:"Focus",children:(0,t.jsx)(b,{})}),(0,t.jsx)(C,{}),(0,t.jsx)(a,{title:"Work",children:(0,t.jsx)(j,{})}),(0,t.jsx)(a,{title:"Skills",children:(0,t.jsx)(I,{})}),(0,t.jsx)(a,{title:"contact",children:(0,t.jsx)(v,{})})]})],55319)}]);