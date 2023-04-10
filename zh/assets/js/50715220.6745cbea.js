"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=d(n),s=a,u=k["".concat(p,".").concat(s)]||k[s]||m[s]||l;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const l={title:"CLI \u5de5\u5177",weight:1},i=void 0,o={unversionedId:"cli/cli",id:"cli/cli",title:"CLI \u5de5\u5177",description:"K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u4e86\u5f88\u591a\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u4f60\u7ba1\u7406\u96c6\u7fa4\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/zh/cli/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/cli.md",tags:[],version:"current",lastUpdatedAt:1681153135,formattedLastUpdatedAt:"2023\u5e744\u670810\u65e5",frontMatter:{title:"CLI \u5de5\u5177",weight:1},sidebar:"mySidebar",previous:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/zh/faq/"},next:{title:"server",permalink:"/zh/cli/server"}},p={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"K3s \u4e8c\u8fdb\u5236\u6587\u4ef6\u5305\u542b\u4e86\u5f88\u591a\u5de5\u5177\uff0c\u53ef\u5e2e\u52a9\u4f60\u7ba1\u7406\u96c6\u7fa4\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s server")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c K3s Server \u8282\u70b9\uff0c\u8fd9\u5c06\u542f\u52a8 Kubernetes ",(0,a.kt)("inlineCode",{parentName:"td"},"apiserver"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"scheduler"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"controller-manager")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"cloud-controller-manager")," \u7ec4\u4ef6\uff0c\u4ee5\u53ca\u6570\u636e\u5b58\u50a8\u548c Agent \u7ec4\u4ef6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"td",href:"/zh/cli/server"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s server")," \u547d\u4ee4\u6587\u6863"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s agent")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c K3s Agent \u8282\u70b9\uff0c\u8fd9\u5c06\u542f\u52a8 ",(0,a.kt)("inlineCode",{parentName:"td"},"containerd"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"flannel"),"\u3001",(0,a.kt)("inlineCode",{parentName:"td"},"kube-router")," \u7f51\u7edc\u7b56\u7565\u63a7\u5236\u5668\u548c Kubernetes ",(0,a.kt)("inlineCode",{parentName:"td"},"kubelet")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"kube-proxy")," \u7ec4\u4ef6\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"td",href:"/zh/cli/agent"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s agent")," \u547d\u4ee4\u6587\u6863"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s kubectl")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u5d4c\u5165\u5f0f ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/reference/kubectl"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl")," \u547d\u4ee4"),"\u3002\u8fd9\u662f\u7528\u4e8e\u4e0e Kubernetes apiserver \u4ea4\u4e92\u7684 CLI\u3002\u5982\u679c\u672a\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},"KUBECONFIG")," \u73af\u5883\u53d8\u91cf\uff0c\u5c06\u81ea\u52a8\u5c1d\u8bd5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"/etc/rancher/k3s/k3s.yaml")," \u4e2d\u7684 kubeconfig\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s crictl")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u5d4c\u5165\u5f0f ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md"},(0,a.kt)("inlineCode",{parentName:"a"},"crictl")," \u547d\u4ee4"),"\u3002\u8fd9\u662f\u4e00\u4e2a CLI\uff0c\u7528\u4e8e\u4e0e Kubernetes \u7684\u5bb9\u5668\u8fd0\u884c\u65f6\u63a5\u53e3 (CRI) \u4ea4\u4e92\u3002\u5bf9\u8c03\u8bd5\u5f88\u6709\u7528\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s ctr")),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u5d4c\u5165\u5f0f ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md"},(0,a.kt)("inlineCode",{parentName:"a"},"ctr")," \u547d\u4ee4"),"\u3002\u8fd9\u662f\u4e00\u4e2a\u7528\u4e8e containerd \u7684 CLI\uff0ccontainerd \u662f K3s \u4f7f\u7528\u7684\u5bb9\u5668 daemon\u3002\u5bf9\u8c03\u8bd5\u5f88\u6709\u7528\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s token")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406\u5f15\u5bfc Token\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"td",href:"/zh/cli/token"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s token")," \u547d\u4ee4\u6587\u6863"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s etcd-snapshot")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5bf9 K3s \u96c6\u7fa4\u6570\u636e\u8fdb\u884c\u6309\u9700\u5907\u4efd\u5e76\u4e0a\u4f20\u5230 S3\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"td",href:"/zh/cli/etcd-snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s etcd-snapshot")," \u547d\u4ee4\u6587\u6863"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s secrets-encrypt")),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u5c06 Secret \u5b58\u50a8\u5230\u96c6\u7fa4\u4e2d\u65f6\u52a0\u5bc6 Secret\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"td",href:"/zh/cli/secrets-encrypt"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s secrets-encrypt")," \u547d\u4ee4\u6587\u6863"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s certificate")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7ba1\u7406 K3s \u8bc1\u4e66\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"td",href:"/zh/cli/certificate"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s certificate")," \u547d\u4ee4\u6587\u6863"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s completion")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3a K3s \u751f\u6210 shell \u8865\u5168\u811a\u672c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s help")),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u547d\u4ee4\u5217\u8868\u6216\u67d0\u4e2a\u547d\u4ee4\u7684\u5e2e\u52a9")))))}m.isMDXComponent=!0}}]);