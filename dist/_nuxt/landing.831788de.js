import{ar as Me,ax as Ne,aG as Ve,aq as Le,aI as Ae,aP as Te,aQ as je,d as oe,r as z,h as F,p as xe,k as de,L as T,F as V,i as pe,j as we,l as ve,o as _,b,u as c,aR as K,D as G,aS as fe,aT as qe,a as o,e as P,v as W,f as $e,t as k,z as O,w as N,c as J,aU as Ge,aV as Ie,g as H,aW as ge,s as He,A as Ze,C as Ue,m as Re,a8 as De}from"./entry.b92b1562.js";import me from"./Icon.688a35d9.js";import{u as M}from"./state.fdb3d5b8.js";import{_ as Ke}from"./_plugin-vue_export-helper.c27b6911.js";import{i as We,a as ye,b as le,c as Je,d as Qe,e as Ye,f as Xe,u as ne}from"./theme.71afa617.js";import{m as _e,o as p,E as he,u as U,c as et,l as R,V as tt,d as ot,e as nt,y as at,w as st,f as lt,H as ae,t as Z,b as rt,n as ke,g as re,i as ie,p as Se,N as ee,P as q,j as L,a as j,k as A,T as ue,U as it,h as ut,G as ct,q as dt,r as pt,S as vt}from"./XMarkIcon.4ff79ff3.js";import{_ as ce}from"./lodash.beac4716.js";import{_ as ft}from"./ContentRendererMarkdown.vue.5be43e4b.js";import{_ as mt}from"./client-only.dceb122f.js";import{p as _t}from"./highlighter.6f06f784.js";import"./index.288f722b.js";import"./index.749539fc.js";import"./preview.2e2a1030.js";import"./node.be90b14f.js";function be(n,t,l){if(!Me(l))return!1;var s=typeof t;return(s=="number"?Ne(l)&&We(t,l.length):s=="string"&&t in l)?Ve(l[t],n):!1}function ht(n,t){var l=n.length;for(n.sort(t);l--;)n[l]=n[l].value;return n}function gt(n,t){if(n!==t){var l=n!==void 0,s=n===null,a=n===n,e=ye(n),r=t!==void 0,u=t===null,f=t===t,i=ye(t);if(!u&&!i&&!e&&n>t||e&&r&&f&&!u&&!i||s&&r&&f||!l&&f||!a)return 1;if(!s&&!e&&!i&&n<t||i&&l&&a&&!s&&!e||u&&l&&a||!r&&a||!f)return-1}return 0}function yt(n,t,l){for(var s=-1,a=n.criteria,e=t.criteria,r=a.length,u=l.length;++s<r;){var f=gt(a[s],e[s]);if(f){if(s>=u)return f;var i=l[s];return f*(i=="desc"?-1:1)}}return n.index-t.index}function bt(n,t,l){t.length?t=le(t,function(e){return Le(e)?function(r){return Je(r,e.length===1?e[0]:e)}:e}):t=[Ae];var s=-1;t=le(t,Qe(Xe));var a=Ye(n,function(e,r,u){var f=le(t,function(i){return i(e)});return{criteria:f,index:++s,value:e}});return ht(a,function(e,r){return yt(e,r,l)})}var xt=Te(function(n,t){if(n==null)return[];var l=t.length;return l>1&&be(n,t[0],t[1])?t=[]:l>2&&be(t[0],t[1],t[2])&&(t=[t[0]]),bt(n,je(t,1),[])});const te=xt;var wt=(n=>(n[n.Open=0]="Open",n[n.Closed=1]="Closed",n))(wt||{});let Pe=Symbol("PopoverContext");function se(n){let t=ve(Pe,null);if(t===null){let l=new Error(`<${n} /> is missing a parent <${Be.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,se),l}return t}let $t=Symbol("PopoverGroupContext");function ze(){return ve($t,null)}let Ce=Symbol("PopoverPanelContext");function kt(){return ve(Ce,null)}let Be=oe({name:"Popover",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"}},setup(n,{slots:t,attrs:l,expose:s}){var a;let e=z(null);s({el:e,$el:e});let r=z(1),u=z(null),f=z(null),i=z(null),h=z(null),C=F(()=>_e(e)),I=F(()=>{var d,m;if(!p(u)||!p(h))return!1;for(let X of document.querySelectorAll("body > *"))if(Number(X==null?void 0:X.contains(p(u)))^Number(X==null?void 0:X.contains(p(h))))return!0;let y=he(),B=y.indexOf(p(u)),Y=(B+y.length-1)%y.length,Ee=(B+1)%y.length,Oe=y[Y],Fe=y[Ee];return!((d=p(h))!=null&&d.contains(Oe))&&!((m=p(h))!=null&&m.contains(Fe))}),S={popoverState:r,buttonId:z(null),panelId:z(null),panel:h,button:u,isPortalled:I,beforePanelSentinel:f,afterPanelSentinel:i,togglePopover(){r.value=U(r.value,{0:1,1:0})},closePopover(){r.value!==1&&(r.value=1)},close(d){S.closePopover();let m=(()=>d?d instanceof HTMLElement?d:d.value instanceof HTMLElement?p(d):p(S.button):p(S.button))();m==null||m.focus()}};xe(Pe,S),et(F(()=>U(r.value,{0:R.Open,1:R.Closed})));let D={buttonId:S.buttonId,panelId:S.panelId,close(){S.closePopover()}},E=ze(),x=E==null?void 0:E.registerPopover,[$,g]=tt(),v=ot({mainTreeNodeRef:E==null?void 0:E.mainTreeNodeRef,portals:$,defaultContainers:[u,h]});function w(){var d,m,y,B;return(B=E==null?void 0:E.isFocusWithinPopoverGroup())!=null?B:((d=C.value)==null?void 0:d.activeElement)&&(((m=p(u))==null?void 0:m.contains(C.value.activeElement))||((y=p(h))==null?void 0:y.contains(C.value.activeElement)))}return de(()=>x==null?void 0:x(D)),nt((a=C.value)==null?void 0:a.defaultView,"focus",d=>{var m,y;d.target!==window&&d.target instanceof HTMLElement&&r.value===0&&(w()||u&&h&&(v.contains(d.target)||(m=p(S.beforePanelSentinel))!=null&&m.contains(d.target)||(y=p(S.afterPanelSentinel))!=null&&y.contains(d.target)||S.closePopover()))},!0),at(v.resolveContainers,(d,m)=>{var y;S.closePopover(),st(m,lt.Loose)||(d.preventDefault(),(y=p(u))==null||y.focus())},F(()=>r.value===0)),()=>{let d={open:r.value===0,close:S.close};return T(V,[T(g,{},()=>ae({theirProps:{...n,...l},ourProps:{ref:e},slot:d,slots:t,attrs:l,name:"Popover"})),T(v.MainTreeNode)])}}}),St=oe({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:()=>`headlessui-popover-button-${Z()}`}},inheritAttrs:!1,setup(n,{attrs:t,slots:l,expose:s}){let a=se("PopoverButton"),e=F(()=>_e(a.button));s({el:a.button,$el:a.button}),pe(()=>{a.buttonId.value=n.id}),we(()=>{a.buttonId.value=null});let r=ze(),u=r==null?void 0:r.closeOthers,f=kt(),i=F(()=>f===null?!1:f.value===a.panelId.value),h=z(null),C=`headlessui-focus-sentinel-${Z()}`;i.value||de(()=>{a.button.value=h.value});let I=rt(F(()=>({as:n.as,type:t.type})),h);function S(v){var w,d,m,y,B;if(i.value){if(a.popoverState.value===1)return;switch(v.key){case j.Space:case j.Enter:v.preventDefault(),(d=(w=v.target).click)==null||d.call(w),a.closePopover(),(m=p(a.button))==null||m.focus();break}}else switch(v.key){case j.Space:case j.Enter:v.preventDefault(),v.stopPropagation(),a.popoverState.value===1&&(u==null||u(a.buttonId.value)),a.togglePopover();break;case j.Escape:if(a.popoverState.value!==0)return u==null?void 0:u(a.buttonId.value);if(!p(a.button)||(y=e.value)!=null&&y.activeElement&&!((B=p(a.button))!=null&&B.contains(e.value.activeElement)))return;v.preventDefault(),v.stopPropagation(),a.closePopover();break}}function D(v){i.value||v.key===j.Space&&v.preventDefault()}function E(v){var w,d;n.disabled||(i.value?(a.closePopover(),(w=p(a.button))==null||w.focus()):(v.preventDefault(),v.stopPropagation(),a.popoverState.value===1&&(u==null||u(a.buttonId.value)),a.togglePopover(),(d=p(a.button))==null||d.focus()))}function x(v){v.preventDefault(),v.stopPropagation()}let $=ke();function g(){let v=p(a.panel);if(!v)return;function w(){U($.value,{[A.Forwards]:()=>q(v,L.First),[A.Backwards]:()=>q(v,L.Last)})===ue.Error&&q(he().filter(d=>d.dataset.headlessuiFocusGuard!=="true"),U($.value,{[A.Forwards]:L.Next,[A.Backwards]:L.Previous}),{relativeTo:p(a.button)})}w()}return()=>{let v=a.popoverState.value===0,w={open:v},{id:d,...m}=n,y=i.value?{ref:h,type:I.value,onKeydown:S,onClick:E}:{ref:h,id:d,type:I.value,"aria-expanded":a.popoverState.value===0,"aria-controls":p(a.panel)?a.panelId.value:void 0,disabled:n.disabled?!0:void 0,onKeydown:S,onKeyup:D,onClick:E,onMousedown:x};return T(V,[ae({ourProps:y,theirProps:{...t,...m},slot:w,attrs:t,slots:l,name:"PopoverButton"}),v&&!i.value&&a.isPortalled.value&&T(re,{id:C,features:ie.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:g})])}}}),Pt=oe({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(n,{attrs:t,slots:l}){let s=se("PopoverOverlay"),a=`headlessui-popover-overlay-${Z()}`,e=Se(),r=F(()=>e!==null?(e.value&R.Open)===R.Open:s.popoverState.value===0);function u(){s.closePopover()}return()=>{let f={open:s.popoverState.value===0};return ae({ourProps:{id:a,"aria-hidden":!0,onClick:u},theirProps:n,slot:f,attrs:t,slots:l,features:ee.RenderStrategy|ee.Static,visible:r.value,name:"PopoverOverlay"})}}}),zt=oe({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-popover-panel-${Z()}`}},inheritAttrs:!1,setup(n,{attrs:t,slots:l,expose:s}){let{focus:a}=n,e=se("PopoverPanel"),r=F(()=>_e(e.panel)),u=`headlessui-focus-sentinel-before-${Z()}`,f=`headlessui-focus-sentinel-after-${Z()}`;s({el:e.panel,$el:e.panel}),pe(()=>{e.panelId.value=n.id}),we(()=>{e.panelId.value=null}),xe(Ce,e.panelId),de(()=>{var x,$;if(!a||e.popoverState.value!==0||!e.panel)return;let g=(x=r.value)==null?void 0:x.activeElement;($=p(e.panel))!=null&&$.contains(g)||q(p(e.panel),L.First)});let i=Se(),h=F(()=>i!==null?(i.value&R.Open)===R.Open:e.popoverState.value===0);function C(x){var $,g;switch(x.key){case j.Escape:if(e.popoverState.value!==0||!p(e.panel)||r.value&&!(($=p(e.panel))!=null&&$.contains(r.value.activeElement)))return;x.preventDefault(),x.stopPropagation(),e.closePopover(),(g=p(e.button))==null||g.focus();break}}function I(x){var $,g,v,w,d;let m=x.relatedTarget;m&&p(e.panel)&&(($=p(e.panel))!=null&&$.contains(m)||(e.closePopover(),((v=(g=p(e.beforePanelSentinel))==null?void 0:g.contains)!=null&&v.call(g,m)||(d=(w=p(e.afterPanelSentinel))==null?void 0:w.contains)!=null&&d.call(w,m))&&m.focus({preventScroll:!0})))}let S=ke();function D(){let x=p(e.panel);if(!x)return;function $(){U(S.value,{[A.Forwards]:()=>{var g;q(x,L.First)===ue.Error&&((g=p(e.afterPanelSentinel))==null||g.focus())},[A.Backwards]:()=>{var g;(g=p(e.button))==null||g.focus({preventScroll:!0})}})}$()}function E(){let x=p(e.panel);if(!x)return;function $(){U(S.value,{[A.Forwards]:()=>{let g=p(e.button),v=p(e.panel);if(!g)return;let w=he(),d=w.indexOf(g),m=w.slice(0,d+1),y=[...w.slice(d+1),...m];for(let B of y.slice())if(B.dataset.headlessuiFocusGuard==="true"||v!=null&&v.contains(B)){let Y=y.indexOf(B);Y!==-1&&y.splice(Y,1)}q(y,L.First,{sorted:!1})},[A.Backwards]:()=>{var g;q(x,L.Previous)===ue.Error&&((g=p(e.button))==null||g.focus())}})}$()}return()=>{let x={open:e.popoverState.value===0,close:e.close},{id:$,focus:g,...v}=n,w={ref:e.panel,id:$,onKeydown:C,onFocusout:a&&e.popoverState.value===0?I:void 0,tabIndex:-1};return ae({ourProps:w,theirProps:{...t,...v},attrs:t,slot:x,slots:{...l,default:(...d)=>{var m;return[T(V,[h.value&&e.isPortalled.value&&T(re,{id:u,ref:e.beforePanelSentinel,features:ie.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}),(m=l.default)==null?void 0:m.call(l,...d),h.value&&e.isPortalled.value&&T(re,{id:f,ref:e.afterPanelSentinel,features:ie.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:E})])]}},features:ee.RenderStrategy|ee.Static,visible:h.value,name:"PopoverPanel"})}}});const Ct=["src"],Bt={__name:"Logo",props:{logo_url:{type:String}},setup(n){return(t,l)=>(_(),b("img",{tag:"img",to:"#",alt:"Logo",src:n.logo_url?n.logo_url:c(K)().logo_url?c(K)().logo_url:"/logo.svg",class:G([c(K)().logo_css?c(K)().logo_css:"h-10 mx-auto w-auto"])},null,10,Ct))}};const Q=n=>(Ge("data-v-9827f327"),n=n(),Ie(),n),Et={class:"relative flex items-center"},Ot={class:"flex-shrink-0"},Ft={href:"/"},Mt=Q(()=>o("div",{class:"flex-grow"},null,-1)),Nt={class:"hidden md:flex md:items-center md:space-x-4"},Vt={class:"flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"},Lt=["href"],At={key:0,class:"absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"},Tt=Q(()=>o("div",{class:"flex-grow"},null,-1)),jt={class:"flex items-center space-x-4 lg:hidden"},qt={class:"flex flex-row-reverse items-center justify-between"},Gt={class:"-mr-2"},It=Q(()=>o("span",{class:"sr-only"},"Close menu",-1)),Ht=Q(()=>o("svg",{class:"h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)),Zt=[It,Ht],Ut=Q(()=>o("h2",{class:"text-sm font-medium text-zinc-600 dark:text-zinc-400"},"Navigation",-1)),Rt={class:"mt-6"},Dt={class:"-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"},Kt=["href"],Wt={__name:"HeaderSpotLight",setup(n){M("isMobileNavVisible",()=>z(!1));const t=fe().navigatioins_by_module("landing-page"),l=qe(),s=z(l.currentRoute.value.path);l.afterEach(e=>{s.value=e.path});const a=e=>s.value===e;return z(!1),(e,r)=>{const u=Bt,f=me;return _(),b("div",Et,[o("div",Ot,[o("a",Ft,[P(u,{logo_url:"/logo.svg"})])]),Mt,o("nav",Nt,[o("ul",Vt,[(_(!0),b(V,null,W(("useSortBy"in e?e.useSortBy:c(te))(c(t),["sort_order"]),(i,h)=>(_(),b("li",{key:`mnu_${h}`},[!i.is_action_button&&!i.children&&i.is_active?(_(),b("a",{key:0,href:i.href,class:G(["relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400",{"text-teal-500 dark:text-teal-400":a(i.href)}])},[$e(k(i.name)+" ",1),a(i.href)?(_(),b("span",At)):O("",!0)],10,Lt)):O("",!0)]))),128))])]),Tt,o("div",jt,[P(c(Be),{modelValue:("useState"in e?e.useState:c(M))("isMobileNavVisible").value,"onUpdate:modelValue":r[2]||(r[2]=i=>("useState"in e?e.useState:c(M))("isMobileNavVisible").value=i)},{default:N(()=>[P(c(St),{onClick:r[0]||(r[0]=i=>("useState"in e?e.useState:c(M))("isMobileNavVisible").value=!("useState"in e?e.useState:c(M))("isMobileNavVisible").value),class:"group flex items-center px-4 py-2 text-sm font-medium text-zinc-800 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"},{default:N(()=>[P(f,{name:"akar-icons:two-line-horizontal",class:"ml-3 h-8 w-8 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"})]),_:1}),("useState"in e?e.useState:c(M))("isMobileNavVisible").value?(_(),J(c(Pt),{key:0,class:"fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80"})):O("",!0),("useState"in e?e.useState:c(M))("isMobileNavVisible").value?(_(),J(c(zt),{key:1,class:"fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"},{default:N(()=>[o("div",qt,[o("div",Gt,[o("button",{type:"button",onClick:r[1]||(r[1]=i=>("useState"in e?e.useState:c(M))("isMobileNavVisible").value=!("useState"in e?e.useState:c(M))("isMobileNavVisible").value),class:"bg-gray-200 rounded-full p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"},Zt)]),Ut]),o("nav",Rt,[o("ul",Dt,[(_(!0),b(V,null,W(("useSortBy"in e?e.useSortBy:c(te))(c(t),["sort_order"]),(i,h)=>(_(),b("li",{key:`mob_mnu_${h}`},[i.is_action_button?O("",!0):(_(),b("a",{key:0,href:i.href,class:"block py-2"},k(i.name),9,Kt))]))),128))])])]),_:1})):O("",!0)]),_:1},8,["modelValue"])])])}}},Jt=Ke(Wt,[["__scopeId","data-v-9827f327"]]),Qt={class:"grid grid-cols-2 gap-8 xl:col-span-2"},Yt={class:"grid auto-cols-max gap-y-8 md:gap-x-2 lg:gap-x-8 lg:grid-flow-col"},Xt={class:"text-md leading-5 font-bold tracking-wider text-white uppercase"},eo={class:"mt-4"},to=["href","onClick"],oo={__name:"ZynomiFooterLinks",props:["module_name"],setup(n){const t=n;console.log("--------------------------------------->>>>>ZynomiFooterLinks");const l=fe().navigatioins_by_module(t.module_name);return(s,a)=>(_(),b("div",Qt,[o("div",Yt,[(_(!0),b(V,null,W(c(ce).filter(("useSortBy"in s?s.useSortBy:c(te))(c(l),["sort_order"]),e=>e.is_active==!0),(e,r)=>(_(),b("div",{key:`fl_${r}`,class:""},[o("h4",Xt,k(e.name),1),o("ul",eo,[(_(!0),b(V,null,W(c(ce).filter(("useSortBy"in s?s.useSortBy:c(te))(e.children,["sort_order"]),u=>u.is_active==!0),u=>(_(),b("li",{class:"mt-4",key:u.name},[o("a",{href:u.href,onClick:f=>("useNuxtApp"in s?s.useNuxtApp:c(H))().$bus.$emit(`${u.click_event}`),class:G(["text-base leading-6 text-white",[`hover:text-[${c(ne)().palette("600")}]`]])},k(u.name),11,to)]))),128))])]))),128))])]))}},no={key:0,class:"grid grid-flow-row auto-rows-max"},ao={class:"md:grid md:grid-cols-1"},so={class:""},lo={class:"mt-2 text-base text-white"},ro=o("h4",{class:"text-md leading-5 font-bold tracking-wider text-white uppercase pt-4 lg:pt-0"},"Contact",-1),io=o("dt",{class:"sr-only"},"Postal address",-1),uo={class:"pt-2"},co=o("dt",{class:"sr-only"},"Phone number",-1),po={class:"flex"},vo={key:0,class:"flex-shrink-0 h-5 w-5 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},fo=o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"},null,-1),mo=[fo],_o={class:"ml-3"},ho=o("dt",{class:"sr-only"},"Email",-1),go={class:"flex"},yo=["href"],bo={__name:"ZynomiContactUs",props:["organization"],setup(n){const t=n;return(l,s)=>{const a=me;return t.organization?(_(),b("div",no,[o("div",{class:G(["mt-8 xl:mt-0 pl-6 pr-4 pb-2 rounded-xl",[`bg-[${c(ne)().palette("300")}]`]])},[o("div",ao,[o("div",so,[o("dl",lo,[o("div",null,[ro,io,o("dd",uo,[o("p",null,k(t.organization.company_name),1),o("p",null,k(t.organization.address.apartment)+" "+k(t.organization.address.street),1),o("p",null,k(t.organization.address.city)+" "+k(t.organization.address.postal_code),1),o("p",null,k(t.organization.address.state)+" "+k(t.organization.address.country_name),1)]),co,o("dd",po,[t.organization.phone_number?(_(),b("svg",vo,mo)):O("",!0),o("span",_o,k(t.organization.phone_number),1)]),ho,o("dd",go,[P(a,{name:"fa:envelope",class:"h-4 w-4 mt-1"}),t.organization.company_email?(_(),b("a",{key:0,href:"mailto:"+t.organization.company_email,class:"ml-3"},k(t.organization.company_email),9,yo)):O("",!0)])])])])])],2)])):O("",!0)}}},xo={class:"flex md:order-2"},wo=["href"],$o={class:"sr-only"},ko={__name:"ZynomiSocialLinks",props:["module_name"],setup(n){const t=n;console.log("--------------------------------------->>>>>ZynomiSocialLinks");const l=fe().navigatioins_by_module(t.module_name);return(s,a)=>{const e=me;return _(),b("div",xo,[(_(!0),b(V,null,W(c(ce).filter(c(l),r=>r.is_active==!0),r=>(_(),b("a",{key:r.name,href:r.href,class:G(["ml-6 text-white",[`hover:text-[${c(ne)().palette("600")}]`]])},[o("span",$o,k(r.name),1),P(e,{name:r.icon,class:"h-6 w-6"},null,8,["name"])],10,wo))),128))])}}},So={class:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8"},Po={class:"xl:grid xl:grid-cols-3 xl:gap-3"},zo={class:"mt-8 border-t border-white pt-8 md:flex md:items-center md:justify-between"},Co={class:"mt-8 text-white text-base leading-6 md:mt-0 md:order-1"},Bo={__name:"Footer",setup(n){return console.log("organization control = ",JSON.stringify(ge().organization)),(t,l)=>{const s=oo,a=bo,e=ko;return _(),b("div",{class:G(["",[`bg-[${c(ne)().palette("400")}]`,"lg:max-w-8xl"]])},[o("div",So,[o("div",Po,[P(s,{module_name:"footer-links"}),P(a,{organization:c(ge)().organization},null,8,["organization"])]),o("div",zo,[P(e,{module_name:"social-media-links"}),o("p",Co,k(c(K)().app_copyright),1)])])],2)}}},Eo=o("div",{class:"fixed inset-0"},null,-1),Oo={class:"fixed inset-0 overflow-hidden"},Fo={class:"absolute inset-0 overflow-hidden"},Mo={class:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"},No=["onSubmit"],Vo={class:"h-0 flex-1 overflow-y-auto"},Lo={class:"bg-gradient-to-r from-primary-900 via-secondary-700 to-primary-900 py-6 px-4 sm:px-6"},Ao={class:"flex items-center justify-between"},To={class:"ml-3 flex h-7 items-center"},jo=o("span",{class:"sr-only"},"Close panel",-1),qo={class:"mt-1"},Go={class:"text-sm text-primary-300"},Io={key:0,class:"z-50 h-full overflow-hidden flex flex-col items-center justify-center"},Ho=o("div",{class:"loader animate-ping text-indigo-900 ease-linear rounded-full border-4 border-t-4 border-primary-900 h-12 w-12 mb-4"},null,-1),Zo=[Ho],Uo={class:"flex-1 flex-col justify-between"},Ro={class:"min-w-0 max-w-2xl flex-auto px-4 py-4 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-8"},Do={class:"mb-9 space-y-1"},Ko={class:"font-display text-sm font-medium text-sky-500"},Wo={class:"font-display text-3xl tracking-tight text-gray-900 dark:text-white"},Jo={class:"mt-8 text-sm text-zinc-600 prose prose-zinc max-w-none dark:prose-invert dark:text-zinc-400 prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem] prose-lead:text-zinc-500 dark:prose-lead:text-zinc-400 prose-a:font-semibold dark:prose-a:text-sky-400 prose-a:no-underline dark:prose-pre:ring-1 dark:prose-pre:ring-zinc-300/10 dark:prose-hr:border-zinc-800"},Qo={__name:"SideBarGuide",props:{form_title:{type:String,required:!0},form_description:{type:String,required:!0}},setup(n){const t=z(!1),l=z(!1),s=z({});H().$bus.$on("evtSideBarGuide",async u=>{t.value=!t.value;const f=await $fetch(`${He().public.API_BASE_URL}/entities/blogs?title.eq=getting-started-with-duckdb-sql-ide`);f&&Array.isArray(f.data)&&(s.value=await _t(f.data[0].content)),l.value=!1});function a(){try{t.value=!1}catch(u){console.log(u)}return!1}async function e(u){try{if(!r(s.value)){H().$toast.show({type:"error",message:"Please fill all required inputs",timeout:10});return}l.value=!0,s.value.tenant="www.xyz-company.com",await Ue("/api/inquiries/create",{method:"post",body:s.value,initialCache:!1,onResponse({request:f,response:i,options:h}){console.log(JSON.stringify(i)),i._data&&(i._data.code==200?(H().$toast.show({type:"success",message:"Thank you for your inquiry, one of our associate will contact you soon",timeout:6}),t.value=!t.value):H().$toast.show({type:"error",message:"Failure during inquiry save",timeout:6}),l.value=!1)}},"$ZttVM9vEjn")}catch(f){H().$toast.show({type:"error",message:`Oops!... Something went wrong....<br/>[${f.message}]`,timeout:6}),l.value=!1}finally{}}function r(u){let f=s.value.name!=null&&s.value.name!="",i=s.value.phone_number!=null&&s.value.phone_number!="",h=s.value.email!=null&&s.value.email!="",C=s.value.description!=null&&s.value.description!="";return console.log("name && phone_number && email && description",f&&i&&h&&C),f&&i&&h&&C}return(u,f)=>{const i=ft,h=mt;return _(),J(c(vt),{as:"template",show:t.value},{default:N(()=>[P(c(it),{as:"div",class:"relative z-10"},{default:N(()=>[Eo,o("div",Oo,[o("div",Fo,[o("div",Mo,[P(c(ut),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:N(()=>[P(c(ct),{class:"pointer-events-auto w-screen max-w-xl"},{default:N(()=>[o("form",{class:"flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl",onSubmit:Ze(e,["prevent"])},[o("div",Vo,[o("div",Lo,[o("div",Ao,[P(c(dt),{class:"text-lg font-medium text-white"},{default:N(()=>[$e(k(n.form_title?n.form_title:"Contact us"),1)]),_:1}),o("div",To,[o("button",{type:"button",class:"rounded-md bg-primary-700 text-primary-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:f[0]||(f[0]=C=>t.value=!1)},[jo,P(c(pt),{class:"h-6 w-6","aria-hidden":"true"})])])]),o("div",qo,[o("p",Go,k(n.form_description?n.form_description:"Find out how we can help you?"),1)])]),l.value?(_(),b("div",Io,Zo)):O("",!0),o("div",Uo,[o("div",Ro,[P(h,null,{default:N(()=>[o("article",null,[o("header",Do,[o("p",Ko,k(s.value.data.title),1),o("h1",Wo,k(s.value.data.pageTitle||s.value.data.title),1)]),o("div",Jo,[P(i,{value:s.value,ref:"doc_content"},null,8,["value"])])])]),_:1})])])]),o("div",{class:"flex flex-shrink-0 justify-end px-4 py-4"},[o("button",{type:"button",class:"border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",onClick:a},"Cancel")])],40,No)]),_:1})]),_:1})])])])]),_:1})]),_:1},8,["show"])}}},Yo={class:"max-w-7xl mx-auto bg-white"},Xo={class:"mx-auto"},en={class:"min-h-screen relative"},_n={__name:"landing",setup(n){const t=Re(),l=z(!0);return pe(()=>{t.query.print&&(l.value=!1)}),(s,a)=>{const e=Jt,r=Bo,u=Qo;return _(),b(V,null,[o("div",Yo,[c(l)?(_(),J(e,{key:0,class:"pt-6 pl-2 pr-2 sm:pl-0 sm:pr-0"})):O("",!0),o("div",Xo,[o("div",en,[o("div",{class:G(["h-full relative",c(l)?"mt-16":"mt-0"])},[De(s.$slots,"default")],2)])])]),c(l)?(_(),J(r,{key:0})):O("",!0),P(u,{form_title:"Online Help",form_description:"Handy SQL queries to practice against the sample Tickit database"})],64)}}};export{_n as default};