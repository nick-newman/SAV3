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
a[c]=function(){a[c]=function(){H.jf(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.fv(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={fj:function fj(){},dg:function dg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},aM:function aM(){},
aG:function(a){var u,t=H.jh(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
j2:function(a){return v.types[H.U(a)]},
jX:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.q(a).$ic1},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.cG(a)
if(typeof u!=="string")throw H.h(H.eX(a))
return u},
aR:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ip:function(a,b){var u,t
if(typeof a!=="string")H.G(H.eX(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.a(u,3)
t=H.V(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
io:function(a){var u,t
if(typeof a!=="string")H.G(H.eX(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.i2(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
bq:function(a){return H.ik(a)+H.eU(H.ba(a),0,null)},
ik:function(a){var u,t,s,r,q,p,o,n=J.q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$ib_){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aG(t.length>1&&C.c.ao(t,0)===36?C.c.bE(t,1):t)},
il:function(){return Date.now()},
im:function(){var u,t
if($.du!=null)return
$.du=1000
$.dv=H.iJ()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.du=1e6
$.dv=new H.dt(t)},
T:function(a){throw H.h(H.eX(a))},
a:function(a,b){if(a==null)J.fb(a)
throw H.h(H.bJ(a,b))},
bJ:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,s,null)
u=H.U(J.fb(a))
if(!(b<0)){if(typeof u!=="number")return H.T(u)
t=b>=u}else t=!0
if(t)return P.fV(b,a,s,null,u)
return P.c9(b,s)},
eX:function(a){return new P.a5(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bp()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.hF})
u.name=""}else u.toString=H.hF
return u},
hF:function(){return J.cG(this.dartException)},
G:function(a){throw H.h(a)},
fD:function(a){throw H.h(P.bS(a))},
ac:function(a){var u,t,s,r,q,p
a=H.je(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.l([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.dX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
dY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ha:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
h4:function(a,b){return new H.dq(a,b==null?null:b.method)},
fk:function(a,b){var u=b==null,t=u?null:b.method
return new H.dd(a,t,u?null:b.receiver)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.fa(a)
if(a==null)return
if(a instanceof H.bj)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.dQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.fk(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.h4(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.hK()
q=$.hL()
p=$.hM()
o=$.hN()
n=$.hQ()
m=$.hR()
l=$.hP()
$.hO()
k=$.hT()
j=$.hS()
i=r.J(u)
if(i!=null)return f.$1(H.fk(H.V(u),i))
else{i=q.J(u)
if(i!=null){i.method="call"
return f.$1(H.fk(H.V(u),i))}else{i=p.J(u)
if(i==null){i=o.J(u)
if(i==null){i=n.J(u)
if(i==null){i=m.J(u)
if(i==null){i=l.J(u)
if(i==null){i=o.J(u)
if(i==null){i=k.J(u)
if(i==null){i=j.J(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.h4(H.V(u),i))}}return f.$1(new H.e_(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.ch()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a5(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.ch()
return a},
bb:function(a){var u
if(a instanceof H.bj)return a.b
if(a==null)return new H.cv(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cv(a)},
j_:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.t(0,a[u],a[t])}return b},
j6:function(a,b,c,d,e,f){H.k(a,"$ifg")
switch(H.U(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.en("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j6)
a.$identity=u
return u},
ia:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.dO().constructor.prototype):Object.create(new H.bd(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.L()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.fT(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.i6(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.fT(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
i6:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.j2,a)
if(typeof a=="function")if(b)return a
else{u=c?H.fQ:H.fc
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
i7:function(a,b,c,d){var u=H.fc
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
fT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.i9(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.i7(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.L()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.be
return new Function(r+H.b(q==null?$.be=H.cQ("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.L()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.be
return new Function(r+H.b(q==null?$.be=H.cQ("self"):q)+"."+H.b(u)+"("+o+");}")()},
i8:function(a,b,c,d){var u=H.fc,t=H.fQ
switch(b?-1:a){case 0:throw H.h(H.it("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
i9:function(a,b){var u,t,s,r,q,p,o,n=$.be
if(n==null)n=$.be=H.cQ("self")
u=$.fP
if(u==null)u=$.fP=H.cQ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.i8(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a7
if(typeof u!=="number")return u.L()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.L()
$.a7=u+1
return new Function(n+u+"}")()},
fv:function(a,b,c,d,e,f,g){return H.ia(a,b,c,d,!!e,!!f,g)},
fc:function(a){return a.a},
fQ:function(a){return a.c},
cQ:function(a){var u,t,s,r=new H.bd("self","target","receiver","name"),q=J.fX(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
b7:function(a){if(a==null)H.iS("boolean expression must not be null")
return a},
V:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a2(a,"String"))},
jV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"double"))},
f9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"num"))},
jR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a2(a,"bool"))},
U:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a2(a,"int"))},
fB:function(a,b){throw H.h(H.a2(a,H.aG(H.V(b).substring(2))))},
jd:function(a,b){throw H.h(H.fS(a,H.aG(H.V(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.fB(a,b)},
f5:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else u=!0
if(u)return a
H.jd(a,b)},
k_:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.q(a)[b])return a
H.fB(a,b)},
jZ:function(a){if(a==null)return a
if(!!J.q(a).$iK)return a
throw H.h(H.a2(a,"List<dynamic>"))},
j7:function(a,b){var u
if(a==null)return a
u=J.q(a)
if(!!u.$iK)return a
if(u[b])return a
H.fB(a,b)},
hw:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.U(u)]
else return a.$S()}return},
b9:function(a,b){var u
if(typeof a=="function")return!0
u=H.hw(J.q(a))
if(u==null)return!1
return H.hk(u,null,b,null)},
e:function(a,b){var u,t
if(a==null)return a
if($.fr)return a
$.fr=!0
try{if(H.b9(a,b))return a
u=H.bc(b)
t=H.a2(a,u)
throw H.h(t)}finally{$.fr=!1}},
bL:function(a,b){if(a!=null&&!H.fu(a,b))H.G(H.a2(a,H.bc(b)))
return a},
a2:function(a,b){return new H.cn("TypeError: "+P.bU(a)+": type '"+H.b(H.hp(a))+"' is not a subtype of type '"+b+"'")},
fS:function(a,b){return new H.cS("CastError: "+P.bU(a)+": type '"+H.b(H.hp(a))+"' is not a subtype of type '"+b+"'")},
hp:function(a){var u,t=J.q(a)
if(!!t.$ibf){u=H.hw(t)
if(u!=null)return H.bc(u)
return"Closure"}return H.bq(a)},
iS:function(a){throw H.h(new H.e5(a))},
jf:function(a){throw H.h(new P.d0(a))},
it:function(a){return new H.dH(a)},
hy:function(a){return v.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
ba:function(a){if(a==null)return
return a.$ti},
jW:function(a,b,c){return H.bM(a["$a"+H.b(c)],H.ba(b))},
hz:function(a,b,c,d){var u=H.bM(a["$a"+H.b(c)],H.ba(b))
return u==null?null:u[d]},
d:function(a,b){var u=H.ba(a)
return u==null?null:u[b]},
bc:function(a){return H.aF(a,null)},
aF:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].name)+H.eU(a,1,b)
if(typeof a=="function")return H.aG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.U(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.b(b[t])}if('func' in a)return H.iG(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iG:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.l([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.j(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.a(a0,m)
p=C.c.L(p,a0[m])
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
for(n=H.iZ(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.V(n[g])
i=i+h+H.aF(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
eU:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bw("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aF(p,c)}return"<"+u.h(0)+">"},
bM:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ae:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.ba(a)
t=J.q(a)
if(t[b]==null)return!1
return H.hs(H.bM(t[d],u),null,c,null)},
fC:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.fS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.eU(c,0,null),v.mangledGlobalNames)))},
t:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.eU(c,0,null),v.mangledGlobalNames)))},
iR:function(a,b,c,d,e){if(!H.P(a,null,b,null))H.jg("TypeError: "+H.b(c)+H.bc(a)+H.b(d)+H.bc(b)+H.b(e))},
jg:function(a){throw H.h(new H.cn(H.V(a)))},
hs:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.P(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.P(a[t],b,c[t],d))return!1
return!0},
jS:function(a,b,c){return a.apply(b,H.bM(J.q(b)["$a"+H.b(c)],H.ba(b)))},
hB:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="p"||a===-1||a===-2||H.hB(u)}return!1},
fu:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="p"||b===-1||b===-2||H.hB(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.fu(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b9(a,b)}u=J.q(a).constructor
t=H.ba(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.P(u,null,b,null)},
j:function(a,b){if(a!=null&&!H.fu(a,b))throw H.h(H.a2(a,H.bc(b)))
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
q=H.bM(r,u?a.slice(1):l)
return H.P(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.hk(a,b,c,d)
if('func' in a)return c.name==="fg"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.hs(H.bM(m,u),b,p,d)},
hk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.jb(h,b,g,d)},
jb:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.P(c[s],d,a[s],b))return!1}return!0},
h_:function(a,b){return new H.M([a,b])},
jT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j8:function(a){var u,t,s,r,q=H.V($.hA.$1(a)),p=$.f_[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.f6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.V($.hr.$2(a,q))
if(q!=null){p=$.f_[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.f6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.f8(u)
$.f_[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.f6[q]=u
return u}if(s==="-"){r=H.f8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.hC(a,u)
if(s==="*")throw H.h(P.hb(q))
if(v.leafTags[q]===true){r=H.f8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.hC(a,u)},
hC:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.fA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
f8:function(a){return J.fA(a,!1,null,!!a.$ic1)},
j9:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.f8(u)
else return J.fA(u,c,null,null)},
j4:function(){if(!0===$.fz)return
$.fz=!0
H.j5()},
j5:function(){var u,t,s,r,q,p,o,n
$.f_=Object.create(null)
$.f6=Object.create(null)
H.j3()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.hD.$1(q)
if(p!=null){o=H.j9(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
j3:function(){var u,t,s,r,q,p,o=C.K()
o=H.b6(C.L,H.b6(C.M,H.b6(C.q,H.b6(C.q,H.b6(C.N,H.b6(C.O,H.b6(C.P(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.hA=new H.f1(r)
$.hr=new H.f2(q)
$.hD=new H.f3(p)},
b6:function(a,b){return a(b)||b},
fh:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.ff("Illegal RegExp pattern ("+String(p)+")",a))},
je:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
dt:function dt(a){this.a=a},
dX:function dX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dq:function dq(a,b){this.a=a
this.b=b},
dd:function dd(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(a){this.a=a},
bj:function bj(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
cv:function cv(a){this.a=a
this.b=null},
bf:function bf(){},
dU:function dU(){},
dO:function dO(){},
bd:function bd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cn:function cn(a){this.a=a},
cS:function cS(a){this.a=a},
dH:function dH(a){this.a=a},
e5:function e5(a){this.a=a},
bx:function bx(a){this.a=a
this.d=this.b=null},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
c0:function c0(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cu:function cu(a){this.b=a},
e2:function e2(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dT:function dT(a,b){this.a=a
this.c=b},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hh:function(a,b,c){},
hg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bJ(b,a))},
c7:function c7(){},
c4:function c4(){},
c5:function c5(){},
c6:function c6(){},
dn:function dn(){},
dp:function dp(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
iZ:function(a){return J.ig(a?Object.keys(a):[],null)},
jh:function(a){return v.mangledGlobalNames[a]},
jc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f0:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.fz==null){H.j4()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.hb("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.fE()]
if(r!=null)return r
r=H.j8(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.fE(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ig:function(a,b){return J.fX(H.l(a,[b]))},
fX:function(a){a.fixed$length=Array
return a},
fY:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ih:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.ao(a,b)
if(t!==32&&t!==13&&!J.fY(t))break;++b}return b},
ii:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.ay(a,u)
if(t!==32&&t!==13&&!J.fY(t))break}return b},
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bZ.prototype
return J.bY.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.c_.prototype
if(typeof a=="boolean")return J.dc.prototype
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.n)return a
return J.f0(a)},
hx:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.n)return a
return J.f0(a)},
j0:function(a){if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.n)return a
return J.f0(a)},
j1:function(a){if(typeof a=="number")return J.bm.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
fy:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
cE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.n)return a
return J.f0(a)},
cF:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).v(a,b)},
hX:function(a,b,c,d){return J.cE(a).cL(a,b,c,d)},
hY:function(a,b){return J.cE(a).dH(a,b)},
hZ:function(a,b,c,d){return J.cE(a).dI(a,b,c,d)},
i_:function(a,b){return J.fy(a).bZ(a,b)},
fN:function(a,b){return J.cE(a).c_(a,b)},
aH:function(a){return J.q(a).gi(a)},
i0:function(a){return J.j0(a).gS(a)},
fb:function(a){return J.hx(a).gk(a)},
bN:function(a){return J.cE(a).gco(a)},
cG:function(a){return J.q(a).h(a)},
i1:function(a,b){return J.j1(a).eH(a,b)},
i2:function(a){return J.fy(a).eJ(a)},
w:function w(){},
dc:function dc(){},
c_:function c_(){},
c2:function c2(){},
ds:function ds(){},
b_:function b_(){},
aw:function aw(){},
av:function av(a){this.$ti=a},
fi:function fi(a){this.$ti=a},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bm:function bm(){},
bZ:function bZ(){},
bY:function bY(){},
aN:function aN(){}},P={
iy:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.iT()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b8(new P.ea(s),1)).observe(u,{childList:true})
return new P.e9(s,u,t)}else if(self.setImmediate!=null)return P.iU()
return P.iV()},
iz:function(a){self.scheduleImmediate(H.b8(new P.eb(H.e(a,{func:1,ret:-1})),0))},
iA:function(a){self.setImmediate(H.b8(new P.ec(H.e(a,{func:1,ret:-1})),0))},
iB:function(a){P.fn(C.S,H.e(a,{func:1,ret:-1}))},
fn:function(a,b){var u=C.d.U(a.a,1000)
return P.iD(u<0?0:u,b)},
iD:function(a,b){var u=new P.eN()
u.cJ(a,b)
return u},
cB:function(a){return new P.e6(new P.C($.o,[a]),[a])},
cA:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
aD:function(a,b){P.iE(a,b)},
cz:function(a,b){b.b8(0,a)},
cy:function(a,b){b.b9(H.a4(a),H.bb(a))},
iE:function(a,b){var u,t=null,s=new P.eQ(b),r=new P.eR(b),q=J.q(a)
if(!!q.$iC)a.bW(s,r,t)
else if(!!q.$iR)a.bv(s,r,t)
else{u=new P.C($.o,[null])
H.j(a,null)
u.a=4
u.c=a
u.bW(s,t,t)}},
cD:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.o.bp(new P.eW(u),P.p,P.x,null)},
au:function(a,b){var u=new P.C($.o,[b])
P.iv(a,new P.d8(null,u))
return u},
hc:function(a,b){var u,t,s
b.a=1
try{a.bv(new P.es(b),new P.et(b),P.p)}catch(s){u=H.a4(s)
t=H.bb(s)
P.hE(new P.eu(b,u,t))}},
er:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iC")
if(u>=4){t=b.ar()
b.a=a.a
b.c=a.c
P.b2(b,t)}else{t=H.k(b.c,"$ia3")
b.a=2
b.c=a
a.bU(t)}},
b2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iH")
P.cC(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.b2(h.a,b)}g=h.a
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
P.cC(i,i,g.b,q.a,q.b)
return}l=$.o
if(l!==n)$.o=n
else l=i
g=b.c
if((g&15)===8)new P.ez(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.ey(u,b,q).$0()}else if((g&2)!==0)new P.ex(h,u,b).$0()
if(l!=null)$.o=l
g=u.b
if(!!J.q(g).$iR){if(g.a>=4){k=H.k(o.c,"$ia3")
o.c=null
b=o.as(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.er(g,o)
return}}j=b.b
k=H.k(j.c,"$ia3")
j.c=null
b=j.as(k)
g=u.a
p=u.b
if(!g){H.j(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iH")
j.a=8
j.c=p}h.a=j
g=j}},
iM:function(a,b){if(H.b9(a,{func:1,args:[P.n,P.B]}))return b.bp(a,null,P.n,P.B)
if(H.b9(a,{func:1,args:[P.n]}))return H.e(a,{func:1,ret:null,args:[P.n]})
throw H.h(P.fO(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iK:function(){var u,t
for(;u=$.b5,u!=null;){$.bI=null
t=u.b
$.b5=t
if(t==null)$.bH=null
u.a.$0()}},
iQ:function(){$.fs=!0
try{P.iK()}finally{$.bI=null
$.fs=!1
if($.b5!=null)$.fG().$1(P.hu())}},
ho:function(a){var u=new P.co(a)
if($.b5==null){$.b5=$.bH=u
if(!$.fs)$.fG().$1(P.hu())}else $.bH=$.bH.b=u},
iP:function(a){var u,t,s=$.b5
if(s==null){P.ho(a)
$.bI=$.bH
return}u=new P.co(a)
t=$.bI
if(t==null){u.b=s
$.b5=$.bI=u}else{u.b=t.b
$.bI=t.b=u
if(u.b==null)$.bH=u}},
hE:function(a){var u=null,t=$.o
if(C.e===t){P.aE(u,u,C.e,a)
return}P.aE(u,u,t,H.e(t.b6(a),{func:1,ret:-1}))},
jv:function(a,b){if(a==null)H.G(P.i3("stream"))
return new P.eK([b])},
aA:function(a){return new P.e7(null,null,[a])},
iO:function(a){return},
hl:function(a,b){P.cC(null,null,$.o,a,b)},
iL:function(){},
iv:function(a,b){var u=$.o
if(u===C.e)return P.fn(a,H.e(b,{func:1,ret:-1}))
return P.fn(a,H.e(u.b6(b),{func:1,ret:-1}))},
cC:function(a,b,c,d,e){var u={}
u.a=d
P.iP(new P.eV(u,e))},
hm:function(a,b,c,d,e){var u,t=$.o
if(t===c)return d.$0()
$.o=c
u=t
try{t=d.$0()
return t}finally{$.o=u}},
hn:function(a,b,c,d,e,f,g){var u,t=$.o
if(t===c)return d.$1(e)
$.o=c
u=t
try{t=d.$1(e)
return t}finally{$.o=u}},
iN:function(a,b,c,d,e,f,g,h,i){var u,t=$.o
if(t===c)return d.$2(e,f)
$.o=c
u=t
try{t=d.$2(e,f)
return t}finally{$.o=u}},
aE:function(a,b,c,d){var u
H.e(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.b6(d):c.e1(d,-1)
P.ho(d)},
ea:function ea(a){this.a=a},
e9:function e9(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
eN:function eN(){},
eO:function eO(a,b){this.a=a
this.b=b},
e6:function e6(a,b){this.a=a
this.b=!1
this.$ti=b},
eQ:function eQ(a){this.a=a},
eR:function eR(a){this.a=a},
eW:function eW(a){this.a=a},
ed:function ed(a,b){this.a=a
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
ee:function ee(){},
e7:function e7(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
d8:function d8(a,b){this.a=a
this.b=b},
eg:function eg(){},
e8:function e8(a,b){this.a=a
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
eo:function eo(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
es:function es(a){this.a=a},
et:function et(a){this.a=a},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a,b){this.a=a
this.b=b},
ev:function ev(a,b){this.a=a
this.b=b},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eA:function eA(a){this.a=a},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
ex:function ex(a,b,c){this.a=a
this.b=b
this.c=c},
co:function co(a){this.a=a
this.b=null},
dQ:function dQ(){},
dR:function dR(a,b){this.a=a
this.b=b},
dS:function dS(a,b){this.a=a
this.b=b},
aa:function aa(){},
cp:function cp(){},
eh:function eh(){},
ef:function ef(){},
eJ:function eJ(){},
ej:function ej(){},
ei:function ei(a,b){this.b=a
this.a=null
this.$ti=b},
bF:function bF(){},
eE:function eE(a,b){this.a=a
this.b=b},
bG:function bG(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
eK:function eK(a){this.$ti=a},
H:function H(a,b){this.a=a
this.b=b},
eP:function eP(){},
eV:function eV(a,b){this.a=a
this.b=b},
eF:function eF(){},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function(a,b,c){return H.t(H.j_(a,new H.M([b,c])),"$ih1",[b,c],"$ah1")},
ie:function(a,b,c){var u,t
if(P.ft(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.l([],[P.r])
C.a.j($.Q,a)
try{P.iI(a,u)}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=P.h8(b,H.j7(u,"$iJ"),", ")+c
return t.charCodeAt(0)==0?t:t},
fW:function(a,b,c){var u,t
if(P.ft(a))return b+"..."+c
u=new P.bw(b)
C.a.j($.Q,a)
try{t=u
t.a=P.h8(t.a,a,", ")}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ft:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
iI:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
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
h3:function(a){var u,t={}
if(P.ft(a))return"{...}"
u=new P.bw("")
try{C.a.j($.Q,a)
u.a+="{"
t.a=!0
a.V(0,new P.dj(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
db:function db(){},
a9:function a9(){},
di:function di(){},
dj:function dj(a,b){this.a=a
this.b=b},
dk:function dk(){},
f4:function(a){var u=H.ip(a,null)
if(u!=null)return u
throw H.h(P.ff(a,null))},
iY:function(a){var u=H.io(a)
if(u!=null)return u
throw H.h(P.ff("Invalid double",a))},
ic:function(a){if(a instanceof H.bf)return a.h(0)
return"Instance of '"+H.b(H.bq(a))+"'"},
h6:function(a){return new H.c0(a,H.fh(a,!1,!0,!1,!1,!1))},
h8:function(a,b,c){var u=J.i0(b)
if(!u.w())return a
if(c.length===0){do a+=H.b(u.gA())
while(u.w())}else{a+=H.b(u.gA())
for(;u.w();)a=a+c+H.b(u.gA())}return a},
as:function(a){return new P.aI(1000*a)},
fe:function(){return new P.aj()},
bU:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ic(a)},
ag:function(a){return new P.a5(!1,null,null,a)},
fO:function(a,b,c){return new P.a5(!0,a,b,c)},
i3:function(a){return new P.a5(!1,null,a,"Must not be null")},
iq:function(a){var u=null
return new P.br(u,u,!1,u,u,a)},
c9:function(a,b){return new P.br(null,null,!0,a,b,"Value not in range")},
dw:function(a,b,c,d,e){return new P.br(b,c,!0,a,d,"Invalid value")},
ir:function(a,b,c){if(0>a||a>c)throw H.h(P.dw(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.dw(b,a,c,"end",null))
return b}return c},
fV:function(a,b,c,d,e){var u=H.U(e==null?J.fb(b):e)
return new P.d9(u,!0,a,c,"Index out of range")},
Y:function(a){return new P.e0(a)},
hb:function(a){return new P.dZ(a)},
aY:function(a){return new P.bv(a)},
bS:function(a){return new P.cT(a)},
ff:function(a,b){return new P.d7(a,b)},
ap:function ap(){},
af:function af(){},
aI:function aI(a){this.a=a},
d2:function d2(){},
d3:function d3(){},
aj:function aj(){},
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
d9:function d9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e0:function e0(a){this.a=a},
dZ:function dZ(a){this.a=a},
bv:function bv(a){this.a=a},
cT:function cT(a){this.a=a},
dr:function dr(){},
ch:function ch(){},
d0:function d0(a){this.a=a},
en:function en(a){this.a=a},
d7:function d7(a,b){this.a=a
this.b=b},
x:function x(){},
J:function J(){},
K:function K(){},
p:function p(){},
m:function m(){},
n:function n(){},
aP:function aP(){},
ca:function ca(){},
B:function B(){},
dP:function dP(){this.b=this.a=0},
r:function r(){},
bw:function bw(a){this.a=a},
iX:function(a){var u={}
a.V(0,new P.eZ(u))
return u},
eZ:function eZ(a){this.a=a},
hd:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eB:function eB(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
f:function f(){},
bP:function bP(){},
a8:function a8(){},
c8:function c8(){},
az:function az(){},
cm:function cm(){},
by:function by(){}},W={
ji:function(){return window},
bQ:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
fU:function(a){H.k(a,"$iaK")
return"wheel"},
fo:function(a,b){return document.createElement(a)},
id:function(){var u=document.createElement("img")
return u},
iw:function(a){return new TouchEvent(a)},
ix:function(){var u
try{W.iw("touches")
return!0}catch(u){H.a4(u)}return!1},
eC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
he:function(a,b,c,d){var u=W.eC(W.eC(W.eC(W.eC(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
u:function(a,b,c,d,e){var u=W.hq(new W.em(c),W.c),t=u!=null
if(t&&!0){H.e(u,{func:1,args:[W.c]})
if(t)J.hX(a,b,u,!1)}return new W.el(a,b,u,!1,[e])},
hq:function(a,b){var u=$.o
if(u===C.e)return a
return u.e2(a,b)},
i:function i(){},
cH:function cH(){},
cI:function cI(){},
bO:function bO(){},
ah:function ah(){},
bR:function bR(){},
ar:function ar(){},
bg:function bg(){},
d_:function d_(){},
d1:function d1(){},
bT:function bT(){},
ai:function ai(){},
c:function c(){},
aK:function aK(){},
d6:function d6(){},
a0:function a0(){},
ak:function ak(){},
al:function al(){},
bo:function bo(){},
z:function z(){},
S:function S(){},
dI:function dI(){},
ab:function ab(){},
an:function an(){},
dW:function dW(){},
aB:function aB(){},
e1:function e1(){},
ad:function ad(){},
bz:function bz(){},
cr:function cr(){},
ek:function ek(){},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
el:function el(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
em:function em(a){this.a=a},
bk:function bk(){},
d5:function d5(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cq:function cq(){},
cw:function cw(){},
cx:function cx(){}},Y={cU:function cU(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.f=b
_.y=_.x=_.r=null},cV:function cV(a){this.a=a},cW:function cW(a){this.a=a},cX:function cX(a){this.a=a},cY:function cY(a){this.a=a},cZ:function cZ(a){this.a=a},
iH:function(a){var u=a.gap()
return $.hV().cq(u,new Y.eS(a))},
iC:function(a){var u=new Y.b1()
u.cI(a)
return u},
ck:function(a,b){var u=H.l([],[Y.cl]),t=$.v
$.v=t+1
t=new Y.cj(u,t,H.l([],[A.a6]),T.y())
t.sal(0,a)
t.bf=Y.h9(b.a,b.b,b.c,b.Q,!1,b.cy,b.f,b.dy,!1,b.fr,b.db,b.dx,b.e,b.d,b.cx,!1,b.ch,b.r)
t.D|=3
u=t.bn(0,"keyDown",R.aO)
u.at(H.e(t.gdn(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bn(0,"textInput",R.aZ)
u.at(H.e(t.gdB(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bn(0,"mouseDown",R.N)
u.at(H.e(t.gdt(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
return t},
h9:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new Y.dV(a,b,c,n,m,g,r,!1,!1,!1,d,q,o,f,k,l,h,j)},
eS:function eS(a){this.a=a},
b1:function b1(){this.c=this.b=this.a=0},
cj:function cj(a,b,c,d){var _=this
_.B=""
_.bf=null
_.cd="none"
_.eV=_.eU=_.eT=_.eS=_.bg=_.eR=_.ce=0
_.cf=!1
_.cg=4294967295
_.C=_.H=100
_.a3=_.ae=0
_.aB=a
_.D=3
_.aC=_.af=null
_.k4=!0
_.b=b
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
dV:function dV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
cl:function cl(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.e=_.d=_.c=0}},Z={d4:function d4(a,b,c,d,e,f,g){var _=this
_.p=a
_.I=b
_.ag=c
_.q=null
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
h0:function(){var u=new K.de(P.aA(P.m))
u.b=u.a=new K.e4()
return u},
e4:function e4(){this.b=this.a=null},
de:function de(a){var _=this
_.b=_.a=null
_.c=0
_.d=a}},A={
aq:function(a,b,c){var u=L.h7(C.b.m(a),C.b.m(b),c).gaJ().aN(1),t=u.c,s=u.e
return new A.a_(t.c/s,t.d/s,u)},
i5:function(a){var u,t,s,r,q,p=$.hG(),o=A.i4(a,p.d),n=o.b,m=o.c
p.toString
u=W.id()
t=W.a0
s=new P.C($.o,[t])
r=new N.bW(u,new P.e8(s,[t]),n)
t=W.c
q={func:1,ret:-1,args:[t]}
r.d=W.u(u,"load",H.e(r.gdl(),q),!1,t)
r.e=W.u(u,"error",H.e(r.gdj(),q),!1,t)
u.src=n
return s.bu(new A.cO(m),A.a_)},
i4:function(a,b){var u=new A.cL()
u.cF(a,b)
return u},
iu:function(a,b,c,d){var u="middleClick",t="rightClick",s=P.m,r=T.y(),q=T.y(),p=T.y(),o=H.l([],[A.aC]),n=H.l([new A.b3("mouseDown","mouseUp","click","doubleClick"),new A.b3("middleMouseDown","middleMouseUp",u,u),new A.b3("rightMouseDown","rightMouseUp",t,t)],[A.b3]),m=K.h0(),l=H.l([],[A.I]),k=$.v
$.v=k+1
k=new A.F(new U.E(0,0,0,0,[s]),r,q,p,new R.aV("render",!1),C.k,C.m,C.n,C.i,new U.A(0,0,[s]),o,new H.M([P.x,A.b4]),n,m,l,k,H.l([],[A.a6]),T.y())
k.cG(a,b,c,d)
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
cO:function cO(a){this.a=a},
cL:function cL(){this.c=this.b=this.a=null},
cM:function cM(a){this.a=a},
cN:function cN(a){this.d=a},
a6:function a6(){},
I:function I(){},
bh:function bh(){},
bX:function bX(){},
dA:function dA(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=!1},
dB:function dB(a){this.a=a},
dC:function dC(a,b){this.a=a
this.b=b},
bu:function bu(a){this.b=a},
aX:function aX(a){this.b=a},
X:function X(a){this.b=a},
F:function F(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.q=_.ag=_.I=_.p=null
_.cl=_.ck=_.cj=_.ci=0
_.aD=1
_.ek=!1
_.bk=_.bj=_.bi=_.bh=0
_.el=a
_.aE=b
_.cm=c
_.c6=d
_.ed=e
_.P=null
_.bc=f
_.aA=g
_.c7=h
_.c8=i
_.c9="default"
_.ca=j
_.bd=null
_.cb=k
_.cc=l
_.ee=m
_.ef=n
_.be=4294967295
_.eh=_.eg=!0
_.ej=_.ei=!1
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
dN:function dN(a){this.a=a},
dK:function dK(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
dM:function dM(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d,e,f){var _=this
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
dJ:function dJ(a){this.a=a
this.f=4294967295},
b3:function b3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null
_.f=!1
_.x=_.r=0},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(){}},L={
hi:function(){var u,t
if($.fq===-1){u=window
t=H.e(new L.eT(),{func:1,ret:-1,args:[P.m]})
C.I.d_(u)
$.fq=C.I.dL(u,W.hq(t,P.m))}},
is:function(a){var u=T.y(),t=new T.aQ(new Float32Array(16))
t.a5()
t=new L.bA(C.f,u,t,null)
u=new L.aW(a,t)
u.e=t
return u},
h7:function(a,b,c){var u,t,s,r,q=new L.bt(C.x)
if(a<=0)H.G(P.ag("width"))
if(b<=0)H.G(P.ag("height"))
u=q.a=V.bK(a)
t=q.b=V.bK(b)
s=W.bQ(t,u)
q.c=q.d=s
if(c!==0){r=s.getContext("2d")
r.fillStyle=V.fx(c)
r.fillRect(0,0,u,t)}return q},
fl:function(a,b,c,d,e){var u,t,s,r,q,p=new Int16Array(6),o=new Float32Array(16),n=new L.ay(a,b,c,d,e,p,o),m=d===0
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
o[9]=t}else H.G(P.fe())
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
o[11]=q}else H.G(P.fe())
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
aT:function aT(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
aU:function aU(a){var _=this
_.a=a
_.d=_.c=0
_.e=-1
_.x=_.r=_.f=null},
cd:function cd(a){this.b=a},
ax:function ax(){},
dx:function dx(){},
cb:function cb(a,b,c,d,e,f,g){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=1
_.a=e
_.b=f
_.c=g},
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dz:function dz(){},
ce:function ce(){},
eT:function eT(){},
cf:function cf(){},
eD:function eD(){},
bs:function bs(){},
dD:function dD(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dE:function dE(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
dF:function dF(a,b,c,d,e){var _=this
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
aW:function aW(a,b){var _=this
_.b=0
_.c=a
_.d=b
_.e=null},
am:function am(){this.c=this.b=this.a=0},
bt:function bt(a){var _=this
_.b=_.a=0
_.d=_.c=null
_.e=a
_.x=null
_.y=-1
_.z=!1
_.ch=_.Q=null},
cg:function cg(a){this.a=a},
ay:function ay(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.y=_.x=null
_.z=!1},
dG:function dG(){}},T={dh:function dh(a){this.a=a},
dl:function(a,b,c,d,e,f){var u=new Float32Array(6)
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f
return new T.c3(u)},
y:function(){var u=new Float32Array(6)
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0
return new T.c3(u)},
c3:function c3(a){this.a=a},
aQ:function aQ(a){this.a=a}},R={
fp:function(a,b,c){var u,t,s,r=b.length
for(u={func:1,ret:-1,args:[c]},t=0;t<r;++t){if(t<0||t>=b.length)return H.a(b,t)
s=b[t]
if(!s.c){a.r=a.f=!1
H.e(s.f,u).$1(H.j(a,c))}else{C.a.bq(b,t);--r;--t}}},
cR:function cR(){},
aJ:function aJ(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aL:function aL(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
aV:function aV(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
L:function L(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=!1},
bV:function bV(){},
bi:function bi(a){this.b=a},
at:function at(a,b,c){var _=this
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
da:function da(){},
aO:function aO(){},
N:function N(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1},
aZ:function aZ(){},
ao:function ao(a,b,c,d){var _=this
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
_.$ti=e}},N={bW:function bW(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=null}},Q={dm:function dm(){},
iF:function(){var u,t
try{u=W.ix()
return u}catch(t){H.a4(t)
return!1}}},O={
bn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
fZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},V={
fw:function(a){return"rgb("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+")"},
fx:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.b((a>>>24&255)/255)+")"},
ja:function(a,b){if(typeof b!=="number")return H.T(b)
if(a<=b)return a
else return b},
eY:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
bK:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.h(P.ag("The supplied value ("+H.b(a)+") is not an int."))},
Z:function(a){return a},
hv:function(a){return a}},F={
f7:function(){var u=0,t=P.cB(P.p),s,r,q,p
var $async$f7=P.cD(function(a,b){if(a===1)return P.cy(b,t)
while(true)switch(u){case 0:s=H.l([],[P.x])
r=H.l([],[A.W])
q=H.l([],[A.I])
p=$.v
$.v=p+1
new Y.cU(new Z.d4(s,r,C.R,q,p,H.l([],[A.a6]),T.y()),new A.dJ(C.l)).e8()
return P.cz(null,t)}})
return P.cA($async$f7,t)}}
var w=[C,H,J,P,W,Y,Z,K,A,L,T,R,U,N,Q,O,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fj.prototype={}
J.w.prototype={
v:function(a,b){return a===b},
gi:function(a){return H.aR(a)},
h:function(a){return"Instance of '"+H.b(H.bq(a))+"'"}}
J.dc.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159},
$iap:1}
J.c_.prototype={
v:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
$ip:1}
J.c2.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.ds.prototype={}
J.b_.prototype={}
J.aw.prototype={
h:function(a){var u=a[$.hH()]
if(u==null)return this.cE(a)
return"JavaScript function for "+H.b(J.cG(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ifg:1}
J.av.prototype={
j:function(a,b){H.j(b,H.d(a,0))
if(!!a.fixed$length)H.G(P.Y("add"))
a.push(b)},
bq:function(a,b){if(!!a.fixed$length)H.G(P.Y("removeAt"))
if(b<0||b>=a.length)throw H.h(P.c9(b,null))
return a.splice(b,1)[0]},
aK:function(a,b){var u
if(!!a.fixed$length)H.G(P.Y("remove"))
for(u=0;u<a.length;++u)if(J.cF(a[u],b)){a.splice(u,1)
return!0}return!1},
V:function(a,b){var u,t
H.e(b,{func:1,ret:-1,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bS(a))}},
ep:function(a,b,c,d){var u,t,s
H.j(b,d)
H.e(c,{func:1,ret:d,args:[d,H.d(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.h(P.bS(a))}return t},
eu:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.cF(a[u],b))return u
return-1},
e5:function(a,b){var u
for(u=0;u<a.length;++u)if(J.cF(a[u],b))return!0
return!1},
h:function(a){return P.fW(a,"[","]")},
gS:function(a){return new J.cJ(a,a.length,[H.d(a,0)])},
gi:function(a){return H.aR(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.G(P.Y("set length"))
if(b<0)throw H.h(P.dw(b,0,null,"newLength",null))
a.length=b},
t:function(a,b,c){H.j(c,H.d(a,0))
if(!!a.immutable$list)H.G(P.Y("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bJ(a,b))
a[b]=c},
$iJ:1,
$iK:1}
J.fi.prototype={}
J.cJ.prototype={
gA:function(){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.fD(s))
u=t.c
if(u>=r){t.sbI(null)
return!1}t.sbI(s[u]);++t.c
return!0},
sbI:function(a){this.d=H.j(a,H.d(this,0))}}
J.bm.prototype={
gey:function(a){return a===0?1/a<0:a<0},
ad:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.Y(""+a+".ceil()"))},
eo:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.Y(""+a+".floor()"))},
m:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.Y(""+a+".round()"))},
eH:function(a,b){var u
if(b<0||b>20)throw H.h(P.dw(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gey(a))return"-"+u
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
cA:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
U:function(a,b){return(a|0)===a?a/b|0:this.dS(a,b)},
dS:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.Y("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
dQ:function(a,b){var u
if(a>0)u=this.dP(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dP:function(a,b){return b>31?0:a>>>b},
$iaf:1,
$im:1}
J.bZ.prototype={$ix:1}
J.bY.prototype={}
J.aN.prototype={
ay:function(a,b){if(b<0)throw H.h(H.bJ(a,b))
if(b>=a.length)H.G(H.bJ(a,b))
return a.charCodeAt(b)},
ao:function(a,b){if(b>=a.length)throw H.h(H.bJ(a,b))
return a.charCodeAt(b)},
bZ:function(a,b){return new H.eL(b,a,0)},
L:function(a,b){if(typeof b!=="string")throw H.h(P.fO(b,null,null))
return a+b},
cC:function(a,b){if(typeof b==="string")return H.l(a.split(b),[P.r])
else if(b instanceof H.c0&&b.gd8().exec("").length-2===0)return H.l(a.split(b.b),[P.r])
else return this.cY(a,b)},
cY:function(a,b){var u,t,s,r,q,p,o=H.l([],[P.r])
for(u=J.i_(b,a),u=u.gS(u),t=0,s=1;u.w();){r=u.gA()
q=r.gbD(r)
p=r.gaz()
s=p-q
if(s===0&&t===q)continue
C.a.j(o,this.an(a,t,q))
t=p}if(t<a.length||s>0)C.a.j(o,this.bE(a,t))
return o},
an:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.c9(b,null))
if(b>c)throw H.h(P.c9(b,null))
if(c>a.length)throw H.h(P.c9(c,null))
return a.substring(b,c)},
bE:function(a,b){return this.an(a,b,null)},
eJ:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.ao(r,0)===133){u=J.ih(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.ay(r,t)===133?J.ii(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
aO:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aH:function(a,b){var u=b-a.length
if(u<=0)return a
return this.aO(" ",u)+a},
h:function(a){return a},
gi:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ih5:1,
$ir:1}
H.dg.prototype={
gA:function(){return this.d},
w:function(){var u,t=this,s=t.a,r=J.hx(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.bS(s))
u=t.c
if(u>=q){t.sbJ(null)
return!1}t.sbJ(r.c5(s,u));++t.c
return!0},
sbJ:function(a){this.d=H.j(a,H.d(this,0))}}
H.aM.prototype={}
H.dt.prototype={
$0:function(){return C.b.eo(1000*this.a.now())},
$S:8}
H.dX.prototype={
J:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.dq.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.dd.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.e_.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bj.prototype={}
H.fa.prototype={
$1:function(a){if(!!J.q(a).$iaj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.cv.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iB:1}
H.bf.prototype={
h:function(a){var u=H.bq(this).trim()
return"Closure '"+u+"'"},
$ifg:1,
geN:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dU.prototype={}
H.dO.prototype={
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
if(t==null)u=H.aR(this.a)
else u=typeof t!=="object"?J.aH(t):H.aR(t)
return(u^H.aR(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.bq(u))+"'")}}
H.cn.prototype={
h:function(a){return this.a}}
H.cS.prototype={
h:function(a){return this.a}}
H.dH.prototype={
h:function(a){return"RuntimeError: "+H.b(this.a)}}
H.e5.prototype={
h:function(a){return"Assertion failed: "+P.bU(this.a)}}
H.bx.prototype={
gau:function(){var u=this.b
return u==null?this.b=H.bc(this.a):u},
h:function(a){return this.gau()},
gi:function(a){var u=this.d
return u==null?this.d=C.c.gi(this.gau()):u},
v:function(a,b){if(b==null)return!1
return b instanceof H.bx&&this.gau()===b.gau()}}
H.M.prototype={
gk:function(a){return this.a},
c2:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.bO(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.bO(t,a)}else return s.ev(a)},
ev:function(a){var u=this.d
if(u==null)return!1
return this.aF(this.aq(u,J.aH(a)&0x3ffffff),a)>=0},
n:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a7(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a7(r,b)
s=t==null?null:t.b
return s}else return q.ew(b)},
ew:function(a){var u,t,s=this.d
if(s==null)return
u=this.aq(s,J.aH(a)&0x3ffffff)
t=this.aF(u,a)
if(t<0)return
return u[t].b},
t:function(a,b,c){var u,t,s,r,q,p,o=this
H.j(b,H.d(o,0))
H.j(c,H.d(o,1))
if(typeof b==="string"){u=o.b
o.bK(u==null?o.b=o.aY():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bK(t==null?o.c=o.aY():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aY()
r=J.aH(b)&0x3ffffff
q=o.aq(s,r)
if(q==null)o.b4(s,r,[o.aZ(b,c)])
else{p=o.aF(q,b)
if(p>=0)q[p].b=c
else q.push(o.aZ(b,c))}}},
cq:function(a,b){var u,t=this
H.j(a,H.d(t,0))
H.e(b,{func:1,ret:H.d(t,1)})
if(t.c2(a))return t.n(0,a)
u=b.$0()
t.t(0,a,u)
return u},
aK:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dJ(this.c,b)
else return this.ex(b)},
ex:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=J.aH(a)&0x3ffffff
t=q.aq(p,u)
s=q.aF(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bX(r)
if(t.length===0)q.aT(p,u)
return r.b},
c1:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.aX()}},
V:function(a,b){var u,t,s=this
H.e(b,{func:1,ret:-1,args:[H.d(s,0),H.d(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.bS(s))
u=u.c}},
bK:function(a,b,c){var u,t=this
H.j(b,H.d(t,0))
H.j(c,H.d(t,1))
u=t.a7(a,b)
if(u==null)t.b4(a,b,t.aZ(b,c))
else u.b=c},
dJ:function(a,b){var u
if(a==null)return
u=this.a7(a,b)
if(u==null)return
this.bX(u)
this.aT(a,b)
return u.b},
aX:function(){this.r=this.r+1&67108863},
aZ:function(a,b){var u,t=this,s=new H.df(H.j(a,H.d(t,0)),H.j(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aX()
return s},
bX:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.aX()},
aF:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cF(a[t].a,b))return t
return-1},
h:function(a){return P.h3(this)},
a7:function(a,b){return a[b]},
aq:function(a,b){return a[b]},
b4:function(a,b,c){a[b]=c},
aT:function(a,b){delete a[b]},
bO:function(a,b){return this.a7(a,b)!=null},
aY:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b4(t,u,t)
this.aT(t,u)
return t},
$ih1:1}
H.df.prototype={}
H.f1.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.f2.prototype={
$2:function(a,b){return this.a(a,b)},
$S:14}
H.f3.prototype={
$1:function(a){return this.a(H.V(a))},
$S:33}
H.c0.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gd9:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.fh(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
gd8:function(){var u=this,t=u.d
if(t!=null)return t
t=u.b
return u.d=H.fh(u.a+"|()",t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
en:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.cu(u)},
bZ:function(a,b){return new H.e2(this,b,0)},
d1:function(a,b){var u,t=this.gd9()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.cu(u)},
$ih5:1}
H.cu.prototype={
gbD:function(a){return this.b.index},
gaz:function(){var u=this.b
return u.index+u[0].length},
$iaP:1,
$ica:1}
H.e2.prototype={
gS:function(a){return new H.e3(this.a,this.b,this.c)},
$aJ:function(){return[P.ca]}}
H.e3.prototype={
gA:function(){return this.d},
w:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.d1(p,u)
if(s!=null){q.d=s
r=s.gaz()
if(s.b.index===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.fy(t).ay(t,p)
if(p>=55296&&p<=56319){p=C.c.ay(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.dT.prototype={
gaz:function(){return this.a+this.c.length},
$iaP:1,
gbD:function(a){return this.a}}
H.eL.prototype={
gS:function(a){return new H.eM(this.a,this.b,this.c)},
$aJ:function(){return[P.aP]}}
H.eM.prototype={
w:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.dT(u,q)
s.c=t===s.c?t+1:t
return!0},
gA:function(){return this.d}}
H.c7.prototype={$ijG:1}
H.c4.prototype={
gk:function(a){return a.length},
$ic1:1,
$ac1:function(){}}
H.c5.prototype={
n:function(a,b){H.hg(b,a,a.length)
return a[b]},
$aaM:function(){return[P.af]},
$aa9:function(){return[P.af]},
$iJ:1,
$aJ:function(){return[P.af]},
$iK:1,
$aK:function(){return[P.af]}}
H.c6.prototype={
$aaM:function(){return[P.x]},
$aa9:function(){return[P.x]},
$iJ:1,
$aJ:function(){return[P.x]},
$iK:1,
$aK:function(){return[P.x]}}
H.dn.prototype={$ijm:1}
H.dp.prototype={
n:function(a,b){H.hg(b,a,a.length)
return a[b]},
$ijn:1}
H.bB.prototype={}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
P.ea.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.e9.prototype={
$1:function(a){var u,t
this.a.a=H.e(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.eb.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ec.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eN.prototype={
cJ:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b8(new P.eO(this,b),0),a)
else throw H.h(P.Y("`setTimeout()` not found."))}}
P.eO.prototype={
$0:function(){this.b.$0()},
$S:1}
P.e6.prototype={
b8:function(a,b){var u,t,s=this,r=H.d(s,0)
H.bL(b,{futureOr:1,type:r})
u=!s.b||H.ae(b,"$iR",s.$ti,"$aR")
t=s.a
if(u)t.bL(b)
else t.bN(H.j(b,r))},
b9:function(a,b){var u=this.a
if(this.b)u.a0(a,b)
else u.bM(a,b)},
$iib:1}
P.eQ.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:15}
P.eR.prototype={
$2:function(a,b){this.a.$2(1,new H.bj(a,H.k(b,"$iB")))},
$S:17}
P.eW.prototype={
$2:function(a,b){this.a(H.U(a),b)},
$S:25}
P.ed.prototype={}
P.O.prototype={
b0:function(){},
b1:function(){},
sb_:function(a){this.dy=H.t(a,"$iO",this.$ti,"$aO")},
sbV:function(a){this.fr=H.t(a,"$iO",this.$ti,"$aO")}}
P.ee.prototype={
gd6:function(){return this.c<4},
cO:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.d(p,0)
H.e(a,{func:1,ret:-1,args:[o]})
H.e(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.ht()
o=new P.cs($.o,c,p.$ti)
o.dM()
return o}u=$.o
t=d?1:0
s=p.$ti
r=new P.O(p,u,t,s)
r.cH(a,b,c,d,o)
r.sbV(r)
r.sb_(r)
H.t(r,"$iO",s,"$aO")
r.dx=p.c&1
q=p.e
p.sd5(r)
r.sb_(null)
r.sbV(q)
if(q==null)p.sd2(r)
else q.sb_(r)
if(p.d==p.e)P.iO(p.a)
return r},
cK:function(){if((this.c&4)!==0)return new P.bv("Cannot add new events after calling close")
return new P.bv("Cannot add new events while doing an addStream")},
j:function(a,b){var u=this
H.j(b,H.d(u,0))
if(!u.gd6())throw H.h(u.cK())
u.b3(b)},
sd2:function(a){this.d=H.t(a,"$iO",this.$ti,"$aO")},
sd5:function(a){this.e=H.t(a,"$iO",this.$ti,"$aO")},
$iju:1,
$ijJ:1,
$ib0:1}
P.e7.prototype={
b3:function(a){var u,t
H.j(a,H.d(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.cN(new P.ei(a,t))}}
P.d8.prototype={
$0:function(){this.b.aS(null)},
$S:0}
P.eg.prototype={
b9:function(a,b){var u
if(a==null)a=new P.bp()
u=this.a
if(u.a!==0)throw H.h(P.aY("Future already completed"))
u.bM(a,b)},
e4:function(a){return this.b9(a,null)},
$iib:1}
P.e8.prototype={
b8:function(a,b){var u
H.bL(b,{futureOr:1,type:H.d(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.aY("Future already completed"))
u.bL(b)}}
P.a3.prototype={
eA:function(a){if((this.c&15)!==6)return!0
return this.b.b.bs(H.e(this.d,{func:1,ret:P.ap,args:[P.n]}),a.a,P.ap,P.n)},
eq:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.b9(u,{func:1,args:[P.n,P.B]}))return H.bL(r.eG(u,a.a,a.b,null,t,P.B),s)
else return H.bL(r.bs(H.e(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.C.prototype={
bv:function(a,b,c){var u,t,s,r=H.d(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.o
if(u!==C.e){H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.iM(b,u)}t=new P.C($.o,[c])
s=b==null?1:3
this.aR(new P.a3(t,s,a,b,[r,c]))
return t},
bu:function(a,b){return this.bv(a,null,b)},
bW:function(a,b,c){var u,t=H.d(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.C($.o,[c])
this.aR(new P.a3(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
aR:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ia3")
t.c=a}else{if(s===2){u=H.k(t.c,"$iC")
s=u.a
if(s<4){u.aR(a)
return}t.a=s
t.c=u.c}P.aE(null,null,t.b,H.e(new P.eo(t,a),{func:1,ret:-1}))}},
bU:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.k(p.c,"$ia3")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.k(p.c,"$iC")
u=q.a
if(u<4){q.bU(a)
return}p.a=u
p.c=q.c}o.a=p.as(a)
P.aE(null,null,p.b,H.e(new P.ew(o,p),{func:1,ret:-1}))}},
ar:function(){var u=H.k(this.c,"$ia3")
this.c=null
return this.as(u)},
as:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aS:function(a){var u,t,s=this,r=H.d(s,0)
H.bL(a,{futureOr:1,type:r})
u=s.$ti
if(H.ae(a,"$iR",u,"$aR"))if(H.ae(a,"$iC",u,null))P.er(a,s)
else P.hc(a,s)
else{t=s.ar()
H.j(a,r)
s.a=4
s.c=a
P.b2(s,t)}},
bN:function(a){var u,t=this
H.j(a,H.d(t,0))
u=t.ar()
t.a=4
t.c=a
P.b2(t,u)},
a0:function(a,b){var u,t=this
H.k(b,"$iB")
u=t.ar()
t.a=8
t.c=new P.H(a,b)
P.b2(t,u)},
cV:function(a){return this.a0(a,null)},
bL:function(a){var u=this
H.bL(a,{futureOr:1,type:H.d(u,0)})
if(H.ae(a,"$iR",u.$ti,"$aR")){u.cR(a)
return}u.a=1
P.aE(null,null,u.b,H.e(new P.eq(u,a),{func:1,ret:-1}))},
cR:function(a){var u=this,t=u.$ti
H.t(a,"$iR",t,"$aR")
if(H.ae(a,"$iC",t,null)){if(a.a===8){u.a=1
P.aE(null,null,u.b,H.e(new P.ev(u,a),{func:1,ret:-1}))}else P.er(a,u)
return}P.hc(a,u)},
bM:function(a,b){this.a=1
P.aE(null,null,this.b,H.e(new P.ep(this,a,b),{func:1,ret:-1}))},
$iR:1}
P.eo.prototype={
$0:function(){P.b2(this.a,this.b)},
$S:0}
P.ew.prototype={
$0:function(){P.b2(this.b,this.a.a)},
$S:0}
P.es.prototype={
$1:function(a){var u=this.a
u.a=0
u.aS(a)},
$S:6}
P.et.prototype={
$2:function(a,b){H.k(b,"$iB")
this.a.a0(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.eu.prototype={
$0:function(){this.a.a0(this.b,this.c)},
$S:0}
P.eq.prototype={
$0:function(){var u=this.a
u.bN(H.j(this.b,H.d(u,0)))},
$S:0}
P.ev.prototype={
$0:function(){P.er(this.b,this.a)},
$S:0}
P.ep.prototype={
$0:function(){this.a.a0(this.b,this.c)},
$S:0}
P.ez.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.ct(H.e(s.d,{func:1}),null)}catch(r){u=H.a4(r)
t=H.bb(r)
if(o.d){s=H.k(o.a.a.c,"$iH").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.k(o.a.a.c,"$iH")
else q.b=new P.H(u,t)
q.a=!0
return}if(!!J.q(n).$iR){if(n instanceof P.C&&n.a>=4){if(n.a===8){s=o.b
s.b=H.k(n.c,"$iH")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.bu(new P.eA(p),null)
s.a=!1}},
$S:1}
P.eA.prototype={
$1:function(a){return this.a},
$S:13}
P.ey.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.d(s,0)
q=H.j(n.c,r)
p=H.d(s,1)
n.a.b=s.b.b.bs(H.e(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a4(o)
t=H.bb(o)
s=n.a
s.b=new P.H(u,t)
s.a=!0}},
$S:1}
P.ex.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iH")
r=m.c
if(H.b7(r.eA(u))&&r.e!=null){q=m.b
q.b=r.eq(u)
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
P.co.prototype={}
P.dQ.prototype={
gk:function(a){var u={},t=new P.C($.o,[P.x])
u.a=0
this.aG(new P.dR(u,this),!0,new P.dS(u,t),t.gcU())
return t}}
P.dR.prototype={
$1:function(a){H.j(a,H.d(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.p,args:[H.d(this.b,0)]}}}
P.dS.prototype={
$0:function(){this.b.aS(this.a.a)},
$S:0}
P.aa.prototype={}
P.cp.prototype={
gi:function(a){return(H.aR(this.a)^892482866)>>>0},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cp&&b.a===this.a}}
P.eh.prototype={
b0:function(){H.t(this,"$iaa",[H.d(this.x,0)],"$aaa")},
b1:function(){H.t(this,"$iaa",[H.d(this.x,0)],"$aaa")}}
P.ef.prototype={
cH:function(a,b,c,d,e){var u,t,s=this,r=H.d(s,0)
H.e(a,{func:1,ret:-1,args:[r]})
s.sdf(H.e(a,{func:1,ret:null,args:[r]}))
u=b==null?P.iW():b
if(H.b9(u,{func:1,ret:-1,args:[P.n,P.B]}))s.d.bp(u,null,P.n,P.B)
else if(H.b9(u,{func:1,ret:-1,args:[P.n]}))H.e(u,{func:1,ret:null,args:[P.n]})
else H.G(P.ag("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.e(c,{func:1,ret:-1})
t=c==null?P.ht():c
s.sdg(H.e(t,{func:1,ret:-1}))},
b0:function(){},
b1:function(){},
cN:function(a){var u=this,t=u.$ti,s=H.t(u.r,"$ibG",t,"$abG")
if(s==null){s=new P.bG(t)
u.sbT(s)}t=s.c
if(t==null)s.b=s.c=a
else s.c=t.a=a
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.bB(u)}},
b3:function(a){var u,t=this,s=H.d(t,0)
H.j(a,s)
u=t.e
t.e=u|32
t.d.cv(t.a,a,s)
t.e&=4294967263
t.cS((u&4)!==0)},
cS:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbT(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.b0()
else s.b1()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.bB(s)},
sdf:function(a){this.a=H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})},
sdg:function(a){H.e(a,{func:1,ret:-1})},
sbT:function(a){this.r=H.t(a,"$ibF",this.$ti,"$abF")},
$iaa:1,
$ib0:1}
P.eJ.prototype={
aG:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.e(c,{func:1,ret:-1})
return this.a.cO(H.e(a,{func:1,ret:-1,args:[H.d(this,0)]}),d,c,!0===b)},
ez:function(a){return this.aG(a,null,null,null)}}
P.ej.prototype={}
P.ei.prototype={}
P.bF.prototype={
bB:function(a){var u,t=this
H.t(a,"$ib0",t.$ti,"$ab0")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.hE(new P.eE(t,a))
t.a=1}}
P.eE.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.t(this.b,"$ib0",[H.d(r,0)],"$ab0")
t=r.b
s=t.a
r.b=s
if(s==null)r.c=null
H.t(u,"$ib0",[H.d(t,0)],"$ab0").b3(t.b)},
$S:0}
P.bG.prototype={}
P.cs.prototype={
dM:function(){var u=this
if((u.b&2)!==0)return
P.aE(null,null,u.a,H.e(u.gdN(),{func:1,ret:-1}))
u.b|=2},
dO:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.cu(u.c)},
$iaa:1}
P.eK.prototype={}
P.H.prototype={
h:function(a){return H.b(this.a)},
$iaj:1}
P.eP.prototype={$ijH:1}
P.eV.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bp():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u},
$S:0}
P.eF.prototype={
cu:function(a){var u,t,s,r=null
H.e(a,{func:1,ret:-1})
try{if(C.e===$.o){a.$0()
return}P.hm(r,r,this,a,-1)}catch(s){u=H.a4(s)
t=H.bb(s)
P.cC(r,r,this,u,H.k(t,"$iB"))}},
cv:function(a,b,c){var u,t,s,r=null
H.e(a,{func:1,ret:-1,args:[c]})
H.j(b,c)
try{if(C.e===$.o){a.$1(b)
return}P.hn(r,r,this,a,b,-1,c)}catch(s){u=H.a4(s)
t=H.bb(s)
P.cC(r,r,this,u,H.k(t,"$iB"))}},
e1:function(a,b){return new P.eH(this,H.e(a,{func:1,ret:b}),b)},
b6:function(a){return new P.eG(this,H.e(a,{func:1,ret:-1}))},
e2:function(a,b){return new P.eI(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
ct:function(a,b){H.e(a,{func:1,ret:b})
if($.o===C.e)return a.$0()
return P.hm(null,null,this,a,b)},
bs:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.j(b,d)
if($.o===C.e)return a.$1(b)
return P.hn(null,null,this,a,b,c,d)},
eG:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.j(b,e)
H.j(c,f)
if($.o===C.e)return a.$2(b,c)
return P.iN(null,null,this,a,b,c,d,e,f)},
bp:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}}
P.eH.prototype={
$0:function(){return this.a.ct(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.eG.prototype={
$0:function(){return this.a.cu(this.b)},
$S:1}
P.eI.prototype={
$1:function(a){var u=this.c
return this.a.cv(this.b,H.j(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.db.prototype={}
P.a9.prototype={
gS:function(a){return new H.dg(a,this.gk(a),[H.hz(this,a,"a9",0)])},
c5:function(a,b){return this.n(a,b)},
h:function(a){return P.fW(a,"[","]")}}
P.di.prototype={}
P.dj.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:9}
P.dk.prototype={
gk:function(a){return this.a},
h:function(a){return P.h3(this)},
$ih2:1}
P.ap.prototype={}
P.af.prototype={}
P.aI.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gi:function(a){return C.d.gi(this.a)},
h:function(a){var u,t,s,r=new P.d3(),q=this.a
if(q<0)return"-"+new P.aI(0-q).h(0)
u=r.$1(C.d.U(q,6e7)%60)
t=r.$1(C.d.U(q,1e6)%60)
s=new P.d2().$1(q%1e6)
return""+C.d.U(q,36e8)+":"+H.b(u)+":"+H.b(t)+"."+H.b(s)}}
P.d2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:10}
P.d3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:10}
P.aj.prototype={}
P.cK.prototype={
h:function(a){return"Assertion failed"}}
P.bp.prototype={
h:function(a){return"Throw of null."}}
P.a5.prototype={
gaW:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaV:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaW()+o+u
if(!q.a)return t
s=q.gaV()
r=P.bU(q.b)
return t+s+": "+r}}
P.br.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.d9.prototype={
gaW:function(){return"RangeError"},
gaV:function(){var u,t=H.U(this.b)
if(typeof t!=="number")return t.cz()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
P.e0.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.dZ.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bv.prototype={
h:function(a){return"Bad state: "+H.b(this.a)}}
P.cT.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bU(u)+"."}}
P.dr.prototype={
h:function(a){return"Out of Memory"},
$iaj:1}
P.ch.prototype={
h:function(a){return"Stack Overflow"},
$iaj:1}
P.d0.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.en.prototype={
h:function(a){return"Exception: "+this.a}}
P.d7.prototype={
h:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.an(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.x.prototype={}
P.J.prototype={
gk:function(a){var u,t=this.gS(this)
for(u=0;t.w();)++u
return u},
h:function(a){return P.ie(this,"(",")")}}
P.K.prototype={$iJ:1}
P.p.prototype={
gi:function(a){return P.n.prototype.gi.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.n.prototype={constructor:P.n,$in:1,
v:function(a,b){return this===b},
gi:function(a){return H.aR(this)},
h:function(a){return"Instance of '"+H.b(H.bq(this))+"'"},
toString:function(){return this.h(this)}}
P.aP.prototype={}
P.ca.prototype={$iaP:1}
P.B.prototype={}
P.dP.prototype={
gec:function(){var u,t,s=this.b
if(s==null)s=H.U($.dv.$0())
u=this.a
if(typeof s!=="number")return s.aQ()
t=s-u
if($.fm===1000)return t
return C.d.U(t,1000)}}
P.r.prototype={$ih5:1}
P.bw.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.i.prototype={}
W.cH.prototype={
h:function(a){return String(a)}}
W.cI.prototype={
h:function(a){return String(a)}}
W.bO.prototype={}
W.ah.prototype={
bz:function(a,b,c){var u=a.getContext(b,P.iX(c))
return u},
ge6:function(a){return a.getContext("2d")},
$iah:1,
$ifR:1}
W.bR.prototype={$ibR:1}
W.ar.prototype={
gk:function(a){return a.length}}
W.bg.prototype={
gk:function(a){return a.length}}
W.d_.prototype={}
W.d1.prototype={
h:function(a){return String(a)}}
W.bT.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.q(b)
if(!u.$iaS)return!1
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gT(b)&&a.height===u.gR(b)},
gi:function(a){return W.he(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gR:function(a){return a.height},
gX:function(a){return a.left},
gY:function(a){return a.top},
gT:function(a){return a.width},
$iaS:1,
$aaS:function(){return[P.m]}}
W.ai.prototype={
h:function(a){return a.localName},
gco:function(a){return new W.ct(a,"click",!1,[W.z])},
$iai:1}
W.c.prototype={$ic:1}
W.aK.prototype={
cL:function(a,b,c,d){return a.addEventListener(b,H.b8(H.e(c,{func:1,args:[W.c]}),1),!1)},
dI:function(a,b,c,d){return a.removeEventListener(b,H.b8(H.e(c,{func:1,args:[W.c]}),1),!1)},
$iaK:1}
W.d6.prototype={
gk:function(a){return a.length}}
W.a0.prototype={$ia0:1,$ifR:1}
W.ak.prototype={$iak:1}
W.al.prototype={$ial:1}
W.bo.prototype={}
W.z.prototype={$iz:1}
W.S.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.cD(a):u},
c_:function(a,b){return a.appendChild(b)},
dH:function(a,b){return a.removeChild(b)},
$iS:1}
W.dI.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.an.prototype={$ian:1}
W.dW.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.fV(b,a,null,null,null))
return a[b]},
c5:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ic1:1,
$ac1:function(){return[W.ab]},
$aa9:function(){return[W.ab]},
$iJ:1,
$aJ:function(){return[W.ab]},
$iK:1,
$aK:function(){return[W.ab]},
$abk:function(){return[W.ab]}}
W.aB.prototype={}
W.e1.prototype={$ifR:1}
W.ad.prototype={
gea:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.Y("deltaY is not supported"))},
ge9:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.Y("deltaX is not supported"))},
$iad:1}
W.bz.prototype={
dL:function(a,b){return a.requestAnimationFrame(H.b8(H.e(b,{func:1,ret:-1,args:[P.m]}),1))},
d_:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cr.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
v:function(a,b){var u
if(b==null)return!1
u=J.q(b)
if(!u.$iaS)return!1
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gT(b)&&a.height===u.gR(b)},
gi:function(a){return W.he(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gR:function(a){return a.height},
gT:function(a){return a.width}}
W.ek.prototype={
aG:function(a,b,c,d){var u=H.d(this,0)
H.e(a,{func:1,ret:-1,args:[u]})
H.e(c,{func:1,ret:-1})
return W.u(this.a,this.b,a,!1,u)}}
W.ct.prototype={}
W.el.prototype={
ax:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.e(u,{func:1,args:[W.c]})
if(t)J.hZ(r,s.c,u,!1)}s.b=null
s.sd4(null)
return},
sd4:function(a){this.d=H.e(a,{func:1,args:[W.c]})}}
W.em.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ic"))},
$S:16}
W.bk.prototype={
gS:function(a){return new W.d5(a,a.length,[H.hz(this,a,"bk",0)])}}
W.d5.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.a(s,t)
u.sbQ(s[t])
u.c=t
return!0}u.sbQ(null)
u.c=s
return!1},
gA:function(){return this.d},
sbQ:function(a){this.d=H.j(a,H.d(this,0))}}
W.cq.prototype={}
W.cw.prototype={}
W.cx.prototype={}
P.eZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eB.prototype={
eD:function(a){if(a<=0||a>4294967296)throw H.h(P.iq("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$ijs:1}
P.a1.prototype={
h:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
v:function(a,b){if(b==null)return!1
return!!J.q(b).$ia1&&this.a==b.gE(b)&&this.b==b.gZ(b)},
gi:function(a){var u,t=J.aH(this.a),s=J.aH(this.b)
s=P.hd(P.hd(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
gE:function(a){return this.a},
gZ:function(a){return this.b}}
P.f.prototype={
gco:function(a){return new W.ct(a,"click",!1,[W.z])}}
P.bP.prototype={$ibP:1}
P.a8.prototype={$ia8:1}
P.c8.prototype={$ic8:1}
P.az.prototype={
bt:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.q(g)
if(!!u.$ia0&&h==null&&t&&!0){this.dT(a,b,c,d,e,f,g)
return}if(!!u.$iah&&h==null&&t&&!0){this.dU(a,b,c,d,e,f,g)
return}throw H.h(P.ag("Incorrect number or type of arguments"))},
aL:function(a,b,c,d,e,f,g){return this.bt(a,b,c,d,e,f,g,null,null,null)},
dT:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dU:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eK:function(a,b,c){return a.uniform1i(b,c)},
$iaz:1}
P.cm.prototype={$icm:1}
P.by.prototype={$iby:1}
Y.cU.prototype={
e8:function(){var u,t,s,r,q,p,o,n,m,l=this,k=1280,j=4292072403,i=4278190080,h="left",g=4294967295,f=document,e=f.querySelector("#stage")
l.r=e
l.x=A.iu(H.k(e,"$iah"),512,l.f,k)
e=K.h0()
u=H.l([],[A.F])
e=new A.dA(e,u,new R.aJ("enterFrame",!1),new R.aL("exitFrame",!1))
e.a=!0
L.hi()
t=$.fK();(t&&C.a).j(t,e.gdh())
l.y=e
t=l.x
s=t.ag
if(s!=null)if(C.a.aK(s.c,t))t.ag=null
t.ag=e
C.a.j(u,t)
e=J.bN(f.querySelector("#randomizeButton"))
u=H.d(e,0)
W.u(e.a,e.b,H.e(new Y.cV(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.bN(f.querySelector("#bubbleSortButton"))
e=H.d(u,0)
W.u(u.a,u.b,H.e(new Y.cW(l),{func:1,ret:-1,args:[e]}),!1,e)
e=J.bN(f.querySelector("#selectionSortButton"))
u=H.d(e,0)
W.u(e.a,e.b,H.e(new Y.cX(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.bN(f.querySelector("#insertionSortButton"))
e=H.d(u,0)
W.u(u.a,u.b,H.e(new Y.cY(l),{func:1,ret:-1,args:[e]}),!1,e)
f=J.bN(f.querySelector("#stopButton"))
e=H.d(f,0)
W.u(f.a,f.b,H.e(new Y.cZ(l),{func:1,ret:-1,args:[e]}),!1,e)
e=A.aq(k,2,j)
f=$.v
$.v=f+1
u=[A.a6]
r=new A.W(e,f,H.l([],u),T.y())
r.d=512
l.x.u(r)
f=A.aq(k,2,j)
e=$.v
$.v=e+1
t=H.l([],u)
s=T.y()
l.x.u(new A.W(f,e,t,s))
f=A.aq(k,2,j)
e=$.v
$.v=e+1
q=new A.W(f,e,H.l([],u),T.y())
q.d=384
l.x.u(q)
f=A.aq(k,2,j)
e=$.v
$.v=e+1
p=new A.W(f,e,H.l([],u),T.y())
p.d=128
l.x.u(p)
o=Y.h9("Helvetica, Arial, sans-serif",18,i,h,!1,0,null,0,!1,0,0,0,i,0,0,!1,"top",400)
o.dx=o.db=5
f=Y.ck("",o)
f.k4=!1
f.saa(0,!0)
f.sab(0,g)
f.sa9(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=512
l.b=f
l.x.u(f)
f=Y.ck("",o)
f.k4=!1
f.saa(0,!0)
f.sab(0,g)
f.sa9(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=0
l.c=f
l.x.u(f)
f=Y.ck("",o)
f.k4=!1
f.saa(0,!0)
f.sab(0,g)
f.sa9(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=384
l.d=f
l.x.u(f)
f=Y.ck("",o)
f.k4=!1
f.saa(0,!0)
f.sab(0,g)
f.sa9(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=128
l.e=f
l.x.u(f)
l.c4()
l.x.u(l.a)
f=A.aq(k,2,i)
e=$.v
$.v=e+1
n=new A.W(f,e,H.l([],u),T.y())
n.d=256
l.x.u(n)
m=Y.ck("0",o)
m.k4=!1
m.saa(0,!0)
m.sab(0,g)
m.sa9(h)
m.e=0
m.id=!0
m.f=9
m.c=30
m.d=256
l.x.u(m)},
c4:function(){var u=this,t=document,s=P.f4(H.f5(t.querySelector("#maxValueInput"),"$iak").value),r=P.f4(H.f5(t.querySelector("#minValueInput"),"$iak").value),q=P.f4(H.f5(t.querySelector("#amountInput"),"$iak").value)
if(typeof s!=="number")return s.bA()
if(s>999999)s=999999
else if(s<-999999)s=-999999
if(typeof r!=="number")return r.bA()
if(r>999999)r=999999
else if(r<-999999)r=-999999
u.b.sal(0,""+r)
u.c.sal(0,""+s)
u.d.sal(0,H.b(r/2))
u.e.sal(0,H.b(s/2))
if(typeof q!=="number")return q.bA()
if(q>1024)q=1024
else if(q<0)q=0
u.a.eB(s,r,q)},
bo:function(){var u=P.f4(H.f5(document.querySelector("#durationValueInput"),"$iak").value)
if(typeof u!=="number")return u.cw()
if(u<=0)u=1
return u}}
Y.cV.prototype={
$1:function(a){H.k(a,"$iz")
this.a.c4()},
$S:2}
Y.cW.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.a.a2(u.bo())},
$S:2}
Y.cX.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.a.a_(u.bo())},
$S:2}
Y.cY.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a
u.a.ah(u.bo())},
$S:2}
Y.cZ.prototype={
$1:function(a){var u
H.k(a,"$iz")
u=this.a.a
if(H.b7(u.q))C.a.sk(u.p,0)},
$S:2}
Z.d4.prototype={
eB:function(a,b,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.eE()
for(u=c.I,t=0;t<u.length;++t)u[t].cx=!1
s=c.p
C.a.sk(s,0)
C.a.sk(u,0)
for(r=a0+1,q=[A.a6],p=1024/a0*0.5,o=c.ag,n=a-b,m=b!==a,l=a===b,k=Math.abs(b),t=0;t<a0;){j=!m||l?a:b+o.eD(n)
i=Math.abs(j)
if(i<1)h=1
else{if(i<=a)if(i<a)g=j===0?1/j<0:j<0
else g=!1
else g=!0
h=g?i/k*256:i/a*256}f=A.aq(p,h,4278255487)
i=$.v
$.v=i+1
e=new A.W(f,i,H.l([],q),T.y())
d=e.gM()
e.e=e.gK().aM(d,d).c/2
e.id=!0
if(j>=0){d=e.gM()
e.f=e.gK().aM(d,d).d
e.id=!0}else e.f=-2;++t
e.c=128+t/r*1024
e.d=256
c.u(e)
C.a.j(s,j)
C.a.j(u,e)}},
O:function(a,b,c){var u,t,s,r,q,p,o=this,n=o.I,m=n.length
if(a<0||a>=m)return H.a(n,a)
u=n[a]
t=u.c
if(b<0||b>=m)return H.a(n,b)
s=n[b].c
u.cx=!1
m=u.gN().c
if(a>=n.length)return H.a(n,a)
m=A.aq(m,n[a].gN().d,c)
u=$.v
$.v=u+1
r=[A.a6]
C.a.t(n,a,new A.W(m,u,H.l([],r),T.y()))
if(a>=n.length)return H.a(n,a)
u=n[a]
u.e=u.gN().c/2
u.id=!0
m=o.p
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
p=o.gak()
u=p instanceof A.F?p:null
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
u=A.aq(u,n[b].gN().d,c)
q=$.v
$.v=q+1
C.a.t(n,b,new A.W(u,q,H.l([],r),T.y()))
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
p=o.gak()
m=p instanceof A.F?p:null
if(b>=n.length)return H.a(n,b)
m.u(n[b])
if(b>=n.length)return H.a(n,b)
n[b].cx=!0},
a6:function(a,b){var u=0,t=P.cB(null),s,r=this,q,p,o,n,m,l,k
var $async$a6=P.cD(function(c,d){if(c===1)return P.cy(d,t)
while(true)switch(u){case 0:l=r.p
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
l=r.I
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
C.a.t(l,b,p)
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
case 1:return P.cz(s,t)}})
return P.cA($async$a6,t)},
a2:function(a){var u=0,t=P.cB(null),s,r=this,q,p,o,n,m,l
var $async$a2=P.cD(function(b,c){if(b===1)return P.cy(c,t)
while(true)switch(u){case 0:r.q=!0
q=r.p,p=0
case 3:if(!(p<q.length-1)){u=5
break}o=0
case 6:if(!(o<q.length-p-1)){u=8
break}n=o+1
r.O(o,n,4287090426)
u=9
return P.aD(P.au(P.as(a),null),$async$a2)
case 9:m=q.length
if(o>=m){s=H.a(q,o)
u=1
break}l=q[o]
if(n>=m){s=H.a(q,n)
u=1
break}u=l>q[n]?10:11
break
case 10:r.O(o,n,4292571283)
u=12
return P.aD(P.au(P.as(a),null),$async$a2)
case 12:r.a6(o,n)
case 11:u=13
return P.aD(P.au(P.as(a),null),$async$a2)
case 13:r.O(o,n,4278255487)
case 7:o=n
u=6
break
case 8:case 4:++p
u=3
break
case 5:r.q=!1
case 1:return P.cz(s,t)}})
return P.cA($async$a2,t)},
a_:function(a){var u=0,t=P.cB(null),s,r=this,q,p,o,n,m,l
var $async$a_=P.cD(function(b,c){if(b===1)return P.cy(c,t)
while(true)$async$outer:switch(u){case 0:r.q=!0
q=r.p,p=0
case 3:if(!(o=q.length,p<o-1)){u=5
break}for(n=p,m=n;n<o;++n){r.O(p,m,4287090426)
o=q.length
if(n>=o){s=H.a(q,n)
u=1
break $async$outer}l=q[n]
if(m<0||m>=o){s=H.a(q,m)
u=1
break $async$outer}if(l<q[m])m=n}u=6
return P.aD(P.au(P.as(a),null),$async$a_)
case 6:r.O(p,m,4292571283)
u=7
return P.aD(P.au(P.as(a),null),$async$a_)
case 7:r.a6(p,m)
u=8
return P.aD(P.au(P.as(a),null),$async$a_)
case 8:r.O(p,m,4278255487)
case 4:++p
u=3
break
case 5:r.q=!1
case 1:return P.cz(s,t)}})
return P.cA($async$a_,t)},
ah:function(a){var u=0,t=P.cB(null),s,r=this,q,p,o,n,m,l,k
var $async$ah=P.cD(function(b,c){if(b===1)return P.cy(c,t)
while(true)switch(u){case 0:r.q=!0
q=r.p,p=1
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
break}k=o-1
r.O(o,k,4292571283)
u=8
return P.aD(P.au(P.as(a),null),$async$ah)
case 8:r.a6(o,k)
u=9
return P.aD(P.au(P.as(a),null),$async$ah)
case 9:r.O(o,k,4278255487)
o=k
u=6
break
case 7:case 4:++p
u=3
break
case 5:r.q=!1
case 1:return P.cz(s,t)}})
return P.cA($async$ah,t)}}
K.e4.prototype={}
K.de.prototype={
aw:function(a){var u,t,s,r=this,q=r.c+=a
r.d.j(0,q)
u=r.a
t=r.b
for(;u!==t;){s=u.b
u.a=s.geQ()
u.b=s.geW()}return!0},
$ijj:1}
A.W.prototype={
gM:function(){var u=this.k3
return new U.E(0,0,u.a,u.b,[P.m])},
W:function(a,b){if(a<0||a>=this.k3.a)return
if(b<0||b>=this.k3.b)return
return this},
ai:function(a){a.c.a4(a,this.k3.c)}}
A.a_.prototype={}
A.cO.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ia0")
u=new L.bt(C.x)
u.a=V.bK(a.width)
u.b=V.bK(a.height)
u.c=a
t=u.gaJ().aN(this.a)
s=t.c
r=t.e
return new A.a_(s.c/r,s.d/r,t)},
$S:18}
A.cL.prototype={
cF:function(a,b){var u,t,s,r,q,p,o,n,m,l=this
l.b=l.a=a
l.c=1
u=P.h6("@(\\d+(.\\d+)?)x").en(l.a)
if(u!=null){t=u.b
if(2>=t.length)return H.a(t,2)
s=t[2]
if(s==null)s="."
r=P.iY(t[1])
q=C.a.ep(b,0,new A.cM($.fM()),P.m)
p=J.i1(q,s.length-1)
t=t.index+1
s=u.gaz()
o=P.ir(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
l.b=n+p+m
if(typeof r!=="number")return H.T(r)
l.c=q/r}}}
A.cM.prototype={
$2:function(a,b){var u
H.f9(a)
H.f9(b)
u=this.a
if(typeof a!=="number")return a.aQ()
if(typeof u!=="number")return H.T(u)
if(typeof b!=="number")return b.aQ()
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
gak:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gK:function(){var u=this
if(u.id){u.id=!1
u.go.am(1,0,0,1,u.c-u.e,u.d-u.f)}return u.go},
gM:function(){return new U.E(0,0,0,0,[P.m])},
gN:function(){var u=this.gM()
return this.gK().aM(u,u)},
F:function(a,b){var u,t=[P.m]
H.t(a,"$iA",t,"$aA")
H.t(b,"$iA",t,"$aA")
u=!!b.$iA?b:new U.A(0,0,t)
u.sE(0,a.a)
u.sZ(0,a.b)
this.bS(u)
return u},
bS:function(a){var u,t,s,r,q,p=[P.m]
H.t(a,"$iA",p,"$aA")
u=this.fy
if(u!=null)u.bS(a)
t=!!a.$iA?a:new U.A(0,0,p)
s=a.a
r=a.b
q=this.gK()
p=q.a
t.sE(0,(p[3]*(s-p[4])-p[2]*(r-p[5]))/q.gba())
t.sZ(0,(p[0]*(r-p[5])-p[1]*(s-p[4]))/q.gba())},
l:function(a,b){var u,t,s,r,q=this,p=H.l([],[R.bV])
for(u=q.fy;u!=null;u=u.fy)C.a.j(p,u)
t=p.length-1
while(!0){if(!(t>=0&&b.gc0()))break
if(t<0||t>=p.length)return H.a(p,t)
p[t].bb(b,q,C.r);--t}q.bb(b,q,C.T)
s=b.b
t=0
while(!0){r=p.length
if(!(t<r&&s))break
if(t>=r)return H.a(p,t)
p[t].bb(b,q,C.U);++t}},
ai:function(a){},
sb2:function(a){this.fy=H.t(a,"$ifd",[A.I],"$afd")},
$ijt:1}
A.bh.prototype={
u:function(a){var u,t,s,r,q=this
if(a===q)throw H.h(P.ag("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===q)q.cM(a)
else{if(u!=null){t=u.B
s=C.a.eu(t,a)
u.cT(a)
C.a.bq(t,s)}q.dV(a)
C.a.j(q.B,a)
a.sb2(q)
a.l(0,new R.L("added",!0))
r=q.gak()
if((r instanceof A.F?r:null)!=null)q.aU(a,"addedToStage")}}},
eE:function(){var u,t,s,r,q="The supplied index is out of bounds.",p=this.B,o=p.length,n=o-1
if(0<=n){if(0<o)u=n>=o
else u=!0
if(u)throw H.h(P.ag(q))
else{t=0
while(!0){if(!(t<=n&&0<p.length))break
u=p.length
if(0>=u)H.G(P.ag(q))
else{s=p[0]
s.l(0,new R.L("removed",!0))
r=this.gak()
if((r instanceof A.F?r:null)!=null)this.aU(s,"removedFromStage")
s.sb2(null)
C.a.bq(p,0)}++t}}}},
gM:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this.B
if(j.length===0)return A.I.prototype.gM.call(this)
for(u=1/0,t=1/0,s=-1/0,r=-1/0,q=0;q<j.length;++q){p=j[q]
o=p.gM()
o=p.gK().aM(o,o)
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
q=r.gK()
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
if(!!i.$ibX&&i.k4)return i
s=this}}return s},
ai:function(a){var u,t,s
for(u=this.B,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.br(s)}},
dV:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.h(P.ag("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
cM:function(a){var u,t,s,r=this.B
for(u=r.length-1,t=a;u>=0;--u,t=s){if(u>=r.length)return H.a(r,u)
s=r[u]
C.a.t(r,u,t)
if(a===s)break}},
cT:function(a){var u
a.l(0,new R.L("removed",!0))
u=this.gak()
if((u instanceof A.F?u:null)!=null)this.aU(a,"removedFromStage")
a.sb2(null)},
aU:function(a,b){var u=!1,t=this
while(!0){if(!(t!=null&&!u))break
if(t.bm(b,!0))u=!0
t=t.fy}this.bR(a,new R.L(b,!1),u)},
bR:function(a,b,c){var u,t,s=!c
if(!s||a.er(b.a))a.l(0,b)
if(!!a.$ibh){c=!s||a.bm(b.a,!0)
u=a.B
for(t=0;t<u.length;++t)this.bR(u[t],b,c)}},
$ifd:1,
$afd:function(){return[A.I]}}
A.bX.prototype={}
A.dA.prototype={
aw:function(a){var u,t=this
t.f+=a
R.fp(t.d,$.fI(),R.aJ)
t.b.aw(a)
u=t.c
C.a.V(u,new A.dB(a))
C.a.V(u,new A.dC(t,a))
R.fp(t.e,$.fJ(),R.aL)}}
A.dB.prototype={
$1:function(a){H.k(a,"$iF").ef.aw(this.a)
return!0},
$S:20}
A.dC.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iF")
u=this.a.f
t=a.aA
if(t!==C.m)t=t===C.G
else t=!0
if(t){s=new P.dP()
if($.fm==null){H.im()
$.fm=$.du}t=H.U($.dv.$0())
if(typeof t!=="number")return t.aQ()
s.a=t-0
s.b=null
a.bY()
R.fp(a.ed,$.fL(),R.aV)
a.I.aj(0)
t=a.I
r=t.a
r.c=r.b=r.a=0
t.b7(0,a.be)
a.P.cs(0,a.cm)
V.Z(u)
a.P.b=V.Z(this.b)
a.P.br(a)
a.P.c.G(0)
u=a.ek=!1
q=a.I.a
p=s.gec()
a.bi=a.bi*0.75+q.a*0.25
a.bj=a.bj*0.75+q.b*0.25
a.bk=a.bk*0.75+q.c*0.25
a.bh=a.bh*0.95+p*0.05
t=a.q
if(t.cx){t.toString
u=!0}if(u){C.a.sk(t.r2,0)
t.ry=t.rx=0
a.q.aI(0,"FRAMETIME"+C.c.aH(C.d.h(C.b.m(a.bh)),6))
a.q.aI(0,"DRAWCALLS"+C.c.aH(C.d.h(C.b.m(a.bi)),6))
a.q.aI(0,"VERTICES"+C.c.aH(C.d.h(C.b.m(a.bj)),7))
a.q.aI(0,"INDICES"+C.c.aH(C.d.h(C.b.m(a.bk)),8))
a.P.cs(0,a.c6)
a.P.br(a.q)
a.P.c.G(0)}}if(a.aA===C.G)a.aA=C.a_
return},
$S:21}
A.bu.prototype={
h:function(a){return this.b}}
A.aX.prototype={
h:function(a){return this.b}}
A.X.prototype={
h:function(a){return this.b}}
A.F.prototype={
cG:function(a,b,c,d){var u,t,s,r=this,q=a.tabIndex
if(typeof q!=="number")return q.cw()
if(q<=0)a.tabIndex=1
q=a.style
if(q.outline==="")q.outline="none"
r.be=c.f
r.eh=r.eg=!0
r.ej=r.ei=!1
r.p=a
r.c8=C.i
r.c7=C.n
r.aA=C.m
r.bc=C.k
r.ci=V.bK(d)
r.cj=V.bK(b)
r.aD=V.ja(5,$.fM())
q=r.cX(a,c)
r.I=q
r.P=L.is(q)
q=H.l([],[L.ay])
u=T.y()
t=H.l([],[P.r])
s=$.v
$.v=s+1
s=new A.ci(q,u,t,s,H.l([],[A.a6]),T.y())
A.i5("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").bu(s.gcP(),-1)
s.cx=!1
r.q=s
H.jc("StageXL render engine : "+r.I.gcr().h(0))
q=W.al
u=H.e(r.gdr(),{func:1,ret:-1,args:[q]})
W.u(a,"keydown",u,!1,q)
W.u(a,"keyup",u,!1,q)
W.u(a,"keypress",u,!1,q)
q=r.bc
if(q===C.k||q===C.t){q=W.z
u=H.e(r.gdv(),{func:1,ret:-1,args:[q]})
W.u(a,"mousedown",u,!1,q)
W.u(a,"mouseup",u,!1,q)
W.u(a,"mousemove",u,!1,q)
W.u(a,"mouseout",u,!1,q)
W.u(a,"contextmenu",u,!1,q)
W.fU(a)
q=W.ad
W.u(a,H.V(W.fU(a)),H.e(r.gdz(),{func:1,ret:-1,args:[q]}),!1,q)}q=r.bc
if((q===C.V||q===C.t)&&H.b7($.hW())){q=W.an
u=H.e(r.gdD(),{func:1,ret:-1,args:[q]})
W.u(a,"touchstart",u,!1,q)
W.u(a,"touchend",u,!1,q)
W.u(a,"touchmove",u,!1,q)
W.u(a,"touchenter",u,!1,q)
W.u(a,"touchleave",u,!1,q)
W.u(a,"touchcancel",u,!1,q)}$.hJ().ez(new A.dN(r))
r.b5()
r.bY()
r.I.b7(0,r.be)},
W:function(a,b){var u=this.bG(a,b)
return u!=null?u:this},
cX:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.a
if(e===C.l)try{e=new T.aQ(new Float32Array(16))
e.a5()
u=H.l([],[L.eD])
t=P.r
s=[t,P.x]
r=[t,P.by]
q=new Int16Array(0)
q=new L.dD(new H.M(s),new H.M(r),new L.aT(q),new L.aU(new Float32Array(0)),new L.am())
p=new Int16Array(0)
o=new Float32Array(0)
n=new Int16Array(0)
m=new Float32Array(0)
l=new Int16Array(16384)
k=new Float32Array(32768)
j=new Array(8)
j.fixed$length=Array
j=H.l(j,[L.bt])
i=H.l([],[L.ce])
h=L.ax
h=new L.cc(a,e,u,q,new L.dE(new H.M(s),new H.M(r),new L.aT(p),new L.aU(o),new L.am()),new L.dF(new H.M(s),new H.M(r),new L.aT(n),new L.aU(m),new L.am()),new L.aT(l),new L.aU(k),j,i,new H.M([t,L.bs]),new L.am(),P.aA(h),P.aA(h))
i=P.a8
j={func:1,ret:-1,args:[i]}
W.u(a,"webglcontextlost",H.e(h.gda(),j),!1,i)
W.u(a,"webglcontextrestored",H.e(h.gdd(),j),!1,i)
b=P.ij(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t,null)
g=C.j.bz(a,"webgl",b)
g=H.k(g==null?C.j.bz(a,"experimental-webgl",b):g,"$iaz")
if(!J.q(g).$iaz)H.G(P.aY("Failed to get WebGL context."))
h.e=g
g.enable(3042)
h.e.disable(2960)
h.e.disable(2929)
h.e.disable(2884)
h.e.pixelStorei(37441,1)
h.e.blendFunc(1,771)
h.x=q
q.a8(h)
h.cx=$.dy=$.dy+1
h.aj(0)
return h}catch(f){H.a4(f)
e=T.y()
u=L.ax
u=new L.cb(a,a.getContext("2d"),e,C.f,new L.am(),P.aA(u),P.aA(u))
u.aj(0)
return u}else if(e===C.w){e=T.y()
u=L.ax
u=new L.cb(a,a.getContext("2d"),e,C.f,new L.am(),P.aA(u),P.aA(u))
u.aj(0)
return u}else throw H.h(P.aY("Unknown RenderEngine"))},
bY:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.ci,h=j.cj,g=j.p.getBoundingClientRect(),f=j.p,e=f.clientLeft,d=C.b.m(g.left)
if(typeof e!=="number")return e.L()
u=f.clientTop
t=C.b.m(g.top)
if(typeof u!=="number")return u.L()
s=f.clientWidth
r=f.clientHeight
if(s===0||r===0)return
if(typeof s!=="number")return s.by()
q=s/i
if(typeof r!=="number")return r.by()
p=r/h
switch(j.c7){case C.a0:o=p
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
o=1}f=j.c8
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
default:l=0}f=j.el
f.sX(0,-m/n)
f.sY(0,-l/o)
f.sT(0,s/n)
f.sR(0,r/o)
f=j.cm
f.am(n,0,0,o,m,l)
k=j.aD
f.aP(0,k,k)
k=j.aE
k.am(1,0,0,1,-(e+d)-m,-(u+t)-l)
k.aP(0,1/n,1/o)
k=j.c6
k.cn()
t=j.aD
k.aP(0,t,t)
if(j.ck!==s||j.cl!==r){j.ck=s
j.cl=r
f=j.p
e=j.aD
if(typeof e!=="number")return H.T(e)
f.width=C.b.m(s*e)
f.height=C.b.m(r*e)
if(f.clientWidth!==s||f.clientHeight!==r){f=f.style
e=""+s+"px"
f.width=e
f=j.p.style
e=""+r+"px"
f.height=e}j.l(0,new R.L("resize",!1))}},
b5:function(){var u,t,s,r,q,p,o,n=this,m="default",l=n.bd
if(l!=null&&!0)l.toString
if(n.c9!=="default"){n.c9=m
u=n.p.style
if($.fF().c2(m)){t=$.fF().n(0,m)
s=C.u.geX(t)
r=t.ges()
q=r.gE(r)
r=t.ges()
p=r.gZ(r)
o="url('"+H.b(s)+"') "+H.b(q)+" "+H.b(p)+", default"}else o=m
u.cursor=o}},
dw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
H.k(a,"$iz")
a.preventDefault()
u=Date.now()
t=a.button
s=P.m
r=b.aE.bw(new P.a1(a.clientX,a.clientY,[s]))
q=new U.A(0,0,[s])
if(typeof t!=="number")return t.cz()
if(t<0||t>2)return
if(a.type==="mousemove"&&b.ca.v(0,r))return
s=b.ee
if(t<0||t>=3)return H.a(s,t)
p=s[t]
b.sd7(r)
C.a.V(b.cb,new A.dK(r))
if(a.type!=="mouseout")o=b.W(r.a,r.b)
else{b.l(0,new R.L("mouseLeave",!1))
o=null}n=b.bd
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
o.l(0,new R.N(q.a,q.b,"mouseOver",!0))}b.bd=o}b.b5()
if(a.type==="mousedown"){b.p.focus()
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
dA:function(a){var u,t,s,r,q
H.k(a,"$iad")
u=P.m
t=this.aE.bw(new P.a1(a.clientX,a.clientY,[u]))
s=new U.A(0,0,[u])
r=this.W(t.a,t.b)
r.F(t,s)
u=s.a
q=s.b;(a&&C.H).ge9(a)
C.H.gea(a)
r.l(0,new R.N(u,q,"mouseWheel",!0))},
dE:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
H.k(b4,"$ian")
b4.preventDefault()
u=b4.type
for(t=b4.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=b3.cc,m=b3.cb,l=P.m,k=[l],j=b3.aE,l=[l],i=[A.I],h=0;h<t.length;t.length===s||(0,H.fD)(t),++h){g=t[h]
f=g.identifier
e=j.bw(new P.a1(C.b.m(g.clientX),C.b.m(g.clientY),k))
d=new U.A(0,0,l)
c=b3.bG(e.a,e.b)
c=c!=null?c:b3
b=n.cq(f,new A.dL(b3,c))
a=b.a
b.b
C.a.V(m,new A.dM(a,e))
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
a0.l(0,new R.ao(d.a,d.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.F(e,d)
b0.l(0,new R.ao(d.a,d.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.a(a2,a9)
b0=a2[a9]
b0.F(e,d)
b0.l(0,new R.ao(d.a,d.b,"touchRollOver",!1))}c.F(e,d)
c.l(0,new R.ao(d.a,d.b,"touchOver",!0))
b.d=c}if(o){b3.p.focus()
n.t(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.aK(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.aK(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.F(e,d)
c.l(0,new R.ao(d.a,d.b,b1,!0))
if(b2)c.l(0,new R.ao(d.a,d.b,"touchTap",!0))}}},
ds:function(a){H.k(a,"$ial")
return},
sd7:function(a){this.ca=H.t(a,"$iA",[P.m],"$aA")}}
A.dN.prototype={
$1:function(a){H.V(a)
return this.a.b5()},
$S:26}
A.dK.prototype={
$1:function(a){return H.k(a,"$iaC").eM(0,this.a)},
$S:11}
A.dL.prototype={
$0:function(){var u=this.b,t=this.a.cc.a,s=$.hf
$.hf=s+1
return new A.b4(s,t===0,u,u)},
$S:28}
A.dM.prototype={
$1:function(a){return H.k(a,"$iaC").eM(this.a,this.b)},
$S:11}
A.ci.prototype={
aI:function(a,b){var u,t,s=this
C.a.j(s.r2,b)
u=b.length
t=s.rx
s.rx=u>t?u:t;++s.ry},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.l(0,new R.L("Update",!1))
for(u=i.k4,t=a.c,s=i.r1,r=i.r2,q=0;q<i.ry;++q)for(p=q*14,o=0;o<i.rx;++o){if(q>=r.length)return H.a(r,q)
n=r[q]
m=o<n.length?C.c.ao(n,o)-32:0
if(m<0||m>=64)m=0
s.am(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.y()
j=new T.aQ(new Float32Array(16))
j.a5()
k=l.f=new L.bA(C.f,n,j,l)}k.c.c3(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.a(u,m)
t.a4(a,u[m])
a.e=a.e.e}},
cQ:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=H.k(b3,"$ia_").c,b2=b1.a
b2.sem(C.Z)
for(u=[P.x],t=this.k4,s=[P.m],r=b1.e,q=0*r,p=b1.d,o=b1.b,n=H.d(o,0),b1=b1.c,m=0;m<64;++m){l=m*7
k=H.t(new U.E(l,0,7,14,u),"$iE",s,"$aE")
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
b=C.d.cA(p,4)
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
a6=0}a7=V.eY(a2,h,f)
a8=V.eY(a4,g,e)
a=V.eY(a5,h,f)
a0=V.eY(a6,g,e)
if(b===0){a9=a2-a7
b0=a4-a8}else if(b===1){a9=a4-a8
b0=a-a5}else if(b===2){a9=a-a5
b0=a6-a0}else if(b===3){a9=a0-a6
b0=a7-a2}else{a9=0
b0=0}C.a.j(t,L.fl(b2,new U.E(a7,a8,a-a7,a0-a8,u),new U.E(a9,b0,l,k,u),b,r))}}}
A.dJ.prototype={}
A.b3.prototype={}
A.b4.prototype={}
A.aC.prototype={}
L.cP.prototype={}
L.aT.prototype={}
L.aU.prototype={
ac:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.cd.prototype={
h:function(a){return this.b}}
L.ax.prototype={}
L.dx.prototype={}
L.cb.prototype={
gcr:function(){return C.w},
aj:function(a){var u,t=this
t.bC(0,t.f)
t.r=C.f
u=t.e
u.globalCompositeOperation="source-over"
u.globalAlpha=t.x=1},
b7:function(a,b){var u,t,s,r=this
r.bC(0,r.f)
r.r=C.f
u=r.e
u.globalCompositeOperation="source-over"
u.globalAlpha=r.x=1
t=b>>>24&255
if(t<255){s=r.d
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.fx(b)
s=r.d
u.fillRect(0,0,s.width,s.height)}},
G:function(a){},
a4:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
H.k(a,"$iaW")
H.k(b,"$iay")
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
bC:function(a,b){var u=b.a
this.e.setTransform(u[0],u[1],u[2],u[3],u[4],u[5])}}
L.cc.prototype={
gcr:function(){return C.l},
aj:function(a){var u=this,t=u.d,s=t.width,r=t.height
u.y=null
u.e.bindFramebuffer(36160,null)
u.e.viewport(0,0,s,r)
t=u.f
t.a5()
if(typeof s!=="number")return H.T(s)
if(typeof r!=="number")return H.T(r)
t.cB(0,2/s,-2/r,1)
t.eI(0,-1,1,0)
u.x.scp(t)},
b7:function(a,b){var u,t=this
C.a.sk(t.d3(),0)
t.dX(null)
t.dY(0)
u=(b>>>24&255)/255
t.e.colorMask(!0,!0,!0,!0)
t.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
t.e.clear(17408)},
G:function(a){this.x.G(0)},
a4:function(a,b){var u,t=this
H.k(a,"$iaW")
H.k(b,"$iay")
u=t.cy
t.e0(u)
t.e_(a.e.b)
t.av(b.a)
u.a4(a,b)},
e0:function(a){var u=this,t=u.x
if(a!==t){t.G(0)
u.x=a
a.a8(u)
u.x.scp(u.f)}},
e_:function(a){var u=this
if(a!==u.Q){u.x.G(0)
u.Q=a
u.e.blendFunc(1,771)}},
av:function(a){var u,t,s,r=this,q=3553,p=6408,o=r.fx
if(a!==o[0]){r.x.G(0)
C.a.t(o,0,a)
o=a.y
u=r.cx
if(o!==u){a.x=r
a.y=u
o=r.e
a.Q=o
a.ch=o.createTexture()
a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)
o=H.b7(a.Q.isEnabled(3089))
if(o)a.Q.disable(3089)
u=a.c
t=a.Q
s=t&&C.h
if(u!=null){s.aL(t,q,0,p,p,5121,u)
a.z=a.Q.getError()===1281}else s.bt(t,q,0,p,a.a,a.b,0,p,5121,null)
if(a.z){u=a.a
u=W.bQ(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.h).aL(u,q,0,p,p,5121,a.d)}if(o)a.Q.enable(3089)
a.Q.texParameteri(q,10242,33071)
a.Q.texParameteri(q,10243,33071)
a.Q.texParameteri(q,10241,a.e.a)
a.Q.texParameteri(q,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)}}},
d3:function(){var u=this.y
return u instanceof L.ce?u.r:this.r},
dY:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
dX:function(a){this.e.disable(3089)},
dc:function(a){H.k(a,"$ia8").preventDefault()
this.b.j(0,new L.ax())},
de:function(a){H.k(a,"$ia8")
this.cx=$.dy=$.dy+1
this.c.j(0,new L.ax())}}
L.dz.prototype={}
L.ce.prototype={}
L.eT.prototype={
$1:function(a){var u,t,s,r,q
H.f9(a)
if(typeof a!=="number")return a.by()
u=a/1000
t=u-$.hj
$.hj=u
$.fq=-1
L.hi()
s=$.fK()
s=H.l(s.slice(0),[H.d(s,0)])
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.fD)(s),++q)s[q].$1(t)},
$S:31}
L.cf.prototype={
di:function(a){var u
H.f9(a)
if(this.a){if(typeof a!=="number")return a.eO()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.aw(a)}}
L.eD.prototype={}
L.bs.prototype={
scp:function(a){var u=this.e.n(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
a8:function(a){var u,t,s=this,r=s.a,q=a.cx
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
r=s.cW(s.b)
s.c=r
s.dW(s.b,r)
s.dZ(s.b,s.c)}s.b.useProgram(s.c)},
G:function(a){var u,t,s,r=this,q=r.f,p=q.c
if(p>0&&r.r.c>0){u=q.a.buffer
u.toString
H.hh(u,0,p)
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
H.hh(u,0,s)
t=new Float32Array(u,0,s)
q.r.bufferSubData(34962,0,t)
u=q.x
u.b=u.b+q.d
q=r.r
q.d=q.c=0
r.b.drawElements(4,p,5123,0);++r.x.a}},
cW:function(a){var u=this,t=a.createProgram(),s=u.bP(a,u.gbx(),35633),r=u.bP(a,u.gbl(),35632)
a.attachShader(t,s)
a.attachShader(t,r)
a.linkProgram(t)
if(a.getProgramParameter(t,35714)===!0)return t
throw H.h(P.aY(H.b7(a.isContextLost())?"ContextLost":a.getProgramInfoLog(t)))},
bP:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.h(P.aY(H.b7(a.isContextLost())?"ContextLost":a.getShaderInfoLog(u)))},
dW:function(a,b){var u,t,s,r,q=this.d
q.c1(0)
u=H.U(a.getProgramParameter(b,35721))
if(typeof u!=="number")return H.T(u)
t=0
for(;t<u;++t){s=a.getActiveAttrib(b,t)
r=a.getAttribLocation(b,s.name)
a.enableVertexAttribArray(r)
q.t(0,s.name,r)}},
dZ:function(a,b){var u,t,s,r,q=this.e
q.c1(0)
u=H.U(a.getProgramParameter(b,35718))
if(typeof u!=="number")return H.T(u)
t=0
for(;t<u;++t){s=a.getActiveUniform(b,t)
r=a.getUniformLocation(b,s.name)
q.t(0,s.name,r)}}}
L.dD.prototype={
gbx:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbl:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
a8:function(a){var u,t=this
t.bH(a)
u=t.b;(u&&C.h).eK(u,t.e.n(0,"uSampler"),0)
u=t.d
t.r.ac(u.n(0,"aVertexPosition"),2,20,0)
t.r.ac(u.n(0,"aVertexTextCoord"),2,20,8)
t.r.ac(u.n(0,"aVertexAlpha"),1,20,16)},
a4:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
H.k(a3,"$iaW")
H.k(a4,"$iay")
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
L.dE.prototype={
gbx:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbl:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.dF.prototype={
gbx:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbl:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
a8:function(a){var u,t=this
t.bH(a)
u=t.d
t.r.ac(u.n(0,"aVertexPosition"),2,24,0)
t.r.ac(u.n(0,"aVertexColor"),4,24,8)}}
L.bA.prototype={
geC:function(){var u,t=this.f
if(t==null){t=T.y()
u=new T.aQ(new Float32Array(16))
u.a5()
u=this.f=new L.bA(C.f,t,u,this)
t=u}return t}}
L.aW.prototype={
cs:function(a,b){var u,t=this.d
this.e=t
t=t.c
t.cn()
u=this.e
u.a=1
u.b=C.f
t.e7(b)},
br:function(a){var u,t=this,s=a.gK(),r=t.e,q=r.geC()
q.c.c3(s,r.c)
u=r.b
q.b=u
q.a=r.a
t.e=q
a.ai(t)
t.e=r}}
L.am.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.bt.prototype={
gaJ:function(){var u=this.a,t=this.b,s=[P.x]
return L.fl(this,new U.E(0,0,u,t,s),new U.E(0,0,u,t,s),0,1)},
ge3:function(a){var u=this,t=u.c,s=J.q(t)
if(!!s.$iah)return t
else if(!!s.$ia0){s=u.a
s=W.bQ(u.b,s)
u.d=u.c=s
s.getContext("2d").drawImage(t,0,0,u.a,u.b)
return u.d}else throw H.h(P.aY("RenderTexture is read only."))},
sem:function(a){var u,t=this
if(t.e===a)return
t.e=a
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.av(t)
t.Q.texParameteri(3553,10241,t.e.a)
t.Q.texParameteri(3553,10240,t.e.a)},
eF:function(a,b,c){var u,t=this
if(!(t.a===b&&t.b===c))if(t.c==null){t.a=b
t.b=c
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.av(t)
u=t.Q;(u&&C.h).bt(u,3553,0,6408,t.a,t.b,0,6408,5121,null)}else{t.a=b
t.b=c
t.d=t.c=W.bQ(c,b)}},
eL:function(){var u,t=this,s=6408,r=t.x
if(r==null||t.ch==null)return
if(r.cx!==t.y)return
r.x.G(0)
t.x.av(t)
r=H.b7(t.Q.isEnabled(3089))
if(r)t.Q.disable(3089)
if(t.z){t.d.getContext("2d").drawImage(t.c,0,0)
u=t.Q;(u&&C.h).aL(u,3553,0,s,s,5121,t.d)}else{u=t.Q;(u&&C.h).aL(u,3553,0,s,s,5121,t.c)}if(r)t.Q.enable(3089)}}
L.cg.prototype={}
L.ay.prototype={
aN:function(a){var u=this
return L.fl(u.a,u.b,u.c,u.d,a)},
geb:function(){var u,t,s,r=this,q=r.e,p=r.d
if(p===0){p=r.b
u=r.c
return T.dl(q,0,0,q,p.a+u.a,p.b+u.b)}else if(p===1){p=r.b
u=r.c
return T.dl(0,q,0-q,0,H.j(p.a+p.c,H.d(p,0))-u.b,p.b+u.a)}else if(p===2){p=r.b
u=H.d(p,0)
t=r.c
s=0-q
return T.dl(s,0,0,s,H.j(p.a+p.c,u)-t.a,H.j(p.b+p.d,u)-t.b)}else if(p===3){p=r.b
u=r.c
return T.dl(0,0-q,q,0,p.a+u.b,H.j(p.b+p.d,H.d(p,0))-u.a)}else throw H.h(P.fe())}}
L.dG.prototype={}
T.dh.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.cR.prototype={
gc0:function(){return!1}}
R.aJ.prototype={}
R.aL.prototype={}
R.aV.prototype={}
R.L.prototype={
gc0:function(){return!0}}
R.bV.prototype={
bn:function(a,b,c){var u,t,s,r
H.iR(c,R.L,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=new H.M([P.r,[R.at,R.L]])
this.sd0(u)}t=[c]
s=H.t(u.n(0,b),"$iat",t,"$aat")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.at(this,H.l(r,[[R.D,c]]),t)
u.t(0,b,s)}return s},
bm:function(a,b){var u,t,s=this.a
if(s==null)return!1
u=s.n(0,a)
if(u==null)return!1
t=u.d
return b?t>0:u.c.length>t},
er:function(a){return this.bm(a,!1)},
bb:function(a,b,c){var u,t
a.r=a.f=!1
u=this.a
if(u==null)return
t=u.n(0,a.a)
if(t==null)return
t.cZ(a,b,c)},
sd0:function(a){this.a=H.t(a,"$ih2",[P.r,[R.at,R.L]],"$ah2")}}
R.bi.prototype={
h:function(a){return this.b}}
R.at.prototype={
aG:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.e(c,{func:1,ret:-1})
return this.at(a,!1,0)},
at:function(a,b,c){var u,t,s,r,q,p,o=this,n=H.d(o,0),m=new R.D(c,!1,o,H.e(a,{func:1,ret:-1,args:[n]}),o.$ti),l=o.c,k=l.length,j=new Array(k+1)
j.fixed$length=Array
u=H.l(j,[[R.D,n]])
t=u.length-1
for(s=0,r=0;s<k;++s,r=p){q=l[s]
if(s===r&&q.a<c){p=r+1
t=r
r=p}p=r+1
C.a.t(u,r,q)}C.a.t(u,t,m)
o.sdR(u)
n=[R.aJ]
if(H.ae(m,"$iD",n,null)){k=$.fI();(k&&C.a).j(k,H.fC(m,"$iD",n,"$aD"))}else{n=[R.aL]
if(H.ae(m,"$iD",n,null)){k=$.fJ();(k&&C.a).j(k,H.fC(m,"$iD",n,"$aD"))}else{n=[R.aV]
if(H.ae(m,"$iD",n,null)){k=$.fL();(k&&C.a).j(k,H.fC(m,"$iD",n,"$aD"))}}}return m},
cZ:function(a,b,c){var u,t,s,r,q,p,o=H.d(this,0)
H.j(a,o)
u=this.c
t=c===C.r
for(s=u.length,o={func:1,ret:-1,args:[o]},r=0;r<s;++r){q=u[r]
if(!q.c){q.d
p=t}else p=!0
if(p)continue
H.e(q.f,o).$1(a)}},
sdR:function(a){this.c=H.t(a,"$iK",[[R.D,H.d(this,0)]],"$aK")}}
R.D.prototype={}
R.bl.prototype={
h:function(a){return this.b}}
R.da.prototype={}
R.aO.prototype={}
R.N.prototype={}
R.aZ.prototype={}
R.ao.prototype={}
T.c3.prototype={
h:function(a){var u=this.a
return"Matrix [a="+H.b(u[0])+", b="+H.b(u[1])+", c="+H.b(u[2])+", d="+H.b(u[3])+", tx="+H.b(u[4])+", ty="+H.b(u[5])+"]"},
gba:function(){var u=this.a
return u[0]*u[3]-u[1]*u[2]},
bw:function(a){var u,t,s,r,q,p,o,n=P.m
H.t(a,"$ia1",[n],"$aa1")
u=a.a
u.toString
t=a.b
t.toString
s=this.a
r=s[0]
if(typeof u!=="number")return u.aO()
q=s[2]
if(typeof t!=="number")return t.aO()
p=u*r+t*q+s[4]
o=u*s[1]+t*s[3]+s[5]
if(!!C.u.$iA){null.eP(p,o)
return}else return new U.A(p,o,[n])},
aM:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=P.m
H.t(a7,"$iaS",[a6],"$aaS")
a6=[a6]
H.t(a8,"$iE",a6,"$aE")
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
a8.sT(0,a4)
a8.sR(0,a5)
return a8}else return new U.E(t[4]+a0,t[5]+a1,a4,a5,a6)},
cn:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aP:function(a,b,c){var u=this.a,t=u[0]
if(typeof b!=="number")return H.T(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.T(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
am:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
e7:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
c3:function(a,b){var u,t,s,r,q,p,o=a.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5]
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
T.aQ.prototype={
a5:function(){var u=this.a
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
cB:function(a,b,c,d){var u=this.a
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
eI:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.A.prototype={
h:function(a){return"Point<"+new H.bx(H.d(this,0)).h(0)+"> [x="+H.b(this.a)+", y="+H.b(this.b)+"]"},
v:function(a,b){if(b==null)return!1
return!!J.q(b).$ia1&&this.a===b.gE(b)&&this.b===b.gZ(b)},
gi:function(a){var u=C.b.gi(this.a),t=C.b.gi(this.b)
return O.fZ(O.bn(O.bn(0,u),t))},
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
u=J.q(b)
return!!u.$iaS&&t.a===u.gX(b)&&t.b===u.gY(b)&&t.c===u.gT(b)&&t.d===u.gR(b)},
gi:function(a){var u=this,t=C.b.gi(u.a),s=C.b.gi(u.b),r=C.b.gi(u.c),q=C.b.gi(u.d)
return O.fZ(O.bn(O.bn(O.bn(O.bn(0,t),s),r),q))},
sX:function(a,b){this.a=H.j(b,H.d(this,0))},
sY:function(a,b){this.b=H.j(b,H.d(this,0))},
sT:function(a,b){this.c=H.j(b,H.d(this,0))},
sR:function(a,b){this.d=H.j(b,H.d(this,0))},
$iaS:1,
gX:function(a){return this.a},
gY:function(a){return this.b},
gT:function(a){return this.c},
gR:function(a){return this.d}}
N.bW.prototype={
dm:function(a){var u=this
u.d.ax()
u.e.ax()
u.b.b8(0,u.a)},
dk:function(a){var u=this
u.d.ax()
u.e.ax()
u.b.e4(new T.dh("Failed to load "+H.b(u.a.src)+"."))}}
Y.eS.prototype={
$0:function(){return Y.iC(this.a)},
$S:34}
Y.b1.prototype={
cI:function(a){var u,t,s=this,r=a.gap(),q=H.k(W.fo("span",null),"$iai"),p=H.k(W.fo("div",null),"$iai"),o=H.k(W.fo("div",null),"$iai"),n=q.style
n.font=r
q.textContent="Hg"
n=p.style
n.display="inline-block"
n=p.style
n.width="1px"
n=p.style
n.height="0px"
J.fN(o,p)
J.fN(o,q)
n=document.body;(n&&C.J).c_(n,o)
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
s.a=C.d.U(n*7,8)
s.b=C.d.U(n*2,8)}finally{n=o
u=n.parentNode
if(u!=null)J.hY(u,n)}}}
Y.cj.prototype={
sal:function(a,b){this.B=b
this.ce=b.length
this.D|=3},
sa9:function(a){this.cd=a
this.D|=3},
saa:function(a,b){this.cf=!0
this.D|=2},
sab:function(a,b){this.cg=b
this.D|=2},
gK:function(){this.a1()
return A.I.prototype.gK.call(this)},
gM:function(){var u,t=this
t.a1()
u=t.H
t.a1()
return new U.E(0,0,u,t.C,[P.m])},
W:function(a,b){var u,t=this
if(!(a<0)){t.a1()
u=a>=t.H}else u=!0
if(u)return
if(!(b<0)){t.a1()
u=b>=t.C}else u=!0
if(u)return
return t},
ai:function(a){var u=this
u.a1()
u.dG(a.e.c)
a.c.a4(a,u.aC)
u.bg=u.bg+a.b},
a1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.D
if((b4&1)===0)return
else b3.D=b4&254
b4=b3.aB
C.a.sk(b4,0)
u=b3.bf
t=V.Z(u.b)
s=V.Z(u.d)
r=V.Z(u.db)
q=V.Z(u.dx)
p=V.Z(u.cx)
o=V.Z(u.cy)
n=V.Z(u.dy)
m=V.Z(u.fr)
l=V.hv(u.Q)
k=V.hv(u.ch)
j=u.gap()
i=Y.iH(u)
h=V.Z(i.a)
g=V.Z(i.b)
f=$.fH()
e=H.l([],[P.x])
d=P.h6("\\r\\n|\\r|\\n")
c=C.c.cC(b3.B,d)
f.font=j+" "
f.textAlign="start"
f.textBaseline="alphabetic"
f.setTransform(1,0,0,1,0,0)
for(b=0,a=0;a<c.length;++a){a0=c[a]
if(typeof a0!=="string")continue
C.a.j(e,b4.length)
a0=b3.dF(a0)
C.a.j(b4,new Y.cl(a0,b))
b+=a0.length+1}b3.a3=b3.ae=0
for(a1=p+t,a2=m+t+g,a3=0;a3<b4.length;++a3){a4=b4[a3]
a5=r+(C.a.e5(e,a3)?n:0)
a6=a1+a3*a2
a7=f.measureText(a4.a).width
a7.toString
a4.c=a5
a4.d=a6
a4.e=a7
a4.r=h
a4.x=g
a8=b3.ae
if(typeof a7!=="number")return H.T(a7)
b3.ae=Math.max(a8,a5+a7+q)
b3.a3=a6+g+o}a1=s*2
a2=b3.ae+a1
b3.ae=a2
b3.a3+=a1
a9=C.b.ad(a2)
b0=C.b.ad(b3.a3)
a1=b3.H
if(a1!==a9||b3.C!==b0)switch(b3.cd){case"left":b3.H=a9
b3.C=b0
a1=a9
break
case"right":b3.bF(0,A.I.prototype.gE.call(b3,b3)-(a9-a1))
b3.H=a9
b3.C=b0
a1=a9
break
case"center":b3.bF(0,A.I.prototype.gE.call(b3,b3)-(a9-a1)/2)
b3.H=a9
b3.C=b0
a1=a9
break}b1=a1-r-q
switch(k){case"center":b2=(b3.C-b3.a3)/2
break
case"bottom":b2=b3.C-b3.a3-s
break
default:b2=s}for(a3=0;a3<b4.length;++a3){a4=b4[a3]
switch(l){case"center":case"justify":a4.c=a4.c+(b1-a4.e)/2
break
case"right":case"end":a4.c=a4.c+(b1-a4.e)
break
default:a4.c+=s}a4.d+=b2}},
dG:function(a){var u,t,s,r,q=this,p=Math.sqrt(Math.abs(a.gba())),o=q.aC,n=o==null?null:o.e
if(n==null)n=0
if(n<p*0.8)q.D|=2
if(n>p*1.25)q.D|=2
o=q.D
if((o&2)===0)return
q.D=o&253
u=C.b.ad(Math.max(1,q.H*p))
t=C.b.ad(Math.max(1,q.C*p))
o=q.af
if(o==null){o=L.h7(u,t,16777215)
q.af=o
o=q.aC=o.gaJ().aN(p)}else{o.eF(0,u,t)
o=q.aC=q.af.gaJ().aN(p)}s=o.geb()
o=q.af
r=o.ge3(o).getContext("2d")
o=s.a
r.setTransform(o[0],o[1],o[2],o[3],o[4],o[5])
r.clearRect(0,0,q.H,q.C)
q.dK(r)
q.af.eL()},
dK:function(a){var u,t,s=this,r=s.bf,q=r.b,p=C.X.ad(q/20)
a.save()
a.beginPath()
a.rect(0,0,s.H,s.C)
a.clip()
a.font=r.gap()+" "
a.textAlign="start"
a.textBaseline="alphabetic"
a.lineJoin=a.lineCap="round"
if(s.cf){a.fillStyle=V.fx(s.cg)
a.fillRect(0,0,s.H,s.C)}q=r.d
if(q>0){a.lineWidth=q*2
a.strokeStyle=V.fw(r.e)
for(q=s.aB,u=0;u<q.length;++u){t=q[u]
a.strokeText(t.a,t.c,t.d)}}a.lineWidth=p
q=r.c
a.strokeStyle=V.fw(q)
q=V.fw(q)
a.fillStyle=q
for(q=s.aB,u=0;u<q.length;++u){t=q[u]
a.fillText(t.a,t.c,t.d)}a.restore()},
dF:function(a){return a},
dq:function(a){H.k(a,"$iaO")},
dC:function(a){H.k(a,"$iaZ")},
du:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
H.k(a,"$iN")
u=a.x
t=a.y
s=$.fH()
s.setTransform(1,0,0,1,0,0)
for(r=e.aB,q=0;q<r.length;++q){p=r[q]
o=p.a
n=p.c
m=p.d
l=p.r
k=p.x
if(m-l<=t&&m+k>=t){for(m=o.length,j=1/0,i=0,h=0;h<=m;++h){g=s.measureText(C.c.an(o,0,h)).width
g.toString
if(typeof g!=="number")return H.T(g)
f=Math.abs(n+g-u)
if(f<j){i=h
j=f}}e.ce=p.b+i
e.bg=0
e.D|=3}}}}
Y.dV.prototype={
gap:function(){var u=""+this.r+" "+this.b+"px "+this.a
return u}}
Y.cl.prototype={}
Q.dm.prototype={};(function aliases(){var u=J.w.prototype
u.cD=u.h
u=J.c2.prototype
u.cE=u.h
u=A.I.prototype
u.bF=u.sE
u=A.bh.prototype
u.bG=u.W
u=L.bs.prototype
u.bH=u.a8})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"iJ","il",8)
t(P,"iT","iz",3)
t(P,"iU","iA",3)
t(P,"iV","iB",3)
u(P,"hu","iQ",1)
s(P,"iW",1,null,["$2","$1"],["hl",function(a){return P.hl(a,null)}],7,0)
u(P,"ht","iL",1)
r(P.C.prototype,"gcU",0,1,null,["$2","$1"],["a0","cV"],7,0)
q(P.cs.prototype,"gdN","dO",1)
var o
p(o=A.F.prototype,"gdv","dw",22)
p(o,"gdz","dA",23)
p(o,"gdD","dE",24)
p(o,"gdr","ds",38)
p(A.ci.prototype,"gcP","cQ",29)
p(o=L.cc.prototype,"gda","dc",12)
p(o,"gdd","de",12)
p(L.cf.prototype,"gdh","di",32)
p(o=N.bW.prototype,"gdl","dm",4)
p(o,"gdj","dk",4)
p(o=Y.cj.prototype,"gdn","dq",35)
p(o,"gdB","dC",36)
p(o,"gdt","du",37)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.fj,J.w,J.cJ,H.dg,H.aM,H.bf,H.dX,P.aj,H.bj,H.cv,H.bx,P.dk,H.df,H.c0,H.cu,P.J,H.e3,H.dT,H.eM,P.eN,P.e6,P.dQ,P.ef,P.ee,P.eg,P.a3,P.C,P.co,P.aa,P.ej,P.bF,P.cs,P.eK,P.H,P.eP,P.a9,P.ap,P.m,P.aI,P.dr,P.ch,P.en,P.d7,P.K,P.p,P.aP,P.ca,P.B,P.dP,P.r,P.bw,W.d_,W.bk,W.d5,P.eB,P.a1,Y.cU,R.bV,K.e4,K.de,A.a_,A.cL,A.cN,L.dz,L.cf,A.bu,A.aX,A.X,A.dJ,A.b3,A.b4,A.aC,L.cP,L.aT,L.aU,L.cd,L.ax,L.dx,L.ce,L.eD,L.bs,L.bA,L.aW,L.am,L.bt,L.cg,L.ay,L.dG,R.L,R.bi,R.bl,T.c3,T.aQ,U.A,U.E,N.bW,Y.b1,Y.dV,Y.cl,Q.dm])
s(J.w,[J.dc,J.c_,J.c2,J.av,J.bm,J.aN,H.c7,W.aK,W.bR,W.cq,W.d1,W.bT,W.c,W.ab,W.cw,P.bP,P.c8,P.az,P.cm,P.by])
s(J.c2,[J.ds,J.b_,J.aw])
t(J.fi,J.av)
s(J.bm,[J.bZ,J.bY])
s(H.bf,[H.dt,H.fa,H.dU,H.f1,H.f2,H.f3,P.ea,P.e9,P.eb,P.ec,P.eO,P.eQ,P.eR,P.eW,P.d8,P.eo,P.ew,P.es,P.et,P.eu,P.eq,P.ev,P.ep,P.ez,P.eA,P.ey,P.ex,P.dR,P.dS,P.eE,P.eV,P.eH,P.eG,P.eI,P.dj,P.d2,P.d3,W.em,P.eZ,Y.cV,Y.cW,Y.cX,Y.cY,Y.cZ,A.cO,A.cM,A.dB,A.dC,A.dN,A.dK,A.dL,A.dM,L.eT,Y.eS])
s(P.aj,[H.dq,H.dd,H.e_,H.cn,H.cS,H.dH,P.cK,P.bp,P.a5,P.e0,P.dZ,P.bv,P.cT,P.d0,T.dh])
s(H.dU,[H.dO,H.bd])
t(H.e5,P.cK)
t(P.di,P.dk)
t(H.M,P.di)
s(P.J,[P.db,H.eL])
t(H.e2,P.db)
t(H.c4,H.c7)
s(H.c4,[H.bB,H.bD])
t(H.bC,H.bB)
t(H.c5,H.bC)
t(H.bE,H.bD)
t(H.c6,H.bE)
t(H.dn,H.c5)
t(H.dp,H.c6)
s(P.dQ,[P.eJ,W.ek,R.at])
t(P.cp,P.eJ)
t(P.ed,P.cp)
t(P.eh,P.ef)
t(P.O,P.eh)
t(P.e7,P.ee)
t(P.e8,P.eg)
t(P.ei,P.ej)
t(P.bG,P.bF)
t(P.eF,P.eP)
s(P.m,[P.af,P.x])
s(P.a5,[P.br,P.d9])
s(W.aK,[W.S,W.bz])
s(W.S,[W.ai,W.ar])
s(W.ai,[W.i,P.f])
s(W.i,[W.cH,W.cI,W.bO,W.ah,W.d6,W.a0,W.ak,W.bo,W.dI])
t(W.bg,W.cq)
s(W.c,[W.aB,P.a8])
s(W.aB,[W.al,W.z,W.an])
t(W.cx,W.cw)
t(W.dW,W.cx)
t(W.e1,W.bo)
t(W.ad,W.z)
t(W.cr,W.bT)
t(W.ct,W.ek)
s(P.aa,[W.el,R.D])
t(A.I,R.bV)
s(A.I,[A.bX,A.W,A.ci])
s(A.bX,[A.bh,Y.cj])
s(A.bh,[Z.d4,A.F])
t(A.a6,L.dz)
t(A.dA,L.cf)
s(L.dx,[L.cb,L.cc])
s(L.bs,[L.dD,L.dE,L.dF])
s(R.L,[R.cR,R.da,R.aO,R.aZ])
s(R.cR,[R.aJ,R.aL,R.aV])
s(R.da,[R.N,R.ao])
u(H.bB,P.a9)
u(H.bC,H.aM)
u(H.bD,P.a9)
u(H.bE,H.aM)
u(W.cq,W.d_)
u(W.cw,P.a9)
u(W.cx,W.bk)})()
var v={mangledGlobalNames:{x:"int",af:"double",m:"num",r:"String",ap:"bool",p:"Null",K:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.p},{func:1,ret:-1},{func:1,ret:P.p,args:[W.z]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.c]},{func:1,args:[,]},{func:1,ret:P.p,args:[,]},{func:1,ret:-1,args:[P.n],opt:[P.B]},{func:1,ret:P.x},{func:1,ret:P.p,args:[,,]},{func:1,ret:P.r,args:[P.x]},{func:1,ret:-1,args:[A.aC]},{func:1,ret:-1,args:[P.a8]},{func:1,ret:[P.C,,],args:[,]},{func:1,args:[,P.r]},{func:1,ret:-1,args:[,]},{func:1,args:[W.c]},{func:1,ret:P.p,args:[,P.B]},{func:1,ret:A.a_,args:[W.a0]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.ap,args:[A.F]},{func:1,ret:-1,args:[A.F]},{func:1,ret:-1,args:[W.z]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.an]},{func:1,ret:P.p,args:[P.x,,]},{func:1,ret:-1,args:[P.r]},{func:1,ret:P.p,args:[{func:1,ret:-1}]},{func:1,ret:A.b4},{func:1,ret:-1,args:[A.a_]},{func:1,ret:P.p,args:[,],opt:[P.B]},{func:1,ret:P.p,args:[P.m]},{func:1,ret:-1,args:[P.m]},{func:1,args:[P.r]},{func:1,ret:Y.b1},{func:1,ret:-1,args:[R.aO]},{func:1,ret:-1,args:[R.aZ]},{func:1,ret:-1,args:[R.N]},{func:1,ret:-1,args:[W.al]}],interceptorsByTag:null,leafTags:null};(function constants(){C.J=W.bO.prototype
C.j=W.ah.prototype
C.W=J.w.prototype
C.a=J.av.prototype
C.X=J.bY.prototype
C.d=J.bZ.prototype
C.u=J.c_.prototype
C.b=J.bm.prototype
C.c=J.aN.prototype
C.Y=J.aw.prototype
C.v=J.ds.prototype
C.h=P.az.prototype
C.o=J.b_.prototype
C.H=W.ad.prototype
C.I=W.bz.prototype
C.f=new L.cP()
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

C.Q=new P.dr()
C.a3=new L.dG()
C.R=new P.eB()
C.e=new P.eF()
C.S=new P.aI(0)
C.r=new R.bi("EventPhase.CAPTURING_PHASE")
C.T=new R.bi("EventPhase.AT_TARGET")
C.U=new R.bi("EventPhase.BUBBLING_PHASE")
C.k=new R.bl("InputEventMode.MouseOnly")
C.V=new R.bl("InputEventMode.TouchOnly")
C.t=new R.bl("InputEventMode.MouseAndTouch")
C.l=new L.cd("RenderEngine.WebGL")
C.w=new L.cd("RenderEngine.Canvas2D")
C.Z=new L.cg(9728)
C.x=new L.cg(9729)
C.y=new A.X("StageAlign.TOP_LEFT")
C.z=new A.X("StageAlign.TOP")
C.A=new A.X("StageAlign.TOP_RIGHT")
C.B=new A.X("StageAlign.LEFT")
C.i=new A.X("StageAlign.NONE")
C.C=new A.X("StageAlign.RIGHT")
C.D=new A.X("StageAlign.BOTTOM_LEFT")
C.E=new A.X("StageAlign.BOTTOM")
C.F=new A.X("StageAlign.BOTTOM_RIGHT")
C.m=new A.bu("StageRenderMode.AUTO")
C.G=new A.bu("StageRenderMode.ONCE")
C.a_=new A.bu("StageRenderMode.STOP")
C.a0=new A.aX("StageScaleMode.EXACT_FIT")
C.a1=new A.aX("StageScaleMode.NO_BORDER")
C.a2=new A.aX("StageScaleMode.NO_SCALE")
C.n=new A.aX("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.du=null
$.dv=null
$.a7=0
$.be=null
$.fP=null
$.fr=!1
$.hA=null
$.hr=null
$.hD=null
$.f_=null
$.f6=null
$.fz=null
$.b5=null
$.bH=null
$.bI=null
$.fs=!1
$.o=C.e
$.Q=[]
$.fm=null
$.v=0
$.hf=1
$.dy=0
$.hj=17976931348623157e292
$.fq=-1})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"jl","hH",function(){return H.hy("_$dart_dartClosure")})
u($,"jo","fE",function(){return H.hy("_$dart_js")})
u($,"jw","hK",function(){return H.ac(H.dY({
toString:function(){return"$receiver$"}}))})
u($,"jx","hL",function(){return H.ac(H.dY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"jy","hM",function(){return H.ac(H.dY(null))})
u($,"jz","hN",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jC","hQ",function(){return H.ac(H.dY(void 0))})
u($,"jD","hR",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jB","hP",function(){return H.ac(H.ha(null))})
u($,"jA","hO",function(){return H.ac(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"jF","hT",function(){return H.ac(H.ha(void 0))})
u($,"jE","hS",function(){return H.ac(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"jI","fG",function(){return P.iy()})
u($,"jk","hG",function(){return new A.cN(H.l([1,2],[P.af]))})
u($,"jP","fK",function(){return[]})
u($,"jM","fI",function(){return H.l([],[[R.D,R.aJ]])})
u($,"jN","fJ",function(){return H.l([],[[R.D,R.aL]])})
u($,"jQ","fL",function(){return H.l([],[[R.D,R.aV]])})
u($,"jU","fM",function(){var t=W.ji().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"jY","hW",function(){return Q.iF()})
u($,"jK","hU",function(){return W.bQ(16,16)})
u($,"jL","fH",function(){var t=$.hU()
return(t&&C.j).ge6(t)})
u($,"jO","hV",function(){return H.h_(P.r,Y.b1)})
u($,"jq","fF",function(){return H.h_(P.r,Q.dm)})
u($,"jp","hI",function(){return P.aA(P.r)})
u($,"jr","hJ",function(){var t=$.hI()
t.toString
return new P.ed(t,[H.d(t,0)])})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.w,CanvasGradient:J.w,CanvasPattern:J.w,DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,TextMetrics:J.w,WebGLActiveInfo:J.w,WebGLFramebuffer:J.w,WebGLRenderbuffer:J.w,WebGL2RenderingContext:J.w,WebGLShader:J.w,SQLError:J.w,ArrayBufferView:H.c7,Float32Array:H.dn,Int16Array:H.dp,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLDivElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTableElement:W.i,HTMLTableRowElement:W.i,HTMLTableSectionElement:W.i,HTMLTemplateElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.cH,HTMLAreaElement:W.cI,HTMLBodyElement:W.bO,HTMLCanvasElement:W.ah,CanvasRenderingContext2D:W.bR,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSStyleDeclaration:W.bg,MSStyleCSSProperties:W.bg,CSS2Properties:W.bg,DOMException:W.d1,DOMRectReadOnly:W.bT,Element:W.ai,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,Event:W.c,InputEvent:W.c,EventTarget:W.aK,HTMLFormElement:W.d6,HTMLImageElement:W.a0,HTMLInputElement:W.ak,KeyboardEvent:W.al,HTMLAudioElement:W.bo,HTMLMediaElement:W.bo,PointerEvent:W.z,MouseEvent:W.z,DragEvent:W.z,Document:W.S,DocumentFragment:W.S,HTMLDocument:W.S,ShadowRoot:W.S,XMLDocument:W.S,Attr:W.S,DocumentType:W.S,Node:W.S,HTMLSelectElement:W.dI,Touch:W.ab,TouchEvent:W.an,TouchList:W.dW,CompositionEvent:W.aB,FocusEvent:W.aB,TextEvent:W.aB,UIEvent:W.aB,HTMLVideoElement:W.e1,WheelEvent:W.ad,Window:W.bz,DOMWindow:W.bz,ClientRect:W.cr,DOMRect:W.cr,SVGAElement:P.f,SVGAnimateElement:P.f,SVGAnimateMotionElement:P.f,SVGAnimateTransformElement:P.f,SVGAnimationElement:P.f,SVGCircleElement:P.f,SVGClipPathElement:P.f,SVGDefsElement:P.f,SVGDescElement:P.f,SVGDiscardElement:P.f,SVGEllipseElement:P.f,SVGFEBlendElement:P.f,SVGFEColorMatrixElement:P.f,SVGFEComponentTransferElement:P.f,SVGFECompositeElement:P.f,SVGFEConvolveMatrixElement:P.f,SVGFEDiffuseLightingElement:P.f,SVGFEDisplacementMapElement:P.f,SVGFEDistantLightElement:P.f,SVGFEFloodElement:P.f,SVGFEFuncAElement:P.f,SVGFEFuncBElement:P.f,SVGFEFuncGElement:P.f,SVGFEFuncRElement:P.f,SVGFEGaussianBlurElement:P.f,SVGFEImageElement:P.f,SVGFEMergeElement:P.f,SVGFEMergeNodeElement:P.f,SVGFEMorphologyElement:P.f,SVGFEOffsetElement:P.f,SVGFEPointLightElement:P.f,SVGFESpecularLightingElement:P.f,SVGFESpotLightElement:P.f,SVGFETileElement:P.f,SVGFETurbulenceElement:P.f,SVGFilterElement:P.f,SVGForeignObjectElement:P.f,SVGGElement:P.f,SVGGeometryElement:P.f,SVGGraphicsElement:P.f,SVGImageElement:P.f,SVGLineElement:P.f,SVGLinearGradientElement:P.f,SVGMarkerElement:P.f,SVGMaskElement:P.f,SVGMetadataElement:P.f,SVGPathElement:P.f,SVGPatternElement:P.f,SVGPolygonElement:P.f,SVGPolylineElement:P.f,SVGRadialGradientElement:P.f,SVGRectElement:P.f,SVGScriptElement:P.f,SVGSetElement:P.f,SVGStopElement:P.f,SVGStyleElement:P.f,SVGElement:P.f,SVGSVGElement:P.f,SVGSwitchElement:P.f,SVGSymbolElement:P.f,SVGTSpanElement:P.f,SVGTextContentElement:P.f,SVGTextElement:P.f,SVGTextPathElement:P.f,SVGTextPositioningElement:P.f,SVGTitleElement:P.f,SVGUseElement:P.f,SVGViewElement:P.f,SVGGradientElement:P.f,SVGComponentTransferFunctionElement:P.f,SVGFEDropShadowElement:P.f,SVGMPathElement:P.f,WebGLBuffer:P.bP,WebGLContextEvent:P.a8,WebGLProgram:P.c8,WebGLRenderingContext:P.az,WebGLTexture:P.cm,WebGLUniformLocation:P.by})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,TextMetrics:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.c4.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.f7,[])
else F.f7([])})})()
//# sourceMappingURL=main.dart.js.map
