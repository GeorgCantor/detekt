"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[1466],{96497:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(85893),i=n(11151);const o={id:"reporting",title:"Reporting",keywords:["reporting"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:4},s=void 0,a={id:"introduction/reporting",title:"Reporting",description:"Formats",source:"@site/docs/introduction/reporting.md",sourceDirName:"introduction",slug:"/introduction/reporting",permalink:"/docs/next/introduction/reporting",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/introduction/reporting.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"reporting",title:"Reporting",keywords:["reporting"],summary:"This page describes each reporting format and explains how to leverage them.",sidebar_position:4},sidebar:"defaultSidebar",previous:{title:"detekt Configuration File",permalink:"/docs/next/introduction/configurations"},next:{title:"Configuration for Compose",permalink:"/docs/next/introduction/compose"}},d={},l=[{value:"Formats",id:"formats",level:2},{value:"HTML",id:"html",level:3},{value:"XML",id:"xml",level:3},{value:"SARIF",id:"sarif",level:3},{value:"MD",id:"md",level:3},{value:"Relative path",id:"relative-path",level:2},{value:"Kotlin DSL",id:"kotlin-dsl",level:3},{value:"Groovy DSL",id:"groovy-dsl",level:3},{value:"Merging reports",id:"merging-reports",level:2},{value:"Groovy DSL",id:"groovy-dsl-1",level:3},{value:"Kotlin DSL",id:"kotlin-dsl-1",level:3},{value:"Integration with GitHub Code Scanning",id:"integration-with-github-code-scanning",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"formats",children:"Formats"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to the CLI output, detekt supports 4 different types of output reporting formats.\nYou can refer to ",(0,r.jsx)(t.a,{href:"/docs/gettingstarted/cli",children:"CLI"})," or ",(0,r.jsx)(t.a,{href:"/docs/gettingstarted/gradle",children:"Gradle"})," to find\nout how to configure these report formats."]}),"\n",(0,r.jsx)(t.h3,{id:"html",children:"HTML"}),"\n",(0,r.jsxs)(t.p,{children:["HTML is a human-readable format that can be open through browser. It includes different metrics\nand complexity reports of this run, in addition to the findings with detailed descriptions and\nreport. Check out the example: ",(0,r.jsx)(t.img,{alt:"HTML report",src:n(6637).Z+"",width:"938",height:"859"})]}),"\n",(0,r.jsx)(t.h3,{id:"xml",children:"XML"}),"\n",(0,r.jsxs)(t.p,{children:["XML is a machine-readable format that can be integrated with CI tools. It is compatible with\n",(0,r.jsx)(t.a,{href:"https://checkstyle.sourceforge.io/",children:"Checkstyle"})," output."]}),"\n",(0,r.jsx)(t.h3,{id:"sarif",children:"SARIF"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://sarifweb.azurewebsites.net/",children:"SARIF"})," is a standard format for the output of\nstatic analysis tools. It is a JSON format with a defined\n",(0,r.jsx)(t.a,{href:"https://docs.oasis-open.org/sarif/sarif/v2.0/csprd02/schemas/",children:"schema"}),". It is currently supported\nby GitHub Code Scanning, and we expect more consuming tools will adopt this format in the future."]}),"\n",(0,r.jsx)(t.h3,{id:"md",children:"MD"}),"\n",(0,r.jsxs)(t.p,{children:["Markdown is a lightweight markup language for creating formatted text using a plain-text editor.\nThe output structure looks similar to HTML format.\nAbout ",(0,r.jsx)(t.a,{href:"https://github.github.com/gfm/#what-is-markdown-",children:"markdown"})," on GitHub."]}),"\n",(0,r.jsx)(t.h2,{id:"relative-path",children:"Relative path"}),"\n",(0,r.jsxs)(t.p,{children:["In a shared codebase, it is often required to use relative path so that all developers and tooling\nhave a consistent view. This can be enabled by CLI option ",(0,r.jsx)(t.code,{children:"--base-path"})," or Gradle as the following:"]}),"\n",(0,r.jsx)(t.h3,{id:"kotlin-dsl",children:"Kotlin DSL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"detekt {\n    basePath.set(projectDir)\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"groovy-dsl",children:"Groovy DSL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:"detekt {\n    basePath = projectDir\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:"Note that this option only affects file paths in those formats for machine consumers,\nnamely XML and SARIF."}),"\n",(0,r.jsx)(t.h2,{id:"merging-reports",children:"Merging reports"}),"\n",(0,r.jsx)(t.admonition,{title:"Attention",type:"caution",children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Gradle 7.4 or higher is required"}),". Earlier Gradle prevent tasks running if they depend on a failing task, so merge\ntasks will not run if detekt finds issues."]})}),"\n",(0,r.jsx)(t.p,{children:"The machine-readable report formats support report merging.\nDetekt Gradle Plugin is not opinionated in how merging is set up and respects each project's build logic, especially\nthe merging makes most sense in a multi-module project. In this spirit, only Gradle tasks are provided."}),"\n",(0,r.jsxs)(t.p,{children:["At the moment, merging XML and SARIF are supported. You can refer to the sample build script below and\nrun ",(0,r.jsx)(t.code,{children:"./gradlew detekt reportMerge --continue"})," to execute detekt tasks and merge the corresponding reports."]}),"\n",(0,r.jsx)(t.h3,{id:"groovy-dsl-1",children:"Groovy DSL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-groovy",children:'tasks.register("reportMerge", io.gitlab.arturbosch.detekt.report.ReportMergeTask) {\n  output = project.layout.buildDirectory.file("reports/detekt/merge.xml") // or "reports/detekt/merge.sarif"\n}\n\nsubprojects {\n  detekt {\n    reports.xml.required.set(true)\n    // reports.sarif.required.set(true)\n  }\n\n  reportMerge.configure {\n    input.from(tasks.withType(io.gitlab.arturbosch.detekt.Detekt).collect { it.reports.xml.outputLocation }) // or sarif.outputLocation\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"kotlin-dsl-1",children:"Kotlin DSL"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'val reportMerge by tasks.registering(io.gitlab.arturbosch.detekt.report.ReportMergeTask::class) { \n  output.set(rootProject.layout.buildDirectory.file("reports/detekt/merge.xml")) // or "reports/detekt/merge.sarif"\n}\n\nsubprojects {\n  detekt {\n    reports.xml.required.set(true)\n    // reports.sarif.required.set(true)\n  }\n\n  reportMerge {\n    input.from(tasks.withType<io.gitlab.arturbosch.detekt.Detekt>().map { it.reports.xml.outputLocation }) // or sarif.outputLocation\n  }\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"integration-with-github-code-scanning",children:"Integration with GitHub Code Scanning"}),"\n",(0,r.jsxs)(t.p,{children:["If your repository is hosted on GitHub, you can enable SARIF output in your repository.\nYou can follow to the ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/github/finding-security-vulnerabilities-and-errors-in-your-code/uploading-a-sarif-file-to-github",children:"official documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["To change the severity level to fail your GitHub Action build configure it in ",(0,r.jsx)(t.a,{href:"https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure",children:"GitHub Settings"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"You can follow the example below as a quick start:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"jobs:\n  without-type-resolution:\n    runs-on: ubuntu-latest\n    env:\n      GRADLE_OPTS: -Dorg.gradle.daemon=false\n    steps:\n      - name: Checkout Repo\n        uses: actions/checkout@v3\n\n      - name: Setup Java\n        uses: actions/setup-java@v3\n        with:\n          java-version: 11\n\n      - name: Run detekt\n        run: ./gradlew detekt\n\n      # Make sure we always run this upload task,\n      # because the previous step may fail if there are findings.\n      - name: Upload SARIF to GitHub using the upload-sarif action\n        uses: github/codeql-action/upload-sarif@v2\n        if: success() || failure()\n        with:\n          sarif_file: build/reports/detekt/detekt.sarif\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Note: you'll have to set ",(0,r.jsx)(t.code,{children:"Detekt.basePath"})," on each Detekt Gradle task,\nso that GitHub knows where the repository is to place annotations correctly."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gradle",children:"basePath = rootProject.projectDir.absolutePath\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},6637:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/html-42a530ca6e13fbd9df798bc6a8369bcd.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var r=n(67294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);