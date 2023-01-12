"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5876],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,y=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,c={permalink:"/en/blog/\u5b57\u7b26\u4e32\u5339\u914d\u95ee\u9898-KMP\u7b97\u6cd5",editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/blog/\u5b57\u7b26\u4e32\u5339\u914d\u95ee\u9898-KMP\u7b97\u6cd5.md",source:"@site/blog/\u5b57\u7b26\u4e32\u5339\u914d\u95ee\u9898-KMP\u7b97\u6cd5.md",title:"\u5b57\u7b26\u4e32\u5339\u914d\u95ee\u9898-KMP\u7b97\u6cd5",description:"KMP\u7b97\u6cd5",date:"2023-01-12T09:02:02.000Z",formattedDate:"January 12, 2023",tags:[],readingTime:.645,hasTruncateMarker:!1,authors:[],frontMatter:{},nextItem:{title:"Integer\u6bd4\u8f83\u76f8\u7b49\u95ee\u9898",permalink:"/en/blog/Integer\u6bd4\u8f83\u76f8\u7b49"}},l={authorsImageUrls:[]},p=[{value:"KMP\u7b97\u6cd5",id:"kmp\u7b97\u6cd5",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"kmp\u7b97\u6cd5"},"KMP\u7b97\u6cd5"),(0,o.kt)("p",null,"KMP\u7b97\u6cd5\u662f\u4e00\u79cd\u9ad8\u6548\u7684\u5b57\u7b26\u4e32\u5339\u914d\u7b97\u6cd5\uff0c\u5728\u4f20\u7edf\u66b4\u529b\u904d\u5386\u5339\u914d\u7684\u57fa\u7840\u4e0a\u505a\u4e86\u4e00\u5b9a\u7684\u4f18\u5316\u3002"),(0,o.kt)("p",null,"\u9996\u5148\uff0cKMP\u7b97\u6cd5\u7684\u5b9e\u73b0\u4e5f\u662f\u4f7f\u7528\u4e86\u56de\u9000\u601d\u60f3\uff0c\u4e0d\u8fc7\u4e0e\u66b4\u529b\u904d\u5386\u4e0d\u540c\uff0cKMP\u7684\u56de\u9000\u662f\u8ba9\u5b50\u4e32\u8fdb\u884c\u5339\u914d\uff0c\u800c\u4e0d\u662f\u4e3b\u4e32\u3002"),(0,o.kt)("p",null,"\u4e3b\u8981\u601d\u60f3\u662f\uff1a",(0,o.kt)("strong",{parentName:"p"},"\u5f53\u51fa\u73b0\u5b57\u7b26\u4e32\u4e0d\u5339\u914d\uff0c\u53ef\u4ee5\u77e5\u9053\u4e00\u90e8\u5206\u4e4b\u524d\u5df2\u7ecf\u5339\u914d\u7684\u6587\u672c\u5185\u5bb9\uff0c\u5229\u7528\u8fd9\u4e9b\u4fe1\u606f\u907f\u514d\u4ece\u5934\u518d\u53bb\u5339\u914d"),"\u3002"))}s.isMDXComponent=!0}}]);