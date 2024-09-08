"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[661],{56691:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=o(85893),r=o(11151);const s={id:"compose",title:"Configuration for Compose",keywords:["compose","config","configuration","jetpack-compose","rules"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:5},t=void 0,l={id:"introduction/compose",title:"Configuration for Compose",description:"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:",source:"@site/versioned_docs/version-1.22.0/introduction/compose.md",sourceDirName:"introduction",slug:"/introduction/compose",permalink:"/docs/1.22.0/introduction/compose",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.22.0/introduction/compose.md",tags:[],version:"1.22.0",sidebarPosition:5,frontMatter:{id:"compose",title:"Configuration for Compose",keywords:["compose","config","configuration","jetpack-compose","rules"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:5},sidebar:"defaultSidebar",previous:{title:"Reporting",permalink:"/docs/1.22.0/introduction/reporting"},next:{title:"Suppressing Issues",permalink:"/docs/1.22.0/introduction/suppressing-rules"}},a={},c=[{value:"FunctionNaming",id:"functionnaming",level:3},{value:"Configurations:",id:"configurations",level:4},{value:"TopLevelPropertyNaming",id:"toplevelpropertynaming",level:3},{value:"Default Style:",id:"default-style",level:5},{value:"Compose Style:",id:"compose-style",level:5},{value:"Configurations:",id:"configurations-1",level:4},{value:"LongParameterList",id:"longparameterlist",level:3},{value:"Configurations:",id:"configurations-2",level:4},{value:"MagicNumber",id:"magicnumber",level:3},{value:"Configurations:",id:"configurations-3",level:4},{value:"UnusedPrivateMember",id:"unusedprivatemember",level:3},{value:"Configurations:",id:"configurations-4",level:4}];function d(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/androidx/androidx/blob/androidx-main/compose/docs/compose-api-guidelines.md",children:"Compose API Guidelines"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose",children:"Compose source"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"functionnaming",children:"FunctionNaming"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/rules/naming#functionnaming",children:"FunctionNaming"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@Composable"})," functions that return ",(0,i.jsx)(n.code,{children:"Unit"})," are named using ",(0,i.jsx)(n.code,{children:"PascalCase"}),". Detekt may see this as a violation:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Composable\nfun FooButton(text: String, onClick: () -> Unit) { // Violation for FooButton()\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configurations",children:"Configurations:"}),"\n",(0,i.jsxs)(n.p,{children:["Choose ",(0,i.jsx)(n.em,{children:"either"})," of the following options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Augment default ",(0,i.jsx)(n.code,{children:"functionPattern"})," to ",(0,i.jsx)(n.code,{children:"'[a-zA-Z][a-zA-Z0-9]*'"})," (default is: ",(0,i.jsx)(n.code,{children:"'[a-z][a-zA-Z0-9]*'"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"ignoreAnnotated"})," to ",(0,i.jsx)(n.code,{children:"['Composable']"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"toplevelpropertynaming",children:"TopLevelPropertyNaming"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/rules/naming#toplevelpropertynaming",children:"TopLevelPropertyNaming"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Compose guidelines prescribe ",(0,i.jsx)(n.code,{children:"CamelCase"})," for top-level constants."]}),"\n",(0,i.jsx)(n.h5,{id:"default-style",children:"Default Style:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"private val FOO_PADDING = 16.dp\n"})}),"\n",(0,i.jsx)(n.h5,{id:"compose-style",children:"Compose Style:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"private val FooPadding = 16.dp\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configurations-1",children:"Configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"constantPattern"})," to ",(0,i.jsx)(n.code,{children:"'[A-Z][A-Za-z0-9]*'"})," (default is: ",(0,i.jsx)(n.code,{children:"'[A-Z][_A-Z0-9]*'"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"longparameterlist",children:"LongParameterList"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/rules/complexity#longparameterlist",children:"LongParameterList"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Composables may boast more than the typical number of function arguments (albeit mostly with default values). For example, see ",(0,i.jsx)(n.a,{href:"https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/material/material/src/commonMain/kotlin/androidx/compose/material/OutlinedTextField.kt;l=133?q=OutlinedTextFieldLayout&ss=androidx%2Fplatform%2Fframeworks%2Fsupport:compose%2F",children:"OutlinedTextField"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"configurations-2",children:"Configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"functionThreshold"})," to a higher value"]}),"\n",(0,i.jsxs)(n.li,{children:["Additionally, can set ",(0,i.jsx)(n.code,{children:"ignoreDefaultParameters = true"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"magicnumber",children:"MagicNumber"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/rules/style#magicnumber",children:"MagicNumber"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Class/companion object/top-level properties that declare objects such as ",(0,i.jsx)(n.code,{children:"Color(0xFFEA6D7E)"})," may be considered violations if they don't specify the named parameter (i.e. ",(0,i.jsx)(n.code,{children:"Color(color = 0xFFEA6D7E)"}),")."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val color1 = Color(0xFFEA6D7E) // Violation\n\nclass Foo {\n  val color2 = Color(0xFFEA6D7E) // Violation\n\n  companion object {\n    val color3 = Color(0xFFEA6D7E) // No violation if ignoreCompanionObjectPropertyDeclaration = true by default\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configurations-3",children:"Configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"ignorePropertyDeclaration = true"}),", ",(0,i.jsx)(n.code,{children:"ignoreCompanionObjectPropertyDeclaration = true"})," (default)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"unusedprivatemember",children:"UnusedPrivateMember"}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"/docs/rules/style#unusedprivatemember",children:"UnusedPrivateMember"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Detekt may see composable preview functions, i.e. those marked with ",(0,i.jsx)(n.code,{children:"@Preview"}),", as unused."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Preview\n@Composable\nprivate fun FooLazyColumnPreview() { // Violation for FooLazyColumnPreview()\n    FooLazyColumn()\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"configurations-4",children:"Configurations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Set ",(0,i.jsx)(n.code,{children:"ignoreAnnotated"})," to ",(0,i.jsx)(n.code,{children:"['Preview']"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>l,a:()=>t});var i=o(67294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);