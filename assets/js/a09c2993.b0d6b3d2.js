"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const l={slug:"/",title:"K3s - Lightweight Kubernetes"},i=void 0,o={unversionedId:"introduction",id:"introduction",title:"K3s - Lightweight Kubernetes",description:"Lightweight Kubernetes. Easy to install, half the memory, all in a binary of less than 100 MB.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/introduction.md",tags:[],version:"current",lastUpdatedAt:1681153135,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{slug:"/",title:"K3s - Lightweight Kubernetes"},sidebar:"mySidebar",next:{title:"Architecture",permalink:"/architecture/"}},s={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Lightweight Kubernetes. Easy to install, half the memory, all in a binary of less than 100 MB."),(0,a.kt)("p",null,"Great for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Edge"),(0,a.kt)("li",{parentName:"ul"},"IoT"),(0,a.kt)("li",{parentName:"ul"},"CI"),(0,a.kt)("li",{parentName:"ul"},"Development"),(0,a.kt)("li",{parentName:"ul"},"ARM"),(0,a.kt)("li",{parentName:"ul"},"Embedding K8s"),(0,a.kt)("li",{parentName:"ul"},"Situations where a PhD in K8s clusterology is infeasible")),(0,a.kt)("h1",{id:"what-is-k3s"},"What is K3s?"),(0,a.kt)("p",null,"K3s is a fully compliant Kubernetes distribution with the following enhancements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Packaged as a single binary."),(0,a.kt)("li",{parentName:"ul"},"Lightweight storage backend based on sqlite3 as the default storage mechanism. etcd3, MySQL, Postgres are also available."),(0,a.kt)("li",{parentName:"ul"},"Wrapped in simple launcher that handles a lot of the complexity of TLS and options."),(0,a.kt)("li",{parentName:"ul"},"Secure by default with reasonable defaults for lightweight environments."),(0,a.kt)("li",{parentName:"ul"},'Simple but powerful "batteries-included" features have been added, such as: ',(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"local storage provider "),(0,a.kt)("li",{parentName:"ul"},"service load balancer"),(0,a.kt)("li",{parentName:"ul"},"Helm controller"),(0,a.kt)("li",{parentName:"ul"},"Traefik ingress controller."))),(0,a.kt)("li",{parentName:"ul"},"Operation of all Kubernetes control plane components is encapsulated in a single binary and process. This allows K3s to automate and manage complex cluster operations like distributing certificates."),(0,a.kt)("li",{parentName:"ul"},"External dependencies have been minimized (just a modern kernel and cgroup mounts needed). K3s packages the required dependencies, including:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"containerd"),(0,a.kt)("li",{parentName:"ul"},"Flannel (CNI)"),(0,a.kt)("li",{parentName:"ul"},"CoreDNS"),(0,a.kt)("li",{parentName:"ul"},"Traefik (Ingress)"),(0,a.kt)("li",{parentName:"ul"},"Klipper-lb (Service LB)"),(0,a.kt)("li",{parentName:"ul"},"Embedded network policy controller"),(0,a.kt)("li",{parentName:"ul"},"Embedded local-path-provisioner"),(0,a.kt)("li",{parentName:"ul"},"Host utilities (iptables, socat, etc)")))),(0,a.kt)("h1",{id:"whats-with-the-name"},"What's with the name?"),(0,a.kt)("p",null,"We wanted an installation of Kubernetes that was half the size in terms of memory footprint. Kubernetes is a 10-letter word stylized as K8s. So something half as big as Kubernetes would be a 5-letter word stylized as K3s. There is no long form of K3s and no official pronunciation."))}p.isMDXComponent=!0}}]);