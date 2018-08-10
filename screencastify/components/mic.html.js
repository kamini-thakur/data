"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}!function(){angular.module("w69b.promiseTool",[]).factory("promiseTool",["$q","$timeout",function(e,r){var n={};return n.wrapChromeError=function(r,n){return function(){var t=Array.prototype.slice.call(arguments,0),i=e.defer();return t.push(function(e){chrome.runtime.lastError?i.reject(chrome.runtime.lastError):i.resolve(e)}),r.apply(n,t),i.promise}},n.wrapCallbacks=function(r,n){return function(){var t=Array.prototype.slice.call(arguments,0),i=e.defer();return t.push(i.resolve.bind(i)),t.push(i.reject.bind(i)),r.apply(n,t),i.promise}},n.serializer=function(){var r=null,n=function(n){var t=e.defer();return(r||e.when())["finally"](function(){var e=n.call();t.resolve(e)}),r=t.promise,r["finally"](function(){r=null}),t.promise};return n.wrap=function(e){return function(){return n(e.bind.apply(e,[this].concat(Array.prototype.slice.call(arguments))))}},n},n.withTimeout=function(n,t,i){i||(i=angular.noop);var o=e.defer(),a=r(function(){var e=i();angular.isDefined(e)?o.resolve(e):o.reject("timeout"),o=null},t),u=n(),c=o.promise;return u["finally"](function(){r.cancel(a),a=null}),u.then(function(){o&&o.resolve.apply(o,arguments)},function(){o&&o.reject.apply(o,arguments)}),c},n}]),angular.module("w69b.webrtc",["w69b.promiseTool","w69b.spawn"]).factory("webrtc",["promiseTool","$window","$q","spawn",function(e,r,n,t){function i(e){return e.some(function(e){return!!e.label})}var o={},a=r.navigator;return o.getUserMedia=e.wrapCallbacks(a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia,a),a.mediaDevices&&a.mediaDevices.enumerateDevices?o.getSources=function(){return n.when(a.mediaDevices.enumerateDevices()).then(function(e){return e.filter(function(e){return e.kind.endsWith("input")}).map(function(e){var r={id:e.deviceId,label:e.label};return r.kind=e.kind.substring(0,e.kind.length-5),r})})}:o.getSources=e.wrapCallbacks(MediaStreamTrack.getSources,MediaStreamTrack),o.getSourcesByKind=function(e){return o.getSources().then(function(r){return r.filter(function(r){return r.kind===e})})},o.getVideoSources=function(){return o.getSourcesByKind("video")},o.getAudioSources=function(){return o.getSourcesByKind("audio")},o.hasCamera=function(){return o.getVideoSources().then(function(e){return e.length>0})},o.hasMicrophone=function(){return o.getAudioSources().then(function(e){return e.length>0})},o.hasVideoAccess=function(){return o.getVideoSources().then(i)},o.hasAudioAccess=function(){return o.getAudioSources().then(i)},o.getCameraAndMicPermission=t.wrap(regeneratorRuntime.mark(function u(){var e,r,n,t;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,o.hasCamera();case 2:return e=i.sent,r=!1,n=!1,i.prev=5,i.next=8,o.getUserMedia({audio:!0,video:e});case 8:t=i.sent,n=!!t.getVideoTracks().length,r=!!t.getAudioTracks().length,t.getTracks().forEach(function(e){e.stop()}),i.next=16;break;case 14:i.prev=14,i.t0=i["catch"](5);case 16:return i.abrupt("return",{video:n,audio:r});case 17:case"end":return i.stop()}},u,this,[[5,14]])})),o}]),angular.module("w69b.spawn",[]).factory("spawn",["$q",function(e){function r(r,n){function t(e,r){var n;try{n=e(r)}catch(t){return i(t)}return n.done?o(n.value):o(n.value).then(u,c)}var i=n?Promise.reject.bind(Promise):e.reject.bind(e),o=n?Promise.resolve.bind(Promise):e.when.bind(e),a=r(),u=t.bind(null,a.next.bind(a)),c=t.bind(null,a["throw"].bind(a));return u()}return r.wrap=function(e){return function(){var n=arguments;return r(e.bind.apply(e,[this].concat(_toConsumableArray(n))))}},r}]),angular.module("castifyExt.MicApp",["castifyExt.mic.ui","ngMaterial"]),angular.module("castifyExt.mic.ui",["w69b.webrtc"]).controller("MicStreamCtrl",["$scope","webrtc","$window","$log",function(e,r,n,t){function i(){r.hasCamera().then(function(i){r.getUserMedia({audio:!0,video:i}).then(function(r){e.state="success";var t=!!r.getVideoTracks().length;r.getTracks().forEach(function(e){e.stop()}),n.clGotStream&&(n.clGotStream(),n.close()),!t&&i&&(e.state="error")},function(r){t.info(r),e.state="error"})})}e.state="init",e.record=i,i()}])}();