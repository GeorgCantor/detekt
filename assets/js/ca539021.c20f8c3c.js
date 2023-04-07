"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[4100],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),k=i,g=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8488:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a=n(3117),i=n(102),l=(n(7294),n(3905)),r=["components"],o={title:"Run detekt using the Detekt Gradle Plugin",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"gradle.html",folder:"gettingstarted",summary:null,sidebar_position:2},s=void 0,d={unversionedId:"gettingstarted/gradle",id:"gettingstarted/gradle",title:"Run detekt using the Detekt Gradle Plugin",description:"detekt requires Gradle 6.8.3 or higher. We, however, recommend using the version of Gradle that is listed in this table.",source:"@site/docs/gettingstarted/gradle.mdx",sourceDirName:"gettingstarted",slug:"/gettingstarted/gradle",permalink:"/docs/next/gettingstarted/gradle",draft:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/gettingstarted/gradle.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Run detekt using the Detekt Gradle Plugin",keywords:["detekt","static","analysis","code","kotlin"],sidebar:null,permalink:"gradle.html",folder:"gettingstarted",summary:null,sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Run detekt using Command Line Interface",permalink:"/docs/next/gettingstarted/cli"},next:{title:"Run detekt using Gradle Task",permalink:"/docs/next/gettingstarted/gradletask"}},u={},c=[{value:'<a name="tasks">Available plugin tasks</a>',id:"available-plugin-tasks",level:2},{value:'<a name="gradle">Configuration</a>',id:"configuration",level:3},{value:"Groovy DSL",id:"groovy-dsl",level:4},{value:"Kotlin DSL",id:"kotlin-dsl",level:4},{value:"Groovy DSL",id:"groovy-dsl-1",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-1",level:4},{value:'<a name="gradleandroid">Configuration for Android projects</a>',id:"configuration-for-android-projects",level:3},{value:"Groovy DSL",id:"groovy-dsl-2",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-2",level:4},{value:'<a name="closure">Options for detekt configuration closure</a>',id:"options-for-detekt-configuration-closure",level:3},{value:"Groovy DSL",id:"groovy-dsl-3",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-3",level:4},{value:"Reports",id:"reports",level:3},{value:"Using Type Resolution",id:"using-type-resolution",level:3},{value:"Groovy DSL",id:"groovy-dsl-4",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-4",level:4},{value:'<a name="excluding">Leveraging Gradle&#39;s SourceTask - Excluding and including source files</a>',id:"leveraging-gradles-sourcetask---excluding-and-including-source-files",level:3},{value:"Groovy DSL",id:"groovy-dsl-5",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-5",level:4},{value:'<a name="customdetekttask">Defining custom detekt task</a>',id:"defining-custom-detekt-task",level:3},{value:"Groovy DSL",id:"groovy-dsl-6",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-6",level:4},{value:'<a name="check-lifecycle">Disabling detekt from the check task</a>',id:"disabling-detekt-from-the-check-task",level:3},{value:"Groovy DSL",id:"groovy-dsl-7",level:4},{value:"Kotlin DSL",id:"kotlin-dsl-7",level:4},{value:'<a name="idea">Integrating detekt inside your IntelliJ IDEA</a>',id:"integrating-detekt-inside-your-intellij-idea",level:2},{value:'<a name="dependencies">Gradle runtime dependencies</a>',id:"gradle-runtime-dependencies",level:2}],p={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"detekt requires ",(0,l.kt)("strong",{parentName:"p"},"Gradle 6.8.3")," or higher. We, however, recommend using the version of Gradle that is ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction/compatibility"},"listed in this table"),"."),(0,l.kt)("h2",{id:"available-plugin-tasks"},(0,l.kt)("a",{name:"tasks"},"Available plugin tasks")),(0,l.kt)("p",null,"The Detekt Gradle Plugin will generate multiple tasks:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detekt")," - Runs a detekt analysis and complexity report on your source files. Configure the analysis inside the\n",(0,l.kt)("inlineCode",{parentName:"li"},"detekt")," closure. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"By default, the standard rule set without any ignore list is executed on sources files located\nin ",(0,l.kt)("inlineCode",{parentName:"li"},"src/main/java"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/java"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"src/main/kotlin")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"src/test/kotlin"),"."),(0,l.kt)("li",{parentName:"ul"},"Reports are automatically generated in xml,\nhtml, txt, md, and sarif format and can be found in ",(0,l.kt)("inlineCode",{parentName:"li"},"build/reports/detekt/detekt.[xml|html|txt|md|sarif]")," respectively."),(0,l.kt)("li",{parentName:"ul"},"Please note that the ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt")," task is automatically run when executing ",(0,l.kt)("inlineCode",{parentName:"li"},"gradle check"),"."),(0,l.kt)("li",{parentName:"ul"},"You may specify Gradle task CLI option for auto correction, such as ",(0,l.kt)("inlineCode",{parentName:"li"},"gradle detekt --auto-correct"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektGenerateConfig")," - Generates a default detekt configuration file into your project directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but creates a code smell baseline. Further detekt runs will only feature new smells not in this list.")),(0,l.kt)("p",null,"In addition to these standard tasks, the plugin will also generate a set of experimental tasks that have\n",(0,l.kt)("a",{parentName:"p",href:"/docs/next/gettingstarted/type-resolution"},"type resolution")," enabled. This happens for both, pure JVM projects and Android projects that have\nthe Android Gradle Plugin applied:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektMain")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but runs only on the ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," source set\n(Android: all production source sets)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektTest")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but runs only on the ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," source set\n(Android: all JVM and Android Test source sets)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektBaselineMain")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline"),", but creates a baseline only for the ",(0,l.kt)("inlineCode",{parentName:"li"},"main")," source set\n(Android: multiple baselines for all production source sets)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"detektBaselineTest")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline"),", but creates a baseline only for the ",(0,l.kt)("inlineCode",{parentName:"li"},"test")," source set\n(Android: multiple baselines for all JVM and Android Test source sets)"),(0,l.kt)("li",{parentName:"ul"},"Android-only: ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt<Variant>")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detekt"),", but runs only on the specific (test) build variant"),(0,l.kt)("li",{parentName:"ul"},"Android-only: ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline<Variant>")," - Similar to ",(0,l.kt)("inlineCode",{parentName:"li"},"detektBaseline"),", but creates a baseline only for the\nspecific (test) build variant")),(0,l.kt)("p",null,"Baseline files that are generated for these specific source sets / build variants contain the name of the source set /\nthe name of the build variant in their name, unless otherwise configured, such as ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-main.xml")," or\n",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-productionDebug.xml"),"."),(0,l.kt)("p",null,"If both, a ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-main.xml")," and a ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt.xml")," baseline file exists in place, the more specific one - ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-main.xml")," -\ntakes precedence when the ",(0,l.kt)("inlineCode",{parentName:"p"},"detektMain")," task is executed, likewise for Android variant-specific baseline files."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE:")," When analyzing Android projects that make use of specific code generators, such as Data Binding, Kotlin synthetic\nview accessors or else, you might see warnings output while detekt runs. This is due to the inability to gather the\ncomplete compile classpath from the Android Gradle Plugin (",(0,l.kt)("a",{parentName:"p",href:"https://issuetracker.google.com/issues/158777988"},"upstream ticket"),")\nand can safely be ignored."),(0,l.kt)("p",null,"Use the Groovy or Kotlin DSL of Gradle to apply the Detekt Gradle Plugin. You can further configure the Plugin\nusing the detekt closure as described ",(0,l.kt)("a",{parentName:"p",href:"#closure"},"here"),"."),(0,l.kt)("h3",{id:"configuration"},(0,l.kt)("a",{name:"gradle"},"Configuration")),(0,l.kt)("p",null,"Using the plugins DSL:"),(0,l.kt)("h4",{id:"groovy-dsl"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'plugins {\n    id "io.gitlab.arturbosch.detekt" version "1.23.0-RC1"\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'plugins {\n    id("io.gitlab.arturbosch.detekt").version("1.23.0-RC1")\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("p",null,"Using legacy plugin application (",(0,l.kt)("inlineCode",{parentName:"p"},"buildscript{}"),"):"),(0,l.kt)("h4",{id:"groovy-dsl-1"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath "io.gitlab.arturbosch.detekt:detekt-gradle-plugin:1.23.0-RC1"\n    }\n}\n\napply plugin: "io.gitlab.arturbosch.detekt"\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-1"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n    repositories {\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("io.gitlab.arturbosch.detekt:detekt-gradle-plugin:1.23.0-RC1")\n    }\n}\n\napply(plugin = "io.gitlab.arturbosch.detekt")\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h3",{id:"configuration-for-android-projects"},(0,l.kt)("a",{name:"gradleandroid"},"Configuration for Android projects")),(0,l.kt)("p",null,"When using Android make sure to have detekt configured in the app/module level ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle")," file."),(0,l.kt)("p",null,"You can configure the plugin in the same way as indicated above."),(0,l.kt)("h4",{id:"groovy-dsl-2"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath "com.android.tools.build:gradle:<agp_version>"\n    }\n}\n\nplugins {\n    id "com.android.application"\n    id "org.jetbrains.kotlin.android" version "<kotlin_version>"\n    id "io.gitlab.arturbosch.detekt" version "1.23.0-RC1"\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-2"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'buildscript {\n    repositories {\n        google()\n        mavenCentral()\n        gradlePluginPortal()\n    }\n    dependencies {\n        classpath("com.android.tools.build:gradle:<agp_version>")\n    }\n}\n\nplugins {\n    id("com.android.application")\n    kotlin("android") version "<kotlin_version>"\n    id("io.gitlab.arturbosch.detekt") version "1.23.0-RC1"\n}\n\nrepositories {\n    mavenCentral()\n}\n')),(0,l.kt)("h3",{id:"options-for-detekt-configuration-closure"},(0,l.kt)("a",{name:"closure"},"Options for detekt configuration closure")),(0,l.kt)("h4",{id:"groovy-dsl-3"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'detekt {\n    // Version of detekt that will be used. When unspecified the latest detekt\n    // version found will be used. Override to stay on the same version.\n    toolVersion = "1.23.0-RC1"\n    \n    // The directories where detekt looks for source files. \n    // Defaults to `files("src/main/java", "src/test/java", "src/main/kotlin", "src/test/kotlin")`.\n    source = files(\n        "src/main/kotlin",\n        "gensrc/main/kotlin"\n    )\n    \n    // Builds the AST in parallel. Rules are always executed in parallel. \n    // Can lead to speedups in larger projects. `false` by default.\n    parallel = false\n    \n    // Define the detekt configuration(s) you want to use. \n    // Defaults to the default detekt configuration.\n    config = files("path/to/config.yml")\n    \n    // Applies the config files on top of detekt\'s default config file. `false` by default.\n    buildUponDefaultConfig = false\n    \n    // Turns on all the rules. `false` by default.\n    allRules = false\n    \n    // Specifying a baseline file. All findings stored in this file in subsequent runs of detekt.\n    baseline = file("path/to/baseline.xml")\n    \n    // Disables all default detekt rulesets and will only run detekt with custom rules\n    // defined in plugins passed in with `detektPlugins` configuration. `false` by default.\n    disableDefaultRuleSets = false\n    \n    // Adds debug output during task execution. `false` by default.\n    debug = false                                         \n    \n    // If set to `true` the build does not fail when the\n    // maxIssues count was reached. Defaults to `false`.\n    ignoreFailures = false\n    \n    // Android: Don\'t create tasks for the specified build types (e.g. "release")\n    ignoredBuildTypes = ["release"]\n    \n    // Android: Don\'t create tasks for the specified build flavor (e.g. "production")\n    ignoredFlavors = ["production"]\n    \n    // Android: Don\'t create tasks for the specified build variants (e.g. "productionRelease")\n    ignoredVariants = ["productionRelease"]\n    \n    // Specify the base path for file paths in the formatted reports. \n    // If not set, all file paths reported will be absolute file path.\n    basePath = projectDir\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-3"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'detekt {\n    // Version of detekt that will be used. When unspecified the latest detekt\n    // version found will be used. Override to stay on the same version.\n    toolVersion = "1.23.0-RC1"\n    \n    // The directories where detekt looks for source files. \n    // Defaults to `files("src/main/java", "src/test/java", "src/main/kotlin", "src/test/kotlin")`.\n    source.setFrom("src/main/java", "src/main/kotlin")\n    \n    // Builds the AST in parallel. Rules are always executed in parallel. \n    // Can lead to speedups in larger projects. `false` by default.\n    parallel = false\n    \n    // Define the detekt configuration(s) you want to use. \n    // Defaults to the default detekt configuration.\n    config = files("path/to/config.yml")\n    \n    // Applies the config files on top of detekt\'s default config file. `false` by default.\n    buildUponDefaultConfig = false\n    \n    // Turns on all the rules. `false` by default.\n    allRules = false\n    \n    // Specifying a baseline file. All findings stored in this file in subsequent runs of detekt.\n    baseline = file("path/to/baseline.xml")\n    \n    // Disables all default detekt rulesets and will only run detekt with custom rules\n    // defined in plugins passed in with `detektPlugins` configuration. `false` by default.\n    disableDefaultRuleSets = false\n    \n    // Adds debug output during task execution. `false` by default.\n    debug = false                                         \n    \n    // If set to `true` the build does not fail when the\n    // maxIssues count was reached. Defaults to `false`.\n    ignoreFailures = false\n    \n    // Android: Don\'t create tasks for the specified build types (e.g. "release")\n    ignoredBuildTypes = listOf("release")\n    \n    // Android: Don\'t create tasks for the specified build flavor (e.g. "production")\n    ignoredFlavors = listOf("production")\n    \n    // Android: Don\'t create tasks for the specified build variants (e.g. "productionRelease")\n    ignoredVariants = listOf("productionRelease")\n    \n    // Specify the base path for file paths in the formatted reports. \n    // If not set, all file paths reported will be absolute file path.\n    basePath = projectDir.absolutePath\n}\n')),(0,l.kt)("h3",{id:"reports"},"Reports"),(0,l.kt)("p",null,"Report output can be customized for each task. The DSL is the same in both Groovy and Kotlin:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named("detekt").configure {\n    reports {\n        // Enable/Disable XML report (default: true)\n        xml.required.set(true)\n        xml.outputLocation.set(file("build/reports/detekt.xml"))\n        // Enable/Disable HTML report (default: true)\n        html.required.set(true)\n        html.outputLocation.set(file("build/reports/detekt.html"))\n        // Enable/Disable TXT report (default: true)\n        txt.required.set(true)\n        txt.outputLocation.set(file("build/reports/detekt.txt"))\n        // Enable/Disable SARIF report (default: false)\n        sarif.required.set(true)\n        sarif.outputLocation.set(file("build/reports/detekt.sarif"))\n        // Enable/Disable MD report (default: false)\n        md.required.set(true)\n        md.outputLocation.set(file("build/reports/detekt.md"))\n        custom {\n            // The simple class name of your custom report.\n            reportId = "CustomJsonReport"\n            outputLocation.set(file("build/reports/detekt.json"))\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"using-type-resolution"},"Using Type Resolution"),(0,l.kt)("p",null,"Type resolution is experimental and works only for ",(0,l.kt)("a",{parentName:"p",href:"#available-plugin-tasks"},"predefined tasks listed above"),"\nor when implementing a custom detekt task with the ",(0,l.kt)("inlineCode",{parentName:"p"},"classpath")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jvmTarget")," properties present."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jdkHome")," is also available as an input. When this is unset, analysis is performed using the JDK classes of the JDK that\nGradle is running with (shown by the ",(0,l.kt)("inlineCode",{parentName:"p"},"./gradlew --version")," command). This can be an issue if the Gradle JDK and the\nproject JDK doesn't match e.g. if Gradle runs under Java 8 but the project uses classes only available in Java 9 or\nhigher. Setting ",(0,l.kt)("inlineCode",{parentName:"p"},"jdkHome")," to the Java 9 JDK path will allow for more correct analysis."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"jdkHome")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"jvmTarget")," are set automatically when applying a toolchain using either\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/toolchains.html"},(0,l.kt)("inlineCode",{parentName:"a"},"java"))," or\n",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/gradle.html#gradle-java-toolchains-support"},(0,l.kt)("inlineCode",{parentName:"a"},"kotlin")),"."),(0,l.kt)("p",null,"More information on type resolution are available on the ",(0,l.kt)("a",{parentName:"p",href:"/docs/next/gettingstarted/type-resolution"},"type resolution")," page."),(0,l.kt)("h4",{id:"groovy-dsl-4"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"tasks.withType(io.gitlab.arturbosch.detekt.Detekt).configureEach {\n    jvmTarget = '1.8'\n    jdkHome.set(file('path/to/jdkHome'))\n}\ntasks.withType(io.gitlab.arturbosch.detekt.DetektCreateBaselineTask).configureEach {\n    jvmTarget = '1.8'\n    jdkHome.set(file('path/to/jdkHome'))\n}\n")),(0,l.kt)("h4",{id:"kotlin-dsl-4"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {\n    this.jvmTarget = "1.8"\n    jdkHome.set(file("path/to/jdkHome"))\n}\ntasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {\n    this.jvmTarget = "1.8"\n    jdkHome.set(file("path/to/jdkHome"))\n}\n')),(0,l.kt)("h3",{id:"leveraging-gradles-sourcetask---excluding-and-including-source-files"},(0,l.kt)("a",{name:"excluding"},"Leveraging Gradle's SourceTask - Excluding and including source files")),(0,l.kt)("p",null,"A detekt task extends the Gradle ",(0,l.kt)("inlineCode",{parentName:"p"},"SourceTask")," to be only scheduled when watched source files are changed.\nIt also allows to match files that should be excluded from the analysis.\nTo do this introduce a query on detekt tasks and define include and exclude patterns outside the detekt closure:"),(0,l.kt)("h4",{id:"groovy-dsl-5"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'detekt {\n    ...\n}\n\ntasks.withType(io.gitlab.arturbosch.detekt.Detekt).configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n\ntasks.withType(io.gitlab.arturbosch.detekt.DetektCreateBaselineTask).configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-5"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'detekt {\n    ...\n}\n\ntasks.withType<io.gitlab.arturbosch.detekt.Detekt>().configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n\ntasks.withType<io.gitlab.arturbosch.detekt.DetektCreateBaselineTask>().configureEach {\n    // include("**/special/package/**") // only analyze a sub package inside src/main/kotlin\n    exclude("**/special/package/internal/**") // but exclude our legacy internal package\n}\n')),(0,l.kt)("h3",{id:"defining-custom-detekt-task"},(0,l.kt)("a",{name:"customdetekttask"},"Defining custom detekt task")),(0,l.kt)("p",null,"Custom tasks for alternative configurations or different source sets can be defined by creating a custom task that\nuses the type ",(0,l.kt)("inlineCode",{parentName:"p"},"Detekt"),"."),(0,l.kt)("h4",{id:"groovy-dsl-6"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},'tasks.register(name: myDetekt, type: io.gitlab.arturbosch.detekt.Detekt) {\n    description = "Runs a custom detekt build."\n    setSource(files("src/main/kotlin", "src/test/kotlin"))\n    config.setFrom(files("$rootDir/config.yml"))\n    debug = true\n    reports {\n        xml {\n            destination = file("build/reports/mydetekt.xml")\n        }\n        html.destination = file("build/reports/mydetekt.html")\n    }\n    include \'**/*.kt\'\n    include \'**/*.kts\'\n    exclude \'resources/\'\n    exclude \'build/\'\n}\n')),(0,l.kt)("h4",{id:"kotlin-dsl-6"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.register<io.gitlab.arturbosch.detekt.Detekt>("myDetekt") {\n    description = "Runs a custom detekt build."\n    setSource(files("src/main/kotlin", "src/test/kotlin"))\n    config.setFrom(files("$rootDir/config.yml"))\n    debug = true\n    reports {\n        xml {\n            destination = file("build/reports/mydetekt.xml")\n        }\n        html.destination = file("build/reports/mydetekt.html")\n    }\n    include("**/*.kt")\n    include("**/*.kts")\n    exclude("resources/")\n    exclude("build/")\n}\n')),(0,l.kt)("h3",{id:"disabling-detekt-from-the-check-task"},(0,l.kt)("a",{name:"check-lifecycle"},"Disabling detekt from the check task")),(0,l.kt)("p",null,"detekt tasks by default are verification tasks. They get executed whenever the Gradle check task gets executed.\nThis aligns with the behavior of other code analysis plugins for Gradle."),(0,l.kt)("p",null,"If you are adding detekt to an already long running project you may want to increase the code quality incrementally and therefore\nexclude detekt from the check task."),(0,l.kt)("h4",{id:"groovy-dsl-7"},"Groovy DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-groovy"},"check.configure {\n    dependsOn = dependsOn.findAll { it.name != 'detekt' }\n}\n")),(0,l.kt)("h4",{id:"kotlin-dsl-7"},"Kotlin DSL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'tasks.named("check").configure {\n    this.setDependsOn(this.dependsOn.filterNot {\n        it is TaskProvider<*> && it.name == "detekt"\n    })\n}\n')),(0,l.kt)("p",null,"Instead of disabling detekt for the check task, you may want to increase the build failure threshold in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/introduction/configurations"},"configuration file"),"."),(0,l.kt)("h2",{id:"integrating-detekt-inside-your-intellij-idea"},(0,l.kt)("a",{name:"idea"},"Integrating detekt inside your IntelliJ IDEA")),(0,l.kt)("p",null,"detekt comes with an ",(0,l.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/10761-detekt"},"IntelliJ Plugin")," that you can install directly from the IDE. The plugin offers warning highlight directly inside the IDE as well as support for code formatting."),(0,l.kt)("p",null,"The source code of the plugin is available here: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/detekt/detekt-intellij-plugin"},"detekt/detekt-intellij-plugin")),(0,l.kt)("h2",{id:"gradle-runtime-dependencies"},(0,l.kt)("a",{name:"dependencies"},"Gradle runtime dependencies")),(0,l.kt)("p",null,"detekt is tightly coupled to the Kotlin compiler and requires a specific version to be available at runtime to perform\nits analysis."),(0,l.kt)("p",null,"If detekt is run with an unexpected version of the Kotlin compiler on its classpath, you will see an error like this\nwhen you try to run detekt via Gradle:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"detekt was compiled with Kotlin 1.8.0 but is currently running with 1.7.0\n")),(0,l.kt)("p",null,"This happens when the version of ",(0,l.kt)("inlineCode",{parentName:"p"},"kotlin-compiler-embeddable")," is overridden on detekt's classpath (in the ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt"),"\ndependency configuration). This can happen when build scripts use things like this which override all dependency\nconfigurations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'configurations.all {\n    resolutionStrategy.eachDependency {\n        if (requested.group == "org.jetbrains.kotlin") {\n            useVersion("1.7.0")\n        }\n    }\n}\n')),(0,l.kt)("p",null,"If Kotlin dependencies are being aligned like this then exclude the ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt")," dependency configuration with something\nlike ",(0,l.kt)("inlineCode",{parentName:"p"},'configurations.matching { it.name != "detekt" }.all'),"."))}k.isMDXComponent=!0}}]);