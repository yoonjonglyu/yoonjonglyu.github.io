(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{3734:function(n,t,e){Promise.resolve().then(e.bind(e,5047))},5044:function(n,t,e){"use strict";e.d(t,{N:function(){return errHandler},u:function(){return o}});var r=e(4829);let o=((n,t)=>{let e=r.Z.create({baseURL:n});return e})("https://yoonjonglyu.github.io/archivedata/"),errHandler=async(n,t)=>{try{let t=await n();return t}catch(e){let n=t(e);return n}}},124:function(n,t,e){"use strict";e.d(t,{J:function(){return GetProjectContents},Q:function(){return GetProjectList}});var r=e(5044);let GetProjectList=async()=>(0,r.N)(async()=>{let{data:n}=await (0,r.u)("project/list.json");return n},n=>console.error(n)),GetProjectContents=async n=>(0,r.N)(async()=>{let{data:t}=await (0,r.u)("project/".concat(n,".html"));return t},n=>console.error(n))},6248:function(n,t,e){"use strict";var r=e(230),o=e(7437);e(2265);var c=e(9152);function _templateObject(){let n=(0,r._)(["\n  position: relative;\n  min-height: 200px;\n  padding: 6px 12px;\n  background: var(--color-background-card);\n  border-radius: 12px;\n  ","\n"]);return _templateObject=function(){return n},n}let i=c.ZP.div.withConfig({componentId:"sc-db37fa3e-0"})(_templateObject(),n=>{let{css:t}=n;return"".concat(t)});t.Z=n=>(0,o.jsx)(i,{...n})},3243:function(n,t,e){"use strict";var r=e(230),o=e(7437);e(2265);var c=e(9152),i=e(6248);function _templateObject(){let n=(0,r._)(["\n  margin: 3px;\n  padding: 8px 3px;\n  border-bottom: 1px solid red;\n  color: var(--color-legend);\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: var(--color-rare);\n  }\n  hr {\n    border-color: var(--color-unique);\n  }\n  iframe {\n    width: 100%;\n    min-height: 600px;\n    background: #fff;\n  }\n  pre {\n    color: #000;\n    margin-top: 0;\n    margin-bottom: 24px;\n    padding: 12px;\n    font-size: 1em;\n    background: #f7f7f7;\n    border-radius: 2;\n    overflow-x: auto;\n  }\n  .pl-k {\n    color: #d73a49;\n  }\n  .pl-v {\n    color: #e36209;\n  }\n  .pl-en {\n    color: #6f42c1;\n  }\n  .pl-ent {\n    color: #22863a;\n  }\n  .pl-c1,\n  .pl-s,\n  .pl-v {\n    color: #005cc5;\n  }\n"]);return _templateObject1=function(){return n},n}function _templateObject2(){let n=(0,r._)(["\n        flex: 1;\n        min-height: 600px;\n        overflow: hidden;\n        ","\n      "]);return _templateObject2=function(){return n},n}let l=c.ZP.div.withConfig({componentId:"sc-9c789fdd-0"})(_templateObject()),a=c.ZP.div.withConfig({componentId:"sc-9c789fdd-1"})(_templateObject1());t.Z=n=>{let{header:t,contents:e,CSS:r}=n;return(0,o.jsxs)(u,{$_css:r,children:[(0,o.jsx)(l,{children:t}),(0,o.jsx)(a,{dangerouslySetInnerHTML:{__html:e}})]})};var u=(0,c.ZP)(i.Z).withConfig({componentId:"sc-9c789fdd-2"})(_templateObject2(),n=>n.$_css)},5047:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return project_ProjectArticle}});var r=e(230),o=e(7437),c=e(2265),i=e(9152),l=e(4625),a=e(3243),u=e(9077),p=e(124),project_useProjectContents=n=>{let{data:t,isLoading:e,isError:r}=(0,u.useQuery)(["projectContents",n],()=>(0,p.J)("".concat(n)));return{data:t,isLoading:e,isError:r}};function _templateObject(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  margin: 24px 3px;\n"]);return _templateObject=function(){return n},n}function _templateObject1(){let n=(0,r._)(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  overflow: hidden;\n\n  @media (max-width: 1024px) {\n    justify-content: center;\n  }\n"]);return _templateObject1=function(){return n},n}let s=i.zo.div(_templateObject()),d=i.zo.section(_templateObject1());var project_ProjectArticle=()=>{let[n,t]=(0,c.useState)(0),{data:e}=project_useProjectContents(n);return(0,c.useEffect)(()=>{let n=parseInt((0,l.pm)().get("post"));isNaN(n)||t(n)},[]),(0,o.jsx)(s,{children:(0,o.jsx)(d,{children:(0,o.jsx)(a.Z,{header:"project article",contents:e})})})}}},function(n){n.O(0,[336,829,77,625,971,472,744],function(){return n(n.s=3734)}),_N_E=n.O()}]);