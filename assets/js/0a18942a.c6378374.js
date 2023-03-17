"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6097],{4800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={},i="getPromotedProductIOS",c={unversionedId:"api-reference/methods/ios/get-promoted-product-ios",id:"api-reference/methods/ios/get-promoted-product-ios",title:"getPromotedProductIOS",description:"Should get products promoted on the App Store.",source:"@site/docs/api-reference/methods/ios/get-promoted-product-ios.md",sourceDirName:"api-reference/methods/ios",slug:"/api-reference/methods/ios/get-promoted-product-ios",permalink:"/docs/api-reference/methods/ios/get-promoted-product-ios",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api-reference/methods/ios/get-promoted-product-ios.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"getPendingPurchasesIOS",permalink:"/docs/api-reference/methods/ios/get-pending-purchases-ios"},next:{title:"presentCodeRedemptionSheetIOS",permalink:"/docs/api-reference/methods/ios/present-code-redemption-sheet-ios"}},p={},s=[{value:"Signature",id:"signature",level:2},{value:"Usage",id:"usage",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getpromotedproductios"},(0,n.kt)("inlineCode",{parentName:"h1"},"getPromotedProductIOS")),(0,n.kt)("p",null,"Should get products promoted on the App Store."),(0,n.kt)("p",null,"Indicates the the App Store purchase should continue from the app instead of the App Store."),(0,n.kt)("h2",{id:"signature"},"Signature"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"getPromotedProductIOS(): Promise<ProductProduct | null>;\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {useCallback} from 'react';\nimport {View} from 'react-native';\nimport {getPromotedProductIOS} from 'react-native-iap';\n\nconst App = () => {\n  const promotedProduct = useCallback(async () => await getPromotedProductIOS());\n\n  return <View />;\n}\n")),(0,n.kt)("p",null,"TODO: works with listener to get the products"))}u.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},l=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),l=s(r),m=n,f=l["".concat(p,".").concat(m)]||l[m]||u[m]||a;return r?o.createElement(f,i(i({ref:t},d),{},{components:r})):o.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=l;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}l.displayName="MDXCreateElement"}}]);