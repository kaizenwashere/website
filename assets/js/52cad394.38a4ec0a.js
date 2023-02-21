"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[55576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33670:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"$isManaged",description:"$isManaged will check if a certain role is managed by Discord.",id:"isManaged"},l=void 0,o={unversionedId:"functions/util/isManaged",id:"functions/util/isManaged",title:"$isManaged",description:"$isManaged will check if a certain role is managed by Discord.",source:"@site/docs/functions/util/isManaged.md",sourceDirName:"functions/util",slug:"/functions/util/isManaged",permalink:"/docs/functions/util/isManaged",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1672524727,formattedLastUpdatedAt:"Dec 31, 2022",frontMatter:{title:"$isManaged",description:"$isManaged will check if a certain role is managed by Discord.",id:"isManaged"},sidebar:"docs",previous:{title:"$isInteger",permalink:"/docs/functions/util/isInteger"},next:{title:"$isMentionable",permalink:"/docs/functions/util/isMentionable"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Please note that your bot has to be in the same server as the role or else this function will not work.",id:"please-note-that-your-bot-has-to-be-in-the-same-server-as-the-role-or-else-this-function-will-not-work",level:3},{value:"Example",id:"example",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$isManaged")," will check if a certain role is managed by Discord."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$isManaged[roleID;guildID?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"roleID"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"role ID of the role you want to check if it's managed by Discord or not"),(0,a.kt)("td",{parentName:"tr",align:null},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID of where the role exists"),(0,a.kt)("td",{parentName:"tr",align:null},"no")))),(0,a.kt)("h3",{id:"please-note-that-your-bot-has-to-be-in-the-same-server-as-the-role-or-else-this-function-will-not-work"},"Please note that your bot has to be in the same server as the role or else this function will not work."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will check if a role called ",(0,a.kt)("inlineCode",{parentName:"p"},"Server Booster")," is managed by Discord."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'isManaged',\n  code: `\n  $isManaged[$findRole[Server Booster];$guildID]\n  `\n});\n")))}d.isMDXComponent=!0}}]);