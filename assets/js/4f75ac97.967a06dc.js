(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8183],{2186:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>H});var a=l(7294),n=(l(1262),l(6698)),c=l(5545),r=l(8022),s=l(9650),i=l(637),m=l(5805);const{TextArea:o}=c.Z,{Title:h,Paragraph:E,Text:S,Link:d}=r.Z,A=l(1354);class H extends a.Component{constructor(e){super(e),this.state={text:"",result:"",introduces:[{key:"sanlie",label:"\u6563\u5217\u7b97\u6cd5",children:a.createElement(a.Fragment,null,a.createElement("b",null,"MD5"),a.createElement(E,null,a.createElement(S,{code:!0},"MD5"),"\u662f\u4e00\u79cd\u5e7f\u6cdb\u4f7f\u7528\u7684\u6563\u5217\u51fd\u6570\u3002\u5b83\u88ab\u7528\u4e8e\u5404\u79cd\u5b89\u5168\u5e94\u7528\uff0c\u4e5f\u901a\u5e38\u7528\u4e8e\u6821\u9a8c\u6587\u4ef6\u7684\u5b8c\u6574\u6027\u3002\u4f46",a.createElement(S,{code:!0},"MD5"),"\u4e0d\u8010\u78b0\u649e\u653b\u51fb\uff0c\u56e0\u6b64\u4e0d\u9002\u7528\u4e8e",a.createElement(S,{code:!0},"SSL"),"\u8bc1\u4e66\u6216\u6570\u5b57\u7b7e\u540d\u3002",a.createElement("p",null,a.createElement(S,{code:!0},'var hash = CryptoJS.MD5("Message");'))),a.createElement("b",null,"SHA-1"),a.createElement(E,null,a.createElement(S,{code:!0},"SHA"),"\u6563\u5217\u51fd\u6570\u7531\u7f8e\u56fd\u56fd\u5bb6\u5b89\u5168\u5c40 (NSA) \u8bbe\u8ba1\u3002 ",a.createElement(S,{code:!0},"SHA-1"),"\u662f\u73b0\u6709",a.createElement(S,{code:!0},"SHA"),"\u6563\u5217\u51fd\u6570\u4e2d\u6700\u6210\u719f\u7684\uff0c\u5b83\u7528\u4e8e\u5404\u79cd\u5b89\u5168\u5e94\u7528\u7a0b\u5e8f\u548c\u534f\u8bae\u3002\u4f46\u968f\u7740\u65b0\u653b\u51fb\u7684\u53d1\u73b0\u6216\u6539\u8fdb\uff0c",a.createElement(S,{code:!0},"SHA-1"),"\u7684\u6297\u653b\u51fb\u80fd\u529b\u4e00\u76f4\u5728\u51cf\u5f31\u3002",a.createElement("p",null,a.createElement(S,{code:!0},'var hash = CryptoJS.SHA1("Message");'))),a.createElement("b",null,"SHA-2"),a.createElement(E,null,a.createElement(S,{code:!0},"SHA-224\u3001SHA-256\u3001SHA-384"),"\uff0c\u548c",a.createElement(S,{code:!0},"SHA-512"),"\u5408\u79f0\u4e3a",a.createElement(S,{code:!0},"SHA-2"),"\u3002",a.createElement(S,{code:!0},"SHA-256"),"\u662f",a.createElement(S,{code:!0},"SHA-2"),"\u96c6\u5408\u4e2d\u7684\u56db\u4e2a\u53d8\u4f53\u4e4b\u4e00\u3002\u867d\u7136\u5b83\u63d0\u4f9b\u4e86\u66f4\u597d\u7684\u5b89\u5168\u6027\uff0c\u4f46\u662f\u5b83\u7684\u5e94\u7528\u4e0d\u5982",a.createElement(S,{code:!0},"SHA-1"),"\u5e7f\u6cdb\u3002",a.createElement(S,{code:!0},'var hash = CryptoJS.SHA256("Message");'),a.createElement(S,{code:!0},"SHA-512"),"\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u4e0e",a.createElement(S,{code:!0},"SHA-256"),"\u76f8\u540c\uff0c\u4f46\u572864\u4f4d\u8ba1\u7b97\u673a\u4e0a",a.createElement(S,{code:!0},"SHA-512"),"\u6bd4",a.createElement(S,{code:!0},"SHA-256"),"\u66f4\u5feb(\u56e0\u4e3a\u5b83\u4eec\u5728\u5185\u90e8\u4f7f\u752864\u4f4d\u7b97\u672f)\uff1b\u57288\u4f4d\uff0c16\u4f4d\u548c32\u4f4d\u8ba1\u7b97\u673a\u4e0a\uff0c",a.createElement(S,{code:!0},"SHA-256"),"\u6bd4",a.createElement(S,{code:!0},"SHA-512"),"\u66f4\u5feb\u3002",a.createElement(S,{code:!0},'var hash = CryptoJS.SHA512("Message");'),a.createElement(S,{code:!0},"CryptoJS"),"\u8fd8\u652f\u6301",a.createElement(S,{code:!0},"SHA-224"),"\u548c",a.createElement(S,{code:!0},"SHA-384"),"\uff0c\u8fd9\u4e24\u4e2a\u7248\u672c\u5927\u81f4\u76f8\u540c\uff0c\u5206\u522b\u662f",a.createElement(S,{code:!0},"SHA-256"),"\u548c",a.createElement(S,{code:!0},"SHA-512"),"\u7684\u5220\u51cf\u7248\u672c\u3002"),a.createElement("b",null,"SHA-3"),a.createElement(E,null,a.createElement(S,{code:!0},"SHA-3"),"\u662f\u7b2c\u4e09\u4ee3\u5b89\u5168\u6563\u5217\u7b97\u6cd5(Secure Hash Algorithm 3)\u3002",a.createElement(S,{code:!0},'var hash = CryptoJS.SHA3("Message");'),a.createElement(S,{code:!0},"SHA-3"),"\u53ef\u4ee5\u914d\u7f6e\u8f93\u51fa\u6563\u5217\u957f\u5ea6\u4e3a224\uff0c256\uff0c384\u6216512\u4f4d\uff0c\u9ed8\u8ba4\u4e3a512\u4f4d\u3002 outputLength"),a.createElement("b",null,"RIPEMD-160"),a.createElement(S,{code:!0},'var hash = CryptoJS.RIPEMD160("Message");'))}]},this.handleChange=this.handleChange.bind(this),this.md5=this.md5.bind(this),this.SHA1=this.SHA1.bind(this),this.SHA256=this.SHA256.bind(this),this.SHA512=this.SHA512.bind(this),this.RIPEMD160=this.RIPEMD160.bind(this)}handleChange(e){const t=e.target.value;this.setState({text:t})}md5(){console.log(this.state.text),this.setState({result:A.MD5(this.state.text)})}SHA1(){console.log(this.state.text),this.setState({result:A.SHA1(this.state.text)})}SHA256(){console.log(this.state.text),this.setState({result:A.SHA256(this.state.text)})}SHA512(){console.log(this.state.text),this.setState({result:A.SHA512(this.state.text)})}RIPEMD160(){console.log(this.state.text),this.setState({result:A.RIPEMD160(this.state.text)})}render(){let{text:e,result:t,introduces:l}=this.state;return a.createElement(n.Z,{title:"\u5728\u7ebf\u52a0\u89e3\u5bc6\u5de5\u5177",description:"\u5728\u7ebf\u52a0\u89e3\u5bc6\u5de5\u5177 md5\u52a0\u5bc6 sha1 sha256 sha512"},a.createElement("div",{style:{margin:"10px"}},a.createElement(r.Z,null,a.createElement(h,null,"\u5728\u7ebf\u52a0\u89e3\u5bc6\u5de5\u5177"),a.createElement(E,null,a.createElement(S,{code:!0},"crypto-js"),"\u5b9e\u73b0\u3002",a.createElement(d,{href:"https://github.com/heshibin/heshibin.github.io/blob/main/src/pages/tools/sha.js"},"\u67e5\u770b\u6e90\u7801"))),a.createElement(o,{placeholder:"\u8bf7\u8f93\u5165\u5f85\u52a0\u5bc6\u6570\u636e...",onChange:this.handleChange}),a.createElement(s.Z,{wrap:!0,style:{marginTop:10,marginBottom:10}},a.createElement(i.Z,{type:"primary",onClick:this.md5},"MD5"),a.createElement(i.Z,{type:"primary",onClick:this.SHA1},"SHA1"),a.createElement(i.Z,{type:"primary",onClick:this.SHA256},"SHA256"),a.createElement(i.Z,{type:"primary",onClick:this.SHA512},"SHA512"),a.createElement(i.Z,{type:"primary",onClick:this.RIPEMD160},"RIPEMD-160")),a.createElement(o,{placeholder:"\u52a0\u5bc6\u540e\u6570\u636e...",value:t}),a.createElement(h,{level:4,style:{marginTop:"10px"}},"\u4ecb\u7ecd"),a.createElement(E,null,a.createElement(S,{code:!0},"CryptoJS"),"\u662f\u4e00\u4e2aJavaScript\u7684\u52a0\u89e3\u5bc6\u7684\u5de5\u5177\u5305\u3002\u5b83\u652f\u6301\u591a\u79cd\u7684\u7b97\u6cd5\uff1a",a.createElement(S,{code:!0},"MD5\u3001SHA1\u3001SHA2\u3001SHA3\u3001RIPEMD-160")," \u54c8\u5e0c\u6563\u5217\uff0c\u8fdb\u884c ",a.createElement(S,{code:!0},"AES\u3001DES\u3001Rabbit\u3001RC4\u3001Triple DES")," \u52a0\u89e3\u5bc6\u3002"),a.createElement(m.Z,{defaultActiveKey:"md5",items:l})))}}},2480:()=>{}}]);