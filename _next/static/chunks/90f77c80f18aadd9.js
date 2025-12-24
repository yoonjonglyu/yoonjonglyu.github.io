(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58287,e=>{"use strict";var t=e.i(22986);e.s(["allProjects",()=>t.default])},69288,e=>{"use strict";var t=e.i(15829);e.s(["allPackages",()=>t.default])},29785,e=>{"use strict";var t=e.i(22986),i=e.i(48265),a=e.i(15829);[...t.default,...i.default,...a.default],e.s([],29785)},1108,e=>{"use strict";var t=e.i(43476),i=e.i(97053),a=e.i(22016);let d=i.default.div.withConfig({displayName:"TextItem__Item",componentId:"sc-daecdb11-0"})`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 16px;
  padding: 20px 0;

  transition: color 0.15s ease;

  &:hover h3 {
    color: #c084fc;
  }
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }
`,s=i.default.div.withConfig({displayName:"TextItem__Index",componentId:"sc-daecdb11-1"})`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.6;
`,o=i.default.span.withConfig({displayName:"TextItem__IndexCircle",componentId:"sc-daecdb11-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);

  border: 1px solid #acacac;
  border-radius: 50%;
`,l=(0,i.default)(a.default).withConfig({displayName:"TextItem__Content",componentId:"sc-daecdb11-3"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-decoration: none;
  &:active {
    opacity: 0.8;
  }
`,r=i.default.h3.withConfig({displayName:"TextItem__Title",componentId:"sc-daecdb11-4"})`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`,c=i.default.p.withConfig({displayName:"TextItem__Description",componentId:"sc-daecdb11-5"})`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`,n=i.default.div.withConfig({displayName:"TextItem__StackList",componentId:"sc-daecdb11-6"})`
  display: flex;
  gap: 6px;
  margin-top: 4px;
  flex-wrap: wrap;
`,p=i.default.span.withConfig({displayName:"TextItem__Stack",componentId:"sc-daecdb11-7"})`
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;

  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.75);

  white-space: nowrap;
`;e.s(["default",0,({index:e,title:i,description:a,stacks:f,href:x,indexCircle:m=!1})=>(0,t.jsxs)(d,{children:[m?(0,t.jsx)(o,{children:String(e).padStart(2,"0")}):(0,t.jsx)(s,{children:String(e).padStart(2,"0")}),(0,t.jsxs)(l,{href:x||"#",children:[(0,t.jsx)(r,{children:i}),(0,t.jsx)(c,{children:a}),(0,t.jsx)(n,{children:f.map(e=>(0,t.jsx)(p,{children:e},e))})]})]})])},61723,e=>{"use strict";var t=e.i(43476),i=e.i(97053);e.i(29785);var a=e.i(58287),d=e.i(69288),s=e.i(1108);let o=i.default.div.withConfig({displayName:"ArchiveList__Container",componentId:"sc-a6f718d2-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  margin: 32px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,l=i.default.section.withConfig({displayName:"ArchiveList__Column",componentId:"sc-a6f718d2-1"})`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,r=i.default.h2.withConfig({displayName:"ArchiveList__SectionTitle",componentId:"sc-a6f718d2-2"})`
  padding-bottom: 6px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: inherit;
  opacity: 0.8;
  border-bottom: 0.5px solid #ecebeb7f;
`,c=i.default.div.withConfig({displayName:"ArchiveList__ListArea",componentId:"sc-a6f718d2-3"})`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;e.s(["default",0,()=>{let e=a.allProjects.sort((e,t)=>(e.order??0)-(t.order??0)),i=d.allPackages.sort((e,t)=>(e.order??0)-(t.order??0));return(0,t.jsxs)(o,{children:[(0,t.jsxs)(l,{children:[(0,t.jsx)(r,{style:{borderColor:"#ecebebc1"},children:"PROJECT"}),(0,t.jsx)(c,{style:{paddingTop:"12px"},children:e.map((e,i)=>(0,t.jsx)(s.default,{href:`/archive/project/${e.slug}`,title:e.title,index:i+1,stacks:e.stack,description:e.description,indexCircle:!0},e.slug))})]}),(0,t.jsxs)(l,{style:{marginTop:"4px"},children:[(0,t.jsx)(r,{style:{width:"88%"},children:"PACKAGE"}),(0,t.jsx)(c,{children:i.map((e,i)=>(0,t.jsx)(s.default,{href:`/archive/package/${e.slug}`,title:e.title,index:i+1,stacks:e.stack,description:e.description},e.slug))})]})]})}])}]);