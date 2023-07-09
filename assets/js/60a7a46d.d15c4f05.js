"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={title:"$executionTime"},c=void 0,a={unversionedId:"functions/executiontime",id:"version-5.5.5/functions/executiontime",title:"$executionTime",description:"This function returns how long it took to execute ALL the functions in the current code in ms",source:"@site/versioned_docs/version-5.5.5/functions/executiontime.md",sourceDirName:"functions",slug:"/functions/executiontime",permalink:"/docs/5.5.5/functions/executiontime",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688900921,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"$executionTime"},sidebar:"docs",previous:{title:"$exec",permalink:"/docs/5.5.5/functions/exec"},next:{title:"$fileExists",permalink:"/docs/5.5.5/functions/fileexists"}},u={},s=[{value:"Usage",id:"usage",level:4}],l={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function returns how long it took to execute ALL the functions in the current code in ms"),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "test",\ncode: `$title[Hello]\nTook me $executionTime ms to run this command`\n})\n')))}f.isMDXComponent=!0}}]);