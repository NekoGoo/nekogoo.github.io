import{o as i,c as d,a as _,b as c,r as m,d as l,w as h,e as f,F as p,f as w,g as k,p as N,h as x,i as $,j as C,k as I}from"./vendor.ddf9aa35.js";const G=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};G();var u=(t,o)=>{const n=t.__vccOpts||t;for(const[r,e]of o)n[r]=e;return n};const A={},P=_(" \xA9 Copyright 2021-2022, "),S=c("a",{href:"https://nekogoo.github.io"},"NekoGoo",-1),L=[P,S];function E(t,o){return i(),d("footer",null,L)}var H=u(A,[["render",E]]);const O={},V={class:"p-2 mb-4 border-bottom nav-main-bg"},j={class:"container d-flex flex-wrap"},F={class:"nav justify-content-lg-start col-12 col-lg-auto me-lg-auto"},R={class:"nav-item"},q=_("NekoGoo"),B={class:"nav justify-content-center col-12 col-lg-auto me-lg-auto mb-2 mb-md-0"},T={class:"nav-item"},U=_("Home"),W={class:"nav-item"},M=_("About");function D(t,o){const n=m("router-link");return i(),d("header",V,[c("nav",j,[c("ul",F,[c("li",R,[l(n,{"router-link":"",to:"/",class:"nav-link px-2 candy-shop nekogoo-header"},{default:h(()=>[q]),_:1})])]),c("ul",B,[c("li",T,[l(n,{"router-link":"",to:"/",class:"nav-link ml-5 px-2 link-secondary"},{default:h(()=>[U]),_:1})]),c("li",W,[l(n,{"router-link":"",to:"/about",class:"nav-link ml-5 px-2 link-dark"},{default:h(()=>[M]),_:1})])])])])}var Q=u(O,[["render",D]]);const X=f({setup(t){return(o,n)=>{const r=m("router-view");return i(),d(p,null,[l(Q),l(r),l(H)],64)}}});const z=f({setup(t){return(o,n)=>(i(),w(X))}}),J="modulepreload",v={},K="/",Y=function(o,n){return!n||n.length===0?o():Promise.all(n.map(r=>{if(r=`${K}${r}`,r in v)return;v[r]=!0;const e=r.endsWith(".css"),s=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${s}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":J,e||(a.as="script",a.crossOrigin=""),a.href=r,document.head.appendChild(a),e)return new Promise((b,y)=>{a.addEventListener("load",b),a.addEventListener("error",y)})})).then(()=>o())},Z={},ee={id:"zoneLanding",class:"container"},te=k('<h1>Welcome to NekoGoo Baka Net!</h1><hr><h3>News</h3> Get the latest info on stuff I have planned, am learning, or find interesting and worth a share.\xA0 Content generally swings between wholesome, horny, and derpy. <br><br><div class="row"><div class="col-lg-6"><h5>YouTube Channels</h5><ul><li><a href="https://www.youtube.com/channel/UCx_4XIMPtT3HQb0emNfbAyg" target="_blank" rel="noreferrer">NekoGoo Clone</a>: MMDs, highlight clips, misc. </li><li><a href="https://www.youtube.com/channel/UCwV-V3E4slWUqHIRwqah0mQ" target="_blank" rel="noreferrer">NekoGoo Gaming</a>: edited game play</li><li><a href="https://www.youtube.com/channel/UCJWIf5l-3Ob5Al-DxksSA2w" target="_blank" rel="noreferrer">NekoGoo Reacts</a>: sharing opinions about other content </li></ul></div></div><br><div class="row"><div class="col-sm-6"><h3>Streaming</h3> Catch me live on <a href="https://www.twitch.tv/NekoGooClone" target="_blank" rel="noreferrer">twitch.tv/NekoGooClone</a> for games and memes.\xA0 I enjoy anything involving monster girls, superpowers, fantasy, and sci-fi.\xA0 I can often be found casually streaming Final Fantasy XIV &amp; other random games. </div><div class="col-sm-6"><h3>Games</h3> I am developing a lewd, text-based RPG that will be free-to-play in browser.\xA0 It will feature a strong emphasis on body transformation, relationships, &amp; dynamic story content. </div></div><br>',10),oe=[te];function ne(t,o){return i(),d("main",ee,oe)}var re=u(Z,[["render",ne]]);const se={},g=t=>(N("data-v-3188aa75"),t=t(),x(),t),ae=g(()=>c("h1",null,"404",-1)),ce=g(()=>c("h5",null,"Uh-oh!\xA0 The requested page could not be found!",-1));function ie(t,o){return i(),d(p,null,[ae,ce],64)}var le=u(se,[["render",ie],["__scopeId","data-v-3188aa75"]]);const de=[{path:"/",name:"Home",component:re},{path:"/about",name:"About",component:()=>Y(()=>import("./About.b5fbb620.js"),["assets/About.b5fbb620.js","assets/vendor.ddf9aa35.js"])},{path:"/:pathMatch(.*)*",name:"not-found",component:le}],_e=$({history:C(),routes:de});I(z).use(_e).mount("#app");
