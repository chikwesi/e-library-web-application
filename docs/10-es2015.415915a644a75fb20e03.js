(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{jmR9:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var s=u("9AJC"),b=u("pMnS"),i=u("SVse"),r=u("s7LF"),a=u("JX91"),o=u("lJxs");class c{constructor(l,n){this.usersService=l,this.toaster=n,this.filter=new r.e(""),this.page=1,this.pageSize=2}ngOnInit(){this.getAllUsers()}get users(){return this.userList.map((l,n)=>Object.assign({id:n+1},l)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)}deleteUser(l){this.toaster.confirm("delete").then(n=>{n.value&&(this.usersService.deleteUser(l),this.getAllUsers())})}getAllUsers(){this.userList=this.usersService.getAllUsers(),this.collectionSize=this.userList.length,this.users$=this.filter.valueChanges.pipe(Object(a.a)(""),Object(o.a)(l=>this.userList.filter(n=>{const u=l.toLowerCase();return n.username.toLowerCase().includes(u)})))}}var d=u("f2kA"),p=u("GdUb"),g=t.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),t.Jb(2,null,["",""])),(l()(),t.qb(3,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""])),t.Fb(5,1),(l()(),t.qb(6,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Jb(7,null,["",""])),t.Fb(8,1),(l()(),t.qb(9,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,1,"button",[["class","btn btn-transparent"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteUser(l.context.$implicit.id)&&t),t}),null,null)),(l()(),t.qb(11,0,null,null,0,"i",[["class","fa fa-trash"]],null,null,null,null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.id);var u=t.Kb(n,4,0,l(n,5,0,t.Cb(n.parent,0),n.context.$implicit.username));l(n,4,0,u);var e=t.Kb(n,7,0,l(n,8,0,t.Cb(n.parent,1),n.context.$implicit.dateCreated));l(n,7,0,e)}))}function C(l){return t.Lb(0,[t.Db(0,i.r,[]),t.Db(0,i.e,[t.t]),(l()(),t.qb(2,0,null,null,35,"div",[["class","main-wrapper bg-light"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,34,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["All users"])),(l()(),t.qb(6,0,null,null,31,"div",[["class","card mt-5 border-0"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,30,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,13,"div",[["class","form-row"]],null,null,null,null,null)),(l()(),t.qb(9,0,null,null,12,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,11,"form",[["action",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Cb(l,12).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Cb(l,12).onReset()&&e),e}),null,null)),t.pb(11,16384,null,0,r.x,[],null,null),t.pb(12,4210688,null,0,r.p,[[8,null],[8,null]],null,null),t.Gb(2048,null,r.b,null,[r.p]),t.pb(14,16384,null,0,r.o,[[4,r.b]],null,null),(l()(),t.qb(15,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,5,"input",[["class","form-control"],["placeholder","search user"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Cb(l,17)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Cb(l,17).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Cb(l,17)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Cb(l,17)._compositionEnd(u.target.value)&&e),e}),null,null)),t.pb(17,16384,null,0,r.c,[t.C,t.k,[2,r.a]],null,null),t.Gb(1024,null,r.l,(function(l){return[l]}),[r.c]),t.pb(19,540672,null,0,r.f,[[8,null],[8,null],[6,r.l],[2,r.v]],{form:[0,"form"]},null),t.Gb(2048,null,r.m,null,[r.f]),t.pb(21,16384,null,0,r.n,[[4,r.m]],null,null),(l()(),t.qb(22,0,null,null,15,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,14,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),t.qb(24,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.qb(26,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["#"])),(l()(),t.qb(28,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Username"])),(l()(),t.qb(30,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Date Created"])),(l()(),t.qb(32,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Action"])),(l()(),t.qb(34,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,2,null,h)),t.pb(36,278528,null,0,i.k,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Db(131072,i.b,[t.h])],(function(l,n){var u=n.component;l(n,19,0,u.filter),l(n,36,0,t.Kb(n,36,0,t.Cb(n,37).transform(u.users$)))}),(function(l,n){l(n,10,0,t.Cb(n,14).ngClassUntouched,t.Cb(n,14).ngClassTouched,t.Cb(n,14).ngClassPristine,t.Cb(n,14).ngClassDirty,t.Cb(n,14).ngClassValid,t.Cb(n,14).ngClassInvalid,t.Cb(n,14).ngClassPending),l(n,16,0,t.Cb(n,21).ngClassUntouched,t.Cb(n,21).ngClassTouched,t.Cb(n,21).ngClassPristine,t.Cb(n,21).ngClassDirty,t.Cb(n,21).ngClassValid,t.Cb(n,21).ngClassInvalid,t.Cb(n,21).ngClassPending)}))}function A(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-user-list",[],null,null,null,C,g)),t.pb(1,114688,null,0,c,[d.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.mb("app-user-list",c,A,{},{},[]),f=u("G0yt"),v=u("iInd");class q{}u.d(n,"UsersModuleNgFactory",(function(){return w}));var w=t.nb(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[s.a,s.b,s.f,s.g,s.c,s.d,s.e,b.a,m]],[3,t.j],t.w]),t.Ab(4608,i.n,i.m,[t.t,[2,i.B]]),t.Ab(4608,r.u,r.u,[]),t.Ab(4608,f.w,f.w,[t.j,t.q,f.kb,f.x]),t.Ab(4608,r.d,r.d,[]),t.Ab(1073742336,i.c,i.c,[]),t.Ab(1073742336,f.c,f.c,[]),t.Ab(1073742336,f.g,f.g,[]),t.Ab(1073742336,f.h,f.h,[]),t.Ab(1073742336,f.l,f.l,[]),t.Ab(1073742336,f.m,f.m,[]),t.Ab(1073742336,r.t,r.t,[]),t.Ab(1073742336,r.j,r.j,[]),t.Ab(1073742336,f.s,f.s,[]),t.Ab(1073742336,f.u,f.u,[]),t.Ab(1073742336,f.y,f.y,[]),t.Ab(1073742336,f.A,f.A,[]),t.Ab(1073742336,f.E,f.E,[]),t.Ab(1073742336,f.H,f.H,[]),t.Ab(1073742336,f.K,f.K,[]),t.Ab(1073742336,f.N,f.N,[]),t.Ab(1073742336,f.Q,f.Q,[]),t.Ab(1073742336,f.V,f.V,[]),t.Ab(1073742336,f.Y,f.Y,[]),t.Ab(1073742336,f.Z,f.Z,[]),t.Ab(1073742336,f.ab,f.ab,[]),t.Ab(1073742336,f.z,f.z,[]),t.Ab(1073742336,r.r,r.r,[]),t.Ab(1073742336,v.o,v.o,[[2,v.t],[2,v.k]]),t.Ab(1073742336,q,q,[]),t.Ab(1073742336,e,e,[]),t.Ab(1024,v.i,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);