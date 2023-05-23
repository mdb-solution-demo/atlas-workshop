"use strict";(self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[]).push([[952],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6293:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905)),o=r(4996);const i={sidebar_position:4},l="1.\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801\uff08Terraform\uff09",s={unversionedId:"Infr-as-code/infr-as-code",id:"Infr-as-code/infr-as-code",title:"1.\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801\uff08Terraform\uff09",description:"1. \u521b\u5efa\u5e76\u4f7f\u7528Atlas API Key",source:"@site/docs/Infr-as-code/infr-as-code.md",sourceDirName:"Infr-as-code",slug:"/Infr-as-code/",permalink:"/atlas-workshop/docs/Infr-as-code/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Infr-as-code/infr-as-code.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u7ec3\u4e60D: \u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801(IaC)",permalink:"/atlas-workshop/docs/category/\u7ec3\u4e60d-\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801iac"},next:{title:"\u9644\u5f55: \u5e38\u89c1\u95ee\u9898",permalink:"/atlas-workshop/docs/category/\u9644\u5f55-\u5e38\u89c1\u95ee\u9898"}},p={},c=[{value:"1. \u521b\u5efa\u5e76\u4f7f\u7528Atlas API Key",id:"1-\u521b\u5efa\u5e76\u4f7f\u7528atlas-api-key",level:2},{value:"2. \u5f00\u59cb\u81ea\u52a8\u521b\u5efaAtlas\u8d44\u6e90",id:"2-\u5f00\u59cb\u81ea\u52a8\u521b\u5efaatlas\u8d44\u6e90",level:2}],d={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"1\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801terraform"},"1.\u57fa\u7840\u67b6\u6784\u5373\u4ee3\u7801\uff08Terraform\uff09"),(0,n.kt)("h2",{id:"1-\u521b\u5efa\u5e76\u4f7f\u7528atlas-api-key"},"1. \u521b\u5efa\u5e76\u4f7f\u7528Atlas API Key"),(0,n.kt)("p",null,"\u6253\u5f00\u5e76\u767b\u5f55",(0,n.kt)("a",{parentName:"p",href:"https://cloud.mongodb.com"},"MongoDB Atlas"),"\uff0c\u70b9\u51fb\u4e0a\u6392\u6309\u94ae",(0,n.kt)("inlineCode",{parentName:"p"},"Access Manager"),",\u5e76\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"p"},"Organization Access"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/access-mgr.png"),border:"1px",width:"700"}),(0,n.kt)("p",null,"\u6253\u5f00API Keys\u9009\u9879\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"p"},"Create API Key"),"\u6309\u94ae"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/create-api-key.png"),border:"1px",width:"700"}),(0,n.kt)("p",null,"\u8f93\u5165\u76f8\u5173\u63cf\u8ff0\u4fe1\u606f\uff0c\u5e76\u5c06Organization Permissions\u52fe\u9009",(0,n.kt)("inlineCode",{parentName:"p"},"Organization Owner"),"\uff0c\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/create-api-key-2.png"),border:"1px",width:"700"}),(0,n.kt)("p",null,"\u5206\u522b\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"Public Key"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"Private Key"),"\u590d\u5236\u5230\u672c\u5730\u6587\u672c\u6587\u4ef6\u4e2d\u8fdb\u884c\u4fdd\u5b58\uff0c\u70b9\u51fb",(0,n.kt)("inlineCode",{parentName:"p"},"Done"),"\u6309\u94ae\u5b8c\u6210\u64cd\u4f5c"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/copy-key-save.png"),border:"1px",width:"700"}),(0,n.kt)("h2",{id:"2-\u5f00\u59cb\u81ea\u52a8\u521b\u5efaatlas\u8d44\u6e90"},"2. \u5f00\u59cb\u81ea\u52a8\u521b\u5efaAtlas\u8d44\u6e90"),(0,n.kt)("p",null,"\u6253\u5f00CMD\u7a97\u53e3\uff0c\u514b\u9686",(0,n.kt)("strong",{parentName:"p"},"Mongo IaC"),"\u4ee3\u7801\u81f3\u672c\u5730"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mdb-solution-demo/infr-as-code.git\n")),(0,n.kt)("p",null,"\u6253\u5f00",(0,n.kt)("inlineCode",{parentName:"p"},"infr-as-code/tf/variables.tf"),"\u6587\u4ef6\uff0c\u5206\u522b\u5c06\u4e0a\u9762\u53d6\u5f97\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"Public Key"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"Private Key"),"\u8fdb\u884c\u8f93\u5165\u5230\u6587\u4ef6\u53d8\u91cf\u4e2d"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"vi infr-as-code/tf/variables.tf\n")),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/variable-change.png"),border:"1px",width:"300"}),(0,n.kt)("p",null,"\u6587\u4ef6\u4fdd\u5b58\u540e\u9000\u51fa\uff0c\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"infr-as-code/tf/"),"\u6587\u4ef6\u5939\u4e0b\uff0c\u8fd0\u884cIaC\u4ee3\u7801\uff0c\u6267\u884c\u8d44\u6e90\u81ea\u52a8\u521b\u5efa"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"terraform apply --auto-approve\n")),(0,n.kt)("p",null,"\u8d44\u6e90\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728Atlas Projects\u5217\u8868\u4e2d\u770b\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"devax-day-for-gaming")," \u9879\u76ee"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/prj-created.png"),border:"1px",width:"700"}),(0,n.kt)("p",null,"\u70b9\u51fb\u8fdb\u5165\u9879\u76ee\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u96c6\u7fa4",(0,n.kt)("inlineCode",{parentName:"p"},"cluster-devax"),"\u4e5f\u5df2\u7ecf\u521b\u5efa\u6210\u529f"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/cluster-created.png"),border:"1px",width:"700"}),(0,n.kt)("p",null,"\u5de6\u8fb9\u5bfc\u822a\u680f",(0,n.kt)("strong",{parentName:"p"},"Security"),"\u4e0b\u9762",(0,n.kt)("strong",{parentName:"p"},"Database Access"),"\u4e2d\u53ef\u4ee5\u770b\u5230\u7528\u6237\u5df2\u7ecf\u521b\u5efa\u6210\u529f"),(0,n.kt)("img",{alt:"Cluster type selection page highlighting the shared cluster option",src:(0,o.Z)("/img/chapter-3-atlas/user-created.png"),border:"1px",width:"700"}))}g.isMDXComponent=!0}}]);