"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8397],{4308:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>a});var c=s(5893),n=s(1151);const r={title:"Cluster Access",weight:21},o=void 0,i={id:"cluster-access",title:"Cluster Access",description:"The kubeconfig file stored at /etc/rancher/k3s/k3s.yaml is used to configure access to the Kubernetes cluster. If you have installed upstream Kubernetes command line tools such as kubectl or helm you will need to configure them with the correct kubeconfig path. This can be done by either exporting the KUBECONFIG environment variable or by invoking the --kubeconfig command line flag. Refer to the examples below for details.",source:"@site/docs/cluster-access.md",sourceDirName:".",slug:"/cluster-access",permalink:"/cluster-access",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cluster-access.md",tags:[],version:"current",lastUpdatedAt:1713385149e3,frontMatter:{title:"Cluster Access",weight:21},sidebar:"mySidebar",previous:{title:"Architecture",permalink:"/architecture"},next:{title:"Volumes and Storage",permalink:"/storage"}},l={},a=[{value:"Accessing the Cluster from Outside with kubectl",id:"accessing-the-cluster-from-outside-with-kubectl",level:3}];function u(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["The kubeconfig file stored at ",(0,c.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"})," is used to configure access to the Kubernetes cluster. If you have installed upstream Kubernetes command line tools such as kubectl or helm you will need to configure them with the correct kubeconfig path. This can be done by either exporting the ",(0,c.jsx)(t.code,{children:"KUBECONFIG"})," environment variable or by invoking the ",(0,c.jsx)(t.code,{children:"--kubeconfig"})," command line flag. Refer to the examples below for details."]}),"\n",(0,c.jsx)(t.p,{children:"Leverage the KUBECONFIG environment variable:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"export KUBECONFIG=/etc/rancher/k3s/k3s.yaml\nkubectl get pods --all-namespaces\nhelm ls --all-namespaces\n"})}),"\n",(0,c.jsx)(t.p,{children:"Or specify the location of the kubeconfig file in the command:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"kubectl --kubeconfig /etc/rancher/k3s/k3s.yaml get pods --all-namespaces\nhelm --kubeconfig /etc/rancher/k3s/k3s.yaml ls --all-namespaces\n"})}),"\n",(0,c.jsx)(t.h3,{id:"accessing-the-cluster-from-outside-with-kubectl",children:"Accessing the Cluster from Outside with kubectl"}),"\n",(0,c.jsxs)(t.p,{children:["Copy ",(0,c.jsx)(t.code,{children:"/etc/rancher/k3s/k3s.yaml"})," on your machine located outside the cluster as ",(0,c.jsx)(t.code,{children:"~/.kube/config"}),". Then replace the value of the ",(0,c.jsx)(t.code,{children:"server"})," field with the IP or name of your K3s server. ",(0,c.jsx)(t.code,{children:"kubectl"})," can now manage your K3s cluster."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>o});var c=s(7294);const n={},r=c.createContext(n);function o(e){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),c.createElement(r.Provider,{value:t},e.children)}}}]);