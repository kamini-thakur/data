"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};!function(){window.angular&&angular.module("w69b.es6",[]),Array.prototype.find||(Array.prototype.find=function(e){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),r=n.length>>>0,o=arguments[1],a=0;a<r;a++)if(t=n[a],e.call(o,t,a,n))return t}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(void 0===this||null===this)throw new TypeError("Cannot convert this value to object");var t=Object(this),n=parseInt(t.length,10)||0;if(0===n)return!1;var r=parseInt(arguments[1],10)||0;if(r>=n)return!1;var o;for(r>=0?o=r:(o=n+r,o<0&&(o=0));o<n;){var a=t[o];if(e===a||e!==e&&a!==a)return!0;o++}return!1}}),String.prototype.endsWith||Object.defineProperty(String.prototype,"endsWith",{value:function(e,t){var n=this.toString();(void 0===t||t>n.length)&&(t=n.length),t-=e.length;var r=n.indexOf(e,t);return r!==-1&&r===t}}),String.prototype.startsWith||Object.defineProperty(String.prototype,"startsWith",{enumerable:!1,configurable:!1,writable:!1,value:function(e,t){return t=t||0,this.lastIndexOf(e,t)===t}}),angular.module("w69b.chromeRuntime",["w69b.promiseTool"]).factory("chromeRuntime",["promiseTool",function(e){var t={};return t.sendMessage=e.wrapChromeError(chrome.runtime.sendMessage,chrome.runtime),t.getBackgroundPage=e.wrapChromeError(chrome.runtime.getBackgroundPage,chrome.runtime),t.connect=chrome.runtime.connect.bind(chrome.runtime),t.getManifest=chrome.runtime.getManifest.bind(chrome.runtime),t.id=chrome.runtime.id,chrome.runtime.getPlatformInfo&&(t.getPlatformInfo=e.wrapChromeError(chrome.runtime.getPlatformInfo,chrome.runtime)),t.setUninstallURL=e.wrapChromeError(chrome.runtime.setUninstallURL,chrome.runtime),["onMessage","onMessageExternal","onConnect","onConnectExternal","onInstalled","onSuspend"].forEach(function(e){t[e]={addListener:function(t){chrome.runtime[e].addListener(t)},removeListener:function(t){chrome.runtime[e].removeListener(t)}}}),t}]),angular.module("w69b.chromeStorage",["w69b.promiseTool"]).factory("chromeStorage",["promiseTool",function(e){var t=chrome.storage,n={};return["local","sync","managed"].forEach(function(r){n[r]={},["set","get","remove","clear"].forEach(function(o){n[r][o]=e.wrapChromeError(t[r][o],t[r])}),n[r].setSingle=function(e,t){var o={};return o[e]=t,n[r].set(o)},n[r].getSingle=function(e,t){return n[r].get(e).then(function(n){return n.hasOwnProperty(e)?n[e]:t})}}),n.onChanged=t.onChanged,n}]),angular.module("w69b.chromeTabs",["w69b.promiseTool"]).factory("chromeTabs",["$window","promiseTool","$q",function(e,t,n){if(!e.chrome||!e.chrome.tabs)return null;var r=e.chrome,o={};return o.query=t.wrapChromeError(r.tabs.query,r.tabs),o.getActiveTab=function(){return o.query({active:!0,windowId:r.windows.WINDOW_ID_CURRENT}).then(function(e){return e.length?e[0]:n.reject()})},o.get=t.wrapChromeError(r.tabs.get,r.tabs),o.update=t.wrapChromeError(r.tabs.update,r.tabs),o.remove=t.wrapChromeError(r.tabs.remove,r.tabs),o.create=t.wrapChromeError(r.tabs.create,r.tabs),o.connect=r.tabs.connect.bind(r.tabs),o.setZoomSettings=t.wrapChromeError(r.tabs.setZoomSettings,r.tabs),o.setZoom=t.wrapChromeError(r.tabs.setZoom,r.tabs),o.executeScript=t.wrapChromeError(r.tabs.executeScript,r.tabs),o.insertCSS=t.wrapChromeError(r.tabs.insertCSS,r.tabs),o.sendMessage=t.wrapChromeError(r.tabs.sendMessage,r.tabs),o.onUpdated=r.tabs.onUpdated,o.onActivated=r.tabs.onActivated,o.sendMessageActive=function(e,t){return o.getActiveTab().then(function(n){return o.sendMessage(n.id,e,t)})},o}]).directive("newTab",["chromeTabs",function(e){return{restrict:"A",link:function(t,n,r){n.bind("click",function(t){t.preventDefault(),e.create({url:r.href}).then(function(e){chrome.windows.update(e.windowId,{focused:!0},angular.noop)})})}}}]),angular.module("w69b.promiseTool",[]).factory("promiseTool",["$q","$timeout",function(e,t){var n={};return n.wrapChromeError=function(t,n){return function(){var r=Array.prototype.slice.call(arguments,0),o=e.defer();return r.push(function(e){chrome.runtime.lastError?o.reject(chrome.runtime.lastError):o.resolve(e)}),t.apply(n,r),o.promise}},n.wrapCallbacks=function(t,n){return function(){var r=Array.prototype.slice.call(arguments,0),o=e.defer();return r.push(o.resolve.bind(o)),r.push(o.reject.bind(o)),t.apply(n,r),o.promise}},n.serializer=function(){var t=null,n=function(n){var r=e.defer();return(t||e.when())["finally"](function(){var e=n.call();r.resolve(e)}),t=r.promise,t["finally"](function(){t=null}),r.promise};return n.wrap=function(e){return function(){return n(e.bind.apply(e,[this].concat(Array.prototype.slice.call(arguments))))}},n},n.withTimeout=function(n,r,o){o||(o=angular.noop);var a=e.defer(),i=t(function(){var e=o();angular.isDefined(e)?a.resolve(e):a.reject("timeout"),a=null},r),c=n(),u=a.promise;return c["finally"](function(){t.cancel(i),i=null}),c.then(function(){a&&a.resolve.apply(a,arguments)},function(){a&&a.reject.apply(a,arguments)}),u},n}]),angular.module("w69b.uritool",[]).factory("uritool",function(){function e(e){return decodeURIComponent(e.replace(t," "))}var t=/\+/g,n={};return n.parseQuery=function(t,n){"?"==t[0]&&(t=t.substring(1));for(var r,o=/([^&=]+)=?([^&]*)/g,a={};r=o.exec(t);){var i=e(r[1]),c=e(r[2]);n&&a.hasOwnProperty(i)?a[i].push(c):a[i]=n?[c]:c}return a},n.parseUrl=function(e){var t=document.createElement("a");return t.href=e,{protocol:t.protocol.replace(":",""),host:t.hostname,port:t.port,query:t.search,hash:t.hash,path:t.pathname}},n.encodeQuery=function(e){var t=[];return angular.forEach(e,function(e,n){angular.isArray(e)?angular.forEach(e,function(e){t.push(encodeURIComponent(n)+(e===!0?"":"="+encodeURIComponent(e)))}):t.push(encodeURIComponent(n)+(e===!0?"":"="+encodeURIComponent(e)))}),t.length?t.join("&"):""},n}),angular.module("w69b.spawn",[]).factory("spawn",["$q",function(e){function t(t,n){function r(e,t){var n;try{n=e(t)}catch(r){return o(r)}return n.done?a(n.value):a(n.value).then(c,u)}var o=n?Promise.reject.bind(Promise):e.reject.bind(e),a=n?Promise.resolve.bind(Promise):e.when.bind(e),i=t(),c=r.bind(null,i.next.bind(i)),u=r.bind(null,i["throw"].bind(i));return c()}return t.wrap=function(e){return function(){var n=arguments;return t(e.bind.apply(e,[this].concat(_toConsumableArray(n))))}},t}]),angular.module("w69b.uuid",[]).factory("uuid",["$window",function(e){function t(e){for(var t=e.toString(16);t.length<4;)t="0"+t;return t}function n(){var n=new Uint16Array(8);return e.crypto.getRandomValues(n),t(n[0])+t(n[1])+"-"+t(n[2])+"-4"+t(n[3]).substring(1)+"-y"+t(n[4]).substring(1)+"-"+t(n[5])+t(n[6])+t(n[7])}return n}]),angular.module("w69b.chromeAnalytics",[]).provider("analytics",function(){var e,t;this.setTrackingId=function(t){e=t},this.setApp=function(e,n){t=arguments},this.$get=["$window",function(n){if(!t)throw new Error("make sure to call analyticsProvider.setApp()");if(!n.analytics)throw new Error("chrome-analytics lib not loaded");var r=n.analytics,o=r.getService.apply(r,t),a=o.getTracker(e),i={};return i.tracker=a,i.eventBuilder=function(){return r.EventBuilder.builder()},i.setEnabled=function(e){o.getConfig().addCallback(function(t){t.setTrackingPermitted(e)})},i.send=function(){a.send.apply(a,arguments)},i.trackPageView=function(e){a.sendAppView(e)},i.trackEvent=function(){a.sendEvent.apply(a,arguments)},i.sendNonInteractionEvent=function(e,t,n,o){var a={eventCategory:e,eventAction:t,eventLabel:n,eventValue:o,nonInteraction:!0};i.send(r.HitTypes.EVENT,a)},i.trackTimer=function(e,t,n){var r,o={};return o.start=function(){return r=(new Date).getTime(),o},o.send=function(i,c,u){var s=(new Date).getTime();return a.sendTiming(i||e,c||t,s-r,u||n),o},o.start(),o},i}]}),angular.module("w69b.filesHelper",["w69b.promiseTool"]).factory("filesHelper",["$window","promiseTool","$q",function(e,t,n){function r(e){var t=e.split("/"),n=t.slice(0,-1).join("/"),r=t.slice(-1)[0];return[n,r]}e.requestFileSystem=e.requestFileSystem||e.webkitRequestFileSystem;var o=window.PERSISTENT,a=104857600,i={},c=["readEntries","remove","getFile","getMetadata","moveTo","file","getDirectory","createWriter"];return c.forEach(function(e){i[e]=function(n){var r=[].slice.call(arguments,1);return t.wrapCallbacks(n[e],n).apply(null,r)}}),i.getFileSystem=function(n,r){return angular.isUndefined(n)&&(n=o),r=r||a,t.wrapCallbacks(e.requestFileSystem,e)(n,r)},i.getPersistentQuota=function(){var t=n.defer();return e.navigator.webkitPersistentStorage.queryUsageAndQuota(function(e,n){t.resolve({usage:e,quota:n})},function(e){t.reject(e)}),t.promise},chrome.system&&chrome.system.storage&&(i.getStorageInfo=t.wrapChromeError(chrome.system.storage.getInfo,chrome.system.storage)),i.getDirByPath=function(e,t){function r(e,o){return o.length?i.getDirectory(e,o[0],t||{}).then(function(e){return r(e,o.slice(1))}):n.when(e)}var o=e.split("/");return""===o[0]&&o.splice(0,1),i.getFileSystem().then(function(e){return r(e.root,o,t)})},i.moveFileByPath=function(e,t){var o=r(t),a=o[0],c=o[1];return n.all({file:i.getFileEntryByPath(e),targetDir:i.getDirByPath(a)}).then(function(e){return i.moveTo(e.file,e.targetDir,c)})},i.getFileEntryByPath=function(e,t,n){var o=r(e),a=o[0],c=o[1];return i.getDirByPath(a,n).then(function(e){return i.getFile(e,c,t||{})})},i.getFileByPath=function(e){return i.getFileEntryByPath(e).then(function(e){return i.file(e)})},i.removeByPath=function(e){return i.getFileEntryByPath(e).then(function(e){return i.remove(e)})},i.listByPath=function(e){return i.getDirByPath(e).then(function(e){var t=e.createReader();return i.readEntries(t)})},i.requestPersistentQuota=function(e){return t.wrapCallbacks(navigator.webkitPersistentStorage.requestQuota,navigator.webkitPersistentStorage)(e||a)},i.requestTemporaryQuota=function(e){return t.wrapCallbacks(navigator.webkitTemporaryStorage.requestQuota,navigator.webkitTemporaryStorage)(e||a)},i.writeFile=function(e,t){var r=n.defer();return e.onwriteend=r.resolve.bind(r),e.onerror=r.reject.bind(r),e.write(t),r.promise},i.isSupported=function(){return!!window.requestFileSystem},i}]),angular.module("w69b.asyncResponse",[]).factory("asyncResponse",["$q",function(e){var t={};return t.createSender=function(t){var n={},r=0,o={};return n.sendWithResponse=function(n,a){var i=++r,c=e.defer();return o[i]=c,t({type:n,data:a,msgId:i}),c.promise},n.send=function(e,n){t({type:e,data:n})},n.handleResult=function(e){if(e&&"result"===e.type){var t=o[e.msgId];return delete o[e.msgId],e.hasOwnProperty("error")||e.isError?t.reject(e.error):t.resolve(e.data),!0}return!1},n},t.createRespond=function(t){return function(n,r){e.when(n).then(function(e){t({type:"result",msgId:r.msgId,data:e})},function(e){t({type:"result",msgId:r.msgId,error:e,isError:!0})})}},t}]),angular.module("w69b.originWildcardMatcher",[]).factory("originWildcardMatcher",function(){function e(e){return function(t){if(t===e)return!0;if(t.indexOf("*")>-1){var n=e.split("://"),r=t.split("://");if(n=[n[0]].concat(n[1].split(".")),r=[r[0]].concat(r[1].split(".")),r.length!==n.length)return!1;for(var o=0;o<n.length;++o)if(n[o]!==r[o]&&"*"!==r[o])return!1;return!0}return!1}}return e}),angular.module("castifyExt.chromeEventPublisher",[]).run(["chromeRuntime","$rootScope",function(e,t){var n="event:";e.onMessage.addListener(function(e){angular.isObject(e)&&angular.isString(e.type)&&0===e.type.lastIndexOf(n,0)&&t.$broadcast(e.type,e.data),t.$$phase||t.$digest()})}]),angular.module("castifyExt.connect.connectFrame",["castifyExt.fileDbClient","w69b.filesHelper","w69b.asyncResponse","w69b.chromeRuntime","w69b.promiseTool","w69b.originWildcardMatcher","castifyExt.connect.connectedApps","castifyExt.connect.appRegistry","castifyExt.connect.appPermissions"]).factory("connectFrame",["$location","filesHelper","$window","connectedApps","appPermissions","$q","spawn","appRegistry","asyncResponse","chromeRuntime","promiseTool","fileDbClient","originWildcardMatcher",function(e,t,n,r,o,a,i,c,u,s,l,f,p){function d(e){return i(regeneratorRuntime.mark(function n(){var r,o;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.getFileDescriptor(e);case 2:return r=n.sent,n.next=5,t.getFileByPath(e+".webm");case 5:return o=n.sent,o=new Blob([o],{type:"video/webm"}),n.abrupt("return",{id:r.id,width:r.width,height:r.height,duration:r.duration,title:r.title,file:o,inLibrary:!r.autoShare,payload:r.autoShare&&r.autoShare.payload});case 8:case"end":return n.stop()}},n,this)}))}function g(e,t){n.parent.postMessage({type:e,data:t},"*")}function h(e){return w?w!==e.origin?a.reject("Origin not allowed: "+e.origin):a.when():a.reject("call setAppId() first")}function m(e,t){var r=t.data.msgId;a.when(e).then(function(e){n.parent.postMessage({type:"result",data:e,msgId:r},t.origin)},function(e){e instanceof Error&&(e=e.message),n.parent.postMessage({type:"result",error:e,msgId:r},t.origin)})}function y(e){function t(){return I.hasOwnProperty(n.type)?I[n.type](n.data,e):n.msgId?E.sendWithResponse(n.type,n.data):E.send(n.type,n.data)}var n=e.data;if(n)if("setAppId"===n.type)m(I.setAppId(n.data,e),e);else{var r=h(e);n&&"result"===n.type?r.then(function(){C.handleResult(n)}):(r=r.then(t),n.msgId&&m(r,e))}}function v(){var e=s.connect({name:"connectFrame"}),t=u.createRespond(e.postMessage.bind(e));E=u.createSender(e.postMessage.bind(e)),E.send("connect",b),e.onMessage.addListener(function(e){if(!E.handleResult(e))if(e.msgId){var n=C.sendWithResponse(e.type,e.data);t(n,e)}else C.send(e.type,e.data)})}var b,w,E,x={},S="access_denied",A=1024,C=u.createSender(function(e){n.parent.postMessage(e,w)}),I={};return I.getFile=function(e){return i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.hasAccess(b.id,e);case 2:if(t.sent){t.next=4;break}return t.abrupt("return",a.reject(S));case 4:return t.abrupt("return",d(e));case 5:case"end":return t.stop()}},t,this)}))},I.isAppConnected=function(){return r.isConnected(b.id)},I.setUserExpiryDate=function(e){return b.isPaidInstall?null===e||angular.isNumber(e)?r.setUserExpiryDate(b.id,e):a.reject("date has to be null or a Number"):a.reject("only available for paid Apps")},I.setUserShareUrl=function(e){return null===e||angular.isString(e)&&/https?:\/\//.test(e)?r.setUserShareUrl(b.id,e):a.reject("url has to be null or a URL string")},I.setAppId=function(e,t){return b?a.reject("appId already set"):c.getAppInfo(e).then(function(n){return n?n.allowedOrigins.some(p(t.origin))?(w=t.origin,b=n,void v()):a.reject("Origin not allowed for this App: "+t.origin):a.reject("unknown appId "+e)},function(){return a.reject("failed to load app config")})},I.startRecording=function(e){if(document.hidden)return a.reject("tab must be visible to start recording");if(e&&e.payload){if(!angular.isString(e.payload))return a.reject("payload must be a string");if(e.payload.length>A)return a.reject("payload is too long")}return E.sendWithResponse("startRecording",e)},x.install=function(){n.addEventListener("message",y),g("ready")},x}]),angular.module("castifyExt.connect.connectedApps",["w69b.chromeStorage","w69b.spawn","castifyExt.connect.appRegistry"]).factory("connectedApps",["chromeStorage","spawn","appRegistry","$rootScope",function(e,t,n,r){function o(){return e.sync.getSingle(l,[]).then(function(e){return e.map(function(e){return angular.isObject(e)?e:{id:e,hasShareUrl:!0}})})}function a(t){return e.sync.setSingle(l,t)}function i(){return e.sync.getSingle(f)}function c(t){return e.sync.setSingle(f,t)}function u(e,t){return e.some(function(e){return e.id===t})}var s={},l="connectedAppIds",f="connectedAppRecentId";s.getConnected=function(e){return t(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o();case 2:return t=n.sent,e&&(t=t.filter(function(t){var n=!0;return angular.forEach(e,function(e,r){n=n&&t[r]===e}),n})),n.abrupt("return",t.map(function(e){return e.id}));case 5:case"end":return n.stop()}},n,this)}))},s.getConnectedAppInfo=t.wrap(regeneratorRuntime.mark(function d(){var e,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o();case 2:return e=r.sent,r.next=5,n.getApps(e.map(function(e){return e.id}));case 5:return t=r.sent,t=angular.copy(t),t.forEach(function(t){var n=e.find(function(e){return e.id===t.id});angular.extend(t,n)}),r.abrupt("return",t);case 9:case"end":return r.stop()}},d,this)})),s.getConnectedAppInfoForApp=t.wrap(regeneratorRuntime.mark(function g(e){var t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.getConnectedAppInfo();case 2:if(t=r.sent,n=t.find(function(t){return t.id===e})){r.next=6;break}return r.abrupt("return",null);case 6:return r.abrupt("return",n);case 7:case"end":return r.stop()}},g,this)})),s.hasConnectedApps=function(){return s.getConnected().then(function(e){return e.length>0})},s.isConnected=function(e){return t(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o();case 2:return t=n.sent,n.abrupt("return",u(t,e));case 4:case"end":return n.stop()}},n,this)}))},s.disconnect=function(e){return t(regeneratorRuntime.mark(function n(){var t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o();case 2:return t=n.sent,t=t.filter(function(t){return t.id!==e}),n.next=6,c(null);case 6:return n.next=8,a(t);case 8:r.$broadcast("connect:appDisconnected",e);case 9:case"end":return n.stop()}},n,this)}))},s.connect=function(e){return t(regeneratorRuntime.mark(function i(){var t,s;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o();case 2:return t=i.sent,i.next=5,n.getAppInfo(e);case 5:if(s=i.sent,u(t,e)){i.next=11;break}if(t.push({id:e,hasShareUrl:!!s.shareUrl}),!s.shareUrl){i.next=11;break}return i.next=11,c(e);case 11:return i.next=13,a(t);case 13:r.$broadcast("connect:appConnected",e,s);case 14:case"end":return i.stop()}},i,this)}))};var p=t.wrap(regeneratorRuntime.mark(function h(e,t,n){var r,i,c;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,o();case 2:if(r=u.sent,i=r.find(function(t){return t.id===e})){u.next=6;break}throw new Error("Cannot set user data for non-connected app");case 6:return c=i[t],null===n||angular.isUndefined(n)?delete i[t]:i[t]=n,u.next=10,a(r);case 10:return u.abrupt("return",c);case 11:case"end":return u.stop()}},h,this)}));return s.setUserExpiryDate=t.wrap(regeneratorRuntime.mark(function m(e,t){var n;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,p(e,"userExpiryDate",t);case 2:n=o.sent,r.$broadcast("connect:userExpiryDateChange",n,t);case 4:case"end":return o.stop()}},m,this)})),s.setUserShareUrl=function(e,t){return p(e,"shareUrl",t)},s.clearRecent=function(){return c(null)},s.getRecent=function(){return i()},s}]),angular.module("castifyExt.connect.appRegistry",["w69b.spawn","w69b.chromeStorage"]).factory("appRegistry",["castifyConfig","$http","$q","spawn","chromeStorage",function(e,t,n,r,o){function a(){return o.local.getSingle(g,[])}function i(e){return o.local.setSingle(g,e)}function c(e){return a().then(function(t){return t.filter(function(t){return e.includes(t.id)})})}function u(e,t){var n=Date.now(),r=e.some(function(e){return n>e._fetchTimestamp+h});return!r&&t.length===e.length}function s(e){return e.forEach(function(e){delete e._fetchTimestamp}),e}function l(e,t){return r(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=new Set(e||[]),n.next=3,a();case 3:return r=n.sent,t.forEach(function(t){e.add(t.id)}),r=r.filter(function(t){return!e.has(t.id)}),t.forEach(function(e){e._fetchTimestamp=Date.now()}),r=r.concat(t),n.next=10,i(r);case 10:case"end":return n.stop()}},n,this)}))}function f(e){return r(regeneratorRuntime.mark(function o(){var r,a,i;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(e&&0!==e.length){o.next=2;break}return o.abrupt("return",n.when([]));case 2:return o.next=4,c(e);case 4:if(a=o.sent,!u(a,e)){o.next=7;break}return o.abrupt("return",s(a));case 7:return o.prev=7,o.next=10,t.get(p,{params:{ids:e}});case 10:i=o.sent,r=i.data,o.next=17;break;case 14:return o.prev=14,o.t0=o["catch"](7),o.abrupt("return",s(a));case 17:return o.next=19,l(e,r);case 19:return o.abrupt("return",s(r));case 20:case"end":return o.stop()}},o,this,[[7,14]])}))}var p=e.API_URL+"/apps",d={},g="appRegistry:cache",h=6e4;return d.getApps=function(e){return f(e)},d.getAppInfo=function(e){return f([e]).then(function(e){return e.length?e[0]:n.reject()})},d}]),angular.module("castifyExt.connect.appPermissions",["w69b.chromeStorage","w69b.spawn"]).factory("appPermissions",["chromeStorage","spawn",function(e,t){function n(e){var t=Date.now();return e.filter(function(e){return e.timeout>=t})}function r(){return e.local.getSingle(a,[]).then(n)}function o(t){return e.local.setSingle(a,t)}var a="appPermissions",i=18e5,c={};return c.hasAccess=function(e,t){return r().then(function(n){return n.some(function(n){return n.appId===e&&n.fileId===t})})},c.allowAccess=function(e,n){return t(regeneratorRuntime.mark(function a(){var t;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,r();case 2:return t=a.sent,t=t.filter(function(t){return t.appId!==e&&t.appId!==n}),t.push({appId:e,fileId:n,timeout:Date.now()+i}),a.next=7,o(t);case 7:case"end":return a.stop()}},a,this)}))},c}]),angular.module("castifyExt.connect.connectService",["castifyExt.simpleBgServiceConsumer"]).factory("connectService",["simpleBgServiceConsumer",function(e){return e("connect",["share"])}]),angular.module("castifyExt.helpCenter",["w69b.chromeTabs"]).factory("helpCenter",["chromeTabs",function(e){var t={};return t.tagUrls={},t.registerUrl=function(e,n){t.tagUrls[e]=n},t.hasHelpFor=function(e){return t.tagUrls.hasOwnProperty(e)},t.openHelp=function(n){var r=t.tagUrls[n];if(!r)throw new Error("No help url registered for "+n);e.create({url:r})},t.setNotifyHelp=function(e,n){e.onButtonClicked=e.onClicked=function(){t.openHelp(n),e.clear()}},t}]),angular.module("castifyExt.helpCenterConfig",["castifyExt.helpCenter"]).run(["helpCenter",function(e){e.registerUrl("load_nacl","https://screencastify.helpscoutdocs.com/article/33-failed-to-load-nacl-module"),e.registerUrl("disk_space","https://screencastify.helpscoutdocs.com/article/32-out-of-disk-space"),e.registerUrl("drive_apps","https://screencastify.helpscoutdocs.com/article/34-enabling-drive-on-google-apps"),e.registerUrl("start_recording","https://screencastify.helpscoutdocs.com/article/35-failed-to-start-recording"),e.registerUrl("change_account","https://screencastify.helpscoutdocs.com/article/31-how-to-sign-in-with-a-different-account"),e.registerUrl("quotaExceeded","https://screencastify.helpscoutdocs.com/article/20-out-of-space-on-google-drive"),e.registerUrl("youtubeSignupRequired","https://screencastify.helpscoutdocs.com/article/24-youtubesignuprequired-error-when-uploading-to-youtube"),e.registerUrl("no_audio","https://screencastify.helpscoutdocs.com/article/82-failed-to-capture-audio"),e.registerUrl("no_cam","https://screencastify.helpscoutdocs.com/article/83-failed-to-access-your-webcam"),e.registerUrl("trial_monthly_limit","https://www.screencastify.com/buy?utm_source=app&utm_content=notify&utm_campaign=monthly_limit"),e.registerUrl("youtubeCredentialsMissing","https://help.screencastify.com/article/219-i-received-a-youtubeauth-failed-error")}]),angular.module("castifyExt.commonConfig",["castifyExt.castifyAuth","w69b.chromeAnalytics","w69b.chromeRuntime","castifyExt.helpCenterConfig","castifyExt.appOptions","castifyExt.userAccount","castifyExt.deployConfig"]).config(["$compileProvider","$sceDelegateProvider","analyticsProvider","$locationProvider",function(e,t,n,r){n.setTrackingId("UA-23874345-14"),n.setApp("Screencastify"),t.resourceUrlWhitelist(["self","http://localhost:9008/**","blob:**","filesystem:chrome-extension://**","https://**"]);var o=/^\s*(https?|mailto|blob|chrome-extension|filesystem:chrome-extension):/;e.aHrefSanitizationWhitelist(o),e.imgSrcSanitizationWhitelist(o),r.hashPrefix("")}]).run(["$rootScope","analytics","chromeRuntime","appOptions","$injector","userAccount",function(e,t,n,r,o,a){function i(){return a.getAccount().then(function(e){var o="unknown";if(e.license.isPaid)o="paid";else{if(!e.license.isTester)return o="trial";o="tester"}t.tracker.set("dimension1",o),t.tracker.set("dimension2",n.getManifest().version),t.tracker.set("dimension5",r.values.hwEncoding),e.user?(t.tracker.set("userId",e.user.analyticsUid),t.tracker.set("dimension4",e.user.analyticsUid),t.setEnabled(r.values.enableAnalytics&&e.user.analyticsEnabled!==!1)):t.setEnabled(r.values.enableAnalytics)})}var c=o.has("$transitions")?o.get("$transitions"):null,u=r.loadedPromise.then(i);c&&c.onSuccess({},function(e){var n=e.targetState().state(),r=n.analyticsView||n.pageTitle;r&&u.then(function(){t.tracker.sendAppView(r)})}),e.$on("event:userAccountChanged",i)}]).factory("castifyConfig",["deployConfig",function(e){return{API_URL:e.apiUrl,IS_E2E:window.localStorage.e2e}}]),angular.module("castifyExt.userAccount",["castifyExt.simpleBgServiceConsumer","castifyExt.chromeEventPublisher"]).factory("userAccount",["simpleBgServiceConsumer",function(e){return e("userAccount",["getAccount","signIn","postUpdate","signOut"])}]),angular.module("castifyExt.authConfig",["castifyExt.youtubeAuth","castifyExt.castifyAuth","w69b.chromeRuntime","w69b.googleHttpAuthInterceptor","castifyExt.youtubeAuth"]).config(["$httpProvider","youtubeAuthProvider","googleHttpAuthInterceptorProvider","deployConfigProvider",function(e,t,n,r){t.setClientId(r.clientId),e.interceptors.push("youtubeHttpAuthInterceptor"),e.interceptors.push("googleHttpAuthInterceptor"),n.enableAuthAutoRetry(!0),n.setAuthProvider("castifyAuth")}]),angular.module("castifyExt.deployConfig",[]).provider("deployConfig",function(){var e={apiUrl:"https://api.screencastify.com/api",clientId:"242262968495-o42n5tqeo08dsa75p3j4dk1k61t05ln3.apps.googleusercontent.com",scopes:chrome.runtime.getManifest().oauth2.scopes,redirectUri:"https://www.screencastify.com/oauth2postback",editorOpenUri:"https://editor.screencastify.com/open/drive",notificationUri:"https://us-central1-castify-notifications-prod.cloudfunctions.net/api/userNotification/"};return _extends({},e,{$get:function(){return e}})}),angular.module("castifyExt.appOptions",["w69b.chromeStorage","castifyExt.enterprisePolicy"]).factory("appOptions",["chromeStorage","$rootScope","$q","enterprisePolicy",function(e,t,n,r){function o(e){return r.options.hasOwnProperty(e)}function a(e){return r.options[e]}var i={videoTitleNamingScheme:"tabTitle",notifyAudio:!0,notifyFramerate:!1,notifyTabFocus:!0,uploadPrivacy:"public",autoOpen:!0,autoPlay:!0,driveSync:!1,enableDiskSpaceWatcher:!0,notifySyncProgress:!0,notifyEditProgress:!0,enableAnalytics:!0,enableCrashReports:!1,showDrawingToolsHint:!0,showEditToolsHint:!0,enableWindowPicker:!0,encoder:null,audioCodec:null,bitRateOption:"high",hwEncoding:!1,hideRestartAlert:!1},c={micGain:1,micAudioProcessing:!0,defaultEncoder:null},u=!1,s={},l=angular.copy(i);return s.localValues=angular.copy(c),s.loadedPromise=n.all({sync:e.sync.getSingle("options"),local:e.local.getSingle("options"),managed:r.loadedPromise}).then(function(e){angular.extend(l,e.sync),angular.extend(s.localValues,e.local),u=!0}),s.values={},Object.keys(i).forEach(function(e){Object.defineProperty(s.values,e,{enumerable:!0,get:function(){return o(e)?a(e):l[e]},set:function(t){l[e]=t}})}),s.save=function(){return e.sync.setSingle("options",l)},s.saveLocal=function(){return e.local.setSingle("options",s.localValues)},s.isLoaded=function(){return u},s.isSetByEnterprisePolicy=function(e){return o(e)},e.onChanged.addListener(function(e,n){"sync"==n&&e.options&&(angular.extend(l,e.options.newValue),t.$$phase||t.$digest()),"local"==n&&e.options&&(angular.extend(s.localValues,e.options.newValue),t.$$phase||t.$digest())}),s}]),angular.module("castifyExt.oauthTokenCache",["w69b.chromeStorage"]).factory("oauthTokenCache",["chromeStorage","$q",function(e,t){function n(n){function r(){return e.local.getSingle(n).then(function(e){return e||{}})}function o(e){var t=a();angular.forEach(e,function(n,r){(!r.expiresAt||r.expiresAt<=t)&&delete e[n]})}function a(){return Math.floor(Date.now()-i)+12e4}var i=0,c={};return c.get=function(e){return r().then(function(n){var r=n[e];return r&&r.expiresAt>a()?t.when(r):t.reject()})},c.put=function(t,a){return r().then(function(r){return r[t]=a,a.issuedAt&&(i=Date.now()-Number(a.issuedAt)),o(r),e.local.setSingle(n,r)})},c.removeByToken=function(t){return r().then(function(r){return angular.forEach(r,function(e,n){e.accessToken===t&&delete r[n]}),e.local.setSingle(n,r)})},c.remove=function(t){return r().then(function(r){return delete r[t],e.local.setSingle(n,r)})},c.clear=function(){return e.local.remove(n)},c.withCache=function(e,t){return c.get(e)["catch"](function(){return t().then(function(t){return c.put(e,t).then(function(){return t})})})},c}return n}]),angular.module("castifyExt.enterprisePolicy",["w69b.chromeStorage"]).provider("enterprisePolicy",function(){var e={};this.setOverride=function(t){e=t},this.$get=["chromeStorage","$rootScope",function(t,n){var r={},o=!1,a={options:{}};angular.extend(a,e);var i=["disableSharing","disableSaveToDisk","options"];return i.forEach(function(e){Object.defineProperty(r,e,{get:function(){return a[e]}})}),r.loadedPromise=t.managed.get(i).then(function(t){angular.extend(a,t,e),o=!0}),r.isLoaded=function(){return o},r.has=function(e){return a.hasOwnProperty(e)},r.get=function(e){return a[e]},t.onChanged.addListener(function(e,t){"managed"===t&&(angular.forEach(e,function(e,t){a[t]=e.newValue}),n.$$phase||n.$digest())}),r}]}),angular.module("castifyExt.castifyAuth",["castifyExt.simpleBgServiceConsumer"]).factory("castifyAuth",["simpleBgServiceConsumer",function(e){return e("castifyAuth",["launchWebAuthFlow","getRedirectURL","removeCachedAuthToken","getAuthToken","getAccount"])}]).factory("googleauth",["castifyAuth","$q",function(e,t){var n={};return n.loadClient=function(){return t.when()},n.getAuthToken=function(t){e.getAuthToken(angular.isObject(t)?t:{interactive:!!t})},n}]),angular.module("castifyExt.simpleBgServiceConsumer",["w69b.chromeRuntime"]).factory("simpleBgServiceConsumer",["chromeRuntime","$q",function(e,t){function n(n,r){function o(e){return e.error?t.reject(e.error):e.data}function a(t){return function(){return e.sendMessage({type:"simpleService",fn:t,service:n,data:Array.prototype.concat.apply([],arguments)}).then(o)}}var i={};return r.forEach(function(e){i[e]=a(e)}),i}return n}]),angular.module("castifyExt.backgroundTool",["w69b.chromeRuntime"]).factory("backgroundTool",["chromeRuntime","$q","$log","$rootScope",function(e,t,n,r){function o(){var n=t.defer();return e.onMessage.addListener(function r(t){"bg:loaded"===t&&(e.onMessage.removeListener(r),n.resolve())}),e.sendMessage("bg:load")["catch"](angular.identity),n.promise}var a,i={};return i.portHelper=function(n,a){var i,c={};return c.getPort=function(){var r=a===!1?t.when():o();return r.then(function(){return i||(i=e.connect({name:n})),i})},c.postMessage=function(e,t){return c.getPort().then(function(n){return n.postMessage({type:e,data:t})})},c.installHandlers=function(e){function t(t){
e.hasOwnProperty(t.type)&&e[t.type](t.data),r.$$phase||r.$apply()}function n(){c.getPort().then(function(e){e.onMessage.removeListener(t)})}return c.getPort().then(function(e){e.onMessage.addListener(t)}),n},c},i.loadBackground=function(){return a||(a=o()),a},i}]),angular.module("castifyExt.fileDbClient",["castifyExt.backgroundTool","castifyExt.appOptions","castifyExt.castifyAuth"]).factory("fileDbClient",["backgroundTool","$q","appOptions","castifyAuth","$log",function(e,t,n,r,o){function a(){return d||(d=t.defer(),l.postMessage("subscribe")),d.promise}function i(e){angular.extend(this,e),this.createdAt&&(this.createdAt=new Date(this.createdAt))}function c(e){var t=f[e.id];return t?(angular.copy(e,t),t):(f[e.id]=e,e)}function u(e){var t=f[e];t&&(t.deleted=!0,delete f[e])}function s(e,t){var n;t&&(n={},angular.forEach(f,function(e,t){n[t]=!0})),angular.forEach(e,function(e,r){c(new i(e)),t&&delete n[r]}),t&&angular.forEach(n,function(e,t){u(t)})}var l=e.portHelper("files",!1),f={},p={},d=null,g=!1,h={},m=0,y=i.prototype;y.getUrl=function(){var e=this;return e.urlRequiresAccessToken?r.getAuthToken({interactive:!1}).then(function(t){var n=e.url;return n+=n.indexOf("?")>=0?"&":"?",n+"access_token="+t}):t.when(e.url)};var v={};return v.filesUpdate=function(e){e.remove&&e.remove.forEach(u),e.add&&s(e.add,!1),e.full?(s(e.full,!0),!g&&d&&(g=!0,d.resolve())):e.error&&(g=!1,d&&(d.reject(),d=null)),m++},v.reloadSuccess=function(e){h[e]&&(h[e].resolve(),delete h[e])},v.reloadError=function(e){h[e]&&(h[e].reject(),delete h[e])},l.installHandlers(v),p.getFileDescriptor=function(e){return a().then(function(){var n=f[e];return n?n:t.reject()})},p.listFiles=function(){return a().then(function(){return f})},p.rename=function(e,t){var n=f[e];n&&(n.title=t),l.postMessage("rename",{id:e,title:t})},p.reload=function(e){return h[e]||(h[e]=t.defer(),l.postMessage("reload",e)),h[e].promise},p.remove=function(e){o.debug("fileDbClient.remove",e),u(e),l.postMessage("remove",e)},p.removeAll=function(e){o.debug("fileDbClient.removeAll"),angular.copy({},f),l.postMessage("removeAll",e)},p.isSyncEnabled=function(){return n.values.driveSync},p.getListVersionId=function(){return m},p}]),angular.module("castifyExt.localFileDb",["w69b.chromeStorage","w69b.filesHelper"]).factory("localFileDb",["$filter","$q","chromeStorage","filesHelper",function(e,t,n,r){function o(e){return s+e}function a(e){var t=o(e),n=u.getSingle(t,{});return n}function i(e){angular.extend(this,e)}var c={},u=n.local,s="filedb_",l=i.prototype;return i.createFromIdOrFileEntry=function(e){var n,o,u=angular.isString(e)?r.getFileEntryByPath(c.idToFilename(e)):t.when(e);return u.then(function(e){return n=e,o=c.filenameToId(e.name),t.all({metadata:r.getMetadata(n),info:a(o)}).then(function(e){var t=n.toURL(),r={id:o,uuid:o,url:t,mimeType:"video/webm",createdAt:e.metadata.modificationTime,title:e.info.title,size:e.metadata.size};if(e.info.videoInfo){var a=e.info.videoInfo;angular.extend(r,{duration:a.duration,width:a.size.width,height:a.size.height})}if(e.info.previewImages&&(r.thumbnailUrl=e.info.previewImages[0].url),e.info.driveInfo&&(r.driveInfo=e.info.driveInfo),e.info.youtubeInfo){var c=e.info.youtubeInfo;r.youtubeInfo={id:c.id,channelId:c.channelId}}return e.info.autoShare&&(r.autoShare=e.info.autoShare),new i(r)})})},l.rename=function(e){return c.updateInfo(this.id,{title:e})},l.remove=function(){var e=this.id;return t.all({result:r.removeByPath(c.idToFilename(e)),info:a(e)}).then(function(e){if(e.info.previewImages)return t.all(e.info.previewImages.map(function(e){return r.removeByPath(e.path)}))}).then(function(){return u.remove(o(e))})},l.updateYoutubeInfo=function(e){return c.updateInfo(this.id,{youtubeInfo:e})},c.listFiles=function(){return r.listByPath("/").then(function(e){var n=[];return e.forEach(function(e){e.isFile&&"."!==e.name[0]&&n.push(i.createFromIdOrFileEntry(e))}),t.all(n).then(function(e){var t={};return e.forEach(function(e){t[e.id]=e}),t})})},c.filenameToId=function(e){if(/\.webm/i.test(e))return e.slice(0,-5);throw new Error("invalid filename: "+e)},c.idToFilename=function(e){return e+".webm"},c.getFileDescriptor=function(e){return i.createFromIdOrFileEntry(e)},c.updateInfo=function(e,n,r){var a,i=o(e);return a=r?t.when(n):u.get(i).then(function(e){return angular.extend(e[i]||{},n)}),a.then(function(e){var t={};return t[i]=e,u.set(t),e})},c}]),angular.module("castifyExt.ConnectApp",["castifyExt.commonConfig","castifyExt.connect.connectFrame"]).run(["connectFrame",function(e){e.install()}])}();