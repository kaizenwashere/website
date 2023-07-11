"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93462],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(a),u=r,f=s["".concat(o,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(f,p(p({ref:t},d),{},{components:a})):n.createElement(f,p({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},62393:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"$replaceText",description:"$replaceText will replace specific segments of text.",id:"replaceText"},p=void 0,i={unversionedId:"functions/util-related/replaceText",id:"version-6.3.0/functions/util-related/replaceText",title:"$replaceText",description:"$replaceText will replace specific segments of text.",source:"@site/versioned_docs/version-6.3.0/functions/util-related/replaceText.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/replaceText",permalink:"/docs/functions/util-related/replaceText",draft:!1,tags:[],version:"6.3.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689051183,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{title:"$replaceText",description:"$replaceText will replace specific segments of text.",id:"replaceText"},sidebar:"docs",previous:{title:"$repeatMessage",permalink:"/docs/functions/util-related/repeatMessage"},next:{title:"$replaceTextWithRegex",permalink:"/docs/functions/util-related/replaceTextWithRegex"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2},{value:"Advanced Example",id:"advanced-example",level:3}],d={toc:c},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$replaceText")," will replace specific segments of text."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$replaceText[text;replacer;replaceTo;times?]\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"text"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Text you want to modify."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replacer"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The text that will be replaced."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replaceTo"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The text that will replace ",(0,r.kt)("inlineCode",{parentName:"td"},"replacer"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"times?"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"How many times ",(0,r.kt)("inlineCode",{parentName:"td"},"replaceTo")," replaces ",(0,r.kt)("inlineCode",{parentName:"td"},"replacer"),". / Use ",(0,r.kt)("inlineCode",{parentName:"td"},"-1")," for the last one."),(0,r.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will replace ",(0,r.kt)("inlineCode",{parentName:"p"},"M")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," and the output will be ",(0,r.kt)("inlineCode",{parentName:"p"},"Donkey"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[Monkey;M;D]\n  `\n});\n")),(0,r.kt)("h3",{id:"advanced-example"},"Advanced Example"),(0,r.kt)("p",null,"This will replace the word ",(0,r.kt)("inlineCode",{parentName:"p"},"coffee")," two times using the last ",(0,r.kt)("a",{parentName:"p",href:"#parameters"},"field")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[I love drinking Coffee, Coffee gives me power! Coffee is bad for my health.;Coffee;orange juice;2]\n  `\n});\n")),(0,r.kt)("p",null,"This will replace ",(0,r.kt)("inlineCode",{parentName:"p"},"Ferel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"are")," using multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"$replaceText"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'replaceText',\n    code: `\n  $replaceText[$replaceText[Leref and Ferel are the same person.;Ferel;Ayaka];are;are not]\n  `\n});\n")))}m.isMDXComponent=!0}}]);