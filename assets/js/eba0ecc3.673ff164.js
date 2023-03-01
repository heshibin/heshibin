"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[540],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>y});var r=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),p=l,y=d["".concat(s,".").concat(p)]||d[p]||g[p]||n;return o?r.createElement(y,a(a({ref:t},c),{},{components:o})):r.createElement(y,a({ref:t},c))}));function y(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=o.length,a=new Array(n);a[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var u=2;u<n;u++)a[u]=o[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},26464:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(67294);function l(){return r.createElement(r.Fragment,null,"\u672c\u6587\u5185\u5bb9\u8f6c\u8f7d\u81ea",r.createElement("a",{href:"https://xdclass.net/",target:"_blank"},"\u5c0f\u6ef4\u8bfe\u5802"),"\u3002")}},8369:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(87462),l=(o(67294),o(3905)),n=o(26464);const a={slug:"/note/2023-02/mysql-log",title:"Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7",description:"redo log\u3001bin log\u3001undo log\u3001slow query log\u3001relay log",keywords:["java","mysql","redo log","bin log","undo log","slow query log","relay log"],date:new Date("2023-03-01T00:00:00.000Z"),tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:new Date("2023-03-01T00:00:00.000Z"),author:"machu"}},i=void 0,s={unversionedId:"\u5c0f\u8bb0/2023-03/Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7",id:"\u5c0f\u8bb0/2023-03/Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7",title:"Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7",description:"redo log\u3001bin log\u3001undo log\u3001slow query log\u3001relay log",source:"@site/docs/\u5c0f\u8bb0/2023-03/Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7.md",sourceDirName:"\u5c0f\u8bb0/2023-03",slug:"/note/2023-02/mysql-log",permalink:"/docs/note/2023-02/mysql-log",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5c0f\u8bb0/2023-03/Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7.md",tags:[{label:"java",permalink:"/docs/tags/java"},{label:"\u77e5\u8bc6\u5c0f\u8bb0",permalink:"/docs/tags/\u77e5\u8bc6\u5c0f\u8bb0"},{label:"2023-03",permalink:"/docs/tags/2023-03"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1677628800,formattedLastUpdatedAt:"Mar 1, 2023",frontMatter:{slug:"/note/2023-02/mysql-log",title:"Mysql\u5e38\u89c1\u7684\u51e0\u79cd\u65e5\u5fd7",description:"redo log\u3001bin log\u3001undo log\u3001slow query log\u3001relay log",keywords:["java","mysql","redo log","bin log","undo log","slow query log","relay log"],date:"2023-03-01T00:00:00.000Z",tags:["java","\u77e5\u8bc6\u5c0f\u8bb0","2023-03"],last_update:{date:"2023-03-01T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"\u805a\u7c07\u7d22\u5f15\u548c\u975e\u805a\u7c07\u7d22\u5f15",permalink:"/docs/note/2023-02/cluster-index-and-non-cluster-index"},next:{title:"office\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/office\u5feb\u6377\u952e"}},u={},c=[{value:"redo log\uff08\u91cd\u505a\u65e5\u5fd7\uff09",id:"redo-log\u91cd\u505a\u65e5\u5fd7",level:4},{value:"bin log\uff08\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff09",id:"bin-log\u4e8c\u8fdb\u5236\u65e5\u5fd7",level:4},{value:"undo logo\uff08\u56de\u6eda\u65e5\u5fd7\uff09",id:"undo-logo\u56de\u6eda\u65e5\u5fd7",level:4},{value:"slow query log\uff08\u6162\u67e5\u8be2\u65e5\u5fd7\uff09",id:"slow-query-log\u6162\u67e5\u8be2\u65e5\u5fd7",level:4},{value:"relay log\uff08\u4e2d\u7ee7\u65e5\u5fd7\uff09",id:"relay-log\u4e2d\u7ee7\u65e5\u5fd7",level:4}],d={toc:c};function g(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"redo-log\u91cd\u505a\u65e5\u5fd7"},"redo log\uff08\u91cd\u505a\u65e5\u5fd7\uff09"),(0,l.kt)("p",null,"\u8bb0\u5f55\u65b0\u589e\u3001\u66f4\u65b0\u3001\u63d2\u5165\u64cd\u4f5c\u8bed\u53e5\uff0c\u786e\u4fdd\u4e8b\u52a1\u7684\u6301\u4e45\u6027\uff0c\u9632\u6b62\u5728\u53d1\u751f\u6545\u969c\uff0c\u810f\u9875\u672a\u5199\u5165\u78c1\u76d8\u3002\u91cd\u542f\u6570\u636e\u5e93\u4f1a\u8fdb\u884credo log\u6267\u884c\u91cd\u505a\uff0c\u8fbe\u5230\u4e8b\u52a1\u4e00\u81f4\u6027\u3002"),(0,l.kt)("h4",{id:"bin-log\u4e8c\u8fdb\u5236\u65e5\u5fd7"},"bin log\uff08\u4e8c\u8fdb\u5236\u65e5\u5fd7\uff09"),(0,l.kt)("p",null,"\u4ee5\u4e8c\u8fdb\u5236\u5f62\u5f0f\u5b58\u5728\uff0c\u7528\u4e8e\u4e3b\u4ece\u590d\u5236\uff0c\u5b9e\u73b0\u4e3b\u4ece\u540c\u6b65\uff0c\u5206\u4e09\u79cd\u6a21\u5f0frow\u3001statement\u3001mixed\u3002"),(0,l.kt)("h4",{id:"undo-logo\u56de\u6eda\u65e5\u5fd7"},"undo logo\uff08\u56de\u6eda\u65e5\u5fd7\uff09"),(0,l.kt)("p",null,"\u4fdd\u8bc1\u6570\u636e\u7684\u539f\u5b50\u6027\uff0c\u8bb0\u5f55\u4e8b\u52a1\u53d1\u751f\u4e4b\u524d\u7684\u6570\u636e\u7684\u4e00\u4e2a\u7248\u672c\uff0c\u7528\u4e8e\u56de\u6eda\uff0cinnodb\u4e8b\u52a1\u7684\u53ef\u91cd\u590d\u5ea6\u548c\u8bfb\u53d6\u5df2\u63d0\u4ea4\u9694\u79bb\u7ea7\u522b\u5c31\u662f\u901a\u8fc7mvcc+undo\u5b9e\u73b0\u3002"),(0,l.kt)("h4",{id:"slow-query-log\u6162\u67e5\u8be2\u65e5\u5fd7"},"slow query log\uff08\u6162\u67e5\u8be2\u65e5\u5fd7\uff09"),(0,l.kt)("p",null,"\u8bb0\u5f55\u6267\u884c\u65f6\u95f4\u8fc7\u8fc7\u957f\u7684sql\uff0c\u65f6\u95f4\u9608\u503c\u53ef\u4ee5\u914d\u7f6e\uff0c\u53ea\u8bb0\u5f55\u6267\u884c\u6210\u529f\u3002"),(0,l.kt)("h4",{id:"relay-log\u4e2d\u7ee7\u65e5\u5fd7"},"relay log\uff08\u4e2d\u7ee7\u65e5\u5fd7\uff09"),(0,l.kt)("p",null,"\u7528\u4e8e\u6570\u636e\u5e93\u4e3b\u4ece\u540c\u6b65\uff0c\u5c06\u4e3b\u5e93\u53d1\u9001\u6765\u7684binlog\u5148\u4fdd\u5b58\u5728\u672c\u5730\uff0c\u7136\u540e\u4ece\u5e93\u8fdb\u884c\u56de\u8bbf\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)(n.Z,{mdxType:"Quote"})))}g.isMDXComponent=!0}}]);