"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[8005],{3548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(5893),s=t(1151);const r={title:"Secrets Encryption"},c="Secrets Encryption Config",o={id:"security/secrets-encryption",title:"Secrets Encryption",description:"K3s supports enabling secrets encryption at rest. When first starting the server, passing the flag --secrets-encryption will do the following automatically:",source:"@site/docs/security/secrets-encryption.md",sourceDirName:"security",slug:"/security/secrets-encryption",permalink:"/security/secrets-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/security/secrets-encryption.md",tags:[],version:"current",lastUpdatedAt:171829904e4,frontMatter:{title:"Secrets Encryption"},sidebar:"mySidebar",previous:{title:"Security",permalink:"/security/"},next:{title:"CIS Hardening Guide",permalink:"/security/hardening-guide"}},l={},a=[{value:"Secrets Encryption Tool",id:"secrets-encryption-tool",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"secrets-encryption-config",children:"Secrets Encryption Config"}),"\n",(0,i.jsxs)(n.p,{children:["K3s supports enabling secrets encryption at rest. When first starting the server, passing the flag ",(0,i.jsx)(n.code,{children:"--secrets-encryption"})," will do the following automatically:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Generate an AES-CBC key"}),"\n",(0,i.jsx)(n.li,{children:"Generate an encryption config file with the generated key"}),"\n",(0,i.jsx)(n.li,{children:"Pass the config to the KubeAPI as encryption-provider-config"}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.mdxAdmonitionTitle,{}),(0,i.jsxs)(n.p,{children:["Secrets-encryption cannot be enabled on an existing server without restarting it.",(0,i.jsx)(n.br,{}),"\n","Use ",(0,i.jsx)(n.code,{children:"curl -sfL https://get.k3s.io | sh -s - server --secrets-encryption"})," if installing from script, or other methods described in ",(0,i.jsx)(n.a,{href:"/installation/configuration#configuration-with-install-script",children:"Configuration Options"}),"."]})]}),"\n",(0,i.jsx)(n.p,{children:"Example of the encryption config file:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "kind": "EncryptionConfiguration",\n  "apiVersion": "apiserver.config.k8s.io/v1",\n  "resources": [\n    {\n      "resources": [\n        "secrets"\n      ],\n      "providers": [\n        {\n          "aescbc": {\n            "keys": [\n              {\n                "name": "aescbckey",\n                "secret": "xxxxxxxxxxxxxxxxxxx"\n              }\n            ]\n          }\n        },\n        {\n          "identity": {}\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"secrets-encryption-tool",children:"Secrets Encryption Tool"}),"\n",(0,i.jsxs)(n.p,{children:["K3s contains a utility tool ",(0,i.jsx)(n.code,{children:"secrets-encrypt"}),", which enables automatic control over the following:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Disabling/Enabling secrets encryption"}),"\n",(0,i.jsx)(n.li,{children:"Adding new encryption keys"}),"\n",(0,i.jsx)(n.li,{children:"Rotating and deleting encryption keys"}),"\n",(0,i.jsx)(n.li,{children:"Reencrypting secrets"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For more information, see the ",(0,i.jsxs)(n.a,{href:"/cli/secrets-encrypt",children:[(0,i.jsx)(n.code,{children:"k3s secrets-encrypt"})," command documentation"]}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var i=t(7294);const s={},r=i.createContext(s);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);