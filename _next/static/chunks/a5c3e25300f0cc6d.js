(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58287,e=>{"use strict";var t=e.i(22986);e.s(["allProjects",()=>t.default])},29785,e=>{"use strict";var t=e.i(22986),i=e.i(48265),a=e.i(15829);[...t.default,...i.default,...a.default],e.s([],29785)},1108,e=>{"use strict";var t=e.i(43476),i=e.i(97053),a=e.i(22016);let d=i.default.div.withConfig({displayName:"TextItem__Item",componentId:"sc-daecdb11-0"})`
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
`,o=i.default.div.withConfig({displayName:"TextItem__Index",componentId:"sc-daecdb11-1"})`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.35);
  line-height: 1.6;
`,n=i.default.span.withConfig({displayName:"TextItem__IndexCircle",componentId:"sc-daecdb11-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);

  border: 1px solid #acacac;
  border-radius: 50%;
`,r=(0,i.default)(a.default).withConfig({displayName:"TextItem__Content",componentId:"sc-daecdb11-3"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-decoration: none;
  &:active {
    opacity: 0.8;
  }
`,s=i.default.h3.withConfig({displayName:"TextItem__Title",componentId:"sc-daecdb11-4"})`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
`,c=i.default.p.withConfig({displayName:"TextItem__Description",componentId:"sc-daecdb11-5"})`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
`,l=i.default.div.withConfig({displayName:"TextItem__StackList",componentId:"sc-daecdb11-6"})`
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
`;e.s(["default",0,({index:e,title:i,description:a,stacks:f,href:x,indexCircle:m=!1})=>(0,t.jsxs)(d,{children:[m?(0,t.jsx)(n,{children:String(e).padStart(2,"0")}):(0,t.jsx)(o,{children:String(e).padStart(2,"0")}),(0,t.jsxs)(r,{href:x||"#",children:[(0,t.jsx)(s,{children:i}),(0,t.jsx)(c,{children:a}),(0,t.jsx)(l,{children:f.map(e=>(0,t.jsx)(p,{children:e},e))})]})]})])},38941,e=>{"use strict";var t=e.i(43476),i=e.i(97053);e.i(29785);var a=e.i(58287),d=e.i(1108);let o=i.default.div.withConfig({displayName:"ProjectList__Container",componentId:"sc-d337231b-0"})`
  display: flex;
  flex-direction: row;
  margin: 24px 3px;
`,n=i.default.section.withConfig({displayName:"ProjectList__ListArea",componentId:"sc-d337231b-1"})`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  overflow: hidden;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;e.s(["default",0,()=>{let e=a.allProjects.slice().sort((e,t)=>(e.order??0)-(t.order??0));return(0,t.jsx)(o,{children:(0,t.jsx)(n,{children:e.map((e,i)=>(0,t.jsx)(d.default,{href:`/archive/project/${e.slug}`,title:e.title,index:i+1,stacks:e.stack,description:e.description},e.slug))})})}])}]);