"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24997],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>f});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?t.createElement(f,i(i({ref:r},s),{},{components:n})):t.createElement(f,i({ref:r},s))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71231:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(87462),o=(n(67294),n(3905));const a={title:"$handleError",description:"Function that is used in bot.onFunctionError callback."},i=void 0,l={unversionedId:"functions/handleerror",id:"version-5.5.5/functions/handleerror",title:"$handleError",description:"Function that is used in bot.onFunctionError callback.",source:"@site/versioned_docs/version-5.5.5/functions/handleerror.md",sourceDirName:"functions",slug:"/functions/handleerror",permalink:"/docs/5.5.5/functions/handleerror",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688900921,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"$handleError",description:"Function that is used in bot.onFunctionError callback."},sidebar:"docs",previous:{title:"$guildRoles",permalink:"/docs/5.5.5/functions/guildroles"},next:{title:"$hasAnyPerm",permalink:"/docs/5.5.5/functions/hasanyperm"}},c={},u=[{value:"Usage:",id:"usage",level:3},{value:"Example:",id:"example",level:3}],s={toc:u},p="wrapper";function d(e){let{components:r,...n}=e;return(0,o.kt)(p,(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$handleError[option]\n")),(0,o.kt)("h3",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.functionErrorCommand({\nchannel: "832704676096245800",\ncode: `Error: $handleError[error]`\n})\nbot.onFunctionError()\n')),(0,o.kt)("p",null,"Properties that can be used with $handleError are "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"function")," - Function Name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"command")," - Command  Name"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"error")," - Returns Error")),(0,o.kt)("p",null,"Callback for this command: ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.5.5/events/bot.onfunctionerror"},"bot.onFunctionError")))}d.isMDXComponent=!0}}]);