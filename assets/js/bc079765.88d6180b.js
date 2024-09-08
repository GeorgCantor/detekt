"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9970],{52578:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=t(85893),i=t(11151),o=t(72714);const r={id:"configurations",title:"detekt Configuration File",keywords:["config","configuration","yaml"],permalink:"configurations.html",sidebar_position:3},l=void 0,a={id:"introduction/configurations",title:"detekt Configuration File",description:"detekt uses a YAML style configuration file for various things:",source:"@site/versioned_docs/version-1.23.5/introduction/configurations.mdx",sourceDirName:"introduction",slug:"/introduction/configurations",permalink:"/docs/1.23.5/introduction/configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.23.5/introduction/configurations.mdx",tags:[],version:"1.23.5",sidebarPosition:3,frontMatter:{id:"configurations",title:"detekt Configuration File",keywords:["config","configuration","yaml"],permalink:"configurations.html",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Welcome",permalink:"/docs/1.23.5/intro"},next:{title:"Reporting",permalink:"/docs/1.23.5/introduction/reporting"}},c={},d=[{value:"Config validation",id:"config-validation",level:2},{value:"Rule sets and rules",id:"rule-sets-and-rules",level:2},{value:"Path Filters / Excludes / Includes",id:"path-filters--excludes--includes",level:3},{value:"Build failure",id:"build-failure",level:2},{value:"Console Reports",id:"console-reports",level:2},{value:"Output Reports",id:"output-reports",level:2},{value:"Processors",id:"processors",level:2},{value:"Config JSON Schema",id:"config-json-schema",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"detekt"})," uses a ",(0,s.jsx)(n.a,{href:"https://yaml.org/spec/1.2/spec.html",children:"YAML style configuration"})," file for various things:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"rule set and rule properties"}),"\n",(0,s.jsx)(n.li,{children:"build failure"}),"\n",(0,s.jsx)(n.li,{children:"console reports"}),"\n",(0,s.jsx)(n.li,{children:"output reports"}),"\n",(0,s.jsx)(n.li,{children:"processors"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(o.i,{})," file for all defined configuration options and their default values."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," When using a custom config file, the default values are ignored unless you also set the ",(0,s.jsx)(n.code,{children:"--build-upon-default-config"})," flag."]}),"\n",(0,s.jsx)(n.h2,{id:"config-validation",children:"Config validation"}),"\n",(0,s.jsxs)(n.p,{children:["If config validation is enabled, ",(0,s.jsx)(n.em,{children:"detekt"})," will verify that your configuration file is structured correctly and all first party rule sets, rules and configuration options are valid and not marked as deprecated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"config:\n  validation: true\n  warningsAsErrors: false\n  excludes: ''\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Invalid or deprecated rules and configuration options are by default printed as warnings unless ",(0,s.jsx)(n.code,{children:"warningsAsErrors"})," is set to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Note:"})," Custom rules sets are excluded from config validation by default."]}),"\n",(0,s.jsxs)(n.p,{children:["If you have extended ",(0,s.jsx)(n.em,{children:"detekt"})," and rely on a custom properties, you will need to exclude those from config validation by adding their paths to the ",(0,s.jsx)(n.code,{children:"excludes"})," attribute. Multiple values are separated by comma and ",(0,s.jsx)(n.code,{children:".*"})," can be used as a wildcard (e.g. ",(0,s.jsx)(n.code,{children:"propA,build>.*>propB"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"rule-sets-and-rules",children:"Rule sets and rules"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"detekt"})," allows easily to just pick the rules you want and configure them the way you like.\nFor example if you want to allow up to 20 functions inside a Kotlin file instead of the default threshold, write:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"complexity:\n  TooManyFunctions:\n    thresholdInFiles: 20\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To read about all supported rule sets and rules, use the side navigation ",(0,s.jsx)(n.code,{children:"Rule Sets"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"path-filters--excludes--includes",children:"Path Filters / Excludes / Includes"}),"\n",(0,s.jsxs)(n.p,{children:["Fine grained path filters can be defined for each rule or rule set through globbing patterns.\nThis gives the user more freedom in analyzing only specific files\nand rule authors the ability to write ",(0,s.jsx)(n.em,{children:"library only"})," rules."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"complexity:\n  TooManyFunctions:\n    ...\n    excludes: ['**/internal/**']\n    includes: ['**/internal/util/NeedsToBeChecked.kt']\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In case you want to apply the same filters for different rules, you can use\n",(0,s.jsx)(n.a,{href:"https://yaml.org/spec/1.2/spec.html#id2785586",children:"YAML anchors and aliases"})," to reapply previously defined paths."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"naming:\n  ClassNaming:\n    ...\n    excludes: &testFolders\n      - '**/test/**'\n      - '**/androidTest/**'\n  ConstructorParameterNaming:\n    ...\n    excludes: *testFolders\n"})}),"\n",(0,s.jsx)(n.h2,{id:"build-failure",children:"Build failure"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Detekt"})," supports the option to fail your build if a threshold of code smell issues is met."]}),"\n",(0,s.jsx)(n.p,{children:"For this the following code must be inside the detekt config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"build:\n  maxIssues: 10 # break the build if more than ten weighted issues are found\n  weights:\n    complexity: 2 # every rule of the complexity rule set should count as if two issues were found...\n    LongParameterList: 1 # ...with the exception of the LongParameterList rule.\n    comments: 0 # comment rules are just a nice to know?!\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Every rule and rule set can be attached with an integer value which is the weight of the finding.\nFor example: If you have 5 findings of the category ",(0,s.jsx)(n.em,{children:"complexity"}),", then your failThreshold of 10 is reached as\n5 x 2 = 10."]}),"\n",(0,s.jsx)(n.p,{children:"Weights are respected in the following priority order:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The specified weight for a rule"}),"\n",(0,s.jsx)(n.li,{children:"The specified weight for a rule set"}),"\n",(0,s.jsx)(n.li,{children:"By default, the weight is 1."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"console-reports",children:"Console Reports"}),"\n",(0,s.jsx)(n.p,{children:"Uncomment the reports you don't care about."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"console-reports:\n  active: true\n  exclude:\n  #  - 'ProjectStatisticsReport'\n  #  - 'ComplexityReport'\n  #  - 'NotificationReport'\n  #  - 'FindingsReport'\n  #  - 'FileBasedFindingsReport'\n  #  - 'LiteFindingsReport'\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ProjectStatisticsReport"})," contains metrics and statistics concerning the analyzed project sorted by priority."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ComplexityReport"})," contains metrics concerning the analyzed code.\nFor instance the source lines of code and the McCabe complexity are calculated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NotificationReport"})," contains notifications reported by the detekt analyzer similar to push notifications.\nIt's simply a way of alerting users to information that they have opted-in to."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FindingsReport"})," contains all rule violations in a list format grouped by ruleset."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FileBasedFindingsReport"})," is similar to the FindingsReport shown above.\nThe rule violations are grouped by file location."]}),"\n",(0,s.jsx)(n.h2,{id:"output-reports",children:"Output Reports"}),"\n",(0,s.jsxs)(n.p,{children:["Uncomment the reports you don't care about. The detailed description can be found in ",(0,s.jsx)(n.a,{href:"/docs/1.23.5/introduction/reporting",children:"reporting"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"output-reports:\n  active: true\n  exclude:\n  #  - 'HtmlOutputReport'\n  #  - 'TxtOutputReport'\n  #  - 'XmlOutputReport'\n  #  - 'SarifOutputReport'\n  #  - 'MdOutputReport'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"processors",children:"Processors"}),"\n",(0,s.jsx)(n.p,{children:"Count processors are used to calculate project metrics.\nFor example, when all count processors are enabled, a detekt html report might look like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Processor metrics in html report",src:t(81750).Z+"",width:"251",height:"222"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"'DetektProgressListener'"})," processor shows a progress indicator in stdout while a detekt process is running."]}),"\n",(0,s.jsx)(n.p,{children:"Uncomment the processors you don't care about."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"processors:\n    active: true\n    exclude:\n        - 'DetektProgressListener'\n        # - 'KtFileCountProcessor'\n        # - 'PackageCountProcessor'\n        # - 'ClassCountProcessor'\n        # - 'FunctionCountProcessor'\n        # - 'PropertyCountProcessor'\n        # - 'ProjectComplexityProcessor'\n        # - 'ProjectCognitiveComplexityProcessor'\n        # - 'ProjectLLOCProcessor'\n        # - 'ProjectCLOCProcessor'\n        # - 'ProjectLOCProcessor'\n        # - 'ProjectSLOCProcessor'\n        # - 'LicenseHeaderLoaderExtension'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"config-json-schema",children:"Config JSON Schema"}),"\n",(0,s.jsxs)(n.p,{children:["A JSON Schema for the config file is available on: ",(0,s.jsx)(n.a,{href:"https://json.schemastore.org/detekt-1.22.0.json",children:"json.schemastore.org/detekt-1.22.0.json"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["You can configure your IDE (e.g. IntelliJ or Android Studio have built-in support)\nto use that schema to give you ",(0,s.jsx)(n.strong,{children:"autocompletion"})," capabilities on your config file.\nMore details on the IntelliJ support are available\n",(0,s.jsx)(n.a,{href:"https://www.jetbrains.com/help/ruby/yaml.html#remote_json",children:"on this page"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"JSON Schema validator on IntelliJ",src:t(60315).Z+"",width:"1316",height:"206"})}),"\n",(0,s.jsxs)(n.p,{children:["The JSON Schema is currently not automatically generated. It can be updated manually ",(0,s.jsx)(n.a,{href:"https://github.com/SchemaStore/schemastore",children:"on this repository"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},72714:(e,n,t)=>{t.d(n,{i:()=>r});var s=t(33692),i=t(80143),o=t(85893);function r(){const e=(0,i.zu)(),n=`https://github.com/detekt/detekt/blob/${"current"===e.name?"main":`v${e.name}`}/detekt-core/src/main/resources/default-detekt-config.yml`;return(0,o.jsx)(s.Z,{href:n,children:"default-detekt-config.yml"})}},60315:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/json_schema_validator_intellij-fdd7afa5537d8f382350f080b65c1517.png"},81750:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/processor_metrics_in_html_report-26660d58745fbc61810ca2eee63b6993.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var s=t(67294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);