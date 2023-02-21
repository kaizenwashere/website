"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[6564],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),u=r,d=c["".concat(i,".").concat(u)]||c[u]||g[u]||s;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<s;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},25616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const s={title:"$messageFlags",description:"$messageFlags will return a message's flags.",id:"messageFlags"},l=void 0,o={unversionedId:"functions/Info/messageFlags",id:"functions/Info/messageFlags",title:"$messageFlags",description:"$messageFlags will return a message's flags.",source:"@site/docs/functions/Info/messageFlags.md",sourceDirName:"functions/Info",slug:"/functions/Info/messageFlags",permalink:"/docs/functions/Info/messageFlags",draft:!1,tags:[],version:"current",frontMatter:{title:"$messageFlags",description:"$messageFlags will return a message's flags.",id:"messageFlags"},sidebar:"docs",previous:{title:"$messageAttachment",permalink:"/docs/functions/Info/message"},next:{title:"$messageID",permalink:"/docs/functions/Info/messageID"}},i={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$messageFlags")," will return a message's flags."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$messageFlags[messageID;sep?;channelID?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"messageID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"message id to return flags of"),(0,r.kt)("td",{parentName:"tr",align:"center"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sep?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"seperator to seperate returned arguments"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"channelID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"channel id of where the message is located in"),(0,r.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"This will the message flags of your initial command message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'messageFlags',\n  code: `\n  $messageFlags[$messageID;, ;$channelID]\n  `\n});\n")))}g.isMDXComponent=!0}}]);