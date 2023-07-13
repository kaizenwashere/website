"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2807],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Server captcha verification",description:"A command to make a verification system.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},o=void 0,s={permalink:"/wikis/posts/715852000096419900/vr5jfn",source:"@site/forums/posts/715852000096419900/vr5jfn.md",title:"Server captcha verification",description:"A command to make a verification system.",date:"2023-07-13T00:01:21.000Z",formattedDate:"July 13, 2023",tags:[{label:"v6",permalink:"/wikis/tags/v-6"},{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"Other",permalink:"/wikis/tags/other"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"}],frontMatter:{title:"Server captcha verification",description:"A command to make a verification system.",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["v6","aoi.js","Other"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Colored and styled console logging",permalink:"/wikis/posts/715852000096419900/sof89f"},nextItem:{title:"reverseText",permalink:"/wikis/posts/715852000096419900/w2htzj"}},c={authorsImageUrls:[void 0]},l=[{value:"Requirement",id:"requirement",level:2}],u={toc:l},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requirement"},"Requirement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hash"},"npm i captcha-generator-alphanumeric\n")),(0,a.kt)("h1",{id:"code"},"code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"bot.command({\n  name: \"setVerifyRole\",\n  code:`\n$findRole[$message] is not verified role!\n$setGuildVar[verifyRole;$findRole[$message]]\n\n$onlyIf[$message[1]!=;Provide a role.]\n  \n$onlyIf[$hasPerms[$guildID;$authorID;manageroles];You don't have \\`MANAGE_ROLES\\` permission.]\n\n  `\n},{\n  name: \"verify\",\n  type: \"default\",\n  code:`\n  $setUserVar[captcha;$get[code]]\n\n  $let[code;$djsEval[( async() => {\n  const Captcha = require('captcha-generator-alphanumeric').default;\n\n  const { EmbedBuilder, AttachmentBuilder, ButtonBuilder, ActionRowBuilder } = require('discord.js')\n\n  let captcha = new Captcha();\n\n  const img = new AttachmentBuilder(captcha.PNGStream, { name: 'captcha.png'})\n\n  const button = new ButtonBuilder()\n  .setLabel('Verify')\n  .setCustomId('dmVerify')\n  .setStyle(3)\n\n  const row = new ActionRowBuilder()\n  .addComponents(button)\n\n  const embed = new EmbedBuilder()\n  .setDescription('**Verify the captcha below**')\n  .setImage('attachment://captcha.png')\n  .setFooter({text: '$guildID'})\n  .setAuthor({name: 'From server - $guildName', iconURL: '$guildIcon'})\n\n\n  await client.users.send('$authorID', { embeds: [embed], files: [img], components: [row]})\n  return captcha.value\n  })();true]]\n\n  $onlyIf[$roleExists[$getGuildVar[verifyRole;$guildID];$guildID]==true;The verify role is either invalid or not set yet.]\n  \n  `\n},{\n  name: \"dmVerify\",\n  type: \"interaction\",\n  prototype: 'button',\n  code:`\n  $setUserVar[attempt;3;$authorID;$get[guild]]\n  $interactionModal[Server Verification;verify;{actionRow:{textInput:Type the code here!:1:code:captcha code:yes: :5:7}}]\n\n  $let[guild;$getObjectProperty[embeds[0].footer.text]]\n  $createObject[$nonEscape[$fetch[message;$messageID]]]\n  `\n},{\n  name: \"verify\",\n  type: \"interaction\",\n  prototype: \"modal\",\n  code:`\n\n\n$giveRole[$get[guild];$authorID;$getGuildVar[verifyRole;$get[guild]];Verification]\n\n$interactionReply[VerificationSuccessful!]\n\n$onlyIf[$toUppercase[$textInputValue[code]]==$getUserVar[captcha;$authorID;$get[guild]];Invalid captcha provided\\nRemaining attempts: $getUserVar[attempt;$authorID;$get[guild]]{options:{ephemeral:true}}{extraOptions:{interaction:true}}]\n\n$setUserVar[attempt;$math[$getUserVar[attempt;$authorID;$get[guild]]-1];$authorID;$get[guild]]\n\n$onlyIf[$getUserVar[attempt;$authorID;$get[guild]]!=0;You have 0 attempts left\\nAgain use the verify command to solve captcha again{options:{ephemeral:true}}{extraOptions:{interaction:true}}]\n\n  $let[guild;$getObjectProperty[embeds[0].footer.text]]\n  $createObject[$nonEscape[$fetch[message;$messageID]]]\n  `\n})\n")),(0,a.kt)("p",null,"In index.js file, turn it to handler type if you need to."),(0,a.kt)("h1",{id:"usage"},"Usage"),(0,a.kt)("p",null,"No usage, Find it yourself.",(0,a.kt)("br",{parentName:"p"}),"\n","Anyways the If you find any problems try to solve yourself first before pinging me."),(0,a.kt)("h1",{id:"images"},"Images"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://media.discordapp.net/attachments/1118911532378640527/1128222014306533476/image0.jpg",alt:"image1"})))}p.isMDXComponent=!0}}]);