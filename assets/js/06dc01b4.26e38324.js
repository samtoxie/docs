"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9233],{8448:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(5893),t=i(1151);const r={title:"Basic Network Options",weight:25},o=void 0,a={id:"networking/basic-network-options",title:"Basic Network Options",description:"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6 or dualStack.",source:"@site/docs/networking/basic-network-options.md",sourceDirName:"networking",slug:"/networking/basic-network-options",permalink:"/networking/basic-network-options",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/basic-network-options.md",tags:[],version:"current",lastUpdatedAt:1713385149e3,frontMatter:{title:"Basic Network Options",weight:25},sidebar:"mySidebar",previous:{title:"Networking",permalink:"/networking/"},next:{title:"Distributed hybrid or multicloud cluster",permalink:"/networking/distributed-multicloud"}},l={},d=[{value:"Flannel Options",id:"flannel-options",level:2},{value:"Migrating from <code>wireguard</code> or <code>ipsec</code> to <code>wireguard-native</code>",id:"migrating-from-wireguard-or-ipsec-to-wireguard-native",level:3},{value:"Custom CNI",id:"custom-cni",level:2},{value:"Control-Plane Egress Selector configuration",id:"control-plane-egress-selector-configuration",level:2},{value:"Dual-stack (IPv4 + IPv6) Networking",id:"dual-stack-ipv4--ipv6-networking",level:2},{value:"Single-stack IPv6 Networking",id:"single-stack-ipv6-networking",level:2},{value:"Nodes Without a Hostname",id:"nodes-without-a-hostname",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components},{TabItem:i,Tabs:r}=n;return i||u("TabItem",!0),r||u("Tabs",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page describes K3s network configuration options, including configuration or replacement of Flannel, and configuring IPv6 or dualStack."}),"\n",(0,s.jsx)(n.h2,{id:"flannel-options",children:"Flannel Options"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/flannel-io/flannel/blob/master/README.md",children:"Flannel"})," is a lightweight provider of layer 3 network fabric that implements the Kubernetes Container Network Interface (CNI). It is what is commonly referred to as a CNI Plugin."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Flannel options can only be set on server nodes, and must be identical on all servers in the cluster."}),"\n",(0,s.jsxs)(n.li,{children:["The default backend for Flannel is ",(0,s.jsx)(n.code,{children:"vxlan"}),". To enable encryption, use the ",(0,s.jsx)(n.code,{children:"wireguard-native"})," backend."]}),"\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.code,{children:"vxlan"})," on Rasperry Pi with recent versions of Ubuntu requires ",(0,s.jsx)(n.a,{href:"/installation/requirements?os=pi#operating-systems",children:"additional preparation"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Using ",(0,s.jsx)(n.code,{children:"wireguard-native"})," as the Flannel backend may require additional modules on some Linux distributions. Please see the ",(0,s.jsx)(n.a,{href:"https://www.wireguard.com/install/",children:"WireGuard Install Guide"})," for details.\nThe WireGuard install steps will ensure the appropriate kernel modules are installed for your operating system.\nYou must ensure that WireGuard kernel modules are available on every node, both servers and agents, before attempting to use the WireGuard Flannel backend."]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"CLI Flag and Value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-ipv6-masq"})}),(0,s.jsxs)(n.td,{children:["Apply masquerading rules to IPv6 traffic (default for IPv4). Only applies on dual-stack or IPv6-only clusters. Compatible with any Flannel backend other than ",(0,s.jsx)(n.code,{children:"none"}),"."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-external-ip"})}),(0,s.jsx)(n.td,{children:"Use node external IP addresses as the destination for Flannel traffic, instead of internal IPs. Only applies when --node-external-ip is set on a node."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-backend=vxlan"})}),(0,s.jsx)(n.td,{children:"Use VXLAN to encapsulate the packets. May require additional kernel modules on Raspberry Pi."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-backend=host-gw"})}),(0,s.jsx)(n.td,{children:"Use IP routes to pod subnets via node IPs. Requires direct layer 2 connectivity between all nodes in the cluster."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-backend=wireguard-native"})}),(0,s.jsx)(n.td,{children:"Use WireGuard to encapsulate and encrypt network traffic. May require additional kernel modules."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-backend=ipsec"})}),(0,s.jsxs)(n.td,{children:["Use strongSwan IPSec via the ",(0,s.jsx)(n.code,{children:"swanctl"})," binary to encrypt network traffic. (Deprecated; will be removed in v1.27.0)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--flannel-backend=none"})}),(0,s.jsx)(n.td,{children:"Disable Flannel entirely."})]})]})]}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["K3s no longer includes strongSwan ",(0,s.jsx)(n.code,{children:"swanctl"})," and ",(0,s.jsx)(n.code,{children:"charon"})," binaries starting with the 2022-12 releases (v1.26.0+k3s1, v1.25.5+k3s1, v1.24.9+k3s1, v1.23.15+k3s1). Please install the correct packages on your node before upgrading to or installing these releases if you want to use the ",(0,s.jsx)(n.code,{children:"ipsec"})," backend."]})}),"\n",(0,s.jsxs)(n.h3,{id:"migrating-from-wireguard-or-ipsec-to-wireguard-native",children:["Migrating from ",(0,s.jsx)(n.code,{children:"wireguard"})," or ",(0,s.jsx)(n.code,{children:"ipsec"})," to ",(0,s.jsx)(n.code,{children:"wireguard-native"})]}),"\n",(0,s.jsxs)(n.p,{children:["The legacy ",(0,s.jsx)(n.code,{children:"wireguard"})," backend requires installation of the ",(0,s.jsx)(n.code,{children:"wg"})," tool on the host. This backend is not available in K3s v1.26 and higher, in favor of ",(0,s.jsx)(n.code,{children:"wireguard-native"})," backend, which directly interfaces with the kernel."]}),"\n",(0,s.jsxs)(n.p,{children:["The legacy ",(0,s.jsx)(n.code,{children:"ipsec"})," backend requires installation of the ",(0,s.jsx)(n.code,{children:"swanctl"})," and ",(0,s.jsx)(n.code,{children:"charon"})," binaries on the host. This backend is not available in K3s v1.27 and higher, in favor of the ",(0,s.jsx)(n.code,{children:"wireguard-native"})," backend."]}),"\n",(0,s.jsx)(n.p,{children:"We recommend that users migrate to the new backend as soon as possible. The migration requires a short period of downtime while nodes come up with the new configuration. You should follow these two steps:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Update the K3s config on all server nodes. If using config files, the ",(0,s.jsx)(n.code,{children:"/etc/rancher/k3s/config.yaml"})," should include ",(0,s.jsx)(n.code,{children:"flannel-backend: wireguard-native"})," instead of ",(0,s.jsx)(n.code,{children:"flannel-backend: wireguard"})," or ",(0,s.jsx)(n.code,{children:"flannel-backend: ipsec"}),". If you are configuring K3s via CLI flags in the systemd unit, the equivalent flags should be changed."]}),"\n",(0,s.jsx)(n.li,{children:"Reboot all nodes, starting with the servers."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-cni",children:"Custom CNI"}),"\n",(0,s.jsxs)(n.p,{children:["Start K3s with ",(0,s.jsx)(n.code,{children:"--flannel-backend=none"})," and install your CNI of choice. Most CNI plugins come with their own network policy engine, so it is recommended to set ",(0,s.jsx)(n.code,{children:"--disable-network-policy"})," as well to avoid conflicts. Some important information to take into consideration:"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsxs)(i,{value:"Canal",default:!0,children:[(0,s.jsxs)(n.p,{children:["Visit the ",(0,s.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/getting-started/kubernetes/flannel/install-for-flannel#installing-calico-for-policy-and-flannel-aka-canal-for-networking",children:"Canal Docs"})," website. Follow the steps to install Canal. Modify the Canal YAML so that IP forwarding is allowed in the ",(0,s.jsx)(n.code,{children:"container_settings"})," section, for example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'"container_settings": {\n  "allow_ip_forwarding": true\n}\n'})}),(0,s.jsx)(n.p,{children:"Apply the Canal YAML."}),(0,s.jsx)(n.p,{children:"Ensure the settings were applied by running the following command on the host:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /etc/cni/net.d/10-canal.conflist\n"})}),(0,s.jsx)(n.p,{children:"You should see that IP forwarding is set to true."})]}),(0,s.jsxs)(i,{value:"Calico",default:!0,children:[(0,s.jsxs)(n.p,{children:["Follow the ",(0,s.jsx)(n.a,{href:"https://docs.tigera.io/calico/latest/reference/configure-cni-plugins",children:"Calico CNI Plugins Guide"}),". Modify the Calico YAML so that IP forwarding is allowed in the ",(0,s.jsx)(n.code,{children:"container_settings"})," section, for example:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'"container_settings": {\n  "allow_ip_forwarding": true\n}\n'})}),(0,s.jsx)(n.p,{children:"Apply the Calico YAML."}),(0,s.jsx)(n.p,{children:"Ensure the settings were applied by running the following command on the host:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat /etc/cni/net.d/10-calico.conflist\n"})}),(0,s.jsx)(n.p,{children:"You should see that IP forwarding is set to true."})]}),(0,s.jsxs)(i,{value:"Cilium",default:!0,children:[(0,s.jsxs)(n.p,{children:["Before running ",(0,s.jsx)(n.code,{children:"k3s-killall.sh"})," or ",(0,s.jsx)(n.code,{children:"k3s-uninstall.sh"}),", you must manually remove ",(0,s.jsx)(n.code,{children:"cilium_host"}),", ",(0,s.jsx)(n.code,{children:"cilium_net"})," and ",(0,s.jsx)(n.code,{children:"cilium_vxlan"})," interfaces. If you fail to do this, you may lose network connectivity to the host when K3s is stopped"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip link delete cilium_host\nip link delete cilium_net\nip link delete cilium_vxlan\n"})}),(0,s.jsx)(n.p,{children:"Additionally, iptables rules for cilium should be removed:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"iptables-save | grep -iv cilium | iptables-restore\nip6tables-save | grep -iv cilium | ip6tables-restore\n"})})]})]}),"\n",(0,s.jsx)(n.h2,{id:"control-plane-egress-selector-configuration",children:"Control-Plane Egress Selector configuration"}),"\n",(0,s.jsxs)(n.p,{children:["K3s agents and servers maintain websocket tunnels between nodes that are used to encapsulate bidirectional communication between the control-plane (apiserver) and agent (kubelet and containerd) components.\nThis allows agents to operate without exposing the kubelet and container runtime streaming ports to incoming connections, and for the control-plane to connect to cluster services when operating with the agent disabled.\nThis functionality is equivalent to the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/extend-kubernetes/setup-konnectivity/",children:"Konnectivity"})," service commonly used on other Kubernetes distributions, and is managed via the apiserver's egress selector configuration."]}),"\n",(0,s.jsxs)(n.p,{children:["The default mode is ",(0,s.jsx)(n.code,{children:"agent"}),". ",(0,s.jsx)(n.code,{children:"pod"})," or ",(0,s.jsx)(n.code,{children:"cluster"})," modes are recommended when running ",(0,s.jsx)(n.a,{href:"/advanced#running-agentless-servers-experimental",children:"agentless servers"}),", in order to provide the apiserver with access to cluster service endpoints in the absence of flannel and kube-proxy."]}),"\n",(0,s.jsxs)(n.p,{children:["The egress selector mode may be configured on servers via the ",(0,s.jsx)(n.code,{children:"--egress-selector-mode"})," flag, and offers four modes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"disabled"}),": The apiserver does not use agent tunnels to communicate with kubelets or cluster endpoints.\nThis mode requires that servers run the kubelet, CNI, and kube-proxy, and have direct connectivity to agents, or the apiserver will not be able to access service endpoints or perform ",(0,s.jsx)(n.code,{children:"kubectl exec"})," and ",(0,s.jsx)(n.code,{children:"kubectl logs"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent"})," (default): The apiserver uses agent tunnels to communicate with kubelets.\nThis mode requires that the servers also run the kubelet, CNI, and kube-proxy, or the apiserver will not be able to access service endpoints."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pod"}),": The apiserver uses agent tunnels to communicate with kubelets and service endpoints, routing endpoint connections to the correct agent by watching Nodes and Endpoints.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"NOTE"}),": This mode will not work when using a CNI that uses its own IPAM and does not respect the node's PodCIDR allocation. ",(0,s.jsx)(n.code,{children:"cluster"})," or ",(0,s.jsx)(n.code,{children:"agent"})," mode should be used with these CNIs instead."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cluster"}),": The apiserver uses agent tunnels to communicate with kubelets and service endpoints, routing endpoint connections to the correct agent by watching Pods and Endpoints. This mode has the highest portability across different cluster configurations, at the cost of increased overhead."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"dual-stack-ipv4--ipv6-networking",children:"Dual-stack (IPv4 + IPv6) Networking"}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["Experimental support is available as of ",(0,s.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.21.0%2Bk3s1",children:"v1.21.0+k3s1"}),".",(0,s.jsx)(n.br,{}),"\n","Stable support is available as of ",(0,s.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.23.7%2Bk3s1",children:"v1.23.7+k3s1"}),"."]})}),"\n",(0,s.jsxs)(n.admonition,{title:"Known Issue",type:"warning",children:[(0,s.jsxs)(n.p,{children:["Before 1.27, Kubernetes ",(0,s.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/111695",children:"Issue #111695"})," causes the Kubelet to ignore the node IPv6 addresses if you have a dual-stack environment and you are not using the primary network interface for cluster traffic. To avoid this bug, use 1.27 or newer or add the following flag to both K3s servers and agents:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'--kubelet-arg="node-ip=0.0.0.0" # To proritize IPv4 traffic\n#OR\n--kubelet-arg="node-ip=::" # To proritize IPv6 traffic\n'})})]}),"\n",(0,s.jsx)(n.p,{children:"Dual-stack networking must be configured when the cluster is first created. It cannot be enabled on an existing cluster once it has been started as IPv4-only."}),"\n",(0,s.jsxs)(n.p,{children:["To enable dual-stack in K3s, you must provide valid dual-stack ",(0,s.jsx)(n.code,{children:"cluster-cidr"})," and ",(0,s.jsx)(n.code,{children:"service-cidr"})," on all server nodes. This is an example of a valid configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"--cluster-cidr=10.42.0.0/16,2001:cafe:42::/56 --service-cidr=10.43.0.0/16,2001:cafe:43::/112\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that you may configure any valid ",(0,s.jsx)(n.code,{children:"cluster-cidr"})," and ",(0,s.jsx)(n.code,{children:"service-cidr"})," values, but the above masks are recommended. If you change the ",(0,s.jsx)(n.code,{children:"cluster-cidr"})," mask, you should also change the ",(0,s.jsx)(n.code,{children:"node-cidr-mask-size-ipv4"})," and ",(0,s.jsx)(n.code,{children:"node-cidr-mask-size-ipv6"})," values to match the planned pods per node and total node count. The largest supported ",(0,s.jsx)(n.code,{children:"service-cidr"})," mask is /12 for IPv4, and /112 for IPv6. Remember to allow ipv6 traffic if you are deploying in a public cloud."]}),"\n",(0,s.jsx)(n.p,{children:"If you are using a custom CNI plugin, i.e. a CNI plugin other than Flannel, the additional configuration may be required. Please consult your plugin's dual-stack documentation and verify if network policies can be enabled."}),"\n",(0,s.jsx)(n.admonition,{title:"Known Issue",type:"warning",children:(0,s.jsx)(n.p,{children:"When defining cluster-cidr and service-cidr with IPv6 as the primary family, the node-ip of all cluster members should be explicitly set, placing node's desired IPv6 address as the first address. By default, the kubelet always uses IPv4 as the primary address family."})}),"\n",(0,s.jsx)(n.h2,{id:"single-stack-ipv6-networking",children:"Single-stack IPv6 Networking"}),"\n",(0,s.jsx)(n.admonition,{title:"Version Gate",type:"info",children:(0,s.jsxs)(n.p,{children:["Available as of ",(0,s.jsx)(n.a,{href:"https://github.com/k3s-io/k3s/releases/tag/v1.22.9%2Bk3s1",children:"v1.22.9+k3s1"})]})}),"\n",(0,s.jsx)(n.admonition,{title:"Known Issue",type:"warning",children:(0,s.jsxs)(n.p,{children:["If your IPv6 default route is set by a router advertisement (RA), you will need to set the sysctl ",(0,s.jsx)(n.code,{children:"net.ipv6.conf.all.accept_ra=2"}),"; otherwise, the node will drop the default route once it expires. Be aware that accepting RAs could increase the risk of ",(0,s.jsx)(n.a,{href:"https://github.com/kubernetes/kubernetes/issues/91507",children:"man-in-the-middle attacks"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["Single-stack IPv6 clusters (clusters without IPv4) are supported on K3s using the ",(0,s.jsx)(n.code,{children:"--cluster-cidr"})," and ",(0,s.jsx)(n.code,{children:"--service-cidr"})," flags. This is an example of a valid configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"--cluster-cidr=2001:cafe:42::/56 --service-cidr=2001:cafe:43::/112\n"})}),"\n",(0,s.jsx)(n.h2,{id:"nodes-without-a-hostname",children:"Nodes Without a Hostname"}),"\n",(0,s.jsxs)(n.p,{children:['Some cloud providers, such as Linode, will create machines with "localhost" as the hostname and others may not have a hostname set at all. This can cause problems with domain name resolution. You can run K3s with the ',(0,s.jsx)(n.code,{children:"--node-name"})," flag or ",(0,s.jsx)(n.code,{children:"K3S_NODE_NAME"})," environment variable and this will pass the node name to resolve this issue."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var s=i(7294);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);