(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58287,e=>{"use strict";var t=e.i(22986);e.s(["allProjects",()=>t.default])},69288,e=>{"use strict";var t=e.i(15829);e.s(["allPackages",()=>t.default])},29785,e=>{"use strict";var t=e.i(22986),r=e.i(48265),i=e.i(15829);[...t.default,...r.default,...i.default],e.s([],29785)},83606,e=>{"use strict";var t=e.i(48265);e.s(["allWorks",()=>t.default])},76683,e=>{e.v("/_next/static/media/noimg.1da5a54b.png")},86351,e=>{"use strict";var t=e.i(43476),r=e.i(97053);let i=r.default.div.withConfig({displayName:"Card__Container",componentId:"sc-132c4da7-0"})`
  position: relative;
  min-height: 200px;
  padding: 6px 12px;
  background: var(--color-background-card);
  border-radius: 12px;
  ${({css:e})=>`${e}`}
`;e.s(["default",0,e=>(0,t.jsx)(i,{...e})])},51989,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(97053),a=e.i(97063),n=e.i(86351);let o=i.keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`,s=i.default.div.withConfig({displayName:"HomeBanner__TextBox",componentId:"sc-166567fe-0"})`
  position: absolute;
  top: 50%;
  right: 48px;
  transform: translateY(-50%); /* 중앙 정렬로 변경 */
  text-align: right;
  z-index: 10;
  max-width: 500px;

  @media (max-width: 1024px) {
    right: 24px;
    max-width: 80%;
  }
`,l=i.default.h2.withConfig({displayName:"HomeBanner__Title",componentId:"sc-166567fe-1"})`
  margin: 0;
  font-size: 3rem; /* 크기 키움 */
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  letter-spacing: -1px;
  /* 이미지처럼 깔끔한 화이트 텍스트 유지 */

  @media (max-width: 1024px) {
    font-size: 2rem;
  }
`,d=i.default.p.withConfig({displayName:"HomeBanner__SubTitle",componentId:"sc-166567fe-2"})`
  margin-top: 20px;
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.7);
  word-break: keep-all;
