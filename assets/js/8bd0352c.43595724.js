"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[36323],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=s,m=d["".concat(l,".").concat(u)]||d[u]||g[u]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const a={title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage will crosspost a given message to the given channels.",id:"sendCrosspostingMessage"},o=void 0,i={unversionedId:"functions/interaction-related/sendCrosspostingMessage",id:"version-6.2.6/functions/interaction-related/sendCrosspostingMessage",title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage will crosspost a given message to the given channels.",source:"@site/versioned_docs/version-6.2.6/functions/interaction-related/sendCrosspostingMessage.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/sendCrosspostingMessage",permalink:"/docs/functions/interaction-related/sendCrosspostingMessage",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348568,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage will crosspost a given message to the given channels.",id:"sendCrosspostingMessage"},sidebar:"docs",previous:{title:"$respawnAllShards",permalink:"/docs/functions/interaction-related/respawnAllShards"},next:{title:"$sendDm",permalink:"/docs/functions/interaction-related/sendDm"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:p},d="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"$sendCrosspostingMessage")," will crosspost a given message to the given channels."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-php"},"$sendCrosspostingMessage[content;...channelIDs]\n")),(0,s.kt)("h2",{id:"parameters"},"Parameters"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"content"),(0,s.kt)("td",{parentName:"tr",align:null},"string"),(0,s.kt)("td",{parentName:"tr",align:null},"The message to send."),(0,s.kt)("td",{parentName:"tr",align:"center"},"true")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"...channelIDs"),(0,s.kt)("td",{parentName:"tr",align:null},"integer"),(0,s.kt)("td",{parentName:"tr",align:null},"Where to send the given message."),(0,s.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,s.kt)("h2",{id:"examples"},"Example(s)"),(0,s.kt)("p",null,"This will crosspost a message to multiple channels in your server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'sendCrosspostingMessage',\n    code: `\n   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]\n  `\n});\n")))}g.isMDXComponent=!0}}]);