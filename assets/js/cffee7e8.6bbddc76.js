"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[3404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>N});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(a),k=l,N=s["".concat(o,".").concat(k)]||s[k]||u[k]||r;return a?n.createElement(N,i(i({ref:t},p),{},{components:a})):n.createElement(N,i({ref:t},p))}));function N(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m[s]="string"==typeof e?e:l,i[1]=m;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},90651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>d});var n=a(87462),l=(a(67294),a(3905));const r={title:"Client Events",description:"This guide will be covering everything you need to know about events and their usage.",id:"events"},i=void 0,m={unversionedId:"guides/events",id:"version-6.2.6/guides/events",title:"Client Events",description:"This guide will be covering everything you need to know about events and their usage.",source:"@site/versioned_docs/version-6.2.6/guides/2events.md",sourceDirName:"guides",slug:"/guides/events",permalink:"/docs/guides/events",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348568,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"Client Events",description:"This guide will be covering everything you need to know about events and their usage.",id:"events"},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/guides/setup"},next:{title:"Command Handler",permalink:"/docs/guides/commandhandler"}},o={},d=[{value:"Using Events",id:"using-events",level:2},{value:"Table of Content",id:"table-of-content",level:3},{value:"Types of Events",id:"types-of-events",level:2},{value:"Message Based-Events",id:"message-based-events",level:3},{value:"Guild Based-Events",id:"guild-based-events",level:3},{value:"Guild Members Based-Events",id:"guild-members-based-events",level:3},{value:"User Based-Events",id:"user-based-events",level:3},{value:"Custom Events",id:"custom-events",level:3},{value:"Example Usage of Events",id:"example-usage-of-events",level:2},{value:"Example Usage of Events in Handler",id:"example-usage-of-events-in-handler",level:2}],p={toc:d},s="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"using-events"},"Using Events"),(0,l.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#table-of-content"},"Understanding Events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#types-of-events"},"Types of Events")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#message-based-Events"},"Message Based-Events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#guild-based-events"},"Guild Based-Events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#guild-members-based-events"},"Guild Members Based-Events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#user-based-events"},"User Based-Events"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#custom-events"},"Custom Events"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#example-usage-of-events"},"Example Usage"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"#example-usage-of-events-in-handler"},"Example Usage of Events in Command Handlers")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"aoi.js"),' has various event listeners, known as "events", that cater to the majority of events provided by the Discord\nAPI.'),(0,l.kt)("p",null,"Each of them has its own usage and command type for executing specific tasks (for example, for logging purposes)."),(0,l.kt)("p",null,"The events are not mandatory, apart from ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"onMessage"))," (which is required for the bot to read and send messages), but\nif you wish to utilise them, they must be included in your main file, in order for the bot to listen for those events.\nThis is necessary in order to make use of the different command types."),(0,l.kt)("p",null,"It's worth bearing in mind that in order to utilise certain events, you'll need to activate your intents on the Discord\nDeveloper Portal."),(0,l.kt)("h2",{id:"types-of-events"},"Types of Events"),(0,l.kt)("h3",{id:"message-based-events"},"Message Based-Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMessage")," ","\u2192"," (requires ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#caveats"},"message content intent")),") Emitted whenever a message is sent."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMessageDelete")," ","\u2192"," Emitted whenever a message is deleted.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"messageDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMessageUpdate")," ","\u2192"," Emitted whenever a message is updated (for example, embed or content change).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"messageUpdate")," ","\u2192"," Command Handler type."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldMessage")," ","\u2192"," Retrieves the old message from the client's cache. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$message")," ","\u2192"," Retrieves the new message. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMessageDeleteBulk")," ","\u2192"," Emitted whenever messages are deleted in bulk.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"messageDeleteBulk")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onReactionAdd")," ","\u2192"," Emitted whenever a reaction is added to a message.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reactionAdd")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onReactionRemove")," ","\u2192"," Emitted whenever a reaction is removed from a message.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reactionRemove")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onReactionRemoveAll")," ","\u2192"," Emitted whenever all reactions are removed from a message.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reactionRemoveAll")," ","\u2192"," Command Handler type.")))),(0,l.kt)("h3",{id:"guild-based-events"},"Guild Based-Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onInviteCreate")," ","\u2192"," Emitted whenever a guild invite is created.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"inviteCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onInviteDelete")," ","\u2192"," Emitted whenever a guild invite is deleted.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"inviteDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGuildJoin")," ","\u2192"," Emitted whenever the client joins a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildJoin")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGuildLeave")," ","\u2192"," Emitted whenever the client leaves a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildLeave")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGuildUpdate")," ","\u2192"," Emitted whenever a guild gets updated (for example, name change).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldGuild[option?]")," ","\u2192"," Retrieves data of the old guild. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newGuild[option?]")," ","\u2192"," Retrieves data of the new/updated guild. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onGuildUnavailable")," ","\u2192"," Emitted whenever a guild becomes unavailable, likely due to a server outage.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"guildUnavailable")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onRoleCreate")," ","\u2192"," Emitted whenever a role is created.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roleCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onRoleUpdate")," ","\u2192"," Emitted whenever a role gets updated (for example, color change).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roleUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldRole[option?]")," ","\u2192"," Retrieves data of the old role. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newRole[option?]")," ","\u2192"," Retrieves data of the new/updated role. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onRoleDelete")," ","\u2192"," Emitted whenever a role is deleted.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"roleDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChannelCreate")," ","\u2192"," Emitted whenever a channel is created.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChannelUpdate")," ","\u2192"," Emitted whenever a channel gets updated. (for example, topic change).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldChannel[option?]")," ","\u2192"," Retrieves data of the old channel. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newChannel[option?]")," ","\u2192"," Retrieves data of the new/updated channel. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChannelDelete")," ","\u2192"," Emitted whenever a channel is deleted.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onChannelPinsUpdate")," ","\u2192"," Emitted whenever the pins of a channel are updated.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"channelPinsUpdate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStageInstanceCreate")," ","\u2192"," Emitted whenever a stage instance is created.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stageInstanceCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStageInstanceUpdate")," ","\u2192"," Emitted whenever a stage instance gets updated.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stageInstanceUpdate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStageInstanceDelete")," ","\u2192"," Emitted whenever a stage instance is deleted.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stageInstanceDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onThreadCreate")," ","\u2192"," Emitted whenever a thread is created.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threadCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onThreadUpdate")," ","\u2192"," Emitted whenever a thread gets updated.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threadUpdate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onThreadDelete")," ","\u2192"," Emitted whenever a thread is deleted.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threadDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onThreadListSync")," ","\u2192"," Emitted whenever the client user gains access to a text or news channel that contains threads.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threadListSync")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onThreadMemberUpdate")," ","\u2192"," (requires ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#caveats"},"guild members intent")),") Emitted whenever the client user's thread member is updated.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threadMemberUpdate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onThreadMembersUpdate")," ","\u2192"," (requires ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#caveats"},"guild members intent")),") Emitted whenever members are added or removed from a thread.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"threadMembersUpdate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEmojiCreate")," ","\u2192"," Emitted whenever a custom emoji is created in a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"emojiCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEmojiDelete")," ","\u2192"," Emitted whenever a custom emoji is deleted in a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"emojiDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onEmojiUpdate")," ","\u2192"," Emitted whenever a custom guild emoji is updated.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"emojiUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldEmoji[option?]")," ","\u2192"," Retrieves data of the old emoji. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newEmoji[option?]")," ","\u2192"," Retrieves data of the new emoji. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStickerCreate")," ","\u2192"," Emitted whenever a custom sticker is created in a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stickerCreate")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStickerDelete")," ","\u2192"," Emitted whenever a custom sticker gets deleted in a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stickerDelete")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onStickerUpdate")," ","\u2192"," Emitted whenever a custom sticker is updated in a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"stickerUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldEmoji[option?]")," ","\u2192"," Retrieves data of the old sticker. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newEmoji[option?]")," ","\u2192"," Retrieves data of the new sticker. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onBanAdd")," ","\u2192"," Emitted whenever a member is banned from a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"banAdd")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onBanRemove")," ","\u2192"," Emitted whenever a member is unbanned from a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"banRemove")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onVoiceStateUpdate")," ","\u2192"," Emitted whenever a user changes voice state (for example, joins/leaves a channel, mutes/unmutes).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"voiceStateUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldState[option?]")," ","\u2192"," Retrieves data of the old voice state. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newState[option?]")," ","\u2192"," Retrieves data of the new voice state. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onWebhookUpdate")," ","\u2192"," Emitted whenever a channel has its webhooks changed.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"webhookUpdate")," ","\u2192"," Command Handler type.")))),(0,l.kt)("h3",{id:"guild-members-based-events"},"Guild Members Based-Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onJoin")," ","\u2192"," Emitted whenever a user joins a guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"join")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onLeave")," ","\u2192"," Emitted whenever a member leaves a guild, or is kicked.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"leave")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMemberUpdate")," ","\u2192"," (requires ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#caveats"},"guild members intent")),") Emitted whenever a guild member changes (for example, new role, removed role, nickname).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"memberUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldMember[option?]")," ","\u2192"," Retrieves data of the old member. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newMember[option?]")," ","\u2192"," Retrieves data of the new/updated member. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMemberAvailable")," ","\u2192"," (requires ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#caveats"},"guild members intent")),") Emitted whenever a member becomes available in a large guild.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"memberAvailable")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onMembersChunk")," ","\u2192"," (requires ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#caveats"},"guild members intent")),") Emitted whenever a chunk of guild members is received (all members come from the same guild).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"membersChunk")," ","\u2192"," Command Handler type.")))),(0,l.kt)("h3",{id:"user-based-events"},"User Based-Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onPresenceUpdate")," ","\u2192"," Emitted whenever a guild member's presence changes, or they change one of their details.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"presenceUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldPresence[option]")," ","\u2192"," Retrieves data of the old presence. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newPresence[option]")," ","\u2192"," Retrieves data of the new presence. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onTypingStart")," ","\u2192"," Emitted whenever a user starts typing in a channel.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"typingStart")," ","\u2192"," Command Handler type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onUserUpdate")," ","\u2192"," Emitted whenever a user's details (for example, username) are changed.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"userUpdate")," ","\u2192"," Command Handler type.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldUser[option]")," ","\u2192"," Retrieves data of the old user. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newUser[option]")," ","\u2192"," Retrieves data of the updated/new user. (if any)")))),(0,l.kt)("h3",{id:"custom-events"},"Custom Events"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onInteractionCreate")," ","\u2192"," Emitted whenever a Interaction is created."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onApplicationCmdPermsUpdate")," ","\u2192"," Emitted whenever a Application Command gets updated (for example, name).",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldApplicationCmd[option?]")," ","\u2192"," Retrieves data of the old application command."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newApplicationCmd[option?]")," ","\u2192"," Retrieves data of the updated application command."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onVariableCreate")," ","\u2192"," Emitted whenever a variable is created."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onVariableDelete")," ","\u2192"," Emitted whenever a variable gets deleted."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onVariableUpdate")," ","\u2192"," Emitted whenever a variable gets updated.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$oldVariable[opt;separator?]")," ","\u2192"," Retrieves the old data of the variable. (if any)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$newVariable[opt;separator?]")," ","\u2192"," Retrieves the new/updated data of the variable. (if any)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onShardDisconnect")," ","\u2192"," Emitted whenever the client's shard disconnects."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onShardError")," ","\u2192"," Emitted whenever a shard of the client returns an error."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onShardReady")," ","\u2192"," Emitted whenever a shard of the client is ready."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onShardReconnecting")," ","\u2192"," Emitted whenever a shard of the client is currently reconnecting."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"onShardResume")," ","\u2192"," Emitted whenever the shard resumed operations.")),(0,l.kt)("h2",{id:"example-usage-of-events"},"Example Usage of Events"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const { AoiClient } = require("aoi.js");\n\nconst bot = new AoiClient({\n    token: "DISCORD BOT TOKEN",\n    prefix: "DISCORD BOT PREFIX",\n    intents: ["Guilds", "GuildMessages", "MessageContent"],\n    events: ["onMessage", "onJoin", "onLeave", "onBanAdd", "onBanRemove"]\n    ...\n});\n')),(0,l.kt)("h2",{id:"example-usage-of-events-in-handler"},"Example Usage of Events in Handler"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = [{\n    name: "name",\n    type: "join",\n    channel: "channelID",\n    code: `code`\n}]\n')))}u.isMDXComponent=!0}}]);