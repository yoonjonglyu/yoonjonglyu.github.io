(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{7577:function(e,t){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var r,u,o,i=null,a=function(){var t;r=e.call.apply(e,[e].concat(function(e){if(Array.isArray(e))return n(e)}(t=u||[])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),i=null},l=function(){o=Date.now()+t,i=setTimeout(function(){Date.now()>=o&&a()},t)},c=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return u=t,l(),function(){return r}};return c.cancel=function(){clearTimeout(i),i=null},c.pending=function(){return Date.now()<o},c}},4735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(7577)),u=o(n(9932));function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.freeze({debounce:r.default,throttle:u.default});t.default=i},9932:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n=null;return function(){if(null===n||Date.now()>=n)return n=Date.now()+t,e.apply(void 0,arguments)}}},7529:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return e.toLocaleString()}},4978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=Object.freeze({addComma:((r=n(7529))&&r.__esModule?r:{default:r}).default});t.default=u},2172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=Object.freeze({loadCDN:((r=n(9436))&&r.__esModule?r:{default:r}).default});t.default=u},9436:function(e,t){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t,r){if(!document.head.querySelector("#".concat(e))){var u=document.createElement("script");u.setAttribute("id",e),u.setAttribute("src",t),r&&Object.entries(r).forEach(function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,o,i,a=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==t);l=!0);}catch(e){c=!0,u=e}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw u}}return a}}(e,2)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),r=t[0],o=t[1];u.setAttribute(r,o)}),document.head.appendChild(u)}}},4625:function(e,t,n){"use strict";t.pm=void 0;var r=l(n(1289)),u=l(n(9943)),o=l(n(4978)),i=l(n(2172)),a=l(n(4735));function l(e){return e&&e.__esModule?e:{default:e}}r.default.isArray,r.default.isFunction,r.default.isNumber,r.default.isString,r.default.isSymbol,r.default.isNull,r.default.isObject;var c=u.default.getQuery;u.default.setQuery,t.pm=c,o.default.addComma,i.default.loadCDN,a.default.debounce,a.default.throttle,Object.freeze({TypeCheck:r.default,QueryString:u.default,Format:o.default,Import:i.default,Api:a.default})},2596:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return new URLSearchParams(window.location.search)}},9943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(2596)),u=o(n(143));function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.freeze({getQuery:r.default,setQuery:u.default});t.default=i},143:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){window.history.pushState({},"","?".concat(e.toString()))}},1289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(349)),u=f(n(9153)),o=f(n(434)),i=f(n(3236)),a=f(n(4639)),l=f(n(7972)),c=f(n(3465));function f(e){return e&&e.__esModule?e:{default:e}}var d=Object.freeze({isFunction:r.default,isArray:u.default,isString:o.default,isNumber:i.default,isSymbol:a.default,isNull:l.default,isObject:c.default});t.default=d},9153:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return void 0!==Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},349:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"function"==typeof e}},7972:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return null===e}},3236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"number"==typeof e}},3465:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"[object Object]"===Object.prototype.toString.call(e)}},434:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"string"==typeof e}},4639:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"[object Symbol]"===Object.prototype.toString.call(e)}},524:function(e,t,n){Promise.resolve().then(n.bind(n,4891))},4436:function(e,t,n){"use strict";n.d(t,{N:function(){return o},u:function(){return u}});var r=n(9222);let u=((e,t)=>{let n=r.Z.create({baseURL:e});return n})("https://yoonjonglyu.github.io/archivedata/"),o=async(e,t)=>{try{let t=await e();return t}catch(n){let e=t(n);return e}}},8188:function(e,t,n){"use strict";n.d(t,{I:function(){return o},b:function(){return u}});var r=n(4436);let u=async()=>(0,r.N)(async()=>{let{data:e}=await (0,r.u)("toy/list.json");return e},e=>console.error(e)),o=async e=>(0,r.N)(async()=>{let{data:t}=await (0,r.u)("toy/".concat(e,".html"));return t},e=>console.error(e))},6411:function(e,t,n){"use strict";var r=n(230),u=n(7437);n(2265);var o=n(802);function i(){let e=(0,r._)(["\n  position: relative;\n  min-height: 200px;\n  padding: 6px 12px;\n  background: var(--color-background-card);\n  border-radius: 12px;\n  ","\n"]);return i=function(){return e},e}let a=o.ZP.div.withConfig({componentId:"sc-db37fa3e-0"})(i(),e=>{let{css:t}=e;return"".concat(t)});t.Z=e=>(0,u.jsx)(a,{...e})},1939:function(e,t,n){"use strict";var r=n(230),u=n(7437);n(2265);var o=n(802),i=n(6411);function a(){let e=(0,r._)(["\n  margin: 3px;\n  padding: 8px 3px;\n  border-bottom: 1px solid red;\n  color: var(--color-legend);\n"]);return a=function(){return e},e}function l(){let e=(0,r._)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: var(--color-rare);\n  }\n  hr {\n    border-color: var(--color-unique);\n  }\n  iframe {\n    width: 100%;\n    min-height: 500px;\n    background: #fff;\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,r._)(["\n        flex: 1;\n        min-height: 600px;\n        overflow: hidden;\n      "]);return c=function(){return e},e}let f=o.ZP.div.withConfig({componentId:"sc-55d1b159-0"})(a()),d=o.ZP.div.withConfig({componentId:"sc-55d1b159-1"})(l());t.Z=e=>{let{header:t,contents:n,headerProps:r,bodyProps:o}=e;return(0,u.jsxs)(s,{children:[(0,u.jsx)(f,{...r,children:t}),(0,u.jsx)(d,{dangerouslySetInnerHTML:{__html:n},...o})]})};var s=(0,o.ZP)(i.Z).withConfig({componentId:"sc-55d1b159-2"})(c())},4891:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(230),u=n(7437),o=n(2265),i=n(802),a=n(4625),l=n(1939),c=n(9077),f=n(8188),d=e=>{let{data:t,isLoading:n,isError:r}=(0,c.useQuery)(["toyContents"],()=>(0,f.I)("".concat(e)));return{data:t,isLoading:n,isError:r}};function s(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  margin: 24px 3px;\n"]);return s=function(){return e},e}function p(){let e=(0,r._)(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  overflow: hidden;\n\n  @media (max-width: 1024px) {\n    justify-content: center;\n  }\n"]);return p=function(){return e},e}let y=i.zo.div(s()),v=i.zo.section(p());var b=()=>{let[e,t]=(0,o.useState)(0),{data:n}=d(e);return(0,o.useEffect)(()=>{let e=parseInt((0,a.pm)().get("post"));isNaN(e)||t(e)},[]),(0,u.jsx)(y,{children:(0,u.jsx)(v,{children:(0,u.jsx)(l.Z,{header:"project article",contents:n})})})}}},function(e){e.O(0,[576,222,77,971,596,744],function(){return e(e.s=524)}),_N_E=e.O()}]);