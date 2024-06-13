"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[5292],{9174:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(5893),a=t(1151);const i={title:"Uninstalling K3s"},l=void 0,o={id:"installation/uninstall",title:"Uninstalling K3s",description:"Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/uninstall.md",sourceDirName:"installation",slug:"/installation/uninstall",permalink:"/zh/installation/uninstall",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/uninstall.md",tags:[],version:"current",lastUpdatedAt:171829904e4,frontMatter:{title:"Uninstalling K3s"},sidebar:"mySidebar",previous:{title:"Managing Packaged Components",permalink:"/zh/installation/packaged-components"},next:{title:"\u96c6\u7fa4\u6570\u636e\u5b58\u50a8",permalink:"/zh/datastore/"}},r={},d=[{value:"Uninstalling Servers",id:"uninstalling-servers",level:3},{value:"Uninstalling Agents",id:"uninstalling-agents",level:3}];function c(n){const e={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.admonition,{type:"warning",children:(0,s.jsxs)(e.p,{children:["Uninstalling K3s deletes the local cluster data, configuration, and all of the scripts and CLI tools.",(0,s.jsx)(e.br,{}),"\n","It does not remove any data from external datastores, or created by pods using external Kubernetes storage volumes."]})}),"\n",(0,s.jsx)(e.p,{children:"If you installed K3s using the installation script, a script to uninstall K3s was generated during installation."}),"\n",(0,s.jsxs)(e.p,{children:["If you are planning on rejoining a node to an existing cluster after uninstalling and reinstalling, be sure to delete the node from the cluster to ensure that the node password secret is removed. See the ",(0,s.jsx)(e.a,{href:"/zh/architecture#how-agent-node-registration-works",children:"Node Registration"})," documentation for more information."]}),"\n",(0,s.jsx)(e.h3,{id:"uninstalling-servers",children:"Uninstalling Servers"}),"\n",(0,s.jsx)(e.p,{children:"To uninstall K3s from a server node, run:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"/usr/local/bin/k3s-uninstall.sh\n"})}),"\n",(0,s.jsx)(e.h3,{id:"uninstalling-agents",children:"Uninstalling Agents"}),"\n",(0,s.jsx)(e.p,{children:"To uninstall K3s from an agent node, run:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"/usr/local/bin/k3s-agent-uninstall.sh\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>l});var s=t(7294);const a={},i=s.createContext(a);function l(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:l(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);