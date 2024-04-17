"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8379],{7497:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(5893),i=n(1151);const r={title:"Known Issues",weight:70},o=void 0,a={id:"known-issues",title:"Known Issues",description:"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release.",source:"@site/docs/known-issues.md",sourceDirName:".",slug:"/known-issues",permalink:"/known-issues",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/known-issues.md",tags:[],version:"current",lastUpdatedAt:1713385149e3,frontMatter:{title:"Known Issues",weight:70},sidebar:"mySidebar",previous:{title:"Related Projects",permalink:"/related-projects"},next:{title:"FAQ",permalink:"/faq"}},l={},d=[{value:"Snap Docker",id:"snap-docker",level:3},{value:"Iptables",id:"iptables",level:3},{value:"Rootless Mode",id:"rootless-mode",level:3},{value:"Upgrading Hardened Clusters from v1.24.x to v1.25.x",id:"hardened-125",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The Known Issues are updated periodically and designed to inform you about any issues that may not be immediately addressed in the next upcoming release."}),"\n",(0,t.jsx)(s.h3,{id:"snap-docker",children:"Snap Docker"}),"\n",(0,t.jsx)(s.p,{children:"If you plan to use K3s with docker, Docker installed via a snap package is not recommended as it has been known to cause issues running K3s."}),"\n",(0,t.jsx)(s.h3,{id:"iptables",children:"Iptables"}),"\n",(0,t.jsx)(s.p,{children:"If you are running iptables v1.6.1 and older in nftables mode you might encounter issues. We recommend utilizing newer iptables (such as 1.6.1+) to avoid issues or running iptables legacy mode."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"update-alternatives --set iptables /usr/sbin/iptables-legacy\nupdate-alternatives --set ip6tables /usr/sbin/ip6tables-legacy\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Iptables versions 1.8.0-1.8.4 have known issues that can cause K3s to fail. Several popular Linux distributions ship with these versions by default. One bug causes the accumulation of duplicate rules, which negatively affects the performance and stability of the node. See ",(0,t.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/issues/3117",children:"Issue #3117"})," for information on how to determine if you are affected by this problem."]}),"\n",(0,t.jsxs)(s.p,{children:["K3s includes a working version of iptables (v1.8.8) which functions properly. You can tell K3s to use its bundled version of iptables by starting K3s with the ",(0,t.jsx)(s.code,{children:"--prefer-bundled-bin"})," option, or by uninstalling the iptables/nftables packages from your operating system."]}),"\n",(0,t.jsx)(s.admonition,{title:"Version Gate",type:"info",children:(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"--prefer-bundled-bin"})," flag is available starting with the 2022-12 releases (v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1)."]})}),"\n",(0,t.jsx)(s.h3,{id:"rootless-mode",children:"Rootless Mode"}),"\n",(0,t.jsxs)(s.p,{children:["Running K3s with Rootless mode is experimental and has several ",(0,t.jsx)(s.a,{href:"/advanced#known-issues-with-rootless-mode",children:"known issues."})]}),"\n",(0,t.jsx)(s.h3,{id:"hardened-125",children:"Upgrading Hardened Clusters from v1.24.x to v1.25.x"}),"\n",(0,t.jsxs)(s.p,{children:["Kubernetes removed PodSecurityPolicy from v1.25 in favor of Pod Security Standards. You can read more about PSS in the ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-standards/",children:"upstream documentation"}),". For K3S, there are some manual steps that must be taken if any ",(0,t.jsx)(s.code,{children:"PodSecurityPolicy"})," has been configured on the nodes."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["On all nodes, update the ",(0,t.jsx)(s.code,{children:"kube-apiserver-arg"})," value to remove the ",(0,t.jsx)(s.code,{children:"PodSecurityPolicy"})," admission-plugin. Add the following arg value instead: ",(0,t.jsx)(s.code,{children:"'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'"}),", but do NOT restart or upgrade K3S yet. Below is an example of what a configuration file might look like after this update for the node to be hardened:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"protect-kernel-defaults: true\nsecrets-encryption: true\nkube-apiserver-arg:\n  - 'admission-control-config-file=/var/lib/rancher/k3s/server/psa.yaml'\n  - 'audit-log-path=/var/lib/rancher/k3s/server/logs/audit.log'\n  - 'audit-policy-file=/var/lib/rancher/k3s/server/audit.yaml'\n  - 'audit-log-maxage=30'\n  - 'audit-log-maxbackup=10'\n  - 'audit-log-maxsize=100'\n  - 'request-timeout=300s'\n  - 'service-account-lookup=true'\nkube-controller-manager-arg:\n  - 'terminated-pod-gc-threshold=10'\n  - 'use-service-account-credentials=true'\nkubelet-arg:\n  - 'streaming-connection-idle-timeout=5m'\n  - 'make-iptables-util-chains=true'\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["Create the ",(0,t.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/psa.yaml"})," file with the following contents. You may want to exempt more namespaces as well. The below example exempts ",(0,t.jsx)(s.code,{children:"kube-system"})," (required), ",(0,t.jsx)(s.code,{children:"cis-operator-system"})," (optional, but useful for when running security scans through Rancher), and ",(0,t.jsx)(s.code,{children:"system-upgrade"})," (required if doing ",(0,t.jsx)(s.a,{href:"/upgrades/automated",children:"Automated Upgrades"}),")."]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'apiVersion: apiserver.config.k8s.io/v1\nkind: AdmissionConfiguration\nplugins:\n- name: PodSecurity\n  configuration:\n    apiVersion: pod-security.admission.config.k8s.io/v1beta1\n    kind: PodSecurityConfiguration\n    defaults:\n      enforce: "restricted"\n      enforce-version: "latest"\n      audit: "restricted"\n      audit-version: "latest"\n      warn: "restricted"\n      warn-version: "latest"\n    exemptions:\n      usernames: []\n      runtimeClasses: []\n      namespaces: [kube-system, cis-operator-system, system-upgrade]\n'})}),"\n",(0,t.jsxs)(s.ol,{start:"3",children:["\n",(0,t.jsxs)(s.li,{children:["Perform the upgrade as normal. If doing ",(0,t.jsx)(s.a,{href:"/upgrades/automated",children:"Automated Upgrades"}),", ensure that the namespace where the ",(0,t.jsx)(s.code,{children:"system-upgrade-controller"})," pod is running in is setup to be privileged in accordance with the ",(0,t.jsx)(s.a,{href:"https://kubernetes.io/docs/concepts/security/pod-security-admission/#pod-security-levels",children:"Pod Security levels"}),":"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: system-upgrade\n  labels:\n    # This value must be privileged for the controller to run successfully.\n    pod-security.kubernetes.io/enforce: privileged\n    pod-security.kubernetes.io/enforce-version: v1.25\n    # We are setting these to our _desired_ `enforce` level, but note that these below values can be any of the available options.\n    pod-security.kubernetes.io/audit: privileged\n    pod-security.kubernetes.io/audit-version: v1.25\n    pod-security.kubernetes.io/warn: privileged\n    pod-security.kubernetes.io/warn-version: v1.25\n"})}),"\n",(0,t.jsxs)(s.ol,{start:"4",children:["\n",(0,t.jsxs)(s.li,{children:["After the upgrade is complete, remove any remaining PSP resources from the cluster. In many cases, there may be PodSecurityPolicies and associated RBAC resources in custom files used for hardening within ",(0,t.jsx)(s.code,{children:"/var/lib/rancher/k3s/server/manifests/"}),". Remove those resources and k3s will update automatically. Sometimes, due to timing, some of these may be left in the cluster, in which case you will need to delete them manually. If the ",(0,t.jsx)(s.a,{href:"/security/hardening-guide",children:"Hardening Guide"})," was previously followed, you should be able to delete them via the following:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sh",children:"# Get the resources associated with PSPs\n$ kubectl get roles,clusterroles,rolebindings,clusterrolebindings -A | grep -i psp\n\n# Delete those resources:\n$ kubectl delete clusterrole.rbac.authorization.k8s.io/psp:restricted-psp clusterrole.rbac.authorization.k8s.io/psp:svclb-psp clusterrole.rbac.authorization.k8s.io/psp:system-unrestricted-psp clusterrolebinding.rbac.authorization.k8s.io/default:restricted-psp clusterrolebinding.rbac.authorization.k8s.io/system-unrestricted-node-psp-rolebinding && kubectl delete -n kube-system rolebinding.rbac.authorization.k8s.io/svclb-psp-rolebinding rolebinding.rbac.authorization.k8s.io/system-unrestricted-svc-acct-psp-rolebinding\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(7294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);