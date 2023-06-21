"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(n),u=a,m=f["".concat(c,".").concat(u)]||f[u]||d[u]||i;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[f]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70721:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"$createFile"},l=void 0,o={unversionedId:"functions/createfile",id:"version-5.5.5/functions/createfile",title:"$createFile",description:"This function creates a file within your host",source:"@site/versioned_docs/version-5.5.5/functions/createfile.md",sourceDirName:"functions",slug:"/functions/createfile",permalink:"/docs/5.5.5/functions/createfile",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687348568,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$createFile"},sidebar:"docs",previous:{title:"$createChannel",permalink:"/docs/5.5.5/functions/createchannel"},next:{title:"$createObject",permalink:"/docs/5.5.5/functions/createobject"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Extensions",id:"extensions",level:4},{value:"Example",id:"example",level:3}],p={toc:s},f="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function creates a file within your host"),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$createFile[text;filename.extension]\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The text to be added"),(0,a.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The name of file with extension"),(0,a.kt)("td",{parentName:"tr",align:"left"},"filename.extension"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h4",{id:"extensions"},"Extensions"),(0,a.kt)("p",null,"You can find what a file extension",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Filename_extension"}," here"),". A brief explanation: The file extension is the acronym after the dot in the file. For example, in ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," the file extension would be ",(0,a.kt)("inlineCode",{parentName:"p"},"js")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "createFile",\ncode: `\n$createFile[Hello World;hello.txt]\n`\n/*\nThis creates a text file named \'hello\'\nand inside the file you\'ll find "Hello World"\n*/\n})\n')))}d.isMDXComponent=!0}}]);