"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[1691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"$cooldown",description:"Set a cooldown for a command"},i=void 0,l={unversionedId:"functions/cooldown",id:"version-5.5.5/functions/cooldown",title:"$cooldown",description:"Set a cooldown for a command",source:"@site/versioned_docs/version-5.5.5/functions/cooldown.md",sourceDirName:"functions",slug:"/functions/cooldown",permalink:"/docs/5.5.5/functions/cooldown",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687340447,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$cooldown",description:"Set a cooldown for a command"},sidebar:"docs",previous:{title:"$concatTextSplit",permalink:"/docs/5.5.5/functions/concattextsplit"},next:{title:"$cpu",permalink:"/docs/5.5.5/functions/cpu"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Error Options",id:"error-options",level:4},{value:"Example",id:"example",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function sets a cooldown to the current command."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$cooldown[time;error]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"time"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The time of cooldown"),(0,a.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"error"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The error to be displayed when cooldown is active"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h4",{id:"error-options"},"Error Options"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"%time% - Returns time in human readable duration."),(0,a.kt)("li",{parentName:"ul"},"%hour% - Returns time in hour."),(0,a.kt)("li",{parentName:"ul"},"%min% - Returns time in minutes."),(0,a.kt)("li",{parentName:"ul"},"%sec% - Returns time in seconds."),(0,a.kt)("li",{parentName:"ul"},"%ms% - Returns time in milliseconds."),(0,a.kt)("li",{parentName:"ul"},"%day% - Returns time in days."),(0,a.kt)("li",{parentName:"ul"},"%week% - Returns time in weeks."),(0,a.kt)("li",{parentName:"ul"},"%month% - Returns time in months."),(0,a.kt)("li",{parentName:"ul"},"%year% - Returns time in years.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "hello", \ncode: `\n$description[Hello!]\n$cooldown[1m;Hey, you need to wait %time%!]\n`\n})\n')))}d.isMDXComponent=!0}}]);