var $jscomp={scope:{},getGlobal:function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global?global:a}};$jscomp.global=$jscomp.getGlobal(this);$jscomp.initSymbol=function(){$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol);$jscomp.initSymbol=function(){}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return"jscomp_symbol_"+a+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();$jscomp.global.Symbol.iterator||($jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));$jscomp.initSymbolIterator=function(){}};
$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();if(a[$jscomp.global.Symbol.iterator])return a[$jscomp.global.Symbol.iterator]();if(!(a instanceof Array||"string"==typeof a||a instanceof String))throw new TypeError(a+" is not iterable");var b=0;return{next:function(){return b==a.length?{done:!0}:{done:!1,value:a[b++]}}}};$jscomp.arrayFromIterator=function(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c};
$jscomp.arrayFromIterable=function(a){return a instanceof Array?a:$jscomp.arrayFromIterator($jscomp.makeIterator(a))};$jscomp.arrayFromArguments=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b};$jscomp.inherits=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if($jscomp.global.Object.defineProperties){var e=$jscomp.global.Object.getOwnPropertyDescriptor(b,d);$jscomp.global.Object.defineProperty(a,d,e)}else a[d]=b[d]};
$jscomp.array=$jscomp.array||{};$jscomp.array.done_=function(){return{done:!0,value:void 0}};$jscomp.array.arrayIterator_=function(a,b){a instanceof String&&(a=String(a));var c=0;$jscomp.initSymbol();$jscomp.initSymbolIterator();var d={},e=(d.next=function(){if(c<a.length){var d=c++;return{value:b(d,a[d]),done:!1}}e.next=$jscomp.array.done_;return $jscomp.array.done_()},d[Symbol.iterator]=function(){return e},d);return e};
$jscomp.array.findInternal_=function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}};
$jscomp.array.from=function(a,b,c){b=void 0===b?function(a){return a}:b;var d=[];$jscomp.initSymbol();$jscomp.initSymbolIterator();if(a[Symbol.iterator]){$jscomp.initSymbol();$jscomp.initSymbolIterator();a=a[Symbol.iterator]();for(var e;!(e=a.next()).done;)d.push(b.call(c,e.value))}else{e=a.length;for(var f=0;f<e;f++)d.push(b.call(c,a[f]))}return d};$jscomp.array.of=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return $jscomp.array.from(b)};
$jscomp.array.entries=function(){return $jscomp.array.arrayIterator_(this,function(a,b){return[a,b]})};$jscomp.array.entries$install=function(){Array.prototype.entries||(Array.prototype.entries=$jscomp.array.entries)};$jscomp.array.keys=function(){return $jscomp.array.arrayIterator_(this,function(a){return a})};$jscomp.array.keys$install=function(){Array.prototype.keys||(Array.prototype.keys=$jscomp.array.keys)};$jscomp.array.values=function(){return $jscomp.array.arrayIterator_(this,function(a,b){return b})};
$jscomp.array.values$install=function(){Array.prototype.values||(Array.prototype.values=$jscomp.array.values)};$jscomp.array.copyWithin=function(a,b,c){var d=this.length;a=Number(a);b=Number(b);c=Number(null!=c?c:d);if(a<b)for(c=Math.min(c,d);b<c;)b in this?this[a++]=this[b++]:(delete this[a++],b++);else for(c=Math.min(c,d+b-a),a+=c-b;c>b;)--c in this?this[--a]=this[c]:delete this[a];return this};$jscomp.array.copyWithin$install=function(){Array.prototype.copyWithin||(Array.prototype.copyWithin=$jscomp.array.copyWithin)};
$jscomp.array.fill=function(a,b,c){null!=c&&a.length||(c=this.length||0);c=Number(c);for(b=Number((void 0===b?0:b)||0);b<c;b++)this[b]=a;return this};$jscomp.array.fill$install=function(){Array.prototype.fill||(Array.prototype.fill=$jscomp.array.fill)};$jscomp.array.find=function(a,b){return $jscomp.array.findInternal_(this,a,b).v};$jscomp.array.find$install=function(){Array.prototype.find||(Array.prototype.find=$jscomp.array.find)};
$jscomp.array.findIndex=function(a,b){return $jscomp.array.findInternal_(this,a,b).i};$jscomp.array.findIndex$install=function(){Array.prototype.findIndex||(Array.prototype.findIndex=$jscomp.array.findIndex)};$jscomp.Map=function(a){a=void 0===a?[]:a;this.data_={};this.head_=$jscomp.Map.createHead_();this.size=0;if(a){a=$jscomp.makeIterator(a);for(var b=a.next();!b.done;b=a.next())b=b.value,this.set(b[0],b[1])}};
$jscomp.Map.checkBrowserConformance_=function(){var a=$jscomp.global.Map;if(!a||!a.prototype.entries||!Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a($jscomp.makeIterator([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(f){return!1}};
$jscomp.Map.createHead_=function(){var a={};return a.previous=a.next=a.head=a};$jscomp.Map.getId_=function(a){if(!(a instanceof Object))return String(a);$jscomp.Map.key_ in a||a instanceof Object&&Object.isExtensible&&Object.isExtensible(a)&&$jscomp.Map.defineProperty_(a,$jscomp.Map.key_,++$jscomp.Map.index_);return $jscomp.Map.key_ in a?a[$jscomp.Map.key_]:" "+a};
$jscomp.Map.prototype.set=function(a,b){var c=this.maybeGetEntry_(a),d=c.id,e=c.list,c=c.entry;e||(e=this.data_[d]=[]);c?c.value=b:(c={next:this.head_,previous:this.head_.previous,head:this.head_,key:a,value:b},e.push(c),this.head_.previous.next=c,this.head_.previous=c,this.size++);return this};
$jscomp.Map.prototype["delete"]=function(a){var b=this.maybeGetEntry_(a);a=b.id;var c=b.list,d=b.index;return(b=b.entry)&&c?(c.splice(d,1),c.length||delete this.data_[a],b.previous.next=b.next,b.next.previous=b.previous,b.head=null,this.size--,!0):!1};$jscomp.Map.prototype.clear=function(){this.data_={};this.head_=this.head_.previous=$jscomp.Map.createHead_();this.size=0};$jscomp.Map.prototype.has=function(a){return!!this.maybeGetEntry_(a).entry};
$jscomp.Map.prototype.get=function(a){return(a=this.maybeGetEntry_(a).entry)&&a.value};$jscomp.Map.prototype.maybeGetEntry_=function(a){var b=$jscomp.Map.getId_(a),c=this.data_[b];if(c)for(var d=0;d<c.length;d++){var e=c[d];if(a!==a&&e.key!==e.key||a===e.key)return{id:b,list:c,index:d,entry:e}}return{id:b,list:c,index:-1,entry:void 0}};$jscomp.Map.prototype.entries=function(){return this.iter_(function(a){return[a.key,a.value]})};$jscomp.Map.prototype.keys=function(){return this.iter_(function(a){return a.key})};
$jscomp.Map.prototype.values=function(){return this.iter_(function(a){return a.value})};$jscomp.Map.prototype.forEach=function(a,b){for(var c=$jscomp.makeIterator(this.entries()),d=c.next();!d.done;d=c.next())d=d.value,a.call(b,d[1],d[0],this)};
$jscomp.Map.prototype.iter_=function(a){var b=this,c=this.head_;$jscomp.initSymbol();$jscomp.initSymbolIterator();var d={};return d.next=function(){if(c){for(;c.head!=b.head_;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:a(c)};c=null}return{done:!0,value:void 0}},d[Symbol.iterator]=function(){return this},d};$jscomp.Map.index_=0;$jscomp.Map.defineProperty_=Object.defineProperty?function(a,b,c){Object.defineProperty(a,b,{value:String(c)})}:function(a,b,c){a[b]=String(c)};
$jscomp.Map.Entry_=function(){};$jscomp.Map.ASSUME_NO_NATIVE=!1;$jscomp.Map$install=function(){$jscomp.initSymbol();$jscomp.initSymbolIterator();!$jscomp.Map.ASSUME_NO_NATIVE&&$jscomp.Map.checkBrowserConformance_()?$jscomp.Map=$jscomp.global.Map:($jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Map.prototype[Symbol.iterator]=$jscomp.Map.prototype.entries,$jscomp.initSymbol(),$jscomp.Map.key_=Symbol("map-id-key"));$jscomp.Map$install=function(){}};$jscomp.math=$jscomp.math||{};
$jscomp.math.clz32=function(a){a=Number(a)>>>0;if(0===a)return 32;var b=0;0===(a&4294901760)&&(a<<=16,b+=16);0===(a&4278190080)&&(a<<=8,b+=8);0===(a&4026531840)&&(a<<=4,b+=4);0===(a&3221225472)&&(a<<=2,b+=2);0===(a&2147483648)&&b++;return b};$jscomp.math.imul=function(a,b){a=Number(a);b=Number(b);var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};$jscomp.math.sign=function(a){a=Number(a);return 0===a||isNaN(a)?a:0<a?1:-1};
$jscomp.math.log10=function(a){return Math.log(a)/Math.LN10};$jscomp.math.log2=function(a){return Math.log(a)/Math.LN2};$jscomp.math.log1p=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0,f=1;e!=d;)b*=a,f*=-1,d=(e=d)+f*b/++c;return d}return Math.log(1+a)};$jscomp.math.expm1=function(a){a=Number(a);if(.25>a&&-.25<a){for(var b=a,c=1,d=a,e=0;e!=d;)b*=a/++c,d=(e=d)+b;return d}return Math.exp(a)-1};$jscomp.math.cosh=function(a){a=Number(a);return(Math.exp(a)+Math.exp(-a))/2};
$jscomp.math.sinh=function(a){a=Number(a);return 0===a?a:(Math.exp(a)-Math.exp(-a))/2};$jscomp.math.tanh=function(a){a=Number(a);if(0===a)return a;var b=Math.exp(2*-Math.abs(a)),b=(1-b)/(1+b);return 0>a?-b:b};$jscomp.math.acosh=function(a){a=Number(a);return Math.log(a+Math.sqrt(a*a-1))};$jscomp.math.asinh=function(a){a=Number(a);if(0===a)return a;var b=Math.log(Math.abs(a)+Math.sqrt(a*a+1));return 0>a?-b:b};
$jscomp.math.atanh=function(a){a=Number(a);return($jscomp.math.log1p(a)-$jscomp.math.log1p(-a))/2};
$jscomp.math.hypot=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];a=Number(a);b=Number(b);for(var f=Math.max(Math.abs(a),Math.abs(b)),g=$jscomp.makeIterator(d),e=g.next();!e.done;e=g.next())f=Math.max(f,Math.abs(e.value));if(1E100<f||1E-100>f){a/=f;b/=f;g=a*a+b*b;d=$jscomp.makeIterator(d);for(e=d.next();!e.done;e=d.next())e=e.value,e=Number(e)/f,g+=e*e;return Math.sqrt(g)*f}f=a*a+b*b;d=$jscomp.makeIterator(d);for(e=d.next();!e.done;e=d.next())e=e.value,f+=e*e;return Math.sqrt(f)};
$jscomp.math.trunc=function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b};$jscomp.math.cbrt=function(a){if(0===a)return a;a=Number(a);var b=Math.pow(Math.abs(a),1/3);return 0>a?-b:b};$jscomp.number=$jscomp.number||{};$jscomp.number.isFinite=function(a){return"number"!==typeof a?!1:!isNaN(a)&&Infinity!==a&&-Infinity!==a};$jscomp.number.isInteger=function(a){return $jscomp.number.isFinite(a)?a===Math.floor(a):!1};
$jscomp.number.isNaN=function(a){return"number"===typeof a&&isNaN(a)};$jscomp.number.isSafeInteger=function(a){return $jscomp.number.isInteger(a)&&Math.abs(a)<=$jscomp.number.MAX_SAFE_INTEGER};$jscomp.number.EPSILON=Math.pow(2,-52);$jscomp.number.MAX_SAFE_INTEGER=9007199254740991;$jscomp.number.MIN_SAFE_INTEGER=-9007199254740991;$jscomp.object=$jscomp.object||{};
$jscomp.object.assign=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];c=$jscomp.makeIterator(c);for(d=c.next();!d.done;d=c.next()){var d=d.value,e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};$jscomp.object.is=function(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b};$jscomp.Set=function(a){a=void 0===a?[]:a;this.map_=new $jscomp.Map;if(a){a=$jscomp.makeIterator(a);for(var b=a.next();!b.done;b=a.next())this.add(b.value)}this.size=this.map_.size};
$jscomp.Set.checkBrowserConformance_=function(){var a=$jscomp.global.Set;if(!a||!a.prototype.entries||!Object.seal)return!1;var b=Object.seal({x:4}),a=new a($jscomp.makeIterator([b]));if(a.has(b)||1!=a.size||a.add(b)!=a||1!=a.size||a.add({x:4})!=a||2!=a.size)return!1;var a=a.entries(),c=a.next();if(c.done||c.value[0]!=b||c.value[1]!=b)return!1;c=a.next();return c.done||c.value[0]==b||4!=c.value[0].x||c.value[1]!=c.value[0]?!1:a.next().done};
$jscomp.Set.prototype.add=function(a){this.map_.set(a,a);this.size=this.map_.size;return this};$jscomp.Set.prototype["delete"]=function(a){a=this.map_["delete"](a);this.size=this.map_.size;return a};$jscomp.Set.prototype.clear=function(){this.map_.clear();this.size=0};$jscomp.Set.prototype.has=function(a){return this.map_.has(a)};$jscomp.Set.prototype.entries=function(){return this.map_.entries()};$jscomp.Set.prototype.values=function(){return this.map_.values()};
$jscomp.Set.prototype.forEach=function(a,b){var c=this;this.map_.forEach(function(d){return a.call(b,d,d,c)})};$jscomp.Set.ASSUME_NO_NATIVE=!1;$jscomp.Set$install=function(){!$jscomp.Set.ASSUME_NO_NATIVE&&$jscomp.Set.checkBrowserConformance_()?$jscomp.Set=$jscomp.global.Set:($jscomp.Map$install(),$jscomp.initSymbol(),$jscomp.initSymbolIterator(),$jscomp.Set.prototype[Symbol.iterator]=$jscomp.Set.prototype.values);$jscomp.Set$install=function(){}};$jscomp.string=$jscomp.string||{};
$jscomp.string.noRegExp_=function(a,b){if(a instanceof RegExp)throw new TypeError("First argument to String.prototype."+b+" must not be a regular expression");};
$jscomp.string.fromCodePoint=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];for(var c="",b=$jscomp.makeIterator(b),d=b.next();!d.done;d=b.next()){d=d.value;d=+d;if(0>d||1114111<d||d!==Math.floor(d))throw new RangeError("invalid_code_point "+d);65535>=d?c+=String.fromCharCode(d):(d-=65536,c+=String.fromCharCode(d>>>10&1023|55296),c+=String.fromCharCode(d&1023|56320))}return c};
$jscomp.string.repeat=function(a){var b=this.toString();if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c};$jscomp.string.repeat$install=function(){String.prototype.repeat||(String.prototype.repeat=$jscomp.string.repeat)};
$jscomp.string.codePointAt=function(a){var b=this.toString(),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*(d-55296)+a+9216}};$jscomp.string.codePointAt$install=function(){String.prototype.codePointAt||(String.prototype.codePointAt=$jscomp.string.codePointAt)};
$jscomp.string.includes=function(a,b){b=void 0===b?0:b;$jscomp.string.noRegExp_(a,"includes");return-1!==this.toString().indexOf(a,b)};$jscomp.string.includes$install=function(){String.prototype.includes||(String.prototype.includes=$jscomp.string.includes)};
$jscomp.string.startsWith=function(a,b){b=void 0===b?0:b;$jscomp.string.noRegExp_(a,"startsWith");var c=this.toString();a+="";for(var d=c.length,e=a.length,f=Math.max(0,Math.min(b|0,c.length)),g=0;g<e&&f<d;)if(c[f++]!=a[g++])return!1;return g>=e};$jscomp.string.startsWith$install=function(){String.prototype.startsWith||(String.prototype.startsWith=$jscomp.string.startsWith)};
$jscomp.string.endsWith=function(a,b){$jscomp.string.noRegExp_(a,"endsWith");var c=this.toString();a+="";void 0===b&&(b=c.length);for(var d=Math.max(0,Math.min(b|0,c.length)),e=a.length;0<e&&0<d;)if(c[--d]!=a[--e])return!1;return 0>=e};$jscomp.string.endsWith$install=function(){String.prototype.endsWith||(String.prototype.endsWith=$jscomp.string.endsWith)};
(function(a){function b(a,b,c,d){if("string"!=typeof a)throw"System.register provided no module name";b="boolean"==typeof c?{declarative:!1,deps:b,execute:d,executingRequire:c}:{declarative:!0,deps:b,declare:c};b.name=a;a in l||(l[a]=b);a=b.deps;c=[];d=0;for(var e=a.length;d<e;d++)-1==m.call(c,a[d])&&c.push(a[d]);b.deps=c;b.normalizedDeps=b.deps}function c(a,b){b[a.groupIndex]=b[a.groupIndex]||[];if(-1==m.call(b[a.groupIndex],a)){b[a.groupIndex].push(a);for(var d=0,e=a.normalizedDeps.length;d<e;d++){var f=
l[a.normalizedDeps[d]];if(f&&!f.evaluated){var g=a.groupIndex+(f.declarative!=a.declarative);if(void 0===f.groupIndex||f.groupIndex<g){if(void 0!==f.groupIndex&&(b[f.groupIndex].splice(m.call(b[f.groupIndex],f),1),0==b[f.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");f.groupIndex=g}c(f,b)}}}}function d(a){return k[a]||(k[a]={name:a,dependencies:[],exports:{},importers:[]})}function e(b){if(!b.module){var c=b.module=d(b.name),f=b.module.exports,g=b.declare.call(a,function(a,
b){c.locked=!0;f[a]=b;for(var d=0,e=c.importers.length;d<e;d++){var g=c.importers[d];if(!g.locked){var h=m.call(g.dependencies,c);g.setters[h](f)}}c.locked=!1;return b});c.setters=g.setters;c.execute=g.execute;if(!c.setters||!c.execute)throw new TypeError("Invalid System.register form for "+b.name);for(var g=0,r=b.normalizedDeps.length;g<r;g++){var q=b.normalizedDeps[g],n=l[q],p=k[q];p?q=p.exports:n&&!n.declarative?q=n.module.exports&&n.module.exports.__esModule?n.module.exports:{"default":n.module.exports,
__useDefault:!0}:n?(e(n),p=n.module,q=p.exports):q=h(q);p&&p.importers?(p.importers.push(c),c.dependencies.push(p)):c.dependencies.push(null);if(c.setters[g])c.setters[g](q)}}}function f(b){if(!b.module){var c={},d=b.module={exports:c,id:b.name};if(!b.executingRequire)for(var e=0,r=b.normalizedDeps.length;e<r;e++){var k=l[b.normalizedDeps[e]];k&&f(k)}b.evaluated=!0;if(c=b.execute.call(a,function(a){for(var c=0,d=b.deps.length;c<d;c++)if(b.deps[c]==a){a=b.normalizedDeps[c];c=void 0;if(d=l[a])d.declarative?
g(a,[]):d.evaluated||f(d),c=d.module.exports;else if(c=h(a),!c)throw Error("Unable to load dependency "+a+".");a=(!d||d.declarative)&&c&&c.__useDefault?c["default"]:c;return a}throw new TypeError("Module "+a+" not declared as a dependency.");},c,d))d.exports=c}}function g(b,c){var d=l[b];if(d&&!d.evaluated&&d.declarative){c.push(b);for(var e=0,f=d.normalizedDeps.length;e<f;e++){var k=d.normalizedDeps[e];-1==m.call(c,k)&&(l[k]?g(k,c):h(k))}d.evaluated||(d.evaluated=!0,d.module.execute.call(a))}}function h(a){if(r[a])return r[a];
var b=l[a];if(!b)throw"Module "+a+" not present.";var d=l[a];d.groupIndex=0;var k=[];c(d,k);for(var d=!!d.declarative==k.length%2,h=k.length-1;0<=h;h--){for(var m=k[h],n=0;n<m.length;n++){var p=m[n];d?e(p):f(p)}d=!d}g(a,[]);l[a]=void 0;k=b.module.exports;if(!k||!b.declarative&&!0!==k.__esModule)k={"default":k,__useDefault:!0};return r[a]=k}var l={},m=Array.prototype.indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]===a)return b;return-1},k={},r={};return function(c,d){var e;e={register:b,
get:h,set:function(a,b){r[a]=b},newModule:function(a){return a},global:a};e.set("@empty",{});d(e);for(e=0;e<c.length;e++)h(c[e])}})("undefined"!=typeof window?window:global)(["background-exports"],function(a){a.register("crypto",[],function(a){var c;a("generateKey",function(){return c.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"])});a("exportKey",function(a){return c.subtle.exportKey("jwk",a)});a("importKey",function(a){return c.subtle.importKey("jwk",a,{name:"AES-GCM"},
!0,["encrypt","decrypt"])});a("encrypt",function(a,b){var f=window.crypto.getRandomValues(new Uint8Array(16)),g=new Uint8Array(0);return c.subtle.encrypt({name:"AES-GCM",iv:f,additionalData:g,tagLength:128},b,a).then(function(a){return[f,g,a]})});a("decrypt",function(a,b){return c.subtle.decrypt({name:"AES-GCM",iv:a[0],additionalData:a[1],tagLength:128},b,a[2])});return{setters:[],execute:function(){c=window.crypto}}});a.register("bg-storage-service",[],function(a){function c(){f||(f=new e);return f}
var d,e,f;return{setters:[],execute:function(){d={set:function(a,b){return new Promise(function(c,d){var e;chrome.storage.local.set((e={},Object.defineProperty(e,a,{value:b,configurable:!0,enumerable:!0,writable:!0}),e),function(){if(chrome.runtime.lastError)return d(chrome.runtime.lastError);c()})})},get:function(a,b){return new Promise(function(c,d){chrome.storage.local.get(a,function(e){if(chrome.runtime.lastError)return d(chrome.runtime.lastError);c(e.hasOwnProperty(a)?e[a]:b)})})}};e=function(){function a(){return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:e=
d.get("cfDraw_store",{});a.state=5;break;case 5:Promise.resolve(e).then(a.createCallback(3),a.errback);return;case 3:f=a.value;a.state=-2;break;default:return a.end()}},this)}var b={},c=!1,e=null,f;b.getData=function(){return $traceurRuntime.asyncWrap(function(a){for(;;)switch(a.state){case 0:Promise.resolve(e).then(a.createCallback(2),a.errback);return;case 2:a.returnValue=f;a.state=4;break;case 4:a.state=-2;break;default:return a.end()}},this)};b.start=function(){if(c)throw Error("bg-storage-service already started");
c=!0;a()};b.stop=function(){c&&(c=!1)};b.onMessage=function(a){c&&a&&"castifyDrawStore"===a.type&&(f=a.data,d.set("cfDraw_store",f))};b.STORE_MSG_TYPE="castifyDrawStore";return b};f=null;a("getBgStorageService",c)}}});a.register("chrome-messaging",[],function(a){function c(a){return a instanceof Error?Promise.reject(a.toString()):Promise.reject(a)}a("sendMessage",function(a,b){return new Promise(function(c,g){chrome.runtime.sendMessage({type:a,data:b},function(a){chrome.runtime.lastError?g(chrome.runtime.lastError):
a?"result"===a.type?c(a.data):"error"===a.type&&g(a.data):g()})})});a("respond",function(a,b){Promise.resolve(b).catch(c).then(function(b){a({type:"result",data:b})},function(b){a({type:"error",data:b})})});return{setters:[],execute:function(){}}});a.register("w69b/q",[],function(a){var c;return{setters:[],execute:function(){c={defer:function(){var a={};a.promise=new Promise(function(b,c){a.resolve=b;a.reject=c});return a}};c.when=Promise.resolve.bind(Promise);c.all=Promise.all.bind(Promise);c.reject=
Promise.reject.bind(Promise);Promise.prototype.finally||(Promise.prototype.finally=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){throw c;})})});a("default",c)}}});a.register("throttle",[],function(a){function c(a,b,c){var g,h,l;c=!1!==c;var m=function(){l=Object.assign([],arguments);h=function(){h=g=null;return a.apply(null,l)};c?(g&&window.clearTimeout(g),g=window.setTimeout(h,b)):
g||(g=window.setTimeout(h,b))};m.flush=function(){g&&(window.clearTimeout(g),h())};m.cancel=function(){g&&window.clearTimeout(g)};return m}return{setters:[],execute:function(){a("default",c)}}});a.register("bg-message-service",["crypto"],function(a){function c(){f||(f=new e);return f}var d,e,f;return{setters:[function(a){d=a}],execute:function(){e=function(){function a(c,d,e){if(!c)return!1;if("castifyDrawGetMsgKey"===c.type){if(d.tab.url.startsWith("https://"))return b.then(function(a){e(a)}).catch(function(){e(null)}),
!0;e("plain")}else if("castifyDrawFrameBroadcast"===c.type&&d.tab)chrome.tabs.sendMessage(d.tab.id,c.data);else if("castifyDrawFrameBroadcastWithResult"===c.type&&d.tab)return chrome.tabs.sendMessage(d.tab.id,c.data,function(a){e(a)}),!0;return!1}var b=d.generateKey().then(d.exportKey),c={},e=!1;c.start=function(){e||(chrome.runtime.onMessage.addListener(a),e=!0)};c.stop=function(){e&&(e=!1,chrome.runtime.onMessage.removeListener(a))};return c};f=null;a("getBgMessageService",c)}}});a.register("w69b/promise-tool",
["w69b/q"],function(a){var c,d;return{setters:[function(a){c=a.default}],execute:function(){d={wrapChromeError:function(a,b){return function(){var d=Array.prototype.slice.call(arguments,0),h=c.defer();d.push(function(a){chrome.runtime.lastError?h.reject(chrome.runtime.lastError):h.resolve(a)});a.apply(b,d);return h.promise}},wrapCallbacks:function(a,b){return function(){var d=Array.prototype.slice.call(arguments,0),h=c.defer();d.push(h.resolve.bind(h));d.push(h.reject.bind(h));a.apply(b,d);return h.promise}}};
a("default",d)}}});a.register("w69b/webrtc",["w69b/promise-tool","w69b/q"],function(a){function c(a){return a.some(function(a){return!!a.label})}var d,e,f,g;return{setters:[function(a){d=a.default},function(a){e=a.default}],execute:function(){f={};g=window.navigator;f.getUserMedia=g.mediaDevices&&g.mediaDevices.getUserMedia?g.mediaDevices.getUserMedia.bind(g.mediaDevices):d.wrapCallbacks(g.getUserMedia||g.webkitGetUserMedia||g.mozGetUserMedia||g.msGetUserMedia,g);f.getSources=g.mediaDevices&&g.mediaDevices.enumerateDevices?
function(){return e.when(g.mediaDevices.enumerateDevices()).then(function(a){return a.filter(function(a){return a.kind.endsWith("input")}).map(function(a){var b={id:a.deviceId,label:a.label};b.kind=a.kind.substring(0,a.kind.length-5);return b})})}:window.MediaStreamTrack&&MediaStreamTrack.getSources?d.wrapCallbacks(MediaStreamTrack.getSources,MediaStreamTrack):function(){return Promise.resolve([])};f.getSourcesByKind=function(a){return f.getSources().then(function(b){return b.filter(function(b){return b.kind===
a})})};f.getVideoSources=function(){return f.getSourcesByKind("video")};f.getAudioSources=function(){return f.getSourcesByKind("audio")};f.hasCamera=function(){return f.getVideoSources().then(function(a){return 0<a.length})};f.hasMicrophone=function(){return f.getAudioSources().then(function(a){return 0<a.length})};f.hasVideoAccess=function(){return f.getVideoSources().then(c)};f.hasAudioAccess=function(){return f.getAudioSources().then(c)};a("default",f)}}});a.register("bg-cam-sustain-service",["chrome-messaging",
"w69b/webrtc","throttle"],function(a){function c(){h||(h=new g);return h}var d,e,f,g,h;return{setters:[function(a){d=a},function(a){e=a.default},function(a){f=a.default}],execute:function(){g=function(){function a(){y.cancel();h&&(h.getTracks().forEach(function(a){a.stop()}),B=h=null)}function b(a,c,e){return a&&"castifyDrawCamSustainMsg"===a.type&&(a=a.data)&&E.hasOwnProperty(a.type)?(d.respond(e,E[a.type](a.data)),!0):!1}var c={},g=!1,h,B,y;y=f(a,1E3);var E={start:function(b){return $traceurRuntime.asyncWrap(function(c){for(;;)switch(c.state){case 0:y.cancel();
c.state=12;break;case 12:c.state=h?4:6;break;case 4:c.state=JSON.stringify(B)===JSON.stringify(b)?1:3;break;case 1:c.returnValue=void 0;c.state=2;break;case 2:c.state=-2;break;case 3:a();c.state=6;break;case 6:Promise.resolve(e.getUserMedia({video:b})).then(c.createCallback(10),c.errback);return;case 10:h=c.value;c.state=9;break;case 9:B=b;c.state=-2;break;default:return c.end()}},this)},stop:function(){y()}};c.start=function(){g||(chrome.runtime.onMessage.addListener(b),g=!0)};c.stop=function(){g&&
(g=!1,a(),chrome.runtime.onMessage.removeListener(b))};return c};h=null;a("getBgCamSustainService",c)}}});a.register("bg-castify-draw-service",["bg-message-service","bg-storage-service","bg-cam-sustain-service","throttle"],function(a){function c(a,b){return function(){var c=Array.prototype.slice.call(arguments,0);return new Promise(function(d,e){c.push(function(a){chrome.runtime.lastError?e(chrome.runtime.lastError):d(a)});a.apply(b,c)})}}function d(a,b,c){function d(b){var e=[l.executeScript(a,{file:b?
H:I,allFrames:!0,matchAboutBlank:!0,runAt:"document_start"})];b&&e.push(l.insertCSS(a,{file:c,allFrames:!0,matchAboutBlank:!0,runAt:"document_start"}));return Promise.all(e)}function e(){if(!t){var b=d(!0).then(function(){v=l.connect(a,{name:"castifyDraw"});v.onDisconnect.addListener(function(){t===b&&(t=null)});v.onMessage.addListener(function(a){if(w.hasOwnProperty(a.type))w[a.type](v,a.data);else D&&D(a)});return v});b.catch(function(a){console.error("BgCastifyDrawServiceError",a)});t=b}return t}
function g(a){var c,d;return $traceurRuntime.asyncWrap(function(g){for(;;)switch(g.state){case 0:c=new Promise(function(a){w.initializeDone=function(){w.initializeDone=null;a()}});a=Object.assign({bundlesPath:b},a);g.state=9;break;case 9:Promise.resolve(e()).then(g.createCallback(2),g.errback);return;case 2:Promise.resolve(f().getData()).then(g.createCallback(5),g.errback);return;case 5:d=g.value;g.state=4;break;case 4:z("initialize",{config:a,storage:d});g.state=11;break;case 11:Promise.resolve(c).then(g.createCallback(7),
g.errback);return;case 7:w.initializeDone=null;A=void 0;g.state=-2;break;default:return g.end()}},this)}function m(b){b.tabId==a&&(0===b.frameId?(G.cancel(),C(),g(A)):G())}function q(b){b.replacedTabId===a&&(a=b.tabId,C(),g(A))}function n(a){F(a.tabId)}function p(){chrome.tabs.query({active:!0,windowId:chrome.windows.WINDOW_ID_CURRENT},function(a){F(a.length?a[0].id:-1)})}function F(b){b===a?(x=!0,z("updateTabFocused",x)):x&&(x=!1,z("updateTabFocused",x))}function z(a,b){return e().then(function(c){c.postMessage({type:a,
data:b})})}function C(){t&&(t.then(function(a){a.disconnect()}),t=null)}var H=b+"content-script.js",I=b+"content-script-frame.js",u={},v,t,w={},A,D=null,x=!0,G=h(function(){d()},1E3);u.initialize=function(a){return $traceurRuntime.asyncWrap(function(b){for(;;)switch(b.state){case 0:A=a;b.state=4;break;case 4:Promise.resolve(g(a)).then(b.createCallback(-2),b.errback);return;default:return b.end()}},this)};u.setOnMessageListener=function(a){D=a};u.sendMessage=function(a){return $traceurRuntime.asyncWrap(function(b){for(;;)switch(b.state){case 0:b.returnValue=
z(a.type,a.data);b.state=2;break;case 2:b.state=-2;break;default:return b.end()}},this)};u.dispose=function(){C();chrome.webNavigation.onCommitted.removeListener(m);chrome.webNavigation.onTabReplaced.removeListener(q);chrome.tabs.onActivated.removeListener(n);chrome.windows.onFocusChanged.removeListener(p)};e();chrome.webNavigation.onCommitted.addListener(m);chrome.webNavigation.onTabReplaced.addListener(q);chrome.tabs.onActivated.addListener(n);chrome.windows.onFocusChanged.addListener(p);return u}
var e,f,g,h,l,m;return{setters:[function(a){e=a.getBgMessageService},function(a){f=a.getBgStorageService},function(a){g=a.getBgCamSustainService},function(a){h=a.default}],execute:function(){l={executeScript:c(chrome.tabs.executeScript,chrome.tabs),insertCSS:c(chrome.tabs.insertCSS,chrome.tabs),connect:chrome.tabs.connect.bind(chrome.tabs)};m=function(){return $traceurRuntime.createClass(function(a,b){this._servicesStarted=!1;this._tabBgServices=new Map;this._storageService=f();this._bundlesPath=
a;this._cssPath=b},{_sendMessageToAllTabs:function(a){for(var b=$jscomp.makeIterator(this._tabBgServices.values()),c=b.next();!c.done;c=b.next())c.value.sendMessage(a)},_startServicesIfNotStarted:function(){this._servicesStarted||(this._servicesStarted=!0,e().start(),this._storageService.start(),g().start())},_onMessageListener:function(a,b){var c,d;if(b&&b.type===this._storageService.STORE_MSG_TYPE){this._storageService.onMessage(b);for(var e=$jscomp.makeIterator(this._tabBgServices.entries()),f=
e.next();!f.done;f=e.next()){f=f.value;$jscomp.initSymbol();$jscomp.initSymbolIterator();var f=(c=f[$traceurRuntime.toProperty(Symbol.iterator)](),(d=c.next()).done?void 0:d.value),g=(d=c.next()).done?void 0:d.value;f!==a&&g.sendMessage(b)}}},loadInTab:function(a,b){var c,e;return $traceurRuntime.asyncWrap(function(f){for(;;)switch(f.state){case 0:c=this;this._startServicesIfNotStarted();f.state=8;break;case 8:f.state=this._tabBgServices.get(a)?1:3;break;case 1:f.returnValue=void 0;f.state=2;break;
case 2:f.state=-2;break;case 3:e=new d(a,this._bundlesPath,this._cssPath);e.setOnMessageListener(function(b){return c._onMessageListener(a,b)});this._tabBgServices.set(a,e);f.state=10;break;case 10:Promise.resolve(e.initialize(b)).then(f.createCallback(-2),f.errback);return;default:return f.end()}},this)},disposeInTab:function(a){var b=this._tabBgServices.get(a);b&&(b.dispose(),this._tabBgServices.delete(a),this._tabBgServices.size||this._stopServices())},disposeAll:function(){for(var a=$jscomp.makeIterator(this._tabBgServices.values()),
b=a.next();!b.done;b=a.next())b.value.dispose();this._tabBgServices.clear();this._stopServices()},_stopServices:function(){this._servicesStarted=!1;g().stop();e().stop();this._storageService.stop()}},{})}();a("BgCastifyDrawService",m)}}});a.register("background-exports",["bg-castify-draw-service"],function(a){var c;return{setters:[function(a){c=a.BgCastifyDrawService}],execute:function(){window.BgCastifyDrawService=c}}})});