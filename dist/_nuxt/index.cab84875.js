import{r as v,n as j,C as P,o as l,b as i,a as e,F as w,v as C,u as s,D as z,t as p,E as D,e as m,w as B,f as b,g as M,c as E,s as I,z as L}from"./entry.b92b1562.js";import{u as S}from"./state.fdb3d5b8.js";import{_ as Y}from"./nuxt-link.ce3e0eae.js";import{u as k}from"./theme.71afa617.js";import V from"./Icon.688a35d9.js";import{_ as R,a as q,b as J}from"./empty.4cc8318a.js";import{p as T}from"./highlighter.6f06f784.js";import{_ as f}from"./lodash.beac4716.js";import{_ as F}from"./nuxt-layout.dbfc6685.js";import{_ as H}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.288f722b.js";import"./index.749539fc.js";import"./node.be90b14f.js";const O={id:"carouselExampleCaptions",class:"relative","data-te-carousel-init":"","data-te-ride":"carousel"},U={class:"absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0","data-te-carousel-indicators":""},G=["onClick","data-te-slide-to","data-te-carousel-active","aria-current","aria-label"],Z={class:"relative w-full overflow-hidden after:clear-both after:block after:content-[''] px-4 sm:px-0"},K=["src","alt"],Q={class:"absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block"},W={class:"text-xl"},X=e("span",{class:"inline-block h-8 w-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 19.5L8.25 12l7.5-7.5"})])],-1),ee=e("span",{class:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Previous",-1),te=[X,ee],se=e("span",{class:"inline-block h-8 w-8"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})])],-1),oe=e("span",{class:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"},"Next",-1),ae=[se,oe],ne=1e4,le={__name:"Carousel",async setup(y){let a,r;const o=v(0),c=v(0);v(0);const t=([a,r]=j(()=>P("/configs/carousel.json",{method:"get"},"$H3sgyjHUEB")),a=await a,r(),a),n=v(t.data._rawValue.menu);console.log("navigation = ",JSON.stringify(n.value)),c.value=n.value.length,S("carousel",()=>v({})),n.value.forEach((x,u)=>{S("carousel").value[x.href]=u==0});function d(x){_(),o.value-1>=0&&(o.value=o.value-1),S("carousel").value[n.value.data[o.value].href]=!0}function g(x){_(),o.value+1<c.value&&(o.value=o.value+1),S("carousel").value[n.value.data[o.value].href]=!0}function _(){n.value.forEach((x,u)=>{S("carousel").value[x.href]=!1})}function A(x){o.value=x-1,g()}function N(){setInterval(()=>{o.value+1<c.value?o.value=o.value+1:o.value=0,g()},ne)}return N(),(x,u)=>(l(),i("div",O,[e("div",U,[(l(!0),i(w,null,C(s(n),($,h)=>(l(),i("button",{key:h,type:"button",onClick:st=>A(h),"data-te-target":"#carouselExampleCaptions","data-te-slide-to":h,"data-te-carousel-active":h===0,class:"mx-[3px] box-content h-[3px] w-[30px] z-50 flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none","aria-current":h===0,"aria-label":"Slide "+(h+1)},null,8,G))),128))]),e("div",Z,[(l(!0),i(w,null,C(s(n),($,h)=>(l(),i("div",{key:h,class:z(["relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none",{hidden:s(o)!==h}]),"data-te-carousel-item":"",style:{"backface-visibility":"hidden"}},[e("img",{src:$.href,class:"block w-full",alt:"Slide "+(h+1)},null,8,K),e("div",Q,[e("h5",W,p($.name),1),e("p",null,p($.description),1)])],2))),128))]),e("button",{class:"absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none",type:"button",onClick:u[0]||(u[0]=$=>d()),"data-te-target":"#carouselExampleCaptions","data-te-slide":"prev"},te),e("button",{class:"absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none",type:"button",onClick:u[1]||(u[1]=$=>g()),"data-te-target":"#carouselExampleCaptions","data-te-slide":"next"},ae)]))}},ie={class:"mx-auto mt-8 max-w-7xl px-6 lg:mt-16 sm:px-0 lg:max-w-7xl mx-auto"},re={class:"lg:grid lg:grid-cols-12 lg:gap-8"},ce={class:"sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left"},de={class:"mt-1 p-1 block text-4xl space-y-6 font-bold tracking-tight sm:text-2xl xl:text-5xl"},ue={class:"block text-gray-900"},pe={class:"block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-500"},_e={class:"mt-3 text-base text-gray-700 sm:mt-5 sm:text-sm lg:text-lg xl:text-lg"},me={class:"mt-10 sm:flex sm:justify-center lg:justify-start"},ge={class:"hidden md:flex md:items-center md:space-x-6"},xe={class:"relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center"},he={class:"relative mx-auto w-full rounded-lg lg:max-w-md"},fe={class:"sr-only"},ve=["src","alt"],be={__name:"TemplrJSHero",props:{api_end_point:{type:String,required:!0}},async setup(y){let a,r;const o=y;let c=o.api_end_point!=null?o.api_end_point:"/configs/hero";const t=([a,r]=j(()=>P(`${c}.json`,{method:"get"},"$PA2qzBFgFj")),a=await a,r(),a);return t.value=t.data._rawValue,console.log("hero=",JSON.stringify(t.value)),(n,d)=>{const g=Y,_=D("VideoPlayer");return l(),i("main",ie,[e("div",re,[e("div",ce,[e("h1",null,[e("span",de,[e("span",ue,p(s(t).value.title.primary),1),e("span",pe,p(s(t).value.title.secondary),1)])]),e("p",_e,p(s(t).value.description),1),e("div",me,[e("div",ge,[m(g,{to:"#",onClick:d[0]||(d[0]=A=>("useNuxtApp"in n?n.useNuxtApp:s(M))().$bus.$emit(`${s(t).value.button.primary.click_event}`)),class:z(["px-5 py-2 text-md ring-2 hover:ring-2 text-white rounded-full transition-all duration-300",[`bg-[${s(k)().palette("500")}]`,`hover:bg-[${s(k)().palette("700")}]`,`ring-[${s(k)().palette("500")}]`]])},{default:B(()=>[b(p(s(t).value.button.primary.text),1)]),_:1},8,["class"]),m(g,{to:"#",onClick:d[1]||(d[1]=A=>("useNuxtApp"in n?n.useNuxtApp:s(M))().$bus.$emit(`${s(t).value.button.primary.click_event}`)),class:z(["px-5 py-2 text-md border border-transparent bg-white hover:text-white ring-2 rounded-full transition-all duration-300",[`text-[${s(k)().palette("500")}]`,`hover:bg-[${s(k)().palette("700")}]`,`ring-[${s(k)().palette("500")}]`]])},{default:B(()=>[b(p(s(t).value.button.secondary.text),1)]),_:1},8,["class"])])])]),e("div",xe,[e("div",he,[s(t).value.video.url&&s(t).value.video.weight>s(t).value.image.weight?(l(),E(_,{key:0,src:s(t).value.video.url},null,8,["src"])):s(t).value.image.url?(l(),i(w,{key:1},[e("span",fe,p(s(t).value.image.alt),1),e("img",{class:"w-full aspect-[4/3]",src:s(t).value.image.url,alt:s(t).value.image.alt},null,8,ve)],64)):(l(),i(w,{key:2},[b(" no image ")],64))])])])])}}},we={class:"pb-10"},ye={class:"px-6"},$e={class:"flex flex-row items-center space-x-3 pt-5 pb-3"},ke=e("h2",{class:"text-4xl font-semibold text-black"},"Recent Post",-1),je={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},Ce=["href"],Ae=["src","alt"],Se={class:"px-3 pb-4"},Ne={class:"text-black pt-3 pb-2"},ze={class:"flex items-center"},Be={class:"text-xl font-semibold text-black pb-1 group-hover:text-sky-700"},Me={class:"text-ellipsis line-clamp-2 text-base"},Pe={class:"flex group-hover:underline text-sky-700 items-center py-2"},Ee=e("p",null,"Read More",-1),Ie={__name:"recent",async setup(y){let a,r;const o=([a,r]=j(()=>$fetch(`${I().public.API_BASE_URL}/entities/blogs?limit=10&order=id desc`)),a=await a,r(),a),c=v([]),t=v([]);return o&&f.isArray(o.data)&&(c.value=f.map(o.data,"content"),c.value=([a,r]=j(async()=>Promise.all(f.map(c.value,async n=>await T(n)))),a=await a,r(),a),t.value=f.filter(c.value,n=>f.get(n,"data.type")==="Blog"),t.value=f.orderBy(t.value,n=>new Date(f.get(n,"data.date")),"desc"),t.value=f.take(t.value,6)),(n,d)=>{var x;const g=V,_=R,A=q,N=J;return l(),i("div",we,[e("div",ye,[e("div",$e,[m(g,{name:"mdi:star-three-points-outline",size:"2em",class:"text-black"}),ke])]),e("div",je,[(l(!0),i(w,null,C(s(t),u=>(l(),i("article",{key:u.data.title,class:"group border m-2 overflow-hidden rounded-2xl shadow-sm text-zinc-700"},[e("a",{href:`/cms?title=${("useNuxtApp"in n?n.useNuxtApp:s(M))().$s.slugify(u.data.title)}`},[e("img",{class:"lg:h-48 md:h-36 w-full object-cover object-center rounded-t-2xl shadow-lg group-hover:scale-[1.02] transition-all duration-500",src:u.data.coverimage,alt:u.data.title},null,8,Ae),e("div",Se,[e("div",Ne,[e("div",ze,[m(_),b(" "+p(n.$dayjs(u.data.date).format("DD-MMM-YYYY")),1)])]),e("h2",Be,p(u.data.title),1),e("p",Me,p(u.data.description),1),e("div",Pe,[Ee,m(A)])])],8,Ce)]))),128)),((x=s(o))==null?void 0:x.length)===0?(l(),E(N,{key:0})):L("",!0)])])}}};const Ve={class:"py-12 sm:py-24 px-4 lg:px-0 rounded-3xl rounded-t-none -mt-4 relative text-gable-green bg-white",style:{"z-index":"6"}},De={class:"m-auto max-w-screen-xl"},Le=e("div",{class:"flex flex-col lg:flex-row justify-between items-baseline"},[e("h2",{class:"text-3xl text-zinc-600 font-bold w-full mb-4 md:mb-0 lg:w-6/12"},"Technology Stack"),e("a",{class:"inline-flex text-lg font-normal text-gable-green gap-2 whitespace-nowrap items-center hover:text-blurple",href:"#"},"See full list of Technology Stack")],-1),Ye={class:"w-full overflow-hidden index mt-6 md:mt-12",style:{"mask-image":"linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)","-webkit-mask-image":"linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)"}},Re={class:"flex whitespace-nowrap relative"},qe={class:"gap-2 flex-shrink-0 grid relative grid-rows-1 grid-flow-col items-center justify-items-center min-w-full",style:{animation:"carouselspin 40s linear infinite"}},Je={class:"gap-2 flex-shrink-0 grid relative grid-rows-1 grid-flow-col items-center justify-items-center min-w-full",style:{animation:"carouselspin 40s linear infinite"}},Te={__name:"Marquee",props:{api_end_point:{type:String,required:!0}},async setup(y){let a,r;const o=y;let c=o.api_end_point!=null?o.api_end_point:"/configs/tech-stack";const t=([a,r]=j(()=>P(`${c}.json`,{method:"get"},"$PbJoMZBx10")),a=await a,r(),a);return(n,d)=>{const g=V;return l(),i("div",Ve,[e("div",De,[Le,e("div",Ye,[e("div",Re,[e("div",qe,[(l(!0),i(w,null,C(s(t).data._rawValue.menu,_=>(l(),i("span",{key:_.name,class:"text-xl font-bold text-zinc-400 mx-4"},[m(g,{name:_.icon,class:"h-10 w-10"},null,8,["name"]),b(" "+p(_.name),1)]))),128))]),e("div",Je,[(l(!0),i(w,null,C(s(t).data._rawValue.menu,_=>(l(),i("span",{key:_.name,class:"text-xl font-bold text-zinc-400 mx-4"},[m(g,{name:_.icon,class:"h-10 w-10"},null,8,["name"]),b(" "+p(_.name),1)]))),128))])])])])])}}},Fe={class:"mx-auto max-w-2xl py-10 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8"},He=e("div",{class:"md:flex md:items-center md:justify-between"},[e("h2",{class:"text-2xl font-bold tracking-tight text-gray-900"},"Recent Instagram Posts"),e("a",{href:"#",class:"hidden text-sm font-medium text-primary-600 hover:text-primary-500 md:block"},[b(" Go to the Instagram page "),e("span",{"aria-hidden":"true"}," →")])],-1),Oe={class:"mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8"},Ue={class:"h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80"},Ge=["src"],Ze={class:"mt-4 text-sm text-gray-700"},Ke=["href"],Qe=e("span",{class:"absolute inset-0"},null,-1),We={class:"mt-1 text-sm text-gray-500"},Xe={__name:"InstagramPosts",async setup(y){let a,r;const o=([a,r]=j(()=>$fetch(`${I().public.API_BASE_URL}/entities/instagramposts?limit=10&order=id desc`)),a=await a,r(),a),c=v([]);return o&&f.isArray(o.data)&&(c.value=o.data,console.log("filteredArticles.value=",JSON.stringify(c.value))),(t,n)=>(l(),i("div",Fe,[He,e("div",Oe,[(l(!0),i(w,null,C(s(c),d=>(l(),i("div",{key:d.ID,class:"group relative"},[e("div",Ue,[e("img",{src:`data:image/gif;base64,${d.base64}`,class:"h-full w-full object-cover object-center"},null,8,Ge)]),e("h3",Ze,[e("a",{href:`https://www.instagram.com/p/${d.short_code}`,target:"_blank"},[Qe,b(" "+p(t.$s(d.text).prune(50)._wrapped),1)],8,Ke)]),e("p",We,p(t.$dayjs(d.uploaded_at).format("DD-MMM-YYYY")),1)]))),128))])]))}},et={};function tt(y,a){const r=le,o=be,c=Ie,t=Te,n=Xe,d=F;return l(),E(d,{name:"landing"},{default:B(()=>[e("div",null,[m(r),m(o,{api_end_point:"/configs/hero"}),m(c),m(t,{api_end_point:"/configs/tech-stack"}),m(n)])]),_:1})}const xt=H(et,[["render",tt]]);export{xt as default};
