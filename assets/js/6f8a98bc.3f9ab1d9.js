"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[32624],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=o,v=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return t?a.createElement(v,r(r({ref:n},u),{},{components:t})):a.createElement(v,r({ref:n},u))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=t[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48766:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),o=(t(67294),t(3905));const i={title:"@akarui/aoi.music"},r=void 0,s={unversionedId:"advanced-guides/aoimusic",id:"version-5.5.5/advanced-guides/aoimusic",title:"@akarui/aoi.music",description:"aoi.js has an extension named @akarui/aoi.music for music.",source:"@site/versioned_docs/version-5.5.5/advanced-guides/aoimusic.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/aoimusic",permalink:"/docs/advanced-guides/aoimusic",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"@akarui/aoi.music"},sidebar:"docs",previous:{title:"Command Handler",permalink:"/docs/guides/command-handler"},next:{title:"Custom Functions",permalink:"/docs/advanced-guides/custom-functions"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Setting up in aoi.js",id:"setting-up-in-aoijs",level:3},{value:"Using Voice class",id:"using-voice-class",level:2},{value:"Play",id:"play",level:3},{value:"Queue",id:"queue",level:3},{value:"onTrackStart event",id:"ontrackstart-event",level:3}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"aoi.js has an extension named ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"@akarui/aoi.music"))," for music."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"npm i @akarui/aoi.music\n")),(0,o.kt)("h3",{id:"setting-up-in-aoijs"},"Setting up in aoi.js"),(0,o.kt)("p",null,"After installing @akarui/aoi.music, to connect it with aoi.js, we are going to use aoi.js Voice Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Voice, LoadCommands, Bot } = require("aoi.js");\n\nconst bot = new Bot({\n  token: "DISCORD BOT TOKEN",\n  prefix: "DISCORD BOT PREFIX",\n  intents: ["guilds", "guildMessages", "guildVoiceStates"],\n});\n\nconst loader = new LoadCommands(bot);\n\nconst voice = new Voice(\n  bot,\n  {\n    cache: {\n      cacheType: "Memory",//Disk\n      enabled: true,\n      //directory : "music", only for Disk type\n    },\n    soundcloud: {\n      clientId : "SOUNDCLOUD CLIENT ID",\n      limitLikeTrack : 200 \n    },//optional\n  playerOptions: {\n    trackInfoInterval: 5000,\n  },//optional\n  },\n  true, //to enable pruneMusic \n);\n\nvoice.onTrackStart();\n\nloader.load(bot.cmd, "./Commands/commands/"); //bot cmds\nloader.load(voice.cmd, "./Commands/voice/"); //voice cmds\n')),(0,o.kt)("h2",{id:"using-voice-class"},"Using Voice class"),(0,o.kt)("p",null,"As we added Voice class in index.js, and a loader to voice folder,\nsetup for Voice class is complete. Let\u2019s create some voice related commands."),(0,o.kt)("h3",{id:"play"},"Play"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'//Commands/commands/play.js\nmodule.exports = {\n  name: "play youtube",\n  $if: "v4", //enabling pseudo $if\n  code: `\n    $let[msg;$playTrack[youtube;$message]]\n\n    $if[$hasPlayer==false]\n        $joinVc\n    $endif\n\n    $onlyif[($voiceId[$clientId]!=)&&($voiceId[$clientId]==$voiceId);you are not in the same voice channel]\n    $onlyif[$voiceId!=;join a voice channel before using play cmd]\n    `,\n};\n')),(0,o.kt)("h3",{id:"queue"},"Queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'//Commands/commands/queue.js\nmodule.exports = {\n  name: "queue",\n  code: `\n   $title[1;Queue]\n   $author[1;Requested By $usertag;$authorAvatar]\n   $description[1;$queue[$if[$message==;1;$message]]]\n   $footer[1;number of songs ->$queueLength]\n   $color[1;RANDOM]\n   $addTimestamp[1]\n    `,\n};\n')),(0,o.kt)("h3",{id:"ontrackstart-event"},"onTrackStart event"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'//Commands/voice/trackStart.js\nmodule.exports = {\n  name: "send when track starts", //optional\n  type : "trackStart",\n  channel : "$channelId",\n  code: `\n      $title[1;Now Playing...]\n      $description[1;$if[$musicEventData[info.description]==;description not available;$musicEventData[info.description]]]\n      $color[1;RANDOM]\n      $author[1;$musicEventData[info.title]]\n      $image[1;$musicEventData[info.thumbnail]]\n    `,\n};\n')))}d.isMDXComponent=!0}}]);