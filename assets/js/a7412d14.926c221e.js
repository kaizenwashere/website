"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[92782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(v,l(l({ref:t},p),{},{components:n})):r.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Voice"},l=void 0,c={unversionedId:"class/Voice",id:"class/Voice",title:"Voice",description:"Usage",source:"@site/docs/class/Voice.md",sourceDirName:"class",slug:"/class/Voice",permalink:"/docs/class/Voice",draft:!1,tags:[],version:"current",frontMatter:{title:"Voice"}},i={},s=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"joinVc()",id:"joinvc",level:3},{value:"Usage",id:"usage-1",level:4},{value:"Example",id:"example",level:4},{value:"readonly serversSize",id:"readonly-serverssize",level:3},{value:"Usage",id:"usage-2",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"Initialise The Voice Class To Enable Aoijs Music System \n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"new Voice(client:Bot,ytdlOptions:YTDL,scOptions:SCDL,cacheOptions:CacheOptions)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/options/voiceOptions"},"VoiceOptions")),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"joinvc"},"joinVc()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Joins The Voice Channel")),(0,a.kt)("h4",{id:"usage-1"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," Voice.joinVc(voiceChannel:VoiceChannel,textChannel:TextChannel); \n")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"}," Voice.joinVc(member.voice.channel,channel) \n")),(0,a.kt)("h3",{id:"readonly-serverssize"},"readonly serversSize"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Gives Count Of All Voice Connections")),(0,a.kt)("h4",{id:"usage-2"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"}," Voice.serversSize \n")),(0,a.kt)("p",null,"Returns: ",(0,a.kt)("strong",{parentName:"p"},"number")))}u.isMDXComponent=!0}}]);