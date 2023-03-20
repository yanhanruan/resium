"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[5779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(r),c=a,k=u["".concat(i,".").concat(c)]||u[c]||d[c]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:a,o[1]=p;for(var m=2;m<l;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3735:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905));const l={title:"ShadowMap"},o="ShadowMap",p={unversionedId:"components/ShadowMap",id:"components/ShadowMap",title:"ShadowMap",description:"ShadowMap is the shadow map of the scene.",source:"@site/docs/components/ShadowMap.mdx",sourceDirName:"components",slug:"/components/ShadowMap",permalink:"/components/ShadowMap",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/ShadowMap.mdx",tags:[],version:"current",frontMatter:{title:"ShadowMap"},sidebar:"docs",previous:{title:"ScreenSpaceEventHandler",permalink:"/components/ScreenSpaceEventHandler"},next:{title:"SkyAtmosphere",permalink:"/components/SkyAtmosphere"}},i={},m=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2},{value:"Cesium properties",id:"cesium-properties",level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",level:3},{value:"Cesium events",id:"cesium-events",level:3},{value:"Other properties",id:"other-properties",level:3}],s={toc:m},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shadowmap"},"ShadowMap"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ShadowMap")," is the shadow map of the scene."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,a.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/ShadowMap.html"},"ShadowMap")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Example"),": ",(0,a.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/shadowmap--basic%22"},"ShadowMap"))),(0,a.kt)("h2",{id:"availability"},"Availability"),(0,a.kt)("p",null,"Inside ",(0,a.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer")," component or ",(0,a.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget")," components."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"darkness"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fadingEnabled"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"maximumDistance"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"normalOffset"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"softShadows"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,a.kt)("p",null,"N/A"),(0,a.kt)("h3",{id:"other-properties"},"Other properties"),(0,a.kt)("p",null,"N/A"))}d.isMDXComponent=!0}}]);