"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9564],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=l,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92847:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),l=(t(67294),t(3905));const a={slug:"/t/nginx/instal-ssl-cert",title:"Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5SSL\u8bc1\u4e66",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e0b\u8f7dSSL\u8bc1\u4e66\u5e76\u5728Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66\u3002",keywords:["nginx","ssl"],date:new Date("2023-02-28T00:00:00.000Z"),tags:["nginx","ssl","2023-02"],last_update:{date:new Date("2023-02-28T00:00:00.000Z"),author:"machu"}},i=void 0,o={unversionedId:"\u5de5\u5177/Nginx/\u5b89\u88c5SSL\u8bc1\u4e66",id:"\u5de5\u5177/Nginx/\u5b89\u88c5SSL\u8bc1\u4e66",title:"Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5SSL\u8bc1\u4e66",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e0b\u8f7dSSL\u8bc1\u4e66\u5e76\u5728Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66\u3002",source:"@site/docs/\u5de5\u5177/Nginx/\u5b89\u88c5SSL\u8bc1\u4e66.md",sourceDirName:"\u5de5\u5177/Nginx",slug:"/t/nginx/instal-ssl-cert",permalink:"/docs/t/nginx/instal-ssl-cert",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/\u5de5\u5177/Nginx/\u5b89\u88c5SSL\u8bc1\u4e66.md",tags:[{label:"nginx",permalink:"/docs/tags/nginx"},{label:"ssl",permalink:"/docs/tags/ssl"},{label:"2023-02",permalink:"/docs/tags/2023-02"}],version:"current",lastUpdatedBy:"machu",lastUpdatedAt:1677542400,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{slug:"/t/nginx/instal-ssl-cert",title:"Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5SSL\u8bc1\u4e66",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e0b\u8f7dSSL\u8bc1\u4e66\u5e76\u5728Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66\u3002",keywords:["nginx","ssl"],date:"2023-02-28T00:00:00.000Z",tags:["nginx","ssl","2023-02"],last_update:{date:"2023-02-28T00:00:00.000Z",author:"machu"}},sidebar:"tutorialSidebar",previous:{title:"GitHub-Chrome\u63d2\u4ef6",permalink:"/docs/\u5de5\u5177/GitHub-Chrome\u63d2\u4ef6"},next:{title:"idea\u5feb\u6377\u952e",permalink:"/docs/\u5de5\u5177/idea\u5feb\u6377\u952e"}},s={},p=[{value:"\u4e0b\u8f7d\u8bc1\u4e66\u5230\u672c\u5730",id:"\u4e0b\u8f7d\u8bc1\u4e66\u5230\u672c\u5730",level:2},{value:"\u5728Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66",id:"\u5728nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66",level:2}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4e0b\u8f7dSSL\u8bc1\u4e66\u5e76\u5728Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66\u3002"),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u8bc1\u4e66\u5230\u672c\u5730"},"\u4e0b\u8f7d\u8bc1\u4e66\u5230\u672c\u5730"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u767b\u5f55",(0,l.kt)("a",{parentName:"p",href:"https://yundunnext.console.aliyun.com/?p=cas"},"\u6570\u5b57\u8bc1\u4e66\u7ba1\u7406\u670d\u52a1\u63a7\u5236\u53f0"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u5de6\u4fa7\u5bfc\u822a\u680f\uff0c\u5355\u51fbSSL\u8bc1\u4e66\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728SSL\u8bc1\u4e66\u9875\u9762\uff0c\u5b9a\u4f4d\u5230\u76ee\u6807\u8bc1\u4e66\uff0c\u5728\u64cd\u4f5c\u5217\uff0c\u5355\u51fb\u4e0b\u8f7d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728\u8bc1\u4e66\u4e0b\u8f7d\u9762\u677f\uff0c\u5355\u51fbNginx\u670d\u52a1\u5668\u64cd\u4f5c\u5217\u7684\u4e0b\u8f7d\u3002"),(0,l.kt)("p",{parentName:"li"},"\u8be5\u64cd\u4f5c\u4f1a\u5c06Nginx\u670d\u52a1\u5668\u8bc1\u4e66\u538b\u7f29\u5305\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u5e76\u4fdd\u5b58\u5728\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u4e0b\u8f7d\u4f4d\u7f6e\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6253\u5f00\u6d4f\u89c8\u5668\u7684\u9ed8\u8ba4\u4e0b\u8f7d\u4f4d\u7f6e\uff0c\u89e3\u538b\u5df2\u4e0b\u8f7d\u7684Nginx\u670d\u52a1\u5668\u8bc1\u4e66\u538b\u7f29\u5305\u6587\u4ef6\u3002"))),(0,l.kt)("h2",{id:"\u5728nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66"},"\u5728Nginx\u670d\u52a1\u5668\u4e0a\u5b89\u88c5\u8bc1\u4e66"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u8fdc\u7a0b\u767b\u5f55\u5de5\u5177\uff0c\u767b\u5f55Nginx\u670d\u52a1\u5668\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5728Nginx\u5b89\u88c5\u76ee\u5f55\uff08\u9ed8\u8ba4\u4e3a/usr/local/nginx/conf\uff09\u4e0b\u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u5b58\u653e\u8bc1\u4e66\u7684\u76ee\u5f55\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /usr/local/nginx/conf  #\u8fdb\u5165Nginx\u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\u3002\u5982\u679c\u60a8\u4fee\u6539\u8fc7\u9ed8\u8ba4\u5b89\u88c5\u76ee\u5f55\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u914d\u7f6e\u8c03\u6574\u3002\nmkdir cert  #\u521b\u5efa\u8bc1\u4e66\u76ee\u5f55\uff0c\u547d\u540d\u4e3acert\u3002\n")),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u8fdc\u7a0b\u767b\u5f55\u5de5\u5177\u9644\u5e26\u7684\u672c\u5730\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\uff0c\u5c06\u8bc1\u4e66\u6587\u4ef6\u548c\u79c1\u94a5\u6587\u4ef6\u4e0a\u4f20\u5230Nginx\u670d\u52a1\u5668\u7684\u8bc1\u4e66\u76ee\u5f55\uff08\u793a\u4f8b\u4e2d\u4e3a/usr/local/nginx/conf/cert\uff09\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7f16\u8f91Nginx\u914d\u7f6e\u6587\u4ef6nginx.conf\uff0c\u4fee\u6539\u4e0e\u8bc1\u4e66\u76f8\u5173\u7684\u914d\u7f6e"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"vim /usr/local/nginx/conf/nginx.conf\n")),(0,l.kt)("p",null,"nginx.conf\u9ed8\u8ba4\u4fdd\u5b58\u5728/usr/local/nginx/conf\u76ee\u5f55\u4e0b\u3002",(0,l.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u60a8\u4fee\u6539\u8fc7nginx.conf\u7684\u4f4d\u7f6e\uff0c\u8bf7\u5c06",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/nginx/conf/nginx.conf"),"\u66ff\u6362\u6210\u4fee\u6539\u540e\u7684\u4f4d\u7f6e\u3002\u60a8\u53ef\u4ee5\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"nginx -t"),"\uff0c\u67e5\u770bnginx\u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\u3002  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728nginx.conf\u4e2d\u5b9a\u4f4d\u5230HTTP\u534f\u8bae\u4ee3\u7801\u7247\u6bb5\uff08",(0,l.kt)("inlineCode",{parentName:"li"},"http{}"),"\uff09\uff0c\u5e76\u5728HTTP\u534f\u8bae\u4ee3\u7801\u91cc\uff0c\u6309\u7167\u4ee5\u4e0b\u4ee3\u7801\u793a\u4f8b\uff0c\u4fee\u6539server\u5c5e\u6027\u914d\u7f6e\u3002\t")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#\u4ee5\u4e0b\u5c5e\u6027\u4e2d\uff0c\u4ee5ssl\u5f00\u5934\u7684\u5c5e\u6027\u8868\u793a\u4e0e\u8bc1\u4e66\u914d\u7f6e\u6709\u5173\u3002\nserver {\n    #\u914d\u7f6eHTTPS\u7684\u9ed8\u8ba4\u8bbf\u95ee\u7aef\u53e3\u4e3a443\u3002\n    #\u5982\u679c\u672a\u5728\u6b64\u5904\u914d\u7f6eHTTPS\u7684\u9ed8\u8ba4\u8bbf\u95ee\u7aef\u53e3\uff0c\u53ef\u80fd\u4f1a\u9020\u6210Nginx\u65e0\u6cd5\u542f\u52a8\u3002\n    #\u5982\u679c\u60a8\u4f7f\u7528Nginx 1.15.0\u53ca\u4ee5\u4e0a\u7248\u672c\uff0c\u8bf7\u4f7f\u7528listen 443 ssl\u4ee3\u66fflisten 443\u548cssl on\u3002\n    listen 443 ssl;\n\n    #\u586b\u5199\u8bc1\u4e66\u7ed1\u5b9a\u7684\u57df\u540d\n    server_name <yourdomain>;\n    root html;\n    index index.html index.htm;\n\n    #\u586b\u5199\u8bc1\u4e66\u6587\u4ef6\u540d\u79f0\n    ssl_certificate cert/<cert-file-name>.pem;\n    #\u586b\u5199\u8bc1\u4e66\u79c1\u94a5\u6587\u4ef6\u540d\u79f0  \n    ssl_certificate_key cert/<cert-file-name>.key;\n\n    ssl_session_timeout 5m;\n    #\u8868\u793a\u4f7f\u7528\u7684\u52a0\u5bc6\u5957\u4ef6\u7684\u7c7b\u578b\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n    #\u8868\u793a\u4f7f\u7528\u7684TLS\u534f\u8bae\u7684\u7c7b\u578b\uff0c\u60a8\u9700\u8981\u81ea\u884c\u8bc4\u4f30\u662f\u5426\u914d\u7f6eTLSv1.1\u534f\u8bae\u3002\n    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;\n\n    ssl_prefer_server_ciphers on;\n    location / {\n        #Web\u7f51\u7ad9\u7a0b\u5e8f\u5b58\u653e\u76ee\u5f55\n        root html;\n        index index.html index.htm;\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u53ef\u9009\uff1a")," \u8bbe\u7f6eHTTP\u8bf7\u6c42\u81ea\u52a8\u8df3\u8f6cHTTPS\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5e0c\u671b\u6240\u6709\u7684HTTP\u8bbf\u95ee\u81ea\u52a8\u8df3\u8f6c\u5230HTTPS\u9875\u9762\uff0c\u5219\u53ef\u4ee5\u5728\u9700\u8981\u8df3\u8f6c\u7684HTTP\u7ad9\u70b9\u4e0b\u6dfb\u52a0\u4ee5\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"rewrite"),"\u8bed\u53e5\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n    listen 80;\n    #\u586b\u5199\u8bc1\u4e66\u7ed1\u5b9a\u7684\u57df\u540d\n    server_name <yourdomain>;\n    #\u5c06\u6240\u6709HTTP\u8bf7\u6c42\u901a\u8fc7rewrite\u6307\u4ee4\u91cd\u5b9a\u5411\u5230HTTPS\u3002\n    rewrite ^(.*)$ https://$host$1;\n    location / {\n        index index.html index.htm;\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4fee\u6539\u5b8c\u6210\u540e\uff0c\u6309 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Esc"))," \u952e\u3001\u8f93\u5165 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},":wq"))," \u5e76\u6309 ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"strong"},"Enter"))," \u952e\uff0c\u4fdd\u5b58\u4fee\u6539\u540e\u7684\u914d\u7f6e\u6587\u4ef6\u5e76\u9000\u51fa\u7f16\u8f91\u6a21\u5f0f\u3002")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u91cd\u542fNginx\u670d\u52a1\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd /usr/local/nginx/sbin  #\u8fdb\u5165Nginx\u670d\u52a1\u7684\u53ef\u6267\u884c\u76ee\u5f55\u3002\n./nginx -s reload  #\u91cd\u65b0\u8f7d\u5165\u914d\u7f6e\u6587\u4ef6\u3002\n")),(0,l.kt)("p",null,"\u5982\u679c\u91cd\u542fNginx\u670d\u52a1\u65f6\u6536\u5230\u62a5\u9519\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u8fdb\u884c\u6392\u67e5\uff1a  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u62a5\u9519",(0,l.kt)("inlineCode",{parentName:"li"},'the "ssl" parameter requires ngx_http_ssl_module'),"\uff1a\u60a8\u9700\u8981\u91cd\u65b0\u7f16\u8bd1Nginx\u5e76\u5728\u7f16\u8bd1\u5b89\u88c5\u7684\u65f6\u5019\u52a0\u4e0a",(0,l.kt)("inlineCode",{parentName:"li"},"--with-http_ssl_module"),"\u914d\u7f6e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u62a5\u9519",(0,l.kt)("inlineCode",{parentName:"li"},"\"/cert/3970497_demo.aliyundoc.com.pem\":BIO_new_file() failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen('/cert/3970497_demo.aliyundoc.com.pem','r') error:2006D080:BIO routines:BIO_new_file:no such file)"),"\uff1a\u60a8\u9700\u8981\u53bb\u6389\u8bc1\u4e66\u76f8\u5bf9\u8def\u5f84\u6700\u524d\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"/"),"\u3002\u4f8b\u5982\uff0c\u60a8\u9700\u8981\u53bb\u6389",(0,l.kt)("inlineCode",{parentName:"li"},"/cert/cert-file-name.pem"),"\u6700\u524d\u9762\u7684",(0,l.kt)("inlineCode",{parentName:"li"},"/"),"\uff0c\u4f7f\u7528\u6b63\u786e\u7684\u76f8\u5bf9\u8def\u5f84",(0,l.kt)("inlineCode",{parentName:"li"},"cert/cert-file-name.pem"),"\u3002")))}m.isMDXComponent=!0}}]);