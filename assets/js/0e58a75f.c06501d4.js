"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[241],{15295:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>c});var s=i(85893),o=i(11151);const l={title:"Naming Rule Set",sidebar:"home_sidebar",keywords:["rules","naming"],permalink:"naming.html",toc:!0,folder:"documentation"},a=void 0,t={id:"rules/naming",title:"Naming Rule Set",description:"The naming ruleset contains rules which assert the naming of different parts of the codebase.",source:"@site/docs/rules/naming.md",sourceDirName:"rules",slug:"/rules/naming",permalink:"/docs/next/rules/naming",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/rules/naming.md",tags:[],version:"current",frontMatter:{title:"Naming Rule Set",sidebar:"home_sidebar",keywords:["rules","naming"],permalink:"naming.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Libraries Rule Set",permalink:"/docs/next/rules/libraries"},next:{title:"Performance Rule Set",permalink:"/docs/next/rules/performance"}},r={},c=[{value:"BooleanPropertyNaming",id:"booleanpropertynaming",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"ClassNaming",id:"classnaming",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"ConstructorParameterNaming",id:"constructorparameternaming",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"EnumNaming",id:"enumnaming",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"ForbiddenClassName",id:"forbiddenclassname",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"FunctionNameMaxLength",id:"functionnamemaxlength",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"FunctionNameMinLength",id:"functionnameminlength",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"FunctionNaming",id:"functionnaming",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"FunctionParameterNaming",id:"functionparameternaming",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"InvalidPackageDeclaration",id:"invalidpackagedeclaration",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"LambdaParameterNaming",id:"lambdaparameternaming",level:3},{value:"Configuration options:",id:"configuration-options-10",level:4},{value:"MatchingDeclarationName",id:"matchingdeclarationname",level:3},{value:"Configuration options:",id:"configuration-options-11",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"MemberNameEqualsClassName",id:"membernameequalsclassname",level:3},{value:"Configuration options:",id:"configuration-options-12",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"NoNameShadowing",id:"nonameshadowing",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"NonBooleanPropertyPrefixedWithIs",id:"nonbooleanpropertyprefixedwithis",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"ObjectPropertyNaming",id:"objectpropertynaming",level:3},{value:"Configuration options:",id:"configuration-options-13",level:4},{value:"PackageNaming",id:"packagenaming",level:3},{value:"Configuration options:",id:"configuration-options-14",level:4},{value:"TopLevelPropertyNaming",id:"toplevelpropertynaming",level:3},{value:"Configuration options:",id:"configuration-options-15",level:4},{value:"VariableMaxLength",id:"variablemaxlength",level:3},{value:"Configuration options:",id:"configuration-options-16",level:4},{value:"VariableMinLength",id:"variableminlength",level:3},{value:"Configuration options:",id:"configuration-options-17",level:4},{value:"VariableNaming",id:"variablenaming",level:3},{value:"Configuration options:",id:"configuration-options-18",level:4}];function d(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"The naming ruleset contains rules which assert the naming of different parts of the codebase."}),"\n",(0,s.jsx)(e.h3,{id:"booleanpropertynaming",children:"BooleanPropertyNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports when a boolean property doesn't match a pattern"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Requires Type Resolution"})}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"allowedPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'^(is|has|are)'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"noncompliant-code",children:"Noncompliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"val progressBar: Boolean = true\n"})}),"\n",(0,s.jsx)(e.h4,{id:"compliant-code",children:"Compliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"val hasProgressBar: Boolean = true\n"})}),"\n",(0,s.jsx)(e.h3,{id:"classnaming",children:"ClassNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports class or object names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": ClassName"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-1",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"classPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[A-Z][a-zA-Z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"constructorparameternaming",children:"ConstructorParameterNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports constructor parameter names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-2",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"parameterPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z][A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"privateParameterPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z][A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"excludeClassPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'$^'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"ignores variables in classes which match this regex"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"enumnaming",children:"EnumNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports enum names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": EnumEntryName"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-3",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"enumEntryPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[A-Z][_a-zA-Z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"forbiddenclassname",children:"ForbiddenClassName"}),"\n",(0,s.jsxs)(e.p,{children:["Reports class names which are forbidden per configuration. By default, this rule does not report any classes.\nExamples for forbidden names might be too generic class names like ",(0,s.jsx)(e.code,{children:"...Manager"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-4",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"forbiddenName"})," (default: ",(0,s.jsx)(e.code,{children:"[]"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"forbidden class names"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"functionnamemaxlength",children:"FunctionNameMaxLength"}),"\n",(0,s.jsx)(e.p,{children:"Reports when very long function names are used."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": FunctionMaxNameLength"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-5",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"maximumFunctionNameLength"})," (default: ",(0,s.jsx)(e.code,{children:"30"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"maximum name length"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"functionnameminlength",children:"FunctionNameMinLength"}),"\n",(0,s.jsx)(e.p,{children:"Reports when very short function names are used."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": FunctionMinNameLength"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-6",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"minimumFunctionNameLength"})," (default: ",(0,s.jsx)(e.code,{children:"3"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"minimum name length"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"functionnaming",children:"FunctionNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports function names that do not follow the specified naming convention.\nOne exception are factory functions used to create instances of classes.\nThese factory functions can have the same name as the class being created."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": FunctionName"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-7",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"functionPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z][a-zA-Z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"excludeClassPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'$^'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"ignores functions in classes which match this regex"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"functionparameternaming",children:"FunctionParameterNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports function parameter names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-8",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"parameterPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z][A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"excludeClassPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'$^'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"ignores variables in classes which match this regex"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"invalidpackagedeclaration",children:"InvalidPackageDeclaration"}),"\n",(0,s.jsx)(e.p,{children:"Reports when the file location does not match the declared package."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": PackageDirectoryMismatch"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-9",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"rootPackage"})," (default: ",(0,s.jsx)(e.code,{children:"''"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"if specified this part of the package structure is ignored"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"requireRootInDeclaration"})," (default: ",(0,s.jsx)(e.code,{children:"false"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"requires the declaration to start with the specified rootPackage"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"lambdaparameternaming",children:"LambdaParameterNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports lambda parameter names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-10",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"parameterPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z][A-Za-z0-9]*|_'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"matchingdeclarationname",children:"MatchingDeclarationName"}),"\n",(0,s.jsx)(e.p,{children:'"If a Kotlin file contains a single non-private class (potentially with related top-level declarations),\nits name should be the same as the name of the class, with the .kt extension appended.\nIf a file contains multiple classes, or only top-level declarations,\nchoose a name describing what the file contains, and name the file accordingly.\nUse camel humps with an uppercase first letter (e.g. ProcessDeclarations.kt).'}),"\n",(0,s.jsx)(e.p,{children:'The name of the file should describe what the code in the file does.\nTherefore, you should avoid using meaningless words such as "Util" in file names." - Official Kotlin Style Guide'}),"\n",(0,s.jsxs)(e.p,{children:["More information at: ",(0,s.jsx)(e.a,{href:"https://kotlinlang.org/docs/coding-conventions.html",children:"https://kotlinlang.org/docs/coding-conventions.html"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-11",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"mustBeFirst"})," (default: ",(0,s.jsx)(e.code,{children:"true"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"name should only be checked if the file starts with a class or object"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"multiplatformTargets"})," (default: ",(0,s.jsx)(e.code,{children:"['ios', 'android', 'js', 'jvm', 'native', 'iosArm64', 'iosX64', 'macosX64', 'mingwX64', 'linuxX64']"}),")"]}),"\n",(0,s.jsxs)(e.p,{children:["kotlin multiplatform targets, used to allow file names like ",(0,s.jsx)(e.code,{children:"MyClass.jvm.kt"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"noncompliant-code-1",children:"Noncompliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"class Foo // FooUtils.kt\n\nfun Bar.toFoo(): Foo = ...\nfun Foo.toBar(): Bar = ...\n"})}),"\n",(0,s.jsx)(e.h4,{id:"compliant-code-1",children:"Compliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"class Foo { // Foo.kt\n    fun stuff() = 42\n}\n\nfun Bar.toFoo(): Foo = ...\n"})}),"\n",(0,s.jsx)(e.h3,{id:"membernameequalsclassname",children:"MemberNameEqualsClassName"}),"\n",(0,s.jsx)(e.p,{children:"This rule reports a member that has the same as the containing class or object.\nThis might result in confusion.\nThe member should either be renamed or changed to a constructor.\nFactory functions that create an instance of the class are exempt from this rule."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.2.0"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Requires Type Resolution"})}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-12",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"ignoreOverridden"})," (default: ",(0,s.jsx)(e.code,{children:"true"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"if overridden functions and properties should be ignored"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h4,{id:"noncompliant-code-2",children:"Noncompliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"class MethodNameEqualsClassName {\n\n    fun methodNameEqualsClassName() { }\n}\n\nclass PropertyNameEqualsClassName {\n\n    val propertyEqualsClassName = 0\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"compliant-code-2",children:"Compliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"class Manager {\n\n    companion object {\n        // factory functions can have the same name as the class\n        fun manager(): Manager {\n            return Manager()\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"nonameshadowing",children:"NoNameShadowing"}),"\n",(0,s.jsx)(e.p,{children:"Disallows shadowing variable declarations.\nShadowing makes it impossible to access a variable with the same name in the scope."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Requires Type Resolution"})}),"\n",(0,s.jsx)(e.h4,{id:"noncompliant-code-3",children:"Noncompliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"fun test(i: Int, j: Int, k: Int) {\n    val i = 1\n    val (j, _) = 1 to 2\n    listOf(1).map { k -> println(k) }\n    listOf(1).forEach {\n        listOf(2).forEach {\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h4,{id:"compliant-code-3",children:"Compliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"fun test(i: Int, j: Int, k: Int) {\n    val x = 1\n    val (y, _) = 1 to 2\n    listOf(1).map { z -> println(z) }\n    listOf(1).forEach {\n        listOf(2).forEach { x ->\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(e.h3,{id:"nonbooleanpropertyprefixedwithis",children:"NonBooleanPropertyPrefixedWithIs"}),"\n",(0,s.jsxs)(e.p,{children:["Reports when property with 'is' prefix doesn't have a boolean type.\nPlease check the ",(0,s.jsx)(e.a,{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.3.2",children:"chapter 8.3.2 at Java Language Specification"})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Requires Type Resolution"})}),"\n",(0,s.jsx)(e.h4,{id:"noncompliant-code-4",children:"Noncompliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"val isEnabled: Int = 500\n"})}),"\n",(0,s.jsx)(e.h4,{id:"compliant-code-4",children:"Compliant Code:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-kotlin",children:"val isEnabled: Boolean = false\n"})}),"\n",(0,s.jsx)(e.h3,{id:"objectpropertynaming",children:"ObjectPropertyNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports property names inside objects that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": ObjectPropertyName"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-13",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"constantPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[A-Za-z][_A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"propertyPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[A-Za-z][_A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"privatePropertyPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'(_)?[A-Za-z][_A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"packagenaming",children:"PackageNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports package names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": PackageName"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-14",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"packagePattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z]+(\\.[a-z][A-Za-z0-9]*)*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"toplevelpropertynaming",children:"TopLevelPropertyNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports top level constant that which do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-15",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"constantPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[A-Z][_A-Z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"propertyPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[A-Za-z][_A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"privatePropertyPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'_?[A-Za-z][_A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"variablemaxlength",children:"VariableMaxLength"}),"\n",(0,s.jsx)(e.p,{children:"Reports when very long variable names are used."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-16",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"maximumVariableNameLength"})," (default: ",(0,s.jsx)(e.code,{children:"64"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"maximum name length"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"variableminlength",children:"VariableMinLength"}),"\n",(0,s.jsx)(e.p,{children:"Reports when very short variable names are used."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": No"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-17",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"minimumVariableNameLength"})," (default: ",(0,s.jsx)(e.code,{children:"1"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"minimum name length"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"variablenaming",children:"VariableNaming"}),"\n",(0,s.jsx)(e.p,{children:"Reports variable names that do not follow the specified naming convention."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Active by default"}),": Yes - Since v1.0.0"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Aliases"}),": PropertyName"]}),"\n",(0,s.jsx)(e.h4,{id:"configuration-options-18",children:"Configuration options:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"variablePattern"})," (default: ",(0,s.jsx)(e.code,{children:"'[a-z][A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"privateVariablePattern"})," (default: ",(0,s.jsx)(e.code,{children:"'(_)?[a-z][A-Za-z0-9]*'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"naming pattern"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"excludeClassPattern"})," (default: ",(0,s.jsx)(e.code,{children:"'$^'"}),")"]}),"\n",(0,s.jsx)(e.p,{children:"ignores variables in classes which match this regex"}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},11151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>a});var s=i(67294);const o={},l=s.createContext(o);function a(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:a(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);