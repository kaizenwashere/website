"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[97223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,m=function(e,t){if(null==e)return{};var r,n,m={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(m[r]=e[r]);return m}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(m[r]=e[r])}return m}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,m=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),f=m,d=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,m=t&&t.mdxType;if("string"==typeof e||m){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:m,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},51107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),m=(r(67294),r(3905));const o={title:"$maximumMembers",description:"Return the maximum members can join the server."},a=void 0,i={unversionedId:"functions/maximummembers",id:"version-5.5.5/functions/maximummembers",title:"$maximumMembers",description:"Return the maximum members can join the server.",source:"@site/versioned_docs/version-5.5.5/functions/maximummembers.md",sourceDirName:"functions",slug:"/functions/maximummembers",permalink:"/docs/functions/maximummembers",draft:!1,tags:[],version:"5.5.5",frontMatter:{title:"$maximumMembers",description:"Return the maximum members can join the server."},sidebar:"docs",previous:{title:"$math",permalink:"/docs/functions/math"},next:{title:"$memberExists",permalink:"/docs/functions/memberexists"}},s={},u=[{value:"Usage:",id:"usage",level:4}],c={toc:u};function l(e){let{components:t,...r}=e;return(0,m.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"This function returns the limit of members the given guild has. This is only for large servers with more than 100,000 members. All guilds below return 100000."),(0,m.kt)("p",null,"Raw usage: ",(0,m.kt)("inlineCode",{parentName:"p"},"$maximumMembers[guildID (optional)]")),(0,m.kt)("h4",{id:"usage"},"Usage:"),(0,m.kt)("p",null,"Example command to return the amount of maximum members of the current guild:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "maxmembers",\ncode: `\nLimit: $maximumMembers\n`\n})\n')),(0,m.kt)("p",null,"Example command to return the amount of maximum members of the another guild:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "maxmembers",\ncode: `\nLimit: $maximumMembers[773352845738115102]\n`\n})\n')))}l.isMDXComponent=!0}}]);