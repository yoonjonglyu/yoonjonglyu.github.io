(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[384],{7577:function(e,t){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n,r,u,o=null,invokeFunc=function(){var t;n=e.call.apply(e,[e].concat(function(e){if(Array.isArray(e))return _arrayLikeToArray(e)}(t=r||[])||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),o=null},start=function(){u=Date.now()+t,o=setTimeout(function(){Date.now()>=u&&invokeFunc()},t)},debounced=function(){for(var e=arguments.length,t=Array(e),u=0;u<e;u++)t[u]=arguments[u];return r=t,start(),function(){return n}};return debounced.cancel=function(){clearTimeout(o),o=null},debounced.pending=function(){return Date.now()<u},debounced}},4735:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_interopRequireDefault(n(7577)),u=_interopRequireDefault(n(9932));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=Object.freeze({debounce:r.default,throttle:u.default});t.default=o},9932:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t){var n=null;return function(){if(null===n||Date.now()>=n)return n=Date.now()+t,e.apply(void 0,arguments)}}},7529:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return e.toLocaleString()}},4978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=Object.freeze({addComma:((r=n(7529))&&r.__esModule?r:{default:r}).default});t.default=u},2172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u=Object.freeze({loadCDN:((r=n(9436))&&r.__esModule?r:{default:r}).default});t.default=u},9436:function(e,t){"use strict";function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e,t,n){if(!document.head.querySelector("#".concat(e))){var r=document.createElement("script");r.setAttribute("id",e),r.setAttribute("src",t),n&&Object.entries(n).forEach(function(e){var t=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,u,o,a,i=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){c=!0,u=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw u}}return i}}(e,2)||function(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}}(e,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=t[0],u=t[1];r.setAttribute(n,u)}),document.head.appendChild(r)}}},4625:function(e,t,n){"use strict";t.pm=void 0;var r=_interopRequireDefault(n(1289)),u=_interopRequireDefault(n(9943)),o=_interopRequireDefault(n(4978)),a=_interopRequireDefault(n(2172)),i=_interopRequireDefault(n(4735));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}r.default.isArray,r.default.isFunction,r.default.isNumber,r.default.isString,r.default.isSymbol,r.default.isNull,r.default.isObject;var l=u.default.getQuery;u.default.setQuery,t.pm=l,o.default.addComma,a.default.loadCDN,i.default.debounce,i.default.throttle,Object.freeze({TypeCheck:r.default,QueryString:u.default,Format:o.default,Import:a.default,Api:i.default})},1844:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return new URLSearchParams(window.location.search)}},9943:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_interopRequireDefault(n(1844)),u=_interopRequireDefault(n(143));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=Object.freeze({getQuery:r.default,setQuery:u.default});t.default=o},143:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){window.history.pushState({},"","?".concat(e.toString()))}},1289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_interopRequireDefault(n(349)),u=_interopRequireDefault(n(9153)),o=_interopRequireDefault(n(434)),a=_interopRequireDefault(n(3236)),i=_interopRequireDefault(n(4639)),l=_interopRequireDefault(n(7972)),c=_interopRequireDefault(n(3465));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=Object.freeze({isFunction:r.default,isArray:u.default,isString:o.default,isNumber:a.default,isSymbol:i.default,isNull:l.default,isObject:c.default});t.default=f},9153:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return void 0!==Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},349:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"function"==typeof e}},7972:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return null===e}},3236:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"number"==typeof e}},3465:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"[object Object]"===Object.prototype.toString.call(e)}},434:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"string"==typeof e}},4639:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(e){return"[object Symbol]"===Object.prototype.toString.call(e)}},524:function(e,t,n){Promise.resolve().then(n.bind(n,2759))},3882:function(e,t,n){"use strict";n.d(t,{N:function(){return errHandler},u:function(){return u}});var r=n(9222);let u=((e,t)=>{let n=r.Z.create({baseURL:e});return n})("https://yoonjonglyu.github.io/archivedata/"),errHandler=async(e,t)=>{try{let t=await e();return t}catch(n){let e=t(n);return e}}},1579:function(e,t,n){"use strict";n.d(t,{I:function(){return GetToyContents},b:function(){return GetToyList}});var r=n(3882);let GetToyList=async()=>(0,r.N)(async()=>{let{data:e}=await (0,r.u)("toy/list.json");return e},e=>console.error(e)),GetToyContents=async e=>(0,r.N)(async()=>{let{data:t}=await (0,r.u)("toy/".concat(e,".html"));return t},e=>console.error(e))},3233:function(e,t,n){"use strict";var r=n(230),u=n(7437);n(2265);var o=n(802);function _templateObject(){let e=(0,r._)(["\n  position: relative;\n  min-height: 200px;\n  padding: 6px 12px;\n  background: var(--color-background-card);\n  border-radius: 12px;\n  ","\n"]);return _templateObject=function(){return e},e}let a=o.ZP.div.withConfig({componentId:"sc-db37fa3e-0"})(_templateObject(),e=>{let{css:t}=e;return"".concat(t)});t.Z=e=>(0,u.jsx)(a,{...e})},8438:function(e,t,n){"use strict";var r=n(230),u=n(7437);n(2265);var o=n(802),a=n(3233);function _templateObject(){let e=(0,r._)(["\n  margin: 3px;\n  padding: 8px 3px;\n  border-bottom: 1px solid red;\n  color: var(--color-legend);\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: var(--color-rare);\n  }\n  hr {\n    border-color: var(--color-unique);\n  }\n  iframe {\n    width: 100%;\n    min-height: 600px;\n    background: #fff;\n  }\n  pre {\n    color: #000;\n    margin-top: 0;\n    margin-bottom: 24px;\n    padding: 12px;\n    font-size: 1em;\n    background: #f7f7f7;\n    border-radius: 2;\n    overflow-x: auto;\n  }\n  .pl-k {\n    color: #d73a49;\n  }\n  .pl-v {\n    color: #e36209;\n  }\n  .pl-en {\n    color: #6f42c1;\n  }\n  .pl-ent {\n    color: #22863a;\n  }\n  .pl-c1,\n  .pl-s,\n  .pl-v {\n    color: #005cc5;\n  }\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n        flex: 1;\n        min-height: 600px;\n        overflow: hidden;\n      "]);return _templateObject2=function(){return e},e}let i=o.ZP.div.withConfig({componentId:"sc-417adadd-0"})(_templateObject()),l=o.ZP.div.withConfig({componentId:"sc-417adadd-1"})(_templateObject1());t.Z=e=>{let{header:t,contents:n,headerProps:r,bodyProps:o}=e;return(0,u.jsxs)(c,{children:[(0,u.jsx)(i,{...r,children:t}),(0,u.jsx)(l,{dangerouslySetInnerHTML:{__html:n},...o})]})};var c=(0,o.ZP)(a.Z).withConfig({componentId:"sc-417adadd-2"})(_templateObject2())},2759:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return toy_ToyArticle}});var r=n(230),u=n(7437),o=n(2265),a=n(802),i=n(4625),l=n(8438),c=n(9077),f=n(1579),toy_useToyContents=e=>{let{data:t,isLoading:n,isError:r}=(0,c.useQuery)(["toyContents",e],()=>(0,f.I)("".concat(e)));return{data:t,isLoading:n,isError:r}};function _templateObject(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: row;\n  margin: 24px 3px;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  flex: 1;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 18px;\n  overflow: hidden;\n\n  @media (max-width: 1024px) {\n    justify-content: center;\n  }\n"]);return _templateObject1=function(){return e},e}let d=a.zo.div(_templateObject()),s=a.zo.section(_templateObject1());var toy_ToyArticle=()=>{let[e,t]=(0,o.useState)(0),{data:n}=toy_useToyContents(e);return(0,o.useEffect)(()=>{let e=parseInt((0,i.pm)().get("post"));isNaN(e)||t(e)},[]),(0,u.jsx)(d,{children:(0,u.jsx)(s,{children:(0,u.jsx)(l.Z,{header:"project article",contents:n})})})}}},function(e){e.O(0,[576,222,77,971,864,744],function(){return e(e.s=524)}),_N_E=e.O()}]);