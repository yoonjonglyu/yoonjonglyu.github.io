(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{1082:function(t,e,n){Promise.resolve().then(n.bind(n,9508))},3882:function(t,e,n){"use strict";n.d(e,{N:function(){return errHandler},u:function(){return i}});var r=n(9222);let i=((t,e)=>{let n=r.Z.create({baseURL:t});return n})("https://yoonjonglyu.github.io/archivedata/"),errHandler=async(t,e)=>{try{let e=await t();return e}catch(n){let t=e(n);return t}}},769:function(t,e,n){"use strict";n.d(e,{J:function(){return GetProjectContents},Q:function(){return GetProjectList}});var r=n(3882);let GetProjectList=async()=>(0,r.N)(async()=>{let{data:t}=await (0,r.u)("project/list.json");return t},t=>console.error(t)),GetProjectContents=async t=>(0,r.N)(async()=>{let{data:e}=await (0,r.u)("project/".concat(t,".html"));return e},t=>console.error(t))},3233:function(t,e,n){"use strict";var r=n(230),i=n(7437);n(2265);var c=n(802);function _templateObject(){let t=(0,r._)(["\n  position: relative;\n  min-height: 200px;\n  padding: 6px 12px;\n  background: var(--color-background-card);\n  border-radius: 12px;\n  ","\n"]);return _templateObject=function(){return t},t}let o=c.ZP.div.withConfig({componentId:"sc-db37fa3e-0"})(_templateObject(),t=>{let{css:e}=t;return"".concat(e)});e.Z=t=>(0,i.jsx)(o,{...t})},6974:function(t,e,n){"use strict";var r=n(230),i=n(7437),c=n(802);n(2265);var o=n(6691),a=n.n(o),l=n(1396),u=n.n(l),s=n(3233),d=n(160);function _templateObject(){let t=(0,r._)(["\n  & img {\n    width: 100%;\n    height: 160px;\n  }\n"]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,r._)(["\n  height: 100px;\n  padding: 16px;\n\n  & h3 {\n    margin: 0;\n    padding: 0;\n    word-break: break-word;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  & p {\n    display: -webkit-box;\n    margin: 8px 0;\n    font-size: 0.9rem;\n    word-break: break-word;\n    overflow-wrap: break-word;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,r._)(["\n        width: 98%;\n        max-width: 280px;\n        padding: 0; \n        border-radius: 4px;\n        overflow: hidden;\n\n        & a {\n          color: inherit;\n          text-decoration: none;\n        }\n        & a:hover {\n          color: var(--color-point);\n        }\n        @media (max-width: 590px) {\n          max-width: unset;\n          margin: 0 auto;\n        }\n      "]);return _templateObject2=function(){return t},t}let p=c.zo.div(_templateObject()),f=c.zo.div(_templateObject1());e.Z=t=>{let{thumnail:e,title:n,description:r,href:c}=t;return(0,i.jsxs)(h,{children:[(0,i.jsx)(p,{children:(0,i.jsx)(u(),{href:c,children:(0,i.jsx)(a(),{src:e.src||d.Z,alt:e.alt})})}),(0,i.jsx)(f,{children:(0,i.jsxs)(u(),{href:c,children:[(0,i.jsx)("h3",{children:n}),(0,i.jsx)("p",{children:r})]})})]})};var h=(0,c.ZP)(s.Z).withConfig({componentId:"sc-b70e07cd-0"})(_templateObject2())},9508:function(t,e,n){"use strict";n.r(e);var r=n(230),i=n(7437),c=n(2265),o=n(802),a=n(6974),l=n(9240);function _templateObject(){let t=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  margin: 24px 3px;\n"]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,r._)(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  overflow: hidden;\n\n  @media (max-width: 1024px) {\n    justify-content: center;\n  }\n"]);return _templateObject1=function(){return t},t}let u=o.zo.div(_templateObject()),s=o.zo.section(_templateObject1());e.default=()=>{let{projectList:t,updateProjectList:e}=(0,l.Z)();return(0,c.useEffect)(()=>{e()},[]),(0,i.jsx)(u,{children:(0,i.jsx)(s,{children:t.map(t=>(0,i.jsx)(a.Z,{thumnail:{src:t.img,alt:t.title},href:"/project/article?post=".concat(t.idx),title:t.title,description:t.description},t.idx))})})}},9240:function(t,e,n){"use strict";n.d(e,{Z:function(){return project_useProjectList}});var r=n(5883);let i=(0,r.cn)({key:"ProjectList",default:[]}),c=(0,r.nZ)({key:"ProjectNavList",get:t=>{let{get:e}=t,n=e(i);return n.map(t=>({idx:t.idx,title:t.title}))}});var o=n(769),project_useProjectList=()=>{let[t,e]=(0,r.FV)(i),n=(0,r.sJ)(c),updateProjectList=async()=>{let t=await (0,o.Q)();e(t||[])};return{projectList:t,updateProjectList,projectNavList:n}}},160:function(t,e){"use strict";e.Z={src:"/_next/static/media/noimg.83abd02d.png",height:267,width:399,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAQUlEQVR42j3L0QnAMAiE4TtJx+hSHaebtw93iZIIHyLoz/d+rP/4eh+MCzCgzQbTABcVpzDrowt35+rOweouZ2gCRgw1uMIK+jsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}},function(t){t.O(0,[691,576,222,396,240,971,864,744],function(){return t(t.s=1082)}),_N_E=t.O()}]);