"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||g[m]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={slug:"nginx\u53cd\u5411\u4ee3\u7406",title:"nginx\u53cd\u5411\u4ee3\u7406",date:new Date("2023-01-03T00:00:00.000Z"),authors:"heshibin",tags:["java","nginx"]},o=void 0,l={permalink:"/en/blog/nginx\u53cd\u5411\u4ee3\u7406",editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/blog/nginx\u53cd\u5411\u4ee3\u7406.md",source:"@site/blog/nginx\u53cd\u5411\u4ee3\u7406.md",title:"nginx\u53cd\u5411\u4ee3\u7406",description:"\u8def\u7531\u8f6c\u53d1",date:"2023-01-03T00:00:00.000Z",formattedDate:"January 3, 2023",tags:[{label:"java",permalink:"/en/blog/tags/java"},{label:"nginx",permalink:"/en/blog/tags/nginx"}],readingTime:.115,hasTruncateMarker:!1,authors:[{name:"heshibin",title:"cv\u6478\u9c7c\u5927\u5e08",url:"https://github.com/heshibin",email:"17608484341@163.com",imageURL:"https://avatars.githubusercontent.com/u/49633468?s=400&u=e1850391be1aa0356c3ae4202a8e8b8018c584d0&v=4",key:"heshibin"}],frontMatter:{slug:"nginx\u53cd\u5411\u4ee3\u7406",title:"nginx\u53cd\u5411\u4ee3\u7406",date:"2023-01-03T00:00:00.000Z",authors:"heshibin",tags:["java","nginx"]},prevItem:{title:"JSON.stringify\u4fdd\u7559\u539f\u6709\u683c\u5f0f",permalink:"/en/blog/JSON.stringify\u4fdd\u7559\u539f\u6709\u683c\u5f0f"},nextItem:{title:"\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5",permalink:"/en/blog/\u62a5\u9519only_full_group_by\u7684\u89e3\u51b3\u529e\u6cd5"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8def\u7531\u8f6c\u53d1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"location / {\n    proxy_pass http://127.0.0.1:8001; # \u53cd\u5411\u4ee3\u7406\u5230 8001 \u7aef\u53e3\n    add_header Access-Control-Allow-Origin *;\n}\n")))}u.isMDXComponent=!0}}]);