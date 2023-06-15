"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9895],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=m(n),u=r,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||i;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22555:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"$modifyApplicationCommand",description:"$modifyApplicationCommand will modify an existing application command.",id:"modifyApplicationCommand"},o=void 0,l={unversionedId:"functions/interaction-related/modifyApplicationCommand",id:"version-6.2.6/functions/interaction-related/modifyApplicationCommand",title:"$modifyApplicationCommand",description:"$modifyApplicationCommand will modify an existing application command.",source:"@site/versioned_docs/version-6.2.6/functions/interaction-related/modifyApplicationCommand.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/modifyApplicationCommand",permalink:"/docs/functions/interaction-related/modifyApplicationCommand",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686798550,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$modifyApplicationCommand",description:"$modifyApplicationCommand will modify an existing application command.",id:"modifyApplicationCommand"},sidebar:"docs",previous:{title:"$messagePublish",permalink:"/docs/functions/interaction-related/messagePublish"},next:{title:"$modifyChannelPerms",permalink:"/docs/functions/interaction-related/modifyChannelPerms"}},p={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],c={toc:m};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$modifyApplicationCommand")," will modify an existing application command."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$modifyApplicationCommand[guildID/global;appID;name:description:type:options:defaultPermission;...options]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID/global"),(0,r.kt)("td",{parentName:"tr",align:null},"integer, string"),(0,r.kt)("td",{parentName:"tr",align:null},"Application command type. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"specific guildID")),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Application command ID."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"...options"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"New data for the application command."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))))}d.isMDXComponent=!0}}]);