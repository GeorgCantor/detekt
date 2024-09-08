"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9697],{57445:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(85893),o=n(11151);const i={title:"Howto: migrating from the *test-pattern*",published:!0,permalink:"howto-migratetestpattern.html",summary:"Starting with RC15 the test-pattern is obsolete. This post shows how to leverage rule path excludes to achieve the same functionality.",tags:["guides"]},r=void 0,a={permalink:"/blog/2019/06/08/migrating-the-test-pattern",editUrl:"https://github.com/detekt/detekt/edit/main/website/blog/2019-06-08-migrating-the-test-pattern.md",source:"@site/blog/2019-06-08-migrating-the-test-pattern.md",title:"Howto: migrating from the *test-pattern*",description:"Starting with RC15 the test-pattern is obsolete. This post shows how to leverage rule path excludes to achieve the same functionality.",date:"2019-06-08T00:00:00.000Z",tags:[{inline:!0,label:"guides",permalink:"/blog/tags/guides"}],readingTime:1.44,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Howto: migrating from the *test-pattern*",published:!0,permalink:"howto-migratetestpattern.html",summary:"Starting with RC15 the test-pattern is obsolete. This post shows how to leverage rule path excludes to achieve the same functionality.",tags:["guides"]},unlisted:!1,prevItem:{title:"Howto: using snapshot releases of detekt",permalink:"/blog/2019/06/29/using-detekt-snapshots"},nextItem:{title:"Howto: build upon the default yaml config file",permalink:"/blog/2019/03/03/build-upon-the-default-config"}},l={authorsImageUrls:[]},c=[];function d(e){const t={code:"code",em:"em",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Starting with RC15 the test-pattern is obsolete. This post shows how to leverage rule path excludes to achieve the same functionality."}),"\n",(0,s.jsx)(t.p,{children:"With version < RC15 the configuration file allowed to specify\nwhich paths should be mapped to test files so detekt would not run\nspecific rule sets and rules on these test files:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:"test-pattern: # Configure exclusions for test sources\n  active: true\n  patterns: # Test file regexes\n    - '.*/test/.*'\n    - '.*Test.kt'\n    - '.*Spec.kt'\n  exclude-rule-sets:\n    - 'comments'\n  exclude-rules:\n    - 'NamingRules'\n    - 'WildcardImport'\n    - 'MagicNumber'\n    - 'MaxLineLength'\n    - 'LateinitUsage'\n    - 'StringLiteralDuplication'\n    - 'SpreadOperator'\n    - 'TooManyFunctions'\n"})}),"\n",(0,s.jsx)(t.p,{children:"This was an okay approach as we nowadays separate production code and test code.\nHowever more different kinds of source files can be identified.\nFor example generated and library code."}),"\n",(0,s.jsx)(t.p,{children:"With the new approach of offering path patterns on the rule and rule set level the user has much more freedom\nin defining which rule should run on which path."}),"\n",(0,s.jsxs)(t.p,{children:["If we do not care about documented test classes because we write our test code\nin a ",(0,s.jsx)(t.em,{children:"documenting way"}),", we could simply exclude the ",(0,s.jsx)(t.code,{children:"comments"})," rule set for following patterns:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'comments:\n  ...\n  excludes: "**/*Test.kt, **/*Spec.kt"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["If we for example do not care about ",(0,s.jsx)(t.code,{children:"MagicNumber"}),"'s in test code, we can\nexclude our test files for this rule:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'style:\n  ...\n  MagicNumber:\n    excludes: "**/*Test.kt, **/*Spec.kt"\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Make sure to use globing patterns here as detekt does not support regular expressions anymore.\nThis change was done to make use of the ",(0,s.jsx)(t.code,{children:"java.nio.file"})," library when handling os-specific paths."]}),"\n",(0,s.jsxs)(t.p,{children:["If you were using the default detekt configuration with the default test-pattern,\nyou will not notice any changes when upgrading to >= RC15.\nAll ",(0,s.jsx)(t.em,{children:"exclude-rules"})," and ",(0,s.jsx)(t.em,{children:"exclude-rule-sets"})," will now make use of ",(0,s.jsx)(t.code,{children:'excludes: "**/test/**,**/*Test.kt,**/*Spec.kt"'}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);