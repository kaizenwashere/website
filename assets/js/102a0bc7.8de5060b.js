"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24092],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),i=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},37733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const o={title:"loadCommands"},l=void 0,s={unversionedId:"class/loadCommands",id:"version-5.5.5/class/loadCommands",title:"loadCommands",description:"Usage",source:"@site/versioned_docs/version-5.5.5/class/loadCommands.md",sourceDirName:"class",slug:"/class/loadCommands",permalink:"/docs/5.5.5/class/loadCommands",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1686578236,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{title:"loadCommands"}},d={},i=[{value:"Usage",id:"usage",level:2},{value:"Methods",id:"methods",level:2},{value:"load()",id:"load",level:3},{value:"Usage",id:"usage-1",level:4},{value:"update()",id:"update",level:3},{value:"Usage",id:"usage-2",level:4},{value:"Example",id:"example",level:2}],p={toc:i};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," A Custom Handler To Load/Update Commands\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," const loader = new loadCommands(client:Bot,AddThisToClass? : boolean)\n")),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"load"},"load()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Loads The Commands From The Given File")),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," loader.load(cmd:CommandManager , path: string , debug?:boolean) \n")),(0,r.kt)("h3",{id:"update"},"update()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Updates All The Changes Made")," "),(0,r.kt)("h4",{id:"usage-2"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"}," loader.update(debug?:boolean)\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const aoijs = require(\'aoi.js\')\n\nconst bot = new aoijs.Bot({\n     prefix: "Your Prefix", //Your Bot Prefix\n     token: "Your Bot Token Here", //Your Bot Token\n     intents: "all" //Intents Your Bot Requires \n     })\n\nconst loader = new aoijs.loadCommands(bot)\nloader.load(bot.cmd,\'./commands/\')\n')))}c.isMDXComponent=!0}}]);