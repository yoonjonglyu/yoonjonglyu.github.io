(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{7577:function(e,t){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var r,o,u,i=null,l=function(){var t;r=e.call.apply(e,[e].concat(function(e){if(Array.isArray(e))return n(e)}(t=o||[])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),i=null},a=function(){u=Date.now()+t,i=setTimeout(function(){Date.now()>=u&&l()},t)},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return o=t,a(),function(){return r}};return c.cancel=function(){clearTimeout(i),i=null},c.pending=function(){return Date.now()<u},c}},4735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(7577)),o=u(n(9932));function u(e){return e&&e.__esModule?e:{default:e}}var i=Object.freeze({debounce:r.default,throttle:o.default});t.default=i},9932:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n=null;return function(){if(null===n||Date.now()>=n)return n=Date.now()+t,e.apply(void 0,arguments)}}},7529:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return e.toLocaleString()}},4978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=Object.freeze({addComma:((r=n(7529))&&r.__esModule?r:{default:r}).default});t.default=o},2172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=Object.freeze({loadCDN:((r=n(9436))&&r.__esModule?r:{default:r}).default});t.default=o},9436:function(e,t){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t,r){if(!document.head.querySelector("#".concat(e))){var o=document.createElement("script");o.setAttribute("id",e),o.setAttribute("src",t),r&&Object.entries(r).forEach(function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,i,l=[],a=!0,c=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=u.call(n)).done)&&(l.push(r.value),l.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{if(!a&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(e,2)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],u=t[1];o.setAttribute(r,u)}),document.head.appendChild(o)}}},4625:function(e,t,n){"use strict";t.pm=void 0;var r=a(n(1289)),o=a(n(9943)),u=a(n(4978)),i=a(n(2172)),l=a(n(4735));function a(e){return e&&e.__esModule?e:{default:e}}r.default.isArray,r.default.isFunction,r.default.isNumber,r.default.isString,r.default.isSymbol,r.default.isNull,r.default.isObject;var c=o.default.getQuery;o.default.setQuery,t.pm=c,u.default.addComma,i.default.loadCDN,l.default.debounce,l.default.throttle,Object.freeze({TypeCheck:r.default,QueryString:o.default,Format:u.default,Import:i.default,Api:l.default})},1844:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return new URLSearchParams(window.location.search)}},9943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(1844)),o=u(n(143));function u(e){return e&&e.__esModule?e:{default:e}}var i=Object.freeze({getQuery:r.default,setQuery:o.default});t.default=i},143:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){window.history.pushState({},"","?".concat(e.toString()))}},1289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(349)),o=d(n(9153)),u=d(n(434)),i=d(n(3236)),l=d(n(4639)),a=d(n(7972)),c=d(n(3465));function d(e){return e&&e.__esModule?e:{default:e}}var f=Object.freeze({isFunction:r.default,isArray:o.default,isString:u.default,isNumber:i.default,isSymbol:l.default,isNull:a.default,isObject:c.default});t.default=f},9153:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return void 0!==Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},349:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"function"==typeof e}},7972:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return null===e}},3236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"number"==typeof e}},3465:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"[object Object]"===Object.prototype.toString.call(e)}},434:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"string"==typeof e}},4639:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"[object Symbol]"===Object.prototype.toString.call(e)}},6046:function(e,t,n){Promise.resolve().then(n.bind(n,5281))},3882:function(e,t,n){"use strict";n.d(t,{N:function(){return u},u:function(){return o}});var r=n(9222);let o=((e,t)=>{let n=r.Z.create({baseURL:e});return n})("https://yoonjonglyu.github.io/archivedata/"),u=async(e,t)=>{try{let t=await e();return t}catch(n){let e=t(n);return e}}},3233:function(e,t,n){"use strict";var r=n(230),o=n(7437);n(2265);var u=n(802);function i(){let e=(0,r._)(["\n  position: relative;\n  min-height: 200px;\n  padding: 6px 12px;\n  background: var(--color-background-card);\n  border-radius: 12px;\n  ","\n"]);return i=function(){return e},e}let l=u.ZP.div.withConfig({componentId:"sc-db37fa3e-0"})(i(),e=>{let{css:t}=e;return"".concat(t)});t.Z=e=>(0,o.jsx)(l,{...e})},8438:function(e,t,n){"use strict";var r=n(230),o=n(7437);n(2265);var u=n(802),i=n(3233);function l(){let e=(0,r._)(["\n  margin: 3px;\n  padding: 8px 3px;\n  border-bottom: 1px solid red;\n  color: var(--color-legend);\n"]);return l=function(){return e},e}function a(){let e=(0,r._)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: var(--color-rare);\n  }\n  hr {\n    border-color: var(--color-unique);\n  }\n  iframe {\n    width: 100%;\n    min-height: 600px;\n    background: #fff;\n  }\n  pre {\n    color: #000;\n    margin-top: 0;\n    margin-bottom: 24px;\n    padding: 12px;\n    font-size: 1em;\n    background: #f7f7f7;\n    border-radius: 2;\n    overflow-x: auto;\n  }\n  .pl-k {\n    color: #d73a49;\n  }\n  .pl-v {\n    color: #e36209;\n  }\n  .pl-en {\n    color: #6f42c1;\n  }\n  .pl-ent {\n    color: #22863a;\n  }\n  .pl-c1,\n  .pl-s,\n  .pl-v {\n    color: #005cc5;\n  }\n"]);return a=function(){return e},e}function c(){let e=(0,r._)(["\n        flex: 1;\n        min-height: 600px;\n        overflow: hidden;\n      "]);return c=function(){return e},e}let d=u.ZP.div.withConfig({componentId:"sc-417adadd-0"})(l()),f=u.ZP.div.withConfig({componentId:"sc-417adadd-1"})(a());t.Z=e=>{let{header:t,contents:n,headerProps:r,bodyProps:u}=e;return(0,o.jsxs)(s,{children:[(0,o.jsx)(d,{...r,children:t}),(0,o.jsx)(f,{dangerouslySetInnerHTML:{__html:n},...u})]})};var s=(0,u.ZP)(i.Z).withConfig({componentId:"sc-417adadd-2"})(c())},4143:function(e,t,n){"use strict";var r=n(230),o=n(7437);n(2265);var u=n(802),i=n(3233);function l(){let e=(0,r._)(["\n  height: 32px;\n  border-bottom: 1px dashed var(--color-background-space);\n  & h3 {\n    font-size: 14px;\n    font-weight: 500;\n  }\n"]);return l=function(){return e},e}function a(){let e=(0,r._)(["\n  padding: 12px;\n  font-size: 12px;\n  & ul,\n  ol {\n    margin: 6px;\n    padding: 0px;\n  }\n"]);return a=function(){return e},e}function c(){let e=(0,r._)(["\n        & a:hover {\n          text-decoration: underline;\n          color: var(--color-point);\n        }\n      "]);return c=function(){return e},e}let d=u.ZP.div.withConfig({componentId:"sc-c3410b29-0"})(l()),f=u.ZP.div.withConfig({componentId:"sc-c3410b29-1"})(a());t.Z=e=>{let{header:t,contents:n,...r}=e;return(0,o.jsxs)(s,{...r,children:[(0,o.jsx)(d,{children:t}),(0,o.jsx)(f,{children:n})]})};var s=(0,u.ZP)(i.Z).withConfig({componentId:"sc-c3410b29-2"})(c())},5281:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(230),o=n(7437),u=n(2265),i=n(802),l=n(4625),a=n(8438),c=n(1396),d=n.n(c),f=n(4143),s=n(5883);let p=(0,s.cn)({key:"snippetList",default:[]});var v=n(3882);let b=async()=>(0,v.N)(async()=>{let{data:e}=await v.u.get("snippet/list.json");return e},e=>console.error(e)),h=async e=>(0,v.N)(async()=>{let{data:t}=await v.u.get("snippet/".concat(e,".html"));return t},e=>console.error(e));var y=()=>{let[e,t]=(0,s.FV)(p),n=async()=>{let e=await b();t(e||[])};return{snippetList:e,updateSnippetList:n}};function m(){let e=(0,r._)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow: hidden;\n\n  & ul {\n    height: 230px;\n    overflow: auto;\n  }\n  & ul::-webkit-scrollbar {\n    width: 2px;\n    background: none;\n  }\n  & ul::-webkit-scrollbar-thumb {\n    background: var(--color-point);\n  }\n  & ul li {\n    margin-bottom: 6px;\n  }\n  & a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return m=function(){return e},e}function g(){let e=(0,r._)(["\n  color: var(--color-unique);\n"]);return g=function(){return e},e}function _(){let e=(0,r._)(["\n          height: 300px;\n        "]);return _=function(){return e},e}let x=i.ZP.aside.withConfig({componentId:"sc-6baeecd8-0"})(m()),j=i.ZP.h3.withConfig({componentId:"sc-6baeecd8-1"})(g());var w=()=>{let{snippetList:e,updateSnippetList:t}=y();return(0,u.useEffect)(()=>{t()},[]),(0,o.jsx)(x,{children:(0,o.jsx)(O,{header:(0,o.jsx)(j,{children:"Snippet List"}),contents:(0,o.jsx)("ul",{children:e.map(e=>(0,o.jsx)("li",{children:(0,o.jsx)(d(),{href:"/snippet?post=".concat(e.idx),children:e.title})},e.idx))})})})},O=(0,i.ZP)(f.Z).withConfig({componentId:"sc-6baeecd8-2"})(_()),P=n(9077),S=e=>{let{data:t,isLoading:n,isError:r}=(0,P.useQuery)(["snippetContents",e],()=>h("".concat(e)));return{data:t,isLoading:n,isError:r}};function M(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  gap: 18px;\n  margin: 24px 3px;\n  @media (max-width: 1024px) {\n    flex-direction: column-reverse;\n  }\n"]);return M=function(){return e},e}function A(){let e=(0,r._)(["\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  overflow: hidden;\n"]);return A=function(){return e},e}let C=i.ZP.div.withConfig({componentId:"sc-a011e2aa-0"})(M()),I=i.ZP.section.withConfig({componentId:"sc-a011e2aa-1"})(A());var Z=()=>{let[e,t]=(0,u.useState)(0),{data:n}=S(e);return(0,u.useEffect)(()=>{let e=parseInt((0,l.pm)().get("post"));isNaN(e)||t(e)}),(0,o.jsxs)(C,{children:[(0,o.jsx)(I,{children:(0,o.jsx)(a.Z,{header:(0,o.jsx)("h2",{children:"Snippet"}),contents:n})}),(0,o.jsx)(w,{})]})}}},function(e){e.O(0,[691,576,222,396,77,971,864,744],function(){return e(e.s=6046)}),_N_E=e.O()}]);