import './polyfills.server.mjs';
var y=Object.create;var n=Object.defineProperty,z=Object.defineProperties,A=Object.getOwnPropertyDescriptor,B=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,u=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,D=Reflect.get;var l=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a),p=a=>{throw TypeError(a)};var t=(a,b,c)=>b in a?n(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,H=(a,b)=>{for(var c in b||={})o.call(b,c)&&t(a,c,b[c]);if(m)for(var c of m(b))v.call(b,c)&&t(a,c,b[c]);return a},I=(a,b)=>z(a,B(b));var J=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var K=(a,b)=>{var c={};for(var d in a)o.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&m)for(var d of m(a))b.indexOf(d)<0&&v.call(a,d)&&(c[d]=a[d]);return c};var L=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),M=(a,b)=>{for(var c in b)n(a,c,{get:b[c],enumerable:!0})},E=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of C(b))!o.call(a,e)&&e!==c&&n(a,e,{get:()=>b[e],enumerable:!(d=A(b,e))||d.enumerable});return a};var N=(a,b,c)=>(c=a!=null?y(u(a)):{},E(b||!a||!a.__esModule?n(c,"default",{value:a,enumerable:!0}):c,a));var q=(a,b,c)=>b.has(a)||p("Cannot "+c);var F=(a,b,c)=>(q(a,b,"read from private field"),c?c.call(a):b.get(a)),O=(a,b,c)=>b.has(a)?p("Cannot add the same private member more than once"):b instanceof WeakSet?b.add(a):b.set(a,c),G=(a,b,c,d)=>(q(a,b,"write to private field"),d?d.call(a,c):b.set(a,c),c),P=(a,b,c)=>(q(a,b,"access private method"),c);var Q=(a,b,c,d)=>({set _(e){G(a,b,e,c)},get _(){return F(a,b,d)}}),R=(a,b,c)=>D(u(a),c,b);var S=(a,b,c)=>new Promise((d,e)=>{var g=f=>{try{i(c.next(f))}catch(j){e(j)}},h=f=>{try{i(c.throw(f))}catch(j){e(j)}},i=f=>f.done?d(f.value):Promise.resolve(f.value).then(g,h);i((c=c.apply(a,b)).next())}),w=function(a,b){this[0]=a,this[1]=b},T=(a,b,c)=>{var d=(h,i,f,j)=>{try{var r=c[h](i),s=(i=r.value)instanceof w,x=r.done;Promise.resolve(s?i[0]:i).then(k=>s?d(h==="return"?h:"next",i[1]?{done:k.done,value:k.value}:k,f,j):f({value:k,done:x})).catch(k=>d("throw",k,f,j))}catch(k){j(k)}},e=h=>g[h]=i=>new Promise((f,j)=>d(h,i,f,j)),g={};return c=c.apply(a,b),g[l("asyncIterator")]=()=>g,e("next"),e("throw"),e("return"),g},U=a=>{var b=a[l("asyncIterator")],c=!1,d,e={};return b==null?(b=a[l("iterator")](),d=g=>e[g]=h=>b[g](h)):(b=b.call(a),d=g=>e[g]=h=>{if(c){if(c=!1,g==="throw")throw h;return h}return c=!0,{done:!1,value:new w(new Promise(i=>{var f=b[g](h);f instanceof Object||p("Object expected"),i(f)}),1)}}),e[l("iterator")]=()=>e,d("next"),"throw"in b?d("throw"):e.throw=g=>{throw g},"return"in b&&d("return"),e};export{H as a,I as b,J as c,K as d,L as e,M as f,N as g,F as h,O as i,G as j,P as k,Q as l,R as m,S as n,w as o,T as p,U as q};
