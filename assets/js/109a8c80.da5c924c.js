"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[6784],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9793:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"SkyBox"},i="SkyBox",l={unversionedId:"components/SkyBox",id:"components/SkyBox",title:"SkyBox",description:"SkyBox can operate the SkyBox in the scene.",source:"@site/docs/components/SkyBox.mdx",sourceDirName:"components",slug:"/components/SkyBox",permalink:"/components/SkyBox",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/SkyBox.mdx",tags:[],version:"current",frontMatter:{title:"SkyBox"},sidebar:"docs",previous:{title:"SkyAtmosphere",permalink:"/components/SkyAtmosphere"},next:{title:"Sun",permalink:"/components/Sun"}},p={},s=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2},{value:"Cesium properties",id:"cesium-properties",level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",level:3},{value:"Cesium events",id:"cesium-events",level:3},{value:"Other properties",id:"other-properties",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"skybox"},"SkyBox"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SkyBox")," can operate the SkyBox in the scene.\nAll properties are applied to single SkyBox in the scene."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,o.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/SkyBox.html"},"SkyBox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Example"),": ",(0,o.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/skybox--basic%22"},"SkyBox"))),(0,o.kt)("h2",{id:"availability"},"Availability"),(0,o.kt)("p",null,"SkyBox can be mounted inside",(0,o.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," or ",(0,o.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components.\nIt can not be mounted more than once for each Viewer or CesiumWidget."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"show"),(0,o.kt)("td",{parentName:"tr",align:null},"boolean"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"sources"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,o.kt)("p",null,"N/A"),(0,o.kt)("h3",{id:"other-properties"},"Other properties"),(0,o.kt)("p",null,"N/A"))}m.isMDXComponent=!0}}]);