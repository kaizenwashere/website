"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"$spliceTextJoin",description:"$spliceTextJoin",id:"spliceTextJoin"},i=void 0,o={unversionedId:"functions/util-related/spliceTextJoin",id:"version-6.2.6/functions/util-related/spliceTextJoin",title:"$spliceTextJoin",description:"$spliceTextJoin",source:"@site/versioned_docs/version-6.2.6/functions/util-related/spliceTextJoin.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/spliceTextJoin",permalink:"/docs/functions/util-related/spliceTextJoin",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348568,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$spliceTextJoin",description:"$spliceTextJoin",id:"spliceTextJoin"},sidebar:"docs",previous:{title:"$roleId",permalink:"/docs/functions/util-related/roleId"},next:{title:"$splitText",permalink:"/docs/functions/util-related/splitText"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$spliceTextJoin")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$spliceTextJoin[text;splitter;sep1?;sep2?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"text"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Text to join."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"splitter"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"How to split."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sep1"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Separator."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sep2"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Separator."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))))}d.isMDXComponent=!0}}]);