(function(window){
window.AMapUI_DEBUG = false;
!function(global) {
    if (!global.AMap) throw new Error("请前置引入高德地图 JSAPI ，参见https://lbs.amap.com/api/jsapi-v2/guide/amap-ui/intro");
}(window);
var AMapUI;!function(){if(!AMapUI||!AMapUI.requirejs){AMapUI?require=AMapUI:AMapUI={};var requirejs,require,define;!function(global,setTimeout){function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){if(e){var r;for(r=0;r<e.length&&(!e[r]||!t(e[r],r,e));r+=1);}}function eachReverse(e,t){if(e){var r;for(r=e.length-1;r>-1&&(!e[r]||!t(e[r],r,e));r-=1);}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var r;for(r in e)if(hasProp(e,r)&&t(e[r],r))break}function mixin(e,t,r,n){return t&&eachProp(t,function(t,i){!r&&hasProp(e,i)||(!n||"object"!=typeof t||!t||isArray(t)||isFunction(t)||t instanceof RegExp?e[i]=t:(e[i]||(e[i]={}),mixin(e[i],t,r,n)))}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,r,n){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=n,r&&(i.originalError=r),i}function newContext(e){function t(e){var t,r;for(t=0;t<e.length;t++)if(r=e[t],"."===r)e.splice(t,1),t-=1;else if(".."===r){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}function r(e,r,n){var i,o,a,s,u,c,f,p,d,l,h,m,g=r&&r.split("/"),v=w.map,x=v&&v["*"];if(e&&(e=e.split("/"),f=e.length-1,w.nodeIdCompat&&jsSuffixRegExp.test(e[f])&&(e[f]=e[f].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&g&&(m=g.slice(0,g.length-1),e=m.concat(e)),t(e),e=e.join("/")),n&&v&&(g||x)){a=e.split("/");e:for(s=a.length;s>0;s-=1){if(c=a.slice(0,s).join("/"),g)for(u=g.length;u>0;u-=1)if(o=getOwn(v,g.slice(0,u).join("/")),o&&(o=getOwn(o,c))){p=o,d=s;break e}!l&&x&&getOwn(x,c)&&(l=getOwn(x,c),h=s)}!p&&l&&(p=l,d=h),p&&(a.splice(0,d,p),e=a.join("/"))}return i=getOwn(w.pkgs,e),i?i:e}function n(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===q.contextName)return t.parentNode.removeChild(t),!0})}function i(e){var t=getOwn(w.paths,e);if(t&&isArray(t)&&t.length>1)return t.shift(),q.require.undef(e),q.makeRequire(null,{skipMap:!0})([e]),!0}function o(e){var t,r=e?e.indexOf("!"):-1;return r>-1&&(t=e.substring(0,r),e=e.substring(r+1,e.length)),[t,e]}function a(e,t,n,i){var a,s,u,c,f=null,p=t?t.name:null,d=e,l=!0,h="";return e||(l=!1,e="_@r"+(C+=1)),c=o(e),f=c[0],e=c[1],f&&(f=r(f,p,i),s=getOwn(k,f)),e&&(f?h=s&&s.normalize?s.normalize(e,function(e){return r(e,p,i)}):e.indexOf("!")===-1?r(e,p,i):e:(h=r(e,p,i),c=o(h),f=c[0],h=c[1],n=!0,a=q.nameToUrl(h))),u=!f||s||n?"":"_unnormalized"+(T+=1),{prefix:f,name:h,parentMap:t,unnormalized:!!u,url:a,originalName:d,isDefine:l,id:(f?f+"!"+h:h)+u}}function s(e){var t=e.id,r=getOwn(M,t);return r||(r=M[t]=new q.Module(e)),r}function u(e,t,r){var n=e.id,i=getOwn(M,n);!hasProp(k,n)||i&&!i.defineEmitComplete?(i=s(e),i.error&&"error"===t?r(i.error):i.on(t,r)):"defined"===t&&r(k[n])}function c(e,t){var r=e.requireModules,n=!1;t?t(e):(each(r,function(t){var r=getOwn(M,t);r&&(r.error=e,r.events.error&&(n=!0,r.emit("error",e)))}),n||req.onError(e))}function f(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(q.defQueueMap[t]=!0),O.push(e)}),globalDefQueue=[])}function p(e){delete M[e],delete S[e]}function d(e,t,r){var n=e.map.id;e.error?e.emit("error",e.error):(t[n]=!0,each(e.depMaps,function(n,i){var o=n.id,a=getOwn(M,o);!a||e.depMatched[i]||r[o]||(getOwn(t,o)?(e.defineDep(i,k[o]),e.check()):d(a,t,r))}),r[n]=!0)}function l(){var e,t,r=1e3*w.waitSeconds,o=r&&q.startTime+r<(new Date).getTime(),a=[],s=[],u=!1,f=!0;if(!x){if(x=!0,eachProp(S,function(e){var r=e.map,c=r.id;if(e.enabled&&(r.isDefine||s.push(e),!e.error))if(!e.inited&&o)i(c)?(t=!0,u=!0):(a.push(c),n(c));else if(!e.inited&&e.fetched&&r.isDefine&&(u=!0,!r.prefix))return f=!1}),o&&a.length)return e=makeError("timeout","Load timeout for modules: "+a,null,a),e.contextName=q.contextName,c(e);f&&each(s,function(e){d(e,{},{})}),o&&!t||!u||!isBrowser&&!isWebWorker||E||(E=setTimeout(function(){E=0,l()},50)),x=!1}}function h(e){hasProp(k,e[0])||s(a(e[0],null,!0)).init(e[1],e[2])}function m(e,t,r,n){e.detachEvent&&!isOpera?n&&e.detachEvent(n,t):e.removeEventListener(r,t,!1)}function g(e){var t=e.currentTarget||e.srcElement;return m(t,q.onScriptLoad,"load","onreadystatechange"),m(t,q.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function v(){var e;for(f();O.length;){if(e=O.shift(),null===e[0])return c(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));h(e)}q.defQueueMap={}}var x,b,q,y,E,w={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},M={},S={},A={},O=[],k={},j={},I={},C=1,T=1;return y={require:function(e){return e.require?e.require:e.require=q.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?k[e.map.id]=e.exports:e.exports=k[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(w.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},b=function(e){this.events=getOwn(A,e.id)||{},this.map=e,this.shim=getOwn(w.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},b.prototype={init:function(e,t,r,n){n=n||{},this.inited||(this.factory=t,r?this.on("error",r):this.events.error&&(r=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=r,this.inited=!0,this.ignore=n.ignore,n.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,q.startTime=(new Date).getTime();var e=this.map;return this.shim?void q.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()})):e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;j[e]||(j[e]=!0,q.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var e,t,r=this.map.id,n=this.depExports,i=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{i=q.execCb(r,o,n,i)}catch(t){e=t}else i=q.execCb(r,o,n,i);if(this.map.isDefine&&void 0===i&&(t=this.module,t?i=t.exports:this.usingExports&&(i=this.exports)),e)return e.requireMap=this.map,e.requireModules=this.map.isDefine?[this.map.id]:null,e.requireType=this.map.isDefine?"define":"require",c(this.error=e)}else i=o;if(this.exports=i,this.map.isDefine&&!this.ignore&&(k[r]=i,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(q,this.map,a)}p(r),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(q.defQueueMap,r)||this.fetch()}},callPlugin:function(){var e=this.map,t=e.id,n=a(e.prefix);this.depMaps.push(n),u(n,"defined",bind(this,function(n){var i,o,f,d=getOwn(I,this.map.id),l=this.map.name,h=this.map.parentMap?this.map.parentMap.name:null,m=q.makeRequire(e.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(n.normalize&&(l=n.normalize(l,function(e){return r(e,h,!0)})||""),o=a(e.prefix+"!"+l,this.map.parentMap),u(o,"defined",bind(this,function(e){this.map.normalizedMap=o,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),f=getOwn(M,o.id),void(f&&(this.depMaps.push(o),this.events.error&&f.on("error",bind(this,function(e){this.emit("error",e)})),f.enable()))):d?(this.map.url=q.nameToUrl(d),void this.load()):(i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(M,function(e){0===e.map.id.indexOf(t+"_unnormalized")&&p(e.map.id)}),c(e)}),i.fromText=bind(this,function(r,n){var o=e.name,u=a(o),f=useInteractive;n&&(r=n),f&&(useInteractive=!1),s(u),hasProp(w.config,t)&&(w.config[o]=w.config[t]);try{req.exec(r)}catch(e){return c(makeError("fromtexteval","fromText eval for "+t+" failed: "+e,e,[t]))}f&&(useInteractive=!0),this.depMaps.push(u),q.completeLoad(o),m([o],i)}),void n.load(e.name,m,i,w))})),q.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){S[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var r,n,i;if("string"==typeof e){if(e=a(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,i=getOwn(y,e.id))return void(this.depExports[t]=i(this));this.depCount+=1,u(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?u(e,"error",bind(this,this.errback)):this.events.error&&u(e,"error",bind(this,function(e){this.emit("error",e)}))}r=e.id,n=M[r],hasProp(y,r)||!n||n.enabled||q.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(M,e.id);t&&!t.enabled&&q.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var r=this.events[e];r||(r=this.events[e]=[]),r.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},q={config:w,contextName:e,registry:M,defined:k,urlFetched:j,defQueue:O,defQueueMap:{},Module:b,makeModuleMap:a,nextTick:req.nextTick,onError:c,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var t=e.urlArgs;e.urlArgs=function(e,r){return(r.indexOf("?")===-1?"?":"&")+t}}var r=w.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(w[t]||(w[t]={}),mixin(w[t],e,!0,!0)):w[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(I[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=q.makeShimExports(e)),r[t]=e}),w.shim=r),e.packages&&each(e.packages,function(e){var t,r;e="string"==typeof e?{name:e}:e,r=e.name,t=e.location,t&&(w.paths[r]=e.location),w.pkgs[r]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(M,function(e,t){e.inited||e.map.unnormalized||(e.map=a(t,null,!0))}),(e.deps||e.callback)&&q.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,i){function o(r,n,u){var f,p,d;return i.enableBuildCallback&&n&&isFunction(n)&&(n.__requireJsBuild=!0),"string"==typeof r?isFunction(n)?c(makeError("requireargs","Invalid require call"),u):t&&hasProp(y,r)?y[r](M[t.id]):req.get?req.get(q,r,t,o):(p=a(r,t,!1,!0),f=p.id,hasProp(k,f)?k[f]:c(makeError("notloaded",'Module name "'+f+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(v(),q.nextTick(function(){v(),d=s(a(null,t)),d.skipMap=i.skipMap,d.init(r,n,u,{enabled:!0}),l()}),o)}return i=i||{},mixin(o,{isBrowser:isBrowser,toUrl:function(e){var n,i=e.lastIndexOf("."),o=e.split("/")[0],a="."===o||".."===o;return i!==-1&&(!a||i>1)&&(n=e.substring(i,e.length),e=e.substring(0,i)),q.nameToUrl(r(e,t&&t.id,!0),n,!0)},defined:function(e){return hasProp(k,a(e,t,!1,!0).id)},specified:function(e){return e=a(e,t,!1,!0).id,hasProp(k,e)||hasProp(M,e)}}),t||(o.undef=function(e){f();var r=a(e,t,!0),i=getOwn(M,e);i.undefed=!0,n(e),delete k[e],delete j[r.url],delete A[e],eachReverse(O,function(t,r){t[0]===e&&O.splice(r,1)}),delete q.defQueueMap[e],i&&(i.events.defined&&(A[e]=i.events),p(e))}),o},enable:function(e){var t=getOwn(M,e.id);t&&s(e).enable()},completeLoad:function(e){var t,r,n,o=getOwn(w.shim,e)||{},a=o.exports;for(f();O.length;){if(r=O.shift(),null===r[0]){if(r[0]=e,t)break;t=!0}else r[0]===e&&(t=!0);h(r)}if(q.defQueueMap={},n=getOwn(M,e),!t&&!hasProp(k,e)&&n&&!n.inited){if(!(!w.enforceDefine||a&&getGlobal(a)))return i(e)?void 0:c(makeError("nodefine","No define call for "+e,null,[e]));h([e,o.deps||[],o.exportsFn])}l()},nameToUrl:function(e,t,r){var n,i,o,a,s,u,c,f=getOwn(w.pkgs,e);if(f&&(e=f),c=getOwn(I,e))return q.nameToUrl(c,t,r);if(req.jsExtRegExp.test(e))s=e+(t||"");else{for(n=w.paths,i=e.split("/"),o=i.length;o>0;o-=1)if(a=i.slice(0,o).join("/"),u=getOwn(n,a)){isArray(u)&&(u=u[0]),i.splice(0,o,u);break}s=i.join("/"),s+=t||(/^data\:|^blob\:|\?/.test(s)||r?"":".js"),s=("/"===s.charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":w.baseUrl)+s}return w.urlArgs&&!/^blob\:/.test(s)?s+w.urlArgs(e,s):s},load:function(e,t){req.load(q,e,t)},execCb:function(e,t,r,n){return t.apply(n,r)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=g(e);q.completeLoad(t.id)}},onScriptError:function(e){var t=g(e);if(!i(t.id)){var r=[];return eachProp(M,function(e,n){0!==n.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===t.id)return r.push(n),!0})}),c(makeError("scripterror",'Script error for "'+t.id+(r.length?'", needed by: '+r.join(", "):'"'),e,[t.id]))}}},q.require=q.makeRequire(),q}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.2",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,r,n){var i,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=r,r=n):e=[]),o&&o.context&&(a=o.context),i=getOwn(contexts,a),i||(i=contexts[a]=req.s.newContext(a)),o&&i.configure(o),i.require(e,t,r)},req.config=function(e){return req(e)},req.nextTick="undefined"!=typeof setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,r){var n=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return n.type=e.scriptType||"text/javascript",n.charset="utf-8",n.async=!0,n},req.load=function(e,t,r){var n,i=e&&e.config||{};if(isBrowser)return n=req.createNode(i,t,r),n.setAttribute("data-requirecontext",e.contextName),n.setAttribute("data-requiremodule",t),!n.attachEvent||n.attachEvent.toString&&n.attachEvent.toString().indexOf("[native code")<0||isOpera?(n.addEventListener("load",e.onScriptLoad,!1),n.addEventListener("error",e.onScriptError,!1)):(useInteractive=!0,n.attachEvent("onreadystatechange",e.onScriptLoad)),n.src=r,i.onNodeCreated&&i.onNodeCreated(n,i,t,r),currentlyAddingScript=n,baseElement?head.insertBefore(n,baseElement):head.appendChild(n),currentlyAddingScript=null,n;if(isWebWorker)try{setTimeout(function(){},0),importScripts(r),e.completeLoad(t)}catch(n){e.onError(makeError("importscripts","importScripts failed for "+t+" at "+r,n,[t]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||mainScript.indexOf("!")!==-1||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,t,r){var n,i;"string"!=typeof e&&(r=t,t=e,e=null),isArray(t)||(r=t,t=null),!t&&isFunction(r)&&(t=[],r.length&&(r.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,r){t.push(r)}),t=(1===r.length?["require"]:["require","exports","module"]).concat(t))),useInteractive&&(n=currentlyAddingScript||getInteractiveScript(),n&&(e||(e=n.getAttribute("data-requiremodule")),i=contexts[n.getAttribute("data-requirecontext")])),i?(i.defQueue.push([e,t,r]),i.defQueueMap[e]=!0):globalDefQueue.push([e,t,r])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this,"undefined"==typeof setTimeout?void 0:setTimeout),AMapUI.requirejs=requirejs,AMapUI.require=require,AMapUI.define=define}}(),AMapUI.define("polyfill/require/require",function(){}),AMapUI.define("polyfill/require/require-css/css",[],function(){if("undefined"==typeof window)return{load:function(e,t,r){r()}};var e=document.getElementsByTagName("head")[0],t=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,r=!1,n=!0;t[1]||t[7]?r=parseInt(t[1])<6||parseInt(t[7])<=9:t[2]||t[8]?n=!1:t[4]&&(r=parseInt(t[4])<18);var i={};i.pluginBuilder="./css-builder";var o,a,s,u=function(){o=document.createElement("style"),e.appendChild(o),a=o.styleSheet||o.sheet},c=0,f=[],p=function(e){a.addImport(e),o.onload=function(){d()},c++,31==c&&(u(),c=0)},d=function(){s();var e=f.shift();return e?(s=e[1],void p(e[0])):void(s=null)},l=function(e,t){if(a&&a.addImport||u(),a&&a.addImport)s?f.push([e,t]):(p(e),s=t);else{o.textContent='@import "'+e+'";';var r=setInterval(function(){try{o.sheet.cssRules,clearInterval(r),t()}catch(e){}},10)}},h=function(t,r){var i=document.createElement("link");if(i.type="text/css",i.rel="stylesheet",n)i.onload=function(){i.onload=function(){},setTimeout(r,7)};else var o=setInterval(function(){for(var e=0;e<document.styleSheets.length;e++){var t=document.styleSheets[e];if(t.href==i.href)return clearInterval(o),r()}},10);i.href=t,e.appendChild(i)};return i.normalize=function(e,t){return".css"==e.substr(e.length-4,4)&&(e=e.substr(0,e.length-4)),t(e)},i.load=function(e,t,n,i){(r?l:h)(t.toUrl(e+".css"),n)},i}),AMapUI.define("polyfill/require/require-css/normalize",[],function(){function e(e,n,i){if(e.match(s)||e.match(a))return e;e=o(e);var u=i.match(a),c=n.match(a);return!c||u&&u[1]==c[1]&&u[2]==c[2]?r(t(e,n),i):t(e,n)}function t(e,t){if("./"==e.substr(0,2)&&(e=e.substr(2)),e.match(s)||e.match(a))return e;var r=t.split("/"),n=e.split("/");for(r.pop();curPart=n.shift();)".."==curPart?r.pop():r.push(curPart);return r.join("/")}function r(e,t){var r=t.split("/");for(r.pop(),t=r.join("/")+"/",i=0;t.substr(i,1)==e.substr(i,1);)i++;for(;"/"!=t.substr(i,1);)i--;t=t.substr(i+1),e=e.substr(i+1),r=t.split("/");var n=e.split("/");for(out="";r.shift();)out+="../";for(;curPart=n.shift();)out+=curPart+"/";return out.substr(0,out.length-1)}var n=/([^:])\/+/g,o=function(e){return e.replace(n,"$1/")},a=/[^\:\/]*:\/\/([^\/])*/,s=/^(\/|data:)/,u=function(r,n,i,a){n=o(n),i=o(i);for(var s,u,r,c=/@import\s*("([^"]*)"|'([^']*)')|url\s*\((?!#)\s*(\s*"([^"]*)"|'([^']*)'|[^\)]*\s*)\s*\)/gi;s=c.exec(r);){u=s[3]||s[2]||s[5]||s[6]||s[4];var f;f=e(u,n,i),f!==u&&a&&(f=t(f,a));var p=s[5]||s[6]?1:0;r=r.substr(0,c.lastIndex-u.length-p-1)+f+r.substr(c.lastIndex-p-1),c.lastIndex=c.lastIndex+(f.length-u.length)}return r};return u.convertURIBase=e,u.absoluteURI=t,u.relativeURI=r,u}),AMapUI.define("polyfill/require/require-text/text",["module"],function(e){"use strict";function t(e,t){return void 0===e||""===e?t:e}function r(e,r,n,i){if(r===i)return!0;if(e===n){if("http"===e)return t(r,"80")===t(i,"80");if("https"===e)return t(r,"443")===t(i,"443")}return!1}var n,i,o,a,s,u=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],c=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,f=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,p="undefined"!=typeof location&&location.href,d=p&&location.protocol&&location.protocol.replace(/\:/,""),l=p&&location.hostname,h=p&&(location.port||void 0),m={},g=e.config&&e.config()||{};return n={version:"2.0.15",strip:function(e){if(e){e=e.replace(c,"");var t=e.match(f);t&&(e=t[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:g.createXhr||function(){var e,t,r;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(t=0;t<3;t+=1){r=u[t];try{e=new ActiveXObject(r)}catch(e){}if(e){u=[r];break}}return e},parseName:function(e){var t,r,n,i=!1,o=e.lastIndexOf("."),a=0===e.indexOf("./")||0===e.indexOf("../");return o!==-1&&(!a||o>1)?(t=e.substring(0,o),r=e.substring(o+1)):t=e,n=r||t,o=n.indexOf("!"),o!==-1&&(i="strip"===n.substring(o+1),n=n.substring(0,o),r?r=n:t=n),{moduleName:t,ext:r,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,t,i,o){var a,s,u,c=n.xdRegExp.exec(e);return!c||(a=c[2],s=c[3],s=s.split(":"),u=s[1],s=s[0],(!a||a===t)&&(!s||s.toLowerCase()===i.toLowerCase())&&(!u&&!s||r(a,u,t,o)))},finishLoad:function(e,t,r,i){r=t?n.strip(r):r,g.isBuild&&(m[e]=r),i(r)},load:function(e,t,r,i){if(i&&i.isBuild&&!i.inlineText)return void r();g.isBuild=i&&i.isBuild;var o=n.parseName(e),a=o.moduleName+(o.ext?"."+o.ext:""),s=t.toUrl(a),u=g.useXhr||n.useXhr;return 0===s.indexOf("empty:")?void r():void(!p||u(s,d,l,h)?n.get(s,function(t){n.finishLoad(e,o.strip,t,r)},function(e){r.error&&r.error(e)}):t([a],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,r)}))},write:function(e,t,r,i){if(m.hasOwnProperty(t)){var o=n.jsEscape(m[t]);r.asModule(e+"!"+t,"define(function () { return '"+o+"';});\n")}},writeFile:function(e,t,r,i,o){var a=n.parseName(t),s=a.ext?"."+a.ext:"",u=a.moduleName+s,c=r.toUrl(a.moduleName+s)+".js";n.load(u,r,function(t){var r=function(e){return i(c,e)};r.asModule=function(e,t){return i.asModule(e,c,t)},n.write(e,u,r,o)},o)}},"node"===g.env||!g.env&&"undefined"!=typeof process&&process.versions&&process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]?(i=require.nodeRequire("fs"),n.get=function(e,t,r){try{var n=i.readFileSync(e,"utf8");"\ufeff"===n[0]&&(n=n.substring(1)),t(n)}catch(e){r&&r(e)}}):"xhr"===g.env||!g.env&&n.createXhr()?n.get=function(e,t,r,i){var o,a=n.createXhr();if(a.open("GET",e,!0),i)for(o in i)i.hasOwnProperty(o)&&a.setRequestHeader(o.toLowerCase(),i[o]);g.onXhr&&g.onXhr(a,e),a.onreadystatechange=function(n){var i,o;4===a.readyState&&(i=a.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=a,r&&r(o)):t(a.responseText),g.onXhrComplete&&g.onXhrComplete(a,e))},a.send(null)}:"rhino"===g.env||!g.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java?n.get=function(e,t){var r,n,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),u="";try{for(r=new java.lang.StringBuffer,n=s.readLine(),n&&n.length()&&65279===n.charAt(0)&&(n=n.substring(1)),null!==n&&r.append(n);null!==(n=s.readLine());)r.append(a),r.append(n);u=String(r.toString())}finally{s.close()}t(u)}:("xpconnect"===g.env||!g.env&&"undefined"!=typeof Components&&Components.classes&&Components.interfaces)&&(o=Components.classes,a=Components.interfaces,Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),s="@mozilla.org/windows-registry-key;1"in o,n.get=function(e,t){var r,n,i,u={};s&&(e=e.replace(/\//g,"\\")),i=new FileUtils.File(e);try{r=o["@mozilla.org/network/file-input-stream;1"].createInstance(a.nsIFileInputStream),r.init(i,1,0,!1),n=o["@mozilla.org/intl/converter-input-stream;1"].createInstance(a.nsIConverterInputStream),n.init(r,"utf-8",r.available(),a.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),n.readString(r.available(),u),n.close(),r.close(),t(u.value)}catch(e){throw new Error((i&&i.path||"")+": "+e)}}),n}),AMapUI.define("polyfill/require/require-json/json",["text"],function(text){function cacheBust(e){return e=e.replace(CACHE_BUST_FLAG,""),e+=e.indexOf("?")<0?"?":"&",e+CACHE_BUST_QUERY_PARAM+"="+Math.round(2147483647*Math.random())}var CACHE_BUST_QUERY_PARAM="bust",CACHE_BUST_FLAG="!bust",jsonParse="undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse:function(val){return eval("("+val+")")},buildMap={};return{load:function(e,t,r,n){n.isBuild&&(n.inlineJSON===!1||e.indexOf(CACHE_BUST_QUERY_PARAM+"=")!==-1)||0===t.toUrl(e).indexOf("empty:")?r(null):text.get(t.toUrl(e),function(t){var i;if(n.isBuild)buildMap[e]=t,r(t);else{try{i=jsonParse(t)}catch(e){r.error(e)}r(i)}},r.error,{accept:"application/json"})},normalize:function(e,t){return e.indexOf(CACHE_BUST_FLAG)!==-1&&(e=cacheBust(e)),t(e)},write:function(e,t,r){if(t in buildMap){var n=buildMap[t];r('define("'+e+"!"+t+'", function(){ return '+n+";});\n")}}}}),AMapUI.define("_auto/req-lib",function(){});
AMapUI.define("lib/utils", [], function() {
    function setLogger(logger) {
        logger.debug || (logger.debug = logger.info);
        utils.logger = utils.log = logger;
    }
    var utils, defaultLogger = console, emptyfunc = function() {}, slientLogger = {
        log: emptyfunc,
        error: emptyfunc,
        warn: emptyfunc,
        info: emptyfunc,
        debug: emptyfunc,
        trace: emptyfunc
    };
    utils = {
        slientLogger: slientLogger,
        setLogger: setLogger,
        mergeArray: function(target, source) {
            if (source.length < 5e4) target.push.apply(target, source); else for (var i = 0, len = source.length; i < len; i += 1) target.push(source[i]);
        },
        setDebugMode: function(on) {
            setLogger(on ? defaultLogger : slientLogger);
        },
        now: Date.now || function() {
            return new Date().getTime();
        },
        bind: function(fn, thisArg) {
            return fn.bind ? fn.bind(thisArg) : function() {
                return fn.apply(thisArg, arguments);
            };
        },
        domReady: function(callback) {
            /complete|loaded|interactive/.test(document.readyState) ? callback() : document.addEventListener("DOMContentLoaded", function() {
                callback();
            }, !1);
        },
        forEach: function(array, callback, thisArg) {
            if (array.forEach) return array.forEach(callback, thisArg);
            for (var i = 0, len = array.length; i < len; i++) callback.call(thisArg, array[i], i);
        },
        keys: function(obj) {
            if (Object.keys) return Object.keys(obj);
            var keys = [];
            for (var k in obj) obj.hasOwnProperty(k) && keys.push(k);
            return keys;
        },
        map: function(array, callback, thisArg) {
            if (array.map) return array.map(callback, thisArg);
            for (var newArr = [], i = 0, len = array.length; i < len; i++) newArr[i] = callback.call(thisArg, array[i], i);
            return newArr;
        },
        merge: function(array1, array2) {
            if (array2.length < 5e4) Array.prototype.push.apply(array1, array2); else for (var ii = 0, iilen = array2.length; ii < iilen; ii += 1) array1.push(array2[ii]);
        },
        arrayIndexOf: function(array, searchElement, fromIndex) {
            if (array.indexOf) return array.indexOf(searchElement, fromIndex);
            var k, o = array, len = o.length >>> 0;
            if (0 === len) return -1;
            var n = 0 | fromIndex;
            if (n >= len) return -1;
            k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
            for (;k < len; ) {
                if (k in o && o[k] === searchElement) return k;
                k++;
            }
            return -1;
        },
        extend: function(dst) {
            dst || (dst = {});
            return utils.extendObjs(dst, Array.prototype.slice.call(arguments, 1));
        },
        nestExtendObjs: function(dst, objs) {
            dst || (dst = {});
            for (var i = 0, len = objs.length; i < len; i++) {
                var source = objs[i];
                if (source) for (var prop in source) source.hasOwnProperty(prop) && (utils.isObject(dst[prop]) && utils.isObject(source[prop]) ? dst[prop] = utils.nestExtendObjs({}, [ dst[prop], source[prop] ]) : dst[prop] = source[prop]);
            }
            return dst;
        },
        extendObjs: function(dst, objs) {
            dst || (dst = {});
            for (var i = 0, len = objs.length; i < len; i++) {
                var source = objs[i];
                if (source) for (var prop in source) source.hasOwnProperty(prop) && (dst[prop] = source[prop]);
            }
            return dst;
        },
        subset: function(props) {
            var sobj = {};
            if (!props || !props.length) return sobj;
            this.isArray(props) || (props = [ props ]);
            utils.forEach(Array.prototype.slice.call(arguments, 1), function(source) {
                if (source) for (var i = 0, len = props.length; i < len; i++) source.hasOwnProperty(props[i]) && (sobj[props[i]] = source[props[i]]);
            });
            return sobj;
        },
        isArray: function(obj) {
            return Array.isArray ? Array.isArray(obj) : "[object Array]" === Object.prototype.toString.call(obj);
        },
        isObject: function(obj) {
            return "[object Object]" === Object.prototype.toString.call(obj);
        },
        isFunction: function(obj) {
            return "[object Function]" === Object.prototype.toString.call(obj);
        },
        isNumber: function(obj) {
            return "[object Number]" === Object.prototype.toString.call(obj);
        },
        isString: function(obj) {
            return "[object String]" === Object.prototype.toString.call(obj);
        },
        isHTMLElement: function(n) {
            return window["HTMLElement"] || window["Element"] ? n instanceof (window["HTMLElement"] || window["Element"]) : n && "object" == typeof n && 1 === n.nodeType && "string" == typeof n.nodeName;
        },
        isSVGElement: function(n) {
            return window["SVGElement"] && n instanceof window["SVGElement"];
        },
        isDefined: function(v) {
            return "undefined" != typeof v;
        },
        random: function(length) {
            var str = "", chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz", clen = chars.length;
            length || (length = 6);
            for (var i = 0; i < length; i++) str += chars.charAt(this.randomInt(0, clen - 1));
            return str;
        },
        randomInt: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        inherit: function(child, parent) {
            function Ctor() {
                this.constructor = child;
            }
            for (var key in parent) parent.hasOwnProperty(key) && (child[key] = parent[key]);
            Ctor.prototype = parent.prototype;
            child.prototype = new Ctor();
            child.__super__ = parent.prototype;
            return child;
        },
        trim: function(s) {
            return s ? s.trim ? s.trim() : s.replace(/^\s+|\s+$/gm, "") : "";
        },
        trigger: function(el, evt, detail) {
            if (el) {
                detail = detail || {};
                var e, opt = {
                    bubbles: !0,
                    cancelable: !0,
                    detail: detail
                };
                if ("undefined" != typeof CustomEvent) {
                    e = new CustomEvent(evt, opt);
                    el.dispatchEvent(e);
                } else try {
                    e = document.createEvent("CustomEvent");
                    e.initCustomEvent(evt, !0, !0, detail);
                    el.dispatchEvent(e);
                } catch (exp) {
                    this.log.error(exp);
                }
                return !0;
            }
            this.log.error("emply element passed in");
        },
        nextTick: function(f) {
            ("object" == typeof process && process.nextTick ? process.nextTick : function(task) {
                setTimeout(task, 0);
            })(f);
        },
        removeFromArray: function(arr, val) {
            var index = arr.indexOf(val);
            index > -1 && arr.splice(index, 1);
            return index;
        },
        debounce: function(func, wait, immediate) {
            var timeout, args, context, timestamp, result, later = function() {
                var last = utils.now() - timestamp;
                if (last < wait && last >= 0) timeout = setTimeout(later, wait - last); else {
                    timeout = null;
                    if (!immediate) {
                        result = func.apply(context, args);
                        timeout || (context = args = null);
                    }
                }
            };
            return function() {
                context = this;
                args = arguments;
                timestamp = utils.now();
                var callNow = immediate && !timeout;
                timeout || (timeout = setTimeout(later, wait));
                if (callNow) {
                    result = func.apply(context, args);
                    context = args = null;
                }
                return result;
            };
        },
        throttle: function(func, wait, options) {
            var context, args, result, timeout = null, previous = 0;
            options || (options = {});
            var later = function() {
                previous = options.leading === !1 ? 0 : utils.now();
                timeout = null;
                result = func.apply(context, args);
                timeout || (context = args = null);
            };
            return function() {
                var now = utils.now();
                previous || options.leading !== !1 || (previous = now);
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    previous = now;
                    result = func.apply(context, args);
                    timeout || (context = args = null);
                } else timeout || options.trailing === !1 || (timeout = setTimeout(later, remaining));
                return result;
            };
        },
        ucfirst: function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        escapeHtml: function(text) {
            var map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            };
            return (text + "").replace(/[&<>"']/g, function(m) {
                return map[m];
            });
        }
    };
    utils.setDebugMode(!1);
    return utils;
});

AMapUI.define("lib/detect-global", [ "./utils" ], function(utils) {
    var global = this;
    return {
        load: function(name, req, onLoad, config) {
            for (var parts = name.split("|"), gVars = parts[0].split(","), finalMod = parts[1], i = 0, len = gVars.length; i < len; i++) {
                var vname = utils.trim(gVars[i]);
                if (global[vname]) {
                    onLoad(global[vname]);
                    return;
                }
            }
            if (!finalMod) throw new Error("can't find: " + name);
            req([ finalMod ], function(value) {
                onLoad(value);
            });
        }
    };
});

AMapUI.define("lib/$", [ "lib/detect-global!jQuery,Zepto|" + (AMap.UA.mobile ? "zepto" : "jquery") ], function($) {
    return $;
});

AMapUI.define("lib/conf", [ "module" ], function(mod) {
    return mod.config();
});

AMapUI.define("lib/dom.utils", [], function() {
    var domUtils = {
        isCanvasSupported: function() {
            var elem = document.createElement("canvas");
            return !!(elem && elem.getContext && elem.getContext("2d"));
        },
        toggleClass: function(el, name, add) {
            add ? domUtils.addClass(el, name) : domUtils.removeClass(el, name);
        },
        addClass: function(el, name) {
            el && name && (domUtils.hasClassName(el, name) || (el.className += (el.className ? " " : "") + name));
        },
        removeClass: function(el, name) {
            function replaceFn(w, match) {
                return match === name ? "" : w;
            }
            el && name && (el.className = el.className.replace(/(\S+)\s*/g, replaceFn).replace(/(^\s+|\s+$)/, ""));
        },
        hasClassName: function(ele, className) {
            var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
            return testClass.test(ele.className);
        },
        getElementsByClassName: function(className, tag, parent) {
            tag = tag || "*";
            parent = parent || document;
            if (parent.getElementsByClassName) return parent.getElementsByClassName(className);
            for (var current, elements = parent.getElementsByTagName(tag), returnElements = [], i = 0; i < elements.length; i++) {
                current = elements[i];
                domUtils.hasClassName(current, className) && returnElements.push(current);
            }
            return returnElements;
        }
    };
    return domUtils;
});

AMapUI.define("lib/event", [ "lib/utils" ], function(utils) {
    "use strict";
    function Event() {
        this.__evHash = {};
    }
    utils.extend(Event.prototype, {
        on: function(ev, listener, priority) {
            if (this.__multiCall(ev, listener, this.on)) return this;
            if (!ev) return this;
            var evHash = this.__evHash;
            evHash[ev] || (evHash[ev] = []);
            var list = evHash[ev], index = this.__index(list, listener);
            if (index < 0) {
                "number" != typeof priority && (priority = 10);
                for (var inps = list.length, i = 0, len = list.length; i < len; i++) if (priority > list[i].priority) {
                    inps = i;
                    break;
                }
                list.splice(inps, 0, {
                    listener: listener,
                    priority: priority
                });
            }
            return this;
        },
        once: function(ev, listener, priority) {
            function oncefunc() {
                self.__callListenser(listener, arguments);
                self.off(ev, oncefunc);
            }
            if (this.__multiCall(ev, listener, this.once)) return this;
            var self = this;
            this.on(ev, oncefunc, priority);
            return this;
        },
        offAll: function() {
            for (var ev in this.__evHash) this.off(ev);
            this.__evHash = {};
            return this;
        },
        off: function(ev, listener) {
            if (this.__multiCall(ev, listener, this.off)) return this;
            var evHash = this.__evHash;
            if (evHash[ev]) {
                var list = evHash[ev];
                if ("undefined" == typeof listener) {
                    var c = list.length;
                    list.length = 0;
                    return c;
                }
                var index = this.__index(list, listener);
                if (index >= 0) {
                    list.splice(index, 1);
                    return 1;
                }
                return 0;
            }
        },
        listenerLength: function(ev) {
            var evHash = this.__evHash, list = evHash[ev];
            return list ? list.length : 0;
        },
        emit: function(ev) {
            var args, list, evHash = this.__evHash, count = 0;
            list = evHash[ev];
            if (list && list.length) {
                args = Array.prototype.slice.call(arguments, 1);
                count += this.__callListenerList(list, args);
            }
            list = evHash["*"];
            if (list && list.length) {
                args = Array.prototype.slice.call(arguments);
                count += this.__callListenerList(list, args);
            }
            return count;
        },
        trigger: function(ev) {
            var args = Array.prototype.slice.call(arguments, 0);
            args.splice(1, 0, {
                type: ev,
                target: this
            });
            this.emit.apply(this, args);
        },
        triggerWithOriginalEvent: function(ev, originalEvent) {
            var args = Array.prototype.slice.call(arguments, 0);
            args[1] = {
                type: ev,
                target: originalEvent ? originalEvent.target : this,
                originalEvent: originalEvent
            };
            this.emit.apply(this, args);
        },
        onDestroy: function(cb, priority) {
            this.on("__destroy", cb, priority);
            return this;
        },
        destroy: function() {
            if (!this.__destroying) {
                this.__destroying = 1;
                this.emit("__destroy", this);
                this.offAll();
                return this;
            }
        },
        __multiCall: function(ev, listener, func) {
            if (!ev) return !0;
            if (utils.isObject(ev) && "undefined" == typeof listener) {
                for (var k in ev) func.call(this, k, ev[k]);
                return !0;
            }
            var evs;
            utils.isArray(ev) ? evs = ev : "string" == typeof ev && (evs = ev.split(/[\s,]+/));
            if (evs && evs.length > 1) {
                for (var i = 0, len = evs.length; i < len; i++) evs[i] && func.call(this, evs[i], listener);
                return !0;
            }
            return !1;
        },
        __index: function(list, listener) {
            for (var index = -1, i = 0, len = list.length; i < len; i++) {
                var ele = list[i];
                if (ele.listener === listener) {
                    index = i;
                    break;
                }
            }
            return index;
        },
        __callListenser: function(listener, args) {
            var func = null, contxt = null;
            if ("function" == typeof listener) {
                func = listener;
                contxt = this;
            } else if (2 == listener.length) {
                func = listener[1];
                contxt = listener[0];
            }
            return func ? [ 1, func.apply(contxt, args) ] : [ 0, void 0 ];
        },
        __callListenerList: function(list, args) {
            if (!list || !list.length) return 0;
            list = [].concat(list);
            for (var cres, count = 0, i = 0, len = list.length; i < len; i++) {
                cres = this.__callListenser(list[i].listener, args);
                count += cres[0];
                if (cres[1] === !1) break;
            }
            return count;
        }
    });
    return Event;
});

AMapUI.define("lib/underscore-tpl", [], function() {
    function escapeHtml(text) {
        var map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        };
        return (text + "").replace(/[&<>"']/g, function(m) {
            return map[m];
        });
    }
    function tmpl(text, data) {
        var settings = templateSettings, matcher = new RegExp([ (settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source ].join("|") + "|$", "g"), index = 0, source = "__p+='";
        text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
            source += text.slice(index, offset).replace(escapeRegExp, escapeChar);
            index = offset + match.length;
            escape ? source += "'+\n((__t=(" + escape + "))==null?'':" + innerContextVarName + ".escape(__t))+\n'" : interpolate ? source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'" : evaluate && (source += "';\n" + evaluate + "\n__p+='");
            return match;
        });
        source += "';\n";
        settings.variable || (source = "with(obj||{}){\n" + source + "}\n");
        source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + source + "return __p;\n";
        var render;
        try {
            render = new Function(settings.variable || "obj", innerContextVarName, source);
        } catch (e) {
            e.source = source;
            throw e;
        }
        var template = function(data) {
            return render.call(this, data, {
                escape: escapeHtml,
                template: tmpl
            });
        }, argument = settings.variable || "obj";
        template.source = "function(" + argument + "){\n" + source + "}";
        return data ? template(data) : template;
    }
    var templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    }, noMatch = /(.)^/, escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, escapeRegExp = /\\|'|\r|\n|\u2028|\u2029/g, escapeChar = function(match) {
        return "\\" + escapes[match];
    }, innerContextVarName = "_amapui_tpl_cxt_";
    return tmpl;
});

AMapUI.define("lib/SphericalMercator", [], function() {
    function getScale(level) {
        scaleCache[level] || (scaleCache[level] = 256 * Math.pow(2, level));
        return scaleCache[level];
    }
    function project(lnglat) {
        var lat = lnglat[1], x = lnglat[0] * deg2rad, y = lat * deg2rad;
        y = Math.log(Math.tan(quadPI + y / 2));
        return [ x, y ];
    }
    function transform(point, scale) {
        scale = scale || 1;
        var a = half2PI, b = .5, c = -a, d = .5;
        return [ scale * (a * point[0] + b), scale * (c * point[1] + d) ];
    }
    function unproject(point) {
        var lng = point[0] * rad2deg, lat = (2 * Math.atan(Math.exp(point[1])) - Math.PI / 2) * rad2deg;
        return [ parseFloat(lng.toFixed(6)), parseFloat(lat.toFixed(6)) ];
    }
    function untransform(point, scale) {
        var a = half2PI, b = .5, c = -a, d = .5;
        return [ (point[0] / scale - b) / a, (point[1] / scale - d) / c ];
    }
    function lngLatToPointByScale(lnglat, scale, round) {
        var p = transform(project(lnglat), scale);
        if (round) {
            p[0] = Math.round(p[0]);
            p[1] = Math.round(p[1]);
        }
        return p;
    }
    function lngLatToPoint(lnglat, level, round) {
        return lngLatToPointByScale(lnglat, getScale(level), round);
    }
    function pointToLngLat(point, level) {
        var scale = getScale(level), untransformedPoint = untransform(point, scale);
        return unproject(untransformedPoint);
    }
    function haversineDistance(point1, point2) {
        var cos = Math.cos, lat1 = point1[1] * deg2rad, lon1 = point1[0] * deg2rad, lat2 = point2[1] * deg2rad, lon2 = point2[0] * deg2rad, dLat = lat2 - lat1, dLon = lon2 - lon1, a = (1 - cos(dLat) + (1 - cos(dLon)) * cos(lat1) * cos(lat2)) / 2;
        return earthDiameter * Math.asin(Math.sqrt(a));
    }
    var scaleCache = {}, earthDiameter = 12756274, deg2rad = Math.PI / 180, rad2deg = 180 / Math.PI, quadPI = Math.PI / 4, half2PI = .5 / Math.PI;
    return {
        haversineDistance: haversineDistance,
        getScale: getScale,
        lngLatToPointByScale: lngLatToPointByScale,
        pointToLngLat: pointToLngLat,
        lngLatToPoint: lngLatToPoint
    };
});

AMapUI.define("_auto/lib", function() {});
AMapUI.requireConf = {
  "skipDataMain": true,
  "config": {
    "lib/conf": {
      "productWebRoot": "//webapi.amap.com/ui",
      "mainVersion": "1.1",
      "patchVersion": "2",
      "fullVersion": "1.1.2"
    }
  },
  "map": {
    "*": {
      "css": "polyfill/require/require-css/css",
      "text": "polyfill/require/require-text/text",
      "json": "polyfill/require/require-json/json"
    }
  },
  "shim": {
    "jquery": {
      "exports": "$"
    },
    "zepto": {
      "exports": "$"
    }
  },
  "paths": {
    "jquery": "plug/ext/jquery-1.12.4.min",
    "zepto": "plug/ext/zepto-1.2.0.min"
  },
  "baseUrl": "//webapi.amap.com/ui/1.1/",
  "baseUrlProtocol": null
};
AMapUI.libConf = AMapUI.requireConf.config["lib/conf"];
AMapUI.uiMods = [
  "ui/control/BasicControl",
  "ui/geo/DistrictCluster",
  "ui/geo/DistrictExplorer",
  "ui/misc/MarkerList",
  "ui/misc/MobiCityPicker",
  "ui/misc/PathSimplifier",
  "ui/misc/PoiPicker",
  "ui/misc/PointSimplifier",
  "ui/misc/PointSimplifr",
  "ui/misc/PositionPicker",
  "ui/overlay/AwesomeMarker",
  "ui/overlay/SimpleInfoWindow",
  "ui/overlay/SimpleMarker",
  "ui/overlay/SvgMarker"
];
!function(ns, window) {
    function getParameterByName(name) {
        var match = new RegExp("[?&]" + name + "=([^&]*)").exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    }
    function getAMapKey() {
        return AMap.User ? AMap.User.key : "";
    }
    function arrForEach(array, callback, thisArg) {
        if (array.forEach) return array.forEach(callback, thisArg);
        for (var i = 0, len = array.length; i < len; i++) callback.call(thisArg, array[i], i);
    }
    function extendObj(dst) {
        dst || (dst = {});
        arrForEach(Array.prototype.slice.call(arguments, 1), function(source) {
            if (source) for (var prop in source) source.hasOwnProperty(prop) && (dst[prop] = source[prop]);
        });
        return dst;
    }
    var libConf = ns.libConf, reqConf = ns.requireConf, uiMods = ns.uiMods || [];
    ns.docProtocol = "https:" === document.location.protocol ? "https:" : "http:";
    window.AMapUIProtocol && (ns.docProtocol = window.AMapUIProtocol);
    window.AMapUIBaseUrl && (reqConf.baseUrl = window.AMapUIBaseUrl);
    0 === reqConf.baseUrl.indexOf("//") && (reqConf.baseUrl = ns.docProtocol + reqConf.baseUrl);
    var getAbsoluteUrl = function() {
        var div = document.createElement("div");
        div.innerHTML = "<a></a>";
        return function(url) {
            div.firstChild.href = url;
            div.innerHTML = div.innerHTML;
            return div.firstChild.href;
        };
    }();
    ns.getAbsoluteUrl = getAbsoluteUrl;
    getParameterByName("debugAMapUI") && (libConf.debugMode = !0);
    var isDebugMode = !!libConf.debugMode;
    ns.version = libConf.version = libConf.mainVersion + "." + libConf.patchVersion;
    if (!isDebugMode) {
        reqConf.bundles || (reqConf.bundles = {});
        for (var reqBundles = reqConf.bundles, i = 0, len = uiMods.length; i < len; i++) {
            var uiModId = uiMods[i];
            reqBundles[uiModId] || (reqBundles[uiModId] = []);
            reqBundles[uiModId].push(uiMods[i] + "/main");
        }
    }
    ns.getBaseUrl = function() {
        return reqConf.baseUrl;
    };
    reqConf.urlArgs = function(id, url) {
        var args = [];
        args.push("v=" + ns.version);
        isDebugMode && args.push("_t=" + Date.now());
        if (0 === id.indexOf("ui/")) {
            var parts = id.split("/");
            (3 === parts.length || 4 === parts.length && "main" === parts[3]) && args.push("mt=ui");
            args.push("key=" + getAMapKey());
        }
        return (url.indexOf("?") < 0 ? "?" : "&") + args.join("&");
    };
    var requireContentName = "amap-ui-" + ns.version;
    ns.require = ns.requirejs.config(extendObj({
        context: requireContentName
    }, reqConf));
    ns.UI = ns.UI || {};
    ns.findDefinedId = function(test, thisArg) {
        var requirejs = ns.requirejs;
        if (!requirejs.s || !requirejs.s.contexts) return null;
        var contexts = requirejs.s.contexts[requireContentName];
        if (!contexts) return null;
        var defined = contexts.defined;
        for (var k in defined) if (defined.hasOwnProperty(k) && test.call(thisArg, k)) return k;
        return null;
    };
    ns.weakDefine = function(name) {
        return ("string" != typeof name || !ns.require.defined(name)) && ns.define.apply(ns, arguments);
    };
    ns.defineTpl = function(name) {
        if ("string" != typeof name) throw new Error("tpl name is supposed to be a string");
        var args = Array.prototype.slice.call(arguments, 0);
        args[0] = "polyfill/require/require-text/text!" + args[0];
        return ns.define.apply(ns, args);
    };
    ns.setDomLibrary = function($) {
        ns.require.undef("lib/$");
        ns.define("lib/$", [], function() {
            return $;
        });
    };
    ns.inspectDomLibrary = function($) {
        var isJQuery = $.fn && $.fn.jquery, isZepto = $ === window.Zepto;
        return {
            isJQuery: !!isJQuery,
            isZepto: isZepto,
            version: isJQuery ? $.fn.jquery : "unknown"
        };
    };
    ns.versionCompare = function(left, right) {
        if (typeof left + typeof right != "stringstring") return !1;
        for (var a = left.split("."), b = right.split("."), i = 0, len = Math.max(a.length, b.length); i < len; i++) {
            if (a[i] && !b[i] && parseInt(a[i], 10) > 0 || parseInt(a[i], 10) > parseInt(b[i], 10)) return 1;
            if (b[i] && !a[i] && parseInt(b[i], 10) > 0 || parseInt(a[i], 10) < parseInt(b[i], 10)) return -1;
        }
        return 0;
    };
    ns.checkDomLibrary = function($, opts) {
        opts = extendObj({
            minJQueryVersion: "1.3"
        }, opts);
        var libInfo = ns.inspectDomLibrary($);
        return !(libInfo.isJQuery && ns.versionCompare(libInfo.version, opts.minJQueryVersion) < 0) || "jQuery当前版本(" + libInfo.version + ")过低，请更新到 " + opts.minJQueryVersion + " 或以上版本！";
    };
    ns.setDebugMode = function(on) {
        on = !!on;
        ns.debugMode = on;
        window.AMapUI_DEBUG = on;
        ns.require([ "lib/utils" ], function(utils) {
            utils.setDebugMode(ns.debugMode);
            ns.debugMode && utils.logger.warn("Debug mode!");
        });
    };
    ns.setDebugMode(isDebugMode);
    ns.load = function(unames, callback, opts) {
        ns.require([ "lib/utils" ], function(utils) {
            utils.isArray(unames) || (unames = [ unames ]);
            for (var uname, mods = [], modNameFilter = opts && opts.modNameFilter, i = 0, len = unames.length; i < len; i++) {
                uname = unames[i];
                modNameFilter && (uname = modNameFilter.call(null, uname));
                ns.debugMode && 0 === uname.indexOf("ui/") && 3 === uname.split("/").length && (uname += "/main");
                mods.push(uname);
            }
            ns.require(mods, callback);
        });
    };
    ns.loadCss = function(urls, cb) {
        ns.load(urls, cb, {
            modNameFilter: function(url) {
                return "css!" + getAbsoluteUrl(url);
            }
        });
    };
    ns.loadJs = function(urls, cb) {
        ns.load(urls, cb, {
            modNameFilter: function(url) {
                return getAbsoluteUrl(url);
            }
        });
    };
    ns.loadText = function(urls, cb) {
        ns.load(urls, cb, {
            modNameFilter: function(url) {
                return "text!" + getAbsoluteUrl(url);
            }
        });
    };
    ns.loadUI = function(unames, cb) {
        ns.load(unames, cb, {
            modNameFilter: function(uname) {
                return "ui/" + uname;
            }
        });
    };
    ns.loadTpl = function(url, data, cb) {
        ns.require([ "lib/underscore-tpl", "text!" + getAbsoluteUrl(url) ], function(template, text) {
            cb(template(text, data), {
                template: template,
                text: text
            });
        });
    };
    isDebugMode || setTimeout(function() {
        ns.loadJs(ns.docProtocol + "//webapi.amap.com/count?type=UIInit&k=" + getAMapKey());
    }, 0);
}(AMapUI, window);
window.AMapUI = AMapUI;
}(window));