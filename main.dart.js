{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.jh(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.fx(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={fl:function fl(){},di:function di(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},aN:function aN(){},
aG:function(a){var u,t=H.jj(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
j4:function(a){return v.types[H.V(a)]},
jZ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.r(a).$ic6},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.cG(a)
if(typeof u!=="string")throw H.h(H.eZ(a))
return u},
aS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ir:function(a,b){var u,t
if(typeof a!=="string")H.F(H.eZ(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.a(u,3)
t=H.W(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
iq:function(a){var u,t
if(typeof a!=="string")H.F(H.eZ(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.i4(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bq:function(a){return H.im(a)+H.eW(H.ba(a),0,null)},
im:function(a){var u,t,s,r,q,p,o,n=J.r(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$ib0){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aG(t.length>1&&C.c.ap(t,0)===36?C.c.bG(t,1):t)},
io:function(){return Date.now()},
ip:function(){var u,t
if($.dw!=null)return
$.dw=1000
$.dx=H.iL()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.dw=1e6
$.dx=new H.dv(t)},
U:function(a){throw H.h(H.eZ(a))},
a:function(a,b){if(a==null)J.fd(a)
throw H.h(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,s,null)
u=H.V(J.fd(a))
if(!(b<0)){if(typeof u!=="number")return H.U(u)
t=b>=u}else t=!0
if(t)return P.fX(b,a,s,null,u)
return P.ce(b,s)},
eZ:function(a){return new P.a5(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bp()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.hH})
u.name=""}else u.toString=H.hH
return u},
hH:function(){return J.cG(this.dartException)},
F:function(a){throw H.h(a)},
fF:function(a){throw H.h(P.bX(a))},
ac:function(a){var u,t,s,r,q,p
a=H.jg(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.l([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.dZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
e_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
hc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
h6:function(a,b){return new H.ds(a,b==null?null:b.method)},
fm:function(a,b){var u=b==null,t=u?null:b.method
return new H.df(a,t,u?null:b.receiver)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.fc(a)
if(a==null)return
if(a instanceof H.bj)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.dW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.fm(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.h6(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.hM()
q=$.hN()
p=$.hO()
o=$.hP()
n=$.hS()
m=$.hT()
l=$.hR()
$.hQ()
k=$.hV()
j=$.hU()
i=r.L(u)
if(i!=null)return f.$1(H.fm(H.W(u),i))
else{i=q.L(u)
if(i!=null){i.method="call"
return f.$1(H.fm(H.W(u),i))}else{i=p.L(u)
if(i==null){i=o.L(u)
if(i==null){i=n.L(u)
if(i==null){i=m.L(u)
if(i==null){i=l.L(u)
if(i==null){i=o.L(u)
if(i==null){i=k.L(u)
if(i==null){i=j.L(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.h6(H.W(u),i))}}return f.$1(new H.e1(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cm()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a5(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cm()
return a},
bb:function(a){var u
if(a instanceof H.bj)return a.b
if(a==null)return new H.cA(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cA(a)},
j1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.q(0,a[u],a[t])}return b},
j8:function(a,b,c,d,e,f){H.k(a,"$ifi")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.ep("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j8)
a.$identity=u
return u},
ic:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.dQ().constructor.prototype):Object.create(new H.bd(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.M()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.fV(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.i8(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.fV(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
i8:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.j4,a)
if(typeof a=="function")if(b)return a
else{u=c?H.fS:H.fe
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
i9:function(a,b,c,d){var u=H.fe
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
fV:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ib(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.i9(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.M()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.be
return new Function(r+H.b(q==null?$.be=H.cQ("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.M()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.be
return new Function(r+H.b(q==null?$.be=H.cQ("self"):q)+"."+H.b(u)+"("+o+");}")()},
ia:function(a,b,c,d){var u=H.fe,t=H.fS
switch(b?-1:a){case 0:throw H.h(H.iv("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ib:function(a,b){var u,t,s,r,q,p,o,n=$.be
if(n==null)n=$.be=H.cQ("self")
u=$.fR
if(u==null)u=$.fR=H.cQ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ia(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a7
if(typeof u!=="number")return u.M()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.M()
$.a7=u+1
return new Function(n+u+"}")()},
fx:function(a,b,c,d,e,f,g){return H.ic(a,b,c,d,!!e,!!f,g)},
fe:function(a){return a.a},
fS:function(a){return a.c},
cQ:function(a){var u,t,s,r=new H.bd("self","target","receiver","name"),q=J.fZ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
bO:function(a){if(a==null)H.iU("boolean expression must not be null")
return a},
W:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a2(a,"String"))},
jX:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"double"))},
fb:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"num"))},
jT:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a2(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a2(a,"int"))},
fD:function(a,b){throw H.h(H.a2(a,H.aG(H.W(b).substring(2))))},
jf:function(a,b){throw H.h(H.fU(a,H.aG(H.W(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.fD(a,b)},
f7:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else u=!0
if(u)return a
H.jf(a,b)},
k1:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.r(a)[b])return a
H.fD(a,b)},
k0:function(a){if(a==null)return a
if(!!J.r(a).$iK)return a
throw H.h(H.a2(a,"List<dynamic>"))},
j9:function(a,b){var u
if(a==null)return a
u=J.r(a)
if(!!u.$iK)return a
if(u[b])return a
H.fD(a,b)},
hy:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.V(u)]
else return a.$S()}return},
b9:function(a,b){var u
if(typeof a=="function")return!0
u=H.hy(J.r(a))
if(u==null)return!1
return H.hm(u,null,b,null)},
e:function(a,b){var u,t
if(a==null)return a
if($.ft)return a
$.ft=!0
try{if(H.b9(a,b))return a
u=H.bc(b)
t=H.a2(a,u)
throw H.h(t)}finally{$.ft=!1}},
bR:function(a,b){if(a!=null&&!H.fw(a,b))H.F(H.a2(a,H.bc(b)))
return a},
a2:function(a,b){return new H.cs("TypeError: "+P.bZ(a)+": type '"+H.b(H.hr(a))+"' is not a subtype of type '"+b+"'")},
fU:function(a,b){return new H.cS("CastError: "+P.bZ(a)+": type '"+H.b(H.hr(a))+"' is not a subtype of type '"+b+"'")},
hr:function(a){var u,t=J.r(a)
if(!!t.$ibf){u=H.hy(t)
if(u!=null)return H.bc(u)
return"Closure"}return H.bq(a)},
iU:function(a){throw H.h(new H.e7(a))},
jh:function(a){throw H.h(new P.d2(a))},
iv:function(a){return new H.dJ(a)},
hA:function(a){return v.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
ba:function(a){if(a==null)return
return a.$ti},
jY:function(a,b,c){return H.bS(a["$a"+H.b(c)],H.ba(b))},
hB:function(a,b,c,d){var u=H.bS(a["$a"+H.b(c)],H.ba(b))
return u==null?null:u[d]},
d:function(a,b){var u=H.ba(a)
return u==null?null:u[b]},
bc:function(a){return H.aF(a,null)},
aF:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].name)+H.eW(a,1,b)
if(typeof a=="function")return H.aG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.b(b[t])}if('func' in a)return H.iI(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iI:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.l([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.j(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.a(a0,m)
p=C.c.M(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.aF(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aF(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aF(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aF(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.j0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.W(n[g])
i=i+h+H.aF(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
eW:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aF(p,c)}return"<"+u.h(0)+">"},
bS:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ae:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ba(a)
t=J.r(a)
if(t[b]==null)return!1
return H.hu(H.bS(t[d],u),null,c,null)},
fE:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.fU(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.eW(c,0,null),v.mangledGlobalNames)))},
u:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.eW(c,0,null),v.mangledGlobalNames)))},
iT:function(a,b,c,d,e){if(!H.P(a,null,b,null))H.ji("TypeError: "+H.b(c)+H.bc(a)+H.b(d)+H.bc(b)+H.b(e))},
ji:function(a){throw H.h(new H.cs(H.W(a)))},
hu:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.P(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.P(a[t],b,c[t],d))return!1
return!0},
jU:function(a,b,c){return a.apply(b,H.bS(J.r(b)["$a"+H.b(c)],H.ba(b)))},
hD:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="p"||a===-1||a===-2||H.hD(u)}return!1},
fw:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="p"||b===-1||b===-2||H.hD(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.fw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b9(a,b)}u=J.r(a).constructor
t=H.ba(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.P(u,null,b,null)},
j:function(a,b){if(a!=null&&!H.fw(a,b))throw H.h(H.a2(a,H.bc(b)))
return a},
P:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.P(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.P(b[H.V(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="p")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.P("type" in a?a.type:l,b,s,d)
else if(H.P(a,b,s,d))return!0
else{if(!('$i'+"R" in t.prototype))return!1
r=t.prototype["$a"+"R"]
q=H.bS(r,u?a.slice(1):l)
return H.P(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.hm(a,b,c,d)
if('func' in a)return c.name==="fi"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.hu(H.bS(m,u),b,p,d)},
hm:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.P(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.P(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.P(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.P(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.jd(h,b,g,d)},
jd:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.P(c[s],d,a[s],b))return!1}return!0},
h1:function(a,b){return new H.M([a,b])},
jV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ja:function(a){var u,t,s,r,q=H.W($.hC.$1(a)),p=$.f1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.f8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.W($.ht.$2(a,q))
if(q!=null){p=$.f1[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.f8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.fa(u)
$.f1[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.f8[q]=u
return u}if(s==="-"){r=H.fa(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.hE(a,u)
if(s==="*")throw H.h(P.hd(q))
if(v.leafTags[q]===true){r=H.fa(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.hE(a,u)},
hE:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.fC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
fa:function(a){return J.fC(a,!1,null,!!a.$ic6)},
jb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.fa(u)
else return J.fC(u,c,null,null)},
j6:function(){if(!0===$.fB)return
$.fB=!0
H.j7()},
j7:function(){var u,t,s,r,q,p,o,n
$.f1=Object.create(null)
$.f8=Object.create(null)
H.j5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.hF.$1(q)
if(p!=null){o=H.jb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
j5:function(){var u,t,s,r,q,p,o=C.L()
o=H.b7(C.M,H.b7(C.N,H.b7(C.q,H.b7(C.q,H.b7(C.O,H.b7(C.P,H.b7(C.Q(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.hC=new H.f3(r)
$.ht=new H.f4(q)
$.hF=new H.f5(p)},
b7:function(a,b){return a(b)||b},
fj:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.fh("Illegal RegExp pattern ("+String(p)+")",a))},
jg:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dv:function dv(a){this.a=a},
dZ:function dZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ds:function ds(a,b){this.a=a
this.b=b},
df:function df(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a){this.a=a},
bj:function bj(a,b){this.a=a
this.b=b},
fc:function fc(a){this.a=a},
cA:function cA(a){this.a=a
this.b=null},
bf:function bf(){},
dW:function dW(){},
dQ:function dQ(){},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a){this.a=a},
cS:function cS(a){this.a=a},
dJ:function dJ(a){this.a=a},
e7:function e7(a){this.a=a},
bx:function bx(a){this.a=a
this.d=this.b=null},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dh:function dh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f3:function f3(a){this.a=a},
f4:function f4(a){this.a=a},
f5:function f5(a){this.a=a},
c5:function c5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cz:function cz(a){this.b=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.c=c},
e5:function e5(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dV:function dV(a,b){this.a=a
this.c=b},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
eO:function eO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hj:function(a,b,c){},
hi:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bP(b,a))},
cc:function cc(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
dq:function dq(){},
dr:function dr(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
j0:function(a){return J.ii(a?Object.keys(a):[],null)},
jj:function(a){return v.mangledGlobalNames[a]},
je:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f2:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.fB==null){H.j6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.hd("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.fG()]
if(r!=null)return r
r=H.ja(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.fG(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ii:function(a,b){return J.fZ(H.l(a,[b]))},
fZ:function(a){a.fixed$length=Array
return a},
h_:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ij:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.ap(a,b)
if(t!==32&&t!==13&&!J.h_(t))break;++b}return b},
ik:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.aA(a,u)
if(t!==32&&t!==13&&!J.h_(t))break}return b},
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c3.prototype
return J.c2.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.c4.prototype
if(typeof a=="boolean")return J.de.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f2(a)},
hz:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f2(a)},
j2:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f2(a)},
j3:function(a){if(typeof a=="number")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b0.prototype
return a},
fA:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b0.prototype
return a},
cE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f2(a)},
cF:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).v(a,b)},
hZ:function(a,b,c,d){return J.cE(a).cR(a,b,c,d)},
i_:function(a,b){return J.cE(a).dN(a,b)},
i0:function(a,b,c,d){return J.cE(a).dO(a,b,c,d)},
i1:function(a,b){return J.fA(a).c0(a,b)},
fP:function(a,b){return J.cE(a).c1(a,b)},
aH:function(a){return J.r(a).gi(a)},
i2:function(a){return J.j2(a).gR(a)},
fd:function(a){return J.hz(a).gk(a)},
aI:function(a){return J.cE(a).gcr(a)},
cG:function(a){return J.r(a).h(a)},
i3:function(a,b){return J.j3(a).eO(a,b)},
i4:function(a){return J.fA(a).eQ(a)},
w:function w(){},
de:function de(){},
c4:function c4(){},
c7:function c7(){},
du:function du(){},
b0:function b0(){},
ax:function ax(){},
aw:function aw(a){this.$ti=a},
fk:function fk(a){this.$ti=a},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bm:function bm(){},
c3:function c3(){},
c2:function c2(){},
aO:function aO(){}},P={
iA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.iV()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b8(new P.ec(s),1)).observe(u,{childList:true})
return new P.eb(s,u,t)}else if(self.setImmediate!=null)return P.iW()
return P.iX()},
iB:function(a){self.scheduleImmediate(H.b8(new P.ed(H.e(a,{func:1,ret:-1})),0))},
iC:function(a){self.setImmediate(H.b8(new P.ee(H.e(a,{func:1,ret:-1})),0))},
iD:function(a){P.fp(C.S,H.e(a,{func:1,ret:-1}))},
fp:function(a,b){var u=C.d.T(a.a,1000)
return P.iF(u<0?0:u,b)},
iF:function(a,b){var u=new P.eP()
u.cP(a,b)
return u},
bM:function(a){return new P.e8(new P.C($.o,[a]),[a])},
bJ:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ar:function(a,b){P.iG(a,b)},
bI:function(a,b){b.bb(0,a)},
bH:function(a,b){b.bc(H.a4(a),H.bb(a))},
iG:function(a,b){var u,t=null,s=new P.eS(b),r=new P.eT(b),q=J.r(a)
if(!!q.$iC)a.bY(s,r,t)
else if(!!q.$iR)a.bx(s,r,t)
else{u=new P.C($.o,[null])
H.j(a,null)
u.a=4
u.c=a
u.bY(s,t,t)}},
bN:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.o.br(new P.eY(u),P.p,P.y,null)},
al:function(a,b){var u=new P.C($.o,[b])
P.ix(a,new P.da(null,u))
return u},
he:function(a,b){var u,t,s
b.a=1
try{a.bx(new P.eu(b),new P.ev(b),P.p)}catch(s){u=H.a4(s)
t=H.bb(s)
P.hG(new P.ew(b,u,t))}},
et:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iC")
if(u>=4){t=b.as()
b.a=a.a
b.c=a.c
P.b3(b,t)}else{t=H.k(b.c,"$ia3")
b.a=2
b.c=a
a.bW(t)}},
b3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iH")
P.cD(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b3(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.k(q,"$iH")
P.cD(i,i,g.b,q.a,q.b)
return}l=$.o
if(l!==n)$.o=n
else l=i
g=b.c
if((g&15)===8)new P.eB(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.eA(u,b,q).$0()}else if((g&2)!==0)new P.ez(h,u,b).$0()
if(l!=null)$.o=l
g=u.b
if(!!J.r(g).$iR){if(g.a>=4){k=H.k(o.c,"$ia3")
o.c=null
b=o.at(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.et(g,o)
return}}j=b.b
k=H.k(j.c,"$ia3")
j.c=null
b=j.at(k)
g=u.a
p=u.b
if(!g){H.j(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iH")
j.a=8
j.c=p}h.a=j
g=j}},
iO:function(a,b){if(H.b9(a,{func:1,args:[P.n,P.B]}))return b.br(a,null,P.n,P.B)
if(H.b9(a,{func:1,args:[P.n]}))return H.e(a,{func:1,ret:null,args:[P.n]})
throw H.h(P.fQ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iM:function(){var u,t
for(;u=$.b6,u!=null;){$.bL=null
t=u.b
$.b6=t
if(t==null)$.bK=null
u.a.$0()}},
iS:function(){$.fu=!0
try{P.iM()}finally{$.bL=null
$.fu=!1
if($.b6!=null)$.fI().$1(P.hw())}},
hq:function(a){var u=new P.ct(a)
if($.b6==null){$.b6=$.bK=u
if(!$.fu)$.fI().$1(P.hw())}else $.bK=$.bK.b=u},
iR:function(a){var u,t,s=$.b6
if(s==null){P.hq(a)
$.bL=$.bK
return}u=new P.ct(a)
t=$.bL
if(t==null){u.b=s
$.b6=$.bL=u}else{u.b=t.b
$.bL=t.b=u
if(u.b==null)$.bK=u}},
hG:function(a){var u=null,t=$.o
if(C.e===t){P.aE(u,u,C.e,a)
return}P.aE(u,u,t,H.e(t.b9(a),{func:1,ret:-1}))},
jx:function(a,b){if(a==null)H.F(P.i5("stream"))
return new P.eM([b])},
aB:function(a){return new P.e9(null,null,[a])},
iQ:function(a){return},
hn:function(a,b){P.cD(null,null,$.o,a,b)},
iN:function(){},
ix:function(a,b){var u=$.o
if(u===C.e)return P.fp(a,H.e(b,{func:1,ret:-1}))
return P.fp(a,H.e(u.b9(b),{func:1,ret:-1}))},
cD:function(a,b,c,d,e){var u={}
u.a=d
P.iR(new P.eX(u,e))},
ho:function(a,b,c,d,e){var u,t=$.o
if(t===c)return d.$0()
$.o=c
u=t
try{t=d.$0()
return t}finally{$.o=u}},
hp:function(a,b,c,d,e,f,g){var u,t=$.o
if(t===c)return d.$1(e)
$.o=c
u=t
try{t=d.$1(e)
return t}finally{$.o=u}},
iP:function(a,b,c,d,e,f,g,h,i){var u,t=$.o
if(t===c)return d.$2(e,f)
$.o=c
u=t
try{t=d.$2(e,f)
return t}finally{$.o=u}},
aE:function(a,b,c,d){var u
H.e(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.b9(d):c.e7(d,-1)
P.hq(d)},
ec:function ec(a){this.a=a},
eb:function eb(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a},
eP:function eP(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
e8:function e8(a,b){this.a=a
this.b=!1
this.$ti=b},
eS:function eS(a){this.a=a},
eT:function eT(a){this.a=a},
eY:function eY(a){this.a=a},
ef:function ef(a,b){this.a=a
this.$ti=b},
O:function O(a,b,c,d){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=null
_.d=b
_.e=c
_.r=_.f=null
_.$ti=d},
eg:function eg(){},
e9:function e9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
da:function da(a,b){this.a=a
this.b=b},
ei:function ei(){},
ea:function ea(a,b){this.a=a
this.$ti=b},
a3:function a3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
C:function C(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eq:function eq(a,b){this.a=a
this.b=b},
ey:function ey(a,b){this.a=a
this.b=b},
eu:function eu(a){this.a=a},
ev:function ev(a){this.a=a},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a){this.a=a},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a){this.a=a
this.b=null},
dS:function dS(){},
dT:function dT(a,b){this.a=a
this.b=b},
dU:function dU(a,b){this.a=a
this.b=b},
aa:function aa(){},
cu:function cu(){},
ej:function ej(){},
eh:function eh(){},
eL:function eL(){},
el:function el(){},
ek:function ek(a,b){this.b=a
this.a=null
this.$ti=b},
bF:function bF(){},
eG:function eG(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
eM:function eM(a){this.$ti=a},
H:function H(a,b){this.a=a
this.b=b},
eR:function eR(){},
eX:function eX(a,b){this.a=a
this.b=b},
eH:function eH(){},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
eI:function eI(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
il:function(a,b,c){return H.u(H.j1(a,new H.M([b,c])),"$ih3",[b,c],"$ah3")},
ih:function(a,b,c){var u,t
if(P.fv(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.l([],[P.t])
C.a.j($.Q,a)
try{P.iK(a,u)}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=P.ha(b,H.j9(u,"$iJ"),", ")+c
return t.charCodeAt(0)==0?t:t},
fY:function(a,b,c){var u,t
if(P.fv(a))return b+"..."+c
u=new P.bw(b)
C.a.j($.Q,a)
try{t=u
t.a=P.ha(t.a,a,", ")}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
fv:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
iK:function(a,b){var u,t,s,r,q,p,o,n=a.gR(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.b(n.gA())
C.a.j(b,u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.a(b,-1)
t=b.pop()
if(0>=b.length)return H.a(b,-1)
s=b.pop()}else{r=n.gA();++l
if(!n.w()){if(l<=4){C.a.j(b,H.b(r))
return}t=H.b(r)
if(0>=b.length)return H.a(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gA();++l
for(;n.w();r=q,q=p){p=n.gA();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.a(b,-1)
m-=b.pop().length+2;--l}C.a.j(b,"...")
return}}s=H.b(r)
t=H.b(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.a(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.j(b,o)
C.a.j(b,s)
C.a.j(b,t)},
h5:function(a){var u,t={}
if(P.fv(a))return"{...}"
u=new P.bw("")
try{C.a.j($.Q,a)
u.a+="{"
t.a=!0
a.V(0,new P.dl(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
dd:function dd(){},
a9:function a9(){},
dk:function dk(){},
dl:function dl(a,b){this.a=a
this.b=b},
dm:function dm(){},
f6:function(a){var u=H.ir(a,null)
if(u!=null)return u
throw H.h(P.fh(a,null))},
j_:function(a){var u=H.iq(a)
if(u!=null)return u
throw H.h(P.fh("Invalid double",a))},
ie:function(a){if(a instanceof H.bf)return a.h(0)
return"Instance of '"+H.b(H.bq(a))+"'"},
h8:function(a){return new H.c5(a,H.fj(a,!1,!0,!1,!1,!1))},
ha:function(a,b,c){var u=J.i2(b)
if(!u.w())return a
if(c.length===0){do a+=H.b(u.gA())
while(u.w())}else{a+=H.b(u.gA())
for(;u.w();)a=a+c+H.b(u.gA())}return a},
ai:function(a){return new P.aJ(1000*a)},
fg:function(){return new P.ak()},
bZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ie(a)},
ag:function(a){return new P.a5(!1,null,null,a)},
fQ:function(a,b,c){return new P.a5(!0,a,b,c)},
i5:function(a){return new P.a5(!1,null,a,"Must not be null")},
is:function(a){var u=null
return new P.br(u,u,!1,u,u,a)},
ce:function(a,b){return new P.br(null,null,!0,a,b,"Value not in range")},
dy:function(a,b,c,d,e){return new P.br(b,c,!0,a,d,"Invalid value")},
it:function(a,b,c){if(0>a||a>c)throw H.h(P.dy(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.dy(b,a,c,"end",null))
return b}return c},
fX:function(a,b,c,d,e){var u=H.V(e==null?J.fd(b):e)
return new P.db(u,!0,a,c,"Index out of range")},
T:function(a){return new P.e2(a)},
hd:function(a){return new P.e0(a)},
aZ:function(a){return new P.bv(a)},
bX:function(a){return new P.cT(a)},
fh:function(a,b){return new P.d9(a,b)},
as:function as(){},
af:function af(){},
aJ:function aJ(a){this.a=a},
d4:function d4(){},
d5:function d5(){},
ak:function ak(){},
cK:function cK(){},
bp:function bp(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
db:function db(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e2:function e2(a){this.a=a},
e0:function e0(a){this.a=a},
bv:function bv(a){this.a=a},
cT:function cT(a){this.a=a},
dt:function dt(){},
cm:function cm(){},
d2:function d2(a){this.a=a},
ep:function ep(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
y:function y(){},
J:function J(){},
K:function K(){},
p:function p(){},
m:function m(){},
n:function n(){},
aQ:function aQ(){},
cf:function cf(){},
B:function B(){},
dR:function dR(){this.b=this.a=0},
t:function t(){},
bw:function bw(a){this.a=a},
iZ:function(a){var u={}
a.V(0,new P.f0(u))
return u},
f0:function f0(a){this.a=a},
hf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eD:function eD(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
f:function f(){},
bU:function bU(){},
a8:function a8(){},
cd:function cd(){},
aA:function aA(){},
cr:function cr(){},
by:function by(){}},W={
jk:function(){return window},
bV:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
fW:function(a){H.k(a,"$iaL")
return"wheel"},
fq:function(a,b){return document.createElement(a)},
ig:function(){var u=document.createElement("img")
return u},
iy:function(a){return new TouchEvent(a)},
iz:function(){var u
try{W.iy("touches")
return!0}catch(u){H.a4(u)}return!1},
eE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hg:function(a,b,c,d){var u=W.eE(W.eE(W.eE(W.eE(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
q:function(a,b,c,d,e){var u=W.hs(new W.eo(c),W.c),t=u!=null
if(t&&!0){H.e(u,{func:1,args:[W.c]})
if(t)J.hZ(a,b,u,!1)}return new W.en(a,b,u,!1,[e])},
hs:function(a,b){var u=$.o
if(u===C.e)return a
return u.e8(a,b)},
i:function i(){},
cH:function cH(){},
cI:function cI(){},
bT:function bT(){},
ah:function ah(){},
bW:function bW(){},
au:function au(){},
bg:function bg(){},
d1:function d1(){},
d3:function d3(){},
bY:function bY(){},
aj:function aj(){},
c:function c(){},
aL:function aL(){},
d8:function d8(){},
a0:function a0(){},
am:function am(){},
an:function an(){},
bo:function bo(){},
x:function x(){},
S:function S(){},
dK:function dK(){},
ab:function ab(){},
ap:function ap(){},
dY:function dY(){},
aC:function aC(){},
e3:function e3(){},
ad:function ad(){},
bz:function bz(){},
cw:function cw(){},
em:function em(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
en:function en(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eo:function eo(a){this.a=a},
bk:function bk(){},
d7:function d7(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cv:function cv(){},
cB:function cB(){},
cC:function cC(){}},Y={cU:function cU(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.y=_.x=_.r=null},cV:function cV(a){this.a=a},cW:function cW(a){this.a=a},cX:function cX(a){this.a=a},cY:function cY(a){this.a=a},cZ:function cZ(a){this.a=a},d_:function d_(a){this.a=a},d0:function d0(a){this.a=a},
iJ:function(a){var u=a.gaq()
return $.hX().ct(u,new Y.eU(a))},
iE:function(a){var u=new Y.b2()
u.cO(a)
return u},
cp:function(a,b){var u=H.l([],[Y.cq]),t=$.v
$.v=t+1
t=new Y.co(u,t,H.l([],[A.a6]),T.z())
t.sam(0,a)
t.bi=Y.hb(b.a,b.b,b.c,b.Q,!1,b.cy,b.f,b.dy,!1,b.fr,b.db,b.dx,b.e,b.d,b.cx,!1,b.ch,b.r)
t.D|=3
u=t.bq(0,"keyDown",R.aP)
u.au(H.e(t.gdv(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bq(0,"textInput",R.b_)
u.au(H.e(t.gdH(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bq(0,"mouseDown",R.N)
u.au(H.e(t.gdB(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
return t},
hb:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new Y.dX(a,b,c,n,m,g,r,!1,!1,!1,d,q,o,f,k,l,h,j)},
eU:function eU(a){this.a=a},
b2:function b2(){this.c=this.b=this.a=0},
co:function co(a,b,c,d){var _=this
_.B=""
_.bi=null
_.cf="none"
_.f1=_.f0=_.f_=_.eZ=_.bj=_.eY=_.cg=0
_.ci=!1
_.cj=4294967295
_.C=_.K=100
_.a4=_.af=0
_.aD=a
_.D=3
_.aE=_.ag=null
_.k4=!0
_.b=b
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
dX:function dX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p
_.dy=q
_.fr=r},
cq:function cq(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.e=_.d=_.c=0}},Z={d6:function d6(a,b,c,d,e,f,g){var _=this
_.n=a
_.t=b
_.ah=c
_.B=d
_.k4=!0
_.b=e
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=f
_.fy=null
_.go=g
_.id=!0
_.a=null}},K={
h2:function(){var u=new K.dg(P.aB(P.m))
u.b=u.a=new K.e6()
return u},
e6:function e6(){this.b=this.a=null},
dg:function dg(a){var _=this
_.b=_.a=null
_.c=0
_.d=a}},A={
at:function(a,b,c){var u=L.h9(C.b.m(a),C.b.m(b),c).gaM().aP(1),t=u.c,s=u.e
return new A.a_(t.c/s,t.d/s,u)},
i7:function(a){var u,t,s,r,q,p=$.hI(),o=A.i6(a,p.d),n=o.b,m=o.c
p.toString
u=W.ig()
t=W.a0
s=new P.C($.o,[t])
r=new N.c0(u,new P.ea(s,[t]),n)
t=W.c
q={func:1,ret:-1,args:[t]}
r.d=W.q(u,"load",H.e(r.gdt(),q),!1,t)
r.e=W.q(u,"error",H.e(r.gdr(),q),!1,t)
u.src=n
return s.bw(new A.cO(m),A.a_)},
i6:function(a,b){var u=new A.cL()
u.cL(a,b)
return u},
iw:function(a,b,c,d){var u="middleClick",t="rightClick",s=P.m,r=T.z(),q=T.z(),p=T.z(),o=H.l([],[A.aD]),n=H.l([new A.b4("mouseDown","mouseUp","click","doubleClick"),new A.b4("middleMouseDown","middleMouseUp",u,u),new A.b4("rightMouseDown","rightMouseUp",t,t)],[A.b4]),m=K.h2(),l=H.l([],[A.I]),k=$.v
$.v=k+1
k=new A.G(new U.E(0,0,0,0,[s]),r,q,p,new R.aW("render",!1),C.k,C.m,C.n,C.i,new U.A(0,0,[s]),o,new H.M([P.y,A.b5]),n,m,l,k,H.l([],[A.a6]),T.z())
k.cM(a,b,c,d)
return k},
X:function X(a,b,c,d){var _=this
_.k3=a
_.b=b
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a},
cL:function cL(){this.c=this.b=this.a=null},
cM:function cM(a){this.a=a},
cN:function cN(a){this.d=a},
a6:function a6(){},
I:function I(){},
bh:function bh(){},
c1:function c1(){},
dC:function dC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=!1},
dD:function dD(a){this.a=a},
dE:function dE(a,b){this.a=a
this.b=b},
bu:function bu(a){this.b=a},
aY:function aY(a){this.b=a},
Y:function Y(a){this.b=a},
G:function G(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.U=_.ah=_.t=_.n=null
_.cn=_.cm=_.cl=_.ck=0
_.aF=1
_.es=!1
_.bn=_.bm=_.bl=_.bk=0
_.eu=a
_.aG=b
_.co=c
_.c8=d
_.el=e
_.O=null
_.bf=f
_.aC=g
_.c9=h
_.ca=i
_.cb="default"
_.cc=j
_.bg=null
_.cd=k
_.ce=l
_.em=m
_.en=n
_.bh=4294967295
_.ep=_.eo=!0
_.er=_.eq=!1
_.B=o
_.k4=!0
_.b=p
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=q
_.fy=null
_.go=r
_.id=!0
_.a=null},
dP:function dP(a){this.a=a},
dM:function dM(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
dO:function dO(a,b){this.a=a
this.b=b},
cn:function cn(a,b,c,d,e,f){var _=this
_.k4=a
_.r1=b
_.r2=c
_.ry=_.rx=0
_.b=d
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=e
_.fy=null
_.go=f
_.id=!0
_.a=null},
dL:function dL(a){this.a=a
this.f=4294967295},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aD:function aD(){}},L={
hk:function(){var u,t
if($.fs===-1){u=window
t=H.e(new L.eV(),{func:1,ret:-1,args:[P.m]})
C.J.d5(u)
$.fs=C.J.dR(u,W.hs(t,P.m))}},
iu:function(a){var u=T.z(),t=new T.aR(new Float32Array(16))
t.a7()
t=new L.bA(C.f,u,t,null)
u=new L.aX(a,t)
u.e=t
return u},
h9:function(a,b,c){var u,t,s,r,q=new L.bt(C.y)
if(a<=0)H.F(P.ag("width"))
if(b<=0)H.F(P.ag("height"))
u=q.a=V.bQ(a)
t=q.b=V.bQ(b)
s=W.bV(t,u)
q.c=q.d=s
if(c!==0){r=s.getContext("2d")
r.fillStyle=V.fz(c)
r.fillRect(0,0,u,t)}return q},
fn:function(a,b,c,d,e){var u,t,s,r,q,p=new Int16Array(6),o=new Float32Array(16),n=new L.az(a,b,c,d,e,p,o),m=d===0
if(m||d===2){u=0-c.a
t=u/e
o[12]=t
o[0]=t
t=0-c.b
s=t/e
o[5]=s
o[1]=s
u=(u+b.c)/e
o[4]=u
o[8]=u
t=(t+b.d)/e
o[13]=t
o[9]=t}else if(d===1||d===3){u=0-c.a
t=u/e
o[12]=t
o[0]=t
t=0-c.b
s=t/e
o[5]=s
o[1]=s
u=(u+b.d)/e
o[4]=u
o[8]=u
t=(t+b.c)/e
o[13]=t
o[9]=t}else H.F(P.fg())
if(m){m=b.a
u=a.a
t=m/u
o[14]=t
o[2]=t
t=b.b
s=a.b
r=t/s
o[7]=r
o[3]=r
r=H.d(b,0)
u=H.j(m+b.c,r)/u
o[6]=u
o[10]=u
s=H.j(t+b.d,r)/s
o[15]=s
o[11]=s}else if(d===1){m=b.a
u=H.d(b,0)
t=H.j(m+b.c,u)
s=a.a
t/=s
o[6]=t
o[2]=t
t=b.b
r=a.b
q=t/r
o[15]=q
o[3]=q
s=m/s
o[14]=s
o[10]=s
r=H.j(t+b.d,u)/r
o[7]=r
o[11]=r}else if(d===2){m=b.a
u=H.d(b,0)
t=H.j(m+b.c,u)
s=a.a
t/=s
o[14]=t
o[2]=t
t=b.b
u=H.j(t+b.d,u)
r=a.b
u/=r
o[7]=u
o[3]=u
s=m/s
o[6]=s
o[10]=s
r=t/r
o[15]=r
o[11]=r}else if(d===3){m=b.a
u=a.a
t=m/u
o[6]=t
o[2]=t
t=b.b
s=H.d(b,0)
r=H.j(t+b.d,s)
q=a.b
r/=q
o[15]=r
o[3]=r
u=H.j(m+b.c,s)/u
o[14]=u
o[10]=u
q=t/q
o[7]=q
o[11]=q}else H.F(P.fg())
p[0]=0
p[1]=1
p[2]=2
p[3]=0
p[4]=2
p[5]=3
n.y=o
n.x=p
return n},
cP:function cP(){},
aU:function aU(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
aV:function aV(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
ci:function ci(a){this.b=a},
ay:function ay(){},
dz:function dz(){},
cg:function cg(a,b,c,d,e,f,g){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=1
_.a=e
_.b=f
_.c=g},
ch:function ch(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=a
_.e=null
_.f=b
_.r=c
_.Q=_.z=_.y=_.x=null
_.cx=0
_.cy=d
_.db=e
_.dx=f
_.dy=g
_.fr=h
_.fx=i
_.fy=j
_.go=k
_.a=l
_.b=m
_.c=n},
dB:function dB(){},
cj:function cj(){},
eV:function eV(){},
ck:function ck(){},
eF:function eF(){},
bs:function bs(){},
dF:function dF(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dG:function dG(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dH:function dH(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
bA:function bA(a,b,c,d){var _=this
_.a=1
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
aX:function aX(a,b){var _=this
_.b=0
_.c=a
_.d=b
_.e=null},
ao:function ao(){this.c=this.b=this.a=0},
bt:function bt(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.x=null
_.y=-1
_.z=!1
_.ch=_.Q=null},
cl:function cl(a){this.a=a},
az:function az(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
dI:function dI(){}},T={dj:function dj(a){this.a=a},
dn:function(a,b,c,d,e,f){var u=new Float32Array(6)
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f
return new T.c8(u)},
z:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.c8(u)},
c8:function c8(a){this.a=a},
aR:function aR(a){this.a=a}},R={
fr:function(a,b,c){var u,t,s,r=b.length
for(u={func:1,ret:-1,args:[c]},t=0;t<r;++t){if(t<0||t>=b.length)return H.a(b,t)
s=b[t]
if(!s.c){a.r=a.f=!1
H.e(s.f,u).$1(H.j(a,c))}else{C.a.bs(b,t);--r;--t}}},
cR:function cR(){},
aK:function aK(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aM:function aM(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aW:function aW(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
c_:function c_(){},
bi:function bi(a){this.b=a},
av:function av(a,b,c){var _=this
_.a=a
_.c=b
_.d=0
_.$ti=c},
D:function D(a,b,c,d,e){var _=this
_.a=a
_.c=!1
_.d=b
_.e=c
_.f=d
_.$ti=e},
bl:function bl(a){this.b=a},
dc:function dc(){},
aP:function aP(){},
N:function N(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1},
b_:function b_(){},
aq:function aq(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1}},U={A:function A(a,b,c){this.a=a
this.b=b
this.$ti=c},E:function E(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},N={c0:function c0(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},Q={dp:function dp(){},
iH:function(){var u,t
try{u=W.iz()
return u}catch(t){H.a4(t)
return!1}}},O={
bn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},V={
fy:function(a){return"rgb("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+")"},
fz:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.b((a>>>24&255)/255)+")"},
jc:function(a,b){if(typeof b!=="number")return H.U(b)
if(a<=b)return a
else return b},
f_:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
bQ:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.h(P.ag("The supplied value ("+H.b(a)+") is not an int."))},
Z:function(a){return a},
hx:function(a){return a}},F={
f9:function(){var u=0,t=P.bM(P.p),s,r,q,p
var $async$f9=P.bN(function(a,b){if(a===1)return P.bH(b,t)
while(true)switch(u){case 0:s=H.l([],[P.y])
r=H.l([],[A.X])
q=H.l([],[A.I])
p=$.v
$.v=p+1
new Y.cU(new Z.d6(s,r,C.r,q,p,H.l([],[A.a6]),T.z()),new A.dL(C.l)).eg()
return P.bI(null,t)}})
return P.bJ($async$f9,t)}}
var w=[C,H,J,P,W,Y,Z,K,A,L,T,R,U,N,Q,O,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fl.prototype={}
J.w.prototype={
v:function(a,b){return a===b},
gi:function(a){return H.aS(a)},
h:function(a){return"Instance of '"+H.b(H.bq(a))+"'"}}
J.de.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159},
$ias:1}
J.c4.prototype={
v:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
$ip:1}
J.c7.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.du.prototype={}
J.b0.prototype={}
J.ax.prototype={
h:function(a){var u=a[$.hJ()]
if(u==null)return this.cK(a)
return"JavaScript function for "+H.b(J.cG(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ifi:1}
J.aw.prototype={
j:function(a,b){H.j(b,H.d(a,0))
if(!!a.fixed$length)H.F(P.T("add"))
a.push(b)},
bs:function(a,b){if(!!a.fixed$length)H.F(P.T("removeAt"))
if(b<0||b>=a.length)throw H.h(P.ce(b,null))
return a.splice(b,1)[0]},
aN:function(a,b){var u
if(!!a.fixed$length)H.F(P.T("remove"))
for(u=0;u<a.length;++u)if(J.cF(a[u],b)){a.splice(u,1)
return!0}return!1},
V:function(a,b){var u,t
H.e(b,{func:1,ret:-1,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bX(a))}},
ey:function(a,b,c,d){var u,t,s
H.j(b,d)
H.e(c,{func:1,ret:d,args:[d,H.d(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.h(P.bX(a))}return t},
cG:function(a){var u,t,s,r
if(!!a.immutable$list)H.F(P.T("shuffle"))
u=a.length
for(;u>1;){t=C.r.cq(u);--u
s=a.length
if(u>=s)return H.a(a,u)
r=a[u]
if(t<0||t>=s)return H.a(a,t)
this.q(a,u,a[t])
this.q(a,t,r)}},
eC:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.cF(a[u],b))return u
return-1},
ed:function(a,b){var u
for(u=0;u<a.length;++u)if(J.cF(a[u],b))return!0
return!1},
h:function(a){return P.fY(a,"[","]")},
gR:function(a){return new J.cJ(a,a.length,[H.d(a,0)])},
gi:function(a){return H.aS(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.F(P.T("set length"))
if(b<0)throw H.h(P.dy(b,0,null,"newLength",null))
a.length=b},
q:function(a,b,c){H.j(c,H.d(a,0))
if(!!a.immutable$list)H.F(P.T("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bP(a,b))
a[b]=c},
$iJ:1,
$iK:1}
J.fk.prototype={}
J.cJ.prototype={
gA:function(){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.fF(s))
u=t.c
if(u>=r){t.sbK(null)
return!1}t.sbK(s[u]);++t.c
return!0},
sbK:function(a){this.d=H.j(a,H.d(this,0))}}
J.bm.prototype={
geG:function(a){return a===0?1/a<0:a<0},
ae:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.T(""+a+".ceil()"))},
ex:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.T(""+a+".floor()"))},
m:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.T(""+a+".round()"))},
eO:function(a,b){var u
if(b<0||b>20)throw H.h(P.dy(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.geG(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cE:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
T:function(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.T("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
dW:function(a,b){var u
if(a>0)u=this.dV(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dV:function(a,b){return b>31?0:a>>>b},
$iaf:1,
$im:1}
J.c3.prototype={$iy:1}
J.c2.prototype={}
J.aO.prototype={
aA:function(a,b){if(b<0)throw H.h(H.bP(a,b))
if(b>=a.length)H.F(H.bP(a,b))
return a.charCodeAt(b)},
ap:function(a,b){if(b>=a.length)throw H.h(H.bP(a,b))
return a.charCodeAt(b)},
c0:function(a,b){return new H.eN(b,a,0)},
M:function(a,b){if(typeof b!=="string")throw H.h(P.fQ(b,null,null))
return a+b},
cH:function(a,b){if(typeof b==="string")return H.l(a.split(b),[P.t])
else if(b instanceof H.c5&&b.gdf().exec("").length-2===0)return H.l(a.split(b.b),[P.t])
else return this.d3(a,b)},
d3:function(a,b){var u,t,s,r,q,p,o=H.l([],[P.t])
for(u=J.i1(b,a),u=u.gR(u),t=0,s=1;u.w();){r=u.gA()
q=r.gbF(r)
p=r.gaB()
s=p-q
if(s===0&&t===q)continue
C.a.j(o,this.ao(a,t,q))
t=p}if(t<a.length||s>0)C.a.j(o,this.bG(a,t))
return o},
ao:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.ce(b,null))
if(b>c)throw H.h(P.ce(b,null))
if(c>a.length)throw H.h(P.ce(c,null))
return a.substring(b,c)},
bG:function(a,b){return this.ao(a,b,null)},
eQ:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.ap(r,0)===133){u=J.ij(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aA(r,t)===133?J.ik(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
aQ:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aJ:function(a,b){var u=b-a.length
if(u<=0)return a
return this.aQ(" ",u)+a},
h:function(a){return a},
gi:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ih7:1,
$it:1}
H.di.prototype={
gA:function(){return this.d},
w:function(){var u,t=this,s=t.a,r=J.hz(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.bX(s))
u=t.c
if(u>=q){t.sbL(null)
return!1}t.sbL(r.c7(s,u));++t.c
return!0},
sbL:function(a){this.d=H.j(a,H.d(this,0))}}
H.aN.prototype={}
H.dv.prototype={
$0:function(){return C.b.ex(1000*this.a.now())},
$S:8}
H.dZ.prototype={
L:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.ds.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.df.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.e1.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bj.prototype={}
H.fc.prototype={
$1:function(a){if(!!J.r(a).$iak)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.cA.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iB:1}
H.bf.prototype={
h:function(a){var u=H.bq(this).trim()
return"Closure '"+u+"'"},
$ifi:1,
geU:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dW.prototype={}
H.dQ.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aG(u)+"'"}}
H.bd.prototype={
v:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bd))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gi:function(a){var u,t=this.c
if(t==null)u=H.aS(this.a)
else u=typeof t!=="object"?J.aH(t):H.aS(t)
return(u^H.aS(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.bq(u))+"'")}}
H.cs.prototype={
h:function(a){return this.a}}
H.cS.prototype={
h:function(a){return this.a}}
H.dJ.prototype={
h:function(a){return"RuntimeError: "+H.b(this.a)}}
H.e7.prototype={
h:function(a){return"Assertion failed: "+P.bZ(this.a)}}
H.bx.prototype={
gav:function(){var u=this.b
return u==null?this.b=H.bc(this.a):u},
h:function(a){return this.gav()},
gi:function(a){var u=this.d
return u==null?this.d=C.c.gi(this.gav()):u},
v:function(a,b){if(b==null)return!1
return b instanceof H.bx&&this.gav()===b.gav()}}
H.M.prototype={
gk:function(a){return this.a},
c4:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.bQ(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.bQ(t,a)}else return s.eD(a)},
eD:function(a){var u=this.d
if(u==null)return!1
return this.aH(this.ar(u,J.aH(a)&0x3ffffff),a)>=0},
p:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a8(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a8(r,b)
s=t==null?null:t.b
return s}else return q.eE(b)},
eE:function(a){var u,t,s=this.d
if(s==null)return
u=this.ar(s,J.aH(a)&0x3ffffff)
t=this.aH(u,a)
if(t<0)return
return u[t].b},
q:function(a,b,c){var u,t,s,r,q,p,o=this
H.j(b,H.d(o,0))
H.j(c,H.d(o,1))
if(typeof b==="string"){u=o.b
o.bM(u==null?o.b=o.b_():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bM(t==null?o.c=o.b_():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.b_()
r=J.aH(b)&0x3ffffff
q=o.ar(s,r)
if(q==null)o.b6(s,r,[o.b0(b,c)])
else{p=o.aH(q,b)
if(p>=0)q[p].b=c
else q.push(o.b0(b,c))}}},
ct:function(a,b){var u,t=this
H.j(a,H.d(t,0))
H.e(b,{func:1,ret:H.d(t,1)})
if(t.c4(a))return t.p(0,a)
u=b.$0()
t.q(0,a,u)
return u},
aN:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dP(this.c,b)
else return this.eF(b)},
eF:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=J.aH(a)&0x3ffffff
t=q.ar(p,u)
s=q.aH(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bZ(r)
if(t.length===0)q.aV(p,u)
return r.b},
c3:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.aZ()}},
V:function(a,b){var u,t,s=this
H.e(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bX(s))
u=u.c}},
bM:function(a,b,c){var u,t=this
H.j(b,H.d(t,0))
H.j(c,H.d(t,1))
u=t.a8(a,b)
if(u==null)t.b6(a,b,t.b0(b,c))
else u.b=c},
dP:function(a,b){var u
if(a==null)return
u=this.a8(a,b)
if(u==null)return
this.bZ(u)
this.aV(a,b)
return u.b},
aZ:function(){this.r=this.r+1&67108863},
b0:function(a,b){var u,t=this,s=new H.dh(H.j(a,H.d(t,0)),H.j(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aZ()
return s},
bZ:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aZ()},
aH:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cF(a[t].a,b))return t
return-1},
h:function(a){return P.h5(this)},
a8:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
b6:function(a,b,c){a[b]=c},
aV:function(a,b){delete a[b]},
bQ:function(a,b){return this.a8(a,b)!=null},
b_:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b6(t,u,t)
this.aV(t,u)
return t},
$ih3:1}
H.dh.prototype={}
H.f3.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.f4.prototype={
$2:function(a,b){return this.a(a,b)},
$S:14}
H.f5.prototype={
$1:function(a){return this.a(H.W(a))},
$S:33}
H.c5.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdg:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.fj(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
gdf:function(){var u=this,t=u.d
if(t!=null)return t
t=u.b
return u.d=H.fj(u.a+"|()",t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
ew:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.cz(u)},
c0:function(a,b){return new H.e4(this,b,0)},
d7:function(a,b){var u,t=this.gdg()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.cz(u)},
$ih7:1}
H.cz.prototype={
gbF:function(a){return this.b.index},
gaB:function(){var u=this.b
return u.index+u[0].length},
$iaQ:1,
$icf:1}
H.e4.prototype={
gR:function(a){return new H.e5(this.a,this.b,this.c)},
$aJ:function(){return[P.cf]}}
H.e5.prototype={
gA:function(){return this.d},
w:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.d7(p,u)
if(s!=null){q.d=s
r=s.gaB()
if(s.b.index===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.fA(t).aA(t,p)
if(p>=55296&&p<=56319){p=C.c.aA(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.dV.prototype={
gaB:function(){return this.a+this.c.length},
$iaQ:1,
gbF:function(a){return this.a}}
H.eN.prototype={
gR:function(a){return new H.eO(this.a,this.b,this.c)},
$aJ:function(){return[P.aQ]}}
H.eO.prototype={
w:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.dV(u,q)
s.c=t===s.c?t+1:t
return!0},
gA:function(){return this.d}}
H.cc.prototype={$ijI:1}
H.c9.prototype={
gk:function(a){return a.length},
$ic6:1,
$ac6:function(){}}
H.ca.prototype={
p:function(a,b){H.hi(b,a,a.length)
return a[b]},
$aaN:function(){return[P.af]},
$aa9:function(){return[P.af]},
$iJ:1,
$aJ:function(){return[P.af]},
$iK:1,
$aK:function(){return[P.af]}}
H.cb.prototype={
$aaN:function(){return[P.y]},
$aa9:function(){return[P.y]},
$iJ:1,
$aJ:function(){return[P.y]},
$iK:1,
$aK:function(){return[P.y]}}
H.dq.prototype={$ijo:1}
H.dr.prototype={
p:function(a,b){H.hi(b,a,a.length)
return a[b]},
$ijp:1}
H.bB.prototype={}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
P.ec.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.eb.prototype={
$1:function(a){var u,t
this.a.a=H.e(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.ed.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ee.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eP.prototype={
cP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b8(new P.eQ(this,b),0),a)
else throw H.h(P.T("`setTimeout()` not found."))}}
P.eQ.prototype={
$0:function(){this.b.$0()},
$S:1}
P.e8.prototype={
bb:function(a,b){var u,t,s=this,r=H.d(s,0)
H.bR(b,{futureOr:1,type:r})
u=!s.b||H.ae(b,"$iR",s.$ti,"$aR")
t=s.a
if(u)t.bN(b)
else t.bP(H.j(b,r))},
bc:function(a,b){var u=this.a
if(this.b)u.a1(a,b)
else u.bO(a,b)},
$iid:1}
P.eS.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:15}
P.eT.prototype={
$2:function(a,b){this.a.$2(1,new H.bj(a,H.k(b,"$iB")))},
$S:17}
P.eY.prototype={
$2:function(a,b){this.a(H.V(a),b)},
$S:25}
P.ef.prototype={}
P.O.prototype={
b2:function(){},
b3:function(){},
sb1:function(a){this.dy=H.u(a,"$iO",this.$ti,"$aO")},
sbX:function(a){this.fr=H.u(a,"$iO",this.$ti,"$aO")}}
P.eg.prototype={
gdd:function(){return this.c<4},
cU:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.d(p,0)
H.e(a,{func:1,ret:-1,args:[o]})
H.e(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.hv()
o=new P.cx($.o,c,p.$ti)
o.dS()
return o}u=$.o
t=d?1:0
s=p.$ti
r=new P.O(p,u,t,s)
r.cN(a,b,c,d,o)
r.sbX(r)
r.sb1(r)
H.u(r,"$iO",s,"$aO")
r.dx=p.c&1
q=p.e
p.sdc(r)
r.sb1(null)
r.sbX(q)
if(q==null)p.sd8(r)
else q.sb1(r)
if(p.d==p.e)P.iQ(p.a)
return r},
cQ:function(){if((this.c&4)!==0)return new P.bv("Cannot add new events after calling close")
return new P.bv("Cannot add new events while doing an addStream")},
j:function(a,b){var u=this
H.j(b,H.d(u,0))
if(!u.gdd())throw H.h(u.cQ())
u.b5(b)},
sd8:function(a){this.d=H.u(a,"$iO",this.$ti,"$aO")},
sdc:function(a){this.e=H.u(a,"$iO",this.$ti,"$aO")},
$ijw:1,
$ijL:1,
$ib1:1}
P.e9.prototype={
b5:function(a){var u,t
H.j(a,H.d(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.cT(new P.ek(a,t))}}
P.da.prototype={
$0:function(){this.b.aU(null)},
$S:0}
P.ei.prototype={
bc:function(a,b){var u
if(a==null)a=new P.bp()
u=this.a
if(u.a!==0)throw H.h(P.aZ("Future already completed"))
u.bO(a,b)},
ec:function(a){return this.bc(a,null)},
$iid:1}
P.ea.prototype={
bb:function(a,b){var u
H.bR(b,{futureOr:1,type:H.d(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.aZ("Future already completed"))
u.bN(b)}}
P.a3.prototype={
eI:function(a){if((this.c&15)!==6)return!0
return this.b.b.bu(H.e(this.d,{func:1,ret:P.as,args:[P.n]}),a.a,P.as,P.n)},
ez:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.b9(u,{func:1,args:[P.n,P.B]}))return H.bR(r.eN(u,a.a,a.b,null,t,P.B),s)
else return H.bR(r.bu(H.e(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.C.prototype={
bx:function(a,b,c){var u,t,s,r=H.d(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.o
if(u!==C.e){H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.iO(b,u)}t=new P.C($.o,[c])
s=b==null?1:3
this.aT(new P.a3(t,s,a,b,[r,c]))
return t},
bw:function(a,b){return this.bx(a,null,b)},
bY:function(a,b,c){var u,t=H.d(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.C($.o,[c])
this.aT(new P.a3(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
aT:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ia3")
t.c=a}else{if(s===2){u=H.k(t.c,"$iC")
s=u.a
if(s<4){u.aT(a)
return}t.a=s
t.c=u.c}P.aE(null,null,t.b,H.e(new P.eq(t,a),{func:1,ret:-1}))}},
bW:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ia3")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iC")
u=q.a
if(u<4){q.bW(a)
return}p.a=u
p.c=q.c}o.a=p.at(a)
P.aE(null,null,p.b,H.e(new P.ey(o,p),{func:1,ret:-1}))}},
as:function(){var u=H.k(this.c,"$ia3")
this.c=null
return this.at(u)},
at:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aU:function(a){var u,t,s=this,r=H.d(s,0)
H.bR(a,{futureOr:1,type:r})
u=s.$ti
if(H.ae(a,"$iR",u,"$aR"))if(H.ae(a,"$iC",u,null))P.et(a,s)
else P.he(a,s)
else{t=s.as()
H.j(a,r)
s.a=4
s.c=a
P.b3(s,t)}},
bP:function(a){var u,t=this
H.j(a,H.d(t,0))
u=t.as()
t.a=4
t.c=a
P.b3(t,u)},
a1:function(a,b){var u,t=this
H.k(b,"$iB")
u=t.as()
t.a=8
t.c=new P.H(a,b)
P.b3(t,u)},
d0:function(a){return this.a1(a,null)},
bN:function(a){var u=this
H.bR(a,{futureOr:1,type:H.d(u,0)})
if(H.ae(a,"$iR",u.$ti,"$aR")){u.cX(a)
return}u.a=1
P.aE(null,null,u.b,H.e(new P.es(u,a),{func:1,ret:-1}))},
cX:function(a){var u=this,t=u.$ti
H.u(a,"$iR",t,"$aR")
if(H.ae(a,"$iC",t,null)){if(a.a===8){u.a=1
P.aE(null,null,u.b,H.e(new P.ex(u,a),{func:1,ret:-1}))}else P.et(a,u)
return}P.he(a,u)},
bO:function(a,b){this.a=1
P.aE(null,null,this.b,H.e(new P.er(this,a,b),{func:1,ret:-1}))},
$iR:1}
P.eq.prototype={
$0:function(){P.b3(this.a,this.b)},
$S:0}
P.ey.prototype={
$0:function(){P.b3(this.b,this.a.a)},
$S:0}
P.eu.prototype={
$1:function(a){var u=this.a
u.a=0
u.aU(a)},
$S:6}
P.ev.prototype={
$2:function(a,b){H.k(b,"$iB")
this.a.a1(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.ew.prototype={
$0:function(){this.a.a1(this.b,this.c)},
$S:0}
P.es.prototype={
$0:function(){var u=this.a
u.bP(H.j(this.b,H.d(u,0)))},
$S:0}
P.ex.prototype={
$0:function(){P.et(this.b,this.a)},
$S:0}
P.er.prototype={
$0:function(){this.a.a1(this.b,this.c)},
$S:0}
P.eB.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cz(H.e(s.d,{func:1}),null)}catch(r){u=H.a4(r)
t=H.bb(r)
if(o.d){s=H.k(o.a.a.c,"$iH").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iH")
else q.b=new P.H(u,t)
q.a=!0
return}if(!!J.r(n).$iR){if(n instanceof P.C&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iH")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.bw(new P.eC(p),null)
s.a=!1}},
$S:1}
P.eC.prototype={
$1:function(a){return this.a},
$S:13}
P.eA.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.j(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.bu(H.e(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a4(o)
t=H.bb(o)
s=n.a
s.b=new P.H(u,t)
s.a=!0}},
$S:1}
P.ez.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iH")
r=m.c
if(H.bO(r.eI(u))&&r.e!=null){q=m.b
q.b=r.ez(u)
q.a=!1}}catch(p){t=H.a4(p)
s=H.bb(p)
r=H.k(m.a.a.c,"$iH")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.H(t,s)
n.a=!0}},
$S:1}
P.ct.prototype={}
P.dS.prototype={
gk:function(a){var u={},t=new P.C($.o,[P.y])
u.a=0
this.aI(new P.dT(u,this),!0,new P.dU(u,t),t.gd_())
return t}}
P.dT.prototype={
$1:function(a){H.j(a,H.d(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.p,args:[H.d(this.b,0)]}}}
P.dU.prototype={
$0:function(){this.b.aU(this.a.a)},
$S:0}
P.aa.prototype={}
P.cu.prototype={
gi:function(a){return(H.aS(this.a)^892482866)>>>0},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cu&&b.a===this.a}}
P.ej.prototype={
b2:function(){H.u(this,"$iaa",[H.d(this.x,0)],"$aaa")},
b3:function(){H.u(this,"$iaa",[H.d(this.x,0)],"$aaa")}}
P.eh.prototype={
cN:function(a,b,c,d,e){var u,t,s=this,r=H.d(s,0)
H.e(a,{func:1,ret:-1,args:[r]})
s.sdl(H.e(a,{func:1,ret:null,args:[r]}))
u=b==null?P.iY():b
if(H.b9(u,{func:1,ret:-1,args:[P.n,P.B]}))s.d.br(u,null,P.n,P.B)
else if(H.b9(u,{func:1,ret:-1,args:[P.n]}))H.e(u,{func:1,ret:null,args:[P.n]})
else H.F(P.ag("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.e(c,{func:1,ret:-1})
t=c==null?P.hv():c
s.sdm(H.e(t,{func:1,ret:-1}))},
b2:function(){},
b3:function(){},
cT:function(a){var u=this,t=u.$ti,s=H.u(u.r,"$ibG",t,"$abG")
if(s==null){s=new P.bG(t)
u.sbV(s)}t=s.c
if(t==null)s.b=s.c=a
else s.c=t.a=a
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.bD(u)}},
b5:function(a){var u,t=this,s=H.d(t,0)
H.j(a,s)
u=t.e
t.e=u|32
t.d.cB(t.a,a,s)
t.e&=4294967263
t.cY((u&4)!==0)},
cY:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbV(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.b2()
else s.b3()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.bD(s)},
sdl:function(a){this.a=H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})},
sdm:function(a){H.e(a,{func:1,ret:-1})},
sbV:function(a){this.r=H.u(a,"$ibF",this.$ti,"$abF")},
$iaa:1,
$ib1:1}
P.eL.prototype={
aI:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.e(c,{func:1,ret:-1})
return this.a.cU(H.e(a,{func:1,ret:-1,args:[H.d(this,0)]}),d,c,!0===b)},
eH:function(a){return this.aI(a,null,null,null)}}
P.el.prototype={}
P.ek.prototype={}
P.bF.prototype={
bD:function(a){var u,t=this
H.u(a,"$ib1",t.$ti,"$ab1")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.hG(new P.eG(t,a))
t.a=1}}
P.eG.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.u(this.b,"$ib1",[H.d(r,0)],"$ab1")
t=r.b
s=t.a
r.b=s
if(s==null)r.c=null
H.u(u,"$ib1",[H.d(t,0)],"$ab1").b5(t.b)},
$S:0}
P.bG.prototype={}
P.cx.prototype={
dS:function(){var u=this
if((u.b&2)!==0)return
P.aE(null,null,u.a,H.e(u.gdT(),{func:1,ret:-1}))
u.b|=2},
dU:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.cA(u.c)},
$iaa:1}
P.eM.prototype={}
P.H.prototype={
h:function(a){return H.b(this.a)},
$iak:1}
P.eR.prototype={$ijJ:1}
P.eX.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bp():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u},
$S:0}
P.eH.prototype={
cA:function(a){var u,t,s,r=null
H.e(a,{func:1,ret:-1})
try{if(C.e===$.o){a.$0()
return}P.ho(r,r,this,a,-1)}catch(s){u=H.a4(s)
t=H.bb(s)
P.cD(r,r,this,u,H.k(t,"$iB"))}},
cB:function(a,b,c){var u,t,s,r=null
H.e(a,{func:1,ret:-1,args:[c]})
H.j(b,c)
try{if(C.e===$.o){a.$1(b)
return}P.hp(r,r,this,a,b,-1,c)}catch(s){u=H.a4(s)
t=H.bb(s)
P.cD(r,r,this,u,H.k(t,"$iB"))}},
e7:function(a,b){return new P.eJ(this,H.e(a,{func:1,ret:b}),b)},
b9:function(a){return new P.eI(this,H.e(a,{func:1,ret:-1}))},
e8:function(a,b){return new P.eK(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
cz:function(a,b){H.e(a,{func:1,ret:b})
if($.o===C.e)return a.$0()
return P.ho(null,null,this,a,b)},
bu:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.j(b,d)
if($.o===C.e)return a.$1(b)
return P.hp(null,null,this,a,b,c,d)},
eN:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.j(b,e)
H.j(c,f)
if($.o===C.e)return a.$2(b,c)
return P.iP(null,null,this,a,b,c,d,e,f)},
br:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}}
P.eJ.prototype={
$0:function(){return this.a.cz(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.eI.prototype={
$0:function(){return this.a.cA(this.b)},
$S:1}
P.eK.prototype={
$1:function(a){var u=this.c
return this.a.cB(this.b,H.j(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.dd.prototype={}
P.a9.prototype={
gR:function(a){return new H.di(a,this.gk(a),[H.hB(this,a,"a9",0)])},
c7:function(a,b){return this.p(a,b)},
h:function(a){return P.fY(a,"[","]")}}
P.dk.prototype={}
P.dl.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:9}
P.dm.prototype={
gk:function(a){return this.a},
h:function(a){return P.h5(this)},
$ih4:1}
P.as.prototype={}
P.af.prototype={}
P.aJ.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aJ&&this.a===b.a},
gi:function(a){return C.d.gi(this.a)},
h:function(a){var u,t,s,r=new P.d5(),q=this.a
if(q<0)return"-"+new P.aJ(0-q).h(0)
u=r.$1(C.d.T(q,6e7)%60)
t=r.$1(C.d.T(q,1e6)%60)
s=new P.d4().$1(q%1e6)
return""+C.d.T(q,36e8)+":"+H.b(u)+":"+H.b(t)+"."+H.b(s)}}
P.d4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:10}
P.d5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:10}
P.ak.prototype={}
P.cK.prototype={
h:function(a){return"Assertion failed"}}
P.bp.prototype={
h:function(a){return"Throw of null."}}
P.a5.prototype={
gaY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaX:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaY()+o+u
if(!q.a)return t
s=q.gaX()
r=P.bZ(q.b)
return t+s+": "+r}}
P.br.prototype={
gaY:function(){return"RangeError"},
gaX:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.db.prototype={
gaY:function(){return"RangeError"},
gaX:function(){var u,t=H.V(this.b)
if(typeof t!=="number")return t.cD()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
P.e2.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.e0.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bv.prototype={
h:function(a){return"Bad state: "+H.b(this.a)}}
P.cT.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bZ(u)+"."}}
P.dt.prototype={
h:function(a){return"Out of Memory"},
$iak:1}
P.cm.prototype={
h:function(a){return"Stack Overflow"},
$iak:1}
P.d2.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ep.prototype={
h:function(a){return"Exception: "+this.a}}
P.d9.prototype={
h:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.ao(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.y.prototype={}
P.J.prototype={
gk:function(a){var u,t=this.gR(this)
for(u=0;t.w();)++u
return u},
h:function(a){return P.ih(this,"(",")")}}
P.K.prototype={$iJ:1}
P.p.prototype={
gi:function(a){return P.n.prototype.gi.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.n.prototype={constructor:P.n,$in:1,
v:function(a,b){return this===b},
gi:function(a){return H.aS(this)},
h:function(a){return"Instance of '"+H.b(H.bq(this))+"'"},
toString:function(){return this.h(this)}}
P.aQ.prototype={}
P.cf.prototype={$iaQ:1}
P.B.prototype={}
P.dR.prototype={
gek:function(){var u,t,s=this.b
if(s==null)s=H.V($.dx.$0())
u=this.a
if(typeof s!=="number")return s.aS()
t=s-u
if($.fo===1000)return t
return C.d.T(t,1000)}}
P.t.prototype={$ih7:1}
P.bw.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.i.prototype={}
W.cH.prototype={
h:function(a){return String(a)}}
W.cI.prototype={
h:function(a){return String(a)}}
W.bT.prototype={}
W.ah.prototype={
bB:function(a,b,c){var u=a.getContext(b,P.iZ(c))
return u},
gee:function(a){return a.getContext("2d")},
$iah:1,
$ifT:1}
W.bW.prototype={$ibW:1}
W.au.prototype={
gk:function(a){return a.length}}
W.bg.prototype={
gk:function(a){return a.length}}
W.d1.prototype={}
W.d3.prototype={
h:function(a){return String(a)}}
W.bY.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.r(b)
if(!u.$iaT)return!1
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gS(b)&&a.height===u.gP(b)},
gi:function(a){return W.hg(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gP:function(a){return a.height},
gX:function(a){return a.left},
gY:function(a){return a.top},
gS:function(a){return a.width},
$iaT:1,
$aaT:function(){return[P.m]}}
W.aj.prototype={
h:function(a){return a.localName},
gcr:function(a){return new W.cy(a,"click",!1,[W.x])},
$iaj:1}
W.c.prototype={$ic:1}
W.aL.prototype={
cR:function(a,b,c,d){return a.addEventListener(b,H.b8(H.e(c,{func:1,args:[W.c]}),1),!1)},
dO:function(a,b,c,d){return a.removeEventListener(b,H.b8(H.e(c,{func:1,args:[W.c]}),1),!1)},
$iaL:1}
W.d8.prototype={
gk:function(a){return a.length}}
W.a0.prototype={$ia0:1,$ifT:1}
W.am.prototype={$iam:1}
W.an.prototype={$ian:1}
W.bo.prototype={}
W.x.prototype={$ix:1}
W.S.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.cJ(a):u},
c1:function(a,b){return a.appendChild(b)},
dN:function(a,b){return a.removeChild(b)},
$iS:1}
W.dK.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.ap.prototype={$iap:1}
W.dY.prototype={
gk:function(a){return a.length},
p:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.fX(b,a,null,null,null))
return a[b]},
c7:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ic6:1,
$ac6:function(){return[W.ab]},
$aa9:function(){return[W.ab]},
$iJ:1,
$aJ:function(){return[W.ab]},
$iK:1,
$aK:function(){return[W.ab]},
$abk:function(){return[W.ab]}}
W.aC.prototype={}
W.e3.prototype={$ifT:1}
W.ad.prototype={
gei:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.T("deltaY is not supported"))},
geh:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.T("deltaX is not supported"))},
$iad:1}
W.bz.prototype={
dR:function(a,b){return a.requestAnimationFrame(H.b8(H.e(b,{func:1,ret:-1,args:[P.m]}),1))},
d5:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cw.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.r(b)
if(!u.$iaT)return!1
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gS(b)&&a.height===u.gP(b)},
gi:function(a){return W.hg(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gP:function(a){return a.height},
gS:function(a){return a.width}}
W.em.prototype={
aI:function(a,b,c,d){var u=H.d(this,0)
H.e(a,{func:1,ret:-1,args:[u]})
H.e(c,{func:1,ret:-1})
return W.q(this.a,this.b,a,!1,u)}}
W.cy.prototype={}
W.en.prototype={
az:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.e(u,{func:1,args:[W.c]})
if(t)J.i0(r,s.c,u,!1)}s.b=null
s.sda(null)
return},
sda:function(a){this.d=H.e(a,{func:1,args:[W.c]})}}
W.eo.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ic"))},
$S:16}
W.bk.prototype={
gR:function(a){return new W.d7(a,a.length,[H.hB(this,a,"bk",0)])}}
W.d7.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.a(s,t)
u.sbS(s[t])
u.c=t
return!0}u.sbS(null)
u.c=s
return!1},
gA:function(){return this.d},
sbS:function(a){this.d=H.j(a,H.d(this,0))}}
W.cv.prototype={}
W.cB.prototype={}
W.cC.prototype={}
P.f0.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eD.prototype={
cq:function(a){if(a<=0||a>4294967296)throw H.h(P.is("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$iju:1}
P.a1.prototype={
h:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
v:function(a,b){if(b==null)return!1
return!!J.r(b).$ia1&&this.a==b.gE(b)&&this.b==b.gZ(b)},
gi:function(a){var u,t=J.aH(this.a),s=J.aH(this.b)
s=P.hf(P.hf(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
gE:function(a){return this.a},
gZ:function(a){return this.b}}
P.f.prototype={
gcr:function(a){return new W.cy(a,"click",!1,[W.x])}}
P.bU.prototype={$ibU:1}
P.a8.prototype={$ia8:1}
P.cd.prototype={$icd:1}
P.aA.prototype={
bv:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.r(g)
if(!!u.$ia0&&h==null&&t&&!0){this.dZ(a,b,c,d,e,f,g)
return}if(!!u.$iah&&h==null&&t&&!0){this.e_(a,b,c,d,e,f,g)
return}throw H.h(P.ag("Incorrect number or type of arguments"))},
aO:function(a,b,c,d,e,f,g){return this.bv(a,b,c,d,e,f,g,null,null,null)},
dZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
e_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eR:function(a,b,c){return a.uniform1i(b,c)},
$iaA:1}
P.cr.prototype={$icr:1}
P.by.prototype={$iby:1}
Y.cU.prototype={
eg:function(){var u,t,s,r,q,p,o,n,m,l=this,k=1280,j=4292072403,i=4278190080,h="left",g=4294967295,f=document,e=f.querySelector("#stage")
l.r=e
l.x=A.iw(H.k(e,"$iah"),512,l.f,k)
e=K.h2()
u=H.l([],[A.G])
e=new A.dC(e,u,new R.aK("enterFrame",!1),new R.aM("exitFrame",!1))
e.a=!0
L.hk()
t=$.fM();(t&&C.a).j(t,e.gdn())
l.y=e
t=l.x
s=t.ah
if(s!=null)if(C.a.aN(s.c,t))t.ah=null
t.ah=e
C.a.j(u,t)
e=J.aI(f.querySelector("#randomizeButton"))
u=H.d(e,0)
W.q(e.a,e.b,H.e(new Y.cV(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.aI(f.querySelector("#bubbleSortButton"))
e=H.d(u,0)
W.q(u.a,u.b,H.e(new Y.cW(l),{func:1,ret:-1,args:[e]}),!1,e)
e=J.aI(f.querySelector("#selectionSortButton"))
u=H.d(e,0)
W.q(e.a,e.b,H.e(new Y.cX(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.aI(f.querySelector("#insertionSortButton"))
e=H.d(u,0)
W.q(u.a,u.b,H.e(new Y.cY(l),{func:1,ret:-1,args:[e]}),!1,e)
e=J.aI(f.querySelector("#bogoSortButton"))
u=H.d(e,0)
W.q(e.a,e.b,H.e(new Y.cZ(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.aI(f.querySelector("#reverseButton"))
e=H.d(u,0)
W.q(u.a,u.b,H.e(new Y.d_(l),{func:1,ret:-1,args:[e]}),!1,e)
f=J.aI(f.querySelector("#stopButton"))
e=H.d(f,0)
W.q(f.a,f.b,H.e(new Y.d0(l),{func:1,ret:-1,args:[e]}),!1,e)
e=A.at(k,2,j)
f=$.v
$.v=f+1
u=[A.a6]
r=new A.X(e,f,H.l([],u),T.z())
r.d=512
l.x.u(r)
f=A.at(k,2,j)
e=$.v
$.v=e+1
t=H.l([],u)
s=T.z()
l.x.u(new A.X(f,e,t,s))
f=A.at(k,2,j)
e=$.v
$.v=e+1
q=new A.X(f,e,H.l([],u),T.z())
q.d=384
l.x.u(q)
f=A.at(k,2,j)
e=$.v
$.v=e+1
p=new A.X(f,e,H.l([],u),T.z())
p.d=128
l.x.u(p)
o=Y.hb("Helvetica, Arial, sans-serif",18,i,h,!1,0,null,0,!1,0,0,0,i,0,0,!1,"top",400)
o.dx=o.db=5
f=Y.cp("",o)
f.k4=!1
f.sab(0,!0)
f.sac(0,g)
f.saa(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=512
l.b=f
l.x.u(f)
f=Y.cp("",o)
f.k4=!1
f.sab(0,!0)
f.sac(0,g)
f.saa(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=0
l.c=f
l.x.u(f)
f=Y.cp("",o)
f.k4=!1
f.sab(0,!0)
f.sac(0,g)
f.saa(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=384
l.d=f
l.x.u(f)
f=Y.cp("",o)
f.k4=!1
f.sab(0,!0)
f.sac(0,g)
f.saa(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=128
l.e=f
l.x.u(f)
l.c6()
l.x.u(l.a)
f=A.at(k,2,i)
e=$.v
$.v=e+1
n=new A.X(f,e,H.l([],u),T.z())
n.d=256
l.x.u(n)
m=Y.cp("0",o)
m.k4=!1
m.sab(0,!0)
m.sac(0,g)
m.saa(h)
m.e=0
m.id=!0
m.f=9
m.c=30
m.d=256
l.x.u(m)},
c6:function(){var u=this,t=document,s=P.f6(H.f7(t.querySelector("#maxValueInput"),"$iam").value),r=P.f6(H.f7(t.querySelector("#minValueInput"),"$iam").value),q=P.f6(H.f7(t.querySelector("#amountInput"),"$iam").value)
if(typeof s!=="number")return s.bC()
if(s>999999)s=999999
else if(s<-999999)s=-999999
if(typeof r!=="number")return r.bC()
if(r>999999)r=999999
else if(r<-999999)r=-999999
u.b.sam(0,""+r)
u.c.sam(0,""+s)
u.d.sam(0,H.b(r/2))
u.e.sam(0,H.b(s/2))
if(typeof q!=="number")return q.bC()
if(q>1024)q=1024
else if(q<0)q=0
u.a.eJ(s,r,q)},
aK:function(){var u=P.f6(H.f7(document.querySelector("#durationValueInput"),"$iam").value)
if(typeof u!=="number")return u.cC()
if(u<=0)u=1
return u}}
Y.cV.prototype={
$1:function(a){H.k(a,"$ix")
this.a.c6()},
$S:2}
Y.cW.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.a.a3(u.aK())},
$S:2}
Y.cX.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.a.a_(u.aK())},
$S:2}
Y.cY.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.a.ai(u.aK())},
$S:2}
Y.cZ.prototype={
$1:function(a){var u
H.k(a,"$ix")
u=this.a
u.a.ay(u.aK())},
$S:2}
Y.d_.prototype={
$1:function(a){H.k(a,"$ix")
this.a.a.eM()},
$S:2}
Y.d0.prototype={
$1:function(a){H.k(a,"$ix")
this.a.a.cI()},
$S:2}
Z.d6.prototype={
eJ:function(a,b,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.cu()
for(u=c.t,t=0;t<u.length;++t)u[t].cx=!1
s=c.n
C.a.sk(s,0)
C.a.sk(u,0)
for(r=a0+1,q=[A.a6],p=1024/a0*0.5,o=c.ah,n=a-b,m=b!==a,l=a===b,k=Math.abs(b),t=0;t<a0;){j=!m||l?a:b+o.cq(n)
i=Math.abs(j)
if(i<1)h=1
else{if(i<=a)if(i<a)g=j===0?1/j<0:j<0
else g=!1
else g=!0
h=g?i/k*256:i/a*256}f=A.at(p,h,4278255487)
i=$.v
$.v=i+1
e=new A.X(f,i,H.l([],q),T.z())
d=e.gI()
e.e=e.gH().a6(d,d).c/2
e.id=!0
if(j>=0){d=e.gI()
e.f=e.gH().a6(d,d).d
e.id=!0}else e.f=-2;++t
e.c=128+t/r*1024
e.d=256
c.u(e)
C.a.j(s,j)
C.a.j(u,e)}},
J:function(a,b,c){var u,t,s,r,q,p,o=this,n=o.t,m=n.length
if(a<0||a>=m)return H.a(n,a)
u=n[a]
t=u.c
if(b<0||b>=m)return H.a(n,b)
s=n[b].c
u.cx=!1
m=u.gN().c
if(a>=n.length)return H.a(n,a)
m=A.at(m,n[a].gN().d,c)
u=$.v
$.v=u+1
r=[A.a6]
C.a.q(n,a,new A.X(m,u,H.l([],r),T.z()))
if(a>=n.length)return H.a(n,a)
u=n[a]
u.e=u.gN().c/2
u.id=!0
m=o.n
if(a>=m.length)return H.a(m,a)
u=m[a]
q=n.length
if(u>=0){if(a>=q)return H.a(n,a)
u=n[a]
u.f=u.gN().d
u.id=!0}else{if(a>=q)return H.a(n,a)
u=n[a]
u.f=-2
u.id=!0}if(a>=n.length)return H.a(n,a)
u=n[a]
u.c=t
u.id=!0
u.d=256
p=o.gal()
u=p instanceof A.G?p:null
if(a>=n.length)return H.a(n,a)
u.u(n[a])
u=n.length
if(a>=u)return H.a(n,a)
n[a].cx=!0
if(b>=u)return H.a(n,b)
u=n[b]
u.cx=!1
u=u.gN().c
if(b>=n.length)return H.a(n,b)
u=A.at(u,n[b].gN().d,c)
q=$.v
$.v=q+1
C.a.q(n,b,new A.X(u,q,H.l([],r),T.z()))
if(b>=n.length)return H.a(n,b)
r=n[b]
r.e=r.gN().c/2
r.id=!0
if(b>=m.length)return H.a(m,b)
m=m[b]
u=n.length
if(m>=0){if(b>=u)return H.a(n,b)
m=n[b]
m.f=m.gN().d
m.id=!0}else{if(b>=u)return H.a(n,b)
m=n[b]
m.f=-2
m.id=!0}if(b>=n.length)return H.a(n,b)
m=n[b]
m.c=s
m.id=!0
m.d=256
p=o.gal()
m=p instanceof A.G?p:null
if(b>=n.length)return H.a(n,b)
m.u(n[b])
if(b>=n.length)return H.a(n,b)
n[b].cx=!0},
a0:function(a,b){var u=0,t=P.bM(null),s,r=this,q,p,o,n,m,l,k
var $async$a0=P.bN(function(c,d){if(c===1)return P.bH(d,t)
while(true)switch(u){case 0:l=r.n
k=l.length
if(a<0||a>=k){s=H.a(l,a)
u=1
break}q=l[a]
if(b<0||b>=k){s=H.a(l,b)
u=1
break}k=l[b]
if(a<0||a>=l.length){s=H.a(l,a)
u=1
break}l[a]=k
if(b<0||b>=l.length){s=H.a(l,b)
u=1
break}l[b]=q
l=r.t
k=l.length
if(a>=k){s=H.a(l,a)
u=1
break}p=l[a]
if(b>=k){s=H.a(l,b)
u=1
break}k=l[b]
if(a<0||a>=l.length){s=H.a(l,a)
u=1
break}l[a]=k
C.a.q(l,b,p)
k=l.length
if(a>=k){s=H.a(l,a)
u=1
break}o=l[a]
n=o.c
if(b>=k){s=H.a(l,b)
u=1
break}m=l[b]
o.c=m.c
o.id=!0
if(b>=k){s=H.a(l,b)
u=1
break}m.c=n
m.id=!0
case 1:return P.bI(s,t)}})
return P.bJ($async$a0,t)},
a3:function(a){var u=0,t=P.bM(null),s,r=this,q,p,o,n,m,l
var $async$a3=P.bN(function(b,c){if(b===1)return P.bH(c,t)
while(true)switch(u){case 0:q=r.n,p=0
case 3:if(!(p<q.length-1)){u=5
break}o=0
case 6:if(!(o<q.length-p-1)){u=8
break}n=o+1
r.J(o,n,4287090426)
u=9
return P.ar(P.al(P.ai(a),null),$async$a3)
case 9:m=q.length
if(o>=m){s=H.a(q,o)
u=1
break}l=q[o]
if(n>=m){s=H.a(q,n)
u=1
break}u=l>q[n]?10:11
break
case 10:r.J(o,n,4292571283)
u=12
return P.ar(P.al(P.ai(a),null),$async$a3)
case 12:r.a0(o,n)
case 11:u=13
return P.ar(P.al(P.ai(a),null),$async$a3)
case 13:r.J(o,n,4278255487)
case 7:o=n
u=6
break
case 8:case 4:++p
u=3
break
case 5:case 1:return P.bI(s,t)}})
return P.bJ($async$a3,t)},
a_:function(a){var u=0,t=P.bM(null),s,r=this,q,p,o,n,m,l
var $async$a_=P.bN(function(b,c){if(b===1)return P.bH(c,t)
while(true)$async$outer:switch(u){case 0:q=r.n,p=0
case 3:if(!(o=q.length,p<o-1)){u=5
break}for(n=p,m=n;n<o;++n){r.J(p,m,4287090426)
o=q.length
if(n>=o){s=H.a(q,n)
u=1
break $async$outer}l=q[n]
if(m<0||m>=o){s=H.a(q,m)
u=1
break $async$outer}if(l<q[m])m=n}u=6
return P.ar(P.al(P.ai(a),null),$async$a_)
case 6:r.J(p,m,4292571283)
u=7
return P.ar(P.al(P.ai(a),null),$async$a_)
case 7:r.a0(p,m)
u=8
return P.ar(P.al(P.ai(a),null),$async$a_)
case 8:r.J(p,m,4278255487)
case 4:++p
u=3
break
case 5:case 1:return P.bI(s,t)}})
return P.bJ($async$a_,t)},
ai:function(a){var u=0,t=P.bM(null),s,r=this,q,p,o,n,m,l,k
var $async$ai=P.bN(function(b,c){if(b===1)return P.bH(c,t)
while(true)switch(u){case 0:q=r.n,p=1
case 3:if(!(p<q.length)){u=5
break}o=p
case 6:if(!!0){u=7
break}if(o>0){n=q.length
if(o>=n){s=H.a(q,o)
u=1
break}m=q[o]
l=o-1
if(l>=n){s=H.a(q,l)
u=1
break}l=m<q[l]
n=l}else n=!1
if(!n){u=7
break}r.J(p,p,4287090426)
k=o-1
r.J(o,k,4292571283)
u=8
return P.ar(P.al(P.ai(a),null),$async$ai)
case 8:r.a0(o,k)
u=9
return P.ar(P.al(P.ai(a),null),$async$ai)
case 9:r.J(o,k,4278255487)
o=k
u=6
break
case 7:case 4:++p
u=3
break
case 5:r.b8(4278255487)
case 1:return P.bI(s,t)}})
return P.bJ($async$ai,t)},
ay:function(a){var u=0,t=P.bM(null),s=this,r,q
var $async$ay=P.bN(function(b,c){if(b===1)return P.bH(c,t)
while(true)switch(u){case 0:s.b8(4292571283)
r=s.t,q=!1
case 2:if(!!q){u=3
break}u=4
return P.ar(P.al(P.ai(a),null),$async$ay)
case 4:C.a.cG(r)
s.e9()
q=s.eb()
u=2
break
case 3:s.b8(4278255487)
return P.bI(null,t)}})
return P.bJ($async$ay,t)},
b8:function(a){var u,t,s
for(u=this.t,t=0;t<u.length-1;t=s){s=t+1
this.J(t,s,a)}},
e9:function(){var u,t,s,r
for(u=this.t,t=0;s=u.length,t<s;){r=u[t];++t
r.c=128+t/(s+1)*1024
r.id=!0}},
eb:function(){var u,t,s,r,q
for(u=this.t,t=0;t<u.length-1;){s=u[t]
r=s.gI()
s=s.gH().a6(r,r).d;++t
if(t>=u.length)return H.a(u,t)
q=u[t]
r=q.gI()
if(s>q.gH().a6(r,r).d)return!1}return!0},
eM:function(){var u,t,s,r
for(u=this.n,t=0;t<u.length-1;++t)for(s=0;s<u.length-t-1;s=r){r=s+1
if(u[s]<u[r])this.a0(s,r)}},
cI:function(){var u,t
this.cu()
for(u=this.t,t=0;t<u.length;++t)u[t].cx=!1
C.a.sk(this.n,0)
C.a.sk(u,0)}}
K.e6.prototype={}
K.dg.prototype={
ax:function(a){var u,t,s,r=this,q=r.c+=a
r.d.j(0,q)
u=r.a
t=r.b
for(;u!==t;){s=u.b
u.a=s.geX()
u.b=s.gf2()}return!0},
$ijl:1}
A.X.prototype={
gI:function(){var u=this.k3
return new U.E(0,0,u.a,u.b,[P.m])},
W:function(a,b){if(a<0||a>=this.k3.a)return
if(b<0||b>=this.k3.b)return
return this},
aj:function(a){a.c.a5(a,this.k3.c)}}
A.a_.prototype={}
A.cO.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ia0")
u=new L.bt(C.y)
u.a=V.bQ(a.width)
u.b=V.bQ(a.height)
u.c=a
t=u.gaM().aP(this.a)
s=t.c
r=t.e
return new A.a_(s.c/r,s.d/r,t)},
$S:18}
A.cL.prototype={
cL:function(a,b){var u,t,s,r,q,p,o,n,m,l=this
l.b=l.a=a
l.c=1
u=P.h8("@(\\d+(.\\d+)?)x").ew(l.a)
if(u!=null){t=u.b
if(2>=t.length)return H.a(t,2)
s=t[2]
if(s==null)s="."
r=P.j_(t[1])
q=C.a.ey(b,0,new A.cM($.fO()),P.m)
p=J.i3(q,s.length-1)
t=t.index+1
s=u.gaB()
o=P.it(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
l.b=n+p+m
if(typeof r!=="number")return H.U(r)
l.c=q/r}}}
A.cM.prototype={
$2:function(a,b){var u
H.fb(a)
H.fb(b)
u=this.a
if(typeof a!=="number")return a.aS()
if(typeof u!=="number")return H.U(u)
if(typeof b!=="number")return b.aS()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:19}
A.cN.prototype={}
A.a6.prototype={}
A.I.prototype={
gE:function(a){return this.c},
sE:function(a,b){this.c=b
this.id=!0},
gal:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gH:function(){var u=this
if(u.id){u.id=!1
u.go.an(1,0,0,1,u.c-u.e,u.d-u.f)}return u.go},
gI:function(){return new U.E(0,0,0,0,[P.m])},
gN:function(){var u=this.gI()
return this.gH().a6(u,u)},
F:function(a,b){var u,t=[P.m]
H.u(a,"$iA",t,"$aA")
H.u(b,"$iA",t,"$aA")
u=!!b.$iA?b:new U.A(0,0,t)
u.sE(0,a.a)
u.sZ(0,a.b)
this.bU(u)
return u},
bU:function(a){var u,t,s,r,q,p=[P.m]
H.u(a,"$iA",p,"$aA")
u=this.fy
if(u!=null)u.bU(a)
t=!!a.$iA?a:new U.A(0,0,p)
s=a.a
r=a.b
q=this.gH()
p=q.a
t.sE(0,(p[3]*(s-p[4])-p[2]*(r-p[5]))/q.gbd())
t.sZ(0,(p[0]*(r-p[5])-p[1]*(s-p[4]))/q.gbd())},
l:function(a,b){var u,t,s,r,q=this,p=H.l([],[R.c_])
for(u=q.fy;u!=null;u=u.fy)C.a.j(p,u)
t=p.length-1
while(!0){if(!(t>=0&&b.gc2()))break
if(t<0||t>=p.length)return H.a(p,t)
p[t].be(b,q,C.t);--t}q.be(b,q,C.T)
s=b.b
t=0
while(!0){r=p.length
if(!(t<r&&s))break
if(t>=r)return H.a(p,t)
p[t].be(b,q,C.U);++t}},
aj:function(a){},
sb4:function(a){this.fy=H.u(a,"$iff",[A.I],"$aff")},
$ijv:1}
A.bh.prototype={
u:function(a){var u,t,s,r,q=this
if(a===q)throw H.h(P.ag("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===q)q.cS(a)
else{if(u!=null){t=u.B
s=C.a.eC(t,a)
u.cZ(a)
C.a.bs(t,s)}q.e0(a)
C.a.j(q.B,a)
a.sb4(q)
a.l(0,new R.L("added",!0))
r=q.gal()
if((r instanceof A.G?r:null)!=null)q.aW(a,"addedToStage")}}},
cu:function(){var u,t,s,r,q="The supplied index is out of bounds.",p=this.B,o=p.length,n=o-1
if(0<=n){if(0<o)u=n>=o
else u=!0
if(u)throw H.h(P.ag(q))
else{t=0
while(!0){if(!(t<=n&&0<p.length))break
u=p.length
if(0>=u)H.F(P.ag(q))
else{s=p[0]
s.l(0,new R.L("removed",!0))
r=this.gal()
if((r instanceof A.G?r:null)!=null)this.aW(s,"removedFromStage")
s.sb4(null)
C.a.bs(p,0)}++t}}}},
gI:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this.B
if(j.length===0)return A.I.prototype.gI.call(this)
for(u=1/0,t=1/0,s=-1/0,r=-1/0,q=0;q<j.length;++q){p=j[q]
o=p.gI()
o=p.gH().a6(o,o)
n=o.a
if(n<u)u=n
m=o.b
if(m<t)t=m
p=H.d(o,0)
l=H.j(n+o.c,p)
if(l>s)s=l
k=H.j(m+o.d,p)
if(k>r)r=k}return new U.E(u,t,s-u,r-t,[P.m])},
W:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.B,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.a(u,t)
r=u[t]
q=r.gH()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.W((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
if(!!i.$ic1&&i.k4)return i
s=this}}return s},
aj:function(a){var u,t,s
for(u=this.B,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.bt(s)}},
e0:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.h(P.ag("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
cS:function(a){var u,t,s,r=this.B
for(u=r.length-1,t=a;u>=0;--u,t=s){if(u>=r.length)return H.a(r,u)
s=r[u]
C.a.q(r,u,t)
if(a===s)break}},
cZ:function(a){var u
a.l(0,new R.L("removed",!0))
u=this.gal()
if((u instanceof A.G?u:null)!=null)this.aW(a,"removedFromStage")
a.sb4(null)},
aW:function(a,b){var u=!1,t=this
while(!0){if(!(t!=null&&!u))break
if(t.bp(b,!0))u=!0
t=t.fy}this.bT(a,new R.L(b,!1),u)},
bT:function(a,b,c){var u,t,s=!c
if(!s||a.eA(b.a))a.l(0,b)
if(!!a.$ibh){c=!s||a.bp(b.a,!0)
u=a.B
for(t=0;t<u.length;++t)this.bT(u[t],b,c)}},
$iff:1,
$aff:function(){return[A.I]}}
A.c1.prototype={}
A.dC.prototype={
ax:function(a){var u,t=this
t.f+=a
R.fr(t.d,$.fK(),R.aK)
t.b.ax(a)
u=t.c
C.a.V(u,new A.dD(a))
C.a.V(u,new A.dE(t,a))
R.fr(t.e,$.fL(),R.aM)}}
A.dD.prototype={
$1:function(a){H.k(a,"$iG").en.ax(this.a)
return!0},
$S:20}
A.dE.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iG")
u=this.a.f
t=a.aC
if(t!==C.m)t=t===C.H
else t=!0
if(t){s=new P.dR()
if($.fo==null){H.ip()
$.fo=$.dw}t=H.V($.dx.$0())
if(typeof t!=="number")return t.aS()
s.a=t-0
s.b=null
a.c_()
R.fr(a.el,$.fN(),R.aW)
a.t.ak(0)
t=a.t
r=t.a
r.c=r.b=r.a=0
t.ba(0,a.bh)
a.O.cw(0,a.co)
V.Z(u)
a.O.b=V.Z(this.b)
a.O.bt(a)
a.O.c.G(0)
u=a.es=!1
q=a.t.a
p=s.gek()
a.bl=a.bl*0.75+q.a*0.25
a.bm=a.bm*0.75+q.b*0.25
a.bn=a.bn*0.75+q.c*0.25
a.bk=a.bk*0.95+p*0.05
t=a.U
if(t.cx){t.toString
u=!0}if(u){C.a.sk(t.r2,0)
t.ry=t.rx=0
a.U.aL(0,"FRAMETIME"+C.c.aJ(C.d.h(C.b.m(a.bk)),6))
a.U.aL(0,"DRAWCALLS"+C.c.aJ(C.d.h(C.b.m(a.bl)),6))
a.U.aL(0,"VERTICES"+C.c.aJ(C.d.h(C.b.m(a.bm)),7))
a.U.aL(0,"INDICES"+C.c.aJ(C.d.h(C.b.m(a.bn)),8))
a.O.cw(0,a.c8)
a.O.bt(a.U)
a.O.c.G(0)}}if(a.aC===C.H)a.aC=C.a_
return},
$S:21}
A.bu.prototype={
h:function(a){return this.b}}
A.aY.prototype={
h:function(a){return this.b}}
A.Y.prototype={
h:function(a){return this.b}}
A.G.prototype={
cM:function(a,b,c,d){var u,t,s,r=this,q=a.tabIndex
if(typeof q!=="number")return q.cC()
if(q<=0)a.tabIndex=1
q=a.style
if(q.outline==="")q.outline="none"
r.bh=c.f
r.ep=r.eo=!0
r.er=r.eq=!1
r.n=a
r.ca=C.i
r.c9=C.n
r.aC=C.m
r.bf=C.k
r.ck=V.bQ(d)
r.cl=V.bQ(b)
r.aF=V.jc(5,$.fO())
q=r.d2(a,c)
r.t=q
r.O=L.iu(q)
q=H.l([],[L.az])
u=T.z()
t=H.l([],[P.t])
s=$.v
$.v=s+1
s=new A.cn(q,u,t,s,H.l([],[A.a6]),T.z())
A.i7("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").bw(s.gcV(),-1)
s.cx=!1
r.U=s
H.je("StageXL render engine : "+r.t.gcv().h(0))
q=W.an
u=H.e(r.gdz(),{func:1,ret:-1,args:[q]})
W.q(a,"keydown",u,!1,q)
W.q(a,"keyup",u,!1,q)
W.q(a,"keypress",u,!1,q)
q=r.bf
if(q===C.k||q===C.u){q=W.x
u=H.e(r.gdD(),{func:1,ret:-1,args:[q]})
W.q(a,"mousedown",u,!1,q)
W.q(a,"mouseup",u,!1,q)
W.q(a,"mousemove",u,!1,q)
W.q(a,"mouseout",u,!1,q)
W.q(a,"contextmenu",u,!1,q)
W.fW(a)
q=W.ad
W.q(a,H.W(W.fW(a)),H.e(r.gdF(),{func:1,ret:-1,args:[q]}),!1,q)}q=r.bf
if((q===C.V||q===C.u)&&H.bO($.hY())){q=W.ap
u=H.e(r.gdJ(),{func:1,ret:-1,args:[q]})
W.q(a,"touchstart",u,!1,q)
W.q(a,"touchend",u,!1,q)
W.q(a,"touchmove",u,!1,q)
W.q(a,"touchenter",u,!1,q)
W.q(a,"touchleave",u,!1,q)
W.q(a,"touchcancel",u,!1,q)}$.hL().eH(new A.dP(r))
r.b7()
r.c_()
r.t.ba(0,r.bh)},
W:function(a,b){var u=this.bI(a,b)
return u!=null?u:this},
d2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.a
if(e===C.l)try{e=new T.aR(new Float32Array(16))
e.a7()
u=H.l([],[L.eF])
t=P.t
s=[t,P.y]
r=[t,P.by]
q=new Int16Array(0)
q=new L.dF(new H.M(s),new H.M(r),new L.aU(q),new L.aV(new Float32Array(0)),new L.ao())
p=new Int16Array(0)
o=new Float32Array(0)
n=new Int16Array(0)
m=new Float32Array(0)
l=new Int16Array(16384)
k=new Float32Array(32768)
j=new Array(8)
j.fixed$length=Array
j=H.l(j,[L.bt])
i=H.l([],[L.cj])
h=L.ay
h=new L.ch(a,e,u,q,new L.dG(new H.M(s),new H.M(r),new L.aU(p),new L.aV(o),new L.ao()),new L.dH(new H.M(s),new H.M(r),new L.aU(n),new L.aV(m),new L.ao()),new L.aU(l),new L.aV(k),j,i,new H.M([t,L.bs]),new L.ao(),P.aB(h),P.aB(h))
i=P.a8
j={func:1,ret:-1,args:[i]}
W.q(a,"webglcontextlost",H.e(h.gdh(),j),!1,i)
W.q(a,"webglcontextrestored",H.e(h.gdj(),j),!1,i)
b=P.il(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t,null)
g=C.j.bB(a,"webgl",b)
g=H.k(g==null?C.j.bB(a,"experimental-webgl",b):g,"$iaA")
if(!J.r(g).$iaA)H.F(P.aZ("Failed to get WebGL context."))
h.e=g
g.enable(3042)
h.e.disable(2960)
h.e.disable(2929)
h.e.disable(2884)
h.e.pixelStorei(37441,1)
h.e.blendFunc(1,771)
h.x=q
q.a9(h)
h.cx=$.dA=$.dA+1
h.ak(0)
return h}catch(f){H.a4(f)
e=T.z()
u=L.ay
u=new L.cg(a,a.getContext("2d"),e,C.f,new L.ao(),P.aB(u),P.aB(u))
u.ak(0)
return u}else if(e===C.x){e=T.z()
u=L.ay
u=new L.cg(a,a.getContext("2d"),e,C.f,new L.ao(),P.aB(u),P.aB(u))
u.ak(0)
return u}else throw H.h(P.aZ("Unknown RenderEngine"))},
c_:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.ck,h=j.cl,g=j.n.getBoundingClientRect(),f=j.n,e=f.clientLeft,d=C.b.m(g.left)
if(typeof e!=="number")return e.M()
u=f.clientTop
t=C.b.m(g.top)
if(typeof u!=="number")return u.M()
s=f.clientWidth
r=f.clientHeight
if(s===0||r===0)return
if(typeof s!=="number")return s.bA()
q=s/i
if(typeof r!=="number")return r.bA()
p=r/h
switch(j.c9){case C.a0:o=p
n=q
break
case C.a1:o=q>p?q:p
n=o
break
case C.a2:n=1
o=1
break
case C.n:o=q<p?q:p
n=o
break
default:n=1
o=1}f=j.ca
switch(f){case C.C:case C.E:case C.z:m=0
break
case C.A:case C.i:case C.F:m=(s-i*n)/2
break
case C.B:case C.D:case C.G:m=s-i*n
break
default:m=0}switch(f){case C.z:case C.A:case C.B:l=0
break
case C.C:case C.i:case C.D:l=(r-h*o)/2
break
case C.E:case C.F:case C.G:l=r-h*o
break
default:l=0}f=j.eu
f.sX(0,-m/n)
f.sY(0,-l/o)
f.sS(0,s/n)
f.sP(0,r/o)
f=j.co
f.an(n,0,0,o,m,l)
k=j.aF
f.aR(0,k,k)
k=j.aG
k.an(1,0,0,1,-(e+d)-m,-(u+t)-l)
k.aR(0,1/n,1/o)
k=j.c8
k.cp()
t=j.aF
k.aR(0,t,t)
if(j.cm!==s||j.cn!==r){j.cm=s
j.cn=r
f=j.n
e=j.aF
if(typeof e!=="number")return H.U(e)
f.width=C.b.m(s*e)
f.height=C.b.m(r*e)
if(f.clientWidth!==s||f.clientHeight!==r){f=f.style
e=""+s+"px"
f.width=e
f=j.n.style
e=""+r+"px"
f.height=e}j.l(0,new R.L("resize",!1))}},
b7:function(){var u,t,s,r,q,p,o,n=this,m="default",l=n.bg
if(l!=null&&!0)l.toString
if(n.cb!=="default"){n.cb=m
u=n.n.style
if($.fH().c4(m)){t=$.fH().p(0,m)
s=C.v.gf3(t)
r=t.geB()
q=r.gE(r)
r=t.geB()
p=r.gZ(r)
o="url('"+H.b(s)+"') "+H.b(q)+" "+H.b(p)+", default"}else o=m
u.cursor=o}},
dE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
H.k(a,"$ix")
a.preventDefault()
u=Date.now()
t=a.button
s=P.m
r=b.aG.by(new P.a1(a.clientX,a.clientY,[s]))
q=new U.A(0,0,[s])
if(typeof t!=="number")return t.cD()
if(t<0||t>2)return
if(a.type==="mousemove"&&b.cc.v(0,r))return
s=b.em
if(t<0||t>=3)return H.a(s,t)
p=s[t]
b.sde(r)
C.a.V(b.cd,new A.dM(r))
if(a.type!=="mouseout")o=b.W(r.a,r.b)
else{b.l(0,new R.L("mouseLeave",!1))
o=null}n=b.bg
if(n!=o){s=[A.I]
m=H.l([],s)
l=H.l([],s)
for(k=n;k!=null;k=k.fy)C.a.j(m,k)
for(k=o;k!=null;k=k.fy)C.a.j(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.a(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.a(l,h)
if(g!==l[h])break}if(n!=null){n.F(r,q)
n.l(0,new R.N(q.a,q.b,"mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.F(r,q)
e.l(0,new R.N(q.a,q.b,"rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.a(l,f)
e=l[f]
e.F(r,q)
e.l(0,new R.N(q.a,q.b,"rollOver",!1))}if(o!=null){o.F(r,q)
o.l(0,new R.N(q.a,q.b,"mouseOver",!0))}b.bg=o}b.b7()
if(a.type==="mousedown"){b.n.focus()
d=p.a
if(o!=p.e||u>p.r+500)p.x=0
p.f=!0
p.e=o
p.r=u;++p.x}else d=null
if(a.type==="mouseup"){d=p.b
p.f=!1
c=p.e==o
c}else c=!1
u=a.type
if(u==="mousemove")d="mouseMove"
if(u==="contextmenu")d="contextMenu"
if(d!=null&&o!=null){o.F(r,q)
o.l(0,new R.N(q.a,q.b,d,!0))
if(c)o.l(0,new R.N(q.a,q.b,p.c,!0))}},
dG:function(a){var u,t,s,r,q
H.k(a,"$iad")
u=P.m
t=this.aG.by(new P.a1(a.clientX,a.clientY,[u]))
s=new U.A(0,0,[u])
r=this.W(t.a,t.b)
r.F(t,s)
u=s.a
q=s.b;(a&&C.I).geh(a)
C.I.gei(a)
r.l(0,new R.N(u,q,"mouseWheel",!0))},
dK:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
H.k(b4,"$iap")
b4.preventDefault()
u=b4.type
for(t=b4.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=b3.ce,m=b3.cd,l=P.m,k=[l],j=b3.aG,l=[l],i=[A.I],h=0;h<t.length;t.length===s||(0,H.fF)(t),++h){g=t[h]
f=g.identifier
e=j.by(new P.a1(C.b.m(g.clientX),C.b.m(g.clientY),k))
d=new U.A(0,0,l)
c=b3.bI(e.a,e.b)
c=c!=null?c:b3
b=n.ct(f,new A.dN(b3,c))
a=b.a
b.b
C.a.V(m,new A.dO(a,e))
a0=b.d
if(a0!==c){a1=H.l([],i)
a2=H.l([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.a.j(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.a.j(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.a(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.a(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.F(e,d)
a0.l(0,new R.aq(d.a,d.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.F(e,d)
b0.l(0,new R.aq(d.a,d.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.a(a2,a9)
b0=a2[a9]
b0.F(e,d)
b0.l(0,new R.aq(d.a,d.b,"touchRollOver",!1))}c.F(e,d)
c.l(0,new R.aq(d.a,d.b,"touchOver",!0))
b.d=c}if(o){b3.n.focus()
n.q(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.aN(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.aN(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.F(e,d)
c.l(0,new R.aq(d.a,d.b,b1,!0))
if(b2)c.l(0,new R.aq(d.a,d.b,"touchTap",!0))}}},
dA:function(a){H.k(a,"$ian")
return},
sde:function(a){this.cc=H.u(a,"$iA",[P.m],"$aA")}}
A.dP.prototype={
$1:function(a){H.W(a)
return this.a.b7()},
$S:26}
A.dM.prototype={
$1:function(a){return H.k(a,"$iaD").eT(0,this.a)},
$S:11}
A.dN.prototype={
$0:function(){var u=this.b,t=this.a.ce.a,s=$.hh
$.hh=s+1
return new A.b5(s,t===0,u,u)},
$S:28}
A.dO.prototype={
$1:function(a){return H.k(a,"$iaD").eT(this.a,this.b)},
$S:11}
A.cn.prototype={
aL:function(a,b){var u,t,s=this
C.a.j(s.r2,b)
u=b.length
t=s.rx
s.rx=u>t?u:t;++s.ry},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.l(0,new R.L("Update",!1))
for(u=i.k4,t=a.c,s=i.r1,r=i.r2,q=0;q<i.ry;++q)for(p=q*14,o=0;o<i.rx;++o){if(q>=r.length)return H.a(r,q)
n=r[q]
m=o<n.length?C.c.ap(n,o)-32:0
if(m<0||m>=64)m=0
s.an(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.z()
j=new T.aR(new Float32Array(16))
j.a7()
k=l.f=new L.bA(C.f,n,j,l)}k.c.c5(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.a(u,m)
t.a5(a,u[m])
a.e=a.e.e}},
cW:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=H.k(b3,"$ia_").c,b2=b1.a
b2.sev(C.Z)
for(u=[P.y],t=this.k4,s=[P.m],r=b1.e,q=0*r,p=b1.d,o=b1.b,n=H.d(o,0),b1=b1.c,m=0;m<64;++m){l=m*7
k=H.u(new U.E(l,0,7,14,u),"$iE",s,"$aE")
j=C.b.m(l*r)
i=C.b.m(q)
k=H.d(k,0)
l=C.b.m(H.j(l+7,k)*r)-j
k=C.b.m(H.j(14,k)*r)-i
h=o.a
g=o.b
f=H.j(h+o.c,n)
e=H.j(g+o.d,n)
d=b1.a
c=b1.b
b=C.d.cE(p,4)
a=j+l
a0=i+k
if(p===0){a1=h+d
a2=a1+j
a3=g+c
a4=a3+i
a5=a1+a
a6=a3+a0}else if(p===1){a1=f-c
a2=a1-a0
a3=g+d
a4=a3+j
a5=a1-i
a6=a3+a}else if(p===2){a1=f-d
a2=a1-a
a3=e-c
a4=a3-a0
a5=a1-j
a6=a3-i}else if(p===3){a1=h+c
a2=a1+i
a3=e-d
a4=a3-a
a5=a1+a0
a6=a3-j}else{a2=0
a4=0
a5=0
a6=0}a7=V.f_(a2,h,f)
a8=V.f_(a4,g,e)
a=V.f_(a5,h,f)
a0=V.f_(a6,g,e)
if(b===0){a9=a2-a7
b0=a4-a8}else if(b===1){a9=a4-a8
b0=a-a5}else if(b===2){a9=a-a5
b0=a6-a0}else if(b===3){a9=a0-a6
b0=a7-a2}else{a9=0
b0=0}C.a.j(t,L.fn(b2,new U.E(a7,a8,a-a7,a0-a8,u),new U.E(a9,b0,l,k,u),b,r))}}}
A.dL.prototype={}
A.b4.prototype={}
A.b5.prototype={}
A.aD.prototype={}
L.cP.prototype={}
L.aU.prototype={}
L.aV.prototype={
ad:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.ci.prototype={
h:function(a){return this.b}}
L.ay.prototype={}
L.dz.prototype={}
L.cg.prototype={
gcv:function(){return C.x},
ak:function(a){var u,t=this
t.bE(0,t.f)
t.r=C.f
u=t.e
u.globalCompositeOperation="source-over"
u.globalAlpha=t.x=1},
ba:function(a,b){var u,t,s,r=this
r.bE(0,r.f)
r.r=C.f
u=r.e
u.globalCompositeOperation="source-over"
u.globalAlpha=r.x=1
t=b>>>24&255
if(t<255){s=r.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.fz(b)
s=r.d
u.fillRect(0,0,s.width,s.height)}},
G:function(a){},
a5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
H.k(a,"$iaX")
H.k(b,"$iaz")
u=g.e
t=b.a.c
s=b.d
r=b.b
q=b.r
p=a.e
o=p.c
n=p.a
m=p.b
if(g.x!==n)u.globalAlpha=g.x=n
if(g.r!==m){g.r=m
u.globalCompositeOperation="source-over"}if(s===0){p=o.a
u.setTransform(p[0],p[1],p[2],p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[0]
h=q[1]
u.drawImage(t,p,l,k,j,i,h,q[8]-i,q[9]-h)}else if(s===1){p=o.a
u.setTransform(-p[2],-p[3],p[0],p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,0-q[13],q[12],q[9]-q[1],q[8]-q[0])}else if(s===2){p=o.a
u.setTransform(-p[0],-p[1],-p[2],-p[3],p[4],p[5])
p=r.a
l=r.b
k=r.c
j=r.d
i=q[8]
h=q[9]
u.drawImage(t,p,l,k,j,0-i,0-h,i-q[0],h-q[1])}else if(s===3){p=o.a
u.setTransform(p[2],p[3],-p[0],-p[1],p[4],p[5])
u.drawImage(t,r.a,r.b,r.c,r.d,q[5],0-q[4],q[9]-q[1],q[8]-q[0])}},
bE:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.ch.prototype={
gcv:function(){return C.l},
ak:function(a){var u=this,t=u.d,s=t.width,r=t.height
u.y=null
u.e.bindFramebuffer(36160,null)
u.e.viewport(0,0,s,r)
t=u.f
t.a7()
if(typeof s!=="number")return H.U(s)
if(typeof r!=="number")return H.U(r)
t.cF(0,2/s,-2/r,1)
t.eP(0,-1,1,0)
u.x.scs(t)},
ba:function(a,b){var u,t=this
C.a.sk(t.d9(),0)
t.e2(null)
t.e3(0)
u=(b>>>24&255)/255
t.e.colorMask(!0,!0,!0,!0)
t.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
t.e.clear(17408)},
G:function(a){this.x.G(0)},
a5:function(a,b){var u,t=this
H.k(a,"$iaX")
H.k(b,"$iaz")
u=t.cy
t.e6(u)
t.e5(a.e.b)
t.aw(b.a)
u.a5(a,b)},
e6:function(a){var u=this,t=u.x
if(a!==t){t.G(0)
u.x=a
a.a9(u)
u.x.scs(u.f)}},
e5:function(a){var u=this
if(a!==u.Q){u.x.G(0)
u.Q=a
u.e.blendFunc(1,771)}},
aw:function(a){var u,t,s,r=this,q=3553,p=6408,o=r.fx
if(a!==o[0]){r.x.G(0)
C.a.q(o,0,a)
o=a.y
u=r.cx
if(o!==u){a.x=r
a.y=u
o=r.e
a.Q=o
a.ch=o.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)
o=H.bO(a.Q.isEnabled(3089))
if(o)a.Q.disable(3089)
u=a.c
t=a.Q
s=t&&C.h
if(u!=null){s.aO(t,q,0,p,p,5121,u)
a.z=a.Q.getError()===1281}else s.bv(t,q,0,p,a.a,a.b,0,p,5121,null)
if(a.z){u=a.a
u=W.bV(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.h).aO(u,q,0,p,p,5121,a.d)}if(o)a.Q.enable(3089)
a.Q.texParameteri(q,10242,33071)
a.Q.texParameteri(q,10243,33071)
a.Q.texParameteri(q,10241,a.e.a)
a.Q.texParameteri(q,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)}}},
d9:function(){var u=this.y
return u instanceof L.cj?u.r:this.r},
e3:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
e2:function(a){this.e.disable(3089)},
di:function(a){H.k(a,"$ia8").preventDefault()
this.b.j(0,new L.ay())},
dk:function(a){H.k(a,"$ia8")
this.cx=$.dA=$.dA+1
this.c.j(0,new L.ay())}}
L.dB.prototype={}
L.cj.prototype={}
L.eV.prototype={
$1:function(a){var u,t,s,r,q
H.fb(a)
if(typeof a!=="number")return a.bA()
u=a/1000
t=u-$.hl
$.hl=u
$.fs=-1
L.hk()
s=$.fM()
s=H.l(s.slice(0),[H.d(s,0)])
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.fF)(s),++q)s[q].$1(t)},
$S:31}
L.ck.prototype={
dq:function(a){var u
H.fb(a)
if(this.a){if(typeof a!=="number")return a.eV()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.ax(a)}}
L.eF.prototype={}
L.bs.prototype={
scs:function(a){var u=this.e.p(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
a9:function(a){var u,t,s=this,r=s.a,q=a.cx
if(r!==q){s.a=q
r=s.b=a.e
u=s.x=a.a
t=s.f=a.dy
s.r=a.fr
if(t.e!==q){t.e=q
t.x=u
t.r=r
r=r.createBuffer()
t.f=r
t.r.bindBuffer(34963,r)
t.r.bufferData(34963,t.a,35048)}t.r.bindBuffer(34963,t.f)
r=s.r
q=r.e
t=a.cx
if(q!==t){r.e=t
r.x=u
q=a.e
r.r=q
q=q.createBuffer()
r.f=q
r.r.bindBuffer(34962,q)
r.r.bufferData(34962,r.a,35048)}r.r.bindBuffer(34962,r.f)
r=s.d1(s.b)
s.c=r
s.e1(s.b,r)
s.e4(s.b,s.c)}s.b.useProgram(s.c)},
G:function(a){var u,t,s,r=this,q=r.f,p=q.c
if(p>0&&r.r.c>0){u=q.a.buffer
u.toString
H.hj(u,0,p)
t=new Int16Array(u,0,p)
q.r.bufferSubData(34963,0,t)
u=q.x
u.c=u.c+q.d
q=r.f
q.d=q.c=0
q=r.r
u=q.a.buffer
s=q.c
u.toString
H.hj(u,0,s)
t=new Float32Array(u,0,s)
q.r.bufferSubData(34962,0,t)
u=q.x
u.b=u.b+q.d
q=r.r
q.d=q.c=0
r.b.drawElements(4,p,5123,0);++r.x.a}},
d1:function(a){var u=this,t=a.createProgram(),s=u.bR(a,u.gbz(),35633),r=u.bR(a,u.gbo(),35632)
a.attachShader(t,s)
a.attachShader(t,r)
a.linkProgram(t)
if(a.getProgramParameter(t,35714)===!0)return t
throw H.h(P.aZ(H.bO(a.isContextLost())?"ContextLost":a.getProgramInfoLog(t)))},
bR:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.h(P.aZ(H.bO(a.isContextLost())?"ContextLost":a.getShaderInfoLog(u)))},
e1:function(a,b){var u,t,s,r,q=this.d
q.c3(0)
u=H.V(a.getProgramParameter(b,35721))
if(typeof u!=="number")return H.U(u)
t=0
for(;t<u;++t){s=a.getActiveAttrib(b,t)
r=a.getAttribLocation(b,s.name)
a.enableVertexAttribArray(r)
q.q(0,s.name,r)}},
e4:function(a,b){var u,t,s,r,q=this.e
q.c3(0)
u=H.V(a.getProgramParameter(b,35718))
if(typeof u!=="number")return H.U(u)
t=0
for(;t<u;++t){s=a.getActiveUniform(b,t)
r=a.getUniformLocation(b,s.name)
q.q(0,s.name,r)}}}
L.dF.prototype={
gbz:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbo:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
a9:function(a){var u,t=this
t.bJ(a)
u=t.b;(u&&C.h).eR(u,t.e.p(0,"uSampler"),0)
u=t.d
t.r.ad(u.p(0,"aVertexPosition"),2,20,0)
t.r.ad(u.p(0,"aVertexTextCoord"),2,20,8)
t.r.ad(u.p(0,"aVertexAlpha"),1,20,16)},
a5:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
H.k(a3,"$iaX")
H.k(a4,"$iaz")
a4.z
u=a3.e
t=u.a
s=u.c
r=a4.r
u=a2.f
q=u.a
p=q.length
if(u.c+6>=p)a2.G(0)
u=a2.r
o=u.a
n=o.length
if(u.c+20>=n)a2.G(0)
u=a2.f
m=u.c
l=a2.r
k=l.c
j=l.d
if(m>=p)return H.a(q,m)
q[m]=j
i=m+1
if(i>=p)return H.a(q,i)
q[i]=j+1
i=m+2
h=j+2
if(i>=p)return H.a(q,i)
q[i]=h
i=m+3
if(i>=p)return H.a(q,i)
q[i]=j
i=m+4
if(i>=p)return H.a(q,i)
q[i]=h
h=m+5
if(h>=p)return H.a(q,h)
q[h]=j+3
u.c=m+6
u.d+=6
u=r[0]
h=s.a
p=h[0]
i=h[4]
g=u*p+i
f=r[8]
e=f*p+i
i=h[1]
p=h[5]
d=u*i+p
c=f*i+p
p=r[1]
i=h[2]
b=p*i
f=r[9]
a=f*i
h=h[3]
a0=p*h
a1=f*h
if(k>=n)return H.a(o,k)
o[k]=g+b
h=k+1
if(h>=n)return H.a(o,h)
o[h]=d+a0
h=k+2
f=r[2]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+3
h=r[3]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+4
if(h>=n)return H.a(o,h)
o[h]=t
h=k+5
if(h>=n)return H.a(o,h)
o[h]=e+b
h=k+6
if(h>=n)return H.a(o,h)
o[h]=c+a0
h=k+7
f=r[6]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+8
h=r[7]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+9
if(h>=n)return H.a(o,h)
o[h]=t
h=k+10
if(h>=n)return H.a(o,h)
o[h]=e+a
h=k+11
if(h>=n)return H.a(o,h)
o[h]=c+a1
h=k+12
f=r[10]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+13
h=r[11]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+14
if(h>=n)return H.a(o,h)
o[h]=t
h=k+15
if(h>=n)return H.a(o,h)
o[h]=g+a
h=k+16
if(h>=n)return H.a(o,h)
o[h]=d+a1
h=k+17
f=r[14]
if(h>=n)return H.a(o,h)
o[h]=f
f=k+18
h=r[15]
if(f>=n)return H.a(o,f)
o[f]=h
h=k+19
if(h>=n)return H.a(o,h)
o[h]=t
l.c=k+20
l.d=j+4}}
L.dG.prototype={
gbz:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbo:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.dH.prototype={
gbz:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbo:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
a9:function(a){var u,t=this
t.bJ(a)
u=t.d
t.r.ad(u.p(0,"aVertexPosition"),2,24,0)
t.r.ad(u.p(0,"aVertexColor"),4,24,8)}}
L.bA.prototype={
geK:function(){var u,t=this.f
if(t==null){t=T.z()
u=new T.aR(new Float32Array(16))
u.a7()
u=this.f=new L.bA(C.f,t,u,this)
t=u}return t}}
L.aX.prototype={
cw:function(a,b){var u,t=this.d
this.e=t
t=t.c
t.cp()
u=this.e
u.a=1
u.b=C.f
t.ef(b)},
bt:function(a){var u,t=this,s=a.gH(),r=t.e,q=r.geK()
q.c.c5(s,r.c)
u=r.b
q.b=u
q.a=r.a
t.e=q
a.aj(t)
t.e=r}}
L.ao.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.bt.prototype={
gaM:function(){var u=this.a,t=this.b,s=[P.y]
return L.fn(this,new U.E(0,0,u,t,s),new U.E(0,0,u,t,s),0,1)},
gea:function(a){var u=this,t=u.c,s=J.r(t)
if(!!s.$iah)return t
else if(!!s.$ia0){s=u.a
s=W.bV(u.b,s)
u.d=u.c=s
s.getContext("2d").drawImage(t,0,0,u.a,u.b)
return u.d}else throw H.h(P.aZ("RenderTexture is read only."))},
sev:function(a){var u,t=this
if(t.e===a)return
t.e=a
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.aw(t)
t.Q.texParameteri(3553,10241,t.e.a)
t.Q.texParameteri(3553,10240,t.e.a)},
eL:function(a,b,c){var u,t=this
if(!(t.a===b&&t.b===c))if(t.c==null){t.a=b
t.b=c
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.aw(t)
u=t.Q;(u&&C.h).bv(u,3553,0,6408,t.a,t.b,0,6408,5121,null)}else{t.a=b
t.b=c
t.d=t.c=W.bV(c,b)}},
eS:function(){var u,t=this,s=6408,r=t.x
if(r==null||t.ch==null)return
if(r.cx!==t.y)return
r.x.G(0)
t.x.aw(t)
r=H.bO(t.Q.isEnabled(3089))
if(r)t.Q.disable(3089)
if(t.z){t.d.getContext("2d").drawImage(t.c,0,0)
u=t.Q;(u&&C.h).aO(u,3553,0,s,s,5121,t.d)}else{u=t.Q;(u&&C.h).aO(u,3553,0,s,s,5121,t.c)}if(r)t.Q.enable(3089)}}
L.cl.prototype={}
L.az.prototype={
aP:function(a){var u=this
return L.fn(u.a,u.b,u.c,u.d,a)},
gej:function(){var u,t,s,r=this,q=r.e,p=r.d
if(p===0){p=r.b
u=r.c
return T.dn(q,0,0,q,p.a+u.a,p.b+u.b)}else if(p===1){p=r.b
u=r.c
return T.dn(0,q,0-q,0,H.j(p.a+p.c,H.d(p,0))-u.b,p.b+u.a)}else if(p===2){p=r.b
u=H.d(p,0)
t=r.c
s=0-q
return T.dn(s,0,0,s,H.j(p.a+p.c,u)-t.a,H.j(p.b+p.d,u)-t.b)}else if(p===3){p=r.b
u=r.c
return T.dn(0,0-q,q,0,p.a+u.b,H.j(p.b+p.d,H.d(p,0))-u.a)}else throw H.h(P.fg())}}
L.dI.prototype={}
T.dj.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.cR.prototype={
gc2:function(){return!1}}
R.aK.prototype={}
R.aM.prototype={}
R.aW.prototype={}
R.L.prototype={
gc2:function(){return!0}}
R.c_.prototype={
bq:function(a,b,c){var u,t,s,r
H.iT(c,R.L,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=new H.M([P.t,[R.av,R.L]])
this.sd6(u)}t=[c]
s=H.u(u.p(0,b),"$iav",t,"$aav")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.av(this,H.l(r,[[R.D,c]]),t)
u.q(0,b,s)}return s},
bp:function(a,b){var u,t,s=this.a
if(s==null)return!1
u=s.p(0,a)
if(u==null)return!1
t=u.d
return b?t>0:u.c.length>t},
eA:function(a){return this.bp(a,!1)},
be:function(a,b,c){var u,t
a.r=a.f=!1
u=this.a
if(u==null)return
t=u.p(0,a.a)
if(t==null)return
t.d4(a,b,c)},
sd6:function(a){this.a=H.u(a,"$ih4",[P.t,[R.av,R.L]],"$ah4")}}
R.bi.prototype={
h:function(a){return this.b}}
R.av.prototype={
aI:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.e(c,{func:1,ret:-1})
return this.au(a,!1,0)},
au:function(a,b,c){var u,t,s,r,q,p,o=this,n=H.d(o,0),m=new R.D(c,!1,o,H.e(a,{func:1,ret:-1,args:[n]}),o.$ti),l=o.c,k=l.length,j=new Array(k+1)
j.fixed$length=Array
u=H.l(j,[[R.D,n]])
t=u.length-1
for(s=0,r=0;s<k;++s,r=p){q=l[s]
if(s===r&&q.a<c){p=r+1
t=r
r=p}p=r+1
C.a.q(u,r,q)}C.a.q(u,t,m)
o.sdX(u)
n=[R.aK]
if(H.ae(m,"$iD",n,null)){k=$.fK();(k&&C.a).j(k,H.fE(m,"$iD",n,"$aD"))}else{n=[R.aM]
if(H.ae(m,"$iD",n,null)){k=$.fL();(k&&C.a).j(k,H.fE(m,"$iD",n,"$aD"))}else{n=[R.aW]
if(H.ae(m,"$iD",n,null)){k=$.fN();(k&&C.a).j(k,H.fE(m,"$iD",n,"$aD"))}}}return m},
d4:function(a,b,c){var u,t,s,r,q,p,o=H.d(this,0)
H.j(a,o)
u=this.c
t=c===C.t
for(s=u.length,o={func:1,ret:-1,args:[o]},r=0;r<s;++r){q=u[r]
if(!q.c){q.d
p=t}else p=!0
if(p)continue
H.e(q.f,o).$1(a)}},
sdX:function(a){this.c=H.u(a,"$iK",[[R.D,H.d(this,0)]],"$aK")}}
R.D.prototype={}
R.bl.prototype={
h:function(a){return this.b}}
R.dc.prototype={}
R.aP.prototype={}
R.N.prototype={}
R.b_.prototype={}
R.aq.prototype={}
T.c8.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.b(u[0])+", b="+H.b(u[1])+", c="+H.b(u[2])+", d="+H.b(u[3])+", tx="+H.b(u[4])+", ty="+H.b(u[5])+"]"},
gbd:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
by:function(a){var u,t,s,r,q,p,o,n=P.m
H.u(a,"$ia1",[n],"$aa1")
u=a.a
u.toString
t=a.b
t.toString
s=this.a
r=s[0]
if(typeof u!=="number")return u.aQ()
q=s[2]
if(typeof t!=="number")return t.aQ()
p=u*r+t*q+s[4]
o=u*s[1]+t*s[3]+s[5]
if(!!C.v.$iA){null.eW(p,o)
return}else return new U.A(p,o,[n])},
a6:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=P.m
H.u(a7,"$iaT",[a6],"$aaT")
a6=[a6]
H.u(a8,"$iE",a6,"$aE")
u=a7.a
t=H.d(a7,0)
s=H.j(u+a7.c,t)
r=a7.b
q=H.j(r+a7.d,t)
t=this.a
p=t[0]
o=u*p
n=t[2]
m=r*n
l=o+m
k=t[1]
j=u*k
i=t[3]
h=r*i
g=j+h
p=s*p
f=p+m
k=s*k
e=k+h
n=q*n
d=p+n
i=q*i
c=k+i
b=o+n
a=j+i
a0=l>f?f:l
if(a0>d)a0=d
if(a0>b)a0=b
a1=g>e?e:g
if(a1>c)a1=c
if(a1>a)a1=a
a2=l<f?f:l
if(a2<d)a2=d
if(a2<b)a2=b
a3=g<e?e:g
if(a3<c)a3=c
if(a3<a)a3=a
a4=a2-a0
a5=a3-a1
if(!!a8.$iE){a6=t[4]
t=t[5]
p=H.d(a8,0)
a6=H.j(a6+a0,p)
t=H.j(t+a1,p)
H.j(a4,p)
H.j(a5,p)
a8.sX(0,a6)
a8.sY(0,t)
a8.sS(0,a4)
a8.sP(0,a5)
return a8}else return new U.E(t[4]+a0,t[5]+a1,a4,a5,a6)},
cp:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aR:function(a,b,c){var u=this.a,t=u[0]
if(typeof b!=="number")return H.U(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.U(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
an:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
ef:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
c5:function(a,b){var u,t,s,r,q,p,o=a.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5]
o=b.a
u=o[0]
t=o[1]
s=o[2]
r=o[3]
q=o[4]
p=o[5]
o=this.a
o[0]=n*u+m*s
o[1]=n*t+m*r
o[2]=l*u+k*s
o[3]=l*t+k*r
o[4]=j*u+i*s+q
o[5]=j*t+i*r+p}}
T.aR.prototype={
a7:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1},
cF:function(a,b,c,d){var u=this.a
u[0]=u[0]*b
u[1]=u[1]*b
u[2]=u[2]*b
u[3]=u[3]*b
u[4]=u[4]*c
u[5]=u[5]*c
u[6]=u[6]*c
u[7]=u[7]*c
u[8]=u[8]*d
u[9]=u[9]*d
u[10]=u[10]*d
u[11]=u[11]*d},
eP:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.A.prototype={
h:function(a){return"Point<"+new H.bx(H.d(this,0)).h(0)+"> [x="+H.b(this.a)+", y="+H.b(this.b)+"]"},
v:function(a,b){if(b==null)return!1
return!!J.r(b).$ia1&&this.a===b.gE(b)&&this.b===b.gZ(b)},
gi:function(a){var u=C.b.gi(this.a),t=C.b.gi(this.b)
return O.h0(O.bn(O.bn(0,u),t))},
sE:function(a,b){this.a=H.j(b,H.d(this,0))},
sZ:function(a,b){this.b=H.j(b,H.d(this,0))},
$ia1:1,
gE:function(a){return this.a},
gZ:function(a){return this.b}}
U.E.prototype={
h:function(a){var u=this
return"Rectangle<"+new H.bx(H.d(u,0)).h(0)+"> [left="+H.b(u.a)+", top="+H.b(u.b)+", width="+H.b(u.c)+", height="+H.b(u.d)+"]"},
v:function(a,b){var u,t=this
if(b==null)return!1
u=J.r(b)
return!!u.$iaT&&t.a===u.gX(b)&&t.b===u.gY(b)&&t.c===u.gS(b)&&t.d===u.gP(b)},
gi:function(a){var u=this,t=C.b.gi(u.a),s=C.b.gi(u.b),r=C.b.gi(u.c),q=C.b.gi(u.d)
return O.h0(O.bn(O.bn(O.bn(O.bn(0,t),s),r),q))},
sX:function(a,b){this.a=H.j(b,H.d(this,0))},
sY:function(a,b){this.b=H.j(b,H.d(this,0))},
sS:function(a,b){this.c=H.j(b,H.d(this,0))},
sP:function(a,b){this.d=H.j(b,H.d(this,0))},
$iaT:1,
gX:function(a){return this.a},
gY:function(a){return this.b},
gS:function(a){return this.c},
gP:function(a){return this.d}}
N.c0.prototype={
du:function(a){var u=this
u.d.az()
u.e.az()
u.b.bb(0,u.a)},
ds:function(a){var u=this
u.d.az()
u.e.az()
u.b.ec(new T.dj("Failed to load "+H.b(u.a.src)+"."))}}
Y.eU.prototype={
$0:function(){return Y.iE(this.a)},
$S:34}
Y.b2.prototype={
cO:function(a){var u,t,s=this,r=a.gaq(),q=H.k(W.fq("span",null),"$iaj"),p=H.k(W.fq("div",null),"$iaj"),o=H.k(W.fq("div",null),"$iaj"),n=q.style
n.font=r
q.textContent="Hg"
n=p.style
n.display="inline-block"
n=p.style
n.width="1px"
n=p.style
n.height="0px"
J.fP(o,p)
J.fP(o,q)
n=document.body;(n&&C.K).c1(n,o)
try{n=p.style
n.verticalAlign="baseline"
n=C.b.m(p.offsetTop)-C.b.m(q.offsetTop)
s.a=n
u=p.style
u.verticalAlign="bottom"
u=C.b.m(p.offsetTop)-C.b.m(q.offsetTop)
s.c=u
s.b=u-n}catch(t){H.a4(t)
n=s.c=a.b
s.a=C.d.T(n*7,8)
s.b=C.d.T(n*2,8)}finally{n=o
u=n.parentNode
if(u!=null)J.i_(u,n)}}}
Y.co.prototype={
sam:function(a,b){this.B=b
this.cg=b.length
this.D|=3},
saa:function(a){this.cf=a
this.D|=3},
sab:function(a,b){this.ci=!0
this.D|=2},
sac:function(a,b){this.cj=b
this.D|=2},
gH:function(){this.a2()
return A.I.prototype.gH.call(this)},
gI:function(){var u,t=this
t.a2()
u=t.K
t.a2()
return new U.E(0,0,u,t.C,[P.m])},
W:function(a,b){var u,t=this
if(!(a<0)){t.a2()
u=a>=t.K}else u=!0
if(u)return
if(!(b<0)){t.a2()
u=b>=t.C}else u=!0
if(u)return
return t},
aj:function(a){var u=this
u.a2()
u.dM(a.e.c)
a.c.a5(a,u.aE)
u.bj=u.bj+a.b},
a2:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.D
if((b4&1)===0)return
else b3.D=b4&254
b4=b3.aD
C.a.sk(b4,0)
u=b3.bi
t=V.Z(u.b)
s=V.Z(u.d)
r=V.Z(u.db)
q=V.Z(u.dx)
p=V.Z(u.cx)
o=V.Z(u.cy)
n=V.Z(u.dy)
m=V.Z(u.fr)
l=V.hx(u.Q)
k=V.hx(u.ch)
j=u.gaq()
i=Y.iJ(u)
h=V.Z(i.a)
g=V.Z(i.b)
f=$.fJ()
e=H.l([],[P.y])
d=P.h8("\\r\\n|\\r|\\n")
c=C.c.cH(b3.B,d)
f.font=j+" "
f.textAlign="start"
f.textBaseline="alphabetic"
f.setTransform(1,0,0,1,0,0)
for(b=0,a=0;a<c.length;++a){a0=c[a]
if(typeof a0!=="string")continue
C.a.j(e,b4.length)
a0=b3.dL(a0)
C.a.j(b4,new Y.cq(a0,b))
b+=a0.length+1}b3.a4=b3.af=0
for(a1=p+t,a2=m+t+g,a3=0;a3<b4.length;++a3){a4=b4[a3]
a5=r+(C.a.ed(e,a3)?n:0)
a6=a1+a3*a2
a7=f.measureText(a4.a).width
a7.toString
a4.c=a5
a4.d=a6
a4.e=a7
a4.r=h
a4.x=g
a8=b3.af
if(typeof a7!=="number")return H.U(a7)
b3.af=Math.max(a8,a5+a7+q)
b3.a4=a6+g+o}a1=s*2
a2=b3.af+a1
b3.af=a2
b3.a4+=a1
a9=C.b.ae(a2)
b0=C.b.ae(b3.a4)
a1=b3.K
if(a1!==a9||b3.C!==b0)switch(b3.cf){case"left":b3.K=a9
b3.C=b0
a1=a9
break
case"right":b3.bH(0,A.I.prototype.gE.call(b3,b3)-(a9-a1))
b3.K=a9
b3.C=b0
a1=a9
break
case"center":b3.bH(0,A.I.prototype.gE.call(b3,b3)-(a9-a1)/2)
b3.K=a9
b3.C=b0
a1=a9
break}b1=a1-r-q
switch(k){case"center":b2=(b3.C-b3.a4)/2
break
case"bottom":b2=b3.C-b3.a4-s
break
default:b2=s}for(a3=0;a3<b4.length;++a3){a4=b4[a3]
switch(l){case"center":case"justify":a4.c=a4.c+(b1-a4.e)/2
break
case"right":case"end":a4.c=a4.c+(b1-a4.e)
break
default:a4.c+=s}a4.d+=b2}},
dM:function(a){var u,t,s,r,q=this,p=Math.sqrt(Math.abs(a.gbd())),o=q.aE,n=o==null?null:o.e
if(n==null)n=0
if(n<p*0.8)q.D|=2
if(n>p*1.25)q.D|=2
o=q.D
if((o&2)===0)return
q.D=o&253
u=C.b.ae(Math.max(1,q.K*p))
t=C.b.ae(Math.max(1,q.C*p))
o=q.ag
if(o==null){o=L.h9(u,t,16777215)
q.ag=o
o=q.aE=o.gaM().aP(p)}else{o.eL(0,u,t)
o=q.aE=q.ag.gaM().aP(p)}s=o.gej()
o=q.ag
r=o.gea(o).getContext("2d")
o=s.a
r.setTransform(o[0],o[1],o[2],o[3],o[4],o[5])
r.clearRect(0,0,q.K,q.C)
q.dQ(r)
q.ag.eS()},
dQ:function(a){var u,t,s=this,r=s.bi,q=r.b,p=C.X.ae(q/20)
a.save()
a.beginPath()
a.rect(0,0,s.K,s.C)
a.clip()
a.font=r.gaq()+" "
a.textAlign="start"
a.textBaseline="alphabetic"
a.lineJoin=a.lineCap="round"
if(s.ci){a.fillStyle=V.fz(s.cj)
a.fillRect(0,0,s.K,s.C)}q=r.d
if(q>0){a.lineWidth=q*2
a.strokeStyle=V.fy(r.e)
for(q=s.aD,u=0;u<q.length;++u){t=q[u]
a.strokeText(t.a,t.c,t.d)}}a.lineWidth=p
q=r.c
a.strokeStyle=V.fy(q)
q=V.fy(q)
a.fillStyle=q
for(q=s.aD,u=0;u<q.length;++u){t=q[u]
a.fillText(t.a,t.c,t.d)}a.restore()},
dL:function(a){return a},
dw:function(a){H.k(a,"$iaP")},
dI:function(a){H.k(a,"$ib_")},
dC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
H.k(a,"$iN")
u=a.x
t=a.y
s=$.fJ()
s.setTransform(1,0,0,1,0,0)
for(r=e.aD,q=0;q<r.length;++q){p=r[q]
o=p.a
n=p.c
m=p.d
l=p.r
k=p.x
if(m-l<=t&&m+k>=t){for(m=o.length,j=1/0,i=0,h=0;h<=m;++h){g=s.measureText(C.c.ao(o,0,h)).width
g.toString
if(typeof g!=="number")return H.U(g)
f=Math.abs(n+g-u)
if(f<j){i=h
j=f}}e.cg=p.b+i
e.bj=0
e.D|=3}}}}
Y.dX.prototype={
gaq:function(){var u=""+this.r+" "+this.b+"px "+this.a
return u}}
Y.cq.prototype={}
Q.dp.prototype={};(function aliases(){var u=J.w.prototype
u.cJ=u.h
u=J.c7.prototype
u.cK=u.h
u=A.I.prototype
u.bH=u.sE
u=A.bh.prototype
u.bI=u.W
u=L.bs.prototype
u.bJ=u.a9})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"iL","io",8)
t(P,"iV","iB",3)
t(P,"iW","iC",3)
t(P,"iX","iD",3)
u(P,"hw","iS",1)
s(P,"iY",1,null,["$2","$1"],["hn",function(a){return P.hn(a,null)}],7,0)
u(P,"hv","iN",1)
r(P.C.prototype,"gd_",0,1,null,["$2","$1"],["a1","d0"],7,0)
q(P.cx.prototype,"gdT","dU",1)
var o
p(o=A.G.prototype,"gdD","dE",22)
p(o,"gdF","dG",23)
p(o,"gdJ","dK",24)
p(o,"gdz","dA",38)
p(A.cn.prototype,"gcV","cW",29)
p(o=L.ch.prototype,"gdh","di",12)
p(o,"gdj","dk",12)
p(L.ck.prototype,"gdn","dq",32)
p(o=N.c0.prototype,"gdt","du",4)
p(o,"gdr","ds",4)
p(o=Y.co.prototype,"gdv","dw",35)
p(o,"gdH","dI",36)
p(o,"gdB","dC",37)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.fl,J.w,J.cJ,H.di,H.aN,H.bf,H.dZ,P.ak,H.bj,H.cA,H.bx,P.dm,H.dh,H.c5,H.cz,P.J,H.e5,H.dV,H.eO,P.eP,P.e8,P.dS,P.eh,P.eg,P.ei,P.a3,P.C,P.ct,P.aa,P.el,P.bF,P.cx,P.eM,P.H,P.eR,P.a9,P.as,P.m,P.aJ,P.dt,P.cm,P.ep,P.d9,P.K,P.p,P.aQ,P.cf,P.B,P.dR,P.t,P.bw,W.d1,W.bk,W.d7,P.eD,P.a1,Y.cU,R.c_,K.e6,K.dg,A.a_,A.cL,A.cN,L.dB,L.ck,A.bu,A.aY,A.Y,A.dL,A.b4,A.b5,A.aD,L.cP,L.aU,L.aV,L.ci,L.ay,L.dz,L.cj,L.eF,L.bs,L.bA,L.aX,L.ao,L.bt,L.cl,L.az,L.dI,R.L,R.bi,R.bl,T.c8,T.aR,U.A,U.E,N.c0,Y.b2,Y.dX,Y.cq,Q.dp])
s(J.w,[J.de,J.c4,J.c7,J.aw,J.bm,J.aO,H.cc,W.aL,W.bW,W.cv,W.d3,W.bY,W.c,W.ab,W.cB,P.bU,P.cd,P.aA,P.cr,P.by])
s(J.c7,[J.du,J.b0,J.ax])
t(J.fk,J.aw)
s(J.bm,[J.c3,J.c2])
s(H.bf,[H.dv,H.fc,H.dW,H.f3,H.f4,H.f5,P.ec,P.eb,P.ed,P.ee,P.eQ,P.eS,P.eT,P.eY,P.da,P.eq,P.ey,P.eu,P.ev,P.ew,P.es,P.ex,P.er,P.eB,P.eC,P.eA,P.ez,P.dT,P.dU,P.eG,P.eX,P.eJ,P.eI,P.eK,P.dl,P.d4,P.d5,W.eo,P.f0,Y.cV,Y.cW,Y.cX,Y.cY,Y.cZ,Y.d_,Y.d0,A.cO,A.cM,A.dD,A.dE,A.dP,A.dM,A.dN,A.dO,L.eV,Y.eU])
s(P.ak,[H.ds,H.df,H.e1,H.cs,H.cS,H.dJ,P.cK,P.bp,P.a5,P.e2,P.e0,P.bv,P.cT,P.d2,T.dj])
s(H.dW,[H.dQ,H.bd])
t(H.e7,P.cK)
t(P.dk,P.dm)
t(H.M,P.dk)
s(P.J,[P.dd,H.eN])
t(H.e4,P.dd)
t(H.c9,H.cc)
s(H.c9,[H.bB,H.bD])
t(H.bC,H.bB)
t(H.ca,H.bC)
t(H.bE,H.bD)
t(H.cb,H.bE)
t(H.dq,H.ca)
t(H.dr,H.cb)
s(P.dS,[P.eL,W.em,R.av])
t(P.cu,P.eL)
t(P.ef,P.cu)
t(P.ej,P.eh)
t(P.O,P.ej)
t(P.e9,P.eg)
t(P.ea,P.ei)
t(P.ek,P.el)
t(P.bG,P.bF)
t(P.eH,P.eR)
s(P.m,[P.af,P.y])
s(P.a5,[P.br,P.db])
s(W.aL,[W.S,W.bz])
s(W.S,[W.aj,W.au])
s(W.aj,[W.i,P.f])
s(W.i,[W.cH,W.cI,W.bT,W.ah,W.d8,W.a0,W.am,W.bo,W.dK])
t(W.bg,W.cv)
s(W.c,[W.aC,P.a8])
s(W.aC,[W.an,W.x,W.ap])
t(W.cC,W.cB)
t(W.dY,W.cC)
t(W.e3,W.bo)
t(W.ad,W.x)
t(W.cw,W.bY)
t(W.cy,W.em)
s(P.aa,[W.en,R.D])
t(A.I,R.c_)
s(A.I,[A.c1,A.X,A.cn])
s(A.c1,[A.bh,Y.co])
s(A.bh,[Z.d6,A.G])
t(A.a6,L.dB)
t(A.dC,L.ck)
s(L.dz,[L.cg,L.ch])
s(L.bs,[L.dF,L.dG,L.dH])
s(R.L,[R.cR,R.dc,R.aP,R.b_])
s(R.cR,[R.aK,R.aM,R.aW])
s(R.dc,[R.N,R.aq])
u(H.bB,P.a9)
u(H.bC,H.aN)
u(H.bD,P.a9)
u(H.bE,H.aN)
u(W.cv,W.d1)
u(W.cB,P.a9)
u(W.cC,W.bk)})()
var v={mangledGlobalNames:{y:"int",af:"double",m:"num",t:"String",as:"bool",p:"Null",K:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.p},{func:1,ret:-1},{func:1,ret:P.p,args:[W.x]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.c]},{func:1,args:[,]},{func:1,ret:P.p,args:[,]},{func:1,ret:-1,args:[P.n],opt:[P.B]},{func:1,ret:P.y},{func:1,ret:P.p,args:[,,]},{func:1,ret:P.t,args:[P.y]},{func:1,ret:-1,args:[A.aD]},{func:1,ret:-1,args:[P.a8]},{func:1,ret:[P.C,,],args:[,]},{func:1,args:[,P.t]},{func:1,ret:-1,args:[,]},{func:1,args:[W.c]},{func:1,ret:P.p,args:[,P.B]},{func:1,ret:A.a_,args:[W.a0]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.as,args:[A.G]},{func:1,ret:-1,args:[A.G]},{func:1,ret:-1,args:[W.x]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.p,args:[P.y,,]},{func:1,ret:-1,args:[P.t]},{func:1,ret:P.p,args:[{func:1,ret:-1}]},{func:1,ret:A.b5},{func:1,ret:-1,args:[A.a_]},{func:1,ret:P.p,args:[,],opt:[P.B]},{func:1,ret:P.p,args:[P.m]},{func:1,ret:-1,args:[P.m]},{func:1,args:[P.t]},{func:1,ret:Y.b2},{func:1,ret:-1,args:[R.aP]},{func:1,ret:-1,args:[R.b_]},{func:1,ret:-1,args:[R.N]},{func:1,ret:-1,args:[W.an]}],interceptorsByTag:null,leafTags:null};(function constants(){C.K=W.bT.prototype
C.j=W.ah.prototype
C.W=J.w.prototype
C.a=J.aw.prototype
C.X=J.c2.prototype
C.d=J.c3.prototype
C.v=J.c4.prototype
C.b=J.bm.prototype
C.c=J.aO.prototype
C.Y=J.ax.prototype
C.w=J.du.prototype
C.h=P.aA.prototype
C.o=J.b0.prototype
C.I=W.ad.prototype
C.J=W.bz.prototype
C.f=new L.cP()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.Q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.M=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.N=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.P=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.O=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.q=function(hooks) { return hooks; }

C.R=new P.dt()
C.a3=new L.dI()
C.r=new P.eD()
C.e=new P.eH()
C.S=new P.aJ(0)
C.t=new R.bi("EventPhase.CAPTURING_PHASE")
C.T=new R.bi("EventPhase.AT_TARGET")
C.U=new R.bi("EventPhase.BUBBLING_PHASE")
C.k=new R.bl("InputEventMode.MouseOnly")
C.V=new R.bl("InputEventMode.TouchOnly")
C.u=new R.bl("InputEventMode.MouseAndTouch")
C.l=new L.ci("RenderEngine.WebGL")
C.x=new L.ci("RenderEngine.Canvas2D")
C.Z=new L.cl(9728)
C.y=new L.cl(9729)
C.z=new A.Y("StageAlign.TOP_LEFT")
C.A=new A.Y("StageAlign.TOP")
C.B=new A.Y("StageAlign.TOP_RIGHT")
C.C=new A.Y("StageAlign.LEFT")
C.i=new A.Y("StageAlign.NONE")
C.D=new A.Y("StageAlign.RIGHT")
C.E=new A.Y("StageAlign.BOTTOM_LEFT")
C.F=new A.Y("StageAlign.BOTTOM")
C.G=new A.Y("StageAlign.BOTTOM_RIGHT")
C.m=new A.bu("StageRenderMode.AUTO")
C.H=new A.bu("StageRenderMode.ONCE")
C.a_=new A.bu("StageRenderMode.STOP")
C.a0=new A.aY("StageScaleMode.EXACT_FIT")
C.a1=new A.aY("StageScaleMode.NO_BORDER")
C.a2=new A.aY("StageScaleMode.NO_SCALE")
C.n=new A.aY("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.dw=null
$.dx=null
$.a7=0
$.be=null
$.fR=null
$.ft=!1
$.hC=null
$.ht=null
$.hF=null
$.f1=null
$.f8=null
$.fB=null
$.b6=null
$.bK=null
$.bL=null
$.fu=!1
$.o=C.e
$.Q=[]
$.fo=null
$.v=0
$.hh=1
$.dA=0
$.hl=17976931348623157e292
$.fs=-1})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"jn","hJ",function(){return H.hA("_$dart_dartClosure")})
u($,"jq","fG",function(){return H.hA("_$dart_js")})
u($,"jy","hM",function(){return H.ac(H.e_({
toString:function(){return"$receiver$"}}))})
u($,"jz","hN",function(){return H.ac(H.e_({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"jA","hO",function(){return H.ac(H.e_(null))})
u($,"jB","hP",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jE","hS",function(){return H.ac(H.e_(void 0))})
u($,"jF","hT",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jD","hR",function(){return H.ac(H.hc(null))})
u($,"jC","hQ",function(){return H.ac(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"jH","hV",function(){return H.ac(H.hc(void 0))})
u($,"jG","hU",function(){return H.ac(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"jK","fI",function(){return P.iA()})
u($,"jm","hI",function(){return new A.cN(H.l([1,2],[P.af]))})
u($,"jR","fM",function(){return[]})
u($,"jO","fK",function(){return H.l([],[[R.D,R.aK]])})
u($,"jP","fL",function(){return H.l([],[[R.D,R.aM]])})
u($,"jS","fN",function(){return H.l([],[[R.D,R.aW]])})
u($,"jW","fO",function(){var t=W.jk().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"k_","hY",function(){return Q.iH()})
u($,"jM","hW",function(){return W.bV(16,16)})
u($,"jN","fJ",function(){var t=$.hW()
return(t&&C.j).gee(t)})
u($,"jQ","hX",function(){return H.h1(P.t,Y.b2)})
u($,"js","fH",function(){return H.h1(P.t,Q.dp)})
u($,"jr","hK",function(){return P.aB(P.t)})
u($,"jt","hL",function(){var t=$.hK()
t.toString
return new P.ef(t,[H.d(t,0)])})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.w,CanvasGradient:J.w,CanvasPattern:J.w,DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,TextMetrics:J.w,WebGLActiveInfo:J.w,WebGLFramebuffer:J.w,WebGLRenderbuffer:J.w,WebGL2RenderingContext:J.w,WebGLShader:J.w,SQLError:J.w,ArrayBufferView:H.cc,Float32Array:H.dq,Int16Array:H.dr,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLDivElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTableElement:W.i,HTMLTableRowElement:W.i,HTMLTableSectionElement:W.i,HTMLTemplateElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.cH,HTMLAreaElement:W.cI,HTMLBodyElement:W.bT,HTMLCanvasElement:W.ah,CanvasRenderingContext2D:W.bW,CDATASection:W.au,CharacterData:W.au,Comment:W.au,ProcessingInstruction:W.au,Text:W.au,CSSStyleDeclaration:W.bg,MSStyleCSSProperties:W.bg,CSS2Properties:W.bg,DOMException:W.d3,DOMRectReadOnly:W.bY,Element:W.aj,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,Event:W.c,InputEvent:W.c,EventTarget:W.aL,HTMLFormElement:W.d8,HTMLImageElement:W.a0,HTMLInputElement:W.am,KeyboardEvent:W.an,HTMLAudioElement:W.bo,HTMLMediaElement:W.bo,PointerEvent:W.x,MouseEvent:W.x,DragEvent:W.x,Document:W.S,DocumentFragment:W.S,HTMLDocument:W.S,ShadowRoot:W.S,XMLDocument:W.S,Attr:W.S,DocumentType:W.S,Node:W.S,HTMLSelectElement:W.dK,Touch:W.ab,TouchEvent:W.ap,TouchList:W.dY,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,HTMLVideoElement:W.e3,WheelEvent:W.ad,Window:W.bz,DOMWindow:W.bz,ClientRect:W.cw,DOMRect:W.cw,SVGAElement:P.f,SVGAnimateElement:P.f,SVGAnimateMotionElement:P.f,SVGAnimateTransformElement:P.f,SVGAnimationElement:P.f,SVGCircleElement:P.f,SVGClipPathElement:P.f,SVGDefsElement:P.f,SVGDescElement:P.f,SVGDiscardElement:P.f,SVGEllipseElement:P.f,SVGFEBlendElement:P.f,SVGFEColorMatrixElement:P.f,SVGFEComponentTransferElement:P.f,SVGFECompositeElement:P.f,SVGFEConvolveMatrixElement:P.f,SVGFEDiffuseLightingElement:P.f,SVGFEDisplacementMapElement:P.f,SVGFEDistantLightElement:P.f,SVGFEFloodElement:P.f,SVGFEFuncAElement:P.f,SVGFEFuncBElement:P.f,SVGFEFuncGElement:P.f,SVGFEFuncRElement:P.f,SVGFEGaussianBlurElement:P.f,SVGFEImageElement:P.f,SVGFEMergeElement:P.f,SVGFEMergeNodeElement:P.f,SVGFEMorphologyElement:P.f,SVGFEOffsetElement:P.f,SVGFEPointLightElement:P.f,SVGFESpecularLightingElement:P.f,SVGFESpotLightElement:P.f,SVGFETileElement:P.f,SVGFETurbulenceElement:P.f,SVGFilterElement:P.f,SVGForeignObjectElement:P.f,SVGGElement:P.f,SVGGeometryElement:P.f,SVGGraphicsElement:P.f,SVGImageElement:P.f,SVGLineElement:P.f,SVGLinearGradientElement:P.f,SVGMarkerElement:P.f,SVGMaskElement:P.f,SVGMetadataElement:P.f,SVGPathElement:P.f,SVGPatternElement:P.f,SVGPolygonElement:P.f,SVGPolylineElement:P.f,SVGRadialGradientElement:P.f,SVGRectElement:P.f,SVGScriptElement:P.f,SVGSetElement:P.f,SVGStopElement:P.f,SVGStyleElement:P.f,SVGElement:P.f,SVGSVGElement:P.f,SVGSwitchElement:P.f,SVGSymbolElement:P.f,SVGTSpanElement:P.f,SVGTextContentElement:P.f,SVGTextElement:P.f,SVGTextPathElement:P.f,SVGTextPositioningElement:P.f,SVGTitleElement:P.f,SVGUseElement:P.f,SVGViewElement:P.f,SVGGradientElement:P.f,SVGComponentTransferFunctionElement:P.f,SVGFEDropShadowElement:P.f,SVGMPathElement:P.f,WebGLBuffer:P.bU,WebGLContextEvent:P.a8,WebGLProgram:P.cd,WebGLRenderingContext:P.aA,WebGLTexture:P.cr,WebGLUniformLocation:P.by})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,TextMetrics:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.f9,[])
else F.f9([])})})()
//# sourceMappingURL=main.dart.js.map
