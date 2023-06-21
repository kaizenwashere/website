"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[98173],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,u(u({ref:t},i),{},{components:r})):n.createElement(d,u({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,u=new Array(a);u[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,u[1]=s;for(var l=2;l<a;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={title:"$userRoleCount"},u=void 0,s={unversionedId:"functions/userrolecount",id:"version-5.5.5/functions/userrolecount",title:"$userRoleCount",description:"This function returns how many roles a user has",source:"@site/versioned_docs/version-5.5.5/functions/userrolecount.md",sourceDirName:"functions",slug:"/functions/userrolecount",permalink:"/docs/5.5.5/functions/userrolecount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687340447,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$userRoleCount"},sidebar:"docs",previous:{title:"$userRoleColor",permalink:"/docs/5.5.5/functions/userrolecolor"},next:{title:"$userRoles",permalink:"/docs/5.5.5/functions/userroles"}},c={},l=[],i={toc:l},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns how many roles a user has"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$userRoleCount[userID (optional)]\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "roleCount",\ncode: `\n$username has $userRoleCount roles!\n`\n})\n')))}f.isMDXComponent=!0}}]);