`,c=i.default.div.withConfig({displayName:"HomeBanner__BackgroundPattern",componentId:"sc-166567fe-3"})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05) 25%,
          transparent 25%
        ) -50px 0,
      linear-gradient(225deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%) -50px
        0,
      linear-gradient(315deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%),
      linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%);
    background-size: 100px 100px;
    opacity: 0.3;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
  }
`,p=i.default.div.withConfig({displayName:"HomeBanner__Sphere",componentId:"sc-166567fe-4"})`
  position: absolute;
  width: ${e=>e.size};
  height: ${e=>e.size};
  top: ${e=>e.top};
  left: ${e=>e.left};
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    ${e=>e.color1},
    ${e=>e.color2}
  );
  box-shadow: -20px 20px 50px rgba(0, 0, 0, 0.3);
  z-index: 2;
  animation: ${o} 6s ease-in-out infinite;
  animation-delay: ${e=>e.delay};
  opacity: 0.9;
  backdrop-filter: blur(5px);
`,h=()=>(0,t.jsxs)(u,{children:[(0,t.jsx)(c,{}),(0,t.jsxs)(s,{children:[(0,t.jsxs)(l,{children:["Designing",(0,t.jsx)("br",{}),"Scalable UI Systems"]}),(0,t.jsxs)(d,{children:["UI Architect & Frontend Engineer.",(0,t.jsx)("br",{}),"Exploring reusable components, design systems, and real-world web applications."]})]}),(0,t.jsx)(p,{size:"220px",top:"10%",left:"5%",color1:"var(--color-point)",color2:"#44318d",delay:"0s"}),(0,t.jsx)(p,{size:"120px",top:"55%",left:"15%",color1:"#d83f87",color2:"#2a1b3d",delay:"-2s"})]});var u=(0,i.default)(n.default).withConfig({displayName:"HomeBanner___StyledCard",componentId:"sc-166567fe-5"})`
        position: relative;
        min-height: 480px; /* 깊이감을 위해 높이 확보 */
        padding: 48px;
        overflow: hidden;
        border: none;
        background: linear-gradient(
          115deg,
          #2a1b3d 0%,
          /* 딥 퍼플 */ #44318d 30%,
          /* 미드 퍼플 */ #d83f87 100% /* 포인트 핑크/레드 */
        );

        @media (max-width: 1024px) {
          min-height: 360px;
          padding: 32px;
        }
      `,g=e.i(22016),f=e.i(74733);let x=class{constructor(e,t){this._isSwipe="wait",this._startXY={x:0,y:0},this._current={currentX:0,currentY:0,currentStep:0,swipeTime:0},this._itemLength=e,this._direction=t}get isSwipe(){return this._isSwipe}get startX(){return this._startXY.x}get startY(){return this._startXY.y}get currentX(){return this._current.currentX}get currentY(){return this._current.currentY}get currentStep(){return this._current.currentStep}get swipeTime(){return this._current.swipeTime}get direction(){return this._direction}set currentX(e){this._current.currentX=e}set currentY(e){this._current.currentY=e}set currentStep(e){e>=0&&e<this._itemLength&&(this._current.currentStep=e)}startSwipe(e,t){this._startXY.x=e,this._startXY.y=t,this._isSwipe="pending",this._current.swipeTime=Date.now()}endSwipe(e,t,r){this._current.swipeTime=0,this._isSwipe="disable",this._current.currentX=e,this._current.currentY=t,setTimeout(()=>this._isSwipe="wait",r)}},m=(e,t)=>{if("wait"!==t.isSwipe)return;let{x:r,y:i}={x:e.targetTouches?e.targetTouches[0].pageX:e.pageX||0,y:e.targetTouches?e.targetTouches[0].pageY:e.pageY||0};t.startSwipe(r,i)},b=(e,t,r)=>{let i,a,n;if("pending"!==t.isSwipe)return;let{x:o,y:s,offset:l}=(i=e.targetTouches?e.targetTouches[0].pageX:e.pageX||0,a=e.targetTouches?e.targetTouches[0].pageY:e.pageY||0,n={x:i-t.startX-t.currentX,y:a-t.startY-t.currentY},{x:i,y:a,offset:n});("row"===t.direction?Math.abs(t.startY-s)<Math.abs(t.startX-o):Math.abs(t.startY-s)>Math.abs(t.startX-o))&&(r.style.transition="none",r.style.transform="row"===t.direction?`translateX(${l.x}px)`:`translateY(${l.y}px)`)},w=(e,t,r)=>{var i,a,n,o,s,l;let d,c,p;if("pending"!==t.isSwipe)return;let{x:h,y:u,offset:g}=(d=e.changedTouches?e.changedTouches[0].pageX:e.pageX||0,c=e.changedTouches?e.changedTouches[0].pageY:e.pageY||0,p={x:t.startX-d,y:t.startY-c},{x:d,y:c,offset:p});"row"===t.direction?(i=h,a=u,(Math.abs((n=g).x)>=r.clientWidth/2||Date.now()-t.swipeTime<200)&&Math.abs(t.startY-a)<Math.abs(t.startX-i)&&(n.x<0?t.currentStep--:t.currentStep++)):(o=h,s=u,(Math.abs((l=g).y)>=r.clientHeight/2||Date.now()-t.swipeTime<200)&&Math.abs(t.startY-s)>Math.abs(t.startX-o)&&(l.y<0?t.currentStep--:t.currentStep++)),t.endSwipe(t.currentStep*parseFloat(getComputedStyle(r).width),t.currentStep*parseFloat(getComputedStyle(r.children[0]).height),333),r.style.transition="333ms",r.style.transform="row"===t.direction?`translateX(-${t.currentX}px)`:`translateY(-${t.currentY}px)`};function y(){return`${location.origin}${location.pathname}`}function v(){let e={};for(let[t,r]of new URLSearchParams(location.search).entries())e[t]=r;return e}function _(e){let t="?",r=Object.entries(e);for(let[e,i]of r)t+=`${e}=${i}&`;return r.length>0?t.slice(0,t.length-1):t}let C=class{constructor(e,t){this._state=e,this._index=t?.paramName||"index",this._isHistory=t?.isHistory||!1,this._historyCallback=t?.historyCallback}resize=e=>{this._state.currentX=this._state.currentStep*parseFloat(getComputedStyle(e).width),this._state.currentY=this._state.currentStep*parseFloat(getComputedStyle(e.children[0]).height),e.style.transition="none",e.style.transform="row"===this._state.direction?`translateX(-${this._state.currentX}px)`:`translateY(-${this._state.currentY}px)`};init=e=>{let t=v();void 0!==t[this._index]&&this._state.currentStep!==parseInt(t[this._index])&&(this._state.currentStep=parseInt(t[this._index]),this.resize(e))};changeHistory=()=>{let e=v();this._state.currentStep!==parseInt(e[this._index])&&(e[this._index]=this._state.currentStep.toString(),this._isHistory?history.pushState(e,"",y()+_(e)):history.replaceState(e,"",y()+_(e)),this._historyCallback&&this._historyCallback(this._state))};changeIndex=(e,t)=>{this._state.currentStep!==e&&(this._state.currentStep=e,this.changeHistory(),this.resize(t))};slide=(e,t)=>{"L"===e?this._state.currentStep--:this._state.currentStep++,this.changeHistory(),this.resize(t)}},S=function(e,t){let r=new x(e,t?.direction||"row"),i=new C(r,t);return{desktopStart:e=>{/iPhone|iPad|Android/g.test(navigator.userAgent)||m(e,r)},desktopMove:(e,t)=>{/iPhone|iPad|Android/g.test(navigator.userAgent)||b(e,r,t)},desktopEnd:(e,t)=>{/iPhone|iPad|Android/g.test(navigator.userAgent)||(w(e,r,t),i.changeHistory())},mobileStart:e=>{m(e,r)},mobileMove:(e,t)=>{b(e,r,t)},mobileEnd:(e,t)=>{w(e,r,t),i.changeHistory()},resize:e=>i.resize(e),init:e=>i.init(e),slidehandler:(e,t)=>i.slide(e,t),changeIndex:(e,t)=>i.changeIndex(e,t)}};var k=e.i(31067);let j=(0,r.forwardRef)(({itemLength:e},t)=>r.default.createElement("ul",{className:"carousel-dots",ref:t},Array(e).fill(!0).map((e,t)=>r.default.createElement("li",{key:t},t)))),I=({containerProps:e,itemProps:t,item:i,config:a})=>{var n,o;let s,l=(0,r.useRef)(null),d=(0,r.useRef)(null),{swipeEvents:c,handleSlide:p}=(s=S(n=i.length,o={...a,historyCallback:e=>{a?.historyCallback&&a?.historyCallback(e),a?.isCarousel&&!a?.isHistory&&h(e.currentStep)}}),(0,r.useEffect)(()=>{let e,t=()=>s.init(l.current);return e=o?.isHistory?setInterval(t,10):setTimeout(t,0),()=>o?.isHistory?clearInterval(e):clearTimeout(e)}),(0,r.useEffect)(()=>{let e=()=>s.resize(l.current);return l.current&&l.current,window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[n]),{swipeEvents:{onTouchStart:e=>s.mobileStart(e),onTouchMove:e=>s.mobileMove(e,l.current),onTouchEnd:e=>s.mobileEnd(e,l.current),onTouchCancel:e=>s.mobileEnd(e,l.current),onPointerDown:e=>s.desktopStart(e),onPointerMove:e=>s.desktopMove(e,l.current),onPointerUp:e=>s.desktopEnd(e,l.current),onPointerLeave:e=>s.desktopEnd(e,l.current),onPointerCancel:e=>s.desktopEnd(e,l.current)},handleSlide:e=>{s.slidehandler(e,l.current)},changeIndex:e=>s.changeIndex(e,l.current)}),h=e=>{null!==d.current&&d.current.childNodes.forEach((t,r)=>{t.className=e===r?"active":""})};return(0,r.useEffect)(()=>{let e=new URLSearchParams(location.search).get(a?.paramName||"index");e&&h(parseInt(e))},[]),r.default.createElement("div",(0,k.default)({},e,{className:`swipe-container ${e?.className||""}`}),a?.isCarousel&&!a.isHistory?r.default.createElement("div",null,r.default.createElement("button",{className:"swipe-button swipe-left-button",onClick:()=>p("L")},"〈"),r.default.createElement("button",{className:"swipe-button swipe-right-button",onClick:()=>p("R")},"〉"),r.default.createElement(j,{itemLength:i.length,ref:d})):null,r.default.createElement("ul",(0,k.default)({className:`swipe-wrap ${a?.direction||""}`,ref:l},c),i.map((e,i)=>r.default.createElement("li",(0,k.default)({key:i},t,{className:`swipe-item ${t?.className||""}`}),e))))},N=i.default.div.withConfig({displayName:"WCarousel__CarouselContainer",componentId:"sc-fa5ae2e1-0"})`
  position: relative;
  z-index: 10000;
  width: 100%;
  overflow: hidden;
  /* 부모 레이아웃과의 조화를 위해 약간의 보더 추가 가능 */
  border-radius: 16px;
`,Y=i.default.div.withConfig({displayName:"WCarousel__CarouselItemBox",componentId:"sc-fa5ae2e1-1"})`
  width: 100%;
  min-height: ${({$carouselheight:e})=>e??"300px"};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`,E=i.default.ul.withConfig({displayName:"WCarousel__CarouselDot",componentId:"sc-fa5ae2e1-2"})`
  position: absolute;
  bottom: 16px;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 8px 16px;
  list-style: none;

  /* 테마에 맞춘 유리 질감 배경 추가 */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  & li {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 0 rgba(var(--color-point-rgb), 0);
  }
`,z=({items:e,carouselHeight:i})=>{let n=(0,r.useRef)(null),o=(0,r.useCallback)(e=>{n.current&&requestAnimationFrame(()=>{n.current?.childNodes.forEach((t,r)=>{if(!t.style)return;let i=e===r;t.style.width=i?"20px":"6px",t.style.borderRadius=i?"4px":"50%",t.style.background=i?"var(--color-point)":"rgba(255, 255, 255, 0.2)",t.style.boxShadow=i?"0 0 10px var(--color-point)":"none"})})},[]);return(0,r.useEffect)(()=>{o(parseInt((0,a.getQuery)().get("index"))||0)},[o]),(0,t.jsxs)(N,{children:[(0,t.jsx)(I,{item:e.map((e,r)=>(0,t.jsx)(Y,{$carouselheight:i,children:e},r)),config:{isHistory:!1,historyCallback:e=>o(e.currentStep)}}),(0,t.jsx)(E,{ref:n,children:e.map((e,r)=>(0,t.jsx)("li",{"aria-label":`carousel dot ${r+1}`},r))})]})};e.i(29785);var T=e.i(83606),X=e.i(52919);let $=i.default.ul.withConfig({displayName:"HomeShelf__Item",componentId:"sc-2faf64be-0"})`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 320px;
  padding: 10px 5px;
  list-style: none;
  box-sizing: border-box;
  touch-action: pan-y;

  & li {
    flex: 1;
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03); /* 아주 투명한 화이트 */
    border: 1px solid rgba(255, 255, 255, 0.08); /* 은은한 테두리 */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    backdrop-filter: blur(10px); /* 유리 질감 */
  }

  & li:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.07);
    border-color: var(--color-point); /* 포인트 컬러로 강조 */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  }

  & li a {
    display: block;
    color: inherit;
    text-decoration: none;
    -webkit-user-drag: none;
  }

  /* 이미지 영역 오버레이 효과 */
  & .img-wrapper {
    position: relative;
    width: 100%;
    height: 140px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 60%,
        rgba(32, 37, 53, 0.8)
      );
    }
  }

  & li img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    pointer-events: none;
  }

  & li:hover img {
    transform: scale(1.1); /* 호버 시 이미지 확대 */
  }

  & li h2 {
    margin: 15px 15px 8px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & li p {
    margin: 0 15px 15px;
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(203, 213, 245, 0.7); /* 서브 텍스트 명도 조절 */

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    gap: 15px;
  }
`,H=()=>{let e=T.allWorks.slice().sort((e,t)=>(e.order??0)-(t.order??0)),i=(0,r.useMemo)(()=>e.length?[e.slice(0,3),e.slice(3,6)].filter(e=>e.length>0).map((e,r)=>(0,t.jsx)($,{children:e.map(e=>(0,t.jsxs)("li",{children:[(0,t.jsx)(g.default,{href:`/work/${e.slug}`,draggable:"false",children:(0,t.jsx)("div",{className:"img-wrapper",children:(0,t.jsx)(f.default,{src:e.thumbnail||X.default,alt:`${e.title} thumbnail`,draggable:!1,fill:!0,noImage:X.default.src})})}),(0,t.jsxs)(g.default,{href:`/work/${e.slug}`,draggable:"false",children:[(0,t.jsx)("h2",{children:e.title}),(0,t.jsx)("p",{children:e.summary})]})]},e.slug))},r)):[],[e]);return(0,t.jsx)(P,{children:i.length>0&&(0,t.jsx)(z,{items:i,carouselHeight:"320px"})})};var P=(0,i.default)(n.default).withConfig({displayName:"HomeShelf___StyledCard",componentId:"sc-2faf64be-1"})`
        padding: 6px;
        background: #12151f; /* 배경색 통일 */
        border: 1px solid rgba(255, 255, 255, 0.05);
      `,M=e.i(58287),A=e.i(69288);let B=i.default.div.withConfig({displayName:"SideCard__CardHeader",componentId:"sc-3b7f4fd7-0"})`
  height: 32px;
  border-bottom: 1px dashed var(--color-background-space);
  & h3 {
    font-size: 14px;
    font-weight: 500;
  }
`,L=i.default.div.withConfig({displayName:"SideCard__CardContents",componentId:"sc-3b7f4fd7-1"})`
  padding: 12px;
  font-size: 12px;
  & ul,
  ol {
    margin: 6px;
    padding: 0px;
  }
`;var R=(0,i.default)(n.default).withConfig({displayName:"SideCard___StyledCard",componentId:"sc-3b7f4fd7-2"})`
        & a:hover {
          text-decoration: underline;
          color: var(--color-point);
        }
      `;let F=i.default.aside.withConfig({displayName:"HomeSide__SideArea",componentId:"sc-4c7de457-0"})`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px; /* 간격 확장 */
  overflow: hidden;

  /* 리스트 스타일 커스텀 */
  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & li {
    position: relative;
    padding-left: 14px;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.2s ease;

    /* 리스트 불렛(Bullet)을 사이버틱한 점으로 변경 */
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    &:hover {
      color: var(--color-point);
      transform: translateX(4px);

      &::before {
        background: var(--color-point);
        box-shadow: 0 0 8px var(--color-point);
      }
    }
  }

  & a {
    text-decoration: none;
    color: inherit;
    display: block;
    width: 100%;
  }

  @media (max-width: 1024px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;

    & > div {
      flex: 0 0 280px; /* 모바일에서 가로 스크롤 카드 너비 고정 */
    }

    &::-webkit-scrollbar {
      height: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--color-point);
      border-radius: 10px;
    }
  }
`,U=i.default.div.withConfig({displayName:"HomeSide__CardHead",componentId:"sc-4c7de457-1"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-unique);
    letter-spacing: 0.5px;
  }

  /* 아이콘 느낌의 장식 요소 추가 */
  &::after {
    content: '◈';
    font-size: 0.8rem;
    opacity: 0.5;
    color: var(--color-unique);
  }
`,D=(0,i.default)(({header:e,contents:r,...i})=>(0,t.jsxs)(R,{...i,children:[(0,t.jsx)(B,{children:e}),(0,t.jsx)(L,{children:r})]})).withConfig({displayName:"HomeSide__StyledSideCard",componentId:"sc-4c7de457-2"})`
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  border-radius: 16px !important;
  padding: 24px !important;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(var(--color-unique-rgb), 0.4) !important;
  }
