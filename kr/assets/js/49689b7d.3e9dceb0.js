"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[1184],{524:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(5893),i=n(1151);const l={title:"Networking Services",weight:35},t=void 0,s={id:"networking/networking-services",title:"Networking Services",description:"This page explains how CoreDNS, Traefik Ingress controller, Network Policy controller, and ServiceLB load balancer controller work within K3s.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/networking/networking-services.md",sourceDirName:"networking",slug:"/networking/networking-services",permalink:"/kr/networking/networking-services",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/networking/networking-services.md",tags:[],version:"current",lastUpdatedAt:1713385149e3,frontMatter:{title:"Networking Services",weight:35},sidebar:"mySidebar",previous:{title:"Multus and IPAM plugins",permalink:"/kr/networking/multus-ipams"},next:{title:"\ud5ec\ub984(Helm)",permalink:"/kr/helm"}},a={},d=[{value:"CoreDNS",id:"coredns",level:2},{value:"Traefik Ingress Controller",id:"traefik-ingress-controller",level:2},{value:"Network Policy Controller",id:"network-policy-controller",level:2},{value:"Service Load Balancer",id:"service-load-balancer",level:2},{value:"How ServiceLB Works",id:"how-servicelb-works",level:3},{value:"Usage",id:"usage",level:3},{value:"Controlling ServiceLB Node Selection",id:"controlling-servicelb-node-selection",level:3},{value:"Creating ServiceLB Node Pools",id:"creating-servicelb-node-pools",level:3},{value:"Disabling ServiceLB",id:"disabling-servicelb",level:3},{value:"Deploying an External Cloud Controller Manager",id:"deploying-an-external-cloud-controller-manager",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.p,{children:"This page explains how CoreDNS, Traefik Ingress controller, Network Policy controller, and ServiceLB load balancer controller work within K3s."}),"\n",(0,o.jsxs)(r.p,{children:["Refer to the ",(0,o.jsx)(r.a,{href:"/kr/networking/basic-network-options",children:"Installation Network Options"})," page for details on Flannel configuration options and backend selection, or how to set up your own CNI."]}),"\n",(0,o.jsxs)(r.p,{children:["For information on which ports need to be opened for K3s, refer to the ",(0,o.jsx)(r.a,{href:"/kr/installation/requirements#networking",children:"Networking Requirements"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"coredns",children:"CoreDNS"}),"\n",(0,o.jsxs)(r.p,{children:["CoreDNS is deployed automatically on server startup. To disable it, configure all servers in the cluster with the ",(0,o.jsx)(r.code,{children:"--disable=coredns"})," option."]}),"\n",(0,o.jsx)(r.p,{children:"If you don't install CoreDNS, you will need to install a cluster DNS provider yourself."}),"\n",(0,o.jsx)(r.h2,{id:"traefik-ingress-controller",children:"Traefik Ingress Controller"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"https://traefik.io/",children:"Traefik"})," is a modern HTTP reverse proxy and load balancer made to deploy microservices with ease. It simplifies networking complexity while designing, deploying, and running applications."]}),"\n",(0,o.jsx)(r.p,{children:"The Traefik ingress controller deploys a LoadBalancer Service that uses ports 80 and 443. By default, ServiceLB will expose these ports on all cluster members, meaning these ports will not be usable for other HostPort or NodePort pods."}),"\n",(0,o.jsxs)(r.p,{children:["Traefik is deployed by default when starting the server. For more information see ",(0,o.jsx)(r.a,{href:"/kr/installation/packaged-components",children:"Managing Packaged Components"}),". The default config file is found in ",(0,o.jsx)(r.code,{children:"/var/lib/rancher/k3s/server/manifests/traefik.yaml"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"traefik.yaml"})," file should not be edited manually, as K3s will replace the file with defaults at startup. Instead, you should customize Traefik by creating an additional ",(0,o.jsx)(r.code,{children:"HelmChartConfig"})," manifest in ",(0,o.jsx)(r.code,{children:"/var/lib/rancher/k3s/server/manifests"}),". For more details and an example see ",(0,o.jsx)(r.a,{href:"/kr/helm#customizing-packaged-components-with-helmchartconfig",children:"Customizing Packaged Components with HelmChartConfig"}),". For more information on the possible configuration values, refer to the official ",(0,o.jsx)(r.a,{href:"https://github.com/traefik/traefik-helm-chart/tree/master/traefik",children:"Traefik Helm Configuration Parameters."}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["To remove Traefik from your cluster, start all servers with the ",(0,o.jsx)(r.code,{children:"--disable=traefik"})," flag."]}),"\n",(0,o.jsx)(r.p,{children:"K3s versions 1.20 and earlier include Traefik v1. K3s versions 1.21 and later install Traefik v2, unless an existing installation of Traefik v1 is found, in which case Traefik is not upgraded to v2. For more information on the specific version of Traefik included with K3s, consult the Release Notes for your version."}),"\n",(0,o.jsxs)(r.p,{children:["To migrate from an older Traefik v1 instance please refer to the ",(0,o.jsx)(r.a,{href:"https://doc.traefik.io/traefik/migration/v1-to-v2/",children:"Traefik documentation"})," and ",(0,o.jsx)(r.a,{href:"https://github.com/traefik/traefik-migration-tool",children:"migration tool"}),"."]}),"\n",(0,o.jsx)(r.h2,{id:"network-policy-controller",children:"Network Policy Controller"}),"\n",(0,o.jsxs)(r.p,{children:["K3s includes an embedded network policy controller. The underlying implementation is ",(0,o.jsx)(r.a,{href:"https://github.com/cloudnativelabs/kube-router",children:"kube-router's"})," netpol controller library (no other kube-router functionality is present) and can be found ",(0,o.jsx)(r.a,{href:"https://github.com/k3s-io/k3s/tree/master/pkg/agent/netpol",children:"here"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["To disable it, start each server with the ",(0,o.jsx)(r.code,{children:"--disable-network-policy"})," flag."]}),"\n",(0,o.jsxs)(r.admonition,{type:"note",children:[(0,o.jsxs)(r.p,{children:["Network policy iptables rules are not removed if the K3s configuration is changed to disable the network policy controller. To clean up the configured kube-router network policy rules after disabling the network policy controller, use the ",(0,o.jsx)(r.code,{children:"k3s-killall.sh"})," script, or clean them using ",(0,o.jsx)(r.code,{children:"iptables-save"})," and ",(0,o.jsx)(r.code,{children:"iptables-restore"}),". These steps must be run manually on all nodes in the cluster."]}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"iptables-save | grep -v KUBE-ROUTER | iptables-restore\nip6tables-save | grep -v KUBE-ROUTER | ip6tables-restore\n"})})]}),"\n",(0,o.jsx)(r.h2,{id:"service-load-balancer",children:"Service Load Balancer"}),"\n",(0,o.jsxs)(r.p,{children:["Any LoadBalancer controller can be deployed to your K3s cluster. By default, K3s provides a load balancer known as ",(0,o.jsx)(r.a,{href:"https://github.com/k3s-io/klipper-lb",children:"ServiceLB"})," (formerly Klipper LoadBalancer) that uses available host ports."]}),"\n",(0,o.jsxs)(r.p,{children:["Upstream Kubernetes allows Services of type LoadBalancer to be created, but doesn't include a default load balancer implementation, so these services will remain ",(0,o.jsx)(r.code,{children:"pending"})," until one is installed. Many hosted services require a cloud provider such as Amazon EC2 or Microsoft Azure to offer an external load balancer implementation. By contrast, the K3s ServiceLB makes it possible to use LoadBalancer Services without a cloud provider or any additional configuration."]}),"\n",(0,o.jsx)(r.h3,{id:"how-servicelb-works",children:"How ServiceLB Works"}),"\n",(0,o.jsxs)(r.p,{children:["The ServiceLB controller watches Kubernetes ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/",children:"Services"})," with the ",(0,o.jsx)(r.code,{children:"spec.type"})," field set to ",(0,o.jsx)(r.code,{children:"LoadBalancer"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["For each LoadBalancer Service, a ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/",children:"DaemonSet"})," is created in the ",(0,o.jsx)(r.code,{children:"kube-system"})," namespace. This DaemonSet in turn creates Pods with a ",(0,o.jsx)(r.code,{children:"svc-"})," prefix, on each node. These Pods use iptables to forward traffic from the Pod's NodePort, to the Service's ClusterIP address and port."]}),"\n",(0,o.jsxs)(r.p,{children:["If the ServiceLB Pod runs on a node that has an external IP configured, the node's external IP is populated into the Service's ",(0,o.jsx)(r.code,{children:"status.loadBalancer.ingress"})," address list. Otherwise, the node's internal IP is used."]}),"\n",(0,o.jsx)(r.p,{children:"If multiple LoadBalancer Services are created, a separate DaemonSet is created for each Service."}),"\n",(0,o.jsx)(r.p,{children:"It is possible to expose multiple Services on the same node, as long as they use different ports."}),"\n",(0,o.jsx)(r.p,{children:"If you try to create a LoadBalancer Service that listens on port 80, the ServiceLB will try to find a free host in the cluster for port 80. If no host with that port is available, the LB will remain Pending."}),"\n",(0,o.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(r.p,{children:["Create a ",(0,o.jsx)(r.a,{href:"https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer",children:"Service of type LoadBalancer"})," in K3s."]}),"\n",(0,o.jsx)(r.h3,{id:"controlling-servicelb-node-selection",children:"Controlling ServiceLB Node Selection"}),"\n",(0,o.jsxs)(r.p,{children:["Adding the ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/enablelb=true"})," label to one or more nodes switches the ServiceLB controller into allow-list mode, where only nodes with the label are eligible to host LoadBalancer pods. Nodes that remain unlabeled will be excluded from use by ServiceLB."]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsx)(r.p,{children:"By default, nodes are not labeled. As long as all nodes remain unlabeled, all nodes with ports available will be used by ServiceLB."})}),"\n",(0,o.jsx)(r.h3,{id:"creating-servicelb-node-pools",children:"Creating ServiceLB Node Pools"}),"\n",(0,o.jsxs)(r.p,{children:["To select a particular subset of nodes to host pods for a LoadBalancer, add the ",(0,o.jsx)(r.code,{children:"enablelb"})," label to the desired nodes, and set matching ",(0,o.jsx)(r.code,{children:"lbpool"})," label values on the Nodes and Services. For example:"]}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsxs)(r.li,{children:["Label Node A and Node B with ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/lbpool=pool1"})," and ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/enablelb=true"})]}),"\n",(0,o.jsxs)(r.li,{children:["Label Node C and Node D with ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/lbpool=pool2"})," and ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/enablelb=true"})]}),"\n",(0,o.jsxs)(r.li,{children:["Create one LoadBalancer Service on port 443 with label ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/lbpool=pool1"}),". The DaemonSet for this service only deploy Pods to Node A and Node B."]}),"\n",(0,o.jsxs)(r.li,{children:["Create another LoadBalancer Service on port 443 with label ",(0,o.jsx)(r.code,{children:"svccontroller.k3s.cattle.io/lbpool=pool2"}),". The DaemonSet will only deploy Pods to Node C and Node D."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"disabling-servicelb",children:"Disabling ServiceLB"}),"\n",(0,o.jsxs)(r.p,{children:["To disable ServiceLB, configure all servers in the cluster with the ",(0,o.jsx)(r.code,{children:"--disable=servicelb"})," flag."]}),"\n",(0,o.jsx)(r.p,{children:"This is necessary if you wish to run a different LB, such as MetalLB."}),"\n",(0,o.jsx)(r.h2,{id:"deploying-an-external-cloud-controller-manager",children:"Deploying an External Cloud Controller Manager"}),"\n",(0,o.jsx)(r.p,{children:'In order to reduce binary size, K3s removes all "in-tree" (built-in) cloud providers. Instead, K3s provides an embedded Cloud Controller Manager (CCM) stub that does the following:'}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Sets node InternalIP and ExternalIP address fields based on the ",(0,o.jsx)(r.code,{children:"--node-ip"})," and ",(0,o.jsx)(r.code,{children:"--node-external-ip"})," flags."]}),"\n",(0,o.jsx)(r.li,{children:"Hosts the ServiceLB LoadBalancer controller."}),"\n",(0,o.jsxs)(r.li,{children:["Clears the ",(0,o.jsx)(r.code,{children:"node.cloudprovider.kubernetes.io/uninitialized"})," taint that is present when the cloud-provider is set to ",(0,o.jsx)(r.code,{children:"external"})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Before deploying an external CCM, you must start all K3s servers with the ",(0,o.jsx)(r.code,{children:"--disable-cloud-controller"})," flag to disable to embedded CCM."]}),"\n",(0,o.jsx)(r.admonition,{type:"note",children:(0,o.jsx)(r.p,{children:"If you disable the built-in CCM and do not deploy and properly configure an external substitute, nodes will remain tainted and unschedulable."})})]})}function h(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>t});var o=n(7294);const i={},l=o.createContext(i);function t(e){const r=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(l.Provider,{value:r},e.children)}}}]);