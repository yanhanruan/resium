"use strict";(self.webpackChunkresium_docs=self.webpackChunkresium_docs||[]).push([[5869],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=p(n),c=r,k=s["".concat(m,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,l(l({ref:e},d),{},{components:n})):a.createElement(k,l({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[s]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8590:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"ClassificationPrimitive"},l="ClassificationPrimitive",o={unversionedId:"components/ClassificationPrimitive",id:"components/ClassificationPrimitive",title:"ClassificationPrimitive",description:"ClassificationPrimitive is a classification primitive in the PrimitiveCollection.",source:"@site/docs/components/ClassificationPrimitive.mdx",sourceDirName:"components",slug:"/components/ClassificationPrimitive",permalink:"/components/ClassificationPrimitive",draft:!1,editUrl:"https://github.com/reearth/resium/edit/main/docs/docs/components/ClassificationPrimitive.mdx",tags:[],version:"current",frontMatter:{title:"ClassificationPrimitive"},sidebar:"docs",previous:{title:"CesiumWidget",permalink:"/components/CesiumWidget"},next:{title:"Clock",permalink:"/components/Clock"}},m={},p=[{value:"Availability",id:"availability",level:2},{value:"Properties",id:"properties",level:2},{value:"Cesium properties",id:"cesium-properties",level:3},{value:"Cesium read-only properties",id:"cesium-read-only-properties",level:3},{value:"Cesium events",id:"cesium-events",level:3},{value:"Other properties",id:"other-properties",level:3}],d={toc:p},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"classificationprimitive"},"ClassificationPrimitive"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ClassificationPrimitive")," is a classification primitive in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimitiveCollection"),"."),(0,r.kt)("p",null,"Primitive is a low layer API for geographical visualization.\n",(0,r.kt)("a",{parentName:"p",href:"/components/entity"},"Entity")," is more recommended unless performance issues."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cesium element"),": ",(0,r.kt)("a",{parentName:"li",href:"https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html"},"ClassificationPrimitive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),": ",(0,r.kt)("a",{parentName:"li",href:"https://resium.reearth.io/examples/?path=/story/classificationprimitive--basic%22"},"ClassificationPrimitive"))),(0,r.kt)("h2",{id:"availability"},"Availability"),(0,r.kt)("p",null,"Inside ",(0,r.kt)("a",{parentName:"p",href:"/components/Viewer"},"Viewer"),", ",(0,r.kt)("a",{parentName:"p",href:"/components/CesiumWidget"},"CesiumWidget"),", or ",(0,r.kt)("a",{parentName:"p",href:"/components/GroundPrimitiveCollection"},"GroundPrimitiveCollection")," component.\nIf this component is inside GroundPrimitiveCollection component, a classification primitive object will be attached to the ground primitive collection of the scene.\nOtherwise, a classification primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"cesium-properties"},"Cesium properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debugShowBoundingVolume"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"classificationType"),(0,r.kt)("td",{parentName:"tr",align:null},"ClassificationType"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debugShowShadowVolume"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"cesium-read-only-properties"},"Cesium read-only properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"geometryInstances"),(0,r.kt)("td",{parentName:"tr",align:null},"any[] ","|"," GeometryInstance"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vertexCacheOptimize"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"interleave"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"releaseGeometryInstances"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowPicking"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"asynchronous"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compressVertices"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appearance"),(0,r.kt)("td",{parentName:"tr",align:null},"Appearance"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"cesium-events"},"Cesium events"),(0,r.kt)("p",null,"N/A"),(0,r.kt)("h3",{id:"other-properties"},"Other properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDoubleClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseDown"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseUp"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMiddleClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMiddleDown"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMiddleUp"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseMove"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPinchEnd"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPinchMove"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPinchStart"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRightClick"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRightDown"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onRightUp"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseEnter"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMouseLeave"),(0,r.kt)("td",{parentName:"tr",align:null},"(movement: CesiumMovementEvent, target: T) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onReady"),(0,r.kt)("td",{parentName:"tr",align:null},"(primitive: ClassificationPrimitive) =",">"," void"),(0,r.kt)("td",{parentName:"tr",align:null},"Calls when ",(0,r.kt)("a",{parentName:"td",href:"https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html#readyPromise"},"Primitive#readyPromise")," is fullfilled")))))}u.isMDXComponent=!0}}]);