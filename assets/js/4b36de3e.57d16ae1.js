"use strict";(self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[]).push([[361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),s=a(6550),i=a(1980),c=a(7392),u=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=g({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==s&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},7563:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>m,assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162),s=a(4996);const i={sidebar_position:1},c="1. \u8bbf\u95ee\u60a8\u7684\u96c6\u7fa4",u={unversionedId:"access-your-cluster/access-the-atlas-cluster",id:"access-your-cluster/access-the-atlas-cluster",title:"1. \u8bbf\u95ee\u60a8\u7684\u96c6\u7fa4",description:"\u6211\u4eec\u6709\u591a\u79cd\u65b9\u5f0f\u8fde\u63a5\u5230MongoDB Atlas\u96c6\u7fa4\uff0c\u9664\u4e86\u5e94\u7528\u9a71\u52a8\u8fde\u63a5\u5916\uff0c\u5e38\u89c1\u7684\u6709\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\uff0c\u5927\u5bb6\u53ef\u4ee5\u5206\u522b\u5c1d\u8bd5\u4e00\u4e0b",source:"@site/docs/access-your-cluster/access-the-atlas-cluster.md",sourceDirName:"access-your-cluster",slug:"/access-your-cluster/access-the-atlas-cluster",permalink:"/atlas-workshop/docs/access-your-cluster/access-the-atlas-cluster",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/access-your-cluster/access-the-atlas-cluster.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7ec3\u4e60B: \u8bbf\u95ee\u60a8\u7684Atlas\u96c6\u7fa4",permalink:"/atlas-workshop/docs/category/\u7ec3\u4e60b-\u8bbf\u95ee\u60a8\u7684atlas\u96c6\u7fa4"},next:{title:"\u7ec3\u4e60C: \u7d22\u5f15\u4e0e\u6267\u884c\u8ba1\u5212",permalink:"/atlas-workshop/docs/category/\u7ec3\u4e60c-\u7d22\u5f15\u4e0e\u6267\u884c\u8ba1\u5212"}},p={},d=[{value:"\u7f16\u8f91/\u6dfb\u52a0\u6587\u6863",id:"\u7f16\u8f91\u6dfb\u52a0\u6587\u6863",level:4},{value:"\u9884\u89c8",id:"\u9884\u89c8",level:4},{value:"\u5b89\u88c5 Compass",id:"\u5b89\u88c5-compass",level:3},{value:"\u4f7f\u7528 Compass",id:"\u4f7f\u7528-compass",level:3},{value:"\u9884\u89c8",id:"\u9884\u89c8-1",level:4},{value:"\u5b89\u88c5 <code>mongosh</code>",id:"\u5b89\u88c5-mongosh",level:3}],m=e=>{let{children:t,color:a,link:n}=e;return(0,r.kt)("a",{href:n},(0,r.kt)("span",{style:{backgroundColor:a,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"}},t))},g={toc:d,Highlight:m},h="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"1-\u8bbf\u95ee\u60a8\u7684\u96c6\u7fa4"},"1. \u8bbf\u95ee\u60a8\u7684\u96c6\u7fa4"),(0,r.kt)("p",null,"\u6211\u4eec\u6709\u591a\u79cd\u65b9\u5f0f\u8fde\u63a5\u5230MongoDB Atlas\u96c6\u7fa4\uff0c\u9664\u4e86\u5e94\u7528\u9a71\u52a8\u8fde\u63a5\u5916\uff0c\u5e38\u89c1\u7684\u6709\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\uff0c\u5927\u5bb6\u53ef\u4ee5\u5206\u522b\u5c1d\u8bd5\u4e00\u4e0b"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"data-explorer",label:"1. Data Explorer",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  \u6570\u636e\u6d4f\u89c8\u5668\u662f\u9ed8\u8ba4\u542f\u7528\u7684\uff0c\u53ef\u901a\u8fc7\u96c6\u7fa4\u89c6\u56fe\u4e0a\u7684",(0,r.kt)("strong",{parentName:"p"},"Collections"),"\u9009\u9879\u5361\u8bbf\u95ee\u3002"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/data-explorer-dbs.png"),border:"1px",width:"700"}),(0,r.kt)("h4",{id:"\u7f16\u8f91\u6dfb\u52a0\u6587\u6863"},"\u7f16\u8f91/\u6dfb\u52a0\u6587\u6863"),(0,r.kt)("p",null,"  \u8bf7\u53c2\u9605\u4ee5\u4e0b",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/atlas/atlas-ui/documents/#create--view--update--and-delete-documents"},"\u6587\u6863"),"\uff0c\u4e86\u89e3\u5982\u4f55\u201c\u4fee\u6539\u201d\uff0c\u201c\u521b\u5efa\u201d\u548c\u201c\u5220\u9664\u201d\u6587\u6863\u3002"),(0,r.kt)("p",null,"  \u4f5c\u4e3a\u7ec3\u4e60\uff0c\u60a8\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"users"),"\u7684\u96c6\u5408\uff1a"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/createCollection.png"),border:"1px",width:"700"}),(0,r.kt)("p",null," \u5728\u63d2\u5165\u6587\u6863\u9009\u9879\u5361\u4e2d\u63d2\u5165\u5982\u4e0b\u7528\u6237\u6587\u6863\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Alice",\n    "age": 26,\n    "email": "alice@abc.com"\n  },\n  {\n    "name": "Bob",\n    "age": 43,\n    "email": "bob@def.com"\n  },\n  {\n    "name": "Carol",\n    "age": 19,\n    "email": "carol@xyz.com"\n  }\n]\n')),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/insert-documents.png"),border:"1px",width:"700"}),(0,r.kt)("h4",{id:"\u9884\u89c8"},"\u9884\u89c8"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/insert-doc2.png"),border:"1px",width:"700"})),(0,r.kt)(l.Z,{value:"compass",label:"2. Compass",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u5b89\u88c5-compass"},"\u5b89\u88c5 Compass"),(0,r.kt)("admonition",{title:"\u9009\u62e9\u60a8\u7684\u5e73\u53f0",type:"tip"},(0,r.kt)("br",null),(0,r.kt)("div",{className:"compass-platforms"},(0,r.kt)(m,{color:"#555555",link:"https://downloads.mongodb.com/compass/mongodb-compass-1.36.2-darwin-x64.dmg",mdxType:"Highlight"},"Compass on MacOS"),(0,r.kt)(m,{color:"#555555",link:"https://downloads.mongodb.com/compass/mongodb-compass-1.36.2-darwin-arm64.dmg",mdxType:"Highlight"},"Compass on MacOS (M1)")," ",(0,r.kt)(m,{color:"#00A4EF",link:"https://downloads.mongodb.com/compass/mongodb-compass-1.36.2-win32-x64.exe",mdxType:"Highlight"},"Compass on Windows")," ",(0,r.kt)(m,{color:"#E95420",link:"https://downloads.mongodb.com/compass/mongodb-compass_1.36.2_amd64.deb",mdxType:"Highlight"},"Compass on Ubuntu"))),(0,r.kt)("p",null,"\u8bf7\u6309\u7167\u4ee5\u4e0b",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/compass/master/install/"},"\u6307\u5357"),"\u5728\u60a8\u7684\u5de5\u4f5c\u7ad9\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5\u4e0eCompass\u76f8\u5173\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u4f7f\u7528-compass"},"\u4f7f\u7528 Compass"),(0,r.kt)("p",null,"\u6253\u5f00Compass\u540e\uff0c\u60a8\u5c06\u83b7\u5f97\u8fde\u63a5\u5b57\u7b26\u4e32\u8f93\u5165\u5c4f\u5e55\u3002"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/default-connection.png"),border:"1px",width:"700"}),(0,r.kt)("p",null,"\u4f7f\u7528Atlas\u201c\u8fde\u63a5\u201d\u9009\u9879\u5361\u83b7\u53d6\u60a8\u8bbf\u95eeAtlas\u90e8\u7f72\u6240\u9700\u7684\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/atlas-compass.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"\u590d\u5236\u8fde\u63a5\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/copy-paste-conn.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"\u901a\u8fc7Compass\u8fdb\u884c\u7c98\u8d34\u548c\u8fde\u63a5\uff1a"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/compass-connect.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u4ee5\u4e0b",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/compass/current/documents/"},"\u6587\u6863")," \uff0c\u4e86\u89e3\u5982\u4f55\u201c\u4fee\u6539\u201d\uff0c\u201c\u521b\u5efa\u201d\u548c\u201c\u5220\u9664\u201d\u6587\u6863\u3002"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u7ec3\u4e60\uff0c\u60a8\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"users"),"\u7684\u96c6\u5408\uff1a"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/compass-database-create.png"),width:"500"}),(0,r.kt)("p",null,"\u5728\u201cADD DATA\u201d>\u201cInsert document\u201d json\u89c6\u56fe\u4e2d\u63d2\u5165\u4e00\u4e2a\u7528\u6237\u6587\u6863\u6570\u7ec4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "Alice",\n    "age": 26,\n    "email": "alice@abc.com"\n  },\n  {\n    "name": "Bob",\n    "age": 43,\n    "email": "bob@def.com"\n  },\n  {\n    "name": "Carol",\n    "age": 19,\n    "email": "carol@xyz.com"\n  }\n]\n')),(0,r.kt)("h4",{id:"\u9884\u89c8-1"},"\u9884\u89c8"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/insertData.png"),width:"500"})),(0,r.kt)(l.Z,{value:"shell",label:"3. MongoDB Shell",mdxType:"TabItem"},(0,r.kt)("h3",{id:"\u5b89\u88c5-mongosh"},"\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"h3"},"mongosh")),(0,r.kt)("p",null,"\u8f6c\u5230Atlas\u96c6\u7fa4\u4e0a\u7684\u8fde\u63a5\u9009\u9879\u5361\uff0c\u9009\u62e9\u201c\u4f7f\u7528MongoDB Shell\u8fde\u63a5\u201d\u9009\u9879"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/atlas-shell.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"\u4e0b\u8f7d\u9002\u7528\u4e8e\u60a8\u64cd\u4f5c\u7cfb\u7edf\u7684\u76f8\u5173shell\u5e76\u542f\u52a8\u8fde\u63a5\u547d\u4ee4"),(0,r.kt)("img",{alt:"'Create a database' section in MongoDB Atlas highlighting the 'Build a database' button",src:(0,s.Z)("/img/chapter-1-atlas/shell-connect.png"),border:"1px",width:"500"}),(0,r.kt)("p",null,"\u8bf7\u53c2\u9605\u4ee5\u4e0b",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/docs/mongodb-shell/connect/"},"\u6307\u5357"),"\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4f5c\u4e3a\u7ec3\u4e60\uff0c\u60a8\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"users"),"\u7684\u96c6\u5408\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"show databases\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"use test\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'db.users.insertMany([\n    {\n      "name": "Alice",\n      "age": 26,\n      "email": "alice@abc.com"\n    },\n    {\n      "name": "Bob",\n      "age": 43,\n      "email": "bob@def.com"\n    },\n    {\n      "name": "Carol",\n      "age": 19,\n      "email": "carol@xyz.com"\n    }\n])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"db.users.find()\n")))))}b.isMDXComponent=!0}}]);