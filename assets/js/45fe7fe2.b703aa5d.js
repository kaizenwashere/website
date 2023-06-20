"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99619],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),m=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=m(t.components);return a.createElement(u.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=m(n),d=r,f=c["".concat(u,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(f,o(o({ref:e},s),{},{components:n})):a.createElement(f,o({ref:e},s))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[c]="string"==typeof t?t:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56653:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},o=void 0,l={unversionedId:"functions/misc-related/setTimeout",id:"version-6.2.6/functions/misc-related/setTimeout",title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",source:"@site/versioned_docs/version-6.2.6/functions/misc-related/setTimeout.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/setTimeout",permalink:"/docs/functions/misc-related/setTimeout",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687247489,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$setTimeout",description:"$setTimeout will set a timeout for a given action (which will even continue to run after bot restart).",id:"setTimeout"},sidebar:"docs",previous:{title:"$setCacheData",permalink:"/docs/functions/misc-related/setCacheData"},next:{title:"$shutdown",permalink:"/docs/functions/misc-related/shutdown"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:m},c="wrapper";function p(t){let{components:e,...n}=t;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setTimeout")," will set a timeout for a given action (which will even continue to run after bot restart)."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$setTimeout[awaitedCmd;duration;timeoutData;returnId?;pulse?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awaitedCmd"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Awaited command to execute after duration ends."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"duration"),(0,r.kt)("td",{parentName:"tr",align:null},"string, number"),(0,r.kt)("td",{parentName:"tr",align:null},"After how much time it will execute / this cannot go over ",(0,r.kt)("strong",{parentName:"td"},"21 days"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeoutData"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout data."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"returnId?"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Return timeout ID."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pulse?"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"Pulse."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can retrieve timeout data using ",(0,r.kt)("inlineCode",{parentName:"li"},"$timeoutData[name]"),"."),(0,r.kt)("li",{parentName:"ul"},"Note that the duration may not go over ",(0,r.kt)("strong",{parentName:"li"},"21 days"),".")),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,'This will send "Hello!" after 10 seconds in the command execution channel:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "setTimeout",\n    code: `\n    $setTimeout[timeoutCommand;10s;{"channelID": "$channelID", "authorID": "$authorID"};false]\n    `\n});\n\nbot.timeoutCommand({\n    name: "timeoutCommand",\n    code: `\n    $channelSendMessage[$timeoutData[channelID];Hello, <@$timeoutData[authorID]>!]\n    `\n});\n')))}p.isMDXComponent=!0}}]);