"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82317],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"$alwaysExecute",description:"A command property that you can paste in the command's name field to trigger the command with every message."},s=void 0,c={unversionedId:"functions/alwaysexecute",id:"version-5.5.5/functions/alwaysexecute",title:"$alwaysExecute",description:"A command property that you can paste in the command's name field to trigger the command with every message.",source:"@site/versioned_docs/version-5.5.5/functions/alwaysexecute.md",sourceDirName:"functions",slug:"/functions/alwaysexecute",permalink:"/docs/5.5.5/functions/alwaysexecute",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689051183,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"$alwaysExecute",description:"A command property that you can paste in the command's name field to trigger the command with every message."},sidebar:"docs",previous:{title:"$allMembersCount",permalink:"/docs/5.5.5/functions/allmemberscount"},next:{title:"$appendFile",permalink:"/docs/5.5.5/functions/appendfile"}},l={},i=[{value:"Usage",id:"usage",level:3},{value:"Example",id:"example",level:2}],p={toc:i},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$alwaysExecute")," is a function will allow the command to be triggered by ",(0,a.kt)("strong",{parentName:"p"},"every")," message an user sends."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$alwaysExecute\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"There's your message counter for example command! "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'//Message variable\nbot.variables({\n  messages: 0\n});\n\n//The command will execute whenever an user send a message\nbot.command({\n  name: "$alwaysExecute", \n  code: `\n  $setVar[messages;$sum[$getVar[messages];1]]\n  `\n//Adds 1 to messages variable\'s value for every message sent\n});\n')),(0,a.kt)("p",null,"That's it!"))}m.isMDXComponent=!0}}]);