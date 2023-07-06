"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27918],{78945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ce});var n=a(67294),r=a(10833),o=a(902);const l=n.createContext(null);function i(e){let{children:t,content:a}=e;const r=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(l.Provider,{value:r},t)}function s(){const e=(0,n.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:a}=s();return n.createElement(r.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(86010),m=a(87524),u=a(87462),p=a(95999),b=a(32244);function h(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,p.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&n.createElement(b.Z,(0,u.Z)({},t,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(b.Z,(0,u.Z)({},a,{subLabel:n.createElement(p.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function v(){const{metadata:e}=s();return n.createElement(h,{previous:e.previous,next:e.next})}var g=a(52263),f=a(39960),E=a(80143),y=a(35281),x=a(60373),_=a(74477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(p.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function k(e){const t=C[e.versionMetadata.banner];return n.createElement(t,e)}function w(e){let{versionLabel:t,to:a,onClick:r}=e;return n.createElement(p.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(f.Z,{to:a,onClick:r},n.createElement(p.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function L(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:r}}=(0,g.Z)(),{pluginId:o}=(0,E.gA)({failfast:!0}),{savePreferredVersionName:l}=(0,x.J)(o),{latestDocSuggestion:i,latestVersionSuggestion:s}=(0,E.Jo)(o),c=i??(m=s).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,y.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(k,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(w,{versionLabel:s.label,to:c.path,onClick:()=>l(s.name)})))}function N(e){let{className:t}=e;const a=(0,_.E)();return a.banner?n.createElement(L,{className:t,versionMetadata:a}):null}function Z(e){let{className:t}=e;const a=(0,_.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,y.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(p.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function U(e){let{lastUpdatedBy:t}=e;return n.createElement(p.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function I(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:r}=e;return n.createElement("span",{className:y.k.common.lastUpdated},n.createElement(p.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(T,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(U,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var S=a(84881),M=a(71526);const A={lastUpdated:"lastUpdated_vwxv"};function H(e){return n.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(M.Z,e)))}function D(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:o}=e;return n.createElement("div",{className:(0,d.Z)(y.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(S.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",A.lastUpdated)},(a||r)&&n.createElement(I,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:r})))}function B(){const{metadata:e}=s(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:l}=e,i=l.length>0,c=!!(t||a||o);return i||c?n.createElement("footer",{className:(0,d.Z)(y.k.docs.docFooter,"docusaurus-mt-lg")},i&&n.createElement(H,{tags:l}),c&&n.createElement(D,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}var O=a(86043),z=a(93743);const V={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function P(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",V.tocCollapsibleButton,!t&&V.tocCollapsibleButtonExpanded,a.className)}),n.createElement(p.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const $={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function R(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:o}=e;const{collapsed:l,toggleCollapsed:i}=(0,O.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)($.tocCollapsible,!l&&$.tocCollapsibleExpanded,a)},n.createElement(P,{collapsed:l,onClick:i}),n.createElement(O.z,{lazy:!0,className:$.tocCollapsibleContent,collapsed:l},n.createElement(z.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:o})))}const F={tocMobile:"tocMobile_ITEo"};function q(){const{toc:e,frontMatter:t}=s();return n.createElement(R,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(y.k.docs.docTocMobile,F.tocMobile)})}var j=a(39407);function W(){const{toc:e,frontMatter:t}=s();return n.createElement(j.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:y.k.docs.docTocDesktop})}var G=a(92503),J=a(45042);function Y(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=s();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(y.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(G.Z,{as:"h1"},a)),n.createElement(J.Z,null,t))}var K=a(53438),X=a(48596),Q=a(44996);function ee(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ae(){const e=(0,Q.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(f.Z,{"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ee,{className:te.breadcrumbHomeIcon})))}const ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function re(e){let{children:t,href:a,isLast:r}=e;const o="breadcrumbs__link";return r?n.createElement("span",{className:o,itemProp:"name"},t):a?n.createElement(f.Z,{className:o,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:o},t)}function oe(e){let{children:t,active:a,index:r,addMicrodata:o}=e;return n.createElement("li",(0,u.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(r+1)}))}function le(){const e=(0,K.s1)(),t=(0,X.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(y.k.docs.docBreadcrumbs,ne.breadcrumbsContainer),"aria-label":(0,p.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ae,null),e.map(((t,a)=>{const r=a===e.length-1;return n.createElement(oe,{key:a,active:r,index:a,addMicrodata:!!t.href},n.createElement(re,{href:t.href,isLast:r},t.label))})))):null}const ie={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function se(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=s(),a=(0,m.i)(),r=e.hide_table_of_contents,o=!r&&t.length>0;return{hidden:r,mobile:o?n.createElement(q,null):void 0,desktop:!o||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(W,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&ie.docItemCol)},n.createElement(N,null),n.createElement("div",{className:ie.docItemContainer},n.createElement("article",null,n.createElement(le,null),n.createElement(Z,null),a.mobile,n.createElement(Y,null,t),n.createElement(B,null)),n.createElement(v,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ce(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(i,{content:e.content},n.createElement(r.FG,{className:t},n.createElement(c,null),n.createElement(se,null,n.createElement(a,null))))}},32244:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010),o=a(39960);function l(e){const{permalink:t,title:a,subLabel:l,isNext:i}=e;return n.createElement(o.Z,{className:(0,r.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}},39407:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(87462),r=a(67294),o=a(86010),l=a(93743);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:t,...a}=e;return r.createElement("div",{className:(0,o.Z)(i.tableOfContents,"thin-scrollbar",t)},r.createElement(l.Z,(0,n.Z)({},a,{linkClassName:s,linkActiveClassName:c})))}},93743:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(87462),r=a(67294),o=a(86668);function l(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...r}=e;a>=0?t[a].children.push(r):n.push(r)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function d(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,o.L)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function m(e){const t=(0,r.useRef)(void 0),a=d();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:r,minHeadingLevel:o,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let r=t;r<=a;r+=1)n.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:o,maxHeadingLevel:l}),s=c(i,{anchorTopOffset:a.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function u(e){let{toc:t,className:a,linkClassName:n,isChild:o}=e;return t.length?r.createElement("ul",{className:o?void 0:a},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const p=r.memo(u);function b(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...b}=e;const h=(0,o.L)(),v=d??h.tableOfContents.minHeadingLevel,g=u??h.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,r.useMemo)((()=>i({toc:l(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:g});return m((0,r.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:g}}),[s,c,v,g])),r.createElement(p,(0,n.Z)({toc:f,className:a,linkClassName:s},b))}},74477:(e,t,a)=>{a.d(t,{E:()=>i,q:()=>l});var n=a(67294),r=a(902);const o=n.createContext(null);function l(e){let{children:t,version:a}=e;return n.createElement(o.Provider,{value:a},t)}function i(){const e=(0,n.useContext)(o);if(null===e)throw new r.i6("DocsVersionProvider");return e}},44057:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(30143);const o=()=>n.createElement(r.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:150,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},45706:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(99861),o=a(92949);function l(){const{colorMode:e}=(0,o.I)();return n.createElement(r.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0})}},31830:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010),o=a(39960);const l={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};function i(e){return e.href?n.createElement(o.Z,e):n.createElement(n.Fragment,null,e.children)}function s(e){let{author:t,className:a}=e;const{name:o,title:s,url:c,imageURL:d,email:m}=t,u=c||m&&`mailto:${m}`||void 0,p=o.toLowerCase(),b=["@leref"].map((e=>e.toLowerCase())).includes(p),h=["@dodogames","@supremesupreme","@faf4a","@satoshisaysnya","@usersatoshi"].map((e=>e.toLowerCase())).includes(p),v=["@dodogames","@supremesupreme","@josipfx","@faf4a","@satoshisaysnya","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli"].map((e=>e.toLowerCase())).includes(p),g=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(p),f=["@Zeke \u2661","@Alien Abd","@supremesupreme","@creitingameplays","@leref","@satoshisaysnya","@theparadox0018","@valentineu0","@wansie","@\u3042\u2503\ud835\ude92\ud835\udea3\ud835\ude8a\ud835\ude8c\ud835\ude91\ud835\ude98\ud835\ude8c","@angelusdelux","@.kuray."].map((e=>e.toLowerCase())).includes(p);return n.createElement("div",{className:(0,r.Z)("avatar margin-bottom--sm",a)},d&&n.createElement(i,{href:u,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:d,alt:o})),o&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i,{href:u,itemProp:"url"},n.createElement("span",{itemProp:"name"},o)),g&&n.createElement("span",{className:(0,r.Z)(l.tag,l.contributor)},"Contributor"),f&&n.createElement("span",{className:(0,r.Z)(l.tag,l.booster)},"Server Booster"),v&&n.createElement("span",{className:(0,r.Z)(l.tag,l.staff)},"Staff"),h&&n.createElement("span",{className:(0,r.Z)(l.tag,l.mod)},"Moderator"),b&&n.createElement("span",{className:(0,r.Z)(l.tag,l.creator)},"Creator")),s&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},s)))}},14695:(e,t,a)=>{a.d(t,{Z:()=>E});var n=a(67294),r=a(8121);const o=e=>{let{children:t,color:a,radius:r,padding:o}=e;return n.createElement("span",{style:{backgroundColor:a,borderRadius:r||"2px",color:"#fff",padding:o||"0.2rem"}},t)};var l=a(74866),i=a(85162),s=a(44057),c=a(45706),d=a(17891),m=a(86010),u=a(25365);const p=e=>{let{name:t,id:a,value:r,onChange:o,type:l,error:i,charCount:s}=e;const c={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(i?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},d=e=>{o(e)};let m=null;switch(l){case"textarea-description":m=n.createElement("div",null,n.createElement("textarea",{name:t,id:a,value:r,onChange:d,style:{...c,minHeight:"155px",resize:"none"},required:!0}),n.createElement("div",{style:{fontSize:"12px",color:s>=500?"red":"#3f51b5"}},void 0===s?"0":s,"/",500));break;case"textarea-code":m=n.createElement("textarea",{name:t,id:a,value:r,onChange:d,style:{...c,minHeight:"155px",resize:"none"},required:!0});break;case"number":const e=e=>{const{value:a}=e.target,n=a.replace(/[^0-9]/g,"");n.length>20||o({target:{name:t,value:n}})};m=n.createElement("div",{style:{position:"relative"}},n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:e,style:c,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":m=n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:d,style:{...c,width:"50%",fontSize:"12px"},required:!0});break;default:m=n.createElement("div",null,n.createElement("input",{type:"text",name:t,id:a,value:r,onChange:d,style:{...c,resize:"none"},required:!0}),n.createElement("div",{style:{fontSize:"12px",color:s>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===s?"0":s,"/",50))}return n.createElement("div",null,m)};var b=a(99578),h=a(39960),v=a(31830);const g=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[o,l]=(0,n.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[i,s]=(0,n.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:c,description:d,discordUID:g,code:f,tags:E,isUIDValid:y}=o,[x,_]=(0,n.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),C=async e=>{const{name:a,value:n}=e.target;let r=n;if("title"===a)r=n.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>({...e,title:n.length}))),r.length>49&&(r=r.substring(0,50));else if("description"===a)t((e=>({...e,description:n.length}))),n.length>=500&&(r=n.substring(0,499));else if("discordUID"===a&&(l((e=>({...e,isUIDValid:!0}))),n.length>=17)){const{avatar:e,username:t,bot:a,id:r}=await k(n);void 0!==a&&l((e=>({...e,isUIDValid:!1}))),_((a=>({...a,avatar:e,username:t,id:"- "+r})))}l((e=>({...e,[a]:r})))},k=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),n=await a.json();return n&&n.avatar?{bot:n.bot,avatar:n.avatar,username:n.username,id:n.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},w=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");r(t);const n={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===o[e].trim()&&(n[e]=!0)})),0===o.tags.length&&(n.tags=!0);const{avatar:l,username:i,bot:m}=await k(g);if("Guest User"===i&&(n.discordUID=!0),void 0!==m&&(n.discordUID=!0),s(n),Object.values(n).some((e=>!0===e)))return;const u=Math.random().toString(36).substring(7),p=`${g}/${u}.md`,b=`---\ntitle: "${c}"\ndescription: "${d}"\nauthors:\n  name: "@${i}"\n  title: Member - ${g}\n  userid: "${g}"\n  url: https://discord.com/users/${g}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${g}.png\ntags: ${JSON.stringify(E)}\nhide_table_of_contents: false\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${f}`;try{const v=await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`Create new file -- ${g}`,content:b,fileName:p})});async function y(e){try{(await fetch(`https://someapi.frenchwomen.repl.co/avatars/${e}`)).ok||await alert("Something went wrong while handling your request.")}catch(t){return void await alert("Something went wrong while handling your request. (avatar)")}}if(y(g),!v.ok)return void await alert("Something went wrong while handling your request.");await alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(h){return}};return n.createElement("form",{onSubmit:w},n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"Title of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),n.createElement(p,{name:"title",id:"title",value:c,onChange:C,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:i.title,charCount:void 0===e.title?"0":e.title}),n.createElement("br",null),n.createElement("h3",null,"Description",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),n.createElement(p,{name:"description",id:"description",value:d,onChange:C,type:"textarea-description",placeholder:"Description",required:!0,error:i.description,charCount:void 0===e.description?"0":e.description}),n.createElement("br",null),n.createElement("h3",null,"Discord User ID",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),n.createElement(p,{name:"discordUID",id:"discordUID",value:g,onChange:C,type:"number",placeholder:"Discord UID",required:!0,error:!y||i.discordUID}),!y&&n.createElement("p",{style:{color:"red"}},"Invalid user"),n.createElement("br",null),n.createElement("h3",null,"Content of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),n.createElement(p,{name:"code",id:"code",value:f,onChange:C,type:"textarea-code",placeholder:"Code",required:!0,error:i.code}),n.createElement("h5",{style:{marginBottom:"0.5rem"}},n.createElement("span",{style:{verticalAlign:"middle"}},"Preview",n.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),n.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},n.createElement("div",{style:{overflow:"hidden"}},n.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},n.createElement(v.Z,{author:{name:`@${x.username}`,title:`Member ${x.id}`,url:`https://discord.com/users/${g}`,imageURL:`${x.avatar}`}}),n.createElement("br",null),!f&&n.createElement("div",{className:b.Z.placeholderText},"Some text of your awesome Wiki!",n.createElement("br",null),n.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",n.createElement("br",null)," ",n.createElement("br",null),n.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",n.createElement("br",null),"## For Headers! ",n.createElement("br",null),"- For Lists! ",n.createElement("br",null))),n.createElement(u.D,null,f)))),n.createElement("br",null),n.createElement("h3",null,"Tags",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),n.createElement("div",{className:b.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>n.createElement("span",{key:e,className:(0,m.Z)(b.Z.tag,{[b.Z.active]:E.includes(e)}),onClick:()=>(e=>{const t=[...E];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),l((e=>({...e,tags:t})))})(e)},e)))),i.tags&&n.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),n.createElement("div",{className:b.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},n.createElement(h.Z,{className:(0,m.Z)("button button--outline button--secondary"),onClick:w,style:{width:"100%"}},"Submit")))},f=e=>{let{children:t}=e;const[a,r]=(0,n.useState)(!1),o={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:a?"#4d5291":"#3b406e",cursor:a?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return n.createElement("div",{style:o,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1)},t)},E={...r.Z,Highlight:o,GiscusComponent:c.Z,InputField:p,SubmitForm:g,Cookies:s.Z,Tabs:l.Z,Slash:f,Tooltip:d.u,TabItem:i.Z}},99578:(e,t,a)=>{a.d(t,{Z:()=>n});const n={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",fadeIn:"fadeIn__KIT",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng"}}}]);