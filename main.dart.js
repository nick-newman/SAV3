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
a[c]=function(){a[c]=function(){H.jg(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.fw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.fw"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.fw(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={fk:function fk(){},dh:function dh(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},aM:function aM(){},
aG:function(a){var u,t=H.ji(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
j3:function(a){return v.types[H.V(a)]},
jY:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.q(a).$ic6},
b:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.cG(a)
if(typeof u!=="string")throw H.h(H.eY(a))
return u},
aR:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
iq:function(a,b){var u,t
if(typeof a!=="string")H.F(H.eY(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.a(u,3)
t=H.W(u[3])
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
ip:function(a){var u,t
if(typeof a!=="string")H.F(H.eY(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.i3(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
br:function(a){return H.il(a)+H.eV(H.ba(a),0,null)},
il:function(a){var u,t,s,r,q,p,o,n=J.q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.W||!!n.$ib_){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.aG(t.length>1&&C.c.aq(t,0)===36?C.c.bG(t,1):t)},
im:function(){return Date.now()},
io:function(){var u,t
if($.dv!=null)return
$.dv=1000
$.dw=H.iK()
if(typeof window=="undefined")return
u=window
if(u==null)return
t=u.performance
if(t==null)return
if(typeof t.now!="function")return
$.dv=1e6
$.dw=new H.du(t)},
U:function(a){throw H.h(H.eY(a))},
a:function(a,b){if(a==null)J.fc(a)
throw H.h(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,s,null)
u=H.V(J.fc(a))
if(!(b<0)){if(typeof u!=="number")return H.U(u)
t=b>=u}else t=!0
if(t)return P.fW(b,a,s,null,u)
return P.ce(b,s)},
eY:function(a){return new P.a5(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.bq()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.hG})
u.name=""}else u.toString=H.hG
return u},
hG:function(){return J.cG(this.dartException)},
F:function(a){throw H.h(a)},
fE:function(a){throw H.h(P.bX(a))},
ac:function(a){var u,t,s,r,q,p
a=H.jf(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.l([],[P.r])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.dY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
dZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
hb:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
h5:function(a,b){return new H.dr(a,b==null?null:b.method)},
fl:function(a,b){var u=b==null,t=u?null:b.method
return new H.de(a,t,u?null:b.receiver)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.fb(a)
if(a==null)return
if(a instanceof H.bk)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.dU(t,16)&8191)===10)switch(s){case 438:return f.$1(H.fl(H.b(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.h5(H.b(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.hL()
q=$.hM()
p=$.hN()
o=$.hO()
n=$.hR()
m=$.hS()
l=$.hQ()
$.hP()
k=$.hU()
j=$.hT()
i=r.M(u)
if(i!=null)return f.$1(H.fl(H.W(u),i))
else{i=q.M(u)
if(i!=null){i.method="call"
return f.$1(H.fl(H.W(u),i))}else{i=p.M(u)
if(i==null){i=o.M(u)
if(i==null){i=n.M(u)
if(i==null){i=m.M(u)
if(i==null){i=l.M(u)
if(i==null){i=o.M(u)
if(i==null){i=k.M(u)
if(i==null){i=j.M(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.h5(H.W(u),i))}}return f.$1(new H.e0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cm()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a5(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cm()
return a},
bb:function(a){var u
if(a instanceof H.bk)return a.b
if(a==null)return new H.cA(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.cA(a)},
j0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.p(0,a[u],a[t])}return b},
j7:function(a,b,c,d,e,f){H.k(a,"$ifh")
switch(H.V(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.eo("Unsupported number of arguments for wrapped closure"))},
b8:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.j7)
a.$identity=u
return u},
ib:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.dP().constructor.prototype):Object.create(new H.be(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a7
if(typeof t!=="number")return t.N()
$.a7=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.fU(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.i7(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.fU(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
i7:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.j3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.fR:H.fd
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
i8:function(a,b,c,d){var u=H.fd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
fU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ia(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.i8(t,!r,u,b)
if(t===0){r=$.a7
if(typeof r!=="number")return r.N()
$.a7=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bf
return new Function(r+H.b(q==null?$.bf=H.cQ("self"):q)+";return "+p+"."+H.b(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a7
if(typeof r!=="number")return r.N()
$.a7=r+1
o+=r
r="return function("+o+"){return this."
q=$.bf
return new Function(r+H.b(q==null?$.bf=H.cQ("self"):q)+"."+H.b(u)+"("+o+");}")()},
i9:function(a,b,c,d){var u=H.fd,t=H.fR
switch(b?-1:a){case 0:throw H.h(H.iu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ia:function(a,b){var u,t,s,r,q,p,o,n=$.bf
if(n==null)n=$.bf=H.cQ("self")
u=$.fQ
if(u==null)u=$.fQ=H.cQ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.i9(s,!q,t,b)
if(s===1){n="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+");"
u=$.a7
if(typeof u!=="number")return u.N()
$.a7=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+H.b(u)+", "+o+");"
u=$.a7
if(typeof u!=="number")return u.N()
$.a7=u+1
return new Function(n+u+"}")()},
fw:function(a,b,c,d,e,f,g){return H.ib(a,b,c,d,!!e,!!f,g)},
fd:function(a){return a.a},
fR:function(a){return a.c},
cQ:function(a){var u,t,s,r=new H.be("self","target","receiver","name"),q=J.fY(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
b7:function(a){if(a==null)H.iT("boolean expression must not be null")
return a},
W:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.a2(a,"String"))},
jW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"double"))},
fa:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.a2(a,"num"))},
jS:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.a2(a,"bool"))},
V:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.a2(a,"int"))},
fC:function(a,b){throw H.h(H.a2(a,H.aG(H.W(b).substring(2))))},
je:function(a,b){throw H.h(H.fT(a,H.aG(H.W(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.fC(a,b)},
f6:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else u=!0
if(u)return a
H.je(a,b)},
k0:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(J.q(a)[b])return a
H.fC(a,b)},
k_:function(a){if(a==null)return a
if(!!J.q(a).$iK)return a
throw H.h(H.a2(a,"List<dynamic>"))},
j8:function(a,b){var u
if(a==null)return a
u=J.q(a)
if(!!u.$iK)return a
if(u[b])return a
H.fC(a,b)},
hx:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.V(u)]
else return a.$S()}return},
b9:function(a,b){var u
if(typeof a=="function")return!0
u=H.hx(J.q(a))
if(u==null)return!1
return H.hl(u,null,b,null)},
e:function(a,b){var u,t
if(a==null)return a
if($.fs)return a
$.fs=!0
try{if(H.b9(a,b))return a
u=H.bc(b)
t=H.a2(a,u)
throw H.h(t)}finally{$.fs=!1}},
bR:function(a,b){if(a!=null&&!H.fv(a,b))H.F(H.a2(a,H.bc(b)))
return a},
a2:function(a,b){return new H.cs("TypeError: "+P.bZ(a)+": type '"+H.b(H.hq(a))+"' is not a subtype of type '"+b+"'")},
fT:function(a,b){return new H.cS("CastError: "+P.bZ(a)+": type '"+H.b(H.hq(a))+"' is not a subtype of type '"+b+"'")},
hq:function(a){var u,t=J.q(a)
if(!!t.$ibg){u=H.hx(t)
if(u!=null)return H.bc(u)
return"Closure"}return H.br(a)},
iT:function(a){throw H.h(new H.e6(a))},
jg:function(a){throw H.h(new P.d1(a))},
iu:function(a){return new H.dI(a)},
hz:function(a){return v.getIsolateTag(a)},
l:function(a,b){a.$ti=b
return a},
ba:function(a){if(a==null)return
return a.$ti},
jX:function(a,b,c){return H.bS(a["$a"+H.b(c)],H.ba(b))},
hA:function(a,b,c,d){var u=H.bS(a["$a"+H.b(c)],H.ba(b))
return u==null?null:u[d]},
d:function(a,b){var u=H.ba(a)
return u==null?null:u[b]},
bc:function(a){return H.aF(a,null)},
aF:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aG(a[0].name)+H.eV(a,1,b)
if(typeof a=="function")return H.aG(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.V(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.a(b,t)
return H.b(b[t])}if('func' in a)return H.iH(a,b)
if('futureOr' in a)return"FutureOr<"+H.aF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
iH:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.l([],[P.r])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.j(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.a(a0,m)
p=C.c.N(p,a0[m])
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
for(n=H.j_(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.W(n[g])
i=i+h+H.aF(d[c],a0)+(" "+H.b(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
eV:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.bx("")
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
t=J.q(a)
if(t[b]==null)return!1
return H.ht(H.bS(t[d],u),null,c,null)},
fD:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.fT(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.eV(c,0,null),v.mangledGlobalNames)))},
u:function(a,b,c,d){if(a==null)return a
if(H.ae(a,b,c,d))return a
throw H.h(H.a2(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aG(b.substring(2))+H.eV(c,0,null),v.mangledGlobalNames)))},
iS:function(a,b,c,d,e){if(!H.P(a,null,b,null))H.jh("TypeError: "+H.b(c)+H.bc(a)+H.b(d)+H.bc(b)+H.b(e))},
jh:function(a){throw H.h(new H.cs(H.W(a)))},
ht:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.P(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.P(a[t],b,c[t],d))return!1
return!0},
jT:function(a,b,c){return a.apply(b,H.bS(J.q(b)["$a"+H.b(c)],H.ba(b)))},
hC:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="p"||a===-1||a===-2||H.hC(u)}return!1},
fv:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="p"||b===-1||b===-2||H.hC(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.fv(a,"type" in b?b.type:null))return!0
if('func' in b)return H.b9(a,b)}u=J.q(a).constructor
t=H.ba(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.P(u,null,b,null)},
j:function(a,b){if(a!=null&&!H.fv(a,b))throw H.h(H.a2(a,H.bc(b)))
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
return H.P(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.hl(a,b,c,d)
if('func' in a)return c.name==="fh"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.ht(H.bS(m,u),b,p,d)},
hl:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.jc(h,b,g,d)},
jc:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.P(c[s],d,a[s],b))return!1}return!0},
h0:function(a,b){return new H.M([a,b])},
jU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
j9:function(a){var u,t,s,r,q=H.W($.hB.$1(a)),p=$.f0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.f7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.W($.hs.$2(a,q))
if(q!=null){p=$.f0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.f7[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.f9(u)
$.f0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.f7[q]=u
return u}if(s==="-"){r=H.f9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.hD(a,u)
if(s==="*")throw H.h(P.hc(q))
if(v.leafTags[q]===true){r=H.f9(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.hD(a,u)},
hD:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.fB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
f9:function(a){return J.fB(a,!1,null,!!a.$ic6)},
ja:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.f9(u)
else return J.fB(u,c,null,null)},
j5:function(){if(!0===$.fA)return
$.fA=!0
H.j6()},
j6:function(){var u,t,s,r,q,p,o,n
$.f0=Object.create(null)
$.f7=Object.create(null)
H.j4()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.hE.$1(q)
if(p!=null){o=H.ja(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
j4:function(){var u,t,s,r,q,p,o=C.L()
o=H.b6(C.M,H.b6(C.N,H.b6(C.q,H.b6(C.q,H.b6(C.O,H.b6(C.P,H.b6(C.Q(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.hB=new H.f2(r)
$.hs=new H.f3(q)
$.hE=new H.f4(p)},
b6:function(a,b){return a(b)||b},
fi:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.h(P.fg("Illegal RegExp pattern ("+String(p)+")",a))},
jf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
du:function du(a){this.a=a},
dY:function dY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dr:function dr(a,b){this.a=a
this.b=b},
de:function de(a,b,c){this.a=a
this.b=b
this.c=c},
e0:function e0(a){this.a=a},
bk:function bk(a,b){this.a=a
this.b=b},
fb:function fb(a){this.a=a},
cA:function cA(a){this.a=a
this.b=null},
bg:function bg(){},
dV:function dV(){},
dP:function dP(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a){this.a=a},
cS:function cS(a){this.a=a},
dI:function dI(a){this.a=a},
e6:function e6(a){this.a=a},
by:function by(a){this.a=a
this.d=this.b=null},
M:function M(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dg:function dg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
f4:function f4(a){this.a=a},
c5:function c5(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cz:function cz(a){this.b=a},
e3:function e3(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
dU:function dU(a,b){this.a=a
this.c=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
eN:function eN(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
hi:function(a,b,c){},
hh:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bP(b,a))},
cc:function cc(){},
c9:function c9(){},
ca:function ca(){},
cb:function cb(){},
dp:function dp(){},
dq:function dq(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
j_:function(a){return J.ih(a?Object.keys(a):[],null)},
ji:function(a){return v.mangledGlobalNames[a]},
jd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
fB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
f1:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.fA==null){H.j5()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.hc("Return interceptor for "+H.b(u(a,q))))}s=a.constructor
r=s==null?null:s[$.fF()]
if(r!=null)return r
r=H.j9(a)
if(r!=null)return r
if(typeof a=="function")return C.Y
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.fF(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
ih:function(a,b){return J.fY(H.l(a,[b]))},
fY:function(a){a.fixed$length=Array
return a},
fZ:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ii:function(a,b){var u,t
for(u=a.length;b<u;){t=C.c.aq(a,b)
if(t!==32&&t!==13&&!J.fZ(t))break;++b}return b},
ij:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.c.aB(a,u)
if(t!==32&&t!==13&&!J.fZ(t))break}return b},
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c3.prototype
return J.c2.prototype}if(typeof a=="string")return J.aN.prototype
if(a==null)return J.c4.prototype
if(typeof a=="boolean")return J.dd.prototype
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f1(a)},
hy:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f1(a)},
j1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aw.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f1(a)},
j2:function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
fz:function(a){if(typeof a=="string")return J.aN.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
cE:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.n)return a
return J.f1(a)},
cF:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).w(a,b)},
hY:function(a,b,c,d){return J.cE(a).cP(a,b,c,d)},
hZ:function(a,b){return J.cE(a).dL(a,b)},
i_:function(a,b,c,d){return J.cE(a).dM(a,b,c,d)},
i0:function(a,b){return J.fz(a).c0(a,b)},
fO:function(a,b){return J.cE(a).c1(a,b)},
aH:function(a){return J.q(a).gi(a)},
i1:function(a){return J.j1(a).gS(a)},
fc:function(a){return J.hy(a).gk(a)},
bd:function(a){return J.cE(a).gcr(a)},
cG:function(a){return J.q(a).h(a)},
i2:function(a,b){return J.j2(a).eM(a,b)},
i3:function(a){return J.fz(a).eO(a)},
w:function w(){},
dd:function dd(){},
c4:function c4(){},
c7:function c7(){},
dt:function dt(){},
b_:function b_(){},
ax:function ax(){},
aw:function aw(a){this.$ti=a},
fj:function fj(a){this.$ti=a},
cJ:function cJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bn:function bn(){},
c3:function c3(){},
c2:function c2(){},
aN:function aN(){}},P={
iz:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.iU()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b8(new P.eb(s),1)).observe(u,{childList:true})
return new P.ea(s,u,t)}else if(self.setImmediate!=null)return P.iV()
return P.iW()},
iA:function(a){self.scheduleImmediate(H.b8(new P.ec(H.e(a,{func:1,ret:-1})),0))},
iB:function(a){self.setImmediate(H.b8(new P.ed(H.e(a,{func:1,ret:-1})),0))},
iC:function(a){P.fo(C.S,H.e(a,{func:1,ret:-1}))},
fo:function(a,b){var u=C.d.U(a.a,1000)
return P.iE(u<0?0:u,b)},
iE:function(a,b){var u=new P.eO()
u.cN(a,b)
return u},
bN:function(a){return new P.e7(new P.C($.o,[a]),[a])},
bK:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
ar:function(a,b){P.iF(a,b)},
bJ:function(a,b){b.bb(0,a)},
bI:function(a,b){b.bc(H.a4(a),H.bb(a))},
iF:function(a,b){var u,t=null,s=new P.eR(b),r=new P.eS(b),q=J.q(a)
if(!!q.$iC)a.bY(s,r,t)
else if(!!q.$iR)a.bx(s,r,t)
else{u=new P.C($.o,[null])
H.j(a,null)
u.a=4
u.c=a
u.bY(s,t,t)}},
bO:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.o.br(new P.eX(u),P.p,P.x,null)},
al:function(a,b){var u=new P.C($.o,[b])
P.iw(a,new P.d9(null,u))
return u},
hd:function(a,b){var u,t,s
b.a=1
try{a.bx(new P.et(b),new P.eu(b),P.p)}catch(s){u=H.a4(s)
t=H.bb(s)
P.hF(new P.ev(b,u,t))}},
es:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iC")
if(u>=4){t=b.at()
b.a=a.a
b.c=a.c
P.b2(b,t)}else{t=H.k(b.c,"$ia3")
b.a=2
b.c=a
a.bW(t)}},
b2:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.k(g.c,"$iH")
P.cD(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
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
P.cD(i,i,g.b,q.a,q.b)
return}l=$.o
if(l!==n)$.o=n
else l=i
g=b.c
if((g&15)===8)new P.eA(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.ez(u,b,q).$0()}else if((g&2)!==0)new P.ey(h,u,b).$0()
if(l!=null)$.o=l
g=u.b
if(!!J.q(g).$iR){if(g.a>=4){k=H.k(o.c,"$ia3")
o.c=null
b=o.au(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.es(g,o)
return}}j=b.b
k=H.k(j.c,"$ia3")
j.c=null
b=j.au(k)
g=u.a
p=u.b
if(!g){H.j(p,H.d(j,0))
j.a=4
j.c=p}else{H.k(p,"$iH")
j.a=8
j.c=p}h.a=j
g=j}},
iN:function(a,b){if(H.b9(a,{func:1,args:[P.n,P.B]}))return b.br(a,null,P.n,P.B)
if(H.b9(a,{func:1,args:[P.n]}))return H.e(a,{func:1,ret:null,args:[P.n]})
throw H.h(P.fP(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
iL:function(){var u,t
for(;u=$.b5,u!=null;){$.bM=null
t=u.b
$.b5=t
if(t==null)$.bL=null
u.a.$0()}},
iR:function(){$.ft=!0
try{P.iL()}finally{$.bM=null
$.ft=!1
if($.b5!=null)$.fH().$1(P.hv())}},
hp:function(a){var u=new P.ct(a)
if($.b5==null){$.b5=$.bL=u
if(!$.ft)$.fH().$1(P.hv())}else $.bL=$.bL.b=u},
iQ:function(a){var u,t,s=$.b5
if(s==null){P.hp(a)
$.bM=$.bL
return}u=new P.ct(a)
t=$.bM
if(t==null){u.b=s
$.b5=$.bM=u}else{u.b=t.b
$.bM=t.b=u
if(u.b==null)$.bL=u}},
hF:function(a){var u=null,t=$.o
if(C.e===t){P.aE(u,u,C.e,a)
return}P.aE(u,u,t,H.e(t.b9(a),{func:1,ret:-1}))},
jw:function(a,b){if(a==null)H.F(P.i4("stream"))
return new P.eL([b])},
aB:function(a){return new P.e8(null,null,[a])},
iP:function(a){return},
hm:function(a,b){P.cD(null,null,$.o,a,b)},
iM:function(){},
iw:function(a,b){var u=$.o
if(u===C.e)return P.fo(a,H.e(b,{func:1,ret:-1}))
return P.fo(a,H.e(u.b9(b),{func:1,ret:-1}))},
cD:function(a,b,c,d,e){var u={}
u.a=d
P.iQ(new P.eW(u,e))},
hn:function(a,b,c,d,e){var u,t=$.o
if(t===c)return d.$0()
$.o=c
u=t
try{t=d.$0()
return t}finally{$.o=u}},
ho:function(a,b,c,d,e,f,g){var u,t=$.o
if(t===c)return d.$1(e)
$.o=c
u=t
try{t=d.$1(e)
return t}finally{$.o=u}},
iO:function(a,b,c,d,e,f,g,h,i){var u,t=$.o
if(t===c)return d.$2(e,f)
$.o=c
u=t
try{t=d.$2(e,f)
return t}finally{$.o=u}},
aE:function(a,b,c,d){var u
H.e(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.b9(d):c.e5(d,-1)
P.hp(d)},
eb:function eb(a){this.a=a},
ea:function ea(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a},
ed:function ed(a){this.a=a},
eO:function eO(){},
eP:function eP(a,b){this.a=a
this.b=b},
e7:function e7(a,b){this.a=a
this.b=!1
this.$ti=b},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
eX:function eX(a){this.a=a},
ee:function ee(a,b){this.a=a
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
ef:function ef(){},
e8:function e8(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.e=_.d=null
_.$ti=c},
d9:function d9(a,b){this.a=a
this.b=b},
eh:function eh(){},
e9:function e9(a,b){this.a=a
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
ep:function ep(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
et:function et(a){this.a=a},
eu:function eu(a){this.a=a},
ev:function ev(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a,b){this.a=a
this.b=b},
ew:function ew(a,b){this.a=a
this.b=b},
eq:function eq(a,b,c){this.a=a
this.b=b
this.c=c},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eB:function eB(a){this.a=a},
ez:function ez(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a){this.a=a
this.b=null},
dR:function dR(){},
dS:function dS(a,b){this.a=a
this.b=b},
dT:function dT(a,b){this.a=a
this.b=b},
aa:function aa(){},
cu:function cu(){},
ei:function ei(){},
eg:function eg(){},
eK:function eK(){},
ek:function ek(){},
ej:function ej(a,b){this.b=a
this.a=null
this.$ti=b},
bG:function bG(){},
eF:function eF(a,b){this.a=a
this.b=b},
bH:function bH(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
cx:function cx(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
eL:function eL(a){this.$ti=a},
H:function H(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eW:function eW(a,b){this.a=a
this.b=b},
eG:function eG(){},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
eH:function eH(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function(a,b,c){return H.u(H.j0(a,new H.M([b,c])),"$ih2",[b,c],"$ah2")},
ig:function(a,b,c){var u,t
if(P.fu(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.l([],[P.r])
C.a.j($.Q,a)
try{P.iJ(a,u)}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=P.h9(b,H.j8(u,"$iJ"),", ")+c
return t.charCodeAt(0)==0?t:t},
fX:function(a,b,c){var u,t
if(P.fu(a))return b+"..."+c
u=new P.bx(b)
C.a.j($.Q,a)
try{t=u
t.a=P.h9(t.a,a,", ")}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
fu:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
iJ:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.b(n.gB())
C.a.j(b,u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.a(b,-1)
t=b.pop()
if(0>=b.length)return H.a(b,-1)
s=b.pop()}else{r=n.gB();++l
if(!n.A()){if(l<=4){C.a.j(b,H.b(r))
return}t=H.b(r)
if(0>=b.length)return H.a(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gB();++l
for(;n.A();r=q,q=p){p=n.gB();++l
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
h4:function(a){var u,t={}
if(P.fu(a))return"{...}"
u=new P.bx("")
try{C.a.j($.Q,a)
u.a+="{"
t.a=!0
a.V(0,new P.dk(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.a($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
dc:function dc(){},
a9:function a9(){},
dj:function dj(){},
dk:function dk(a,b){this.a=a
this.b=b},
dl:function dl(){},
f5:function(a){var u=H.iq(a,null)
if(u!=null)return u
throw H.h(P.fg(a,null))},
iZ:function(a){var u=H.ip(a)
if(u!=null)return u
throw H.h(P.fg("Invalid double",a))},
id:function(a){if(a instanceof H.bg)return a.h(0)
return"Instance of '"+H.b(H.br(a))+"'"},
h7:function(a){return new H.c5(a,H.fi(a,!1,!0,!1,!1,!1))},
h9:function(a,b,c){var u=J.i1(b)
if(!u.A())return a
if(c.length===0){do a+=H.b(u.gB())
while(u.A())}else{a+=H.b(u.gB())
for(;u.A();)a=a+c+H.b(u.gB())}return a},
ai:function(a){return new P.aI(1000*a)},
ff:function(){return new P.ak()},
bZ:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.cG(a)
if(typeof a==="string")return JSON.stringify(a)
return P.id(a)},
ag:function(a){return new P.a5(!1,null,null,a)},
fP:function(a,b,c){return new P.a5(!0,a,b,c)},
i4:function(a){return new P.a5(!1,null,a,"Must not be null")},
ir:function(a){var u=null
return new P.bs(u,u,!1,u,u,a)},
ce:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
dx:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
is:function(a,b,c){if(0>a||a>c)throw H.h(P.dx(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.h(P.dx(b,a,c,"end",null))
return b}return c},
fW:function(a,b,c,d,e){var u=H.V(e==null?J.fc(b):e)
return new P.da(u,!0,a,c,"Index out of range")},
T:function(a){return new P.e1(a)},
hc:function(a){return new P.e_(a)},
aY:function(a){return new P.bw(a)},
bX:function(a){return new P.cT(a)},
fg:function(a,b){return new P.d8(a,b)},
as:function as(){},
af:function af(){},
aI:function aI(a){this.a=a},
d3:function d3(){},
d4:function d4(){},
ak:function ak(){},
cK:function cK(){},
bq:function bq(){},
a5:function a5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
da:function da(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
e1:function e1(a){this.a=a},
e_:function e_(a){this.a=a},
bw:function bw(a){this.a=a},
cT:function cT(a){this.a=a},
ds:function ds(){},
cm:function cm(){},
d1:function d1(a){this.a=a},
eo:function eo(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
x:function x(){},
J:function J(){},
K:function K(){},
p:function p(){},
m:function m(){},
n:function n(){},
aP:function aP(){},
cf:function cf(){},
B:function B(){},
dQ:function dQ(){this.b=this.a=0},
r:function r(){},
bx:function bx(a){this.a=a},
iY:function(a){var u={}
a.V(0,new P.f_(u))
return u},
f_:function f_(a){this.a=a},
he:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
eC:function eC(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
f:function f(){},
bU:function bU(){},
a8:function a8(){},
cd:function cd(){},
aA:function aA(){},
cr:function cr(){},
bz:function bz(){}},W={
jj:function(){return window},
bV:function(a,b){var u=document.createElement("canvas")
u.width=b
u.height=a
return u},
fV:function(a){H.k(a,"$iaK")
return"wheel"},
fp:function(a,b){return document.createElement(a)},
ie:function(){var u=document.createElement("img")
return u},
ix:function(a){return new TouchEvent(a)},
iy:function(){var u
try{W.ix("touches")
return!0}catch(u){H.a4(u)}return!1},
eD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
hf:function(a,b,c,d){var u=W.eD(W.eD(W.eD(W.eD(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
t:function(a,b,c,d,e){var u=W.hr(new W.en(c),W.c),t=u!=null
if(t&&!0){H.e(u,{func:1,args:[W.c]})
if(t)J.hY(a,b,u,!1)}return new W.em(a,b,u,!1,[e])},
hr:function(a,b){var u=$.o
if(u===C.e)return a
return u.e6(a,b)},
i:function i(){},
cH:function cH(){},
cI:function cI(){},
bT:function bT(){},
ah:function ah(){},
bW:function bW(){},
au:function au(){},
bh:function bh(){},
d0:function d0(){},
d2:function d2(){},
bY:function bY(){},
aj:function aj(){},
c:function c(){},
aK:function aK(){},
d7:function d7(){},
a0:function a0(){},
am:function am(){},
an:function an(){},
bp:function bp(){},
y:function y(){},
S:function S(){},
dJ:function dJ(){},
ab:function ab(){},
ap:function ap(){},
dX:function dX(){},
aC:function aC(){},
e2:function e2(){},
ad:function ad(){},
bA:function bA(){},
cw:function cw(){},
el:function el(){},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
em:function em(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
en:function en(a){this.a=a},
bl:function bl(){},
d6:function d6(a,b,c){var _=this
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
_.y=_.x=_.r=null},cV:function cV(a){this.a=a},cW:function cW(a){this.a=a},cX:function cX(a){this.a=a},cY:function cY(a){this.a=a},cZ:function cZ(a){this.a=a},d_:function d_(a){this.a=a},
iI:function(a){var u=a.gar()
return $.hW().ct(u,new Y.eT(a))},
iD:function(a){var u=new Y.b1()
u.cM(a)
return u},
cp:function(a,b){var u=H.l([],[Y.cq]),t=$.v
$.v=t+1
t=new Y.co(u,t,H.l([],[A.a6]),T.z())
t.san(0,a)
t.bi=Y.ha(b.a,b.b,b.c,b.Q,!1,b.cy,b.f,b.dy,!1,b.fr,b.db,b.dx,b.e,b.d,b.cx,!1,b.ch,b.r)
t.E|=3
u=t.bq(0,"keyDown",R.aO)
u.av(H.e(t.gdt(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bq(0,"textInput",R.aZ)
u.av(H.e(t.gdF(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
u=t.bq(0,"mouseDown",R.N)
u.av(H.e(t.gdz(),{func:1,ret:-1,args:[H.d(u,0)]}),!1,0)
return t},
ha:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return new Y.dW(a,b,c,n,m,g,r,!1,!1,!1,d,q,o,f,k,l,h,j)},
eT:function eT(a){this.a=a},
b1:function b1(){this.c=this.b=this.a=0},
co:function co(a,b,c,d){var _=this
_.C=""
_.bi=null
_.cg="none"
_.f_=_.eZ=_.eY=_.eX=_.bj=_.eW=_.ci=0
_.cj=!1
_.ck=4294967295
_.D=_.L=100
_.a3=_.ag=0
_.aE=a
_.E=3
_.aF=_.ah=null
_.k4=!0
_.b=b
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=c
_.fy=null
_.go=d
_.id=!0
_.a=null},
dW:function dW(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.x=_.r=_.e=_.d=_.c=0}},Z={d5:function d5(a,b,c,d,e,f,g){var _=this
_.q=a
_.t=b
_.ai=c
_.u=null
_.a4=!1
_.C=d
_.k4=!0
_.b=e
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=f
_.fy=null
_.go=g
_.id=!0
_.a=null}},K={
h1:function(){var u=new K.df(P.aB(P.m))
u.b=u.a=new K.e5()
return u},
e5:function e5(){this.b=this.a=null},
df:function df(a){var _=this
_.b=_.a=null
_.c=0
_.d=a}},A={
at:function(a,b,c){var u=L.h8(C.b.m(a),C.b.m(b),c).gaN().aQ(1),t=u.c,s=u.e
return new A.a_(t.c/s,t.d/s,u)},
i6:function(a){var u,t,s,r,q,p=$.hH(),o=A.i5(a,p.d),n=o.b,m=o.c
p.toString
u=W.ie()
t=W.a0
s=new P.C($.o,[t])
r=new N.c0(u,new P.e9(s,[t]),n)
t=W.c
q={func:1,ret:-1,args:[t]}
r.d=W.t(u,"load",H.e(r.gdr(),q),!1,t)
r.e=W.t(u,"error",H.e(r.gdn(),q),!1,t)
u.src=n
return s.bw(new A.cO(m),A.a_)},
i5:function(a,b){var u=new A.cL()
u.cJ(a,b)
return u},
iv:function(a,b,c,d){var u="middleClick",t="rightClick",s=P.m,r=T.z(),q=T.z(),p=T.z(),o=H.l([],[A.aD]),n=H.l([new A.b3("mouseDown","mouseUp","click","doubleClick"),new A.b3("middleMouseDown","middleMouseUp",u,u),new A.b3("rightMouseDown","rightMouseUp",t,t)],[A.b3]),m=K.h1(),l=H.l([],[A.I]),k=$.v
$.v=k+1
k=new A.G(new U.E(0,0,0,0,[s]),r,q,p,new R.aV("render",!1),C.k,C.m,C.n,C.i,new U.A(0,0,[s]),o,new H.M([P.x,A.b4]),n,m,l,k,H.l([],[A.a6]),T.z())
k.cK(a,b,c,d)
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
bi:function bi(){},
c1:function c1(){},
dB:function dB(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=0
_.a=!1},
dC:function dC(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
bv:function bv(a){this.b=a},
aX:function aX(a){this.b=a},
Y:function Y(a){this.b=a},
G:function G(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
_.u=_.ai=_.t=_.q=null
_.cn=_.cm=_.cl=_.a4=0
_.aG=1
_.eq=!1
_.bn=_.bm=_.bl=_.bk=0
_.er=a
_.aH=b
_.co=c
_.c9=d
_.ej=e
_.P=null
_.bf=f
_.aD=g
_.ca=h
_.cb=i
_.cc="default"
_.cd=j
_.bg=null
_.ce=k
_.cf=l
_.ek=m
_.el=n
_.bh=4294967295
_.en=_.em=!0
_.ep=_.eo=!1
_.C=o
_.k4=!0
_.b=p
_.f=_.e=_.d=_.c=0
_.cx=!0
_.dy=q
_.fy=null
_.go=r
_.id=!0
_.a=null},
dO:function dO(a){this.a=a},
dL:function dL(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
dN:function dN(a,b){this.a=a
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
dK:function dK(a){this.a=a
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
aD:function aD(){}},L={
hj:function(){var u,t
if($.fr===-1){u=window
t=H.e(new L.eU(),{func:1,ret:-1,args:[P.m]})
C.J.d3(u)
$.fr=C.J.dP(u,W.hr(t,P.m))}},
it:function(a){var u=T.z(),t=new T.aQ(new Float32Array(16))
t.a7()
t=new L.bB(C.f,u,t,null)
u=new L.aW(a,t)
u.e=t
return u},
h8:function(a,b,c){var u,t,s,r,q=new L.bu(C.y)
if(a<=0)H.F(P.ag("width"))
if(b<=0)H.F(P.ag("height"))
u=q.a=V.bQ(a)
t=q.b=V.bQ(b)
s=W.bV(t,u)
q.c=q.d=s
if(c!==0){r=s.getContext("2d")
r.fillStyle=V.fy(c)
r.fillRect(0,0,u,t)}return q},
fm:function(a,b,c,d,e){var u,t,s,r,q,p=new Int16Array(6),o=new Float32Array(16),n=new L.az(a,b,c,d,e,p,o),m=d===0
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
o[9]=t}else H.F(P.ff())
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
o[11]=q}else H.F(P.ff())
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
ci:function ci(a){this.b=a},
ay:function ay(){},
dy:function dy(){},
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
dA:function dA(){},
cj:function cj(){},
eU:function eU(){},
ck:function ck(){},
eE:function eE(){},
bt:function bt(){},
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
dG:function dG(a,b,c,d,e){var _=this
_.a=-1
_.c=_.b=null
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e},
bB:function bB(a,b,c,d){var _=this
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
ao:function ao(){this.c=this.b=this.a=0},
bu:function bu(a){var _=this
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
dH:function dH(){}},T={di:function di(a){this.a=a},
dm:function(a,b,c,d,e,f){var u=new Float32Array(6)
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
aQ:function aQ(a){this.a=a}},R={
fq:function(a,b,c){var u,t,s,r=b.length
for(u={func:1,ret:-1,args:[c]},t=0;t<r;++t){if(t<0||t>=b.length)return H.a(b,t)
s=b[t]
if(!s.c){a.r=a.f=!1
H.e(s.f,u).$1(H.j(a,c))}else{C.a.bs(b,t);--r;--t}}},
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
c_:function c_(){},
bj:function bj(a){this.b=a},
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
bm:function bm(a){this.b=a},
db:function db(){},
aO:function aO(){},
N:function N(a,b,c,d){var _=this
_.x=a
_.y=b
_.a=c
_.b=d
_.r=_.f=!1},
aZ:function aZ(){},
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
_.e=_.d=null}},Q={dn:function dn(){},
iG:function(){var u,t
try{u=W.iy()
return u}catch(t){H.a4(t)
return!1}}},O={
bo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
h_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)}},V={
fx:function(a){return"rgb("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+")"},
fy:function(a){return"rgba("+(a>>>16&255)+","+(a>>>8&255)+","+(a&255)+","+H.b((a>>>24&255)/255)+")"},
jb:function(a,b){if(typeof b!=="number")return H.U(b)
if(a<=b)return a
else return b},
eZ:function(a,b,c){if(a<=b)return b
else if(a>=c)return c
else return a},
bQ:function(a){if(typeof a==="number"&&Math.floor(a)===a)return a
else throw H.h(P.ag("The supplied value ("+H.b(a)+") is not an int."))},
Z:function(a){return a},
hw:function(a){return a}},F={
f8:function(){var u=0,t=P.bN(P.p),s,r,q,p
var $async$f8=P.bO(function(a,b){if(a===1)return P.bI(b,t)
while(true)switch(u){case 0:s=H.l([],[P.x])
r=H.l([],[A.X])
q=H.l([],[A.I])
p=$.v
$.v=p+1
new Y.cU(new Z.d5(s,r,C.r,q,p,H.l([],[A.a6]),T.z()),new A.dK(C.l)).ee()
return P.bJ(null,t)}})
return P.bK($async$f8,t)}}
var w=[C,H,J,P,W,Y,Z,K,A,L,T,R,U,N,Q,O,V,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.fk.prototype={}
J.w.prototype={
w:function(a,b){return a===b},
gi:function(a){return H.aR(a)},
h:function(a){return"Instance of '"+H.b(H.br(a))+"'"}}
J.dd.prototype={
h:function(a){return String(a)},
gi:function(a){return a?519018:218159},
$ias:1}
J.c4.prototype={
w:function(a,b){return null==b},
h:function(a){return"null"},
gi:function(a){return 0},
$ip:1}
J.c7.prototype={
gi:function(a){return 0},
h:function(a){return String(a)}}
J.dt.prototype={}
J.b_.prototype={}
J.ax.prototype={
h:function(a){var u=a[$.hI()]
if(u==null)return this.cI(a)
return"JavaScript function for "+H.b(J.cG(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ifh:1}
J.aw.prototype={
j:function(a,b){H.j(b,H.d(a,0))
if(!!a.fixed$length)H.F(P.T("add"))
a.push(b)},
bs:function(a,b){if(!!a.fixed$length)H.F(P.T("removeAt"))
if(b<0||b>=a.length)throw H.h(P.ce(b,null))
return a.splice(b,1)[0]},
aO:function(a,b){var u
if(!!a.fixed$length)H.F(P.T("remove"))
for(u=0;u<a.length;++u)if(J.cF(a[u],b)){a.splice(u,1)
return!0}return!1},
V:function(a,b){var u,t
H.e(b,{func:1,ret:-1,args:[H.d(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.bX(a))}},
ew:function(a,b,c,d){var u,t,s
H.j(b,d)
H.e(c,{func:1,ret:d,args:[d,H.d(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.h(P.bX(a))}return t},
cF:function(a){var u,t,s,r
if(!!a.immutable$list)H.F(P.T("shuffle"))
u=a.length
for(;u>1;){t=C.r.cq(u);--u
s=a.length
if(u>=s)return H.a(a,u)
r=a[u]
if(t<0||t>=s)return H.a(a,t)
this.p(a,u,a[t])
this.p(a,t,r)}},
eA:function(a,b){var u
if(0>=a.length)return-1
for(u=0;u<a.length;++u)if(J.cF(a[u],b))return u
return-1},
eb:function(a,b){var u
for(u=0;u<a.length;++u)if(J.cF(a[u],b))return!0
return!1},
h:function(a){return P.fX(a,"[","]")},
gS:function(a){return new J.cJ(a,a.length,[H.d(a,0)])},
gi:function(a){return H.aR(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.F(P.T("set length"))
if(b<0)throw H.h(P.dx(b,0,null,"newLength",null))
a.length=b},
p:function(a,b,c){H.j(c,H.d(a,0))
if(!!a.immutable$list)H.F(P.T("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bP(a,b))
a[b]=c},
$iJ:1,
$iK:1}
J.fj.prototype={}
J.cJ.prototype={
gB:function(){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.fE(s))
u=t.c
if(u>=r){t.sbK(null)
return!1}t.sbK(s[u]);++t.c
return!0},
sbK:function(a){this.d=H.j(a,H.d(this,0))}}
J.bn.prototype={
geE:function(a){return a===0?1/a<0:a<0},
af:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.h(P.T(""+a+".ceil()"))},
ev:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.T(""+a+".floor()"))},
m:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.h(P.T(""+a+".round()"))},
eM:function(a,b){var u
if(b<0||b>20)throw H.h(P.dx(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.geE(a))return"-"+u
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
cD:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
U:function(a,b){return(a|0)===a?a/b|0:this.dW(a,b)},
dW:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.T("Result of truncating division is "+H.b(u)+": "+H.b(a)+" ~/ "+b))},
dU:function(a,b){var u
if(a>0)u=this.dT(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dT:function(a,b){return b>31?0:a>>>b},
$iaf:1,
$im:1}
J.c3.prototype={$ix:1}
J.c2.prototype={}
J.aN.prototype={
aB:function(a,b){if(b<0)throw H.h(H.bP(a,b))
if(b>=a.length)H.F(H.bP(a,b))
return a.charCodeAt(b)},
aq:function(a,b){if(b>=a.length)throw H.h(H.bP(a,b))
return a.charCodeAt(b)},
c0:function(a,b){return new H.eM(b,a,0)},
N:function(a,b){if(typeof b!=="string")throw H.h(P.fP(b,null,null))
return a+b},
cG:function(a,b){if(typeof b==="string")return H.l(a.split(b),[P.r])
else if(b instanceof H.c5&&b.gdd().exec("").length-2===0)return H.l(a.split(b.b),[P.r])
else return this.d1(a,b)},
d1:function(a,b){var u,t,s,r,q,p,o=H.l([],[P.r])
for(u=J.i0(b,a),u=u.gS(u),t=0,s=1;u.A();){r=u.gB()
q=r.gbF(r)
p=r.gaC()
s=p-q
if(s===0&&t===q)continue
C.a.j(o,this.ap(a,t,q))
t=p}if(t<a.length||s>0)C.a.j(o,this.bG(a,t))
return o},
ap:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.h(P.ce(b,null))
if(b>c)throw H.h(P.ce(b,null))
if(c>a.length)throw H.h(P.ce(c,null))
return a.substring(b,c)},
bG:function(a,b){return this.ap(a,b,null)},
eO:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.aq(r,0)===133){u=J.ii(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aB(r,t)===133?J.ij(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
aR:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.h(C.R)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aK:function(a,b){var u=b-a.length
if(u<=0)return a
return this.aR(" ",u)+a},
h:function(a){return a},
gi:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ih6:1,
$ir:1}
H.dh.prototype={
gB:function(){return this.d},
A:function(){var u,t=this,s=t.a,r=J.hy(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.bX(s))
u=t.c
if(u>=q){t.sbL(null)
return!1}t.sbL(r.c8(s,u));++t.c
return!0},
sbL:function(a){this.d=H.j(a,H.d(this,0))}}
H.aM.prototype={}
H.du.prototype={
$0:function(){return C.b.ev(1000*this.a.now())},
$S:8}
H.dY.prototype={
M:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.dr.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.b(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.de.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.b(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.b(t.a)+")"
return s+r+"' on '"+u+"' ("+H.b(t.a)+")"}}
H.e0.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.bk.prototype={}
H.fb.prototype={
$1:function(a){if(!!J.q(a).$iak)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.cA.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iB:1}
H.bg.prototype={
h:function(a){var u=H.br(this).trim()
return"Closure '"+u+"'"},
$ifh:1,
geS:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.dV.prototype={}
H.dP.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aG(u)+"'"}}
H.be.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.be))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gi:function(a){var u,t=this.c
if(t==null)u=H.aR(this.a)
else u=typeof t!=="object"?J.aH(t):H.aR(t)
return(u^H.aR(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.br(u))+"'")}}
H.cs.prototype={
h:function(a){return this.a}}
H.cS.prototype={
h:function(a){return this.a}}
H.dI.prototype={
h:function(a){return"RuntimeError: "+H.b(this.a)}}
H.e6.prototype={
h:function(a){return"Assertion failed: "+P.bZ(this.a)}}
H.by.prototype={
gaw:function(){var u=this.b
return u==null?this.b=H.bc(this.a):u},
h:function(a){return this.gaw()},
gi:function(a){var u=this.d
return u==null?this.d=C.c.gi(this.gaw()):u},
w:function(a,b){if(b==null)return!1
return b instanceof H.by&&this.gaw()===b.gaw()}}
H.M.prototype={
gk:function(a){return this.a},
c5:function(a){var u,t,s=this
if(typeof a==="string"){u=s.b
if(u==null)return!1
return s.bQ(u,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){t=s.c
if(t==null)return!1
return s.bQ(t,a)}else return s.eB(a)},
eB:function(a){var u=this.d
if(u==null)return!1
return this.aI(this.as(u,J.aH(a)&0x3ffffff),a)>=0},
n:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.a9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.a9(r,b)
s=t==null?null:t.b
return s}else return q.eC(b)},
eC:function(a){var u,t,s=this.d
if(s==null)return
u=this.as(s,J.aH(a)&0x3ffffff)
t=this.aI(u,a)
if(t<0)return
return u[t].b},
p:function(a,b,c){var u,t,s,r,q,p,o=this
H.j(b,H.d(o,0))
H.j(c,H.d(o,1))
if(typeof b==="string"){u=o.b
o.bM(u==null?o.b=o.b0():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bM(t==null?o.c=o.b0():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.b0()
r=J.aH(b)&0x3ffffff
q=o.as(s,r)
if(q==null)o.b7(s,r,[o.b1(b,c)])
else{p=o.aI(q,b)
if(p>=0)q[p].b=c
else q.push(o.b1(b,c))}}},
ct:function(a,b){var u,t=this
H.j(a,H.d(t,0))
H.e(b,{func:1,ret:H.d(t,1)})
if(t.c5(a))return t.n(0,a)
u=b.$0()
t.p(0,a,u)
return u},
aO:function(a,b){if(typeof b==="number"&&(b&0x3ffffff)===b)return this.dN(this.c,b)
else return this.eD(b)},
eD:function(a){var u,t,s,r,q=this,p=q.d
if(p==null)return
u=J.aH(a)&0x3ffffff
t=q.as(p,u)
s=q.aI(t,a)
if(s<0)return
r=t.splice(s,1)[0]
q.bZ(r)
if(t.length===0)q.aW(p,u)
return r.b},
c4:function(a){var u=this
if(u.a>0){u.b=u.c=u.d=u.e=u.f=null
u.a=0
u.b_()}},
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
u=t.a9(a,b)
if(u==null)t.b7(a,b,t.b1(b,c))
else u.b=c},
dN:function(a,b){var u
if(a==null)return
u=this.a9(a,b)
if(u==null)return
this.bZ(u)
this.aW(a,b)
return u.b},
b_:function(){this.r=this.r+1&67108863},
b1:function(a,b){var u,t=this,s=new H.dg(H.j(a,H.d(t,0)),H.j(b,H.d(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.b_()
return s},
bZ:function(a){var u=this,t=a.d,s=a.c
if(t==null)u.e=s
else t.c=s
if(s==null)u.f=t
else s.d=t;--u.a
u.b_()},
aI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.cF(a[t].a,b))return t
return-1},
h:function(a){return P.h4(this)},
a9:function(a,b){return a[b]},
as:function(a,b){return a[b]},
b7:function(a,b,c){a[b]=c},
aW:function(a,b){delete a[b]},
bQ:function(a,b){return this.a9(a,b)!=null},
b0:function(){var u="<non-identifier-key>",t=Object.create(null)
this.b7(t,u,t)
this.aW(t,u)
return t},
$ih2:1}
H.dg.prototype={}
H.f2.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.f3.prototype={
$2:function(a,b){return this.a(a,b)},
$S:14}
H.f4.prototype={
$1:function(a){return this.a(H.W(a))},
$S:33}
H.c5.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gde:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.fi(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
gdd:function(){var u=this,t=u.d
if(t!=null)return t
t=u.b
return u.d=H.fi(u.a+"|()",t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
eu:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.cz(u)},
c0:function(a,b){return new H.e3(this,b,0)},
d5:function(a,b){var u,t=this.gde()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.cz(u)},
$ih6:1}
H.cz.prototype={
gbF:function(a){return this.b.index},
gaC:function(){var u=this.b
return u.index+u[0].length},
$iaP:1,
$icf:1}
H.e3.prototype={
gS:function(a){return new H.e4(this.a,this.b,this.c)},
$aJ:function(){return[P.cf]}}
H.e4.prototype={
gB:function(){return this.d},
A:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.d5(p,u)
if(s!=null){q.d=s
r=s.gaC()
if(s.b.index===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.fz(t).aB(t,p)
if(p>=55296&&p<=56319){p=C.c.aB(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.dU.prototype={
gaC:function(){return this.a+this.c.length},
$iaP:1,
gbF:function(a){return this.a}}
H.eM.prototype={
gS:function(a){return new H.eN(this.a,this.b,this.c)},
$aJ:function(){return[P.aP]}}
H.eN.prototype={
A:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.dU(u,q)
s.c=t===s.c?t+1:t
return!0},
gB:function(){return this.d}}
H.cc.prototype={$ijH:1}
H.c9.prototype={
gk:function(a){return a.length},
$ic6:1,
$ac6:function(){}}
H.ca.prototype={
n:function(a,b){H.hh(b,a,a.length)
return a[b]},
$aaM:function(){return[P.af]},
$aa9:function(){return[P.af]},
$iJ:1,
$aJ:function(){return[P.af]},
$iK:1,
$aK:function(){return[P.af]}}
H.cb.prototype={
$aaM:function(){return[P.x]},
$aa9:function(){return[P.x]},
$iJ:1,
$aJ:function(){return[P.x]},
$iK:1,
$aK:function(){return[P.x]}}
H.dp.prototype={$ijn:1}
H.dq.prototype={
n:function(a,b){H.hh(b,a,a.length)
return a[b]},
$ijo:1}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
H.bF.prototype={}
P.eb.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.ea.prototype={
$1:function(a){var u,t
this.a.a=H.e(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.ec.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ed.prototype={
$0:function(){this.a.$0()},
$S:0}
P.eO.prototype={
cN:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b8(new P.eP(this,b),0),a)
else throw H.h(P.T("`setTimeout()` not found."))}}
P.eP.prototype={
$0:function(){this.b.$0()},
$S:1}
P.e7.prototype={
bb:function(a,b){var u,t,s=this,r=H.d(s,0)
H.bR(b,{futureOr:1,type:r})
u=!s.b||H.ae(b,"$iR",s.$ti,"$aR")
t=s.a
if(u)t.bN(b)
else t.bP(H.j(b,r))},
bc:function(a,b){var u=this.a
if(this.b)u.a0(a,b)
else u.bO(a,b)},
$iic:1}
P.eR.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:15}
P.eS.prototype={
$2:function(a,b){this.a.$2(1,new H.bk(a,H.k(b,"$iB")))},
$S:17}
P.eX.prototype={
$2:function(a,b){this.a(H.V(a),b)},
$S:25}
P.ee.prototype={}
P.O.prototype={
b3:function(){},
b4:function(){},
sb2:function(a){this.dy=H.u(a,"$iO",this.$ti,"$aO")},
sbX:function(a){this.fr=H.u(a,"$iO",this.$ti,"$aO")}}
P.ef.prototype={
gda:function(){return this.c<4},
cS:function(a,b,c,d){var u,t,s,r,q,p=this,o=H.d(p,0)
H.e(a,{func:1,ret:-1,args:[o]})
H.e(c,{func:1,ret:-1})
if((p.c&4)!==0){if(c==null)c=P.hu()
o=new P.cx($.o,c,p.$ti)
o.dQ()
return o}u=$.o
t=d?1:0
s=p.$ti
r=new P.O(p,u,t,s)
r.cL(a,b,c,d,o)
r.sbX(r)
r.sb2(r)
H.u(r,"$iO",s,"$aO")
r.dx=p.c&1
q=p.e
p.sd9(r)
r.sb2(null)
r.sbX(q)
if(q==null)p.sd6(r)
else q.sb2(r)
if(p.d==p.e)P.iP(p.a)
return r},
cO:function(){if((this.c&4)!==0)return new P.bw("Cannot add new events after calling close")
return new P.bw("Cannot add new events while doing an addStream")},
j:function(a,b){var u=this
H.j(b,H.d(u,0))
if(!u.gda())throw H.h(u.cO())
u.b6(b)},
sd6:function(a){this.d=H.u(a,"$iO",this.$ti,"$aO")},
sd9:function(a){this.e=H.u(a,"$iO",this.$ti,"$aO")},
$ijv:1,
$ijK:1,
$ib0:1}
P.e8.prototype={
b6:function(a){var u,t
H.j(a,H.d(this,0))
for(u=this.d,t=this.$ti;u!=null;u=u.dy)u.cR(new P.ej(a,t))}}
P.d9.prototype={
$0:function(){this.b.aV(null)},
$S:0}
P.eh.prototype={
bc:function(a,b){var u
if(a==null)a=new P.bq()
u=this.a
if(u.a!==0)throw H.h(P.aY("Future already completed"))
u.bO(a,b)},
ea:function(a){return this.bc(a,null)},
$iic:1}
P.e9.prototype={
bb:function(a,b){var u
H.bR(b,{futureOr:1,type:H.d(this,0)})
u=this.a
if(u.a!==0)throw H.h(P.aY("Future already completed"))
u.bN(b)}}
P.a3.prototype={
eG:function(a){if((this.c&15)!==6)return!0
return this.b.b.bu(H.e(this.d,{func:1,ret:P.as,args:[P.n]}),a.a,P.as,P.n)},
ex:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.d(this,1)},r=this.b.b
if(H.b9(u,{func:1,args:[P.n,P.B]}))return H.bR(r.eL(u,a.a,a.b,null,t,P.B),s)
else return H.bR(r.bu(H.e(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.C.prototype={
bx:function(a,b,c){var u,t,s,r=H.d(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.o
if(u!==C.e){H.e(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.iN(b,u)}t=new P.C($.o,[c])
s=b==null?1:3
this.aU(new P.a3(t,s,a,b,[r,c]))
return t},
bw:function(a,b){return this.bx(a,null,b)},
bY:function(a,b,c){var u,t=H.d(this,0)
H.e(a,{func:1,ret:{futureOr:1,type:c},args:[t]})
u=new P.C($.o,[c])
this.aU(new P.a3(u,(b==null?1:3)|16,a,b,[t,c]))
return u},
aU:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.k(t.c,"$ia3")
t.c=a}else{if(s===2){u=H.k(t.c,"$iC")
s=u.a
if(s<4){u.aU(a)
return}t.a=s
t.c=u.c}P.aE(null,null,t.b,H.e(new P.ep(t,a),{func:1,ret:-1}))}},
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
p.c=q.c}o.a=p.au(a)
P.aE(null,null,p.b,H.e(new P.ex(o,p),{func:1,ret:-1}))}},
at:function(){var u=H.k(this.c,"$ia3")
this.c=null
return this.au(u)},
au:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
aV:function(a){var u,t,s=this,r=H.d(s,0)
H.bR(a,{futureOr:1,type:r})
u=s.$ti
if(H.ae(a,"$iR",u,"$aR"))if(H.ae(a,"$iC",u,null))P.es(a,s)
else P.hd(a,s)
else{t=s.at()
H.j(a,r)
s.a=4
s.c=a
P.b2(s,t)}},
bP:function(a){var u,t=this
H.j(a,H.d(t,0))
u=t.at()
t.a=4
t.c=a
P.b2(t,u)},
a0:function(a,b){var u,t=this
H.k(b,"$iB")
u=t.at()
t.a=8
t.c=new P.H(a,b)
P.b2(t,u)},
cZ:function(a){return this.a0(a,null)},
bN:function(a){var u=this
H.bR(a,{futureOr:1,type:H.d(u,0)})
if(H.ae(a,"$iR",u.$ti,"$aR")){u.cV(a)
return}u.a=1
P.aE(null,null,u.b,H.e(new P.er(u,a),{func:1,ret:-1}))},
cV:function(a){var u=this,t=u.$ti
H.u(a,"$iR",t,"$aR")
if(H.ae(a,"$iC",t,null)){if(a.a===8){u.a=1
P.aE(null,null,u.b,H.e(new P.ew(u,a),{func:1,ret:-1}))}else P.es(a,u)
return}P.hd(a,u)},
bO:function(a,b){this.a=1
P.aE(null,null,this.b,H.e(new P.eq(this,a,b),{func:1,ret:-1}))},
$iR:1}
P.ep.prototype={
$0:function(){P.b2(this.a,this.b)},
$S:0}
P.ex.prototype={
$0:function(){P.b2(this.b,this.a.a)},
$S:0}
P.et.prototype={
$1:function(a){var u=this.a
u.a=0
u.aV(a)},
$S:6}
P.eu.prototype={
$2:function(a,b){H.k(b,"$iB")
this.a.a0(a,b)},
$1:function(a){return this.$2(a,null)},
$S:30}
P.ev.prototype={
$0:function(){this.a.a0(this.b,this.c)},
$S:0}
P.er.prototype={
$0:function(){var u=this.a
u.bP(H.j(this.b,H.d(u,0)))},
$S:0}
P.ew.prototype={
$0:function(){P.es(this.b,this.a)},
$S:0}
P.eq.prototype={
$0:function(){this.a.a0(this.b,this.c)},
$S:0}
P.eA.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.cw(H.e(s.d,{func:1}),null)}catch(r){u=H.a4(r)
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
s.b=n.bw(new P.eB(p),null)
s.a=!1}},
$S:1}
P.eB.prototype={
$1:function(a){return this.a},
$S:13}
P.ez.prototype={
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
P.ey.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.k(m.a.a.c,"$iH")
r=m.c
if(H.b7(r.eG(u))&&r.e!=null){q=m.b
q.b=r.ex(u)
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
P.dR.prototype={
gk:function(a){var u={},t=new P.C($.o,[P.x])
u.a=0
this.aJ(new P.dS(u,this),!0,new P.dT(u,t),t.gcY())
return t}}
P.dS.prototype={
$1:function(a){H.j(a,H.d(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.p,args:[H.d(this.b,0)]}}}
P.dT.prototype={
$0:function(){this.b.aV(this.a.a)},
$S:0}
P.aa.prototype={}
P.cu.prototype={
gi:function(a){return(H.aR(this.a)^892482866)>>>0},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof P.cu&&b.a===this.a}}
P.ei.prototype={
b3:function(){H.u(this,"$iaa",[H.d(this.x,0)],"$aaa")},
b4:function(){H.u(this,"$iaa",[H.d(this.x,0)],"$aaa")}}
P.eg.prototype={
cL:function(a,b,c,d,e){var u,t,s=this,r=H.d(s,0)
H.e(a,{func:1,ret:-1,args:[r]})
s.sdj(H.e(a,{func:1,ret:null,args:[r]}))
u=b==null?P.iX():b
if(H.b9(u,{func:1,ret:-1,args:[P.n,P.B]}))s.d.br(u,null,P.n,P.B)
else if(H.b9(u,{func:1,ret:-1,args:[P.n]}))H.e(u,{func:1,ret:null,args:[P.n]})
else H.F(P.ag("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace."))
H.e(c,{func:1,ret:-1})
t=c==null?P.hu():c
s.sdk(H.e(t,{func:1,ret:-1}))},
b3:function(){},
b4:function(){},
cR:function(a){var u=this,t=u.$ti,s=H.u(u.r,"$ibH",t,"$abH")
if(s==null){s=new P.bH(t)
u.sbV(s)}t=s.c
if(t==null)s.b=s.c=a
else s.c=t.a=a
t=u.e
if((t&64)===0){t|=64
u.e=t
if(t<128)u.r.bD(u)}},
b6:function(a){var u,t=this,s=H.d(t,0)
H.j(a,s)
u=t.e
t.e=u|32
t.d.cA(t.a,a,s)
t.e&=4294967263
t.cW((u&4)!==0)},
cW:function(a){var u,t,s=this,r=s.e
if((r&64)!==0&&s.r.c==null){r=s.e=r&4294967231
if((r&4)!==0)if(r<128){u=s.r
u=u==null||u.c==null}else u=!1
else u=!1
if(u){r&=4294967291
s.e=r}}for(;!0;a=t){if((r&8)!==0){s.sbV(null)
return}t=(r&4)!==0
if(a===t)break
s.e=r^32
if(t)s.b3()
else s.b4()
r=s.e&=4294967263}if((r&64)!==0&&r<128)s.r.bD(s)},
sdj:function(a){this.a=H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})},
sdk:function(a){H.e(a,{func:1,ret:-1})},
sbV:function(a){this.r=H.u(a,"$ibG",this.$ti,"$abG")},
$iaa:1,
$ib0:1}
P.eK.prototype={
aJ:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.e(c,{func:1,ret:-1})
return this.a.cS(H.e(a,{func:1,ret:-1,args:[H.d(this,0)]}),d,c,!0===b)},
eF:function(a){return this.aJ(a,null,null,null)}}
P.ek.prototype={}
P.ej.prototype={}
P.bG.prototype={
bD:function(a){var u,t=this
H.u(a,"$ib0",t.$ti,"$ab0")
u=t.a
if(u===1)return
if(u>=1){t.a=1
return}P.hF(new P.eF(t,a))
t.a=1}}
P.eF.prototype={
$0:function(){var u,t,s,r=this.a,q=r.a
r.a=0
if(q===3)return
u=H.u(this.b,"$ib0",[H.d(r,0)],"$ab0")
t=r.b
s=t.a
r.b=s
if(s==null)r.c=null
H.u(u,"$ib0",[H.d(t,0)],"$ab0").b6(t.b)},
$S:0}
P.bH.prototype={}
P.cx.prototype={
dQ:function(){var u=this
if((u.b&2)!==0)return
P.aE(null,null,u.a,H.e(u.gdR(),{func:1,ret:-1}))
u.b|=2},
dS:function(){var u=this,t=u.b&=4294967293
if(t>=4)return
u.b=t|1
u.a.cz(u.c)},
$iaa:1}
P.eL.prototype={}
P.H.prototype={
h:function(a){return H.b(this.a)},
$iak:1}
P.eQ.prototype={$ijI:1}
P.eW.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.bq():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u},
$S:0}
P.eG.prototype={
cz:function(a){var u,t,s,r=null
H.e(a,{func:1,ret:-1})
try{if(C.e===$.o){a.$0()
return}P.hn(r,r,this,a,-1)}catch(s){u=H.a4(s)
t=H.bb(s)
P.cD(r,r,this,u,H.k(t,"$iB"))}},
cA:function(a,b,c){var u,t,s,r=null
H.e(a,{func:1,ret:-1,args:[c]})
H.j(b,c)
try{if(C.e===$.o){a.$1(b)
return}P.ho(r,r,this,a,b,-1,c)}catch(s){u=H.a4(s)
t=H.bb(s)
P.cD(r,r,this,u,H.k(t,"$iB"))}},
e5:function(a,b){return new P.eI(this,H.e(a,{func:1,ret:b}),b)},
b9:function(a){return new P.eH(this,H.e(a,{func:1,ret:-1}))},
e6:function(a,b){return new P.eJ(this,H.e(a,{func:1,ret:-1,args:[b]}),b)},
cw:function(a,b){H.e(a,{func:1,ret:b})
if($.o===C.e)return a.$0()
return P.hn(null,null,this,a,b)},
bu:function(a,b,c,d){H.e(a,{func:1,ret:c,args:[d]})
H.j(b,d)
if($.o===C.e)return a.$1(b)
return P.ho(null,null,this,a,b,c,d)},
eL:function(a,b,c,d,e,f){H.e(a,{func:1,ret:d,args:[e,f]})
H.j(b,e)
H.j(c,f)
if($.o===C.e)return a.$2(b,c)
return P.iO(null,null,this,a,b,c,d,e,f)},
br:function(a,b,c,d){return H.e(a,{func:1,ret:b,args:[c,d]})}}
P.eI.prototype={
$0:function(){return this.a.cw(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.eH.prototype={
$0:function(){return this.a.cz(this.b)},
$S:1}
P.eJ.prototype={
$1:function(a){var u=this.c
return this.a.cA(this.b,H.j(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.dc.prototype={}
P.a9.prototype={
gS:function(a){return new H.dh(a,this.gk(a),[H.hA(this,a,"a9",0)])},
c8:function(a,b){return this.n(a,b)},
h:function(a){return P.fX(a,"[","]")}}
P.dj.prototype={}
P.dk.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.b(a)
t.a=u+": "
t.a+=H.b(b)},
$S:9}
P.dl.prototype={
gk:function(a){return this.a},
h:function(a){return P.h4(this)},
$ih3:1}
P.as.prototype={}
P.af.prototype={}
P.aI.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gi:function(a){return C.d.gi(this.a)},
h:function(a){var u,t,s,r=new P.d4(),q=this.a
if(q<0)return"-"+new P.aI(0-q).h(0)
u=r.$1(C.d.U(q,6e7)%60)
t=r.$1(C.d.U(q,1e6)%60)
s=new P.d3().$1(q%1e6)
return""+C.d.U(q,36e8)+":"+H.b(u)+":"+H.b(t)+"."+H.b(s)}}
P.d3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:10}
P.d4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:10}
P.ak.prototype={}
P.cK.prototype={
h:function(a){return"Assertion failed"}}
P.bq.prototype={
h:function(a){return"Throw of null."}}
P.a5.prototype={
gaZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaY:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaZ()+o+u
if(!q.a)return t
s=q.gaY()
r=P.bZ(q.b)
return t+s+": "+r}}
P.bs.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.b(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.b(s)
else if(t>s)u=": Not in range "+H.b(s)+".."+H.b(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.b(s)}return u}}
P.da.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){var u,t=H.V(this.b)
if(typeof t!=="number")return t.cC()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.b(u)},
gk:function(a){return this.f}}
P.e1.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.e_.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bw.prototype={
h:function(a){return"Bad state: "+H.b(this.a)}}
P.cT.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bZ(u)+"."}}
P.ds.prototype={
h:function(a){return"Out of Memory"},
$iak:1}
P.cm.prototype={
h:function(a){return"Stack Overflow"},
$iak:1}
P.d1.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eo.prototype={
h:function(a){return"Exception: "+this.a}}
P.d8.prototype={
h:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.b(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.c.ap(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.x.prototype={}
P.J.prototype={
gk:function(a){var u,t=this.gS(this)
for(u=0;t.A();)++u
return u},
h:function(a){return P.ig(this,"(",")")}}
P.K.prototype={$iJ:1}
P.p.prototype={
gi:function(a){return P.n.prototype.gi.call(this,this)},
h:function(a){return"null"}}
P.m.prototype={}
P.n.prototype={constructor:P.n,$in:1,
w:function(a,b){return this===b},
gi:function(a){return H.aR(this)},
h:function(a){return"Instance of '"+H.b(H.br(this))+"'"},
toString:function(){return this.h(this)}}
P.aP.prototype={}
P.cf.prototype={$iaP:1}
P.B.prototype={}
P.dQ.prototype={
gei:function(){var u,t,s=this.b
if(s==null)s=H.V($.dw.$0())
u=this.a
if(typeof s!=="number")return s.aT()
t=s-u
if($.fn===1000)return t
return C.d.U(t,1000)}}
P.r.prototype={$ih6:1}
P.bx.prototype={
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
bB:function(a,b,c){var u=a.getContext(b,P.iY(c))
return u},
gec:function(a){return a.getContext("2d")},
$iah:1,
$ifS:1}
W.bW.prototype={$ibW:1}
W.au.prototype={
gk:function(a){return a.length}}
W.bh.prototype={
gk:function(a){return a.length}}
W.d0.prototype={}
W.d2.prototype={
h:function(a){return String(a)}}
W.bY.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.q(b)
if(!u.$iaS)return!1
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gT(b)&&a.height===u.gR(b)},
gi:function(a){return W.hf(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gR:function(a){return a.height},
gX:function(a){return a.left},
gY:function(a){return a.top},
gT:function(a){return a.width},
$iaS:1,
$aaS:function(){return[P.m]}}
W.aj.prototype={
h:function(a){return a.localName},
gcr:function(a){return new W.cy(a,"click",!1,[W.y])},
$iaj:1}
W.c.prototype={$ic:1}
W.aK.prototype={
cP:function(a,b,c,d){return a.addEventListener(b,H.b8(H.e(c,{func:1,args:[W.c]}),1),!1)},
dM:function(a,b,c,d){return a.removeEventListener(b,H.b8(H.e(c,{func:1,args:[W.c]}),1),!1)},
$iaK:1}
W.d7.prototype={
gk:function(a){return a.length}}
W.a0.prototype={$ia0:1,$ifS:1}
W.am.prototype={$iam:1}
W.an.prototype={$ian:1}
W.bp.prototype={}
W.y.prototype={$iy:1}
W.S.prototype={
h:function(a){var u=a.nodeValue
return u==null?this.cH(a):u},
c1:function(a,b){return a.appendChild(b)},
dL:function(a,b){return a.removeChild(b)},
$iS:1}
W.dJ.prototype={
gk:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.ap.prototype={$iap:1}
W.dX.prototype={
gk:function(a){return a.length},
n:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.fW(b,a,null,null,null))
return a[b]},
c8:function(a,b){if(b<0||b>=a.length)return H.a(a,b)
return a[b]},
$ic6:1,
$ac6:function(){return[W.ab]},
$aa9:function(){return[W.ab]},
$iJ:1,
$aJ:function(){return[W.ab]},
$iK:1,
$aK:function(){return[W.ab]},
$abl:function(){return[W.ab]}}
W.aC.prototype={}
W.e2.prototype={$ifS:1}
W.ad.prototype={
geg:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.h(P.T("deltaY is not supported"))},
gef:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.h(P.T("deltaX is not supported"))},
$iad:1}
W.bA.prototype={
dP:function(a,b){return a.requestAnimationFrame(H.b8(H.e(b,{func:1,ret:-1,args:[P.m]}),1))},
d3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.cw.prototype={
h:function(a){return"Rectangle ("+H.b(a.left)+", "+H.b(a.top)+") "+H.b(a.width)+" x "+H.b(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.q(b)
if(!u.$iaS)return!1
return a.left===u.gX(b)&&a.top===u.gY(b)&&a.width===u.gT(b)&&a.height===u.gR(b)},
gi:function(a){return W.hf(C.b.gi(a.left),C.b.gi(a.top),C.b.gi(a.width),C.b.gi(a.height))},
gR:function(a){return a.height},
gT:function(a){return a.width}}
W.el.prototype={
aJ:function(a,b,c,d){var u=H.d(this,0)
H.e(a,{func:1,ret:-1,args:[u]})
H.e(c,{func:1,ret:-1})
return W.t(this.a,this.b,a,!1,u)}}
W.cy.prototype={}
W.em.prototype={
aA:function(){var u,t,s=this,r=s.b
if(r==null)return
u=s.d
t=u!=null
if(t){H.e(u,{func:1,args:[W.c]})
if(t)J.i_(r,s.c,u,!1)}s.b=null
s.sd8(null)
return},
sd8:function(a){this.d=H.e(a,{func:1,args:[W.c]})}}
W.en.prototype={
$1:function(a){return this.a.$1(H.k(a,"$ic"))},
$S:16}
W.bl.prototype={
gS:function(a){return new W.d6(a,a.length,[H.hA(this,a,"bl",0)])}}
W.d6.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){s=u.a
if(t<0||t>=s.length)return H.a(s,t)
u.sbS(s[t])
u.c=t
return!0}u.sbS(null)
u.c=s
return!1},
gB:function(){return this.d},
sbS:function(a){this.d=H.j(a,H.d(this,0))}}
W.cv.prototype={}
W.cB.prototype={}
W.cC.prototype={}
P.f_.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.eC.prototype={
cq:function(a){if(a<=0||a>4294967296)throw H.h(P.ir("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0},
$ijt:1}
P.a1.prototype={
h:function(a){return"Point("+H.b(this.a)+", "+H.b(this.b)+")"},
w:function(a,b){if(b==null)return!1
return!!J.q(b).$ia1&&this.a==b.gF(b)&&this.b==b.gZ(b)},
gi:function(a){var u,t=J.aH(this.a),s=J.aH(this.b)
s=P.he(P.he(0,t),s)
u=536870911&s+((67108863&s)<<3)
u^=u>>>11
return 536870911&u+((16383&u)<<15)},
gF:function(a){return this.a},
gZ:function(a){return this.b}}
P.f.prototype={
gcr:function(a){return new W.cy(a,"click",!1,[W.y])}}
P.bU.prototype={$ibU:1}
P.a8.prototype={$ia8:1}
P.cd.prototype={$icd:1}
P.aA.prototype={
bv:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.q(g)
if(!!u.$ia0&&h==null&&t&&!0){this.dX(a,b,c,d,e,f,g)
return}if(!!u.$iah&&h==null&&t&&!0){this.dY(a,b,c,d,e,f,g)
return}throw H.h(P.ag("Incorrect number or type of arguments"))},
aP:function(a,b,c,d,e,f,g){return this.bv(a,b,c,d,e,f,g,null,null,null)},
dX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
dY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
eP:function(a,b,c){return a.uniform1i(b,c)},
$iaA:1}
P.cr.prototype={$icr:1}
P.bz.prototype={$ibz:1}
Y.cU.prototype={
ee:function(){var u,t,s,r,q,p,o,n,m,l=this,k=1280,j=4292072403,i=4278190080,h="left",g=4294967295,f=document,e=f.querySelector("#stage")
l.r=e
l.x=A.iv(H.k(e,"$iah"),512,l.f,k)
e=K.h1()
u=H.l([],[A.G])
e=new A.dB(e,u,new R.aJ("enterFrame",!1),new R.aL("exitFrame",!1))
e.a=!0
L.hj()
t=$.fL();(t&&C.a).j(t,e.gdl())
l.y=e
t=l.x
s=t.ai
if(s!=null)if(C.a.aO(s.c,t))t.ai=null
t.ai=e
C.a.j(u,t)
e=J.bd(f.querySelector("#randomizeButton"))
u=H.d(e,0)
W.t(e.a,e.b,H.e(new Y.cV(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.bd(f.querySelector("#bubbleSortButton"))
e=H.d(u,0)
W.t(u.a,u.b,H.e(new Y.cW(l),{func:1,ret:-1,args:[e]}),!1,e)
e=J.bd(f.querySelector("#selectionSortButton"))
u=H.d(e,0)
W.t(e.a,e.b,H.e(new Y.cX(l),{func:1,ret:-1,args:[u]}),!1,u)
u=J.bd(f.querySelector("#insertionSortButton"))
e=H.d(u,0)
W.t(u.a,u.b,H.e(new Y.cY(l),{func:1,ret:-1,args:[e]}),!1,e)
e=J.bd(f.querySelector("#bogoSortButton"))
u=H.d(e,0)
W.t(e.a,e.b,H.e(new Y.cZ(l),{func:1,ret:-1,args:[u]}),!1,u)
f=J.bd(f.querySelector("#stopButton"))
u=H.d(f,0)
W.t(f.a,f.b,H.e(new Y.d_(l),{func:1,ret:-1,args:[u]}),!1,u)
u=A.at(k,2,j)
f=$.v
$.v=f+1
e=[A.a6]
r=new A.X(u,f,H.l([],e),T.z())
r.d=512
l.x.v(r)
f=A.at(k,2,j)
u=$.v
$.v=u+1
t=H.l([],e)
s=T.z()
l.x.v(new A.X(f,u,t,s))
f=A.at(k,2,j)
u=$.v
$.v=u+1
q=new A.X(f,u,H.l([],e),T.z())
q.d=384
l.x.v(q)
f=A.at(k,2,j)
u=$.v
$.v=u+1
p=new A.X(f,u,H.l([],e),T.z())
p.d=128
l.x.v(p)
o=Y.ha("Helvetica, Arial, sans-serif",18,i,h,!1,0,null,0,!1,0,0,0,i,0,0,!1,"top",400)
o.dx=o.db=5
f=Y.cp("",o)
f.k4=!1
f.sac(0,!0)
f.sad(0,g)
f.sab(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=512
l.b=f
l.x.v(f)
f=Y.cp("",o)
f.k4=!1
f.sac(0,!0)
f.sad(0,g)
f.sab(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=0
l.c=f
l.x.v(f)
f=Y.cp("",o)
f.k4=!1
f.sac(0,!0)
f.sad(0,g)
f.sab(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=384
l.d=f
l.x.v(f)
f=Y.cp("",o)
f.k4=!1
f.sac(0,!0)
f.sad(0,g)
f.sab(h)
f.e=0
f.id=!0
f.f=9
f.c=30
f.d=128
l.e=f
l.x.v(f)
l.c7()
l.x.v(l.a)
f=A.at(k,2,i)
u=$.v
$.v=u+1
n=new A.X(f,u,H.l([],e),T.z())
n.d=256
l.x.v(n)
m=Y.cp("0",o)
m.k4=!1
m.sac(0,!0)
m.sad(0,g)
m.sab(h)
m.e=0
m.id=!0
m.f=9
m.c=30
m.d=256
l.x.v(m)},
c7:function(){var u=this,t=document,s=P.f5(H.f6(t.querySelector("#maxValueInput"),"$iam").value),r=P.f5(H.f6(t.querySelector("#minValueInput"),"$iam").value),q=P.f5(H.f6(t.querySelector("#amountInput"),"$iam").value)
if(typeof s!=="number")return s.bC()
if(s>999999)s=999999
else if(s<-999999)s=-999999
if(typeof r!=="number")return r.bC()
if(r>999999)r=999999
else if(r<-999999)r=-999999
u.b.san(0,""+r)
u.c.san(0,""+s)
u.d.san(0,H.b(r/2))
u.e.san(0,H.b(s/2))
if(typeof q!=="number")return q.bC()
if(q>1024)q=1024
else if(q<0)q=0
u.a.eH(s,r,q)},
aL:function(){var u=P.f5(H.f6(document.querySelector("#durationValueInput"),"$iam").value)
if(typeof u!=="number")return u.cB()
if(u<=0)u=1
return u}}
Y.cV.prototype={
$1:function(a){H.k(a,"$iy")
this.a.c7()},
$S:2}
Y.cW.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.a.a2(u.aL())},
$S:2}
Y.cX.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.a.a_(u.aL())},
$S:2}
Y.cY.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.a.aj(u.aL())},
$S:2}
Y.cZ.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a
u.a.az(u.aL())},
$S:2}
Y.d_.prototype={
$1:function(a){var u
H.k(a,"$iy")
u=this.a.a
u.a4=!0
if(H.b7(u.u))C.a.sk(u.q,0)},
$S:2}
Z.d5.prototype={
eH:function(a,b,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this
c.eJ()
for(u=c.t,t=0;t<u.length;++t)u[t].cx=!1
s=c.q
C.a.sk(s,0)
C.a.sk(u,0)
for(r=a0+1,q=[A.a6],p=1024/a0*0.5,o=c.ai,n=a-b,m=b!==a,l=a===b,k=Math.abs(b),t=0;t<a0;){j=!m||l?a:b+o.cq(n)
i=Math.abs(j)
if(i<1)h=1
else{if(i<=a)if(i<a)g=j===0?1/j<0:j<0
else g=!1
else g=!0
h=g?i/k*256:i/a*256}f=A.at(p,h,4278255487)
i=$.v
$.v=i+1
e=new A.X(f,i,H.l([],q),T.z())
d=e.gK()
e.e=e.gJ().a6(d,d).c/2
e.id=!0
if(j>=0){d=e.gK()
e.f=e.gJ().a6(d,d).d
e.id=!0}else e.f=-2;++t
e.c=128+t/r*1024
e.d=256
c.v(e)
C.a.j(s,j)
C.a.j(u,e)}},
H:function(a,b,c){var u,t,s,r,q,p,o=this,n=o.t,m=n.length
if(a<0||a>=m)return H.a(n,a)
u=n[a]
t=u.c
if(b<0||b>=m)return H.a(n,b)
s=n[b].c
u.cx=!1
m=u.gO().c
if(a>=n.length)return H.a(n,a)
m=A.at(m,n[a].gO().d,c)
u=$.v
$.v=u+1
r=[A.a6]
C.a.p(n,a,new A.X(m,u,H.l([],r),T.z()))
if(a>=n.length)return H.a(n,a)
u=n[a]
u.e=u.gO().c/2
u.id=!0
m=o.q
if(a>=m.length)return H.a(m,a)
u=m[a]
q=n.length
if(u>=0){if(a>=q)return H.a(n,a)
u=n[a]
u.f=u.gO().d
u.id=!0}else{if(a>=q)return H.a(n,a)
u=n[a]
u.f=-2
u.id=!0}if(a>=n.length)return H.a(n,a)
u=n[a]
u.c=t
u.id=!0
u.d=256
p=o.gam()
u=p instanceof A.G?p:null
if(a>=n.length)return H.a(n,a)
u.v(n[a])
u=n.length
if(a>=u)return H.a(n,a)
n[a].cx=!0
if(b>=u)return H.a(n,b)
u=n[b]
u.cx=!1
u=u.gO().c
if(b>=n.length)return H.a(n,b)
u=A.at(u,n[b].gO().d,c)
q=$.v
$.v=q+1
C.a.p(n,b,new A.X(u,q,H.l([],r),T.z()))
if(b>=n.length)return H.a(n,b)
r=n[b]
r.e=r.gO().c/2
r.id=!0
if(b>=m.length)return H.a(m,b)
m=m[b]
u=n.length
if(m>=0){if(b>=u)return H.a(n,b)
m=n[b]
m.f=m.gO().d
m.id=!0}else{if(b>=u)return H.a(n,b)
m=n[b]
m.f=-2
m.id=!0}if(b>=n.length)return H.a(n,b)
m=n[b]
m.c=s
m.id=!0
m.d=256
p=o.gam()
m=p instanceof A.G?p:null
if(b>=n.length)return H.a(n,b)
m.v(n[b])
if(b>=n.length)return H.a(n,b)
n[b].cx=!0},
a8:function(a,b){var u=0,t=P.bN(null),s,r=this,q,p,o,n,m,l,k
var $async$a8=P.bO(function(c,d){if(c===1)return P.bI(d,t)
while(true)switch(u){case 0:l=r.q
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
C.a.p(l,b,p)
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
case 1:return P.bJ(s,t)}})
return P.bK($async$a8,t)},
a2:function(a){var u=0,t=P.bN(null),s,r=this,q,p,o,n,m,l
var $async$a2=P.bO(function(b,c){if(b===1)return P.bI(c,t)
while(true)switch(u){case 0:r.u=!0
q=r.q,p=0
case 3:if(!(p<q.length-1)){u=5
break}o=0
case 6:if(!(o<q.length-p-1)){u=8
break}n=o+1
r.H(o,n,4287090426)
u=9
return P.ar(P.al(P.ai(a),null),$async$a2)
case 9:m=q.length
if(o>=m){s=H.a(q,o)
u=1
break}l=q[o]
if(n>=m){s=H.a(q,n)
u=1
break}u=l>q[n]?10:11
break
case 10:r.H(o,n,4292571283)
u=12
return P.ar(P.al(P.ai(a),null),$async$a2)
case 12:r.a8(o,n)
case 11:u=13
return P.ar(P.al(P.ai(a),null),$async$a2)
case 13:r.H(o,n,4278255487)
case 7:o=n
u=6
break
case 8:case 4:++p
u=3
break
case 5:r.u=!1
case 1:return P.bJ(s,t)}})
return P.bK($async$a2,t)},
a_:function(a){var u=0,t=P.bN(null),s,r=this,q,p,o,n,m,l
var $async$a_=P.bO(function(b,c){if(b===1)return P.bI(c,t)
while(true)$async$outer:switch(u){case 0:r.u=!0
q=r.q,p=0
case 3:if(!(o=q.length,p<o-1)){u=5
break}for(n=p,m=n;n<o;++n){r.H(p,m,4287090426)
o=q.length
if(n>=o){s=H.a(q,n)
u=1
break $async$outer}l=q[n]
if(m<0||m>=o){s=H.a(q,m)
u=1
break $async$outer}if(l<q[m])m=n}u=6
return P.ar(P.al(P.ai(a),null),$async$a_)
case 6:r.H(p,m,4292571283)
u=7
return P.ar(P.al(P.ai(a),null),$async$a_)
case 7:r.a8(p,m)
u=8
return P.ar(P.al(P.ai(a),null),$async$a_)
case 8:r.H(p,m,4278255487)
case 4:++p
u=3
break
case 5:r.u=!1
case 1:return P.bJ(s,t)}})
return P.bK($async$a_,t)},
aj:function(a){var u=0,t=P.bN(null),s,r=this,q,p,o,n,m,l,k
var $async$aj=P.bO(function(b,c){if(b===1)return P.bI(c,t)
while(true)switch(u){case 0:r.u=!0
q=r.q,p=1
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
break}r.H(p,p,4287090426)
k=o-1
r.H(o,k,4292571283)
u=8
return P.ar(P.al(P.ai(a),null),$async$aj)
case 8:r.a8(o,k)
u=9
return P.ar(P.al(P.ai(a),null),$async$aj)
case 9:r.H(o,k,4278255487)
o=k
u=6
break
case 7:case 4:++p
u=3
break
case 5:q=r.t.length-1
r.H(q,q,4278255487)
r.u=!1
case 1:return P.bJ(s,t)}})
return P.bK($async$aj,t)},
az:function(a){var u=0,t=P.bN(null),s=this,r,q
var $async$az=P.bO(function(b,c){if(b===1)return P.bI(c,t)
while(true)switch(u){case 0:s.a4=!1
s.c2(4292571283)
r=s.t
q=!1
case 2:if(!!0){u=3
break}if(!(!q&&!s.a4)){u=3
break}u=4
return P.ar(P.al(P.ai(a),null),$async$az)
case 4:C.a.cF(r)
s.e7()
q=s.e9()
u=2
break
case 3:s.c2(4278255487)
return P.bJ(null,t)}})
return P.bK($async$az,t)},
c2:function(a){var u,t,s
for(u=this.t,t=0;t<u.length-1;t=s){s=t+1
this.H(t,s,a)}},
e7:function(){var u,t,s,r
for(u=this.t,t=0;s=u.length,t<s;){r=u[t];++t
r.c=128+t/(s+1)*1024
r.id=!0}},
e9:function(){var u,t,s,r,q
for(u=this.t,t=0;t<u.length-1;){s=u[t]
r=s.gK()
s=s.gJ().a6(r,r).d;++t
if(t>=u.length)return H.a(u,t)
q=u[t]
r=q.gK()
if(s>q.gJ().a6(r,r).d)return!1}return!0}}
K.e5.prototype={}
K.df.prototype={
ay:function(a){var u,t,s,r=this,q=r.c+=a
r.d.j(0,q)
u=r.a
t=r.b
for(;u!==t;){s=u.b
u.a=s.geV()
u.b=s.gf0()}return!0},
$ijk:1}
A.X.prototype={
gK:function(){var u=this.k3
return new U.E(0,0,u.a,u.b,[P.m])},
W:function(a,b){if(a<0||a>=this.k3.a)return
if(b<0||b>=this.k3.b)return
return this},
ak:function(a){a.c.a5(a,this.k3.c)}}
A.a_.prototype={}
A.cO.prototype={
$1:function(a){var u,t,s,r
H.k(a,"$ia0")
u=new L.bu(C.y)
u.a=V.bQ(a.width)
u.b=V.bQ(a.height)
u.c=a
t=u.gaN().aQ(this.a)
s=t.c
r=t.e
return new A.a_(s.c/r,s.d/r,t)},
$S:18}
A.cL.prototype={
cJ:function(a,b){var u,t,s,r,q,p,o,n,m,l=this
l.b=l.a=a
l.c=1
u=P.h7("@(\\d+(.\\d+)?)x").eu(l.a)
if(u!=null){t=u.b
if(2>=t.length)return H.a(t,2)
s=t[2]
if(s==null)s="."
r=P.iZ(t[1])
q=C.a.ew(b,0,new A.cM($.fN()),P.m)
p=J.i2(q,s.length-1)
t=t.index+1
s=u.gaC()
o=P.is(t,s-1,a.length)
n=a.substring(0,t)
m=a.substring(o)
l.b=n+p+m
if(typeof r!=="number")return H.U(r)
l.c=q/r}}}
A.cM.prototype={
$2:function(a,b){var u
H.fa(a)
H.fa(b)
u=this.a
if(typeof a!=="number")return a.aT()
if(typeof u!=="number")return H.U(u)
if(typeof b!=="number")return b.aT()
if(Math.abs(a-u)<Math.abs(b-u)&&a>0)u=a
else u=b
return u},
$S:19}
A.cN.prototype={}
A.a6.prototype={}
A.I.prototype={
gF:function(a){return this.c},
sF:function(a,b){this.c=b
this.id=!0},
gam:function(){var u,t
for(u=this;t=u.fy,t!=null;u=t);return u},
gJ:function(){var u=this
if(u.id){u.id=!1
u.go.ao(1,0,0,1,u.c-u.e,u.d-u.f)}return u.go},
gK:function(){return new U.E(0,0,0,0,[P.m])},
gO:function(){var u=this.gK()
return this.gJ().a6(u,u)},
G:function(a,b){var u,t=[P.m]
H.u(a,"$iA",t,"$aA")
H.u(b,"$iA",t,"$aA")
u=!!b.$iA?b:new U.A(0,0,t)
u.sF(0,a.a)
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
q=this.gJ()
p=q.a
t.sF(0,(p[3]*(s-p[4])-p[2]*(r-p[5]))/q.gbd())
t.sZ(0,(p[0]*(r-p[5])-p[1]*(s-p[4]))/q.gbd())},
l:function(a,b){var u,t,s,r,q=this,p=H.l([],[R.c_])
for(u=q.fy;u!=null;u=u.fy)C.a.j(p,u)
t=p.length-1
while(!0){if(!(t>=0&&b.gc3()))break
if(t<0||t>=p.length)return H.a(p,t)
p[t].be(b,q,C.t);--t}q.be(b,q,C.T)
s=b.b
t=0
while(!0){r=p.length
if(!(t<r&&s))break
if(t>=r)return H.a(p,t)
p[t].be(b,q,C.U);++t}},
ak:function(a){},
sb5:function(a){this.fy=H.u(a,"$ife",[A.I],"$afe")},
$iju:1}
A.bi.prototype={
v:function(a){var u,t,s,r,q=this
if(a===q)throw H.h(P.ag("An object cannot be added as a child of itself."))
else{u=a.fy
if(u===q)q.cQ(a)
else{if(u!=null){t=u.C
s=C.a.eA(t,a)
u.cX(a)
C.a.bs(t,s)}q.dZ(a)
C.a.j(q.C,a)
a.sb5(q)
a.l(0,new R.L("added",!0))
r=q.gam()
if((r instanceof A.G?r:null)!=null)q.aX(a,"addedToStage")}}},
eJ:function(){var u,t,s,r,q="The supplied index is out of bounds.",p=this.C,o=p.length,n=o-1
if(0<=n){if(0<o)u=n>=o
else u=!0
if(u)throw H.h(P.ag(q))
else{t=0
while(!0){if(!(t<=n&&0<p.length))break
u=p.length
if(0>=u)H.F(P.ag(q))
else{s=p[0]
s.l(0,new R.L("removed",!0))
r=this.gam()
if((r instanceof A.G?r:null)!=null)this.aX(s,"removedFromStage")
s.sb5(null)
C.a.bs(p,0)}++t}}}},
gK:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this.C
if(j.length===0)return A.I.prototype.gK.call(this)
for(u=1/0,t=1/0,s=-1/0,r=-1/0,q=0;q<j.length;++q){p=j[q]
o=p.gK()
o=p.gJ().a6(o,o)
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
for(u=this.C,t=u.length-1,s=null;t>=0;--t){if(t>=u.length)return H.a(u,t)
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
i=r.W((m*o-l*n)/j,(k*n-p*o)/j)
if(i==null)continue
if(!!i.$ic1&&i.k4)return i
s=this}}return s},
ak:function(a){var u,t,s
for(u=this.C,t=0;t<u.length;++t){s=u[t]
if(s.cx&&!0)a.bt(s)}},
dZ:function(a){var u
for(u=this;u!=null;u=u.fy)if(u===a)throw H.h(P.ag("An object cannot be added as a child to one of it's children (or children's children, etc.)."))},
cQ:function(a){var u,t,s,r=this.C
for(u=r.length-1,t=a;u>=0;--u,t=s){if(u>=r.length)return H.a(r,u)
s=r[u]
C.a.p(r,u,t)
if(a===s)break}},
cX:function(a){var u
a.l(0,new R.L("removed",!0))
u=this.gam()
if((u instanceof A.G?u:null)!=null)this.aX(a,"removedFromStage")
a.sb5(null)},
aX:function(a,b){var u=!1,t=this
while(!0){if(!(t!=null&&!u))break
if(t.bp(b,!0))u=!0
t=t.fy}this.bT(a,new R.L(b,!1),u)},
bT:function(a,b,c){var u,t,s=!c
if(!s||a.ey(b.a))a.l(0,b)
if(!!a.$ibi){c=!s||a.bp(b.a,!0)
u=a.C
for(t=0;t<u.length;++t)this.bT(u[t],b,c)}},
$ife:1,
$afe:function(){return[A.I]}}
A.c1.prototype={}
A.dB.prototype={
ay:function(a){var u,t=this
t.f+=a
R.fq(t.d,$.fJ(),R.aJ)
t.b.ay(a)
u=t.c
C.a.V(u,new A.dC(a))
C.a.V(u,new A.dD(t,a))
R.fq(t.e,$.fK(),R.aL)}}
A.dC.prototype={
$1:function(a){H.k(a,"$iG").el.ay(this.a)
return!0},
$S:20}
A.dD.prototype={
$1:function(a){var u,t,s,r,q,p
H.k(a,"$iG")
u=this.a.f
t=a.aD
if(t!==C.m)t=t===C.H
else t=!0
if(t){s=new P.dQ()
if($.fn==null){H.io()
$.fn=$.dv}t=H.V($.dw.$0())
if(typeof t!=="number")return t.aT()
s.a=t-0
s.b=null
a.c_()
R.fq(a.ej,$.fM(),R.aV)
a.t.al(0)
t=a.t
r=t.a
r.c=r.b=r.a=0
t.ba(0,a.bh)
a.P.cv(0,a.co)
V.Z(u)
a.P.b=V.Z(this.b)
a.P.bt(a)
a.P.c.I(0)
u=a.eq=!1
q=a.t.a
p=s.gei()
a.bl=a.bl*0.75+q.a*0.25
a.bm=a.bm*0.75+q.b*0.25
a.bn=a.bn*0.75+q.c*0.25
a.bk=a.bk*0.95+p*0.05
t=a.u
if(t.cx){t.toString
u=!0}if(u){C.a.sk(t.r2,0)
t.ry=t.rx=0
a.u.aM(0,"FRAMETIME"+C.c.aK(C.d.h(C.b.m(a.bk)),6))
a.u.aM(0,"DRAWCALLS"+C.c.aK(C.d.h(C.b.m(a.bl)),6))
a.u.aM(0,"VERTICES"+C.c.aK(C.d.h(C.b.m(a.bm)),7))
a.u.aM(0,"INDICES"+C.c.aK(C.d.h(C.b.m(a.bn)),8))
a.P.cv(0,a.c9)
a.P.bt(a.u)
a.P.c.I(0)}}if(a.aD===C.H)a.aD=C.a_
return},
$S:21}
A.bv.prototype={
h:function(a){return this.b}}
A.aX.prototype={
h:function(a){return this.b}}
A.Y.prototype={
h:function(a){return this.b}}
A.G.prototype={
cK:function(a,b,c,d){var u,t,s,r=this,q=a.tabIndex
if(typeof q!=="number")return q.cB()
if(q<=0)a.tabIndex=1
q=a.style
if(q.outline==="")q.outline="none"
r.bh=c.f
r.en=r.em=!0
r.ep=r.eo=!1
r.q=a
r.cb=C.i
r.ca=C.n
r.aD=C.m
r.bf=C.k
r.a4=V.bQ(d)
r.cl=V.bQ(b)
r.aG=V.jb(5,$.fN())
q=r.d0(a,c)
r.t=q
r.P=L.it(q)
q=H.l([],[L.az])
u=T.z()
t=H.l([],[P.r])
s=$.v
$.v=s+1
s=new A.cn(q,u,t,s,H.l([],[A.a6]),T.z())
A.i6("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAcAAAAAOAQAAAACQy/GuAAABsElEQVR4Aa3OMWsTUQDA8f97eV6fEpvT6YZgX4qDYwoOAdE+IQ5OfoXzG7S46KA8HZSC1PQLaNCln8ElFxyaQWg3XZQLBAyi5BqjJDHeE7whoE7i7xP8+He1Wq38WGkLIFmyphryV2JQAQnIhwE6tQCR6Sc3dq80tsBmQVTrHlSeVZvT8flwr3p7u3/Q27va3MnMWKEA2e0oRAjI8uWN1f3rZ9YjhNNU392Ud7bPckGuf9LB62sblQ874E3OqbEEefRyrsNRywFs5sL5FOIuizSqQ0IO2JMApMAA4DQS/77+dZEBgMIhVor/Wi6nkAIgHAvAw0zTCz3fkCDOubJD3IorDgifH+8yydrNvleQsLIaNPDuB1zkMIH+8MjACAknnr564vCf28dOg4n5QrnFAoFu1JmNF70i3MPGQIT1DiTp91h0gAQAbGkfBeRrcjrYwgAImAOMYf7rDUhAKchC7rsgRDyYxYCLO33FoAUWBaTkFD5WgQQkhnzzkqMweTtq+7tMhnin9YTDF4/chDftUsKcoW97B2RQEIC24GDJWsNvDAWRVrjHUgmWhOMPEf/DT5NSmGlKVHTvAAAAAElFTkSuQmCC").bw(s.gcT(),-1)
s.cx=!1
r.u=s
H.jd("StageXL render engine : "+r.t.gcu().h(0))
q=W.an
u=H.e(r.gdv(),{func:1,ret:-1,args:[q]})
W.t(a,"keydown",u,!1,q)
W.t(a,"keyup",u,!1,q)
W.t(a,"keypress",u,!1,q)
q=r.bf
if(q===C.k||q===C.u){q=W.y
u=H.e(r.gdB(),{func:1,ret:-1,args:[q]})
W.t(a,"mousedown",u,!1,q)
W.t(a,"mouseup",u,!1,q)
W.t(a,"mousemove",u,!1,q)
W.t(a,"mouseout",u,!1,q)
W.t(a,"contextmenu",u,!1,q)
W.fV(a)
q=W.ad
W.t(a,H.W(W.fV(a)),H.e(r.gdD(),{func:1,ret:-1,args:[q]}),!1,q)}q=r.bf
if((q===C.V||q===C.u)&&H.b7($.hX())){q=W.ap
u=H.e(r.gdH(),{func:1,ret:-1,args:[q]})
W.t(a,"touchstart",u,!1,q)
W.t(a,"touchend",u,!1,q)
W.t(a,"touchmove",u,!1,q)
W.t(a,"touchenter",u,!1,q)
W.t(a,"touchleave",u,!1,q)
W.t(a,"touchcancel",u,!1,q)}$.hK().eF(new A.dO(r))
r.b8()
r.c_()
r.t.ba(0,r.bh)},
W:function(a,b){var u=this.bI(a,b)
return u!=null?u:this},
d0:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=b.a
if(e===C.l)try{e=new T.aQ(new Float32Array(16))
e.a7()
u=H.l([],[L.eE])
t=P.r
s=[t,P.x]
r=[t,P.bz]
q=new Int16Array(0)
q=new L.dE(new H.M(s),new H.M(r),new L.aT(q),new L.aU(new Float32Array(0)),new L.ao())
p=new Int16Array(0)
o=new Float32Array(0)
n=new Int16Array(0)
m=new Float32Array(0)
l=new Int16Array(16384)
k=new Float32Array(32768)
j=new Array(8)
j.fixed$length=Array
j=H.l(j,[L.bu])
i=H.l([],[L.cj])
h=L.ay
h=new L.ch(a,e,u,q,new L.dF(new H.M(s),new H.M(r),new L.aT(p),new L.aU(o),new L.ao()),new L.dG(new H.M(s),new H.M(r),new L.aT(n),new L.aU(m),new L.ao()),new L.aT(l),new L.aU(k),j,i,new H.M([t,L.bt]),new L.ao(),P.aB(h),P.aB(h))
i=P.a8
j={func:1,ret:-1,args:[i]}
W.t(a,"webglcontextlost",H.e(h.gdf(),j),!1,i)
W.t(a,"webglcontextrestored",H.e(h.gdh(),j),!1,i)
b=P.ik(["alpha",!1,"depth",!1,"stencil",!0,"antialias",!1,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1],t,null)
g=C.j.bB(a,"webgl",b)
g=H.k(g==null?C.j.bB(a,"experimental-webgl",b):g,"$iaA")
if(!J.q(g).$iaA)H.F(P.aY("Failed to get WebGL context."))
h.e=g
g.enable(3042)
h.e.disable(2960)
h.e.disable(2929)
h.e.disable(2884)
h.e.pixelStorei(37441,1)
h.e.blendFunc(1,771)
h.x=q
q.aa(h)
h.cx=$.dz=$.dz+1
h.al(0)
return h}catch(f){H.a4(f)
e=T.z()
u=L.ay
u=new L.cg(a,a.getContext("2d"),e,C.f,new L.ao(),P.aB(u),P.aB(u))
u.al(0)
return u}else if(e===C.x){e=T.z()
u=L.ay
u=new L.cg(a,a.getContext("2d"),e,C.f,new L.ao(),P.aB(u),P.aB(u))
u.al(0)
return u}else throw H.h(P.aY("Unknown RenderEngine"))},
c_:function(){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.a4,h=j.cl,g=j.q.getBoundingClientRect(),f=j.q,e=f.clientLeft,d=C.b.m(g.left)
if(typeof e!=="number")return e.N()
u=f.clientTop
t=C.b.m(g.top)
if(typeof u!=="number")return u.N()
s=f.clientWidth
r=f.clientHeight
if(s===0||r===0)return
if(typeof s!=="number")return s.bA()
q=s/i
if(typeof r!=="number")return r.bA()
p=r/h
switch(j.ca){case C.a0:o=p
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
o=1}f=j.cb
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
default:l=0}f=j.er
f.sX(0,-m/n)
f.sY(0,-l/o)
f.sT(0,s/n)
f.sR(0,r/o)
f=j.co
f.ao(n,0,0,o,m,l)
k=j.aG
f.aS(0,k,k)
k=j.aH
k.ao(1,0,0,1,-(e+d)-m,-(u+t)-l)
k.aS(0,1/n,1/o)
k=j.c9
k.cp()
t=j.aG
k.aS(0,t,t)
if(j.cm!==s||j.cn!==r){j.cm=s
j.cn=r
f=j.q
e=j.aG
if(typeof e!=="number")return H.U(e)
f.width=C.b.m(s*e)
f.height=C.b.m(r*e)
if(f.clientWidth!==s||f.clientHeight!==r){f=f.style
e=""+s+"px"
f.width=e
f=j.q.style
e=""+r+"px"
f.height=e}j.l(0,new R.L("resize",!1))}},
b8:function(){var u,t,s,r,q,p,o,n=this,m="default",l=n.bg
if(l!=null&&!0)l.toString
if(n.cc!=="default"){n.cc=m
u=n.q.style
if($.fG().c5(m)){t=$.fG().n(0,m)
s=C.v.gf1(t)
r=t.gez()
q=r.gF(r)
r=t.gez()
p=r.gZ(r)
o="url('"+H.b(s)+"') "+H.b(q)+" "+H.b(p)+", default"}else o=m
u.cursor=o}},
dC:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this
H.k(a,"$iy")
a.preventDefault()
u=Date.now()
t=a.button
s=P.m
r=b.aH.by(new P.a1(a.clientX,a.clientY,[s]))
q=new U.A(0,0,[s])
if(typeof t!=="number")return t.cC()
if(t<0||t>2)return
if(a.type==="mousemove"&&b.cd.w(0,r))return
s=b.ek
if(t<0||t>=3)return H.a(s,t)
p=s[t]
b.sdc(r)
C.a.V(b.ce,new A.dL(r))
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
if(g!==l[h])break}if(n!=null){n.G(r,q)
n.l(0,new R.N(q.a,q.b,"mouseOut",!0))}for(f=0;f<m.length-i;++f){e=m[f]
e.G(r,q)
e.l(0,new R.N(q.a,q.b,"rollOut",!1))}for(f=l.length-i-1;f>=0;--f){if(f>=l.length)return H.a(l,f)
e=l[f]
e.G(r,q)
e.l(0,new R.N(q.a,q.b,"rollOver",!1))}if(o!=null){o.G(r,q)
o.l(0,new R.N(q.a,q.b,"mouseOver",!0))}b.bg=o}b.b8()
if(a.type==="mousedown"){b.q.focus()
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
if(d!=null&&o!=null){o.G(r,q)
o.l(0,new R.N(q.a,q.b,d,!0))
if(c)o.l(0,new R.N(q.a,q.b,p.c,!0))}},
dE:function(a){var u,t,s,r,q
H.k(a,"$iad")
u=P.m
t=this.aH.by(new P.a1(a.clientX,a.clientY,[u]))
s=new U.A(0,0,[u])
r=this.W(t.a,t.b)
r.G(t,s)
u=s.a
q=s.b;(a&&C.I).gef(a)
C.I.geg(a)
r.l(0,new R.N(u,q,"mouseWheel",!0))},
dI:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this
H.k(b4,"$iap")
b4.preventDefault()
u=b4.type
for(t=b4.changedTouches,s=t.length,r=u==="touchmove",q=u==="touchcancel",p=u==="touchend",o=u==="touchstart",n=b3.cf,m=b3.ce,l=P.m,k=[l],j=b3.aH,l=[l],i=[A.I],h=0;h<t.length;t.length===s||(0,H.fE)(t),++h){g=t[h]
f=g.identifier
e=j.by(new P.a1(C.b.m(g.clientX),C.b.m(g.clientY),k))
d=new U.A(0,0,l)
c=b3.bI(e.a,e.b)
c=c!=null?c:b3
b=n.ct(f,new A.dM(b3,c))
a=b.a
b.b
C.a.V(m,new A.dN(a,e))
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
if(a8!==a2[a7])break}if(a0!=null){a0.G(e,d)
a0.l(0,new R.aq(d.a,d.b,"touchOut",!0))}for(a9=0;a9<a1.length-a6;++a9){b0=a1[a9]
b0.G(e,d)
b0.l(0,new R.aq(d.a,d.b,"touchRollOut",!1))}for(a9=a2.length-a6-1;a9>=0;--a9){if(a9>=a2.length)return H.a(a2,a9)
b0=a2[a9]
b0.G(e,d)
b0.l(0,new R.aq(d.a,d.b,"touchRollOver",!1))}c.G(e,d)
c.l(0,new R.aq(d.a,d.b,"touchOver",!0))
b.d=c}if(o){b3.q.focus()
n.p(0,f,b)
b1="touchBegin"}else b1=null
if(p){n.aO(0,f)
b2=b.c===c
b1="touchEnd"}else b2=!1
if(q){n.aO(0,f)
b1="touchCancel"}if(r)b1="touchMove"
if(b1!=null&&!0){c.G(e,d)
c.l(0,new R.aq(d.a,d.b,b1,!0))
if(b2)c.l(0,new R.aq(d.a,d.b,"touchTap",!0))}}},
dw:function(a){H.k(a,"$ian")
return},
sdc:function(a){this.cd=H.u(a,"$iA",[P.m],"$aA")}}
A.dO.prototype={
$1:function(a){H.W(a)
return this.a.b8()},
$S:26}
A.dL.prototype={
$1:function(a){return H.k(a,"$iaD").eR(0,this.a)},
$S:11}
A.dM.prototype={
$0:function(){var u=this.b,t=this.a.cf.a,s=$.hg
$.hg=s+1
return new A.b4(s,t===0,u,u)},
$S:28}
A.dN.prototype={
$1:function(a){return H.k(a,"$iaD").eR(this.a,this.b)},
$S:11}
A.cn.prototype={
aM:function(a,b){var u,t,s=this
C.a.j(s.r2,b)
u=b.length
t=s.rx
s.rx=u>t?u:t;++s.ry},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
i.l(0,new R.L("Update",!1))
for(u=i.k4,t=a.c,s=i.r1,r=i.r2,q=0;q<i.ry;++q)for(p=q*14,o=0;o<i.rx;++o){if(q>=r.length)return H.a(r,q)
n=r[q]
m=o<n.length?C.c.aq(n,o)-32:0
if(m<0||m>=64)m=0
s.ao(1,0,0,1,o*7,p)
l=a.e
k=l.f
if(k==null){n=T.z()
j=new T.aQ(new Float32Array(16))
j.a7()
k=l.f=new L.bB(C.f,n,j,l)}k.c.c6(s,l.c)
k.b=C.f
k.a=l.a
a.e=k
if(m<0||m>=u.length)return H.a(u,m)
t.a5(a,u[m])
a.e=a.e.e}},
cU:function(b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=H.k(b3,"$ia_").c,b2=b1.a
b2.ses(C.Z)
for(u=[P.x],t=this.k4,s=[P.m],r=b1.e,q=0*r,p=b1.d,o=b1.b,n=H.d(o,0),b1=b1.c,m=0;m<64;++m){l=m*7
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
b=C.d.cD(p,4)
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
a6=0}a7=V.eZ(a2,h,f)
a8=V.eZ(a4,g,e)
a=V.eZ(a5,h,f)
a0=V.eZ(a6,g,e)
if(b===0){a9=a2-a7
b0=a4-a8}else if(b===1){a9=a4-a8
b0=a-a5}else if(b===2){a9=a-a5
b0=a6-a0}else if(b===3){a9=a0-a6
b0=a7-a2}else{a9=0
b0=0}C.a.j(t,L.fm(b2,new U.E(a7,a8,a-a7,a0-a8,u),new U.E(a9,b0,l,k,u),b,r))}}}
A.dK.prototype={}
A.b3.prototype={}
A.b4.prototype={}
A.aD.prototype={}
L.cP.prototype={}
L.aT.prototype={}
L.aU.prototype={
ae:function(a,b,c,d){if(a==null)return
this.r.vertexAttribPointer(a,b,5126,!1,c,d)}}
L.ci.prototype={
h:function(a){return this.b}}
L.ay.prototype={}
L.dy.prototype={}
L.cg.prototype={
gcu:function(){return C.x},
al:function(a){var u,t=this
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
u.clearRect(0,0,s.width,s.height)}if(t>0){u.fillStyle=V.fy(b)
s=r.d
u.fillRect(0,0,s.width,s.height)}},
I:function(a){},
a5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this
H.k(a,"$iaW")
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
gcu:function(){return C.l},
al:function(a){var u=this,t=u.d,s=t.width,r=t.height
u.y=null
u.e.bindFramebuffer(36160,null)
u.e.viewport(0,0,s,r)
t=u.f
t.a7()
if(typeof s!=="number")return H.U(s)
if(typeof r!=="number")return H.U(r)
t.cE(0,2/s,-2/r,1)
t.eN(0,-1,1,0)
u.x.scs(t)},
ba:function(a,b){var u,t=this
C.a.sk(t.d7(),0)
t.e0(null)
t.e1(0)
u=(b>>>24&255)/255
t.e.colorMask(!0,!0,!0,!0)
t.e.clearColor((b>>>16&255)/255*u,(b>>>8&255)/255*u,(b&255)/255*u,u)
t.e.clear(17408)},
I:function(a){this.x.I(0)},
a5:function(a,b){var u,t=this
H.k(a,"$iaW")
H.k(b,"$iaz")
u=t.cy
t.e4(u)
t.e3(a.e.b)
t.ax(b.a)
u.a5(a,b)},
e4:function(a){var u=this,t=u.x
if(a!==t){t.I(0)
u.x=a
a.aa(u)
u.x.scs(u.f)}},
e3:function(a){var u=this
if(a!==u.Q){u.x.I(0)
u.Q=a
u.e.blendFunc(1,771)}},
ax:function(a){var u,t,s,r=this,q=3553,p=6408,o=r.fx
if(a!==o[0]){r.x.I(0)
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
o=H.b7(a.Q.isEnabled(3089))
if(o)a.Q.disable(3089)
u=a.c
t=a.Q
s=t&&C.h
if(u!=null){s.aP(t,q,0,p,p,5121,u)
a.z=a.Q.getError()===1281}else s.bv(t,q,0,p,a.a,a.b,0,p,5121,null)
if(a.z){u=a.a
u=W.bV(a.b,u)
a.d=u
u.getContext("2d").drawImage(a.c,0,0)
u=a.Q;(u&&C.h).aP(u,q,0,p,p,5121,a.d)}if(o)a.Q.enable(3089)
a.Q.texParameteri(q,10242,33071)
a.Q.texParameteri(q,10243,33071)
a.Q.texParameteri(q,10241,a.e.a)
a.Q.texParameteri(q,10240,a.e.a)}else{a.Q.activeTexture(33984)
a.Q.bindTexture(q,a.ch)}}},
d7:function(){var u=this.y
return u instanceof L.cj?u.r:this.r},
e1:function(a){var u=this.e
if(a===0)u.disable(2960)
else{u.enable(2960)
this.e.stencilFunc(514,a,255)}},
e0:function(a){this.e.disable(3089)},
dg:function(a){H.k(a,"$ia8").preventDefault()
this.b.j(0,new L.ay())},
di:function(a){H.k(a,"$ia8")
this.cx=$.dz=$.dz+1
this.c.j(0,new L.ay())}}
L.dA.prototype={}
L.cj.prototype={}
L.eU.prototype={
$1:function(a){var u,t,s,r,q
H.fa(a)
if(typeof a!=="number")return a.bA()
u=a/1000
t=u-$.hk
$.hk=u
$.fr=-1
L.hj()
s=$.fL()
s=H.l(s.slice(0),[H.d(s,0)])
r=s.length
q=0
for(;q<s.length;s.length===r||(0,H.fE)(s),++q)s[q].$1(t)},
$S:31}
L.ck.prototype={
dm:function(a){var u
H.fa(a)
if(this.a){if(typeof a!=="number")return a.eT()
u=a>=0}else u=!1
if(u)if(typeof a==="number")this.ay(a)}}
L.eE.prototype={}
L.bt.prototype={
scs:function(a){var u=this.e.n(0,"uProjectionMatrix")
this.b.uniformMatrix4fv(u,!1,a.a)},
aa:function(a){var u,t,s=this,r=s.a,q=a.cx
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
r=s.d_(s.b)
s.c=r
s.e_(s.b,r)
s.e2(s.b,s.c)}s.b.useProgram(s.c)},
I:function(a){var u,t,s,r=this,q=r.f,p=q.c
if(p>0&&r.r.c>0){u=q.a.buffer
u.toString
H.hi(u,0,p)
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
H.hi(u,0,s)
t=new Float32Array(u,0,s)
q.r.bufferSubData(34962,0,t)
u=q.x
u.b=u.b+q.d
q=r.r
q.d=q.c=0
r.b.drawElements(4,p,5123,0);++r.x.a}},
d_:function(a){var u=this,t=a.createProgram(),s=u.bR(a,u.gbz(),35633),r=u.bR(a,u.gbo(),35632)
a.attachShader(t,s)
a.attachShader(t,r)
a.linkProgram(t)
if(a.getProgramParameter(t,35714)===!0)return t
throw H.h(P.aY(H.b7(a.isContextLost())?"ContextLost":a.getProgramInfoLog(t)))},
bR:function(a,b,c){var u=a.createShader(c)
a.shaderSource(u,b)
a.compileShader(u)
if(a.getShaderParameter(u,35713)===!0)return u
throw H.h(P.aY(H.b7(a.isContextLost())?"ContextLost":a.getShaderInfoLog(u)))},
e_:function(a,b){var u,t,s,r,q=this.d
q.c4(0)
u=H.V(a.getProgramParameter(b,35721))
if(typeof u!=="number")return H.U(u)
t=0
for(;t<u;++t){s=a.getActiveAttrib(b,t)
r=a.getAttribLocation(b,s.name)
a.enableVertexAttribArray(r)
q.p(0,s.name,r)}},
e2:function(a,b){var u,t,s,r,q=this.e
q.c4(0)
u=H.V(a.getProgramParameter(b,35718))
if(typeof u!=="number")return H.U(u)
t=0
for(;t<u;++t){s=a.getActiveUniform(b,t)
r=a.getUniformLocation(b,s.name)
q.p(0,s.name,r)}}}
L.dE.prototype={
gbz:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute float aVertexAlpha;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vAlpha = aVertexAlpha;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbo:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying float vAlpha;\n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vAlpha;\n    }\n    "},
aa:function(a){var u,t=this
t.bJ(a)
u=t.b;(u&&C.h).eP(u,t.e.n(0,"uSampler"),0)
u=t.d
t.r.ae(u.n(0,"aVertexPosition"),2,20,0)
t.r.ae(u.n(0,"aVertexTextCoord"),2,20,8)
t.r.ae(u.n(0,"aVertexAlpha"),1,20,16)},
a5:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=this
H.k(a3,"$iaW")
H.k(a4,"$iaz")
a4.z
u=a3.e
t=u.a
s=u.c
r=a4.r
u=a2.f
q=u.a
p=q.length
if(u.c+6>=p)a2.I(0)
u=a2.r
o=u.a
n=o.length
if(u.c+20>=n)a2.I(0)
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
L.dF.prototype={
gbz:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec2 aVertexTextCoord;\n    attribute vec4 aVertexColor;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      vTextCoord = aVertexTextCoord;\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbo:function(){return"\n    precision mediump float;\n    uniform sampler2D uSampler;\n    varying vec2 vTextCoord;\n    varying vec4 vColor; \n\n    void main() {\n      gl_FragColor = texture2D(uSampler, vTextCoord) * vColor;\n    }\n    "}}
L.dG.prototype={
gbz:function(){return"\n    uniform mat4 uProjectionMatrix;\n    attribute vec2 aVertexPosition;\n    attribute vec4 aVertexColor;\n    varying vec4 vColor;\n\n    void main() {\n      vColor = aVertexColor;\n      gl_Position = vec4(aVertexPosition, 0.0, 1.0) * uProjectionMatrix;\n    }\n    "},
gbo:function(){return"\n    precision mediump float;\n    varying vec4 vColor;\n\n    void main() {\n      gl_FragColor = vColor;\n    }\n    "},
aa:function(a){var u,t=this
t.bJ(a)
u=t.d
t.r.ae(u.n(0,"aVertexPosition"),2,24,0)
t.r.ae(u.n(0,"aVertexColor"),4,24,8)}}
L.bB.prototype={
geI:function(){var u,t=this.f
if(t==null){t=T.z()
u=new T.aQ(new Float32Array(16))
u.a7()
u=this.f=new L.bB(C.f,t,u,this)
t=u}return t}}
L.aW.prototype={
cv:function(a,b){var u,t=this.d
this.e=t
t=t.c
t.cp()
u=this.e
u.a=1
u.b=C.f
t.ed(b)},
bt:function(a){var u,t=this,s=a.gJ(),r=t.e,q=r.geI()
q.c.c6(s,r.c)
u=r.b
q.b=u
q.a=r.a
t.e=q
a.ak(t)
t.e=r}}
L.ao.prototype={
h:function(a){return"RenderStatistics: "+this.a+" draws, "+this.b+" verices, "+this.c+" indices"}}
L.bu.prototype={
gaN:function(){var u=this.a,t=this.b,s=[P.x]
return L.fm(this,new U.E(0,0,u,t,s),new U.E(0,0,u,t,s),0,1)},
ge8:function(a){var u=this,t=u.c,s=J.q(t)
if(!!s.$iah)return t
else if(!!s.$ia0){s=u.a
s=W.bV(u.b,s)
u.d=u.c=s
s.getContext("2d").drawImage(t,0,0,u.a,u.b)
return u.d}else throw H.h(P.aY("RenderTexture is read only."))},
ses:function(a){var u,t=this
if(t.e===a)return
t.e=a
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.ax(t)
t.Q.texParameteri(3553,10241,t.e.a)
t.Q.texParameteri(3553,10240,t.e.a)},
eK:function(a,b,c){var u,t=this
if(!(t.a===b&&t.b===c))if(t.c==null){t.a=b
t.b=c
u=t.x
if(u==null||t.ch==null)return
if(u.cx!==t.y)return
u.ax(t)
u=t.Q;(u&&C.h).bv(u,3553,0,6408,t.a,t.b,0,6408,5121,null)}else{t.a=b
t.b=c
t.d=t.c=W.bV(c,b)}},
eQ:function(){var u,t=this,s=6408,r=t.x
if(r==null||t.ch==null)return
if(r.cx!==t.y)return
r.x.I(0)
t.x.ax(t)
r=H.b7(t.Q.isEnabled(3089))
if(r)t.Q.disable(3089)
if(t.z){t.d.getContext("2d").drawImage(t.c,0,0)
u=t.Q;(u&&C.h).aP(u,3553,0,s,s,5121,t.d)}else{u=t.Q;(u&&C.h).aP(u,3553,0,s,s,5121,t.c)}if(r)t.Q.enable(3089)}}
L.cl.prototype={}
L.az.prototype={
aQ:function(a){var u=this
return L.fm(u.a,u.b,u.c,u.d,a)},
geh:function(){var u,t,s,r=this,q=r.e,p=r.d
if(p===0){p=r.b
u=r.c
return T.dm(q,0,0,q,p.a+u.a,p.b+u.b)}else if(p===1){p=r.b
u=r.c
return T.dm(0,q,0-q,0,H.j(p.a+p.c,H.d(p,0))-u.b,p.b+u.a)}else if(p===2){p=r.b
u=H.d(p,0)
t=r.c
s=0-q
return T.dm(s,0,0,s,H.j(p.a+p.c,u)-t.a,H.j(p.b+p.d,u)-t.b)}else if(p===3){p=r.b
u=r.c
return T.dm(0,0-q,q,0,p.a+u.b,H.j(p.b+p.d,H.d(p,0))-u.a)}else throw H.h(P.ff())}}
L.dH.prototype={}
T.di.prototype={
h:function(a){var u="LoadError: "+this.a
return u}}
R.cR.prototype={
gc3:function(){return!1}}
R.aJ.prototype={}
R.aL.prototype={}
R.aV.prototype={}
R.L.prototype={
gc3:function(){return!0}}
R.c_.prototype={
bq:function(a,b,c){var u,t,s,r
H.iS(c,R.L,"The type argument '","' is not a subtype of the type variable bound '","' of type variable 'T' in 'on'.")
u=this.a
if(u==null){u=new H.M([P.r,[R.av,R.L]])
this.sd4(u)}t=[c]
s=H.u(u.n(0,b),"$iav",t,"$aav")
if(s==null){r=new Array(0)
r.fixed$length=Array
s=new R.av(this,H.l(r,[[R.D,c]]),t)
u.p(0,b,s)}return s},
bp:function(a,b){var u,t,s=this.a
if(s==null)return!1
u=s.n(0,a)
if(u==null)return!1
t=u.d
return b?t>0:u.c.length>t},
ey:function(a){return this.bp(a,!1)},
be:function(a,b,c){var u,t
a.r=a.f=!1
u=this.a
if(u==null)return
t=u.n(0,a.a)
if(t==null)return
t.d2(a,b,c)},
sd4:function(a){this.a=H.u(a,"$ih3",[P.r,[R.av,R.L]],"$ah3")}}
R.bj.prototype={
h:function(a){return this.b}}
R.av.prototype={
aJ:function(a,b,c,d){H.e(a,{func:1,ret:-1,args:[H.d(this,0)]})
H.e(c,{func:1,ret:-1})
return this.av(a,!1,0)},
av:function(a,b,c){var u,t,s,r,q,p,o=this,n=H.d(o,0),m=new R.D(c,!1,o,H.e(a,{func:1,ret:-1,args:[n]}),o.$ti),l=o.c,k=l.length,j=new Array(k+1)
j.fixed$length=Array
u=H.l(j,[[R.D,n]])
t=u.length-1
for(s=0,r=0;s<k;++s,r=p){q=l[s]
if(s===r&&q.a<c){p=r+1
t=r
r=p}p=r+1
C.a.p(u,r,q)}C.a.p(u,t,m)
o.sdV(u)
n=[R.aJ]
if(H.ae(m,"$iD",n,null)){k=$.fJ();(k&&C.a).j(k,H.fD(m,"$iD",n,"$aD"))}else{n=[R.aL]
if(H.ae(m,"$iD",n,null)){k=$.fK();(k&&C.a).j(k,H.fD(m,"$iD",n,"$aD"))}else{n=[R.aV]
if(H.ae(m,"$iD",n,null)){k=$.fM();(k&&C.a).j(k,H.fD(m,"$iD",n,"$aD"))}}}return m},
d2:function(a,b,c){var u,t,s,r,q,p,o=H.d(this,0)
H.j(a,o)
u=this.c
t=c===C.t
for(s=u.length,o={func:1,ret:-1,args:[o]},r=0;r<s;++r){q=u[r]
if(!q.c){q.d
p=t}else p=!0
if(p)continue
H.e(q.f,o).$1(a)}},
sdV:function(a){this.c=H.u(a,"$iK",[[R.D,H.d(this,0)]],"$aK")}}
R.D.prototype={}
R.bm.prototype={
h:function(a){return this.b}}
R.db.prototype={}
R.aO.prototype={}
R.N.prototype={}
R.aZ.prototype={}
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
if(typeof u!=="number")return u.aR()
q=s[2]
if(typeof t!=="number")return t.aR()
p=u*r+t*q+s[4]
o=u*s[1]+t*s[3]+s[5]
if(!!C.v.$iA){null.eU(p,o)
return}else return new U.A(p,o,[n])},
a6:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=P.m
H.u(a7,"$iaS",[a6],"$aaS")
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
a8.sT(0,a4)
a8.sR(0,a5)
return a8}else return new U.E(t[4]+a0,t[5]+a1,a4,a5,a6)},
cp:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=1
u[4]=0
u[5]=0},
aS:function(a,b,c){var u=this.a,t=u[0]
if(typeof b!=="number")return H.U(b)
u[0]=t*b
t=u[1]
if(typeof c!=="number")return H.U(c)
u[1]=t*c
u[2]=u[2]*b
u[3]=u[3]*c
u[4]=u[4]*b
u[5]=u[5]*c},
ao:function(a,b,c,d,e,f){var u=this.a
u[0]=a
u[1]=b
u[2]=c
u[3]=d
u[4]=e
u[5]=f},
ed:function(a){var u=this.a,t=a.a
u[0]=t[0]
u[1]=t[1]
u[2]=t[2]
u[3]=t[3]
u[4]=t[4]
u[5]=t[5]},
c6:function(a,b){var u,t,s,r,q,p,o=a.a,n=o[0],m=o[1],l=o[2],k=o[3],j=o[4],i=o[5]
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
cE:function(a,b,c,d){var u=this.a
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
eN:function(a,b,c,d){var u=this.a
u[3]=u[3]+b
u[7]=u[7]+c
u[11]=u[11]+d}}
U.A.prototype={
h:function(a){return"Point<"+new H.by(H.d(this,0)).h(0)+"> [x="+H.b(this.a)+", y="+H.b(this.b)+"]"},
w:function(a,b){if(b==null)return!1
return!!J.q(b).$ia1&&this.a===b.gF(b)&&this.b===b.gZ(b)},
gi:function(a){var u=C.b.gi(this.a),t=C.b.gi(this.b)
return O.h_(O.bo(O.bo(0,u),t))},
sF:function(a,b){this.a=H.j(b,H.d(this,0))},
sZ:function(a,b){this.b=H.j(b,H.d(this,0))},
$ia1:1,
gF:function(a){return this.a},
gZ:function(a){return this.b}}
U.E.prototype={
h:function(a){var u=this
return"Rectangle<"+new H.by(H.d(u,0)).h(0)+"> [left="+H.b(u.a)+", top="+H.b(u.b)+", width="+H.b(u.c)+", height="+H.b(u.d)+"]"},
w:function(a,b){var u,t=this
if(b==null)return!1
u=J.q(b)
return!!u.$iaS&&t.a===u.gX(b)&&t.b===u.gY(b)&&t.c===u.gT(b)&&t.d===u.gR(b)},
gi:function(a){var u=this,t=C.b.gi(u.a),s=C.b.gi(u.b),r=C.b.gi(u.c),q=C.b.gi(u.d)
return O.h_(O.bo(O.bo(O.bo(O.bo(0,t),s),r),q))},
sX:function(a,b){this.a=H.j(b,H.d(this,0))},
sY:function(a,b){this.b=H.j(b,H.d(this,0))},
sT:function(a,b){this.c=H.j(b,H.d(this,0))},
sR:function(a,b){this.d=H.j(b,H.d(this,0))},
$iaS:1,
gX:function(a){return this.a},
gY:function(a){return this.b},
gT:function(a){return this.c},
gR:function(a){return this.d}}
N.c0.prototype={
ds:function(a){var u=this
u.d.aA()
u.e.aA()
u.b.bb(0,u.a)},
dq:function(a){var u=this
u.d.aA()
u.e.aA()
u.b.ea(new T.di("Failed to load "+H.b(u.a.src)+"."))}}
Y.eT.prototype={
$0:function(){return Y.iD(this.a)},
$S:34}
Y.b1.prototype={
cM:function(a){var u,t,s=this,r=a.gar(),q=H.k(W.fp("span",null),"$iaj"),p=H.k(W.fp("div",null),"$iaj"),o=H.k(W.fp("div",null),"$iaj"),n=q.style
n.font=r
q.textContent="Hg"
n=p.style
n.display="inline-block"
n=p.style
n.width="1px"
n=p.style
n.height="0px"
J.fO(o,p)
J.fO(o,q)
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
s.a=C.d.U(n*7,8)
s.b=C.d.U(n*2,8)}finally{n=o
u=n.parentNode
if(u!=null)J.hZ(u,n)}}}
Y.co.prototype={
san:function(a,b){this.C=b
this.ci=b.length
this.E|=3},
sab:function(a){this.cg=a
this.E|=3},
sac:function(a,b){this.cj=!0
this.E|=2},
sad:function(a,b){this.ck=b
this.E|=2},
gJ:function(){this.a1()
return A.I.prototype.gJ.call(this)},
gK:function(){var u,t=this
t.a1()
u=t.L
t.a1()
return new U.E(0,0,u,t.D,[P.m])},
W:function(a,b){var u,t=this
if(!(a<0)){t.a1()
u=a>=t.L}else u=!0
if(u)return
if(!(b<0)){t.a1()
u=b>=t.D}else u=!0
if(u)return
return t},
ak:function(a){var u=this
u.a1()
u.dK(a.e.c)
a.c.a5(a,u.aF)
u.bj=u.bj+a.b},
a1:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3=this,b4=b3.E
if((b4&1)===0)return
else b3.E=b4&254
b4=b3.aE
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
l=V.hw(u.Q)
k=V.hw(u.ch)
j=u.gar()
i=Y.iI(u)
h=V.Z(i.a)
g=V.Z(i.b)
f=$.fI()
e=H.l([],[P.x])
d=P.h7("\\r\\n|\\r|\\n")
c=C.c.cG(b3.C,d)
f.font=j+" "
f.textAlign="start"
f.textBaseline="alphabetic"
f.setTransform(1,0,0,1,0,0)
for(b=0,a=0;a<c.length;++a){a0=c[a]
if(typeof a0!=="string")continue
C.a.j(e,b4.length)
a0=b3.dJ(a0)
C.a.j(b4,new Y.cq(a0,b))
b+=a0.length+1}b3.a3=b3.ag=0
for(a1=p+t,a2=m+t+g,a3=0;a3<b4.length;++a3){a4=b4[a3]
a5=r+(C.a.eb(e,a3)?n:0)
a6=a1+a3*a2
a7=f.measureText(a4.a).width
a7.toString
a4.c=a5
a4.d=a6
a4.e=a7
a4.r=h
a4.x=g
a8=b3.ag
if(typeof a7!=="number")return H.U(a7)
b3.ag=Math.max(a8,a5+a7+q)
b3.a3=a6+g+o}a1=s*2
a2=b3.ag+a1
b3.ag=a2
b3.a3+=a1
a9=C.b.af(a2)
b0=C.b.af(b3.a3)
a1=b3.L
if(a1!==a9||b3.D!==b0)switch(b3.cg){case"left":b3.L=a9
b3.D=b0
a1=a9
break
case"right":b3.bH(0,A.I.prototype.gF.call(b3,b3)-(a9-a1))
b3.L=a9
b3.D=b0
a1=a9
break
case"center":b3.bH(0,A.I.prototype.gF.call(b3,b3)-(a9-a1)/2)
b3.L=a9
b3.D=b0
a1=a9
break}b1=a1-r-q
switch(k){case"center":b2=(b3.D-b3.a3)/2
break
case"bottom":b2=b3.D-b3.a3-s
break
default:b2=s}for(a3=0;a3<b4.length;++a3){a4=b4[a3]
switch(l){case"center":case"justify":a4.c=a4.c+(b1-a4.e)/2
break
case"right":case"end":a4.c=a4.c+(b1-a4.e)
break
default:a4.c+=s}a4.d+=b2}},
dK:function(a){var u,t,s,r,q=this,p=Math.sqrt(Math.abs(a.gbd())),o=q.aF,n=o==null?null:o.e
if(n==null)n=0
if(n<p*0.8)q.E|=2
if(n>p*1.25)q.E|=2
o=q.E
if((o&2)===0)return
q.E=o&253
u=C.b.af(Math.max(1,q.L*p))
t=C.b.af(Math.max(1,q.D*p))
o=q.ah
if(o==null){o=L.h8(u,t,16777215)
q.ah=o
o=q.aF=o.gaN().aQ(p)}else{o.eK(0,u,t)
o=q.aF=q.ah.gaN().aQ(p)}s=o.geh()
o=q.ah
r=o.ge8(o).getContext("2d")
o=s.a
r.setTransform(o[0],o[1],o[2],o[3],o[4],o[5])
r.clearRect(0,0,q.L,q.D)
q.dO(r)
q.ah.eQ()},
dO:function(a){var u,t,s=this,r=s.bi,q=r.b,p=C.X.af(q/20)
a.save()
a.beginPath()
a.rect(0,0,s.L,s.D)
a.clip()
a.font=r.gar()+" "
a.textAlign="start"
a.textBaseline="alphabetic"
a.lineJoin=a.lineCap="round"
if(s.cj){a.fillStyle=V.fy(s.ck)
a.fillRect(0,0,s.L,s.D)}q=r.d
if(q>0){a.lineWidth=q*2
a.strokeStyle=V.fx(r.e)
for(q=s.aE,u=0;u<q.length;++u){t=q[u]
a.strokeText(t.a,t.c,t.d)}}a.lineWidth=p
q=r.c
a.strokeStyle=V.fx(q)
q=V.fx(q)
a.fillStyle=q
for(q=s.aE,u=0;u<q.length;++u){t=q[u]
a.fillText(t.a,t.c,t.d)}a.restore()},
dJ:function(a){return a},
du:function(a){H.k(a,"$iaO")},
dG:function(a){H.k(a,"$iaZ")},
dA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
H.k(a,"$iN")
u=a.x
t=a.y
s=$.fI()
s.setTransform(1,0,0,1,0,0)
for(r=e.aE,q=0;q<r.length;++q){p=r[q]
o=p.a
n=p.c
m=p.d
l=p.r
k=p.x
if(m-l<=t&&m+k>=t){for(m=o.length,j=1/0,i=0,h=0;h<=m;++h){g=s.measureText(C.c.ap(o,0,h)).width
g.toString
if(typeof g!=="number")return H.U(g)
f=Math.abs(n+g-u)
if(f<j){i=h
j=f}}e.ci=p.b+i
e.bj=0
e.E|=3}}}}
Y.dW.prototype={
gar:function(){var u=""+this.r+" "+this.b+"px "+this.a
return u}}
Y.cq.prototype={}
Q.dn.prototype={};(function aliases(){var u=J.w.prototype
u.cH=u.h
u=J.c7.prototype
u.cI=u.h
u=A.I.prototype
u.bH=u.sF
u=A.bi.prototype
u.bI=u.W
u=L.bt.prototype
u.bJ=u.aa})();(function installTearOffs(){var u=hunkHelpers._static_0,t=hunkHelpers._static_1,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u
u(H,"iK","im",8)
t(P,"iU","iA",3)
t(P,"iV","iB",3)
t(P,"iW","iC",3)
u(P,"hv","iR",1)
s(P,"iX",1,null,["$2","$1"],["hm",function(a){return P.hm(a,null)}],7,0)
u(P,"hu","iM",1)
r(P.C.prototype,"gcY",0,1,null,["$2","$1"],["a0","cZ"],7,0)
q(P.cx.prototype,"gdR","dS",1)
var o
p(o=A.G.prototype,"gdB","dC",22)
p(o,"gdD","dE",23)
p(o,"gdH","dI",24)
p(o,"gdv","dw",38)
p(A.cn.prototype,"gcT","cU",29)
p(o=L.ch.prototype,"gdf","dg",12)
p(o,"gdh","di",12)
p(L.ck.prototype,"gdl","dm",32)
p(o=N.c0.prototype,"gdr","ds",4)
p(o,"gdn","dq",4)
p(o=Y.co.prototype,"gdt","du",35)
p(o,"gdF","dG",36)
p(o,"gdz","dA",37)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.fk,J.w,J.cJ,H.dh,H.aM,H.bg,H.dY,P.ak,H.bk,H.cA,H.by,P.dl,H.dg,H.c5,H.cz,P.J,H.e4,H.dU,H.eN,P.eO,P.e7,P.dR,P.eg,P.ef,P.eh,P.a3,P.C,P.ct,P.aa,P.ek,P.bG,P.cx,P.eL,P.H,P.eQ,P.a9,P.as,P.m,P.aI,P.ds,P.cm,P.eo,P.d8,P.K,P.p,P.aP,P.cf,P.B,P.dQ,P.r,P.bx,W.d0,W.bl,W.d6,P.eC,P.a1,Y.cU,R.c_,K.e5,K.df,A.a_,A.cL,A.cN,L.dA,L.ck,A.bv,A.aX,A.Y,A.dK,A.b3,A.b4,A.aD,L.cP,L.aT,L.aU,L.ci,L.ay,L.dy,L.cj,L.eE,L.bt,L.bB,L.aW,L.ao,L.bu,L.cl,L.az,L.dH,R.L,R.bj,R.bm,T.c8,T.aQ,U.A,U.E,N.c0,Y.b1,Y.dW,Y.cq,Q.dn])
s(J.w,[J.dd,J.c4,J.c7,J.aw,J.bn,J.aN,H.cc,W.aK,W.bW,W.cv,W.d2,W.bY,W.c,W.ab,W.cB,P.bU,P.cd,P.aA,P.cr,P.bz])
s(J.c7,[J.dt,J.b_,J.ax])
t(J.fj,J.aw)
s(J.bn,[J.c3,J.c2])
s(H.bg,[H.du,H.fb,H.dV,H.f2,H.f3,H.f4,P.eb,P.ea,P.ec,P.ed,P.eP,P.eR,P.eS,P.eX,P.d9,P.ep,P.ex,P.et,P.eu,P.ev,P.er,P.ew,P.eq,P.eA,P.eB,P.ez,P.ey,P.dS,P.dT,P.eF,P.eW,P.eI,P.eH,P.eJ,P.dk,P.d3,P.d4,W.en,P.f_,Y.cV,Y.cW,Y.cX,Y.cY,Y.cZ,Y.d_,A.cO,A.cM,A.dC,A.dD,A.dO,A.dL,A.dM,A.dN,L.eU,Y.eT])
s(P.ak,[H.dr,H.de,H.e0,H.cs,H.cS,H.dI,P.cK,P.bq,P.a5,P.e1,P.e_,P.bw,P.cT,P.d1,T.di])
s(H.dV,[H.dP,H.be])
t(H.e6,P.cK)
t(P.dj,P.dl)
t(H.M,P.dj)
s(P.J,[P.dc,H.eM])
t(H.e3,P.dc)
t(H.c9,H.cc)
s(H.c9,[H.bC,H.bE])
t(H.bD,H.bC)
t(H.ca,H.bD)
t(H.bF,H.bE)
t(H.cb,H.bF)
t(H.dp,H.ca)
t(H.dq,H.cb)
s(P.dR,[P.eK,W.el,R.av])
t(P.cu,P.eK)
t(P.ee,P.cu)
t(P.ei,P.eg)
t(P.O,P.ei)
t(P.e8,P.ef)
t(P.e9,P.eh)
t(P.ej,P.ek)
t(P.bH,P.bG)
t(P.eG,P.eQ)
s(P.m,[P.af,P.x])
s(P.a5,[P.bs,P.da])
s(W.aK,[W.S,W.bA])
s(W.S,[W.aj,W.au])
s(W.aj,[W.i,P.f])
s(W.i,[W.cH,W.cI,W.bT,W.ah,W.d7,W.a0,W.am,W.bp,W.dJ])
t(W.bh,W.cv)
s(W.c,[W.aC,P.a8])
s(W.aC,[W.an,W.y,W.ap])
t(W.cC,W.cB)
t(W.dX,W.cC)
t(W.e2,W.bp)
t(W.ad,W.y)
t(W.cw,W.bY)
t(W.cy,W.el)
s(P.aa,[W.em,R.D])
t(A.I,R.c_)
s(A.I,[A.c1,A.X,A.cn])
s(A.c1,[A.bi,Y.co])
s(A.bi,[Z.d5,A.G])
t(A.a6,L.dA)
t(A.dB,L.ck)
s(L.dy,[L.cg,L.ch])
s(L.bt,[L.dE,L.dF,L.dG])
s(R.L,[R.cR,R.db,R.aO,R.aZ])
s(R.cR,[R.aJ,R.aL,R.aV])
s(R.db,[R.N,R.aq])
u(H.bC,P.a9)
u(H.bD,H.aM)
u(H.bE,P.a9)
u(H.bF,H.aM)
u(W.cv,W.d0)
u(W.cB,P.a9)
u(W.cC,W.bl)})()
var v={mangledGlobalNames:{x:"int",af:"double",m:"num",r:"String",as:"bool",p:"Null",K:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.p},{func:1,ret:-1},{func:1,ret:P.p,args:[W.y]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.c]},{func:1,args:[,]},{func:1,ret:P.p,args:[,]},{func:1,ret:-1,args:[P.n],opt:[P.B]},{func:1,ret:P.x},{func:1,ret:P.p,args:[,,]},{func:1,ret:P.r,args:[P.x]},{func:1,ret:-1,args:[A.aD]},{func:1,ret:-1,args:[P.a8]},{func:1,ret:[P.C,,],args:[,]},{func:1,args:[,P.r]},{func:1,ret:-1,args:[,]},{func:1,args:[W.c]},{func:1,ret:P.p,args:[,P.B]},{func:1,ret:A.a_,args:[W.a0]},{func:1,ret:P.m,args:[P.m,P.m]},{func:1,ret:P.as,args:[A.G]},{func:1,ret:-1,args:[A.G]},{func:1,ret:-1,args:[W.y]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.ap]},{func:1,ret:P.p,args:[P.x,,]},{func:1,ret:-1,args:[P.r]},{func:1,ret:P.p,args:[{func:1,ret:-1}]},{func:1,ret:A.b4},{func:1,ret:-1,args:[A.a_]},{func:1,ret:P.p,args:[,],opt:[P.B]},{func:1,ret:P.p,args:[P.m]},{func:1,ret:-1,args:[P.m]},{func:1,args:[P.r]},{func:1,ret:Y.b1},{func:1,ret:-1,args:[R.aO]},{func:1,ret:-1,args:[R.aZ]},{func:1,ret:-1,args:[R.N]},{func:1,ret:-1,args:[W.an]}],interceptorsByTag:null,leafTags:null};(function constants(){C.K=W.bT.prototype
C.j=W.ah.prototype
C.W=J.w.prototype
C.a=J.aw.prototype
C.X=J.c2.prototype
C.d=J.c3.prototype
C.v=J.c4.prototype
C.b=J.bn.prototype
C.c=J.aN.prototype
C.Y=J.ax.prototype
C.w=J.dt.prototype
C.h=P.aA.prototype
C.o=J.b_.prototype
C.I=W.ad.prototype
C.J=W.bA.prototype
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

C.R=new P.ds()
C.a3=new L.dH()
C.r=new P.eC()
C.e=new P.eG()
C.S=new P.aI(0)
C.t=new R.bj("EventPhase.CAPTURING_PHASE")
C.T=new R.bj("EventPhase.AT_TARGET")
C.U=new R.bj("EventPhase.BUBBLING_PHASE")
C.k=new R.bm("InputEventMode.MouseOnly")
C.V=new R.bm("InputEventMode.TouchOnly")
C.u=new R.bm("InputEventMode.MouseAndTouch")
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
C.m=new A.bv("StageRenderMode.AUTO")
C.H=new A.bv("StageRenderMode.ONCE")
C.a_=new A.bv("StageRenderMode.STOP")
C.a0=new A.aX("StageScaleMode.EXACT_FIT")
C.a1=new A.aX("StageScaleMode.NO_BORDER")
C.a2=new A.aX("StageScaleMode.NO_SCALE")
C.n=new A.aX("StageScaleMode.SHOW_ALL")})();(function staticFields(){$.dv=null
$.dw=null
$.a7=0
$.bf=null
$.fQ=null
$.fs=!1
$.hB=null
$.hs=null
$.hE=null
$.f0=null
$.f7=null
$.fA=null
$.b5=null
$.bL=null
$.bM=null
$.ft=!1
$.o=C.e
$.Q=[]
$.fn=null
$.v=0
$.hg=1
$.dz=0
$.hk=17976931348623157e292
$.fr=-1})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"jm","hI",function(){return H.hz("_$dart_dartClosure")})
u($,"jp","fF",function(){return H.hz("_$dart_js")})
u($,"jx","hL",function(){return H.ac(H.dZ({
toString:function(){return"$receiver$"}}))})
u($,"jy","hM",function(){return H.ac(H.dZ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"jz","hN",function(){return H.ac(H.dZ(null))})
u($,"jA","hO",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jD","hR",function(){return H.ac(H.dZ(void 0))})
u($,"jE","hS",function(){return H.ac(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"jC","hQ",function(){return H.ac(H.hb(null))})
u($,"jB","hP",function(){return H.ac(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"jG","hU",function(){return H.ac(H.hb(void 0))})
u($,"jF","hT",function(){return H.ac(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"jJ","fH",function(){return P.iz()})
u($,"jl","hH",function(){return new A.cN(H.l([1,2],[P.af]))})
u($,"jQ","fL",function(){return[]})
u($,"jN","fJ",function(){return H.l([],[[R.D,R.aJ]])})
u($,"jO","fK",function(){return H.l([],[[R.D,R.aL]])})
u($,"jR","fM",function(){return H.l([],[[R.D,R.aV]])})
u($,"jV","fN",function(){var t=W.jj().devicePixelRatio
return typeof t!=="number"?1:t})
u($,"jZ","hX",function(){return Q.iG()})
u($,"jL","hV",function(){return W.bV(16,16)})
u($,"jM","fI",function(){var t=$.hV()
return(t&&C.j).gec(t)})
u($,"jP","hW",function(){return H.h0(P.r,Y.b1)})
u($,"jr","fG",function(){return H.h0(P.r,Q.dn)})
u($,"jq","hJ",function(){return P.aB(P.r)})
u($,"js","hK",function(){var t=$.hJ()
t.toString
return new P.ee(t,[H.d(t,0)])})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.w,CanvasGradient:J.w,CanvasPattern:J.w,DOMError:J.w,MediaError:J.w,Navigator:J.w,NavigatorConcurrentHardware:J.w,NavigatorUserMediaError:J.w,OverconstrainedError:J.w,PositionError:J.w,TextMetrics:J.w,WebGLActiveInfo:J.w,WebGLFramebuffer:J.w,WebGLRenderbuffer:J.w,WebGL2RenderingContext:J.w,WebGLShader:J.w,SQLError:J.w,ArrayBufferView:H.cc,Float32Array:H.dp,Int16Array:H.dq,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLDivElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTableElement:W.i,HTMLTableRowElement:W.i,HTMLTableSectionElement:W.i,HTMLTemplateElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,HTMLAnchorElement:W.cH,HTMLAreaElement:W.cI,HTMLBodyElement:W.bT,HTMLCanvasElement:W.ah,CanvasRenderingContext2D:W.bW,CDATASection:W.au,CharacterData:W.au,Comment:W.au,ProcessingInstruction:W.au,Text:W.au,CSSStyleDeclaration:W.bh,MSStyleCSSProperties:W.bh,CSS2Properties:W.bh,DOMException:W.d2,DOMRectReadOnly:W.bY,Element:W.aj,AbortPaymentEvent:W.c,AnimationEvent:W.c,AnimationPlaybackEvent:W.c,ApplicationCacheErrorEvent:W.c,BackgroundFetchClickEvent:W.c,BackgroundFetchEvent:W.c,BackgroundFetchFailEvent:W.c,BackgroundFetchedEvent:W.c,BeforeInstallPromptEvent:W.c,BeforeUnloadEvent:W.c,BlobEvent:W.c,CanMakePaymentEvent:W.c,ClipboardEvent:W.c,CloseEvent:W.c,CustomEvent:W.c,DeviceMotionEvent:W.c,DeviceOrientationEvent:W.c,ErrorEvent:W.c,ExtendableEvent:W.c,ExtendableMessageEvent:W.c,FetchEvent:W.c,FontFaceSetLoadEvent:W.c,ForeignFetchEvent:W.c,GamepadEvent:W.c,HashChangeEvent:W.c,InstallEvent:W.c,MediaEncryptedEvent:W.c,MediaKeyMessageEvent:W.c,MediaQueryListEvent:W.c,MediaStreamEvent:W.c,MediaStreamTrackEvent:W.c,MessageEvent:W.c,MIDIConnectionEvent:W.c,MIDIMessageEvent:W.c,MutationEvent:W.c,NotificationEvent:W.c,PageTransitionEvent:W.c,PaymentRequestEvent:W.c,PaymentRequestUpdateEvent:W.c,PopStateEvent:W.c,PresentationConnectionAvailableEvent:W.c,PresentationConnectionCloseEvent:W.c,ProgressEvent:W.c,PromiseRejectionEvent:W.c,PushEvent:W.c,RTCDataChannelEvent:W.c,RTCDTMFToneChangeEvent:W.c,RTCPeerConnectionIceEvent:W.c,RTCTrackEvent:W.c,SecurityPolicyViolationEvent:W.c,SensorErrorEvent:W.c,SpeechRecognitionError:W.c,SpeechRecognitionEvent:W.c,SpeechSynthesisEvent:W.c,StorageEvent:W.c,SyncEvent:W.c,TrackEvent:W.c,TransitionEvent:W.c,WebKitTransitionEvent:W.c,VRDeviceEvent:W.c,VRDisplayEvent:W.c,VRSessionEvent:W.c,MojoInterfaceRequestEvent:W.c,ResourceProgressEvent:W.c,USBConnectionEvent:W.c,IDBVersionChangeEvent:W.c,AudioProcessingEvent:W.c,OfflineAudioCompletionEvent:W.c,Event:W.c,InputEvent:W.c,EventTarget:W.aK,HTMLFormElement:W.d7,HTMLImageElement:W.a0,HTMLInputElement:W.am,KeyboardEvent:W.an,HTMLAudioElement:W.bp,HTMLMediaElement:W.bp,PointerEvent:W.y,MouseEvent:W.y,DragEvent:W.y,Document:W.S,DocumentFragment:W.S,HTMLDocument:W.S,ShadowRoot:W.S,XMLDocument:W.S,Attr:W.S,DocumentType:W.S,Node:W.S,HTMLSelectElement:W.dJ,Touch:W.ab,TouchEvent:W.ap,TouchList:W.dX,CompositionEvent:W.aC,FocusEvent:W.aC,TextEvent:W.aC,UIEvent:W.aC,HTMLVideoElement:W.e2,WheelEvent:W.ad,Window:W.bA,DOMWindow:W.bA,ClientRect:W.cw,DOMRect:W.cw,SVGAElement:P.f,SVGAnimateElement:P.f,SVGAnimateMotionElement:P.f,SVGAnimateTransformElement:P.f,SVGAnimationElement:P.f,SVGCircleElement:P.f,SVGClipPathElement:P.f,SVGDefsElement:P.f,SVGDescElement:P.f,SVGDiscardElement:P.f,SVGEllipseElement:P.f,SVGFEBlendElement:P.f,SVGFEColorMatrixElement:P.f,SVGFEComponentTransferElement:P.f,SVGFECompositeElement:P.f,SVGFEConvolveMatrixElement:P.f,SVGFEDiffuseLightingElement:P.f,SVGFEDisplacementMapElement:P.f,SVGFEDistantLightElement:P.f,SVGFEFloodElement:P.f,SVGFEFuncAElement:P.f,SVGFEFuncBElement:P.f,SVGFEFuncGElement:P.f,SVGFEFuncRElement:P.f,SVGFEGaussianBlurElement:P.f,SVGFEImageElement:P.f,SVGFEMergeElement:P.f,SVGFEMergeNodeElement:P.f,SVGFEMorphologyElement:P.f,SVGFEOffsetElement:P.f,SVGFEPointLightElement:P.f,SVGFESpecularLightingElement:P.f,SVGFESpotLightElement:P.f,SVGFETileElement:P.f,SVGFETurbulenceElement:P.f,SVGFilterElement:P.f,SVGForeignObjectElement:P.f,SVGGElement:P.f,SVGGeometryElement:P.f,SVGGraphicsElement:P.f,SVGImageElement:P.f,SVGLineElement:P.f,SVGLinearGradientElement:P.f,SVGMarkerElement:P.f,SVGMaskElement:P.f,SVGMetadataElement:P.f,SVGPathElement:P.f,SVGPatternElement:P.f,SVGPolygonElement:P.f,SVGPolylineElement:P.f,SVGRadialGradientElement:P.f,SVGRectElement:P.f,SVGScriptElement:P.f,SVGSetElement:P.f,SVGStopElement:P.f,SVGStyleElement:P.f,SVGElement:P.f,SVGSVGElement:P.f,SVGSwitchElement:P.f,SVGSymbolElement:P.f,SVGTSpanElement:P.f,SVGTextContentElement:P.f,SVGTextElement:P.f,SVGTextPathElement:P.f,SVGTextPositioningElement:P.f,SVGTitleElement:P.f,SVGUseElement:P.f,SVGViewElement:P.f,SVGGradientElement:P.f,SVGComponentTransferFunctionElement:P.f,SVGFEDropShadowElement:P.f,SVGMPathElement:P.f,WebGLBuffer:P.bU,WebGLContextEvent:P.a8,WebGLProgram:P.cd,WebGLRenderingContext:P.aA,WebGLTexture:P.cr,WebGLUniformLocation:P.bz})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,CanvasGradient:true,CanvasPattern:true,DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,TextMetrics:true,WebGLActiveInfo:true,WebGLFramebuffer:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,SQLError:true,ArrayBufferView:false,Float32Array:true,Int16Array:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,Event:false,InputEvent:false,EventTarget:false,HTMLFormElement:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLAudioElement:true,HTMLMediaElement:false,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,HTMLSelectElement:true,Touch:true,TouchEvent:true,TouchList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,HTMLVideoElement:true,WheelEvent:true,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,WebGLBuffer:true,WebGLContextEvent:true,WebGLProgram:true,WebGLRenderingContext:true,WebGLTexture:true,WebGLUniformLocation:true})
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.cb.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.f8,[])
else F.f8([])})})()
//# sourceMappingURL=main.dart.js.map
