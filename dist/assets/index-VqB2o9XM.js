const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/column-modal-D5dkiWKW.js","assets/column-modal-CxKcKS6F.css"])))=>i.map(i=>d[i]);
(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function o(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(s){if(s.ep)return;s.ep=!0;const u=o(s);fetch(s.href,u)}})();var od={exports:{}},io={};var Xg;function Pw(){if(Xg)return io;Xg=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(l,s,u){var h=null;if(u!==void 0&&(h=""+u),s.key!==void 0&&(h=""+s.key),"key"in s){u={};for(var p in s)p!=="key"&&(u[p]=s[p])}else u=s;return s=u.ref,{$$typeof:a,type:l,key:h,ref:s!==void 0?s:null,props:u}}return io.Fragment=i,io.jsx=o,io.jsxs=o,io}var qg;function e1(){return qg||(qg=1,od.exports=Pw()),od.exports}var fe=e1();const t1="0.3.34",ff=`bippy-${t1}`,Vg=Object.defineProperty,n1=Object.prototype.hasOwnProperty,po=()=>{},s0=a=>{try{Function.prototype.toString.call(a).indexOf("^_^")>-1&&setTimeout(()=>{throw new Error("React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build")})}catch{}},c0=(a=sr())=>"getFiberRoots"in a;let u0=!1,Fg;const Bd=(a=sr())=>u0?!0:(typeof a.inject=="function"&&(Fg=a.inject.toString()),!!Fg?.includes("(injected)")),ls=new Set,Yd=new Set,a1=a=>{const i=new Map;let o=0,l={_instrumentationIsActive:!1,_instrumentationSource:ff,checkDCE:s0,hasUnsupportedRendererAttached:!1,inject(s){const u=++o;return i.set(u,s),Yd.add(s),l._instrumentationIsActive||(l._instrumentationIsActive=!0,ls.forEach(h=>h())),u},on:po,onCommitFiberRoot:po,onCommitFiberUnmount:po,onPostCommitFiberRoot:po,renderers:i,supportsFiber:!0,supportsFlight:!0};try{Vg(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__",{configurable:!0,enumerable:!0,get(){return l},set(h){if(h&&typeof h=="object"){const p=l.renderers;l=h,p.size>0&&(p.forEach((m,g)=>{Yd.add(m),h.renderers.set(g,m)}),Xd(a))}}});const s=window.hasOwnProperty;let u=!1;Vg(window,"hasOwnProperty",{configurable:!0,value:function(...h){try{if(!u&&h[0]==="__REACT_DEVTOOLS_GLOBAL_HOOK__")return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,u=!0,-0}catch{}return s.apply(this,h)},writable:!0})}catch{Xd(a)}return l},Xd=a=>{a&&ls.add(a);try{const i=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!i)return;if(!i._instrumentationSource){const o=c0();if(i.checkDCE=s0,i.supportsFiber=!0,i.supportsFlight=!0,i.hasUnsupportedRendererAttached=!1,i._instrumentationSource=ff,i._instrumentationIsActive=!1,o||(i.on=po),i.renderers.size){i._instrumentationIsActive=!0,ls.forEach(s=>s());return}const l=i.inject;Bd(i)&&!o&&(u0=!0,i.inject({scheduleRefresh(){}})&&(i._instrumentationIsActive=!0)),i.inject=s=>{const u=l(s);return Yd.add(s),i._instrumentationIsActive=!0,ls.forEach(h=>h()),u}}(i.renderers.size||i._instrumentationIsActive||Bd())&&a?.()}catch{}},i1=()=>n1.call(globalThis,"__REACT_DEVTOOLS_GLOBAL_HOOK__"),sr=a=>i1()?(Xd(a),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):a1(a),r1=()=>!!(typeof window<"u"&&(window.document?.createElement||window.navigator?.product==="ReactNative")),o1=()=>{try{r1()&&sr()}catch{}},Rs=0,oi=1,d0=3,l1=5,s1=6,c1=7,u1=9,Us=11,js=13,No=14,Ao=15,d1=18,f1=22,h1=23,p1=26,m1=27,g1=60111,v1="Symbol(react.concurrent_mode)",y1="Symbol(react.async_mode)",$g=1,b1=2,w1=4096,x1=4,Gg=8,_1=16,S1=32,T1=1024,C1=8192,Ig=b1|x1|_1|S1|w1|C1|T1,xo=a=>{switch(a.tag){case l1:case p1:case m1:return!0;default:return typeof a.type=="string"}},Hs=a=>{switch(a.tag){case oi:case Us:case Rs:case No:case Ao:return!0;default:return!1}},E1=(a,i)=>{try{const o=a.dependencies,l=a.alternate?.dependencies;if(!o||!l||typeof o!="object"||!("firstContext"in o)||typeof l!="object"||!("firstContext"in l))return!1;let s=o.firstContext,u=l.firstContext;for(;s&&typeof s=="object"&&"memoizedValue"in s||u&&typeof u=="object"&&"memoizedValue"in u;){if(i(s,u)===!0)return!0;s=s?.next,u=u?.next}}catch{}return!1},hf=a=>{const i=a.memoizedProps,o=a.alternate?.memoizedProps||{},l=a.flags??a.effectTag??0;switch(a.tag){case oi:case u1:case Us:case Rs:case No:case Ao:return(l&$g)===$g;default:return a.alternate?o!==i||a.alternate.memoizedState!==a.memoizedState||a.alternate.ref!==a.ref:!0}},pf=a=>(a.flags&(Ig|Gg))!==0||(a.subtreeFlags&(Ig|Gg))!==0,z1=a=>{const i=[],o=[a];for(;o.length;){const l=o.pop();l&&(xo(l)&&pf(l)&&hf(l)&&i.push(l),l.child&&o.push(l.child),l.sibling&&o.push(l.sibling))}return i},mf=a=>{switch(a.tag){case d1:return!0;case c1:case s1:case h1:case f1:return!0;case d0:return!1;default:{const i=typeof a.type=="object"&&a.type!==null?a.type.$$typeof:a.type;switch(typeof i=="symbol"?i.toString():i){case g1:case v1:case y1:return!0;default:return!1}}}},k1=a=>{const i=[],o=[];for(xo(a)?i.push(a):a.child&&o.push(a.child);o.length;){const l=o.pop();if(!l)break;xo(l)?i.push(l):l.child&&o.push(l.child),l.sibling&&o.push(l.sibling)}return i};function f0(a,i,o=!1){return a&&i(a)instanceof Promise?p0(a,i,o):h0(a,i,o)}const h0=(a,i,o=!1)=>{if(!a)return null;if(i(a)===!0)return a;let l=o?a.return:a.child;for(;l;){const s=h0(l,i,o);if(s)return s;l=o?null:l.sibling}return null},p0=async(a,i,o=!1)=>{if(!a)return null;if(await i(a)===!0)return a;let l=o?a.return:a.child;for(;l;){const s=await p0(l,i,o);if(s)return s;l=o?null:l.sibling}return null},Pa=a=>{const i=a?.actualDuration??0;let o=i,l=a?.child??null;for(;i>0&&l!=null;)o-=l.actualDuration??0,l=l.sibling;return{selfTime:o,totalTime:i}},_o=a=>!!a.updateQueue?.memoCache,li=a=>{const i=a;return typeof i=="function"?i:typeof i=="object"&&i?li(i.type||i.render):null},bt=a=>{const i=a;if(typeof i=="string")return i;if(typeof i!="function"&&!(typeof i=="object"&&i))return null;const o=i.displayName||i.name||null;if(o)return o;const l=li(i);return l&&(l.displayName||l.name)||null},N1=a=>{try{if(typeof a.version=="string"&&a.bundleType>0)return"development"}catch{}return"production"},A1=()=>!!sr()._instrumentationIsActive||c0()||Bd();let m0=0;const rr=new WeakMap,M1=(a,i=m0++)=>{rr.set(a,i)},Na=a=>{let i=rr.get(a);return!i&&a.alternate&&(i=rr.get(a.alternate)),i||(i=m0++,M1(a,i)),i},ka=(a,i,o)=>{let l=i;for(;l!=null;){if(rr.has(l)||Na(l),!mf(l)&&hf(l)&&a(l,"mount"),l.tag===js)if(l.memoizedState!==null){const h=l.child,p=h?h.sibling:null;if(p){const m=p.child;m!==null&&ka(a,m,!1)}}else{let h=null;l.child!==null&&(h=l.child.child),h!==null&&ka(a,h,!1)}else l.child!=null&&ka(a,l.child,!0);l=o?l.sibling:null}},qd=(a,i,o,l)=>{if(rr.has(i)||Na(i),!o)return;rr.has(o)||Na(o);const s=i.tag===js;!mf(i)&&hf(i)&&a(i,"update");const h=s&&o.memoizedState!==null,p=s&&i.memoizedState!==null;if(h&&p){const m=i.child?.sibling??null,g=o.child?.sibling??null;m!==null&&g!==null&&qd(a,m,g)}else if(h&&!p){const m=i.child;m!==null&&ka(a,m,!0)}else if(!h&&p){g0(a,o);const m=i.child?.sibling??null;m!==null&&ka(a,m,!0)}else if(i.child!==o.child){let m=i.child;for(;m;){if(m.alternate){const g=m.alternate;qd(a,m,g)}else ka(a,m,!1);m=m.sibling}}},Vd=(a,i)=>{(i.tag===d0||!mf(i))&&a(i,"unmount")},g0=(a,i)=>{const o=i.tag===js&&i.memoizedState!==null;let l=i.child;for(o&&(l=(i.child?.sibling??null)?.child??null);l!==null;)l.return!==null&&(Vd(a,l),g0(a,l)),l=l.sibling};let O1=0;const Qg=new WeakMap,D1=(a,i)=>{const o="current"in a?a.current:a;let l=Qg.get(a);l||(l={id:O1++,prevFiber:null},Qg.set(a,l));const{prevFiber:s}=l;if(!o)Vd(i,o);else if(s!==null){const u=s&&s.memoizedState!=null&&s.memoizedState.element!=null&&s.memoizedState.isDehydrated!==!0,h=o.memoizedState!=null&&o.memoizedState.element!=null&&o.memoizedState.isDehydrated!==!0;!u&&h?ka(i,o,!1):u&&h?qd(i,o,o.alternate):u&&!h&&Vd(i,o)}else ka(i,o,!0);l.prevFiber=o},R1=a=>{const i=sr(a.onActive);i._instrumentationSource=a.name??ff;const o=i.onCommitFiberRoot;if(a.onCommitFiberRoot){const u=(h,p,m)=>{i.onCommitFiberRoot===u&&(o?.(h,p,m),a.onCommitFiberRoot?.(h,p,m))};i.onCommitFiberRoot=u}const l=i.onCommitFiberUnmount;if(a.onCommitFiberUnmount){const u=(h,p)=>{i.onCommitFiberUnmount===u&&(l?.(h,p),a.onCommitFiberUnmount?.(h,p))};i.onCommitFiberUnmount=u}const s=i.onPostCommitFiberRoot;if(a.onPostCommitFiberRoot){const u=(h,p)=>{i.onPostCommitFiberRoot===u&&(s?.(h,p),a.onPostCommitFiberRoot?.(h,p))};i.onPostCommitFiberRoot=u}return i};o1();var Ls,ge,v0,y0,Ea,Zg,b0,w0,ld,ss,go,x0,gf,Fd,$d,_0,ms={},gs=[],U1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Mo=Array.isArray;function Zn(a,i){for(var o in i)a[o]=i[o];return a}function vf(a){a&&a.parentNode&&a.parentNode.removeChild(a)}function ii(a,i,o){var l,s,u,h={};for(u in i)u=="key"?l=i[u]:u=="ref"?s=i[u]:h[u]=i[u];if(arguments.length>2&&(h.children=arguments.length>3?Ls.call(arguments,2):o),typeof a=="function"&&a.defaultProps!=null)for(u in a.defaultProps)h[u]===void 0&&(h[u]=a.defaultProps[u]);return cs(a,h,l,s,null)}function cs(a,i,o,l,s){var u={type:a,props:i,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++v0,__i:-1,__u:0};return s==null&&ge.vnode!=null&&ge.vnode(u),u}function Ne(a){return a.children}function cn(a,i){this.props=a,this.context=i}function or(a,i){if(i==null)return a.__?or(a.__,a.__i+1):null;for(var o;i<a.__k.length;i++)if((o=a.__k[i])!=null&&o.__e!=null)return o.__e;return typeof a.type=="function"?or(a):null}function j1(a){if(a.__P&&a.__d){var i=a.__v,o=i.__e,l=[],s=[],u=Zn({},i);u.__v=i.__v+1,ge.vnode&&ge.vnode(u),yf(a.__P,u,i,a.__n,a.__P.namespaceURI,32&i.__u?[o]:null,l,o??or(i),!!(32&i.__u),s),u.__v=i.__v,u.__.__k[u.__i]=u,E0(l,u,s),i.__e=i.__=null,u.__e!=o&&S0(u)}}function S0(a){if((a=a.__)!=null&&a.__c!=null)return a.__e=a.__c.base=null,a.__k.some(function(i){if(i!=null&&i.__e!=null)return a.__e=a.__c.base=i.__e}),S0(a)}function Gd(a){(!a.__d&&(a.__d=!0)&&Ea.push(a)&&!vs.__r++||Zg!=ge.debounceRendering)&&((Zg=ge.debounceRendering)||b0)(vs)}function vs(){try{for(var a,i=1;Ea.length;)Ea.length>i&&Ea.sort(w0),a=Ea.shift(),i=Ea.length,j1(a)}finally{Ea.length=vs.__r=0}}function T0(a,i,o,l,s,u,h,p,m,g,b){var y,x,S,T,N,D,C,A=l&&l.__k||gs,Y=i.length;for(m=H1(o,i,A,m,Y),y=0;y<Y;y++)(S=o.__k[y])!=null&&(x=S.__i!=-1&&A[S.__i]||ms,S.__i=y,D=yf(a,S,x,s,u,h,p,m,g,b),T=S.__e,S.ref&&x.ref!=S.ref&&(x.ref&&bf(x.ref,null,S),b.push(S.ref,S.__c||T,S)),N==null&&T!=null&&(N=T),(C=!!(4&S.__u))||x.__k===S.__k?(m=C0(S,m,a,C),C&&x.__e&&(x.__e=null)):typeof S.type=="function"&&D!==void 0?m=D:T&&(m=T.nextSibling),S.__u&=-7);return o.__e=N,m}function H1(a,i,o,l,s){var u,h,p,m,g,b=o.length,y=b,x=0;for(a.__k=new Array(s),u=0;u<s;u++)(h=i[u])!=null&&typeof h!="boolean"&&typeof h!="function"?(typeof h=="string"||typeof h=="number"||typeof h=="bigint"||h.constructor==String?h=a.__k[u]=cs(null,h,null,null,null):Mo(h)?h=a.__k[u]=cs(Ne,{children:h},null,null,null):h.constructor===void 0&&h.__b>0?h=a.__k[u]=cs(h.type,h.props,h.key,h.ref?h.ref:null,h.__v):a.__k[u]=h,m=u+x,h.__=a,h.__b=a.__b+1,p=null,(g=h.__i=L1(h,o,m,y))!=-1&&(y--,(p=o[g])&&(p.__u|=2)),p==null||p.__v==null?(g==-1&&(s>b?x--:s<b&&x++),typeof h.type!="function"&&(h.__u|=4)):g!=m&&(g==m-1?x--:g==m+1?x++:(g>m?x--:x++,h.__u|=4))):a.__k[u]=null;if(y)for(u=0;u<b;u++)(p=o[u])!=null&&(2&p.__u)==0&&(p.__e==l&&(l=or(p)),k0(p,p));return l}function C0(a,i,o,l){var s,u;if(typeof a.type=="function"){for(s=a.__k,u=0;s&&u<s.length;u++)s[u]&&(s[u].__=a,i=C0(s[u],i,o,l));return i}a.__e!=i&&(l&&(i&&a.type&&!i.parentNode&&(i=or(a)),o.insertBefore(a.__e,i||null)),i=a.__e);do i=i&&i.nextSibling;while(i!=null&&i.nodeType==8);return i}function ys(a,i){return i=i||[],a==null||typeof a=="boolean"||(Mo(a)?a.some(function(o){ys(o,i)}):i.push(a)),i}function L1(a,i,o,l){var s,u,h,p=a.key,m=a.type,g=i[o],b=g!=null&&(2&g.__u)==0;if(g===null&&p==null||b&&p==g.key&&m==g.type)return o;if(l>(b?1:0)){for(s=o-1,u=o+1;s>=0||u<i.length;)if((g=i[h=s>=0?s--:u++])!=null&&(2&g.__u)==0&&p==g.key&&m==g.type)return h}return-1}function Wg(a,i,o){i[0]=="-"?a.setProperty(i,o??""):a[i]=o==null?"":typeof o!="number"||U1.test(i)?o:o+"px"}function Kl(a,i,o,l,s){var u,h;e:if(i=="style")if(typeof o=="string")a.style.cssText=o;else{if(typeof l=="string"&&(a.style.cssText=l=""),l)for(i in l)o&&i in o||Wg(a.style,i,"");if(o)for(i in o)l&&o[i]==l[i]||Wg(a.style,i,o[i])}else if(i[0]=="o"&&i[1]=="n")u=i!=(i=i.replace(x0,"$1")),h=i.toLowerCase(),i=h in a||i=="onFocusOut"||i=="onFocusIn"?h.slice(2):i.slice(2),a.l||(a.l={}),a.l[i+u]=o,o?l?o[go]=l[go]:(o[go]=gf,a.addEventListener(i,u?$d:Fd,u)):a.removeEventListener(i,u?$d:Fd,u);else{if(s=="http://www.w3.org/2000/svg")i=i.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(i!="width"&&i!="height"&&i!="href"&&i!="list"&&i!="form"&&i!="tabIndex"&&i!="download"&&i!="rowSpan"&&i!="colSpan"&&i!="role"&&i!="popover"&&i in a)try{a[i]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&i[4]!="-"?a.removeAttribute(i):a.setAttribute(i,i=="popover"&&o==1?"":o))}}function Kg(a){return function(i){if(this.l){var o=this.l[i.type+a];if(i[ss]==null)i[ss]=gf++;else if(i[ss]<o[go])return;return o(ge.event?ge.event(i):i)}}}function yf(a,i,o,l,s,u,h,p,m,g){var b,y,x,S,T,N,D,C,A,Y,F,Q,J,K,de,re=i.type;if(i.constructor!==void 0)return null;128&o.__u&&(m=!!(32&o.__u),u=[p=i.__e=o.__e]),(b=ge.__b)&&b(i);e:if(typeof re=="function")try{if(C=i.props,A=re.prototype&&re.prototype.render,Y=(b=re.contextType)&&l[b.__c],F=b?Y?Y.props.value:b.__:l,o.__c?D=(y=i.__c=o.__c).__=y.__E:(A?i.__c=y=new re(C,F):(i.__c=y=new cn(C,F),y.constructor=re,y.render=Y1),Y&&Y.sub(y),y.state||(y.state={}),y.__n=l,x=y.__d=!0,y.__h=[],y._sb=[]),A&&y.__s==null&&(y.__s=y.state),A&&re.getDerivedStateFromProps!=null&&(y.__s==y.state&&(y.__s=Zn({},y.__s)),Zn(y.__s,re.getDerivedStateFromProps(C,y.__s))),S=y.props,T=y.state,y.__v=i,x)A&&re.getDerivedStateFromProps==null&&y.componentWillMount!=null&&y.componentWillMount(),A&&y.componentDidMount!=null&&y.__h.push(y.componentDidMount);else{if(A&&re.getDerivedStateFromProps==null&&C!==S&&y.componentWillReceiveProps!=null&&y.componentWillReceiveProps(C,F),i.__v==o.__v||!y.__e&&y.shouldComponentUpdate!=null&&y.shouldComponentUpdate(C,y.__s,F)===!1){i.__v!=o.__v&&(y.props=C,y.state=y.__s,y.__d=!1),i.__e=o.__e,i.__k=o.__k,i.__k.some(function(he){he&&(he.__=i)}),gs.push.apply(y.__h,y._sb),y._sb=[],y.__h.length&&h.push(y);break e}y.componentWillUpdate!=null&&y.componentWillUpdate(C,y.__s,F),A&&y.componentDidUpdate!=null&&y.__h.push(function(){y.componentDidUpdate(S,T,N)})}if(y.context=F,y.props=C,y.__P=a,y.__e=!1,Q=ge.__r,J=0,A)y.state=y.__s,y.__d=!1,Q&&Q(i),b=y.render(y.props,y.state,y.context),gs.push.apply(y.__h,y._sb),y._sb=[];else do y.__d=!1,Q&&Q(i),b=y.render(y.props,y.state,y.context),y.state=y.__s;while(y.__d&&++J<25);y.state=y.__s,y.getChildContext!=null&&(l=Zn(Zn({},l),y.getChildContext())),A&&!x&&y.getSnapshotBeforeUpdate!=null&&(N=y.getSnapshotBeforeUpdate(S,T)),K=b!=null&&b.type===Ne&&b.key==null?z0(b.props.children):b,p=T0(a,Mo(K)?K:[K],i,o,l,s,u,h,p,m,g),y.base=i.__e,i.__u&=-161,y.__h.length&&h.push(y),D&&(y.__E=y.__=null)}catch(he){if(i.__v=null,m||u!=null)if(he.then){for(i.__u|=m?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;u[u.indexOf(p)]=null,i.__e=p}else{for(de=u.length;de--;)vf(u[de]);Id(i)}else i.__e=o.__e,i.__k=o.__k,he.then||Id(i);ge.__e(he,i,o)}else u==null&&i.__v==o.__v?(i.__k=o.__k,i.__e=o.__e):p=i.__e=B1(o.__e,i,o,l,s,u,h,m,g);return(b=ge.diffed)&&b(i),128&i.__u?void 0:p}function Id(a){a&&(a.__c&&(a.__c.__e=!0),a.__k&&a.__k.some(Id))}function E0(a,i,o){for(var l=0;l<o.length;l++)bf(o[l],o[++l],o[++l]);ge.__c&&ge.__c(i,a),a.some(function(s){try{a=s.__h,s.__h=[],a.some(function(u){u.call(s)})}catch(u){ge.__e(u,s.__v)}})}function z0(a){return typeof a!="object"||a==null||a.__b>0?a:Mo(a)?a.map(z0):a.constructor!==void 0?null:Zn({},a)}function B1(a,i,o,l,s,u,h,p,m){var g,b,y,x,S,T,N,D=o.props||ms,C=i.props,A=i.type;if(A=="svg"?s="http://www.w3.org/2000/svg":A=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),u!=null){for(g=0;g<u.length;g++)if((S=u[g])&&"setAttribute"in S==!!A&&(A?S.localName==A:S.nodeType==3)){a=S,u[g]=null;break}}if(a==null){if(A==null)return document.createTextNode(C);a=document.createElementNS(s,A,C.is&&C),p&&(ge.__m&&ge.__m(i,u),p=!1),u=null}if(A==null)D===C||p&&a.data==C||(a.data=C);else{if(u=A=="textarea"&&C.defaultValue!=null?null:u&&Ls.call(a.childNodes),!p&&u!=null)for(D={},g=0;g<a.attributes.length;g++)D[(S=a.attributes[g]).name]=S.value;for(g in D)S=D[g],g=="dangerouslySetInnerHTML"?y=S:g=="children"||g in C||g=="value"&&"defaultValue"in C||g=="checked"&&"defaultChecked"in C||Kl(a,g,null,S,s);for(g in C)S=C[g],g=="children"?x=S:g=="dangerouslySetInnerHTML"?b=S:g=="value"?T=S:g=="checked"?N=S:p&&typeof S!="function"||D[g]===S||Kl(a,g,S,D[g],s);if(b)p||y&&(b.__html==y.__html||b.__html==a.innerHTML)||(a.innerHTML=b.__html),i.__k=[];else if(y&&(a.innerHTML=""),T0(i.type=="template"?a.content:a,Mo(x)?x:[x],i,o,l,A=="foreignObject"?"http://www.w3.org/1999/xhtml":s,u,h,u?u[0]:o.__k&&or(o,0),p,m),u!=null)for(g=u.length;g--;)vf(u[g]);p&&A!="textarea"||(g="value",A=="progress"&&T==null?a.removeAttribute("value"):T!=null&&(T!==a[g]||A=="progress"&&!T||A=="option"&&T!=D[g])&&Kl(a,g,T,D[g],s),g="checked",N!=null&&N!=a[g]&&Kl(a,g,N,D[g],s))}return a}function bf(a,i,o){try{if(typeof a=="function"){var l=typeof a.__u=="function";l&&a.__u(),l&&i==null||(a.__u=a(i))}else a.current=i}catch(s){ge.__e(s,o)}}function k0(a,i,o){var l,s;if(ge.unmount&&ge.unmount(a),(l=a.ref)&&(l.current&&l.current!=a.__e||bf(l,null,i)),(l=a.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(u){ge.__e(u,i)}l.base=l.__P=null}if(l=a.__k)for(s=0;s<l.length;s++)l[s]&&k0(l[s],i,o||typeof a.type!="function");o||vf(a.__e),a.__c=a.__=a.__e=void 0}function Y1(a,i,o){return this.constructor(a,o)}function vo(a,i,o){var l,s,u,h;i==document&&(i=document.documentElement),ge.__&&ge.__(a,i),s=(l=!1)?null:i.__k,u=[],h=[],yf(i,a=i.__k=ii(Ne,null,[a]),s||ms,ms,i.namespaceURI,s?null:i.firstChild?Ls.call(i.childNodes):null,u,s?s.__e:i.firstChild,l,h),E0(u,a,h)}function N0(a){function i(o){var l,s;return this.getChildContext||(l=new Set,(s={})[i.__c]=this,this.getChildContext=function(){return s},this.componentWillUnmount=function(){l=null},this.shouldComponentUpdate=function(u){this.props.value!=u.value&&l.forEach(function(h){h.__e=!0,Gd(h)})},this.sub=function(u){l.add(u);var h=u.componentWillUnmount;u.componentWillUnmount=function(){l&&l.delete(u),h&&h.call(u)}}),o.children}return i.__c="__cC"+_0++,i.__=a,i.Provider=i.__l=(i.Consumer=function(o,l){return o.children(l)}).contextType=i,i}Ls=gs.slice,ge={__e:function(a,i,o,l){for(var s,u,h;i=i.__;)if((s=i.__c)&&!s.__)try{if((u=s.constructor)&&u.getDerivedStateFromError!=null&&(s.setState(u.getDerivedStateFromError(a)),h=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(a,l||{}),h=s.__d),h)return s.__E=s}catch(p){a=p}throw a}},v0=0,y0=function(a){return a!=null&&a.constructor===void 0},cn.prototype.setState=function(a,i){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Zn({},this.state),typeof a=="function"&&(a=a(Zn({},o),this.props)),a&&Zn(o,a),a!=null&&this.__v&&(i&&this._sb.push(i),Gd(this))},cn.prototype.forceUpdate=function(a){this.__v&&(this.__e=!0,a&&this.__h.push(a),Gd(this))},cn.prototype.render=Ne,Ea=[],b0=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,w0=function(a,i){return a.__v.__b-i.__v.__b},vs.__r=0,ld=Math.random().toString(8),ss="__d"+ld,go="__a"+ld,x0=/(PointerCapture)$|Capture$/i,gf=0,Fd=Kg(!1),$d=Kg(!0),_0=0;var ri,Pe,sd,Jg,So=0,A0=[],lt=ge,Pg=lt.__b,ev=lt.__r,tv=lt.diffed,nv=lt.__c,av=lt.unmount,iv=lt.__;function Oo(a,i){lt.__h&&lt.__h(Pe,a,So||i),So=0;var o=Pe.__H||(Pe.__H={__:[],__h:[]});return a>=o.__.length&&o.__.push({}),o.__[a]}function Se(a){return So=1,X1(M0,a)}function X1(a,i,o){var l=Oo(ri++,2);if(l.t=a,!l.__c&&(l.__=[o?o(i):M0(void 0,i),function(p){var m=l.__N?l.__N[0]:l.__[0],g=l.t(m,p);m!==g&&(l.__N=[g,l.__[1]],l.__c.setState({}))}],l.__c=Pe,!Pe.__f)){var s=function(p,m,g){if(!l.__c.__H)return!0;var b=l.__c.__H.__.filter(function(x){return x.__c});if(b.every(function(x){return!x.__N}))return!u||u.call(this,p,m,g);var y=l.__c.props!==p;return b.some(function(x){if(x.__N){var S=x.__[0];x.__=x.__N,x.__N=void 0,S!==x.__[0]&&(y=!0)}}),u&&u.call(this,p,m,g)||y};Pe.__f=!0;var u=Pe.shouldComponentUpdate,h=Pe.componentWillUpdate;Pe.componentWillUpdate=function(p,m,g){if(this.__e){var b=u;u=void 0,s(p,m,g),u=b}h&&h.call(this,p,m,g)},Pe.shouldComponentUpdate=s}return l.__N||l.__}function _e(a,i){var o=Oo(ri++,3);!lt.__s&&_f(o.__H,i)&&(o.__=a,o.u=i,Pe.__H.__h.push(o))}function wf(a,i){var o=Oo(ri++,4);!lt.__s&&_f(o.__H,i)&&(o.__=a,o.u=i,Pe.__h.push(o))}function oe(a){return So=5,yn(function(){return{current:a}},[])}function yn(a,i){var o=Oo(ri++,7);return _f(o.__H,i)&&(o.__=a(),o.__H=i,o.__h=a),o.__}function ot(a,i){return So=8,yn(function(){return a},i)}function xf(a){var i=Pe.context[a.__c],o=Oo(ri++,9);return o.c=a,i?(o.__==null&&(o.__=!0,i.sub(Pe)),i.props.value):a.__}function q1(){for(var a;a=A0.shift();){var i=a.__H;if(a.__P&&i)try{i.__h.some(us),i.__h.some(Qd),i.__h=[]}catch(o){i.__h=[],lt.__e(o,a.__v)}}}lt.__b=function(a){Pe=null,Pg&&Pg(a)},lt.__=function(a,i){a&&i.__k&&i.__k.__m&&(a.__m=i.__k.__m),iv&&iv(a,i)},lt.__r=function(a){ev&&ev(a),ri=0;var i=(Pe=a.__c).__H;i&&(sd===Pe?(i.__h=[],Pe.__h=[],i.__.some(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(i.__h.some(us),i.__h.some(Qd),i.__h=[],ri=0)),sd=Pe},lt.diffed=function(a){tv&&tv(a);var i=a.__c;i&&i.__H&&(i.__H.__h.length&&(A0.push(i)!==1&&Jg===lt.requestAnimationFrame||((Jg=lt.requestAnimationFrame)||V1)(q1)),i.__H.__.some(function(o){o.u&&(o.__H=o.u),o.u=void 0})),sd=Pe=null},lt.__c=function(a,i){i.some(function(o){try{o.__h.some(us),o.__h=o.__h.filter(function(l){return!l.__||Qd(l)})}catch(l){i.some(function(s){s.__h&&(s.__h=[])}),i=[],lt.__e(l,o.__v)}}),nv&&nv(a,i)},lt.unmount=function(a){av&&av(a);var i,o=a.__c;o&&o.__H&&(o.__H.__.some(function(l){try{us(l)}catch(s){i=s}}),o.__H=void 0,i&&lt.__e(i,o.__v))};var rv=typeof requestAnimationFrame=="function";function V1(a){var i,o=function(){clearTimeout(l),rv&&cancelAnimationFrame(i),setTimeout(a)},l=setTimeout(o,35);rv&&(i=requestAnimationFrame(o))}function us(a){var i=Pe,o=a.__c;typeof o=="function"&&(a.__c=void 0,o()),Pe=i}function Qd(a){var i=Pe;a.__c=a.__(),Pe=i}function _f(a,i){return!a||a.length!==i.length||i.some(function(o,l){return o!==a[l]})}function M0(a,i){return typeof i=="function"?i(a):i}var F1=Symbol.for("preact-signals");function Sf(){if(ai>1)ai--;else{var a,i=!1;for((function(){var s=ws;for(ws=void 0;s!==void 0;)s.S.v===s.v&&(s.S.i=s.i),s=s.o})();yo!==void 0;){var o=yo;for(yo=void 0,bs++;o!==void 0;){var l=o.u;if(o.u=void 0,o.f&=-3,!(8&o.f)&&D0(o))try{o.c()}catch(s){i||(a=s,i=!0)}o=l}}if(bs=0,ai--,i)throw a}}var Ge=void 0;function lr(a){var i=Ge;Ge=void 0;try{return a()}finally{Ge=i}}var yo=void 0,ai=0,bs=0,ov=0,ws=void 0,xs=0;function O0(a){if(Ge!==void 0){var i=a.n;if(i===void 0||i.t!==Ge)return i={i:0,S:a,p:Ge.s,n:void 0,t:Ge,e:void 0,x:void 0,r:i},Ge.s!==void 0&&(Ge.s.n=i),Ge.s=i,a.n=i,32&Ge.f&&a.S(i),i;if(i.i===-1)return i.i=0,i.n!==void 0&&(i.n.p=i.p,i.p!==void 0&&(i.p.n=i.n),i.p=Ge.s,i.n=void 0,Ge.s.n=i,Ge.s=i),i}}function Et(a,i){this.v=a,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=i?.watched,this.Z=i?.unwatched,this.name=i?.name}Et.prototype.brand=F1;Et.prototype.h=function(){return!0};Et.prototype.S=function(a){var i=this,o=this.t;o!==a&&a.e===void 0&&(a.x=o,this.t=a,o!==void 0?o.e=a:lr(function(){var l;(l=i.W)==null||l.call(i)}))};Et.prototype.U=function(a){var i=this;if(this.t!==void 0){var o=a.e,l=a.x;o!==void 0&&(o.x=l,a.e=void 0),l!==void 0&&(l.e=o,a.x=void 0),a===this.t&&(this.t=l,l===void 0&&lr(function(){var s;(s=i.Z)==null||s.call(i)}))}};Et.prototype.subscribe=function(a){var i=this;return Bs(function(){var o=i.value,l=Ge;Ge=void 0;try{a(o)}finally{Ge=l}},{name:"sub"})};Et.prototype.valueOf=function(){return this.value};Et.prototype.toString=function(){return this.value+""};Et.prototype.toJSON=function(){return this.value};Et.prototype.peek=function(){var a=this;return lr(function(){return a.value})};Object.defineProperty(Et.prototype,"value",{get:function(){var a=O0(this);return a!==void 0&&(a.i=this.i),this.v},set:function(a){if(a!==this.v){if(bs>100)throw new Error("Cycle detected");(function(o){ai!==0&&bs===0&&o.l!==ov&&(o.l=ov,ws={S:o,v:o.v,i:o.i,o:ws})})(this),this.v=a,this.i++,xs++,ai++;try{for(var i=this.t;i!==void 0;i=i.x)i.t.N()}finally{Sf()}}}});function ht(a,i){return new Et(a,i)}function D0(a){for(var i=a.s;i!==void 0;i=i.n)if(i.S.i!==i.i||!i.S.h()||i.S.i!==i.i)return!0;return!1}function R0(a){for(var i=a.s;i!==void 0;i=i.n){var o=i.S.n;if(o!==void 0&&(i.r=o),i.S.n=i,i.i=-1,i.n===void 0){a.s=i;break}}}function U0(a){for(var i=a.s,o=void 0;i!==void 0;){var l=i.p;i.i===-1?(i.S.U(i),l!==void 0&&(l.n=i.n),i.n!==void 0&&(i.n.p=l)):o=i,i.S.n=i.r,i.r!==void 0&&(i.r=void 0),i=l}a.s=o}function si(a,i){Et.call(this,void 0),this.x=a,this.s=void 0,this.g=xs-1,this.f=4,this.W=i?.watched,this.Z=i?.unwatched,this.name=i?.name}si.prototype=new Et;si.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===xs))return!0;if(this.g=xs,this.f|=1,this.i>0&&!D0(this))return this.f&=-2,!0;var a=Ge;try{R0(this),Ge=this;var i=this.x();(16&this.f||this.v!==i||this.i===0)&&(this.v=i,this.f&=-17,this.i++)}catch(o){this.v=o,this.f|=16,this.i++}return Ge=a,U0(this),this.f&=-2,!0};si.prototype.S=function(a){if(this.t===void 0){this.f|=36;for(var i=this.s;i!==void 0;i=i.n)i.S.S(i)}Et.prototype.S.call(this,a)};si.prototype.U=function(a){if(this.t!==void 0&&(Et.prototype.U.call(this,a),this.t===void 0)){this.f&=-33;for(var i=this.s;i!==void 0;i=i.n)i.S.U(i)}};si.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var a=this.t;a!==void 0;a=a.x)a.t.N()}};Object.defineProperty(si.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var a=O0(this);if(this.h(),a!==void 0&&(a.i=this.i),16&this.f)throw this.v;return this.v}});function ci(a,i){return new si(a,i)}function j0(a){var i=a.m;if(a.m=void 0,typeof i=="function"){ai++;var o=Ge;Ge=void 0;try{i()}catch(l){throw a.f&=-2,a.f|=8,Tf(a),l}finally{Ge=o,Sf()}}}function Tf(a){for(var i=a.s;i!==void 0;i=i.n)i.S.U(i);a.x=void 0,a.s=void 0,j0(a)}function $1(a){if(Ge!==this)throw new Error("Out-of-order effect");U0(this),Ge=a,this.f&=-2,8&this.f&&Tf(this),Sf()}function cr(a,i){this.x=a,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=i?.name}cr.prototype.c=function(){var a=this.S();try{if(8&this.f||this.x===void 0)return;var i=this.x();typeof i=="function"&&(this.m=i)}finally{a()}};cr.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,j0(this),R0(this),ai++;var a=Ge;return Ge=this,$1.bind(this,a)};cr.prototype.N=function(){2&this.f||(this.f|=2,this.u=yo,yo=this)};cr.prototype.d=function(){this.f|=8,1&this.f||Tf(this)};cr.prototype.dispose=function(){this.d()};function Bs(a,i){var o=new cr(a,i);try{o.c()}catch(s){throw o.d(),s}var l=o.d.bind(o);return l[Symbol.dispose]=l,l}var Jl;function ur(a,i){ge[a]=i.bind(null,ge[a]||function(){})}function _s(a){if(Jl){var i=Jl;Jl=void 0,i()}Jl=a&&a.S()}function H0(a){var i=this,o=a.data,l=I1(o);l.value=o;var s=yn(function(){for(var u=i.__v;u=u.__;)if(u.__c){u.__c.__$f|=4;break}return i.__$u.c=function(){var h,p=i.__$u.S(),m=s.value;p(),y0(m)||((h=i.base)==null?void 0:h.nodeType)!==3?(i.__$f|=1,i.setState({})):i.base.data=m},ci(function(){var h=l.value.value;return h===0?0:h===!0?"":h||""})},[]);return s.value}H0.displayName="_st";Object.defineProperties(Et.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:H0},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});ur("__b",function(a,i){if(typeof i.type=="string"){var o,l=i.props;for(var s in l)if(s!=="children"){var u=l[s];u instanceof Et&&(o||(i.__np=o={}),o[s]=u,l[s]=u.peek())}}a(i)});ur("__r",function(a,i){a(i),_s();var o,l=i.__c;l&&(l.__$f&=-2,(o=l.__$u)===void 0&&(l.__$u=o=(function(s){var u;return Bs(function(){u=this}),u.c=function(){l.__$f|=1,l.setState({})},u})())),_s(o)});ur("__e",function(a,i,o,l){_s(),a(i,o,l)});ur("diffed",function(a,i){_s();var o;if(typeof i.type=="string"&&(o=i.__e)){var l=i.__np,s=i.props;if(l){var u=o.U;if(u)for(var h in u){var p=u[h];p!==void 0&&!(h in l)&&(p.d(),u[h]=void 0)}else o.U=u={};for(var m in l){var g=u[m],b=l[m];g===void 0?(g=G1(o,m,b,s),u[m]=g):g.o(b,s)}}}a(i)});function G1(a,i,o,l){var s=i in a&&a.ownerSVGElement===void 0,u=ht(o);return{o:function(h,p){u.value=h,l=p},d:Bs(function(){var h=u.value.value;l[i]!==h&&(l[i]=h,s?a[i]=h:h?a.setAttribute(i,h):a.removeAttribute(i))})}}ur("unmount",function(a,i){if(typeof i.type=="string"){var o=i.__e;if(o){var l=o.U;if(l){o.U=void 0;for(var s in l){var u=l[s];u&&u.d()}}}}else{var h=i.__c;if(h){var p=h.__$u;p&&(h.__$u=void 0,p.d())}}a(i)});ur("__h",function(a,i,o,l){(l<3||l===9)&&(i.__$f|=2),a(i,o,l)});cn.prototype.shouldComponentUpdate=function(a,i){if(this.__R)return!0;var o=this.__$u,l=o&&o.s!==void 0;for(var s in i)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){if(!(l||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(l||4&this.__$f)||3&this.__$f)return!0;for(var u in a)if(u!=="__source"&&a[u]!==this.props[u])return!0;for(var h in this.props)if(!(h in a))return!0;return!1};function I1(a){return yn(function(){return ht(a)},[])}function To(a){var i=oe(a);i.current=a,_e(function(){return Bs(function(){return i.current()})},[])}function L0(a,i){for(var o in i)a[o]=i[o];return a}function Zd(a,i){for(var o in a)if(o!=="__source"&&!(o in i))return!0;for(var l in i)if(l!=="__source"&&a[l]!==i[l])return!0;return!1}function Q1(a,i){var o=i(),l=Se({t:{__:o,u:i}}),s=l[0].t,u=l[1];return wf(function(){s.__=o,s.u=i,cd(s)&&u({t:s})},[a,o,i]),_e(function(){return cd(s)&&u({t:s}),a(function(){cd(s)&&u({t:s})})},[a]),o}function cd(a){try{return!((i=a.__)===(o=a.u())&&(i!==0||1/i==1/o)||i!=i&&o!=o)}catch{return!0}var i,o}function lv(a,i){this.props=a,this.context=i}function Ys(a,i){function o(s){var u=this.props.ref;return u!=s.ref&&u&&(typeof u=="function"?u(null):u.current=null),i?!i(this.props,s)||u!=s.ref:Zd(this.props,s)}function l(s){return this.shouldComponentUpdate=o,ii(a,s)}return l.displayName="Memo("+(a.displayName||a.name)+")",l.__f=l.prototype.isReactComponent=!0,l.type=a,l}(lv.prototype=new cn).isPureReactComponent=!0,lv.prototype.shouldComponentUpdate=function(a,i){return Zd(this.props,a)||Zd(this.state,i)};var sv=ge.__b;ge.__b=function(a){a.type&&a.type.__f&&a.ref&&(a.props.ref=a.ref,a.ref=null),sv&&sv(a)};var Z1=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Cf(a){function i(o){var l=L0({},o);return delete l.ref,a(l,o.ref||null)}return i.$$typeof=Z1,i.render=a,i.prototype.isReactComponent=i.__f=!0,i.displayName="ForwardRef("+(a.displayName||a.name)+")",i}var W1=ge.__e;ge.__e=function(a,i,o,l){if(a.then){for(var s,u=i;u=u.__;)if((s=u.__c)&&s.__c)return i.__e==null&&(i.__e=o.__e,i.__k=o.__k),s.__c(a,i)}W1(a,i,o,l)};var cv=ge.unmount;function B0(a,i,o){return a&&(a.__c&&a.__c.__H&&(a.__c.__H.__.forEach(function(l){typeof l.__c=="function"&&l.__c()}),a.__c.__H=null),(a=L0({},a)).__c!=null&&(a.__c.__P===o&&(a.__c.__P=i),a.__c.__e=!0,a.__c=null),a.__k=a.__k&&a.__k.map(function(l){return B0(l,i,o)})),a}function Y0(a,i,o){return a&&o&&(a.__v=null,a.__k=a.__k&&a.__k.map(function(l){return Y0(l,i,o)}),a.__c&&a.__c.__P===i&&(a.__e&&o.appendChild(a.__e),a.__c.__e=!0,a.__c.__P=o)),a}function ud(){this.__u=0,this.o=null,this.__b=null}function X0(a){var i=a.__&&a.__.__c;return i&&i.__a&&i.__a(a)}function Pl(){this.i=null,this.l=null}ge.unmount=function(a){var i=a.__c;i&&(i.__z=!0),i&&i.__R&&i.__R(),i&&32&a.__u&&(a.type=null),cv&&cv(a)},(ud.prototype=new cn).__c=function(a,i){var o=i.__c,l=this;l.o==null&&(l.o=[]),l.o.push(o);var s=X0(l.__v),u=!1,h=function(){u||l.__z||(u=!0,o.__R=null,s?s(m):m())};o.__R=h;var p=o.__P;o.__P=null;var m=function(){if(!--l.__u){if(l.state.__a){var g=l.state.__a;l.__v.__k[0]=Y0(g,g.__c.__P,g.__c.__O)}var b;for(l.setState({__a:l.__b=null});b=l.o.pop();)b.__P=p,b.forceUpdate()}};l.__u++||32&i.__u||l.setState({__a:l.__b=l.__v.__k[0]}),a.then(h,h)},ud.prototype.componentWillUnmount=function(){this.o=[]},ud.prototype.render=function(a,i){if(this.__b){if(this.__v.__k){var o=document.createElement("div"),l=this.__v.__k[0].__c;this.__v.__k[0]=B0(this.__b,o,l.__O=l.__P)}this.__b=null}var s=i.__a&&ii(Ne,null,a.fallback);return s&&(s.__u&=-33),[ii(Ne,null,i.__a?null:a.children),s]};var uv=function(a,i,o){if(++o[1]===o[0]&&a.l.delete(i),a.props.revealOrder&&(a.props.revealOrder[0]!=="t"||!a.l.size))for(o=a.i;o;){for(;o.length>3;)o.pop()();if(o[1]<o[0])break;a.i=o=o[2]}};function K1(a){return this.getChildContext=function(){return a.context},a.children}function J1(a){var i=this,o=a.h;if(i.componentWillUnmount=function(){vo(null,i.v),i.v=null,i.h=null},i.h&&i.h!==o&&i.componentWillUnmount(),!i.v){for(var l=i.__v;l!==null&&!l.__m&&l.__!==null;)l=l.__;i.h=o,i.v={nodeType:1,parentNode:o,childNodes:[],__k:{__m:l.__m},contains:function(){return!0},namespaceURI:o.namespaceURI,insertBefore:function(s,u){this.childNodes.push(s),i.h.insertBefore(s,u)},removeChild:function(s){this.childNodes.splice(this.childNodes.indexOf(s)>>>1,1),i.h.removeChild(s)}}}vo(ii(K1,{context:i.context},a.__v),i.v)}function P1(a,i){var o=ii(J1,{__v:a,h:i});return o.containerInfo=i,o}(Pl.prototype=new cn).__a=function(a){var i=this,o=X0(i.__v),l=i.l.get(a);return l[0]++,function(s){var u=function(){i.props.revealOrder?(l.push(s),uv(i,a,l)):s()};o?o(u):u()}},Pl.prototype.render=function(a){this.i=null,this.l=new Map;var i=ys(a.children);a.revealOrder&&a.revealOrder[0]==="b"&&i.reverse();for(var o=i.length;o--;)this.l.set(i[o],this.i=[1,0,this.i]);return a.children},Pl.prototype.componentDidUpdate=Pl.prototype.componentDidMount=function(){var a=this;this.l.forEach(function(i,o){uv(a,o,i)})};var ex=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,tx=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,nx=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ax=/[A-Z0-9]/g,ix=typeof document<"u",rx=function(a){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(a)};cn.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(a){Object.defineProperty(cn.prototype,a,{configurable:!0,get:function(){return this["UNSAFE_"+a]},set:function(i){Object.defineProperty(this,a,{configurable:!0,writable:!0,value:i})}})});var dv=ge.event;ge.event=function(a){return dv&&(a=dv(a)),a.persist=function(){},a.isPropagationStopped=function(){return this.cancelBubble},a.isDefaultPrevented=function(){return this.defaultPrevented},a.nativeEvent=a};var ox={configurable:!0,get:function(){return this.class}},fv=ge.vnode;ge.vnode=function(a){typeof a.type=="string"&&(function(i){var o=i.props,l=i.type,s={},u=l.indexOf("-")==-1;for(var h in o){var p=o[h];if(!(h==="value"&&"defaultValue"in o&&p==null||ix&&h==="children"&&l==="noscript"||h==="class"||h==="className")){var m=h.toLowerCase();h==="defaultValue"&&"value"in o&&o.value==null?h="value":h==="download"&&p===!0?p="":m==="translate"&&p==="no"?p=!1:m[0]==="o"&&m[1]==="n"?m==="ondoubleclick"?h="ondblclick":m!=="onchange"||l!=="input"&&l!=="textarea"||rx(o.type)?m==="onfocus"?h="onfocusin":m==="onblur"?h="onfocusout":nx.test(h)&&(h=m):m=h="oninput":u&&tx.test(h)?h=h.replace(ax,"-$&").toLowerCase():p===null&&(p=void 0),m==="oninput"&&s[h=m]&&(h="oninputCapture"),s[h]=p}}l=="select"&&(s.multiple&&Array.isArray(s.value)&&(s.value=ys(o.children).forEach(function(g){g.props.selected=s.value.indexOf(g.props.value)!=-1})),s.defaultValue!=null&&(s.value=ys(o.children).forEach(function(g){g.props.selected=s.multiple?s.defaultValue.indexOf(g.props.value)!=-1:s.defaultValue==g.props.value}))),o.class&&!o.className?(s.class=o.class,Object.defineProperty(s,"className",ox)):o.className&&(s.class=s.className=o.className),i.props=s})(a),a.$$typeof=ex,fv&&fv(a)};var hv=ge.__r;ge.__r=function(a){hv&&hv(a),a.__c};var pv=ge.diffed;ge.diffed=function(a){pv&&pv(a);var i=a.props,o=a.__e;o!=null&&a.type==="textarea"&&"value"in i&&i.value!==o.value&&(o.value=i.value==null?"":i.value)};var lx=0;function f(a,i,o,l,s,u){i||(i={});var h,p,m=i;if("ref"in m)for(p in m={},i)p=="ref"?h=i[p]:m[p]=i[p];var g={type:a,props:m,key:o,ref:h,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--lx,__i:-1,__u:0,__source:s,__self:u};if(typeof a=="function"&&(h=a.defaultProps))for(p in h)m[p]===void 0&&(m[p]=h[p]);return ge.vnode&&ge.vnode(g),g}var dd={exports:{}},pe={};var mv;function sx(){if(mv)return pe;mv=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),x=Symbol.iterator;function S(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,D={};function C(E,j,$){this.props=E,this.context=j,this.refs=D,this.updater=$||T}C.prototype.isReactComponent={},C.prototype.setState=function(E,j){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,j,"setState")},C.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function A(){}A.prototype=C.prototype;function Y(E,j,$){this.props=E,this.context=j,this.refs=D,this.updater=$||T}var F=Y.prototype=new A;F.constructor=Y,N(F,C.prototype),F.isPureReactComponent=!0;var Q=Array.isArray;function J(){}var K={H:null,A:null,T:null,S:null},de=Object.prototype.hasOwnProperty;function re(E,j,$){var Z=$.ref;return{$$typeof:a,type:E,key:j,ref:Z!==void 0?Z:null,props:$}}function he(E,j){return re(E.type,j,E.props)}function ye(E){return typeof E=="object"&&E!==null&&E.$$typeof===a}function le(E){var j={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function($){return j[$]})}var Ye=/\/+/g;function He(E,j){return typeof E=="object"&&E!==null&&E.key!=null?le(""+E.key):j.toString(36)}function Ue(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(J,J):(E.status="pending",E.then(function(j){E.status==="pending"&&(E.status="fulfilled",E.value=j)},function(j){E.status==="pending"&&(E.status="rejected",E.reason=j)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function _(E,j,$,Z,P){var ae=typeof E;(ae==="undefined"||ae==="boolean")&&(E=null);var ue=!1;if(E===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(E.$$typeof){case a:case i:ue=!0;break;case b:return ue=E._init,_(ue(E._payload),j,$,Z,P)}}if(ue)return P=P(E),ue=Z===""?"."+He(E,0):Z,Q(P)?($="",ue!=null&&($=ue.replace(Ye,"$&/")+"/"),_(P,j,$,"",function(pt){return pt})):P!=null&&(ye(P)&&(P=he(P,$+(P.key==null||E&&E.key===P.key?"":(""+P.key).replace(Ye,"$&/")+"/")+ue)),j.push(P)),1;ue=0;var Me=Z===""?".":Z+":";if(Q(E))for(var be=0;be<E.length;be++)Z=E[be],ae=Me+He(Z,be),ue+=_(Z,j,$,ae,P);else if(be=S(E),typeof be=="function")for(E=be.call(E),be=0;!(Z=E.next()).done;)Z=Z.value,ae=Me+He(Z,be++),ue+=_(Z,j,$,ae,P);else if(ae==="object"){if(typeof E.then=="function")return _(Ue(E),j,$,Z,P);throw j=String(E),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ue}function k(E,j,$){if(E==null)return E;var Z=[],P=0;return _(E,Z,"","",function(ae){return j.call($,ae,P++)}),Z}function U(E){if(E._status===-1){var j=E._result;j=j(),j.then(function($){(E._status===0||E._status===-1)&&(E._status=1,E._result=$)},function($){(E._status===0||E._status===-1)&&(E._status=2,E._result=$)}),E._status===-1&&(E._status=0,E._result=j)}if(E._status===1)return E._result.default;throw E._result}var I=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},W={map:k,forEach:function(E,j,$){k(E,function(){j.apply(this,arguments)},$)},count:function(E){var j=0;return k(E,function(){j++}),j},toArray:function(E){return k(E,function(j){return j})||[]},only:function(E){if(!ye(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return pe.Activity=y,pe.Children=W,pe.Component=C,pe.Fragment=o,pe.Profiler=s,pe.PureComponent=Y,pe.StrictMode=l,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,pe.__COMPILER_RUNTIME={__proto__:null,c:function(E){return K.H.useMemoCache(E)}},pe.cache=function(E){return function(){return E.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(E,j,$){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var Z=N({},E.props),P=E.key;if(j!=null)for(ae in j.key!==void 0&&(P=""+j.key),j)!de.call(j,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&j.ref===void 0||(Z[ae]=j[ae]);var ae=arguments.length-2;if(ae===1)Z.children=$;else if(1<ae){for(var ue=Array(ae),Me=0;Me<ae;Me++)ue[Me]=arguments[Me+2];Z.children=ue}return re(E.type,P,Z)},pe.createContext=function(E){return E={$$typeof:h,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:u,_context:E},E},pe.createElement=function(E,j,$){var Z,P={},ae=null;if(j!=null)for(Z in j.key!==void 0&&(ae=""+j.key),j)de.call(j,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(P[Z]=j[Z]);var ue=arguments.length-2;if(ue===1)P.children=$;else if(1<ue){for(var Me=Array(ue),be=0;be<ue;be++)Me[be]=arguments[be+2];P.children=Me}if(E&&E.defaultProps)for(Z in ue=E.defaultProps,ue)P[Z]===void 0&&(P[Z]=ue[Z]);return re(E,ae,P)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(E){return{$$typeof:p,render:E}},pe.isValidElement=ye,pe.lazy=function(E){return{$$typeof:b,_payload:{_status:-1,_result:E},_init:U}},pe.memo=function(E,j){return{$$typeof:g,type:E,compare:j===void 0?null:j}},pe.startTransition=function(E){var j=K.T,$={};K.T=$;try{var Z=E(),P=K.S;P!==null&&P($,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(J,I)}catch(ae){I(ae)}finally{j!==null&&$.types!==null&&(j.types=$.types),K.T=j}},pe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},pe.use=function(E){return K.H.use(E)},pe.useActionState=function(E,j,$){return K.H.useActionState(E,j,$)},pe.useCallback=function(E,j){return K.H.useCallback(E,j)},pe.useContext=function(E){return K.H.useContext(E)},pe.useDebugValue=function(){},pe.useDeferredValue=function(E,j){return K.H.useDeferredValue(E,j)},pe.useEffect=function(E,j){return K.H.useEffect(E,j)},pe.useEffectEvent=function(E){return K.H.useEffectEvent(E)},pe.useId=function(){return K.H.useId()},pe.useImperativeHandle=function(E,j,$){return K.H.useImperativeHandle(E,j,$)},pe.useInsertionEffect=function(E,j){return K.H.useInsertionEffect(E,j)},pe.useLayoutEffect=function(E,j){return K.H.useLayoutEffect(E,j)},pe.useMemo=function(E,j){return K.H.useMemo(E,j)},pe.useOptimistic=function(E,j){return K.H.useOptimistic(E,j)},pe.useReducer=function(E,j,$){return K.H.useReducer(E,j,$)},pe.useRef=function(E){return K.H.useRef(E)},pe.useState=function(E){return K.H.useState(E)},pe.useSyncExternalStore=function(E,j,$){return K.H.useSyncExternalStore(E,j,$)},pe.useTransition=function(){return K.H.useTransition()},pe.version="19.2.7",pe}var gv;function Ef(){return gv||(gv=1,dd.exports=sx()),dd.exports}var je=Ef();Array.prototype.toSorted||Object.defineProperty(Array.prototype,"toSorted",{value:function(a){return[...this].sort(a)},writable:!0,configurable:!0});function cx(a,i){return i-a}function ux(a){let i=a[0].name;const o=a.length,l=Math.min(4,o);for(let s=1;s<l;s++)i+=`, ${a[s].name}`;return i}function dx(a){let i=a[0].time;for(let o=1,l=a.length;o<l;o++)i+=a[o].time;return i}function fx(a){for(let i=0,o=a.length;i<o;i++)if(a[i].forget)return!0;return!1}var hx=a=>{let i="";const o=new Map;for(const h of a){const{forget:p,time:m,aggregatedCount:g,name:b}=h;o.has(g)||o.set(g,[]);const y=o.get(g);y&&y.push({name:b,forget:p,time:m??0})}const l=Array.from(o.keys()).sort(cx),s=[];let u=0;for(const h of l){const p=o.get(h);if(!p)continue;let m=ux(p);const g=dx(p),b=fx(p);u+=g,p.length>4&&(m+="…"),h>1&&(m+=` × ${h}`),b&&(m=`✨${m}`),s.push(m)}return i=s.join(", "),i.length?(i.length>40&&(i=`${i.slice(0,40)}…`),u>=.01&&(i+=` (${Number(u.toFixed(2))}ms)`),i):null};function Aa(a,i){return a===i||a!==a&&i!==i}var zf=a=>{const i=a.createOscillator(),o=a.createGain();i.connect(o),o.connect(a.destination);const l={type:"sine",freq:[392,600],duration:.3,gain:.12},s=l.freq,u=l.duration/s.length;s.forEach((h,p)=>{i.frequency.setValueAtTime(h,a.currentTime+p*u)}),i.type=l.type,o.gain.setValueAtTime(l.gain,a.currentTime),o.gain.setTargetAtTime(0,a.currentTime+l.duration*.7,.05),i.start(),i.stop(a.currentTime+l.duration)},px=a=>new Promise(i=>{const o=new Map,l=new IntersectionObserver(s=>{for(const u of s){const h=u.target,p=u.boundingClientRect;o.set(h,p)}l.disconnect(),i(o)});for(const s of a)l.observe(s)}),mx={mount:1,update:2,unmount:4},nt=Cf(({size:a=15,name:i,fill:o="currentColor",stroke:l="currentColor",className:s,externalURL:u="",style:h},p)=>{const m=Array.isArray(a)?a[0]:a,g=Array.isArray(a)?a[1]||a[0]:a,b=`${u}#${i}`;return f("svg",{ref:p,width:`${m}px`,height:`${g}px`,fill:o,stroke:l,className:s,style:{...h,minWidth:`${m}px`,maxWidth:`${m}px`,minHeight:`${g}px`,maxHeight:`${g}px`},children:[f("title",{children:i}),f("use",{href:b})]})}),me=24,ft={width:550,height:350,initialHeight:400},gn=240,Wn="react-scan-widget-settings-v2",ds="react-scan-widget-collapsed-v1",Qi="react-scan-widget-last-view-v1",zn=typeof window<"u";function q0(a){var i,o,l="";if(typeof a=="string"||typeof a=="number")l+=a;else if(typeof a=="object")if(Array.isArray(a)){var s=a.length;for(i=0;i<s;i++)a[i]&&(o=q0(a[i]))&&(l&&(l+=" "),l+=o)}else for(o in a)a[o]&&(l&&(l+=" "),l+=o);return l}function gx(){for(var a,i,o=0,l="",s=arguments.length;o<s;o++)(a=arguments[o])&&(i=q0(a))&&(l&&(l+=" "),l+=i);return l}var kf="-",vx=a=>{const i=bx(a),{conflictingClassGroups:o,conflictingClassGroupModifiers:l}=a;return{getClassGroupId:h=>{const p=h.split(kf);return p[0]===""&&p.length!==1&&p.shift(),V0(p,i)||yx(h)},getConflictingClassGroupIds:(h,p)=>{const m=o[h]||[];return p&&l[h]?[...m,...l[h]]:m}}},V0=(a,i)=>{if(a.length===0)return i.classGroupId;const o=a[0],l=i.nextPart.get(o),s=l?V0(a.slice(1),l):void 0;if(s)return s;if(i.validators.length===0)return;const u=a.join(kf);return i.validators.find(({validator:h})=>h(u))?.classGroupId},vv=/^\[(.+)\]$/,yx=a=>{if(vv.test(a)){const i=vv.exec(a)[1],o=i?.substring(0,i.indexOf(":"));if(o)return"arbitrary.."+o}},bx=a=>{const{theme:i,prefix:o}=a,l={nextPart:new Map,validators:[]};return xx(Object.entries(a.classGroups),o).forEach(([u,h])=>{Wd(h,l,u,i)}),l},Wd=(a,i,o,l)=>{a.forEach(s=>{if(typeof s=="string"){const u=s===""?i:yv(i,s);u.classGroupId=o;return}if(typeof s=="function"){if(wx(s)){Wd(s(l),i,o,l);return}i.validators.push({validator:s,classGroupId:o});return}Object.entries(s).forEach(([u,h])=>{Wd(h,yv(i,u),o,l)})})},yv=(a,i)=>{let o=a;return i.split(kf).forEach(l=>{o.nextPart.has(l)||o.nextPart.set(l,{nextPart:new Map,validators:[]}),o=o.nextPart.get(l)}),o},wx=a=>a.isThemeGetter,xx=(a,i)=>i?a.map(([o,l])=>{const s=l.map(u=>typeof u=="string"?i+u:typeof u=="object"?Object.fromEntries(Object.entries(u).map(([h,p])=>[i+h,p])):u);return[o,s]}):a,_x=a=>{if(a<1)return{get:()=>{},set:()=>{}};let i=0,o=new Map,l=new Map;const s=(u,h)=>{o.set(u,h),i++,i>a&&(i=0,l=o,o=new Map)};return{get(u){let h=o.get(u);if(h!==void 0)return h;if((h=l.get(u))!==void 0)return s(u,h),h},set(u,h){o.has(u)?o.set(u,h):s(u,h)}}},F0="!",Sx=a=>{const{separator:i,experimentalParseClassName:o}=a,l=i.length===1,s=i[0],u=i.length,h=p=>{const m=[];let g=0,b=0,y;for(let D=0;D<p.length;D++){let C=p[D];if(g===0){if(C===s&&(l||p.slice(D,D+u)===i)){m.push(p.slice(b,D)),b=D+u;continue}if(C==="/"){y=D;continue}}C==="["?g++:C==="]"&&g--}const x=m.length===0?p:p.substring(b),S=x.startsWith(F0),T=S?x.substring(1):x,N=y&&y>b?y-b:void 0;return{modifiers:m,hasImportantModifier:S,baseClassName:T,maybePostfixModifierPosition:N}};return o?p=>o({className:p,parseClassName:h}):h},Tx=a=>{if(a.length<=1)return a;const i=[];let o=[];return a.forEach(l=>{l[0]==="["?(i.push(...o.sort(),l),o=[]):o.push(l)}),i.push(...o.sort()),i},Cx=a=>({cache:_x(a.cacheSize),parseClassName:Sx(a),...vx(a)}),Ex=/\s+/,zx=(a,i)=>{const{parseClassName:o,getClassGroupId:l,getConflictingClassGroupIds:s}=i,u=[],h=a.trim().split(Ex);let p="";for(let m=h.length-1;m>=0;m-=1){const g=h[m],{modifiers:b,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:S}=o(g);let T=!!S,N=l(T?x.substring(0,S):x);if(!N){if(!T){p=g+(p.length>0?" "+p:p);continue}if(N=l(x),!N){p=g+(p.length>0?" "+p:p);continue}T=!1}const D=Tx(b).join(":"),C=y?D+F0:D,A=C+N;if(u.includes(A))continue;u.push(A);const Y=s(N,T);for(let F=0;F<Y.length;++F){const Q=Y[F];u.push(C+Q)}p=g+(p.length>0?" "+p:p)}return p};function kx(){let a=0,i,o,l="";for(;a<arguments.length;)(i=arguments[a++])&&(o=$0(i))&&(l&&(l+=" "),l+=o);return l}var $0=a=>{if(typeof a=="string")return a;let i,o="";for(let l=0;l<a.length;l++)a[l]&&(i=$0(a[l]))&&(o&&(o+=" "),o+=i);return o};function Nx(a,...i){let o,l,s,u=h;function h(m){const g=i.reduce((b,y)=>y(b),a());return o=Cx(g),l=o.cache.get,s=o.cache.set,u=p,p(m)}function p(m){const g=l(m);if(g)return g;const b=zx(m,o);return s(m,b),b}return function(){return u(kx.apply(null,arguments))}}var We=a=>{const i=o=>o[a]||[];return i.isThemeGetter=!0,i},G0=/^\[(?:([a-z-]+):)?(.+)\]$/i,Ax=/^\d+\/\d+$/,Mx=new Set(["px","full","screen"]),Ox=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Dx=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Rx=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Ux=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,jx=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,In=a=>tr(a)||Mx.has(a)||Ax.test(a),Ta=a=>dr(a,"length",Fx),tr=a=>!!a&&!Number.isNaN(Number(a)),fd=a=>dr(a,"number",tr),ro=a=>!!a&&Number.isInteger(Number(a)),Hx=a=>a.endsWith("%")&&tr(a.slice(0,-1)),xe=a=>G0.test(a),Ca=a=>Ox.test(a),Lx=new Set(["length","size","percentage"]),Bx=a=>dr(a,Lx,I0),Yx=a=>dr(a,"position",I0),Xx=new Set(["image","url"]),qx=a=>dr(a,Xx,Gx),Vx=a=>dr(a,"",$x),oo=()=>!0,dr=(a,i,o)=>{const l=G0.exec(a);return l?l[1]?typeof i=="string"?l[1]===i:i.has(l[1]):o(l[2]):!1},Fx=a=>Dx.test(a)&&!Rx.test(a),I0=()=>!1,$x=a=>Ux.test(a),Gx=a=>jx.test(a),Ix=()=>{const a=We("colors"),i=We("spacing"),o=We("blur"),l=We("brightness"),s=We("borderColor"),u=We("borderRadius"),h=We("borderSpacing"),p=We("borderWidth"),m=We("contrast"),g=We("grayscale"),b=We("hueRotate"),y=We("invert"),x=We("gap"),S=We("gradientColorStops"),T=We("gradientColorStopPositions"),N=We("inset"),D=We("margin"),C=We("opacity"),A=We("padding"),Y=We("saturate"),F=We("scale"),Q=We("sepia"),J=We("skew"),K=We("space"),de=We("translate"),re=()=>["auto","contain","none"],he=()=>["auto","hidden","clip","visible","scroll"],ye=()=>["auto",xe,i],le=()=>[xe,i],Ye=()=>["",In,Ta],He=()=>["auto",tr,xe],Ue=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],_=()=>["solid","dashed","dotted","double","none"],k=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],U=()=>["start","end","center","between","around","evenly","stretch"],I=()=>["","0",xe],W=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>[tr,xe];return{cacheSize:500,separator:":",theme:{colors:[oo],spacing:[In,Ta],blur:["none","",Ca,xe],brightness:E(),borderColor:[a],borderRadius:["none","","full",Ca,xe],borderSpacing:le(),borderWidth:Ye(),contrast:E(),grayscale:I(),hueRotate:E(),invert:I(),gap:le(),gradientColorStops:[a],gradientColorStopPositions:[Hx,Ta],inset:ye(),margin:ye(),opacity:E(),padding:le(),saturate:E(),scale:E(),sepia:I(),skew:E(),space:le(),translate:le()},classGroups:{aspect:[{aspect:["auto","square","video",xe]}],container:["container"],columns:[{columns:[Ca]}],"break-after":[{"break-after":W()}],"break-before":[{"break-before":W()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Ue(),xe]}],overflow:[{overflow:he()}],"overflow-x":[{"overflow-x":he()}],"overflow-y":[{"overflow-y":he()}],overscroll:[{overscroll:re()}],"overscroll-x":[{"overscroll-x":re()}],"overscroll-y":[{"overscroll-y":re()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[N]}],"inset-x":[{"inset-x":[N]}],"inset-y":[{"inset-y":[N]}],start:[{start:[N]}],end:[{end:[N]}],top:[{top:[N]}],right:[{right:[N]}],bottom:[{bottom:[N]}],left:[{left:[N]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ro,xe]}],basis:[{basis:ye()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",xe]}],grow:[{grow:I()}],shrink:[{shrink:I()}],order:[{order:["first","last","none",ro,xe]}],"grid-cols":[{"grid-cols":[oo]}],"col-start-end":[{col:["auto",{span:["full",ro,xe]},xe]}],"col-start":[{"col-start":He()}],"col-end":[{"col-end":He()}],"grid-rows":[{"grid-rows":[oo]}],"row-start-end":[{row:["auto",{span:[ro,xe]},xe]}],"row-start":[{"row-start":He()}],"row-end":[{"row-end":He()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",xe]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",xe]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...U()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...U(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...U(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[A]}],px:[{px:[A]}],py:[{py:[A]}],ps:[{ps:[A]}],pe:[{pe:[A]}],pt:[{pt:[A]}],pr:[{pr:[A]}],pb:[{pb:[A]}],pl:[{pl:[A]}],m:[{m:[D]}],mx:[{mx:[D]}],my:[{my:[D]}],ms:[{ms:[D]}],me:[{me:[D]}],mt:[{mt:[D]}],mr:[{mr:[D]}],mb:[{mb:[D]}],ml:[{ml:[D]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",xe,i]}],"min-w":[{"min-w":[xe,i,"min","max","fit"]}],"max-w":[{"max-w":[xe,i,"none","full","min","max","fit","prose",{screen:[Ca]},Ca]}],h:[{h:[xe,i,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[xe,i,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[xe,i,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[xe,i,"auto","min","max","fit"]}],"font-size":[{text:["base",Ca,Ta]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",fd]}],"font-family":[{font:[oo]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",xe]}],"line-clamp":[{"line-clamp":["none",tr,fd]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",In,xe]}],"list-image":[{"list-image":["none",xe]}],"list-style-type":[{list:["none","disc","decimal",xe]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",In,Ta]}],"underline-offset":[{"underline-offset":["auto",In,xe]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:le()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",xe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",xe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Ue(),Yx]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Bx]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},qx]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[T]}],"gradient-via-pos":[{via:[T]}],"gradient-to-pos":[{to:[T]}],"gradient-from":[{from:[S]}],"gradient-via":[{via:[S]}],"gradient-to":[{to:[S]}],rounded:[{rounded:[u]}],"rounded-s":[{"rounded-s":[u]}],"rounded-e":[{"rounded-e":[u]}],"rounded-t":[{"rounded-t":[u]}],"rounded-r":[{"rounded-r":[u]}],"rounded-b":[{"rounded-b":[u]}],"rounded-l":[{"rounded-l":[u]}],"rounded-ss":[{"rounded-ss":[u]}],"rounded-se":[{"rounded-se":[u]}],"rounded-ee":[{"rounded-ee":[u]}],"rounded-es":[{"rounded-es":[u]}],"rounded-tl":[{"rounded-tl":[u]}],"rounded-tr":[{"rounded-tr":[u]}],"rounded-br":[{"rounded-br":[u]}],"rounded-bl":[{"rounded-bl":[u]}],"border-w":[{border:[p]}],"border-w-x":[{"border-x":[p]}],"border-w-y":[{"border-y":[p]}],"border-w-s":[{"border-s":[p]}],"border-w-e":[{"border-e":[p]}],"border-w-t":[{"border-t":[p]}],"border-w-r":[{"border-r":[p]}],"border-w-b":[{"border-b":[p]}],"border-w-l":[{"border-l":[p]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[..._(),"hidden"]}],"divide-x":[{"divide-x":[p]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[p]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:_()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",..._()]}],"outline-offset":[{"outline-offset":[In,xe]}],"outline-w":[{outline:[In,Ta]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:Ye()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[In,Ta]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",Ca,Vx]}],"shadow-color":[{shadow:[oo]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...k(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":k()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[l]}],contrast:[{contrast:[m]}],"drop-shadow":[{"drop-shadow":["","none",Ca,xe]}],grayscale:[{grayscale:[g]}],"hue-rotate":[{"hue-rotate":[b]}],invert:[{invert:[y]}],saturate:[{saturate:[Y]}],sepia:[{sepia:[Q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[l]}],"backdrop-contrast":[{"backdrop-contrast":[m]}],"backdrop-grayscale":[{"backdrop-grayscale":[g]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[b]}],"backdrop-invert":[{"backdrop-invert":[y]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[Y]}],"backdrop-sepia":[{"backdrop-sepia":[Q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[h]}],"border-spacing-x":[{"border-spacing-x":[h]}],"border-spacing-y":[{"border-spacing-y":[h]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",xe]}],duration:[{duration:E()}],ease:[{ease:["linear","in","out","in-out",xe]}],delay:[{delay:E()}],animate:[{animate:["none","spin","ping","pulse","bounce",xe]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[F]}],"scale-x":[{"scale-x":[F]}],"scale-y":[{"scale-y":[F]}],rotate:[{rotate:[ro,xe]}],"translate-x":[{"translate-x":[de]}],"translate-y":[{"translate-y":[de]}],"skew-x":[{"skew-x":[J]}],"skew-y":[{"skew-y":[J]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",xe]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",xe]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":le()}],"scroll-mx":[{"scroll-mx":le()}],"scroll-my":[{"scroll-my":le()}],"scroll-ms":[{"scroll-ms":le()}],"scroll-me":[{"scroll-me":le()}],"scroll-mt":[{"scroll-mt":le()}],"scroll-mr":[{"scroll-mr":le()}],"scroll-mb":[{"scroll-mb":le()}],"scroll-ml":[{"scroll-ml":le()}],"scroll-p":[{"scroll-p":le()}],"scroll-px":[{"scroll-px":le()}],"scroll-py":[{"scroll-py":le()}],"scroll-ps":[{"scroll-ps":le()}],"scroll-pe":[{"scroll-pe":le()}],"scroll-pt":[{"scroll-pt":le()}],"scroll-pr":[{"scroll-pr":le()}],"scroll-pb":[{"scroll-pb":le()}],"scroll-pl":[{"scroll-pl":le()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",xe]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[In,Ta,fd]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Qx=Nx(Ix),O=(...a)=>Qx(gx(a));typeof navigator<"u"&&navigator.userAgent.includes("Firefox");var Q0=(a,i)=>{let o=0;return l=>{const s=Date.now();if(s-o>=i)return o=s,a(l)}},Kn=a=>{if(!zn)return null;try{const i=localStorage.getItem(a);return i?JSON.parse(i):null}catch{return null}},Lt=(a,i)=>{if(zn)try{window.localStorage.setItem(a,JSON.stringify(i))}catch{}},bv=a=>{if(zn)try{window.localStorage.removeItem(a)}catch{}},Zx=24,Wx=12,Co=a=>{if(!a)return{name:"Unknown",wrappers:[],wrapperTypes:[]};const{tag:i,type:o,elementType:l}=a;let s=bt(o);const u=[],h=[];if(_o(a)||i===Ao||i===No||o?.$$typeof===Symbol.for("react.memo")||l?.$$typeof===Symbol.for("react.memo")){const p=_o(a);h.push({type:"memo",title:p?"This component has been auto-memoized by the React Compiler.":"Memoized component that skips re-renders if props are the same",compiler:p})}if(i===Zx&&h.push({type:"lazy",title:"Lazily loaded component that supports code splitting"}),i===js&&h.push({type:"suspense",title:"Component that can suspend while content is loading"}),i===Wx&&h.push({type:"profiler",title:"Component that measures rendering performance"}),typeof s=="string"){const p=/^(\w+)\((.*)\)$/;let m=s;for(;p.test(m);){const g=m.match(p);if(g?.[1]&&g?.[2])u.unshift(g[1]),m=g[2];else break}s=m}return{name:s||"Unknown",wrappers:u,wrapperTypes:h}},Xs=ht(!1),Kd=ht(null),Tn={corner:"bottom-right",dimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:me,y:me}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:ft.width,height:ft.height,position:{x:me,y:me}},componentsTree:{width:gn}},Kx=()=>{const a=Kn(Wn);return a?{corner:a.corner??Tn.corner,dimensions:a.dimensions??Tn.dimensions,lastDimensions:a.lastDimensions??a.dimensions??Tn.lastDimensions,componentsTree:a.componentsTree??Tn.componentsTree}:(Lt(Wn,{corner:Tn.corner,dimensions:Tn.dimensions,lastDimensions:Tn.lastDimensions,componentsTree:Tn.componentsTree}),Tn)},ne=ht(Kx()),hd=()=>{if(!zn)return;const{dimensions:a}=ne.value,{width:i,height:o,position:l}=a;ne.value={...ne.value,dimensions:{isFullWidth:i>=window.innerWidth-me*2,isFullHeight:o>=window.innerHeight-me*2,width:i,height:o,position:l}}},Ie=ht({view:"none"}),Jx=Kn(ds),Zt=ht(Jx??null);function Px(){return!1}function Nf(a){function i(o){return this.shouldComponentUpdate=Px,ii(a,o)}return i.displayName=`Memo(${a.displayName||a.name})`,i.prototype.isReactComponent=!0,i._forwarded=!0,i}var e2=a=>{const{count:i,getScrollElement:o,estimateSize:l,overscan:s=5}=a,[u,h]=Se(0),[p,m]=Se(0),g=oe(),b=oe(null),y=oe(null),x=l(),S=ot(C=>{if(!b.current)return;const A=C?.[0]?.contentRect.height??b.current.getBoundingClientRect().height;m(A)},[]),T=ot(()=>{y.current!==null&&cancelAnimationFrame(y.current),y.current=requestAnimationFrame(()=>{S(),y.current=null})},[S]);_e(()=>{const C=o();if(!C)return;b.current=C;const A=()=>{b.current&&h(b.current.scrollTop)};S(),g.current||(g.current=new ResizeObserver(()=>{T()})),g.current.observe(C),C.addEventListener("scroll",A,{passive:!0});const Y=new MutationObserver(T);return Y.observe(C,{attributes:!0,childList:!0,subtree:!0}),()=>{C.removeEventListener("scroll",A),g.current&&g.current.disconnect(),Y.disconnect(),y.current!==null&&cancelAnimationFrame(y.current)}},[o,S,T]);const N=yn(()=>{const C=Math.floor(u/x),A=Math.ceil(p/x);return{start:Math.max(0,C-s),end:Math.min(i,C+A+s)}},[u,x,p,i,s]);return{virtualItems:yn(()=>{const C=[];for(let A=N.start;A<N.end;A++)C.push({key:A,index:A,start:A*x});return C},[N,x]),totalSize:i*x,scrollTop:u,containerHeight:p}};Kn("react-scann-pinned");var t2=a=>{const i=[];let o=a;for(;o;){const l=o.elementType,s=typeof l=="function"?l.displayName||l.name:typeof l=="string"?l:"Unknown",u=o.index!==void 0?`[${o.index}]`:"";i.unshift(`${s}${u}`),o=o.return??null}return i.join("::")},Wa=new WeakMap,n2=(a,i)=>{const o=i.bind(null,a);return document.addEventListener("scroll",o,{passive:!0,capture:!0}),()=>{document.removeEventListener("scroll",o,{capture:!0})}},a2={activeFlashes:new Map,create(a){const i=a.querySelector(".react-scan-flash-overlay"),o=i instanceof HTMLElement?i:(()=>{const s=document.createElement("div");s.className="react-scan-flash-overlay",a.appendChild(s);const u=n2(a,()=>{a.querySelector(".react-scan-flash-overlay")&&this.create(a)});return this.activeFlashes.set(a,{element:a,overlay:s,scrollCleanup:u}),s})(),l=Wa.get(o);l&&(clearTimeout(l),Wa.delete(o)),requestAnimationFrame(()=>{o.style.transition="none",o.style.opacity="0.9";const s=setTimeout(()=>{o.style.transition="opacity 150ms ease-out",o.style.opacity="0";const u=setTimeout(()=>{o.parentNode&&o.parentNode.removeChild(o);const h=this.activeFlashes.get(a);h?.scrollCleanup&&h.scrollCleanup(),this.activeFlashes.delete(a),Wa.delete(o)},150);Wa.set(o,u)},300);Wa.set(o,s)})},cleanup(a){const i=this.activeFlashes.get(a);if(i){const o=Wa.get(i.overlay);o&&(clearTimeout(o),Wa.delete(i.overlay)),i.overlay.parentNode&&i.overlay.parentNode.removeChild(i.overlay),i.scrollCleanup&&i.scrollCleanup(),this.activeFlashes.delete(a)}},cleanupAll(){for(const[,a]of this.activeFlashes)this.cleanup(a.element)}},wv=1e3,Z0={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},At=ht(Z0),Af=ht(0),ei=[],Ka=null,i2=()=>{if(ei.length===0)return;const a=[...ei],{updates:i,totalUpdates:o,currentIndex:l,isViewingHistory:s}=At.value,u=[...i];let h=o;for(const{update:b}of a)u.length>=wv&&u.shift(),u.push(b),h++;const p=Math.max(0,h-wv);let m;s?l===o-1?m=u.length-1:l===0?m=0:p===0?m=l:m=l-1:m=u.length-1;const g=a[a.length-1];At.value={...At.value,latestFiber:g.fiber,updates:u,totalUpdates:h,windowOffset:p,currentIndex:m,isViewingHistory:s},ei=ei.slice(a.length)},W0={showTimeline:()=>{At.value={...At.value,isVisible:!0}},hideTimeline:()=>{At.value={...At.value,isVisible:!1,currentIndex:At.value.updates.length-1}},updateFrame:(a,i)=>{At.value={...At.value,currentIndex:a,isViewingHistory:i}},updatePlaybackSpeed:a=>{At.value={...At.value,playbackSpeed:a}},addUpdate:(a,i)=>{if(ei.push({update:a,fiber:i}),!Ka){const o=()=>{i2(),Ka=null,ei.length>0&&(Ka=setTimeout(o,96))};Ka=setTimeout(o,96)}},reset:()=>{Ka&&(clearTimeout(Ka),Ka=null),ei=[],At.value=Z0}},zt=ht({query:"",matches:[],currentMatchIndex:-1}),pd=ht(!1),K0=(a,i=0,o=null)=>a.reduce((l,s,u)=>{const h=s.element?t2(s.fiber):`${o}-${u}`,p=s.fiber?.type?cy(s.fiber):void 0,m={...s,depth:i,nodeId:h,parentId:o,fiber:s.fiber,renderData:p};return l.push(m),s.children?.length&&l.push(...K0(s.children,i+1,h)),l},[]),r2=a=>a.reduce((i,o)=>Math.max(i,o.depth),0),o2=(a,i)=>{if(i<=0)return 24;const u=Math.max(0,a-gn);if(u<24)return 0;const p=Math.min(u*.3,i*24)/i;return Math.max(0,Math.min(24,p))},l2=["memo","forwardRef","lazy","suspense"],J0=a=>{const i=a.match(/\[(.*?)\]/);if(!i)return null;const o=[],l=i[1].split(",");for(const s of l){const u=s.trim().toLowerCase();u&&o.push(u)}return o},s2=a=>{if(a.length===0)return!1;for(const i of a){let o=!1;for(const l of l2)if(l.toLowerCase().includes(i)){o=!0;break}if(!o)return!1}return!0},P0=(a,i)=>{if(a.length===0)return!0;if(!i.length)return!1;for(const o of a){let l=!1;for(const s of i)if(s.type.toLowerCase().includes(o)){l=!0;break}if(!l)return!1}return!0},c2=(a,i)=>yn(()=>{const{query:o,matches:l}=i,s=l.some(g=>g.nodeId===a.nodeId),u=J0(o)||[],h=o?o.replace(/\[.*?\]/,"").trim():"";if(!o||!s)return{highlightedText:f("span",{className:"truncate",children:a.label}),typeHighlight:!1};let p=!0;if(u.length>0)if(!a.fiber)p=!1;else{const{wrapperTypes:g}=Co(a.fiber);p=P0(u,g)}let m=f("span",{className:"truncate",children:a.label});if(h)try{if(h.startsWith("/")&&h.endsWith("/")){const g=h.slice(1,-1),b=new RegExp(`(${g})`,"i"),y=a.label.split(b);m=f("span",{className:"tree-node-search-highlight",children:y.map((x,S)=>b.test(x)?f("span",{className:O("regex",{start:b.test(x)&&S===0,middle:b.test(x)&&S%2===1,end:b.test(x)&&S===y.length-1,"!ml-0":S===1}),children:x},`${a.nodeId}-${x}`):x)})}else{const g=a.label.toLowerCase(),b=h.toLowerCase(),y=g.indexOf(b);y>=0&&(m=f("span",{className:"tree-node-search-highlight",children:[a.label.slice(0,y),f("span",{className:"single",children:a.label.slice(y,y+h.length)}),a.label.slice(y+h.length)]}))}}catch{}return{highlightedText:m,typeHighlight:p&&u.length>0}},[a.label,a.nodeId,a.fiber,i]),xv=a=>a>0?a<.1-Number.EPSILON?"< 0.1":a<1e3?Number(a.toFixed(1)).toString():`${(a/1e3).toFixed(1)}k`:"0",u2=({node:a,nodeIndex:i,hasChildren:o,isCollapsed:l,handleTreeNodeClick:s,handleTreeNodeToggle:u,searchValue:h})=>{const p=oe(null),m=oe(a.renderData?.renderCount??0),{highlightedText:g,typeHighlight:b}=c2(a,h);_e(()=>{const S=a.renderData?.renderCount,T=p.current;!T||!m.current||!S||m.current===S||(T.classList.remove("count-flash"),T.offsetWidth,T.classList.add("count-flash"),m.current=S)},[a.renderData?.renderCount]);const y=yn(()=>{if(!a.renderData)return null;const{selfTime:S,totalTime:T,renderCount:N}=a.renderData;return N?f("span",{className:O("flex items-center gap-x-0.5 ml-1.5","text-[10px] text-neutral-400"),children:f("span",{ref:p,title:`Self time: ${xv(S)}ms
Total time: ${xv(T)}ms`,className:"count-badge",children:["×",N]})}):null},[a.renderData]),x=yn(()=>{if(!a.fiber)return null;const{wrapperTypes:S}=Co(a.fiber),T=S[0];return f("span",{className:O("flex items-center gap-x-1","text-[10px] text-neutral-400 tracking-wide","overflow-hidden"),children:[T&&f(Ne,{children:[f("span",{title:T?.title,className:O("rounded py-[1px] px-1","bg-neutral-700 text-neutral-300","truncate",T.type==="memo"&&"bg-[#8e61e3] text-white",b&&"bg-yellow-300 text-black"),children:T.type},T.type),T.compiler&&f("span",{className:"text-yellow-300 ml-1",children:"✨"})]}),S.length>1&&`×${S.length}`,y]})},[a.fiber,b,y]);return f("button",{type:"button",title:a.title,"data-index":i,className:O("flex items-center gap-x-1","pl-1 pr-2","w-full h-7","text-left","rounded","cursor-pointer select-none"),onClick:s,children:[f("button",{type:"button","data-index":i,onClick:u,className:O("w-6 h-6 flex items-center justify-center","text-left"),children:o&&f(nt,{name:"icon-chevron-right",size:12,className:O("transition-transform",!l&&"rotate-90")})}),g,x]})},d2=()=>{const a=oe(null),i=oe(null),o=oe(null),l=oe(null),s=oe(null),u=oe(0),h=oe(!1),p=oe(!1),m=oe(null),[g,b]=Se([]),[y,x]=Se(new Set),[S,T]=Se(void 0),[N,D]=Se(zt.value),C=yn(()=>{const _=[],k=g,U=new Map(k.map(I=>[I.nodeId,I]));for(const I of k){let W=!0,E=I;for(;E.parentId;){const j=U.get(E.parentId);if(!j)break;if(y.has(j.nodeId)){W=!1;break}E=j}W&&_.push(I)}return _},[y,g]),A=28,{virtualItems:Y,totalSize:F}=e2({count:C.length,getScrollElement:()=>a.current,estimateSize:()=>A,overscan:5}),Q=ot(_=>{h.current=!0,l.current?.blur(),pd.value=!0;const{parentCompositeFiber:k}=ti(_);if(!k)return;ee.inspectState.value={kind:"focused",focusedDomElement:_,fiber:k};const U=C.findIndex(I=>I.element===_);if(U!==-1){T(U);const I=U*A,W=a.current;if(W){const E=W.clientHeight,j=W.scrollTop;(I<j||I+A>j+E)&&W.scrollTo({top:Math.max(0,I-E/2),behavior:"instant"})}}},[C]),J=ot(_=>{const k=_.currentTarget,U=Number(k.dataset.index);if(Number.isNaN(U))return;const I=C[U].element;I&&Q(I)},[C,Q]),K=ot(_=>{x(k=>{const U=new Set(k);return U.has(_)?U.delete(_):U.add(_),U})},[]),de=ot(_=>{_.stopPropagation();const k=_.target,U=Number(k.dataset.index);if(Number.isNaN(U))return;const I=C[U].nodeId;K(I)},[C,K]),re=ot(_=>{o.current?.classList.remove("!border-red-500");const k=[];if(!_){zt.value={query:_,matches:k,currentMatchIndex:-1};return}if(_.includes("[")&&!_.includes("]")&&_.length>_.indexOf("[")+1){o.current?.classList.add("!border-red-500");return}const U=J0(_)||[];if(_.includes("[")&&!s2(U)){o.current?.classList.add("!border-red-500");return}const I=_.replace(/\[.*?\]/,"").trim(),W=/^\/.*\/$/.test(I);let E=j=>!1;if(I.startsWith("/")&&!W&&I.length>1){o.current?.classList.add("!border-red-500");return}if(W)try{const j=I.slice(1,-1),$=new RegExp(j,"i");E=Z=>$.test(Z)}catch{o.current?.classList.add("!border-red-500");return}else if(I){const j=I.toLowerCase();E=$=>$.toLowerCase().includes(j)}for(const j of g){let $=!0;if(I&&($=E(j.label)),$&&U.length>0)if(!j.fiber)$=!1;else{const{wrapperTypes:Z}=Co(j.fiber);$=P0(U,Z)}$&&k.push(j)}if(zt.value={query:_,matches:k,currentMatchIndex:k.length>0?0:-1},k.length>0){const j=k[0],$=C.findIndex(Z=>Z.nodeId===j.nodeId);if($!==-1){const Z=$*A,P=a.current;if(P){const ae=P.clientHeight;P.scrollTo({top:Math.max(0,Z-ae/2),behavior:"instant"})}}}},[g,C]),he=ot(_=>{const k=_.currentTarget;k&&re(k.value)},[re]),ye=ot(_=>{const{matches:k,currentMatchIndex:U}=zt.value;if(k.length===0)return;const I=_==="next"?(U+1)%k.length:(U-1+k.length)%k.length;zt.value={...zt.value,currentMatchIndex:I};const W=k[I],E=C.findIndex(j=>j.nodeId===W.nodeId);if(E!==-1){T(E);const j=E*A,$=a.current;if($){const Z=$.clientHeight;$.scrollTo({top:Math.max(0,j-Z/2),behavior:"instant"})}}},[C]),le=ot(_=>{if(i.current&&(i.current.style.width=`${_}px`),a.current){a.current.style.width=`${_}px`;const k=o2(_,u.current);a.current.style.setProperty("--indentation-size",`${k}px`)}},[]),Ye=ot(_=>{if(!m.current)return;const k=ne.value.dimensions.width,U=Math.floor(k-gn/2);m.current.classList.remove("cursor-ew-resize","cursor-w-resize","cursor-e-resize"),_<=gn?m.current.classList.add("cursor-w-resize"):_>=U?m.current.classList.add("cursor-e-resize"):m.current.classList.add("cursor-ew-resize")},[]),He=ot(_=>{if(_.preventDefault(),_.stopPropagation(),!a.current)return;a.current.style.setProperty("pointer-events","none"),p.current=!0;const k=_.clientX,U=a.current.offsetWidth,I=ne.value.dimensions.width,W=Math.floor(I-gn/2);Ye(U);const E=$=>{const Z=k-$.clientX,P=U+Z;Ye(P);const ae=Math.min(W,Math.max(gn,P));le(ae)},j=()=>{a.current&&(a.current.style.removeProperty("pointer-events"),document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",j),ne.value={...ne.value,componentsTree:{...ne.value.componentsTree,width:a.current.offsetWidth}},Lt(Wn,ne.value),p.current=!1)};document.addEventListener("pointermove",E),document.addEventListener("pointerup",j)},[le,Ye]);_e(()=>{if(!a.current)return;const _=a.current.offsetWidth;return Ye(_),ne.subscribe(()=>{a.current&&Ye(a.current.offsetWidth)})},[Ye]);const Ue=ot(()=>{h.current=!1},[]);return _e(()=>{let _=!0;const k=j=>{const $=new Map,Z=[];for(const{element:P,name:ae,fiber:ue}of j){if(!P)continue;let Me=ae;const{name:be,wrappers:pt}=Co(ue);be&&(pt.length>0?Me=`${pt.join("(")}(${be})${")".repeat(pt.length)}`:Me=be),$.set(P,{label:be||ae,title:Me,children:[],element:P,fiber:ue})}for(const{element:P,depth:ae}of j){if(!P)continue;const ue=$.get(P);if(ue)if(ae===0)Z.push(ue);else{let Me=P.parentElement;for(;Me;){const be=$.get(Me);if(be){be.children=be.children||[],be.children.push(ue);break}Me=Me.parentElement}}}return Z},U=()=>{const j=s.current;if(!j)return;const $=M2(),Z=k($);if(Z.length>0){const P=K0(Z),ae=r2(P);if(u.current=ae,le(ne.value.componentsTree.width),b(P),_){_=!1;const ue=P.findIndex(Me=>Me.element===j);if(ue!==-1){const Me=ue*A,be=a.current;be&&setTimeout(()=>{be.scrollTo({top:Me,behavior:"instant"})},96)}}}},I=ee.inspectState.subscribe(j=>{if(j.kind==="focused"){if(pd.value)return;re(""),s.current=j.focusedDomElement,U()}});let W=0;const E=Af.subscribe(()=>{if(ee.inspectState.value.kind==="focused"){if(cancelAnimationFrame(W),p.current)return;W=requestAnimationFrame(()=>{pd.value=!1,U()})}});return()=>{I(),E(),zt.value={query:"",matches:[],currentMatchIndex:-1}}},[]),_e(()=>{const _=k=>{if(h.current&&S)switch(k.key){case"ArrowUp":{if(k.preventDefault(),k.stopPropagation(),S>0){const U=C[S-1];U?.element&&Q(U.element)}return}case"ArrowDown":{if(k.preventDefault(),k.stopPropagation(),S<C.length-1){const U=C[S+1];U?.element&&Q(U.element)}return}case"ArrowLeft":{k.preventDefault(),k.stopPropagation();const U=C[S];U?.nodeId&&K(U.nodeId);return}case"ArrowRight":{k.preventDefault(),k.stopPropagation();const U=C[S];U?.nodeId&&K(U.nodeId);return}}};return document.addEventListener("keydown",_),()=>{document.removeEventListener("keydown",_)}},[S,C,Q,K]),_e(()=>zt.subscribe(D),[]),_e(()=>ne.subscribe(k=>{i.current?.style.setProperty("transition","width 0.1s"),le(k.componentsTree.width),setTimeout(()=>{i.current?.style.removeProperty("transition")},500)}),[]),f("div",{className:"react-scan-components-tree flex",children:[f("div",{ref:m,onPointerDown:He,className:"relative resize-v-line",children:f("span",{children:f(nt,{name:"icon-ellipsis",size:18})})}),f("div",{ref:i,className:"flex flex-col h-full",children:[f("div",{className:"p-2 border-b border-[#1e1e1e]",children:f("div",{ref:o,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:O("relative","flex items-center gap-x-1 px-2","rounded","border border-transparent","focus-within:border-[#454545]","bg-[#1e1e1e] text-neutral-300","transition-colors","whitespace-nowrap","overflow-hidden"),children:[f(nt,{name:"icon-search",size:12,className:" text-neutral-500"}),f("div",{className:"relative flex-1 h-7 overflow-hidden",children:f("input",{ref:l,type:"text",value:zt.value.query,onClick:_=>{_.stopPropagation(),_.currentTarget.focus()},onPointerDown:_=>{_.stopPropagation()},onKeyDown:_=>{_.key==="Escape"&&_.currentTarget.blur(),zt.value.matches.length&&(_.key==="Enter"&&_.shiftKey?ye("prev"):_.key==="Enter"&&(_.metaKey||_.ctrlKey?(_.preventDefault(),_.stopPropagation(),Q(zt.value.matches[zt.value.currentMatchIndex].element),_.currentTarget.focus()):ye("next")))},onChange:he,className:"absolute inset-y-0 inset-x-1",placeholder:"Component name, /regex/, or [type]"})}),zt.value.query?f(Ne,{children:[f("span",{className:"flex items-center gap-x-0.5 text-xs text-neutral-500",children:[zt.value.currentMatchIndex+1,"|",zt.value.matches.length]}),!!zt.value.matches.length&&f(Ne,{children:[f("button",{type:"button",onClick:_=>{_.stopPropagation(),ye("prev")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"-rotate-90",size:12})}),f("button",{type:"button",onClick:_=>{_.stopPropagation(),ye("next")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-chevron-right",className:"rotate-90",size:12})})]}),f("button",{type:"button",onClick:_=>{_.stopPropagation(),re("")},className:"button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300",children:f(nt,{name:"icon-close",size:12})})]}):!!g.length&&f("span",{className:"text-xs text-neutral-500",children:g.length})]})}),f("div",{className:"flex-1 overflow-hidden",children:f("div",{ref:a,onPointerLeave:Ue,className:"tree h-full overflow-auto will-change-transform",children:f("div",{className:"relative w-full",style:{height:F},children:Y.map(_=>{const k=C[_.index];if(!k)return null;const U=ee.inspectState.value.kind==="focused"&&k.element===ee.inspectState.value.focusedDomElement,I=_.index===S;return f("div",{className:O("absolute left-0 w-full overflow-hidden","text-neutral-400 hover:text-neutral-300","bg-transparent hover:bg-[#5f3f9a]/20",(U||I)&&"text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40"),style:{top:_.start,height:A},children:f("div",{className:"w-full h-full",style:{paddingLeft:`calc(${k.depth} * var(--indentation-size))`},children:f(u2,{node:k,nodeIndex:_.index,hasChildren:!!k.children?.length,isCollapsed:y.has(k.nodeId),handleTreeNodeClick:J,handleTreeNodeToggle:de,searchValue:N})})},k.nodeId)})})})})]})]})},Ss=Ys(({text:a,children:i,onCopy:o,className:l,iconSize:s=14})=>{const[u,h]=Se(!1);_e(()=>{if(u){const g=setTimeout(()=>h(!1),600);return()=>{clearTimeout(g)}}},[u]);const p=ot(g=>{g.preventDefault(),g.stopPropagation(),navigator.clipboard.writeText(a).then(()=>{h(!0),o?.(!0,a)},()=>{o?.(!1,a)})},[a,o]),m=f("button",{onClick:p,type:"button",className:O("z-10","flex items-center justify-center","hover:text-dev-pink-400","transition-colors duration-200 ease-in-out","cursor-pointer",`size-[${s}px]`,l),children:f(nt,{name:`icon-${u?"check":"copy"}`,size:[s],className:O(u&&"text-green-500")})});return i?i({ClipboardIcon:m,onClick:p}):m}),f2=({length:a,expanded:i,onToggle:o,isNegative:l})=>f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:o,className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:O("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),f("span",{children:["Array(",a,")"]})]}),Jd=({value:a,path:i,isNegative:o})=>{const[l,s]=Se(!1);if(!(a!==null&&typeof a=="object"&&!(a instanceof Date)))return f("div",{className:"flex items-center gap-1",children:[f("span",{className:"text-gray-500",children:[i,":"]}),f("span",{className:"truncate",children:zs(a)})]});const h=Object.entries(a);return f("div",{className:"flex flex-col",children:[f("div",{className:"flex items-center gap-1",children:[f("button",{type:"button",onClick:()=>s(!l),className:"flex items-center p-0 opacity-50",children:f(nt,{name:"icon-chevron-right",size:12,className:O("transition-[color,transform]",o?"text-[#f87171]":"text-[#4ade80]",l&&"rotate-90")})}),f("span",{className:"text-gray-500",children:[i,":"]}),!l&&f("span",{className:"truncate",children:a instanceof Date?zs(a):`{${Object.keys(a).join(", ")}}`})]}),l&&f("div",{className:"pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:h.map(([p,m])=>f(Jd,{value:m,path:p,isNegative:o},p))})]})},Ts=({value:a,expanded:i,onToggle:o,isNegative:l})=>{const{value:s,error:u}=R2(a);return u?f("span",{className:"text-gray-500 font-italic",children:u}):s!==null&&typeof s=="object"&&!(s instanceof Promise)?Array.isArray(s)?f("div",{className:"flex flex-col gap-1 relative",children:[f(f2,{length:s.length,expanded:i,onToggle:o,isNegative:l}),i&&f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:s.map((p,m)=>f(Jd,{value:p,path:m.toString(),isNegative:l},m.toString()))}),f(Ss,{text:Ev(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(Ne,{children:p})})]}):f("div",{className:"flex items-start gap-1 relative",children:[f("button",{type:"button",onClick:o,className:O("flex items-center","p-0 mt-0.5 mr-1","opacity-50"),children:f(nt,{name:"icon-chevron-right",size:12,className:O("transition-[color,transform]",l?"text-[#f87171]":"text-[#4ade80]",i&&"rotate-90")})}),f("div",{className:"flex-1",children:i?f("div",{className:"pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5",children:Object.entries(s).map(([p,m])=>f(Jd,{value:m,path:p,isNegative:l},p))}):f("span",{children:zs(s)})}),f(Ss,{text:Ev(s),className:"absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end",children:({ClipboardIcon:p})=>f(Ne,{children:p})})]}):f("span",{children:zs(s)})},h2=50;ht({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var Pd=a=>{switch(a.kind){case"initialized":return a.changes.currentValue;case"partially-initialized":return a.value}},_v=(a,i)=>{for(const o of a){const l=i.get(o.name);if(l){i.set(l.name,{count:l.count+1,currentValue:o.value,id:l.name,lastUpdated:Date.now(),name:l.name,previousValue:o.prevValue});continue}i.set(o.name,{count:1,currentValue:o.value,id:o.name,lastUpdated:Date.now(),name:o.name,previousValue:o.prevValue})}},p2=(a,i)=>{for(const o of a){const l=i.contextChanges.get(o.contextType);if(l){if(Aa(Pd(l),o.value))continue;if(l.kind==="partially-initialized"){i.contextChanges.set(o.contextType,{kind:"initialized",changes:{count:1,currentValue:o.value,id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,previousValue:l.value}});continue}i.contextChanges.set(o.contextType,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:o.value,id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,previousValue:l.changes.currentValue}});continue}i.contextChanges.set(o.contextType,{kind:"partially-initialized",id:o.contextType.toString(),lastUpdated:Date.now(),name:o.name,value:o.value})}},m2=a=>{const i={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return a.forEach(o=>{p2(o.contextChanges,i),_v(o.stateChanges,i.stateChanges),_v(o.propsChanges,i.propsChanges)}),i},Sv=(a,i)=>{const o=new Map;return a.forEach((l,s)=>{o.set(s,l)}),i.forEach((l,s)=>{const u=o.get(s);if(!u){o.set(s,l);return}o.set(s,{count:u.count+l.count,currentValue:l.currentValue,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:l.previousValue})}),o},g2=(a,i)=>{const o=new Map;return a.contextChanges.forEach((l,s)=>{o.set(s,l)}),i.contextChanges.forEach((l,s)=>{const u=o.get(s);if(!u){o.set(s,l);return}if(Pd(l)!==Pd(u))switch(u.kind){case"initialized":switch(l.kind){case"initialized":{o.set(s,{kind:"initialized",changes:{...l.changes,count:l.changes.count+u.changes.count+1,currentValue:l.changes.currentValue,previousValue:l.changes.previousValue}});return}case"partially-initialized":{o.set(s,{kind:"initialized",changes:{count:u.changes.count+1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:u.changes.currentValue}});return}}case"partially-initialized":switch(l.kind){case"initialized":{o.set(s,{kind:"initialized",changes:{count:l.changes.count+1,currentValue:l.changes.currentValue,id:l.changes.id,lastUpdated:l.changes.lastUpdated,name:l.changes.name,previousValue:u.value}});return}case"partially-initialized":{o.set(s,{kind:"initialized",changes:{count:1,currentValue:l.value,id:l.id,lastUpdated:l.lastUpdated,name:l.name,previousValue:u.value}});return}}}}),o},v2=(a,i)=>{const o=g2(a,i),l=Sv(a.propsChanges,i.propsChanges),s=Sv(a.stateChanges,i.stateChanges);return{contextChanges:o,propsChanges:l,stateChanges:s}},ef=a=>Array.from(a.propsChanges.values()).reduce((i,o)=>i+o.count,0)+Array.from(a.stateChanges.values()).reduce((i,o)=>i+o.count,0)+Array.from(a.contextChanges.values()).filter(i=>i.kind==="initialized").reduce((i,o)=>i+o.changes.count,0),y2=a=>{const i=oe({queue:[]}),[o,l]=Se({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),s=ee.inspectState.value.kind==="focused"?ee.inspectState.value.fiber:null,u=s?Na(s):null;return _e(()=>{const h=setInterval(()=>{i.current.queue.length!==0&&(l(p=>{const m=m2(i.current.queue),g=v2(p,m);return ef(p),ef(g),g}),i.current.queue=[])},h2);return()=>{clearInterval(h)}},[s]),_e(()=>{if(!u)return;const h=m=>{i.current?.queue.push(m)};let p=ee.changesListeners.get(u);return p||(p=[],ee.changesListeners.set(u,p)),p.push(h),()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i.current.queue=[],ee.changesListeners.set(u,ee.changesListeners.get(u)?.filter(m=>m!==h)??[])}},[u]),_e(()=>()=>{l({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i.current.queue=[]},[u]),o},Cs=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(ar(a))return{value:"Promise"};try{const i=Object.getPrototypeOf(a);return i===Promise.prototype||i?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},b2=Ys(()=>{const[a,i]=Se(!0),o=y2(),[l,s]=Se(!1),u=ef(o)>0;_e(()=>{if(!l&&u){const m=setTimeout(()=>{s(!0),requestAnimationFrame(()=>{i(!0)})},0);return()=>clearTimeout(m)}},[l,u]);const h=new Map(Array.from(o.contextChanges.entries()).filter(([,m])=>m.kind==="initialized").map(([m,g])=>[m,g.kind==="partially-initialized"?null:g.changes])),p=ee.inspectState.value.kind==="focused"?ee.inspectState.value.fiber:null;if(p)return f(Ne,{children:[f(x2,{}),f("div",{className:"overflow-hidden h-full flex flex-col gap-y-2",children:[f("div",{className:"flex flex-col gap-2 px-3 pt-2",children:[f("span",{className:"text-sm font-medium text-[#888]",children:["Why did"," ",f("span",{className:"text-[#A855F7]",children:bt(p)})," ","render?"]}),!u&&f("div",{className:"text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4",children:[f("div",{children:"No changes detected since selecting"}),f("div",{children:"The props, state, and context changes within your component will be reported here"})]})]}),f("div",{className:O("flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full"),children:[f(md,{changes:o.propsChanges,title:"Changed Props",isExpanded:a}),f(md,{renderName:m=>w2(m,bt(li(p))??"Unknown Component"),changes:o.stateChanges,title:"Changed State",isExpanded:a}),f(md,{changes:h,title:"Changed Context",isExpanded:a})]})]})]})}),w2=(a,i)=>{if(Number.isNaN(Number(a)))return a;const o=Number.parseInt(a);return f("span",{className:"truncate",children:[f("span",{className:"text-white",children:[o,(s=>{const u=s%10,h=s%100;if(h>=11&&h<=13)return"th";switch(u){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}})(o)," hook"," "]}),f("span",{style:{color:"#666"},children:["called in ",f("i",{className:"text-[#A855F7] truncate",children:i})]})]})},x2=Ys(()=>{const a=oe(null),i=oe(null),o=oe(null),l=oe({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return _e(()=>{const s=Q0(()=>{const h=[];a.current?.dataset.flash==="true"&&h.push(a.current),i.current?.dataset.flash==="true"&&h.push(i.current),o.current?.dataset.flash==="true"&&h.push(o.current);for(const p of h)p.classList.remove("count-flash-white"),p.offsetWidth,p.classList.add("count-flash-white")},400);return At.subscribe(h=>{if(!a.current||!i.current||!o.current)return;const{currentIndex:p,updates:m}=h,g=m[p];!g||p===0||(s(),l.current={isPropsChanged:(g.props?.changes?.size??0)>0,isStateChanged:(g.state?.changes?.size??0)>0,isContextChanged:(g.context?.changes?.size??0)>0},a.current.dataset.flash!=="true"&&(a.current.dataset.flash=l.current.isPropsChanged.toString()),i.current.dataset.flash!=="true"&&(i.current.dataset.flash=l.current.isStateChanged.toString()),o.current.dataset.flash!=="true"&&(o.current.dataset.flash=l.current.isContextChanged.toString()))})},[]),f("button",{type:"button",className:O("react-section-header","overflow-hidden","max-h-0","transition-[max-height]"),children:f("div",{className:O("flex-1 react-scan-expandable"),children:f("div",{className:"overflow-hidden",children:f("div",{className:"flex items-center whitespace-nowrap",children:[f("div",{className:"flex items-center gap-x-2",children:"What changed?"}),f("div",{className:O("ml-auto","change-scope","transition-opacity duration-300 delay-150"),children:[f("div",{ref:a,children:"props"}),f("div",{ref:i,children:"state"}),f("div",{ref:o,children:"context"})]})]})})})})}),_2=a=>a,md=Ys(({title:a,changes:i,renderName:o=_2})=>{const[l,s]=Se(new Set),[u,h]=Se(new Set),p=Array.from(i.entries());return i.size===0?null:f("div",{children:[f("div",{className:"text-xs text-[#888] mb-1.5",children:a}),f("div",{className:"flex flex-col gap-2",children:p.map(([m,g])=>{const b=u.has(String(m)),{value:y,error:x}=Cs(g.previousValue),{value:S,error:T}=Cs(g.currentValue),N=ay(y,S);return f("div",{children:[f("button",{onClick:()=>{h(D=>{const C=new Set(D);return C.has(String(m))?C.delete(String(m)):C.add(String(m)),C})},className:"flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs",children:f("div",{className:"flex items-center gap-1.5 flex-1",children:[f(nt,{name:"icon-chevron-right",size:12,className:O("text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]",{"rotate-90":b})}),f("div",{className:"whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5",children:[o(g.name),f(E2,{count:g.count,isFunction:typeof g.currentValue=="function",showWarning:N.changes.length===0,forceFlash:!0})]})]})}),f("div",{className:O("react-scan-expandable",{"react-scan-expanded":b}),children:f("div",{className:"pl-3 text-xs font-mono border-l-1 border-[#333]",children:f("div",{className:"flex flex-col gap-0.5",children:x||T?f(S2,{currError:T,prevError:x}):N.changes.length>0?f(T2,{change:g,diff:N,expandedFns:l,renderName:o,setExpandedFns:s,title:a}):f(C2,{currValue:S,entryKey:m,expandedFns:l,prevValue:y,setExpandedFns:s})})})})]},m)})})]})}),S2=({prevError:a,currError:i})=>f(Ne,{children:[a&&f("div",{className:"text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic",children:a}),i&&f("div",{className:"text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5",children:i})]}),T2=({diff:a,title:i,renderName:o,change:l,expandedFns:s,setExpandedFns:u})=>a.changes.map((h,p)=>{const{value:m,error:g}=Cs(h.prevValue),{value:b,error:y}=Cs(h.currentValue),x=typeof m=="function"||typeof b=="function";let S;return i==="Props"&&(S=h.path.length>0?`${o(String(l.name))}.${hn(h.path)}`:void 0),i==="State"&&h.path.length>0&&(S=`state.${hn(h.path)}`),S||(S=hn(h.path)),f("div",{className:O("flex flex-col gap-y-1",p<a.changes.length-1&&"mb-4"),children:[S&&f("div",{className:"text-[#666] text-[10px]",children:S}),f("button",{type:"button",className:O("group","flex items-start","py-[3px] px-1.5","text-left text-[#f87171] bg-[#2a1515]","rounded","overflow-hidden break-all",x&&"cursor-pointer"),onClick:x?()=>{const T=`${hn(h.path)}-prev`;u(N=>{const D=new Set(N);return D.has(T)?D.delete(T):D.add(T),D})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 whitespace-nowrap font-mono",children:g?f("span",{className:"italic text-[#f87171]",children:g}):x?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1 max-h-40",children:nf(m,s.has(`${hn(h.path)}-prev`))}),typeof m=="function"&&f(Ss,{text:m.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:T})=>f(Ne,{children:T})})]}),m?.toString()===b?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(Ts,{value:m,expanded:s.has(`${hn(h.path)}-prev`),onToggle:()=>{const T=`${hn(h.path)}-prev`;u(N=>{const D=new Set(N);return D.has(T)?D.delete(T):D.add(T),D})},isNegative:!0})})]}),f("button",{type:"button",className:O("group","flex items-start","py-[3px] px-1.5","text-left text-[#4ade80] bg-[#1a2a1a]","rounded","overflow-hidden break-all",x&&"cursor-pointer"),onClick:x?()=>{const T=`${hn(h.path)}-current`;u(N=>{const D=new Set(N);return D.has(T)?D.delete(T):D.add(T),D})}:void 0,children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 whitespace-pre-wrap font-mono",children:y?f("span",{className:"italic text-[#4ade80]",children:y}):x?f("div",{className:"flex gap-1 items-start flex-col",children:[f("div",{className:"flex gap-1 items-start w-full",children:[f("span",{className:"flex-1",children:nf(b,s.has(`${hn(h.path)}-current`))}),typeof b=="function"&&f(Ss,{text:b.toString(),className:"opacity-0 transition-opacity group-hover:opacity-100",children:({ClipboardIcon:T})=>f(Ne,{children:T})})]}),m?.toString()===b?.toString()&&f("div",{className:"text-[10px] text-[#666] italic",children:"Function reference changed"})]}):f(Ts,{value:b,expanded:s.has(`${hn(h.path)}-current`),onToggle:()=>{const T=`${hn(h.path)}-current`;u(N=>{const D=new Set(N);return D.has(T)?D.delete(T):D.add(T),D})},isNegative:!1})})]})]},`${S}-${l.name}-${p}`)}),C2=({prevValue:a,currValue:i,entryKey:o,expandedFns:l,setExpandedFns:s})=>f(Ne,{children:[f("div",{className:"group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"-"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(Ts,{value:a,expanded:l.has(`${String(o)}-prev`),onToggle:()=>{const u=`${String(o)}-prev`;s(h=>{const p=new Set(h);return p.has(u)?p.delete(u):p.add(u),p})},isNegative:!0})})]}),f("div",{className:"group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5",children:[f("span",{className:"w-3 flex items-center justify-center opacity-50",children:"+"}),f("span",{className:"flex-1 overflow-hidden whitespace-pre-wrap font-mono",children:f(Ts,{value:i,expanded:l.has(`${String(o)}-current`),onToggle:()=>{const u=`${String(o)}-current`;s(h=>{const p=new Set(h);return p.has(u)?p.delete(u):p.add(u),p})},isNegative:!1})})]}),typeof i=="object"&&i!==null&&f("div",{className:"text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1",children:[f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),f("span",{children:"Reference changed but objects are structurally the same"})]})]}),E2=({count:a,forceFlash:i,isFunction:o,showWarning:l})=>{const s=oe(!0),u=oe(null),h=oe(a);return _e(()=>{const p=u.current;!p||h.current===a||(p.classList.remove("count-flash"),p.offsetWidth,p.classList.add("count-flash"),h.current=a)},[a]),_e(()=>{if(s.current){s.current=!1;return}if(i){let p=setTimeout(()=>{u.current?.classList.add("count-flash-white"),p=setTimeout(()=>{u.current?.classList.remove("count-flash-white")},300)},500);return()=>{clearTimeout(p)}}},[i]),f("div",{ref:u,className:"count-badge",children:[l&&f(nt,{name:"icon-triangle-alert",className:"text-yellow-500 mb-px",size:14}),o&&f(nt,{name:"icon-function",className:"text-[#A855F7] mb-px",size:14}),"x",a]})},za={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{za.lastRendered.clear(),za.expandedPaths.clear(),a2.cleanupAll(),L2(),W0.reset()}},ey=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),za.cleanup()}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"p-4 bg-red-950/50 h-screen backdrop-blur-sm",children:[f("div",{className:"flex items-center gap-2 mb-3 text-red-400 font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:16}),"Something went wrong in the inspector"]}),f("div",{className:"p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2",children:"Reset Inspector"})]}):this.props.children}},z2=ci(()=>O("react-scan-inspector","flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",!Xs.value&&"opacity-100 delay-300 pointer-events-auto")),k2=Nf(()=>{const a=oe(null),i=o=>{if(!o)return;a.current=o;const{data:l,shouldUpdate:s}=Y2(o);if(s){const u={timestamp:Date.now(),fiberInfo:U2(o),props:l.fiberProps,state:l.fiberState,context:l.fiberContext,stateNames:H2(o)};W0.addUpdate(u,o)}};return To(()=>{const o=ee.inspectState.value;lr(()=>{if(o.kind!=="focused"||!o.focusedDomElement){a.current=null,za.cleanup();return}o.kind==="focused"&&(Xs.value=!1);const{parentCompositeFiber:l}=Cv(o.focusedDomElement,o.fiber);if(!l){ee.inspectState.value={kind:"inspect-off"},Ie.value={view:"none"};return}a.current?.type!==l.type&&(a.current=l,za.cleanup(),i(l))})}),To(()=>{Af.value,lr(()=>{const o=ee.inspectState.value;if(o.kind!=="focused"||!o.focusedDomElement){a.current=null,za.cleanup();return}const{parentCompositeFiber:l}=Cv(o.focusedDomElement,o.fiber);if(!l){ee.inspectState.value={kind:"inspect-off"},Ie.value={view:"none"};return}i(l),o.focusedDomElement.isConnected||(a.current=null,za.cleanup(),ee.inspectState.value={kind:"inspecting",hoveredDomElement:null})})}),_e(()=>()=>{za.cleanup()},[]),f(ey,{children:f("div",{className:z2,children:f("div",{className:"w-full h-full",children:f(b2,{})})})})}),N2=Nf(()=>ee.inspectState.value.kind!=="focused"?null:f(ey,{children:[f(k2,{}),f(d2,{})]})),ty=a=>{if("__REACT_DEVTOOLS_GLOBAL_HOOK__"in window){const i=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!i?.renderers)return null;for(const[,o]of Array.from(i.renderers))try{const l=o.findFiberByHostInstance?.(a);if(l)return l}catch{}}if("_reactRootContainer"in a)return a._reactRootContainer?._internalRoot?.current?.child??null;for(const i in a)if(i.startsWith("__reactInternalInstance$")||i.startsWith("__reactFiber"))return a[i];return null},Mf=a=>{let i=a;for(;i;){if(i.stateNode instanceof Element)return i.stateNode;if(!i.child)break;i=i.child}for(;i;){if(i.stateNode instanceof Element)return i.stateNode;if(!i.return)break;i=i.return}return null},Of=a=>{if(!a)return null;try{const i=ty(a);if(!i)return null;const o=nr(i);return o?o[0]:null}catch{return null}},nr=a=>{let i=a,o=null;for(;i;){if(Hs(i))return[i,o];xo(i)&&!o&&(o=i),i=i.return}return null},Tv=(a,i)=>!!f0(i,l=>l===a),A2=async a=>{const i=Of(a);if(!i)return null;const o=Mf(i);if(!o)return null;const l=(await px([o])).get(o);return l||null},ti=a=>{const i=Of(a);if(!i)return{};if(!Mf(i))return{};const l=nr(i);if(!l)return{};const[s]=l;return{parentCompositeFiber:s}},Cv=(a,i)=>{if(!a.isConnected)return{};let o=i??Of(a);if(!o)return{};let l=o,s=null,u=null;for(;l;){if(!l.stateNode){l=l.return;continue}if(Ae.instrumentation?.fiberRoots.has(l.stateNode)){s=l,u=l.stateNode.current;break}l=l.return}if(!s||!u)return{};if(o=Tv(o,u)?o:o.alternate??o,!o)return{};if(!Mf(o))return{};const h=nr(o)?.[0];return h?{parentCompositeFiber:Tv(h,u)?h:h.alternate??h}:{}},ny=a=>{const i=a.memoizedProps??{},o=a.alternate?.memoizedProps??{},l=[];for(const s in i){if(s==="children")continue;const u=i[s],h=o[s];Aa(u,h)||l.push({name:s,value:u,prevValue:h,type:1})}return l},tf=new Set(["HTML","HEAD","META","TITLE","BASE","SCRIPT","SCRIPT","STYLE","LINK","NOSCRIPT","SOURCE","TRACK","EMBED","OBJECT","PARAM","TEMPLATE","PORTAL","SLOT","AREA","XML","DOCTYPE","COMMENT"]),Es=(a,i=!0)=>{if(a.stateNode&&"nodeType"in a.stateNode){const l=a.stateNode;return i&&l.tagName&&tf.has(l.tagName.toLowerCase())?null:l}let o=a.child;for(;o;){const l=Es(o,i);if(l)return l;o=o.sibling}return null},M2=(a=document.body)=>{const i=[],o=s=>{if(!s)return null;const{parentCompositeFiber:u}=ti(s);return u&&Es(u)===s?s:null},l=(s,u=0)=>{const h=o(s);if(h){const{parentCompositeFiber:p}=ti(h);if(!p)return;i.push({element:h,depth:u,name:bt(p.type)??"Unknown",fiber:p})}for(const p of Array.from(s.children))l(p,h?u+1:u)};return l(a),i},Ev=a=>{try{if(a===null)return"null";if(a===void 0)return"undefined";if(ar(a))return"Promise";if(typeof a=="function"){const i=a.toString();try{return i.replace(/\s+/g," ").replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,"(").replace(/\s+\)/g,")").replace(/,\s+/g,", ")}catch{return i}}switch(!0){case a instanceof Date:return a.toISOString();case a instanceof RegExp:return a.toString();case a instanceof Error:return`${a.name}: ${a.message}`;case a instanceof Map:return JSON.stringify(Array.from(a.entries()),null,2);case a instanceof Set:return JSON.stringify(Array.from(a),null,2);case a instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(a.buffer)),null,2);case a instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(a)),null,2);case(ArrayBuffer.isView(a)&&"length"in a):return JSON.stringify(Array.from(a),null,2);case Array.isArray(a):return JSON.stringify(a,null,2);case typeof a=="object":return JSON.stringify(a,null,2);default:return String(a)}}catch{return String(a)}},O2=(a,i)=>{try{return typeof a!="function"||typeof i!="function"?!1:a.toString()===i.toString()}catch{return!1}},ay=(a,i,o=[],l=new WeakSet)=>{if(a===i)return{type:"primitive",changes:[],hasDeepChanges:!1};if(typeof a=="function"&&typeof i=="function"){const g=O2(a,i);return{type:"primitive",changes:[{path:o,prevValue:a,currentValue:i,sameFunction:g}],hasDeepChanges:!g}}if(a===null||i===null||a===void 0||i===void 0||typeof a!="object"||typeof i!="object")return{type:"primitive",changes:[{path:o,prevValue:a,currentValue:i}],hasDeepChanges:!0};if(l.has(a)||l.has(i))return{type:"object",changes:[{path:o,prevValue:"[Circular]",currentValue:"[Circular]"}],hasDeepChanges:!1};l.add(a),l.add(i);const s=a,u=i,h=new Set([...Object.keys(s),...Object.keys(u)]),p=[];let m=!1;for(const g of h){const b=s[g],y=u[g];if(b!==y)if(typeof b=="object"&&typeof y=="object"&&b!==null&&y!==null){const x=ay(b,y,[...o,g],l);p.push(...x.changes),x.hasDeepChanges&&(m=!0)}else p.push({path:[...o,g],prevValue:b,currentValue:y}),m=!0}return{type:"object",changes:p,hasDeepChanges:m}},hn=a=>a.length===0?"":a.reduce((i,o,l)=>/^\d+$/.test(o)?`${i}[${o}]`:l===0?o:`${i}.${o}`,"");function D2(a){const i=a.replace(/\s+/g," ").trim(),o=[];let l="";for(let C=0;C<i.length;C++){const A=i[C];if(A==="="&&i[C+1]===">"){l.trim()&&o.push(l.trim()),o.push("=>"),l="",C++;continue}/[(){}[\];,<>:\?!]/.test(A)?(l.trim()&&o.push(l.trim()),o.push(A),l=""):/\s/.test(A)?(l.trim()&&o.push(l.trim()),l=""):l+=A}l.trim()&&o.push(l.trim());const s=[];for(let C=0;C<o.length;C++){const A=o[C],Y=o[C+1];A==="("&&Y===")"||A==="["&&Y==="]"||A==="{"&&Y==="}"||A==="<"&&Y===">"?(s.push(A+Y),C++):s.push(A)}const u=new Set,h=new Set;function p(C,A,Y){let F=0;for(let Q=Y;Q<s.length;Q++){const J=s[Q];if(J===C)F++;else if(J===A&&(F--,F===0))return Q}return-1}for(let C=0;C<s.length;C++)if(s[C]==="("){const Y=p("(",")",C);if(Y!==-1&&s[Y+1]==="=>")for(let F=C;F<=Y;F++)u.add(F)}for(let C=1;C<s.length;C++){const A=s[C-1],Y=s[C];if(/^[a-zA-Z0-9_$]+$/.test(A)&&Y==="<"){const F=p("<",">",C);if(F!==-1)for(let Q=C;Q<=F;Q++)h.add(Q)}}let m=0;const g="  ",b=[];let y="";function x(){y.trim()&&b.push(y.replace(/\s+$/,"")),y=""}function S(){x(),y=g.repeat(m)}const T=[];function N(){return T.length?T[T.length-1]:null}function D(C,A=!1){y.trim()?A||/^[),;:\].}>]$/.test(C)?y+=C:y+=` ${C}`:y+=C}for(let C=0;C<s.length;C++){const A=s[C],Y=s[C+1]||"";if(["(","{","[","<"].includes(A)){if(D(A),T.push(A),A==="{")m++,S();else if((A==="("||A==="["||A==="<")&&!(u.has(C)&&A==="("||h.has(C)&&A==="<")){const F={"(":")","[":"]","<":">"}[A];Y!==F&&Y!=="()"&&Y!=="[]"&&Y!=="<>"&&(m++,S())}}else if([")","}","]",">"].includes(A)){const F=N();A===")"&&F==="("||A==="]"&&F==="["||A===">"&&F==="<"?!(u.has(C)&&A===")")&&!(h.has(C)&&A===">")&&(m=Math.max(m-1,0),S()):A==="}"&&F==="{"&&(m=Math.max(m-1,0),S()),T.pop(),D(A),A==="}"&&S()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(A))D(A);else if(A==="=>")D(A);else if(A===";")D(A,!0),S();else if(A===","){D(A,!0);const F=N();!(u.has(C)&&F==="(")&&!(h.has(C)&&F==="<")&&F&&["{","[","(","<"].includes(F)&&S()}else D(A)}return x(),b.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var nf=(a,i=!1)=>{try{const o=a.toString(),l=o.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!l)return"ƒ";const u=(l[1]||l[2]||"").replace(/\s+/g,"");return i?D2(o):`ƒ (${u}) => ...`}catch{return"ƒ"}},zs=a=>{if(a===null)return"null";if(a===void 0)return"undefined";if(typeof a=="string")return`"${a.length>150?`${a.slice(0,20)}...`:a}"`;if(typeof a=="number"||typeof a=="boolean")return String(a);if(typeof a=="function")return nf(a);if(Array.isArray(a))return`Array(${a.length})`;if(a instanceof Map)return`Map(${a.size})`;if(a instanceof Set)return`Set(${a.size})`;if(a instanceof Date)return a.toISOString();if(a instanceof RegExp)return a.toString();if(a instanceof Error)return`${a.name}: ${a.message}`;if(typeof a=="object"){const i=Object.keys(a);return`{${i.length>2?`${i.slice(0,2).join(", ")}, ...`:i.join(", ")}}`}return String(a)},R2=a=>{if(a==null)return{value:a};if(typeof a=="function")return{value:a};if(typeof a!="object")return{value:a};if(a instanceof Promise)return{value:"Promise"};try{const i=Object.getPrototypeOf(a);return i===Promise.prototype||i?.constructor?.name==="Promise"?{value:"Promise"}:{value:a}}catch{return{value:null,error:"Error accessing value"}}},ar=a=>!!a&&(a instanceof Promise||typeof a=="object"&&"then"in a),U2=a=>{const i=Pa(a);return{displayName:bt(a)||"Unknown",type:a.type,key:a.key,id:a.index,selfTime:i?.selfTime??null,totalTime:i?.totalTime??null}},Df=new Map,iy=new Map,Rf=new Map,af=null,j2=/\[(?<name>\w+),\s*set\w+\]/g,H2=a=>{const i=a.type?.toString?.()||"";return i?Array.from(i.matchAll(j2),o=>o.groups?.name??""):[]},L2=()=>{Df.clear(),iy.clear(),Rf.clear(),af=null},B2=a=>{const i=a.type!==af;return af=a.type,i},gd=(a,i,o,l)=>{const s=a.get(i),u=a===Df||a===Rf,h=!Aa(o,l);if(!s)return a.set(i,{count:h&&u?1:0,currentValue:o,previousValue:l,lastUpdated:Date.now()}),{hasChanged:h,count:h&&u?1:u?0:1};if(!Aa(s.currentValue,o)){const p=s.count+1;return a.set(i,{count:p,currentValue:o,previousValue:s.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:p}}return{hasChanged:!1,count:s.count}},zv=a=>{if(!a)return{};if(a.tag===Rs||a.tag===Us||a.tag===Ao||a.tag===No){let i=a.memoizedState;const o={};let l=0;for(;i;)i.queue&&i.memoizedState!==void 0&&(o[l]=i.memoizedState),i=i.next,l++;return o}return a.tag===oi?a.memoizedState||{}:{}},Uf=a=>{const i=a.memoizedProps||{},o=a.alternate?.memoizedProps||{},l={},s={},u=Object.keys(i);for(const p of u)p in i&&(l[p]=i[p],s[p]=o[p]);const h=ny(a).map(p=>({name:p.name,value:p.value,prevValue:p.prevValue}));return{current:l,prev:s,changes:h}},jf=a=>{const i=zv(a),o=a.alternate?zv(a.alternate):{},l=[];for(const[s,u]of Object.entries(i)){const h=a.tag===oi?s:Number(s);a.alternate&&!Aa(o[s],u)&&l.push({name:h,value:u,prevValue:o[s]})}return{current:i,prev:o,changes:l}},Hf=a=>{const i=Nv(a),o=a.alternate?Nv(a.alternate):new Map,l={},s={},u=[],h=new Set;for(const[p,m]of i){const g=m.displayName,b=p;if(h.has(b))continue;h.add(b),l[g]=m.value;const y=o.get(p);y&&(s[g]=y.value,Aa(y.value,m.value)||u.push({name:g,value:m.value,prevValue:y.value,contextType:p}))}return{current:l,prev:s,changes:u}},Y2=a=>{const i=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{data:{fiberProps:i(),fiberState:i(),fiberContext:i()},shouldUpdate:!1};let o=!1;const l=B2(a),s=i();if(a.memoizedProps){const{current:y,changes:x}=Uf(a);for(const[S,T]of Object.entries(y))s.current.push({name:S,value:ar(T)?{type:"promise",displayValue:"Promise"}:T});for(const S of x){const{hasChanged:T,count:N}=gd(Df,S.name,S.value,S.prevValue);T&&(o=!0,s.changes.add(S.name),s.changesCounts.set(S.name,N))}}const u=i(),{current:h,changes:p}=jf(a);for(const[y,x]of Object.entries(h)){const S=a.tag===oi?y:Number(y);u.current.push({name:S,value:x})}for(const y of p){const{hasChanged:x,count:S}=gd(iy,y.name,y.value,y.prevValue);x&&(o=!0,u.changes.add(y.name),u.changesCounts.set(y.name,S))}const m=i(),{current:g,changes:b}=Hf(a);for(const[y,x]of Object.entries(g))m.current.push({name:y,value:x});if(!l)for(const y of b){const{hasChanged:x,count:S}=gd(Rf,y.name,y.value,y.prevValue);x&&(o=!0,m.changes.add(y.name),m.changesCounts.set(y.name,S))}return!o&&!l&&(s.changes.clear(),u.changes.clear(),m.changes.clear()),{data:{fiberProps:s,fiberState:u,fiberContext:m},shouldUpdate:o||l}},kv=new WeakMap,Nv=a=>{if(!a)return new Map;const i=kv.get(a);if(i)return i;const o=new Map;let l=a;for(;l;){const s=l.dependencies;if(s?.firstContext){let u=s.firstContext;for(;u;){const h=u.memoizedValue,p=u.context?.displayName;if(o.has(h)||o.set(u.context,{value:h,displayName:p??"UnnamedContext",contextType:null}),u===u.next)break;u=u.next}}l=l.return}return kv.set(a,o),o},Av=a=>{const i=()=>({current:[],changes:new Set,changesCounts:new Map});if(!a)return{fiberProps:i(),fiberState:i(),fiberContext:i()};const o=i();if(a.memoizedProps){const{current:p,changes:m}=Uf(a);for(const[g,b]of Object.entries(p))o.current.push({name:g,value:ar(b)?{type:"promise",displayValue:"Promise"}:b});for(const g of m)o.changes.add(g.name),o.changesCounts.set(g.name,1)}const l=i();if(a.memoizedState){const{current:p,changes:m}=jf(a);for(const[g,b]of Object.entries(p))l.current.push({name:g,value:ar(b)?{type:"promise",displayValue:"Promise"}:b});for(const g of m)l.changes.add(g.name),l.changesCounts.set(g.name,1)}const s=i(),{current:u,changes:h}=Hf(a);for(const[p,m]of Object.entries(u))s.current.push({name:p,value:ar(m)?{type:"promise",displayValue:"Promise"}:m});for(const p of h)s.changes.add(p.name),s.changesCounts.set(p.name,1);return{fiberProps:o,fiberState:l,fiberContext:s}},rf=0,Mv=performance.now(),vd=0,Ov=!1,ry=()=>{vd++;const a=performance.now();a-Mv>=1e3&&(rf=vd,vd=0,Mv=a),requestAnimationFrame(ry)},oy=()=>(Ov||(Ov=!0,ry(),rf=60),rf),X2=a=>{if(!a)return[];const i=[];if(a.tag===Rs||a.tag===Us||a.tag===Ao||a.tag===No){let o=a.memoizedState,l=a.alternate?.memoizedState,s=0;for(;o;){if(o.queue&&o.memoizedState!==void 0){const u={type:2,name:s.toString(),value:o.memoizedState,prevValue:l?.memoizedState};Aa(u.prevValue,u.value)||i.push(u)}o=o.next,l=l?.next,s++}return i}if(a.tag===oi){const o={type:3,name:"state",value:a.memoizedState,prevValue:a.alternate?.memoizedState};return Aa(o.prevValue,o.value)||i.push(o),i}return i},yd=0,Dv=new WeakMap,q2=a=>{const i=Dv.get(a);return i||(yd++,Dv.set(a,yd),yd)};function V2(a,i){if(!a||!i)return;const o=a.memoizedValue,l={type:4,name:a.context.displayName??"Context.Provider",value:o,contextType:q2(a.context)};this.push(l)}var F2=a=>{const i=[];return E1(a,V2.bind(i)),i},ly=new Map,Rv=!1,bd=()=>Array.from(ly.values()),$2=16,of=new WeakMap;function sy(a){return String(Na(a))}function cy(a){const i=sy(a),o=of.get(li(a));if(o)return o.get(i)}function G2(a,i){const o=li(a.type),l=sy(a);let s=of.get(o);s||(s=new Map,of.set(o,s)),s.set(l,i)}var I2=(a,i,o,l,s)=>{const u=Date.now(),h=cy(a);if((l||s)&&(!h||u-(h.lastRenderTimestamp||0)>$2)){const p=h||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:u};p.renderCount=(p.renderCount||0)+1,p.selfTime=i||0,p.totalTime=o||0,p.lastRenderTimestamp=u,G2(a,{...p})}},Q2=(a,i)=>{const o={isPaused:ht(!Ae.options.value.enabled),fiberRoots:new WeakSet};return ly.set(a,{key:a,config:i,instrumentation:o}),Rv||(Rv=!0,R1({name:"react-scan",onActive:i.onActive,onCommitFiberRoot(l,s){o.fiberRoots.add(s);const u=bd();for(const h of u)h.config.onCommitStart();D1(s.current,(h,p)=>{const m=li(h.type);if(!m)return null;const g=bd(),b=[];for(let A=0,Y=g.length;A<Y;A++)g[A].config.isValidFiber(h)&&b.push(A);if(!b.length)return null;const y=[];if(g.some(A=>A.config.trackChanges)){const A=Uf(h).changes,Y=jf(h).changes,F=Hf(h).changes;y.push.apply(null,A.map(Q=>({type:1,name:Q.name,value:Q.value})));for(const Q of Y)h.tag===oi?y.push({type:3,name:Q.name.toString(),value:Q.value}):y.push({type:2,name:Q.name.toString(),value:Q.value});y.push.apply(null,F.map(Q=>({type:4,name:Q.name,value:Q.value,contextType:Number(Q.contextType)})))}const{selfTime:x,totalTime:S}=Pa(h),T=oy(),N={phase:mx[p],componentName:bt(m),count:1,changes:y,time:x,forget:_o(h),unnecessary:null,didCommit:pf(h),fps:T},D=y.length>0,C=z1(h).length>0;p==="update"&&I2(h,x,S,D,C);for(let A=0,Y=b.length;A<Y;A++){const F=b[A];g[F].config.onRender(h,[N])}});for(const h of u)h.config.onCommitFinish()},onPostCommitFiberRoot(){const l=bd();for(const s of l)s.config.onPostCommitFiberRoot()}})),o},Z2=a=>{const i=new Map;for(let o=0,l=a.length;o<l;o++){const s=a[o];if(!s.componentName)continue;const u=i.get(s.componentName)??[],h=hx([{aggregatedCount:1,computedKey:null,name:s.componentName,frame:null,...s,changes:{type:s.changes.reduce((g,b)=>g|b.type,0),unstable:s.changes.some(g=>g.unstable)},phase:s.phase,computedCurrent:null}]);if(!h)continue;let p=null,m=null;if(s.changes)for(let g=0,b=s.changes.length;g<b;g++){const{name:y,prevValue:x,nextValue:S,unstable:T,type:N}=s.changes[g];N===1?(p??={},m??={},p[`${T?"⚠️":""}${y} (prev)`]=x,m[`${T?"⚠️":""}${y} (next)`]=S):u.push({prev:x,next:S,type:N===4?"context":"state",unstable:T??!1})}p&&m&&u.push({prev:p,next:m,type:"props",unstable:!1}),i.set(h,u)}for(const[o,l]of Array.from(i.entries())){console.group(`%c${o}`,"background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;");for(const{type:s,prev:u,next:h,unstable:p}of l)console.log(`${s}:`,p?"⚠️":"",u,"!==",h);console.groupEnd()}},W2=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log("%c[·] %cReact Scan","font-weight:bold;color:#7a68e8;font-size:20px;","font-weight:bold;font-size:14px;"),console.log("Try React Scan Monitoring to target performance issues in production: https://react-scan.com/monitoring")},Uv=7,K2="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace",J2=.1,es=(a,i)=>Math.floor(a+(i-a)*J2),P2=4,ks=40,wd=45,xd="115,97,230";function e_(a,i){return i[0]-a[0]}function t_(a){return[...a.entries()].sort(e_)}function jv([a,i]){let o=`${i.slice(0,P2).join(", ")} ×${a}`;return o.length>ks&&(o=`${o.slice(0,ks)}…`),o}var Hv=a=>{const i=new Map;for(const{name:u,count:h}of a)i.set(u,(i.get(u)||0)+h);const o=new Map;for(const[u,h]of i){const p=o.get(h);p?p.push(u):o.set(h,[u])}const l=t_(o);let s=jv(l[0]);for(let u=1,h=l.length;u<h;u++)s+=", "+jv(l[u]);return s.length>ks?`${s.slice(0,ks)}…`:s},Lv=a=>{let i=0;for(const o of a)i+=o.width*o.height;return i},n_=(a,i)=>{for(const{id:o,name:l,count:s,x:u,y:h,width:p,height:m,didCommit:g}of i){const b={id:o,name:l,count:s,x:u,y:h,width:p,height:m,frame:0,targetX:u,targetY:h,targetWidth:p,targetHeight:m,didCommit:g},y=String(b.id),x=a.get(y);x?(x.count++,x.frame=0,x.targetX=u,x.targetY=h,x.targetWidth=p,x.targetHeight=m,x.didCommit=g):a.set(y,b)}},a_=(a,i,o)=>{for(const l of a.values()){const s=l.x-i,u=l.y-o;l.targetX=s,l.targetY=u}},i_=(a,i)=>{const o=a.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},r_=(a,i,o,l)=>{a.clearRect(0,0,i.width/o,i.height/o);const s=new Map,u=new Map;for(const m of l.values()){const{x:g,y:b,width:y,height:x,targetX:S,targetY:T,targetWidth:N,targetHeight:D,frame:C}=m;S!==g&&(m.x=es(g,S)),T!==b&&(m.y=es(b,T)),N!==y&&(m.width=es(y,N)),D!==x&&(m.height=es(x,D));const A=`${S??g},${T??b}`,Y=`${A},${N??y},${D??x}`,F=s.get(A);F?F.push(m):s.set(A,[m]);const Q=1-C/wd;m.frame++;const J=u.get(Y)||{x:g,y:b,width:y,height:x,alpha:Q};Q>J.alpha&&(J.alpha=Q),u.set(Y,J)}for(const{x:m,y:g,width:b,height:y,alpha:x}of u.values())a.strokeStyle=`rgba(${xd},${x})`,a.lineWidth=1,a.beginPath(),a.rect(m,g,b,y),a.stroke(),a.fillStyle=`rgba(${xd},${x*.1})`,a.fill();a.font=`11px ${K2}`;const h=new Map;a.textRendering="optimizeSpeed";for(const m of s.values()){const g=m[0],{x:b,y,frame:x}=g,S=1-x/wd,T=Hv(m),{width:N}=a.measureText(T);if(h.set(`${b},${y},${N},${T}`,{text:T,width:N,height:11,alpha:S,x:b,y,outlines:m}),x>wd)for(const C of m)l.delete(String(C.id))}const p=Array.from(h.entries()).sort(([m,g],[b,y])=>Lv(y.outlines)-Lv(g.outlines));for(const[m,g]of p)if(h.has(m))for(const[b,y]of h.entries()){if(m===b)continue;const{x,y:S,width:T,height:N}=g,{x:D,y:C,width:A,height:Y}=y;x+T>D&&D+A>x&&S+N>C&&C+Y>S&&(g.text=Hv(g.outlines.concat(y.outlines)),g.width=a.measureText(g.text).width,h.delete(b))}for(const m of h.values()){const{x:g,y:b,alpha:y,width:x,height:S,text:T}=m;let N=b-S-4;N<0&&(N=0),a.fillStyle=`rgba(${xd},${y})`,a.fillRect(g,N,x+4,S+4),a.fillStyle=`rgba(255,255,255,${y})`,a.fillText(T,g+2,N+S)}return l.size>0},o_='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var M=(t,i)=>Math.floor(t+(i-t)*.1);var _="115,97,230";function F(t,i){return i[0]-t[0]}function I(t){return[...t.entries()].sort(F)}function $([t,i]){let o=`${i.slice(0,4).join(", ")} \\xD7${t}`;return o.length>40&&(o=`${o.slice(0,40)}\\u2026`),o}var S=t=>{let i=new Map;for(let{name:e,count:u}of t)i.set(e,(i.get(e)||0)+u);let o=new Map;for(let[e,u]of i){let A=o.get(u);A?A.push(e):o.set(u,[e])}let h=I(o),s=$(h[0]);for(let e=1,u=h.length;e<u;e++)s+=", "+$(h[e]);return s.length>40?`${s.slice(0,40)}\\u2026`:s},X=t=>{let i=0;for(let o of t)i+=o.width*o.height;return i};var N=(t,i)=>{let o=t.getContext("2d",{alpha:!0});return o&&o.scale(i,i),o},Y=(t,i,o,h)=>{t.clearRect(0,0,i.width/o,i.height/o);let s=new Map,e=new Map;for(let n of h.values()){let{x:r,y:c,width:a,height:g,targetX:l,targetY:d,targetWidth:f,targetHeight:p,frame:O}=n;l!==r&&(n.x=M(r,l)),d!==c&&(n.y=M(c,d)),f!==a&&(n.width=M(a,f)),p!==g&&(n.height=M(g,p));let w=`${l??r},${d??c}`,y=`${w},${f??a},${p??g}`,v=s.get(w);v?v.push(n):s.set(w,[n]);let E=1-O/45;n.frame++;let x=e.get(y)||{x:r,y:c,width:a,height:g,alpha:E};E>x.alpha&&(x.alpha=E),e.set(y,x)}for(let{x:n,y:r,width:c,height:a,alpha:g}of e.values())t.strokeStyle=`rgba(${_},${g})`,t.lineWidth=1,t.beginPath(),t.rect(n,r,c,a),t.stroke(),t.fillStyle=`rgba(${_},${g*.1})`,t.fill();t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let n of s.values()){let r=n[0],{x:c,y:a,frame:g}=r,l=1-g/45,d=S(n),{width:f}=t.measureText(d),p=11;u.set(`${c},${a},${f},${d}`,{text:d,width:f,height:p,alpha:l,x:c,y:a,outlines:n});let O=a-p-4;if(O<0&&(O=0),g>45)for(let w of n)h.delete(String(w.id))}let A=Array.from(u.entries()).sort(([n,r],[c,a])=>X(a.outlines)-X(r.outlines));for(let[n,r]of A)if(u.has(n))for(let[c,a]of u.entries()){if(n===c)continue;let{x:g,y:l,width:d,height:f}=r,{x:p,y:O,width:w,height:y}=a;g+d>p&&p+w>g&&l+f>O&&O+y>l&&(r.text=S(r.outlines.concat(a.outlines)),r.width=t.measureText(r.text).width,u.delete(c))}for(let n of u.values()){let{x:r,y:c,alpha:a,width:g,height:l,text:d}=n,f=c-l-4;f<0&&(f=0),t.fillStyle=`rgba(${_},${a})`,t.fillRect(r,f,g+4,l+4),t.fillStyle=`rgba(255,255,255,${a})`,t.fillText(d,r+2,f+l)}return h.size>0};var m=null,L=null,b=1,T=new Map,C=null,R=()=>{if(!L||!m)return;Y(L,m,b,T)?C=requestAnimationFrame(R):C=null};self.onmessage=t=>{let{type:i}=t.data;if(i==="init"&&(m=t.data.canvas,b=t.data.dpr,m&&(m.width=t.data.width,m.height=t.data.height,L=N(m,b))),!(!m||!L)){if(i==="resize"){b=t.data.dpr,m.width=t.data.width*b,m.height=t.data.height*b,L.resetTransform(),L.scale(b,b),R();return}if(i==="draw-outlines"){let{data:o,names:h}=t.data,s=new Float32Array(o);for(let e=0;e<s.length;e+=7){let u=s[e+2],A=s[e+3],n=s[e+4],r=s[e+5],c=s[e+6],a={id:s[e],name:h[e/7],count:s[e+1],x:u,y:A,width:n,height:r,frame:0,targetX:u,targetY:A,targetWidth:n,targetHeight:r,didCommit:c},g=String(a.id),l=T.get(g);l?(l.count++,l.frame=0,l.targetX=u,l.targetY=A,l.targetWidth=n,l.targetHeight=r,l.didCommit=c):T.set(g,a)}C||(C=requestAnimationFrame(R));return}if(i==="scroll"){let{deltaX:o,deltaY:h}=t.data;for(let s of T.values()){let e=s.x-o,u=s.y-h;s.targetX=e,s.targetY=u}}}};})();\n',En=null,Ns=null,ni=null,sn=1,As=null,Lf=new Map,bo=new Map,er=new Set,l_=a=>{if(!Hs(a))return;const i=typeof a.type=="string"?a.type:bt(a);if(!i)return;const o=bo.get(a),l=k1(a),s=pf(a);o?o.count++:(bo.set(a,{name:i,count:1,elements:l.map(u=>u.stateNode),didCommit:s?1:0}),er.add(a))},s_=a=>{const i=a[0];if(a.length===1)return i;let o,l,s,u;for(let h=0,p=a.length;h<p;h++){const m=a[h];o=o==null?m.x:Math.min(o,m.x),l=l==null?m.y:Math.min(l,m.y),s=s==null?m.x+m.width:Math.max(s,m.x+m.width),u=u==null?m.y+m.height:Math.max(u,m.y+m.height)}return o==null||l==null||s==null||u==null?a[0]:new DOMRect(o,l,s-o,u-l)};function c_(a,i){const o=[];for(const l of a){const s=l.target;this.seenElements.has(s)||(this.seenElements.add(s),o.push(l))}o.length>0&&this.resolveNext&&(this.resolveNext(o),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(i.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var uy=async function*(a){const i={uniqueElements:new Set(a),seenElements:new Set,resolveNext:null,done:!1},o=new IntersectionObserver(c_.bind(i));for(const l of i.uniqueElements)o.observe(l);for(;!i.done;){const l=await new Promise(s=>{i.resolveNext=s});l.length>0&&(yield l)}},u_=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:ArrayBuffer,d_=async()=>{const a=[];for(const o of er){const l=bo.get(o);if(l)for(let s=0;s<l.elements.length;s++)l.elements[s]instanceof Element&&a.push(l.elements[s])}const i=new Map;for await(const o of uy(a)){for(const h of o){const p=h.target,m=h.intersectionRect;h.isIntersecting&&m.width&&m.height&&i.set(p,m)}const l=[],s=[],u=[];for(const h of er){const p=bo.get(h);if(!p)continue;const m=[];for(let g=0;g<p.elements.length;g++){const b=p.elements[g],y=i.get(b);y&&m.push(y)}m.length&&(l.push(p),s.push(s_(m)),u.push(Na(h)))}if(l.length>0){const h=new u_(l.length*Uv*4),p=new Float32Array(h),m=new Array(l.length);let g;for(let b=0,y=l.length;b<y;b++){const x=l[b],S=u[b],{x:T,y:N,width:D,height:C}=s[b],{count:A,name:Y,didCommit:F}=x;if(En){const Q=b*Uv;p[Q]=S,p[Q+1]=A,p[Q+2]=T,p[Q+3]=N,p[Q+4]=D,p[Q+5]=C,p[Q+6]=F,m[b]=Y}else g||=new Array(l.length),g[b]={id:S,name:Y,count:A,x:T,y:N,width:D,height:C,didCommit:F}}En?En.postMessage({type:"draw-outlines",data:h,names:m}):Ns&&ni&&g&&(n_(Lf,g),As||(As=requestAnimationFrame(Bf)))}}for(const o of er)bo.delete(o),er.delete(o)},Bf=()=>{if(!ni||!Ns)return;r_(ni,Ns,sn,Lf)?As=requestAnimationFrame(Bf):As=null},f_=typeof OffscreenCanvas<"u"&&typeof Worker<"u",Bv=()=>Math.min(window.devicePixelRatio||1,2),h_=()=>{p_();const a=document.createElement("div");a.setAttribute("data-react-scan","true");const i=a.attachShadow({mode:"open"}),o=document.createElement("canvas");if(o.style.position="fixed",o.style.top="0",o.style.left="0",o.style.pointerEvents="none",o.style.zIndex="2147483646",o.setAttribute("aria-hidden","true"),i.appendChild(o),!o)return null;sn=Bv(),Ns=o;const{innerWidth:l,innerHeight:s}=window;o.style.width=`${l}px`,o.style.height=`${s}px`;const u=l*sn,h=s*sn;if(o.width=u,o.height=h,f_&&!window.__REACT_SCAN_EXTENSION__)try{En=new Worker(URL.createObjectURL(new Blob([o_],{type:"application/javascript"})));const y=o.transferControlToOffscreen();En?.postMessage({type:"init",canvas:y,width:o.width,height:o.height,dpr:sn},[y])}catch(y){console.warn("Failed to initialize OffscreenCanvas worker:",y)}En||(ni=i_(o,sn));let p=!1;window.addEventListener("resize",()=>{p||(p=!0,setTimeout(()=>{const y=window.innerWidth,x=window.innerHeight;sn=Bv(),o.style.width=`${y}px`,o.style.height=`${x}px`,En?En.postMessage({type:"resize",width:y,height:x,dpr:sn}):(o.width=y*sn,o.height=x*sn,ni&&(ni.resetTransform(),ni.scale(sn,sn)),Bf()),p=!1}))});let m=window.scrollX,g=window.scrollY,b=!1;return window.addEventListener("scroll",()=>{b||(b=!0,setTimeout(()=>{const{scrollX:y,scrollY:x}=window,S=y-m,T=x-g;m=y,g=x,En?En.postMessage({type:"scroll",deltaX:S,deltaY:T}):requestAnimationFrame(a_.bind(null,Lf,S,T)),b=!1},32))}),setInterval(()=>{er.size&&requestAnimationFrame(d_)},32),i.appendChild(o),a},Yv=()=>globalThis.__REACT_SCAN_STOP__,p_=()=>{const a=document.querySelector("[data-react-scan]");a&&a.remove()},m_=a=>{if(Hs(a)&&Ae.options.value.showToolbar!==!1&&ee.inspectState.value.kind==="focused"){const i=a,{selfTime:o}=Pa(a),l=bt(a.type),s=Na(i),u=ee.reportData.get(s),h=u?.count??0,p=u?.time??0,m=[],g=ee.changesListeners.get(Na(a));if(g?.length){const y=ny(a).map(N=>({type:1,name:N.name,value:N.value,prevValue:N.prevValue,unstable:!1})),x=X2(a),T=F2(a).map(N=>({name:N.name,type:4,value:N.value,contextType:N.contextType}));g.forEach(N=>{N({propsChanges:y,stateChanges:x,contextChanges:T})})}const b={count:h+1,time:p+o||0,renders:[],displayName:l,type:li(a.type)||null,changes:m};ee.reportData.set(s,b),lf=!0}},lf=!1,Xv,g_=()=>{clearInterval(Xv),Xv=setInterval(()=>{lf&&(ee.lastReportTime.value=Date.now(),lf=!1)},50)},v_=a=>!cT.has(a.memoizedProps),y_=a=>{if(Yv())return;let i,o=!1;const l=()=>{o||(i&&cancelAnimationFrame(i),i=requestAnimationFrame(()=>{o=!0;const u=h_();u&&document.documentElement.appendChild(u),a()}))},s=Q2("react-scan-devtools-0.1.0",{onCommitStart:()=>{Ae.options.value.onCommitStart?.()},onActive:()=>{Yv()||(l(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:Ae}),g_(),W2())},onError:()=>{},isValidFiber:v_,onRender:(u,h)=>{Hs(u)&&ee.interactionListeningForRenders?.(u,h);const p=Ae.instrumentation?.isPaused.value,m=ee.inspectState.value.kind==="inspect-off"||ee.inspectState.value.kind==="uninitialized";p&&m||(p||l_(u),Ae.options.value.log&&Z2(h),ee.inspectState.value.kind==="focused"&&(Af.value=Date.now()),m||m_(u),Ae.options.value.onRender?.(u,h))},onCommitFinish:()=>{l(),Ae.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){l()},trackChanges:!1});Ae.instrumentation=s},b_=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.table {
  display: table;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.23\\2c 1\\2c 0\\.32\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.23,1,0.32,1);
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: linear;
  cursor: pointer;
}

input {
  border-style: none;
  background-color: transparent;
  background-image: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  /* [CURSOR GENERATED] Anti-blur fixes:
   * We removed will-change-transform and replaced it with these properties
   * because will-change was causing stacking context issues and inconsistent
   * text rendering. The new properties work together to force proper
   * GPU acceleration without z-index side effects:
   */
  transform: translate3d(
    0,
    0,
    0
  ); /* Forces GPU acceleration without causing stacking issues */
  backface-visibility: hidden; /* Prevents blurry text during transforms */
  perspective: 1000; /* Creates proper 3D context for crisp text */ /* Ensures consistent text rendering across browsers */
  transform-style: preserve-3d;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;

  &.react-scan-expanded {
    grid-template-rows: 1fr;
  }

  &.react-scan-expanded {
    transition-duration: 100ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    transform-origin: center;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,w_=(a,i,o=i)=>{const[l,s]=Se(a);return _e(()=>{if(a===l)return;const h=setTimeout(()=>s(a),a?i:o);return()=>clearTimeout(h)},[a,i,o]),l},x_=ci(()=>O("absolute inset-0 flex items-center gap-x-2","translate-y-0","transition-transform duration-300",Xs.value&&"-translate-y-[200%]")),__=()=>{const a=oe(null),i=oe(null),[o,l]=Se(null);To(()=>{const u=ee.inspectState.value;u.kind==="focused"&&l(u.fiber)}),To(()=>{const u=At.value;lr(()=>{if(ee.inspectState.value.kind!=="focused"||!a.current||!i.current)return;const{totalUpdates:h,currentIndex:p,updates:m,isVisible:g,windowOffset:b}=u,y=Math.max(0,h-1),x=g?`#${b+p} Re-render`:y>0?`×${y}`:"";let S;if(y>0&&p>=0&&p<m.length){const T=m[p]?.fiberInfo?.selfTime;S=T>0?T<.1-Number.EPSILON?"< 0.1ms":`${Number(T.toFixed(1))}ms`:void 0}a.current.dataset.text=x?` • ${x}`:"",i.current.dataset.text=S?` • ${S}`:""})});const s=yn(()=>{if(!o)return null;const{name:u,wrappers:h,wrapperTypes:p}=Co(o),m=h.length?`${h.join("(")}(${u})${")".repeat(h.length)}`:u??"",g=p[0];return f("span",{title:m,className:"flex items-center gap-x-1",children:[u??"Unknown",f("span",{title:g?.title,className:"flex items-center gap-x-1 text-[10px] text-purple-400",children:!!g&&f(Ne,{children:[f("span",{className:O("rounded py-[1px] px-1","truncate",g.compiler&&"bg-purple-800 text-neutral-400",!g.compiler&&"bg-neutral-700 text-neutral-300",g.type==="memo"&&"bg-[#5f3f9a] text-white"),children:g.type},g.type),g.compiler&&f("span",{className:"text-yellow-300",children:"✨"})]})}),p.length>1&&f("span",{className:"text-[10px] text-neutral-400",children:["×",p.length-1]})]})},[o]);return f("div",{className:x_,children:[s,f("div",{className:"flex items-center gap-x-2 mr-auto text-xs text-[#888]",children:[f("span",{ref:a,className:"with-data-text cursor-pointer !overflow-visible",title:"Click to toggle between rerenders and total renders"}),f("span",{ref:i,className:"with-data-text !overflow-visible"})]})]})},S_=()=>{const a=w_(ee.inspectState.value.kind==="focused",150,0),i=()=>{Ie.value={view:"none"},ee.inspectState.value={kind:"inspect-off"}};if(Ie.value.view!=="notifications")return f("div",{className:"react-scan-header",children:[f("div",{className:"relative flex-1 h-full",children:f("div",{className:O("react-scan-header-item is-visible",!a&&"!duration-0"),children:f(__,{})})}),f("button",{type:"button",title:"Close",className:"react-scan-close-button",onClick:i,children:f(nt,{name:"icon-close"})})]})},T_=({className:a,...i})=>f("div",{className:O("react-scan-toggle",a),children:[f("input",{type:"checkbox",...i}),f("div",{})]}),C_=({fps:a})=>{const i=o=>o<30?"#EF4444":o<50?"#F59E0B":"rgb(214,132,245)";return f("div",{className:O("flex items-center gap-x-1 px-2 w-full","h-6","rounded-md","font-mono leading-none","bg-[#141414]","ring-1 ring-white/[0.08]"),children:[f("div",{style:{color:i(a)},className:"text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center",children:a}),f("span",{className:"text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit",children:"FPS"})]})},E_=()=>{const[a,i]=Se(null);return _e(()=>{const o=setInterval(()=>{i(oy())},200);return()=>clearInterval(o)},[]),f("div",{className:O("flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]","whitespace-nowrap text-sm text-white"),children:a===null?f(Ne,{children:"️"}):f(C_,{fps:a})})},mn=()=>zn?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):"0",vn=a=>a(),gt=class dy extends Array{constructor(i=25){super(),this.capacity=i}push(...i){const o=super.push(...i);for(;this.length>this.capacity;)this.shift();return o}static fromArray(i,o){const l=new dy(o);return l.push(...i),l}},z_=class{constructor(a){this.subscribers=new Set,this.currentValue=a}subscribe(a){return this.subscribers.add(a),a(this.currentValue),()=>{this.subscribers.delete(a)}}setState(a){this.currentValue=a,this.subscribers.forEach(i=>i(a))}getCurrentState(){return this.currentValue}},fy=150,qv=new z_(new gt(fy)),Cn=50,k_=class{constructor(){this.channels={}}publish(a,i,o=!0){const l=this.channels[i];if(!l){if(!o)return;this.channels[i]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[i].state.push(a);return}l.state.push(a),l.callbacks.forEach(s=>s(a))}getAvailableChannels(){return gt.fromArray(Object.keys(this.channels),Cn)}subscribe(a,i,o=!1){const l=()=>(o||this.channels[a].state.forEach(u=>{i(u)}),()=>{const u=this.channels[a].callbacks.filter(h=>h!==i);this.channels[a].callbacks=gt.fromArray(u,Cn)}),s=this.channels[a];return s?(s.callbacks.push(i),l()):(this.channels[a]={callbacks:new gt(Cn),state:new gt(Cn)},this.channels[a].callbacks.push(i),l())}updateChannelState(a,i,o=!0){const l=this.channels[a];if(!l){if(!o)return;const s=new gt(Cn),u={callbacks:new gt(Cn),state:s};this.channels[a]=u,u.state=i(s);return}l.state=i(l.state)}getChannelState(a){return this.channels[a].state??new gt(Cn)}},Ms=new k_,hy={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},lo={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},N_=(a,i=hy)=>{const o=[];return i.skipProviders&&o.push(...lo.providers),i.skipHocs&&o.push(...lo.hocs),i.skipContainers&&o.push(...lo.containers),i.skipUtilities&&o.push(...lo.utilities),i.skipBoundaries&&o.push(...lo.boundaries),!o.some(l=>l.test(a))},Vv=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],A_=a=>{for(let u=0;u<Vv.length;u++)if(Vv[u].test(a))return!0;const i=!/[aeiou]/i.test(a),o=(a.match(/\d/g)?.length??0)>a.length/2,l=/^[a-z]+$/.test(a),s=/[$_]{2,}/.test(a);return Number(i)+Number(o)+Number(l)+Number(s)>=2},M_=(a,i=hy)=>{if(!a)return[];if(!bt(a.type))return[];const l=new Array;let s=a;for(;s.return;){const h=O_(s.type);h&&!A_(h)&&N_(h,i)&&h.toLowerCase()!==h&&l.push(h),s=s.return}const u=new Array(l.length);for(let h=0;h<l.length;h++)u[h]=l[l.length-h-1];return u},O_=a=>{const i=bt(a);return i?i.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,"$<inner>"):""},D_=(a,i=()=>!0)=>{let o=a;for(;o;){const l=bt(o.type);if(l&&i(l))return l;o=o.return}return null},Fv,sf="never-hidden",R_=()=>{Fv?.();const a=()=>{document.hidden&&(sf=Date.now())};document.addEventListener("visibilitychange",a),Fv=()=>{document.removeEventListener("visibilitychange",a)}},U_=a=>["pointerup","click"].includes(a)?"pointer":(a.includes("key"),["keydown","keyup"].includes(a)?"keyboard":null),_d=null,j_=a=>{R_();const i=new Map,o=new Map,l=u=>{if(!u.interactionId)return;if(u.interactionId&&u.target&&!o.has(u.interactionId)&&o.set(u.interactionId,u.target),u.target){let p=u.target;for(;p;){if(p.id==="react-scan-toolbar-root"||p.id==="react-scan-root")return;p=p.parentElement}}const h=i.get(u.interactionId);if(h)u.duration>h.latency?(h.entries=[u],h.latency=u.duration):u.duration===h.latency&&u.startTime===h.entries[0].startTime&&h.entries.push(u);else{const p=U_(u.name);if(!p)return;const m={id:u.interactionId,latency:u.duration,entries:[u],target:u.target,type:p,startTime:u.startTime,endTime:Date.now(),processingStart:u.processingStart,processingEnd:u.processingEnd,duration:u.duration,inputDelay:u.processingStart-u.startTime,processingDuration:u.processingEnd-u.processingStart,presentationDelay:u.duration-(u.processingEnd-u.startTime),timestamp:Date.now(),timeSinceTabInactive:sf==="never-hidden"?"never-hidden":Date.now()-sf,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};i.set(m.id,m),_d||(_d=requestAnimationFrame(()=>{requestAnimationFrame(()=>{a(i.get(m.id)),_d=null})}))}},s=new PerformanceObserver(u=>{const h=u.getEntries();for(let p=0,m=h.length;p<m;p++){const g=h[p];l(g)}});try{s.observe({type:"event",buffered:!0,durationThreshold:16}),s.observe({type:"first-input",buffered:!0})}catch{}return()=>s.disconnect()},H_=()=>j_(a=>{Ms.publish({kind:"entry-received",entry:a},"recording")}),fs=25,Qn=new gt(fs),L_=(a,i)=>{let o=null;for(const l of i){if(l.type!==a.type)continue;if(o===null){o=l;continue}const s=(u,h)=>Math.abs(u.startDateTime)-(h.startTime+h.timeOrigin);s(l,a)<s(o,a)&&(o=l)}return o},B_=a=>Ms.subscribe("recording",o=>{const l=o.kind==="auto-complete-race"?Qn.find(u=>u.interactionUUID===o.interactionUUID):L_(o.entry,Qn);if(!l)return;const s=l.completeInteraction(o);a(s)}),Y_=({onMicroTask:a,onRAF:i,onTimeout:o,abort:l})=>{queueMicrotask(()=>{l?.()!==!0&&a()&&requestAnimationFrame(()=>{l?.()!==!0&&i()&&setTimeout(()=>{l?.()!==!0&&o()},0)})})},X_=a=>{const i=ty(a);if(!i)return;let o=i?bt(i?.type):"N/A";return o||(o=D_(i,s=>s.length>2)??"N/A"),o?{componentPath:M_(i),childrenTree:{},componentName:o,elementFiber:i}:void 0},$v=(a,i)=>{let o=null;const l=m=>{switch(a){case"pointer":return m.phase==="start"?"pointerup":m.target instanceof HTMLInputElement||m.target instanceof HTMLSelectElement?"change":"click";case"keyboard":return m.phase==="start"?"keydown":"change"}},s={current:{kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}},u=m=>{if(m.composedPath().some(N=>N instanceof Element&&N.id==="react-scan-toolbar-root")||(Date.now()-s.current.stageStart>2e3&&(s.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a}),s.current.kind!=="uninitialized-stage"))return;const b=performance.now();i?.onStart?.(s.current.interactionUUID);const y=X_(m.target);if(!y){i?.onError?.(s.current.interactionUUID);return}const x={},S=py(x);s.current={...s.current,interactionType:a,blockingTimeStart:Date.now(),childrenTree:y.childrenTree,componentName:y.componentName,componentPath:y.componentPath,fiberRenders:x,kind:"interaction-start",interactionStartDetail:b,stopListeningForRenders:S};const T=l({phase:"end",target:m.target});document.addEventListener(T,h,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(T,h)})};document.addEventListener(l({phase:"start"}),u,{capture:!0});const h=(m,g,b)=>{if(s.current.kind!=="interaction-start"&&g===o){if(a==="pointer"&&m.target instanceof HTMLSelectElement){s.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}i?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}o=g,Y_({abort:b,onMicroTask:()=>s.current.kind==="uninitialized-stage"?!1:(s.current={...s.current,kind:"js-end-stage",jsEndDetail:performance.now()},!0),onRAF:()=>s.current.kind!=="js-end-stage"&&s.current.kind!=="raf-stage"?(i?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a},!1):(s.current={...s.current,kind:"raf-stage",rafStart:performance.now()},!0),onTimeout:()=>{if(s.current.kind!=="raf-stage"){i?.onError?.(s.current.interactionUUID),s.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:Date.now(),interactionType:a};return}const y=Date.now(),x=Object.freeze({...s.current,kind:"timeout-stage",blockingTimeEnd:y,commitEnd:performance.now()});s.current={kind:"uninitialized-stage",interactionUUID:mn(),stageStart:y,interactionType:a};let S=!1;const T=D=>{S=!0;const C=D.kind==="auto-complete-race"?D.detailedTiming.commitEnd-D.detailedTiming.interactionStartDetail:D.entry.latency,A={detailedTiming:x,latency:C,completedAt:Date.now(),flushNeeded:!0};i?.onComplete?.(x.interactionUUID,A,D);const Y=Qn.filter(F=>F.interactionUUID!==x.interactionUUID);return Qn=gt.fromArray(Y,fs),A},N={completeInteraction:T,endDateTime:Date.now(),startDateTime:x.blockingTimeStart,type:a,interactionUUID:x.interactionUUID};if(Qn.push(N),q_())setTimeout(()=>{if(S)return;T({kind:"auto-complete-race",detailedTiming:x,interactionUUID:x.interactionUUID});const D=Qn.filter(C=>C.interactionUUID!==x.interactionUUID);Qn=gt.fromArray(D,fs)},1e3);else{const D=Qn.filter(C=>C.interactionUUID!==x.interactionUUID);Qn=gt.fromArray(D,fs),T({kind:"auto-complete-race",detailedTiming:x,interactionUUID:x.interactionUUID})}}})},p=m=>{const g=mn();h(m,g,()=>g!==o)};return a==="keyboard"&&document.addEventListener("keypress",p),()=>{document.removeEventListener(l({phase:"start"}),u,{capture:!0}),document.removeEventListener("keypress",p)}},Gv=a=>f0(a,i=>{if(xo(i))return!0})?.stateNode,q_=()=>"PerformanceEventTiming"in globalThis,py=a=>{const i=o=>{const l=bt(o.type);if(!l)return;const s=a[l];if(!s){const b=new Set,y=o.return&&nr(o.return),x=y&&bt(y[0]);x&&b.add(x);const{selfTime:S,totalTime:T}=Pa(o),N=Av(o),D={current:[],changes:new Set,changesCounts:new Map},C={fiberProps:N.fiberProps||D,fiberState:N.fiberState||D,fiberContext:N.fiberContext||D};a[l]={renderCount:1,hasMemoCache:_o(o),wasFiberRenderMount:Iv(o),parents:b,selfTime:S,totalTime:T,nodeInfo:[{element:Gv(o),name:bt(o.type)??"Unknown",selfTime:Pa(o).selfTime}],changes:C};return}if(nr(o)?.[0]?.type){const b=o.return&&nr(o.return),y=b&&bt(b[0]);y&&s.parents.add(y)}const{selfTime:h,totalTime:p}=Pa(o),m=Av(o);if(!m)return;const g={current:[],changes:new Set,changesCounts:new Map};s.wasFiberRenderMount=s.wasFiberRenderMount||Iv(o),s.hasMemoCache=s.hasMemoCache||_o(o),s.changes={fiberProps:Sd(s.changes?.fiberProps||g,m.fiberProps||g),fiberState:Sd(s.changes?.fiberState||g,m.fiberState||g),fiberContext:Sd(s.changes?.fiberContext||g,m.fiberContext||g)},s.renderCount+=1,s.selfTime+=h,s.totalTime+=p,s.nodeInfo.push({element:Gv(o),name:bt(o.type)??"Unknown",selfTime:Pa(o).selfTime})};return ee.interactionListeningForRenders=i,()=>{ee.interactionListeningForRenders===i&&(ee.interactionListeningForRenders=null)}},Sd=(a,i)=>{const o={current:[...a.current],changes:new Set,changesCounts:new Map};for(const l of i.current)o.current.some(s=>s.name===l.name)||o.current.push(l);for(const l of i.changes)if(typeof l=="string"||typeof l=="number"){o.changes.add(l);const s=a.changesCounts.get(l)||0,u=i.changesCounts.get(l)||0;o.changesCounts.set(l,s+u)}return o},Iv=a=>{if(!a.alternate)return!0;const i=a.alternate,o=i&&i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0,l=a.memoizedState!=null&&a.memoizedState.element!=null&&a.memoizedState.isDehydrated!==!0;return!o&&l},V_=a=>{let i;const o=new Set,l=(g,b)=>{const y=typeof g=="function"?g(i):g;if(!Object.is(y,i)){const x=i;i=b??(typeof y!="object"||y===null)?y:Object.assign({},i,y),o.forEach(S=>S(i,x))}},s=()=>i,p={setState:l,getState:s,getInitialState:()=>m,subscribe:(g,b)=>{let y,x;b?(y=g,x=b):x=g;let S=y?y(i):void 0;const T=(N,D)=>{if(y){const C=y(N),A=y(D);Object.is(S,C)||(S=C,x(C,A))}else x(N,D)};return o.add(T),()=>o.delete(T)}},m=i=a(l,s,p);return p},my=a=>V_,ts=null;my()(a=>({state:{events:[]},actions:{addEvent:i=>{a(o=>({state:{events:[...o.state.events,i]}}))},clear:()=>{a({state:{events:[]}})}}}));var Td=200,Eo=my()((a,i)=>{const o=new Set;return{state:{events:new gt(Td)},actions:{addEvent:l=>{o.forEach(m=>m(l));const s=[...i().state.events,l],u=(m,g)=>{const b=s.find(y=>{if(y.kind!=="long-render"&&y.id!==m.id&&(m.data.startAt<=y.data.startAt&&m.data.endAt<=y.data.endAt&&m.data.endAt>=y.data.startAt||y.data.startAt<=m.data.startAt&&y.data.endAt>=m.data.startAt||m.data.startAt<=y.data.startAt&&m.data.endAt>=y.data.endAt))return!0});b&&g(b)},h=new Set;s.forEach(m=>{m.kind!=="interaction"&&u(m,()=>{h.add(m.id)})});const p=s.filter(m=>!h.has(m.id));a(()=>({state:{events:gt.fromArray(p,Td)}}))},addListener:l=>(o.add(l),()=>{o.delete(l)}),clear:()=>{a({state:{events:new gt(Td)}})}}}}),F_=()=>Q1(Eo.subscribe,Eo.getState),hs=null,ps=null,Cd=null,cf,$_=()=>{const a=i=>{cf=i.composedPath().map(o=>o.id).filter(Boolean).includes("react-scan-toolbar")};return document.addEventListener("mouseover",a),Cd=a,()=>{Cd&&document.removeEventListener("mouseover",Cd)}},G_=()=>{const a=()=>{hs=performance.now(),ps=performance.timeOrigin};return document.addEventListener("visibilitychange",a),()=>{document.removeEventListener("visibilitychange",a)}},gy=150,Ed=[];function I_(){let a,i;function o(){let s=null;ts=null,ts={},s=py(ts);const u=performance.timeOrigin,h=performance.now();return a=requestAnimationFrame(()=>{i=setTimeout(()=>{const p=performance.now(),m=p-h,g=performance.timeOrigin;Ed.push(p+g);const b=Ed.filter(T=>p+g-T<=1e3),y=b.length;Ed=b;const x=hs!==null&&ps!==null?p+g-(ps+hs)<100:null,S=cf!==null&&cf;if(m>gy&&!x&&document.visibilityState==="visible"&&!S){const T=g+p,N=h+u;Eo.getState().actions.addEvent({kind:"long-render",id:mn(),data:{endAt:T,startAt:N,meta:{fiberRenders:ts,latency:m,fps:y}}})}hs=null,ps=null,s?.(),o()},0)}),s}const l=o();return()=>{l(),cancelAnimationFrame(a),clearTimeout(i)}}var Q_=()=>{const a=H_(),i=$_(),o=G_(),l=I_(),s=async(m,g,b)=>{Eo.getState().actions.addEvent({kind:"interaction",id:mn(),data:{startAt:g.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...g,kind:b.kind}}});const y=Ms.getChannelState("recording");g.detailedTiming.stopListeningForRenders(),y.length&&Ms.updateChannelState("recording",()=>new gt(Cn))},u=$v("pointer",{onComplete:s}),h=$v("keyboard",{onComplete:s}),p=B_(m=>{qv.setState(gt.fromArray(qv.getCurrentState().concat(m),fy))});return()=>{i(),o(),l(),a(),u(),p(),h()}},zo=a=>{const i=a.filter(o=>o.length>2);return i.length===0?a.at(-1)??"Unknown":i.at(-1)},wt=a=>{switch(a.kind){case"interaction":{const{renderTime:i,otherJSTime:o,framePreparation:l,frameConstruction:s,frameDraw:u}=a;return i+o+l+s+(u??0)}case"dropped-frames":return a.otherTime+a.renderTime}},Z_=a=>a.wasFiberRenderMount||a.hasMemoCache?!1:a.changes.context.length===0&&a.changes.props.length===0&&a.changes.state.length===0,Do=a=>{const i=wt(a.timing);switch(a.kind){case"interaction":return i<200?"low":i<500?"needs-improvement":"high";case"dropped-frames":return i<50?"low":i<gy?"needs-improvement":"high"}},Wt=()=>xf(vy),vy=N0(null),yy=({size:a=24,className:i})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:O(["lucide lucide-chevron-right",i]),children:f("path",{d:"m9 18 6-6-6-6"})}),W_=({className:a="",size:i=24,events:o=[]})=>{const l=o.includes(!0),s=o.filter(p=>p).length,u=s>99?">99":s,h=l?Math.max(i*.6,14):Math.max(i*.4,6);return f("div",{className:"relative",children:[f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:`lucide lucide-bell ${a}`,children:[f("path",{d:"M10.268 21a2 2 0 0 0 3.464 0"}),f("path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"})]}),o.length>0&&s>0&&Ae.options.value.showNotificationCount&&f("div",{className:O(["absolute",l?"-top-2.5 -right-2.5":"-top-1 -right-1","rounded-full","flex items-center justify-center","text-[8px] font-medium text-white","aspect-square",l?"bg-red-500/90":"bg-purple-500/90"]),style:{width:`${h}px`,height:`${h}px`,padding:l?"0.5px":"0"},children:l&&u})]})},Os=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M18 6 6 18"}),f("path",{d:"m6 6 12 12"})]}),K_=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"}),f("path",{d:"M16 9a5 5 0 0 1 0 6"}),f("path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728"})]}),J_=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M16 9a5 5 0 0 1 .95 2.293"}),f("path",{d:"M19.364 5.636a9 9 0 0 1 1.889 9.96"}),f("path",{d:"m2 2 20 20"}),f("path",{d:"m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"}),f("path",{d:"M9.828 4.172A.686.686 0 0 1 11 4.657v.686"})]}),P_=({size:a=24,className:i})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:O(["lucide lucide-arrow-left",i]),children:[f("path",{d:"m12 19-7-7 7-7"}),f("path",{d:"M19 12H5"})]}),eS=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M14 4.1 12 6"}),f("path",{d:"m5.1 8-2.9-.8"}),f("path",{d:"m6 12-1.9 2"}),f("path",{d:"M7.2 2.2 8 5.1"}),f("path",{d:"M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"})]}),tS=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,children:[f("path",{d:"M10 8h.01"}),f("path",{d:"M12 12h.01"}),f("path",{d:"M14 8h.01"}),f("path",{d:"M16 12h.01"}),f("path",{d:"M18 8h.01"}),f("path",{d:"M6 8h.01"}),f("path",{d:"M7 16h10"}),f("path",{d:"M8 12h.01"}),f("rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"})]}),nS=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",className:a,style:{transform:"rotate(180deg)"},children:[f("circle",{cx:"12",cy:"12",r:"10"}),f("path",{d:"m4.9 4.9 14.2 14.2"})]}),aS=({className:a="",size:i=24})=>f("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:a,children:[f("polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7"}),f("polyline",{points:"16 17 22 17 22 11"})]}),by=({children:a,triggerContent:i,wrapperProps:o})=>{const[l,s]=Se("closed"),[u,h]=Se(null),[p,m]=Se({width:window.innerWidth,height:window.innerHeight}),g=oe(null),b=oe(null),y=xf(Yf),x=oe(!1);_e(()=>{const C=()=>{m({width:window.innerWidth,height:window.innerHeight}),S()};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[]);const S=()=>{if(g.current&&y){const C=g.current.getBoundingClientRect(),A=y.getBoundingClientRect(),Y=C.left+C.width/2,F=C.top,Q=new DOMRect(Y-A.left,F-A.top,C.width,C.height);h(Q)}};_e(()=>{S()},[g.current]),_e(()=>{if(l==="opening"){const C=setTimeout(()=>s("open"),120);return()=>clearTimeout(C)}else if(l==="closing"){const C=setTimeout(()=>s("closed"),120);return()=>clearTimeout(C)}},[l]),_e(()=>{const C=setInterval(()=>{!x.current&&l!=="closed"&&s("closing")},1e3);return()=>clearInterval(C)},[l]);const T=()=>{x.current=!0,S(),s("opening")},N=()=>{x.current=!1,S(),s("closing")},D=()=>{if(!u||!y)return{top:0,left:0};const C=y.getBoundingClientRect(),A=175,Y=b.current?.offsetHeight||40,F=5,Q=u.x+C.left,J=u.y+C.top;let K=Q,de=J-4;return K-A/2<F?K=F+A/2:K+A/2>p.width-F&&(K=p.width-F-A/2),de-Y<F&&(de=J+u.height+4),{top:de-C.top,left:K-C.left}};return f(Ne,{children:[y&&u&&l!=="closed"&&P1(f("div",{ref:b,className:O(["absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg","transform transition-all duration-120 ease-[cubic-bezier(0.23,1,0.32,1)]",'after:content-[""] after:absolute after:top-[100%]',"after:left-1/2 after:-translate-x-1/2","after:w-[10px] after:h-[6px]","after:border-l-[5px] after:border-l-transparent","after:border-r-[5px] after:border-r-transparent","after:border-t-[6px] after:border-t-white","pointer-events-none",l==="opening"||l==="closing"?"opacity-0 translate-y-1":"opacity-100 translate-y-0"]),style:{top:D().top+"px",left:D().left+"px",transform:"translate(-50%, -100%)",minWidth:"175px"},children:a}),y),f("div",{ref:g,onMouseEnter:T,onMouseLeave:N,...o,children:i})]})},iS=({selectedEvent:a})=>{const{notificationState:i,setNotificationState:o,setRoute:l}=Wt();return f("div",{className:O(["flex w-full justify-between items-center px-3 py-2 text-xs"]),children:[f("div",{className:O(["bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm"]),children:[f("button",{onClick:()=>{l({route:"render-visualization",routeMessage:null})},className:O(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",i.route==="render-visualization"||i.route==="render-explanation"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Ranked"}),f("button",{onClick:()=>{l({route:"other-visualization",routeMessage:null})},className:O(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",i.route==="other-visualization"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:"Overview"}),f("button",{onClick:()=>{l({route:"optimize",routeMessage:null})},className:O(["w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1",i.route==="optimize"?"text-white bg-[#7521c8] rounded-sm":"text-[#6E6E77] bg-[#18181B] rounded-sm"]),children:f("span",{children:"Prompts"})})]}),f(by,{triggerContent:f("button",{onClick:()=>{o(s=>{s.audioNotificationsOptions.enabled&&s.audioNotificationsOptions.audioContext.state!=="closed"&&s.audioNotificationsOptions.audioContext.close();const u=s.audioNotificationsOptions.enabled;localStorage.setItem("react-scan-notifications-audio",String(!u));const h=new AudioContext;return s.audioNotificationsOptions.enabled||zf(h),u&&h.close(),{...s,audioNotificationsOptions:u?{audioContext:null,enabled:!1}:{audioContext:h,enabled:!0}}})},className:"ml-auto",children:f("div",{className:O(["flex gap-x-2 justify-center items-center text-[#6E6E77]"]),children:[f("span",{children:"Alerts"}),i.audioNotificationsOptions.enabled?f(K_,{size:16,className:"text-[#6E6E77]"}):f(J_,{size:16,className:"text-[#6E6E77]"})]})}),children:f(Ne,{children:"Play a chime when a slowdown is recorded"})})]})},Zi=a=>{let i="";return a.toSorted((l,s)=>s.totalTime-l.totalTime).slice(0,30).filter(l=>l.totalTime>5).forEach(l=>{let s="";s+="Component Name:",s+=l.name,s+=`
`,s+=`Rendered: ${l.count} times
`,s+=`Sum of self times for ${l.name} is ${l.totalTime.toFixed(0)}ms
`,l.changes.props.length>0&&(s+=`Changed props for all ${l.name} instances ("name:count" pairs)
`,l.changes.props.forEach(u=>{s+=`${u.name}:${u.count}x
`})),l.changes.state.length>0&&(s+=`Changed state for all ${l.name} instances ("hook index:count" pairs)
`,l.changes.state.forEach(u=>{s+=`${u.index}:${u.count}x
`})),l.changes.context.length>0&&(s+=`Changed context for all ${l.name} instances ("context display name (if exists):count" pairs)
`,l.changes.context.forEach(u=>{s+=`${u.name}:${u.count}x
`})),i+=s,i+=`
`}),i},rS=({renderTime:a,eHandlerTimeExcludingRenders:i,toRafTime:o,commitTime:l,framePresentTime:s,formattedReactData:u})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${l.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?"":`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${u}`,oS=({interactionType:a,name:i,componentPath:o,time:l,renderTime:s,eHandlerTimeExcludingRenders:u,toRafTime:h,commitTime:p,framePresentTime:m,formattedReactData:g})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${a} on the component named ${i}. This component has the following ancestors ${o}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${l.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${s.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${u.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${h.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${p.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${m===null?"":`- how long it took from dom commit for the frame to be presented: ${m.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${g}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,lS=({renderTime:a,otherTime:i,formattedReactData:o})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time: ${i}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${o}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,sS=({renderTime:a,otherTime:i,formattedReactData:o})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${a.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${i}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${o}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,cS=({renderTime:a,otherTime:i,formattedReactData:o})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${a.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${i}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${o}`,uS=({interactionType:a,name:i,time:o,renderTime:l,eHandlerTimeExcludingRenders:s,toRafTime:u,commitTime:h,framePresentTime:p,formattedReactData:m})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${a} on a component named ${i}. This means, roughly, the component that handled the ${a} event was named ${i}.

We have a set of high level, and low level data about the performance issue.

The click took ${o.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${l.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${s.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${u.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${h.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${p===null?"":`- how long it took from dom commit for the frame to be presented: ${p.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${m}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,uf=(a,i)=>vn(()=>{switch(a){case"data":switch(i.kind){case"dropped-frames":return cS({formattedReactData:Zi(i.groupedFiberRenders),renderTime:i.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:i.timing.otherTime});case"interaction":return rS({commitTime:i.timing.frameConstruction,eHandlerTimeExcludingRenders:i.timing.otherJSTime,formattedReactData:Zi(i.groupedFiberRenders),framePresentTime:i.timing.frameDraw,renderTime:i.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),toRafTime:i.timing.framePreparation})}case"explanation":switch(i.kind){case"dropped-frames":return sS({formattedReactData:Zi(i.groupedFiberRenders),renderTime:i.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:i.timing.otherTime});case"interaction":return uS({commitTime:i.timing.frameConstruction,eHandlerTimeExcludingRenders:i.timing.otherJSTime,formattedReactData:Zi(i.groupedFiberRenders),framePresentTime:i.timing.frameDraw,interactionType:i.type,name:zo(i.componentPath),renderTime:i.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),time:wt(i.timing),toRafTime:i.timing.framePreparation})}case"fix":switch(i.kind){case"dropped-frames":return lS({formattedReactData:Zi(i.groupedFiberRenders),renderTime:i.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),otherTime:i.timing.otherTime});case"interaction":return oS({commitTime:i.timing.frameConstruction,componentPath:i.componentPath.join(">"),eHandlerTimeExcludingRenders:i.timing.otherJSTime,formattedReactData:Zi(i.groupedFiberRenders),framePresentTime:i.timing.frameDraw,interactionType:i.type,name:zo(i.componentPath),renderTime:i.groupedFiberRenders.reduce((o,l)=>o+l.totalTime,0),time:wt(i.timing),toRafTime:i.timing.framePreparation})}}}),dS=({selectedEvent:a})=>{const[i,o]=Se("fix"),[l,s]=Se(!1);return f("div",{className:O(["w-full h-full"]),children:[f("div",{className:O(["border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden"]),children:[f("div",{className:O(["bg-[#18181B] p-1 rounded-t-sm"]),children:f("div",{className:O(["flex items-center gap-x-1"]),children:[f("button",{onClick:()=>o("fix"),className:O(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",i==="fix"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Fix"}),f("button",{onClick:()=>o("explanation"),className:O(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",i==="explanation"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Explanation"}),f("button",{onClick:()=>o("data"),className:O(["flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm",i==="data"?"text-white bg-[#7521c8]":"text-[#6E6E77] hover:text-white"]),children:"Data"})]})}),f("div",{className:O(["overflow-y-auto h-full"]),children:f("pre",{className:O(["p-2 h-full","whitespace-pre-wrap break-words","text-gray-300 font-mono "]),children:uf(i,a)})})]}),f("button",{onClick:async()=>{const u=uf(i,a);await navigator.clipboard.writeText(u),s(!0),setTimeout(()=>s(!1),1e3)},className:O(["mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm","hover:text-white transition-colors duration-200","flex items-center justify-center gap-x-2 text-xs"]),children:[f("span",{children:l?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:O(["transition-transform duration-200",l&&"scale-110"]),children:l?f("path",{d:"M20 6L9 17l-5-5"}):f(Ne,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})]})},fS=(a,i)=>{switch(a.kind){case"dropped-frames":return[...i?[{name:"Total Processing Time",time:wt(a.timing),color:"bg-red-500",kind:"total-processing-time"}]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"},{name:"JavaScript, DOM updates, Draw Frame",time:a.timing.otherTime,color:"bg-[#4b4b4b]",kind:"other-frame-drop"}]];case"interaction":return[...i?[]:[{name:"Renders",time:a.timing.renderTime,color:"bg-purple-500",kind:"render"}],{name:i?"React Renders, Hooks, Other JavaScript":"JavaScript/React Hooks ",time:a.timing.otherJSTime,color:"bg-[#EFD81A]",kind:"other-javascript"},{name:"Update DOM and Draw New Frame",time:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime,color:"bg-[#1D3A66]",kind:"other-not-javascript"}]}},hS=({selectedEvent:a})=>{const[i]=Se(qs()??!1),{notificationState:o}=Wt(),[l,s]=Se(o.routeMessage?.name?[o.routeMessage.name]:[]),u=fS(a,i),h=xf(Yf);_e(()=>{if(o.routeMessage?.name){const m=h?.querySelector("#overview-scroll-container"),g=h?.querySelector(`#react-scan-overview-bar-${o.routeMessage.name}`);if(m&&g){const b=g.getBoundingClientRect().top,y=m.getBoundingClientRect().top,x=b-y;m.scrollTop=m.scrollTop+x}}},[o.route]),_e(()=>{o.route==="other-visualization"&&s(m=>o.routeMessage?.name?[o.routeMessage.name]:m)},[o.route]);const p=u.reduce((m,g)=>m+g.time,0);return f("div",{className:"rounded-sm border border-zinc-800 text-xs",children:[f("div",{className:"p-2 border-b border-zinc-800 bg-zinc-900/50",children:f("div",{className:"flex items-center justify-between",children:[f("h3",{className:"text-xs font-medium",children:"What was time spent on?"}),f("span",{className:"text-xs text-zinc-400",children:["Total: ",p.toFixed(0),"ms"]})]})}),f("div",{className:"divide-y divide-zinc-800",children:u.map(m=>{const g=l.includes(m.kind);return f("div",{id:`react-scan-overview-bar-${m.kind}`,children:[f("button",{onClick:()=>s(b=>b.includes(m.kind)?b.filter(y=>y!==m.kind):[...b,m.kind]),className:"w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors",children:f("div",{className:"flex-1",children:[f("div",{className:"flex items-center justify-between mb-2",children:[f("div",{className:"flex items-center gap-0.5",children:[f("svg",{className:`h-4 w-4 text-zinc-400 transition-transform ${g?"rotate-90":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:f("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})}),f("span",{className:"font-medium flex items-center text-left",children:m.name})]}),f("span",{className:" text-zinc-400",children:[m.time.toFixed(0),"ms"]})]}),f("div",{className:"h-1 bg-zinc-800 rounded-full overflow-hidden",children:f("div",{className:`h-full ${m.color} transition-all`,style:{width:`${m.time/p*100}%`}})})]})}),g&&f("div",{className:"bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3",children:f("p",{className:" text-zinc-400 mb-4 text-xs",children:vn(()=>{switch(a.kind){case"interaction":switch(m.kind){case"render":return f(Wi,{input:mS(a)});case"other-javascript":return f(Wi,{input:gS(a)});case"other-not-javascript":return f(Wi,{input:pS(a)})}case"dropped-frames":switch(m.kind){case"total-processing-time":return f(Wi,{input:{kind:"total-processing",data:{time:wt(a.timing)}}});case"render":return f(Ne,{children:f(Wi,{input:{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((b,y)=>y.totalTime-b.totalTime).slice(0,3).map(b=>({name:b.name,percentage:b.totalTime/wt(a.timing)}))}}})});case"other-frame-drop":return f(Wi,{input:{kind:"other"}})}}})})})]},m.kind)})})]})},pS=a=>{const i=a.groupedFiberRenders.reduce((u,h)=>u+h.count,0),o=a.timing.renderTime,l=wt(a.timing),s=o/l*100;return i>100?{kind:"high-render-count-update-dom-draw-frame",data:{count:i,percentageOfTotal:s,copyButton:f(Qv,{})}}:{kind:"update-dom-draw-frame",data:{copyButton:f(Qv,{})}}},Qv=()=>{const[a,i]=Se(!1),{notificationState:o}=Wt();return f("button",{onClick:async()=>{o.selectedEvent&&(await navigator.clipboard.writeText(uf("explanation",o.selectedEvent)),i(!0),setTimeout(()=>i(!1),1e3))},className:"bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3",children:[f("span",{children:a?"Copied!":"Copy Prompt"}),f("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:O(["transition-transform duration-200",a&&"scale-110"]),children:a?f("path",{d:"M20 6L9 17l-5-5"}):f(Ne,{children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]})})]})},mS=a=>a.timing.renderTime/wt(a.timing)>.3?{kind:"render",data:{topByTime:a.groupedFiberRenders.toSorted((i,o)=>o.totalTime-i.totalTime).slice(0,3).map(i=>({percentage:i.totalTime/wt(a.timing),name:i.name}))}}:{kind:"other"},gS=a=>{const i=a.groupedFiberRenders.reduce((o,l)=>o+l.count,0);return a.timing.otherJSTime/wt(a.timing)<.2?{kind:"js-explanation-base"}:a.groupedFiberRenders.find(o=>o.count>200)||a.groupedFiberRenders.reduce((o,l)=>o+l.count,0)>500?{kind:"high-render-count-high-js",data:{renderCount:i,topByCount:a.groupedFiberRenders.filter(o=>o.count>100).toSorted((o,l)=>l.count-o.count).slice(0,3)}}:a.timing.otherJSTime/wt(a.timing)>.3?a.timing.renderTime>.2?{kind:"js-explanation-base"}:{kind:"low-render-count-high-js",data:{renderCount:i}}:{kind:"js-explanation-base"}},Wi=({input:a})=>{switch(a.kind){case"total-processing":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be ","<=16ms"]}),f("p",{children:'To debug the issue, check the "Ranked" tab to see if there are significant component renders'}),f("p",{children:"On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build"}),f("p",{children:["To understand precisely what caused the slowdown while in production, use the ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]}),f("p",{})]});case"render":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the time it took React to run components, and internal logic to handle the output of your component."}),f("div",{className:O(["flex flex-col"]),children:[f("p",{children:"The slowest components for this time period were:"}),a.data.topByTime.map(i=>f("div",{children:[f("strong",{children:i.name}),":"," ",(i.percentage*100).toFixed(0),"% of total"]},i.name))]}),f("p",{children:'To view the render times of all your components, and what caused them to render, go to the "Ranked" tab'}),f("p",{children:'The "Ranked" tab shows the render times of every component.'}),f("p",{children:"The render times of the same components are grouped together into one bar."}),f("p",{children:"Clicking the component will show you what props, state, or context caused the component to re-render."})]});case"js-explanation-base":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of ",f("code",{children:"useEffect"}),"'s or a large number of useEffect's called, but this can also be JavaScript event handlers (",f("code",{children:"'onclick'"}),", ",f("code",{children:"'onchange'"}),") that performed expensive computation."]}),f("p",{children:"If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run."}),f("p",{children:["You should profile your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to learn exactly which functions took the longest to execute."]})]});case"high-render-count-high-js":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),a.data.renderCount===0?f(Ne,{children:[f("p",{children:"There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API"}),f("p",{children:["You should try to reproduce the slowdown while profiling your website with the",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]}):f(Ne,{children:[" ",f("p",{children:["There were ",f("strong",{children:a.data.renderCount})," renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like ",f("code",{children:"useEffects"}),"."]}),f("div",{className:O(["flex flex-col"]),children:[f("p",{children:"You should try optimizing the renders of:"}),a.data.topByCount.map(i=>f("div",{children:["- ",f("strong",{children:i.name})," (rendered ",i.count,"x)"]},i.name))]}),"and then checking if the problem still exists.",f("p",{children:["You can also try profiling your app using the"," ",f("strong",{children:"Chrome DevTools profiler"})," to see exactly what functions took the longest to execute."]})]})]});case"low-render-count-high-js":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"This is the period when JavaScript hooks and other JavaScript outside of React Renders run."}),f("p",{children:["There were only ",f("strong",{children:a.data.renderCount})," renders detected, which means either you had very expensive hooks like"," ",f("code",{children:"useEffect"}),"/",f("code",{children:"useLayoutEffect"}),", or there is other JavaScript running during this interaction that took up the majority of the time."]}),f("p",{children:["To understand precisely what caused the slowdown, use the"," ",f("strong",{children:"Chrome profiler"})," and analyze the function call times."]})]});case"high-render-count-update-dom-draw-frame":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:["During this interaction, there were"," ",f("strong",{children:a.data.count})," renders, which was"," ",f("strong",{children:[a.data.percentageOfTotal.toFixed(0),"%"]})," of the time spent processing"]}),f("p",{children:"The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame."}),f("p",{children:'You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.'}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"update-dom-draw-frame":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:"These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction."}),f("p",{children:"This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations."}),f("p",{children:"If you use an AI-based code editor, you can export the performance data collected as a prompt."}),f("p",{children:a.data.copyButton}),f("p",{children:"Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem."}),f("p",{children:'For a larger selection of prompts, try the "Prompts" tab'})]});case"other":return f("div",{className:O(["text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2"]),children:[f("p",{children:["This is the time it took to run everything other than React renders. This can be hooks like ",f("code",{children:"useEffect"}),", other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame."]}),f("p",{children:["To get a better picture of what happened, profile your app using the"," ",f("strong",{children:"Chrome profiler"})," when the performance problem arises."]})]})}},Je=null,rt=null,$e=ht({kind:"idle",current:null}),zd=null,ir=()=>{zd&&cancelAnimationFrame(zd),zd=requestAnimationFrame(()=>{if(!Je||!rt)return;rt.clearRect(0,0,Je.width,Je.height);const a="hsl(271, 76%, 53%)",i=$e.value,{alpha:o,current:l}=vn(()=>{switch(i.kind){case"transition":{const s=i.current?.alpha&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:s?s.alpha:0,current:s}}case"move-out":return{alpha:i.current?.alpha??0,current:i.current};case"idle":return{alpha:1,current:i.current}}});switch(l?.rects.forEach(s=>{rt&&(rt.shadowColor=a,rt.shadowBlur=6,rt.strokeStyle=a,rt.lineWidth=2,rt.globalAlpha=o,rt.beginPath(),rt.rect(s.left,s.top,s.width,s.height),rt.stroke(),rt.shadowBlur=0,rt.beginPath(),rt.rect(s.left,s.top,s.width,s.height),rt.stroke())}),i.kind){case"move-out":{if(i.current.alpha===0){$e.value={kind:"idle",current:null};return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-.03),ir();return}case"transition":{if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-.03),ir();return}if(i.transitionTo.alpha===1){$e.value={kind:"idle",current:i.transitionTo};return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+.03,1),ir()}case"idle":return}})},kd=null,vS=a=>{if(Je=document.createElement("canvas"),rt=Je.getContext("2d",{alpha:!0}),!rt)return null;const i=window.devicePixelRatio||1,{innerWidth:o,innerHeight:l}=window;Je.style.width=`${o}px`,Je.style.height=`${l}px`,Je.width=o*i,Je.height=l*i,Je.style.position="fixed",Je.style.left="0",Je.style.top="0",Je.style.pointerEvents="none",Je.style.zIndex="2147483600",rt.scale(i,i),a.appendChild(Je),kd&&window.removeEventListener("resize",kd);const s=()=>{if(!Je||!rt)return;const u=window.devicePixelRatio||1,{innerWidth:h,innerHeight:p}=window;Je.style.width=`${h}px`,Je.style.height=`${p}px`,Je.width=h*u,Je.height=p*u,rt.scale(u,u),ir()};return kd=s,window.addEventListener("resize",s),$e.subscribe(()=>{requestAnimationFrame(()=>{ir()})}),yS};function yS(){Je?.parentNode&&Je.parentNode.removeChild(Je),Je=null,rt=null}var mo=()=>{const a=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(a){if($e.value.kind==="transition"){$e.value={kind:"move-out",current:$e.value.current?.alpha===0?$e.value.transitionTo:$e.value.current??$e.value.transitionTo};return}$e.value={kind:"move-out",current:{alpha:0,...a}}}},bS=({selectedEvent:a})=>{const i=wt(a.timing),o=i-a.timing.renderTime,[l]=Se(qs()),u=a.groupedFiberRenders.map(g=>({event:g,kind:"render",totalTime:l?g.count:g.totalTime})),h=vn(()=>{switch(a.kind){case"dropped-frames":return a.timing.renderTime/i<.1;case"interaction":return(a.timing.otherJSTime+a.timing.renderTime)/i<.2}});a.kind==="interaction"&&!l&&u.push({kind:"other-javascript",totalTime:a.timing.otherJSTime}),h&&!l&&(a.kind==="interaction"?u.push({kind:"other-not-javascript",totalTime:wt(a.timing)-a.timing.renderTime-a.timing.otherJSTime}):u.push({kind:"other-frame-drop",totalTime:o}));const p=oe({lastCallAt:null,timer:null}),m=u.reduce((g,b)=>g+b.totalTime,0);return f("div",{className:O(["flex flex-col h-full w-full gap-y-1"]),children:[vn(()=>{if(l&&u.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No data available"}),f("p",{className:"text-x w-full text-lefts",children:"No data was collected during this period"})]});if(u.length===0)return f("div",{className:"flex flex-col items-center justify-center h-full text-zinc-400",children:[f("p",{className:"text-sm w-full text-left text-white mb-1.5",children:"No renders collected"}),f("p",{className:"text-x w-full text-lefts",children:"There were no renders during this period"})]})}),u.toSorted((g,b)=>b.totalTime-g.totalTime).map(g=>f(wy,{bars:u,bar:g,debouncedMouseEnter:p,totalBarTime:m,isProduction:l},g.kind==="render"?g.event.id:g.kind))]})},wS=a=>a.current&&a.current.alpha>0?"fading-out":"fading-in",wy=({bar:a,debouncedMouseEnter:i,totalBarTime:o,isProduction:l,bars:s,depth:u=0})=>{const{setNotificationState:h,setRoute:p}=Wt(),[m,g]=Se(!1),b=a.kind==="render"?a.event.parents.size===0:!0,y=s.filter(T=>T.kind==="render"&&a.kind==="render"?a.event.parents.has(T.event.name)&&T.event.name!==a.event.name:!1),x=a.kind==="render"?Array.from(a.event.parents).filter(T=>!s.some(N=>N.kind==="render"&&N.event.name===T)):[],S=()=>{a.kind==="render"?(h(T=>({...T,selectedFiber:a.event})),p({route:"render-explanation",routeMessage:null})):p({route:"other-visualization",routeMessage:{kind:"auto-open-overview-accordion",name:a.kind}})};return f("div",{className:"w-full",children:[f("div",{className:O(["w-full flex items-center relative text-xs min-w-0"]),children:[f("button",{onMouseLeave:()=>{i.current.timer&&clearTimeout(i.current.timer),mo()},onMouseEnter:async()=>{const T=async()=>{if(i.current.lastCallAt=Date.now(),a.kind!=="render"){const Y=$e.value.current?$e.value.current:$e.value.kind==="transition"?$e.value.transitionTo:null;if(!Y){$e.value={kind:"idle",current:null};return}$e.value={kind:"move-out",current:{alpha:0,...Y}};return}const N=$e.value,D=vn(()=>{switch(N.kind){case"transition":return N.transitionTo;case"idle":case"move-out":return N.current}}),C=[];if(N.kind==="transition"){const Y=wS(N);vn(()=>{switch(Y){case"fading-in":{$e.value={kind:"transition",current:N.transitionTo,transitionTo:{rects:C,alpha:0,name:a.event.name}};return}case"fading-out":{$e.value={kind:"transition",current:$e.value.current?{alpha:0,...$e.value.current}:null,transitionTo:{rects:C,alpha:0,name:a.event.name}};return}}})}else $e.value={kind:"transition",transitionTo:{rects:C,alpha:0,name:a.event.name},current:D?{alpha:0,...D}:null};const A=a.event.elements.filter(Y=>Y instanceof Element);for await(const Y of uy(A))Y.forEach(({boundingClientRect:F})=>{C.push(F)}),ir()};if(i.current.lastCallAt&&Date.now()-i.current.lastCallAt<200){i.current.timer&&clearTimeout(i.current.timer),i.current.timer=setTimeout(()=>{T()},200);return}T()},onClick:S,className:O(["h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative"]),children:[f("div",{style:{minWidth:"fit-content",width:`${a.totalTime/o*100}%`},className:O(["flex items-center rounded-sm text-white text-xs h-[28px] shrink-0",a.kind==="render"&&"bg-[#412162] group-hover:bg-[#5b2d89]",a.kind==="other-frame-drop"&&"bg-[#44444a] group-hover:bg-[#6a6a6a]",a.kind==="other-javascript"&&"bg-[#efd81a6b] group-hover:bg-[#efda1a2f]",a.kind==="other-not-javascript"&&"bg-[#214379d4] group-hover:bg-[#21437982]"])}),f("div",{className:O(["absolute inset-0 flex items-center px-2","min-w-0"]),children:f("div",{className:"flex items-center gap-x-2 min-w-0 w-full",children:[f("span",{className:O(["truncate"]),children:vn(()=>{switch(a.kind){case"other-frame-drop":return"JavaScript, DOM updates, Draw Frame";case"other-javascript":return"JavaScript/React Hooks";case"other-not-javascript":return"Update DOM and Draw New Frame";case"render":return a.event.name}})}),a.kind==="render"&&Z_(a.event)&&f("div",{style:{lineHeight:"10px"},className:O(["px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0"]),children:"Memoizable"})]})})]}),f("button",{onClick:()=>a.kind==="render"&&!b&&g(!m),className:O(["flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]",!b&&"hover:bg-[#0f0f0f]",a.kind==="render"&&!b?"cursor-pointer":"cursor-default"]),children:[f("div",{className:"w-[20px] flex items-center justify-center",children:a.kind==="render"&&!b&&f(yy,{className:O("transition-transform",m&&"rotate-90"),size:16})}),f("div",{style:{minWidth:b?"fit-content":l?"30px":"60px"},className:"flex items-center justify-end gap-x-1",children:[a.kind==="render"&&f("span",{className:O(["text-[10px]"]),children:["x",a.event.count]}),(a.kind!=="render"||!l)&&f("span",{className:"text-[10px] text-[#7346a0] pr-1",children:[a.totalTime<1?"<1":a.totalTime.toFixed(0),"ms"]})]})]}),u===0&&f("div",{className:O(["absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16","pointer-events-none"]),children:"Click to learn more"})]}),m&&(y.length>0||x.length>0)&&f("div",{className:"pl-3 flex flex-col gap-y-1 mt-1",children:[y.toSorted((T,N)=>N.totalTime-T.totalTime).map((T,N)=>f(wy,{depth:u+1,bar:T,debouncedMouseEnter:i,totalBarTime:o,isProduction:l,bars:s},N)),x.map(T=>f("div",{className:"w-full",children:f("div",{className:"w-full flex items-center relative text-xs",children:f("div",{className:"h-full w-full flex items-center relative",children:[f("div",{className:"flex items-center rounded-sm text-white text-xs h-[28px] w-full"}),f("div",{className:"absolute inset-0 flex items-center px-2",children:f("span",{className:"truncate whitespace-nowrap text-white/70 w-full",children:T})})]})})},T))]})]})},xS=({selectedEvent:a,selectedFiber:i})=>{const{setRoute:o}=Wt(),[l,s]=Se(!0),[u]=Se(qs());wf(()=>{const p=localStorage.getItem("react-scan-tip-shown"),m=p==="true"?!0:p==="false"?!1:null;if(m===null){s(!0),localStorage.setItem("react-scan-tip-is-shown","true");return}m||s(!1)},[]);const h=i.changes.context.length===0&&i.changes.props.length===0&&i.changes.state.length===0;return f("div",{className:O(["w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm"]),children:[f("div",{className:O(["flex items-start gap-x-4 "]),children:[f("button",{onClick:()=>{o({route:"render-visualization",routeMessage:null})},className:O(["text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]"]),children:[f(P_,{size:14})," ",f("span",{children:"Overview"})]}),f("div",{className:O(["flex flex-col gap-y-1"]),children:[f("div",{className:O(["text-sm font-bold text-white overflow-x-hidden"]),children:f("div",{className:"flex items-center gap-x-2 truncate",children:i.name})}),f("div",{className:O(["flex gap-x-2"]),children:[!u&&f(Ne,{children:f("div",{className:O(["text-xs text-gray-400"]),children:["• Render time: ",i.totalTime.toFixed(0),"ms"]})}),f("div",{className:O(["text-xs text-gray-400 mb-4"]),children:["• Renders: ",i.count,"x"]})]})]})]}),l&&!h&&f("div",{className:O(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative"]),children:[f("button",{onClick:()=>{s(!1),localStorage.setItem("react-scan-tip-shown","false")},className:O(["absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]"]),children:f(Os,{size:12})}),f("div",{className:O(["w-1 bg-[#d36cff]"])}),f("div",{className:O(["flex-1"]),children:[f("div",{className:O(["px-3 py-2 text-gray-100 text-xs font-semibold"]),children:"How to stop renders"}),f("div",{className:O(["px-3 pb-2 text-gray-400 text-[10px]"]),children:"Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already"})]})]}),h&&f("div",{className:O(["w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex"]),children:[f("div",{className:O(["w-1 bg-[#d36cff]"])}),f("div",{className:O(["flex-1"]),children:[f("div",{className:O(["px-3 py-2 text-gray-100 text-sm font-semibold"]),children:"No changes detected"}),f("div",{className:O(["px-3 pb-2 text-gray-400 text-xs"]),children:"This component would not of rendered if it was memoized"})]})]}),f("div",{className:O(["flex w-full"]),children:[f("div",{className:O(["flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3"]),children:[f("div",{className:O(["text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Props"}),i.changes.props.length>0?i.changes.props.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:O(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:O(["text-white "]),children:p.name}),f("div",{className:O([" text-[8px]  text-[#d36cff] pl-1 py-1 "]),children:[p.count,"/",i.count,"x"]})]},p.name)):f("div",{className:O(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:O(["flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3"]),children:[f("div",{className:O([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed State"}),i.changes.state.length>0?i.changes.state.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:O(["flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]"]),children:[f("span",{className:O(["text-white "]),children:["index ",p.index]}),f("div",{className:O(["rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]"]),children:[p.count,"/",i.count,"x"]})]},p.index)):f("div",{className:O(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]"]),children:"No changes"})]}),f("div",{className:O(["flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3"]),children:[f("div",{className:O([" text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center"]),children:"Changed Context"}),i.changes.context.length>0?i.changes.context.toSorted((p,m)=>m.count-p.count).map(p=>f("div",{className:O(["flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto"]),children:[f("span",{className:O(["text-white "]),children:p.name}),f("div",{className:O(["rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap"]),children:[p.count,"/",i.count,"x"]})]},p.name)):f("div",{className:O(["flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2"]),children:"No changes"})]})]})]})},_S=()=>{const{notificationState:a,setNotificationState:i}=Wt(),[o,l]=Se("..."),s=oe(null);if(_e(()=>{const u=setInterval(()=>{l(h=>h==="..."?"":h+".")},500);return()=>clearInterval(u)},[]),!a.selectedEvent)return f("div",{ref:s,className:O(["h-full w-full flex flex-col items-center justify-center relative py-2 px-4"]),children:[f("div",{className:O(["p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0"]),children:f("button",{onClick:()=>{Ie.value={view:"none"}},children:f(Os,{size:18,className:"text-[#6F6F78]"})})}),f("div",{className:O(["flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md"," shadow-lg"]),children:f("div",{className:O(["flex flex-col items-start gap-y-4"]),children:[f("div",{className:O(["flex items-center"]),children:f("span",{className:O(["text-zinc-400 font-medium text-[17px]"]),children:["Scanning for slowdowns",o]})}),a.events.length!==0&&f("p",{className:O(["text-xs"]),children:["Click on an item in the"," ",f("span",{className:O(["text-purple-400"]),children:"History"})," list to get started"]}),f("p",{className:O(["text-zinc-600 text-xs"]),children:"You don't need to keep this panel open for React Scan to record slowdowns"}),f("p",{className:O(["text-zinc-600 text-xs"]),children:"Enable audio alerts to hear a delightful ding every time a large slowdown is recorded"}),f("button",{onClick:()=>{if(a.audioNotificationsOptions.enabled){i(h=>(h.audioNotificationsOptions.audioContext?.state!=="closed"&&h.audioNotificationsOptions.audioContext?.close(),localStorage.setItem("react-scan-notifications-audio","false"),{...h,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem("react-scan-notifications-audio","true");const u=new AudioContext;zf(u),i(h=>({...h,audioNotificationsOptions:{enabled:!0,audioContext:u}}))},className:O(["px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full"," text-sm flex items-center gap-x-2 justify-center"]),children:a.audioNotificationsOptions.enabled?f(Ne,{children:f("span",{className:"flex items-center gap-x-1",children:"Disable audio alerts"})}):f(Ne,{children:f("span",{className:"flex items-center gap-x-1",children:"Enable audio alerts"})})})]})})]});switch(a.route){case"render-visualization":return f(ns,{children:f(bS,{selectedEvent:a.selectedEvent})});case"render-explanation":{if(!a.selectedFiber)throw new Error("Invariant: must have selected fiber when viewing render explanation");return f(ns,{children:f(xS,{selectedFiber:a.selectedFiber,selectedEvent:a.selectedEvent})})}case"other-visualization":return f(ns,{children:f("div",{className:O(["flex w-full h-full flex-col overflow-y-auto"]),id:"overview-scroll-container",children:f(hS,{selectedEvent:a.selectedEvent})})});case"optimize":return f(ns,{children:f(dS,{selectedEvent:a.selectedEvent})})}a.route},ns=({children:a})=>{const{notificationState:i}=Wt();if(!i.selectedEvent)throw new Error("Invariant: d must have selected event when viewing render explanation");return f("div",{className:O(["w-full h-full flex flex-col gap-y-2"]),children:[f("div",{className:O(["h-[50px] w-full"]),children:f(iS,{selectedEvent:i.selectedEvent})}),f("div",{className:O(["h-calc(100%-50px) flex flex-col overflow-y-auto px-3"]),children:a})]})},SS=({selectedEvent:a})=>{const i=Do(a);switch(a.kind){case"interaction":return f("div",{className:O(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:O(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:O(["flex items-center gap-x-2 "]),children:[f("span",{className:O(["text-[#5a5a5a] mr-0.5"]),children:a.type==="click"?"Clicked ":"Typed in "}),f("span",{children:zo(a.componentPath)}),f("div",{className:O(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",i==="low"&&"bg-green-500/50",i==="needs-improvement"&&"bg-[#b77116]",i==="high"&&"bg-[#b94040]"]),children:[wt(a.timing).toFixed(0),"ms processing time"]})]}),f("div",{className:O(["flex items-center gap-x-2  justify-end ml-auto"]),children:f("div",{className:O(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Ie.value={view:"none"}},title:"Close",children:f(Os,{size:18,className:"text-[#6F6F78]"})})})})]})});case"dropped-frames":return f("div",{className:O(["w-full flex border-b border-[#27272A] min-h-[48px]"]),children:f("div",{className:O(["min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4"]),children:[f("div",{className:O(["flex items-center gap-x-2 "]),children:["FPS Drop",f("div",{className:O(["w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap",i==="low"&&"bg-green-500/50",i==="needs-improvement"&&"bg-[#b77116]",i==="high"&&"bg-[#b94040]"]),children:["dropped to ",a.fps," FPS"]})]}),f("div",{className:O(["flex items-center gap-x-2 w-2/4 justify-end ml-auto"]),children:f("div",{className:O(["p-2 flex justify-center items-center border-[#27272A]"]),children:f("button",{onClick:()=>{Ie.value={view:"none"}},children:f(Os,{size:18,className:"text-[#6F6F78]"})})})})]})})}},TS=({flashingItemsCount:a,totalEvents:i})=>{const[o,l]=Se(!1),s=oe(0),u=oe(0);return _e(()=>{if(s.current>=i)return;const h=Date.now(),p=250,m=h-u.current;if(m>=p){l(!1);const g=setTimeout(()=>{s.current=i,u.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50);return()=>clearTimeout(g)}else{const g=p-m,b=setTimeout(()=>{l(!1),setTimeout(()=>{s.current=i,u.current=Date.now(),l(!0),setTimeout(()=>{l(!1)},2e3)},50)},g);return()=>clearTimeout(b)}},[a]),o},Zv=({item:a,shouldFlash:i})=>{const[o,l]=Se(!1),s=a.events.map(Do).reduce((p,m)=>{switch(m){case"high":return"high";case"needs-improvement":return p==="high"?"high":"needs-improvement";case"low":return p}},"low"),u=a.events.reduce((p,m)=>i(m.id)?p+1:p,0),h=TS({flashingItemsCount:u,totalEvents:a.events.length});return f("div",{className:O(["flex flex-col gap-y-0.5"]),children:[f("button",{onClick:()=>l(p=>!p),className:O(["pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",h&&!o&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:O(["w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5"]),children:[f("span",{className:O(["min-w-fit"]),children:f(yy,{className:O(["text-[#A1A1AA] transition-transform",o?"rotate-90":""]),size:14},`chevron-${a.timestamp}`)}),f("span",{className:O(["text-xs"]),children:a.kind==="collapsed-frame-drops"?"FPS Drops":zo(a.events.at(0)?.componentPath??[])})]}),f("div",{className:O(["ml-auto min-w-fit flex justify-end items-center"]),children:f("div",{style:{lineHeight:"10px"},className:O(["w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:["x",a.events.length]})})]}),o&&f(CS,{children:a.events.toSorted((p,m)=>m.timestamp-p.timestamp).map(p=>f(xy,{event:p,shouldFlash:i(p.id)}))})]})},CS=({children:a})=>f("div",{className:"relative pl-6 flex flex-col gap-y-1",children:[f("div",{className:"absolute left-3 top-0 bottom-0 w-px bg-[#27272A]"}),a]}),ES=a=>{const i=oe([]),[o,l]=Se(new Set),s=oe(!0);return _e(()=>{if(s.current){s.current=!1,i.current=a;return}const u=new Set(a.map(m=>m.id)),h=new Set(i.current.map(m=>m.id)),p=new Set;u.forEach(m=>{h.has(m)||p.add(m)}),p.size>0&&(l(p),setTimeout(()=>{l(new Set)},2e3)),i.current=a},[a]),u=>o.has(u)},zS=({shouldFlash:a})=>{const[i,o]=Se(a);return _e(()=>{if(a){o(!0);const l=setTimeout(()=>{o(!1)},1e3);return()=>clearTimeout(l)}},[a]),i},xy=({event:a,shouldFlash:i})=>{const{notificationState:o,setNotificationState:l}=Wt(),s=Do(a),u=zS({shouldFlash:i});switch(a.kind){case"interaction":return f("button",{onClick:()=>{l(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:O(["pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===o.selectedEvent?.id&&"bg-[#18181B]",u&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:O(["w-4/5 flex items-center justify-start h-full gap-x-1.5"]),children:[f("span",{className:O(["min-w-fit text-xs"]),children:vn(()=>{switch(a.type){case"click":return f(eS,{size:14});case"keyboard":return f(tS,{size:14})}})}),f("span",{className:O(["text-xs pr-1 truncate"]),children:zo(a.componentPath)})]}),f("div",{className:O([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:O(["gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]",s==="low"&&"bg-green-500/50",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:f("div",{style:{lineHeight:"10px"},className:O(["text-[10px] text-white flex items-end"]),children:[wt(a.timing).toFixed(0),"ms"]})})})]});case"dropped-frames":return f("button",{onClick:()=>{l(h=>({...h,selectedEvent:a,route:"render-visualization",selectedFiber:null}))},className:O(["pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden",a.id===o.selectedEvent?.id&&"bg-[#18181B]",u&&"after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]"]),children:[f("div",{className:O(["w-4/5 flex items-center justify-start h-full text-xs truncate"]),children:[f(aS,{size:14,className:"mr-1.5"})," FPS Drop"]}),f("div",{className:O([" min-w-fit flex justify-end items-center ml-auto"]),children:f("div",{style:{lineHeight:"10px"},className:O(["w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold",s==="low"&&"bg-green-500/60",s==="needs-improvement"&&"bg-[#b77116] text-[10px]",s==="high"&&"bg-[#b94040]"]),children:[a.fps," FPS"]})})]})}},kS=a=>a.reduce((o,l)=>{const s=o.at(-1);if(!s)return[{kind:"single",event:l,timestamp:l.timestamp}];switch(s.kind){case"collapsed-keyboard":return l.kind==="interaction"&&l.type==="keyboard"&&l.componentPath.join("-")===s.events[0].componentPath.join("-")?[...o.filter(h=>h!==s),{kind:"collapsed-keyboard",events:[...s.events,l],timestamp:Math.max(...[...s.events,l].map(h=>h.timestamp))}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}];case"single":return s.event.kind==="interaction"&&s.event.type==="keyboard"&&l.kind==="interaction"&&l.type==="keyboard"&&s.event.componentPath.join("-")===l.componentPath.join("-")?[...o.filter(h=>h!==s),{kind:"collapsed-keyboard",events:[s.event,l],timestamp:Math.max(s.event.timestamp,l.timestamp)}]:s.event.kind==="dropped-frames"&&l.kind==="dropped-frames"?[...o.filter(h=>h!==s),{kind:"collapsed-frame-drops",events:[s.event,l],timestamp:Math.max(s.event.timestamp,l.timestamp)}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}];case"collapsed-frame-drops":return l.kind==="dropped-frames"?[...o.filter(h=>h!==s),{kind:"collapsed-frame-drops",events:[...s.events,l],timestamp:Math.max(...[...s.events,l].map(h=>h.timestamp))}]:[...o,{kind:"single",event:l,timestamp:l.timestamp}]}},[]),_y=(a=150)=>{const{notificationState:i}=Wt(),[o,l]=Se(i.events);return _e(()=>{setTimeout(()=>{l(i.events)},a)},[i.events]),[o,l]},NS=()=>{const{notificationState:a,setNotificationState:i}=Wt(),o=ES(a.events),[l,s]=_y(),u=kS(l).toSorted((h,p)=>p.timestamp-h.timestamp);return f("div",{className:O(["w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto"]),children:[f("div",{className:O(["text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between"]),children:[f("span",{children:"History"}),f(by,{wrapperProps:{className:"h-full flex items-center justify-center ml-auto"},triggerContent:f("button",{className:O(["hover:bg-[#18181B] rounded-full p-2"]),title:"Clear all events",onClick:()=>{Eo.getState().actions.clear(),i(h=>({...h,selectedEvent:null,selectedFiber:null,route:h.route==="other-visualization"?"other-visualization":"render-visualization"})),s([])},children:f(nS,{className:O([""]),size:16})}),children:f("div",{className:O(["w-full flex justify-center"]),children:"Clear all events"})})]}),f("div",{className:O(["flex flex-col px-1 gap-y-1"]),children:[u.length===0&&f("div",{className:O(["flex items-center justify-center text-zinc-500 text-sm py-4"]),children:"No Events"}),u.map(h=>vn(()=>{switch(h.kind){case"collapsed-keyboard":return f(Zv,{shouldFlash:o,item:h});case"single":return f(xy,{event:h.event,shouldFlash:o(h.event.id)},h.event.id);case"collapsed-frame-drops":return f(Zv,{shouldFlash:o,item:h})}}))]})]})},AS=a=>Object.values(a).map(o=>({id:mn(),totalTime:o.nodeInfo.reduce((l,s)=>l+s.selfTime,0),count:o.nodeInfo.length,name:o.nodeInfo[0].name,deletedAll:!1,parents:o.parents,hasMemoCache:o.hasMemoCache,wasFiberRenderMount:o.wasFiberRenderMount,elements:o.nodeInfo.map(l=>l.element),changes:{context:o.changes.fiberContext.current.filter(l=>o.changes.fiberContext.changesCounts.get(l.name)).map(l=>({name:String(l.name),count:o.changes.fiberContext.changesCounts.get(l.name)??0})),props:o.changes.fiberProps.current.filter(l=>o.changes.fiberProps.changesCounts.get(l.name)).map(l=>({name:String(l.name),count:o.changes.fiberProps.changesCounts.get(l.name)??0})),state:o.changes.fiberState.current.filter(l=>o.changes.fiberState.changesCounts.get(Number(l.name))).map(l=>({index:l.name,count:o.changes.fiberState.changesCounts.get(Number(l.name))??0}))}})),MS=a=>{_e(()=>{const o=setInterval(()=>{a.forEach(l=>{l.groupedFiberRenders&&l.groupedFiberRenders.forEach(s=>{if(s.deletedAll)return;if(!s.elements||s.elements.length===0){s.deletedAll=!0;return}const u=s.elements.length;s.elements=s.elements.filter(h=>h&&h.isConnected),s.elements.length===0&&u>0&&(s.deletedAll=!0)})})},5e3);return()=>{clearInterval(o)}},[a])},Sy=()=>{const a=F_(),i=[];return MS(i),a.state.events.forEach(o=>{const l=o.kind==="interaction"?o.data.meta.detailedTiming.fiberRenders:o.data.meta.fiberRenders,s=AS(l),u=s.reduce((h,p)=>h+p.totalTime,0);switch(o.kind){case"interaction":{const{commitEnd:h,jsEndDetail:p,interactionStartDetail:m,rafStart:g}=o.data.meta.detailedTiming,b=Math.max(0,p-m-u),y=Math.max(o.data.meta.latency-(h-m),0);i.push({componentPath:o.data.meta.detailedTiming.componentPath,groupedFiberRenders:s,id:o.id,kind:"interaction",memory:null,timestamp:o.data.startAt,type:o.data.meta.detailedTiming.interactionType==="keyboard"?"keyboard":"click",timing:{renderTime:u,kind:"interaction",otherJSTime:b,framePreparation:g-p,frameConstruction:h-g,frameDraw:y}});return}case"long-render":{i.push({kind:"dropped-frames",id:o.id,memory:null,timing:{kind:"dropped-frames",renderTime:u,otherTime:o.data.meta.latency},groupedFiberRenders:s,timestamp:o.data.startAt,fps:o.data.meta.fps});return}}}),i},OS=1e3,DS=()=>{const{notificationState:a,setNotificationState:i}=Wt(),o=oe(null),l=oe(null),s=oe(0),[u]=_y(),h=u.filter(p=>Do(p)==="high").length;return _e(()=>{const p=localStorage.getItem("react-scan-notifications-audio");if(p!=="false"&&p!=="true"){localStorage.setItem("react-scan-notifications-audio","false");return}if(p!=="false"){i(g=>g.audioNotificationsOptions.enabled?g:{...g,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),_e(()=>{const{audioNotificationsOptions:p}=a;if(!p.enabled||h===0||o.current&&o.current>=h)return;l.current&&clearTimeout(l.current);const g=Date.now()-s.current,b=Math.max(0,OS-g);l.current=setTimeout(()=>{zf(p.audioContext),o.current=h,s.current=Date.now(),l.current=null},b)},[h]),_e(()=>{h===0&&(o.current=null)},[h]),_e(()=>()=>{l.current&&clearTimeout(l.current)},[]),null},RS=Cf((a,i)=>{const o=Sy(),[l,s]=Se({detailsExpanded:!1,events:o,filterBy:"latest",moreInfoExpanded:!1,route:"render-visualization",selectedEvent:o.toSorted((u,h)=>u.timestamp-h.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return l.events=o,f(vy.Provider,{value:{notificationState:l,setNotificationState:s,setRoute:({route:u,routeMessage:h})=>{s(p=>{const m={...p,route:u,routeMessage:h};switch(u){case"render-visualization":return mo(),{...m,selectedFiber:null};case"optimize":return mo(),{...m,selectedFiber:null};case"other-visualization":return mo(),{...m,selectedFiber:null};case"render-explanation":return mo(),m}})}},children:[f(DS,{}),f(US,{ref:i})]})}),US=Cf((a,i)=>{const{notificationState:o}=Wt();return f("div",{ref:i,className:O(["h-full w-full flex flex-col"]),children:[o.selectedEvent&&f("div",{className:O(["w-full h-[48px] flex flex-col",o.moreInfoExpanded&&"h-[235px]",o.moreInfoExpanded&&o.selectedEvent.kind==="dropped-frames"&&"h-[150px]"]),children:[f(SS,{selectedEvent:o.selectedEvent}),o.moreInfoExpanded&&f(jS,{})]}),f("div",{className:O(["flex ",o.selectedEvent?"h-[calc(100%-48px)]":"h-full",o.moreInfoExpanded&&"h-[calc(100%-200px)]",o.moreInfoExpanded&&o.selectedEvent?.kind==="dropped-frames"&&"h-[calc(100%-150px)]"]),children:[f("div",{className:O(["h-full min-w-[200px]"]),children:f(NS,{})}),f("div",{className:O(["w-[calc(100%-200px)] h-full overflow-y-auto"]),children:f(_S,{})})]})]})}),jS=()=>{const{notificationState:a}=Wt();if(!a.selectedEvent)throw new Error("Invariant must have selected event for more info");const i=a.selectedEvent;return f("div",{className:O(["px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]",i.kind==="dropped-frames"&&"h-[calc(100%-25px)]"]),children:f("div",{className:O(["flex flex-col gap-y-4 h-full"]),children:vn(()=>{switch(i.kind){case"interaction":return f(Ne,{children:[f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:i.type==="click"?"Clicked component location":"Typed in component location"}),f("div",{className:"font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto",children:i.componentPath.toReversed().map((o,l)=>f(Ne,{children:[f("span",{style:{lineHeight:"14px"},className:"text-[10px] whitespace-nowrap",children:o},o),l<i.componentPath.length-1&&f("span",{className:"text-[#6F6F78] mx-0.5",children:"‹"})]}))})]}),f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(i.timing).toFixed(0),"ms"]})]}),f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-i.timestamp)/1e3).toFixed(0)}s ago`})]})]});case"dropped-frames":return f(Ne,{children:[f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Total Time"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:[wt(i.timing).toFixed(0),"ms"]})]}),f("div",{className:O(["flex items-center gap-x-3"]),children:[f("span",{className:"text-[#6F6F78] text-xs font-medium",children:"Occurred"}),f("span",{className:"text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs",children:`${((Date.now()-i.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},HS=Nf(()=>{const a=Sy(),[i,o]=Se(a);_e(()=>{const x=setTimeout(()=>{o(a)},600);return()=>{clearTimeout(x)}},[a]);const l=ee.inspectState,s=l.value.kind==="inspecting",u=l.value.kind==="focused",[h,p]=Se([]),m=ot(()=>{switch(ee.inspectState.value.kind){case"inspecting":{Ie.value={view:"none"},ee.inspectState.value={kind:"inspect-off"};return}case"focused":{Ie.value={view:"inspector"},ee.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"inspect-off":{Ie.value={view:"none"},ee.inspectState.value={kind:"inspecting",hoveredDomElement:null};return}case"uninitialized":return}},[]),g=ot(x=>{if(x.preventDefault(),x.stopPropagation(),!Ae.instrumentation)return;const S=!Ae.instrumentation.isPaused.value;Ae.instrumentation.isPaused.value=S;const T=Kn("react-scan-options");Lt("react-scan-options",{...T,enabled:!S})},[]);To(()=>{ee.inspectState.value.kind==="uninitialized"&&(ee.inspectState.value={kind:"inspect-off"})});let b=null,y="#999";return s?(b=f(nt,{name:"icon-inspect"}),y="#8e61e3"):u?(b=f(nt,{name:"icon-focus"}),y="#8e61e3"):(b=f(nt,{name:"icon-inspect"}),y="#999"),wf(()=>{if(Ie.value.view!=="notifications")return;const x=new Set(a.map(S=>S.id));p([...x.values()])},[a.length,Ie.value.view]),f("div",{className:"flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden",children:[f("div",{className:"h-full flex items-center min-w-fit",children:f("button",{type:"button",id:"react-scan-inspect-element",title:"Inspect element",onClick:m,className:"button flex items-center justify-center h-full w-full pl-3 pr-2.5",style:{color:y},children:b})}),f("div",{className:"h-full flex items-center justify-center",children:f("button",{type:"button",id:"react-scan-notifications",title:"Notifications",onClick:()=>{switch(ee.inspectState.value.kind!=="inspect-off"&&(ee.inspectState.value={kind:"inspect-off"}),Ie.value.view){case"inspector":{ee.inspectState.value={kind:"inspect-off"};const x=new Set(a.map(S=>S.id));p([...x.values()]),Ie.value={view:"notifications"};return}case"notifications":{Ie.value={view:"none"};return}case"none":{const x=new Set(a.map(S=>S.id));p([...x.values()]),Ie.value={view:"notifications"};return}}},className:"button flex items-center justify-center h-full pl-2.5 pr-2.5",style:{color:y},children:f(W_,{events:i.filter(x=>!h.includes(x.id)).map(x=>Do(x)==="high"),size:16,className:O(["text-[#999]",Ie.value.view==="notifications"&&"text-[#8E61E3]"])})})}),f(T_,{checked:!Ae.instrumentation?.isPaused.value,onChange:g,className:"place-self-center",title:"Outline Re-renders"}),Ae.options.value.showFPS&&f(E_,{})]})}),LS=ci(()=>ee.inspectState.value.kind==="inspecting"),BS=ci(()=>O("relative","flex-1","flex flex-col","rounded-t-lg","overflow-hidden","opacity-100","transition-[opacity]",LS.value&&"opacity-0 duration-0 delay-0")),YS=ci(()=>Ie.value.view==="inspector"),XS=ci(()=>Ie.value.view==="notifications"),qS=()=>f("div",{className:O("flex flex-1 flex-col","overflow-hidden z-10","rounded-lg","bg-black","opacity-100","transition-[border-radius]","peer-hover/left:rounded-l-none","peer-hover/right:rounded-r-none","peer-hover/top:rounded-t-none","peer-hover/bottom:rounded-b-none"),children:[f("div",{className:BS,children:[f(S_,{}),f("div",{className:O("relative","flex-1 flex","text-white","bg-[#0A0A0A]","transition-opacity delay-150","overflow-hidden","border-b border-[#222]"),children:[f(Wv,{isOpen:YS,children:f(N2,{})}),f(Wv,{isOpen:XS,children:f(RS,{})})]})]}),f(HS,{})]}),Wv=({isOpen:a,children:i})=>f("div",{className:O("flex-1","opacity-0","overflow-y-auto overflow-x-hidden","transition-opacity delay-0","pointer-events-none",a.value&&"opacity-100 delay-150 pointer-events-auto"),children:f("div",{className:"absolute inset-0 flex",children:i})}),as=(a,i,o)=>a+(i-a)*o,Nd={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Ki=zn&&window.devicePixelRatio||1,VS=()=>{const a=oe(null),i=oe(null),o=oe(null),l=oe(null),s=oe(null),u=oe(0),h=oe(),p=oe(new Map),m=oe(!1),g=oe(0),b=(_,k,U,I)=>{_.save(),_.strokeStyle="white",_.fillStyle="white",_.lineWidth=1.5;const W=I*.6,E=I*.5,j=k+(I-W)/2,$=U;_.beginPath(),_.arc(j+W/2,$+E/2,W/2,Math.PI,0,!1),_.stroke();const Z=I*.8,P=I*.5,ae=k+(I-Z)/2,ue=U+E/2;_.fillRect(ae,ue,Z,P),_.restore()},y=(_,k,U,I)=>{if(!I)return;const W=24,E=8,$=(I?.type&&bt(I.type))??"Unknown";_.save(),_.font="12px system-ui, -apple-system, sans-serif";const P=_.measureText($).width,ae=U==="locked"?14:0,ue=U==="locked"?6:0,Me=P+E*2+ae+ue,be=k.left,pt=k.top-W-4;if(_.fillStyle="rgb(37, 37, 38, .75)",_.beginPath(),_.roundRect(be,pt,Me,W,3),_.fill(),U==="locked"){const Jn=be+E,Ma=pt+(W-ae)/2+2;b(_,Jn,Ma,ae),l.current={x:Jn,y:Ma,width:ae,height:ae}}else l.current=null;_.fillStyle="white",_.textBaseline="middle";const kn=be+E+(U==="locked"?ae+ue:0);_.fillText($,kn,pt+W/2),_.restore()},x=(_,k,U,I)=>{if(!o.current)return;const W=o.current;k.clearRect(0,0,_.width,_.height),k.strokeStyle="rgba(142, 97, 227, 0.5)",k.fillStyle="rgba(173, 97, 230, 0.10)",U==="locked"?k.setLineDash([]):k.setLineDash([4]),k.lineWidth=1,k.fillRect(W.left,W.top,W.width,W.height),k.strokeRect(W.left,W.top,W.width,W.height),y(k,W,U,I)},S=(_,k,U,I,W,E)=>{const j=Ae.options.value.animationSpeed,$=Nd.speeds[j]??Nd.speeds.off,Z=P=>{if(P-g.current<Nd.frameInterval){u.current=requestAnimationFrame(Z);return}if(g.current=P,!o.current){cancelAnimationFrame(u.current);return}o.current={left:as(o.current.left,U.left,$),top:as(o.current.top,U.top,$),width:as(o.current.width,U.width,$),height:as(o.current.height,U.height,$)},x(_,k,I,W),Math.abs(o.current.left-U.left)>.1||Math.abs(o.current.top-U.top)>.1||Math.abs(o.current.width-U.width)>.1||Math.abs(o.current.height-U.height)>.1?u.current=requestAnimationFrame(Z):(o.current=U,x(_,k,I,W),cancelAnimationFrame(u.current),k.restore())};cancelAnimationFrame(u.current),clearTimeout(h.current),u.current=requestAnimationFrame(Z),h.current=setTimeout(()=>{cancelAnimationFrame(u.current),o.current=U,x(_,k,I,W),k.restore()},1e3)},T=(_,k,U,I,W)=>{if(k.save(),!o.current){o.current=U,x(_,k,I,W),k.restore();return}S(_,k,U,I,W)},N=async(_,k,U,I)=>{if(!_||!k||!U)return;const{parentCompositeFiber:W}=ti(_),E=await A2(_);!W||!E||T(k,U,E,I,W)},D=()=>{for(const _ of p.current.values())_?.()},C=_=>{const k=_.getContext("2d");k&&k.clearRect(0,0,_.width,_.height),o.current=null,l.current=null,s.current=null,_.classList.remove("fade-in"),m.current=!1},A=_=>{if(!a.current||m.current)return;const k=I=>{!a.current||I.propertyName!=="opacity"||!m.current||(a.current.removeEventListener("transitionend",k),C(a.current),_?.())},U=p.current.get("fade-out");U&&(U(),p.current.delete("fade-out")),a.current.addEventListener("transitionend",k),p.current.set("fade-out",()=>{a.current?.removeEventListener("transitionend",k)}),m.current=!0,a.current.classList.remove("fade-in"),requestAnimationFrame(()=>{a.current?.classList.add("fade-out")})},Y=()=>{a.current&&(m.current=!1,a.current.classList.remove("fade-out"),requestAnimationFrame(()=>{a.current?.classList.add("fade-in")}))},F=_=>{_!==s.current&&(s.current=_,tf.has(_.tagName)?A():Y(),ee.inspectState.value={kind:"inspecting",hoveredDomElement:_})},Q=()=>{!o.current||!a.current||m.current||A()},J=Q0(_=>{if(ee.inspectState.peek().kind!=="inspecting"||!i.current)return;i.current.style.pointerEvents="none";const U=document.elementFromPoint(_?.clientX??0,_?.clientY??0);if(i.current.style.removeProperty("pointer-events"),clearTimeout(h.current),U&&U!==a.current){const{parentCompositeFiber:I}=ti(U);if(I){const W=Es(I);if(W){F(W);return}}}Q()},32),K=(_,k)=>{const U=l.current;if(!U)return!1;const I=k.getBoundingClientRect(),W=k.width/I.width,E=k.height/I.height,j=(_.clientX-I.left)*W,$=(_.clientY-I.top)*E,Z=j/Ki,P=$/Ki;return Z>=U.x&&Z<=U.x+U.width&&P>=U.y&&P<=U.y+U.height},de=_=>{_.kind==="focused"&&(ee.inspectState.value={kind:"inspecting",hoveredDomElement:_.focusedDomElement})},re=_=>{const k=["react-scan-inspect-element","react-scan-power"];if(_.target instanceof HTMLElement&&k.includes(_.target.id))return;const U=s.current?.tagName;if(U&&tf.has(U))return;_.preventDefault(),_.stopPropagation();const I=s.current??document.elementFromPoint(_.clientX,_.clientY);if(!I)return;const W=_.composedPath().at(0);if(W instanceof HTMLElement&&k.includes(W.id)){const $=new MouseEvent(_.type,_);$.__reactScanSyntheticEvent=!0,W.dispatchEvent($);return}const{parentCompositeFiber:E}=ti(I);if(!E)return;const j=Es(E);if(!j){s.current=null,ee.inspectState.value={kind:"inspect-off"};return}ee.inspectState.value={kind:"focused",focusedDomElement:j,fiber:E}},he=_=>{if(_.__reactScanSyntheticEvent)return;const k=ee.inspectState.peek(),U=a.current;if(!(!U||!i.current)){if(K(_,U)){_.preventDefault(),_.stopPropagation(),de(k);return}k.kind==="inspecting"&&re(_)}},ye=_=>{if(_.key!=="Escape")return;const k=ee.inspectState.peek();if(a.current&&document.activeElement?.id!=="react-scan-root"&&(Ie.value={view:"none"},k.kind==="focused"||k.kind==="inspecting"))switch(_.preventDefault(),_.stopPropagation(),k.kind){case"focused":{Y(),o.current=null,s.current=k.focusedDomElement,ee.inspectState.value={kind:"inspecting",hoveredDomElement:k.focusedDomElement};break}case"inspecting":{A(()=>{Xs.value=!1,ee.inspectState.value={kind:"inspect-off"}});break}}},le=(_,k,U)=>{p.current.get(_.kind)?.(),i.current&&_.kind!=="inspecting"&&(i.current.style.pointerEvents="none"),u.current&&cancelAnimationFrame(u.current);let I;switch(_.kind){case"inspect-off":A();return;case"inspecting":N(_.hoveredDomElement,k,U,"inspecting");break;case"focused":if(!_.focusedDomElement)return;s.current!==_.focusedDomElement&&(s.current=_.focusedDomElement),Ie.value={view:"inspector"},N(_.focusedDomElement,k,U,"locked"),I=ee.lastReportTime.subscribe(()=>{if(u.current&&o.current){const{parentCompositeFiber:W}=ti(_.focusedDomElement);W&&N(_.focusedDomElement,k,U,"locked")}}),I&&p.current.set(_.kind,I);break}},Ye=(_,k)=>{const U=_.getBoundingClientRect();_.width=U.width*Ki,_.height=U.height*Ki,k.scale(Ki,Ki),k.save()},He=()=>{const _=ee.inspectState.peek(),k=a.current;if(!k)return;const U=k?.getContext("2d");U&&(cancelAnimationFrame(u.current),clearTimeout(h.current),Ye(k,U),o.current=null,_.kind==="focused"&&_.focusedDomElement?N(_.focusedDomElement,k,U,"locked"):_.kind==="inspecting"&&_.hoveredDomElement&&N(_.hoveredDomElement,k,U,"inspecting"))},Ue=_=>{const k=ee.inspectState.peek(),U=a.current;U&&(k.kind==="inspecting"||K(_,U))&&(_.preventDefault(),_.stopPropagation(),_.stopImmediatePropagation())};return _e(()=>{const _=a.current;if(!_)return;const k=_?.getContext("2d");if(!k)return;Ye(_,k);const U=ee.inspectState.subscribe(I=>{le(I,_,k)});return window.addEventListener("scroll",He,{passive:!0}),window.addEventListener("resize",He,{passive:!0}),document.addEventListener("pointermove",J,{passive:!0,capture:!0}),document.addEventListener("pointerdown",Ue,{capture:!0}),document.addEventListener("click",he,{capture:!0}),document.addEventListener("keydown",ye,{capture:!0}),()=>{D(),U(),window.removeEventListener("scroll",He),window.removeEventListener("resize",He),document.removeEventListener("pointermove",J,{capture:!0}),document.removeEventListener("click",he,{capture:!0}),document.removeEventListener("pointerdown",Ue,{capture:!0}),document.removeEventListener("keydown",ye,{capture:!0}),u.current&&cancelAnimationFrame(u.current),clearTimeout(h.current)}},[]),f(Ne,{children:[f("div",{ref:i,className:O("fixed top-0 left-0 w-screen h-screen","z-[214748365]"),style:{pointerEvents:"none"}}),f("canvas",{ref:a,dir:"ltr",className:O("react-scan-inspector-overlay","fixed top-0 left-0 w-screen h-screen","pointer-events-none","z-[214748367]")})]})},FS=class{constructor(a,i){this.width=a,this.height=i,this.maxWidth=a-me*2,this.maxHeight=i-me*2}rightEdge(a){return this.width-a-me}bottomEdge(a){return this.height-a-me}isFullWidth(a){return a>=this.maxWidth}isFullHeight(a){return a>=this.maxHeight}},Ji,ko=()=>{const a=window.innerWidth,i=window.innerHeight;return Ji&&Ji.width===a&&Ji.height===i||(Ji=new FS(a,i)),Ji},$S=(a,i,o,l,s)=>{if(o){if(a==="top-left")return"bottom-right";if(a==="top-right")return"bottom-left";if(a==="bottom-left")return"top-right";if(a==="bottom-right")return"top-left";const[u,h]=i.split("-");if(a==="left")return`${u}-right`;if(a==="right")return`${u}-left`;if(a==="top")return`bottom-${h}`;if(a==="bottom")return`top-${h}`}if(l){if(a==="left")return`${i.split("-")[0]}-right`;if(a==="right")return`${i.split("-")[0]}-left`}if(s){if(a==="top")return`bottom-${i.split("-")[1]}`;if(a==="bottom")return`top-${i.split("-")[1]}`}return i},wo=(a,i,o)=>{const l=getComputedStyle(document.body).direction==="rtl",s=window.innerWidth,u=window.innerHeight,h=i===ft.width,p=h?i:Math.min(i,s-me*2),m=h?o:Math.min(o,u-me*2);let g,b,y=me,x=s-p-me,S=me,T=u-m-me;switch(a){case"top-right":g=l?-y:x,b=S;break;case"bottom-right":g=l?-y:x,b=T;break;case"bottom-left":g=l?-x:y,b=T;break;case"top-left":g=l?-x:y,b=S;break;default:g=y,b=S;break}return h&&(l?g=Math.min(-y,Math.max(g,-x)):g=Math.max(y,Math.min(g,x)),b=Math.max(S,Math.min(b,T))),{x:g,y:b}},GS=(a,i)=>{const[o,l]=i.split("-");return a!==o&&a!==l},IS=(a,i,o,l)=>o&&l?!0:!o&&!l?GS(a,i):o?a!==i.split("-")[0]:l?a!==i.split("-")[1]:!1,is=(a,i,o)=>{const l=o?ft.width:ft.initialHeight,s=o?ko().maxWidth:ko().maxHeight,u=a+i;return Math.min(Math.max(l,u),s)},QS=(a,i,o,l,s)=>{const u=getComputedStyle(document.body).direction==="rtl",h=window.innerWidth-me*2,p=window.innerHeight-me*2;let m=i.width,g=i.height,b=o.x,y=o.y;if(u&&a.includes("right")){const D=-o.x+i.width-me,C=Math.min(i.width+l,D);m=Math.min(h,Math.max(ft.width,C)),b=o.x+(m-i.width)}if(u&&a.includes("left")){const D=window.innerWidth-o.x-me,C=Math.min(i.width-l,D);m=Math.min(h,Math.max(ft.width,C))}if(!u&&a.includes("right")){const D=window.innerWidth-o.x-me,C=Math.min(i.width+l,D);m=Math.min(h,Math.max(ft.width,C))}if(!u&&a.includes("left")){const D=o.x+i.width-me,C=Math.min(i.width-l,D);m=Math.min(h,Math.max(ft.width,C)),b=o.x-(m-i.width)}if(a.includes("bottom")){const D=window.innerHeight-o.y-me,C=Math.min(i.height+s,D);g=Math.min(p,Math.max(ft.initialHeight,C))}if(a.includes("top")){const D=o.y+i.height-me,C=Math.min(i.height-s,D);g=Math.min(p,Math.max(ft.initialHeight,C)),y=o.y-(g-i.height)}let x=me,S=window.innerWidth-me-m,T=me,N=window.innerHeight-me-g;return u?b=Math.min(-x,Math.max(b,-S)):b=Math.max(x,Math.min(b,S)),y=Math.max(T,Math.min(y,N)),{newSize:{width:m,height:g},newPosition:{x:b,y}}},ZS=a=>{const i=ko(),o={"top-left":Math.hypot(a.x,a.y),"top-right":Math.hypot(i.maxWidth-a.x,a.y),"bottom-left":Math.hypot(a.x,i.maxHeight-a.y),"bottom-right":Math.hypot(i.maxWidth-a.x,i.maxHeight-a.y)};let l="top-left";for(const s in o)o[s]<o[l]&&(l=s);return l},WS=(a,i,o,l,s=100)=>{const u=o!==void 0?a-o:0,h=l!==void 0?i-l:0,p=window.innerWidth/2,m=window.innerHeight/2,g=u>s,b=u<-s,y=h>s,x=h<-s;if(g||b){const S=i>m;return g?S?"bottom-right":"top-right":S?"bottom-left":"top-left"}if(y||x){const S=a>p;return y?S?"bottom-right":"bottom-left":S?"top-right":"top-left"}return a>p?i>m?"bottom-right":"top-right":i>m?"bottom-left":"top-left"},rs=({position:a})=>{const i=oe(null),o=oe(null),l=oe(null),s=oe(null);_e(()=>{const p=i.current;if(!p)return;const m=()=>{p.classList.remove("pointer-events-none");const y=ee.inspectState.value.kind==="focused",x=Ie.value.view!=="none";(y||x)&&IS(a,ne.value.corner,ne.value.dimensions.isFullWidth,ne.value.dimensions.isFullHeight)?p.classList.remove("hidden","pointer-events-none","opacity-0"):p.classList.add("hidden","pointer-events-none","opacity-0")},g=ne.subscribe(y=>{o.current!==null&&l.current!==null&&s.current!==null&&y.dimensions.width===o.current&&y.dimensions.height===l.current&&y.corner===s.current||(m(),o.current=y.dimensions.width,l.current=y.dimensions.height,s.current=y.corner)}),b=ee.inspectState.subscribe(()=>{m()});return()=>{g(),b(),o.current=null,l.current=null,s.current=null}},[]);const u=ot(p=>{p.preventDefault(),p.stopPropagation();const m=Kd.value;if(!m)return;const g=m.style,{dimensions:b}=ne.value,y=p.clientX,x=p.clientY,S=b.width,T=b.height,N=b.position;ne.value={...ne.value,dimensions:{...b,isFullWidth:!1,isFullHeight:!1,width:S,height:T,position:N}};let D=null;const C=Y=>{D||(g.transition="none",D=requestAnimationFrame(()=>{const{newSize:F,newPosition:Q}=QS(a,{width:S,height:T},N,Y.clientX-y,Y.clientY-x);g.transform=`translate3d(${Q.x}px, ${Q.y}px, 0)`,g.width=`${F.width}px`,g.height=`${F.height}px`;const J=Math.floor(F.width-gn/2),K=ne.value.componentsTree.width,de=Math.min(J,Math.max(gn,K));ne.value={...ne.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:F.width,height:F.height,position:Q},componentsTree:{...ne.value.componentsTree,width:de}},D=null}))},A=()=>{D&&(cancelAnimationFrame(D),D=null),document.removeEventListener("pointermove",C),document.removeEventListener("pointerup",A);const{dimensions:Y,corner:F}=ne.value,Q=ko(),J=Q.isFullWidth(Y.width),K=Q.isFullHeight(Y.height),de=J&&K;let re=F;(de||J||K)&&(re=ZS(Y.position));const he=wo(re,Y.width,Y.height),ye=()=>{m.removeEventListener("transitionend",ye)};m.addEventListener("transitionend",ye),g.transform=`translate3d(${he.x}px, ${he.y}px, 0)`,ne.value={...ne.value,corner:re,dimensions:{isFullWidth:J,isFullHeight:K,width:Y.width,height:Y.height,position:he},lastDimensions:{isFullWidth:J,isFullHeight:K,width:Y.width,height:Y.height,position:he}},Lt(Wn,{corner:re,dimensions:ne.value.dimensions,lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree})};document.addEventListener("pointermove",C,{passive:!0}),document.addEventListener("pointerup",A)},[]),h=ot(p=>{p.preventDefault(),p.stopPropagation();const m=Kd.value;if(!m)return;const g=m.style,{dimensions:b,corner:y}=ne.value,x=ko(),S=x.isFullWidth(b.width),T=x.isFullHeight(b.height),N=S&&T,D=(S||T)&&!N;let C=b.width,A=b.height;const Y=$S(a,y,N,S,T);a==="left"||a==="right"?(C=S?b.width:x.maxWidth,D&&(C=S?ft.width:x.maxWidth)):(A=T?b.height:x.maxHeight,D&&(A=T?ft.initialHeight:x.maxHeight)),N&&(a==="left"||a==="right"?C=ft.width:A=ft.initialHeight);const F=wo(Y,C,A),Q={isFullWidth:x.isFullWidth(C),isFullHeight:x.isFullHeight(A),width:C,height:A,position:F},J=Math.floor(C-ft.width/2),K=ne.value.componentsTree.width,de=Math.floor(C*.3),re=S?gn:(a==="left"||a==="right")&&!S?Math.min(J,Math.max(gn,de)):Math.min(J,Math.max(gn,K));requestAnimationFrame(()=>{ne.value={corner:Y,dimensions:Q,lastDimensions:b,componentsTree:{...ne.value.componentsTree,width:re}},g.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",g.width=`${C}px`,g.height=`${A}px`,g.transform=`translate3d(${F.x}px, ${F.y}px, 0)`}),Lt(Wn,{corner:Y,dimensions:Q,lastDimensions:b,componentsTree:{...ne.value.componentsTree,width:re}})},[]);return f("div",{ref:i,onPointerDown:u,onDblClick:h,className:O("absolute z-50","flex items-center justify-center","group","transition-colors select-none","peer",{"resize-left peer/left":a==="left","resize-right peer/right z-10":a==="right","resize-top peer/top":a==="top","resize-bottom peer/bottom":a==="bottom"}),children:f("span",{className:"resize-line-wrapper",children:f("span",{className:"resize-line",children:f(nt,{name:"icon-ellipsis",size:18,className:O("text-neutral-400",(a==="left"||a==="right")&&"rotate-90")})})})})},Kv={horizontal:{width:20,height:48},vertical:{width:48,height:20}},KS=()=>{const a=oe(null),i=oe(!1),o=oe(0),l=oe(0),s=oe(!1),u=ot((x=!0)=>{if(!a.current)return;const{corner:S}=ne.value;let T,N;if(Zt.value){const re=Zt.value.orientation||"horizontal",he=Kv[re];T=he.width,N=he.height}else if(i.current){const re=ne.value.lastDimensions;T=is(re.width,0,!0),N=is(re.height,0,!1),s.current&&(s.current=!1)}else T=o.current,N=l.current;let C=wo(S,T,N);if(Zt.value){const{corner:re,orientation:he="horizontal"}=Zt.value,ye=Kv[he];switch(re){case"top-left":C=he==="horizontal"?{x:-1,y:me}:{x:me,y:-1};break;case"bottom-left":C=he==="horizontal"?{x:-1,y:window.innerHeight-ye.height-me}:{x:me,y:window.innerHeight-ye.height+1};break;case"top-right":C=he==="horizontal"?{x:window.innerWidth-ye.width+1,y:me}:{x:window.innerWidth-ye.width-me,y:-1};break;default:C=he==="horizontal"?{x:window.innerWidth-ye.width+1,y:window.innerHeight-ye.height-me}:{x:window.innerWidth-ye.width-me,y:window.innerHeight-ye.height+1};break}}const A=T<ft.width||N<ft.initialHeight,Y=x&&!A,F=a.current,Q=F.style;let J=null;const K=()=>{hd(),F.removeEventListener("transitionend",K),J&&(cancelAnimationFrame(J),J=null)};F.addEventListener("transitionend",K),Q.transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",J=requestAnimationFrame(()=>{Q.width=`${T}px`,Q.height=`${N}px`,Q.transform=`translate3d(${C.x}px, ${C.y}px, 0)`,J=null});const de={isFullWidth:T>=window.innerWidth-me*2,isFullHeight:N>=window.innerHeight-me*2,width:T,height:N,position:C};ne.value={corner:S,dimensions:de,lastDimensions:i?ne.value.lastDimensions:T>o.current?de:ne.value.lastDimensions,componentsTree:ne.value.componentsTree},Y&&Lt(Wn,{corner:ne.value.corner,dimensions:ne.value.dimensions,lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree}),hd()},[]),h=ot(x=>{if(x.preventDefault(),!a.current||x.target.closest("button"))return;const S=a.current,T=S.style,{dimensions:N}=ne.value,D=x.clientX,C=x.clientY,A=N.position.x,Y=N.position.y;let F=A,Q=Y,J=null,K=!1,de=D,re=C;const he=le=>{J||(K=!0,de=le.clientX,re=le.clientY,J=requestAnimationFrame(()=>{const Ye=de-D,He=re-C;F=Number(A)+Ye,Q=Number(Y)+He,T.transition="none",T.transform=`translate3d(${F}px, ${Q}px, 0)`;const Ue=F+N.width,_=Q+N.height,k=Math.max(0,-F),U=Math.max(0,Ue-window.innerWidth),I=Math.max(0,-Q),W=Math.max(0,_-window.innerHeight),E=Math.min(N.width,k+U),j=Math.min(N.height,I+W),$=E*N.height+j*N.width-E*j,Z=N.width*N.height;let P=$>Z*.35;if(!P&&Ae.options.value.showFPS){const ae=F+N.width,ue=ae-100;P=ae<=0||ue>=window.innerWidth||Q+N.height<=0||Q>=window.innerHeight}if(P){const ae=F+N.width/2,ue=Q+N.height/2,Me=window.innerWidth/2,be=window.innerHeight/2;let pt;ae<Me?pt=ue<be?"top-left":"bottom-left":pt=ue<be?"top-right":"bottom-right";let kn;const Jn=Math.max(k,U),Ma=Math.max(I,W);kn=Jn>Ma?"horizontal":"vertical",ne.value={...ne.value,corner:pt,lastDimensions:{...N,position:wo(pt,N.width,N.height)}};const bn={corner:pt,orientation:kn};Zt.value=bn,Lt(ds,bn),Lt(Wn,ne.value),u(!1),document.removeEventListener("pointermove",he),document.removeEventListener("pointerup",ye),J&&(cancelAnimationFrame(J),J=null)}J=null}))},ye=()=>{if(!S)return;J&&(cancelAnimationFrame(J),J=null),document.removeEventListener("pointermove",he),document.removeEventListener("pointerup",ye);const le=Math.abs(de-D),Ye=Math.abs(re-C),He=Math.sqrt(le*le+Ye*Ye);if(!K||He<60)return;const Ue=WS(de,re,D,C,ee.inspectState.value.kind==="focused"?80:40);if(Ue===ne.value.corner){T.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";const U=ne.value.dimensions.position;requestAnimationFrame(()=>{T.transform=`translate3d(${U.x}px, ${U.y}px, 0)`});return}const _=wo(Ue,N.width,N.height);if(F===A&&Q===Y)return;const k=()=>{T.transition="none",hd(),S.removeEventListener("transitionend",k),J&&(cancelAnimationFrame(J),J=null)};S.addEventListener("transitionend",k),T.transition="transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",requestAnimationFrame(()=>{T.transform=`translate3d(${_.x}px, ${_.y}px, 0)`}),ne.value={corner:Ue,dimensions:{isFullWidth:N.isFullWidth,isFullHeight:N.isFullHeight,width:N.width,height:N.height,position:_},lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree},Lt(Wn,{corner:Ue,dimensions:ne.value.dimensions,lastDimensions:ne.value.lastDimensions,componentsTree:ne.value.componentsTree})};document.addEventListener("pointermove",he),document.addEventListener("pointerup",ye)},[]),p=ot(x=>{if(x.preventDefault(),!a.current||!Zt.value)return;const{corner:S,orientation:T="horizontal"}=Zt.value,N=x.clientX,D=x.clientY;let C=null,A=!1;const Y=50,F=J=>{if(A||C)return;const K=J.clientX-N,de=J.clientY-D;let re=!1;if(T==="horizontal"?(S.endsWith("left")&&K>Y||S.endsWith("right")&&K<-Y)&&(re=!0):(S.startsWith("top")&&de>Y||S.startsWith("bottom")&&de<-Y)&&(re=!0),re){if(A=!0,Zt.value=null,Lt(ds,null),o.current===0&&a.current)requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const he=a.current.offsetWidth;o.current=he||300;const ye=ne.value.lastDimensions,le=is(ye.width,0,!0),Ye=is(ye.height,0,!1);let He=J.clientX-le/2,Ue=J.clientY-Ye/2;He=Math.max(me,Math.min(He,window.innerWidth-le-me)),Ue=Math.max(me,Math.min(Ue,window.innerHeight-Ye-me)),ne.value={...ne.value,dimensions:{...ne.value.dimensions,position:{x:He,y:Ue}}},u(!0);const _=Kn(Qi);Ie.value=_||{view:"none"},setTimeout(()=>{if(a.current){const k=new PointerEvent("pointerdown",{clientX:J.clientX,clientY:J.clientY,pointerId:J.pointerId,bubbles:!0});a.current.dispatchEvent(k)}},100)}});else{u(!0);const he=Kn(Qi);Ie.value=he||{view:"none"}}document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",Q)}},Q=()=>{document.removeEventListener("pointermove",F),document.removeEventListener("pointerup",Q)};document.addEventListener("pointermove",F),document.addEventListener("pointerup",Q)},[]);_e(()=>{if(!a.current)return;bv(Qi),Zt.value?(l.current=36,o.current=0):(a.current.style.width="min-content",l.current=36,o.current=a.current.offsetWidth),a.current.style.maxWidth=`calc(100vw - ${me*2}px)`,a.current.style.maxHeight=`calc(100vh - ${me*2}px)`,u(),ee.inspectState.value.kind!=="focused"&&!Zt.value&&!s.current&&(ne.value={...ne.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:o.current,height:l.current,position:ne.value.dimensions.position}}),Kd.value=a.current;const x=ne.subscribe(D=>{if(!a.current)return;const{x:C,y:A}=D.dimensions.position,{width:Y,height:F}=D.dimensions,Q=a.current;requestAnimationFrame(()=>{Q.style.transform=`translate3d(${C}px, ${A}px, 0)`,Q.style.width=`${Y}px`,Q.style.height=`${F}px`})}),S=Ie.subscribe(D=>{i.current=D.view!=="none",u(),Zt.value||(D.view!=="none"?Lt(Qi,D):bv(Qi))}),T=ee.inspectState.subscribe(D=>{i.current=D.kind==="focused",u()}),N=()=>{u(!0)};return window.addEventListener("resize",N,{passive:!0}),()=>{window.removeEventListener("resize",N),S(),T(),x(),Lt(Wn,{...Tn,corner:ne.value.corner})}},[]);const[m,g]=Se(!1);_e(()=>{g(!0)},[]);const b=Zt.value;let y="";if(b){const{orientation:x="horizontal",corner:S}=b;x==="horizontal"?y=S?.endsWith("right")?"rotate-180":"":y=S?.startsWith("bottom")?"-rotate-90":"rotate-90"}return f(Ne,{children:[f(VS,{}),f(Yf.Provider,{value:a.current,children:f("div",{id:"react-scan-toolbar",dir:"ltr",ref:a,onPointerDown:b?p:h,className:O("fixed inset-0",b?(()=>{const{orientation:x="horizontal",corner:S}=b;return x==="horizontal"?S?.endsWith("right")?"rounded-tl-lg rounded-bl-lg shadow-lg":"rounded-tr-lg rounded-br-lg shadow-lg":S?.startsWith("bottom")?"rounded-tl-lg rounded-tr-lg shadow-lg":"rounded-bl-lg rounded-br-lg shadow-lg"})():"rounded-lg shadow-lg","flex flex-col","font-mono text-[13px]","user-select-none","opacity-0",b?"cursor-pointer":"cursor-move","z-[124124124124]","animate-fade-in animation-duration-300 animation-delay-300","will-change-transform","[touch-action:none]"),children:b?f("button",{type:"button",onClick:()=>{Zt.value=null,Lt(ds,null),o.current===0&&a.current&&requestAnimationFrame(()=>{if(a.current){a.current.style.width="min-content";const S=a.current.offsetWidth;o.current=S||300,u(!0)}});const x=Kn(Qi);Ie.value=x||{view:"none"}},className:"flex items-center justify-center w-full h-full text-white",title:"Expand toolbar",children:f(nt,{name:"icon-chevron-right",size:16,className:O("transition-transform",y)})}):f(Ne,{children:[f(rs,{position:"top"}),f(rs,{position:"bottom"}),f(rs,{position:"left"}),f(rs,{position:"right"}),f(qS,{})]})})})]})},Yf=N0(null),JS=()=>f("svg",{xmlns:"http://www.w3.org/2000/svg",style:"display: none;",children:[f("title",{children:"React Scan Icons"}),f("symbol",{id:"icon-inspect",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M5 3a2 2 0 0 0-2 2"}),f("path",{d:"M19 3a2 2 0 0 1 2 2"}),f("path",{d:"M5 21a2 2 0 0 1-2-2"}),f("path",{d:"M9 3h1"}),f("path",{d:"M9 21h2"}),f("path",{d:"M14 3h1"}),f("path",{d:"M3 9v1"}),f("path",{d:"M21 9v2"}),f("path",{d:"M3 14v1"})]}),f("symbol",{id:"icon-focus",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}),f("path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"})]}),f("symbol",{id:"icon-next",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z"})}),f("symbol",{id:"icon-previous",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z"})}),f("symbol",{id:"icon-close",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),f("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),f("symbol",{id:"icon-replay",viewBox:"0 0 24 24",fill:"none","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}),f("path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}),f("path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}),f("path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}),f("circle",{cx:"12",cy:"12",r:"1"}),f("path",{d:"M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"})]}),f("symbol",{id:"icon-ellipsis",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"12",cy:"12",r:"1"}),f("circle",{cx:"19",cy:"12",r:"1"}),f("circle",{cx:"5",cy:"12",r:"1"})]}),f("symbol",{id:"icon-copy",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2"}),f("path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"})]}),f("symbol",{id:"icon-check",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"M20 6 9 17l-5-5"})}),f("symbol",{id:"icon-chevron-right",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:f("path",{d:"m9 18 6-6-6-6"})}),f("symbol",{id:"icon-settings",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}),f("circle",{cx:"12",cy:"12",r:"3"})]}),f("symbol",{id:"icon-flame",viewBox:"0 0 24 24",children:f("path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"})}),f("symbol",{id:"icon-function",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}),f("path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"}),f("path",{d:"M9 11.2h5.7"})]}),f("symbol",{id:"icon-triangle-alert",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}),f("path",{d:"M12 9v4"}),f("path",{d:"M12 17h.01"})]}),f("symbol",{id:"icon-gallery-horizontal-end",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 7v10"}),f("path",{d:"M6 5v14"}),f("rect",{width:"12",height:"18",x:"10",y:"3",rx:"2"})]}),f("symbol",{id:"icon-search",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("circle",{cx:"11",cy:"11",r:"8"}),f("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),f("symbol",{id:"icon-lock",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),f("symbol",{id:"icon-lock-open",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2"}),f("path",{d:"M7 11V7a5 5 0 0 1 9.9-1"})]}),f("symbol",{id:"icon-sanil",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[f("path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"}),f("circle",{cx:"10",cy:"13",r:"8"}),f("path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"}),f("path",{d:"M18 3 19.1 5.2"})]})]}),PS=class extends cn{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(a){return{hasError:!0,error:a}}render(){return this.state.hasError?f("div",{className:"fixed bottom-4 right-4 z-[124124124124]",children:f("div",{className:"p-3 bg-black rounded-lg shadow-lg w-80",children:[f("div",{className:"flex items-center gap-2 mb-2 text-red-400 text-sm font-medium",children:[f(nt,{name:"icon-flame",className:"text-red-500",size:14}),"React Scan ran into a problem"]}),f("div",{className:"p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words",children:this.state.error?.message||JSON.stringify(this.state.error)}),f("button",{type:"button",onClick:this.handleReset,className:"px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5",children:"Restart"})]})}):this.props.children}},eT=a=>{const i=document.createElement("div");i.id="react-scan-toolbar-root",window.__REACT_SCAN_TOOLBAR_CONTAINER__=i,a.appendChild(i),vo(f(PS,{children:f(Ne,{children:[f(JS,{}),f(KS,{})]})}),i);const o=i.remove.bind(i);return i.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,i.hasChildNodes()&&(vo(null,i),vo(null,i)),o()},i},tT={version:"0.4.3"},Ja=null,so=null,nT=()=>{if(Ja&&so)return{rootContainer:Ja,shadowRoot:so};Ja=document.createElement("div"),Ja.id="react-scan-root",so=Ja.attachShadow({mode:"open"});const a=document.createElement("style");return a.textContent=b_,so.appendChild(a),document.documentElement.appendChild(Ja),{rootContainer:Ja,shadowRoot:so}},ee={wasDetailsOpen:ht(!0),isInIframe:ht(zn&&window.self!==window.top),inspectState:ht({kind:"uninitialized"}),monitor:ht(null),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:ht(0),interactionListeningForRenders:null,changesListeners:new Map},Ae={instrumentation:null,componentAllowList:null,options:ht({enabled:!0,log:!1,showToolbar:!0,animationSpeed:"fast",dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,scheduledOutlines:new Map,activeOutlines:new Map,Store:ee,version:tT.version};zn&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=Ae.version);function aT(a){return a in Ae.options.value}var Ty=a=>{const i=[],o={};for(const l in a){if(!aT(l))continue;const s=a[l];switch(l){case"enabled":case"log":case"showToolbar":case"showNotificationCount":case"dangerouslyForceRunInProduction":case"showFPS":case"allowInIframe":typeof s!="boolean"?i.push(`- ${l} must be a boolean. Got "${s}"`):o[l]=s;break;case"animationSpeed":["slow","fast","off"].includes(s)?o[l]=s:i.push(`- Invalid animation speed "${s}". Using default "fast"`);break;case"onCommitStart":typeof s!="function"?i.push(`- ${l} must be a function. Got "${s}"`):o.onCommitStart=s;break;case"onCommitFinish":typeof s!="function"?i.push(`- ${l} must be a function. Got "${s}"`):o.onCommitFinish=s;break;case"onRender":typeof s!="function"?i.push(`- ${l} must be a function. Got "${s}"`):o.onRender=s;break;case"onPaintStart":case"onPaintFinish":typeof s!="function"?i.push(`- ${l} must be a function. Got "${s}"`):o[l]=s;break;default:i.push(`- Unknown option "${l}"`)}}return i.length>0&&console.warn(`[React Scan] Invalid options:
${i.join(`
`)}`),o},iT=a=>{try{const i=Ty(a);if(Object.keys(i).length===0)return;const o="showToolbar"in i&&i.showToolbar!==void 0,l={...Ae.options.value,...i},{instrumentation:s}=Ae;s&&"enabled"in i&&(s.isPaused.value=i.enabled===!1),Ae.options.value=l;try{const u=Kn("react-scan-options")?.enabled;typeof u=="boolean"&&(l.enabled=u)}catch(u){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",u)}return Lt("react-scan-options",l),o&&Cy(!!l.showToolbar),l}catch(i){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",i)}},rT=()=>Ae.options,os=null,Jv,qs=()=>{if(os!==null)return os;Jv??=sr();for(const a of Jv.renderers.values())N1(a)==="production"&&(os=!0);return os},oT=()=>{try{if(!zn||!Ae.runInAllEnvironments&&qs()&&!Ae.options.value.dangerouslyForceRunInProduction)return;const a=Kn("react-scan-options");if(a){const o=Ty(a);Object.keys(o).length>0&&(Ae.options.value={...Ae.options.value,...o})}const i=rT();y_(()=>{Cy(!!i.value.showToolbar)}),!ee.monitor.value&&zn&&setTimeout(()=>{A1()||console.error("[React Scan] Failed to load. Must import React Scan before React runs.")},5e3)}catch(a){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},Cy=a=>{window.reactScanCleanupListeners?.();const i=Q_(),o=lT();window.reactScanCleanupListeners=()=>{i(),o?.()};const l=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!a){l?.remove();return}l?.remove();const{shadowRoot:s}=nT();eT(s)},lT=()=>{try{const a=document.documentElement;return vS(a)}catch(a){Ae.options.value._debug==="verbose"&&console.error("[React Scan Internal Error]","Failed to create notifications outline canvas",a)}},sT=(a={})=>{iT(a),!(ee.isInIframe.value&&!Ae.options.value.allowInIframe&&!Ae.runInAllEnvironments)&&(a.enabled===!1&&a.showToolbar!==!0||oT())},cT=new WeakSet,Ad={exports:{}},co={},Md={exports:{}},Od={};var Pv;function uT(){return Pv||(Pv=1,(function(a){function i(_,k){var U=_.length;_.push(k);e:for(;0<U;){var I=U-1>>>1,W=_[I];if(0<s(W,k))_[I]=k,_[U]=W,U=I;else break e}}function o(_){return _.length===0?null:_[0]}function l(_){if(_.length===0)return null;var k=_[0],U=_.pop();if(U!==k){_[0]=U;e:for(var I=0,W=_.length,E=W>>>1;I<E;){var j=2*(I+1)-1,$=_[j],Z=j+1,P=_[Z];if(0>s($,U))Z<W&&0>s(P,$)?(_[I]=P,_[Z]=U,I=Z):(_[I]=$,_[j]=U,I=j);else if(Z<W&&0>s(P,U))_[I]=P,_[Z]=U,I=Z;else break e}}return k}function s(_,k){var U=_.sortIndex-k.sortIndex;return U!==0?U:_.id-k.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();a.unstable_now=function(){return h.now()-p}}var m=[],g=[],b=1,y=null,x=3,S=!1,T=!1,N=!1,D=!1,C=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function F(_){for(var k=o(g);k!==null;){if(k.callback===null)l(g);else if(k.startTime<=_)l(g),k.sortIndex=k.expirationTime,i(m,k);else break;k=o(g)}}function Q(_){if(N=!1,F(_),!T)if(o(m)!==null)T=!0,J||(J=!0,le());else{var k=o(g);k!==null&&Ue(Q,k.startTime-_)}}var J=!1,K=-1,de=5,re=-1;function he(){return D?!0:!(a.unstable_now()-re<de)}function ye(){if(D=!1,J){var _=a.unstable_now();re=_;var k=!0;try{e:{T=!1,N&&(N=!1,A(K),K=-1),S=!0;var U=x;try{t:{for(F(_),y=o(m);y!==null&&!(y.expirationTime>_&&he());){var I=y.callback;if(typeof I=="function"){y.callback=null,x=y.priorityLevel;var W=I(y.expirationTime<=_);if(_=a.unstable_now(),typeof W=="function"){y.callback=W,F(_),k=!0;break t}y===o(m)&&l(m),F(_)}else l(m);y=o(m)}if(y!==null)k=!0;else{var E=o(g);E!==null&&Ue(Q,E.startTime-_),k=!1}}break e}finally{y=null,x=U,S=!1}k=void 0}}finally{k?le():J=!1}}}var le;if(typeof Y=="function")le=function(){Y(ye)};else if(typeof MessageChannel<"u"){var Ye=new MessageChannel,He=Ye.port2;Ye.port1.onmessage=ye,le=function(){He.postMessage(null)}}else le=function(){C(ye,0)};function Ue(_,k){K=C(function(){_(a.unstable_now())},k)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(_){_.callback=null},a.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):de=0<_?Math.floor(1e3/_):5},a.unstable_getCurrentPriorityLevel=function(){return x},a.unstable_next=function(_){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var U=x;x=k;try{return _()}finally{x=U}},a.unstable_requestPaint=function(){D=!0},a.unstable_runWithPriority=function(_,k){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var U=x;x=_;try{return k()}finally{x=U}},a.unstable_scheduleCallback=function(_,k,U){var I=a.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?I+U:I):U=I,_){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=U+W,_={id:b++,callback:k,priorityLevel:_,startTime:U,expirationTime:W,sortIndex:-1},U>I?(_.sortIndex=U,i(g,_),o(m)===null&&_===o(g)&&(N?(A(K),K=-1):N=!0,Ue(Q,U-I))):(_.sortIndex=W,i(m,_),T||S||(T=!0,J||(J=!0,le()))),_},a.unstable_shouldYield=he,a.unstable_wrapCallback=function(_){var k=x;return function(){var U=x;x=k;try{return _.apply(this,arguments)}finally{x=U}}}})(Od)),Od}var e0;function dT(){return e0||(e0=1,Md.exports=uT()),Md.exports}var Dd={exports:{}},kt={};var t0;function fT(){if(t0)return kt;t0=1;var a=Ef();function i(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)g+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(m,g,b){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:y==null?null:""+y,children:m,containerInfo:g,implementation:b}}var h=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,kt.createPortal=function(m,g){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return u(m,g,null,b)},kt.flushSync=function(m){var g=h.T,b=l.p;try{if(h.T=null,l.p=2,m)return m()}finally{h.T=g,l.p=b,l.d.f()}},kt.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(m,g))},kt.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},kt.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var b=g.as,y=p(b,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,S=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;b==="style"?l.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:y,integrity:x,fetchPriority:S}):b==="script"&&l.d.X(m,{crossOrigin:y,integrity:x,fetchPriority:S,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},kt.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var b=p(g.as,g.crossOrigin);l.d.M(m,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(m)},kt.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var b=g.as,y=p(b,g.crossOrigin);l.d.L(m,b,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},kt.preloadModule=function(m,g){if(typeof m=="string")if(g){var b=p(g.as,g.crossOrigin);l.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(m)},kt.requestFormReset=function(m){l.d.r(m)},kt.unstable_batchedUpdates=function(m,g){return m(g)},kt.useFormState=function(m,g,b){return h.H.useFormState(m,g,b)},kt.useFormStatus=function(){return h.H.useHostTransitionStatus()},kt.version="19.2.7",kt}var n0;function Ey(){if(n0)return Dd.exports;n0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Dd.exports=fT(),Dd.exports}var a0;function hT(){if(a0)return co;a0=1;var a=dT(),i=Ef(),o=Ey();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function h(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(l(188))}function g(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var c=n.return;if(c===null)break;var d=c.alternate;if(d===null){if(r=c.return,r!==null){n=r;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===n)return m(c),e;if(d===r)return m(c),t;d=d.sibling}throw Error(l(188))}if(n.return!==r.return)n=c,r=d;else{for(var v=!1,w=c.child;w;){if(w===n){v=!0,n=c,r=d;break}if(w===r){v=!0,r=c,n=d;break}w=w.sibling}if(!v){for(w=d.child;w;){if(w===n){v=!0,n=d,r=c;break}if(w===r){v=!0,r=d,n=c;break}w=w.sibling}if(!v)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function b(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=b(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=ye&&e[ye]||e["@@iterator"],typeof e=="function"?e:null)}var Ye=Symbol.for("react.client.reference");function He(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case C:return"Profiler";case D:return"StrictMode";case Q:return"Suspense";case J:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case Y:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:He(e.type)||"Memo";case de:t=e._payload,e=e._init;try{return He(e(t))}catch{}}return null}var Ue=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},I=[],W=-1;function E(e){return{current:e}}function j(e){0>W||(e.current=I[W],I[W]=null,W--)}function $(e,t){W++,I[W]=e.current,e.current=t}var Z=E(null),P=E(null),ae=E(null),ue=E(null);function Me(e,t){switch($(ae,t),$(P,e),$(Z,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ug(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ug(t),e=dg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Z),$(Z,e)}function be(){j(Z),j(P),j(ae)}function pt(e){e.memoizedState!==null&&$(ue,e);var t=Z.current,n=dg(t,e.type);t!==n&&($(P,e),$(Z,n))}function kn(e){P.current===e&&(j(Z),j(P)),ue.current===e&&(j(ue),eo._currentValue=U)}var Jn,Ma;function bn(e){if(Jn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Jn=t&&t[1]||"",Ma=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jn+e+Ma}var Vs=!1;function Fs(e,t){if(!e||Vs)return"";Vs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(X){var B=X}Reflect.construct(e,[],G)}else{try{G.call()}catch(X){B=X}e.call(G.prototype)}}else{try{throw Error()}catch(X){B=X}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(X){if(X&&B&&typeof X.stack=="string")return[X.stack,B.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=r.DetermineComponentFrameRoot(),v=d[0],w=d[1];if(v&&w){var z=v.split(`
`),L=w.split(`
`);for(c=r=0;r<z.length&&!z[r].includes("DetermineComponentFrameRoot");)r++;for(;c<L.length&&!L[c].includes("DetermineComponentFrameRoot");)c++;if(r===z.length||c===L.length)for(r=z.length-1,c=L.length-1;1<=r&&0<=c&&z[r]!==L[c];)c--;for(;1<=r&&0<=c;r--,c--)if(z[r]!==L[c]){if(r!==1||c!==1)do if(r--,c--,0>c||z[r]!==L[c]){var q=`
`+z[r].replace(" at new "," at ");return e.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",e.displayName)),q}while(1<=r&&0<=c);break}}}finally{Vs=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?bn(n):""}function Ay(e,t){switch(e.tag){case 26:case 27:case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return e.child!==t&&t!==null?bn("Suspense Fallback"):bn("Suspense");case 19:return bn("SuspenseList");case 0:case 15:return Fs(e.type,!1);case 11:return Fs(e.type.render,!1);case 1:return Fs(e.type,!0);case 31:return bn("Activity");default:return""}}function Xf(e){try{var t="",n=null;do t+=Ay(e,n),n=e,e=e.return;while(e);return t}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var $s=Object.prototype.hasOwnProperty,Gs=a.unstable_scheduleCallback,Is=a.unstable_cancelCallback,My=a.unstable_shouldYield,Oy=a.unstable_requestPaint,Bt=a.unstable_now,Dy=a.unstable_getCurrentPriorityLevel,qf=a.unstable_ImmediatePriority,Vf=a.unstable_UserBlockingPriority,Ro=a.unstable_NormalPriority,Ry=a.unstable_LowPriority,Ff=a.unstable_IdlePriority,Uy=a.log,jy=a.unstable_setDisableYieldValue,fr=null,Yt=null;function Pn(e){if(typeof Uy=="function"&&jy(e),Yt&&typeof Yt.setStrictMode=="function")try{Yt.setStrictMode(fr,e)}catch{}}var Xt=Math.clz32?Math.clz32:By,Hy=Math.log,Ly=Math.LN2;function By(e){return e>>>=0,e===0?32:31-(Hy(e)/Ly|0)|0}var Uo=256,jo=262144,Ho=4194304;function Oa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lo(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var c=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var w=r&134217727;return w!==0?(r=w&~d,r!==0?c=Oa(r):(v&=w,v!==0?c=Oa(v):n||(n=w&~e,n!==0&&(c=Oa(n))))):(w=r&~d,w!==0?c=Oa(w):v!==0?c=Oa(v):n||(n=r&~e,n!==0&&(c=Oa(n)))),c===0?0:t!==0&&t!==c&&(t&d)===0&&(d=c&-c,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:c}function hr(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yy(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(){var e=Ho;return Ho<<=1,(Ho&62914560)===0&&(Ho=4194304),e}function Qs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function pr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xy(e,t,n,r,c,d){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var w=e.entanglements,z=e.expirationTimes,L=e.hiddenUpdates;for(n=v&~n;0<n;){var q=31-Xt(n),G=1<<q;w[q]=0,z[q]=-1;var B=L[q];if(B!==null)for(L[q]=null,q=0;q<B.length;q++){var X=B[q];X!==null&&(X.lane&=-536870913)}n&=~G}r!==0&&Gf(e,r,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~t))}function Gf(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Xt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function If(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Xt(n),c=1<<r;c&t|e[r]&t&&(e[r]|=t),n&=~c}}function Qf(e,t){var n=t&-t;return n=(n&42)!==0?1:Zs(n),(n&(e.suspendedLanes|t))!==0?0:n}function Zs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zf(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Rg(e.type))}function Wf(e,t){var n=k.p;try{return k.p=e,t()}finally{k.p=n}}var ea=Math.random().toString(36).slice(2),xt="__reactFiber$"+ea,Mt="__reactProps$"+ea,ui="__reactContainer$"+ea,Ks="__reactEvents$"+ea,qy="__reactListeners$"+ea,Vy="__reactHandles$"+ea,Kf="__reactResources$"+ea,mr="__reactMarker$"+ea;function Js(e){delete e[xt],delete e[Mt],delete e[Ks],delete e[qy],delete e[Vy]}function di(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ui]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yg(e);e!==null;){if(n=e[xt])return n;e=yg(e)}return t}e=n,n=e.parentNode}return null}function fi(e){if(e=e[xt]||e[ui]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function hi(e){var t=e[Kf];return t||(t=e[Kf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vt(e){e[mr]=!0}var Jf=new Set,Pf={};function Da(e,t){pi(e,t),pi(e+"Capture",t)}function pi(e,t){for(Pf[e]=t,e=0;e<t.length;e++)Jf.add(t[e])}var Fy=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),eh={},th={};function $y(e){return $s.call(th,e)?!0:$s.call(eh,e)?!1:Fy.test(e)?th[e]=!0:(eh[e]=!0,!1)}function Bo(e,t,n){if($y(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Yo(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Nn(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gy(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(v){n=""+v,d.call(this,v)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(v){n=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ps(e){if(!e._valueTracker){var t=nh(e)?"checked":"value";e._valueTracker=Gy(e,t,""+e[t])}}function ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=nh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Iy=/[\n"\\]/g;function Jt(e){return e.replace(Iy,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ec(e,t,n,r,c,d,v,w){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?tc(e,v,Kt(t)):n!=null?tc(e,v,Kt(n)):r!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Kt(w):e.removeAttribute("name")}function ih(e,t,n,r,c,d,v,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){Ps(e);return}n=n!=null?""+Kt(n):"",t=t!=null?""+Kt(t):n,w||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=w?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ps(e)}function tc(e,t,n){t==="number"&&Xo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function mi(e,t,n,r){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function rh(e,t,n){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kt(n):""}function oh(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(l(92));if(Ue(r)){if(1<r.length)throw Error(l(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Kt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r),Ps(e)}function gi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function lh(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||Qy.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function sh(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&n[c]!==r&&lh(e,c,r)}else for(var d in t)t.hasOwnProperty(d)&&lh(e,d,t[d])}function nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qo(e){return Wy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function An(){}var ac=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,yi=null;function ch(e){var t=fi(e);if(t&&(e=t.stateNode)){var n=e[Mt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ec(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Jt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var c=r[Mt]||null;if(!c)throw Error(l(90));ec(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&ah(r)}break e;case"textarea":rh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&mi(e,!!n.multiple,t,!1)}}}var rc=!1;function uh(e,t,n){if(rc)return e(t,n);rc=!0;try{var r=e(t);return r}finally{if(rc=!1,(vi!==null||yi!==null)&&(Nl(),vi&&(t=vi,e=yi,yi=vi=null,ch(t),e)))for(t=0;t<e.length;t++)ch(e[t])}}function vr(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Mt]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oc=!1;if(Mn)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){oc=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{oc=!1}var ta=null,lc=null,Vo=null;function dh(){if(Vo)return Vo;var e,t=lc,n=t.length,r,c="value"in ta?ta.value:ta.textContent,d=c.length;for(e=0;e<n&&t[e]===c[e];e++);var v=n-e;for(r=1;r<=v&&t[n-r]===c[d-r];r++);return Vo=c.slice(e,1<r?1-r:void 0)}function Fo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function fh(){return!1}function Ot(e){function t(n,r,c,d,v){this._reactName=n,this._targetInst=c,this.type=r,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(n=e[w],this[w]=n?n(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?$o:fh,this.isPropagationStopped=fh,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Go=Ot(Ra),br=y({},Ra,{view:0,detail:0}),Ky=Ot(br),sc,cc,wr,Io=y({},br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wr&&(wr&&e.type==="mousemove"?(sc=e.screenX-wr.screenX,cc=e.screenY-wr.screenY):cc=sc=0,wr=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:cc}}),hh=Ot(Io),Jy=y({},Io,{dataTransfer:0}),Py=Ot(Jy),eb=y({},br,{relatedTarget:0}),uc=Ot(eb),tb=y({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),nb=Ot(tb),ab=y({},Ra,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ib=Ot(ab),rb=y({},Ra,{data:0}),ph=Ot(rb),ob={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sb[e])?!!t[e]:!1}function dc(){return cb}var ub=y({},br,{key:function(e){if(e.key){var t=ob[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Fo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?Fo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),db=Ot(ub),fb=y({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mh=Ot(fb),hb=y({},br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),pb=Ot(hb),mb=y({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),gb=Ot(mb),vb=y({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yb=Ot(vb),bb=y({},Ra,{newState:0,oldState:0}),wb=Ot(bb),xb=[9,13,27,32],fc=Mn&&"CompositionEvent"in window,xr=null;Mn&&"documentMode"in document&&(xr=document.documentMode);var _b=Mn&&"TextEvent"in window&&!xr,gh=Mn&&(!fc||xr&&8<xr&&11>=xr),vh=" ",yh=!1;function bh(e,t){switch(e){case"keyup":return xb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bi=!1;function Sb(e,t){switch(e){case"compositionend":return wh(t);case"keypress":return t.which!==32?null:(yh=!0,vh);case"textInput":return e=t.data,e===vh&&yh?null:e;default:return null}}function Tb(e,t){if(bi)return e==="compositionend"||!fc&&bh(e,t)?(e=dh(),Vo=lc=ta=null,bi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gh&&t.locale!=="ko"?null:t.data;default:return null}}var Cb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cb[e.type]:t==="textarea"}function _h(e,t,n,r){vi?yi?yi.push(r):yi=[r]:vi=r,t=jl(t,"onChange"),0<t.length&&(n=new Go("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _r=null,Sr=null;function Eb(e){ig(e,0)}function Qo(e){var t=gr(e);if(ah(t))return e}function Sh(e,t){if(e==="change")return t}var Th=!1;if(Mn){var hc;if(Mn){var pc="oninput"in document;if(!pc){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),pc=typeof Ch.oninput=="function"}hc=pc}else hc=!1;Th=hc&&(!document.documentMode||9<document.documentMode)}function Eh(){_r&&(_r.detachEvent("onpropertychange",zh),Sr=_r=null)}function zh(e){if(e.propertyName==="value"&&Qo(Sr)){var t=[];_h(t,Sr,e,ic(e)),uh(Eb,t)}}function zb(e,t,n){e==="focusin"?(Eh(),_r=t,Sr=n,_r.attachEvent("onpropertychange",zh)):e==="focusout"&&Eh()}function kb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(Sr)}function Nb(e,t){if(e==="click")return Qo(t)}function Ab(e,t){if(e==="input"||e==="change")return Qo(t)}function Mb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qt=typeof Object.is=="function"?Object.is:Mb;function Tr(e,t){if(qt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var c=n[r];if(!$s.call(t,c)||!qt(e[c],t[c]))return!1}return!0}function kh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nh(e,t){var n=kh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=kh(n)}}function Ah(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ah(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Mh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Xo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xo(e.document)}return t}function mc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ob=Mn&&"documentMode"in document&&11>=document.documentMode,wi=null,gc=null,Cr=null,vc=!1;function Oh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vc||wi==null||wi!==Xo(r)||(r=wi,"selectionStart"in r&&mc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cr&&Tr(Cr,r)||(Cr=r,r=jl(gc,"onSelect"),0<r.length&&(t=new Go("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=wi)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var xi={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionrun:Ua("Transition","TransitionRun"),transitionstart:Ua("Transition","TransitionStart"),transitioncancel:Ua("Transition","TransitionCancel"),transitionend:Ua("Transition","TransitionEnd")},yc={},Dh={};Mn&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete xi.animationend.animation,delete xi.animationiteration.animation,delete xi.animationstart.animation),"TransitionEvent"in window||delete xi.transitionend.transition);function ja(e){if(yc[e])return yc[e];if(!xi[e])return e;var t=xi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dh)return yc[e]=t[n];return e}var Rh=ja("animationend"),Uh=ja("animationiteration"),jh=ja("animationstart"),Db=ja("transitionrun"),Rb=ja("transitionstart"),Ub=ja("transitioncancel"),Hh=ja("transitionend"),Lh=new Map,bc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");bc.push("scrollEnd");function un(e,t){Lh.set(e,t),Da(t,[e])}var Zo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pt=[],_i=0,wc=0;function Wo(){for(var e=_i,t=wc=_i=0;t<e;){var n=Pt[t];Pt[t++]=null;var r=Pt[t];Pt[t++]=null;var c=Pt[t];Pt[t++]=null;var d=Pt[t];if(Pt[t++]=null,r!==null&&c!==null){var v=r.pending;v===null?c.next=c:(c.next=v.next,v.next=c),r.pending=c}d!==0&&Bh(n,c,d)}}function Ko(e,t,n,r){Pt[_i++]=e,Pt[_i++]=t,Pt[_i++]=n,Pt[_i++]=r,wc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function xc(e,t,n,r){return Ko(e,t,n,r),Jo(e)}function Ha(e,t){return Ko(e,null,null,t),Jo(e)}function Bh(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var c=!1,d=e.return;d!==null;)d.childLanes|=n,r=d.alternate,r!==null&&(r.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&t!==null&&(c=31-Xt(n),e=d.hiddenUpdates,r=e[c],r===null?e[c]=[t]:r.push(t),t.lane=n|536870912),d):null}function Jo(e){if(50<Ir)throw Ir=0,Au=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Si={};function jb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vt(e,t,n,r){return new jb(e,t,n,r)}function _c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function On(e,t){var n=e.alternate;return n===null?(n=Vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Yh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Po(e,t,n,r,c,d){var v=0;if(r=e,typeof e=="function")_c(e)&&(v=1);else if(typeof e=="string")v=Xw(e,n,Z.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=Vt(31,n,t,c),e.elementType=re,e.lanes=d,e;case N:return La(n.children,c,d,t);case D:v=8,c|=24;break;case C:return e=Vt(12,n,t,c|2),e.elementType=C,e.lanes=d,e;case Q:return e=Vt(13,n,t,c),e.elementType=Q,e.lanes=d,e;case J:return e=Vt(19,n,t,c),e.elementType=J,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:v=10;break e;case A:v=9;break e;case F:v=11;break e;case K:v=14;break e;case de:v=16,r=null;break e}v=29,n=Error(l(130,e===null?"null":typeof e,"")),r=null}return t=Vt(v,n,t,c),t.elementType=e,t.type=r,t.lanes=d,t}function La(e,t,n,r){return e=Vt(7,e,r,t),e.lanes=n,e}function Sc(e,t,n){return e=Vt(6,e,null,t),e.lanes=n,e}function Xh(e){var t=Vt(18,null,null,0);return t.stateNode=e,t}function Tc(e,t,n){return t=Vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var qh=new WeakMap;function en(e,t){if(typeof e=="object"&&e!==null){var n=qh.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Xf(t)},qh.set(e,t),t)}return{value:e,source:t,stack:Xf(t)}}var Ti=[],Ci=0,el=null,Er=0,tn=[],nn=0,na=null,wn=1,xn="";function Dn(e,t){Ti[Ci++]=Er,Ti[Ci++]=el,el=e,Er=t}function Vh(e,t,n){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,na=e;var r=wn;e=xn;var c=32-Xt(r)-1;r&=~(1<<c),n+=1;var d=32-Xt(t)+c;if(30<d){var v=c-c%5;d=(r&(1<<v)-1).toString(32),r>>=v,c-=v,wn=1<<32-Xt(t)+c|n<<c|r,xn=d+e}else wn=1<<d|n<<c|r,xn=e}function Cc(e){e.return!==null&&(Dn(e,1),Vh(e,1,0))}function Ec(e){for(;e===el;)el=Ti[--Ci],Ti[Ci]=null,Er=Ti[--Ci],Ti[Ci]=null;for(;e===na;)na=tn[--nn],tn[nn]=null,xn=tn[--nn],tn[nn]=null,wn=tn[--nn],tn[nn]=null}function Fh(e,t){tn[nn++]=wn,tn[nn++]=xn,tn[nn++]=na,wn=t.id,xn=t.overflow,na=e}var _t=null,Qe=null,ke=!1,aa=null,an=!1,zc=Error(l(519));function ia(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zr(en(t,e)),zc}function $h(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[xt]=e,t[Mt]=r,n){case"dialog":Ce("cancel",t),Ce("close",t);break;case"iframe":case"object":case"embed":Ce("load",t);break;case"video":case"audio":for(n=0;n<Zr.length;n++)Ce(Zr[n],t);break;case"source":Ce("error",t);break;case"img":case"image":case"link":Ce("error",t),Ce("load",t);break;case"details":Ce("toggle",t);break;case"input":Ce("invalid",t),ih(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",t);break;case"textarea":Ce("invalid",t),oh(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||sg(t.textContent,n)?(r.popover!=null&&(Ce("beforetoggle",t),Ce("toggle",t)),r.onScroll!=null&&Ce("scroll",t),r.onScrollEnd!=null&&Ce("scrollend",t),r.onClick!=null&&(t.onclick=An),t=!0):t=!1,t||ia(e,!0)}function Gh(e){for(_t=e.return;_t;)switch(_t.tag){case 5:case 31:case 13:an=!1;return;case 27:case 3:an=!0;return;default:_t=_t.return}}function Ei(e){if(e!==_t)return!1;if(!ke)return Gh(e),ke=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$u(e.type,e.memoizedProps)),n=!n),n&&Qe&&ia(e),Gh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Qe=vg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Qe=vg(e)}else t===27?(t=Qe,ya(e.type)?(e=Wu,Wu=null,Qe=e):Qe=t):Qe=_t?on(e.stateNode.nextSibling):null;return!0}function Ba(){Qe=_t=null,ke=!1}function kc(){var e=aa;return e!==null&&(jt===null?jt=e:jt.push.apply(jt,e),aa=null),e}function zr(e){aa===null?aa=[e]:aa.push(e)}var Nc=E(null),Ya=null,Rn=null;function ra(e,t,n){$(Nc,t._currentValue),t._currentValue=n}function Un(e){e._currentValue=Nc.current,j(Nc)}function Ac(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Mc(e,t,n,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var v=c.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=c;for(var z=0;z<t.length;z++)if(w.context===t[z]){d.lanes|=n,w=d.alternate,w!==null&&(w.lanes|=n),Ac(d.return,n,e),r||(v=null);break e}d=w.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(l(341));v.lanes|=n,d=v.alternate,d!==null&&(d.lanes|=n),Ac(v,n,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function zi(e,t,n,r){e=null;for(var c=t,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var w=c.type;qt(c.pendingProps.value,v.value)||(e!==null?e.push(w):e=[w])}}else if(c===ue.current){if(v=c.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(eo):e=[eo])}c=c.return}e!==null&&Mc(t,e,n,r),t.flags|=262144}function tl(e){for(e=e.firstContext;e!==null;){if(!qt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Xa(e){Ya=e,Rn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function St(e){return Ih(Ya,e)}function nl(e,t){return Ya===null&&Xa(e),Ih(e,t)}function Ih(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rn===null){if(e===null)throw Error(l(308));Rn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rn=Rn.next=t;return n}var Hb=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Lb=a.unstable_scheduleCallback,Bb=a.unstable_NormalPriority,st={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oc(){return{controller:new Hb,data:new Map,refCount:0}}function kr(e){e.refCount--,e.refCount===0&&Lb(Bb,function(){e.controller.abort()})}var Nr=null,Dc=0,ki=0,Ni=null;function Yb(e,t){if(Nr===null){var n=Nr=[];Dc=0,ki=ju(),Ni={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Dc++,t.then(Qh,Qh),t}function Qh(){if(--Dc===0&&Nr!==null){Ni!==null&&(Ni.status="fulfilled");var e=Nr;Nr=null,ki=0,Ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Xb(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),r}var Zh=_.S;_.S=function(e,t){Om=Bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Yb(e,t),Zh!==null&&Zh(e,t)};var qa=E(null);function Rc(){var e=qa.current;return e!==null?e:Fe.pooledCache}function al(e,t){t===null?$(qa,qa.current):$(qa,t.pool)}function Wh(){var e=Rc();return e===null?null:{parent:st._currentValue,pool:e}}var Ai=Error(l(460)),Uc=Error(l(474)),il=Error(l(542)),rl={then:function(){}};function Kh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(An,An),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ep(e),e;default:if(typeof t.status=="string")t.then(An,An);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ep(e),e}throw Fa=t,Ai}}function Va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Fa=n,Ai):n}}var Fa=null;function Ph(){if(Fa===null)throw Error(l(459));var e=Fa;return Fa=null,e}function ep(e){if(e===Ai||e===il)throw Error(l(483))}var Mi=null,Ar=0;function ol(e){var t=Ar;return Ar+=1,Mi===null&&(Mi=[]),Jh(Mi,e,t)}function Mr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ll(e,t){throw t.$$typeof===x?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function tp(e){function t(R,M){if(e){var H=R.deletions;H===null?(R.deletions=[M],R.flags|=16):H.push(M)}}function n(R,M){if(!e)return null;for(;M!==null;)t(R,M),M=M.sibling;return null}function r(R){for(var M=new Map;R!==null;)R.key!==null?M.set(R.key,R):M.set(R.index,R),R=R.sibling;return M}function c(R,M){return R=On(R,M),R.index=0,R.sibling=null,R}function d(R,M,H){return R.index=H,e?(H=R.alternate,H!==null?(H=H.index,H<M?(R.flags|=67108866,M):H):(R.flags|=67108866,M)):(R.flags|=1048576,M)}function v(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function w(R,M,H,V){return M===null||M.tag!==6?(M=Sc(H,R.mode,V),M.return=R,M):(M=c(M,H),M.return=R,M)}function z(R,M,H,V){var se=H.type;return se===N?q(R,M,H.props.children,V,H.key):M!==null&&(M.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===de&&Va(se)===M.type)?(M=c(M,H.props),Mr(M,H),M.return=R,M):(M=Po(H.type,H.key,H.props,null,R.mode,V),Mr(M,H),M.return=R,M)}function L(R,M,H,V){return M===null||M.tag!==4||M.stateNode.containerInfo!==H.containerInfo||M.stateNode.implementation!==H.implementation?(M=Tc(H,R.mode,V),M.return=R,M):(M=c(M,H.children||[]),M.return=R,M)}function q(R,M,H,V,se){return M===null||M.tag!==7?(M=La(H,R.mode,V,se),M.return=R,M):(M=c(M,H),M.return=R,M)}function G(R,M,H){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Sc(""+M,R.mode,H),M.return=R,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return H=Po(M.type,M.key,M.props,null,R.mode,H),Mr(H,M),H.return=R,H;case T:return M=Tc(M,R.mode,H),M.return=R,M;case de:return M=Va(M),G(R,M,H)}if(Ue(M)||le(M))return M=La(M,R.mode,H,null),M.return=R,M;if(typeof M.then=="function")return G(R,ol(M),H);if(M.$$typeof===Y)return G(R,nl(R,M),H);ll(R,M)}return null}function B(R,M,H,V){var se=M!==null?M.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return se!==null?null:w(R,M,""+H,V);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return H.key===se?z(R,M,H,V):null;case T:return H.key===se?L(R,M,H,V):null;case de:return H=Va(H),B(R,M,H,V)}if(Ue(H)||le(H))return se!==null?null:q(R,M,H,V,null);if(typeof H.then=="function")return B(R,M,ol(H),V);if(H.$$typeof===Y)return B(R,M,nl(R,H),V);ll(R,H)}return null}function X(R,M,H,V,se){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return R=R.get(H)||null,w(M,R,""+V,se);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return R=R.get(V.key===null?H:V.key)||null,z(M,R,V,se);case T:return R=R.get(V.key===null?H:V.key)||null,L(M,R,V,se);case de:return V=Va(V),X(R,M,H,V,se)}if(Ue(V)||le(V))return R=R.get(H)||null,q(M,R,V,se,null);if(typeof V.then=="function")return X(R,M,H,ol(V),se);if(V.$$typeof===Y)return X(R,M,H,nl(M,V),se);ll(M,V)}return null}function te(R,M,H,V){for(var se=null,Oe=null,ie=M,we=M=0,ze=null;ie!==null&&we<H.length;we++){ie.index>we?(ze=ie,ie=null):ze=ie.sibling;var De=B(R,ie,H[we],V);if(De===null){ie===null&&(ie=ze);break}e&&ie&&De.alternate===null&&t(R,ie),M=d(De,M,we),Oe===null?se=De:Oe.sibling=De,Oe=De,ie=ze}if(we===H.length)return n(R,ie),ke&&Dn(R,we),se;if(ie===null){for(;we<H.length;we++)ie=G(R,H[we],V),ie!==null&&(M=d(ie,M,we),Oe===null?se=ie:Oe.sibling=ie,Oe=ie);return ke&&Dn(R,we),se}for(ie=r(ie);we<H.length;we++)ze=X(ie,R,we,H[we],V),ze!==null&&(e&&ze.alternate!==null&&ie.delete(ze.key===null?we:ze.key),M=d(ze,M,we),Oe===null?se=ze:Oe.sibling=ze,Oe=ze);return e&&ie.forEach(function(Sa){return t(R,Sa)}),ke&&Dn(R,we),se}function ce(R,M,H,V){if(H==null)throw Error(l(151));for(var se=null,Oe=null,ie=M,we=M=0,ze=null,De=H.next();ie!==null&&!De.done;we++,De=H.next()){ie.index>we?(ze=ie,ie=null):ze=ie.sibling;var Sa=B(R,ie,De.value,V);if(Sa===null){ie===null&&(ie=ze);break}e&&ie&&Sa.alternate===null&&t(R,ie),M=d(Sa,M,we),Oe===null?se=Sa:Oe.sibling=Sa,Oe=Sa,ie=ze}if(De.done)return n(R,ie),ke&&Dn(R,we),se;if(ie===null){for(;!De.done;we++,De=H.next())De=G(R,De.value,V),De!==null&&(M=d(De,M,we),Oe===null?se=De:Oe.sibling=De,Oe=De);return ke&&Dn(R,we),se}for(ie=r(ie);!De.done;we++,De=H.next())De=X(ie,R,we,De.value,V),De!==null&&(e&&De.alternate!==null&&ie.delete(De.key===null?we:De.key),M=d(De,M,we),Oe===null?se=De:Oe.sibling=De,Oe=De);return e&&ie.forEach(function(Jw){return t(R,Jw)}),ke&&Dn(R,we),se}function Ve(R,M,H,V){if(typeof H=="object"&&H!==null&&H.type===N&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case S:e:{for(var se=H.key;M!==null;){if(M.key===se){if(se=H.type,se===N){if(M.tag===7){n(R,M.sibling),V=c(M,H.props.children),V.return=R,R=V;break e}}else if(M.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===de&&Va(se)===M.type){n(R,M.sibling),V=c(M,H.props),Mr(V,H),V.return=R,R=V;break e}n(R,M);break}else t(R,M);M=M.sibling}H.type===N?(V=La(H.props.children,R.mode,V,H.key),V.return=R,R=V):(V=Po(H.type,H.key,H.props,null,R.mode,V),Mr(V,H),V.return=R,R=V)}return v(R);case T:e:{for(se=H.key;M!==null;){if(M.key===se)if(M.tag===4&&M.stateNode.containerInfo===H.containerInfo&&M.stateNode.implementation===H.implementation){n(R,M.sibling),V=c(M,H.children||[]),V.return=R,R=V;break e}else{n(R,M);break}else t(R,M);M=M.sibling}V=Tc(H,R.mode,V),V.return=R,R=V}return v(R);case de:return H=Va(H),Ve(R,M,H,V)}if(Ue(H))return te(R,M,H,V);if(le(H)){if(se=le(H),typeof se!="function")throw Error(l(150));return H=se.call(H),ce(R,M,H,V)}if(typeof H.then=="function")return Ve(R,M,ol(H),V);if(H.$$typeof===Y)return Ve(R,M,nl(R,H),V);ll(R,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,M!==null&&M.tag===6?(n(R,M.sibling),V=c(M,H),V.return=R,R=V):(n(R,M),V=Sc(H,R.mode,V),V.return=R,R=V),v(R)):n(R,M)}return function(R,M,H,V){try{Ar=0;var se=Ve(R,M,H,V);return Mi=null,se}catch(ie){if(ie===Ai||ie===il)throw ie;var Oe=Vt(29,ie,null,R.mode);return Oe.lanes=V,Oe.return=R,Oe}}}var $a=tp(!0),np=tp(!1),oa=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function la(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=Jo(e),Bh(e,null,n),t}return Ko(e,r,t,n),Jo(e)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,If(e,n)}}function Lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var c=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?c=d=v:d=d.next=v,n=n.next}while(n!==null);d===null?c=d=t:d=d.next=t}else c=d=t;n={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Bc=!1;function Dr(){if(Bc){var e=Ni;if(e!==null)throw e}}function Rr(e,t,n,r){Bc=!1;var c=e.updateQueue;oa=!1;var d=c.firstBaseUpdate,v=c.lastBaseUpdate,w=c.shared.pending;if(w!==null){c.shared.pending=null;var z=w,L=z.next;z.next=null,v===null?d=L:v.next=L,v=z;var q=e.alternate;q!==null&&(q=q.updateQueue,w=q.lastBaseUpdate,w!==v&&(w===null?q.firstBaseUpdate=L:w.next=L,q.lastBaseUpdate=z))}if(d!==null){var G=c.baseState;v=0,q=L=z=null,w=d;do{var B=w.lane&-536870913,X=B!==w.lane;if(X?(Ee&B)===B:(r&B)===B){B!==0&&B===ki&&(Bc=!0),q!==null&&(q=q.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var te=e,ce=w;B=t;var Ve=n;switch(ce.tag){case 1:if(te=ce.payload,typeof te=="function"){G=te.call(Ve,G,B);break e}G=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ce.payload,B=typeof te=="function"?te.call(Ve,G,B):te,B==null)break e;G=y({},G,B);break e;case 2:oa=!0}}B=w.callback,B!==null&&(e.flags|=64,X&&(e.flags|=8192),X=c.callbacks,X===null?c.callbacks=[B]:X.push(B))}else X={lane:B,tag:w.tag,payload:w.payload,callback:w.callback,next:null},q===null?(L=q=X,z=G):q=q.next=X,v|=B;if(w=w.next,w===null){if(w=c.shared.pending,w===null)break;X=w,w=X.next,X.next=null,c.lastBaseUpdate=X,c.shared.pending=null}}while(!0);q===null&&(z=G),c.baseState=z,c.firstBaseUpdate=L,c.lastBaseUpdate=q,d===null&&(c.shared.lanes=0),ha|=v,e.lanes=v,e.memoizedState=G}}function ap(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ip(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ap(n[e],t)}var Oi=E(null),sl=E(0);function rp(e,t){e=Fn,$(sl,e),$(Oi,t),Fn=e|t.baseLanes}function Yc(){$(sl,Fn),$(Oi,Oi.current)}function Xc(){Fn=sl.current,j(Oi),j(sl)}var Ft=E(null),rn=null;function ca(e){var t=e.alternate;$(at,at.current&1),$(Ft,e),rn===null&&(t===null||Oi.current!==null||t.memoizedState!==null)&&(rn=e)}function qc(e){$(at,at.current),$(Ft,e),rn===null&&(rn=e)}function op(e){e.tag===22?($(at,at.current),$(Ft,e),rn===null&&(rn=e)):ua()}function ua(){$(at,at.current),$(Ft,Ft.current)}function $t(e){j(Ft),rn===e&&(rn=null),j(at)}var at=E(0);function cl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Qu(n)||Zu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jn=0,ve=null,Xe=null,ct=null,ul=!1,Di=!1,Ga=!1,dl=0,Ur=0,Ri=null,qb=0;function et(){throw Error(l(321))}function Vc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qt(e[n],t[n]))return!1;return!0}function Fc(e,t,n,r,c,d){return jn=d,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=e===null||e.memoizedState===null?Vp:ru,Ga=!1,d=n(r,c),Ga=!1,Di&&(d=sp(t,n,r,c)),lp(e),d}function lp(e){_.H=Lr;var t=Xe!==null&&Xe.next!==null;if(jn=0,ct=Xe=ve=null,ul=!1,Ur=0,Ri=null,t)throw Error(l(300));e===null||ut||(e=e.dependencies,e!==null&&tl(e)&&(ut=!0))}function sp(e,t,n,r){ve=e;var c=0;do{if(Di&&(Ri=null),Ur=0,Di=!1,25<=c)throw Error(l(301));if(c+=1,ct=Xe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}_.H=Fp,d=t(n,r)}while(Di);return d}function Vb(){var e=_.H,t=e.useState()[0];return t=typeof t.then=="function"?jr(t):t,e=e.useState()[0],(Xe!==null?Xe.memoizedState:null)!==e&&(ve.flags|=1024),t}function $c(){var e=dl!==0;return dl=0,e}function Gc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ic(e){if(ul){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ul=!1}jn=0,ct=Xe=ve=null,Di=!1,Ur=dl=0,Ri=null}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ct===null?ve.memoizedState=ct=e:ct=ct.next=e,ct}function it(){if(Xe===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=ct===null?ve.memoizedState:ct.next;if(t!==null)ct=t,Xe=e;else{if(e===null)throw ve.alternate===null?Error(l(467)):Error(l(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},ct===null?ve.memoizedState=ct=e:ct=ct.next=e}return ct}function fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jr(e){var t=Ur;return Ur+=1,Ri===null&&(Ri=[]),e=Jh(Ri,e,t),t=ve,(ct===null?t.memoizedState:ct.next)===null&&(t=t.alternate,_.H=t===null||t.memoizedState===null?Vp:ru),e}function hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return jr(e);if(e.$$typeof===Y)return St(e)}throw Error(l(438,String(e)))}function Qc(e){var t=null,n=ve.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=ve.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=fl(),ve.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=he;return t.index++,n}function Hn(e,t){return typeof t=="function"?t(e):t}function pl(e){var t=it();return Zc(t,Xe,e)}function Zc(e,t,n){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=n;var c=e.baseQueue,d=r.pending;if(d!==null){if(c!==null){var v=c.next;c.next=d.next,d.next=v}t.baseQueue=c=d,r.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{t=c.next;var w=v=null,z=null,L=t,q=!1;do{var G=L.lane&-536870913;if(G!==L.lane?(Ee&G)===G:(jn&G)===G){var B=L.revertLane;if(B===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),G===ki&&(q=!0);else if((jn&B)===B){L=L.next,B===ki&&(q=!0);continue}else G={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},z===null?(w=z=G,v=d):z=z.next=G,ve.lanes|=B,ha|=B;G=L.action,Ga&&n(d,G),d=L.hasEagerState?L.eagerState:n(d,G)}else B={lane:G,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},z===null?(w=z=B,v=d):z=z.next=B,ve.lanes|=G,ha|=G;L=L.next}while(L!==null&&L!==t);if(z===null?v=d:z.next=w,!qt(d,e.memoizedState)&&(ut=!0,q&&(n=Ni,n!==null)))throw n;e.memoizedState=d,e.baseState=v,e.baseQueue=z,r.lastRenderedState=d}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wc(e){var t=it(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,c=n.pending,d=t.memoizedState;if(c!==null){n.pending=null;var v=c=c.next;do d=e(d,v.action),v=v.next;while(v!==c);qt(d,t.memoizedState)||(ut=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,r]}function cp(e,t,n){var r=ve,c=it(),d=ke;if(d){if(n===void 0)throw Error(l(407));n=n()}else n=t();var v=!qt((Xe||c).memoizedState,n);if(v&&(c.memoizedState=n,ut=!0),c=c.queue,Pc(fp.bind(null,r,c,e),[e]),c.getSnapshot!==t||v||ct!==null&&ct.memoizedState.tag&1){if(r.flags|=2048,Ui(9,{destroy:void 0},dp.bind(null,r,c,n,t),null),Fe===null)throw Error(l(349));d||(jn&127)!==0||up(r,t,n)}return n}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t=fl(),ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dp(e,t,n,r){t.value=n,t.getSnapshot=r,hp(t)&&pp(e)}function fp(e,t,n){return n(function(){hp(t)&&pp(e)})}function hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qt(e,n)}catch{return!0}}function pp(e){var t=Ha(e,2);t!==null&&Ht(t,e,2)}function Kc(e){var t=Nt();if(typeof e=="function"){var n=e;if(e=n(),Ga){Pn(!0);try{n()}finally{Pn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:e},t}function mp(e,t,n,r){return e.baseState=n,Zc(e,Xe,typeof r=="function"?r:Hn)}function Fb(e,t,n,r,c){if(vl(e))throw Error(l(485));if(e=t.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};_.T!==null?n(!0):d.isTransition=!1,r(d),n=t.pending,n===null?(d.next=t.pending=d,gp(t,d)):(d.next=n.next,t.pending=n.next=d)}}function gp(e,t){var n=t.action,r=t.payload,c=e.state;if(t.isTransition){var d=_.T,v={};_.T=v;try{var w=n(c,r),z=_.S;z!==null&&z(v,w),vp(e,t,w)}catch(L){Jc(e,t,L)}finally{d!==null&&v.types!==null&&(d.types=v.types),_.T=d}}else try{d=n(c,r),vp(e,t,d)}catch(L){Jc(e,t,L)}}function vp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){yp(e,t,r)},function(r){return Jc(e,t,r)}):yp(e,t,n)}function yp(e,t,n){t.status="fulfilled",t.value=n,bp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,gp(e,n)))}function Jc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,bp(t),t=t.next;while(t!==r)}e.action=null}function bp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wp(e,t){return t}function xp(e,t){if(ke){var n=Fe.formState;if(n!==null){e:{var r=ve;if(ke){if(Qe){t:{for(var c=Qe,d=an;c.nodeType!==8;){if(!d){c=null;break t}if(c=on(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){Qe=on(c.nextSibling),r=c.data==="F!";break e}}ia(r)}r=!1}r&&(t=n[0])}}return n=Nt(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:t},n.queue=r,n=Yp.bind(null,ve,r),r.dispatch=n,r=Kc(!1),d=iu.bind(null,ve,!1,r.queue),r=Nt(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,n=Fb.bind(null,ve,c,d,n),c.dispatch=n,r.memoizedState=e,[t,n,!1]}function _p(e){var t=it();return Sp(t,Xe,e)}function Sp(e,t,n){if(t=Zc(e,t,wp)[0],e=pl(Hn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=jr(t)}catch(v){throw v===Ai?il:v}else r=t;t=it();var c=t.queue,d=c.dispatch;return n!==t.memoizedState&&(ve.flags|=2048,Ui(9,{destroy:void 0},$b.bind(null,c,n),null)),[r,d,e]}function $b(e,t){e.action=t}function Tp(e){var t=it(),n=Xe;if(n!==null)return Sp(t,n,e);it(),t=t.memoizedState,n=it();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Ui(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=ve.updateQueue,t===null&&(t=fl(),ve.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Cp(){return it().memoizedState}function ml(e,t,n,r){var c=Nt();ve.flags|=e,c.memoizedState=Ui(1|t,{destroy:void 0},n,r===void 0?null:r)}function gl(e,t,n,r){var c=it();r=r===void 0?null:r;var d=c.memoizedState.inst;Xe!==null&&r!==null&&Vc(r,Xe.memoizedState.deps)?c.memoizedState=Ui(t,d,n,r):(ve.flags|=e,c.memoizedState=Ui(1|t,d,n,r))}function Ep(e,t){ml(8390656,8,e,t)}function Pc(e,t){gl(2048,8,e,t)}function Gb(e){ve.flags|=4;var t=ve.updateQueue;if(t===null)t=fl(),ve.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function zp(e){var t=it().memoizedState;return Gb({ref:t,nextImpl:e}),function(){if((Re&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function kp(e,t){return gl(4,2,e,t)}function Np(e,t){return gl(4,4,e,t)}function Ap(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mp(e,t,n){n=n!=null?n.concat([e]):null,gl(4,4,Ap.bind(null,t,e),n)}function eu(){}function Op(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Vc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dp(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Vc(t,r[1]))return r[0];if(r=e(),Ga){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[r,t],r}function tu(e,t,n){return n===void 0||(jn&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Rm(),ve.lanes|=e,ha|=e,n)}function Rp(e,t,n,r){return qt(n,t)?n:Oi.current!==null?(e=tu(e,n,r),qt(e,t)||(ut=!0),e):(jn&42)===0||(jn&1073741824)!==0&&(Ee&261930)===0?(ut=!0,e.memoizedState=n):(e=Rm(),ve.lanes|=e,ha|=e,t)}function Up(e,t,n,r,c){var d=k.p;k.p=d!==0&&8>d?d:8;var v=_.T,w={};_.T=w,iu(e,!1,t,n);try{var z=c(),L=_.S;if(L!==null&&L(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var q=Xb(z,r);Hr(e,t,q,Qt(e))}else Hr(e,t,r,Qt(e))}catch(G){Hr(e,t,{then:function(){},status:"rejected",reason:G},Qt())}finally{k.p=d,v!==null&&w.types!==null&&(v.types=w.types),_.T=v}}function Ib(){}function nu(e,t,n,r){if(e.tag!==5)throw Error(l(476));var c=jp(e).queue;Up(e,c,t,U,n===null?Ib:function(){return Hp(e),n(r)})}function jp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:U},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Hp(e){var t=jp(e);t.next===null&&(t=e.alternate.memoizedState),Hr(e,t.next.queue,{},Qt())}function au(){return St(eo)}function Lp(){return it().memoizedState}function Bp(){return it().memoizedState}function Qb(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Qt();e=la(n);var r=sa(t,e,n);r!==null&&(Ht(r,t,n),Or(r,t,n)),t={cache:Oc()},e.payload=t;return}t=t.return}}function Zb(e,t,n){var r=Qt();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},vl(e)?Xp(t,n):(n=xc(e,t,n,r),n!==null&&(Ht(n,e,r),qp(n,t,r)))}function Yp(e,t,n){var r=Qt();Hr(e,t,n,r)}function Hr(e,t,n,r){var c={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(vl(e))Xp(t,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var v=t.lastRenderedState,w=d(v,n);if(c.hasEagerState=!0,c.eagerState=w,qt(w,v))return Ko(e,t,c,0),Fe===null&&Wo(),!1}catch{}if(n=xc(e,t,c,r),n!==null)return Ht(n,e,r),qp(n,t,r),!0}return!1}function iu(e,t,n,r){if(r={lane:2,revertLane:ju(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(t)throw Error(l(479))}else t=xc(e,n,r,2),t!==null&&Ht(t,e,2)}function vl(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Xp(e,t){Di=ul=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function qp(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,If(e,n)}}var Lr={readContext:St,use:hl,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useInsertionEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useSyncExternalStore:et,useId:et,useHostTransitionStatus:et,useFormState:et,useActionState:et,useOptimistic:et,useMemoCache:et,useCacheRefresh:et};Lr.useEffectEvent=et;var Vp={readContext:St,use:hl,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Ep,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ml(4194308,4,Ap.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){ml(4,2,e,t)},useMemo:function(e,t){var n=Nt();t=t===void 0?null:t;var r=e();if(Ga){Pn(!0);try{e()}finally{Pn(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Nt();if(n!==void 0){var c=n(t);if(Ga){Pn(!0);try{n(t)}finally{Pn(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Zb.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:function(e){e=Kc(e);var t=e.queue,n=Yp.bind(null,ve,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:eu,useDeferredValue:function(e,t){var n=Nt();return tu(n,e,t)},useTransition:function(){var e=Kc(!1);return e=Up.bind(null,ve,e.queue,!0,!1),Nt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ve,c=Nt();if(ke){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Fe===null)throw Error(l(349));(Ee&127)!==0||up(r,t,n)}c.memoizedState=n;var d={value:n,getSnapshot:t};return c.queue=d,Ep(fp.bind(null,r,d,e),[e]),r.flags|=2048,Ui(9,{destroy:void 0},dp.bind(null,r,d,n,t),null),n},useId:function(){var e=Nt(),t=Fe.identifierPrefix;if(ke){var n=xn,r=wn;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,t="_"+t+"R_"+n,n=dl++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=qb++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:au,useFormState:xp,useActionState:xp,useOptimistic:function(e){var t=Nt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=iu.bind(null,ve,!0,n),n.dispatch=t,[e,t]},useMemoCache:Qc,useCacheRefresh:function(){return Nt().memoizedState=Qb.bind(null,ve)},useEffectEvent:function(e){var t=Nt(),n={impl:e};return t.memoizedState=n,function(){if((Re&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},ru={readContext:St,use:hl,useCallback:Op,useContext:St,useEffect:Pc,useImperativeHandle:Mp,useInsertionEffect:kp,useLayoutEffect:Np,useMemo:Dp,useReducer:pl,useRef:Cp,useState:function(){return pl(Hn)},useDebugValue:eu,useDeferredValue:function(e,t){var n=it();return Rp(n,Xe.memoizedState,e,t)},useTransition:function(){var e=pl(Hn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:jr(e),t]},useSyncExternalStore:cp,useId:Lp,useHostTransitionStatus:au,useFormState:_p,useActionState:_p,useOptimistic:function(e,t){var n=it();return mp(n,Xe,e,t)},useMemoCache:Qc,useCacheRefresh:Bp};ru.useEffectEvent=zp;var Fp={readContext:St,use:hl,useCallback:Op,useContext:St,useEffect:Pc,useImperativeHandle:Mp,useInsertionEffect:kp,useLayoutEffect:Np,useMemo:Dp,useReducer:Wc,useRef:Cp,useState:function(){return Wc(Hn)},useDebugValue:eu,useDeferredValue:function(e,t){var n=it();return Xe===null?tu(n,e,t):Rp(n,Xe.memoizedState,e,t)},useTransition:function(){var e=Wc(Hn)[0],t=it().memoizedState;return[typeof e=="boolean"?e:jr(e),t]},useSyncExternalStore:cp,useId:Lp,useHostTransitionStatus:au,useFormState:Tp,useActionState:Tp,useOptimistic:function(e,t){var n=it();return Xe!==null?mp(n,Xe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:Bp};Fp.useEffectEvent=zp;function ou(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lu={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Qt(),c=la(r);c.payload=t,n!=null&&(c.callback=n),t=sa(e,c,r),t!==null&&(Ht(t,e,r),Or(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Qt(),c=la(r);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=sa(e,c,r),t!==null&&(Ht(t,e,r),Or(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Qt(),r=la(n);r.tag=2,t!=null&&(r.callback=t),t=sa(e,r,n),t!==null&&(Ht(t,e,n),Or(t,e,n))}};function $p(e,t,n,r,c,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,d,v):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(c,d):!0}function Gp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lu.enqueueReplaceState(t,t.state,null)}function Ia(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function Ip(e){Zo(e)}function Qp(e){console.error(e)}function Zp(e){Zo(e)}function yl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function Wp(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function su(e,t,n){return n=la(n),n.tag=3,n.payload={element:null},n.callback=function(){yl(e,t)},n}function Kp(e){return e=la(e),e.tag=3,e}function Jp(e,t,n,r){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=r.value;e.payload=function(){return c(d)},e.callback=function(){Wp(t,n,r)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Wp(t,n,r),typeof c!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var w=r.stack;this.componentDidCatch(r.value,{componentStack:w!==null?w:""})})}function Wb(e,t,n,r,c){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&zi(t,n,c,!0),n=Ft.current,n!==null){switch(n.tag){case 31:case 13:return rn===null?Al():n.alternate===null&&tt===0&&(tt=3),n.flags&=-257,n.flags|=65536,n.lanes=c,r===rl?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Du(e,r,c)),!1;case 22:return n.flags|=65536,r===rl?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Du(e,r,c)),!1}throw Error(l(435,n.tag))}return Du(e,r,c),Al(),!1}if(ke)return t=Ft.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==zc&&(e=Error(l(422),{cause:r}),zr(en(e,n)))):(r!==zc&&(t=Error(l(423),{cause:r}),zr(en(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=en(r,n),c=su(e.stateNode,r,c),Lc(e,c),tt!==4&&(tt=2)),!1;var d=Error(l(520),{cause:r});if(d=en(d,n),Gr===null?Gr=[d]:Gr.push(d),tt!==4&&(tt=2),t===null)return!0;r=en(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=su(n.stateNode,r,e),Lc(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(pa===null||!pa.has(d))))return n.flags|=65536,c&=-c,n.lanes|=c,c=Kp(c),Jp(c,e,n,r),Lc(n,c),!1}n=n.return}while(n!==null);return!1}var cu=Error(l(461)),ut=!1;function Tt(e,t,n,r){t.child=e===null?np(t,null,n,r):$a(t,e.child,n,r)}function Pp(e,t,n,r,c){n=n.render;var d=t.ref;if("ref"in r){var v={};for(var w in r)w!=="ref"&&(v[w]=r[w])}else v=r;return Xa(t),r=Fc(e,t,n,v,d,c),w=$c(),e!==null&&!ut?(Gc(e,t,c),Ln(e,t,c)):(ke&&w&&Cc(t),t.flags|=1,Tt(e,t,r,c),t.child)}function em(e,t,n,r,c){if(e===null){var d=n.type;return typeof d=="function"&&!_c(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,tm(e,t,d,r,c)):(e=Po(n.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!vu(e,c)){var v=d.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(v,r)&&e.ref===t.ref)return Ln(e,t,c)}return t.flags|=1,e=On(d,r),e.ref=t.ref,e.return=t,t.child=e}function tm(e,t,n,r,c){if(e!==null){var d=e.memoizedProps;if(Tr(d,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=d,vu(e,c))(e.flags&131072)!==0&&(ut=!0);else return t.lanes=e.lanes,Ln(e,t,c)}return uu(e,t,n,r,c)}function nm(e,t,n,r){var c=r.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(r=t.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~d}else r=0,t.child=null;return am(e,t,d,n,r)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(t,d!==null?d.cachePool:null),d!==null?rp(t,d):Yc(),op(t);else return r=t.lanes=536870912,am(e,t,d!==null?d.baseLanes|n:n,n,r)}else d!==null?(al(t,d.cachePool),rp(t,d),ua(),t.memoizedState=null):(e!==null&&al(t,null),Yc(),ua());return Tt(e,t,c,n),t.child}function Br(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function am(e,t,n,r,c){var d=Rc();return d=d===null?null:{parent:st._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&al(t,null),Yc(),op(t),e!==null&&zi(e,t,r,!0),t.childLanes=c,null}function bl(e,t){return t=xl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function im(e,t,n){return $a(t,e.child,null,n),e=bl(t,t.pendingProps),e.flags|=2,$t(t),t.memoizedState=null,e}function Kb(e,t,n){var r=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ke){if(r.mode==="hidden")return e=bl(t,r),t.lanes=536870912,Br(null,e);if(qc(t),(e=Qe)?(e=gg(e,an),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Xh(e),n.return=t,t.child=n,_t=t,Qe=null)):e=null,e===null)throw ia(t);return t.lanes=536870912,null}return bl(t,r)}var d=e.memoizedState;if(d!==null){var v=d.dehydrated;if(qc(t),c)if(t.flags&256)t.flags&=-257,t=im(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(ut||zi(e,t,n,!1),c=(n&e.childLanes)!==0,ut||c){if(r=Fe,r!==null&&(v=Qf(r,n),v!==0&&v!==d.retryLane))throw d.retryLane=v,Ha(e,v),Ht(r,e,v),cu;Al(),t=im(e,t,n)}else e=d.treeContext,Qe=on(v.nextSibling),_t=t,ke=!0,aa=null,an=!1,e!==null&&Fh(t,e),t=bl(t,r),t.flags|=4096;return t}return e=On(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function wl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function uu(e,t,n,r,c){return Xa(t),n=Fc(e,t,n,r,void 0,c),r=$c(),e!==null&&!ut?(Gc(e,t,c),Ln(e,t,c)):(ke&&r&&Cc(t),t.flags|=1,Tt(e,t,n,c),t.child)}function rm(e,t,n,r,c,d){return Xa(t),t.updateQueue=null,n=sp(t,r,n,c),lp(e),r=$c(),e!==null&&!ut?(Gc(e,t,d),Ln(e,t,d)):(ke&&r&&Cc(t),t.flags|=1,Tt(e,t,n,d),t.child)}function om(e,t,n,r,c){if(Xa(t),t.stateNode===null){var d=Si,v=n.contextType;typeof v=="object"&&v!==null&&(d=St(v)),d=new n(r,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=lu,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=r,d.state=t.memoizedState,d.refs={},jc(t),v=n.contextType,d.context=typeof v=="object"&&v!==null?St(v):Si,d.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(ou(t,n,v,r),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&lu.enqueueReplaceState(d,d.state,null),Rr(t,r,d,c),Dr(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){d=t.stateNode;var w=t.memoizedProps,z=Ia(n,w);d.props=z;var L=d.context,q=n.contextType;v=Si,typeof q=="object"&&q!==null&&(v=St(q));var G=n.getDerivedStateFromProps;q=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=t.pendingProps!==w,q||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||L!==v)&&Gp(t,d,r,v),oa=!1;var B=t.memoizedState;d.state=B,Rr(t,r,d,c),Dr(),L=t.memoizedState,w||B!==L||oa?(typeof G=="function"&&(ou(t,n,G,r),L=t.memoizedState),(z=oa||$p(t,n,z,r,B,L,v))?(q||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=L),d.props=r,d.state=L,d.context=v,r=z):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{d=t.stateNode,Hc(e,t),v=t.memoizedProps,q=Ia(n,v),d.props=q,G=t.pendingProps,B=d.context,L=n.contextType,z=Si,typeof L=="object"&&L!==null&&(z=St(L)),w=n.getDerivedStateFromProps,(L=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==G||B!==z)&&Gp(t,d,r,z),oa=!1,B=t.memoizedState,d.state=B,Rr(t,r,d,c),Dr();var X=t.memoizedState;v!==G||B!==X||oa||e!==null&&e.dependencies!==null&&tl(e.dependencies)?(typeof w=="function"&&(ou(t,n,w,r),X=t.memoizedState),(q=oa||$p(t,n,q,r,B,X,z)||e!==null&&e.dependencies!==null&&tl(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(r,X,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(r,X,z)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=X),d.props=r,d.state=X,d.context=z,r=q):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&B===e.memoizedState||(t.flags|=1024),r=!1)}return d=r,wl(e,t),r=(t.flags&128)!==0,d||r?(d=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&r?(t.child=$a(t,e.child,null,c),t.child=$a(t,null,n,c)):Tt(e,t,n,c),t.memoizedState=d.state,e=t.child):e=Ln(e,t,c),e}function lm(e,t,n,r){return Ba(),t.flags|=256,Tt(e,t,n,r),t.child}var du={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fu(e){return{baseLanes:e,cachePool:Wh()}}function hu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=It),e}function sm(e,t,n){var r=t.pendingProps,c=!1,d=(t.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(at.current&2)!==0),v&&(c=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(ke){if(c?ca(t):ua(),(e=Qe)?(e=gg(e,an),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:na!==null?{id:wn,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},n=Xh(e),n.return=t,t.child=n,_t=t,Qe=null)):e=null,e===null)throw ia(t);return Zu(e)?t.lanes=32:t.lanes=536870912,null}var w=r.children;return r=r.fallback,c?(ua(),c=t.mode,w=xl({mode:"hidden",children:w},c),r=La(r,c,n,null),w.return=t,r.return=t,w.sibling=r,t.child=w,r=t.child,r.memoizedState=fu(n),r.childLanes=hu(e,v,n),t.memoizedState=du,Br(null,r)):(ca(t),pu(t,w))}var z=e.memoizedState;if(z!==null&&(w=z.dehydrated,w!==null)){if(d)t.flags&256?(ca(t),t.flags&=-257,t=mu(e,t,n)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),w=r.fallback,c=t.mode,r=xl({mode:"visible",children:r.children},c),w=La(w,c,n,null),w.flags|=2,r.return=t,w.return=t,r.sibling=w,t.child=r,$a(t,e.child,null,n),r=t.child,r.memoizedState=fu(n),r.childLanes=hu(e,v,n),t.memoizedState=du,t=Br(null,r));else if(ca(t),Zu(w)){if(v=w.nextSibling&&w.nextSibling.dataset,v)var L=v.dgst;v=L,r=Error(l(419)),r.stack="",r.digest=v,zr({value:r,source:null,stack:null}),t=mu(e,t,n)}else if(ut||zi(e,t,n,!1),v=(n&e.childLanes)!==0,ut||v){if(v=Fe,v!==null&&(r=Qf(v,n),r!==0&&r!==z.retryLane))throw z.retryLane=r,Ha(e,r),Ht(v,e,r),cu;Qu(w)||Al(),t=mu(e,t,n)}else Qu(w)?(t.flags|=192,t.child=e.child,t=null):(e=z.treeContext,Qe=on(w.nextSibling),_t=t,ke=!0,aa=null,an=!1,e!==null&&Fh(t,e),t=pu(t,r.children),t.flags|=4096);return t}return c?(ua(),w=r.fallback,c=t.mode,z=e.child,L=z.sibling,r=On(z,{mode:"hidden",children:r.children}),r.subtreeFlags=z.subtreeFlags&65011712,L!==null?w=On(L,w):(w=La(w,c,n,null),w.flags|=2),w.return=t,r.return=t,r.sibling=w,t.child=r,Br(null,r),r=t.child,w=e.child.memoizedState,w===null?w=fu(n):(c=w.cachePool,c!==null?(z=st._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=Wh(),w={baseLanes:w.baseLanes|n,cachePool:c}),r.memoizedState=w,r.childLanes=hu(e,v,n),t.memoizedState=du,Br(e.child,r)):(ca(t),n=e.child,e=n.sibling,n=On(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function pu(e,t){return t=xl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xl(e,t){return e=Vt(22,e,null,t),e.lanes=0,e}function mu(e,t,n){return $a(t,e.child,null,n),e=pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ac(e.return,t,n)}function gu(e,t,n,r,c,d){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:c,treeForkCount:d}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=n,v.tailMode=c,v.treeForkCount=d)}function um(e,t,n){var r=t.pendingProps,c=r.revealOrder,d=r.tail;r=r.children;var v=at.current,w=(v&2)!==0;if(w?(v=v&1|2,t.flags|=128):v&=1,$(at,v),Tt(e,t,r,n),r=ke?Er:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cm(e,n,t);else if(e.tag===19)cm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&cl(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),gu(t,!1,c,n,d,r);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&cl(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}gu(t,!0,n,null,d,r);break;case"together":gu(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(zi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=On(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=On(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&tl(e)))}function Jb(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),ra(t,st,e.memoizedState.cache),Ba();break;case 27:case 5:pt(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,qc(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(ca(t),t.flags|=128,null):(n&t.child.childLanes)!==0?sm(e,t,n):(ca(t),e=Ln(e,t,n),e!==null?e.sibling:null);ca(t);break;case 19:var c=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(zi(e,t,n,!1),r=(n&t.childLanes)!==0),c){if(r)return um(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$(at,at.current),r)break;return null;case 22:return t.lanes=0,nm(e,t,n,t.pendingProps);case 24:ra(t,st,e.memoizedState.cache)}return Ln(e,t,n)}function dm(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ut=!0;else{if(!vu(e,n)&&(t.flags&128)===0)return ut=!1,Jb(e,t,n);ut=(e.flags&131072)!==0}else ut=!1,ke&&(t.flags&1048576)!==0&&Vh(t,Er,t.index);switch(t.lanes=0,t.tag){case 16:e:{var r=t.pendingProps;if(e=Va(t.elementType),t.type=e,typeof e=="function")_c(e)?(r=Ia(e,r),t.tag=1,t=om(null,t,e,r,n)):(t.tag=0,t=uu(null,t,e,r,n));else{if(e!=null){var c=e.$$typeof;if(c===F){t.tag=11,t=Pp(null,t,e,r,n);break e}else if(c===K){t.tag=14,t=em(null,t,e,r,n);break e}}throw t=He(e)||e,Error(l(306,t,""))}}return t;case 0:return uu(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,c=Ia(r,t.pendingProps),om(e,t,r,c,n);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(l(387));r=t.pendingProps;var d=t.memoizedState;c=d.element,Hc(e,t),Rr(t,r,null,n);var v=t.memoizedState;if(r=v.cache,ra(t,st,r),r!==d.cache&&Mc(t,[st],n,!0),Dr(),r=v.element,d.isDehydrated)if(d={element:r,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=lm(e,t,r,n);break e}else if(r!==c){c=en(Error(l(424)),t),zr(c),t=lm(e,t,r,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Qe=on(e.firstChild),_t=t,ke=!0,aa=null,an=!0,n=np(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ba(),r===c){t=Ln(e,t,n);break e}Tt(e,t,r,n)}t=t.child}return t;case 26:return wl(e,t),e===null?(n=_g(t.type,null,t.pendingProps,null))?t.memoizedState=n:ke||(n=t.type,e=t.pendingProps,r=Hl(ae.current).createElement(n),r[xt]=t,r[Mt]=e,Ct(r,n,e),vt(r),t.stateNode=r):t.memoizedState=_g(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&ke&&(r=t.stateNode=bg(t.type,t.pendingProps,ae.current),_t=t,an=!0,c=Qe,ya(t.type)?(Wu=c,Qe=on(r.firstChild)):Qe=c),Tt(e,t,t.pendingProps.children,n),wl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ke&&((c=r=Qe)&&(r=kw(r,t.type,t.pendingProps,an),r!==null?(t.stateNode=r,_t=t,Qe=on(r.firstChild),an=!1,c=!0):c=!1),c||ia(t)),pt(t),c=t.type,d=t.pendingProps,v=e!==null?e.memoizedProps:null,r=d.children,$u(c,d)?r=null:v!==null&&$u(c,v)&&(t.flags|=32),t.memoizedState!==null&&(c=Fc(e,t,Vb,null,null,n),eo._currentValue=c),wl(e,t),Tt(e,t,r,n),t.child;case 6:return e===null&&ke&&((e=n=Qe)&&(n=Nw(n,t.pendingProps,an),n!==null?(t.stateNode=n,_t=t,Qe=null,e=!0):e=!1),e||ia(t)),null;case 13:return sm(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=$a(t,null,r,n):Tt(e,t,r,n),t.child;case 11:return Pp(e,t,t.type,t.pendingProps,n);case 7:return Tt(e,t,t.pendingProps,n),t.child;case 8:return Tt(e,t,t.pendingProps.children,n),t.child;case 12:return Tt(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),Tt(e,t,r.children,n),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,Xa(t),c=St(c),r=r(c),t.flags|=1,Tt(e,t,r,n),t.child;case 14:return em(e,t,t.type,t.pendingProps,n);case 15:return tm(e,t,t.type,t.pendingProps,n);case 19:return um(e,t,n);case 31:return Kb(e,t,n);case 22:return nm(e,t,n,t.pendingProps);case 24:return Xa(t),r=St(st),e===null?(c=Rc(),c===null&&(c=Fe,d=Oc(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=n),c=d),t.memoizedState={parent:r,cache:c},jc(t),ra(t,st,c)):((e.lanes&n)!==0&&(Hc(e,t),Rr(t,null,null,n),Dr()),c=e.memoizedState,d=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),ra(t,st,r)):(r=d.cache,ra(t,st,r),r!==c.cache&&Mc(t,[st],n,!0))),Tt(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Bn(e){e.flags|=4}function yu(e,t,n,r,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Lm())e.flags|=8192;else throw Fa=rl,Uc}else e.flags&=-16777217}function fm(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!zg(t))if(Lm())e.flags|=8192;else throw Fa=rl,Uc}function _l(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$f():536870912,e.lanes|=t,Bi|=t)}function Yr(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pb(e,t,n){var r=t.pendingProps;switch(Ec(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(t),null;case 1:return Ze(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Un(st),be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ei(t)?Bn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kc())),Ze(t),null;case 26:var c=t.type,d=t.memoizedState;return e===null?(Bn(t),d!==null?(Ze(t),fm(t,d)):(Ze(t),yu(t,c,null,r,n))):d?d!==e.memoizedState?(Bn(t),Ze(t),fm(t,d)):(Ze(t),t.flags&=-16777217):(e=e.memoizedProps,e!==r&&Bn(t),Ze(t),yu(t,c,e,r,n)),null;case 27:if(kn(t),n=ae.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Ze(t),null}e=Z.current,Ei(t)?$h(t):(e=bg(c,r,n),t.stateNode=e,Bn(t))}return Ze(t),null;case 5:if(kn(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Bn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Ze(t),null}if(d=Z.current,Ei(t))$h(t);else{var v=Hl(ae.current);switch(d){case 1:d=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:d=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":d=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":d=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":d=v.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?d.multiple=!0:r.size&&(d.size=r.size);break;default:d=typeof r.is=="string"?v.createElement(c,{is:r.is}):v.createElement(c)}}d[xt]=t,d[Mt]=r;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)d.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=d;e:switch(Ct(d,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Bn(t)}}return Ze(t),yu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Bn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(e=ae.current,Ei(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,c=_t,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[xt]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||sg(e.nodeValue,n)),e||ia(t,!0)}else e=Hl(e).createTextNode(r),e[xt]=t,t.stateNode=e}return Ze(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ei(t),n!==null){if(e===null){if(!r)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[xt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),e=!1}else n=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?($t(t),t):($t(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ze(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ei(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[xt]=t}else Ba(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ze(t),c=!1}else c=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?($t(t),t):($t(t),null)}return $t(t),(t.flags&128)!==0?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),d=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(d=r.memoizedState.cachePool.pool),d!==c&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),_l(t,t.updateQueue),Ze(t),null);case 4:return be(),e===null&&Yu(t.stateNode.containerInfo),Ze(t),null;case 10:return Un(t.type),Ze(t),null;case 19:if(j(at),r=t.memoizedState,r===null)return Ze(t),null;if(c=(t.flags&128)!==0,d=r.rendering,d===null)if(c)Yr(r,!1);else{if(tt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=cl(e),d!==null){for(t.flags|=128,Yr(r,!1),e=d.updateQueue,t.updateQueue=e,_l(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Yh(n,e),n=n.sibling;return $(at,at.current&1|2),ke&&Dn(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Bt()>zl&&(t.flags|=128,c=!0,Yr(r,!1),t.lanes=4194304)}else{if(!c)if(e=cl(d),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,_l(t,e),Yr(r,!0),r.tail===null&&r.tailMode==="hidden"&&!d.alternate&&!ke)return Ze(t),null}else 2*Bt()-r.renderingStartTime>zl&&n!==536870912&&(t.flags|=128,c=!0,Yr(r,!1),t.lanes=4194304);r.isBackwards?(d.sibling=t.child,t.child=d):(e=r.last,e!==null?e.sibling=d:t.child=d,r.last=d)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Bt(),e.sibling=null,n=at.current,$(at,c?n&1|2:n&1),ke&&Dn(t,r.treeForkCount),e):(Ze(t),null);case 22:case 23:return $t(t),Xc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Ze(t),t.subtreeFlags&6&&(t.flags|=8192)):Ze(t),n=t.updateQueue,n!==null&&_l(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&j(qa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Un(st),Ze(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function ew(e,t){switch(Ec(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Un(st),be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return kn(t),null;case 31:if(t.memoizedState!==null){if($t(t),t.alternate===null)throw Error(l(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if($t(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ba()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return j(at),null;case 4:return be(),null;case 10:return Un(t.type),null;case 22:case 23:return $t(t),Xc(),e!==null&&j(qa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Un(st),null;case 25:return null;default:return null}}function hm(e,t){switch(Ec(t),t.tag){case 3:Un(st),be();break;case 26:case 27:case 5:kn(t);break;case 4:be();break;case 31:t.memoizedState!==null&&$t(t);break;case 13:$t(t);break;case 19:j(at);break;case 10:Un(t.type);break;case 22:case 23:$t(t),Xc(),e!==null&&j(qa);break;case 24:Un(st)}}function Xr(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var c=r.next;n=c;do{if((n.tag&e)===e){r=void 0;var d=n.create,v=n.inst;r=d(),v.destroy=r}n=n.next}while(n!==c)}}catch(w){Be(t,t.return,w)}}function da(e,t,n){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var d=c.next;r=d;do{if((r.tag&e)===e){var v=r.inst,w=v.destroy;if(w!==void 0){v.destroy=void 0,c=t;var z=n,L=w;try{L()}catch(q){Be(c,z,q)}}}r=r.next}while(r!==d)}}catch(q){Be(t,t.return,q)}}function pm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ip(t,n)}catch(r){Be(e,e.return,r)}}}function mm(e,t,n){n.props=Ia(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){Be(e,t,r)}}function qr(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(c){Be(e,t,c)}}function _n(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(c){Be(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){Be(e,t,c)}else n.current=null}function gm(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(c){Be(e,e.return,c)}}function bu(e,t,n){try{var r=e.stateNode;_w(r,e.type,n,t),r[Mt]=t}catch(c){Be(e,e.return,c)}}function vm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=An));else if(r!==4&&(r===27&&ya(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&ya(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}function ym(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);Ct(t,r,n),t[xt]=e,t[Mt]=n}catch(d){Be(e,e.return,d)}}var Yn=!1,dt=!1,_u=!1,bm=typeof WeakSet=="function"?WeakSet:Set,yt=null;function tw(e,t){if(e=e.containerInfo,Vu=Fl,e=Mh(e),mc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var c=r.anchorOffset,d=r.focusNode;r=r.focusOffset;try{n.nodeType,d.nodeType}catch{n=null;break e}var v=0,w=-1,z=-1,L=0,q=0,G=e,B=null;t:for(;;){for(var X;G!==n||c!==0&&G.nodeType!==3||(w=v+c),G!==d||r!==0&&G.nodeType!==3||(z=v+r),G.nodeType===3&&(v+=G.nodeValue.length),(X=G.firstChild)!==null;)B=G,G=X;for(;;){if(G===e)break t;if(B===n&&++L===c&&(w=v),B===d&&++q===r&&(z=v),(X=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=X}n=w===-1||z===-1?null:{start:w,end:z}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:e,selectionRange:n},Fl=!1,yt=t;yt!==null;)if(t=yt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,yt=e;else for(;yt!==null;){switch(t=yt,d=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,n=t,c=d.memoizedProps,d=d.memoizedState,r=n.stateNode;try{var te=Ia(n.type,c);e=r.getSnapshotBeforeUpdate(te,d),r.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Be(n,n.return,ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Iu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Iu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,yt=e;break}yt=t.return}}function wm(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:qn(e,n),r&4&&Xr(5,n);break;case 1:if(qn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){Be(n,n.return,v)}else{var c=Ia(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Be(n,n.return,v)}}r&64&&pm(n),r&512&&qr(n,n.return);break;case 3:if(qn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ip(e,t)}catch(v){Be(n,n.return,v)}}break;case 27:t===null&&r&4&&ym(n);case 26:case 5:qn(e,n),t===null&&r&4&&gm(n),r&512&&qr(n,n.return);break;case 12:qn(e,n);break;case 31:qn(e,n),r&4&&Sm(e,n);break;case 13:qn(e,n),r&4&&Tm(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=uw.bind(null,n),Aw(e,n))));break;case 22:if(r=n.memoizedState!==null||Yn,!r){t=t!==null&&t.memoizedState!==null||dt,c=Yn;var d=dt;Yn=r,(dt=t)&&!d?Vn(e,n,(n.subtreeFlags&8772)!==0):qn(e,n),Yn=c,dt=d}break;case 30:break;default:qn(e,n)}}function xm(e){var t=e.alternate;t!==null&&(e.alternate=null,xm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Js(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Dt=!1;function Xn(e,t,n){for(n=n.child;n!==null;)_m(e,t,n),n=n.sibling}function _m(e,t,n){if(Yt&&typeof Yt.onCommitFiberUnmount=="function")try{Yt.onCommitFiberUnmount(fr,n)}catch{}switch(n.tag){case 26:dt||_n(n,t),Xn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:dt||_n(n,t);var r=Ke,c=Dt;ya(n.type)&&(Ke=n.stateNode,Dt=!1),Xn(e,t,n),Kr(n.stateNode),Ke=r,Dt=c;break;case 5:dt||_n(n,t);case 6:if(r=Ke,c=Dt,Ke=null,Xn(e,t,n),Ke=r,Dt=c,Ke!==null)if(Dt)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(n.stateNode)}catch(d){Be(n,t,d)}else try{Ke.removeChild(n.stateNode)}catch(d){Be(n,t,d)}break;case 18:Ke!==null&&(Dt?(e=Ke,pg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ii(e)):pg(Ke,n.stateNode));break;case 4:r=Ke,c=Dt,Ke=n.stateNode.containerInfo,Dt=!0,Xn(e,t,n),Ke=r,Dt=c;break;case 0:case 11:case 14:case 15:da(2,n,t),dt||da(4,n,t),Xn(e,t,n);break;case 1:dt||(_n(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&mm(n,t,r)),Xn(e,t,n);break;case 21:Xn(e,t,n);break;case 22:dt=(r=dt)||n.memoizedState!==null,Xn(e,t,n),dt=r;break;default:Xn(e,t,n)}}function Sm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ii(e)}catch(n){Be(t,t.return,n)}}}function Tm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ii(e)}catch(n){Be(t,t.return,n)}}function nw(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new bm),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new bm),t;default:throw Error(l(435,e.tag))}}function Tl(e,t){var n=nw(e);t.forEach(function(r){if(!n.has(r)){n.add(r);var c=dw.bind(null,e,r);r.then(c,c)}})}function Rt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var c=n[r],d=e,v=t,w=v;e:for(;w!==null;){switch(w.tag){case 27:if(ya(w.type)){Ke=w.stateNode,Dt=!1;break e}break;case 5:Ke=w.stateNode,Dt=!1;break e;case 3:case 4:Ke=w.stateNode.containerInfo,Dt=!0;break e}w=w.return}if(Ke===null)throw Error(l(160));_m(d,v,c),Ke=null,Dt=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Cm(t,e),t=t.sibling}var dn=null;function Cm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rt(t,e),Ut(e),r&4&&(da(3,e,e.return),Xr(3,e),da(5,e,e.return));break;case 1:Rt(t,e),Ut(e),r&512&&(dt||n===null||_n(n,n.return)),r&64&&Yn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var c=dn;if(Rt(t,e),Ut(e),r&512&&(dt||n===null||_n(n,n.return)),r&4){var d=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":d=c.getElementsByTagName("title")[0],(!d||d[mr]||d[xt]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(r),c.head.insertBefore(d,c.querySelector("head > title"))),Ct(d,r,n),d[xt]=e,vt(d),r=d;break e;case"link":var v=Cg("link","href",c).get(r+(n.href||""));if(v){for(var w=0;w<v.length;w++)if(d=v[w],d.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&d.getAttribute("rel")===(n.rel==null?null:n.rel)&&d.getAttribute("title")===(n.title==null?null:n.title)&&d.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(w,1);break t}}d=c.createElement(r),Ct(d,r,n),c.head.appendChild(d);break;case"meta":if(v=Cg("meta","content",c).get(r+(n.content||""))){for(w=0;w<v.length;w++)if(d=v[w],d.getAttribute("content")===(n.content==null?null:""+n.content)&&d.getAttribute("name")===(n.name==null?null:n.name)&&d.getAttribute("property")===(n.property==null?null:n.property)&&d.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&d.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(w,1);break t}}d=c.createElement(r),Ct(d,r,n),c.head.appendChild(d);break;default:throw Error(l(468,r))}d[xt]=e,vt(d),r=d}e.stateNode=r}else Eg(c,e.type,e.stateNode);else e.stateNode=Tg(c,r,e.memoizedProps);else d!==r?(d===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):d.count--,r===null?Eg(c,e.type,e.stateNode):Tg(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&bu(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rt(t,e),Ut(e),r&512&&(dt||n===null||_n(n,n.return)),n!==null&&r&4&&bu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rt(t,e),Ut(e),r&512&&(dt||n===null||_n(n,n.return)),e.flags&32){c=e.stateNode;try{gi(c,"")}catch(te){Be(e,e.return,te)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,bu(e,c,n!==null?n.memoizedProps:c)),r&1024&&(_u=!0);break;case 6:if(Rt(t,e),Ut(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(te){Be(e,e.return,te)}}break;case 3:if(Yl=null,c=dn,dn=Ll(t.containerInfo),Rt(t,e),dn=c,Ut(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(te){Be(e,e.return,te)}_u&&(_u=!1,Em(e));break;case 4:r=dn,dn=Ll(e.stateNode.containerInfo),Rt(t,e),Ut(e),dn=r;break;case 12:Rt(t,e),Ut(e);break;case 31:Rt(t,e),Ut(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Tl(e,r)));break;case 13:Rt(t,e),Ut(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(El=Bt()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Tl(e,r)));break;case 22:c=e.memoizedState!==null;var z=n!==null&&n.memoizedState!==null,L=Yn,q=dt;if(Yn=L||c,dt=q||z,Rt(t,e),dt=q,Yn=L,Ut(e),r&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||z||Yn||dt||Qa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){z=n=t;try{if(d=z.stateNode,c)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{w=z.stateNode;var G=z.memoizedProps.style,B=G!=null&&G.hasOwnProperty("display")?G.display:null;w.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(te){Be(z,z.return,te)}}}else if(t.tag===6){if(n===null){z=t;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(te){Be(z,z.return,te)}}}else if(t.tag===18){if(n===null){z=t;try{var X=z.stateNode;c?mg(X,!0):mg(z.stateNode,!1)}catch(te){Be(z,z.return,te)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,Tl(e,n))));break;case 19:Rt(t,e),Ut(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Tl(e,r)));break;case 30:break;case 21:break;default:Rt(t,e),Ut(e)}}function Ut(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(vm(r)){n=r;break}r=r.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var c=n.stateNode,d=wu(e);Sl(e,d,c);break;case 5:var v=n.stateNode;n.flags&32&&(gi(v,""),n.flags&=-33);var w=wu(e);Sl(e,w,v);break;case 3:case 4:var z=n.stateNode.containerInfo,L=wu(e);xu(e,L,z);break;default:throw Error(l(161))}}catch(q){Be(e,e.return,q)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Em(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Em(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wm(e,t.alternate,t),t=t.sibling}function Qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:da(4,t,t.return),Qa(t);break;case 1:_n(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mm(t,t.return,n),Qa(t);break;case 27:Kr(t.stateNode);case 26:case 5:_n(t,t.return),Qa(t);break;case 22:t.memoizedState===null&&Qa(t);break;case 30:Qa(t);break;default:Qa(t)}e=e.sibling}}function Vn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,d=t,v=d.flags;switch(d.tag){case 0:case 11:case 15:Vn(c,d,n),Xr(4,d);break;case 1:if(Vn(c,d,n),r=d,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(L){Be(r,r.return,L)}if(r=d,c=r.updateQueue,c!==null){var w=r.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)ap(z[c],w)}catch(L){Be(r,r.return,L)}}n&&v&64&&pm(d),qr(d,d.return);break;case 27:ym(d);case 26:case 5:Vn(c,d,n),n&&r===null&&v&4&&gm(d),qr(d,d.return);break;case 12:Vn(c,d,n);break;case 31:Vn(c,d,n),n&&v&4&&Sm(c,d);break;case 13:Vn(c,d,n),n&&v&4&&Tm(c,d);break;case 22:d.memoizedState===null&&Vn(c,d,n),qr(d,d.return);break;case 30:break;default:Vn(c,d,n)}t=t.sibling}}function Su(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&kr(n))}function Tu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kr(e))}function fn(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)zm(e,t,n,r),t=t.sibling}function zm(e,t,n,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,n,r),c&2048&&Xr(9,t);break;case 1:fn(e,t,n,r);break;case 3:fn(e,t,n,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kr(e)));break;case 12:if(c&2048){fn(e,t,n,r),e=t.stateNode;try{var d=t.memoizedProps,v=d.id,w=d.onPostCommit;typeof w=="function"&&w(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Be(t,t.return,z)}}else fn(e,t,n,r);break;case 31:fn(e,t,n,r);break;case 13:fn(e,t,n,r);break;case 23:break;case 22:d=t.stateNode,v=t.alternate,t.memoizedState!==null?d._visibility&2?fn(e,t,n,r):Vr(e,t):d._visibility&2?fn(e,t,n,r):(d._visibility|=2,ji(e,t,n,r,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Su(v,t);break;case 24:fn(e,t,n,r),c&2048&&Tu(t.alternate,t);break;default:fn(e,t,n,r)}}function ji(e,t,n,r,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,v=t,w=n,z=r,L=v.flags;switch(v.tag){case 0:case 11:case 15:ji(d,v,w,z,c),Xr(8,v);break;case 23:break;case 22:var q=v.stateNode;v.memoizedState!==null?q._visibility&2?ji(d,v,w,z,c):Vr(d,v):(q._visibility|=2,ji(d,v,w,z,c)),c&&L&2048&&Su(v.alternate,v);break;case 24:ji(d,v,w,z,c),c&&L&2048&&Tu(v.alternate,v);break;default:ji(d,v,w,z,c)}t=t.sibling}}function Vr(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,c=r.flags;switch(r.tag){case 22:Vr(n,r),c&2048&&Su(r.alternate,r);break;case 24:Vr(n,r),c&2048&&Tu(r.alternate,r);break;default:Vr(n,r)}t=t.sibling}}var Fr=8192;function Hi(e,t,n){if(e.subtreeFlags&Fr)for(e=e.child;e!==null;)km(e,t,n),e=e.sibling}function km(e,t,n){switch(e.tag){case 26:Hi(e,t,n),e.flags&Fr&&e.memoizedState!==null&&qw(n,dn,e.memoizedState,e.memoizedProps);break;case 5:Hi(e,t,n);break;case 3:case 4:var r=dn;dn=Ll(e.stateNode.containerInfo),Hi(e,t,n),dn=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Fr,Fr=16777216,Hi(e,t,n),Fr=r):Hi(e,t,n));break;default:Hi(e,t,n)}}function Nm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function $r(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];yt=r,Mm(r,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Am(e),e=e.sibling}function Am(e){switch(e.tag){case 0:case 11:case 15:$r(e),e.flags&2048&&da(9,e,e.return);break;case 3:$r(e);break;case 12:$r(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Cl(e)):$r(e);break;default:$r(e)}}function Cl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];yt=r,Mm(r,e)}Nm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:da(8,t,t.return),Cl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Cl(t));break;default:Cl(t)}e=e.sibling}}function Mm(e,t){for(;yt!==null;){var n=yt;switch(n.tag){case 0:case 11:case 15:da(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:kr(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,yt=r;else e:for(n=e;yt!==null;){r=yt;var c=r.sibling,d=r.return;if(xm(r),r===n){yt=null;break e}if(c!==null){c.return=d,yt=c;break e}yt=d}}}var aw={getCacheForType:function(e){var t=St(st),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return St(st).controller.signal}},iw=typeof WeakMap=="function"?WeakMap:Map,Re=0,Fe=null,Te=null,Ee=0,Le=0,Gt=null,fa=!1,Li=!1,Cu=!1,Fn=0,tt=0,ha=0,Za=0,Eu=0,It=0,Bi=0,Gr=null,jt=null,zu=!1,El=0,Om=0,zl=1/0,kl=null,pa=null,mt=0,ma=null,Yi=null,$n=0,ku=0,Nu=null,Dm=null,Ir=0,Au=null;function Qt(){return(Re&2)!==0&&Ee!==0?Ee&-Ee:_.T!==null?ju():Zf()}function Rm(){if(It===0)if((Ee&536870912)===0||ke){var e=jo;jo<<=1,(jo&3932160)===0&&(jo=262144),It=e}else It=536870912;return e=Ft.current,e!==null&&(e.flags|=32),It}function Ht(e,t,n){(e===Fe&&(Le===2||Le===9)||e.cancelPendingCommit!==null)&&(Xi(e,0),ga(e,Ee,It,!1)),pr(e,n),((Re&2)===0||e!==Fe)&&(e===Fe&&((Re&2)===0&&(Za|=n),tt===4&&ga(e,Ee,It,!1)),Sn(e))}function Um(e,t,n){if((Re&6)!==0)throw Error(l(327));var r=!n&&(t&127)===0&&(t&e.expiredLanes)===0||hr(e,t),c=r?lw(e,t):Ou(e,t,!0),d=r;do{if(c===0){Li&&!r&&ga(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!rw(n)){c=Ou(e,t,!1),d=!1;continue}if(c===2){if(d=t,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var w=e;c=Gr;var z=w.current.memoizedState.isDehydrated;if(z&&(Xi(w,v).flags|=256),v=Ou(w,v,!1),v!==2){if(Cu&&!z){w.errorRecoveryDisabledLanes|=d,Za|=d,c=4;break e}d=jt,jt=c,d!==null&&(jt===null?jt=d:jt.push.apply(jt,d))}c=v}if(d=!1,c!==2)continue}}if(c===1){Xi(e,0),ga(e,t,0,!0);break}e:{switch(r=e,d=c,d){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:ga(r,t,It,!fa);break e;case 2:jt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=El+300-Bt(),10<c)){if(ga(r,t,It,!fa),Lo(r,0,!0)!==0)break e;$n=t,r.timeoutHandle=fg(jm.bind(null,r,n,jt,kl,zu,t,It,Za,Bi,fa,d,"Throttled",-0,0),c);break e}jm(r,n,jt,kl,zu,t,It,Za,Bi,fa,d,null,-0,0)}}break}while(!0);Sn(e)}function jm(e,t,n,r,c,d,v,w,z,L,q,G,B,X){if(e.timeoutHandle=-1,G=t.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:An},km(t,d,G);var te=(d&62914560)===d?El-Bt():(d&4194048)===d?Om-Bt():0;if(te=Vw(G,te),te!==null){$n=d,e.cancelPendingCommit=te(Fm.bind(null,e,t,d,n,r,c,v,w,z,q,G,null,B,X)),ga(e,d,v,!L);return}}Fm(e,t,d,n,r,c,v,w,z)}function rw(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var c=n[r],d=c.getSnapshot;c=c.value;try{if(!qt(d(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ga(e,t,n,r){t&=~Eu,t&=~Za,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var d=31-Xt(c),v=1<<d;r[d]=-1,c&=~v}n!==0&&Gf(e,n,t)}function Nl(){return(Re&6)===0?(Qr(0),!1):!0}function Mu(){if(Te!==null){if(Le===0)var e=Te.return;else e=Te,Rn=Ya=null,Ic(e),Mi=null,Ar=0,e=Te;for(;e!==null;)hm(e.alternate,e),e=e.return;Te=null}}function Xi(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Cw(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),$n=0,Mu(),Fe=e,Te=n=On(e.current,null),Ee=t,Le=0,Gt=null,fa=!1,Li=hr(e,t),Cu=!1,Bi=It=Eu=Za=ha=tt=0,jt=Gr=null,zu=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-Xt(r),d=1<<c;t|=e[c],r&=~d}return Fn=t,Wo(),n}function Hm(e,t){ve=null,_.H=Lr,t===Ai||t===il?(t=Ph(),Le=3):t===Uc?(t=Ph(),Le=4):Le=t===cu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gt=t,Te===null&&(tt=1,yl(e,en(t,e.current)))}function Lm(){var e=Ft.current;return e===null?!0:(Ee&4194048)===Ee?rn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===rn:!1}function Bm(){var e=_.H;return _.H=Lr,e===null?Lr:e}function Ym(){var e=_.A;return _.A=aw,e}function Al(){tt=4,fa||(Ee&4194048)!==Ee&&Ft.current!==null||(Li=!0),(ha&134217727)===0&&(Za&134217727)===0||Fe===null||ga(Fe,Ee,It,!1)}function Ou(e,t,n){var r=Re;Re|=2;var c=Bm(),d=Ym();(Fe!==e||Ee!==t)&&(kl=null,Xi(e,t)),t=!1;var v=tt;e:do try{if(Le!==0&&Te!==null){var w=Te,z=Gt;switch(Le){case 8:Mu(),v=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(t=!0);var L=Le;if(Le=0,Gt=null,qi(e,w,z,L),n&&Li){v=0;break e}break;default:L=Le,Le=0,Gt=null,qi(e,w,z,L)}}ow(),v=tt;break}catch(q){Hm(e,q)}while(!0);return t&&e.shellSuspendCounter++,Rn=Ya=null,Re=r,_.H=c,_.A=d,Te===null&&(Fe=null,Ee=0,Wo()),v}function ow(){for(;Te!==null;)Xm(Te)}function lw(e,t){var n=Re;Re|=2;var r=Bm(),c=Ym();Fe!==e||Ee!==t?(kl=null,zl=Bt()+500,Xi(e,t)):Li=hr(e,t);e:do try{if(Le!==0&&Te!==null){t=Te;var d=Gt;t:switch(Le){case 1:Le=0,Gt=null,qi(e,t,d,1);break;case 2:case 9:if(Kh(d)){Le=0,Gt=null,qm(t);break}t=function(){Le!==2&&Le!==9||Fe!==e||(Le=7),Sn(e)},d.then(t,t);break e;case 3:Le=7;break e;case 4:Le=5;break e;case 7:Kh(d)?(Le=0,Gt=null,qm(t)):(Le=0,Gt=null,qi(e,t,d,7));break;case 5:var v=null;switch(Te.tag){case 26:v=Te.memoizedState;case 5:case 27:var w=Te;if(v?zg(v):w.stateNode.complete){Le=0,Gt=null;var z=w.sibling;if(z!==null)Te=z;else{var L=w.return;L!==null?(Te=L,Ml(L)):Te=null}break t}}Le=0,Gt=null,qi(e,t,d,5);break;case 6:Le=0,Gt=null,qi(e,t,d,6);break;case 8:Mu(),tt=6;break e;default:throw Error(l(462))}}sw();break}catch(q){Hm(e,q)}while(!0);return Rn=Ya=null,_.H=r,_.A=c,Re=n,Te!==null?0:(Fe=null,Ee=0,Wo(),tt)}function sw(){for(;Te!==null&&!My();)Xm(Te)}function Xm(e){var t=dm(e.alternate,e,Fn);e.memoizedProps=e.pendingProps,t===null?Ml(e):Te=t}function qm(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=rm(n,t,t.pendingProps,t.type,void 0,Ee);break;case 11:t=rm(n,t,t.pendingProps,t.type.render,t.ref,Ee);break;case 5:Ic(t);default:hm(n,t),t=Te=Yh(t,Fn),t=dm(n,t,Fn)}e.memoizedProps=e.pendingProps,t===null?Ml(e):Te=t}function qi(e,t,n,r){Rn=Ya=null,Ic(t),Mi=null,Ar=0;var c=t.return;try{if(Wb(e,c,t,n,Ee)){tt=1,yl(e,en(n,e.current)),Te=null;return}}catch(d){if(c!==null)throw Te=c,d;tt=1,yl(e,en(n,e.current)),Te=null;return}t.flags&32768?(ke||r===1?e=!0:Li||(Ee&536870912)!==0?e=!1:(fa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ft.current,r!==null&&r.tag===13&&(r.flags|=16384))),Vm(t,e)):Ml(t)}function Ml(e){var t=e;do{if((t.flags&32768)!==0){Vm(t,fa);return}e=t.return;var n=Pb(t.alternate,t,Fn);if(n!==null){Te=n;return}if(t=t.sibling,t!==null){Te=t;return}Te=t=e}while(t!==null);tt===0&&(tt=5)}function Vm(e,t){do{var n=ew(e.alternate,e);if(n!==null){n.flags&=32767,Te=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Te=e;return}Te=e=n}while(e!==null);tt=6,Te=null}function Fm(e,t,n,r,c,d,v,w,z){e.cancelPendingCommit=null;do Ol();while(mt!==0);if((Re&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(d=t.lanes|t.childLanes,d|=wc,Xy(e,n,d,v,w,z),e===Fe&&(Te=Fe=null,Ee=0),Yi=t,ma=e,$n=n,ku=d,Nu=c,Dm=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fw(Ro,function(){return Zm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=_.T,_.T=null,c=k.p,k.p=2,v=Re,Re|=4;try{tw(e,t,n)}finally{Re=v,k.p=c,_.T=r}}mt=1,$m(),Gm(),Im()}}function $m(){if(mt===1){mt=0;var e=ma,t=Yi,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=_.T,_.T=null;var r=k.p;k.p=2;var c=Re;Re|=4;try{Cm(t,e);var d=Fu,v=Mh(e.containerInfo),w=d.focusedElem,z=d.selectionRange;if(v!==w&&w&&w.ownerDocument&&Ah(w.ownerDocument.documentElement,w)){if(z!==null&&mc(w)){var L=z.start,q=z.end;if(q===void 0&&(q=L),"selectionStart"in w)w.selectionStart=L,w.selectionEnd=Math.min(q,w.value.length);else{var G=w.ownerDocument||document,B=G&&G.defaultView||window;if(B.getSelection){var X=B.getSelection(),te=w.textContent.length,ce=Math.min(z.start,te),Ve=z.end===void 0?ce:Math.min(z.end,te);!X.extend&&ce>Ve&&(v=Ve,Ve=ce,ce=v);var R=Nh(w,ce),M=Nh(w,Ve);if(R&&M&&(X.rangeCount!==1||X.anchorNode!==R.node||X.anchorOffset!==R.offset||X.focusNode!==M.node||X.focusOffset!==M.offset)){var H=G.createRange();H.setStart(R.node,R.offset),X.removeAllRanges(),ce>Ve?(X.addRange(H),X.extend(M.node,M.offset)):(H.setEnd(M.node,M.offset),X.addRange(H))}}}}for(G=[],X=w;X=X.parentNode;)X.nodeType===1&&G.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<G.length;w++){var V=G[w];V.element.scrollLeft=V.left,V.element.scrollTop=V.top}}Fl=!!Vu,Fu=Vu=null}finally{Re=c,k.p=r,_.T=n}}e.current=t,mt=2}}function Gm(){if(mt===2){mt=0;var e=ma,t=Yi,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=_.T,_.T=null;var r=k.p;k.p=2;var c=Re;Re|=4;try{wm(e,t.alternate,t)}finally{Re=c,k.p=r,_.T=n}}mt=3}}function Im(){if(mt===4||mt===3){mt=0,Oy();var e=ma,t=Yi,n=$n,r=Dm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?mt=5:(mt=0,Yi=ma=null,Qm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(pa=null),Ws(n),t=t.stateNode,Yt&&typeof Yt.onCommitFiberRoot=="function")try{Yt.onCommitFiberRoot(fr,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=_.T,c=k.p,k.p=2,_.T=null;try{for(var d=e.onRecoverableError,v=0;v<r.length;v++){var w=r[v];d(w.value,{componentStack:w.stack})}}finally{_.T=t,k.p=c}}($n&3)!==0&&Ol(),Sn(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===Au?Ir++:(Ir=0,Au=e):Ir=0,Qr(0)}}function Qm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kr(t)))}function Ol(){return $m(),Gm(),Im(),Zm()}function Zm(){if(mt!==5)return!1;var e=ma,t=ku;ku=0;var n=Ws($n),r=_.T,c=k.p;try{k.p=32>n?32:n,_.T=null,n=Nu,Nu=null;var d=ma,v=$n;if(mt=0,Yi=ma=null,$n=0,(Re&6)!==0)throw Error(l(331));var w=Re;if(Re|=4,Am(d.current),zm(d,d.current,v,n),Re=w,Qr(0,!1),Yt&&typeof Yt.onPostCommitFiberRoot=="function")try{Yt.onPostCommitFiberRoot(fr,d)}catch{}return!0}finally{k.p=c,_.T=r,Qm(e,t)}}function Wm(e,t,n){t=en(n,t),t=su(e.stateNode,t,2),e=sa(e,t,2),e!==null&&(pr(e,2),Sn(e))}function Be(e,t,n){if(e.tag===3)Wm(e,e,n);else for(;t!==null;){if(t.tag===3){Wm(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(pa===null||!pa.has(r))){e=en(n,e),n=Kp(2),r=sa(t,n,2),r!==null&&(Jp(n,r,t,e),pr(r,2),Sn(r));break}}t=t.return}}function Du(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iw;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(n)||(Cu=!0,c.add(n),e=cw.bind(null,e,t,n),t.then(e,e))}function cw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fe===e&&(Ee&n)===n&&(tt===4||tt===3&&(Ee&62914560)===Ee&&300>Bt()-El?(Re&2)===0&&Xi(e,0):Eu|=n,Bi===Ee&&(Bi=0)),Sn(e)}function Km(e,t){t===0&&(t=$f()),e=Ha(e,t),e!==null&&(pr(e,t),Sn(e))}function uw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Km(e,n)}function dw(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(t),Km(e,n)}function fw(e,t){return Gs(e,t)}var Dl=null,Vi=null,Ru=!1,Rl=!1,Uu=!1,va=0;function Sn(e){e!==Vi&&e.next===null&&(Vi===null?Dl=Vi=e:Vi=Vi.next=e),Rl=!0,Ru||(Ru=!0,pw())}function Qr(e,t){if(!Uu&&Rl){Uu=!0;do for(var n=!1,r=Dl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var d=0;else{var v=r.suspendedLanes,w=r.pingedLanes;d=(1<<31-Xt(42|e)+1)-1,d&=c&~(v&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,tg(r,d))}else d=Ee,d=Lo(r,r===Fe?d:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(d&3)===0||hr(r,d)||(n=!0,tg(r,d));r=r.next}while(n);Uu=!1}}function hw(){Jm()}function Jm(){Rl=Ru=!1;var e=0;va!==0&&Tw()&&(e=va);for(var t=Bt(),n=null,r=Dl;r!==null;){var c=r.next,d=Pm(r,t);d===0?(r.next=null,n===null?Dl=c:n.next=c,c===null&&(Vi=n)):(n=r,(e!==0||(d&3)!==0)&&(Rl=!0)),r=c}mt!==0&&mt!==5||Qr(e),va!==0&&(va=0)}function Pm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-Xt(d),w=1<<v,z=c[v];z===-1?((w&n)===0||(w&r)!==0)&&(c[v]=Yy(w,t)):z<=t&&(e.expiredLanes|=w),d&=~w}if(t=Fe,n=Ee,n=Lo(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Le===2||Le===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Is(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||hr(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Is(r),Ws(n)){case 2:case 8:n=Vf;break;case 32:n=Ro;break;case 268435456:n=Ff;break;default:n=Ro}return r=eg.bind(null,e),n=Gs(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Is(r),e.callbackPriority=2,e.callbackNode=null,2}function eg(e,t){if(mt!==0&&mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ol()&&e.callbackNode!==n)return null;var r=Ee;return r=Lo(e,e===Fe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Um(e,r,t),Pm(e,Bt()),e.callbackNode!=null&&e.callbackNode===n?eg.bind(null,e):null)}function tg(e,t){if(Ol())return null;Um(e,t,!0)}function pw(){Ew(function(){(Re&6)!==0?Gs(qf,hw):Jm()})}function ju(){if(va===0){var e=ki;e===0&&(e=Uo,Uo<<=1,(Uo&261888)===0&&(Uo=256)),va=e}return va}function ng(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:qo(""+e)}function ag(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function mw(e,t,n,r,c){if(t==="submit"&&n&&n.stateNode===c){var d=ng((c[Mt]||null).action),v=r.submitter;v&&(t=(t=v[Mt]||null)?ng(t.formAction):v.getAttribute("formAction"),t!==null&&(d=t,v=null));var w=new Go("action","action",null,r,c);e.push({event:w,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(va!==0){var z=v?ag(c,v):new FormData(c);nu(n,{pending:!0,data:z,method:c.method,action:d},null,z)}}else typeof d=="function"&&(w.preventDefault(),z=v?ag(c,v):new FormData(c),nu(n,{pending:!0,data:z,method:c.method,action:d},d,z))},currentTarget:c}]})}}for(var Hu=0;Hu<bc.length;Hu++){var Lu=bc[Hu],gw=Lu.toLowerCase(),vw=Lu[0].toUpperCase()+Lu.slice(1);un(gw,"on"+vw)}un(Rh,"onAnimationEnd"),un(Uh,"onAnimationIteration"),un(jh,"onAnimationStart"),un("dblclick","onDoubleClick"),un("focusin","onFocus"),un("focusout","onBlur"),un(Db,"onTransitionRun"),un(Rb,"onTransitionStart"),un(Ub,"onTransitionCancel"),un(Hh,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Da("onBeforeInput",["compositionend","keypress","textInput","paste"]),Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zr));function ig(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],c=r.event;r=r.listeners;e:{var d=void 0;if(t)for(var v=r.length-1;0<=v;v--){var w=r[v],z=w.instance,L=w.currentTarget;if(w=w.listener,z!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=L;try{d(c)}catch(q){Zo(q)}c.currentTarget=null,d=z}else for(v=0;v<r.length;v++){if(w=r[v],z=w.instance,L=w.currentTarget,w=w.listener,z!==d&&c.isPropagationStopped())break e;d=w,c.currentTarget=L;try{d(c)}catch(q){Zo(q)}c.currentTarget=null,d=z}}}}function Ce(e,t){var n=t[Ks];n===void 0&&(n=t[Ks]=new Set);var r=e+"__bubble";n.has(r)||(rg(t,e,2,!1),n.add(r))}function Bu(e,t,n){var r=0;t&&(r|=4),rg(n,e,r,t)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function Yu(e){if(!e[Ul]){e[Ul]=!0,Jf.forEach(function(n){n!=="selectionchange"&&(yw.has(n)||Bu(n,!1,e),Bu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ul]||(t[Ul]=!0,Bu("selectionchange",!1,t))}}function rg(e,t,n,r){switch(Rg(t)){case 2:var c=Gw;break;case 8:c=Iw;break;default:c=td}n=c.bind(null,t,n,e),c=void 0,!oc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Xu(e,t,n,r,c){var d=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var w=r.stateNode.containerInfo;if(w===c)break;if(v===4)for(v=r.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;w!==null;){if(v=di(w),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){r=d=v;continue e}w=w.parentNode}}r=r.return}uh(function(){var L=d,q=ic(n),G=[];e:{var B=Lh.get(e);if(B!==void 0){var X=Go,te=e;switch(e){case"keypress":if(Fo(n)===0)break e;case"keydown":case"keyup":X=db;break;case"focusin":te="focus",X=uc;break;case"focusout":te="blur",X=uc;break;case"beforeblur":case"afterblur":X=uc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Py;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=pb;break;case Rh:case Uh:case jh:X=nb;break;case Hh:X=gb;break;case"scroll":case"scrollend":X=Ky;break;case"wheel":X=yb;break;case"copy":case"cut":case"paste":X=ib;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=mh;break;case"toggle":case"beforetoggle":X=wb}var ce=(t&4)!==0,Ve=!ce&&(e==="scroll"||e==="scrollend"),R=ce?B!==null?B+"Capture":null:B;ce=[];for(var M=L,H;M!==null;){var V=M;if(H=V.stateNode,V=V.tag,V!==5&&V!==26&&V!==27||H===null||R===null||(V=vr(M,R),V!=null&&ce.push(Wr(M,V,H))),Ve)break;M=M.return}0<ce.length&&(B=new X(B,te,null,n,q),G.push({event:B,listeners:ce}))}}if((t&7)===0){e:{if(B=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",B&&n!==ac&&(te=n.relatedTarget||n.fromElement)&&(di(te)||te[ui]))break e;if((X||B)&&(B=q.window===q?q:(B=q.ownerDocument)?B.defaultView||B.parentWindow:window,X?(te=n.relatedTarget||n.toElement,X=L,te=te?di(te):null,te!==null&&(Ve=u(te),ce=te.tag,te!==Ve||ce!==5&&ce!==27&&ce!==6)&&(te=null)):(X=null,te=L),X!==te)){if(ce=hh,V="onMouseLeave",R="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ce=mh,V="onPointerLeave",R="onPointerEnter",M="pointer"),Ve=X==null?B:gr(X),H=te==null?B:gr(te),B=new ce(V,M+"leave",X,n,q),B.target=Ve,B.relatedTarget=H,V=null,di(q)===L&&(ce=new ce(R,M+"enter",te,n,q),ce.target=H,ce.relatedTarget=Ve,V=ce),Ve=V,X&&te)t:{for(ce=bw,R=X,M=te,H=0,V=R;V;V=ce(V))H++;V=0;for(var se=M;se;se=ce(se))V++;for(;0<H-V;)R=ce(R),H--;for(;0<V-H;)M=ce(M),V--;for(;H--;){if(R===M||M!==null&&R===M.alternate){ce=R;break t}R=ce(R),M=ce(M)}ce=null}else ce=null;X!==null&&og(G,B,X,ce,!1),te!==null&&Ve!==null&&og(G,Ve,te,ce,!0)}}e:{if(B=L?gr(L):window,X=B.nodeName&&B.nodeName.toLowerCase(),X==="select"||X==="input"&&B.type==="file")var Oe=Sh;else if(xh(B))if(Th)Oe=Ab;else{Oe=kb;var ie=zb}else X=B.nodeName,!X||X.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?L&&nc(L.elementType)&&(Oe=Sh):Oe=Nb;if(Oe&&(Oe=Oe(e,L))){_h(G,Oe,n,q);break e}ie&&ie(e,B,L),e==="focusout"&&L&&B.type==="number"&&L.memoizedProps.value!=null&&tc(B,"number",B.value)}switch(ie=L?gr(L):window,e){case"focusin":(xh(ie)||ie.contentEditable==="true")&&(wi=ie,gc=L,Cr=null);break;case"focusout":Cr=gc=wi=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,Oh(G,n,q);break;case"selectionchange":if(Ob)break;case"keydown":case"keyup":Oh(G,n,q)}var we;if(fc)e:{switch(e){case"compositionstart":var ze="onCompositionStart";break e;case"compositionend":ze="onCompositionEnd";break e;case"compositionupdate":ze="onCompositionUpdate";break e}ze=void 0}else bi?bh(e,n)&&(ze="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ze="onCompositionStart");ze&&(gh&&n.locale!=="ko"&&(bi||ze!=="onCompositionStart"?ze==="onCompositionEnd"&&bi&&(we=dh()):(ta=q,lc="value"in ta?ta.value:ta.textContent,bi=!0)),ie=jl(L,ze),0<ie.length&&(ze=new ph(ze,e,null,n,q),G.push({event:ze,listeners:ie}),we?ze.data=we:(we=wh(n),we!==null&&(ze.data=we)))),(we=_b?Sb(e,n):Tb(e,n))&&(ze=jl(L,"onBeforeInput"),0<ze.length&&(ie=new ph("onBeforeInput","beforeinput",null,n,q),G.push({event:ie,listeners:ze}),ie.data=we)),mw(G,e,L,n,q)}ig(G,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=vr(e,n),c!=null&&r.unshift(Wr(e,c,d)),c=vr(e,t),c!=null&&r.push(Wr(e,c,d))),e.tag===3)return r;e=e.return}return[]}function bw(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function og(e,t,n,r,c){for(var d=t._reactName,v=[];n!==null&&n!==r;){var w=n,z=w.alternate,L=w.stateNode;if(w=w.tag,z!==null&&z===r)break;w!==5&&w!==26&&w!==27||L===null||(z=L,c?(L=vr(n,d),L!=null&&v.unshift(Wr(n,L,z))):c||(L=vr(n,d),L!=null&&v.push(Wr(n,L,z)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var ww=/\r\n?/g,xw=/\u0000|\uFFFD/g;function lg(e){return(typeof e=="string"?e:""+e).replace(ww,`
`).replace(xw,"")}function sg(e,t){return t=lg(t),lg(e)===t}function qe(e,t,n,r,c,d){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||gi(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&gi(e,""+r);break;case"className":Yo(e,"class",r);break;case"tabIndex":Yo(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Yo(e,n,r);break;case"style":sh(e,r,d);break;case"data":if(t!=="object"){Yo(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=qo(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&qe(e,t,"name",c.name,c,null),qe(e,t,"formEncType",c.formEncType,c,null),qe(e,t,"formMethod",c.formMethod,c,null),qe(e,t,"formTarget",c.formTarget,c,null)):(qe(e,t,"encType",c.encType,c,null),qe(e,t,"method",c.method,c,null),qe(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=qo(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=An);break;case"onScroll":r!=null&&Ce("scroll",e);break;case"onScrollEnd":r!=null&&Ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=qo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Bo(e,"popover",r);break;case"xlinkActuate":Nn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Nn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Nn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Nn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Nn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Nn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Nn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Bo(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Zy.get(n)||n,Bo(e,n,r))}}function qu(e,t,n,r,c,d){switch(n){case"style":sh(e,r,d);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof r=="string"?gi(e,r):(typeof r=="number"||typeof r=="bigint")&&gi(e,""+r);break;case"onScroll":r!=null&&Ce("scroll",e);break;case"onScrollEnd":r!=null&&Ce("scrollend",e);break;case"onClick":r!=null&&(e.onclick=An);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pf.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),d=e[Mt]||null,d=d!=null?d[n]:null,typeof d=="function"&&e.removeEventListener(t,d,c),typeof r=="function")){typeof d!="function"&&d!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,c);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Bo(e,n,r)}}}function Ct(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var r=!1,c=!1,d;for(d in n)if(n.hasOwnProperty(d)){var v=n[d];if(v!=null)switch(d){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:qe(e,t,d,v,n,null)}}c&&qe(e,t,"srcSet",n.srcSet,n,null),r&&qe(e,t,"src",n.src,n,null);return;case"input":Ce("invalid",e);var w=d=v=c=null,z=null,L=null;for(r in n)if(n.hasOwnProperty(r)){var q=n[r];if(q!=null)switch(r){case"name":c=q;break;case"type":v=q;break;case"checked":z=q;break;case"defaultChecked":L=q;break;case"value":d=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(l(137,t));break;default:qe(e,t,r,q,n,null)}}ih(e,d,w,z,L,v,c,!1);return;case"select":Ce("invalid",e),r=v=d=null;for(c in n)if(n.hasOwnProperty(c)&&(w=n[c],w!=null))switch(c){case"value":d=w;break;case"defaultValue":v=w;break;case"multiple":r=w;default:qe(e,t,c,w,n,null)}t=d,n=v,e.multiple=!!r,t!=null?mi(e,!!r,t,!1):n!=null&&mi(e,!!r,n,!0);return;case"textarea":Ce("invalid",e),d=c=r=null;for(v in n)if(n.hasOwnProperty(v)&&(w=n[v],w!=null))switch(v){case"value":r=w;break;case"defaultValue":c=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(l(91));break;default:qe(e,t,v,w,n,null)}oh(e,r,c,d);return;case"option":for(z in n)n.hasOwnProperty(z)&&(r=n[z],r!=null)&&(z==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":qe(e,t,z,r,n,null));return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(r=0;r<Zr.length;r++)Ce(Zr[r],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(r=n[L],r!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:qe(e,t,L,r,n,null)}return;default:if(nc(t)){for(q in n)n.hasOwnProperty(q)&&(r=n[q],r!==void 0&&qu(e,t,q,r,n,void 0));return}}for(w in n)n.hasOwnProperty(w)&&(r=n[w],r!=null&&qe(e,t,w,r,n,null))}function _w(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,v=null,w=null,z=null,L=null,q=null;for(X in n){var G=n[X];if(n.hasOwnProperty(X)&&G!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":z=G;default:r.hasOwnProperty(X)||qe(e,t,X,null,r,G)}}for(var B in r){var X=r[B];if(G=n[B],r.hasOwnProperty(B)&&(X!=null||G!=null))switch(B){case"type":d=X;break;case"name":c=X;break;case"checked":L=X;break;case"defaultChecked":q=X;break;case"value":v=X;break;case"defaultValue":w=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(l(137,t));break;default:X!==G&&qe(e,t,B,X,r,G)}}ec(e,v,w,z,L,q,d,c);return;case"select":X=v=w=B=null;for(d in n)if(z=n[d],n.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":X=z;default:r.hasOwnProperty(d)||qe(e,t,d,null,r,z)}for(c in r)if(d=r[c],z=n[c],r.hasOwnProperty(c)&&(d!=null||z!=null))switch(c){case"value":B=d;break;case"defaultValue":w=d;break;case"multiple":v=d;default:d!==z&&qe(e,t,c,d,r,z)}t=w,n=v,r=X,B!=null?mi(e,!!n,B,!1):!!r!=!!n&&(t!=null?mi(e,!!n,t,!0):mi(e,!!n,n?[]:"",!1));return;case"textarea":X=B=null;for(w in n)if(c=n[w],n.hasOwnProperty(w)&&c!=null&&!r.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:qe(e,t,w,null,r,c)}for(v in r)if(c=r[v],d=n[v],r.hasOwnProperty(v)&&(c!=null||d!=null))switch(v){case"value":B=c;break;case"defaultValue":X=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==d&&qe(e,t,v,c,r,d)}rh(e,B,X);return;case"option":for(var te in n)B=n[te],n.hasOwnProperty(te)&&B!=null&&!r.hasOwnProperty(te)&&(te==="selected"?e.selected=!1:qe(e,t,te,null,r,B));for(z in r)B=r[z],X=n[z],r.hasOwnProperty(z)&&B!==X&&(B!=null||X!=null)&&(z==="selected"?e.selected=B&&typeof B!="function"&&typeof B!="symbol":qe(e,t,z,B,r,X));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in n)B=n[ce],n.hasOwnProperty(ce)&&B!=null&&!r.hasOwnProperty(ce)&&qe(e,t,ce,null,r,B);for(L in r)if(B=r[L],X=n[L],r.hasOwnProperty(L)&&B!==X&&(B!=null||X!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(l(137,t));break;default:qe(e,t,L,B,r,X)}return;default:if(nc(t)){for(var Ve in n)B=n[Ve],n.hasOwnProperty(Ve)&&B!==void 0&&!r.hasOwnProperty(Ve)&&qu(e,t,Ve,void 0,r,B);for(q in r)B=r[q],X=n[q],!r.hasOwnProperty(q)||B===X||B===void 0&&X===void 0||qu(e,t,q,B,r,X);return}}for(var R in n)B=n[R],n.hasOwnProperty(R)&&B!=null&&!r.hasOwnProperty(R)&&qe(e,t,R,null,r,B);for(G in r)B=r[G],X=n[G],!r.hasOwnProperty(G)||B===X||B==null&&X==null||qe(e,t,G,B,r,X)}function cg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Sw(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var c=n[r],d=c.transferSize,v=c.initiatorType,w=c.duration;if(d&&w&&cg(v)){for(v=0,w=c.responseEnd,r+=1;r<n.length;r++){var z=n[r],L=z.startTime;if(L>w)break;var q=z.transferSize,G=z.initiatorType;q&&cg(G)&&(z=z.responseEnd,v+=q*(z<w?1:(w-L)/(z-L)))}if(--r,t+=8*(d+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Vu=null,Fu=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function ug(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gu=null;function Tw(){var e=window.event;return e&&e.type==="popstate"?e===Gu?!1:(Gu=e,!0):(Gu=null,!1)}var fg=typeof setTimeout=="function"?setTimeout:void 0,Cw=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,Ew=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(e){return hg.resolve(null).then(e).catch(zw)}:fg;function zw(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function pg(e,t){var n=t,r=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(r===0){e.removeChild(c),Ii(t);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Kr(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Kr(n);for(var d=n.firstChild;d;){var v=d.nextSibling,w=d.nodeName;d[mr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=v}}else n==="body"&&Kr(e.ownerDocument.body);n=c}while(n);Ii(t)}function mg(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=r}while(n)}function Iu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Iu(n),Js(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function kw(e,t,n,r){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[mr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function Nw(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function gg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=on(e.nextSibling),e===null))return null;return e}function Qu(e){return e.data==="$?"||e.data==="$~"}function Zu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Aw(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wu=null;function vg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return on(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function yg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function bg(e,t,n){switch(t=Hl(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function Kr(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Js(e)}var ln=new Map,wg=new Set;function Ll(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gn=k.d;k.d={f:Mw,r:Ow,D:Dw,C:Rw,L:Uw,m:jw,X:Lw,S:Hw,M:Bw};function Mw(){var e=Gn.f(),t=Nl();return e||t}function Ow(e){var t=fi(e);t!==null&&t.tag===5&&t.type==="form"?Hp(t):Gn.r(e)}var Fi=typeof document>"u"?null:document;function xg(e,t,n){var r=Fi;if(r&&typeof t=="string"&&t){var c=Jt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),wg.has(c)||(wg.add(c),e={rel:e,crossOrigin:n,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),Ct(t,"link",e),vt(t),r.head.appendChild(t)))}}function Dw(e){Gn.D(e),xg("dns-prefetch",e,null)}function Rw(e,t){Gn.C(e,t),xg("preconnect",e,t)}function Uw(e,t,n){Gn.L(e,t,n);var r=Fi;if(r&&e&&t){var c='link[rel="preload"][as="'+Jt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Jt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Jt(n.imageSizes)+'"]')):c+='[href="'+Jt(e)+'"]';var d=c;switch(t){case"style":d=$i(e);break;case"script":d=Gi(e)}ln.has(d)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ln.set(d,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(Jr(d))||t==="script"&&r.querySelector(Pr(d))||(t=r.createElement("link"),Ct(t,"link",e),vt(t),r.head.appendChild(t)))}}function jw(e,t){Gn.m(e,t);var n=Fi;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Jt(r)+'"][href="'+Jt(e)+'"]',d=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Gi(e)}if(!ln.has(d)&&(e=y({rel:"modulepreload",href:e},t),ln.set(d,e),n.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Pr(d)))return}r=n.createElement("link"),Ct(r,"link",e),vt(r),n.head.appendChild(r)}}}function Hw(e,t,n){Gn.S(e,t,n);var r=Fi;if(r&&e){var c=hi(r).hoistableStyles,d=$i(e);t=t||"default";var v=c.get(d);if(!v){var w={loading:0,preload:null};if(v=r.querySelector(Jr(d)))w.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ln.get(d))&&Ku(e,n);var z=v=r.createElement("link");vt(z),Ct(z,"link",e),z._p=new Promise(function(L,q){z.onload=L,z.onerror=q}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Bl(v,t,r)}v={type:"stylesheet",instance:v,count:1,state:w},c.set(d,v)}}}function Lw(e,t){Gn.X(e,t);var n=Fi;if(n&&e){var r=hi(n).hoistableScripts,c=Gi(e),d=r.get(c);d||(d=n.querySelector(Pr(c)),d||(e=y({src:e,async:!0},t),(t=ln.get(c))&&Ju(e,t),d=n.createElement("script"),vt(d),Ct(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(c,d))}}function Bw(e,t){Gn.M(e,t);var n=Fi;if(n&&e){var r=hi(n).hoistableScripts,c=Gi(e),d=r.get(c);d||(d=n.querySelector(Pr(c)),d||(e=y({src:e,async:!0,type:"module"},t),(t=ln.get(c))&&Ju(e,t),d=n.createElement("script"),vt(d),Ct(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},r.set(c,d))}}function _g(e,t,n,r){var c=(c=ae.current)?Ll(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=$i(n.href),n=hi(c).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=$i(n.href);var d=hi(c).hoistableStyles,v=d.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=c.querySelector(Jr(e)))&&!d._p&&(v.instance=d,v.state.loading=5),ln.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ln.set(e,n),d||Yw(c,e,n,v.state))),t&&r===null)throw Error(l(528,""));return v}if(t&&r!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Gi(n),n=hi(c).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function $i(e){return'href="'+Jt(e)+'"'}function Jr(e){return'link[rel="stylesheet"]['+e+"]"}function Sg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function Yw(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),Ct(t,"link",n),vt(t),e.head.appendChild(t))}function Gi(e){return'[src="'+Jt(e)+'"]'}function Pr(e){return"script[async]"+e}function Tg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Jt(n.href)+'"]');if(r)return t.instance=r,vt(r),r;var c=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),vt(r),Ct(r,"style",c),Bl(r,n.precedence,e),t.instance=r;case"stylesheet":c=$i(n.href);var d=e.querySelector(Jr(c));if(d)return t.state.loading|=4,t.instance=d,vt(d),d;r=Sg(n),(c=ln.get(c))&&Ku(r,c),d=(e.ownerDocument||e).createElement("link"),vt(d);var v=d;return v._p=new Promise(function(w,z){v.onload=w,v.onerror=z}),Ct(d,"link",r),t.state.loading|=4,Bl(d,n.precedence,e),t.instance=d;case"script":return d=Gi(n.src),(c=e.querySelector(Pr(d)))?(t.instance=c,vt(c),c):(r=n,(c=ln.get(d))&&(r=y({},n),Ju(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),vt(c),Ct(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Bl(r,n.precedence,e));return t.instance}function Bl(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,d=c,v=0;v<r.length;v++){var w=r[v];if(w.dataset.precedence===t)d=w;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ku(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ju(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yl=null;function Cg(e,t,n){if(Yl===null){var r=new Map,c=Yl=new Map;c.set(n,r)}else c=Yl,r=c.get(n),r||(r=new Map,c.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var d=n[c];if(!(d[mr]||d[xt]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(t)||"";v=e+v;var w=r.get(v);w?w.push(d):r.set(v,[d])}}return r}function Eg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Xw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qw(e,t,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=$i(r.href),d=t.querySelector(Jr(c));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Xl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,vt(d);return}d=t.ownerDocument||t,r=Sg(r),(c=ln.get(c))&&Ku(r,c),d=d.createElement("link"),vt(d);var v=d;v._p=new Promise(function(w,z){v.onload=w,v.onerror=z}),Ct(d,"link",r),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Xl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Pu=0;function Vw(e,t){return e.stylesheets&&e.count===0&&Vl(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&Pu===0&&(Pu=62500*Sw());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vl(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Pu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ql=null;function Vl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ql=new Map,t.forEach(Fw,e),ql=null,Xl.call(e))}function Fw(e,t){if(!(t.state.loading&4)){var n=ql.get(e);if(n)var r=n.get(null);else{n=new Map,ql.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var v=c[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),r=v)}r&&n.set(null,r)}c=t.instance,v=c.getAttribute("data-precedence"),d=n.get(v)||r,d===r&&n.set(null,c),n.set(v,c),this.count++,r=Xl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var eo={$$typeof:Y,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function $w(e,t,n,r,c,d,v,w,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.hiddenUpdates=Qs(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function kg(e,t,n,r,c,d,v,w,z,L,q,G){return e=new $w(e,t,n,v,z,L,q,G,w),t=1,d===!0&&(t|=24),d=Vt(3,null,null,t),e.current=d,d.stateNode=e,t=Oc(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:r,isDehydrated:n,cache:t},jc(d),e}function Ng(e){return e?(e=Si,e):Si}function Ag(e,t,n,r,c,d){c=Ng(c),r.context===null?r.context=c:r.pendingContext=c,r=la(t),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=sa(e,r,t),n!==null&&(Ht(n,e,t),Or(n,e,t))}function Mg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ed(e,t){Mg(e,t),(e=e.alternate)&&Mg(e,t)}function Og(e){if(e.tag===13||e.tag===31){var t=Ha(e,67108864);t!==null&&Ht(t,e,67108864),ed(e,67108864)}}function Dg(e){if(e.tag===13||e.tag===31){var t=Qt();t=Zs(t);var n=Ha(e,t);n!==null&&Ht(n,e,t),ed(e,t)}}var Fl=!0;function Gw(e,t,n,r){var c=_.T;_.T=null;var d=k.p;try{k.p=2,td(e,t,n,r)}finally{k.p=d,_.T=c}}function Iw(e,t,n,r){var c=_.T;_.T=null;var d=k.p;try{k.p=8,td(e,t,n,r)}finally{k.p=d,_.T=c}}function td(e,t,n,r){if(Fl){var c=nd(r);if(c===null)Xu(e,t,r,$l,n),Ug(e,r);else if(Zw(c,e,t,n,r))r.stopPropagation();else if(Ug(e,r),t&4&&-1<Qw.indexOf(e)){for(;c!==null;){var d=fi(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Oa(d.pendingLanes);if(v!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;v;){var z=1<<31-Xt(v);w.entanglements[1]|=z,v&=~z}Sn(d),(Re&6)===0&&(zl=Bt()+500,Qr(0))}}break;case 31:case 13:w=Ha(d,2),w!==null&&Ht(w,d,2),Nl(),ed(d,2)}if(d=nd(r),d===null&&Xu(e,t,r,$l,n),d===c)break;c=d}c!==null&&r.stopPropagation()}else Xu(e,t,r,null,n)}}function nd(e){return e=ic(e),ad(e)}var $l=null;function ad(e){if($l=null,e=di(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=h(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return $l=e,null}function Rg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dy()){case qf:return 2;case Vf:return 8;case Ro:case Ry:return 32;case Ff:return 268435456;default:return 32}default:return 32}}var id=!1,ba=null,wa=null,xa=null,to=new Map,no=new Map,_a=[],Qw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ug(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":xa=null;break;case"pointerover":case"pointerout":to.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(t.pointerId)}}function ao(e,t,n,r,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:d,targetContainers:[c]},t!==null&&(t=fi(t),t!==null&&Og(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function Zw(e,t,n,r,c){switch(t){case"focusin":return ba=ao(ba,e,t,n,r,c),!0;case"dragenter":return wa=ao(wa,e,t,n,r,c),!0;case"mouseover":return xa=ao(xa,e,t,n,r,c),!0;case"pointerover":var d=c.pointerId;return to.set(d,ao(to.get(d)||null,e,t,n,r,c)),!0;case"gotpointercapture":return d=c.pointerId,no.set(d,ao(no.get(d)||null,e,t,n,r,c)),!0}return!1}function jg(e){var t=di(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=h(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Dg(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,Wf(e.priority,function(){Dg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Gl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=nd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ac=r,n.target.dispatchEvent(r),ac=null}else return t=fi(n),t!==null&&Og(t),e.blockedOn=n,!1;t.shift()}return!0}function Hg(e,t,n){Gl(e)&&n.delete(t)}function Ww(){id=!1,ba!==null&&Gl(ba)&&(ba=null),wa!==null&&Gl(wa)&&(wa=null),xa!==null&&Gl(xa)&&(xa=null),to.forEach(Hg),no.forEach(Hg)}function Il(e,t){e.blockedOn===t&&(e.blockedOn=null,id||(id=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Ww)))}var Ql=null;function Lg(e){Ql!==e&&(Ql=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(ad(r||n)===null)continue;break}var d=fi(n);d!==null&&(e.splice(t,3),t-=3,nu(d,{pending:!0,data:c,method:n.method,action:r},r,c))}}))}function Ii(e){function t(z){return Il(z,e)}ba!==null&&Il(ba,e),wa!==null&&Il(wa,e),xa!==null&&Il(xa,e),to.forEach(t),no.forEach(t);for(var n=0;n<_a.length;n++){var r=_a[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<_a.length&&(n=_a[0],n.blockedOn===null);)jg(n),n.blockedOn===null&&_a.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var c=n[r],d=n[r+1],v=c[Mt]||null;if(typeof d=="function")v||Lg(n);else if(v){var w=null;if(d&&d.hasAttribute("formAction")){if(c=d,v=d[Mt]||null)w=v.formAction;else if(ad(c)!==null)continue}else w=v.action;typeof w=="function"?n[r+1]=w:(n.splice(r,3),r-=3),Lg(n)}}}function Bg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function rd(e){this._internalRoot=e}Zl.prototype.render=rd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,r=Qt();Ag(n,r,e,t,null,null)},Zl.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ag(e.current,2,null,e,null,null),Nl(),t[ui]=null}};function Zl(e){this._internalRoot=e}Zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_a.length&&t!==0&&t<_a[n].priority;n++);_a.splice(n,0,e),n===0&&jg(e)}};var Yg=i.version;if(Yg!=="19.2.7")throw Error(l(527,Yg,"19.2.7"));k.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(t),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Kw={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wl.isDisabled&&Wl.supportsFiber)try{fr=Wl.inject(Kw),Yt=Wl}catch{}}return co.createRoot=function(e,t){if(!s(e))throw Error(l(299));var n=!1,r="",c=Ip,d=Qp,v=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=kg(e,1,!1,null,null,n,r,null,c,d,v,Bg),e[ui]=t.current,Yu(e),new rd(t)},co.hydrateRoot=function(e,t,n){if(!s(e))throw Error(l(299));var r=!1,c="",d=Ip,v=Qp,w=Zp,z=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(w=n.onRecoverableError),n.formState!==void 0&&(z=n.formState)),t=kg(e,1,!0,t,n??null,r,c,z,d,v,w,Bg),t.context=Ng(null),n=t.current,r=Qt(),r=Zs(r),c=la(r),c.callback=null,sa(n,c,r),n=r,t.current.lanes=n,pr(t,n),Sn(t),e[ui]=t.current,Yu(e),new Zl(t)},co.version="19.2.7",co}var i0;function pT(){if(i0)return Ad.exports;i0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),Ad.exports=hT(),Ad.exports}var mT=pT();const gT="modulepreload",vT=function(a){return"/maksimdolgonosov-REACT2026Q2/"+a},r0={},yT=function(i,o,l){let s=Promise.resolve();if(o&&o.length>0){let m=function(g){return Promise.all(g.map(b=>Promise.resolve(b).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),p=h?.nonce||h?.getAttribute("nonce");s=m(o.map(g=>{if(g=vT(g),g in r0)return;r0[g]=!0;const b=g.endsWith(".css"),y=b?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${y}`))return;const x=document.createElement("link");if(x.rel=b?"stylesheet":gT,b||(x.as="script"),x.crossOrigin="",x.href=g,p&&x.setAttribute("nonce",p),document.head.appendChild(x),b)return new Promise((S,T)=>{x.addEventListener("load",S),x.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${g}`)))})}))}function u(h){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=h,window.dispatchEvent(p),!p.defaultPrevented)throw h}return s.then(h=>{for(const p of h||[])p.status==="rejected"&&u(p.reason);return i().catch(u)})},bT=()=>{const[a,i]=je.useState(null),[o,l]=je.useState(!0),[s,u]=je.useState(null);return je.useEffect(()=>{(async()=>{l(!0);try{const p=await fetch("/maksimdolgonosov-REACT2026Q2/data/owid-co2-data.json");if(!p.ok)throw new Error("Failed to fetch CO2 data");const m=await p.json(),g=Object.entries(m).map(([b,y])=>{const x=y;return{id:b,iso_code:x.iso_code,data:x.data}});i(g),u(null)}catch(p){console.error(p),u(p instanceof Error?p.message:"Unknown error"),i(null)}finally{l(!1)}})()},[]),{data:a,isLoading:o,error:s}},wT="_container_1m5gd_1",xT={container:wT},_T=()=>fe.jsx("div",{className:xT.container,children:fe.jsx("div",{className:"spinner",children:"Loading CO2 data..."})}),ST="_container_16mu1_1",TT="_label_16mu1_5",CT="_input_16mu1_9",Rd={container:ST,label:TT,input:CT},ET=je.memo(({value:a,onChange:i})=>fe.jsxs("div",{className:Rd.container,children:[fe.jsx("label",{htmlFor:"search",className:Rd.label,children:"Search countries:"}),fe.jsx("input",{id:"search",type:"text",value:a,onChange:o=>i(o.target.value),placeholder:"Type to search...",className:Rd.input})]})),zT="_container_8lebf_1",kT="_label_8lebf_5",NT="_select_8lebf_9",Ud={container:zT,label:kT,select:NT},AT=je.memo(({year:a,years:i,onChange:o})=>fe.jsxs("div",{className:Ud.container,children:[fe.jsx("label",{htmlFor:"year",className:Ud.label,children:"Select year:"}),fe.jsx("select",{id:"year",value:a,onChange:l=>o(Number(l.target.value)),className:Ud.select,children:i.map(l=>fe.jsx("option",{value:l,children:l},l))})]}));var MT=Ey();function OT(a,i,o){const l=new Array(a);return new Proxy(l,{get(s,u,h){if(typeof u=="string"){const p=u.charCodeAt(0);if(p>=48&&p<=57){const m=+u;if(Number.isInteger(m)&&m>=0&&m<a){let g=s[m];if(!g){const b=i[m*2];g=s[m]={index:m,key:o(m),start:b,size:i[m*2+1],end:b+i[m*2+1],lane:0}}return g}}if(u==="length")return a}return Reflect.get(s,u,h)}})}function Pi(a,i,o){let l=o.initialDeps??[],s,u=!0;function h(){const p=a();return(p.length!==l.length||p.some((g,b)=>l[b]!==g))&&(l=p,s=i(...p),o?.onChange&&!(u&&o.skipInitialOnChange)&&o.onChange(s),u=!1),s}return h.updateDeps=p=>{l=p},h}function o0(a,i){if(a===void 0)throw new Error("Unexpected undefined");return a}const DT=(a,i)=>Math.abs(a-i)<1.01,RT=(a,i,o)=>{let l;return function(...s){a.clearTimeout(l),l=a.setTimeout(()=>i.apply(this,s),o)}};let uo;const jd=()=>{if(uo!==void 0)return uo;if(typeof navigator>"u")return uo=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return uo=!0;const a=navigator.maxTouchPoints;return uo=navigator.platform==="MacIntel"&&a!==void 0&&a>0},l0=a=>{const{offsetWidth:i,offsetHeight:o}=a;return{width:i,height:o}},UT=a=>a,jT=a=>{const i=Math.max(a.startIndex-a.overscan,0),l=Math.min(a.endIndex+a.overscan,a.count-1)-i+1,s=new Array(l);for(let u=0;u<l;u++)s[u]=i+u;return s},HT=(a,i)=>{const o=a.scrollElement;if(!o)return;const l=a.targetWindow;if(!l)return;const s=h=>{const{width:p,height:m}=h;i({width:Math.round(p),height:Math.round(m)})};if(s(l0(o)),!l.ResizeObserver)return()=>{};const u=new l.ResizeObserver(h=>{const p=()=>{const m=h[0];if(m?.borderBoxSize){const g=m.borderBoxSize[0];if(g){s({width:g.inlineSize,height:g.blockSize});return}}s(l0(o))};a.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(p):p()});return u.observe(o,{box:"border-box"}),()=>{u.unobserve(o)}},Ds={passive:!0},LT=typeof window>"u"?!0:"onscrollend"in window,BT=(a,i,o)=>{const l=a.scrollElement;if(!l)return;const s=a.targetWindow;if(!s)return;const u=a.options.useScrollendEvent&&LT;let h=0;const p=u?null:RT(s,()=>i(h,!1),a.options.isScrollingResetDelay),m=y=>()=>{h=o(l),p?.(),i(h,y)},g=m(!0),b=m(!1);return l.addEventListener("scroll",g,Ds),u&&l.addEventListener("scrollend",b,Ds),()=>{l.removeEventListener("scroll",g),u&&l.removeEventListener("scrollend",b)}},YT=(a,i)=>BT(a,i,o=>{const{horizontal:l,isRtl:s}=a.options;return l?o.scrollLeft*(s&&-1||1):o.scrollTop}),XT=(a,i,o)=>{if(o.options.useCachedMeasurements){const l=o.indexFromElement(a),s=o.options.getItemKey(l);return o.itemSizeCache.get(s)??o.options.estimateSize(l)}if(i?.borderBoxSize){const l=i.borderBoxSize[0];if(l)return Math.round(l[o.options.horizontal?"inlineSize":"blockSize"])}if(!i){const l=o.indexFromElement(a),s=o.options.getItemKey(l),u=o.itemSizeCache.get(s);if(u!==void 0)return u}return a[o.options.horizontal?"offsetWidth":"offsetHeight"]},qT=(a,{adjustments:i=0,behavior:o},l)=>{var s,u;(u=(s=l.scrollElement)==null?void 0:s.scrollTo)==null||u.call(s,{[l.options.horizontal?"left":"top"]:a+i,behavior:o})},VT=qT;class FT{constructor(i){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var o,l,s;return((s=(l=(o=this.targetWindow)==null?void 0:o.performance)==null?void 0:l.now)==null?void 0:s.call(l))??Date.now()},this.observer=(()=>{let o=null;const l=()=>o||(!this.targetWindow||!this.targetWindow.ResizeObserver?null:o=new this.targetWindow.ResizeObserver(s=>{s.forEach(u=>{const h=()=>{const p=u.target,m=this.indexFromElement(p);if(!p.isConnected){this.observer.unobserve(p);for(const[g,b]of this.elementsCache)if(b===p){this.elementsCache.delete(g);break}return}this.shouldMeasureDuringScroll(m)&&this.resizeItem(m,this.options.measureElement(p,u,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(h):h()})}));return{disconnect:()=>{var s;(s=l())==null||s.disconnect(),o=null},observe:s=>{var u;return(u=l())==null?void 0:u.observe(s,{box:"border-box"})},unobserve:s=>{var u;return(u=l())==null?void 0:u.unobserve(s)}}})(),this.range=null,this.setOptions=o=>{var l,s;const u={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:UT,rangeExtractor:jT,onChange:()=>{},measureElement:XT,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(const x in o){const S=o[x];S!==void 0&&(u[x]=S)}const h=this.options;let p=null,m=null,g=!1;if(h!==void 0&&h.enabled&&u.enabled&&u.anchorTo==="end"&&this.scrollElement!==null){const x=h.count,S=u.count,T=this.getMeasurements(),N=x>0?((l=T[0])==null?void 0:l.key)??h.getItemKey(0):null,D=x>0?((s=T[x-1])==null?void 0:s.key)??h.getItemKey(x-1):null;if(S!==x||x>0&&S>0&&(u.getItemKey(0)!==N||u.getItemKey(S-1)!==D)){g=!0;const Y=x>0?this.getVirtualItemForOffset(this.getScrollOffset())??T[0]:null;Y&&(p=[Y.key,this.getScrollOffset()-Y.start]);const F=u.followOnAppend===!0?"auto":u.followOnAppend||null;F&&S>x&&this.isAtEnd(h.scrollEndThreshold)&&(x===0||u.getItemKey(S-1)!==D)&&(m=F)}}this.options=u,g&&(this.pendingMin=0,this.itemSizeCacheVersion++);let b=!1,y=0;if(p&&this.scrollOffset!==null){const[x,S]=p,T=this.getMeasurements(),{count:N,getItemKey:D}=this.options;let C=0;for(;C<N&&D(C)!==x;)C++;if(C<N){const A=T[C];if(A){const Y=A.start+S;Y!==this.scrollOffset&&(y=Y-this.scrollOffset,this.scrollOffset=Y,b=!0)}}}(b||m)&&(this.pendingScrollAnchor=[b?p[0]:null,b?p[1]:0,m,y])},this.notify=o=>{var l,s;(s=(l=this.options).onChange)==null||s.call(l,this,o)},this.maybeNotify=Pi(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),o=>{this.notify(o)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(o=>o()),this.unsubs=[],this.observer.disconnect(),this.rafId!=null&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var o;const l=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==l){if(this.cleanup(),!l){this.maybeNotify();return}if(this.scrollElement=l,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=((o=this.scrollElement)==null?void 0:o.window)??null,this.elementsCache.forEach(u=>{this.observer.observe(u)}),this.unsubs.push(this.options.observeElementRect(this,u=>{this.scrollRect=u,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(u,h)=>{this._intendedScrollOffset!==null&&Math.abs(u-this._intendedScrollOffset)<1.5&&(u=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0,this.scrollDirection=h?this.getScrollOffset()<u?"forward":"backward":null,this.scrollOffset=u,this.isScrolling=h,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){const u=this.scrollElement,h=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},p=()=>{this._iosTouching=!1,!(!jd()||this.targetWindow==null)&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};u.addEventListener("touchstart",h,Ds),u.addEventListener("touchend",p,Ds),this.unsubs.push(()=>{u.removeEventListener("touchstart",h),u.removeEventListener("touchend",p),this._iosTouchEndTimerId!==null&&this.targetWindow!=null&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}const s=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,s&&this.scrollElement&&this.options.enabled){const[u,h,p,m]=s;u!==null&&!p&&(jd()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?m!==0&&(this._iosDeferredAdjustment+=m):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),p&&this.scrollToEnd({behavior:p})}},this._flushIosDeferredIfReady=()=>{if(this._iosDeferredAdjustment===0||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;const o=this.getScrollOffset(),l=this.getMaxScrollOffset();if(o<0||o>l)return;const s=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(o,{adjustments:this.scrollAdjustments+=s,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??(typeof this.options.initialOffset=="function"?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(o,l)=>{const s=new Map,u=new Map;for(let h=l-1;h>=0;h--){const p=o[h];if(s.has(p.lane))continue;const m=u.get(p.lane);if(m==null||p.end>m.end?u.set(p.lane,p):p.end<m.end&&s.set(p.lane,!0),s.size===this.options.lanes)break}return u.size===this.options.lanes?Array.from(u.values()).sort((h,p)=>h.end===p.end?h.index-p.index:h.end-p.end)[0]:void 0},this.getMeasurementOptions=Pi(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(o,l,s,u,h,p,m)=>(this.prevLanes!==void 0&&this.prevLanes!==p&&(this.lanesChangedFlag=!0),this.prevLanes=p,this.pendingMin=null,{count:o,paddingStart:l,scrollMargin:s,getItemKey:u,enabled:h,lanes:p,laneAssignmentMode:m}),{key:!1}),this.getMeasurements=Pi(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:o,paddingStart:l,scrollMargin:s,getItemKey:u,enabled:h,lanes:p,laneAssignmentMode:m},g)=>{const b=this.itemSizeCache;if(!h)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>o)for(const T of this.laneAssignments.keys())T>=o&&this.laneAssignments.delete(T);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),this.measurementsCache.length===0&&!this.lanesSettling&&(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(T=>{this.itemSizeCache.set(T.key,T.size)}));const y=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===o&&(this.lanesSettling=!1),p===1){const T=this.options.gap,N=o*2;let D=this._flatMeasurements;if(!D||D.length<N){const Y=new Float64Array(N);D&&y>0&&Y.set(D.subarray(0,y*2)),D=Y,this._flatMeasurements=D}let C;if(y===0)C=l+s;else{const Y=y-1;C=D[Y*2]+D[Y*2+1]+T}for(let Y=y;Y<o;Y++){const F=u(Y),Q=b.get(F),J=typeof Q=="number"?Q:this.options.estimateSize(Y);D[Y*2]=C,D[Y*2+1]=J,C+=J+T}const A=OT(o,D,u);return this.measurementsCache=A,A}const x=this.measurementsCache.slice(0,y),S=new Array(p).fill(void 0);for(let T=0;T<y;T++){const N=x[T];N&&(S[N.lane]=T)}for(let T=y;T<o;T++){const N=u(T),D=this.laneAssignments.get(T);let C,A;const Y=m==="estimate"||b.has(N);if(D!==void 0&&this.options.lanes>1){C=D;const K=S[C],de=K!==void 0?x[K]:void 0;A=de?de.end+this.options.gap:l+s}else{const K=this.options.lanes===1?x[T-1]:this.getFurthestMeasurement(x,T);A=K?K.end+this.options.gap:l+s,C=K?K.lane:T%this.options.lanes,this.options.lanes>1&&Y&&this.laneAssignments.set(T,C)}const F=b.get(N),Q=typeof F=="number"?F:this.options.estimateSize(T),J=A+Q;x[T]={index:T,start:A,size:Q,end:J,key:N,lane:C},S[C]=T}return this.measurementsCache=x,x},{key:!1,debug:()=>this.options.debug}),this.calculateRange=Pi(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(o,l,s,u)=>this.range=o.length>0&&l>0?$T({measurements:o,outerSize:l,scrollOffset:s,lanes:u,flat:u===1&&this._flatMeasurements!=null?this._flatMeasurements:null}):null,{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=Pi(()=>{let o=null,l=null;const s=this.calculateRange();return s&&(o=s.startIndex,l=s.endIndex),this.maybeNotify.updateDeps([this.isScrolling,o,l]),[this.options.rangeExtractor,this.options.overscan,this.options.count,o,l]},(o,l,s,u,h)=>u===null||h===null?[]:o({startIndex:u,endIndex:h,overscan:l,count:s}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=o=>{const l=this.options.indexAttribute,s=o.getAttribute(l);return s?parseInt(s,10):(console.warn(`Missing attribute name '${l}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=o=>{var l;if(!this.scrollState||this.scrollState.behavior!=="smooth")return!0;const s=this.scrollState.index??((l=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))==null?void 0:l.index);if(s!==void 0&&this.range){const u=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),h=Math.max(0,s-u),p=Math.min(this.options.count-1,s+u);return o>=h&&o<=p}return!0},this.measureElement=o=>{if(!o){this.elementsCache.forEach((h,p)=>{h.isConnected||(this.observer.unobserve(h),this.elementsCache.delete(p))});return}const l=this.indexFromElement(o),s=this.options.getItemKey(l),u=this.elementsCache.get(s);u!==o&&(u&&this.observer.unobserve(u),this.observer.observe(o),this.elementsCache.set(s,o)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(l)&&this.resizeItem(l,this.options.measureElement(o,void 0,this))},this.resizeItem=(o,l)=>{var s,u;if(o<0||o>=this.options.count)return;let h,p,m;const g=this._flatMeasurements;if(this.options.lanes===1&&g!==null)m=this.options.getItemKey(o),p=g[o*2],h=g[o*2+1];else{const x=this.measurementsCache[o];if(!x)return;m=x.key,p=x.start,h=x.size}const b=this.itemSizeCache.get(m)??h,y=l-b;if(y!==0){const x=this.options.anchorTo==="end"&&((s=this.scrollState)==null?void 0:s.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,S=x?this.getTotalSize():0,T=((u=this.scrollState)==null?void 0:u.behavior)!=="smooth"&&(this.shouldAdjustScrollPositionOnItemSizeChange!==void 0?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[o]??{index:o,key:m,start:p,size:h,end:p+h,lane:0},y,this):p<this.getScrollOffset()+this.scrollAdjustments&&this.scrollDirection!=="backward");(this.pendingMin===null||o<this.pendingMin)&&(this.pendingMin=o),this.itemSizeCache.set(m,l),this.itemSizeCacheVersion++,x?this.applyScrollAdjustment(this.getTotalSize()-S):T&&this.applyScrollAdjustment(y),this.notify(!1)}},this.getVirtualItems=Pi(()=>[this.getVirtualIndexes(),this.getMeasurements()],(o,l)=>{const s=[];for(let u=0,h=o.length;u<h;u++){const p=o[u],m=l[p];s.push(m)}return s},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=o=>{const l=this.getMeasurements();if(l.length===0)return;const s=this._flatMeasurements,u=this.options.lanes===1&&s!=null,h=zy(0,l.length-1,u?p=>s[p*2]:p=>o0(l[p]).start,o);return o0(l[h])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{const o=this.scrollElement.document.documentElement;return this.options.horizontal?o.scrollWidth-this.scrollElement.innerWidth:o.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(o=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=o,this.getOffsetForAlignment=(o,l,s=0)=>{if(!this.scrollElement)return 0;const u=this.getSize(),h=this.getScrollOffset();l==="auto"&&(l=o>=h+u?"end":"start"),l==="center"?o+=(s-u)/2:l==="end"&&(o-=u);const p=this.getMaxScrollOffset();return Math.max(Math.min(p,o),0)},this.getOffsetForIndex=(o,l="auto")=>{o=Math.max(0,Math.min(o,this.options.count-1));const s=this.getSize(),u=this.getScrollOffset(),h=this.measurementsCache[o];if(!h)return;if(l==="auto")if(h.end>=u+s-this.options.scrollPaddingEnd)l="end";else if(h.start<=u+this.options.scrollPaddingStart)l="start";else return[u,l];if(l==="end"&&o===this.options.count-1)return[this.getMaxScrollOffset(),l];const p=l==="end"?h.end+this.options.scrollPaddingEnd:h.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(p,l,h.size),l]},this.scrollToOffset=(o,{align:l="start",behavior:s="auto"}={})=>{const u=this.getOffsetForAlignment(o,l),h=this.now();this.scrollState={index:null,align:l,behavior:s,startedAt:h,lastTargetOffset:u,stableFrames:0},this._scrollToOffset(u,{adjustments:void 0,behavior:s}),this.scheduleScrollReconcile()},this.scrollToIndex=(o,{align:l="auto",behavior:s="auto"}={})=>{o=Math.max(0,Math.min(o,this.options.count-1));const u=this.getOffsetForIndex(o,l);if(!u)return;const[h,p]=u,m=this.now();this.scrollState={index:o,align:p,behavior:s,startedAt:m,lastTargetOffset:h,stableFrames:0},this._scrollToOffset(h,{adjustments:void 0,behavior:s}),this.scheduleScrollReconcile()},this.scrollBy=(o,{behavior:l="auto"}={})=>{const s=this.getScrollOffset()+o,u=this.now();this.scrollState={index:null,align:"start",behavior:l,startedAt:u,lastTargetOffset:s,stableFrames:0},this._scrollToOffset(s,{adjustments:void 0,behavior:l}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:o="auto"}={})=>{if(this.options.count>0){this.scrollToIndex(this.options.count-1,{align:"end",behavior:o});return}this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:o})},this.getTotalSize=()=>{var o;const l=this.getMeasurements();let s;if(l.length===0)s=this.options.paddingStart;else if(this.options.lanes===1){const u=l.length-1,h=this._flatMeasurements;h!=null?s=h[u*2]+h[u*2+1]:s=((o=l[u])==null?void 0:o.end)??0}else{const u=Array(this.options.lanes).fill(null);let h=l.length-1;for(;h>=0&&u.some(p=>p===null);){const p=l[h];u[p.lane]===null&&(u[p.lane]=p.end),h--}s=Math.max(...u.filter(p=>p!==null))}return Math.max(s-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{const o=[];if(this.itemSizeCache.size===0)return o;const l=this.getMeasurements();for(const s of l)s&&this.itemSizeCache.has(s.key)&&o.push({index:s.index,key:s.key,start:s.start,size:s.size,end:s.end,lane:s.lane});return o},this._scrollToOffset=(o,{adjustments:l,behavior:s})=>{this._intendedScrollOffset=o+(l??0),this.options.scrollToFn(o,{behavior:s,adjustments:l},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(i)}applyScrollAdjustment(i,o){i!==0&&(jd()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=i:this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=i,behavior:o}))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}this.rafId==null&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}const l=this.scrollState.index!=null?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,s=l?l[0]:this.scrollState.lastTargetOffset,u=1,h=s!==this.scrollState.lastTargetOffset;if(!h&&DT(s,this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=u){this.getScrollOffset()!==s&&this._scrollToOffset(s,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,h){const p=this.getSize()||600,m=Math.abs(s-this.getScrollOffset()),g=this.scrollState.behavior==="smooth"&&m>p;this.scrollState.lastTargetOffset=s,g||(this.scrollState.behavior="auto"),this._scrollToOffset(s,{adjustments:void 0,behavior:g?"smooth":"auto"})}this.scheduleScrollReconcile()}}const zy=(a,i,o,l)=>{for(;a<=i;){const s=(a+i)/2|0,u=o(s);if(u<l)a=s+1;else if(u>l)i=s-1;else return s}return a>0?a-1:0};function $T({measurements:a,outerSize:i,scrollOffset:o,lanes:l,flat:s}){const u=a.length-1,h=s?b=>s[b*2]:b=>a[b].start,p=s?b=>s[b*2]+s[b*2+1]:b=>a[b].end;if(a.length<=l)return{startIndex:0,endIndex:u};let m=zy(0,u,h,o),g=m;if(l===1)for(;g<u&&p(g)<o+i;)g++;else if(l>1){const b=Array(l).fill(0);for(;g<u&&b.some(x=>x<o+i);){const x=a[g];b[x.lane]=x.end,g++}const y=Array(l).fill(o+i);for(;m>=0&&y.some(x=>x>=o);){const x=a[m];y[x.lane]=x.start,m--}m=Math.max(0,m-m%l),g=Math.min(u,g+(l-1-g%l))}return{startIndex:m,endIndex:g}}const Hd=typeof document<"u"?je.useLayoutEffect:je.useEffect;function GT({useFlushSync:a=!0,directDomUpdates:i=!1,directDomUpdatesMode:o="transform",...l}){const s=je.useReducer(g=>g+1,0)[1],u=je.useRef({enabled:i,mode:o,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});u.current.enabled=i,u.current.mode=o;const h=g=>{const b=u.current;if(!b.enabled)return;const y=g.getTotalSize();if(b.container&&y!==b.lastSize){b.lastSize=y;const C=g.options.horizontal?"width":"height";b.container.style[C]=`${y}px`}const x=!!g.options.horizontal,S=b.mode==="transform",T=x?"left":"top",N=g.options.scrollMargin,D=g.getVirtualItems();for(const C of D){const A=C.start-N,Y=g.elementsCache.get(C.key);Y&&b.lastPositions.get(Y)!==A&&(b.lastPositions.set(Y,A),S?Y.style.transform=x?`translate3d(${A}px, 0, 0)`:`translate3d(0, ${A}px, 0)`:Y.style[T]=`${A}px`)}},p={...l,onChange:(g,b)=>{var y;const x=u.current;let S=!0;if(x.enabled){h(g);const T=g.range,N=x.prevRange;S=!N||N.isScrolling!==g.isScrolling||N.startIndex!==T?.startIndex||N.endIndex!==T?.endIndex,S&&(x.prevRange=T?{startIndex:T.startIndex,endIndex:T.endIndex,isScrolling:g.isScrolling}:null)}S&&(a&&b?MT.flushSync(s):s()),(y=l.onChange)==null||y.call(l,g,b)}},[m]=je.useState(()=>{const g=new FT(p);return Object.assign(g,{containerRef:b=>{const y=u.current;if(y.container=b,y.lastSize=null,b&&y.enabled){const x=g.getTotalSize();y.lastSize=x;const S=g.options.horizontal?"width":"height";b.style[S]=`${x}px`}}})});return m.setOptions(p),Hd(()=>m._didMount(),[]),Hd(()=>m._willUpdate()),Hd(()=>{h(m)}),m}function IT(a){return GT({observeElementRect:HT,observeElementOffset:YT,scrollToFn:VT,...a})}const df=(a,i)=>a==null?"N/A":a.toLocaleString("en-US",i??{maximumFractionDigits:0}),QT="_table_117q5_1",ZT="_row_117q5_7",WT="_labelCell_117q5_11",KT="_valueCell_117q5_17",JT="_noData_117q5_21",fo={table:QT,row:ZT,labelCell:WT,valueCell:KT,noData:JT},PT=je.memo(({data:a,year:i,columns:o})=>{const l=je.useMemo(()=>a.find(s=>s.year===i),[a,i]);return l?fe.jsx("table",{className:fo.table,children:fe.jsx("tbody",{children:o.map(s=>fe.jsxs("tr",{className:fo.row,children:[fe.jsx("td",{className:fo.labelCell,children:s.replace(/_/g," ").toUpperCase()}),fe.jsx("td",{className:fo.valueCell,children:df(l[s],{maximumFractionDigits:2})})]},s))})}):fe.jsxs("div",{className:fo.noData,children:["No data available for year ",i]})}),e4=()=>["year","population","co2","co2_per_capita","cement_co2","cement_co2_per_capita","coal_co2","coal_co2_per_capita","gas_co2","gas_co2_per_capita","oil_co2","oil_co2_per_capita","methane","methane_per_capita","nitrous_oxide","nitrous_oxide_per_capita","temperature_change_from_co2","total_ghg","total_ghg_per_capita"],ky=a=>{const i=new Map;return a.forEach(o=>{i.set(o.year,o)}),i},Ny=(a,i)=>a.get(i)?.population,t4=(a,i)=>a.get(i)?.co2,n4=a=>{const i=new Set;return a.forEach(o=>{o.data.forEach(l=>{i.add(l.year)})}),Array.from(i).sort((o,l)=>o-l)},a4="_card_1tyqe_1",i4="_header_1tyqe_8",r4="_title_1tyqe_15",o4="_isoCode_1tyqe_19",l4="_stats_1tyqe_26",ho={card:a4,header:i4,title:r4,isoCode:o4,stats:l4},s4=je.memo(({country:a,selectedYear:i,selectedColumns:o})=>{const{population:l,co2:s}=je.useMemo(()=>{const u=ky(a.data);return{population:Ny(u,i),co2:t4(u,i)}},[a.data,i]);return fe.jsxs("div",{className:ho.card,children:[fe.jsxs("div",{className:ho.header,children:[fe.jsx("h3",{className:ho.title,children:a.id}),a.iso_code&&fe.jsx("span",{className:ho.isoCode,children:a.iso_code})]}),fe.jsxs("div",{className:ho.stats,children:[fe.jsxs("div",{children:["Population (",i,"): ",df(l)]}),fe.jsxs("div",{children:["CO₂ Emissions (",i,"): ",df(s)," tonnes"]})]}),fe.jsx(PT,{data:a.data,year:i,columns:o})]})}),c4="_scrollContainer_162az_1",u4="_virtualList_162az_8",d4="_virtualItem_162az_13",Ld={scrollContainer:c4,virtualList:u4,virtualItem:d4},f4=280,h4=16,p4=je.memo(({countries:a,searchQuery:i,selectedColumns:o,selectedRegion:l,selectedYear:s,sortField:u,sortOrder:h})=>{const p=je.useRef(null),m=je.useMemo(()=>{const b=i.toLowerCase(),y=a.filter(S=>{const T=S.id.toLowerCase().includes(b),N=!l||S.data.some(D=>D.region===l);return T&&N});if(u==="name")return[...y].sort((S,T)=>h==="asc"?S.id.localeCompare(T.id):T.id.localeCompare(S.id));const x=y.map(S=>({country:S,population:Ny(ky(S.data),s)||0}));return x.sort((S,T)=>h==="asc"?S.population-T.population:T.population-S.population),x.map(({country:S})=>S)},[a,i,l,s,u,h]),g=IT({count:m.length,getScrollElement:()=>p.current,estimateSize:()=>f4,gap:h4,overscan:5});return fe.jsx("div",{ref:p,className:Ld.scrollContainer,children:fe.jsx("div",{className:Ld.virtualList,style:{height:`${g.getTotalSize()}px`},children:g.getVirtualItems().map(b=>{const y=m[b.index];return fe.jsx("div",{"data-index":b.index,ref:g.measureElement,className:Ld.virtualItem,style:{transform:`translateY(${b.start}px)`},children:fe.jsx(s4,{country:y,selectedYear:s,selectedColumns:o})},y.id)})})})}),m4="_container_kqzw8_1",g4="_title_kqzw8_7",v4="_controls_kqzw8_12",y4="_sortContainer_kqzw8_19",b4="_sortLabel_kqzw8_23",w4="_sortSelect_kqzw8_27",x4="_sortButton_kqzw8_33",_4="_columnButtonContainer_kqzw8_39",S4="_columnButton_kqzw8_39",T4="_errorMessage_kqzw8_49",C4="_noDataMessage_kqzw8_54",pn={container:m4,title:g4,controls:v4,sortContainer:y4,sortLabel:b4,sortSelect:w4,sortButton:x4,columnButtonContainer:_4,columnButton:S4,errorMessage:T4,noDataMessage:C4},E4=je.lazy(()=>yT(()=>import("./column-modal-D5dkiWKW.js"),__vite__mapDeps([0,1])).then(a=>({default:a.ColumnModal}))),z4=()=>{const{data:a,isLoading:i,error:o}=bT(),[l,s]=je.useState({searchQuery:"",selectedRegion:"",selectedYear:2020,sortField:"population",sortOrder:"desc",selectedColumns:["year","population","co2","co2_per_capita"],isColumnModalOpen:!1}),u=je.useMemo(()=>a?n4(a):[],[a]),h=je.useMemo(()=>e4(),[]),p=je.useCallback(S=>{s(T=>({...T,searchQuery:S}))},[]),m=je.useCallback(S=>{s(T=>({...T,selectedYear:S}))},[]),g=je.useCallback(S=>{s(T=>({...T,sortField:S}))},[]),b=je.useCallback(()=>{s(S=>({...S,sortOrder:S.sortOrder==="asc"?"desc":"asc"}))},[]),y=je.useCallback(S=>{s(T=>({...T,selectedColumns:T.selectedColumns.includes(S)?T.selectedColumns.filter(N=>N!==S):[...T.selectedColumns,S]}))},[]),x=je.useCallback(()=>{s(S=>({...S,isColumnModalOpen:!S.isColumnModalOpen}))},[]);return i?fe.jsx(_T,{}):o?fe.jsxs("div",{className:pn.errorMessage,children:["Error: ",o]}):a?fe.jsxs("div",{className:pn.container,children:[fe.jsx("h1",{className:pn.title,children:"CO₂ Emissions Data Explorer"}),fe.jsxs("div",{className:pn.controls,children:[fe.jsx(ET,{value:l.searchQuery,onChange:p}),fe.jsx(AT,{year:l.selectedYear,years:u,onChange:m}),fe.jsxs("div",{className:pn.sortContainer,children:[fe.jsx("label",{className:pn.sortLabel,children:"Sort by:"}),fe.jsxs("select",{value:l.sortField,onChange:S=>g(S.target.value),className:pn.sortSelect,children:[fe.jsx("option",{value:"population",children:"Population"}),fe.jsx("option",{value:"name",children:"Name"})]}),fe.jsx("button",{onClick:b,className:pn.sortButton,children:l.sortOrder==="asc"?"Ascending":"Descending"})]}),fe.jsx("div",{className:pn.columnButtonContainer,children:fe.jsxs("button",{onClick:x,className:pn.columnButton,children:["Select columns (",l.selectedColumns.length," selected)"]})})]}),fe.jsx(p4,{countries:a,searchQuery:l.searchQuery,selectedColumns:l.selectedColumns,selectedRegion:l.selectedRegion,selectedYear:l.selectedYear,sortField:l.sortField,sortOrder:l.sortOrder}),l.isColumnModalOpen&&fe.jsx(je.Suspense,{fallback:null,children:fe.jsx(E4,{isOpen:l.isColumnModalOpen,availableColumns:h,selectedColumns:l.selectedColumns,onToggle:y,onClose:x})})]}):fe.jsx("div",{className:pn.noDataMessage,children:"No data available"})};sT({enabled:!0});mT.createRoot(document.getElementById("root")).render(fe.jsx(je.StrictMode,{children:fe.jsx(z4,{})}));export{fe as j,je as r};
