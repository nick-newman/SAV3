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
a[c]=function(){a[c]=function(){H.jd(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fr"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.fr(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={f9:function f9(){},d4:function d4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},aJ:function aJ(){},
aD:function(a){var u,t=H.jf(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
j0:function(a){return v.types[H.U(a)]},
jV:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.q(a).$ibY},
a:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.cx(a)
if(typeof u!=="string")throw H.h(H.eL(a))
return u},
aO:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
im:function(a,b){var u,t
if(typeof a!=="string")H.G(H.eL(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.c(u,3)
t=H.V(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
il:function(a){var u,t
if(typeof a!=="string")H.G(H.eL(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.i0(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bm:function(a){return H.ii(a)+H.eI(H.b6(a),0,null)},
ii:function(a){var u,t,s,r,q,p,o,n=J.q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$iaX){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aD(t.length>1&&C.c.ak(t,0)===36?C.c.bB(t,1):t)},
ij:function(){return Date.now()},
ik:function(){var u,t
if($.dh!=null)return
$.dh=1000
$.di=H.iH()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.dh=1e6
$.di=new H.dg(t)},
T:function(a){throw H.h(H.eL(a))},
c:function(a,b){if(a==null)J.f_(a)
throw H.h(H.bG(a,b))},
bG:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,s,null)
u=H.U(J.f_(a))
if(!(b<0)){if(typeof u!=="number")return H.T(u)
t=b>=u}else t=!0
if(t)return P.fS(b,a,s,null,u)
return P.c5(b,s)},
eL:function(a){return new P.a5(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bl()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.hD})
u.name=""}else u.toString=H.hD
return u},
hD:function(){return J.cx(this.dartException)},
G:function(a){throw H.h(a)},
fz:function(a){throw H.h(P.bO(a))},
ac:function(a){var u,t,s,r,q,p
a=H.jc(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.l([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.dL(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
dM:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
h7:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
h1:function(a,b){return new H.dd(a,b==null?null:b.method)},
fa:function(a,b){var u=b==null,t=u?null:b.method
return new H.d1(a,t,u?null:b.receiver)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.eZ(a)
if(a==null)return
if(a instanceof H.bf)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.dN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.fa(H.a(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.h1(H.a(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.hI()
q=$.hJ()
p=$.hK()
o=$.hL()
n=$.hO()
m=$.hP()
l=$.hN()
$.hM()
k=$.hR()
j=$.hQ()
i=r.I(u)
if(i!=null)return f.$1(H.fa(H.V(u),i))
else{i=q.I(u)
if(i!=null){i.method="call"
return f.$1(H.fa(H.V(u),i))}else{i=p.I(u)
if(i==null){i=o.I(u)
if(i==null){i=n.I(u)
if(i==null){i=m.I(u)
if(i==null){i=l.I(u)
if(i==null){i=o.I(u)
if(i==null){i=k.I(u)
if(i==null){i=j.I(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.h1(H.V(u),i))}}return f.$1(new H.dO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cd()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a5(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cd()
return a},
b7:function(a){var u
if(a instanceof H.bf)return a.b
if(a==null)return new H.cr(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cr(a)},
iY:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.p(0,a[u],a[t])}return b},
j4:function(a,b,c,d,e,f){H.k(a,"$if5")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.eb("Unsupported number of arguments for wrapped closure"))},
b4:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j4)
a.$identity=u
return u},
i8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.dC().constructor.prototype):Object.create(new H.b9(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.K()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.fQ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.i4(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.fQ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
i4:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.j0,a)
if(typeof a=="function")if(b)return a
else{u=c?H.fN:H.f0
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
i5:function(a,b,c,d){var u=H.f0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
fQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.i7(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.i5(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.K()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ba
return new Function(r+H.a(q==null?$.ba=H.cH("self"):q)+";return "+p+"."+H.a(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.K()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.ba
return new Function(r+H.a(q==null?$.ba=H.cH("self"):q)+"."+H.a(u)+"("+o+");}")()},
i6:function(a,b,c,d){var u=H.f0,t=H.fN
switch(b?-1:a){case 0:throw H.h(H.ir("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
i7:function(a,b){var u,t,s,r,q,p,o,n=$.ba
if(n==null)n=$.ba=H.cH("self")
u=$.fM
if(u==null)u=$.fM=H.cH("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.i6(s,!q,t,b)
if(s===1){n="return function(){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+");"
u=$.a7
if(typeof u!=="number")return u.K()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.a(n)+"."+H.a(t)+"(this."+H.a(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.K()
$.a7=u+1
return new Function(n+u+"}")()},
fr:function(a,b,c,d,e,f,g){return H.i8(a,b,c,d,!!e,!!f,g)},
f0:function(a){return a.a},
fN:function(a){return a.c},
cH:function(a){var u,t,s,r=new H.b9("self","target","receiver","name"),q=J.fU(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
bF:function(a){if(a==null)H.iQ("boolean expression must not be null")
return a},
V:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a2(a,"String"))},
jT:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"double"))},
eY:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"num"))},
jP:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a2(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a2(a,"int"))},
fx:function(a,b){throw H.h(H.a2(a,H.aD(H.V(b).substring(2))))},
jb:function(a,b){throw H.h(H.fP(a,H.aD(H.V(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.fx(a,b)},
eU:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else u=!0
if(u)return a
H.jb(a,b)},
jY:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.q(a)[b])return a
H.fx(a,b)},
jX:function(a){if(a==null)return a
if(!!J.q(a).$iK)return a
throw H.h(H.a2(a,"List<dynamic>"))},
j5:function(a,b){var u
if(a==null)return a
u=J.q(a)
if(!!u.$iK)return a
if(u[b])return a
H.fx(a,b)},
ht:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.U(u)]
else return a.$S()}return},
b5:function(a,b){var u
if(typeof a=="function")return!0
u=H.ht(J.q(a))
if(u==null)return!1
return H.hh(u,null,b,null)},
f:function(a,b){var u,t
if(a==null)return a
if($.fl)return a
$.fl=!0
try{if(H.b5(a,b))return a
u=H.b8(b)
t=H.a2(a,u)
throw H.h(t)}finally{$.fl=!1}},
bI:function(a,b){if(a!=null&&!H.fq(a,b))H.G(H.a2(a,H.b8(b)))
return a},
a2:function(a,b){return new H.cj("TypeError: "+P.bQ(a)+": type '"+H.a(H.hm(a))+"' is not a subtype of type '"+b+"'")},
fP:function(a,b){return new H.cJ("CastError: "+P.bQ(a)+": type '"+H.a(H.hm(a))+"' is not a subtype of type '"+b+"'")},
hm:function(a){var u,t=J.q(a)
if(!!t.$ibb){u=H.ht(t)
if(u!=null)return H.b8(u)
return"Closure"}return H.bm(a)},
iQ:function(a){throw H.h(new H.dU(a))},
jd:function(a){throw H.h(new P.cP(a))},
ir:function(a){return new H.dv(a)},
hv:function(a){return v.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
b6:function(a){if(a==null)return
return a.$ti},
jU:function(a,b,c){return H.bJ(a["$a"+H.a(c)],H.b6(b))},
hw:function(a,b,c,d){var u=H.bJ(a["$a"+H.a(c)],H.b6(b))
return u==null?null:u[d]},
d:function(a,b){var u=H.b6(a)
return u==null?null:u[b]},
b8:function(a){return H.aC(a,null)},
aC:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aD(a[0].name)+H.eI(a,1,b)
if(typeof a=="function")return H.aD(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.c(b,t)
return H.a(b[t])}if('func' in a)return H.iE(a,b)
if('futureOr' in a)return"FutureOr<"+H.aC("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iE:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.l([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.j(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.c(a0,m)
p=C.c.K(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.aC(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aC(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aC(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aC(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.iX(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.V(n[g])
i=i+h+H.aC(d[c],a0)+(" "+H.a(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
eI:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bs("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aC(p,c)}return"<"+u.h(0)+">"},
bJ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ae:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.b6(a)
t=J.q(a)
if(t[b]==null)return!1
return H.hp(H.bJ(t[d],u),null,c,null)},
fy:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.fP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(2))+H.eI(c,0,null),v.mangledGlobalNames)))},
t:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(2))+H.eI(c,0,null),v.mangledGlobalNames)))},
iP:function(a,b,c,d,e){if(!H.P(a,null,b,null))H.je("TypeError: "+H.a(c)+H.b8(a)+H.a(d)+H.b8(b)+H.a(e))},
je:function(a){throw H.h(new H.cj(H.V(a)))},
hp:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.P(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.P(a[t],b,c[t],d))return!1
return!0},
jQ:function(a,b,c){return a.apply(b,H.bJ(J.q(b)["$a"+H.a(c)],H.b6(b)))},
hy:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="p"||a===-1||a===-2||H.hy(u)}return!1},
fq:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="p"||b===-1||b===-2||H.hy(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.fq(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b5(a,b)}u=J.q(a).constructor
t=H.b6(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.P(u,null,b,null)},
j:function(a,b){if(a!=null&&!H.fq(a,b))throw H.h(H.a2(a,H.b8(b)))
return a},
P:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.P(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.P(b[H.U(a)],b,c,d)
if(typeof c==="number")return!1
if(a.name==="p")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.P("type" in a?a.type:l,b,s,d)
else if(H.P(a,b,s,d))return!0
else{if(!('$i'+"R" in t.prototype))return!1
r=t.prototype["$a"+"R"]
q=H.bJ(r,u?a.slice(1):l)
return H.P(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.hh(a,b,c,d)
if('func' in a)return c.name==="f5"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.hp(H.bJ(m,u),b,p,d)},
hh:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.j9(h,b,g,d)},
j9:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.P(c[s],d,a[s],b))return!1}return!0},
fX:function(a,b){return new H.M([a,b])},
jR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j6:function(a){var u,t,s,r,q=H.V($.hx.$1(a)),p=$.eO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.eV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.V($.ho.$2(a,q))
if(q!=null){p=$.eO[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.eV[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.eX(u)
$.eO[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.eV[q]=u
return u}if(s==="-"){r=H.eX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.hz(a,u)
if(s==="*")throw H.h(P.h8(q))
if(v.leafTags[q]===true){r=H.eX(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.hz(a,u)},
hz:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.fw(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
eX:function(a){return J.fw(a,!1,null,!!a.$ibY)},
j7:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.eX(u)
else return J.fw(u,c,null,null)},
j2:function(){if(!0===$.fv)return
$.fv=!0
H.j3()},
j3:function(){var u,t,s,r,q,p,o,n
$.eO=Object.create(null)
$.eV=Object.create(null)
H.j1()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.hB.$1(q)
if(p!=null){o=H.j7(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
j1:function(){var u,t,s,r,q,p,o=C.K()
o=H.b3(C.L,H.b3(C.M,H.b3(C.q,H.b3(C.q,H.b3(C.N,H.b3(C.O,H.b3(C.P(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.hx=new H.eQ(r)
$.ho=new H.eR(q)
$.hB=new H.eS(p)},
b3:function(a,b){return a(b)||b},
f7:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.f4("Illegal RegExp pattern ("+String(p)+")",a))},
jc:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dg:function dg(a){this.a=a},
dL:function dL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dd:function dd(a,b){this.a=a
this.b=b},
d1:function d1(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a){this.a=a},
bf:function bf(a,b){this.a=a
this.b=b},
eZ:function eZ(a){this.a=a},
cr:function cr(a){this.a=a
this.b=null},
bb:function bb(){},
dI:function dI(){},
dC:function dC(){},
b9:function b9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a){this.a=a},
cJ:function cJ(a){this.a=a},
dv:function dv(a){this.a=a},
dU:function dU(a){this.a=a},
bt:function bt(a){this.a=a
this.d=this.b=null},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
d3:function d3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
bX:function bX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function cq(a){this.b=a},
dR:function dR(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dH:function dH(a,b){this.a=a
this.c=b},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
he:function(a,b,c){},
hd:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bG(b,a))},
c3:function c3(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
db:function db(){},
dc:function dc(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
iX:function(a){return J.id(a?Object.keys(a):[],null)},
jf:function(a){return v.mangledGlobalNames[a]},
hA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eP:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.fv==null){H.j2()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.h8("Return interceptor for "+H.a(u(a,q))))}s=a.constructor
r=s==null?null:s[$.fA()]
if(r!=null)return r
r=H.j6(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.fA(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
id:function(a,b){return J.fU(H.l(a,[b]))},
fU:function(a){a.fixed$length=Array
return a},
fV:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ie:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.ak(a,b)
if(t!==32&&t!==13&&!J.fV(t))break;++b}return b},
ig:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.au(a,u)
if(t!==32&&t!==13&&!J.fV(t))break}return b},
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bV.prototype
return J.bU.prototype}if(typeof a=="string")return J.aK.prototype
if(a==null)return J.bW.prototype
if(typeof a=="boolean")return J.d0.prototype
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.n)return a
return J.eP(a)},
hu:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.n)return a
return J.eP(a)},
iZ:function(a){if(a==null)return a
if(a.constructor==Array)return J.at.prototype
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.n)return a
return J.eP(a)},
j_:function(a){if(typeof a=="number")return J.bi.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aX.prototype
return a},
fu:function(a){if(typeof a=="string")return J.aK.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aX.prototype
return a},
cv:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.au.prototype
return a}if(a instanceof P.n)return a
return J.eP(a)},
cw:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).t(a,b)},
hV:function(a,b,c,d){return J.cv(a).cI(a,b,c,d)},
hW:function(a,b){return J.cv(a).dE(a,b)},
hX:function(a,b,c,d){return J.cv(a).dF(a,b,c,d)},
hY:function(a,b){return J.fu(a).bW(a,b)},
fJ:function(a,b){return J.cv(a).bX(a,b)},
aE:function(a){return J.q(a).gi(a)},
hZ:function(a){return J.iZ(a).gP(a)},
f_:function(a){return J.hu(a).gk(a)},
fK:function(a){return J.cv(a).gcl(a)},
cx:function(a){return J.q(a).h(a)},
i_:function(a,b){return J.j_(a).eE(a,b)},
i0:function(a){return J.fu(a).eG(a)},
v:function v(){},
d0:function d0(){},
bW:function bW(){},
bZ:function bZ(){},
df:function df(){},
aX:function aX(){},
au:function au(){},
at:function at(a){this.$ti=a},
f8:function f8(a){this.$ti=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bi:function bi(){},
bV:function bV(){},
bU:function bU(){},
aK:function aK(){}},P={
iw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.iR()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b4(new P.dZ(s),1)).observe(u,{childList:true})
return new P.dY(s,u,t)}else if(self.setImmediate!=null)return P.iS()
return P.iT()},
ix:function(a){self.scheduleImmediate(H.b4(new P.e_(H.f(a,{func:1,ret:-1})),0))},
iy:function(a){self.setImmediate(H.b4(new P.e0(H.f(a,{func:1,ret:-1})),0))},
iz:function(a){P.fd(C.S,H.f(a,{func:1,ret:-1}))},
fd:function(a,b){var u=C.d.S(a.a,1000)
return P.iB(u<0?0:u,b)},
iB:function(a,b){var u=new P.eB()
u.cG(a,b)
return u},
fo:function(a){return new P.dV(new P.B($.o,[a]),[a])},
fi:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ff:function(a,b){P.iC(a,b)},
fh:function(a,b){b.b6(0,a)},
fg:function(a,b){b.b7(H.a4(a),H.b7(a))},
iC:function(a,b){var u,t=null,s=new P.eE(b),r=new P.eF(b),q=J.q(a)
if(!!q.$iB)a.bT(s,r,t)
else if(!!q.$iR)a.bs(s,r,t)
else{u=new P.B($.o,[null])
H.j(a,null)
u.a=4
u.c=a
u.bT(s,t,t)}},
fp:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.o.bm(new P.eK(u),P.p,P.w,null)},
f6:function(a,b){var u=new P.B($.o,[b])
P.it(a,new P.cX(null,u))
return u},
h9:function(a,b){var u,t,s
b.a=1
try{a.bs(new P.eg(b),new P.eh(b),P.p)}catch(s){u=H.a4(s)
t=H.b7(s)
P.hC(new P.ei(b,u,t))}},
ef:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iB")
if(u>=4){t=b.an()
b.a=a.a
b.c=a.c
P.b_(b,t)}else{t=H.k(b.c,"$ia3")
b.a=2
b.c=a
a.bR(t)}},
b_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iH")
P.cu(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b_(h.a,b)}g=h.a
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
P.cu(i,i,g.b,q.a,q.b)
return}l=$.o
if(l!==n)$.o=n
else l=i
g=b.c
if((g&15)===8)new P.en(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.em(u,b,q).$0()}else if((g&2)!==0)new P.el(h,u,b).$0()
if(l!=null)$.o=l
g=u.b
if(!!J.q(g).$iR){if(g.a>=4){k=H.k(o.c,"$ia3")
o.c=null
b=o.ao(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.ef(g,o)
return}}j=b.b
k=H.k(j.c,"$ia3")
j.c=null
b=j.ao(k)
g=u.a
p=u.b
if(!g){H.j(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iH")
j.a=8
j.c=p}h.a=j
g=j}},
iK:function(a,b){if(H.b5(a,{func:1,args:[P.n,P.A]}))return b.bm(a,null,P.n,P.A)
if(H.b5(a,{func:1,args:[P.n]}))return H.f(a,{func:1,ret:null,args:[P.n]})
throw H.h(P.fL(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iI:function(){var u,t
for(;u=$.b2,u!=null;){$.bE=null
t=u.b
$.b2=t
if(t==null)$.bD=null
u.a.$0()}},
iO:function(){$.fm=!0
try{P.iI()}finally{$.bE=null
$.fm=!1
if($.b2!=null)$.fC().$1(P.hr())}},
hl:function(a){var u=new P.ck(a)
if($.b2==null){$.b2=$.bD=u
if(!$.fm)$.fC().$1(P.hr())}else $.bD=$.bD.b=u},
iN:function(a){var u,t,s=$.b2
if(s==null){P.hl(a)
$.bE=$.bD
return}u=new P.ck(a)
t=$.bE
if(t==null){u.b=s
$.b2=$.bE=u}else{u.b=t.b
$.bE=t.b=u
if(u.b==null)$.bD=u}},
hC:function(a){var u=null,t=$.o
if(C.e===t){P.aB(u,u,C.e,a)
return}P.aB(u,u,t,H.f(t.b3(a),{func:1,ret:-1}))},
jt:function(a,b){if(a==null)H.G(P.i1("stream"))
return new P.ey([b])},
ay:function(a){return new P.dW(null,null,[a])},
iM:function(a){return},
hi:function(a,b){P.cu(null,null,$.o,a,b)},
iJ:function(){},
it:function(a,b){var u=$.o
if(u===C.e)return P.fd(a,H.f(b,{func:1,ret:-1}))
return P.fd(a,H.f(u.b3(b),{func:1,ret:-1}))},
cu:function(a,b,c,d,e){var u={}
u.a=d
P.iN(new P.eJ(u,e))},
hj:function(a,b,c,d,e){var u,t=$.o
if(t===c)return d.$0()
$.o=c
u=t
try{t=d.$0()
return t}finally{$.o=u}},
hk:function(a,b,c,d,e,f,g){var u,t=$.o
if(t===c)return d.$1(e)
$.o=c
u=t
try{t=d.$1(e)
return t}finally{$.o=u}},
iL:function(a,b,c,d,e,f,g,h,i){var u,t=$.o
if(t===c)return d.$2(e,f)
$.o=c
u=t
try{t=d.$2(e,f)
return t}finally{$.o=u}},
aB:function(a,b,c,d){var u
H.f(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.b3(d):c.dZ(d,-1)
P.hl(d)},
dZ:function dZ(a){this.a=a},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
eB:function eB(){},
eC:function eC(a,b){this.a=a
this.b=b},
dV:function dV(a,b){this.a=a
this.b=!1
this.$ti=b},
eE:function eE(a){this.a=a},
eF:function eF(a){this.a=a},
eK:function eK(a){this.a=a},
e1:function e1(a,b){this.a=a
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
e2:function e2(){},
dW:function dW(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
cX:function cX(a,b){this.a=a
this.b=b},
e4:function e4(){},
dX:function dX(a,b){this.a=a
this.$ti=b},
a3:function a3(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
B:function B(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
ec:function ec(a,b){this.a=a
this.b=b},
ek:function ek(a,b){this.a=a
this.b=b},
eg:function eg(a){this.a=a},
eh:function eh(a){this.a=a},
ei:function ei(a,b,c){this.a=a
this.b=b
this.c=c},
ee:function ee(a,b){this.a=a
this.b=b},
ej:function ej(a,b){this.a=a
this.b=b},
ed:function ed(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eo:function eo(a){this.a=a},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
ck:function ck(a){this.a=a
this.b=null},
dE:function dE(){},
dF:function dF(a,b){this.a=a
this.b=b},
dG:function dG(a,b){this.a=a
this.b=b},
aa:function aa(){},
cl:function cl(){},
e5:function e5(){},
e3:function e3(){},
ex:function ex(){},
e7:function e7(){},
e6:function e6(a,b){this.b=a
this.a=null
this.$ti=b},
bB:function bB(){},
es:function es(a,b){this.a=a
this.b=b},
bC:function bC(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
ey:function ey(a){this.$ti=a},
H:function H(a,b){this.a=a
this.b=b},
eD:function eD(){},
eJ:function eJ(a,b){this.a=a
this.b=b},
et:function et(){},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function(a,b,c){return H.t(H.iY(a,new H.M([b,c])),"$ifZ",[b,c],"$afZ")},
ic:function(a,b,c){var u,t
if(P.fn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.l([],[P.r])
C.a.j($.Q,a)
try{P.iG(a,u)}finally{if(0>=$.Q.length)return H.c($.Q,-1)
$.Q.pop()}t=P.h5(b,H.j5(u,"$iJ"),", ")+c
return t.charCodeAt(0)==0?t:t},
fT:function(a,b,c){var u,t
if(P.fn(a))return b+"..."+c
u=new P.bs(b)
C.a.j($.Q,a)
try{t=u
t.a=P.h5(t.a,a,", ")}finally{if(0>=$.Q.length)return H.c($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
fn:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
iG:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.a(n.gw())
C.a.j(b,u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.c(b,-1)
t=b.pop()
if(0>=b.length)return H.c(b,-1)
s=b.pop()}else{r=n.gw();++l
if(!n.v()){if(l<=4){C.a.j(b,H.a(r))
return}t=H.a(r)
if(0>=b.length)return H.c(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gw();++l
for(;n.v();r=q,q=p){p=n.gw();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2;--l}C.a.j(b,"...")
return}}s=H.a(r)
t=H.a(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.c(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.j(b,o)
C.a.j(b,s)
C.a.j(b,t)},
h0:function(a){var u,t={}
if(P.fn(a))return"{...}"
u=new P.bs("")
try{C.a.j($.Q,a)
u.a+="{"
t.a=!0
a.U(0,new P.d7(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.c($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
d_:function d_(){},
a9:function a9(){},
d6:function d6(){},
d7:function d7(a,b){this.a=a
this.b=b},
d8:function d8(){},
eT:function(a){var u=H.im(a,null)
if(u!=null)return u
throw H.h(P.f4(a,null))},
iW:function(a){var u=H.il(a)
if(u!=null)return u
throw H.h(P.f4("Invalid double",a))},
ia:function(a){if(a instanceof H.bb)return a.h(0)
return"Instance of '"+H.a(H.bm(a))+"'"},
h3:function(a){return new H.bX(a,H.f7(a,!1,!0,!1,!1,!1))},
h5:function(a,b,c){var u=J.hZ(b)
if(!u.v())return a
if(c.length===0){do a+=H.a(u.gw())
while(u.v())}else{a+=H.a(u.gw())
for(;u.v();)a=a+c+H.a(u.gw())}return a},
f2:function(a){return new P.aF(1000*a)},
f3:function(){return new P.aj()},
bQ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cx(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ia(a)},
ag:function(a){return new P.a5(!1,null,null,a)},
fL:function(a,b,c){return new P.a5(!0,a,b,c)},
i1:function(a){return new P.a5(!1,null,a,"Must not be null")},
io:function(a){var u=null
return new P.bn(u,u,!1,u,u,a)},
c5:function(a,b){return new P.bn(null,null,!0,a,b,"Value not in range")},
dj:function(a,b,c,d,e){return new P.bn(b,c,!0,a,d,"Invalid value")},
ip:function(a,b,c){if(0>a||a>c)throw H.h(P.dj(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.dj(b,a,c,"end",null))
return b}return c},
fS:function(a,b,c,d,e){var u=H.U(e==null?J.f_(b):e)
return new P.cY(u,!0,a,c,"Index out of range")},
Y:function(a){return new P.dP(a)},
h8:function(a){return new P.dN(a)},
aV:function(a){return new P.br(a)},
bO:function(a){return new P.cK(a)},
f4:function(a,b){return new P.cW(a,b)},
ja:function(a){H.hA(a)},
ap:function ap(){},
af:function af(){},
aF:function aF(a){this.a=a},
cR:function cR(){},
cS:function cS(){},
aj:function aj(){},
cB:function cB(){},
bl:function bl(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cY:function cY(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dP:function dP(a){this.a=a},
dN:function dN(a){this.a=a},
br:function br(a){this.a=a},
cK:function cK(a){this.a=a},
de:function de(){},
cd:function cd(){},
cP:function cP(a){this.a=a},
eb:function eb(a){this.a=a},
cW:function cW(a,b){this.a=a
this.b=b},
w:function w(){},
J:function J(){},
K:function K(){},
p:function p(){},
m:function m(){},
n:function n(){},
aM:function aM(){},
c6:function c6(){},
A:function A(){},
dD:function dD(){this.b=this.a=0},
r:function r(){},
bs:function bs(a){this.a=a},
iV:function(a){var u={}
a.U(0,new P.eN(u))
return u},
eN:function eN(a){this.a=a},
ha:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ep:function ep(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
e:function e(){},
bL:function bL(){},
a8:function a8(){},
c4:function c4(){},
ax:function ax(){},
ci:function ci(){},
bu:function bu(){}},W={
jg:function(){return window},
bM:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
fR:function(a){H.k(a,"$iaH")
return"wheel"},
fe:function(a,b){return document.createElement(a)},
ib:function(){var u=document.createElement("img")
return u},
iu:function(a){return new TouchEvent(a)},
iv:function(){var u
try{W.iu("touches")
return!0}catch(u){H.a4(u)}return!1},
eq:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hb:function(a,b,c,d){var u=W.eq(W.eq(W.eq(W.eq(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
x:function(a,b,c,d,e){var u=W.hn(new W.ea(c),W.b),t=u!=null
if(t&&!0){H.f(u,{func:1,args:[W.b]})
if(t)J.hV(a,b,u,!1)}return new W.e9(a,b,u,!1,[e])},
hn:function(a,b){var u=$.o
if(u===C.e)return a
return u.e_(a,b)},
i:function i(){},
cy:function cy(){},
cz:function cz(){},
bK:function bK(){},
ah:function ah(){},
bN:function bN(){},
ar:function ar(){},
bc:function bc(){},
cO:function cO(){},
cQ:function cQ(){},
bP:function bP(){},
ai:function ai(){},
b:function b(){},
aH:function aH(){},
cV:function cV(){},
a0:function a0(){},
ak:function ak(){},
al:function al(){},
bk:function bk(){},
E:function E(){},
S:function S(){},
dw:function dw(){},
ab:function ab(){},
an:function an(){},
dK:function dK(){},
az:function az(){},
dQ:function dQ(){},
ad:function ad(){},
bv:function bv(){},
cn:function cn(){},
e8:function e8(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
e9:function e9(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ea:function ea(a){this.a=a},
bg:function bg(){},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cm:function cm(){},
cs:function cs(){},
ct:function ct(){}},Y={cL:function cL(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.y=_.x=_.r=null},cM:function cM(a){this.a=a},cN:function cN(a){this.a=a},
iF:function(a){var u=a.gal()
return $.hT().cn(u,new Y.eG(a))},
iA:function(a){var u=new Y.aZ()
u.cF(a)
return u},
cg:function(a,b){var u=H.l([],[Y.ch]),t=$.u
$.u=t+1
t=new Y.cf(u,t,H.l([],[A.a6]),T.y())
t.sah(0,a)
t.bd=Y.h6(b.a,b.b,b.c,b.Q,!1,b.cy,b.f,b.dy,!1,b.fr,b.db,b.dx,b.e,b.d,b.cx,!1,b.ch,b.r)
t.C|=3
u=t.bl(0,"keyDown",R.aL)
u.ap(H.f(t.gdk(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bl(0,"textInput",R.aW)
u.ap(H.f(t.gdw(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bl(0,"mouseDown",R.N)
u.ap(H.f(t.gdq(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
return t},
h6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new Y.dJ(a,b,c,n,m,g,r,!1,!1,!1,d,q,o,f,k,l,h,j)},
eG:function eG(a){this.a=a},
aZ:function aZ(){this.c=this.b=this.a=0},
cf:function cf(a,b,c,d){var _=this
_.A=""
_.bd=null
_.ca="none"
_.eS=_.eR=_.eQ=_.eP=_.be=_.eO=_.cb=0
_.cc=!1
_.cd=4294967295
_.B=_.G=100
_.a1=_.ab=0
_.ax=a
_.C=3
_.ay=_.ac=null
_.k4=!0
_.b=b
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
dJ:function dJ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
ch:function ch(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.e=_.d=_.c=0}},Z={cT:function cT(a,b,c,d,e,f,g){var _=this
_.u=a
_.H=b
_.ad=c
_.A=d
_.k4=!0
_.b=e
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=f
_.fy=null
_.go=g
_.id=!0
_.a=null}},K={
fY:function(){var u=new K.d2(P.ay(P.m))
u.b=u.a=new K.dT()
return u},
dT:function dT(){this.b=this.a=null},
d2:function d2(a){var _=this
_.b=_.a=null
_.c=0
_.d=a}},A={
aq:function(a,b,c){var u=L.h4(C.b.m(a),C.b.m(b),c).gaF().aJ(1),t=u.c,s=u.e
return new A.a_(t.c/s,t.d/s,u)},
i3:function(a){var u,t,s,r,q,p=$.hE(),o=A.i2(a,p.d),n=o.b,m=o.c
p.toString
u=W.ib()
t=W.a0
s=new P.B($.o,[t])
r=new N.bS(u,new P.dX(s,[t]),n)
t=W.b
q={func:1,ret:-1,args:[t]}
r.d=W.x(u,"load",H.f(r.gdi(),q),!1,t)
r.e=W.x(u,"error",H.f(r.gdg(),q),!1,t)
u.src=n
return s.br(new A.cF(m),A.a_)},
i2:function(a,b){var u=new A.cC()
u.cC(a,b)
return u},
is:function(a,b,c,d){var u="middleClick",t="rightClick",s=P.m,r=T.y(),q=T.y(),p=T.y(),o=H.l([],[A.aA]),n=H.l([new A.b0("mouseDown","mouseUp","click","doubleClick"),new A.b0("middleMouseDown","middleMouseUp",u,u),new A.b0("rightMouseDown","rightMouseUp",t,t)],[A.b0]),m=K.fY(),l=H.l([],[A.I]),k=$.u
$.u=k+1
k=new A.F(new U.D(0,0,0,0,[s]),r,q,p,new R.aS("render",!1),C.k,C.m,C.n,C.i,new U.z(0,0,[s]),o,new H.M([P.w,A.b1]),n,m,l,k,H.l([],[A.a6]),T.y())
k.cD(a,b,c,d)
return k},
W:function W(a,b,c,d){var _=this
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
cF:function cF(a){this.a=a},
cC:function cC(){this.c=this.b=this.a=null},
cD:function cD(a){this.a=a},
cE:function cE(a){this.d=a},
a6:function a6(){},
I:function I(){},
bd:function bd(){},
bT:function bT(){},
dn:function dn(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=!1},
dp:function dp(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
bq:function bq(a){this.b=a},
aU:function aU(a){this.b=a},
X:function X(a){this.b=a},
F:function F(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.T=_.ad=_.H=_.u=null
_.ci=_.cg=_.cf=_.ce=0
_.az=1
_.eh=!1
_.bi=_.bh=_.bg=_.bf=0
_.ei=a
_.aA=b
_.cj=c
_.c3=d
_.ea=e
_.N=null
_.ba=f
_.aw=g
_.c4=h
_.c5=i
_.c6="default"
_.c7=j
_.bb=null
_.c8=k
_.c9=l
_.eb=m
_.ec=n
_.bc=4294967295
_.ee=_.ed=!0
_.eg=_.ef=!1
_.A=o
_.k4=!0
_.b=p
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=q
_.fy=null
_.go=r
_.id=!0
_.a=null},
dB:function dB(a){this.a=a},
dy:function dy(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d,e,f){var _=this
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
dx:function dx(a){this.a=a
this.f=4294967295},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aA:function aA(){}},L={
hf:function(){var u,t
if($.fk===-1){u=window
t=H.f(new L.eH(),{func:1,ret:-1,args:[P.m]})
C.I.cX(u)
$.fk=C.I.dI(u,W.hn(t,P.m))}},
iq:function(a){var u=T.y(),t=new T.aN(new Float32Array(16))
t.a3()
t=new L.bw(C.f,u,t,null)
u=new L.aT(a,t)
u.e=t
return u},
h4:function(a,b,c){var u,t,s,r,q=new L.bp(C.x)
if(a<=0)H.G(P.ag("width"))
if(b<=0)H.G(P.ag("height"))
u=q.a=V.bH(a)
t=q.b=V.bH(b)
s=W.bM(t,u)
q.c=q.d=s
if(c!==0){r=s.getContext("2d")
r.fillStyle=V.ft(c)
r.fillRect(0,0,u,t)}return q},
fb:function(a,b,c,d,e){var u,t,s,r,q,p=new Int16Array(6),o=new Float32Array(16),n=new L.aw(a,b,c,d,e,p,o),m=d===0
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
o[9]=t}else H.G(P.f3())
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
o[11]=q}else H.G(P.f3())
p[0]=0
p[1]=1
p[2]=2
p[3]=0
p[4]=2
p[5]=3
n.y=o
n.x=p
return n},
cG:function cG(){},
aQ:function aQ(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
aR:function aR(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
c9:function c9(a){this.b=a},
av:function av(){},
dk:function dk(){},
c7:function c7(a,b,c,d,e,f,g){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=1
_.a=e
_.b=f
_.c=g},
c8:function c8(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dm:function dm(){},
ca:function ca(){},
eH:function eH(){},
cb:function cb(){},
er:function er(){},
bo:function bo(){},
dr:function dr(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
ds:function ds(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dt:function dt(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
bw:function bw(a,b,c,d){var _=this
_.a=1
_.b=a
_.c=b
_.d=c
_.e=d
_.f=null},
aT:function aT(a,b){var _=this
_.b=0
_.c=a
_.d=b
_.e=null},
am:function am(){this.c=this.b=this.a=0},
bp:function bp(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.x=null
_.y=-1
_.z=!1
_.ch=_.Q=null},
cc:function cc(a){this.a=a},
aw:function aw(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
du:function du(){}},T={d5:function d5(a){this.a=a},
d9:function(a,b,c,d,e,f){var u=new Float32Array(6)
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f
return new T.c_(u)},
y:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.c_(u)},
c_:function c_(a){this.a=a},
aN:function aN(a){this.a=a}},R={
fj:function(a,b,c){var u,t,s,r=b.length
for(u={func:1,ret:-1,args:[c]},t=0;t<r;++t){if(t<0||t>=b.length)return H.c(b,t)
s=b[t]
if(!s.c){a.r=a.f=!1
H.f(s.f,u).$1(H.j(a,c))}else{C.a.bn(b,t);--r;--t}}},
cI:function cI(){},
aG:function aG(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aI:function aI(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aS:function aS(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bR:function bR(){},
be:function be(a){this.b=a},
as:function as(a,b,c){var _=this
_.a=a
_.c=b
_.d=0
_.$ti=c},
C:function C(a,b,c,d,e){var _=this
_.a=a
_.c=!1
_.d=b
_.e=c
_.f=d
_.$ti=e},
bh:function bh(a){this.b=a},
cZ:function cZ(){},
aL:function aL(){},
N:function N(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1},
aW:function aW(){},
ao:function ao(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1}},U={z:function z(a,b,c){this.a=a
this.b=b
this.$ti=c},D:function D(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e}},N={bS:function bS(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},Q={da:function da(){},
iD:function(){var u,t
try{u=W.iv()
return u}catch(t){H.a4(t)
return!1}}},O={
bj:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},V={
fs:function(a){return"rgb("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+")"},
ft:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.a((a>>>24&255)/255)+")"},
j8:function(a,b){if(typeof b!=="number")return H.T(b)
if(a<=b)return a
else return b},
eM:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
bH:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.h(P.ag("The supplied value ("+H.a(a)+") is not an int."))},
Z:function(a){return a},
hs:function(a){return a}},F={
eW:function(){var u=0,t=P.fo(P.p),s,r,q,p
var $async$eW=P.fp(function(a,b){if(a===1)return P.fg(b,t)
while(true)switch(u){case 0:s=H.l([],[P.w])
r=H.l([],[A.W])
q=H.l([],[A.I])
p=$.u
$.u=p+1
new Y.cL(new Z.cT(s,r,C.R,q,p,H.l([],[A.a6]),T.y()),new A.dx(C.l)).e5()
return P.fh(null,t)}})
return P.fi($async$eW,t)}}
var w=[C,H,J,P,W,Y,Z,K,A,L,T,R,U,N,Q,O,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.f9.prototype={}
J.v.prototype={
t:function(a,b){return a===b},
gi:function(a){return H.aO(a)},
h:function(a){return"Instance of '"+H.a(H.bm(a))+"'"}}
J.d0.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159},
$iap:1}
J.bW.prototype={
t:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
$ip:1}
J.bZ.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.df.prototype={}
J.aX.prototype={}
J.au.prototype={
h:function(a){var u=a[$.hF()]
if(u==null)return this.cB(a)
return"JavaScript function for "+H.a(J.cx(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$if5:1}
J.at.prototype={
j:function(a,b){H.j(b,H.d(a,0))
if(!!a.fixed$length)H.G(P.Y("add"))
a.push(b)},
bn:function(a,b){if(!!a.fixed$length)H.G(P.Y("removeAt"))
if(b<0||b>=a.length)throw H.h(P.c5(b,null))
return a.splice(b,1)[0]},
aG:function(a,b){var u
if(!!a.fixed$length)H.G(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.cw(a[u],b)){a.splice(u,1)
return!0}return!1},
U:function(a,b){var u,t
H.f(b,{func:1,ret:-1,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bO(a))}},
em:function(a,b,c,d){var u,t,s
H.j(b,d)
H.f(c,{func:1,ret:d,args:[d,H.d(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.h(P.bO(a))}return t},
eq:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.cw(a[u],b))return u
return-1},
e2:function(a,b){var u
for(u=0;u<a.length;++u)if(J.cw(a[u],b))return!0
return!1},
h:function(a){return P.fT(a,"[","]")},
gP:function(a){return new J.cA(a,a.length,[H.d(a,0)])},
gi:function(a){return H.aO(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.G(P.Y("set length"))
if(b<0)throw H.h(P.dj(b,0,null,"newLength",null))
a.length=b},
p:function(a,b,c){H.j(c,H.d(a,0))
if(!!a.immutable$list)H.G(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bG(a,b))
a[b]=c},
$iJ:1,
$iK:1}
J.f8.prototype={}
J.cA.prototype={
gw:function(){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.fz(s))
u=t.c
if(u>=r){t.sbF(null)
return!1}t.sbF(s[u]);++t.c
return!0},
sbF:function(a){this.d=H.j(a,H.d(this,0))}}
J.bi.prototype={
gev:function(a){return a===0?1/a<0:a<0},
aa:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.Y(""+a+".ceil()"))},
el:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.Y(""+a+".floor()"))},
m:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.Y(""+a+".round()"))},
eE:function(a,b){var u
if(b<0||b>20)throw H.h(P.dj(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gev(a))return"-"+u
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
cv:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
S:function(a,b){return(a|0)===a?a/b|0:this.dP(a,b)},
dP:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.Y("Result of truncating division is "+H.a(u)+": "+H.a(a)+" ~/ "+b))},
dN:function(a,b){var u
if(a>0)u=this.dM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dM:function(a,b){return b>31?0:a>>>b},
$iaf:1,
$im:1}
J.bV.prototype={$iw:1}
J.bU.prototype={}
J.aK.prototype={
au:function(a,b){if(b<0)throw H.h(H.bG(a,b))
if(b>=a.length)H.G(H.bG(a,b))
return a.charCodeAt(b)},
ak:function(a,b){if(b>=a.length)throw H.h(H.bG(a,b))
return a.charCodeAt(b)},
bW:function(a,b){return new H.ez(b,a,0)},
K:function(a,b){if(typeof b!=="string")throw H.h(P.fL(b,null,null))
return a+b},
cz:function(a,b){if(typeof b==="string")return H.l(a.split(b),[P.r])
else if(b instanceof H.bX&&b.gd5().exec("").length-2===0)return H.l(a.split(b.b),[P.r])
else return this.cV(a,b)},
cV:function(a,b){var u,t,s,r,q,p,o=H.l([],[P.r])
for(u=J.hY(b,a),u=u.gP(u),t=0,s=1;u.v();){r=u.gw()
q=r.gbA(r)
p=r.gav()
s=p-q
if(s===0&&t===q)continue
C.a.j(o,this.aj(a,t,q))
t=p}if(t<a.length||s>0)C.a.j(o,this.bB(a,t))
return o},
aj:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.c5(b,null))
if(b>c)throw H.h(P.c5(b,null))
if(c>a.length)throw H.h(P.c5(c,null))
return a.substring(b,c)},
bB:function(a,b){return this.aj(a,b,null)},
eG:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.ak(r,0)===133){u=J.ie(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.au(r,t)===133?J.ig(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
aK:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aD:function(a,b){var u=b-a.length
if(u<=0)return a
return this.aK(" ",u)+a},
h:function(a){return a},
gi:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ih2:1,
$ir:1}
H.d4.prototype={
gw:function(){return this.d},
v:function(){var u,t=this,s=t.a,r=J.hu(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.bO(s))
u=t.c
if(u>=q){t.sbG(null)
return!1}t.sbG(r.c2(s,u));++t.c
return!0},
sbG:function(a){this.d=H.j(a,H.d(this,0))}}
H.aJ.prototype={}
H.dg.prototype={
$0:function(){return C.b.el(1000*this.a.now())},
$S:7}
H.dL.prototype={
I:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.dd.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.a(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.d1.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.a(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.a(t.a)+")"
return s+r+"' on '"+u+"' ("+H.a(t.a)+")"}}
H.dO.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bf.prototype={}
H.eZ.prototype={
$1:function(a){if(!!J.q(a).$iaj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:4}
H.cr.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iA:1}
H.bb.prototype={
h:function(a){var u=H.bm(this).trim()
return"Closure '"+u+"'"},
$if5:1,
geK:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dI.prototype={}
H.dC.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aD(u)+"'"}}
H.b9.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.b9))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gi:function(a){var u,t=this.c
if(t==null)u=H.aO(this.a)
else u=typeof t!=="object"?J.aE(t):H.aO(t)
return(u^H.aO(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.a(this.d)+"' of "+("Instance of '"+H.a(H.bm(u))+"'")}}
H.cj.prototype={
h:function(a){return this.a}}
H.cJ.prototype={
h:function(a){return this.a}}
H.dv.prototype={
h:function(a){return"RuntimeError: "+H.a(this.a)}}
H.dU.prototype={
h:function(a){return"Assertion failed: "+P.bQ(this.a)}}
H.bt.prototype={
gaq:function(){var u=this.b
return u==null?this.b=H.b8(this.a):u},
h:function(a){return this.gaq()},
gi:function(a){var u=this.d
return u==null?this.d=C.c.gi(this.gaq()):u},
t:function(a,b){if(b==null)return!1
return b instanceof H.bt&&this.gaq()===b.gaq()}}
H.M.prototype={
gk:function(a){return this.a},
c_:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.bL(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.bL(t,a)}else return s.er(a)},
er:function(a){var u=this.d
if(u==null)return!1
return this.aB(this.am(u,J.aE(a)&0x3ffffff),a)>=0},
n:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a4(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a4(r,b)
s=t==null?null:t.b
return s}else return q.es(b)},
es:function(a){var u,t,s=this.d
if(s==null)return
u=this.am(s,J.aE(a)&0x3ffffff)
t=this.aB(u,a)
if(t<0)return
return u[t].b},
p:function(a,b,c){var u,t,s,r,q,p,o=this
H.j(b,H.d(o,0))
H.j(c,H.d(o,1))
if(typeof b==="string"){u=o.b
o.bH(u==null?o.b=o.aV():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bH(t==null?o.c=o.aV():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aV()
r=J.aE(b)&0x3ffffff
q=o.am(s,r)
if(q==null)o.b1(s,r,[o.aW(b,c)])
else{p=o.aB(q,b)
if(p>=0)q[p].b=c
else q.push(o.aW(b,c))}}},
cn:function(a,b){var u,t=this
H.j(a,H.d(t,0))
H.f(b,{func:1,ret:H.d(t,1)})
if(t.c_(a))return t.n(0,a)
u=b.$0()
t.p(0,a,u)
return u},
aG:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dG(this.c,b)
else return this.eu(b)},
eu:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=J.aE(a)&0x3ffffff
t=q.am(p,u)
s=q.aB(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bU(r)
if(t.length===0)q.aQ(p,u)
return r.b},
bZ:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.aU()}},
U:function(a,b){var u,t,s=this
H.f(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bO(s))
u=u.c}},
bH:function(a,b,c){var u,t=this
H.j(b,H.d(t,0))
H.j(c,H.d(t,1))
u=t.a4(a,b)
if(u==null)t.b1(a,b,t.aW(b,c))
else u.b=c},
dG:function(a,b){var u
if(a==null)return
u=this.a4(a,b)
if(u==null)return
this.bU(u)
this.aQ(a,b)
return u.b},
aU:function(){this.r=this.r+1&67108863},
aW:function(a,b){var u,t=this,s=new H.d3(H.j(a,H.d(t,0)),H.j(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aU()
return s},
bU:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aU()},
aB:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cw(a[t].a,b))return t
return-1},
h:function(a){return P.h0(this)},
a4:function(a,b){return a[b]},
am:function(a,b){return a[b]},
b1:function(a,b,c){a[b]=c},
aQ:function(a,b){delete a[b]},
bL:function(a,b){return this.a4(a,b)!=null},
aV:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b1(t,u,t)
this.aQ(t,u)
return t},
$ifZ:1}
H.d3.prototype={}
H.eQ.prototype={
$1:function(a){return this.a(a)},
$S:4}
H.eR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:14}
H.eS.prototype={
$1:function(a){return this.a(H.V(a))},
$S:33}
H.bX.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gd6:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.f7(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
gd5:function(){var u=this,t=u.d
if(t!=null)return t
t=u.b
return u.d=H.f7(u.a+"|()",t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
ek:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.cq(u)},
bW:function(a,b){return new H.dR(this,b,0)},
cZ:function(a,b){var u,t=this.gd6()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.cq(u)},
$ih2:1}
H.cq.prototype={
gbA:function(a){return this.b.index},
gav:function(){var u=this.b
return u.index+u[0].length},
$iaM:1,
$ic6:1}
H.dR.prototype={
gP:function(a){return new H.dS(this.a,this.b,this.c)},
$aJ:function(){return[P.c6]}}
H.dS.prototype={
gw:function(){return this.d},
v:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.cZ(p,u)
if(s!=null){q.d=s
r=s.gav()
if(s.b.index===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.fu(t).au(t,p)
if(p>=55296&&p<=56319){p=C.c.au(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.dH.prototype={
gav:function(){return this.a+this.c.length},
$iaM:1,
gbA:function(a){return this.a}}
H.ez.prototype={
gP:function(a){return new H.eA(this.a,this.b,this.c)},
$aJ:function(){return[P.aM]}}
H.eA.prototype={
v:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.dH(u,q)
s.c=t===s.c?t+1:t
return!0},
gw:function(){return this.d}}
H.c3.prototype={$ijE:1}
H.c0.prototype={
gk:function(a){return a.length},
$ibY:1,
$abY:function(){}}
H.c1.prototype={
n:function(a,b){H.hd(b,a,a.length)
return a[b]},
$aaJ:function(){return[P.af]},
$aa9:function(){return[P.af]},
$iJ:1,
$aJ:function(){return[P.af]},
$iK:1,
$aK:function(){return[P.af]}}
H.c2.prototype={
$aaJ:function(){return[P.w]},
$aa9:function(){return[P.w]},
$iJ:1,
$aJ:function(){return[P.w]},
$iK:1,
$aK:function(){return[P.w]}}
H.db.prototype={$ijk:1}
H.dc.prototype={
n:function(a,b){H.hd(b,a,a.length)
return a[b]},
$ijl:1}
H.bx.prototype={}
H.by.prototype={}
H.bz.prototype={}
H.bA.prototype={}
P.dZ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:5}
P.dY.prototype={
$1:function(a){var u,t
this.a.a=H.f(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.e_.prototype={
$0:function(){this.a.$0()},
$S:0}
P.e0.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eB.prototype={
cG:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b4(new P.eC(this,b),0),a)
else throw H.h(P.Y("`setTimeout()` not found."))}}
P.eC.prototype={
$0:function(){this.b.$0()},
$S:1}
P.dV.prototype={
b6:function(a,b){var u,t,s=this,r=H.d(s,0)
H.bI(b,{futureOr:1,type:r})
u=!s.b||H.ae(b,"$iR",s.$ti,"$aR")
t=s.a
if(u)t.bI(b)
else t.bK(H.j(b,r))},
b7:function(a,b){var u=this.a
if(this.b)u.Z(a,b)
else u.bJ(a,b)},
$ii9:1}
P.eE.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:15}
P.eF.prototype={
$2:function(a,b){this.a.$2(1,new H.bf(a,H.k(b,"$iA")))},
$S:17}
P.eK.prototype={
$2:function(a,b){this.a(H.U(a),b)},
$S:25}
P.e1.prototype={}
P.O.prototype={
aY:function(){},
aZ:function(){},
saX:function(a){this.dy=H.t(a,"$iO",this.$ti,"$aO")},
sbS:function(a){this.fr=H.t(a,"$iO",this.$ti,"$aO")}}
P.e2.prototype={
gd3:function(){return this.c<4},
cL:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.d(p,0)
H.f(a,{func:1,ret:-1,args:[o]})
H.f(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.hq()
o=new P.co($.o,c,p.$ti)
o.dJ()
return o}u=$.o
t=d?1:0
s=p.$ti
r=new P.O(p,u,t,s)
r.cE(a,b,c,d,o)
r.sbS(r)
r.saX(r)
H.t(r,"$iO",s,"$aO")
r.dx=p.c&1
q=p.e
p.sd2(r)
r.saX(null)
r.sbS(q)
if(q==null)p.sd_(r)
else q.saX(r)
if(p.d==p.e)P.iM(p.a)
return r},
cH:function(){if((this.c&4)!==0)return new P.br("Cannot add new events after calling close")
return new P.br("Cannot add new events while doing an addStream")},
j:function(a,b){var u=this
H.j(b,H.d(u,0))
if(!u.gd3())throw H.h(u.cH())
u.b0(b)},
sd_:function(a){this.d=H.t(a,"$iO",this.$ti,"$aO")},
sd2:function(a){this.e=H.t(a,"$iO",this.$ti,"$aO")},
$ijs:1,
$ijH:1,
$iaY:1}
P.dW.prototype={
b0:function(a){var u,t
H.j(a,H.d(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.cK(new P.e6(a,t))}}
P.cX.prototype={
$0:function(){this.b.aP(null)},
$S:0}
P.e4.prototype={
b7:function(a,b){var u
if(a==null)a=new P.bl()
u=this.a
if(u.a!==0)throw H.h(P.aV("Future already completed"))
u.bJ(a,b)},
e1:function(a){return this.b7(a,null)},
$ii9:1}
P.dX.prototype={
b6:function(a,b){var u
H.bI(b,{futureOr:1,type:H.d(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.aV("Future already completed"))
u.bI(b)}}
P.a3.prototype={
ex:function(a){if((this.c&15)!==6)return!0
return this.b.b.bp(H.f(this.d,{func:1,ret:P.ap,args:[P.n]}),a.a,P.ap,P.n)},
en:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.b5(u,{func:1,args:[P.n,P.A]}))return H.bI(r.eD(u,a.a,a.b,null,t,P.A),s)
else return H.bI(r.bp(H.f(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.B.prototype={
bs:function(a,b,c){var u,t,s,r=H.d(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.o
if(u!==C.e){H.f(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.iK(b,u)}t=new P.B($.o,[c])
s=b==null?1:3
this.aO(new P.a3(t,s,a,b,[r,c]))
return t},
br:function(a,b){return this.bs(a,null,b)},
bT:function(a,b,c){var u,t=H.d(this,0)
H.f(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.B($.o,[c])
this.aO(new P.a3(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
aO:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ia3")
t.c=a}else{if(s===2){u=H.k(t.c,"$iB")
s=u.a
if(s<4){u.aO(a)
return}t.a=s
t.c=u.c}P.aB(null,null,t.b,H.f(new P.ec(t,a),{func:1,ret:-1}))}},
bR:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ia3")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iB")
u=q.a
if(u<4){q.bR(a)
return}p.a=u
p.c=q.c}o.a=p.ao(a)
P.aB(null,null,p.b,H.f(new P.ek(o,p),{func:1,ret:-1}))}},
an:function(){var u=H.k(this.c,"$ia3")
this.c=null
return this.ao(u)},
ao:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aP:function(a){var u,t,s=this,r=H.d(s,0)
H.bI(a,{futureOr:1,type:r})
u=s.$ti
if(H.ae(a,"$iR",u,"$aR"))if(H.ae(a,"$iB",u,null))P.ef(a,s)
else P.h9(a,s)
else{t=s.an()
H.j(a,r)
s.a=4
s.c=a
P.b_(s,t)}},
bK:function(a){var u,t=this
H.j(a,H.d(t,0))
u=t.an()
t.a=4
t.c=a
P.b_(t,u)},
Z:function(a,b){var u,t=this
H.k(b,"$iA")
u=t.an()
t.a=8
t.c=new P.H(a,b)
P.b_(t,u)},
cS:function(a){return this.Z(a,null)},
bI:function(a){var u=this
H.bI(a,{futureOr:1,type:H.d(u,0)})
if(H.ae(a,"$iR",u.$ti,"$aR")){u.cO(a)
return}u.a=1
P.aB(null,null,u.b,H.f(new P.ee(u,a),{func:1,ret:-1}))},
cO:function(a){var u=this,t=u.$ti
H.t(a,"$iR",t,"$aR")
if(H.ae(a,"$iB",t,null)){if(a.a===8){u.a=1
P.aB(null,null,u.b,H.f(new P.ej(u,a),{func:1,ret:-1}))}else P.ef(a,u)
return}P.h9(a,u)},
bJ:function(a,b){this.a=1
P.aB(null,null,this.b,H.f(new P.ed(this,a,b),{func:1,ret:-1}))},
$iR:1}
P.ec.prototype={
$0:function(){P.b_(this.a,this.b)},
$S:0}
P.ek.prototype={
$0:function(){P.b_(this.b,this.a.a)},
$S:0}
P.eg.prototype={
$1:function(a){var u=this.a
u.a=0
u.aP(a)},
$S:5}
P.eh.prototype={
$2:function(a,b){H.k(b,"$iA")
this.a.Z(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.ei.prototype={
$0:function(){this.a.Z(this.b,this.c)},
$S:0}
P.ee.prototype={
$0:function(){var u=this.a
u.bK(H.j(this.b,H.d(u,0)))},
$S:0}
P.ej.prototype={
$0:function(){P.ef(this.b,this.a)},
$S:0}
P.ed.prototype={
$0:function(){this.a.Z(this.b,this.c)},
$S:0}
P.en.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cq(H.f(s.d,{func:1}),null)}catch(r){u=H.a4(r)
t=H.b7(r)
if(o.d){s=H.k(o.a.a.c,"$iH").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iH")
else q.b=new P.H(u,t)
q.a=!0
return}if(!!J.q(n).$iR){if(n instanceof P.B&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iH")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.br(new P.eo(p),null)
s.a=!1}},
$S:1}
P.eo.prototype={
$1:function(a){return this.a},
$S:13}
P.em.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.j(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.bp(H.f(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a4(o)
t=H.b7(o)
s=n.a
s.b=new P.H(u,t)
s.a=!0}},
$S:1}
P.el.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iH")
r=m.c
if(H.bF(r.ex(u))&&r.e!=null){q=m.b
q.b=r.en(u)
q.a=!1}}catch(p){t=H.a4(p)
s=H.b7(p)
r=H.k(m.a.a.c,"$iH")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.H(t,s)
n.a=!0}},
$S:1}
P.ck.prototype={}
P.dE.prototype={
gk:function(a){var u={},t=new P.B($.o,[P.w])
u.a=0
this.aC(new P.dF(u,this),!0,new P.dG(u,t),t.gcR())
return t}}
P.dF.prototype={
$1:function(a){H.j(a,H.d(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.p,args:[H.d(this.b,0)]}}}
P.dG.prototype={
$0:function(){this.b.aP(this.a.a)},
$S:0}
P.aa.prototype={}
P.cl.prototype={
gi:function(a){return(H.aO(this.a)^892482866)>>>0},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cl&&b.a===this.a}}
P.e5.prototype={
aY:function(){H.t(this,"$iaa",[H.d(this.x,0)],"$aaa")},
aZ:function(){H.t(this,"$iaa",[H.d(this.x,0)],"$aaa")}}
P.e3.prototype={
cE:function(a,b,c,d,e){var u,t,s=this,r=H.d(s,0)
H.f(a,{func:1,ret:-1,args:[r]})
s.sdc(H.f(a,{func:1,ret:null,args:[r]}))
u=b==null?P.iU():b
if(H.b5(u,{func:1,ret:-1,args:[P.n,P.A]}))s.d.bm(u,null,P.n,P.A)
else if(H.b5(u,{func:1,ret:-1,args:[P.n]}))H.f(u,{func:1,ret:null,args:[P.n]})
else H.G(P.ag("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.f(c,{func:1,ret:-1})
t=c==null?P.hq():c
s.sdd(H.f(t,{func:1,ret:-1}))},
aY:function(){},
aZ:function(){},
cK:function(a){var u=this,t=u.$ti,s=H.t(u.r,"$ibC",t,"$abC")
if(s==null){s=new P.bC(t)
u.sbQ(s)}t=s.c
if(t==null)s.b=s.c=a
else s.c=t.a=a
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.by(u)}},
b0:function(a){var u,t=this,s=H.d(t,0)
H.j(a,s)
u=t.e
t.e=u|32
t.d.cs(t.a,a,s)
t.e&=4294967263
t.cP((u&4)!==0)},
cP:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbQ(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.aY()
else s.aZ()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.by(s)},
sdc:function(a){this.a=H.f(a,{func:1,ret:-1,args:[H.d(this,0)]})},
sdd:function(a){H.f(a,{func:1,ret:-1})},
sbQ:function(a){this.r=H.t(a,"$ibB",this.$ti,"$abB")},
$iaa:1,
$iaY:1}
P.ex.prototype={
aC:function(a,b,c,d){H.f(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.f(c,{func:1,ret:-1})
return this.a.cL(H.f(a,{func:1,ret:-1,args:[H.d(this,0)]}),d,c,!0===b)},
ew:function(a){return this.aC(a,null,null,null)}}
P.e7.prototype={}
P.e6.prototype={}
P.bB.prototype={
by:function(a){var u,t=this
H.t(a,"$iaY",t.$ti,"$aaY")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.hC(new P.es(t,a))
t.a=1}}
P.es.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.t(this.b,"$iaY",[H.d(r,0)],"$aaY")
t=r.b
s=t.a
r.b=s
if(s==null)r.c=null
H.t(u,"$iaY",[H.d(t,0)],"$aaY").b0(t.b)},
$S:0}
P.bC.prototype={}
P.co.prototype={
dJ:function(){var u=this
if((u.b&2)!==0)return
P.aB(null,null,u.a,H.f(u.gdK(),{func:1,ret:-1}))
u.b|=2},
dL:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.cr(u.c)},
$iaa:1}
P.ey.prototype={}
P.H.prototype={
h:function(a){return H.a(this.a)},
$iaj:1}
P.eD.prototype={$ijF:1}
P.eJ.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bl():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u},
$S:0}
P.et.prototype={
cr:function(a){var u,t,s,r=null
H.f(a,{func:1,ret:-1})
try{if(C.e===$.o){a.$0()
return}P.hj(r,r,this,a,-1)}catch(s){u=H.a4(s)
t=H.b7(s)
P.cu(r,r,this,u,H.k(t,"$iA"))}},
cs:function(a,b,c){var u,t,s,r=null
H.f(a,{func:1,ret:-1,args:[c]})
H.j(b,c)
try{if(C.e===$.o){a.$1(b)
return}P.hk(r,r,this,a,b,-1,c)}catch(s){u=H.a4(s)
t=H.b7(s)
P.cu(r,r,this,u,H.k(t,"$iA"))}},
dZ:function(a,b){return new P.ev(this,H.f(a,{func:1,ret:b}),b)},
b3:function(a){return new P.eu(this,H.f(a,{func:1,ret:-1}))},
e_:function(a,b){return new P.ew(this,H.f(a,{func:1,ret:-1,args:[b]}),b)},
cq:function(a,b){H.f(a,{func:1,ret:b})
if($.o===C.e)return a.$0()
return P.hj(null,null,this,a,b)},
bp:function(a,b,c,d){H.f(a,{func:1,ret:c,args:[d]})
H.j(b,d)
if($.o===C.e)return a.$1(b)
return P.hk(null,null,this,a,b,c,d)},
eD:function(a,b,c,d,e,f){H.f(a,{func:1,ret:d,args:[e,f]})
H.j(b,e)
H.j(c,f)
if($.o===C.e)return a.$2(b,c)
return P.iL(null,null,this,a,b,c,d,e,f)},
bm:function(a,b,c,d){return H.f(a,{func:1,ret:b,args:[c,d]})}}
P.ev.prototype={
$0:function(){return this.a.cq(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.eu.prototype={
$0:function(){return this.a.cr(this.b)},
$S:1}
P.ew.prototype={
$1:function(a){var u=this.c
return this.a.cs(this.b,H.j(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.d_.prototype={}
P.a9.prototype={
gP:function(a){return new H.d4(a,this.gk(a),[H.hw(this,a,"a9",0)])},
c2:function(a,b){return this.n(a,b)},
h:function(a){return P.fT(a,"[","]")}}
P.d6.prototype={}
P.d7.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.a(a)
t.a=u+": "
t.a+=H.a(b)},
$S:8}
P.d8.prototype={
gk:function(a){return this.a},
h:function(a){return P.h0(this)},
$ih_:1}
P.ap.prototype={}
P.af.prototype={}
P.aF.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aF&&this.a===b.a},
gi:function(a){return C.d.gi(this.a)},
h:function(a){var u,t,s,r=new P.cS(),q=this.a
if(q<0)return"-"+new P.aF(0-q).h(0)
u=r.$1(C.d.S(q,6e7)%60)
t=r.$1(C.d.S(q,1e6)%60)
s=new P.cR().$1(q%1e6)
return""+C.d.S(q,36e8)+":"+H.a(u)+":"+H.a(t)+"."+H.a(s)}}
P.cR.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:9}
P.cS.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:9}
P.aj.prototype={}
P.cB.prototype={
h:function(a){return"Assertion failed"}}
P.bl.prototype={
h:function(a){return"Throw of null."}}
P.a5.prototype={
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaT()+o+u
if(!q.a)return t
s=q.gaS()
r=P.bQ(q.b)
return t+s+": "+r}}
P.bn.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.a(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.a(s)
else if(t>s)u=": Not in range "+H.a(s)+".."+H.a(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.a(s)}return u}}
P.cY.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var u,t=H.U(this.b)
if(typeof t!=="number")return t.cu()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.a(u)},
gk:function(a){return this.f}}
P.dP.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.dN.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.br.prototype={
h:function(a){return"Bad state: "+H.a(this.a)}}
P.cK.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bQ(u)+"."}}
P.de.prototype={
h:function(a){return"Out of Memory"},
$iaj:1}
P.cd.prototype={
h:function(a){return"Stack Overflow"},
$iaj:1}
P.cP.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eb.prototype={
h:function(a){return"Exception: "+this.a}}
P.cW.prototype={
h:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.a(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.aj(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.w.prototype={}
P.J.prototype={
gk:function(a){var u,t=this.gP(this)
for(u=0;t.v();)++u
return u},
h:function(a){return P.ic(this,"(",")")}}
P.K.prototype={$iJ:1}
P.p.prototype={
gi:function(a){return P.n.prototype.gi.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.n.prototype={constructor:P.n,$in:1,
t:function(a,b){return this===b},
gi:function(a){return H.aO(this)},
h:function(a){return"Instance of '"+H.a(H.bm(this))+"'"},
toString:function(){return this.h(this)}}
P.aM.prototype={}
P.c6.prototype={$iaM:1}
P.A.prototype={}
P.dD.prototype={
ge9:function(){var u,t,s=this.b
if(s==null)s=H.U($.di.$0())
u=this.a
if(typeof s!=="number")return s.aM()
t=s-u
if($.fc===1000)return t
return C.d.S(t,1000)}}
P.r.prototype={$ih2:1}
P.bs.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.i.prototype={}
W.cy.prototype={
h:function(a){return String(a)}}
W.cz.prototype={
h:function(a){return String(a)}}
W.bK.prototype={}
W.ah.prototype={
bw:function(a,b,c){var u=a.getContext(b,P.iV(c))
return u},
ge3:function(a){return a.getContext("2d")},
$iah:1,
$ifO:1}
W.bN.prototype={$ibN:1}
W.ar.prototype={
gk:function(a){return a.length}}
W.bc.prototype={
gk:function(a){return a.length}}
W.cO.prototype={}
W.cQ.prototype={
h:function(a){return String(a)}}
W.bP.prototype={
h:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.q(b)
if(!u.$iaP)return!1
return a.left===u.gW(b)&&a.top===u.gX(b)&&a.width===u.gR(b)&&a.height===u.gO(b)},
gi:function(a){return W.hb(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gO:function(a){return a.height},
gW:function(a){return a.left},
gX:function(a){return a.top},
gR:function(a){return a.width},
$iaP:1,
$aaP:function(){return[P.m]}}
W.ai.prototype={
h:function(a){return a.localName},
gcl:function(a){return new W.cp(a,"click",!1,[W.E])},
$iai:1}
W.b.prototype={$ib:1}
W.aH.prototype={
cI:function(a,b,c,d){return a.addEventListener(b,H.b4(H.f(c,{func:1,args:[W.b]}),1),!1)},
dF:function(a,b,c,d){return a.removeEventListener(b,H.b4(H.f(c,{func:1,args:[W.b]}),1),!1)},
$iaH:1}
W.cV.prototype={
gk:function(a){return a.length}}
W.a0.prototype={$ia0:1,$ifO:1}
W.ak.prototype={$iak:1}
W.al.prototype={$ial:1}
W.bk.prototype={}
W.E.prototype={$iE:1}
W.S.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.cA(a):u},
bX:function(a,b){return a.appendChild(b)},
dE:function(a,b){return a.removeChild(b)},
$iS:1}
W.dw.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.an.prototype={$ian:1}
W.dK.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.fS(b,a,null,null,null))
return a[b]},
c2:function(a,b){if(b<0||b>=a.length)return H.c(a,b)
return a[b]},
$ibY:1,
$abY:function(){return[W.ab]},
$aa9:function(){return[W.ab]},
$iJ:1,
$aJ:function(){return[W.ab]},
$iK:1,
$aK:function(){return[W.ab]},
$abg:function(){return[W.ab]}}
W.az.prototype={}
W.dQ.prototype={$ifO:1}
W.ad.prototype={
ge7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.Y("deltaY is not supported"))},
ge6:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.Y("deltaX is not supported"))},
$iad:1}
W.bv.prototype={
dI:function(a,b){return a.requestAnimationFrame(H.b4(H.f(b,{func:1,ret:-1,args:[P.m]}),1))},
cX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cn.prototype={
h:function(a){return"Rectangle ("+H.a(a.left)+", "+H.a(a.top)+") "+H.a(a.width)+" x "+H.a(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.q(b)
if(!u.$iaP)return!1
return a.left===u.gW(b)&&a.top===u.gX(b)&&a.width===u.gR(b)&&a.height===u.gO(b)},
gi:function(a){return W.hb(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gO:function(a){return a.height},
gR:function(a){return a.width}}
W.e8.prototype={
aC:function(a,b,c,d){var u=H.d(this,0)
H.f(a,{func:1,ret:-1,args:[u]})
H.f(c,{func:1,ret:-1})
return W.x(this.a,this.b,a,!1,u)}}
W.cp.prototype={}
W.e9.prototype={
at:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.f(u,{func:1,args:[W.b]})
if(t)J.hX(r,s.c,u,!1)}s.b=null
s.sd1(null)
return},
sd1:function(a){this.d=H.f(a,{func:1,args:[W.b]})}}
W.ea.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ib"))},
$S:16}
W.bg.prototype={
gP:function(a){return new W.cU(a,a.length,[H.hw(this,a,"bg",0)])}}
W.cU.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.c(s,t)
u.sbN(s[t])
u.c=t
return!0}u.sbN(null)
u.c=s
return!1},
gw:function(){return this.d},
sbN:function(a){this.d=H.j(a,H.d(this,0))}}
W.cm.prototype={}
W.cs.prototype={}
W.ct.prototype={}
P.eN.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.ep.prototype={
eA:function(a){if(a<=0||a>4294967296)throw H.h(P.io("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$ijq:1}
P.a1.prototype={
h:function(a){return"Point("+H.a(this.a)+", "+H.a(this.b)+")"},
t:function(a,b){if(b==null)return!1
return!!J.q(b).$ia1&&this.a==b.gD(b)&&this.b==b.gY(b)},
gi:function(a){var u,t=J.aE(this.a),s=J.aE(this.b)
s=P.ha(P.ha(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
gD:function(a){return this.a},
gY:function(a){return this.b}}
P.e.prototype={
gcl:function(a){return new W.cp(a,"click",!1,[W.E])}}
P.bL.prototype={$ibL:1}
P.a8.prototype={$ia8:1}
P.c4.prototype={$ic4:1}
P.ax.prototype={
bq:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.q(g)
if(!!u.$ia0&&h==null&&t&&!0){this.dQ(a,b,c,d,e,f,g)
return}if(!!u.$iah&&h==null&&t&&!0){this.dR(a,b,c,d,e,f,g)
return}throw H.h(P.ag("Incorrect number or type of arguments"))},
aH:function(a,b,c,d,e,f,g){return this.bq(a,b,c,d,e,f,g,null,null,null)},
dQ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eH:function(a,b,c){return a.uniform1i(b,c)},
$iax:1}
P.ci.prototype={$ici:1}
P.bu.prototype={$ibu:1}
Y.cL.prototype={
e5:function(){var u,t,s,r,q,p,o,n,m,l=this,k=1280,j=4292072403,i=4278190080,h="left",g=4294967295,f=document,e=f.querySelector("#stage")
l.r=e
l.x=A.is(H.k(e,"$iah"),512,l.f,k)
e=K.fY()
u=H.l([],[A.F])
e=new A.dn(e,u,new R.aG("enterFrame",!1),new R.aI("exitFrame",!1))
e.a=!0
L.hf()
t=$.fG();(t&&C.a).j(t,e.gde())
l.y=e
t=l.x
s=t.ad
if(s!=null)if(C.a.aG(s.c,t))t.ad=null
t.ad=e
C.a.j(u,t)
e=J.fK(f.querySelector("#randomizeButton"))
u=H.d(e,0)
W.x(e.a,e.b,H.f(new Y.cM(l),{func:1,ret:-1,args:[u]}),!1,u)
f=J.fK(f.querySelector("#sortButton"))
u=H.d(f,0)
W.x(f.a,f.b,H.f(new Y.cN(l),{func:1,ret:-1,args:[u]}),!1,u)
u=A.aq(k,2,j)
f=$.u
$.u=f+1
e=[A.a6]
r=new A.W(u,f,H.l([],e),T.y())
r.d=512
l.x.q(r)
f=A.aq(k,2,j)
u=$.u
$.u=u+1
t=H.l([],e)
s=T.y()
l.x.q(new A.W(f,u,t,s))
f=A.aq(k,2,j)
u=$.u
$.u=u+1
q=new A.W(f,u,H.l([],e),T.y())
q.d=384
l.x.q(q)
f=A.aq(k,2,j)
u=$.u
$.u=u+1
p=new A.W(f,u,H.l([],e),T.y())
p.d=128
l.x.q(p)
o=Y.h6("Helvetica, Arial, sans-serif",18,i,h,!1,0,null,0,!1,0,0,0,i,0,0,!1,"top",400)
o.dx=o.db=5
f=Y.cg("",o)
f.k4=!1
f.sa7(0,!0)
f.sa8(0,g)
f.sa6(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=512
l.b=f
l.x.q(f)
f=Y.cg("",o)
f.k4=!1
f.sa7(0,!0)
f.sa8(0,g)
f.sa6(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=0
l.c=f
l.x.q(f)
f=Y.cg("",o)
f.k4=!1
f.sa7(0,!0)
f.sa8(0,g)
f.sa6(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=384
l.d=f
l.x.q(f)
f=Y.cg("",o)
f.k4=!1
f.sa7(0,!0)
f.sa8(0,g)
f.sa6(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=128
l.e=f
l.x.q(f)
l.c1()
l.x.q(l.a)
f=A.aq(k,2,i)
u=$.u
$.u=u+1
n=new A.W(f,u,H.l([],e),T.y())
n.d=256
l.x.q(n)
m=Y.cg("0",o)
m.k4=!1
m.sa7(0,!0)
m.sa8(0,g)
m.sa6(h)
m.e=0
m.id=!0
m.f=9
m.c=30
m.d=256
l.x.q(m)},
c1:function(){var u=this,t=document,s=P.eT(H.eU(t.querySelector("#maxValueInput"),"$iak").value),r=P.eT(H.eU(t.querySelector("#minValueInput"),"$iak").value),q=P.eT(H.eU(t.querySelector("#amountInput"),"$iak").value)
if(typeof s!=="number")return s.bx()
if(s>999999)s=999999
else if(s<-999999)s=-999999
if(typeof r!=="number")return r.bx()
if(r>999999)r=999999
else if(r<-999999)r=-999999
u.b.sah(0,""+r)
u.c.sah(0,""+s)
u.d.sah(0,H.a(r/2))
u.e.sah(0,H.a(s/2))
if(typeof q!=="number")return q.bx()
if(q>1024)q=1024
else if(q<0)q=0
u.a.ey(s,r,q)}}
Y.cM.prototype={
$1:function(a){H.k(a,"$iE")
this.a.c1()},
$S:10}
Y.cN.prototype={
$1:function(a){var u
H.k(a,"$iE")
u=P.eT(H.eU(document.querySelector("#durationValueInput"),"$iak").value)
if(typeof u!=="number")return u.ct()
if(u<=0)u=100
this.a.a.a0(u)},
$S:10}
Z.cT.prototype={
ey:function(a,b,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.eB()
u=c.u
C.a.sk(u,0)
t=c.H
C.a.sk(t,0)
for(s=a0+1,r=[A.a6],q=1024/a0*0.5,p=c.ad,o=a-b,n=b!==a,m=a===b,l=Math.abs(b),k=0;k<a0;){j=!n||m?a:b+p.eA(o)
i=Math.abs(j)
if(i<1)h=1
else{if(i<=a)if(i<a)g=j===0?1/j<0:j<0
else g=!1
else g=!0
h=g?i/l*256:i/a*256}f=A.aq(q,h,4278255487)
i=$.u
$.u=i+1
e=new A.W(f,i,H.l([],r),T.y())
d=e.gL()
e.e=e.gJ().aI(d,d).c/2
e.id=!0
if(j>=0){d=e.gL()
e.f=e.gJ().aI(d,d).d
e.id=!0}else e.f=-2;++k
e.c=128+k/s*1024
e.d=256
c.q(e)
C.a.j(u,j)
C.a.j(t,e)}},
b4:function(a,b,c){var u,t,s,r,q,p,o=this,n=o.H,m=n.length
if(a>=m)return H.c(n,a)
u=n[a]
t=u.c
if(b>=m)return H.c(n,b)
s=n[b].c
u.cx=!1
m=u.gM().c
if(a>=n.length)return H.c(n,a)
m=A.aq(m,n[a].gM().d,c)
u=$.u
$.u=u+1
r=[A.a6]
C.a.p(n,a,new A.W(m,u,H.l([],r),T.y()))
if(a>=n.length)return H.c(n,a)
u=n[a]
u.e=u.gM().c/2
u.id=!0
m=o.u
if(a>=m.length)return H.c(m,a)
u=m[a]
q=n.length
if(u>=0){if(a>=q)return H.c(n,a)
u=n[a]
u.f=u.gM().d
u.id=!0}else{if(a>=q)return H.c(n,a)
u=n[a]
u.f=-2
u.id=!0}if(a>=n.length)return H.c(n,a)
u=n[a]
u.c=t
u.id=!0
u.d=256
p=o.gag()
u=p instanceof A.F?p:null
if(a>=n.length)return H.c(n,a)
u.q(n[a])
u=n.length
if(a>=u)return H.c(n,a)
n[a].cx=!0
if(b>=u)return H.c(n,b)
u=n[b]
u.cx=!1
u=u.gM().c
if(b>=n.length)return H.c(n,b)
u=A.aq(u,n[b].gM().d,c)
q=$.u
$.u=q+1
C.a.p(n,b,new A.W(u,q,H.l([],r),T.y()))
if(b>=n.length)return H.c(n,b)
r=n[b]
r.e=r.gM().c/2
r.id=!0
if(b>=m.length)return H.c(m,b)
m=m[b]
u=n.length
if(m>=0){if(b>=u)return H.c(n,b)
m=n[b]
m.f=m.gM().d
m.id=!0}else{if(b>=u)return H.c(n,b)
m=n[b]
m.f=-2
m.id=!0}if(b>=n.length)return H.c(n,b)
m=n[b]
m.c=s
m.id=!0
m.d=256
p=o.gag()
m=p instanceof A.F?p:null
if(b>=n.length)return H.c(n,b)
m.q(n[b])
if(b>=n.length)return H.c(n,b)
n[b].cx=!0},
aN:function(a,b){var u=0,t=P.fo(null),s,r=this,q,p,o,n,m,l,k
var $async$aN=P.fp(function(c,d){if(c===1)return P.fg(d,t)
while(true)switch(u){case 0:l=r.u
k=l.length
if(a>=k){s=H.c(l,a)
u=1
break}q=l[a]
if(b>=k){s=H.c(l,b)
u=1
break}k=l[b]
if(a<0||a>=l.length){s=H.c(l,a)
u=1
break}l[a]=k
if(b<0||b>=l.length){s=H.c(l,b)
u=1
break}l[b]=q
l=r.H
k=l.length
if(a>=k){s=H.c(l,a)
u=1
break}p=l[a]
if(b>=k){s=H.c(l,b)
u=1
break}k=l[b]
if(a<0||a>=l.length){s=H.c(l,a)
u=1
break}l[a]=k
C.a.p(l,b,p)
k=l.length
if(a>=k){s=H.c(l,a)
u=1
break}o=l[a]
n=o.c
if(b>=k){s=H.c(l,b)
u=1
break}m=l[b]
o.c=m.c
o.id=!0
if(b>=k){s=H.c(l,b)
u=1
break}m.c=n
m.id=!0
case 1:return P.fh(s,t)}})
return P.fi($async$aN,t)},
a0:function(a){var u=0,t=P.fo(null),s,r=this,q,p,o,n,m,l
var $async$a0=P.fp(function(b,c){if(b===1)return P.fg(c,t)
while(true)switch(u){case 0:q=r.u,p=0
case 3:if(!(p<q.length-1)){u=5
break}o=0
case 6:if(!(o<q.length-p-1)){u=8
break}n=o+1
r.b4(o,n,4287090426)
u=9
return P.ff(P.f6(P.f2(a),null),$async$a0)
case 9:m=q.length
if(o>=m){s=H.c(q,o)
u=1
break}l=q[o]
if(n>=m){s=H.c(q,n)
u=1
break}m=q[n]
u=l>m?10:11
break
case 10:r.b4(o,n,4292571283)
u=12
return P.ff(P.f6(P.f2(a),null),$async$a0)
case 12:H.hA(""+l+" is larger than "+m)
r.aN(o,n)
case 11:u=13
return P.ff(P.f6(P.f2(a),null),$async$a0)
case 13:r.b4(o,n,4278255487)
case 7:o=n
u=6
break
case 8:case 4:++p
u=3
break
case 5:case 1:return P.fh(s,t)}})
return P.fi($async$a0,t)}}
K.dT.prototype={}
K.d2.prototype={
as:function(a){var u,t,s,r=this,q=r.c+=a
r.d.j(0,q)
u=r.a
t=r.b
for(;u!==t;){s=u.b
u.a=s.geN()
u.b=s.geT()}return!0},
$ijh:1}
A.W.prototype={
gL:function(){var u=this.k3
return new U.D(0,0,u.a,u.b,[P.m])},
V:function(a,b){if(a<0||a>=this.k3.a)return
if(b<0||b>=this.k3.b)return
return this},
ae:function(a){a.c.a2(a,this.k3.c)}}
A.a_.prototype={}
A.cF.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ia0")
u=new L.bp(C.x)
u.a=V.bH(a.width)
u.b=V.bH(a.height)
u.c=a
t=u.gaF().aJ(this.a)
s=t.c
r=t.e
return new A.a_(s.c/r,s.d/r,t)},
$S:18}
A.cC.prototype={
cC:function(a,b){var u,t,s,r,q,p,o,n,m,l=this
l.b=l.a=a
l.c=1
u=P.h3("@(\\d+(.\\d+)?)x").ek(l.a)
if(u!=null){t=u.b
if(2>=t.length)return H.c(t,2)
s=t[2]
if(s==null)s="."
r=P.iW(t[1])
q=C.a.em(b,0,new A.cD($.fI()),P.m)
p=J.i_(q,s.length-1)
t=t.index+1
s=u.gav()
o=P.ip(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
l.b=n+p+m
if(typeof r!=="number")return H.T(r)
l.c=q/r}}}
A.cD.prototype={
$2:function(a,b){var u
H.eY(a)
H.eY(b)
u=this.a
if(typeof a!=="number")return a.aM()
if(typeof u!=="number")return H.T(u)
if(typeof b!=="number")return b.aM()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:19}
A.cE.prototype={}
A.a6.prototype={}
A.I.prototype={
gD:function(a){return this.c},
sD:function(a,b){this.c=b
this.id=!0},
gag:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gJ:function(){var u=this
if(u.id){u.id=!1
u.go.ai(1,0,0,1,u.c-u.e,u.d-u.f)}return u.go},
gL:function(){return new U.D(0,0,0,0,[P.m])},
gM:function(){var u=this.gL()
return this.gJ().aI(u,u)},
E:function(a,b){var u,t=[P.m]
H.t(a,"$iz",t,"$az")
H.t(b,"$iz",t,"$az")
u=!!b.$iz?b:new U.z(0,0,t)
u.sD(0,a.a)
u.sY(0,a.b)
this.bP(u)
return u},
bP:function(a){var u,t,s,r,q,p=[P.m]
H.t(a,"$iz",p,"$az")
u=this.fy
if(u!=null)u.bP(a)
t=!!a.$iz?a:new U.z(0,0,p)
s=a.a
r=a.b
q=this.gJ()
p=q.a
t.sD(0,(p[3]*(s-p[4])-p[2]*(r-p[5]))/q.gb8())
t.sY(0,(p[0]*(r-p[5])-p[1]*(s-p[4]))/q.gb8())},
l:function(a,b){var u,t,s,r,q=this,p=H.l([],[R.bR])
for(u=q.fy;u!=null;u=u.fy)C.a.j(p,u)
t=p.length-1
while(!0){if(!(t>=0&&b.gbY()))break
if(t<0||t>=p.length)return H.c(p,t)
p[t].b9(b,q,C.r);--t}q.b9(b,q,C.T)
s=b.b
t=0
while(!0){r=p.length
if(!(t<r&&s))break
if(t>=r)return H.c(p,t)
p[t].b9(b,q,C.U);++t}},
ae:function(a){},
sb_:function(a){this.fy=H.t(a,"$if1",[A.I],"$af1")},
$ijr:1}
A.bd.prototype={
q:function(a){var u,t,s,r,q=this
if(a===q)throw H.h(P.ag("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===q)q.cJ(a)
else{if(u!=null){t=u.A
s=C.a.eq(t,a)
u.cQ(a)
C.a.bn(t,s)}q.dS(a)
C.a.j(q.A,a)
a.sb_(q)
a.l(0,new R.L("added",!0))
r=q.gag()
if((r instanceof A.F?r:null)!=null)q.aR(a,"addedToStage")}}},
eB:function(){var u,t,s,r,q="The supplied index is out of bounds.",p=this.A,o=p.length,n=o-1
if(0<=n){if(0<o)u=n>=o
else u=!0
if(u)throw H.h(P.ag(q))
else{t=0
while(!0){if(!(t<=n&&0<p.length))break
u=p.length
if(0>=u)H.G(P.ag(q))
else{s=p[0]
s.l(0,new R.L("removed",!0))
r=this.gag()
if((r instanceof A.F?r:null)!=null)this.aR(s,"removedFromStage")
s.sb_(null)
C.a.bn(p,0)}++t}}}},
gL:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this.A
if(j.length===0)return A.I.prototype.gL.call(this)
for(u=1/0,t=1/0,s=-1/0,r=-1/0,q=0;q<j.length;++q){p=j[q]
o=p.gL()
o=p.gJ().aI(o,o)
n=o.a
if(n<u)u=n
m=o.b
if(m<t)t=m
p=H.d(o,0)
l=H.j(n+o.c,p)
if(l>s)s=l
k=H.j(m+o.d,p)
if(k>r)r=k}return new U.D(u,t,s-u,r-t,[P.m])},
V:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
for(u=this.A,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.c(u,t)
r=u[t]
q=r.gJ()
if(r.cx&&!0){p=q.a
o=a-p[4]
n=b-p[5]
m=p[3]
l=p[2]
k=p[0]
p=p[1]
j=k*m-p*l
i=r.V((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
if(!!i.$ibT&&i.k4)return i
s=this}}return s},
ae:function(a){var u,t,s
for(u=this.A,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.bo(s)}},
dS:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.h(P.ag("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
cJ:function(a){var u,t,s,r=this.A
for(u=r.length-1,t=a;u>=0;--u,t=s){if(u>=r.length)return H.c(r,u)
s=r[u]
C.a.p(r,u,t)
if(a===s)break}},
cQ:function(a){var u
a.l(0,new R.L("removed",!0))
u=this.gag()
if((u instanceof A.F?u:null)!=null)this.aR(a,"removedFromStage")
a.sb_(null)},
aR:function(a,b){var u=!1,t=this
while(!0){if(!(t!=null&&!u))break
if(t.bk(b,!0))u=!0
t=t.fy}this.bO(a,new R.L(b,!1),u)},
bO:function(a,b,c){var u,t,s=!c
if(!s||a.eo(b.a))a.l(0,b)
if(!!a.$ibd){c=!s||a.bk(b.a,!0)
u=a.A
for(t=0;t<u.length;++t)this.bO(u[t],b,c)}},
$if1:1,
$af1:function(){return[A.I]}}
A.bT.prototype={}
A.dn.prototype={
as:function(a){var u,t=this
t.f+=a
R.fj(t.d,$.fE(),R.aG)
t.b.as(a)
u=t.c
C.a.U(u,new A.dp(a))
C.a.U(u,new A.dq(t,a))
R.fj(t.e,$.fF(),R.aI)}}
A.dp.prototype={
$1:function(a){H.k(a,"$iF").ec.as(this.a)
return!0},
$S:20}
A.dq.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iF")
u=this.a.f
t=a.aw
if(t!==C.m)t=t===C.G
else t=!0
if(t){s=new P.dD()
if($.fc==null){H.ik()
$.fc=$.dh}t=H.U($.di.$0())
if(typeof t!=="number")return t.aM()
s.a=t-0
s.b=null
a.bV()
R.fj(a.ea,$.fH(),R.aS)
a.H.af(0)
t=a.H
r=t.a
r.c=r.b=r.a=0
t.b5(0,a.bc)
a.N.cp(0,a.cj)
V.Z(u)
a.N.b=V.Z(this.b)
a.N.bo(a)
a.N.c.F(0)
u=a.eh=!1
q=a.H.a
p=s.ge9()
a.bg=a.bg*0.75+q.a*0.25
a.bh=a.bh*0.75+q.b*0.25
a.bi=a.bi*0.75+q.c*0.25
a.bf=a.bf*0.95+p*0.05
t=a.T
if(t.cx){t.toString
u=!0}if(u){C.a.sk(t.r2,0)
t.ry=t.rx=0
a.T.aE(0,"FRAMETIME"+C.c.aD(C.d.h(C.b.m(a.bf)),6))
a.T.aE(0,"DRAWCALLS"+C.c.aD(C.d.h(C.b.m(a.bg)),6))
a.T.aE(0,"VERTICES"+C.c.aD(C.d.h(C.b.m(a.bh)),7))
a.T.aE(0,"INDICES"+C.c.aD(C.d.h(C.b.m(a.bi)),8))
a.N.cp(0,a.c3)
a.N.bo(a.T)
a.N.c.F(0)}}if(a.aw===C.G)a.aw=C.a_
return},
$S:21}
A.bq.prototype={
h:function(a){return this.b}}
A.aU.prototype={
h:function(a){return this.b}}
A.X.prototype={
h:function(a){return this.b}}
A.F.prototype={
cD:function(a,b,c,d){var u,t,s,r=this,q=a.tabIndex
if(typeof q!=="number")return q.ct()
if(q<=0)a.tabIndex=1
q=a.style
if(q.outline==="")q.outline="none"
r.bc=c.f
r.ee=r.ed=!0
r.eg=r.ef=!1
r.u=a
r.c5=C.i
r.c4=C.n
r.aw=C.m
r.ba=C.k
r.ce=V.bH(d)
r.cf=V.bH(b)
r.az=V.j8(5,$.fI())
q=r.cU(a,c)
r.H=q
r.N=L.iq(q)
q=H.l([],[L.aw])
u=T.y()
t=H.l([],[P.r])
s=$.u
$.u=s+1
s=new A.ce(q,u,t,s,H.l([],[A.a6]),T.y())
A.i3("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").br(s.gcM(),-1)
s.cx=!1
r.T=s
P.ja("StageXL render engine : "+r.H.gco().h(0))
q=W.al
u=H.f(r.gdm(),{func:1,ret:-1,args:[q]})
W.x(a,"keydown",u,!1,q)
W.x(a,"keyup",u,!1,q)
W.x(a,"keypress",u,!1,q)
q=r.ba
if(q===C.k||q===C.t){q=W.E
u=H.f(r.gds(),{func:1,ret:-1,args:[q]})
W.x(a,"mousedown",u,!1,q)
W.x(a,"mouseup",u,!1,q)
W.x(a,"mousemove",u,!1,q)
W.x(a,"mouseout",u,!1,q)
W.x(a,"contextmenu",u,!1,q)
W.fR(a)
q=W.ad
W.x(a,H.V(W.fR(a)),H.f(r.gdu(),{func:1,ret:-1,args:[q]}),!1,q)}q=r.ba
if((q===C.V||q===C.t)&&H.bF($.hU())){q=W.an
u=H.f(r.gdA(),{func:1,ret:-1,args:[q]})
W.x(a,"touchstart",u,!1,q)
W.x(a,"touchend",u,!1,q)
W.x(a,"touchmove",u,!1,q)
W.x(a,"touchenter",u,!1,q)
W.x(a,"touchleave",u,!1,q)
W.x(a,"touchcancel",u,!1,q)}$.hH().ew(new A.dB(r))
r.b2()
r.bV()
r.H.b5(0,r.bc)},
V:function(a,b){var u=this.bD(a,b)
return u!=null?u:this},
cU:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.a
if(e===C.l)try{e=new T.aN(new Float32Array(16))
e.a3()
u=H.l([],[L.er])
t=P.r
s=[t,P.w]
r=[t,P.bu]
q=new Int16Array(0)
q=new L.dr(new H.M(s),new H.M(r),new L.aQ(q),new L.aR(new Float32Array(0)),new L.am())
p=new Int16Array(0)
o=new Float32Array(0)
n=new Int16Array(0)
m=new Float32Array(0)
l=new Int16Array(16384)
k=new Float32Array(32768)
j=new Array(8)
j.fixed$length=Array
j=H.l(j,[L.bp])
i=H.l([],[L.ca])
h=L.av
h=new L.c8(a,e,u,q,new L.ds(new H.M(s),new H.M(r),new L.aQ(p),new L.aR(o),new L.am()),new L.dt(new H.M(s),new H.M(r),new L.aQ(n),new L.aR(m),new L.am()),new L.aQ(l),new L.aR(k),j,i,new H.M([t,L.bo]),new L.am(),P.ay(h),P.ay(h))
i=P.a8
j={func:1,ret:-1,args:[i]}
W.x(a,"webglcontextlost",H.f(h.gd7(),j),!1,i)
W.x(a,"webglcontextrestored",H.f(h.gd9(),j),!1,i)
b=P.ih(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t,null)
g=C.j.bw(a,"webgl",b)
g=H.k(g==null?C.j.bw(a,"experimental-webgl",b):g,"$iax")
if(!J.q(g).$iax)H.G(P.aV("Failed to get WebGL context."))
h.e=g
g.enable(3042)
h.e.disable(2960)
h.e.disable(2929)
h.e.disable(2884)
h.e.pixelStorei(37441,1)
h.e.blendFunc(1,771)
h.x=q
q.a5(h)
h.cx=$.dl=$.dl+1
h.af(0)
return h}catch(f){H.a4(f)
e=T.y()
u=L.av
u=new L.c7(a,a.getContext("2d"),e,C.f,new L.am(),P.ay(u),P.ay(u))
u.af(0)
return u}else if(e===C.w){e=T.y()
u=L.av
u=new L.c7(a,a.getContext("2d"),e,C.f,new L.am(),P.ay(u),P.ay(u))
u.af(0)
return u}else throw H.h(P.aV("Unknown RenderEngine"))},
bV:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.ce,h=j.cf,g=j.u.getBoundingClientRect(),f=j.u,e=f.clientLeft,d=C.b.m(g.left)
if(typeof e!=="number")return e.K()
u=f.clientTop
t=C.b.m(g.top)
if(typeof u!=="number")return u.K()
s=f.clientWidth
r=f.clientHeight
if(s===0||r===0)return
if(typeof s!=="number")return s.bv()
q=s/i
if(typeof r!=="number")return r.bv()
p=r/h
switch(j.c4){case C.a0:o=p
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
o=1}f=j.c5
switch(f){case C.B:case C.D:case C.y:m=0
break
case C.z:case C.i:case C.E:m=(s-i*n)/2
break
case C.A:case C.C:case C.F:m=s-i*n
break
default:m=0}switch(f){case C.y:case C.z:case C.A:l=0
break
case C.B:case C.i:case C.C:l=(r-h*o)/2
break
case C.D:case C.E:case C.F:l=r-h*o
break
default:l=0}f=j.ei
f.sW(0,-m/n)
f.sX(0,-l/o)
f.sR(0,s/n)
f.sO(0,r/o)
f=j.cj
f.ai(n,0,0,o,m,l)
k=j.az
f.aL(0,k,k)
k=j.aA
k.ai(1,0,0,1,-(e+d)-m,-(u+t)-l)
k.aL(0,1/n,1/o)
k=j.c3
k.ck()
t=j.az
k.aL(0,t,t)
if(j.cg!==s||j.ci!==r){j.cg=s
j.ci=r
f=j.u
e=j.az
if(typeof e!=="number")return H.T(e)
f.width=C.b.m(s*e)
f.height=C.b.m(r*e)
if(f.clientWidth!==s||f.clientHeight!==r){f=f.style
e=""+s+"px"
f.width=e
f=j.u.style
e=""+r+"px"
f.height=e}j.l(0,new R.L("resize",!1))}},
b2:function(){var u,t,s,r,q,p,o,n=this,m="default",l=n.bb
if(l!=null&&!0)l.toString
if(n.c6!=="default"){n.c6=m
u=n.u.style
if($.fB().c_(m)){t=$.fB().n(0,m)
s=C.u.geU(t)
r=t.gep()
q=r.gD(r)
r=t.gep()
p=r.gY(r)
o="url('"+H.a(s)+"') "+H.a(q)+" "+H.a(p)+", default"}else o=m
u.cursor=o}},
dt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
H.k(a,"$iE")
a.preventDefault()
u=Date.now()
t=a.button
s=P.m
r=b.aA.bt(new P.a1(a.clientX,a.clientY,[s]))
q=new U.z(0,0,[s])
if(typeof t!=="number")return t.cu()
if(t<0||t>2)return
if(a.type==="mousemove"&&b.c7.t(0,r))return
s=b.eb
if(t<0||t>=3)return H.c(s,t)
p=s[t]
b.sd4(r)
C.a.U(b.c8,new A.dy(r))
if(a.type!=="mouseout")o=b.V(r.a,r.b)
else{b.l(0,new R.L("mouseLeave",!1))
o=null}n=b.bb
if(n!=o){s=[A.I]
m=H.l([],s)
l=H.l([],s)
for(k=n;k!=null;k=k.fy)C.a.j(m,k)
for(k=o;k!=null;k=k.fy)C.a.j(l,k)
for(s=m.length,j=l.length,i=0;!0;++i){if(i===s)break
if(i===j)break
h=s-i-1
if(h<0)return H.c(m,h)
g=m[h]
h=j-i-1
if(h<0)return H.c(l,h)
if(g!==l[h])break}if(n!=null){n.E(r,q)
n.l(0,new R.N(q.a,q.b,"mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.E(r,q)
e.l(0,new R.N(q.a,q.b,"rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.c(l,f)
e=l[f]
e.E(r,q)
e.l(0,new R.N(q.a,q.b,"rollOver",!1))}if(o!=null){o.E(r,q)
o.l(0,new R.N(q.a,q.b,"mouseOver",!0))}b.bb=o}b.b2()
if(a.type==="mousedown"){b.u.focus()
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
if(d!=null&&o!=null){o.E(r,q)
o.l(0,new R.N(q.a,q.b,d,!0))
if(c)o.l(0,new R.N(q.a,q.b,p.c,!0))}},
dv:function(a){var u,t,s,r,q
H.k(a,"$iad")
u=P.m
t=this.aA.bt(new P.a1(a.clientX,a.clientY,[u]))
s=new U.z(0,0,[u])
r=this.V(t.a,t.b)
r.E(t,s)
u=s.a
q=s.b;(a&&C.H).ge6(a)
C.H.ge7(a)
r.l(0,new R.N(u,q,"mouseWheel",!0))},
dB:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
H.k(b4,"$ian")
b4.preventDefault()
u=b4.type
for(t=b4.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=b3.c9,m=b3.c8,l=P.m,k=[l],j=b3.aA,l=[l],i=[A.I],h=0;h<t.length;t.length===s||(0,H.fz)(t),++h){g=t[h]
f=g.identifier
e=j.bt(new P.a1(C.b.m(g.clientX),C.b.m(g.clientY),k))
d=new U.z(0,0,l)
c=b3.bD(e.a,e.b)
c=c!=null?c:b3
b=n.cn(f,new A.dz(b3,c))
a=b.a
b.b
C.a.U(m,new A.dA(a,e))
a0=b.d
if(a0!==c){a1=H.l([],i)
a2=H.l([],i)
for(a3=a0;a3!=null;a3=a3.fy)C.a.j(a1,a3)
for(a3=c;a3!=null;a3=a3.fy)C.a.j(a2,a3)
for(a4=a1.length,a5=a2.length,a6=0;!0;++a6){if(a6===a4)break
if(a6===a5)break
a7=a4-a6-1
if(a7<0)return H.c(a1,a7)
a8=a1[a7]
a7=a5-a6-1
if(a7<0)return H.c(a2,a7)
if(a8!==a2[a7])break}if(a0!=null){a0.E(e,d)
a0.l(0,new R.ao(d.a,d.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.E(e,d)
b0.l(0,new R.ao(d.a,d.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.c(a2,a9)
b0=a2[a9]
b0.E(e,d)
b0.l(0,new R.ao(d.a,d.b,"touchRollOver",!1))}c.E(e,d)
c.l(0,new R.ao(d.a,d.b,"touchOver",!0))
b.d=c}if(o){b3.u.focus()
n.p(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.aG(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.aG(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.E(e,d)
c.l(0,new R.ao(d.a,d.b,b1,!0))
if(b2)c.l(0,new R.ao(d.a,d.b,"touchTap",!0))}}},
dn:function(a){H.k(a,"$ial")
return},
sd4:function(a){this.c7=H.t(a,"$iz",[P.m],"$az")}}
A.dB.prototype={
$1:function(a){H.V(a)
return this.a.b2()},
$S:26}
A.dy.prototype={
$1:function(a){return H.k(a,"$iaA").eJ(0,this.a)},
$S:11}
A.dz.prototype={
$0:function(){var u=this.b,t=this.a.c9.a,s=$.hc
$.hc=s+1
return new A.b1(s,t===0,u,u)},
$S:28}
A.dA.prototype={
$1:function(a){return H.k(a,"$iaA").eJ(this.a,this.b)},
$S:11}
A.ce.prototype={
aE:function(a,b){var u,t,s=this
C.a.j(s.r2,b)
u=b.length
t=s.rx
s.rx=u>t?u:t;++s.ry},
ae:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.l(0,new R.L("Update",!1))
for(u=i.k4,t=a.c,s=i.r1,r=i.r2,q=0;q<i.ry;++q)for(p=q*14,o=0;o<i.rx;++o){if(q>=r.length)return H.c(r,q)
n=r[q]
m=o<n.length?C.c.ak(n,o)-32:0
if(m<0||m>=64)m=0
s.ai(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.y()
j=new T.aN(new Float32Array(16))
j.a3()
k=l.f=new L.bw(C.f,n,j,l)}k.c.c0(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.c(u,m)
t.a2(a,u[m])
a.e=a.e.e}},
cN:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=H.k(b3,"$ia_").c,b2=b1.a
b2.sej(C.Z)
for(u=[P.w],t=this.k4,s=[P.m],r=b1.e,q=0*r,p=b1.d,o=b1.b,n=H.d(o,0),b1=b1.c,m=0;m<64;++m){l=m*7
k=H.t(new U.D(l,0,7,14,u),"$iD",s,"$aD")
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
b=C.d.cv(p,4)
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
a6=0}a7=V.eM(a2,h,f)
a8=V.eM(a4,g,e)
a=V.eM(a5,h,f)
a0=V.eM(a6,g,e)
if(b===0){a9=a2-a7
b0=a4-a8}else if(b===1){a9=a4-a8
b0=a-a5}else if(b===2){a9=a-a5
b0=a6-a0}else if(b===3){a9=a0-a6
b0=a7-a2}else{a9=0
b0=0}C.a.j(t,L.fb(b2,new U.D(a7,a8,a-a7,a0-a8,u),new U.D(a9,b0,l,k,u),b,r))}}}
A.dx.prototype={}
A.b0.prototype={}
A.b1.prototype={}
A.aA.prototype={}
L.cG.prototype={}
L.aQ.prototype={}
L.aR.prototype={
a9:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.c9.prototype={
h:function(a){return this.b}}
L.av.prototype={}
L.dk.prototype={}
L.c7.prototype={
gco:function(){return C.w},
af:function(a){var u,t=this
t.bz(0,t.f)
t.r=C.f
u=t.e
u.globalCompositeOperation="source-over"
u.globalAlpha=t.x=1},
b5:function(a,b){var u,t,s,r=this
r.bz(0,r.f)
r.r=C.f
u=r.e
u.globalCompositeOperation="source-over"
u.globalAlpha=r.x=1
t=b>>>24&255
if(t<255){s=r.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.ft(b)
s=r.d
u.fillRect(0,0,s.width,s.height)}},
F:function(a){},
a2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
H.k(a,"$iaT")
H.k(b,"$iaw")
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
bz:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.c8.prototype={
gco:function(){return C.l},
af:function(a){var u=this,t=u.d,s=t.width,r=t.height
u.y=null
u.e.bindFramebuffer(36160,null)
u.e.viewport(0,0,s,r)
t=u.f
t.a3()
if(typeof s!=="number")return H.T(s)
if(typeof r!=="number")return H.T(r)
t.cw(0,2/s,-2/r,1)
t.eF(0,-1,1,0)
u.x.scm(t)},
b5:function(a,b){var u,t=this
C.a.sk(t.d0(),0)
t.dU(null)
t.dV(0)
u=(b>>>24&255)/255
t.e.colorMask(!0,!0,!0,!0)
t.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
t.e.clear(17408)},
F:function(a){this.x.F(0)},
a2:function(a,b){var u,t=this
H.k(a,"$iaT")
H.k(b,"$iaw")
u=t.cy
t.dY(u)
t.dX(a.e.b)
t.ar(b.a)
u.a2(a,b)},
dY:function(a){var u=this,t=u.x
if(a!==t){t.F(0)
u.x=a
a.a5(u)
u.x.scm(u.f)}},
dX:function(a){var u=this
if(a!==u.Q){u.x.F(0)
u.Q=a
u.e.blendFunc(1,771)}},
ar:function(a){var u,t,s,r=this,q=3553,p=6408,o=r.fx
if(a!==o[0]){r.x.F(0)
C.a.p(o,0,a)
o=a.y
u=r.cx
if(o!==u){a.x=r
a.y=u
o=r.e
a.Q=o
a.ch=o.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)
o=H.bF(a.Q.isEnabled(3089))
if(o)a.Q.disable(3089)
u=a.c
t=a.Q
s=t&&C.h
if(u!=null){s.aH(t,q,0,p,p,5121,u)
a.z=a.Q.getError()===1281}else s.bq(t,q,0,p,a.a,a.b,0,p,5121,null)
if(a.z){u=a.a
u=W.bM(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.h).aH(u,q,0,p,p,5121,a.d)}if(o)a.Q.enable(3089)
a.Q.texParameteri(q,10242,33071)
a.Q.texParameteri(q,10243,33071)
a.Q.texParameteri(q,10241,a.e.a)
a.Q.texParameteri(q,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)}}},
d0:function(){var u=this.y
return u instanceof L.ca?u.r:this.r},
dV:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
dU:function(a){this.e.disable(3089)},
d8:function(a){H.k(a,"$ia8").preventDefault()
this.b.j(0,new L.av())},
da:function(a){H.k(a,"$ia8")
this.cx=$.dl=$.dl+1
this.c.j(0,new L.av())}}
L.dm.prototype={}
L.ca.prototype={}
L.eH.prototype={
$1:function(a){var u,t,s,r,q
H.eY(a)
if(typeof a!=="number")return a.bv()
u=a/1000
t=u-$.hg
$.hg=u
$.fk=-1
L.hf()
s=$.fG()
s=H.l(s.slice(0),[H.d(s,0)])
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.fz)(s),++q)s[q].$1(t)},
$S:31}
L.cb.prototype={
df:function(a){var u
H.eY(a)
if(this.a){if(typeof a!=="number")return a.eL()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.as(a)}}
L.er.prototype={}
L.bo.prototype={
scm:function(a){var u=this.e.n(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
a5:function(a){var u,t,s=this,r=s.a,q=a.cx
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
r=s.cT(s.b)
s.c=r
s.dT(s.b,r)
s.dW(s.b,s.c)}s.b.useProgram(s.c)},
F:function(a){var u,t,s,r=this,q=r.f,p=q.c
if(p>0&&r.r.c>0){u=q.a.buffer
u.toString
H.he(u,0,p)
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
H.he(u,0,s)
t=new Float32Array(u,0,s)
q.r.bufferSubData(34962,0,t)
u=q.x
u.b=u.b+q.d
q=r.r
q.d=q.c=0
r.b.drawElements(4,p,5123,0);++r.x.a}},
cT:function(a){var u=this,t=a.createProgram(),s=u.bM(a,u.gbu(),35633),r=u.bM(a,u.gbj(),35632)
a.attachShader(t,s)
a.attachShader(t,r)
a.linkProgram(t)
if(a.getProgramParameter(t,35714)===!0)return t
throw H.h(P.aV(H.bF(a.isContextLost())?"ContextLost":a.getProgramInfoLog(t)))},
bM:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.h(P.aV(H.bF(a.isContextLost())?"ContextLost":a.getShaderInfoLog(u)))},
dT:function(a,b){var u,t,s,r,q=this.d
q.bZ(0)
u=H.U(a.getProgramParameter(b,35721))
if(typeof u!=="number")return H.T(u)
t=0
for(;t<u;++t){s=a.getActiveAttrib(b,t)
r=a.getAttribLocation(b,s.name)
a.enableVertexAttribArray(r)
q.p(0,s.name,r)}},
dW:function(a,b){var u,t,s,r,q=this.e
q.bZ(0)
u=H.U(a.getProgramParameter(b,35718))
if(typeof u!=="number")return H.T(u)
t=0
for(;t<u;++t){s=a.getActiveUniform(b,t)
r=a.getUniformLocation(b,s.name)
q.p(0,s.name,r)}}}
L.dr.prototype={
gbu:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbj:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
a5:function(a){var u,t=this
t.bE(a)
u=t.b;(u&&C.h).eH(u,t.e.n(0,"uSampler"),0)
u=t.d
t.r.a9(u.n(0,"aVertexPosition"),2,20,0)
t.r.a9(u.n(0,"aVertexTextCoord"),2,20,8)
t.r.a9(u.n(0,"aVertexAlpha"),1,20,16)},
a2:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
H.k(a3,"$iaT")
H.k(a4,"$iaw")
a4.z
u=a3.e
t=u.a
s=u.c
r=a4.r
u=a2.f
q=u.a
p=q.length
if(u.c+6>=p)a2.F(0)
u=a2.r
o=u.a
n=o.length
if(u.c+20>=n)a2.F(0)
u=a2.f
m=u.c
l=a2.r
k=l.c
j=l.d
if(m>=p)return H.c(q,m)
q[m]=j
i=m+1
if(i>=p)return H.c(q,i)
q[i]=j+1
i=m+2
h=j+2
if(i>=p)return H.c(q,i)
q[i]=h
i=m+3
if(i>=p)return H.c(q,i)
q[i]=j
i=m+4
if(i>=p)return H.c(q,i)
q[i]=h
h=m+5
if(h>=p)return H.c(q,h)
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
if(k>=n)return H.c(o,k)
o[k]=g+b
h=k+1
if(h>=n)return H.c(o,h)
o[h]=d+a0
h=k+2
f=r[2]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+3
h=r[3]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+4
if(h>=n)return H.c(o,h)
o[h]=t
h=k+5
if(h>=n)return H.c(o,h)
o[h]=e+b
h=k+6
if(h>=n)return H.c(o,h)
o[h]=c+a0
h=k+7
f=r[6]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+8
h=r[7]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+9
if(h>=n)return H.c(o,h)
o[h]=t
h=k+10
if(h>=n)return H.c(o,h)
o[h]=e+a
h=k+11
if(h>=n)return H.c(o,h)
o[h]=c+a1
h=k+12
f=r[10]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+13
h=r[11]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+14
if(h>=n)return H.c(o,h)
o[h]=t
h=k+15
if(h>=n)return H.c(o,h)
o[h]=g+a
h=k+16
if(h>=n)return H.c(o,h)
o[h]=d+a1
h=k+17
f=r[14]
if(h>=n)return H.c(o,h)
o[h]=f
f=k+18
h=r[15]
if(f>=n)return H.c(o,f)
o[f]=h
h=k+19
if(h>=n)return H.c(o,h)
o[h]=t
l.c=k+20
l.d=j+4}}
L.ds.prototype={
gbu:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbj:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.dt.prototype={
gbu:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbj:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
a5:function(a){var u,t=this
t.bE(a)
u=t.d
t.r.a9(u.n(0,"aVertexPosition"),2,24,0)
t.r.a9(u.n(0,"aVertexColor"),4,24,8)}}
L.bw.prototype={
gez:function(){var u,t=this.f
if(t==null){t=T.y()
u=new T.aN(new Float32Array(16))
u.a3()
u=this.f=new L.bw(C.f,t,u,this)
t=u}return t}}
L.aT.prototype={
cp:function(a,b){var u,t=this.d
this.e=t
t=t.c
t.ck()
u=this.e
u.a=1
u.b=C.f
t.e4(b)},
bo:function(a){var u,t=this,s=a.gJ(),r=t.e,q=r.gez()
q.c.c0(s,r.c)
u=r.b
q.b=u
q.a=r.a
t.e=q
a.ae(t)
t.e=r}}
L.am.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.bp.prototype={
gaF:function(){var u=this.a,t=this.b,s=[P.w]
return L.fb(this,new U.D(0,0,u,t,s),new U.D(0,0,u,t,s),0,1)},
ge0:function(a){var u=this,t=u.c,s=J.q(t)
if(!!s.$iah)return t
else if(!!s.$ia0){s=u.a
s=W.bM(u.b,s)
u.d=u.c=s
s.getContext("2d").drawImage(t,0,0,u.a,u.b)
return u.d}else throw H.h(P.aV("RenderTexture is read only."))},
sej:function(a){var u,t=this
if(t.e===a)return
t.e=a
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.ar(t)
t.Q.texParameteri(3553,10241,t.e.a)
t.Q.texParameteri(3553,10240,t.e.a)},
eC:function(a,b,c){var u,t=this
if(!(t.a===b&&t.b===c))if(t.c==null){t.a=b
t.b=c
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.ar(t)
u=t.Q;(u&&C.h).bq(u,3553,0,6408,t.a,t.b,0,6408,5121,null)}else{t.a=b
t.b=c
t.d=t.c=W.bM(c,b)}},
eI:function(){var u,t=this,s=6408,r=t.x
if(r==null||t.ch==null)return
if(r.cx!==t.y)return
r.x.F(0)
t.x.ar(t)
r=H.bF(t.Q.isEnabled(3089))
if(r)t.Q.disable(3089)
if(t.z){t.d.getContext("2d").drawImage(t.c,0,0)
u=t.Q;(u&&C.h).aH(u,3553,0,s,s,5121,t.d)}else{u=t.Q;(u&&C.h).aH(u,3553,0,s,s,5121,t.c)}if(r)t.Q.enable(3089)}}
L.cc.prototype={}
L.aw.prototype={
aJ:function(a){var u=this
return L.fb(u.a,u.b,u.c,u.d,a)},
ge8:function(){var u,t,s,r=this,q=r.e,p=r.d
if(p===0){p=r.b
u=r.c
return T.d9(q,0,0,q,p.a+u.a,p.b+u.b)}else if(p===1){p=r.b
u=r.c
return T.d9(0,q,0-q,0,H.j(p.a+p.c,H.d(p,0))-u.b,p.b+u.a)}else if(p===2){p=r.b
u=H.d(p,0)
t=r.c
s=0-q
return T.d9(s,0,0,s,H.j(p.a+p.c,u)-t.a,H.j(p.b+p.d,u)-t.b)}else if(p===3){p=r.b
u=r.c
return T.d9(0,0-q,q,0,p.a+u.b,H.j(p.b+p.d,H.d(p,0))-u.a)}else throw H.h(P.f3())}}
L.du.prototype={}
T.d5.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.cI.prototype={
gbY:function(){return!1}}
R.aG.prototype={}
R.aI.prototype={}
R.aS.prototype={}
R.L.prototype={
gbY:function(){return!0}}
R.bR.prototype={
bl:function(a,b,c){var u,t,s,r
H.iP(c,R.L,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=new H.M([P.r,[R.as,R.L]])
this.scY(u)}t=[c]
s=H.t(u.n(0,b),"$ias",t,"$aas")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.as(this,H.l(r,[[R.C,c]]),t)
u.p(0,b,s)}return s},
bk:function(a,b){var u,t,s=this.a
if(s==null)return!1
u=s.n(0,a)
if(u==null)return!1
t=u.d
return b?t>0:u.c.length>t},
eo:function(a){return this.bk(a,!1)},
b9:function(a,b,c){var u,t
a.r=a.f=!1
u=this.a
if(u==null)return
t=u.n(0,a.a)
if(t==null)return
t.cW(a,b,c)},
scY:function(a){this.a=H.t(a,"$ih_",[P.r,[R.as,R.L]],"$ah_")}}
R.be.prototype={
h:function(a){return this.b}}
R.as.prototype={
aC:function(a,b,c,d){H.f(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.f(c,{func:1,ret:-1})
return this.ap(a,!1,0)},
ap:function(a,b,c){var u,t,s,r,q,p,o=this,n=H.d(o,0),m=new R.C(c,!1,o,H.f(a,{func:1,ret:-1,args:[n]}),o.$ti),l=o.c,k=l.length,j=new Array(k+1)
j.fixed$length=Array
u=H.l(j,[[R.C,n]])
t=u.length-1
for(s=0,r=0;s<k;++s,r=p){q=l[s]
if(s===r&&q.a<c){p=r+1
t=r
r=p}p=r+1
C.a.p(u,r,q)}C.a.p(u,t,m)
o.sdO(u)
n=[R.aG]
if(H.ae(m,"$iC",n,null)){k=$.fE();(k&&C.a).j(k,H.fy(m,"$iC",n,"$aC"))}else{n=[R.aI]
if(H.ae(m,"$iC",n,null)){k=$.fF();(k&&C.a).j(k,H.fy(m,"$iC",n,"$aC"))}else{n=[R.aS]
if(H.ae(m,"$iC",n,null)){k=$.fH();(k&&C.a).j(k,H.fy(m,"$iC",n,"$aC"))}}}return m},
cW:function(a,b,c){var u,t,s,r,q,p,o=H.d(this,0)
H.j(a,o)
u=this.c
t=c===C.r
for(s=u.length,o={func:1,ret:-1,args:[o]},r=0;r<s;++r){q=u[r]
if(!q.c){q.d
p=t}else p=!0
if(p)continue
H.f(q.f,o).$1(a)}},
sdO:function(a){this.c=H.t(a,"$iK",[[R.C,H.d(this,0)]],"$aK")}}
R.C.prototype={}
R.bh.prototype={
h:function(a){return this.b}}
R.cZ.prototype={}
R.aL.prototype={}
R.N.prototype={}
R.aW.prototype={}
R.ao.prototype={}
T.c_.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.a(u[0])+", b="+H.a(u[1])+", c="+H.a(u[2])+", d="+H.a(u[3])+", tx="+H.a(u[4])+", ty="+H.a(u[5])+"]"},
gb8:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
bt:function(a){var u,t,s,r,q,p,o,n=P.m
H.t(a,"$ia1",[n],"$aa1")
u=a.a
u.toString
t=a.b
t.toString
s=this.a
r=s[0]
if(typeof u!=="number")return u.aK()
q=s[2]
if(typeof t!=="number")return t.aK()
p=u*r+t*q+s[4]
o=u*s[1]+t*s[3]+s[5]
if(!!C.u.$iz){null.eM(p,o)
return}else return new U.z(p,o,[n])},
aI:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=P.m
H.t(a7,"$iaP",[a6],"$aaP")
a6=[a6]
H.t(a8,"$iD",a6,"$aD")
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
if(!!a8.$iD){a6=t[4]
t=t[5]
p=H.d(a8,0)
a6=H.j(a6+a0,p)
t=H.j(t+a1,p)
H.j(a4,p)
H.j(a5,p)
a8.sW(0,a6)
a8.sX(0,t)
a8.sR(0,a4)
a8.sO(0,a5)
return a8}else return new U.D(t[4]+a0,t[5]+a1,a4,a5,a6)},
ck:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aL:function(a,b,c){var u=this.a,t=u[0]
if(typeof b!=="number")return H.T(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.T(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
ai:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
e4:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
c0:function(a,b){var u,t,s,r,q,p,o=a.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5]
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
T.aN.prototype={
a3:function(){var u=this.a
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
cw:function(a,b,c,d){var u=this.a
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
eF:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.z.prototype={
h:function(a){return"Point<"+new H.bt(H.d(this,0)).h(0)+"> [x="+H.a(this.a)+", y="+H.a(this.b)+"]"},
t:function(a,b){if(b==null)return!1
return!!J.q(b).$ia1&&this.a===b.gD(b)&&this.b===b.gY(b)},
gi:function(a){var u=C.b.gi(this.a),t=C.b.gi(this.b)
return O.fW(O.bj(O.bj(0,u),t))},
sD:function(a,b){this.a=H.j(b,H.d(this,0))},
sY:function(a,b){this.b=H.j(b,H.d(this,0))},
$ia1:1,
gD:function(a){return this.a},
gY:function(a){return this.b}}
U.D.prototype={
h:function(a){var u=this
return"Rectangle<"+new H.bt(H.d(u,0)).h(0)+"> [left="+H.a(u.a)+", top="+H.a(u.b)+", width="+H.a(u.c)+", height="+H.a(u.d)+"]"},
t:function(a,b){var u,t=this
if(b==null)return!1
u=J.q(b)
return!!u.$iaP&&t.a===u.gW(b)&&t.b===u.gX(b)&&t.c===u.gR(b)&&t.d===u.gO(b)},
gi:function(a){var u=this,t=C.b.gi(u.a),s=C.b.gi(u.b),r=C.b.gi(u.c),q=C.b.gi(u.d)
return O.fW(O.bj(O.bj(O.bj(O.bj(0,t),s),r),q))},
sW:function(a,b){this.a=H.j(b,H.d(this,0))},
sX:function(a,b){this.b=H.j(b,H.d(this,0))},
sR:function(a,b){this.c=H.j(b,H.d(this,0))},
sO:function(a,b){this.d=H.j(b,H.d(this,0))},
$iaP:1,
gW:function(a){return this.a},
gX:function(a){return this.b},
gR:function(a){return this.c},
gO:function(a){return this.d}}
N.bS.prototype={
dj:function(a){var u=this
u.d.at()
u.e.at()
u.b.b6(0,u.a)},
dh:function(a){var u=this
u.d.at()
u.e.at()
u.b.e1(new T.d5("Failed to load "+H.a(u.a.src)+"."))}}
Y.eG.prototype={
$0:function(){return Y.iA(this.a)},
$S:34}
Y.aZ.prototype={
cF:function(a){var u,t,s=this,r=a.gal(),q=H.k(W.fe("span",null),"$iai"),p=H.k(W.fe("div",null),"$iai"),o=H.k(W.fe("div",null),"$iai"),n=q.style
n.font=r
q.textContent="Hg"
n=p.style
n.display="inline-block"
n=p.style
n.width="1px"
n=p.style
n.height="0px"
J.fJ(o,p)
J.fJ(o,q)
n=document.body;(n&&C.J).bX(n,o)
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
s.a=C.d.S(n*7,8)
s.b=C.d.S(n*2,8)}finally{n=o
u=n.parentNode
if(u!=null)J.hW(u,n)}}}
Y.cf.prototype={
sah:function(a,b){this.A=b
this.cb=b.length
this.C|=3},
sa6:function(a){this.ca=a
this.C|=3},
sa7:function(a,b){this.cc=!0
this.C|=2},
sa8:function(a,b){this.cd=b
this.C|=2},
gJ:function(){this.a_()
return A.I.prototype.gJ.call(this)},
gL:function(){var u,t=this
t.a_()
u=t.G
t.a_()
return new U.D(0,0,u,t.B,[P.m])},
V:function(a,b){var u,t=this
if(!(a<0)){t.a_()
u=a>=t.G}else u=!0
if(u)return
if(!(b<0)){t.a_()
u=b>=t.B}else u=!0
if(u)return
return t},
ae:function(a){var u=this
u.a_()
u.dD(a.e.c)
a.c.a2(a,u.ay)
u.be=u.be+a.b},
a_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.C
if((b4&1)===0)return
else b3.C=b4&254
b4=b3.ax
C.a.sk(b4,0)
u=b3.bd
t=V.Z(u.b)
s=V.Z(u.d)
r=V.Z(u.db)
q=V.Z(u.dx)
p=V.Z(u.cx)
o=V.Z(u.cy)
n=V.Z(u.dy)
m=V.Z(u.fr)
l=V.hs(u.Q)
k=V.hs(u.ch)
j=u.gal()
i=Y.iF(u)
h=V.Z(i.a)
g=V.Z(i.b)
f=$.fD()
e=H.l([],[P.w])
d=P.h3("\\r\\n|\\r|\\n")
c=C.c.cz(b3.A,d)
f.font=j+" "
f.textAlign="start"
f.textBaseline="alphabetic"
f.setTransform(1,0,0,1,0,0)
for(b=0,a=0;a<c.length;++a){a0=c[a]
if(typeof a0!=="string")continue
C.a.j(e,b4.length)
a0=b3.dC(a0)
C.a.j(b4,new Y.ch(a0,b))
b+=a0.length+1}b3.a1=b3.ab=0
for(a1=p+t,a2=m+t+g,a3=0;a3<b4.length;++a3){a4=b4[a3]
a5=r+(C.a.e2(e,a3)?n:0)
a6=a1+a3*a2
a7=f.measureText(a4.a).width
a7.toString
a4.c=a5
a4.d=a6
a4.e=a7
a4.r=h
a4.x=g
a8=b3.ab
if(typeof a7!=="number")return H.T(a7)
b3.ab=Math.max(a8,a5+a7+q)
b3.a1=a6+g+o}a1=s*2
a2=b3.ab+a1
b3.ab=a2
b3.a1+=a1
a9=C.b.aa(a2)
b0=C.b.aa(b3.a1)
a1=b3.G
if(a1!==a9||b3.B!==b0)switch(b3.ca){case"left":b3.G=a9
b3.B=b0
a1=a9
break
case"right":b3.bC(0,A.I.prototype.gD.call(b3,b3)-(a9-a1))
b3.G=a9
b3.B=b0
a1=a9
break
case"center":b3.bC(0,A.I.prototype.gD.call(b3,b3)-(a9-a1)/2)
b3.G=a9
b3.B=b0
a1=a9
break}b1=a1-r-q
switch(k){case"center":b2=(b3.B-b3.a1)/2
break
case"bottom":b2=b3.B-b3.a1-s
break
default:b2=s}for(a3=0;a3<b4.length;++a3){a4=b4[a3]
switch(l){case"center":case"justify":a4.c=a4.c+(b1-a4.e)/2
break
case"right":case"end":a4.c=a4.c+(b1-a4.e)
break
default:a4.c+=s}a4.d+=b2}},
dD:function(a){var u,t,s,r,q=this,p=Math.sqrt(Math.abs(a.gb8())),o=q.ay,n=o==null?null:o.e
if(n==null)n=0
if(n<p*0.8)q.C|=2
if(n>p*1.25)q.C|=2
o=q.C
if((o&2)===0)return
q.C=o&253
u=C.b.aa(Math.max(1,q.G*p))
t=C.b.aa(Math.max(1,q.B*p))
o=q.ac
if(o==null){o=L.h4(u,t,16777215)
q.ac=o
o=q.ay=o.gaF().aJ(p)}else{o.eC(0,u,t)
o=q.ay=q.ac.gaF().aJ(p)}s=o.ge8()
o=q.ac
r=o.ge0(o).getContext("2d")
o=s.a
r.setTransform(o[0],o[1],o[2],o[3],o[4],o[5])
r.clearRect(0,0,q.G,q.B)
q.dH(r)
q.ac.eI()},
dH:function(a){var u,t,s=this,r=s.bd,q=r.b,p=C.X.aa(q/20)
a.save()
a.beginPath()
a.rect(0,0,s.G,s.B)
a.clip()
a.font=r.gal()+" "
a.textAlign="start"
a.textBaseline="alphabetic"
a.lineJoin=a.lineCap="round"
if(s.cc){a.fillStyle=V.ft(s.cd)
a.fillRect(0,0,s.G,s.B)}q=r.d
if(q>0){a.lineWidth=q*2
a.strokeStyle=V.fs(r.e)
for(q=s.ax,u=0;u<q.length;++u){t=q[u]
a.strokeText(t.a,t.c,t.d)}}a.lineWidth=p
q=r.c
a.strokeStyle=V.fs(q)
q=V.fs(q)
a.fillStyle=q
for(q=s.ax,u=0;u<q.length;++u){t=q[u]
a.fillText(t.a,t.c,t.d)}a.restore()},
dC:function(a){return a},
dl:function(a){H.k(a,"$iaL")},
dz:function(a){H.k(a,"$iaW")},
dr:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
H.k(a,"$iN")
u=a.x
t=a.y
s=$.fD()
s.setTransform(1,0,0,1,0,0)
for(r=e.ax,q=0;q<r.length;++q){p=r[q]
o=p.a
n=p.c
m=p.d
l=p.r
k=p.x
if(m-l<=t&&m+k>=t){for(m=o.length,j=1/0,i=0,h=0;h<=m;++h){g=s.measureText(C.c.aj(o,0,h)).width
g.toString
if(typeof g!=="number")return H.T(g)
f=Math.abs(n+g-u)
if(f<j){i=h
j=f}}e.cb=p.b+i
e.be=0
e.C|=3}}}}
Y.dJ.prototype={
gal:function(){var u=""+this.r+" "+this.b+"px "+this.a
return u}}
Y.ch.prototype={}
Q.da.prototype={};(function aliases(){var u=J.v.prototype
u.cA=u.h
u=J.bZ.prototype
u.cB=u.h
u=A.I.prototype
u.bC=u.sD
u=A.bd.prototype
u.bD=u.V
u=L.bo.prototype
u.bE=u.a5})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"iH","ij",7)
t(P,"iR","ix",2)
t(P,"iS","iy",2)
t(P,"iT","iz",2)
u(P,"hr","iO",1)
s(P,"iU",1,null,["$2","$1"],["hi",function(a){return P.hi(a,null)}],6,0)
u(P,"hq","iJ",1)
r(P.B.prototype,"gcR",0,1,null,["$2","$1"],["Z","cS"],6,0)
q(P.co.prototype,"gdK","dL",1)
var o
p(o=A.F.prototype,"gds","dt",22)
p(o,"gdu","dv",23)
p(o,"gdA","dB",24)
p(o,"gdm","dn",38)
p(A.ce.prototype,"gcM","cN",29)
p(o=L.c8.prototype,"gd7","d8",12)
p(o,"gd9","da",12)
p(L.cb.prototype,"gde","df",32)
p(o=N.bS.prototype,"gdi","dj",3)
p(o,"gdg","dh",3)
p(o=Y.cf.prototype,"gdk","dl",35)
p(o,"gdw","dz",36)
p(o,"gdq","dr",37)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.f9,J.v,J.cA,H.d4,H.aJ,H.bb,H.dL,P.aj,H.bf,H.cr,H.bt,P.d8,H.d3,H.bX,H.cq,P.J,H.dS,H.dH,H.eA,P.eB,P.dV,P.dE,P.e3,P.e2,P.e4,P.a3,P.B,P.ck,P.aa,P.e7,P.bB,P.co,P.ey,P.H,P.eD,P.a9,P.ap,P.m,P.aF,P.de,P.cd,P.eb,P.cW,P.K,P.p,P.aM,P.c6,P.A,P.dD,P.r,P.bs,W.cO,W.bg,W.cU,P.ep,P.a1,Y.cL,R.bR,K.dT,K.d2,A.a_,A.cC,A.cE,L.dm,L.cb,A.bq,A.aU,A.X,A.dx,A.b0,A.b1,A.aA,L.cG,L.aQ,L.aR,L.c9,L.av,L.dk,L.ca,L.er,L.bo,L.bw,L.aT,L.am,L.bp,L.cc,L.aw,L.du,R.L,R.be,R.bh,T.c_,T.aN,U.z,U.D,N.bS,Y.aZ,Y.dJ,Y.ch,Q.da])
s(J.v,[J.d0,J.bW,J.bZ,J.at,J.bi,J.aK,H.c3,W.aH,W.bN,W.cm,W.cQ,W.bP,W.b,W.ab,W.cs,P.bL,P.c4,P.ax,P.ci,P.bu])
s(J.bZ,[J.df,J.aX,J.au])
t(J.f8,J.at)
s(J.bi,[J.bV,J.bU])
s(H.bb,[H.dg,H.eZ,H.dI,H.eQ,H.eR,H.eS,P.dZ,P.dY,P.e_,P.e0,P.eC,P.eE,P.eF,P.eK,P.cX,P.ec,P.ek,P.eg,P.eh,P.ei,P.ee,P.ej,P.ed,P.en,P.eo,P.em,P.el,P.dF,P.dG,P.es,P.eJ,P.ev,P.eu,P.ew,P.d7,P.cR,P.cS,W.ea,P.eN,Y.cM,Y.cN,A.cF,A.cD,A.dp,A.dq,A.dB,A.dy,A.dz,A.dA,L.eH,Y.eG])
s(P.aj,[H.dd,H.d1,H.dO,H.cj,H.cJ,H.dv,P.cB,P.bl,P.a5,P.dP,P.dN,P.br,P.cK,P.cP,T.d5])
s(H.dI,[H.dC,H.b9])
t(H.dU,P.cB)
t(P.d6,P.d8)
t(H.M,P.d6)
s(P.J,[P.d_,H.ez])
t(H.dR,P.d_)
t(H.c0,H.c3)
s(H.c0,[H.bx,H.bz])
t(H.by,H.bx)
t(H.c1,H.by)
t(H.bA,H.bz)
t(H.c2,H.bA)
t(H.db,H.c1)
t(H.dc,H.c2)
s(P.dE,[P.ex,W.e8,R.as])
t(P.cl,P.ex)
t(P.e1,P.cl)
t(P.e5,P.e3)
t(P.O,P.e5)
t(P.dW,P.e2)
t(P.dX,P.e4)
t(P.e6,P.e7)
t(P.bC,P.bB)
t(P.et,P.eD)
s(P.m,[P.af,P.w])
s(P.a5,[P.bn,P.cY])
s(W.aH,[W.S,W.bv])
s(W.S,[W.ai,W.ar])
s(W.ai,[W.i,P.e])
s(W.i,[W.cy,W.cz,W.bK,W.ah,W.cV,W.a0,W.ak,W.bk,W.dw])
t(W.bc,W.cm)
s(W.b,[W.az,P.a8])
s(W.az,[W.al,W.E,W.an])
t(W.ct,W.cs)
t(W.dK,W.ct)
t(W.dQ,W.bk)
t(W.ad,W.E)
t(W.cn,W.bP)
t(W.cp,W.e8)
s(P.aa,[W.e9,R.C])
t(A.I,R.bR)
s(A.I,[A.bT,A.W,A.ce])
s(A.bT,[A.bd,Y.cf])
s(A.bd,[Z.cT,A.F])
t(A.a6,L.dm)
t(A.dn,L.cb)
s(L.dk,[L.c7,L.c8])
s(L.bo,[L.dr,L.ds,L.dt])
s(R.L,[R.cI,R.cZ,R.aL,R.aW])
s(R.cI,[R.aG,R.aI,R.aS])
s(R.cZ,[R.N,R.ao])
u(H.bx,P.a9)
u(H.by,H.aJ)
u(H.bz,P.a9)
u(H.bA,H.aJ)
u(W.cm,W.cO)
u(W.cs,P.a9)
u(W.ct,W.bg)})()
var v={mangledGlobalNames:{w:"int",af:"double",m:"num",r:"String",ap:"bool",p:"Null",K:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.p},{func:1,ret:-1},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.b]},{func:1,args:[,]},{func:1,ret:P.p,args:[,]},{func:1,ret:-1,args:[P.n],opt:[P.A]},{func:1,ret:P.w},{func:1,ret:P.p,args:[,,]},{func:1,ret:P.r,args:[P.w]},{func:1,ret:P.p,args:[W.E]},{func:1,ret:-1,args:[A.aA]},{func:1,ret:-1,args:[P.a8]},{func:1,ret:[P.B,,],args:[,]},{func:1,args:[,P.r]},{func:1,ret:-1,args:[,]},{func:1,args:[W.b]},{func:1,ret:P.p,args:[,P.A]},{func:1,ret:A.a_,args:[W.a0]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.ap,args:[A.F]},{func:1,ret:-1,args:[A.F]},{func:1,ret:-1,args:[W.E]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.p,args:[P.w,,]},{func:1,ret:-1,args:[P.r]},{func:1,ret:P.p,args:[{func:1,ret:-1}]},{func:1,ret:A.b1},{func:1,ret:-1,args:[A.a_]},{func:1,ret:P.p,args:[,],opt:[P.A]},{func:1,ret:P.p,args:[P.m]},{func:1,ret:-1,args:[P.m]},{func:1,args:[P.r]},{func:1,ret:Y.aZ},{func:1,ret:-1,args:[R.aL]},{func:1,ret:-1,args:[R.aW]},{func:1,ret:-1,args:[R.N]},{func:1,ret:-1,args:[W.al]}],interceptorsByTag:null,leafTags:null};(function constants(){C.J=W.bK.prototype
C.j=W.ah.prototype
C.W=J.v.prototype
C.a=J.at.prototype
C.X=J.bU.prototype
C.d=J.bV.prototype
C.u=J.bW.prototype
C.b=J.bi.prototype
C.c=J.aK.prototype
C.Y=J.au.prototype
C.v=J.df.prototype
C.h=P.ax.prototype
C.o=J.aX.prototype
C.H=W.ad.prototype
C.I=W.bv.prototype
C.f=new L.cG()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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

C.Q=new P.de()
C.a3=new L.du()
C.R=new P.ep()
C.e=new P.et()
C.S=new P.aF(0)
C.r=new R.be("EventPhase.CAPTURING_PHASE")
C.T=new R.be("EventPhase.AT_TARGET")
C.U=new R.be("EventPhase.BUBBLING_PHASE")
C.k=new R.bh("InputEventMode.MouseOnly")
C.V=new R.bh("InputEventMode.TouchOnly")
C.t=new R.bh("InputEventMode.MouseAndTouch")
C.l=new L.c9("RenderEngine.WebGL")
C.w=new L.c9("RenderEngine.Canvas2D")
C.Z=new L.cc(9728)
C.x=new L.cc(9729)
C.y=new A.X("StageAlign.TOP_LEFT")
C.z=new A.X("StageAlign.TOP")
C.A=new A.X("StageAlign.TOP_RIGHT")
C.B=new A.X("StageAlign.LEFT")
C.i=new A.X("StageAlign.NONE")
C.C=new A.X("StageAlign.RIGHT")
C.D=new A.X("StageAlign.BOTTOM_LEFT")
C.E=new A.X("StageAlign.BOTTOM")
C.F=new A.X("StageAlign.BOTTOM_RIGHT")
C.m=new A.bq("StageRenderMode.AUTO")
C.G=new A.bq("StageRenderMode.ONCE")
C.a_=new A.bq("StageRenderMode.STOP")
C.a0=new A.aU("StageScaleMode.EXACT_FIT")
C.a1=new A.aU("StageScaleMode.NO_BORDER")
C.a2=new A.aU("StageScaleMode.NO_SCALE")
C.n=new A.aU("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.dh=null
$.di=null
$.a7=0
$.ba=null
$.fM=null
$.fl=!1
$.hx=null
$.ho=null
$.hB=null
$.eO=null
$.eV=null
$.fv=null
$.b2=null
$.bD=null
$.bE=null
$.fm=!1
$.o=C.e
$.Q=[]
$.fc=null
$.u=0
$.hc=1
$.dl=0
$.hg=17976931348623157e292
$.fk=-1})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"jj","hF",function(){return H.hv("_$dart_dartClosure")})
u($,"jm","fA",function(){return H.hv("_$dart_js")})
u($,"ju","hI",function(){return H.ac(H.dM({
toString:function(){return"$receiver$"}}))})
u($,"jv","hJ",function(){return H.ac(H.dM({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"jw","hK",function(){return H.ac(H.dM(null))})
u($,"jx","hL",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jA","hO",function(){return H.ac(H.dM(void 0))})
u($,"jB","hP",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jz","hN",function(){return H.ac(H.h7(null))})
u($,"jy","hM",function(){return H.ac(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"jD","hR",function(){return H.ac(H.h7(void 0))})
u($,"jC","hQ",function(){return H.ac(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"jG","fC",function(){return P.iw()})
u($,"ji","hE",function(){return new A.cE(H.l([1,2],[P.af]))})
u($,"jN","fG",function(){return[]})
u($,"jK","fE",function(){return H.l([],[[R.C,R.aG]])})
u($,"jL","fF",function(){return H.l([],[[R.C,R.aI]])})
u($,"jO","fH",function(){return H.l([],[[R.C,R.aS]])})
u($,"jS","fI",function(){var t=W.jg().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"jW","hU",function(){return Q.iD()})
u($,"jI","hS",function(){return W.bM(16,16)})
u($,"jJ","fD",function(){var t=$.hS()
return(t&&C.j).ge3(t)})
u($,"jM","hT",function(){return H.fX(P.r,Y.aZ)})
u($,"jo","fB",function(){return H.fX(P.r,Q.da)})
u($,"jn","hG",function(){return P.ay(P.r)})
u($,"jp","hH",function(){var t=$.hG()
t.toString
return new P.e1(t,[H.d(t,0)])})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.v,CanvasGradient:J.v,CanvasPattern:J.v,DOMError:J.v,MediaError:J.v,Navigator:J.v,NavigatorConcurrentHardware:J.v,NavigatorUserMediaError:J.v,OverconstrainedError:J.v,PositionError:J.v,TextMetrics:J.v,WebGLActiveInfo:J.v,WebGLFramebuffer:J.v,WebGLRenderbuffer:J.v,WebGL2RenderingContext:J.v,WebGLShader:J.v,SQLError:J.v,ArrayBufferView:H.c3,Float32Array:H.db,Int16Array:H.dc,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLDivElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTableElement:W.i,HTMLTableRowElement:W.i,HTMLTableSectionElement:W.i,HTMLTemplateElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.cy,HTMLAreaElement:W.cz,HTMLBodyElement:W.bK,HTMLCanvasElement:W.ah,CanvasRenderingContext2D:W.bN,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSStyleDeclaration:W.bc,MSStyleCSSProperties:W.bc,CSS2Properties:W.bc,DOMException:W.cQ,DOMRectReadOnly:W.bP,Element:W.ai,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,Event:W.b,InputEvent:W.b,EventTarget:W.aH,HTMLFormElement:W.cV,HTMLImageElement:W.a0,HTMLInputElement:W.ak,KeyboardEvent:W.al,HTMLAudioElement:W.bk,HTMLMediaElement:W.bk,PointerEvent:W.E,MouseEvent:W.E,DragEvent:W.E,Document:W.S,DocumentFragment:W.S,HTMLDocument:W.S,ShadowRoot:W.S,XMLDocument:W.S,Attr:W.S,DocumentType:W.S,Node:W.S,HTMLSelectElement:W.dw,Touch:W.ab,TouchEvent:W.an,TouchList:W.dK,CompositionEvent:W.az,FocusEvent:W.az,TextEvent:W.az,UIEvent:W.az,HTMLVideoElement:W.dQ,WheelEvent:W.ad,Window:W.bv,DOMWindow:W.bv,ClientRect:W.cn,DOMRect:W.cn,SVGAElement:P.e,SVGAnimateElement:P.e,SVGAnimateMotionElement:P.e,SVGAnimateTransformElement:P.e,SVGAnimationElement:P.e,SVGCircleElement:P.e,SVGClipPathElement:P.e,SVGDefsElement:P.e,SVGDescElement:P.e,SVGDiscardElement:P.e,SVGEllipseElement:P.e,SVGFEBlendElement:P.e,SVGFEColorMatrixElement:P.e,SVGFEComponentTransferElement:P.e,SVGFECompositeElement:P.e,SVGFEConvolveMatrixElement:P.e,SVGFEDiffuseLightingElement:P.e,SVGFEDisplacementMapElement:P.e,SVGFEDistantLightElement:P.e,SVGFEFloodElement:P.e,SVGFEFuncAElement:P.e,SVGFEFuncBElement:P.e,SVGFEFuncGElement:P.e,SVGFEFuncRElement:P.e,SVGFEGaussianBlurElement:P.e,SVGFEImageElement:P.e,SVGFEMergeElement:P.e,SVGFEMergeNodeElement:P.e,SVGFEMorphologyElement:P.e,SVGFEOffsetElement:P.e,SVGFEPointLightElement:P.e,SVGFESpecularLightingElement:P.e,SVGFESpotLightElement:P.e,SVGFETileElement:P.e,SVGFETurbulenceElement:P.e,SVGFilterElement:P.e,SVGForeignObjectElement:P.e,SVGGElement:P.e,SVGGeometryElement:P.e,SVGGraphicsElement:P.e,SVGImageElement:P.e,SVGLineElement:P.e,SVGLinearGradientElement:P.e,SVGMarkerElement:P.e,SVGMaskElement:P.e,SVGMetadataElement:P.e,SVGPathElement:P.e,SVGPatternElement:P.e,SVGPolygonElement:P.e,SVGPolylineElement:P.e,SVGRadialGradientElement:P.e,SVGRectElement:P.e,SVGScriptElement:P.e,SVGSetElement:P.e,SVGStopElement:P.e,SVGStyleElement:P.e,SVGElement:P.e,SVGSVGElement:P.e,SVGSwitchElement:P.e,SVGSymbolElement:P.e,SVGTSpanElement:P.e,SVGTextContentElement:P.e,SVGTextElement:P.e,SVGTextPathElement:P.e,SVGTextPositioningElement:P.e,SVGTitleElement:P.e,SVGUseElement:P.e,SVGViewElement:P.e,SVGGradientElement:P.e,SVGComponentTransferFunctionElement:P.e,SVGFEDropShadowElement:P.e,SVGMPathElement:P.e,WebGLBuffer:P.bL,WebGLContextEvent:P.a8,WebGLProgram:P.c4,WebGLRenderingContext:P.ax,WebGLTexture:P.ci,WebGLUniformLocation:P.bu})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,TextMetrics:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.eW,[])
else F.eW([])})})()
//# sourceMappingURL=main.dart.js.map
