"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=i(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"Parser",description:"This guide explains how to properly use embed parsers and component parsers. Including basics and examples.",id:"parser"},o=void 0,s={unversionedId:"guides/parser",id:"version-6.2.6/guides/parser",title:"Parser",description:"This guide explains how to properly use embed parsers and component parsers. Including basics and examples.",source:"@site/versioned_docs/version-6.2.6/guides/parser.md",sourceDirName:"guides",slug:"/guides/parser",permalink:"/docs/guides/parser",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686794042,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"Parser",description:"This guide explains how to properly use embed parsers and component parsers. Including basics and examples.",id:"parser"},sidebar:"docs",previous:{title:"Permissions & Intents",permalink:"/docs/guides/permissionsandintents"},next:{title:"$arrayAt",permalink:"/docs/functions/array-related/arrayAt"}},p={},i=[{value:"This guide covers everything you need to know about embed parsers, component parsers, including basics and examples.",id:"this-guide-covers-everything-you-need-to-know-about-embed-parsers-component-parsers-including-basics-and-examples",level:4},{value:"Table of Content",id:"table-of-content",level:3},{value:"Embed Parser",id:"embed-parser",level:2},{value:"Embed Parser Functions",id:"embed-parser-functions",level:3},{value:"Components Parser",id:"components-parser",level:2},{value:"Button Parser",id:"button-parser",level:3},{value:"Select Menu Parser",id:"select-menu-parser",level:3},{value:"Interaction Modal Parser",id:"interaction-modal-parser",level:3},{value:"Parsers Examples",id:"parsers-examples",level:2},{value:"Embed Parser",id:"embed-parser-1",level:3},{value:"Components Parser",id:"components-parser-1",level:3},{value:"Button Parser",id:"button-parser-1",level:4},{value:"Select Menu Parser",id:"select-menu-parser-1",level:4},{value:"Interaction Modal Parser",id:"interaction-modal-parser-1",level:4}],m={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h4",{id:"this-guide-covers-everything-you-need-to-know-about-embed-parsers-component-parsers-including-basics-and-examples"},"This guide covers everything you need to know about embed parsers, component parsers, including basics and examples."),(0,r.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#embed-parser"},"Embed Parser")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#embed-parser-functions"},"Embeds"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#components-parser"},"Components Parser")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#button-parser"},"Button Parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#select-menu-parser"},"Select Menu Parser"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#interaction-modal-parser"},"Interaction Modal Parser"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#parsers-examples"},"Examples")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#embed-parser-1"},"Embed Parser Examples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#components-parser-1"},"Component Parser Examples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"#interaction-modal-parser-1"},"Interaction Modal Parser Example")))))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"embed-parser"},"Embed Parser"),(0,r.kt)("p",null,"Embed Parser are quite easy to use once you know how, this section will be covering the basics about embed parsers. You\nrequire ",(0,r.kt)("inlineCode",{parentName:"p"},"{newEmbed:{...}}")," every time you want to use embed parsers."),(0,r.kt)("h3",{id:"embed-parser-functions"},"Embed Parser Functions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{title:text}\n{description:text}\n{color:...}\n{footer:text:icon?}\n{image:URL}\n{thumbnail:URL}\n{author:name:icon?}\n{authorURL:URL}\n{field:title:value:inline? (true / false)}\n{timestamp:ms?}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"components-parser"},"Components Parser"),(0,r.kt)("p",null,"For every component parser is one thing always the same, ",(0,r.kt)("inlineCode",{parentName:"p"},"{actionRow:{...}}"),". We use that to declare the arguments\ninside of it as components."),(0,r.kt)("h3",{id:"button-parser"},"Button Parser"),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{button:label:style:customID:disabled? (true / false):emoji?}\n")),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("h3",null," Button Types ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Color"),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"blurple"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:primary:customID:false}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secondary"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"grey"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:secondary:customID:false}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Success"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"green"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:success:customID:false}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Danger"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"red"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:danger:customID:false}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Link"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"grey, navigates to a URL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:link:https\\\\:discord.gg:false}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emoji"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"primary button with emoji"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{button:Example Button!:primary:customID:false:emojiName,emojiID}")))))),(0,r.kt)("h3",{id:"select-menu-parser"},"Select Menu Parser"),(0,r.kt)("p",null,"Select Menu Parser Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{selectMenu:customID:placeholder:minValue:maxValue:default(true / false):...options}\n\n{selectMenuOptions:optionName:customID:optionDescription:default? (true / false):emoji?}\n")),(0,r.kt)("h3",{id:"interaction-modal-parser"},"Interaction Modal Parser"),(0,r.kt)("p",null,"Interaction Modal Parser Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{textInput:label:style:customID:required? (true / false):placeholder?:minLength?:maxLength?:defaultValue?}\n")),(0,r.kt)("h2",{id:"parsers-examples"},"Parsers Examples"),(0,r.kt)("p",null,"Below are simple examples of each parser and how to use them."),(0,r.kt)("h3",{id:"embed-parser-1"},"Embed Parser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Embed with title, description, footer, author / author icon and color.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{newEmbed:{author:Aoi.js is great:https\\\\://cdn.discordapp.com/icons/773352845738115102/f6b0d1a62a83397976ea441c5377e6ad.png?size=128}{title:Awesome Example!}{description:I love embed parsers!}{footer:Example #1}{color:Blue}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083396341700509806/FaxNjvTgSgAAAABJRU5ErkJggg.png",alt:"p6"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Embed with title, footer, image and field.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{newEmbed:{title:Another Awesome Example !}{image:https\\\\://cdn.discordapp.com/icons/773352845738115102/f6b0d1a62a83397976ea441c5377e6ad.png?size=128}{field:This is a field title!:And a field description which is not inline!:false}{footer:Example #2}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083396990748082186/BfoyHlnHsnAAAAABJRU5ErkJggg.png",alt:"p7"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"components-parser-1"},"Components Parser"),(0,r.kt)("h4",{id:"button-parser-1"},"Button Parser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Two buttons each one in a different row.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{actionRow:{button:Button:secondary:button1}}{actionRow:{button:Button:primary:button2}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083392358432907314/dvL1tTWTKr5XAtObQXoDKdAaFBABW0qNRQuS4MfqY3BqCVX3p6DhpdDniKRPAARB6AUtoahKIxkgL6UUCUBSgTlUokGgAJCQlndtfW7v8D2oqgaR3Vc5kAAAAASUVORK5CYII.png",alt:"p1"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Three buttons, one with emoji.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{actionRow:{button:Button:primary:button1:false}{button:Button:primary:button2:false}{button:Button:danger:button3:false:\ud83d\udc4b}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083392751682461726/bib8jCUT87kAAAAASUVORK5CYII.png",alt:"p2"})),(0,r.kt)("h4",{id:"select-menu-parser-1"},"Select Menu Parser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Single-Select Menu with two options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{actionRow:{selectMenu:customID:Placeholder:1:1:false:{selectMenuOptions:Option1:1:OptionDescription1:false:\ud83d\udc4b}{selectMenuOptions:Option2:2:OptionDescription2:false}}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083394531761852487/BjEAAAAASUVORK5CYII.png",alt:"p3"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multi-Select Menu with three options and and a maximum of 2 selectable options")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{actionRow:{selectMenu:customID:Placeholder:1:2:false:{selectMenuOptions:Option1:1:OptionDescription1:false:\ud83d\udc4b}{selectMenuOptions:Option2:2:OptionDescription2:false}{selectMenuOptions:Option3:3:OptionDescription3:false}}}\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/1082168708866244648/1083395398644801576/NldoS3qUfRiJnLxWBiKYhLE9RBYxux7SGFaEABShAAQrsSQFtFTDihoG4B4jFYjcuV2vm3z2kNvPDl9SSAAAAAElFTkSuQmCC.png",alt:"p4"})),(0,r.kt)("h4",{id:"interaction-modal-parser-1"},"Interaction Modal Parser"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modal with two fields one being normal sized and the other being bigger.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"{actionRow:{textInput:ExampleTitle1:1:customID1:true}}{actionRow:{textInput:ExampleTitle2:2:customID2:false}}\n")))}u.isMDXComponent=!0}}]);