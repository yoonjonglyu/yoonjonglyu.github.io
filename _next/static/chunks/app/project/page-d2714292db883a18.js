(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[880],{1082:function(n,t,e){Promise.resolve().then(e.bind(e,8965))},4436:function(n,t,e){"use strict";e.d(t,{N:function(){return o},u:function(){return i}});var r=e(9222);let i=((n,t)=>{let e=r.Z.create({baseURL:n});return e})("https://yoonjonglyu.github.io/archivedata/"),o=async(n,t)=>{try{let t=await n();return t}catch(e){let n=t(e);return n}}},4450:function(n,t,e){"use strict";e.d(t,{J:function(){return o},Q:function(){return i}});var r=e(4436);let i=async()=>(0,r.N)(async()=>{let{data:n}=await (0,r.u)("project/list.json");return n},n=>console.error(n)),o=async n=>(0,r.N)(async()=>{let{data:t}=await (0,r.u)("project/".concat(n,".html"));return t},n=>console.error(n))},6411:function(n,t,e){"use strict";var r=e(230),i=e(7437);e(2265);var o=e(802);function c(){let n=(0,r._)(["\n  position: relative;\n  min-height: 200px;\n  padding: 6px 12px;\n  background: var(--color-background-card);\n  border-radius: 12px;\n  ","\n"]);return c=function(){return n},n}let a=o.ZP.div.withConfig({componentId:"sc-db37fa3e-0"})(c(),n=>{let{css:t}=n;return"".concat(t)});t.Z=n=>(0,i.jsx)(a,{...n})},7935:function(n,t,e){"use strict";var r=e(230),i=e(7437),o=e(802);e(2265);var c=e(6691),a=e.n(c),u=e(1396),l=e.n(u),d=e(6411),s=e(7143);function f(){let n=(0,r._)(["\n  & img {\n    width: 100%;\n    height: 160px;\n  }\n"]);return f=function(){return n},n}function h(){let n=(0,r._)(["\n  height: 100px;\n  padding: 16px;\n\n  & h3 {\n    margin: 0;\n    padding: 0;\n    word-break: break-word;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  }\n  & p {\n    display: -webkit-box;\n    margin: 8px 0;\n    font-size: 0.9rem;\n    word-break: break-word;\n    overflow-wrap: break-word;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"]);return h=function(){return n},n}function p(){let n=(0,r._)(["\n        width: 100%;\n        max-width: 280px;\n        padding: 0; \n        border-radius: 4px;\n        overflow: hidden;\n\n        & a {\n          color: inherit;\n          text-decoration: none;\n        }\n        & a:hover {\n          color: var(--color-point);\n        }\n      "]);return p=function(){return n},n}let x=o.zo.div(f()),w=o.zo.div(h());t.Z=n=>{let{thumnail:t,title:e,description:r,href:o}=n;return(0,i.jsxs)(g,{children:[(0,i.jsx)(x,{children:(0,i.jsx)(l(),{href:o,children:(0,i.jsx)(a(),{src:t.src||s.Z,alt:t.alt})})}),(0,i.jsx)(w,{children:(0,i.jsxs)(l(),{href:o,children:[(0,i.jsx)("h3",{children:e}),(0,i.jsx)("p",{children:r})]})})]})};var g=(0,o.ZP)(d.Z).withConfig({componentId:"sc-d1a31dd2-0"})(p())},8965:function(n,t,e){"use strict";e.r(t);var r=e(230),i=e(7437),o=e(2265),c=e(802),a=e(7935),u=e(1698);function l(){let n=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  margin: 24px 3px;\n"]);return l=function(){return n},n}function d(){let n=(0,r._)(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  overflow: hidden;\n\n  @media (max-width: 1024px) {\n    justify-content: center;\n  }\n"]);return d=function(){return n},n}let s=c.zo.div(l()),f=c.zo.section(d());t.default=()=>{let{projectList:n,updateProjectList:t}=(0,u.Z)();return(0,o.useEffect)(()=>{t()},[]),(0,i.jsx)(s,{children:(0,i.jsx)(f,{children:n.map(n=>(0,i.jsx)(a.Z,{thumnail:{src:n.img,alt:n.title},href:"/project/article?post=".concat(n.idx),title:n.title,description:n.description},n.idx))})})}},1698:function(n,t,e){"use strict";e.d(t,{Z:function(){return a}});var r=e(5883);let i=(0,r.cn)({key:"ProjectList",default:[]}),o=(0,r.nZ)({key:"ProjectNavList",get:n=>{let{get:t}=n,e=t(i);return e.map(n=>({idx:n.idx,title:n.title}))}});var c=e(4450),a=()=>{let[n,t]=(0,r.FV)(i),e=(0,r.sJ)(o),a=async()=>{let n=await (0,c.Q)();t(n||[])};return{projectList:n,updateProjectList:a,projectNavList:e}}},7143:function(n,t){"use strict";t.Z={src:"/_next/static/media/noimg.83abd02d.png",height:267,width:399,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAQUlEQVR42j3L0QnAMAiE4TtJx+hSHaebtw93iZIIHyLoz/d+rP/4eh+MCzCgzQbTABcVpzDrowt35+rOweouZ2gCRgw1uMIK+jsAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5}}},function(n){n.O(0,[691,576,222,396,240,971,596,744],function(){return n(n.s=1082)}),_N_E=n.O()}]);