"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9852],{433:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},2808:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),l=n(6010),i=n(3735),o=n(6775),u=n(4423),s=n(636),d=n(9200);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=f({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=null!=u?u:p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error("Can't select invalid tab value="+e);o(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var h=n(5730);const g="tabList__CuJ",v="tabItem_LNqP";function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==o&&(p(t),u(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var a;const t=d.indexOf(e.currentTarget)+1;n=null!=(a=d[t])?a:d[0];break}case"ArrowLeft":{var r;const t=d.indexOf(e.currentTarget)-1;n=null!=(r=d[t])?r:d[d.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},8596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),l=n(2808),i=n(433);const o={sidebar_position:1},u="Getting started",s={unversionedId:"get-started",id:"get-started",title:"Getting started",description:"react-native-iap will help you access the In-App purchases capabilities of your device on iOS, and Android (Play Store and Amazon).",source:"@site/docs/get-started.md",sourceDirName:".",slug:"/get-started",permalink:"/docs/get-started",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/get-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Lifecycle",permalink:"/docs/guides/lifecycle"}},d={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"<code>iOS</code>",id:"ios",level:3},{value:"<code>Android</code>",id:"android",level:3},{value:"With Android Support",id:"with-android-support",level:4},{value:"With AndroidX",id:"with-androidx",level:4},{value:"Configure the payment provider",id:"configure-the-payment-provider",level:4},{value:"Manual installation",id:"manual-installation",level:2},{value:"<code>iOS</code>",id:"ios-1",level:3},{value:"<code>Android</code>",id:"android-1",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-native-iap")," will help you access the In-App purchases capabilities of your device on ",(0,r.kt)("inlineCode",{parentName:"p"},"iOS"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Android")," (Play Store and Amazon)."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This library will provide the basic features to consume In-App purchases on the client-side, however you'll have to implement the server-side to validate your receipts (which is probably the most time consuming part to do it correctly).")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react")," >= 16.13.1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"react-native")," >= 0.65.1")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Start with installing the package:"),(0,r.kt)(l.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-native-iap\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add react-native-iap\n")))),(0,r.kt)("h3",{id:"ios"},(0,r.kt)("inlineCode",{parentName:"h3"},"iOS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios; pod install; cd -\n")),(0,r.kt)("p",null,"You can now get started hacking!"),(0,r.kt)("h3",{id:"android"},(0,r.kt)("inlineCode",{parentName:"h3"},"Android")),(0,r.kt)("h4",{id:"with-android-support"},"With Android Support"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," and modify the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'buildscript {\n  ext {\n    ...\n+   supportLibVersion = "28.0.0"\n  }\n}\n')),(0,r.kt)("h4",{id:"with-androidx"},"With AndroidX"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/build.gradle")," and modify the following lines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'buildscript {\n  ext {\n    ...\n+    androidXAnnotation = "1.1.0"\n+    androidXBrowser = "1.0.0"\n+    minSdkVersion = 24\n+    kotlinVersion = "1.6.0"\n  }\n}\n\ndependencies {\n  ...\n+ classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion"\n}\n')),(0,r.kt)("h4",{id:"configure-the-payment-provider"},"Configure the payment provider"),(0,r.kt)("p",null,"You can support either ",(0,r.kt)("inlineCode",{parentName:"p"},"Play Store"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Amazon")," or both."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To only support ",(0,r.kt)("inlineCode",{parentName:"li"},"Play Store"),", go to ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'defaultConfig {\n  ...\n+ missingDimensionStrategy "store", "play"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To support both:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},'android {\n  ...\n+ flavorDimensions "appstore"\n+\n+ productFlavors {\n+   googlePlay {\n+     dimension "appstore"\n+     missingDimensionStrategy "store", "play"\n+   }\n+\n+   amazon {\n+     dimension "appstore"\n+     missingDimensionStrategy "store", "amazon"\n+   }\n+ }\n}\n')),(0,r.kt)("p",null,"And your are now good to go!"),(0,r.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,r.kt)("h3",{id:"ios-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"iOS")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open up ",(0,r.kt)("inlineCode",{parentName:"li"},"ios/Podfile")),(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"pod 'RNIap', :path => '../node_modules/react-native-iap'")),(0,r.kt)("li",{parentName:"ol"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"pod install"))),(0,r.kt)("h3",{id:"android-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"Android")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open up ",(0,r.kt)("inlineCode",{parentName:"p"},"android/app/src/main/java/[...]/MainApplication.java"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"import com.dooboolab.RNIap.RNIapPackage;")," at the top of the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add ",(0,r.kt)("inlineCode",{parentName:"p"},"new RNIapPackage()")," to the list returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"getPackages()")," method")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Append the following lines to ",(0,r.kt)("inlineCode",{parentName:"p"},"android/settings.gradle"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ include ':react-native-iap'\n+ project(':react-native-iap').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-iap/android')\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Insert the following lines inside the dependencies block in ",(0,r.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-diff"},"+ implementation project(':react-native-iap')\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Finally ",(0,r.kt)("a",{parentName:"li",href:"#configure-the-payment-provider"},"configure the payment provider")," described above.")))}m.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);