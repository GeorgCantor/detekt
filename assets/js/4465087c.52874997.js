"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[3514],{4014:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var i=o(85893),l=o(11151);const s={title:"Coroutines Rule Set",sidebar:"home_sidebar",keywords:["rules","coroutines"],permalink:"coroutines.html",toc:!0,folder:"documentation"},t=void 0,c={id:"rules/coroutines",title:"Coroutines Rule Set",description:"The coroutines rule set analyzes code for potential coroutines problems.",source:"@site/docs/rules/coroutines.md",sourceDirName:"rules",slug:"/rules/coroutines",permalink:"/docs/next/rules/coroutines",draft:!1,unlisted:!1,editUrl:"https://github.com/detekt/detekt/edit/main/website/docs/rules/coroutines.md",tags:[],version:"current",frontMatter:{title:"Coroutines Rule Set",sidebar:"home_sidebar",keywords:["rules","coroutines"],permalink:"coroutines.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Complexity Rule Set",permalink:"/docs/next/rules/complexity"},next:{title:"Empty-blocks Rule Set",permalink:"/docs/next/rules/empty-blocks"}},d={},r=[{value:"CoroutineLaunchedInTestWithoutRunTest",id:"coroutinelaunchedintestwithoutruntest",level:3},{value:"Noncompliant Code:",id:"noncompliant-code",level:4},{value:"Compliant Code:",id:"compliant-code",level:4},{value:"GlobalCoroutineUsage",id:"globalcoroutineusage",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-1",level:4},{value:"Compliant Code:",id:"compliant-code-1",level:4},{value:"InjectDispatcher",id:"injectdispatcher",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"Noncompliant Code:",id:"noncompliant-code-2",level:4},{value:"Compliant Code:",id:"compliant-code-2",level:4},{value:"RedundantSuspendModifier",id:"redundantsuspendmodifier",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-3",level:4},{value:"Compliant Code:",id:"compliant-code-3",level:4},{value:"SleepInsteadOfDelay",id:"sleepinsteadofdelay",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-4",level:4},{value:"Compliant Code:",id:"compliant-code-4",level:4},{value:"SuspendFunSwallowedCancellation",id:"suspendfunswallowedcancellation",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-5",level:4},{value:"Compliant Code:",id:"compliant-code-5",level:4},{value:"SuspendFunWithCoroutineScopeReceiver",id:"suspendfunwithcoroutinescopereceiver",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-6",level:4},{value:"Compliant Code:",id:"compliant-code-6",level:4},{value:"SuspendFunWithFlowReturnType",id:"suspendfunwithflowreturntype",level:3},{value:"Noncompliant Code:",id:"noncompliant-code-7",level:4},{value:"Compliant Code:",id:"compliant-code-7",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"The coroutines rule set analyzes code for potential coroutines problems."}),"\n",(0,i.jsx)(n.h3,{id:"coroutinelaunchedintestwithoutruntest",children:"CoroutineLaunchedInTestWithoutRunTest"}),"\n",(0,i.jsxs)(n.p,{children:["Detect coroutine launches from ",(0,i.jsx)(n.code,{children:"@Test"})," functions outside a ",(0,i.jsx)(n.code,{children:"runTest"})," block.\nLaunching coroutines in tests without using ",(0,i.jsx)(n.code,{children:"runTest"})," could potentially swallow exceptions,\naltering test results or causing crashes on other unrelated tests."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Test\nfun `test that launches a coroutine`() {\n    val scope = CoroutineScope(Dispatchers.Unconfined)\n    scope.launch {\n        suspendFunction()\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Test\nfun `test that launches a coroutine`() = runTest {\n    launch {\n        suspendFunction()\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"globalcoroutineusage",children:"GlobalCoroutineUsage"}),"\n",(0,i.jsxs)(n.p,{children:["Report usages of ",(0,i.jsx)(n.code,{children:"GlobalScope.launch"})," and ",(0,i.jsx)(n.code,{children:"GlobalScope.async"}),". It is highly discouraged by the Kotlin documentation:"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Global scope is used to launch top-level coroutines which are operating on the whole application lifetime and are\nnot cancelled prematurely."}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Application code usually should use an application-defined CoroutineScope. Using async or launch on the instance\nof GlobalScope is highly discouraged."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/",children:"https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-global-scope/"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-1",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun foo() {\n    GlobalScope.launch { delay(1_000L) }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-1",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"val scope = CoroutineScope(Dispatchers.Default)\n\nfun foo() {\n    scope.launch { delay(1_000L) }\n}\n\nfun onDestroy() {\n    scope.cancel()\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"injectdispatcher",children:"InjectDispatcher"}),"\n",(0,i.jsxs)(n.p,{children:["Always use dependency injection to inject dispatchers for easier testing.\nThis rule is based on the recommendation\n",(0,i.jsx)(n.a,{href:"https://developer.android.com/kotlin/coroutines/coroutines-best-practices#inject-dispatchers",children:"https://developer.android.com/kotlin/coroutines/coroutines-best-practices#inject-dispatchers"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"configuration-options",children:"Configuration options:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"dispatcherNames"})," (default: ",(0,i.jsx)(n.code,{children:"['IO', 'Default', 'Unconfined']"}),")"]}),"\n",(0,i.jsx)(n.p,{children:"The names of dispatchers to detect by this rule"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-2",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun myFunc() {\n    coroutineScope(Dispatchers.IO)\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-2",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun myFunc(dispatcher: CoroutineDispatcher = Dispatchers.IO) {\n    coroutineScope(dispatcher)\n}\n\nclass MyRepository(dispatchers: CoroutineDispatcher = Dispatchers.IO)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"redundantsuspendmodifier",children:"RedundantSuspendModifier"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"suspend"})," modifier should only be used where needed, otherwise the function can only be used from other suspending\nfunctions. This needlessly restricts use of the function and should be avoided by removing the ",(0,i.jsx)(n.code,{children:"suspend"})," modifier\nwhere it's not needed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-3",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'suspend fun normalFunction() {\n    println("string")\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-3",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'fun normalFunction() {\n    println("string")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"sleepinsteadofdelay",children:"SleepInsteadOfDelay"}),"\n",(0,i.jsxs)(n.p,{children:["Report usages of ",(0,i.jsx)(n.code,{children:"Thread.sleep"})," in suspending functions and coroutine blocks. A thread can\ncontain multiple coroutines at one time due to coroutines' lightweight nature, so if one\ncoroutine invokes ",(0,i.jsx)(n.code,{children:"Thread.sleep"}),", it could potentially halt the execution of unrelated coroutines\nand cause unpredictable behavior."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-4",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun foo() {\n    Thread.sleep(1_000L)\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-4",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun foo() {\n    delay(1_000L)\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"suspendfunswallowedcancellation",children:"SuspendFunSwallowedCancellation"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"suspend"})," functions should not be called inside ",(0,i.jsx)(n.code,{children:"runCatching"}),"'s lambda block, because ",(0,i.jsx)(n.code,{children:"runCatching"})," catches all the\n",(0,i.jsx)(n.code,{children:"Exception"}),"s. For Coroutines to work in all cases, developers should make sure to propagate ",(0,i.jsx)(n.code,{children:"CancellationException"}),"\nexceptions. This means ",(0,i.jsx)(n.code,{children:"CancellationException"})," should never be:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"caught and swallowed (even if logged)"}),"\n",(0,i.jsx)(n.li,{children:"caught and propagated to external systems"}),"\n",(0,i.jsx)(n.li,{children:"caught and shown to the user"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"they must always be rethrown in the same context."}),"\n",(0,i.jsxs)(n.p,{children:["Using ",(0,i.jsx)(n.code,{children:"runCatching"})," increases this risk of mis-handling cancellation. If you catch and don't rethrow all the\n",(0,i.jsx)(n.code,{children:"CancellationException"}),", your coroutines are not cancelled even if you cancel their ",(0,i.jsx)(n.code,{children:"CoroutineScope"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This can very easily lead to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"unexpected crashes"}),"\n",(0,i.jsx)(n.li,{children:"extremely hard to diagnose bugs"}),"\n",(0,i.jsx)(n.li,{children:"memory leaks"}),"\n",(0,i.jsx)(n.li,{children:"performance issues"}),"\n",(0,i.jsx)(n.li,{children:"battery drain"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["See reference, ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/cancellation-and-timeouts.html#cancellation-is-cooperative",children:"Kotlin doc"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If your project wants to use ",(0,i.jsx)(n.code,{children:"runCatching"})," and ",(0,i.jsx)(n.code,{children:"Result"})," objects, it is recommended to write a ",(0,i.jsx)(n.code,{children:"coRunCatching"}),"\nutility function which immediately re-throws ",(0,i.jsx)(n.code,{children:"CancellationException"}),"; and forbid ",(0,i.jsx)(n.code,{children:"runCatching"})," and ",(0,i.jsx)(n.code,{children:"suspend"}),"\ncombinations by activating this rule."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-5",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Throws(IllegalStateException::class)\nsuspend fun bar(delay: Long) {\n    check(delay <= 1_000L)\n    delay(delay)\n}\n\nsuspend fun foo() {\n    runCatching {\n        bar(1_000L)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-5",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"@Throws(IllegalStateException::class)\nsuspend fun bar(delay: Long) {\n    check(delay <= 1_000L)\n    delay(delay)\n}\n\nsuspend fun foo() {\n    try {\n        bar(1_000L)\n    } catch (e: IllegalStateException) {\n        // handle error\n    }\n}\n\n// Alternate\n@Throws(IllegalStateException::class)\nsuspend fun foo() {\n    bar(1_000L)\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"suspendfunwithcoroutinescopereceiver",children:"SuspendFunWithCoroutineScopeReceiver"}),"\n",(0,i.jsxs)(n.p,{children:["Suspend functions that use ",(0,i.jsx)(n.code,{children:"CoroutineScope"})," as receiver should not be marked as ",(0,i.jsx)(n.code,{children:"suspend"}),".\nA ",(0,i.jsx)(n.code,{children:"CoroutineScope"})," provides structured concurrency via its ",(0,i.jsx)(n.code,{children:"coroutineContext"}),". A ",(0,i.jsx)(n.code,{children:"suspend"}),"\nfunction also has its own ",(0,i.jsx)(n.code,{children:"coroutineContext"}),", which is now ambiguous and mixed with the\nreceiver`s."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/coroutines-basics.html#scope-builder-and-concurrency",children:"https://kotlinlang.org/docs/coroutines-basics.html#scope-builder-and-concurrency"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": No"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Aliases"}),": SuspendFunctionOnCoroutineScope"]}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-6",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun CoroutineScope.foo() {\n    launch {\n        delay(1.seconds)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-6",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun CoroutineScope.foo() {\n    launch {\n        delay(1.seconds)\n    }\n}\n\n// Alternative\nsuspend fun foo() = coroutineScope {\n    launch {\n        delay(1.seconds)\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"suspendfunwithflowreturntype",children:"SuspendFunWithFlowReturnType"}),"\n",(0,i.jsxs)(n.p,{children:["Functions that return ",(0,i.jsx)(n.code,{children:"Flow"})," from ",(0,i.jsx)(n.code,{children:"kotlinx.coroutines.flow"})," should not be marked as ",(0,i.jsx)(n.code,{children:"suspend"}),".\n",(0,i.jsx)(n.code,{children:"Flows"})," are intended to be cold observable streams. The act of simply invoking a function that\nreturns a ",(0,i.jsx)(n.code,{children:"Flow"}),", should not have any side effects. Only once collection begins against the\nreturned ",(0,i.jsx)(n.code,{children:"Flow"}),", should work actually be done."]}),"\n",(0,i.jsxs)(n.p,{children:["See ",(0,i.jsx)(n.a,{href:"https://kotlinlang.org/docs/flow.html#flows-are-cold",children:"https://kotlinlang.org/docs/flow.html#flows-are-cold"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Active by default"}),": Yes - Since v1.21.0"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Requires Type Resolution"})}),"\n",(0,i.jsx)(n.h4,{id:"noncompliant-code-7",children:"Noncompliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"suspend fun observeSignals(): Flow<Unit> {\n    val pollingInterval = getPollingInterval() // Done outside of the flow builder block.\n    return flow {\n        while (true) {\n            delay(pollingInterval)\n            emit(Unit)\n        }\n    }\n}\n\nprivate suspend fun getPollingInterval(): Long {\n    // Return the polling interval from some repository\n    // in a suspending manner.\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compliant-code-7",children:"Compliant Code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"fun observeSignals(): Flow<Unit> {\n    return flow {\n        val pollingInterval = getPollingInterval() // Moved into the flow builder block.\n        while (true) {\n            delay(pollingInterval)\n            emit(Unit)\n        }\n    }\n}\n\nprivate suspend fun getPollingInterval(): Long {\n    // Return the polling interval from some repository\n    // in a suspending manner.\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>t});var i=o(67294);const l={},s=i.createContext(l);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);