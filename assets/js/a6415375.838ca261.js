"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,d=c["".concat(o,".").concat(m)]||c[m]||k[m]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:l,i[1]=p;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={},i=void 0,p={unversionedId:"JAVA/Spring\u5e38\u89c1\u95ee\u9898",id:"JAVA/Spring\u5e38\u89c1\u95ee\u9898",title:"Spring\u5e38\u89c1\u95ee\u9898",description:"spring bean\u751f\u547d\u5468\u671f?",source:"@site/docs/JAVA/Spring\u5e38\u89c1\u95ee\u9898.md",sourceDirName:"JAVA",slug:"/JAVA/Spring\u5e38\u89c1\u95ee\u9898",permalink:"/docs/JAVA/Spring\u5e38\u89c1\u95ee\u9898",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/JAVA/Spring\u5e38\u89c1\u95ee\u9898.md",tags:[],version:"current",lastUpdatedBy:"Machu",lastUpdatedAt:1677917801,formattedLastUpdatedAt:"Mar 4, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u81ea\u5e26tomcat\u6700\u5927\u5e76\u53d1\u6570",permalink:"/docs/JAVA/Spring Boot/\u8bbe\u7f6e\u6700\u5927\u5e76\u53d1\u6570"},next:{title:"lambda\u8868\u8fbe\u5f0f",permalink:"/docs/java/lambda"}},o={},u=[{value:"spring bean\u751f\u547d\u5468\u671f?",id:"spring-bean\u751f\u547d\u5468\u671f",level:4},{value:"spring\u662f\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\uff1f\u5982\u679c\u73b0\u5728\u6709\u4e00\u4e2aA\u5bf9\u8c61\uff0c\u5c5e\u6027\u662fB\u5bf9\u8c61\uff0c\u800cB\u5bf9\u8c61\u7684\u5c5e\u6027\u662fA\u5bf9\u8c61\uff0cspring\u662f\u600e\u4e48\u505a\u7684\uff1f",id:"spring\u662f\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u5982\u679c\u73b0\u5728\u6709\u4e00\u4e2aa\u5bf9\u8c61\u5c5e\u6027\u662fb\u5bf9\u8c61\u800cb\u5bf9\u8c61\u7684\u5c5e\u6027\u662fa\u5bf9\u8c61spring\u662f\u600e\u4e48\u505a\u7684",level:4},{value:"spring\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u539f\u7406\uff1f",id:"spring\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u539f\u7406",level:4},{value:"\u4e3a\u4ec0\u4e48\u662f\u4e09\u7ea7\u7f13\u5b58\uff1f",id:"\u4e3a\u4ec0\u4e48\u662f\u4e09\u7ea7\u7f13\u5b58",level:4},{value:"IOC\u548cAOP?",id:"ioc\u548caop",level:4},{value:"IOC \u63a7\u5236\u53cd\u8f6c\u4e5f\u53eb\u4f9d\u8d56\u6ce8\u5165\uff0c\u5229\u7528\u4e86\u5de5\u5382\u6a21\u5f0f",id:"ioc-\u63a7\u5236\u53cd\u8f6c\u4e5f\u53eb\u4f9d\u8d56\u6ce8\u5165\u5229\u7528\u4e86\u5de5\u5382\u6a21\u5f0f",level:5},{value:"AOP \u9762\u5411\u5207\u9762\u7f16\u7a0b \u4ee3\u7406\u6a21\u5f0f",id:"aop-\u9762\u5411\u5207\u9762\u7f16\u7a0b-\u4ee3\u7406\u6a21\u5f0f",level:5},{value:"spring\u4f5c\u7528\u57df",id:"spring\u4f5c\u7528\u57df",level:4},{value:"spring\u6ce8\u89e3",id:"spring\u6ce8\u89e3",level:4},{value:"@AutoWired\u548c@Resource\u7684\u533a\u522b",id:"autowired\u548cresource\u7684\u533a\u522b",level:4}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h4",{id:"spring-bean\u751f\u547d\u5468\u671f"},"spring bean\u751f\u547d\u5468\u671f?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b9e\u4f8b\u5316Bean;")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bbe\u7f6e\u5bf9\u8c61\u5c5e\u6027\uff08\u4f9d\u8d56\u6ce8\u5165\uff09"),(0,l.kt)("p",{parentName:"li"},"\u5b9e\u4f8b\u5316\u540e\u7684\u5bf9\u8c61\u88ab\u5c01\u88c5\u5728BeanWrapper\u5bf9\u8c61\u4e2d\uff0c\u5e76\u4e14\u6b64\u65f6\u5bf9\u8c61\u4ecd\u7136\u662f\u4e00\u4e2a\u539f\u751f\u7684\u72b6\u6001\uff0c\u5e76\u6ca1\u6709\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165\uff1b"),(0,l.kt)("p",{parentName:"li"},"\u7d27\u63a5\u7740\uff0cSpring\u6839\u636eBeanDefinition\u4e2d\u7684\u4fe1\u606f\u8fdb\u884c\u4f9d\u8d56\u6ce8\u5165\uff1b"),(0,l.kt)("p",{parentName:"li"},"\u5e76\u4e14\u901a\u8fc7BeanWrapper\u63d0\u4f9b\u7684\u8bbe\u7f6e\u5c5e\u6027\u7684\u63a5\u53e3\u5b8c\u6210\u4f9d\u8d56\u6ce8\u5165\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6ce8\u5165Aware\u63a5\u53e3"),(0,l.kt)("p",{parentName:"li"},"Spring\u4f1a\u68c0\u6d4b\u8be5\u5bf9\u8c61\u662f\u5426\u5b9e\u73b0\u4e86xxxAware\u63a5\u53e3\uff0c\u5e76\u5c06\u76f8\u5173\u7684xxxAware\u5b9e\u4f8b\u6ce8\u5165\u7ed9Bean\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"BeanPostProcessor"),(0,l.kt)("p",{parentName:"li"},"\u7ecf\u8fc7\u4e0a\u8ff0\u51e0\u4e2a\u6b65\u9aa4\uff0cbean\u5bf9\u8c61\u5df2\u7ecf\u88ab\u6b63\u786e\u6784\u9020\uff0c\u4f46\u5982\u679c\u4f60\u60f3\u8981\u5bf9\u8c61\u88ab\u4f7f\u7528\u524d\u518d\u8fdb\u884c\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u5904\u7406\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7BeanPostProcessor\u63a5\u53e3\u5b9e\u73b0\uff1b"),(0,l.kt)("p",{parentName:"li"},"\u6709\u4e24\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("p",{parentName:"li"},"postProcessBeforeInitialzation(Object bean, String beanName) \u524d\u7f6e\u5904\u7406"),(0,l.kt)("p",{parentName:"li"},"postProcessAfterInitialzation(Object bean, String beanName) \u540e\u7f6e\u5904\u7406")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"InitializingBean\u4e0einit-method"),(0,l.kt)("p",{parentName:"li"},"\u524d\u7f6e\u5904\u7406\u5b8c\u6210\u4e4b\u540e\u8fdb\u5165\u672c\u9636\u6bb5\u3002"),(0,l.kt)("p",{parentName:"li"},"InitializingBean\u63a5\u53e3\u53ea\u6709\u4e00\u4e2a\u51fd\u6570\uff1a"),(0,l.kt)("p",{parentName:"li"},"afterPropertiesSet()"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u4e00\u9636\u6bb5\u4e5f\u662f\u589e\u5f3a\u81ea\u5b9a\u4e49\u7684\u903b\u8f91\uff0c\u4f46\u662f\u4e0d\u4f1a\u628a\u5f53\u524dbean\u5bf9\u8c61\u4f20\u8fdb\u6765\uff0c\u56e0\u6b64\u6ca1\u6709\u529e\u6cd5\u5904\u7406\u5bf9\u8c61\u672c\u8eab\uff0c\u53ea\u80fd\u589e\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u903b\u8f91\uff0c\u82e5\u8981\u4f7f\u7528\u5b83\uff0c\u6211\u4eec\u9700\u8981\u8ba9bean\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0cSpring\u4f1a\u5728\u524d\u7f6e\u5904\u7406\u5b8c\u6210\u4e4b\u540e\u68c0\u6d4b\u5f53\u524dbean\u662f\u5426\u5b9e\u73b0\u4e86\u8be5\u63a5\u53e3\uff0c\u5e76\u6267\u884cafterPropertiesSet()\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"DisposableBean\u548cdestroy-method"))),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"spring\u662f\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u5982\u679c\u73b0\u5728\u6709\u4e00\u4e2aa\u5bf9\u8c61\u5c5e\u6027\u662fb\u5bf9\u8c61\u800cb\u5bf9\u8c61\u7684\u5c5e\u6027\u662fa\u5bf9\u8c61spring\u662f\u600e\u4e48\u505a\u7684"},"spring\u662f\u600e\u4e48\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\uff1f\u5982\u679c\u73b0\u5728\u6709\u4e00\u4e2aA\u5bf9\u8c61\uff0c\u5c5e\u6027\u662fB\u5bf9\u8c61\uff0c\u800cB\u5bf9\u8c61\u7684\u5c5e\u6027\u662fA\u5bf9\u8c61\uff0cspring\u662f\u600e\u4e48\u505a\u7684\uff1f"),(0,l.kt)("p",null,"\u5927\u81f4\u6d41\u7a0b\u662f\uff1a"),(0,l.kt)("p",null,"\u9996\u5148A\u5bf9\u8c61\u5b9e\u4f8b\u5316\uff0c\u7136\u540e\u5bf9\u5c5e\u6027\u8fdb\u884c\u6ce8\u5165\uff0c\u53d1\u73b0\u4f9d\u8d56B\u5bf9\u8c61\uff1b"),(0,l.kt)("p",null,"B\u5bf9\u8c61\u6b64\u65f6\u8fd8\u6ca1\u6709\u521b\u5efa\u51fa\u6765\uff0c\u6240\u4ee5\u8f6c\u5934\u53bb\u5b9e\u4f8b\u5316B\u5bf9\u8c61\uff1b"),(0,l.kt)("p",null,"B\u5bf9\u8c61\u5b9e\u4f8b\u5316\u4e4b\u540e\uff0c\u53d1\u73b0\u9700\u8981\u4f9d\u8d56A\u5bf9\u8c61\uff0c\u90a3\u4e48A\u6b64\u65f6\u5df2\u7ecf\u5b9e\u4f8b\u5316\u5b8c\u6210\u4e86\uff0c\u6240\u4ee5B\u5bf9\u8c61\u6700\u7ec8\u80fd\u5b8c\u6210\u521b\u5efa\uff1b"),(0,l.kt)("p",null,"B\u5bf9\u8c61\u8fd4\u56de\u5230A\u5bf9\u8c61\u7684\u5c5e\u6027\u6ce8\u5165\u7684\u65b9\u6cd5\u4e0a\uff0c\u6700\u7ec8A\u5bf9\u8c61\u5b8c\u6210\u521b\u5efa\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"spring\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u539f\u7406"},"spring\u89e3\u51b3\u5faa\u73af\u4f9d\u8d56\u7684\u539f\u7406\uff1f"),(0,l.kt)("p",null,"\u4e09\u7ea7\u7f13\u5b58"),(0,l.kt)("p",null,"singletonObjects\uff08\u4e00\u7ea7\uff0c\u65e5\u5e38\u5b9e\u9645\u83b7\u53d6Bean\u7684\u5730\u65b9\uff09"),(0,l.kt)("p",null,"earlySingletonObjects\uff08\u4e8c\u7ea7\uff0c\u8fd8\u6ca1\u8fdb\u884c\u5c5e\u6027\u6ce8\u5165\uff0c\u7531\u4e09\u7ea7\u7f13\u5b58\u653e\u8fdb\u6765\uff09"),(0,l.kt)("p",null,"singletonFactories\uff08\u4e09\u7ea7\uff0cValue\u662f\u4e00\u4e2a\u5bf9\u8c61\u5de5\u5382\uff09"),(0,l.kt)("p",null,"A\u5bf9\u8c61\u5b9e\u4f8b\u5316\u4e4b\u540e\uff0c\u5c5e\u6027\u6ce8\u5165\u4e4b\u524d\uff0c\u4f1a\u628aA\u5bf9\u8c61\u653e\u8fdb\u4e09\u7ea7\u7f13\u5b58\u4e2d\uff0c Key\u662fBeanName, Value\u662fObjectFactory\uff1b"),(0,l.kt)("p",null,"\u7b49\u5230A\u5bf9\u8c61\u5c5e\u6027\u6ce8\u5165\u65f6\uff0c\u53d1\u73b0\u4f9d\u8d56B\uff0c\u53c8\u53bb\u5b9e\u4f8b\u5316B;"),(0,l.kt)("p",null,"B\u5c5e\u6027\u6ce8\u5165\u9700\u8981\u53bb\u83b7\u5f97A\u5bf9\u8c61\uff0c\u8fd9\u91cc\u5c31\u662f\u53bb\u4ece\u4e09\u7ea7\u7f13\u5b58\u4e2d\u62ff\u5230\u5bf9\u5e94\u7684Bean\uff1b"),(0,l.kt)("p",null,"\u518d\u628a\u4e09\u7ea7\u7f13\u5b58\u4e2d\u7684\u8bb0\u5f55\u5e72\u6389\uff0c\u653e\u5165\u4e8c\u7ea7\u7f13\u5b58\u4e2d\uff1b"),(0,l.kt)("p",null,"\u7b49\u5230\u5b8c\u5168\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u518dremove\u6389\u4e8c\u7ea7\u7f13\u5b58\u4e2d\u7684\uff0c\u585e\u5230\u4e00\u7ea7\u7f13\u5b58\uff1b"),(0,l.kt)("p",null,"\u6211\u4eec\u53bbgetBean\u7684\u65f6\u5019\uff0c\u5b9e\u9645\u4e0a\u62ff\u5230\u7684\u662f\u4e00\u7ea7\u7f13\u5b58\u4e2d\u7684\uff1b"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"\u4e3a\u4ec0\u4e48\u662f\u4e09\u7ea7\u7f13\u5b58"},"\u4e3a\u4ec0\u4e48\u662f\u4e09\u7ea7\u7f13\u5b58\uff1f"),(0,l.kt)("p",null,"\u9996\u5148\u4ece\u7b2c\u4e09\u7ea7\u7f13\u5b58\u8bf4\u8d77\uff08\u5c31\u662fkey\u662fBeanName, value\u4e3aObjectFactory\uff09"),(0,l.kt)("p",null,"\u6211\u4eec\u7684\u5bf9\u8c61\u662f\u5355\u4f8b\u7684\uff0c\u6709\u53ef\u80fdA\u5bf9\u8c61\u4f9d\u8d56\u7684B\u5bf9\u8c61\u662f\u6709AOP\u7684(B\u5bf9\u8c61\u9700\u8981\u4ee3\u7406)"),(0,l.kt)("p",null,"\u5047\u8bbe\u6ca1\u6709\u4e09\u7ea7\u7f13\u5b58\uff0c\u53ea\u6709\u7b2c\u4e8c\u7ea7\u7f13\u5b58"),(0,l.kt)("p",null,"\u90a3\u5982\u679c\u6709AOP\u7684\u60c5\u51b5\u4e0b\uff0c\u5c82\u4e0d\u662f\u5728\u5b58\u5165\u7b2c\u4e8c\u7ea7\u7f13\u5b58\u4e4b\u524d\u90fd\u9700\u8981\u5148\u53bb\u505aAOP\u4ee3\u7406"),(0,l.kt)("p",null,"\u800c\u4e8c\u7ea7\u7f13\u5b58\u5b58\u5728\u7684\u5fc5\u8981\u5c31\u662f\u4e3a\u4e86\u6027\u80fd\uff0c\u4ece\u4e09\u7ea7\u7f13\u5b58\u7684\u5de5\u5382\u91cc\u521b\u5efa\u51fa\u5bf9\u8c61\uff0c\u518d\u6254\u5230\u4e8c\u7ea7\u7f13\u5b58\u4e2d\uff0c\u8fd9\u6837\u5c31\u4e0d\u9700\u8981\u6bcf\u6b21\u90fd\u4ece\u5de5\u5382\u91cc\u9762\u62ff\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"ioc\u548caop"},"IOC\u548cAOP?"),(0,l.kt)("h5",{id:"ioc-\u63a7\u5236\u53cd\u8f6c\u4e5f\u53eb\u4f9d\u8d56\u6ce8\u5165\u5229\u7528\u4e86\u5de5\u5382\u6a21\u5f0f"},"IOC \u63a7\u5236\u53cd\u8f6c\u4e5f\u53eb\u4f9d\u8d56\u6ce8\u5165\uff0c\u5229\u7528\u4e86\u5de5\u5382\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5c06\u5bf9\u8c61\u4ea4\u7ed9\u5bb9\u5668\u7ba1\u7406\uff0c\u53ea\u9700\u8981\u5728spring\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u76f8\u5e94\u7684bean,\u4ee5\u53ca\u8bbe\u7f6e\u76f8\u5173\u7684\u5c5e\u6027\uff0c\u8ba9spring\u5bb9\u5668\u6765\u751f\u6210\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61\u4ee5\u53ca\u7ba1\u7406\u5bf9\u8c61\uff1b"),(0,l.kt)("p",null,"\u5728spring\u5bb9\u5668\u542f\u52a8\u7684\u65f6\u5019\uff0cspring\u4f1a\u628a\u4f60\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u7684bean\u90fd\u521d\u59cb\u5316\u597d\uff1b"),(0,l.kt)("p",null,"\u7136\u540e\u5728\u4f60\u9700\u8981\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5c31\u628a\u521d\u59cb\u5316\u597d\u7684\u90a3\u4e9bbean\u5206\u914d\u7ed9\u4f60\u9700\u8981\u8c03\u7528\u7684\u8fd9\u4e9bbean\u7684\u7c7b\uff0c\u5c31\u4e0d\u9700\u8981\u5728\u53bbnew\u8fd9\u4e9bbean\u3002"),(0,l.kt)("h5",{id:"aop-\u9762\u5411\u5207\u9762\u7f16\u7a0b-\u4ee3\u7406\u6a21\u5f0f"},"AOP \u9762\u5411\u5207\u9762\u7f16\u7a0b \u4ee3\u7406\u6a21\u5f0f"),(0,l.kt)("p",null,"AOP\u53ef\u4ee5\u8bf4\u662f\u5bf9OOP\u7684\u8865\u5145\u548c\u5b8c\u5584\uff0cOOP\u5141\u8bb8\u4ece\u4e0a\u5230\u4e0b\u7684\u5173\u7cfb\uff0c\u4f46\u5e76\u4e0d\u9002\u5408\u4ece\u5de6\u5230\u53f3\u7684\u5173\u7cfb\uff0c\u4f8b\u5982\u65e5\u5fd7\uff1b"),(0,l.kt)("p",null,"\u5c06\u7a0b\u5e8f\u4e2d\u7684\u4ea4\u53c9\u4e1a\u52a1\u903b\u8f91\uff08\u5b89\u5168\u3001\u65e5\u5fd7\u3001\u4e8b\u52a1\u7b49\uff09\uff0c\u5c01\u88c5\u6210\u4e00\u4e2a\u5207\u9762\uff0c\u7136\u540e\u6ce8\u5165\u5230\u76ee\u6807\u5bf9\u8c61\uff08\u5177\u4f53\u4e1a\u52a1\u903b\u8f91\uff09\u4e2d\u53bb\uff1b"),(0,l.kt)("p",null,"\u5b9e\u73b0AOP\u7684\u6280\u672f\uff1a"),(0,l.kt)("p",null,"\u52a8\u6001\u4ee3\u7406"),(0,l.kt)("p",null,"\u9759\u6001\u7ec7\u5165"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"spring\u4f5c\u7528\u57df"},"spring\u4f5c\u7528\u57df"),(0,l.kt)("p",null,"Singleton \u5355\u4f8b\u6a21\u5f0f"),(0,l.kt)("p",null,"Prototype \u591a\u4f8b\u6a21\u5f0f"),(0,l.kt)("p",null,"Request HTTP\u8bf7\u6c42"),(0,l.kt)("p",null,"Session \u4f1a\u8bdd"),(0,l.kt)("p",null,"global-session \u5168\u5c40\u4f1a\u8bdd"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"spring\u6ce8\u89e3"},"spring\u6ce8\u89e3"),(0,l.kt)("p",null,"\u7c7b\u7ea7\u522b\u7684\u6ce8\u89e3\uff1a"),(0,l.kt)("p",null,"@Controller\u3001@Service\u3001@Component\u3001@Repository"),(0,l.kt)("p",null,"\u7c7b\u5185\u90e8\u7684\u6ce8\u89e3:"),(0,l.kt)("p",null,"@AutoWired\u3001@Value\u3001@Resource"),(0,l.kt)("hr",null),(0,l.kt)("h4",{id:"autowired\u548cresource\u7684\u533a\u522b"},"@AutoWired\u548c@Resource\u7684\u533a\u522b"),(0,l.kt)("p",null,"@AutoWired\u662fbyType"),(0,l.kt)("p",null,"@Resource\u662fbyName"))}c.isMDXComponent=!0}}]);