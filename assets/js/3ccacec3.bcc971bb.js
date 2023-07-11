"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25766],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,v=u["".concat(c,".").concat(d)]||u[d]||f[d]||s;return t?n.createElement(v,a(a({ref:r},p),{},{components:t})):n.createElement(v,a({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<s;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4492:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const s={title:"$serverIDs",description:"Returns all the server IDs the bot is in"},a=void 0,i={unversionedId:"functions/serverids",id:"version-5.5.5/functions/serverids",title:"$serverIDs",description:"Returns all the server IDs the bot is in",source:"@site/versioned_docs/version-5.5.5/functions/serverids.md",sourceDirName:"functions",slug:"/functions/serverids",permalink:"/docs/5.5.5/functions/serverids",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689051183,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"$serverIDs",description:"Returns all the server IDs the bot is in"},sidebar:"docs",previous:{title:"$serverIcon",permalink:"/docs/5.5.5/functions/servericon"},next:{title:"$serverName",permalink:"/docs/5.5.5/functions/servername"}},c={},l=[],p={toc:l},u="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$serverIDs[separator (optional)]\n")),(0,o.kt)("p",null,"Separator is the symbol that separates each server ID"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "serverIDs",\ncode: `Server IDs: $serverIDs[,]`\n//will return: serverid,serverid,serverid,etc\n})\n')))}f.isMDXComponent=!0}}]);