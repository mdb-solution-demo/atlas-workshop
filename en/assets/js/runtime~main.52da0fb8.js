(()=>{"use strict";var e,t,r,o,a,n={},d={};function f(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,f),r.loaded=!0,r.exports}f.m=n,f.c=d,e=[],f.O=(t,r,o,a)=>{if(!r){var n=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var d=!0,c=0;c<r.length;c++)(!1&a||n>=a)&&Object.keys(f.O).every((e=>f.O[e](r[c])))?r.splice(c--,1):(d=!1,a<n&&(n=a));if(d){e.splice(l--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]},f.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return f.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,f.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var a=Object.create(null);f.r(a);var n={};t=t||[null,r({}),r([]),r(r)];for(var d=2&o&&e;"object"==typeof d&&!~t.indexOf(d);d=r(d))Object.getOwnPropertyNames(d).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,f.d(a,n),a},f.d=(e,t)=>{for(var r in t)f.o(t,r)&&!f.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce(((t,r)=>(f.f[r](e,t),t)),[])),f.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",195:"c4f5d8e4",361:"4b36de3e",414:"393be207",454:"d7ccc651",514:"1be78505",665:"ec702251",671:"0e384e19",676:"3082f756",698:"2735ef22",722:"28fb1897",746:"641b582c",817:"14eb3368",878:"928cdd22",917:"17679854",918:"17896441",919:"ebda4fc3",948:"adb47f1b",952:"83e1d31d"}[e]||e)+"."+{16:"063886e8",53:"ff65e476",85:"49593004",195:"7ebd6d22",272:"a8a771fd",339:"39b49aaa",343:"eda046d6",361:"9a88340c",414:"8d87d99d",454:"16309843",514:"109477cb",665:"a2247091",671:"e86471e6",676:"36e4e442",698:"0ab3d348",722:"e170e494",746:"207d9fc8",817:"4c9c6d0e",878:"8f889c4c",917:"b1972537",918:"76444b21",919:"c42cd335",948:"0a6ad0ea",952:"9aa5e0b6",972:"af47b1fb"}[e]+".js",f.miniCssF=e=>{},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},a="atlas-docs-workshop:",f.l=(e,t,r,n)=>{if(o[e])o[e].push(t);else{var d,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),l=0;l<i.length;l++){var s=i[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==a+r){d=s;break}}d||(c=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,f.nc&&d.setAttribute("nonce",f.nc),d.setAttribute("data-webpack",a+r),d.src=e),o[e]=[t];var u=(t,r)=>{d.onerror=d.onload=null,clearTimeout(b);var a=o[e];if(delete o[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(r))),t)return t(r)},b=setTimeout(u.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=u.bind(null,d.onerror),d.onload=u.bind(null,d.onload),c&&document.head.appendChild(d)}},f.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.p="/atlas-workshop/en/",f.gca=function(e){return e={17679854:"917",17896441:"918","935f2afb":"53","1f391b9e":"85",c4f5d8e4:"195","4b36de3e":"361","393be207":"414",d7ccc651:"454","1be78505":"514",ec702251:"665","0e384e19":"671","3082f756":"676","2735ef22":"698","28fb1897":"722","641b582c":"746","14eb3368":"817","928cdd22":"878",ebda4fc3:"919",adb47f1b:"948","83e1d31d":"952"}[e]||e,f.p+f.u(e)},(()=>{var e={303:0,532:0};f.f.j=(t,r)=>{var o=f.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(303|532)$/.test(t))e[t]=0;else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=f.p+f.u(t),d=new Error;f.l(n,(r=>{if(f.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",d.name="ChunkLoadError",d.type=a,d.request=n,o[1](d)}}),"chunk-"+t,t)}},f.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],d=r[1],c=r[2],i=0;if(n.some((t=>0!==e[t]))){for(o in d)f.o(d,o)&&(f.m[o]=d[o]);if(c)var l=c(f)}for(t&&t(r);i<n.length;i++)a=n[i],f.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return f.O(l)},r=self.webpackChunkatlas_docs_workshop=self.webpackChunkatlas_docs_workshop||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();