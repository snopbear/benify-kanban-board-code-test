import{$ as A,Ca as fe,Kb as N,M as se,Qb as F,U as ce,V as ue,Wa as _,_ as ae,a as h,b as g,ba as R,ea as c,g as T,ga as f,ha as d,ia as C,j as ne,ja as D,k as I,l as re,o as oe,oa as M,sa as de,u as ie,wa as le,za as U}from"./chunk-OT5OFN47.js";function P(e,t){let r=!t?.manualCleanup;r&&!t?.injector&&de(P);let n=r?t?.injector?.get(U)??d(U):null,o=qe(t?.equal),i;t?.requireSync?i=_({kind:0},{equal:o}):i=_({kind:1,value:t?.initialValue},{equal:o});let s=e.subscribe({next:u=>i.set({kind:1,value:u}),error:u=>{if(t?.rejectErrors)throw u;i.set({kind:2,error:u})}});if(t?.requireSync&&i().kind===0)throw new A(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),F(()=>{let u=i();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new A(601,!1)}},{equal:t?.equal})}function qe(e=Object.is){return(t,r)=>t.kind===1&&r.kind===1&&e(t.value,r.value)}var q={};function m(e,t){if(q[e]=(q[e]||0)+1,typeof t=="function")return z(e,(...n)=>g(h({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return z(e,()=>({type:e}));case"props":return z(e,n=>g(h({},n),{type:e}));default:throw new Error("Unexpected config.")}}function S(){return{_as:"props",_p:void 0}}function z(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var Oe="@ngrx/store/init",v=(()=>{let t=class t extends I{constructor(){super({type:Oe})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),Le=[v],ke=new c("@ngrx/store Internal Root Guard"),pe=new c("@ngrx/store Internal Initial State"),Z=new c("@ngrx/store Initial State"),Ae=new c("@ngrx/store Reducer Factory"),ye=new c("@ngrx/store Internal Reducer Factory Provider"),Ce=new c("@ngrx/store Initial Reducers"),V=new c("@ngrx/store Internal Initial Reducers"),he=new c("@ngrx/store Store Features"),Re=new c("@ngrx/store Internal Store Reducers"),$=new c("@ngrx/store Internal Feature Reducers"),me=new c("@ngrx/store Internal Feature Configs"),De=new c("@ngrx/store Internal Store Features"),ve=new c("@ngrx/store Internal Feature Reducers Token"),Me=new c("@ngrx/store Feature Reducers"),ge=new c("@ngrx/store User Provided Meta Reducers"),j=new c("@ngrx/store Meta Reducers"),Ee=new c("@ngrx/store Internal Resolved Meta Reducers"),be=new c("@ngrx/store User Runtime Checks Config"),Se=new c("@ngrx/store Internal User Runtime Checks Config"),E=new c("@ngrx/store Internal Runtime Checks"),H=new c("@ngrx/store Check if Action types are unique"),L=new c("@ngrx/store Root Store Provider"),Te=new c("@ngrx/store Feature State Provider");function Y(e,t={}){let r=Object.keys(e),n={};for(let i=0;i<r.length;i++){let s=r[i];typeof e[s]=="function"&&(n[s]=e[s])}let o=Object.keys(n);return function(s,u){s=s===void 0?t:s;let l=!1,p={};for(let a=0;a<o.length;a++){let y=o[a],k=n[y],ee=s[y],te=k(ee,u);p[y]=te,l=l||te!==ee}return l?p:s}}function Ke(e,t){return Object.keys(e).filter(r=>r!==t).reduce((r,n)=>Object.assign(r,{[n]:e[n]}),{})}function Ue(...e){return function(t){if(e.length===0)return t;let r=e[e.length-1];return e.slice(0,-1).reduceRight((o,i)=>i(o),r(t))}}function _e(e,t){return Array.isArray(t)&&t.length>0&&(e=Ue.apply(null,[...t,e])),(r,n)=>{let o=e(r);return(i,s)=>(i=i===void 0?n:i,o(i,s))}}function Be(e){let t=Array.isArray(e)&&e.length>0?Ue(...e):r=>r;return(r,n)=>(r=t(r),(o,i)=>(o=o===void 0?n:o,r(o,i)))}var b=class extends T{},w=class extends v{},Ge="@ngrx/store/update-reducers",x=(()=>{let t=class t extends I{get currentReducers(){return this.reducers}constructor(n,o,i,s){super(s(i,o)),this.dispatcher=n,this.initialState=o,this.reducers=i,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let o=n.reduce((i,{reducers:s,reducerFactory:u,metaReducers:l,initialState:p,key:a})=>{let y=typeof s=="function"?Be(l)(s,p):_e(u,l)(s,p);return i[a]=y,i},{});this.addReducers(o)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(o=>o.key))}addReducer(n,o){this.addReducers({[n]:o})}addReducers(n){this.reducers=h(h({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(o=>{this.reducers=Ke(this.reducers,o)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Ge,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(o){return new(o||t)(f(w),f(Z),f(Ce),f(Ae))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),Ze=[x,{provide:b,useExisting:x},{provide:w,useExisting:v}],Q=(()=>{let t=class t extends ne{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(i){return(n||(n=le(t)))(i||t)}})(),t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),He=[Q],O=class extends T{},Ie=(()=>{let t=class t extends I{constructor(n,o,i,s){super(s);let l=n.pipe(oe(re)).pipe(ae(o)),p={state:s},a=l.pipe(ue(Ye,p));this.stateSubscription=a.subscribe(({state:y,action:k})=>{this.next(y),i.next(k)}),this.state=P(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=Oe,t.\u0275fac=function(o){return new(o||t)(f(v),f(b),f(Q),f(Z))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})();function Ye(e={state:void 0},[t,r]){let{state:n}=e;return{state:r(n,t),action:t}}var Qe=[Ie,{provide:O,useExisting:Ie}],W=(()=>{let t=class t extends T{constructor(n,o,i){super(),this.actionsObserver=o,this.reducerManager=i,this.source=n,this.state=n.state}select(n,...o){return Je.call(null,n,...o)(this)}selectSignal(n,o){return F(()=>n(this.state()),o)}lift(n){let o=new t(this,this.actionsObserver,this.reducerManager);return o.operator=n,o}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,o){this.reducerManager.addReducer(n,o)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(o){return new(o||t)(f(O),f(v),f(x))},t.\u0275prov=R({token:t,factory:t.\u0275fac});let e=t;return e})(),We=[W];function Je(e,t,...r){return function(o){let i;if(typeof e=="string"){let s=[t,...r].filter(Boolean);i=o.pipe(ce(e,...s))}else if(typeof e=="function")i=o.pipe(ie(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return i.pipe(se())}}var J="https://ngrx.io/guide/store/configuration/runtime-checks";function Fe(e){return e===void 0}function je(e){return e===null}function Ne(e){return Array.isArray(e)}function Xe(e){return typeof e=="string"}function et(e){return typeof e=="boolean"}function tt(e){return typeof e=="number"}function Pe(e){return typeof e=="object"&&e!==null}function nt(e){return Pe(e)&&!Ne(e)}function rt(e){if(!nt(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function K(e){return typeof e=="function"}function ot(e){return K(e)&&e.hasOwnProperty("\u0275cmp")}function it(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var st=!1;function ct(){return st}function we(e,t){return e===t}function ut(e,t,r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!0;return!1}function ze(e,t=we,r=we){let n=null,o=null,i;function s(){n=null,o=null}function u(a=void 0){i={result:a}}function l(){i=void 0}function p(){if(i!==void 0)return i.result;if(!n)return o=e.apply(null,arguments),n=arguments,o;if(!ut(arguments,n,t))return o;let a=e.apply(null,arguments);return n=arguments,r(o,a)?o:(o=a,a)}return{memoized:p,reset:s,setResult:u,clearResult:l}}function at(...e){return lt(ze)(...e)}function dt(e,t,r,n){if(r===void 0){let i=t.map(s=>s(e));return n.memoized.apply(null,i)}let o=t.map(i=>i(e,r));return n.memoized.apply(null,[...o,r])}function lt(e,t={stateFn:dt}){return function(...r){let n=r;if(Array.isArray(n[0])){let[a,...y]=n;n=[...a,...y]}else n.length===1&&ft(n[0])&&(n=pt(n[0]));let o=n.slice(0,n.length-1),i=n[n.length-1],s=o.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return i.apply(null,a)}),l=ze(function(a,y){return t.stateFn.apply(null,[a,o,y,u])});function p(){l.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(l.memoized,{release:p,projector:u.memoized,setResult:l.setResult,clearResult:l.clearResult})}}function Jt(e){return at(t=>{let r=t[e];return!ct()&&N()&&!(e in t)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),r},t=>t)}function ft(e){return!!e&&typeof e=="object"&&Object.values(e).every(t=>typeof t=="function")}function pt(e){let t=Object.values(e),r=Object.keys(e),n=(...o)=>r.reduce((i,s,u)=>g(h({},i),{[s]:o[u]}),{});return[...t,n]}function yt(e){return e instanceof c?d(e):e}function ht(e,t){return t.map((r,n)=>{if(e[n]instanceof c){let o=d(e[n]);return{key:r.key,reducerFactory:o.reducerFactory?o.reducerFactory:Y,metaReducers:o.metaReducers?o.metaReducers:[],initialState:o.initialState}}return r})}function Rt(e){return e.map(t=>t instanceof c?d(t):t)}function Ve(e){return typeof e=="function"?e():e}function mt(e,t){return e.concat(t)}function vt(){if(d(W,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function gt(e,t){return function(r,n){let o=t.action(n)?B(n):n,i=e(r,o);return t.state()?B(i):i}}function B(e){Object.freeze(e);let t=K(e);return Object.getOwnPropertyNames(e).forEach(r=>{if(!r.startsWith("\u0275")&&it(e,r)&&(!t||r!=="caller"&&r!=="callee"&&r!=="arguments")){let n=e[r];(Pe(n)||K(n))&&!Object.isFrozen(n)&&B(n)}}),e}function Et(e,t){return function(r,n){if(t.action(n)){let i=G(n);xe(i,"action")}let o=e(r,n);if(t.state()){let i=G(o);xe(i,"state")}return o}}function G(e,t=[]){return(Fe(e)||je(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,o)=>{if(n)return n;let i=e[o];return ot(i)?n:Fe(i)||je(i)||tt(i)||et(i)||Xe(i)||Ne(i)?!1:rt(i)?G(i,[...t,o]):{path:[...t,o],value:i}},!1)}function xe(e,t){if(e===!1)return;let r=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${r}". ${J}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=r,n}function bt(e,t){return function(r,n){if(t.action(n)&&!fe.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${J}#strictactionwithinngzone`);return e(r,n)}}function St(e){return N()?h({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function Tt({strictActionSerializability:e,strictStateSerializability:t}){return r=>e||t?Et(r,{action:n=>e&&!X(n),state:()=>t}):r}function It({strictActionImmutability:e,strictStateImmutability:t}){return r=>e||t?gt(r,{action:n=>e&&!X(n),state:()=>t}):r}function X(e){return e.type.startsWith("@ngrx")}function Ft({strictActionWithinNgZone:e}){return t=>e?bt(t,{action:r=>e&&!X(r)}):t}function jt(e){return[{provide:Se,useValue:e},{provide:be,useFactory:wt,deps:[Se]},{provide:E,deps:[be],useFactory:St},{provide:j,multi:!0,deps:[E],useFactory:It},{provide:j,multi:!0,deps:[E],useFactory:Tt},{provide:j,multi:!0,deps:[E],useFactory:Ft}]}function $e(){return[{provide:H,multi:!0,deps:[E],useFactory:xt}]}function wt(e){return e}function xt(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(q).filter(([,r])=>r>1).map(([r])=>r);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(r=>`"${r}"`).join(", ")}. ${J}#strictactiontypeuniqueness`)}function Xt(e,t,r={}){return M([...Mt(e,t,r),Dt])}function Ot(e={},t={}){return[{provide:ke,useFactory:vt},{provide:pe,useValue:t.initialState},{provide:Z,useFactory:Ve,deps:[pe]},{provide:V,useValue:e},{provide:Re,useExisting:e instanceof c?e:V},{provide:Ce,deps:[V,[new C(Re)]],useFactory:yt},{provide:ge,useValue:t.metaReducers?t.metaReducers:[]},{provide:Ee,deps:[j,ge],useFactory:mt},{provide:ye,useValue:t.reducerFactory?t.reducerFactory:Y},{provide:Ae,deps:[ye,Ee],useFactory:_e},Le,Ze,He,Qe,We,jt(t.runtimeChecks),$e()]}function kt(){d(v),d(b),d(Q),d(W),d(ke,{optional:!0}),d(H,{optional:!0})}var At=[{provide:L,useFactory:kt},{provide:D,multi:!0,useFactory(){return()=>d(L)}}];function en(e,t){return M([...Ot(e,t),At])}function Ct(){d(L);let e=d(De),t=d(Me),r=d(x);d(H,{optional:!0});let n=e.map((o,i)=>{let u=t.shift()[i];return g(h({},o),{reducers:u,initialState:Ve(o.initialState)})});r.addFeatures(n)}var Dt=[{provide:Te,useFactory:Ct},{provide:D,multi:!0,useFactory(){return()=>d(Te)}}];function Mt(e,t,r={}){return[{provide:me,multi:!0,useValue:e instanceof Object?{}:r},{provide:he,multi:!0,useValue:{key:e instanceof Object?e.name:e,reducerFactory:!(r instanceof c)&&r.reducerFactory?r.reducerFactory:Y,metaReducers:!(r instanceof c)&&r.metaReducers?r.metaReducers:[],initialState:!(r instanceof c)&&r.initialState?r.initialState:void 0}},{provide:De,deps:[me,he],useFactory:ht},{provide:$,multi:!0,useValue:e instanceof Object?e.reducer:t},{provide:ve,multi:!0,useExisting:t instanceof c?t:$},{provide:Me,multi:!0,deps:[$,[new C(ve)]],useFactory:Rt},$e()]}function tn(...e){let t=e.pop(),r=e.map(n=>n.type);return{reducer:t,types:r}}function nn(e,...t){let r=new Map;for(let n of t)for(let o of n.types){let i=r.get(o);if(i){let s=(u,l)=>n.reducer(i(u,l),l);r.set(o,s)}else r.set(o,n.reducer)}return function(n=e,o){let i=r.get(o.type);return i?i(n,o):n}}var cn=m("[Task] Load Tasks"),un=m("[Task] Load Tasks Success",S()),an=m("[Task] Add Task",S()),dn=m("[Task] Update Task",S()),ln=m("[Task] Delete Task",S());export{m as a,L as b,Te as c,Q as d,W as e,at as f,Jt as g,Xt as h,en as i,tn as j,nn as k,cn as l,un as m,an as n,dn as o,ln as p};
