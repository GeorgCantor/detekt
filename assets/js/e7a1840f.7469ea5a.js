"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[8582],{8085:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(85893),r=n(11151);const i={id:"suppressing-rules",title:"Suppressing Issues",keywords:["suppressing","issues"],sidebar_position:6},o=void 0,l={id:"introduction/suppressing-rules",title:"Suppressing Issues",description:"detekt supports the Java (@SuppressWarnings) and Kotlin (@Suppress) style suppression.",source:"@site/versioned_docs/version-1.23.6/introduction/suppressing-rules.md",sourceDirName:"introduction",slug:"/introduction/suppressing-rules",permalink:"/docs/1.23.6/introduction/suppressing-rules",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.6/introduction/suppressing-rules.md",tags:[],version:"1.23.6",sidebarPosition:6,frontMatter:{id:"suppressing-rules",title:"Suppressing Issues",keywords:["suppressing","issues"],sidebar_position:6},sidebar:"defaultSidebar",previous:{title:"Configuration for Compose",permalink:"/docs/1.23.6/introduction/compose"},next:{title:"Code Smell Baseline",permalink:"/docs/1.23.6/introduction/baseline"}},d={},c=[];function a(e){const s={a:"a",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"detekt"})," supports the Java (",(0,t.jsx)(s.code,{children:"@SuppressWarnings"}),") and Kotlin (",(0,t.jsx)(s.code,{children:"@Suppress"}),") style suppression.\nIf both annotations are present, Kotlin's annotation is favored!"]}),"\n",(0,t.jsxs)(s.p,{children:["To suppress an issue, the id of the rule must be written inside the values field of the annotation (e.g. ",(0,t.jsx)(s.code,{children:'@Suppress("LongMethod")'}),")."]}),"\n",(0,t.jsxs)(s.p,{children:["If a ",(0,t.jsx)(s.code,{children:"LargeClass"})," is reported, but that is totally fine for you codebase, then just annotate it:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-kotlin",children:'@Suppress("LargeClass") // or use complexity.LargeClass\nobject Constants {\n    ...\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["It is also possible to prefix the rule id with ",(0,t.jsx)(s.code,{children:"detekt"})," and/or the ruleset id such as ",(0,t.jsx)(s.code,{children:'@Suppress("detekt:LongMethod")'})," or ",(0,t.jsx)(s.code,{children:'@Suppress("complexity:LongParameterList")'}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The following table shows the various supported suppression formats."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Example Suppression"}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"all"}),", ",(0,t.jsx)(s.code,{children:"detekt:all"}),", ",(0,t.jsx)(s.code,{children:"detekt.all"})]}),(0,t.jsx)(s.td,{children:"Suppresses all detekt findings."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"style"}),", ",(0,t.jsx)(s.code,{children:"detekt:style"}),", ",(0,t.jsx)(s.code,{children:"detekt.style"})]}),(0,t.jsx)(s.td,{children:"Suppresses all findings from rules in the style rule set."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.code,{children:"MagicNumber"}),", ",(0,t.jsx)(s.code,{children:"style:MagicNumber"}),", ",(0,t.jsx)(s.code,{children:"style.MagicNumber"}),", ",(0,t.jsx)(s.code,{children:"detekt:style:MagicNumber"}),", ",(0,t.jsx)(s.code,{children:"detekt.style.MagicNumber"})]}),(0,t.jsx)(s.td,{children:"Suppresses all MagicNumber rule findings."})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["Some rules like ",(0,t.jsx)(s.code,{children:"TooManyFunctions"})," can only be suppressed by using a file level annotation ",(0,t.jsx)(s.code,{children:'@file:Suppress("TooManyFunctions")'}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Formatting rules suppression"})}),"\n",(0,t.jsxs)(s.p,{children:["Please note that rules inside the ",(0,t.jsx)(s.a,{href:"/docs/rules/formatting",children:(0,t.jsx)(s.code,{children:"formatting"})})," ruleset can only be suppressed at ",(0,t.jsx)(s.strong,{children:"the file level"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Rules inside this ruleset are wrappers around KtLint rules, and we don't have the same reporting capabilities that we offer for first party rules. For example, you can suppress the ",(0,t.jsx)(s.a,{href:"/docs/rules/formatting#maximumlinelength",children:"MaximumLineLength"})," rule only in your entire file with:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-kotlin",children:'@file:Suppress("MaximumLineLength")\n\npackage com.example\n\nobject AClassWithLongLines {\n    //...\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Several rules in the ",(0,t.jsx)(s.a,{href:"/docs/rules/formatting",children:(0,t.jsx)(s.code,{children:"formatting"})}),' ruleset also have a "first party" counterpart. For instance you can use the ',(0,t.jsx)(s.a,{href:"/docs/rules/style#maxlinelength",children:(0,t.jsx)(s.code,{children:"MaxLineLength"})})," rule instead from the ",(0,t.jsx)(s.a,{href:"/docs/rules/style",children:(0,t.jsx)(s.code,{children:"style"})})," ruleset."]}),"\n",(0,t.jsx)(s.p,{children:"For those rules, you can suppress the inspection also locally (on top of an expression, function, class, etc.)."})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>o});var t=n(67294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);