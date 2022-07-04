"use strict";(self.webpackChunk_app_docs=self.webpackChunk_app_docs||[]).push([[42],{8840:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(9703);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2923:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(6738),o=r(8832),a=(r(9703),r(8840)),i=["components"],l={},s="Server",p={unversionedId:"developing/server",id:"developing/server",title:"Server",description:"Env",source:"@site/docs/developing/server.md",sourceDirName:"developing",slug:"/developing/server",permalink:"/prytaneum/docs/developing/server",draft:!1,editUrl:"https://github.com/c2c-project/prytaneum/tree/dev/app/docs/docs/developing/server.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Scripts",permalink:"/prytaneum/docs/developing/scripts"},next:{title:"Troubleshooting",permalink:"/prytaneum/docs/developing/troubleshooting"}},u={},c=[{value:"Env",id:"env",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Adding a feature",id:"adding-a-feature",level:3},{value:"Design Notes",id:"design-notes",level:2},{value:"Development Notes",id:"development-notes",level:2},{value:"Security",id:"security",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server"},"Server"),(0,a.kt)("h2",{id:"env"},"Env"),(0,a.kt)("p",null,"We load our environment using ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv-cli"},"dotenv-cli"),". The TL;DR is that if you want to override an environment variable, create a ",(0,a.kt)("inlineCode",{parentName:"p"},".env.local")," file within the ",(0,a.kt)("inlineCode",{parentName:"p"},"/server")," directory. Our .gitignore SHOULD always ignore this file, but it never hurts to double check."),(0,a.kt)("p",null,'You may be thinking, "Why would I want to override the default environment variables?" A typical use case is where you want to use some real API key to prototype your changes, but you definitely don\'t want to commit a real API key to the repo \ud83d\ude03. For more information on cascading environment variables, read ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/entropitor/dotenv-cli#cascading-env-variables"},"this")," and the corresponding ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/entropitor/dotenv-cli/issues/37"},"issue"),"."),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("h3",{id:"adding-a-feature"},"Adding a feature"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# for new features\nyarn workspace @app/server add-feat yourFeatureNameHere\n\n# for sub features\nyarn workspace @app/server add-feat yourFeatureNameHere parentFeatureName\n")),(0,a.kt)("p",null,"After running the above, the corresponding folders and files are added inside of the features folder."),(0,a.kt)("h2",{id:"design-notes"},"Design Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"All resolvers assume that authentication of the user has occurred at a prior level"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://relay.dev/graphql/connections.htm#"},"Connections spec for relay"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"In order to indicate to Relay that we want to perform pagination over this connection, we need to mark the field with the @connection directive. We must also provide a static unique identifier for this connection, known as the key. We recommend the following naming convention for the connection key: ",(0,a.kt)("inlineCode",{parentName:"p"},"<fragment_name>_<field_name>"),".")))),(0,a.kt)("h2",{id:"development-notes"},"Development Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Files in the ",(0,a.kt)("inlineCode",{parentName:"li"},"features/")," folder must container a file named ",(0,a.kt)("inlineCode",{parentName:"li"},"resolvers.(ts|js)")," and export export ",(0,a.kt)("inlineCode",{parentName:"li"},"export const resolvers = {...}"),". There are some special cases too. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"type-parsers")," exports a ",(0,a.kt)("inlineCode",{parentName:"li"},"resolvers")," variable too for custom scalars, but generally you should not need to do this."),(0,a.kt)("li",{parentName:"ul"},"Uncaught errors should be thrown almost never. We don't want to blow up the whole query because the user didn't have permissions for 1 field. However, we should always be throwing errors if there are insufficient permissions for create, update, or delete operations.")),(0,a.kt)("h2",{id:"security"},"Security"),(0,a.kt)("p",null,"We try our best to follow all OWASP best practices. The cheatsheets in the sidebar at this ",(0,a.kt)("a",{parentName:"p",href:"https://cheatsheetseries.owasp.org/index.html"},"link")," in particular when they apply to our use case."),(0,a.kt)("h1",{id:"future-optimizations"},"Future Optimizations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/59871178/15437092"},"Take a look here to optimize queries"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/graphql-parse-resolve-info"},"graphql-parse-resolve-info")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/join-monster"},"join monster")," (just another reference, not going to use -- probably)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/graphql/dataloader"},"Batching queries using data loader"))))}m.isMDXComponent=!0}}]);