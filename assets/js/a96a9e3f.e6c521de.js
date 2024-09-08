"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[4699],{66256:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"1.23.7","label":"1.23.7","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-1.23.7","isLast":false,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"Welcome","href":"/docs/1.23.7/intro","docId":"intro","unlisted":false},{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"detekt Configuration File","href":"/docs/1.23.7/introduction/configurations","docId":"introduction/configurations","unlisted":false},{"type":"link","label":"Reporting","href":"/docs/1.23.7/introduction/reporting","docId":"introduction/reporting","unlisted":false},{"type":"link","label":"Configuration for Compose","href":"/docs/1.23.7/introduction/compose","docId":"introduction/compose","unlisted":false},{"type":"link","label":"Suppressing Issues","href":"/docs/1.23.7/introduction/suppressing-rules","docId":"introduction/suppressing-rules","unlisted":false},{"type":"link","label":"Code Smell Baseline","href":"/docs/1.23.7/introduction/baseline","docId":"introduction/baseline","unlisted":false},{"type":"link","label":"Suppressors","href":"/docs/1.23.7/introduction/suppressors","docId":"introduction/suppressors","unlisted":false},{"type":"link","label":"Extending detekt","href":"/docs/1.23.7/introduction/extensions","docId":"introduction/extensions","unlisted":false},{"type":"link","label":"Using Snapshots","href":"/docs/1.23.7/introduction/snapshots","docId":"introduction/snapshots","unlisted":false},{"type":"link","label":"Compatibility Table","href":"/docs/1.23.7/introduction/compatibility","docId":"introduction/compatibility","unlisted":false}]},{"type":"category","label":"Getting Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Run detekt using Command Line Interface","href":"/docs/1.23.7/gettingstarted/cli","docId":"gettingstarted/cli","unlisted":false},{"type":"link","label":"Run detekt using the Detekt Gradle Plugin","href":"/docs/1.23.7/gettingstarted/gradle","docId":"gettingstarted/gradle","unlisted":false},{"type":"link","label":"Run detekt using Gradle Task","href":"/docs/1.23.7/gettingstarted/gradletask","docId":"gettingstarted/gradletask","unlisted":false},{"type":"link","label":"Run detekt using Maven Ant Task","href":"/docs/1.23.7/gettingstarted/mavenanttask","docId":"gettingstarted/mavenanttask","unlisted":false},{"type":"link","label":"Using Type Resolution","href":"/docs/1.23.7/gettingstarted/type-resolution","docId":"gettingstarted/type-resolution","unlisted":false},{"type":"link","label":"Run detekt using a Git pre-commit hook","href":"/docs/1.23.7/gettingstarted/git-pre-commit-hook","docId":"gettingstarted/git-pre-commit-hook","unlisted":false},{"type":"link","label":"Run detekt using the Compiler Plugin","href":"/docs/1.23.7/gettingstarted/compilerplugin","docId":"gettingstarted/compilerplugin","unlisted":false}]},{"type":"category","label":"Rules Documentation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Comments Rule Set","href":"/docs/1.23.7/rules/comments","docId":"rules/comments","unlisted":false},{"type":"link","label":"Complexity Rule Set","href":"/docs/1.23.7/rules/complexity","docId":"rules/complexity","unlisted":false},{"type":"link","label":"Coroutines Rule Set","href":"/docs/1.23.7/rules/coroutines","docId":"rules/coroutines","unlisted":false},{"type":"link","label":"Empty-blocks Rule Set","href":"/docs/1.23.7/rules/empty-blocks","docId":"rules/empty-blocks","unlisted":false},{"type":"link","label":"Exceptions Rule Set","href":"/docs/1.23.7/rules/exceptions","docId":"rules/exceptions","unlisted":false},{"type":"link","label":"Formatting Rule Set","href":"/docs/1.23.7/rules/formatting","docId":"rules/formatting","unlisted":false},{"type":"link","label":"Libraries Rule Set","href":"/docs/1.23.7/rules/libraries","docId":"rules/libraries","unlisted":false},{"type":"link","label":"Naming Rule Set","href":"/docs/1.23.7/rules/naming","docId":"rules/naming","unlisted":false},{"type":"link","label":"Performance Rule Set","href":"/docs/1.23.7/rules/performance","docId":"rules/performance","unlisted":false},{"type":"link","label":"Potential-bugs Rule Set","href":"/docs/1.23.7/rules/potential-bugs","docId":"rules/potential-bugs","unlisted":false},{"type":"link","label":"Ruleauthors Rule Set","href":"/docs/1.23.7/rules/ruleauthors","docId":"rules/ruleauthors","unlisted":false},{"type":"link","label":"Style Rule Set","href":"/docs/1.23.7/rules/style","docId":"rules/style","unlisted":false}]},{"type":"category","label":"Changelogs","items":[{"type":"link","label":"1.x Changelog","href":"/changelog"},{"type":"link","label":"0.x Changelog","href":"/changelog-pre-stable"}],"collapsed":true,"collapsible":true}]},"docs":{"gettingstarted/cli":{"id":"gettingstarted/cli","title":"Run detekt using Command Line Interface","description":"Install the cli","sidebar":"defaultSidebar"},"gettingstarted/compilerplugin":{"id":"gettingstarted/compilerplugin","title":"Run detekt using the Compiler Plugin","description":"You can integrate detekt in your project using the Detekt Compiler Plugin instead of the classic Detekt Gradle Plugin. Detekt offers a compiler plugin for K1 which allows you to run detekt as part of the Kotlin compilation process. This allows you to run detekt on your code without having separate tasks to invoke and results in much faster execution of detekt, especially if you\'re using type resolution.","sidebar":"defaultSidebar"},"gettingstarted/git-pre-commit-hook":{"id":"gettingstarted/git-pre-commit-hook","title":"Run detekt using a Git pre-commit hook","description":"detekt can be integrated into your development workflow by using a Git pre-commit hook.","sidebar":"defaultSidebar"},"gettingstarted/gradle":{"id":"gettingstarted/gradle","title":"Run detekt using the Detekt Gradle Plugin","description":"detekt requires Gradle 6.8.3 or higher. We, however, recommend using the version of Gradle that is listed in this table.","sidebar":"defaultSidebar"},"gettingstarted/gradletask":{"id":"gettingstarted/gradletask","title":"Run detekt using Gradle Task","description":"1. Add following lines to your build.gradle file.","sidebar":"defaultSidebar"},"gettingstarted/mavenanttask":{"id":"gettingstarted/mavenanttask","title":"Run detekt using Maven Ant Task","description":"1. Add following lines to your pom.xml.","sidebar":"defaultSidebar"},"gettingstarted/type-resolution":{"id":"gettingstarted/type-resolution","title":"Using Type Resolution","description":"This page describes how to use detekt\'s type resolution feature.","sidebar":"defaultSidebar"},"intro":{"id":"intro","title":"Welcome","description":"detekt logo","sidebar":"defaultSidebar"},"introduction/baseline":{"id":"introduction/baseline","title":"Code Smell Baseline","description":"With the cli option --baseline or the detekt-gradle-plugin closure-property baseline you can specify a file which is used to generate a baseline.xml.","sidebar":"defaultSidebar"},"introduction/compatibility":{"id":"introduction/compatibility","title":"Compatibility Table","description":"Detekt Support Commitment","sidebar":"defaultSidebar"},"introduction/compose":{"id":"introduction/compose","title":"Configuration for Compose","description":"Relevant rule sets and their configuration options for Compose styles & usage. The following are being used as reference for Compose usage:","sidebar":"defaultSidebar"},"introduction/configurations":{"id":"introduction/configurations","title":"detekt Configuration File","description":"detekt uses a YAML style configuration file for various things:","sidebar":"defaultSidebar"},"introduction/extensions":{"id":"introduction/extensions","title":"Extending detekt","description":"The following page describes how to extend detekt and how to customize it to your domain-specific needs.","sidebar":"defaultSidebar"},"introduction/reporting":{"id":"introduction/reporting","title":"Reporting","description":"Formats","sidebar":"defaultSidebar"},"introduction/snapshots":{"id":"introduction/snapshots","title":"Using Snapshots","description":"This page explains how you can use our latest snapshots to test upcoming unreleased features.","sidebar":"defaultSidebar"},"introduction/suppressing-rules":{"id":"introduction/suppressing-rules","title":"Suppressing Issues","description":"detekt supports the Java (@SuppressWarnings) and Kotlin (@Suppress) style suppression.","sidebar":"defaultSidebar"},"introduction/suppressors":{"id":"introduction/suppressors","title":"Suppressors","description":"The Suppressors are a tool that you can use to customize the reports of detekt. They allow you to (surprise) suppress some issues detected by some rules, and they can be applied to any rule.","sidebar":"defaultSidebar"},"rules/comments":{"id":"rules/comments","title":"Comments Rule Set","description":"This rule set provides rules that address issues in comments and documentation","sidebar":"defaultSidebar"},"rules/complexity":{"id":"rules/complexity","title":"Complexity Rule Set","description":"This rule set contains rules that report complex code.","sidebar":"defaultSidebar"},"rules/coroutines":{"id":"rules/coroutines","title":"Coroutines Rule Set","description":"The coroutines rule set analyzes code for potential coroutines problems.","sidebar":"defaultSidebar"},"rules/empty-blocks":{"id":"rules/empty-blocks","title":"Empty-blocks Rule Set","description":"The empty-blocks ruleset contains rules that will report empty blocks of code","sidebar":"defaultSidebar"},"rules/exceptions":{"id":"rules/exceptions","title":"Exceptions Rule Set","description":"Rules in this rule set report issues related to how code throws and handles Exceptions.","sidebar":"defaultSidebar"},"rules/formatting":{"id":"rules/formatting","title":"Formatting Rule Set","description":"This rule set provides wrappers for rules implemented by ktlint - https://ktlint.github.io/.","sidebar":"defaultSidebar"},"rules/libraries":{"id":"rules/libraries","title":"Libraries Rule Set","description":"Rules in this rule set report issues related to libraries API exposure.","sidebar":"defaultSidebar"},"rules/naming":{"id":"rules/naming","title":"Naming Rule Set","description":"The naming ruleset contains rules which assert the naming of different parts of the codebase.","sidebar":"defaultSidebar"},"rules/performance":{"id":"rules/performance","title":"Performance Rule Set","description":"The performance rule set analyzes code for potential performance problems.","sidebar":"defaultSidebar"},"rules/potential-bugs":{"id":"rules/potential-bugs","title":"Potential-bugs Rule Set","description":"The potential-bugs rule set provides rules that detect potential bugs.","sidebar":"defaultSidebar"},"rules/ruleauthors":{"id":"rules/ruleauthors","title":"Ruleauthors Rule Set","description":"The rule authors ruleset provides rules that ensures good practices when writing detekt rules.","sidebar":"defaultSidebar"},"rules/style":{"id":"rules/style","title":"Style Rule Set","description":"The Style ruleset provides rules that assert the style of the code.","sidebar":"defaultSidebar"}}}}')}}]);