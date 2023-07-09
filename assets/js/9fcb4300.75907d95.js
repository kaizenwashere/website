"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66261],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=s(n),u=r,g=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28736:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},i=void 0,l={unversionedId:"guides/Application Commands/interactioncommands",id:"version-6.3.0/guides/Application Commands/interactioncommands",title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",source:"@site/versioned_docs/version-6.3.0/guides/Application Commands/1introduction.md",sourceDirName:"guides/Application Commands",slug:"/guides/Application Commands/interactioncommands",permalink:"/docs/guides/Application Commands/interactioncommands",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1688900921,formattedLastUpdatedAt:"Jul 9, 2023",frontMatter:{title:"Interaction Commands",description:"This guide will be covering the basics about Slash Commands and their functionality. As well as everything else you might need to know.",id:"interactioncommands"},sidebar:"docs",previous:{title:"Setup",permalink:"/docs/guides/setup"},next:{title:"Message Commands",permalink:"/docs/guides/Application Commands/interaction-messagecommands"}},p={},s=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Introduction",id:"introduction",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Inviting your bot with correct permissions",id:"inviting-your-bot-with-correct-permissions",level:3},{value:"Important",id:"important",level:2},{value:"Creating Application Commands",id:"creating-application-commands",level:2},{value:"Application Types",id:"application-types",level:4},{value:"Examples of creating Application Commands",id:"examples-of-creating-application-commands",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"Application Command Option Type",id:"application-command-option-type",level:2},{value:"Interaction Functions",id:"interaction-functions",level:2}],m={toc:s},d="wrapper";function c(t){let{components:e,...n}=t;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#introduction"},"Introduction"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#getting-started"},"Getting Started")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#inviting-your-bot-with-correct-permissions"},"Inviting your bot with correct permissions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/topics/gateway#list-of-intents"},"Discord Developer Portal - Documentation"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#important"},"Important"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#creating-application-commands"},"Creating Application Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#application-types"},"Application Types"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#examples-of-creating-application-commands"},"Multiple Examples of creating Application Commands"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#using-application-commands"},"Using Application Commands")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#autocompleterespond-functions--examples"},"Auto Complete Respond"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#application-command-option-type"},"Application Command Option Type")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"},"Discord Developer Portal - Documentation"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#interaction-functions"},"Interaction Functions")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Slash Commands make it much easier for us to use our favourite bots on Discord. All you need to do is type ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," followed by the command you want to use, and your favourite bot will do the rest."),(0,r.kt)("p",null,"Slash Commands make it simpler for users to discover what a bot can do, and they can also find new features as they are added. Validation, error states, and a user-friendly interface guide users through the commands, so they can quickly get the results they need without confusion or frustration. Plus, they allow users to keep the mental model of how they think about the bot separate from how it actually works, which makes it easier for everyone to understand and use the bot."),(0,r.kt)("p",null,"Using Slash Commands offers a few benefits, like the ability to quickly and easily access the features of a bot, a user-friendly interface to guide users through commands, and the ability to separate the user's mental model from the workings of the bot. All of this makes it simpler for users to use the bot, so they can get the most out of it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062518328268169306/image_4.png",alt:"slash"})),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"inviting-your-bot-with-correct-permissions"},"Inviting your bot with correct permissions"),(0,r.kt)("p",null,"In order to use Application Commands, your bot requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"application.commands")," scope which can be found on\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications/"},"Discord Developer Portal"),". You don't have to kick your bot or\nanything, simply reinvite it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1061712111052521493/1062539303386873929/image_5.png?width=1200&height=447",alt:"scope"})),(0,r.kt)("h2",{id:"important"},"Important"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Due to Discord's Limitation you can only have up to ",(0,r.kt)("strong",{parentName:"li"},"50 slash commands")," in your bot / per guild."),(0,r.kt)("li",{parentName:"ul"},"Two Application commands can ",(0,r.kt)("strong",{parentName:"li"},"not have the same name")," in the same guild."),(0,r.kt)("li",{parentName:"ul"},"Application command names can ",(0,r.kt)("strong",{parentName:"li"},"not contain special symbols")," and must be shorter than ",(0,r.kt)("strong",{parentName:"li"},"32 characters"),"."),(0,r.kt)("li",{parentName:"ul"},"You require ",(0,r.kt)("inlineCode",{parentName:"li"},'events: ["onMessage", "onInteractionCreate"]')," in your main file.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1061712111052521493/1062559509601591427/image_6.png",alt:"slash-example"})),(0,r.kt)("h2",{id:"creating-application-commands"},"Creating Application Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID/global"),(0,r.kt)("td",{parentName:"tr",align:null},"string, integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of application command, either for every guild (global) or for one specific guild (specific guildID)."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string, number"),(0,r.kt)("td",{parentName:"tr",align:null},"The actual slash command name that will be visible to the user."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string, number"),(0,r.kt)("td",{parentName:"tr",align:null},"The slash command description that will be visible to the user."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultPermission"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"If the application command should syncronisate to the default permissions."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The application command type (explained below)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options?"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#examples-of-creating-application-commands"},"Slash commands options"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,r.kt)("h4",{id:"application-types"},"Application Types"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"message")," \u2014 Creates an Application Command that can be executed on a message. (",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#message-commands"},"documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an Application Command as slash command. (",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands"},"documentation"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an Application Command that can be executed on a user. (",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/developers/docs/interactions/application-commands#user-commands"},"documentation"),")"))),(0,r.kt)("h3",{id:"examples-of-creating-application-commands"},"Examples of creating Application Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[guildID/global;example;slash command description!;true;slash]`\n});\n/* Will create a slash commands without any user input, you can choose between global/guildID to create a command globally or only for a specific guild.\nExample created by dodoGames#7509. */\n')),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Interaction Commands are an incredibly useful tool for developing interactive bots. They can be used to create robust\ninteractions with users, and make it easier to manage commands and features. We hope this guide has been helpful in\nlearning how to use Interaction Commands and the basics of how they work."),(0,r.kt)("h2",{id:"application-command-option-type"},(0,r.kt)("a",{parentName:"h2",href:"https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type"},"Application Command Option Type")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"NOTE"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SUB_COMMAND_GROUP"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"Any Integer between -2^53 and 2^53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USER"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CHANNEL"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"Includes all channel types + categories")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ROLE"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MENTIONABLE"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"Includes users and roles")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NUMBER"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"Any double between -2^53 and 2^53")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ATTACHMENT"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://discord.com/developers/docs/resources/channel#attachment-object"},"attachment")," object")))),(0,r.kt)("h2",{id:"interaction-functions"},"Interaction Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/createApplicationCommand"},"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message) (optional);options (optional)]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionReply"},"$interactionReply[message;embeds?;components?;files?;allowedMentions?;ephemeral(true/false)?]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionDefer"},"$interactionDefer[ephemeral]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionDeferUpdate"},"$interactionDeferUpdate[ephemeral]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionDelete"},"$interactionDelete"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionEdit"},"$interactionEdit[content?;embeds?;components?;files?;allowedMentions]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionFollowUp"},"$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/interactionUpdate"},"$interactionUpdate[content?;embeds?;components?;files?;allowedMentions]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/event-related/slashOption"},"$slashOption[option]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/deleteApplicationCommand"},"$deleteApplicationCommand[guildID/global;id]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/modifyApplicationCommand"},"$modifyApplicationCommand[guildID/global;commandID;name;description;type;options (optional);defaultPermission(optional)]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/removeApplicationCommandPermissions"},"$removeApplicationCommandPermissions[guildID/global (optional : global as default);id;roruids]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/misc-related/getApplicationCommandOptions"},"$getApplicationCommandOptions[name;guildID/global (optional : global as default)]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/misc-related/getApplicationCommandID"},"$getApplicationCommandID[name;guildID/global (optional : global as default)]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/autoCompleteRespond"},"$autoCompleteRespond[OptionName;OptionReply;...]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/functions/interaction-related/isAutoComplete"},"$isAutoComplete")))))}c.isMDXComponent=!0}}]);