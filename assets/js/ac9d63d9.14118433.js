"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[25168],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),p=r,g=c["".concat(d,".").concat(p)]||c[p]||m[p]||l;return a?n.createElement(g,i(i({ref:t},u),{},{components:a})):n.createElement(g,i({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5058:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",id:"getAuditLogs"},i=void 0,o={unversionedId:"functions/info-related/getAuditLogs",id:"version-6.2.6/functions/info-related/getAuditLogs",title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",source:"@site/versioned_docs/version-6.2.6/functions/info-related/getAuditLogs.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getAuditLogs",permalink:"/docs/functions/info-related/getAuditLogs",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687340447,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$getAuditLogs",description:"$getAuditLogs will retrieve guild audit logs according to the given arguments.",id:"getAuditLogs"},sidebar:"docs",previous:{title:"$getAttachment",permalink:"/docs/functions/info-related/getAttachment"},next:{title:"$getBanReason",permalink:"/docs/functions/info-related/getBanReason"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$getAuditLogs")," will retrieve guild audit logs according to the given arguments."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$getAuditLogs[guildID;userID?;limit?;action?;format?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"guildID"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The ID of a specific guild."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"userID?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The user who executed the action stated in audit logs."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"limit?"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum of audit logs it will return."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action?"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The action that was executed."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"format?"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The format to return the audit logs in."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Format"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.username}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the username of the user who excuted the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.mention}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will mention the user who executed the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the user ID of the user who executed the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{executor.tag}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the discriminator of the user who executed the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{target.id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the ID of the user who was the target of the action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{action}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the action itself")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"{id}"),(0,r.kt)("td",{parentName:"tr",align:null},"Will return the action/auditlog ID")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("h3",null," AuditLog Events ")),"| EVENT                                   | VALUE | DESCRIPTION                                               |       OBJECT CHANGED       | | --------------------------------------- | :---: | --------------------------------------------------------- | :------------------------: | | GuildUpdate                             |   1   | Server settings were updated                              |           Guild            | | ChannelCreate                           |  10   | Channel was created                                       |          Channel           | | ChannelUpdate                           |  11   | Channel settings were updated                             |          Channel           | | ChannelDelete                           |  12   | Channel was deleted                                       |          Channel           | | ChannelOverwriteCreate                  |  13   | Permission overwrite was added to a channel               |     Channel Overwrite      | | ChannelOverwriteUpdate                  |  14   | Permission overwrite was updated for a channel            |     Channel Overwrite      | | ChannelOverwriteDelete                  |  15   | Permission overwrite was deleted from a channel           |     Channel Overwrite      | | MemberKick                              |  20   | Member was removed from server                            |                            | | MemberPrune                             |  21   | Members were pruned from server                           |                            | | MemberBanAdd                            |  22   | Member was banned from server                             |                            | | MemberBanRemove                         |  23   | Server ban was lifted for a member                        |                            | | MemberUpdate                            |  24   | Member was updated in server                              |           Member           | | MemberRoleUpdate                        |  25   | Member was added or removed from a role                   |        Partial Role        | | MemberMove                              |  26   | Member was moved to a different voice channel             |                            | | MemberDisconnect                        |  27   | Member was disconnected from a voice channel              |                            | | BotAdd                                  |  28   | Bot user was added to server                              |                            | | RoleCreate                              |  30   | Role was created                                          |            Role            | | RoleUpdate                              |  31   | Role was edited                                           |            Role            | | RoleDelete                              |  32   | Role was deleted                                          |            Role            | | InviteCreate                            |  40   | Server invite was created                                 | Invite and Invite Metadata | | InviteUpdate                            |  41   | Server invite was updated                                 | Invite and Invite Metadata | | InviteDelete                            |  42   | Server invite was deleted                                 | Invite and Invite Metadata | | WebhookCreate                           |  50   | Webhook was created                                       |          Webhook           | | WebhookUpdate                           |  51   | Webhook properties or channel were updated                |          Webhook           | | WebhookDelete                           |  52   | Webhook was deleted                                       |          Webhook           | | EmojiCreate                             |  60   | Emoji was created                                         |           Emoji            | | EmojiUpdate                             |  61   | Emoji name was updated                                    |           Emoji            | | EmojiDelete                             |  62   | Emoji was deleted                                         |           Emoji            | | MessageDelete                           |  72   | Single message was deleted                                |                            | | MessageBulkDelete                       |  73   | Multiple messages were deleted                            |                            | | MessagePin                              |  74   | Message was pinned to a channel                           |                            | | MessageUnPin                            |  75   | Message was unpinned from a channel                       |                            | | IntegrationCreate                       |  80   | App was added to server                                   |        Integration         | | IntegrationUpdate                       |  81   | App was updated (as an example, its scopes were updated)  |        Integration         | | IntegrationDelete                       |  82   | App was removed from server                               |        Integration         | | StageInstanceCreate                     |  83   | Stage instance was created (stage channel becomes live)   |       Stage Instance       | | StageInstanceUpdate                     |  84   | Stage instance details were updated                       |       Stage Instance       | | StageInstanceDelete                     |  85   | Stage instance was deleted (stage channel no longer live) |       Stage Instance       | | StickerCreate                           |  90   | Sticker was created                                       |          Sticker           | | StickerUpdate                           |  91   | Sticker details were updated                              |          Sticker           | | StickerDelete                           |  92   | Sticker was deleted                                       |          Sticker           | | GuildScheduledEventCreate               |  100  | Event was created                                         |   Guild Scheduled Event    | | GuildScheduledEventUpdate               |  101  | Event was updated                                         |   Guild Scheduled Event    | | GuildScheduledEventDelete               |  102  | Event was cancelled                                       |   Guild Scheduled Event    | | ThreadCreate                            |  110  | Thread was created in a channel                           |           Thread           | | ThreadUpdate                            |  111  | Thread was updated                                        |           Thread           | | ThreadDelete                            |  112  | Thread was deleted                                        |           Thread           | | ApplicationCommandPermissionUpdate      |  121  | Permissions were updated for a command                    |     Command Permission     | | AutoModerationRuleCreate                |  140  | Auto Moderation rule was created                          |    Auto Moderation Rule    | | AutoModerationRuleUpdate                |  141  | Auto Moderation rule was updated                          |    Auto Moderation Rule    | | AutoModerationRuleDelete                |  142  | Auto Moderation rule was deleted                          |    Auto Moderation Rule    | | AutoModerationBlockMessage              |  143  | Message was blocked by Auto Moderation                    |                            | | AutoModerationFlagToChannel             |  144  | Message was flagged by Auto Moderation                    |                            | | AutoModerationUserCommunicationDisabled |  145  | Member was timed out by Auto Moderation                   |                            |"),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return your latest bans (which are logged in audit logs):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'getAuditLogs',\n    code: `\n  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]\n  `\n});\n")))}m.isMDXComponent=!0}}]);