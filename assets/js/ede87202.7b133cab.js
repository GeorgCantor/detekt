"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7902],{54544:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(85893),o=s(11151);const i={id:"snapshots",title:"Using Snapshots",keywords:["snapshot","releases"],summary:"This page explains how you can setup snapshots for your detekt build to test the latest unreleased features.",sidebar_position:10},r=void 0,a={id:"introduction/snapshots",title:"Using Snapshots",description:"This page explains how you can use our latest snapshots to test upcoming unreleased features.",source:"@site/versioned_docs/version-1.23.0/introduction/snapshots.md",sourceDirName:"introduction",slug:"/introduction/snapshots",permalink:"/docs/1.23.0/introduction/snapshots",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.0/introduction/snapshots.md",tags:[],version:"1.23.0",sidebarPosition:10,frontMatter:{id:"snapshots",title:"Using Snapshots",keywords:["snapshot","releases"],summary:"This page explains how you can setup snapshots for your detekt build to test the latest unreleased features.",sidebar_position:10},sidebar:"defaultSidebar",previous:{title:"Extending detekt",permalink:"/docs/1.23.0/introduction/extensions"},next:{title:"Compatibility Table",permalink:"/docs/1.23.0/introduction/compatibility"}},d={},l=[{value:"Where to download snapshots",id:"where-to-download-snapshots",level:2},{value:"Gradle setup with Buildscript",id:"gradle-setup-with-buildscript",level:2},{value:"Gradle setup with Plugin block",id:"gradle-setup-with-plugin-block",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["This page explains how you can use our ",(0,n.jsx)(t.strong,{children:"latest snapshots"})," to test upcoming unreleased features."]}),"\n",(0,n.jsx)(t.h2,{id:"where-to-download-snapshots",children:"Where to download snapshots"}),"\n",(0,n.jsxs)(t.p,{children:["You can find the latest snapshot on ",(0,n.jsx)(t.a,{href:"https://oss.sonatype.org/#view-repositories;snapshots~browsestorage~io/gitlab/arturbosch/detekt",children:"sonatype"}),". A new snapshot is published after every merge to ",(0,n.jsx)(t.code,{children:"main"})," from the ",(0,n.jsx)(t.a,{href:"https://github.com/detekt/detekt/actions?query=workflow%3A%22Deploy+Snapshot%22",children:"Deploy Snapshot"})," GitHub Action workflow."]}),"\n",(0,n.jsx)(t.h2,{id:"gradle-setup-with-buildscript",children:"Gradle setup with Buildscript"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using Gradle with the ",(0,n.jsx)(t.code,{children:"buildscript"})," block, you should update your top level ",(0,n.jsx)(t.code,{children:"build.gradle"})," file with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:'buildscript {\n  repositories {\n    maven {\n      url "https://oss.sonatype.org/content/repositories/snapshots/"\n    }\n  }\n  dependencies {\n    classpath "io.gitlab.arturbosch.detekt:detekt-gradle-plugin:main-SNAPSHOT"\n  }\n}\n\napply plugin: "io.gitlab.arturbosch.detekt"\n\nallprojects {\n  repositories {\n    maven {\n      url "https://oss.sonatype.org/content/repositories/snapshots/"\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Make sure that you're adding the sonatype maven repository to both the ",(0,n.jsx)(t.code,{children:"repositories{}"})," block ",(0,n.jsx)(t.strong,{children:"inside"})," the ",(0,n.jsx)(t.code,{children:"buildscript{}"})," block and outside it."]}),"\n",(0,n.jsx)(t.h2,{id:"gradle-setup-with-plugin-block",children:"Gradle setup with Plugin block"}),"\n",(0,n.jsxs)(t.p,{children:["If you're using the ",(0,n.jsx)(t.code,{children:"plugins{}"})," block to apply detekt, you should update your ",(0,n.jsx)(t.code,{children:"build.gradle"})," file to:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:'plugins {\n  id("io.gitlab.arturbosch.detekt") version "main-SNAPSHOT"\n}\n\nallprojects {\n  repositories {\n    maven {\n      url "https://oss.sonatype.org/content/repositories/snapshots/"\n    }\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Plus you need to update the ",(0,n.jsx)(t.code,{children:"settings.gradle"})," file as follows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-groovy",children:'pluginManagement {\n    resolutionStrategy {\n        eachPlugin {\n            if (requested.id.id == "io.gitlab.arturbosch.detekt") {\n                useModule("io.gitlab.arturbosch.detekt:detekt-gradle-plugin:${requested.version}")\n            }\n        }\n    }\n    repositories {\n        // Your other repos here.\n        maven {\n            url = uri("https://oss.sonatype.org/content/repositories/snapshots/")\n        }\n    }\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Please note that the extra ",(0,n.jsx)(t.code,{children:"resolutionStrategy{}"})," block is needed as we don't publish a Gradle Plugin marker for our snapshots."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>r});var n=s(67294);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);