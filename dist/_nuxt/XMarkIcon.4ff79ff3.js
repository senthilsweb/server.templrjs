import{af as lt,L as S,F as He,l as C,p as x,r as g,i as L,k as $,h as m,d as D,j as k,J as ee,ag as at,ah as ot,I as ut,T as it,D as st,o as dt,b as ct,a as ft}from"./entry.b92b1562.js";function M(e,t,...n){if(e in t){let l=t[e];return typeof l=="function"?l(...n):l}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,M),r}var ce=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ce||{}),B=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(B||{});function N({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...l}){var a;let o=Ie(r,n),u=Object.assign(l,{props:o});if(e||t&2&&o.static)return be(u);if(t&1){let i=(a=o.unmount)==null||a?0:1;return M(i,{0(){return null},1(){return be({...l,props:{...o,hidden:!0,style:{display:"none"}}})}})}return be(u)}function be({props:e,attrs:t,slots:n,slot:r,name:l}){var a,o;let{as:u,...i}=Ue(e,["unmount","static"]),s=(a=n.default)==null?void 0:a.call(n,r),d={};if(r){let p=!1,c=[];for(let[f,v]of Object.entries(r))typeof v=="boolean"&&(p=!0),v===!0&&c.push(f);p&&(d["data-headlessui-state"]=c.join(" "))}if(u==="template"){if(s=Be(s??[]),Object.keys(i).length>0||Object.keys(t).length>0){let[p,...c]=s??[];if(!vt(p)||c.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${l} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(i).concat(Object.keys(t)).map(h=>h.trim()).filter((h,E,I)=>I.indexOf(h)===E).sort((h,E)=>h.localeCompare(E)).map(h=>`  - ${h}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(h=>`  - ${h}`).join(`
`)].join(`
`));let f=Ie((o=p.props)!=null?o:{},i),v=lt(p,f);for(let h in f)h.startsWith("on")&&(v.props||(v.props={}),v.props[h]=f[h]);return v}return Array.isArray(s)&&s.length===1?s[0]:s}return S(u,Object.assign({},i,d),{default:()=>s})}function Be(e){return e.flatMap(t=>t.type===He?Be(t.children):[t])}function Ie(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(n[l]!=null||(n[l]=[]),n[l].push(r[l])):t[l]=r[l];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](l,...a){let o=n[r];for(let u of o){if(l instanceof Event&&l.defaultPrevented)return;u(l,...a)}}});return t}function Ue(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function vt(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let pt=0;function mt(){return++pt}function ve(){return mt()}var Ve=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Ve||{});function b(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let We=Symbol("Context");var F=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(F||{});function ht(){return Pe()!==null}function Pe(){return C(We,null)}function gt(e){x(We,e)}function ke(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function cn(e,t){let n=g(ke(e.value.type,e.value.as));return L(()=>{n.value=ke(e.value.type,e.value.as)}),$(()=>{var r;n.value||b(t)&&b(t)instanceof HTMLButtonElement&&!((r=b(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var yt=Object.defineProperty,bt=(e,t,n)=>t in e?yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Me=(e,t,n)=>(bt(e,typeof t!="symbol"?t+"":t,n),n);class wt{constructor(){Me(this,"current",this.detect()),Me(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let te=new wt;function Y(e){if(te.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=b(e);if(t)return t.ownerDocument}return document}let Se=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var H=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(H||{}),_e=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(_e||{}),Et=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Et||{});function St(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Se)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var qe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(qe||{});function Tt(e,t=0){var n;return e===((n=Y(e))==null?void 0:n.body)?!1:M(t,{0(){return e.matches(Se)},1(){let r=e;for(;r!==null;){if(r.matches(Se))return!0;r=r.parentElement}return!1}})}var Lt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(Lt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function q(e){e==null||e.focus({preventScroll:!0})}let Ft=["textarea","input"].join(",");function Ot(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ft))!=null?n:!1}function $t(e,t=n=>n){return e.slice().sort((n,r)=>{let l=t(n),a=t(r);if(l===null||a===null)return 0;let o=l.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function de(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:l=[]}={}){var a;let o=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,u=Array.isArray(e)?n?$t(e):e:St(e);l.length>0&&u.length>1&&(u=u.filter(v=>!l.includes(v))),r=r??o.activeElement;let i=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},p=0,c=u.length,f;do{if(p>=c||p+c<=0)return 0;let v=s+p;if(t&16)v=(v+c)%c;else{if(v<0)return 3;if(v>=c)return 1}f=u[v],f==null||f.focus(d),p+=i}while(f!==o.activeElement);return t&6&&Ot(f)&&f.select(),2}function ue(e,t,n){te.isServer||$(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function Ge(e,t,n){te.isServer||$(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function Pt(e,t,n=m(()=>!0)){function r(a,o){if(!n.value||a.defaultPrevented)return;let u=o(a);if(u===null||!u.getRootNode().contains(u))return;let i=function s(d){return typeof d=="function"?s(d()):Array.isArray(d)||d instanceof Set?d:[d]}(e);for(let s of i){if(s===null)continue;let d=s instanceof HTMLElement?s:b(s);if(d!=null&&d.contains(u)||a.composed&&a.composedPath().includes(d))return}return!Tt(u,qe.Loose)&&u.tabIndex!==-1&&a.preventDefault(),t(a,u)}let l=g(null);ue("pointerdown",a=>{var o,u;n.value&&(l.value=((u=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:u[0])||a.target)},!0),ue("mousedown",a=>{var o,u;n.value&&(l.value=((u=(o=a.composedPath)==null?void 0:o.call(a))==null?void 0:u[0])||a.target)},!0),ue("click",a=>{l.value&&(r(a,()=>l.value),l.value=null)},!0),ue("touchend",a=>r(a,()=>a.target instanceof HTMLElement?a.target:null),!0),Ge("blur",a=>r(a,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var fe=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(fe||{});let Te=D({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:r,...l}=e,a={"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return N({ourProps:a,theirProps:l,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function At(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Ae(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ne(){let e=[],t={addEventListener(n,r,l,a){return n.addEventListener(r,l,a),t.add(()=>n.removeEventListener(r,l,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},microTask(...n){let r={current:!0};return Ae(()=>{r.current&&n[0]()}),t.add(()=>{r.current=!1})},style(n,r,l){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:l}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=ne();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let l of e.splice(r,1))l()}},dispose(){for(let n of e.splice(0))n()}};return t}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function Ct(){let e=g(0);return Ge("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Ke(e,t,n,r){te.isServer||$(l=>{e=e??window,e.addEventListener(t,n,r),l(()=>e.removeEventListener(t,n,r))})}function Dt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function Ye(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let r=b(n);r instanceof HTMLElement&&t.add(r)}return t}var Xe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Xe||{});let J=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:g(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:r}){let l=g(null);r({el:l,$el:l});let a=m(()=>Y(l)),o=g(!1);L(()=>o.value=!0),k(()=>o.value=!1),kt({ownerDocument:a},m(()=>o.value&&!!(e.features&16)));let u=Mt({ownerDocument:a,container:l,initialFocus:m(()=>e.initialFocus)},m(()=>o.value&&!!(e.features&2)));Nt({ownerDocument:a,container:l,containers:e.containers,previousActiveElement:u},m(()=>o.value&&!!(e.features&8)));let i=Ct();function s(f){let v=b(l);v&&(h=>h())(()=>{M(i.value,{[Z.Forwards]:()=>{de(v,H.First,{skipElements:[f.relatedTarget]})},[Z.Backwards]:()=>{de(v,H.Last,{skipElements:[f.relatedTarget]})}})})}let d=g(!1);function p(f){f.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(f){if(!o.value)return;let v=Ye(e.containers);b(l)instanceof HTMLElement&&v.add(b(l));let h=f.relatedTarget;h instanceof HTMLElement&&h.dataset.headlessuiFocusGuard!=="true"&&(ze(v,h)||(d.value?de(b(l),M(i.value,{[Z.Forwards]:()=>H.Next,[Z.Backwards]:()=>H.Previous})|H.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&q(f.target)))}return()=>{let f={},v={ref:l,onKeydown:p,onFocusout:c},{features:h,initialFocus:E,containers:I,...O}=e;return S(He,[!!(h&4)&&S(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:fe.Focusable}),N({ourProps:v,theirProps:{...t,...O},slot:f,attrs:t,slots:n,name:"FocusTrap"}),!!(h&4)&&S(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:fe.Focusable})])}}}),{features:Xe}),W=[];Dt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&W[0]!==t.target&&(W.unshift(t.target),W=W.filter(n=>n!=null&&n.isConnected),W.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function xt(e){let t=g(W.slice());return ee([e],([n],[r])=>{r===!0&&n===!1?Ae(()=>{t.value.splice(0)}):r===!1&&n===!0&&(t.value=W.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(r=>r!=null&&r.isConnected))!=null?n:null}}function kt({ownerDocument:e},t){let n=xt(t);L(()=>{$(()=>{var r,l;t.value||((r=e.value)==null?void 0:r.activeElement)===((l=e.value)==null?void 0:l.body)&&q(n())},{flush:"post"})}),k(()=>{t.value&&q(n())})}function Mt({ownerDocument:e,container:t,initialFocus:n},r){let l=g(null),a=g(!1);return L(()=>a.value=!0),k(()=>a.value=!1),L(()=>{ee([t,n,r],(o,u)=>{if(o.every((s,d)=>(u==null?void 0:u[d])===s)||!r.value)return;let i=b(t);i&&Ae(()=>{var s,d;if(!a.value)return;let p=b(n),c=(s=e.value)==null?void 0:s.activeElement;if(p){if(p===c){l.value=c;return}}else if(i.contains(c)){l.value=c;return}p?q(p):de(i,H.First|H.NoScroll)===_e.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),l}function Nt({ownerDocument:e,container:t,containers:n,previousActiveElement:r},l){var a;Ke((a=e.value)==null?void 0:a.defaultView,"focus",o=>{if(!l.value)return;let u=Ye(n);b(t)instanceof HTMLElement&&u.add(b(t));let i=r.value;if(!i)return;let s=o.target;s&&s instanceof HTMLElement?ze(u,s)?(r.value=s,q(s)):(o.preventDefault(),o.stopPropagation(),q(i)):q(r.value)},!0)}function ze(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let we=new Map,Q=new Map;function Ne(e,t=g(!0)){$(n=>{var r;if(!t.value)return;let l=b(e);if(!l)return;n(function(){var o;if(!l)return;let u=(o=Q.get(l))!=null?o:1;if(u===1?Q.delete(l):Q.set(l,u-1),u!==1)return;let i=we.get(l);i&&(i["aria-hidden"]===null?l.removeAttribute("aria-hidden"):l.setAttribute("aria-hidden",i["aria-hidden"]),l.inert=i.inert,we.delete(l))});let a=(r=Q.get(l))!=null?r:0;Q.set(l,a+1),a===0&&(we.set(l,{"aria-hidden":l.getAttribute("aria-hidden"),inert:l.inert}),l.setAttribute("aria-hidden","true"),l.inert=!0)})}let Je=Symbol("ForcePortalRootContext");function jt(){return C(Je,!1)}let je=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return x(Je,e.force),()=>{let{force:r,...l}=e;return N({theirProps:l,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function Rt(e){let t=Y(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let r=t.createElement("div");return r.setAttribute("id","headlessui-portal-root"),t.body.appendChild(r)}let Ht=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let r=g(null),l=m(()=>Y(r)),a=jt(),o=C(Qe,null),u=g(a===!0||o==null?Rt(r.value):o.resolveTarget());$(()=>{a||o!=null&&(u.value=o.resolveTarget())});let i=C(Le,null);return L(()=>{let s=b(r);s&&i&&k(i.register(s))}),k(()=>{var s,d;let p=(s=l.value)==null?void 0:s.getElementById("headlessui-portal-root");p&&u.value===p&&u.value.children.length<=0&&((d=u.value.parentElement)==null||d.removeChild(u.value))}),()=>{if(u.value===null)return null;let s={ref:r,"data-headlessui-portal":""};return S(at,{to:u.value},N({ourProps:s,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),Le=Symbol("PortalParentContext");function Bt(){let e=C(Le,null),t=g([]);function n(a){return t.value.push(a),e&&e.register(a),()=>r(a)}function r(a){let o=t.value.indexOf(a);o!==-1&&t.value.splice(o,1),e&&e.unregister(a)}let l={register:n,unregister:r,portals:t};return[t,D({name:"PortalWrapper",setup(a,{slots:o}){return x(Le,l),()=>{var u;return(u=o.default)==null?void 0:u.call(o)}}})]}let Qe=Symbol("PortalGroupContext"),It=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let r=ot({resolveTarget(){return e.target}});return x(Qe,r),()=>{let{target:l,...a}=e;return N({theirProps:a,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Ze=Symbol("StackContext");var Fe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Fe||{});function Ut(){return C(Ze,()=>{})}function Vt({type:e,enabled:t,element:n,onUpdate:r}){let l=Ut();function a(...o){r==null||r(...o),l(...o)}L(()=>{ee(t,(o,u)=>{o?a(0,e,n):u===!0&&a(1,e,n)},{immediate:!0,flush:"sync"})}),k(()=>{t.value&&a(1,e,n)}),x(Ze,a)}let Wt=Symbol("DescriptionContext");function _t({slot:e=g({}),name:t="Description",props:n={}}={}){let r=g([]);function l(a){return r.value.push(a),()=>{let o=r.value.indexOf(a);o!==-1&&r.value.splice(o,1)}}return x(Wt,{register:l,slot:e,name:t,props:n}),m(()=>r.value.length>0?r.value.join(" "):void 0)}function qt(e){let t=ut(e.getSnapshot());return k(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Gt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(l){return r.add(l),()=>r.delete(l)},dispatch(l,...a){let o=t[l].call(n,...a);o&&(n=o,r.forEach(u=>u()))}}}function Kt(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,l=r.clientWidth-r.offsetWidth,a=e-l;n.style(r,"paddingRight",`${a}px`)}}}function Yt(){if(!At())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function l(o){return r.containers.flatMap(u=>u()).some(u=>u.contains(o))}if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let o=ne();o.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>o.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let a=null;n.addEventListener(t,"click",o=>{if(o.target instanceof HTMLElement)try{let u=o.target.closest("a");if(!u)return;let{hash:i}=new URL(u.href),s=t.querySelector(i);s&&!l(s)&&(a=s)}catch{}},!0),n.addEventListener(t,"touchmove",o=>{o.target instanceof HTMLElement&&!l(o.target)&&o.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),a&&a.isConnected&&(a.scrollIntoView({block:"nearest"}),a=null)})}}}function Xt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function zt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let _=Gt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:ne(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:zt(n)},l=[Yt(),Kt(),Xt()];l.forEach(({before:a})=>a==null?void 0:a(r)),l.forEach(({after:a})=>a==null?void 0:a(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});_.subscribe(()=>{let e=_.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",l=n.count!==0;(l&&!r||!l&&r)&&_.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&_.dispatch("TEARDOWN",n)}});function Jt(e,t,n){let r=qt(_),l=m(()=>{let a=e.value?r.value.get(e.value):void 0;return a?a.count>0:!1});return ee([e,t],([a,o],[u],i)=>{if(!a||!o)return;_.dispatch("PUSH",a,n);let s=!1;i(()=>{s||(_.dispatch("POP",u??a,n),s=!0)})},{immediate:!0}),l}function Qt({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){let r=g(null),l=Y(r);function a(){var o;let u=[];for(let i of e)i!==null&&(i instanceof HTMLElement?u.push(i):"value"in i&&i.value instanceof HTMLElement&&u.push(i.value));if(t!=null&&t.value)for(let i of t.value)u.push(i);for(let i of(o=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?o:[])i!==document.body&&i!==document.head&&i instanceof HTMLElement&&i.id!=="headlessui-portal-root"&&(i.contains(b(r))||u.some(s=>i.contains(s))||u.push(i));return u}return{resolveContainers:a,contains(o){return a().some(u=>u.contains(o))},mainTreeNodeRef:r,MainTreeNode(){return n!=null?null:S(Te,{features:fe.Hidden,ref:r})}}}var Zt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Zt||{});let Oe=Symbol("DialogContext");function Ce(e){let t=C(Oe,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,Ce),n}return t}let ie="DC8F892D-2EBD-447C-A4C8-A03058436FF4",fn=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ie},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${ve()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){var a;let o=g(!1);L(()=>{o.value=!0});let u=g(0),i=Pe(),s=m(()=>e.open===ie&&i!==null?(i.value&F.Open)===F.Open:e.open),d=g(null),p=m(()=>Y(d));if(l({el:d,$el:d}),!(e.open!==ie||i!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof s.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${s.value===ie?void 0:e.open}`);let c=m(()=>o.value&&s.value?0:1),f=m(()=>c.value===0),v=m(()=>u.value>1),h=C(Oe,null)!==null,[E,I]=Bt(),{resolveContainers:O,mainTreeNodeRef:U,MainTreeNode:re}=Qt({portals:E,defaultContainers:[m(()=>{var y;return(y=T.panelRef.value)!=null?y:d.value})]}),le=m(()=>v.value?"parent":"leaf"),X=m(()=>i!==null?(i.value&F.Closing)===F.Closing:!1),me=m(()=>h||X.value?!1:f.value),ae=m(()=>{var y,w,P;return(P=Array.from((w=(y=p.value)==null?void 0:y.querySelectorAll("body > *"))!=null?w:[]).find(A=>A.id==="headlessui-portal-root"?!1:A.contains(b(U))&&A instanceof HTMLElement))!=null?P:null});Ne(ae,me);let he=m(()=>v.value?!0:f.value),ge=m(()=>{var y,w,P;return(P=Array.from((w=(y=p.value)==null?void 0:y.querySelectorAll("[data-headlessui-portal]"))!=null?w:[]).find(A=>A.contains(b(U))&&A instanceof HTMLElement))!=null?P:null});Ne(ge,he),Vt({type:"Dialog",enabled:m(()=>c.value===0),element:d,onUpdate:(y,w)=>{if(w==="Dialog")return M(y,{[Fe.Add]:()=>u.value+=1,[Fe.Remove]:()=>u.value-=1})}});let ye=_t({name:"DialogDescription",slot:m(()=>({open:s.value}))}),G=g(null),T={titleId:G,panelRef:g(null),dialogState:c,setTitleId(y){G.value!==y&&(G.value=y)},close(){t("close",!1)}};x(Oe,T);let z=m(()=>!(!f.value||v.value));Pt(O,(y,w)=>{T.close(),it(()=>w==null?void 0:w.focus())},z);let j=m(()=>!(v.value||c.value!==0));Ke((a=p.value)==null?void 0:a.defaultView,"keydown",y=>{j.value&&(y.defaultPrevented||y.key===Ve.Escape&&(y.preventDefault(),y.stopPropagation(),T.close()))});let K=m(()=>!(X.value||c.value!==0||h));return Jt(p,K,y=>{var w;return{containers:[...(w=y.containers)!=null?w:[],O]}}),$(y=>{if(c.value!==0)return;let w=b(d);if(!w)return;let P=new ResizeObserver(A=>{for(let oe of A){let R=oe.target.getBoundingClientRect();R.x===0&&R.y===0&&R.width===0&&R.height===0&&T.close()}});P.observe(w),y(()=>P.disconnect())}),()=>{let{id:y,open:w,initialFocus:P,...A}=e,oe={...n,ref:d,id:y,role:"dialog","aria-modal":c.value===0?!0:void 0,"aria-labelledby":G.value,"aria-describedby":ye.value},R={open:c.value===0};return S(je,{force:!0},()=>[S(Ht,()=>S(It,{target:d.value},()=>S(je,{force:!1},()=>S(J,{initialFocus:P,containers:O,features:f.value?M(le.value,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},()=>S(I,{},()=>N({ourProps:oe,theirProps:{...A,...n},slot:R,attrs:n,slots:r,visible:c.value===0,features:ce.RenderStrategy|ce.Static,name:"Dialog"})))))),S(re)])}}}),vn=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${ve()}`}},setup(e,{attrs:t,slots:n,expose:r}){let l=Ce("DialogPanel");r({el:l.panelRef,$el:l.panelRef});function a(o){o.stopPropagation()}return()=>{let{id:o,...u}=e,i={id:o,ref:l.panelRef,onClick:a};return N({ourProps:i,theirProps:u,slot:{open:l.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}}),pn=D({name:"DialogTitle",props:{as:{type:[Object,String],default:"h2"},id:{type:String,default:()=>`headlessui-dialog-title-${ve()}`}},setup(e,{attrs:t,slots:n}){let r=Ce("DialogTitle");return L(()=>{r.setTitleId(e.id),k(()=>r.setTitleId(null))}),()=>{let{id:l,...a}=e;return N({ourProps:{id:l},theirProps:a,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogTitle"})}}});function en(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var $e=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))($e||{});function tn(e,t){let n=ne();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:l}=getComputedStyle(e),[a,o]=[r,l].map(u=>{let[i=0]=u.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return i});return a!==0?n.setTimeout(()=>t("finished"),a+o):t("finished"),n.add(()=>t("cancelled")),n.dispose}function Re(e,t,n,r,l,a){let o=ne(),u=a!==void 0?en(a):()=>{};return se(e,...l),Ee(e,...t,...n),o.nextFrame(()=>{se(e,...n),Ee(e,...r),o.add(tn(e,i=>(se(e,...r,...t),Ee(e,...l),u(i))))}),o.add(()=>se(e,...t,...n,...r,...l)),o.add(()=>u("cancelled")),o.dispose}function V(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let De=Symbol("TransitionContext");var nn=(e=>(e.Visible="visible",e.Hidden="hidden",e))(nn||{});function rn(){return C(De,null)!==null}function ln(){let e=C(De,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function an(){let e=C(xe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let xe=Symbol("NestingContext");function pe(e){return"children"in e?pe(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function et(e){let t=g([]),n=g(!1);L(()=>n.value=!0),k(()=>n.value=!1);function r(a,o=B.Hidden){let u=t.value.findIndex(({id:i})=>i===a);u!==-1&&(M(o,{[B.Unmount](){t.value.splice(u,1)},[B.Hidden](){t.value[u].state="hidden"}}),!pe(t)&&n.value&&(e==null||e()))}function l(a){let o=t.value.find(({id:u})=>u===a);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,B.Unmount)}return{children:t,register:l,unregister:r}}let tt=ce.RenderStrategy,on=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:l}){let a=g(0);function o(){a.value|=F.Opening,t("beforeEnter")}function u(){a.value&=~F.Opening,t("afterEnter")}function i(){a.value|=F.Closing,t("beforeLeave")}function s(){a.value&=~F.Closing,t("afterLeave")}if(!rn()&&ht())return()=>S(sn,{...e,onBeforeEnter:o,onAfterEnter:u,onBeforeLeave:i,onAfterLeave:s},r);let d=g(null),p=m(()=>e.unmount?B.Unmount:B.Hidden);l({el:d,$el:d});let{show:c,appear:f}=ln(),{register:v,unregister:h}=an(),E=g(c.value?"visible":"hidden"),I={value:!0},O=ve(),U={value:!1},re=et(()=>{!U.value&&E.value!=="hidden"&&(E.value="hidden",h(O),s())});L(()=>{let T=v(O);k(T)}),$(()=>{if(p.value===B.Hidden&&O){if(c.value&&E.value!=="visible"){E.value="visible";return}M(E.value,{hidden:()=>h(O),visible:()=>v(O)})}});let le=V(e.enter),X=V(e.enterFrom),me=V(e.enterTo),ae=V(e.entered),he=V(e.leave),ge=V(e.leaveFrom),ye=V(e.leaveTo);L(()=>{$(()=>{if(E.value==="visible"){let T=b(d);if(T instanceof Comment&&T.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function G(T){let z=I.value&&!f.value,j=b(d);!j||!(j instanceof HTMLElement)||z||(U.value=!0,c.value&&o(),c.value||i(),T(c.value?Re(j,le,X,me,ae,K=>{U.value=!1,K===$e.Finished&&u()}):Re(j,he,ge,ye,ae,K=>{U.value=!1,K===$e.Finished&&(pe(re)||(E.value="hidden",h(O),s()))})))}return L(()=>{ee([c],(T,z,j)=>{G(j),I.value=!1},{immediate:!0})}),x(xe,re),gt(m(()=>M(E.value,{visible:F.Open,hidden:F.Closed})|a.value)),()=>{let{appear:T,show:z,enter:j,enterFrom:K,enterTo:y,entered:w,leave:P,leaveFrom:A,leaveTo:oe,...R}=e,nt={ref:d},rt={...R,...f.value&&c.value&&te.isServer?{class:st([n.class,R.class,...le,...X])}:{}};return N({theirProps:rt,ourProps:nt,slot:{},slots:r,attrs:n,features:tt,visible:E.value==="visible",name:"TransitionChild"})}}}),un=on,sn=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let l=Pe(),a=m(()=>e.show===null&&l!==null?(l.value&F.Open)===F.Open:e.show);$(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=g(a.value?"visible":"hidden"),u=et(()=>{o.value="hidden"}),i=g(!0),s={show:a,appear:m(()=>e.appear||!i.value)};return L(()=>{$(()=>{i.value=!1,a.value?o.value="visible":pe(u)||(o.value="hidden")})}),x(xe,u),x(De,s),()=>{let d=Ue(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),p={unmount:e.unmount};return N({ourProps:{...p,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[S(un,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...p,...d},r.default)]},attrs:{},features:tt,visible:o.value==="visible",name:"Transition"})}}});function mn(e,t){return dt(),ct("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[ft("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}export{St as E,vn as G,N as H,ce as N,de as P,sn as S,_e as T,fn as U,Bt as V,Ve as a,cn as b,gt as c,Qt as d,Ke as e,qe as f,Te as g,on as h,fe as i,H as j,Z as k,F as l,Y as m,Ct as n,b as o,Pe as p,pn as q,mn as r,ve as t,M as u,Tt as w,Pt as y};
