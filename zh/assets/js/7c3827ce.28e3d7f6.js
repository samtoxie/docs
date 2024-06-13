"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[4117],{4223:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var t=i(5893),n=i(1151);const a={title:"Embedded Registry Mirror"},s=void 0,o={id:"installation/registry-mirror",title:"Embedded Registry Mirror",description:"The Embedded Registry Mirror is available as an experimental feature as of January 2024 releases: v1.26.13+k3s1, v1.27.10+k3s1, v1.28.6+k3s1, v1.29.1+k3s1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/installation/registry-mirror.md",sourceDirName:"installation",slug:"/installation/registry-mirror",permalink:"/zh/installation/registry-mirror",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/registry-mirror.md",tags:[],version:"current",lastUpdatedAt:171829904e4,frontMatter:{title:"Embedded Registry Mirror"},sidebar:"mySidebar",previous:{title:"Private Registry Configuration",permalink:"/zh/installation/private-registry"},next:{title:"Air-Gap Install",permalink:"/zh/installation/airgap"}},l={},d=[{value:"Enabling The Distributed OCI Registry Mirror",id:"enabling-the-distributed-oci-registry-mirror",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Enabling Registry Mirroring",id:"enabling-registry-mirroring",level:2},{value:"Default Endpoint Fallback",id:"default-endpoint-fallback",level:3},{value:"Security",id:"security",level:2},{value:"Authentication",id:"authentication",level:3},{value:"Potential Concerns",id:"potential-concerns",level:3},{value:"Sharing Air-gap or Manually Loaded Images",id:"sharing-air-gap-or-manually-loaded-images",level:2},{value:"Pushing Images",id:"pushing-images",level:2}];function c(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{title:"Version Gate",type:"info",children:(0,t.jsx)(r.p,{children:"The Embedded Registry Mirror is available as an experimental feature as of January 2024 releases: v1.26.13+k3s1, v1.27.10+k3s1, v1.28.6+k3s1, v1.29.1+k3s1"})}),"\n",(0,t.jsxs)(r.p,{children:["K3s embeds ",(0,t.jsx)(r.a,{href:"https://github.com/XenitAB/spegel",children:"Spegel"}),", a stateless distributed OCI registry mirror that allows peer-to-peer sharing of container images between nodes in a Kubernetes cluster.\nThe distributed registry mirror is disabled by default."]}),"\n",(0,t.jsx)(r.h2,{id:"enabling-the-distributed-oci-registry-mirror",children:"Enabling The Distributed OCI Registry Mirror"}),"\n",(0,t.jsxs)(r.p,{children:["In order to enable the embedded registry mirror, server nodes must be started with the ",(0,t.jsx)(r.code,{children:"--embedded-registry"})," flag, or with ",(0,t.jsx)(r.code,{children:"embedded-registry: true"})," in the configuration file.\nThis option enables the embedded mirror for use on all nodes in the cluster."]}),"\n",(0,t.jsxs)(r.p,{children:["When enabled at a cluster level, all nodes will host a local OCI registry on port 6443,\nand publish a list of available images via a peer to peer network on port 5001.\nAny image available in the containerd image store on any node, can be pulled by other cluster members without access to an external registry.\nImages imported via ",(0,t.jsx)(r.a,{href:"/zh/installation/airgap#manually-deploy-images-method",children:"air-gap image tar files"})," are pinned in containerd to\nensure that they remain available and are not pruned by Kubelet garbage collection."]}),"\n",(0,t.jsx)(r.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(r.p,{children:"When the embedded registry mirror is enabled, all nodes must be able to reach each other via their internal IP addresses, on TCP ports 5001 and 6443.\nIf nodes cannot reach each other, it may take longer for images to be pulled, as the distributed registry will be tried first by containerd, before it falls back to other endpoints."}),"\n",(0,t.jsx)(r.h2,{id:"enabling-registry-mirroring",children:"Enabling Registry Mirroring"}),"\n",(0,t.jsx)(r.p,{children:"Enabling mirroring for a registry allows a node to both pull images from that registry from other nodes, and share the registry's images with other nodes.\nIf a registry is enabled for mirroring on some nodes, but not on others, only the nodes with the registry enabled will exchange images from that registry."}),"\n",(0,t.jsxs)(r.p,{children:["In order to enable mirroring of images from an upstream container registry, nodes must have an entry in the ",(0,t.jsx)(r.code,{children:"mirrors"})," section of ",(0,t.jsx)(r.code,{children:"registries.yaml"})," for that registry.\nThe registry does not need to have any endpoints listed, it just needs to be present.\nFor example, to enable distributed mirroring of images from ",(0,t.jsx)(r.code,{children:"docker.io"})," and ",(0,t.jsx)(r.code,{children:"registry.k8s.io"}),", configure ",(0,t.jsx)(r.code,{children:"registries.yaml"})," with the following content on all cluster nodes:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"mirrors:\n  docker.io:\n  registry.k8s.io:\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Endpoints for registry mirrors may also be added as usual.\nIn the following configuration, images pull attempts will first try the embedded mirror, then ",(0,t.jsx)(r.code,{children:"mirror.example.com"}),", then finally ",(0,t.jsx)(r.code,{children:"docker.io"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"mirrors:\n  docker.io:\n    endpoint:\n      - https://mirror.example.com\n"})}),"\n",(0,t.jsx)(r.p,{children:"If you are using a private registry directly, instead of as a mirror for an upstream registry, you may enable distributed mirroring in the same way public\nregistries are enabled - by listing it in the mirrors section:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"mirrors:\n  mirror.example.com:\n"})}),"\n",(0,t.jsx)(r.p,{children:"If no registries are enabled for mirroring on a node, that node does not participate in the distributed registry in any capacity."}),"\n",(0,t.jsxs)(r.p,{children:["For more information on the structure of the ",(0,t.jsx)(r.code,{children:"registries.yaml"})," file, see ",(0,t.jsx)(r.a,{href:"/zh/installation/private-registry",children:"Private Registry Configuration"}),"."]}),"\n",(0,t.jsx)(r.h3,{id:"default-endpoint-fallback",children:"Default Endpoint Fallback"}),"\n",(0,t.jsxs)(r.p,{children:["By default, containerd will fall back to the default endpoint when pulling from registries with mirror endpoints configured. If you want to disable this,\nand only pull images from the configured mirrors and/or the embedded mirror, see the ",(0,t.jsx)(r.a,{href:"/zh/installation/private-registry#default-endpoint-fallback",children:"Default Endpoint Fallback"}),"\nsection of the Private Registry Configuration documentation."]}),"\n",(0,t.jsxs)(r.p,{children:["Note that if you are using the ",(0,t.jsx)(r.code,{children:"--disable-default-endpoint"})," option and want to allow pulling directly from a particular registry, while disallowing the rest,\nyou can explicitly provide an endpoint in order to allow the image pull to fall back to the registry itself:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"mirrors:\n  docker.io:           # no default endpoint, pulls will fail if not available on a node\n  registry.k8s.io:     # no default endpoint, pulls will fail if not available on a node\n  mirror.example.com:  # explicit default endpoint, can pull from upstream if not available on a node\n    endpoint:\n      - https://mirror.example.com\n"})}),"\n",(0,t.jsx)(r.h2,{id:"security",children:"Security"}),"\n",(0,t.jsx)(r.h3,{id:"authentication",children:"Authentication"}),"\n",(0,t.jsx)(r.p,{children:"Access to the embedded mirror's registry API requires a valid client certificate, signed by the cluster's client certificate authority."}),"\n",(0,t.jsx)(r.p,{children:"Access to the distributed hash table's peer-to-peer network requires a preshared key that is controlled by server nodes.\nNodes authenticate each other using both the preshared key, and a certificate signed by the cluster certificate authority."}),"\n",(0,t.jsx)(r.h3,{id:"potential-concerns",children:"Potential Concerns"}),"\n",(0,t.jsx)(r.admonition,{type:"warning",children:(0,t.jsx)(r.p,{children:"The distributed registry is built on peer-to-peer principles, and assumes an equal level of privilege and trust between all cluster members.\nIf this does not match your cluster's security posture, you should not enable the embedded distributed registry."})}),"\n",(0,t.jsxs)(r.p,{children:["The embedded registry may make available images that a node may not otherwise have access to.\nFor example, if some of your images are pulled from a registry, project, or repository that requires authentication via Kubernetes Image Pull Secrets, or credentials in ",(0,t.jsx)(r.code,{children:"registries.yaml"}),",\nthe distributed registry will allow other nodes to share those images without providing any credentials to the upstream registry."]}),"\n",(0,t.jsx)(r.p,{children:"Users with access to push images into the containerd image store on one node may be able to use this to 'poison' the image for other cluster nodes,\nas other nodes will trust the tag advertised by the node, and use it without checking with the upstream registry.\nIf image integrity is important, you should use image digests instead of tags, as the digest cannot be poisoned in this manner."}),"\n",(0,t.jsx)(r.h2,{id:"sharing-air-gap-or-manually-loaded-images",children:"Sharing Air-gap or Manually Loaded Images"}),"\n",(0,t.jsxs)(r.p,{children:["Images sharing is controlled based on the source registry.\nImages loaded directly into containerd via air-gap tarballs, or loaded directly into containerd's image store using the ",(0,t.jsx)(r.code,{children:"ctr"})," command line tool,\nwill be shared between nodes if they are tagged as being from a registry that is enabled for mirroring."]}),"\n",(0,t.jsxs)(r.p,{children:["Note that the upstream registry that the images appear to come from does not actually have to exist or be reachable.\nFor example, you could tag images as being from a fictitious upstream registry, and import those images into containerd's image store.\nYou would then be able to pull those images from all cluster members, as long as that registry is listed in ",(0,t.jsx)(r.code,{children:"registries.yaml"})]}),"\n",(0,t.jsx)(r.h2,{id:"pushing-images",children:"Pushing Images"}),"\n",(0,t.jsxs)(r.p,{children:["The embedded registry is read-only, and cannot be pushed to directly using ",(0,t.jsx)(r.code,{children:"docker push"})," or other common tools that interact with OCI registries."]}),"\n",(0,t.jsxs)(r.p,{children:["Images can be manually made available via the embedded registry by running ",(0,t.jsx)(r.code,{children:"ctr -n k8s.io image pull"})," to pull an image,\nor by loading image archives via the ",(0,t.jsx)(r.code,{children:"ctr -n k8s.io import"})," or ",(0,t.jsx)(r.code,{children:"ctr -n k8s.io load"})," commands.\nNote that the ",(0,t.jsx)(r.code,{children:"k8s.io"})," namespace must be specified when managing images via ",(0,t.jsx)(r.code,{children:"ctr"})," in order for them to be visible to the kubelet."]})]})}function h(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,r,i)=>{i.d(r,{Z:()=>o,a:()=>s});var t=i(7294);const n={},a=t.createContext(n);function s(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);