`,W=()=>{let e=M.allProjects.slice().sort((e,t)=>(e.order??0)-(t.order??0)),r=A.allPackages.slice().sort((e,t)=>(e.order??0)-(t.order??0));return(0,t.jsxs)(F,{children:[(0,t.jsx)(D,{header:(0,t.jsx)(U,{children:(0,t.jsx)("h3",{children:"Project"})}),contents:(0,t.jsx)("ul",{children:e.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(g.default,{href:`/archive/project/${e.slug}`,children:e.title})},e.slug))})}),(0,t.jsx)(D,{header:(0,t.jsx)(U,{children:(0,t.jsx)("h3",{children:"Package"})}),contents:(0,t.jsx)("ul",{children:r.map(e=>(0,t.jsx)("li",{children:(0,t.jsx)(g.default,{href:`/archive/package/${e.slug}`,children:e.title})},e.slug))})})]})},q=i.default.div.withConfig({displayName:"HomeContents__NoiseOverlay",componentId:"sc-1dbfe5bf-0"})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.03; /* 아주 미세하게 적용 */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
`,O=i.default.div.withConfig({displayName:"HomeContents__MouseGlow",componentId:"sc-1dbfe5bf-1"})`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    rgba(216, 63, 135, 0.12) 0%,
    /* 직접 색상 입력 */ rgba(107, 33, 168, 0.05) 30%,
    /* 보라색 계열 혼합 */ transparent 70%
  );
  /* 초기 위치는 화면 밖 */
  transform: translate3d(-100%, -100%, 0);
  pointer-events: none;
  transition: transform 0.15s ease-out; /* 부드러운 추적 */
  will-change: transform;
`,K=i.default.div.withConfig({displayName:"HomeContents__Container",componentId:"sc-1dbfe5bf-2"})`
  position: relative; /* 글로우 효과의 기준 */
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 24px 3px;
  z-index: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`,G=i.default.section.withConfig({displayName:"HomeContents__ContentsArea",componentId:"sc-1dbfe5bf-3"})`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 32px;
  overflow: hidden;
`;e.s(["default",0,()=>{let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=t=>{if(e.current){let r=t.clientX-400,i=t.clientY-400;e.current.style.transform=`translate3d(${r}px, ${i}px, 0)`}};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),(0,t.jsxs)(t.Fragment,{children:["undefined"!=typeof navigator&&(0,a.isMobile)()?null:(0,t.jsx)(O,{ref:e}),(0,t.jsx)(q,{}),(0,t.jsxs)(K,{children:[(0,t.jsxs)(G,{children:[(0,t.jsx)(h,{}),(0,t.jsx)(H,{})]}),(0,t.jsx)(W,{})]})]})}],51989)}]);