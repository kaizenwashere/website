"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[38533],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>k});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return t?n.createElement(k,o(o({ref:a},p),{},{components:t})):n.createElement(k,o({ref:a},p))}));function k(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56919:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=t(87462),i=(t(67294),t(3905));const r={title:"Introduction",description:"What is aoi.js extensions",slug:"/"},o="Extension Packages: @akarui/aoi.music and @akarui/aoi.panel",l={unversionedId:"introduction/introduction",id:"introduction/introduction",title:"Introduction",description:"What is aoi.js extensions",source:"@site/extensions/introduction/introduction.md",sourceDirName:"introduction",slug:"/",permalink:"/extensions/",draft:!1,tags:[],version:"current",frontMatter:{title:"Introduction",description:"What is aoi.js extensions",slug:"/"},sidebar:"docs",next:{title:"Introduction",permalink:"/extensions/aoi.music/aoimusic-introduction"}},s={},u=[{value:"@akarui/aoi.music",id:"akaruiaoimusic",level:2},{value:"Overview",id:"overview",level:3},{value:"Features",id:"features",level:3},{value:"Music Playback",id:"music-playback",level:4},{value:"Song Information",id:"song-information",level:4},{value:"User Interaction",id:"user-interaction",level:4},{value:"Event Handling",id:"event-handling",level:4},{value:"@akarui/aoi.parser",id:"akaruiaoiparser",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Features",id:"features-1",level:3},{value:"Embed Parser",id:"embed-parser",level:4},{value:"Component Parser",id:"component-parser",level:4},{value:"File Parser",id:"file-parser",level:4},{value:"Options Parser",id:"options-parser",level:4},{value:"@akarui/aoi.db",id:"akaruiaoidb",level:2},{value:"Overview",id:"overview-2",level:3},{value:"Features",id:"features-2",level:3},{value:"KeyValue",id:"keyvalue",level:4},{value:"WideColumn",id:"widecolumn",level:4},{value:"Remote",id:"remote",level:4},{value:"@akarui/aoi.panel",id:"akaruiaoipanel",level:2},{value:"Overview",id:"overview-3",level:3},{value:"Features",id:"features-3",level:3},{value:"Real-time Monitoring",id:"real-time-monitoring",level:4},{value:"Command Management",id:"command-management",level:4},{value:"Server Configuration",id:"server-configuration",level:4},{value:"Error Tracking",id:"error-tracking",level:4}],p={toc:u},c="wrapper";function d(e){let{components:a,...t}=e;return(0,i.kt)(c,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"extension-packages-akaruiaoimusic-and-akaruiaoipanel"},"Extension Packages: @akarui/aoi.music and @akarui/aoi.panel"),(0,i.kt)("p",null,"Table of Contents:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#akaruiaoimusic"},"@akarui/aoi.music")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#akaruiaoipanel"},"@akarui/aoi.panel"))),(0,i.kt)("h2",{id:"akaruiaoimusic"},"@akarui/aoi.music"),(0,i.kt)("p",null,"Package URL: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@akarui/aoi.music"},"npm")),(0,i.kt)("p",null,"Documentation: ",(0,i.kt)("a",{parentName:"p",href:"/extensions/aoi.music/aoimusic-introduction"},"aoi.music")),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"@akarui/aoi.music")," is an extension package designed for Discord bots. It provides a convenient and powerful solution to incorporate music functionality into your bot, allowing you to create a rich audio experience in your Discord server."),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("h4",{id:"music-playback"},"Music Playback"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Play music from various sources such as YouTube, SoundCloud, and direct URLs."),(0,i.kt)("li",{parentName:"ul"},"Control music playback with commands like play, pause, resume, and skip."),(0,i.kt)("li",{parentName:"ul"},"Adjust the volume level and manage other audio settings.")),(0,i.kt)("h4",{id:"song-information"},"Song Information"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Retrieve detailed information about the currently playing song, including title, artist, duration, and thumbnail.")),(0,i.kt)("h4",{id:"user-interaction"},"User Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Allow users to request and search for songs within your Discord server.")),(0,i.kt)("h4",{id:"event-handling"},"Event Handling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilize event handlers to perform custom actions based on music-related events, such as track ended or queue started.")),(0,i.kt)("h2",{id:"akaruiaoiparser"},"@akarui/aoi.parser"),(0,i.kt)("p",null,"Package URL: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@akarui/aoi.parser"},"npm")),(0,i.kt)("p",null,"Documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://aoi-parser.vercel.app/"},"aoi.parser")),(0,i.kt)("h3",{id:"overview-1"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"@akarui/aoi.parser")," is a custom message parser designed for the ",(0,i.kt)("strong",{parentName:"p"},"aoi.js")," message system. It provides powerful functionality to parse and manipulate message content, allowing you to create dynamic and interactive responses in your Discord bots."),(0,i.kt)("h3",{id:"features-1"},"Features"),(0,i.kt)("h4",{id:"embed-parser"},"Embed Parser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create and customize embed messages with titles, descriptions, URLs, timestamps, colors, footers, images, thumbnails, authors, and fields.")),(0,i.kt)("h4",{id:"component-parser"},"Component Parser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parse and handle interactive components such as buttons, dropdowns, and select menus in your messages.")),(0,i.kt)("h4",{id:"file-parser"},"File Parser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Convert text into attachable files and attach files from URLs to your messages.")),(0,i.kt)("h4",{id:"options-parser"},"Options Parser"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure options for your messages, including text-to-speech (TTS), allowed mentions, replies, ephemeral messages, and fetching interaction responses.")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"@akarui/aoi.parser")," package enhances the capabilities of ",(0,i.kt)("strong",{parentName:"p"},"aoi.js")," by providing convenient parsing functions and expanding the possibilities of message manipulation in Discord bots."),(0,i.kt)("h2",{id:"akaruiaoidb"},"@akarui/aoi.db"),(0,i.kt)("p",null,"Package URL: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/aoi.db"},"npm")),(0,i.kt)("p",null,"Documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://akaruidevelopment.github.io/aoi.db/"},"aoi.db")),(0,i.kt)("h3",{id:"overview-2"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"aoi.db")," is a collection of various database types designed to handle different data requirements. It provides a flexible and efficient solution for managing data in your Discord bots or other projects."),(0,i.kt)("h3",{id:"features-2"},"Features"),(0,i.kt)("h4",{id:"keyvalue"},"KeyValue"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A simple database that stores key-value pairs."),(0,i.kt)("li",{parentName:"ul"},"Suitable for general-purpose data storage and retrieval.")),(0,i.kt)("h4",{id:"widecolumn"},"WideColumn"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A database that stores data in a column format."),(0,i.kt)("li",{parentName:"ul"},"Ideal for organizing and accessing separate columns related to a primary column.")),(0,i.kt)("h4",{id:"remote"},"Remote"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A database that stores data on a remote server."),(0,i.kt)("li",{parentName:"ul"},"Allows for separating database-intensive operations from your main project or process.")),(0,i.kt)("h2",{id:"akaruiaoipanel"},"@akarui/aoi.panel"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/aoipanel-banner.png",alt:"aoi.panel"})),(0,i.kt)("p",null,"Package URL: ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@akarui/aoi.panel"},"npm")),(0,i.kt)("p",null,"Documentation: ",(0,i.kt)("a",{parentName:"p",href:"/extensions/aoi.panel/aoipanel-introduction"},"aoi.panel")),(0,i.kt)("h3",{id:"overview-3"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"@akarui/aoi.panel")," is an extension package specifically designed for developers working on Discord bots. It provides a comprehensive developer dashboard that offers a user-friendly interface to manage, monitor, and configure your bot's activities."),(0,i.kt)("h3",{id:"features-3"},"Features"),(0,i.kt)("h4",{id:"real-time-monitoring"},"Real-time Monitoring"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitor your bot's activities and performance in real-time."),(0,i.kt)("li",{parentName:"ul"},"View information such as server count, user count, and command usage statistics.")),(0,i.kt)("h4",{id:"command-management"},"Command Management"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create and manage your bot's commands through the dashboard.")),(0,i.kt)("h4",{id:"server-configuration"},"Server Configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Customize your bot's behavior and settings for individual servers."),(0,i.kt)("li",{parentName:"ul"},"Set up welcome messages, moderation rules, and automatic role assignments.")),(0,i.kt)("h4",{id:"error-tracking"},"Error Tracking"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Track and analyze errors and exceptions occurring within your bot."),(0,i.kt)("li",{parentName:"ul"},"Receive notifications and insights to help you identify and resolve issues.")))}d.isMDXComponent=!0}}]);