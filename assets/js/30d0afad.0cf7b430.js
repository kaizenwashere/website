"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60167],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),l=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(s.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"$mentionedChannelsCount",description:"Returns amount of mentioned channels in the command's message."},i=void 0,c={unversionedId:"functions/mentionedchannelscount",id:"version-5.5.5/functions/mentionedchannelscount",title:"$mentionedChannelsCount",description:"Returns amount of mentioned channels in the command's message.",source:"@site/versioned_docs/version-5.5.5/functions/mentionedchannelscount.md",sourceDirName:"functions",slug:"/functions/mentionedchannelscount",permalink:"/docs/5.5.5/functions/mentionedchannelscount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1688900921,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"$mentionedChannelsCount",description:"Returns amount of mentioned channels in the command's message."},sidebar:"docs",previous:{title:"$mentionedChannels",permalink:"/docs/5.5.5/functions/mentionedchannels"},next:{title:"$mentionedRoles",permalink:"/docs/5.5.5/functions/mentionedroles"}},s={},l=[{value:"Example Command:",id:"example-command",level:4}],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can check how many channel mentions are in the command's message."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedChannelsCount")),(0,r.kt)("h4",{id:"example-command"},"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "channelmentions",\ncode: `\nYou have $mentionedChannelsCount channel mentions in your message.`\n});\n')))}p.isMDXComponent=!0}}]);