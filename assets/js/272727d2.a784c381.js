"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32990],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),g=r,d=u["".concat(l,".").concat(g)]||u[g]||p[g]||s;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<s;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const s={title:"Slot Command",description:"A simple, easy slot command",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},o="code",i={permalink:"/wikis/posts/715852000096419900/7y0d4k",source:"@site/forums/posts/715852000096419900/7y0d4k.md",title:"Slot Command",description:"A simple, easy slot command",date:"2023-07-12T19:07:05.000Z",formattedDate:"July 12, 2023",tags:[{label:"aoi.js",permalink:"/wikis/tags/aoi-js"},{label:"v6",permalink:"/wikis/tags/v-6"}],hasTruncateMarker:!1,authors:[{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"}],frontMatter:{title:"Slot Command",description:"A simple, easy slot command",authors:{name:"@ahoemi",title:"Member - 715852000096419900",userid:"715852000096419900",url:"https://discord.com/users/715852000096419900",image_url:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png",imageURL:"https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/715852000096419900.png"},tags:["aoi.js","v6"],hide_table_of_contents:!0,enableComments:!0,pagination_prev:null,pagination_next:null},prevItem:{title:"Member count with image",permalink:"/wikis/posts/715852000096419900/5sg6ej"},nextItem:{title:"commands list",permalink:"/wikis/posts/715852000096419900/aswziy"}},l={authorsImageUrls:[void 0]},m=[{value:"Edit as you wish",id:"edit-as-you-wish",level:3}],c={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n  name: "slot",\n  code: `\n\n\n$editMessage[$get[id];|$get[s1]|$get[s2]|$get[s3]|\n$nonEscape[$if[$checkCondition[$get[s1]==$get[s2]&&$get[s2]==$get[s3]&&$get[s3]==$get[s1]]==true;Congralutions, you win!;Bad luck, you lose!]]] \n$let[s3;$randomText[\ud83d\udcb5;\ud83d\udc8e;\ud83e\udd47;\ud83d\udcaf;\ud83d\udcb0]]\n$wait[2s]\n\n$editMessage[$get[id];|$get[s1]|$get[s2]|<a:slot_gif:1125077236492546269>|] \n$let[s2;$randomText[\ud83d\udcb0;\ud83d\udcaf;\ud83d\udc8e;\ud83d\udcb5;\ud83e\udd47]]\n$wait[2s]\n  \n$editMessage[$get[id];|$get[s1]|<a:slot_gif:1125077236492546269>|<a:slot_gif:1125077236492546269>|]   \n$let[s1;$randomText[\ud83d\udc8e;\ud83e\udd47;\ud83d\udcaf;\ud83d\udcb0;\ud83d\udcb5]]\n$wait[2s]   \n    \n$let[id;$sendMessage[|<a:slot_gif:1125077236492546269>|<a:slot_gif:1125077236492546269>|<a:slot_gif:1125077236492546269>|;true]] \n`}]\n')),(0,r.kt)("h3",{id:"edit-as-you-wish"},"Edit as you wish"),(0,r.kt)("p",null,"And also add the emoji to a server your bot is in.\n( I used NQN bot )"))}p.isMDXComponent=!0}}]);