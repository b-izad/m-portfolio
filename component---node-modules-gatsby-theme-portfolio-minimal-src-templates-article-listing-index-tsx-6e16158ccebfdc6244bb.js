(self.webpackChunkgatsby_starter_portfolio_minimal_theme=self.webpackChunkgatsby_starter_portfolio_minimal_theme||[]).push([[226],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},1223:function(e,t,n){var r=n(5112),o=n(30),i=n(3070).f,a=r("unscopables"),l=Array.prototype;null==l[a]&&i(l,a,{configurable:!0,value:o(null)}),e.exports=function(e){l[a][e]=!0}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var l,c=r(t),u=i(c),s=o(a,u);if(e&&n!=n){for(;u>s;)if((l=c[s++])!=l)return!0}else for(;u>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n=void 0===t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),l=i.process,c=i.Deno,u=l&&l.versions||c&&c.version,s=u&&u.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},8173:function(e,t,n){var r=n(9662),o=n(8554);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},490:function(e,t,n){var r=n(5005);e.exports=r("document","documentElement")},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,l=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?l(e,""):a(e)}:a},614:function(e,t,n){var r=n(4154),o=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===o}:function(e){return"function"==typeof e}},8554:function(e){e.exports=function(e){return null==e}},111:function(e,t,n){var r=n(614),o=n(4154),i=o.all;e.exports=o.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===i}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),l=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,l(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},30:function(e,t,n){var r,o=n(9670),i=n(6048),a=n(748),l=n(3501),c=n(490),u=n(317),s=n(6200),f="prototype",p="script",d=s("IE_PROTO"),m=function(){},v=function(e){return"<"+p+">"+e+"</"+p+">"},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t,n;h="undefined"!=typeof document?document.domain&&r?y(r):(t=u("iframe"),n="java"+p+":",t.style.display="none",c.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):y(r);for(var o=a.length;o--;)delete h[f][a[o]];return h()};l[d]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[d]=e):n=h(),void 0===t?n:i.f(n,t)}},6048:function(e,t,n){var r=n(9781),o=n(3353),i=n(3070),a=n(9670),l=n(5656),c=n(1956);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=l(t),o=c(t),u=o.length,s=0;u>s;)i.f(e,n=o[s++],r[n]);return e}},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),l=n(4948),c=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",p="configurable",d="writable";t.f=r?i?function(e,t,n){if(a(e),t=l(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&d in n&&!n[d]){var r=s(e,t);r&&r[d]&&(e[t]=n.value,n={configurable:p in n?n[p]:r[p],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=l(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,l=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,s=[];for(n in r)!o(l,n)&&o(r,n)&&c(s,n);for(;t.length>u;)o(r,n=t[u++])&&(~a(s,n)||c(s,n));return s}},1956:function(e,t,n){var r=n(6324),o=n(748);e.exports=Object.keys||function(e){return r(e,o)}},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;e.exports=function(e,t){var n,l;if("string"===t&&o(n=e.toString)&&!i(l=r(n,e)))return l;if(o(n=e.valueOf)&&!i(l=r(n,e)))return l;if("string"!==t&&o(n=e.toString)&&!i(l=r(n,e)))return l;throw a("Can't convert object to primitive value")}},4488:function(e,t,n){var r=n(8554),o=TypeError;e.exports=function(e){if(r(e))throw o("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.1",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),l=n(2140),c=n(5112),u=TypeError,s=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=a(e,s);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),l=n(6293),c=n(3307),u=r.Symbol,s=o("wks"),f=c?u.for||u:u&&u.withoutSetter||a;e.exports=function(e){return i(s,e)||(s[e]=l&&i(u,e)?u[e]:f("Symbol."+e)),s[e]}},3792:function(e,t,n){n(1223)("flat")},3724:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});n(3792);var r=n(5785),o=n(7294),i=n(5633),a=n(1187),l=n(6744),c="style-module--SlideContainer--60bf2";function u(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(c).join(" "):c,o.createElement("div",{className:t,style:e.style},e.children)}var s=n(1883),f=n(8032);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var p=n(5400),d="style-module--Banner--d401d",m="style-module--Card--c661d",v="style-module--Category--eeb92",y="style-module--DescriptionWrapper--5f867",h="style-module--Details--5ba4b",b="style-module--Image--43f10",g="style-module--ImageWrapper--50300",x="style-module--ReadingTime--a0392",E="style-module--Title--de70d";function w(e){const{globalState:t}=(0,p.j1)(),n=t.theme===p.Q2.Dark,r=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),i=o.createElement("article",{className:m,style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&o.createElement("div",{className:d},e.data.image&&e.data.image.src&&o.createElement(f.G,{className:g,imgClassName:b,image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),o.createElement("div",{className:y},o.createElement("span",{className:v},o.createElement("u",null,e.data.category)),o.createElement("h4",{className:E},e.data.title),o.createElement("div",{className:h},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(a=e.data.publishedAt).getMonth()]+" "+a.getDate()+", "+a.getFullYear(),e.data.readingTime&&o.createElement("span",{className:x},e.data.readingTime))));var a;return r?o.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},i):o.createElement(s.Link,{to:e.data.link,title:e.data.title},i)}var O="style-module--Button--82b1f";let k=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function S(e){if(e.type===k.LINK){if(e.url)return e.externalLink?o.createElement("a",{id:e.id,className:O,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):o.createElement(s.Link,{id:e.id,to:e.url,className:O},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===k.BUTTON||e.type===k.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return o.createElement("button",{id:e.id,className:O,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}var $="style-module--Filter--31377",j="style-module--Listing--52eca",T="style-module--LoadMore--8b4c0",_="style-module--Option--83bb9",C="style-module--Options--3515b",N="style-module--Selected--f3165";function I(e){var t;const n=e.pageContext.articles,[c,s]=o.useState(function(e){const t=[],n=[];return e.forEach((e=>{e.categories.forEach((r=>{if(n.includes(r)){const n=t.map((e=>e.label)).indexOf(r);t[n].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(n)),[f,p]=o.useState(9);let d=[];const m=-1!==c.map((e=>e.selected)).indexOf(!0);m&&(d=c.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,n)=>n.indexOf(e)===t)));const v=null!==(t=function(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const n={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},r={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const o in r){const t=new RegExp(o+"$","i"),n=r[o];if(t.test(e))return e.replace(t,n)}for(const o in n){const t=new RegExp(o,"i");if(t.test(e))return e.replace(t,n[o])}return e}(e.pageContext.entityName))&&void 0!==t?t:"Articles";return o.createElement(o.Fragment,null,o.createElement(l.p,{title:"All "+v,useTitleTemplate:!0}),o.createElement(i.T,null,o.createElement(a.$,{anchor:"articleListing",heading:v},o.createElement("div",{className:$},"Select categories to filter ",v.toLocaleLowerCase(),o.createElement(u,{additionalClasses:[C]},c.map(((e,t)=>o.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,r.Z)(c),n=t.map((e=>e.label)).indexOf(e);t[n].selected=!t[n].selected,s(t)}(e.label),className:[_,!0===e.selected?N:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),o.createElement("div",{className:j},n.filter((e=>!m||d.includes(e.id))).slice(0,f).map(((e,t)=>o.createElement(w,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),m&&d.length>f||!m&&n.length>f?o.createElement("div",{className:T},o.createElement(S,{type:k.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const n=f+3;(t&&t>=n||!t&&e>=n)&&p(n)}(n.length,m?d.length:void 0)})):null)))}}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-6e16158ccebfdc6244bb.js.map