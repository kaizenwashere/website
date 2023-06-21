"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=r,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"$jsonRequest",description:"Retrieve a JSON format (api)"},i=void 0,l={unversionedId:"functions/jsonrequest",id:"version-5.5.5/functions/jsonrequest",title:"$jsonRequest",description:"Retrieve a JSON format (api)",source:"@site/versioned_docs/version-5.5.5/functions/jsonrequest.md",sourceDirName:"functions",slug:"/functions/jsonrequest",permalink:"/docs/5.5.5/functions/jsonrequest",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687340447,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{title:"$jsonRequest",description:"Retrieve a JSON format (api)"},sidebar:"docs",previous:{title:"$joinVC",permalink:"/docs/5.5.5/functions/joinvc"},next:{title:"$kick",permalink:"/docs/5.5.5/functions/kick"}},s={},p=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types of Header",id:"types-of-header",level:4},{value:"Example",id:"example",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns a property from a JSON formatted api."),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$jsonRequest[api;property?;error?;headerName:headerValue?...]\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The api from which the specified property is to be retrieved"),(0,r.kt)("td",{parentName:"tr",align:"left"},"link"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"property"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The property that is to be retrieved from the api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The error to be displayed if the property wasn't found"),(0,r.kt)("td",{parentName:"tr",align:"left"},"alphanumeric"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"header"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The header that is to be retrieved from the api"),(0,r.kt)("td",{parentName:"tr",align:"left"},"headerName:headerValue"),(0,r.kt)("td",{parentName:"tr",align:"left"},"no")))),(0,r.kt)("h4",{id:"types-of-header"},"Types of Header"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"normal: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"A:hi;B:Bye\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json: ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{ "A" : "hi", "B" : "bye" }\n')),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "api", \ncode: `$jsonRequest[https://some-random-api.ml/facts/dog;fact;Could not fnd a dog fact!]`\n})\n/*\n\nAPI Breakdown:\nIn this api given, if you go to the link it will give you\n{"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."}\nSo in \'property\', you\'d put "fact", because it\'s the only property there to get\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;fact;Could not fnd a dog fact!]`\n\n\nBut what if the api was like this:\n{"dog": {"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."} }\nThen in property, first you\'d\nneed to get "dog", so you\'d put \'dog\', then to get the fact\nadd fact after it, like this: \'dog.fact\'\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;dog.fact;Could not fnd a dog fact!]`\n\n\nBut let\'s say the api has brackets around the thing you\nwant to get:\n{"dog": [{"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."}] }\nSo in property, you will still have \'dog\' first,\nthen you\'d add brackets as follows: \'dog[0]\' \nthen simply add on fact. \'dog[0].fact\'\nWARNING: For DBD.js instead of [] we use #RIGHT# for [ and #LEFT# for ]\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;dog#RIGHT#0#LEFT#.fact;Could not fnd a dog fact!]`\n\n\n*/\n')))}u.isMDXComponent=!0}}]);