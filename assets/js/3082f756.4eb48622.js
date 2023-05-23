"use strict";(self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[]).push([[676],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(b,s(s({ref:t},c),{},{components:n})):a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7462),r=n(7294),l=n(6010),s=n(2466),o=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=d(e),[s,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,u]=b({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),s=n(5162),o=n(4996);const i={sidebar_position:2},u="2. \u5982\u4f55\u521b\u5efa\u9ad8\u6548\u590d\u5408\u7d22\u5f15",c={unversionedId:"indexing-basics/indexing-basics",id:"indexing-basics/indexing-basics",title:"2. \u5982\u4f55\u521b\u5efa\u9ad8\u6548\u590d\u5408\u7d22\u5f15",description:"\u5728\u4efb\u4f55\u6570\u636e\u5e93\u4e2d\uff0c\u7d22\u5f15\u90fd\u652f\u6301\u9ad8\u6548\u6267\u884c\u67e5\u8be2\u3002\u5982\u679c\u6ca1\u6709\u7d22\u5f15\uff0c\u6570\u636e\u5e93\u5fc5\u987b\u626b\u63cf\u96c6\u5408\u6216\u8868\u4e2d\u7684\u6bcf\u4e2a\u6587\u6863\uff0c\u4ee5\u9009\u62e9\u4e0e\u67e5\u8be2\u8bed\u53e5\u5339\u914d\u7684\u6587\u6863\u3002\u5982\u679c\u67e5\u8be2\u5b58\u5728\u5408\u9002\u7684\u7d22\u5f15\uff0c\u5219\u6570\u636e\u5e93\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15\u6765\u9650\u5236\u5fc5\u987b\u68c0\u67e5\u7684\u6587\u6863\u6570\u91cf\u3002",source:"@site/docs/indexing-basics/indexing-basics.md",sourceDirName:"indexing-basics",slug:"/indexing-basics/",permalink:"/atlas-workshop/docs/indexing-basics/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/indexing-basics/indexing-basics.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. \u67e5\u770b\u7d22\u5f15\u7684\u6267\u884c\u8ba1\u5212",permalink:"/atlas-workshop/docs/indexing-basics/explain-plans"},next:{title:"\u7ec3\u4e60D: \u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801(IaC)",permalink:"/atlas-workshop/docs/category/\u7ec3\u4e60d-\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801iac"}},p={},d=[{value:"1. \u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u7684\u67e5\u8be2\u521b\u5efa\u4e00\u4e9b\u7d22\u5f15\u3002",id:"1-\u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u7684\u67e5\u8be2\u521b\u5efa\u4e00\u4e9b\u7d22\u5f15",level:3},{value:"2.\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b\u7d22\u5f15\u521b\u5efa\u540e\u7684\u6267\u884c\u8ba1\u5212",id:"2\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b\u7d22\u5f15\u521b\u5efa\u540e\u7684\u6267\u884c\u8ba1\u5212",level:3},{value:"3.\u8ba9\u6211\u4eec\u66f4\u6539\u5b57\u6bb5\u7684\u987a\u5e8f\u4ee5\u7b26\u5408ESR(\u76f8\u7b49\u3001\u6392\u5e8f\u548c\u8303\u56f4)\u987a\u5e8f\uff1a",id:"3\u8ba9\u6211\u4eec\u66f4\u6539\u5b57\u6bb5\u7684\u987a\u5e8f\u4ee5\u7b26\u5408esr\u76f8\u7b49\u6392\u5e8f\u548c\u8303\u56f4\u987a\u5e8f",level:3},{value:"4.\u606d\u559c\uff01\uff01\u6b63\u5982\u60a8\u6240\u770b\u5230\u7684\uff0c\u67e5\u8be2\u4ec5\u4f7f\u7528\u7d22\u5f15\uff0c\u6ca1\u6709\u6392\u5e8f\u9636\u6bb5\u3002",id:"4\u606d\u559c\u6b63\u5982\u60a8\u6240\u770b\u5230\u7684\u67e5\u8be2\u4ec5\u4f7f\u7528\u7d22\u5f15\u6ca1\u6709\u6392\u5e8f\u9636\u6bb5",level:3}],m={toc:d},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-\u5982\u4f55\u521b\u5efa\u9ad8\u6548\u590d\u5408\u7d22\u5f15"},"2. \u5982\u4f55\u521b\u5efa\u9ad8\u6548\u590d\u5408\u7d22\u5f15"),(0,r.kt)("p",null,"\u5728\u4efb\u4f55\u6570\u636e\u5e93\u4e2d\uff0c\u7d22\u5f15\u90fd\u652f\u6301\u9ad8\u6548\u6267\u884c\u67e5\u8be2\u3002\u5982\u679c\u6ca1\u6709\u7d22\u5f15\uff0c\u6570\u636e\u5e93\u5fc5\u987b\u626b\u63cf\u96c6\u5408\u6216\u8868\u4e2d\u7684\u6bcf\u4e2a\u6587\u6863\uff0c\u4ee5\u9009\u62e9\u4e0e\u67e5\u8be2\u8bed\u53e5\u5339\u914d\u7684\u6587\u6863\u3002\u5982\u679c\u67e5\u8be2\u5b58\u5728\u5408\u9002\u7684\u7d22\u5f15\uff0c\u5219\u6570\u636e\u5e93\u53ef\u4ee5\u4f7f\u7528\u7d22\u5f15\u6765\u9650\u5236\u5fc5\u987b\u68c0\u67e5\u7684\u6587\u6863\u6570\u91cf\u3002"),(0,r.kt)("p",null,"MongoDB\u63d0\u4f9b\u5e7f\u6cdb\u7684\u7d22\u5f15",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/indexes"},"\u7c7b\u578b\u548c\u529f\u80fd"),"\uff0c\u5177\u6709\u7279\u5b9a\u4e8e\u8bed\u8a00\u7684\u6392\u5e8f\u987a\u5e8f\uff0c\u4ee5\u652f\u6301\u5bf9\u6570\u636e\u7684\u590d\u6742\u8bbf\u95ee\u6a21\u5f0f\u3002 MongoDB\u7d22\u5f15\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u521b\u5efa\u548c\u5220\u9664\uff0c\u4ee5\u9002\u5e94\u4e0d\u65ad\u53d8\u5316\u7684\u5e94\u7528\u7a0b\u5e8f\u8981\u6c42\u548c\u67e5\u8be2\u6a21\u5f0f\uff0c\u5e76\u53ef\u4ee5\u58f0\u660e\u5728\u6587\u6863\u4e2d\u7684\u4efb\u4f55\u5b57\u6bb5\u4e0a\uff0c\u5305\u62ec\u5d4c\u5957\u5728\u6570\u7ec4\u4e2d\u7684\u5b57\u6bb5\u3002"),(0,r.kt)("p",null,"MongoDB\u4e2d\u590d\u5408\u7d22\u5f15\u7684\u987a\u5e8f\u6709\u4e00\u4e2a\u6700\u4f73\u5b9e\u8df5\u89c4\u5219\uff0c\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"p"},"ESR"),"\u3002\u8fd9\u4e2a\u89c4\u5219\u4ee3\u8868\u5728\u7d22\u5f15\u5b9a\u4e49\u4e2d\u7684",(0,r.kt)("strong",{parentName:"p"},"\u76f8\u7b49(Equality)\u3001\u6392\u5e8f(Sort)\u548c\u8303\u56f4(Range)"),"\u5b57\u6bb5\u7684\u653e\u7f6e\u3002"),(0,r.kt)("h3",{id:"1-\u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u7684\u67e5\u8be2\u521b\u5efa\u4e00\u4e9b\u7d22\u5f15"},"1. \u8ba9\u6211\u4eec\u4e3a\u6211\u4eec\u7684\u67e5\u8be2\u521b\u5efa\u4e00\u4e9b\u7d22\u5f15\u3002"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"data-explorer",label:"Data Explorer",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  \u6570\u636e\u6d4f\u89c8\u5668\u5141\u8bb8\u6211\u4eec\u901a\u8fc7\u8f6c\u5230\u201c\u7d22\u5f15\u201d\u9009\u9879\u5361\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7d22\u5f15\u6765\u521b\u5efa\u7d22\u5f15\u3002\u6309\u4ee5\u4e0b\u987a\u5e8f\u6dfb\u52a0\u5b57\u6bb5\u4ee5\u5c1d\u8bd5\u8986\u76d6\u6211\u4eec\u7684\u67e5\u8be2\u9884\u6d4b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"cast" :1,\n"year" : 1,\n"title" : 1\n}\n')),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,o.Z)("/img/chapter-2-atlas/data-explorer-index.png"),border:"1px"})),(0,r.kt)(s.Z,{value:"compass",label:"Compass",mdxType:"TabItem"},(0,r.kt)("p",null,"  Atlas\u6570\u636e\u6d4f\u89c8\u5668\u5141\u8bb8\u6211\u4eec\u901a\u8fc7\u8f6c\u5230\u201c\u7d22\u5f15\u201d\u9009\u9879\u5361\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u7d22\u5f15\u6765\u521b\u5efa\u7d22\u5f15\u3002\u6309\u4ee5\u4e0b\u987a\u5e8f\u6dfb\u52a0\u5b57\u6bb5\u4ee5\u5c1d\u8bd5\u8986\u76d6\u6211\u4eec\u7684\u67e5\u8be2\u9884\u6d4b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"cast" :1,\n"year" : 1,\n"title" : 1\n}\n')),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,o.Z)("/img/chapter-2-atlas/index-compass.png"),border:"1px"})),(0,r.kt)(s.Z,{value:"shell",label:"MongoDB Shell",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4f7f\u7528shell\u521b\u5efa\u7d22\u5f15\u662f\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"createIndex"),"\u547d\u4ee4\u5b8c\u6210\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\ndb.movies.createIndex(  {\n  "cast" :1,\n  "year" : 1,\n  "title" : 1\n})\n')))),(0,r.kt)("h3",{id:"2\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b\u7d22\u5f15\u521b\u5efa\u540e\u7684\u6267\u884c\u8ba1\u5212"},"2.\u73b0\u5728\u8ba9\u6211\u4eec\u770b\u770b\u7d22\u5f15\u521b\u5efa\u540e\u7684\u6267\u884c\u8ba1\u5212"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"compass",label:"Compass",mdxType:"TabItem"},(0,r.kt)("p",null," \u73b0\u5728\u67e5\u8be2\u6b63\u5728\u4f7f\u7528\u7d22\u5f15\u6765\u6700\u5c0f\u5316\u626b\u63cf\u6587\u6863\u7684\u6570\u91cf\uff0c\u4f46\u662f\u67e5\u8be2\u4ecd\u5728\u5185\u5b58\u4e2d\u8fdb\u884c\u6392\u5e8f"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,o.Z)("/img/chapter-2-atlas/compass-no-sort.png"),border:"1px"})),(0,r.kt)(s.Z,{value:"shell",label:"MongoDB Shell",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5728\u8be5\u67e5\u8be2\u4e0a\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},".explain(true)"),"\u8f93\u51fa\uff0c\u6211\u4eec\u5c06\u770b\u5230\u4f7f\u7528\u4e86\u7d22\u5f15(IXSCAN\u9636\u6bb5)\uff0c\u4f46\u662f\u5b58\u5728\u5185\u5b58\u6392\u5e8f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' db.movies.find(\n    {\n        "cast": "Bill Murray",\n        "year": {$gte: 2000}\n    }\n)\n.sort(\n    {"title": 1}\n).explain(true)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"}," inputStage: {\n        stage: 'SORT',\n        nReturned: 12,\n        executionTimeMillisEstimate: 0,\n        works: 26,\n        advanced: 12,\n        needTime: 13,\n        needYield: 0,\n        saveState: 0,\n        restoreState: 0,\n        isEOF: 1,\n        sortPattern: {\n          title: 1\n        },\n        memLimit: 33554432,\n        type: 'default',\n        totalDataSizeSorted: 1281,\n        usedDisk: false,\n        inputStage: {\n          stage: 'IXSCAN',\n")))),(0,r.kt)("h3",{id:"3\u8ba9\u6211\u4eec\u66f4\u6539\u5b57\u6bb5\u7684\u987a\u5e8f\u4ee5\u7b26\u5408esr\u76f8\u7b49\u6392\u5e8f\u548c\u8303\u56f4\u987a\u5e8f"},"3.\u8ba9\u6211\u4eec\u66f4\u6539\u5b57\u6bb5\u7684\u987a\u5e8f\u4ee5\u7b26\u5408ESR(\u76f8\u7b49\u3001\u6392\u5e8f\u548c\u8303\u56f4)\u987a\u5e8f\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"compass",label:"Compass",mdxType:"TabItem"},(0,r.kt)("p",null,"\u8981\u9075\u5faaESR\u89c4\u5219\uff0c\u8ba9\u6211\u4eec\u6309\u7167\u6211\u4eec\u7684\u67e5\u8be2",(0,r.kt)("inlineCode",{parentName:"p"},"cast-\u76f8\u7b49"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"title-\u6392\u5e8f"),"\u548c\u6700\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"year-\u8303\u56f4"),"\u7684\u987a\u5e8f\u4f7f\u7528\u5982\u4e0b\u987a\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n"cast" :1,\n"title" : 1,\n"year" : 1\n}\n')),(0,r.kt)("p",null,"\u5e76\u5220\u9664\u4ee5\u524d\u7684\u7d22\u5f15\u3002"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,o.Z)("/img/chapter-2-atlas/compass-ESR.png"),border:"1px"})),(0,r.kt)(s.Z,{value:"shell",label:"MongoDB Shell",mdxType:"TabItem"},(0,r.kt)("p",null," \u8981\u9075\u5faaESR\u89c4\u5219\uff0c\u8ba9\u6211\u4eec\u6309\u7167\u6211\u4eec\u7684\u67e5\u8be2",(0,r.kt)("inlineCode",{parentName:"p"},"cast-\u76f8\u7b49"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"title-\u6392\u5e8f"),"\u548c\u6700\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"year-\u8303\u56f4"),"\u7684\u987a\u5e8f\u4f7f\u7528\u5982\u4e0b\u987a\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'\ndb.movies.createIndex(  {\n  "cast" :1,\n    "title" : 1\n  "year" : 1\n\n})\n\ndb.movies.dropIndex({\n  "cast" :1,\n  "year" : 1,\n  "title" : 1\n})\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' db.movies.find(\n    {\n        "cast": "Bill Murray",\n        "year": {$gte: 2000}\n    }\n)\n.sort(\n    {"title": 1}\n).explain(true)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"}," executionStages: {\n      stage: 'FETCH',\n      nReturned: 12,\n      executionTimeMillisEstimate: 0,\n      works: 21,\n      advanced: 12,\n      needTime: 8,\n      needYield: 0,\n      saveState: 0,\n      restoreState: 0,\n      isEOF: 1,\n      docsExamined: 12,\n      alreadyHasObj: 0,\n      inputStage: {\n        stage: 'IXSCAN',\n")))),(0,r.kt)("h3",{id:"4\u606d\u559c\u6b63\u5982\u60a8\u6240\u770b\u5230\u7684\u67e5\u8be2\u4ec5\u4f7f\u7528\u7d22\u5f15\u6ca1\u6709\u6392\u5e8f\u9636\u6bb5"},"4.\u606d\u559c\uff01\uff01\u6b63\u5982\u60a8\u6240\u770b\u5230\u7684\uff0c\u67e5\u8be2\u4ec5\u4f7f\u7528\u7d22\u5f15\uff0c\u6ca1\u6709\u6392\u5e8f\u9636\u6bb5\u3002"))}g.isMDXComponent=!0}}]);