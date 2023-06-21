"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[46061],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,b=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"Unabbreviate",description:"Just a function to shorten numbers ",authors:{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},i=void 0,c={permalink:"/wikis/posts/unabbreviate-lyc9id",source:"@site/forums/posts/unabbreviate-lyc9id.md",title:"Unabbreviate",description:"Just a function to shorten numbers ",date:"2023-06-21T09:40:47.000Z",formattedDate:"June 21, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"}],hasTruncateMarker:!1,authors:[{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png",imageURL:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"}],frontMatter:{title:"Unabbreviate",description:"Just a function to shorten numbers ",authors:{name:"@Artz_",title:"Member",url:"https://discord.com/users/1079517122822152272",image_url:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png",imageURL:"https://cdn.discordapp.com/avatars/1079517122822152272/d9d4fe8b7bf6e572e53f04296863dcc2.png"},tags:["v6","aoi.js"],hide_table_of_contents:!1,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Translate",permalink:"/wikis/posts/translate-qalbzj"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unabbreviate numbers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.functionManager.createFunction({\nname: '$unabbreviate',\ntype: 'djs',\ncode: async d => {\nconst data = d.util.aoiFunc(d);\nconst [number] = data.inside.splits;\nconst u = require('util-stunks')\nconst code = u.unabbreviate(number)\ndata.result = code\nreturn {\ncode: d.util.setCode(data)\n}\n}\n})\n")))}d.isMDXComponent=!0}}]);