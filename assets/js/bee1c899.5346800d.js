"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[89461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"Introduction",description:"The basic introduction of @akarui/aoi.music"},a=void 0,c={unversionedId:"music/introduction",id:"music/introduction",title:"Introduction",description:"The basic introduction of @akarui/aoi.music",source:"@site/extensions/music/introduction.md",sourceDirName:"music",slug:"/music/introduction",permalink:"/extensions/music/introduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"The basic introduction of @akarui/aoi.music"},sidebar:"sidebarExtensions",previous:{title:"FAQ",permalink:"/extensions/panel/faq"},next:{title:"Setup",permalink:"/extensions/music/setup"}},u={},s=[{value:"Notice",id:"notice",level:2}],l={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"aoi.js has an extension named ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"@akarui/aoi.music"))," for music."),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"If you have issues such the Client not joining the Voice Channel, make sure you have the latest version of aoi.js and @akarui/aoi.music."),(0,i.kt)("p",null,"As well you have added ",(0,i.kt)("inlineCode",{parentName:"p"},"GUILD_VOICE_STATES")," intent to your intents array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'- intents: ["GUILDS", "GUILD_MESSAGES"]\n+ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"]\n')))}p.isMDXComponent=!0}}]);