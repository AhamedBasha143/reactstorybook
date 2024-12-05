/*! For license information please see 2648.210b082a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_storybook_new=self.webpackChunkmy_storybook_new||[]).push([[2648],{"./node_modules/react-router-dom/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kd:()=>BrowserRouter,k2:()=>NavLink});var router_Action,react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),react_dom_namespaceObject=__webpack_require__.t(react_dom,2);function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(router_Action||(router_Action={}));const PopStateEventType="popstate";function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function warning(cond,message){if(!cond){"undefined"!=typeof console&&console.warn(message);try{throw new Error(message)}catch(e){}}}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?router_parsePath(to):to,{state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function router_createPath(_ref){let{pathname="/",search="",hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function router_parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window=document.defaultView,v5Compat=!1}=options,globalHistory=window.history,action=router_Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=router_Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action,location:history.location,delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:router_createPath(to);return href=href.replace(/ $/,"%20"),invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref:to=>createHref(window,to),createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=router_Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){if(error instanceof DOMException&&"DataCloneError"===error.name)throw error;window.location.assign(url)}v5Compat&&listener&&listener({action,location:history.location,delta:1})},replace:function replace(to,state){action=router_Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action,location:history.location,delta:0})},go:n=>globalHistory.go(n)};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function router_matchPath(pattern,pathname){"string"==typeof pattern&&(pattern={path:pattern,caseSensitive:!1,end:!0});let[matcher,compiledParams]=function compilePath(path,caseSensitive,end){void 0===caseSensitive&&(caseSensitive=!1);void 0===end&&(end=!0);warning("*"===path||!path.endsWith("*")||path.endsWith("/*"),'Route path "'+path+'" will be treated as if it were "'+path.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+path.replace(/\*$/,"/*")+'".');let params=[],regexpSource="^"+path.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((_,paramName,isOptional)=>(params.push({paramName,isOptional:null!=isOptional}),isOptional?"/?([^\\/]+)?":"/([^\\/]+)")));path.endsWith("*")?(params.push({paramName:"*"}),regexpSource+="*"===path||"/*"===path?"(.*)$":"(?:\\/(.+)|\\/*)$"):end?regexpSource+="\\/*$":""!==path&&"/"!==path&&(regexpSource+="(?:(?=\\/|$))");let matcher=new RegExp(regexpSource,caseSensitive?void 0:"i");return[matcher,params]}(pattern.path,pattern.caseSensitive,pattern.end),match=pathname.match(matcher);if(!match)return null;let matchedPathname=match[0],pathnameBase=matchedPathname.replace(/(.)\/+$/,"$1"),captureGroups=match.slice(1);return{params:compiledParams.reduce(((memo,_ref,index)=>{let{paramName,isOptional}=_ref;if("*"===paramName){let splatValue=captureGroups[index]||"";pathnameBase=matchedPathname.slice(0,matchedPathname.length-splatValue.length).replace(/(.)\/+$/,"$1")}const value=captureGroups[index];return memo[paramName]=isOptional&&!value?void 0:(value||"").replace(/%2F/g,"/"),memo}),{}),pathname:matchedPathname,pathnameBase,pattern}}function router_stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}function getInvalidPathError(char,field,dest,path){return"Cannot include a '"+char+"' character in a manually specified `to."+field+"` field ["+JSON.stringify(path)+"].  Please separate it out to the `to."+dest+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function getPathContributingMatches(matches){return matches.filter(((match,index)=>0===index||match.route.path&&match.route.path.length>0))}function getResolveToMatches(matches,v7_relativeSplatPath){let pathMatches=getPathContributingMatches(matches);return v7_relativeSplatPath?pathMatches.map(((match,idx)=>idx===pathMatches.length-1?match.pathname:match.pathnameBase)):pathMatches.map((match=>match.pathnameBase))}function router_resolveTo(toArg,routePathnames,locationPathname,isPathRelative){let to;void 0===isPathRelative&&(isPathRelative=!1),"string"==typeof toArg?to=router_parsePath(toArg):(to=_extends({},toArg),invariant(!to.pathname||!to.pathname.includes("?"),getInvalidPathError("?","pathname","search",to)),invariant(!to.pathname||!to.pathname.includes("#"),getInvalidPathError("#","pathname","hash",to)),invariant(!to.search||!to.search.includes("#"),getInvalidPathError("#","search","hash",to)));let from,isEmptyPath=""===toArg||""===to.pathname,toPathname=isEmptyPath?"/":to.pathname;if(null==toPathname)from=locationPathname;else{let routePathnameIndex=routePathnames.length-1;if(!isPathRelative&&toPathname.startsWith("..")){let toSegments=toPathname.split("/");for(;".."===toSegments[0];)toSegments.shift(),routePathnameIndex-=1;to.pathname=toSegments.join("/")}from=routePathnameIndex>=0?routePathnames[routePathnameIndex]:"/"}let path=function resolvePath(to,fromPathname){void 0===fromPathname&&(fromPathname="/");let{pathname:toPathname,search="",hash=""}="string"==typeof to?router_parsePath(to):to,pathname=toPathname?toPathname.startsWith("/")?toPathname:function resolvePathname(relativePath,fromPathname){let segments=fromPathname.replace(/\/+$/,"").split("/");return relativePath.split("/").forEach((segment=>{".."===segment?segments.length>1&&segments.pop():"."!==segment&&segments.push(segment)})),segments.length>1?segments.join("/"):"/"}(toPathname,fromPathname):fromPathname;return{pathname,search:normalizeSearch(search),hash:normalizeHash(hash)}}(to,from),hasExplicitTrailingSlash=toPathname&&"/"!==toPathname&&toPathname.endsWith("/"),hasCurrentTrailingSlash=(isEmptyPath||"."===toPathname)&&locationPathname.endsWith("/");return path.pathname.endsWith("/")||!hasExplicitTrailingSlash&&!hasCurrentTrailingSlash||(path.pathname+="/"),path}const router_joinPaths=paths=>paths.join("/").replace(/\/\/+/g,"/"),normalizeSearch=search=>search&&"?"!==search?search.startsWith("?")?search:"?"+search:"",normalizeHash=hash=>hash&&"#"!==hash?hash.startsWith("#")?hash:"#"+hash:"";Error;const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function dist_extends(){return dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},dist_extends.apply(this,arguments)}const DataRouterContext=react.createContext(null);const DataRouterStateContext=react.createContext(null);const NavigationContext=react.createContext(null);const LocationContext=react.createContext(null);const RouteContext=react.createContext({outlet:null,matches:[],isDataRoute:!1});function useInRouterContext(){return null!=react.useContext(LocationContext)}function dist_useLocation(){return useInRouterContext()||invariant(!1),react.useContext(LocationContext).location}function useIsomorphicLayoutEffect(cb){react.useContext(NavigationContext).static||react.useLayoutEffect(cb)}function dist_useNavigate(){let{isDataRoute}=react.useContext(RouteContext);return isDataRoute?function useNavigateStable(){let{router}=useDataRouterContext(DataRouterHook.UseNavigateStable),id=useCurrentRouteId(DataRouterStateHook.UseNavigateStable),activeRef=react.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react.useCallback((function(to,options){void 0===options&&(options={}),activeRef.current&&("number"==typeof to?router.navigate(to):router.navigate(to,dist_extends({fromRouteId:id},options)))}),[router,id])}():function useNavigateUnstable(){useInRouterContext()||invariant(!1);let dataRouterContext=react.useContext(DataRouterContext),{basename,future,navigator}=react.useContext(NavigationContext),{matches}=react.useContext(RouteContext),{pathname:locationPathname}=dist_useLocation(),routePathnamesJson=JSON.stringify(getResolveToMatches(matches,future.v7_relativeSplatPath)),activeRef=react.useRef(!1);return useIsomorphicLayoutEffect((()=>{activeRef.current=!0})),react.useCallback((function(to,options){if(void 0===options&&(options={}),!activeRef.current)return;if("number"==typeof to)return void navigator.go(to);let path=router_resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===options.relative);null==dataRouterContext&&"/"!==basename&&(path.pathname="/"===path.pathname?basename:router_joinPaths([basename,path.pathname])),(options.replace?navigator.replace:navigator.push)(path,options.state,options)}),[basename,navigator,routePathnamesJson,locationPathname,dataRouterContext])}()}function dist_useResolvedPath(to,_temp2){let{relative}=void 0===_temp2?{}:_temp2,{future}=react.useContext(NavigationContext),{matches}=react.useContext(RouteContext),{pathname:locationPathname}=dist_useLocation(),routePathnamesJson=JSON.stringify(getResolveToMatches(matches,future.v7_relativeSplatPath));return react.useMemo((()=>router_resolveTo(to,JSON.parse(routePathnamesJson),locationPathname,"path"===relative)),[to,routePathnamesJson,locationPathname,relative])}react.Component;var DataRouterHook=function(DataRouterHook){return DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate",DataRouterHook}(DataRouterHook||{}),DataRouterStateHook=function(DataRouterStateHook){return DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId",DataRouterStateHook}(DataRouterStateHook||{});function useDataRouterContext(hookName){let ctx=react.useContext(DataRouterContext);return ctx||invariant(!1),ctx}function useCurrentRouteId(hookName){let route=function useRouteContext(hookName){let route=react.useContext(RouteContext);return route||invariant(!1),route}(),thisRoute=route.matches[route.matches.length-1];return thisRoute.route.id||invariant(!1),thisRoute.route.id}const alreadyWarned={};const logDeprecation=(flag,msg,link)=>function warnOnce(key,message){alreadyWarned[message]||(alreadyWarned[message]=!0,console.warn(message))}(0,"⚠️ React Router Future Flag Warning: "+msg+". You can use the `"+flag+"` future flag to opt-in early. For more information, see "+link+".");function logV6DeprecationWarnings(renderFuture,routerFuture){null!=renderFuture&&renderFuture.v7_startTransition||logDeprecation("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),null!=renderFuture&&renderFuture.v7_relativeSplatPath||routerFuture&&routerFuture.v7_relativeSplatPath||logDeprecation("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),routerFuture&&(routerFuture.v7_fetcherPersist||logDeprecation("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),routerFuture.v7_normalizeFormMethod||logDeprecation("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),routerFuture.v7_partialHydration||logDeprecation("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),routerFuture.v7_skipActionErrorRevalidation||logDeprecation("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}react_namespaceObject.startTransition;function dist_Router(_ref5){let{basename:basenameProp="/",children=null,location:locationProp,navigationType=router_Action.Pop,navigator,static:staticProp=!1,future}=_ref5;useInRouterContext()&&invariant(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react.useMemo((()=>({basename,navigator,static:staticProp,future:dist_extends({v7_relativeSplatPath:!1},future)})),[basename,future,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=router_parsePath(locationProp));let{pathname="/",search="",hash="",state=null,key="default"}=locationProp,locationContext=react.useMemo((()=>{let trailingPathname=router_stripBasename(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search,hash,state,key},navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react.createElement(NavigationContext.Provider,{value:navigationContext},react.createElement(LocationContext.Provider,{children,value:locationContext}))}new Promise((()=>{}));react.Component;function react_router_dom_dist_extends(){return react_router_dom_dist_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},react_router_dom_dist_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const _excluded=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_excluded2=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"];try{window.__reactRouterVersion="6"}catch(e){}const ViewTransitionContext=react.createContext({isTransitioning:!1});new Map;const dist_startTransitionImpl=react_namespaceObject.startTransition;react_dom_namespaceObject.flushSync,react_namespaceObject.useId;function BrowserRouter(_ref4){let{basename,children,future,window}=_ref4,historyRef=react.useRef();null==historyRef.current&&(historyRef.current=function router_createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname,search,hash}=window.location;return createLocation("",{pathname,search,hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:router_createPath(to)}),null,options)}({window,v5Compat:!0}));let history=historyRef.current,[state,setStateImpl]=react.useState({action:history.action,location:history.location}),{v7_startTransition}=future||{},setState=react.useCallback((newState=>{v7_startTransition&&dist_startTransitionImpl?dist_startTransitionImpl((()=>setStateImpl(newState))):setStateImpl(newState)}),[setStateImpl,v7_startTransition]);return react.useLayoutEffect((()=>history.listen(setState)),[history,setState]),react.useEffect((()=>logV6DeprecationWarnings(future)),[future]),react.createElement(dist_Router,{basename,children,location:state.location,navigationType:state.action,navigator:history,future})}const isBrowser="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,dist_ABSOLUTE_URL_REGEX=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Link=react.forwardRef((function LinkWithRef(_ref7,ref){let absoluteHref,{onClick,relative,reloadDocument,replace,state,target,to,preventScrollReset,viewTransition}=_ref7,rest=_objectWithoutPropertiesLoose(_ref7,_excluded),{basename}=react.useContext(NavigationContext),isExternal=!1;if("string"==typeof to&&dist_ABSOLUTE_URL_REGEX.test(to)&&(absoluteHref=to,isBrowser))try{let currentUrl=new URL(window.location.href),targetUrl=to.startsWith("//")?new URL(currentUrl.protocol+to):new URL(to),path=router_stripBasename(targetUrl.pathname,basename);targetUrl.origin===currentUrl.origin&&null!=path?to=path+targetUrl.search+targetUrl.hash:isExternal=!0}catch(e){}let href=function useHref(to,_temp){let{relative}=void 0===_temp?{}:_temp;useInRouterContext()||invariant(!1);let{basename,navigator}=react.useContext(NavigationContext),{hash,pathname,search}=dist_useResolvedPath(to,{relative}),joinedPathname=pathname;return"/"!==basename&&(joinedPathname="/"===pathname?basename:router_joinPaths([basename,pathname])),navigator.createHref({pathname:joinedPathname,search,hash})}(to,{relative}),internalOnClick=function useLinkClickHandler(to,_temp){let{target,replace:replaceProp,state,preventScrollReset,relative,viewTransition}=void 0===_temp?{}:_temp,navigate=dist_useNavigate(),location=dist_useLocation(),path=dist_useResolvedPath(to,{relative});return react.useCallback((event=>{if(function shouldProcessLinkClick(event,target){return!(0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event))}(event,target)){event.preventDefault();let replace=void 0!==replaceProp?replaceProp:router_createPath(location)===router_createPath(path);navigate(to,{replace,state,preventScrollReset,relative,viewTransition})}}),[location,navigate,path,replaceProp,state,target,to,preventScrollReset,relative,viewTransition])}(to,{replace,state,target,preventScrollReset,relative,viewTransition});return react.createElement("a",react_router_dom_dist_extends({},rest,{href:absoluteHref||href,onClick:isExternal||reloadDocument?onClick:function handleClick(event){onClick&&onClick(event),event.defaultPrevented||internalOnClick(event)},ref,target}))}));const NavLink=react.forwardRef((function NavLinkWithRef(_ref8,ref){let{"aria-current":ariaCurrentProp="page",caseSensitive=!1,className:classNameProp="",end=!1,style:styleProp,to,viewTransition,children}=_ref8,rest=_objectWithoutPropertiesLoose(_ref8,_excluded2),path=dist_useResolvedPath(to,{relative:rest.relative}),location=dist_useLocation(),routerState=react.useContext(DataRouterStateContext),{navigator,basename}=react.useContext(NavigationContext),isTransitioning=null!=routerState&&function useViewTransitionState(to,opts){void 0===opts&&(opts={});let vtContext=react.useContext(ViewTransitionContext);null==vtContext&&invariant(!1);let{basename}=dist_useDataRouterContext(dist_DataRouterHook.useViewTransitionState),path=dist_useResolvedPath(to,{relative:opts.relative});if(!vtContext.isTransitioning)return!1;let currentPath=router_stripBasename(vtContext.currentLocation.pathname,basename)||vtContext.currentLocation.pathname,nextPath=router_stripBasename(vtContext.nextLocation.pathname,basename)||vtContext.nextLocation.pathname;return null!=router_matchPath(path.pathname,nextPath)||null!=router_matchPath(path.pathname,currentPath)}(path)&&!0===viewTransition,toPathname=navigator.encodeLocation?navigator.encodeLocation(path).pathname:path.pathname,locationPathname=location.pathname,nextLocationPathname=routerState&&routerState.navigation&&routerState.navigation.location?routerState.navigation.location.pathname:null;caseSensitive||(locationPathname=locationPathname.toLowerCase(),nextLocationPathname=nextLocationPathname?nextLocationPathname.toLowerCase():null,toPathname=toPathname.toLowerCase()),nextLocationPathname&&basename&&(nextLocationPathname=router_stripBasename(nextLocationPathname,basename)||nextLocationPathname);const endSlashPosition="/"!==toPathname&&toPathname.endsWith("/")?toPathname.length-1:toPathname.length;let className,isActive=locationPathname===toPathname||!end&&locationPathname.startsWith(toPathname)&&"/"===locationPathname.charAt(endSlashPosition),isPending=null!=nextLocationPathname&&(nextLocationPathname===toPathname||!end&&nextLocationPathname.startsWith(toPathname)&&"/"===nextLocationPathname.charAt(toPathname.length)),renderProps={isActive,isPending,isTransitioning},ariaCurrent=isActive?ariaCurrentProp:void 0;className="function"==typeof classNameProp?classNameProp(renderProps):[classNameProp,isActive?"active":null,isPending?"pending":null,isTransitioning?"transitioning":null].filter(Boolean).join(" ");let style="function"==typeof styleProp?styleProp(renderProps):styleProp;return react.createElement(Link,react_router_dom_dist_extends({},rest,{"aria-current":ariaCurrent,className,ref,style,to,viewTransition}),"function"==typeof children?children(renderProps):children)}));var dist_DataRouterHook,dist_DataRouterStateHook;function dist_useDataRouterContext(hookName){let ctx=react.useContext(DataRouterContext);return ctx||invariant(!1),ctx}(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmit="useSubmit",DataRouterHook.UseSubmitFetcher="useSubmitFetcher",DataRouterHook.UseFetcher="useFetcher",DataRouterHook.useViewTransitionState="useViewTransitionState"})(dist_DataRouterHook||(dist_DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetcher="useFetcher",DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(dist_DataRouterStateHook||(dist_DataRouterStateHook={}))}}]);