"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[7202],{36625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=t(85893),s=t(11151);const l={title:"Run detekt using the Detekt Gradle Plugin",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"gradle.html",folder:"gettingstarted",summary:null,sidebar_position:2},a=void 0,r={id:"gettingstarted/gradle",title:"Run detekt using the Detekt Gradle Plugin",description:"Detekt requires Gradle 6.1 or higher. We, however, recommend using the version of Gradle that is listed in this table.",source:"@site/versioned_docs/version-1.21.0/gettingstarted/gradle.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/gradle",permalink:"/docs/gettingstarted/gradle",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/versioned_docs/version-1.21.0/gettingstarted/gradle.mdx",tags:[],version:"1.21.0",sidebarPosition:2,frontMatter:{title:"Run detekt using the Detekt Gradle Plugin",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"gradle.html",folder:"gettingstarted",summary:null,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Run detekt using Command Line Interface",permalink:"/docs/gettingstarted/cli"},next:{title:"Run detekt using Gradle Task",permalink:"/docs/gettingstarted/gradletask"}},o={},d=[{value:"<a>Available plugin tasks</a>",id:"available-plugin-tasks",level:2},{value:"<a>Configuration</a>",id:"configuration",level:3},{value:"Groovy DSL",id:"groovy-dsl",level:4},{value:"Kotlin DSL",id:"kotlin-dsl",level:4},{value:"Groovy DSL",id:"groovy-dsl-1",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-1",level:4},{value:"<a>Configuration for Android projects</a>",id:"configuration-for-android-projects",level:3},{value:"Groovy DSL",id:"groovy-dsl-2",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-2",level:4},{value:"<a>Options for detekt configuration closure</a>",id:"options-for-detekt-configuration-closure",level:3},{value:"Groovy DSL",id:"groovy-dsl-3",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-3",level:4},{value:"Reports",id:"reports",level:3},{value:"Using Type Resolution",id:"using-type-resolution",level:3},{value:"Groovy DSL",id:"groovy-dsl-4",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-4",level:4},{value:"<a>Leveraging Gradle&#39;s SourceTask - Excluding and including source files</a>",id:"leveraging-gradles-sourcetask---excluding-and-including-source-files",level:3},{value:"Groovy DSL",id:"groovy-dsl-5",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-5",level:4},{value:"<a>Defining custom detekt task</a>",id:"defining-custom-detekt-task",level:3},{value:"Groovy DSL",id:"groovy-dsl-6",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-6",level:4},{value:"<a>Disabling detekt from the check task</a>",id:"disabling-detekt-from-the-check-task",level:3},{value:"Groovy DSL",id:"groovy-dsl-7",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-7",level:4},{value:"<a>Integrating detekt inside your IntelliJ IDEA</a>",id:"integrating-detekt-inside-your-intellij-idea",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Detekt requires ",(0,i.jsx)(n.strong,{children:"Gradle 6.1"})," or higher. We, however, recommend using the version of Gradle that is ",(0,i.jsx)(n.a,{href:"/docs/introduction/compatibility",children:"listed in this table"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"available-plugin-tasks",children:(0,i.jsx)("a",{name:"tasks",children:"Available plugin tasks"})}),"\n",(0,i.jsx)(n.p,{children:"The Detekt Gradle Plugin will generate multiple tasks:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detekt"})," - Runs a detekt analysis and complexity report on your source files. Configure the analysis inside the\n",(0,i.jsx)(n.code,{children:"detekt"})," closure.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["By default, the standard rule set without any ignore list is executed on sources files located\nin ",(0,i.jsx)(n.code,{children:"src/main/java"}),", ",(0,i.jsx)(n.code,{children:"src/test/java"}),", ",(0,i.jsx)(n.code,{children:"src/main/kotlin"})," and ",(0,i.jsx)(n.code,{children:"src/test/kotlin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Reports are automatically generated in xml,\nhtml, txt, md, and sarif format and can be found in ",(0,i.jsx)(n.code,{children:"build/reports/detekt/detekt.[xml|html|txt|md|sarif]"})," respectively."]}),"\n",(0,i.jsxs)(n.li,{children:["Please note that the ",(0,i.jsx)(n.code,{children:"detekt"})," task is automatically run when executing ",(0,i.jsx)(n.code,{children:"gradle check"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["You may specify Gradle task CLI option for auto correction, such as ",(0,i.jsx)(n.code,{children:"gradle detekt --auto-correct"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detektGenerateConfig"})," - Generates a default detekt configuration file into your project directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detektBaseline"})," - Similar to ",(0,i.jsx)(n.code,{children:"detekt"}),", but creates a code smell baseline. Further detekt runs will only feature new smells not in this list."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In addition to these standard tasks, the plugin will also generate a set of experimental tasks that have\n",(0,i.jsx)(n.a,{href:"/docs/gettingstarted/type-resolution",children:"type resolution"})," enabled. This happens for both, pure JVM projects and Android projects that have\nthe Android Gradle Plugin applied:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detektMain"})," - Similar to ",(0,i.jsx)(n.code,{children:"detekt"}),", but runs only on the ",(0,i.jsx)(n.code,{children:"main"})," source set\n(Android: all production source sets)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detektTest"})," - Similar to ",(0,i.jsx)(n.code,{children:"detekt"}),", but runs only on the ",(0,i.jsx)(n.code,{children:"test"})," source set\n(Android: all JVM and Android Test source sets)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detektBaselineMain"})," - Similar to ",(0,i.jsx)(n.code,{children:"detektBaseline"}),", but creates a baseline only for the ",(0,i.jsx)(n.code,{children:"main"})," source set\n(Android: multiple baselines for all production source sets)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detektBaselineTest"})," - Similar to ",(0,i.jsx)(n.code,{children:"detektBaseline"}),", but creates a baseline only for the ",(0,i.jsx)(n.code,{children:"test"})," source set\n(Android: multiple baselines for all JVM and Android Test source sets)"]}),"\n",(0,i.jsxs)(n.li,{children:["Android-only: ",(0,i.jsx)(n.code,{children:"detekt<Variant>"})," - Similar to ",(0,i.jsx)(n.code,{children:"detekt"}),", but runs only on the specific (test) build variant"]}),"\n",(0,i.jsxs)(n.li,{children:["Android-only: ",(0,i.jsx)(n.code,{children:"detektBaseline<Variant>"})," - Similar to ",(0,i.jsx)(n.code,{children:"detektBaseline"}),", but creates a baseline only for the\nspecific (test) build variant"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Baseline files that are generated for these specific source sets / build variants contain the name of the source set /\nthe name of the build variant in their name, unless otherwise configured, such as ",(0,i.jsx)(n.code,{children:"detekt-main.xml"})," or\n",(0,i.jsx)(n.code,{children:"detekt-productionDebug.xml"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If both, a ",(0,i.jsx)(n.code,{children:"detekt-main.xml"})," and a ",(0,i.jsx)(n.code,{children:"detekt.xml"})," baseline file exists in place, the more specific one - ",(0,i.jsx)(n.code,{children:"detekt-main.xml"})," -\ntakes precedence when the ",(0,i.jsx)(n.code,{children:"detektMain"})," task is executed, likewise for Android variant-specific baseline files."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"NOTE:"})," When analyzing Android projects that make use of specific code generators, such as Data Binding, Kotlin synthetic\nview accessors or else, you might see warnings output while Detekt runs. This is due to the inability to gather the\ncomplete compile classpath from the Android Gradle Plugin (",(0,i.jsx)(n.a,{href:"https://issuetracker.google.com/issues/158777988",children:"upstream ticket"}),")\nand can safely be ignored."]}),"\n",(0,i.jsxs)(n.p,{children:["Use the Groovy or Kotlin DSL of Gradle to apply the Detekt Gradle Plugin. You can further configure the Plugin\nusing the detekt closure as described ",(0,i.jsx)(n.a,{href:"#closure",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"configuration",children:(0,i.jsx)("a",{name:"gradle",children:"Configuration"})}),"\n",(0,i.jsx)(n.p,{children:"Using the plugins DSL:"}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'plugins {\n    id "io.gitlab.arturbosch.detekt" version "1.23.3"\n}\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'plugins {\n    id("io.gitlab.arturbosch.detekt") version "1.23.3"\n}\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Using legacy plugin application (",(0,i.jsx)(n.code,{children:"buildscript{}"}),"):"]}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-1",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath "io.gitlab.arturbosch.detekt:detekt-gradle-plugin:1.23.3"\n    }\n}\n\napply plugin: "io.gitlab.arturbosch.detekt"\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-1",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("io.gitlab.arturbosch.detekt:detekt-gradle-plugin:1.23.3")\n    }\n}\n\napply(plugin = "io.gitlab.arturbosch.detekt")\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configuration-for-android-projects",children:(0,i.jsx)("a",{name:"gradleandroid",children:"Configuration for Android projects"})}),"\n",(0,i.jsxs)(n.p,{children:["When using Android make sure to have detekt configured in the app/module level ",(0,i.jsx)(n.code,{children:"build.gradle"})," file."]}),"\n",(0,i.jsx)(n.p,{children:"You can configure the plugin in the same way as indicated above."}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-2",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath "com.android.tools.build:gradle:<agp_version>"\n    }\n}\n\nplugins {\n    id "com.android.application"\n    id "org.jetbrains.kotlin.android" version "<kotlin_version>"\n    id "io.gitlab.arturbosch.detekt" version "1.23.3"\n}\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-2",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle:<agp_version>")\n    }\n}\n\nplugins {\n    id("com.android.application")\n    kotlin("android") version "<kotlin_version>"\n    id("io.gitlab.arturbosch.detekt") version "1.23.3"\n}\n\nrepositories {\n    mavenCentral()\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"options-for-detekt-configuration-closure",children:(0,i.jsx)("a",{name:"closure",children:"Options for detekt configuration closure"})}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-3",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'detekt {\n    // Version of Detekt that will be used. When unspecified the latest detekt\n    // version found will be used. Override to stay on the same version.\n    toolVersion = "1.23.3"\n    \n    // The directories where detekt looks for source files. \n    // Defaults to `files("src/main/java", "src/test/java", "src/main/kotlin", "src/test/kotlin")`.\n    source = files(\n        "src/main/kotlin",\n        "gensrc/main/kotlin"\n    )\n    \n    // Builds the AST in parallel. Rules are always executed in parallel. \n    // Can lead to speedups in larger projects. `false` by default.\n    parallel = false\n    \n    // Define the detekt configuration(s) you want to use. \n    // Defaults to the default detekt configuration.\n    config = files("path/to/config.yml")\n    \n    // Applies the config files on top of detekt\'s default config file. `false` by default.\n    buildUponDefaultConfig = false\n    \n    // Turns on all the rules. `false` by default.\n    allRules = false\n    \n    // Specifying a baseline file. All findings stored in this file in subsequent runs of detekt.\n    baseline = file("path/to/baseline.xml")\n    \n    // Disables all default detekt rulesets and will only run detekt with custom rules\n    // defined in plugins passed in with `detektPlugins` configuration. `false` by default.\n    disableDefaultRuleSets = false\n    \n    // Adds debug output during task execution. `false` by default.\n    debug = false                                         \n    \n    // If set to `true` the build does not fail when the\n    // maxIssues count was reached. Defaults to `false`.\n    ignoreFailures = false\n    \n    // Android: Don\'t create tasks for the specified build types (e.g. "release")\n    ignoredBuildTypes = ["release"]\n    \n    // Android: Don\'t create tasks for the specified build flavor (e.g. "production")\n    ignoredFlavors = ["production"]\n    \n    // Android: Don\'t create tasks for the specified build variants (e.g. "productionRelease")\n    ignoredVariants = ["productionRelease"]\n    \n    // Specify the base path for file paths in the formatted reports. \n    // If not set, all file paths reported will be absolute file path.\n    basePath = projectDir\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-3",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'detekt {\n    // Version of Detekt that will be used. When unspecified the latest detekt\n    // version found will be used. Override to stay on the same version.\n    toolVersion = "1.23.3"\n    \n    // The directories where detekt looks for source files. \n    // Defaults to `files("src/main/java", "src/test/java", "src/main/kotlin", "src/test/kotlin")`.\n    source = files("src/main/java", "src/main/kotlin")     \n    \n    // Builds the AST in parallel. Rules are always executed in parallel. \n    // Can lead to speedups in larger projects. `false` by default.\n    parallel = false\n    \n    // Define the detekt configuration(s) you want to use. \n    // Defaults to the default detekt configuration.\n    config = files("path/to/config.yml")\n    \n    // Applies the config files on top of detekt\'s default config file. `false` by default.\n    buildUponDefaultConfig = false\n    \n    // Turns on all the rules. `false` by default.\n    allRules = false\n    \n    // Specifying a baseline file. All findings stored in this file in subsequent runs of detekt.\n    baseline = file("path/to/baseline.xml")\n    \n    // Disables all default detekt rulesets and will only run detekt with custom rules\n    // defined in plugins passed in with `detektPlugins` configuration. `false` by default.\n    disableDefaultRuleSets = false\n    \n    // Adds debug output during task execution. `false` by default.\n    debug = false                                         \n    \n    // If set to `true` the build does not fail when the\n    // maxIssues count was reached. Defaults to `false`.\n    ignoreFailures = false\n    \n    // Android: Don\'t create tasks for the specified build types (e.g. "release")\n    ignoredBuildTypes = listOf("release")\n    \n    // Android: Don\'t create tasks for the specified build flavor (e.g. "production")\n    ignoredFlavors = listOf("production")\n    \n    // Android: Don\'t create tasks for the specified build variants (e.g. "productionRelease")\n    ignoredVariants = listOf("productionRelease")\n    \n    // Specify the base path for file paths in the formatted reports. \n    // If not set, all file paths reported will be absolute file path.\n    basePath = projectDir\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"reports",children:"Reports"}),"\n",(0,i.jsx)(n.p,{children:"Report output can be customized for each task. The DSL is the same in both Groovy and Kotlin:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'tasks.named("detekt").configure {\n    reports {\n        // Enable/Disable XML report (default: true)\n        xml.required.set(true)\n        xml.outputLocation.set(file("build/reports/detekt.xml"))\n        // Enable/Disable HTML report (default: true)\n        html.required.set(true)\n        html.outputLocation.set(file("build/reports/detekt.html"))\n        // Enable/Disable TXT report (default: true)\n        txt.required.set(true)\n        txt.outputLocation.set(file("build/reports/detekt.txt"))\n        // Enable/Disable SARIF report (default: false)\n        sarif.required.set(true)\n        sarif.outputLocation.set(file("build/reports/detekt.sarif"))\n        // Enable/Disable MD report (default: false)\n        md.required.set(true)\n        md.outputLocation.set(file("build/reports/detekt.md"))\n        custom {\n            // The simple class name of your custom report.\n            reportId = "CustomJsonReport"\n            outputLocation.set(file("build/reports/detekt.json"))\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"using-type-resolution",children:"Using Type Resolution"}),"\n",(0,i.jsxs)(n.p,{children:["Type resolution is experimental and works only for ",(0,i.jsx)(n.a,{href:"#a-nametasksavailable-plugin-tasksa",children:"predefined tasks listed above"}),"\nor when implementing a custom detekt task with the ",(0,i.jsx)(n.code,{children:"classpath"})," and ",(0,i.jsx)(n.code,{children:"jvmTarget"})," properties present."]}),"\n",(0,i.jsxs)(n.p,{children:["More information on type resolution are available on the ",(0,i.jsx)(n.a,{href:"/docs/gettingstarted/type-resolution",children:"type resolution"})," page."]}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-4",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'tasks.withType(io.gitlab.arturbosch.detekt.Detekt).configureEach {\n    jvmTarget = "1.8"\n}\ntasks.withType(io.gitlab.arturbosch.detekt.DetektCreateBaselineTask).configureEach {\n    jvmTarget = "1.8"\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-4",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'tasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {\n    this.jvmTarget = "1.8"\n}\ntasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {\n    this.jvmTarget = "1.8"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"leveraging-gradles-sourcetask---excluding-and-including-source-files",children:(0,i.jsx)("a",{name:"excluding",children:"Leveraging Gradle's SourceTask - Excluding and including source files"})}),"\n",(0,i.jsxs)(n.p,{children:["A detekt task extends the Gradle ",(0,i.jsx)(n.code,{children:"SourceTask"})," to be only scheduled when watched source files are changed.\nIt also allows to match files that should be excluded from the analysis.\nTo do this introduce a query on detekt tasks and define include and exclude patterns outside the detekt closure:"]}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-5",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'detekt {\n    ...\n}\n\ntasks.withType(io.gitlab.arturbosch.detekt.Detekt).configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n\ntasks.withType(io.gitlab.arturbosch.detekt.DetektCreateBaselineTask).configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-5",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'detekt {\n    ...\n}\n\ntasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n\ntasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"defining-custom-detekt-task",children:(0,i.jsx)("a",{name:"customdetekttask",children:"Defining custom detekt task"})}),"\n",(0,i.jsxs)(n.p,{children:["Custom tasks for alternative configurations or different source sets can be defined by creating a custom task that\nuses the type ",(0,i.jsx)(n.code,{children:"Detekt"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-6",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:'tasks.register(name: myDetekt, type: io.gitlab.arturbosch.detekt.Detekt) {\n    description = "Runs a custom detekt build."\n    setSource(files("src/main/kotlin", "src/test/kotlin"))\n    config.setFrom(files("$rootDir/config.yml"))\n    debug = true\n    reports {\n        xml {\n            destination = file("build/reports/mydetekt.xml")\n        }\n        html.destination = file("build/reports/mydetekt.html")\n    }\n    include \'**/*.kt\'\n    include \'**/*.kts\'\n    exclude \'resources/\'\n    exclude \'build/\'\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-6",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'tasks.register<io.gitlab.arturbosch.detekt.Detekt>("myDetekt") {\n    description = "Runs a custom detekt build."\n    setSource(files("src/main/kotlin", "src/test/kotlin"))\n    config.setFrom(files("$rootDir/config.yml"))\n    debug = true\n    reports {\n        xml {\n            destination = file("build/reports/mydetekt.xml")\n        }\n        html.destination = file("build/reports/mydetekt.html")\n    }\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("resources/")\n    exclude("build/")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"disabling-detekt-from-the-check-task",children:(0,i.jsx)("a",{name:"check-lifecycle",children:"Disabling detekt from the check task"})}),"\n",(0,i.jsx)(n.p,{children:"Detekt tasks by default are verification tasks. They get executed whenever the Gradle check task gets executed.\nThis aligns with the behavior of other code analysis plugins for Gradle."}),"\n",(0,i.jsx)(n.p,{children:"If you are adding detekt to an already long running project you may want to increase the code quality incrementally and therefore\nexclude detekt from the check task."}),"\n",(0,i.jsx)(n.h4,{id:"groovy-dsl-7",children:"Groovy DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-groovy",children:"check.configure {\n    dependsOn = dependsOn.findAll { it.name != 'detekt' }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"kotlin-dsl-7",children:"Kotlin DSL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'tasks.named("check").configure {\n    this.setDependsOn(this.dependsOn.filterNot {\n        it is TaskProvider<*> && it.name == "detekt"\n    })\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Instead of disabling detekt for the check task, you may want to increase the build failure threshold in the ",(0,i.jsx)(n.a,{href:"/docs/introduction/configurations",children:"configuration file"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"integrating-detekt-inside-your-intellij-idea",children:(0,i.jsx)("a",{name:"idea",children:"Integrating detekt inside your IntelliJ IDEA"})}),"\n",(0,i.jsxs)(n.p,{children:["detekt comes with an ",(0,i.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/10761-detekt",children:"IntelliJ Plugin"})," that you can install directly from the IDE. The plugin offers warning highlight directly inside the IDE as well as support for code formatting."]}),"\n",(0,i.jsxs)(n.p,{children:["The source code of the plugin is available here: ",(0,i.jsx)(n.a,{href:"https://github.com/detekt/detekt-intellij-plugin",children:"detekt/detekt-intellij-plugin"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var i=t(67294);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);