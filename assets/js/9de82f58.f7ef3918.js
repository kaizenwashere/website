"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},51156:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"$cropText"},a=void 0,l={unversionedId:"functions/croptext",id:"version-5.5.5/functions/croptext",title:"$cropText",description:"This function crops the given text",source:"@site/versioned_docs/version-5.5.5/functions/croptext.md",sourceDirName:"functions",slug:"/functions/croptext",permalink:"/docs/5.5.5/functions/croptext",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689051183,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"$cropText"},sidebar:"docs",previous:{title:"$creationDate",permalink:"/docs/5.5.5/functions/creationdate"},next:{title:"$customEmoji",permalink:"/docs/5.5.5/functions/customemoji"}},c={},p=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],s={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function crops the given text"),(0,o.kt)("h4",{id:"fields"},"Fields"),(0,o.kt)("p",null,"This function has 3 required fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Text ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Limit ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Start ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Char To Split ","(","Optional",")")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$cropText[text;limit;start;charToSplit?]")),(0,o.kt)("h4",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Text - The text we're cropping"),(0,o.kt)("li",{parentName:"ul"},"Limit - The max length of the cropped text"),(0,o.kt)("li",{parentName:"ul"},"Start - The position of the character after which the cropping will start"),(0,o.kt)("li",{parentName:"ul"},"Char To Split-  The specified pivot to crop the text")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Without optional fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'crop',\ncode: `$cropText[hello;5;2]`\n})\n")),(0,o.kt)("p",null,"With optional fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\nname: 'crop',\ncode: `$cropText[hello;5;2;z]`\n})\n")))}d.isMDXComponent=!0}}]);