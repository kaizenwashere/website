"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(n),g=l,m=s["".concat(o,".").concat(g)]||s[g]||c[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},36854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=n(87462),l=(n(67294),n(3905));const a={title:"$guildSplash",description:"$guildSplash will return a guild's invite background (if unlocked).",id:"guildSplash"},i=void 0,u={unversionedId:"functions/guild-related/guildSplash",id:"version-6.3.0/functions/guild-related/guildSplash",title:"$guildSplash",description:"$guildSplash will return a guild's invite background (if unlocked).",source:"@site/versioned_docs/version-6.3.0/functions/guild-related/guildSplash.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildSplash",permalink:"/docs/functions/guild-related/guildSplash",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689188825,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"$guildSplash",description:"$guildSplash will return a guild's invite background (if unlocked).",id:"guildSplash"},sidebar:"docs",previous:{title:"$guildShardPing",permalink:"/docs/functions/guild-related/guildShardPing"},next:{title:"$guildSystemChannelID",permalink:"/docs/functions/guild-related/guildSystemChannelID"}},o={},d=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:d},s="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"$guildSplash")," will return a guild's invite background (if unlocked)."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"$guildSplash[guildID?]\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the guild."),(0,l.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,l.kt)("h2",{id:"examples"},"Example(s)"),(0,l.kt)("p",null,"This will return the guild's invite background (if unlocked):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'guildSplash',\n    code: `\n  $guildSplash[$guildID]\n  `\n});\n")))}c.isMDXComponent=!0}}]);