"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"},tags:["aoi.js","Other","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},s=void 0,o={permalink:"/wikis/posts/428188716641812481/nw36qo",source:"@site/forums/posts/428188716641812481/nw36qo.md",title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",date:"2023-07-09T11:08:41.000Z",formattedDate:"July 9, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"}],frontMatter:{title:"Transcript Custom Function",description:"$transcript custom function which saves messages of a channel and formats them to a .html file.",authors:{name:"@faf4a",title:"Member - 428188716641812481",userid:"428188716641812481",url:"https://discord.com/users/428188716641812481",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/428188716641812481.png"},tags:["aoi.js","Other","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"fetchInvite function",permalink:"/wikis/posts/428188716641812481/6ftrh8"},nextItem:{title:"search function",permalink:"/wikis/posts/428188716641812481/wvkxjp"}},l={authorsImageUrls:[void 0]},c=[{value:"Usage",id:"usage",level:2},{value:"Preview:",id:"preview",level:2}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$transcript[channel?;loggingChannel?]")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"channel ( optional ) -> the channel the transcript will be created of"),(0,r.kt)("li",{parentName:"ul"},"loggingChannel ( optional ) -> the channel the transcript will be sent to")),(0,r.kt)("p",null,"You need to install a separate package, called ",(0,r.kt)("inlineCode",{parentName:"p"},"discord-html-transcripts"),"."),(0,r.kt)("p",null,"Simple execute in your shell/console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"npm i discord-html-transcripts@latest\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You would put the following code in your main file, or in most cases your ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot.functionManager.createFunction({\n  name: "$transcript",\n  type: "djs",\n  code: async d => {\n    const discordTranscripts = require("discord-html-transcripts");\n    const data = d.util.aoiFunc(d);\n    const [channel = d.message.channel.id, logchannel = d.message.channel.id] = data.inside.splits;\n    let channelid = await d.util.getChannel(d, channel);\n    let loggingid = await d.util.getChannel(d, logchannel);\n    const attachment = await discordTranscripts.createTranscript(channelid, {\n      filename: "transcript.html",\n      saveImages: true,\n      poweredBy: false,\n    });\n\n    const f = await loggingid.send({\n      files: [attachment],\n    });\n\n    data.result = f;\n    return {\n      code: d.util.setCode(data),\n    };\n  }\n});\n')),(0,r.kt)("p",null,"After that execute the function and let the magic happen! (can take longer in large channels / many messages)"),(0,r.kt)("h2",{id:"preview"},"Preview:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/Faf4a/website/assets/87046111/3e97944f-96e9-41df-9e75-ac3755b1a1aa",alt:"preview"})))}m.isMDXComponent=!0}}]);