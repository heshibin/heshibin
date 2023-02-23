"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8976],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),E=n,m=d["".concat(i,".").concat(E)]||d[E]||s[E]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=E;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}E.displayName="MDXCreateElement"},26464:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(67294);function n(){return a.createElement(a.Fragment,null,"\u672c\u6587\u5185\u5bb9\u8f6c\u8f7d\u81ea",a.createElement("a",{href:"https://xdclass.net/",target:"_blank"},"\u5c0f\u6ef4\u8bfe\u5802"),"\u3002")}},94130:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905)),o=r(26464);const l={title:"\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",description:"Executors\u521b\u5efa\u7684\u7ebf\u7a0b\u6c60\u5e95\u5c42\u4e5f\u662f\u8c03\u7528`ThreadPoolExecutor`\uff0c\u53ea\u4e0d\u8fc7\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u3001\u961f\u5217\u3001\u62d2\u7edd\u7b56\u7565\u7b49\u3002\u5982\u679c\u4f7f\u7528\u4e0d\u5f53\uff0c\u4f1a\u9020\u6210\u8d44\u6e90\u8017\u5c3d\u95ee\u9898\u3002",keywords:["java","\u7ebf\u7a0b\u6c60","ThreadPoolExecutor","\u963f\u91cc\u7f16\u7801\u89c4\u8303"],date:new Date("2023-02-22T00:00:00.000Z"),tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-02"],last_update:{date:new Date("2023-02-22T00:00:00.000Z"),author:"machu"}},c=void 0,i={unversionedId:"\u5c0f\u8bb0/2023-02/22\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",id:"\u5c0f\u8bb0/2023-02/22\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",title:"\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",description:"Executors\u521b\u5efa\u7684\u7ebf\u7a0b\u6c60\u5e95\u5c42\u4e5f\u662f\u8c03\u7528`ThreadPoolExecutor`\uff0c\u53ea\u4e0d\u8fc7\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u3001\u961f\u5217\u3001\u62d2\u7edd\u7b56\u7565\u7b49\u3002\u5982\u679c\u4f7f\u7528\u4e0d\u5f53\uff0c\u4f1a\u9020\u6210\u8d44\u6e90\u8017\u5c3d\u95ee\u9898\u3002",source:"@site/docs/\u5c0f\u8bb0/2023-02/22\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0.md",sourceDirName:"\u5c0f\u8bb0/2023-02",slug:"/\u5c0f\u8bb0/2023-02/22\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",permalink:"/docs/\u5c0f\u8bb0/2023-02/22\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-02/22\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-02",permalink:"/docs/tags/2023-02"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{title:"\u8981\u901a\u8fc7ThreadPoolExecutor\u521b\u5efa\u7ebf\u7a0b\u6c60\u7684\u539f\u56e0",description:"Executors\u521b\u5efa\u7684\u7ebf\u7a0b\u6c60\u5e95\u5c42\u4e5f\u662f\u8c03\u7528`ThreadPoolExecutor`\uff0c\u53ea\u4e0d\u8fc7\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u3001\u961f\u5217\u3001\u62d2\u7edd\u7b56\u7565\u7b49\u3002\u5982\u679c\u4f7f\u7528\u4e0d\u5f53\uff0c\u4f1a\u9020\u6210\u8d44\u6e90\u8017\u5c3d\u95ee\u9898\u3002",keywords:["java","\u7ebf\u7a0b\u6c60","ThreadPoolExecutor","\u963f\u91cc\u7f16\u7801\u89c4\u8303"],date:"2023-02-22T00:00:00.000Z",tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-02"],last_update:{date:"2023-02-22T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904",permalink:"/docs/\u5c0f\u8bb0/2023-02/21\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904"},next:{title:"office\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/office\u5feb\u6377\u952e"}},p={},u=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:4},{value:"\u76f8\u5173\u6587\u7ae0",id:"\u76f8\u5173\u6587\u7ae0",level:4}],d={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Executors"),"\u521b\u5efa\u7684\u7ebf\u7a0b\u6c60\u5e95\u5c42\u4e5f\u662f\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"ThreadPoolExecutor"),"\uff0c\u53ea\u4e0d\u8fc7\u4f7f\u7528\u4e0d\u540c\u7684\u53c2\u6570\u3001\u961f\u5217\u3001\u62d2\u7edd\u7b56\u7565\u7b49\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f7f\u7528\u4e0d\u5f53\uff0c\u4f1a\u9020\u6210\u8d44\u6e90\u8017\u5c3d\u95ee\u9898\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u76f4\u63a5\u4f7f\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"ThreadPoolExecutor"),"\u8ba9\u4f7f\u7528\u8005\u66f4\u6e05\u695a\u7ebf\u7a0b\u6c60\u4f7f\u7528\u89c4\u5219\uff0c\u907f\u514d\u98ce\u9669\u3002  "),(0,n.kt)("h4",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"newFixedThreadPool\u548cnewSingleThreadExecutor"),"\uff1a",(0,n.kt)("br",{parentName:"p"}),"\n","\u961f\u5217\u4f7f\u7528LinkedBlockingQueue\uff0c\u961f\u5217\u957f\u5ea6\u4e3aInteger.MAX_VALUE\uff0c\u53ef\u80fd\u9020\u6210\u5806\u79ef\uff0c\u5bfc\u81f4OOM\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"newScheduledThreadPool\u548cnewCachedThreadPool"),"\uff1a\n\u7ebf\u7a0b\u6c60\u91cc\u9762\u5141\u8bb8\u6700\u5927\u7684\u7ebf\u7a0b\u6570\u662fInteger.MAX_VALUE\uff0c\u53ef\u80fd\u4f1a\u521b\u5efa\u8fc7\u591a\u7ebf\u7a0b\uff0c\u5bfc\u81f4OOM\u3002"))),(0,n.kt)("h4",{id:"\u76f8\u5173\u6587\u7ae0"},"\u76f8\u5173\u6587\u7ae0"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/17java%E4%B8%AD%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84%E5%87%A0%E7%A7%8D%E6%96%B9%E6%B3%95"},"java\u4e2d\u4fdd\u8bc1\u7ebf\u7a0b\u5b89\u5168\u7684\u51e0\u79cd\u65b9\u6cd5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/18java%E4%B8%AD%E7%9A%84%E9%94%81"},"java\u4e2d\u7684\u9501")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/19%E9%AB%98%E6%80%A7%E8%83%BD%E7%9A%84Compare%20and%20Swap"},"\u9ad8\u6027\u80fd\u7684Compare and Swap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/20ReentrantLock%E5%92%8CSynchronized%E7%9A%84%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF%E5%92%8C%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6"},"ReentrantLock\u548cSynchronized\u7684\u4f7f\u7528\u573a\u666f\u548c\u5b9e\u73b0\u673a\u5236")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://machu.top/docs/%E5%B0%8F%E8%AE%B0/2023-02/21%E4%BD%BF%E7%94%A8%E7%BA%BF%E7%A8%8B%E6%B1%A0%E7%9A%84%E5%A5%BD%E5%A4%84"},"\u4f7f\u7528\u7ebf\u7a0b\u6c60\u7684\u597d\u5904\u4ee5\u53ca\u5e38\u7528\u7ebf\u7a0b\u6c60"))),(0,n.kt)("blockquote",null,(0,n.kt)(o.Z,{mdxType:"Quote"})))}s.isMDXComponent=!0}}]);