import{a as Re,b as Ae,c as De,d as je,e as N,f as O,g as Ne}from"./chunk-IJMNKUAE.js";import{a as $e}from"./chunk-NH33BQMY.js";import{a as Le,b as Ve,c as qe,d as ze,e as $,h as Be,i as He,j as F,k as Ue,l as Ge,m as L,n as V,o as q,p as z}from"./chunk-BTDKWUSD.js";import{$ as fe,$a as Oe,$b as P,Ab as Fe,C as Q,Ca as he,Cb as xe,D as I,Da as ge,F as b,I as ae,J as se,Ja as _e,Jb as we,L as ce,N as de,Na as f,Pa as ve,Q as X,Qa as ye,Ra as Ce,T as le,Ta as Me,Wb as Ie,_b as E,a as u,b as k,ba as _,bb as C,cc as j,db as s,ea as v,eb as c,fb as l,g as oe,ga as p,ha as h,ib as be,j as ie,ja as ue,jb as ke,kb as Ee,la as y,lb as Y,mb as Z,nb as J,oa as R,pb as A,q as S,qb as Pe,rb as Te,u as m,ua as me,va as pe,w as g,wb as M,xb as D,yb as Se}from"./chunk-OT5OFN47.js";var Ke=[{path:"",redirectTo:"overview",pathMatch:"full"},{path:"overview",loadComponent:()=>import("./chunk-HTG3SPPD.js").then(t=>t.OverviewComponent)},{path:"dashboard-signals",loadComponent:()=>import("./chunk-NP7MIPG6.js").then(t=>t.KanbanBoardSignalsComponent)},{path:"dashboard-ngrx",loadComponent:()=>import("./chunk-N2SZHR2Y.js").then(t=>t.KanbanBoardNgrxComponent)}];var ct="@",dt=(()=>{let e=class e{constructor(n,r,i,a,d){this.doc=n,this.delegate=r,this.zone=i,this.animationType=a,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=h(ye,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-XMNURWX6.js").then(r=>r)).catch(r=>{throw new fe(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc);let a=new i(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(n,r){let i=this.delegate.createRenderer(n,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let a=new W(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let K=d.createRenderer(n,r);a.use(K),this.scheduler?.notify(9)}).catch(d=>{a.use(i)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){ve()},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})(),W=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,n,r){this.delegate.insertBefore(e,o,n,r)}removeChild(e,o,n){this.delegate.removeChild(e,o,n)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,n,r){this.delegate.setAttribute(e,o,n,r)}removeAttribute(e,o,n){this.delegate.removeAttribute(e,o,n)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,n,r){this.delegate.setStyle(e,o,n,r)}removeStyle(e,o,n){this.delegate.removeStyle(e,o,n)}setProperty(e,o,n){this.shouldReplay(o)&&this.replay.push(r=>r.setProperty(e,o,n)),this.delegate.setProperty(e,o,n)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,n){return this.shouldReplay(o)&&this.replay.push(r=>r.listen(e,o,n)),this.delegate.listen(e,o,n)}shouldReplay(e){return this.replay!==null&&e.startsWith(ct)}};function Qe(t="animations"){return Me("NgAsyncAnimations"),R([{provide:Ce,useFactory:(e,o,n)=>new dt(e,o,n,t),deps:[Ie,De,he]},{provide:_e,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var lt={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},B="__@ngrx/effects_create__";function x(t,e={}){let o=e.functional?t:t(),n=u(u({},lt),e);return Object.defineProperty(o,B,{value:n}),o}function ft(t){return Object.getOwnPropertyNames(t).filter(n=>t[n]&&t[n].hasOwnProperty(B)?t[n][B].hasOwnProperty("dispatch"):!1).map(n=>{let r=t[n][B];return u({propertyName:n},r)})}function ut(t){return ft(t)}function Xe(t){return Object.getPrototypeOf(t)}function mt(t){return!!t.constructor&&t.constructor.name!=="Object"&&t.constructor.name!=="Function"}function Ye(t){return typeof t=="function"}function pt(t){return t.filter(Ye)}function ht(t,e,o){let n=Xe(t),i=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,a=ut(t).map(({propertyName:d,dispatch:K,useEffectsErrorHandler:at})=>{let ne=typeof t[d]=="function"?t[d]():t[d],re=at?o(ne,e):ne;return K===!1?re.pipe(se()):re.pipe(le()).pipe(m(st=>({effect:t[d],notification:st,propertyName:d,sourceName:i,sourceInstance:t})))});return Q(...a)}var gt=10;function Ze(t,e,o=gt){return t.pipe(b(n=>(e&&e.handleError(n),o<=1?t:Ze(t,e,o-1))))}var Je=(()=>{let e=class e extends oe{constructor(n){super(),n&&(this.source=n)}lift(n){let r=new e;return r.source=this,r.operator=n,r}};e.\u0275fac=function(r){return new(r||e)(p(ze))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function w(...t){return I(e=>t.some(o=>typeof o=="string"?o===e.type:o.type===e.type))}var Mn=new v("@ngrx/effects Internal Root Guard"),On=new v("@ngrx/effects User Provided Effects"),bn=new v("@ngrx/effects Internal Root Effects"),kn=new v("@ngrx/effects Internal Root Effects Instances"),En=new v("@ngrx/effects Internal Feature Effects"),Pn=new v("@ngrx/effects Internal Feature Effects Instance Groups"),_t=new v("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Ze}),vt="@ngrx/effects/init",yt=Le(vt);function Ct(t,e){if(t.notification.kind==="N"){let o=t.notification.value;!Mt(o)&&e.handleError(new Error(`Effect ${Ot(t)} dispatched an invalid action: ${bt(o)}`))}}function Mt(t){return typeof t!="function"&&t&&t.type&&typeof t.type=="string"}function Ot({propertyName:t,sourceInstance:e,sourceName:o}){let n=typeof e[t]=="function";return!!o?`"${o}.${String(t)}${n?"()":""}"`:`"${String(t)}()"`}function bt(t){try{return JSON.stringify(t)}catch{return t}}var kt="ngrxOnIdentifyEffects";function Et(t){return ee(t,kt)}var Pt="ngrxOnRunEffects";function Tt(t){return ee(t,Pt)}var St="ngrxOnInitEffects";function Ft(t){return ee(t,St)}function ee(t,e){return t&&e in t&&typeof t[e]=="function"}var We=(()=>{let e=class e extends ie{constructor(n,r){super(),this.errorHandler=n,this.effectsErrorHandler=r}addEffects(n){this.next(n)}toActions(){return this.pipe(X(n=>mt(n)?Xe(n):n),g(n=>n.pipe(X(xt))),g(n=>{let r=n.pipe(de(a=>wt(this.errorHandler,this.effectsErrorHandler)(a)),m(a=>(Ct(a,this.errorHandler),a.notification)),I(a=>a.kind==="N"&&a.value!=null),ce()),i=n.pipe(ae(1),I(Ft),m(a=>a.ngrxOnInitEffects()));return Q(r,i)}))}};e.\u0275fac=function(r){return new(r||e)(p(ge),p(_t))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function xt(t){return Et(t)?t.ngrxOnIdentifyEffects():""}function wt(t,e){return o=>{let n=ht(o,t,e);return Tt(o)?o.ngrxOnRunEffects(n):n}}var It=(()=>{let e=class e{get isStarted(){return!!this.effectsSubscription}constructor(n,r){this.effectSources=n,this.store=r,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};e.\u0275fac=function(r){return new(r||e)(p(We),p($))},e.\u0275prov=_({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function et(...t){let e=t.flat(),o=pt(e);return R([o,{provide:ue,multi:!0,useValue:()=>{h(Ve),h(qe,{optional:!0});let n=h(It),r=h(We),i=!n.isStarted;i&&n.start();for(let a of e){let d=Ye(a)?h(a):a;r.addEffects(d)}i&&h($).dispatch(yt())}}])}var tt=(()=>{let e=class e{constructor(n,r){this.actions$=n,this.taskService=r,this.loadTasks$=x(()=>this.actions$.pipe(w(Ge),g(()=>this.taskService.getAllTasks().pipe(m(i=>L({tasks:i})),b(()=>S({type:"[Task] Load Tasks Failed"})))))),this.addTask$=x(()=>this.actions$.pipe(w(V),g(i=>this.taskService.addTask(i.task).pipe(m(a=>({type:"[Task] Add Task Success",task:a})),b(()=>S({type:"[Task] Add Task Failed"})))))),this.updateTask$=x(()=>this.actions$.pipe(w(q),g(i=>this.taskService.updateTask(i.task).pipe(m(a=>({type:"[Task] Update Task Success",task:a})),b(()=>S({type:"[Task] Update Task Failed"})))))),this.deleteTask$=x(()=>this.actions$.pipe(w(z),g(i=>this.taskService.deleteTask(i.taskId).pipe(m(()=>({type:"[Task] Delete Task Success",taskId:i.taskId})),b(()=>S({type:"[Task] Delete Task Failed"}))))))}};e.\u0275fac=function(r){return new(r||e)(p(Je),p($e))},e.\u0275prov=_({token:e,factory:e.\u0275fac});let t=e;return t})();var Dt={tasks:[]},nt=Ue(Dt,F(L,(t,{tasks:e})=>k(u({},t),{tasks:e})),F(V,(t,{task:e})=>k(u({},t),{tasks:[...t.tasks,e]})),F(q,(t,{task:e})=>k(u({},t),{tasks:t.tasks.map(o=>o.id===e.id?e:o)})),F(z,(t,{taskId:e})=>k(u({},t),{tasks:t.tasks.filter(o=>o.id!==e)})));var rt={providers:[we({eventCoalescing:!0}),Re(Ae()),Ne(Ke),Qe(),He(),et([tt]),Be({name:"tasks",reducer:nt})]};var jt=[j],Kn=[...jt];var H=(()=>{let e=class e{constructor(){this.formattedDate=new Date}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["benify-footer"]],standalone:!0,features:[M],decls:4,vars:4,template:function(r,i){r&1&&(s(0,"footer")(1,"p"),A(2),Fe(3,"date"),c()()),r&2&&(f(2),Te("\xA9 ",xe(3,1,i.formattedDate,"yyyy")," Benify All Rights Reserved"))},dependencies:[j],styles:["[_ngcontent-%COMP%]:root{font-size:62.5%;--primary-color: #282828;--secondary-color: #3f3f3f;--secondary-color-m: #575757;--tertiary-color: #575757;--tertiary-color-m: #717171;--quaternary-color: #8b8b8b;--quaternary-color-m: #778490;--quinary-color: #fff;--card-shadow: rgba(0, 0, 0, .1);--stroke: #938abd;--status-todo-text: #ff5656;--status-in-progress-text: #d9ff00;--status-done-text: #2bb432;--transition: all .4s ease-in-out;--transition-duration: .3s;--transform-duration: transform .45s;--transform-duration: transform .45s ease-in-out}footer[_ngcontent-%COMP%]{position:fixed;left:0;bottom:0;width:100%;text-align:center}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Dosis;font-size:calc(.5rem + .5vw);color:var(--quinary-color)}"]});let t=e;return t})();var Lt=[O],Vt=[P,E],Wn=[...Lt,...Vt];var qt=["hamburgerContainer"],zt=["hamburger"],Bt=t=>({fade:t});function Ht(t,e){if(t&1&&(s(0,"li",10)(1,"a",11),A(2),c()()),t&2){let o=e.$implicit,n=Ee();C("ngClass",Se(3,Bt,n.menuOpen)),f(),C("routerLink",o.url),f(),Pe(o.name)}}var U=(()=>{let e=class e{constructor(){this.links=[{name:"Overview",url:"/overview"},{name:"Dashboard - Signals",url:"/dashboard-signals"},{name:"Dashboard - NGRX",url:"/dashboard-ngrx"}],this.menuOpen=!1}toggleMenu(){this.menuOpen=!this.menuOpen,this.hamburgerContainer&&this.hamburgerContainer.nativeElement.classList.toggle("clicked");let n=this.hamburgerContainer.nativeElement;this.menuOpen?n.classList.add("open"):n.classList.remove("open")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["benify-header"]],viewQuery:function(r,i){if(r&1&&(Y(qt,5),Y(zt,5)),r&2){let a;Z(a=J())&&(i.hamburgerContainer=a.first),Z(a=J())&&(i.hamburger=a.first)}},standalone:!0,features:[M],decls:10,vars:1,consts:[["hamburgerContainer",""],["hamburger",""],[1,"header"],[1,"header__main-nav"],[1,"header__main-nav--hamburger",3,"click"],[1,"header__main-nav--hamburger__line","line-1"],[1,"header__main-nav--hamburger__line","line-2"],[1,"header__main-nav--hamburger__line","line-3"],[1,"header__main-nav--link"],["class","header__main-nav--link__item",3,"ngClass",4,"ngFor","ngForOf"],[1,"header__main-nav--link__item",3,"ngClass"],["routerLinkActive","active",3,"routerLink"]],template:function(r,i){if(r&1){let a=be();s(0,"header",2)(1,"nav",3,0)(3,"div",4,1),ke("click",function(){return me(a),pe(i.toggleMenu())}),l(5,"div",5)(6,"div",6)(7,"div",7),c(),s(8,"ul",8),Oe(9,Ht,3,5,"li",9),c()()()}r&2&&(f(9),C("ngForOf",i.links))},dependencies:[O,P,E],styles:['[_ngcontent-%COMP%]:root{font-size:62.5%;--primary-color: #282828;--secondary-color: #3f3f3f;--secondary-color-m: #575757;--tertiary-color: #575757;--tertiary-color-m: #717171;--quaternary-color: #8b8b8b;--quaternary-color-m: #778490;--quinary-color: #fff;--card-shadow: rgba(0, 0, 0, .1);--stroke: #938abd;--status-todo-text: #ff5656;--status-in-progress-text: #d9ff00;--status-done-text: #2bb432;--transition: all .4s ease-in-out;--transition-duration: .3s;--transform-duration: transform .45s;--transform-duration: transform .45s ease-in-out}.header[_ngcontent-%COMP%]{background-color:var(--secondary-color);height:calc(3vw + 3vh);z-index:2;border-bottom:.1rem solid var(--tertiary-color-m)}.header__main-nav[_ngcontent-%COMP%]{height:100%}.header__main-nav--link[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:flex-end;align-items:center}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-right:3vw}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;padding:.2rem .6rem;padding-right:3vw;font-size:calc(1.2rem + .5vw)}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link:before, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited:before, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link:after, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited:after{content:"";position:absolute;left:0;width:100%;height:.25rem;background-color:var(--quinary-color);transform:scaleX(0);transition:transform .6s cubic-bezier(1,0,0,1)}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:link:before, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited:before{top:0;transform-origin:left}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:link:after, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited:after{bottom:0;transform-origin:right}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active:before, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active:after{transform:scaleX(1)}@media screen and (max-width: 600px){.header[_ngcontent-%COMP%]{position:absolute}.header__main-nav[_ngcontent-%COMP%]{width:30rem;height:100%;position:fixed;top:0;right:-30rem;background-color:var(--secondary-color);text-align:center;border-left:.1rem solid var(--tertiary-color-m);transition:right .8s ease}.header__main-nav--hamburger[_ngcontent-%COMP%]{width:5rem;height:5rem;position:fixed;top:2rem;right:3rem;cursor:pointer;background-color:var(--secondary-color);padding:1rem;border-radius:50%;display:flex;flex-direction:column;justify-content:space-around;transition:transform .5s ease}.header__main-nav--hamburger__line[_ngcontent-%COMP%]{width:100%;height:.3rem;background-color:var(--quinary-color);border-radius:.2rem;transition:var(--transition-cubic)}.header__main-nav--hamburger__line[_ngcontent-%COMP%]   .line-1[_ngcontent-%COMP%]{transform:rotate(-405deg) translate(-.8rem,.6rem)}.header__main-nav--hamburger__line[_ngcontent-%COMP%]   .line-2[_ngcontent-%COMP%]{opacity:0}.header__main-nav--hamburger__line[_ngcontent-%COMP%]   .line-3[_ngcontent-%COMP%]{transform:rotate(405deg) translate(-.8rem,-.6rem)}.header__main-nav--link[_ngcontent-%COMP%]{height:100%;background-color:var(--secondary-color);display:flex;flex-direction:column;justify-content:center;align-items:flex-start}.header__main-nav--link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:4vh;margin-left:6vw}.header__main-nav--link__item[_ngcontent-%COMP%]{opacity:0}.header__main-nav--link__item[_ngcontent-%COMP%]:nth-child(1){transition:all .5s ease-in-out .2s}.header__main-nav--link__item[_ngcontent-%COMP%]:nth-child(2){transition:all .5s ease-in-out .4s}.header__main-nav--link__item[_ngcontent-%COMP%]:nth-child(3){transition:all .5s ease-in-out .6s}.header__main-nav--link__item[_ngcontent-%COMP%]:nth-child(4){transition:all .5s ease-in-out .8s}.header__main-nav--link__item[_ngcontent-%COMP%]:nth-child(5){transition:all .5s ease-in-out 1s}.header__main-nav--link__item[_ngcontent-%COMP%]:nth-child(6){transition:all .5s ease-in-out 1.2s}}.clicked[_ngcontent-%COMP%]{left:55%;transition:right .8s ease;transform:translate(1)}.fade[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.open[_ngcontent-%COMP%]{right:0}']});let t=e;return t})();var Gt=[O],or=[...Gt];var te=()=>["/"],G=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["benify-sidebar"]],standalone:!0,features:[M],decls:14,vars:6,consts:[[1,"side-nav"],[1,"side-nav__content"],[1,"side-nav__content--logo"],["src","./assets/benify_white_logo.svg","alt","logo"],[1,"side-nav__content--social"],[3,"routerLink"],[1,"fa-solid","fa-gear"],[1,"fa-solid","fa-info"],[1,"fa-solid","fa-right-from-bracket"]],template:function(r,i){r&1&&(s(0,"aside",0)(1,"div",1)(2,"div",2),l(3,"img",3),c(),s(4,"ul",4)(5,"li")(6,"a",5),l(7,"i",6),c()(),s(8,"li")(9,"a",5),l(10,"i",7),c()(),s(11,"li")(12,"a",5),l(13,"i",8),c()()()()()),r&2&&(f(6),C("routerLink",D(3,te)),f(3),C("routerLink",D(4,te)),f(3),C("routerLink",D(5,te)))},dependencies:[O],styles:["[_ngcontent-%COMP%]:root{font-size:62.5%;--primary-color: #282828;--secondary-color: #3f3f3f;--secondary-color-m: #575757;--tertiary-color: #575757;--tertiary-color-m: #717171;--quaternary-color: #8b8b8b;--quaternary-color-m: #778490;--quinary-color: #fff;--card-shadow: rgba(0, 0, 0, .1);--stroke: #938abd;--status-todo-text: #ff5656;--status-in-progress-text: #d9ff00;--status-done-text: #2bb432;--transition: all .4s ease-in-out;--transition-duration: .3s;--transform-duration: transform .45s;--transform-duration: transform .45s ease-in-out}.side-nav[_ngcontent-%COMP%]{position:sticky;top:0;left:0;height:100vh}.side-nav__content[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column;justify-content:space-between;background-color:var(--primary-color);padding:4rem .5rem 0}.side-nav__content--logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:calc(3vw + 3vh);object-fit:cover}.side-nav__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .side-nav__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:active{transition:var(--transform-cubic);transform:scaleX(1.1);cursor:pointer}.side-nav__content--social[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center}.side-nav__content--social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:calc(1rem + .66667vw);color:var(--quinary-color);padding-bottom:calc(1rem + .6667vw);transition:var(--transition)}.side-nav__content--social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover, .side-nav__content--social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:active{color:var(--secondary-color)}"]});let t=e;return t})();var Qt=[N],Xt=[P,E],Yt=[G,U,H],mr=[...Qt,...Xt,...Yt];var it=(()=>{let e=class e{constructor(){this.title="Benify Kanban Board"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=y({type:e,selectors:[["benify-root"]],standalone:!0,features:[M],decls:7,vars:0,consts:[[1,"container"]],template:function(r,i){r&1&&(s(0,"div",0),l(1,"benify-sidebar"),s(2,"main"),l(3,"benify-header"),s(4,"section"),l(5,"router-outlet"),c(),l(6,"benify-footer"),c()())},dependencies:[N,G,U,H],styles:[".container[_ngcontent-%COMP%]{display:flex}.container[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{flex-grow:1;background:var(--secondary-color)}"]});let t=e;return t})();je(it,rt).catch(t=>console.error(t));
