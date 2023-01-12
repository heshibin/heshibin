"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7429],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={slug:"NetworkUtil \u83b7\u53d6ip\u3001mac\u5730\u5740",title:"\u83b7\u53d6ip\u3001mac\u5730\u5740",date:new Date("2023-01-07T00:00:00.000Z"),sidebar_position:1,authors:"heshibin",tags:["java","\u4ee3\u7801","\u5de5\u5177\u7c7b"]},o=void 0,s={unversionedId:"JAVA/\u5de5\u5177\u7c7b/NetworkUtil",id:"JAVA/\u5de5\u5177\u7c7b/NetworkUtil",title:"\u83b7\u53d6ip\u3001mac\u5730\u5740",description:"",source:"@site/docs/JAVA/\u5de5\u5177\u7c7b/NetworkUtil.md",sourceDirName:"JAVA/\u5de5\u5177\u7c7b",slug:"/JAVA/\u5de5\u5177\u7c7b/NetworkUtil \u83b7\u53d6ip\u3001mac\u5730\u5740",permalink:"/en/docs/JAVA/\u5de5\u5177\u7c7b/NetworkUtil \u83b7\u53d6ip\u3001mac\u5730\u5740",draft:!1,editUrl:"https://github.com/heshibin/heshibin.github.io/edit/main/docs/JAVA/\u5de5\u5177\u7c7b/NetworkUtil.md",tags:[{label:"java",permalink:"/en/docs/tags/java"},{label:"\u4ee3\u7801",permalink:"/en/docs/tags/\u4ee3\u7801"},{label:"\u5de5\u5177\u7c7b",permalink:"/en/docs/tags/\u5de5\u5177\u7c7b"}],version:"current",sidebarPosition:1,frontMatter:{slug:"NetworkUtil \u83b7\u53d6ip\u3001mac\u5730\u5740",title:"\u83b7\u53d6ip\u3001mac\u5730\u5740",date:"2023-01-07T00:00:00.000Z",sidebar_position:1,authors:"heshibin",tags:["java","\u4ee3\u7801","\u5de5\u5177\u7c7b"]},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/en/docs/JAVA/\u8bbe\u8ba1\u6a21\u5f0f"},next:{title:"\u4ec0\u4e48\u662ftry-with-resource?",permalink:"/en/docs/JAVA/\u77e5\u8bc6\u70b9/2023-01/01\u4ec0\u4e48\u662ftry-with-resource"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import java.net.Inet4Address;\nimport java.net.InetAddress;\nimport java.net.NetworkInterface;\nimport java.net.SocketException;\nimport java.net.UnknownHostException;\nimport java.util.ArrayList;\nimport java.util.Enumeration;\nimport java.util.List;\n\npublic class NetworkUtil {\n    \n    public static String getMacAddress() {\n        try {\n            InetAddress ia = InetAddress.getLocalHost();\n            byte[] mac = NetworkInterface.getByInetAddress(ia).getHardwareAddress();\n            StringBuffer sb = new StringBuffer("");\n            for(int i=0; i<mac.length; i++) {\n                if(i!=0) {\n                    sb.append("-");\n                }\n                int temp = mac[i]&0xff;\n                String str = Integer.toHexString(temp);\n                if(str.length()==1) {\n                    sb.append("0"+str);\n                }else {\n                    sb.append(str);\n                }\n            }\n            return sb.toString().toUpperCase();\n        } catch (UnknownHostException | SocketException e) {\n            e.printStackTrace();\n            return null;\n        }\n    }\n    \n    public static List<String> getLocalIpAddress() throws SocketException {\n        List<String> ipList = new ArrayList<>();\n        try {\n            Enumeration<NetworkInterface> allNetwork = NetworkInterface.getNetworkInterfaces();\n            while (allNetwork.hasMoreElements()) {\n                NetworkInterface netInterface = allNetwork.nextElement();\n                if (netInterface.isLoopback() || netInterface.isVirtual()) {\n                    continue;\n                }\n                Enumeration<InetAddress> inetAddress = netInterface.getInetAddresses();\n                while(inetAddress.hasMoreElements()) {\n                    InetAddress ip = inetAddress.nextElement() ;\n                    if(ip != null && ip instanceof Inet4Address) {\n                        ipList.add(ip.getHostAddress()) ;\n                    }\n                }               \n            }\n        } catch (SocketException ex) {\n            throw ex ;\n        }\n        return ipList;\n    }\n    \n}\n\n')))}d.isMDXComponent=!0}}]);