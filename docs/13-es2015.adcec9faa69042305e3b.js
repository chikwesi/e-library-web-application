(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{zKd0:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class b{}var o=u("pMnS"),i=u("SVse"),e=u("s7LF"),s=u("JX91"),a=u("lJxs"),r=u("e/ZQ");class c{constructor(l,n,u){this.bookService=l,this.modalService=n,this.toaster=u,this.filter=new e.e(""),this.page=1,this.pageSize=2}ngOnInit(){this.getAllBooks()}getAllBooks(){this.bookList=this.bookService.getAllBooks(),this.collectionSize=this.bookList.length,this.books$=this.filter.valueChanges.pipe(Object(s.a)(""),Object(a.a)(l=>this.bookList.filter(n=>{const u=l.toLowerCase();return n.title.toLowerCase().includes(u)||n.description.toLowerCase().includes(u)||n.author.toLowerCase().includes(u)})))}addBook(){this.modalService.open(r.a).componentInstance.saved.subscribe(l=>l?this.getAllBooks():null)}get books(){return this.bookList.map((l,n)=>Object.assign({id:n+1},l)).slice((this.page-1)*this.pageSize,(this.page-1)*this.pageSize+this.pageSize)}}var p=u("hPJE"),d=u("G0yt"),g=u("GdUb"),h=t.ob({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,13,"tr",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"th",[["scope","row"]],null,null,null,null,null)),(l()(),t.Jb(2,null,["",""])),(l()(),t.qb(3,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,0,"img",[["class","book-image"],["height","30"],["width","30"]],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(5,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),t.Fb(7,1),(l()(),t.qb(8,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Jb(9,null,["",""])),t.Fb(10,1),(l()(),t.qb(11,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.Jb(12,null,["",""])),t.Fb(13,1)],null,(function(l,n){l(n,2,0,n.context.$implicit.id),l(n,4,0,n.context.$implicit.bookImage);var u=t.Kb(n,6,0,l(n,7,0,t.Cb(n.parent,0),n.context.$implicit.title));l(n,6,0,u);var b=t.Kb(n,9,0,l(n,10,0,t.Cb(n.parent,0),n.context.$implicit.author));l(n,9,0,b);var o=t.Kb(n,12,0,l(n,13,0,t.Cb(n.parent,0),n.context.$implicit.description));l(n,12,0,o)}))}function m(l){return t.Lb(0,[t.Db(0,i.r,[]),(l()(),t.qb(1,0,null,null,37,"div",[["class","main-wrapper bg-light"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,36,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Search books"])),(l()(),t.qb(5,0,null,null,33,"div",[["class","card mt-5 border-0"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,32,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.qb(7,0,null,null,13,"div",[["class","form-row justify-content-between"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,12,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),t.qb(9,0,null,null,11,"form",[["action",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var b=!0;return"submit"===n&&(b=!1!==t.Cb(l,11).onSubmit(u)&&b),"reset"===n&&(b=!1!==t.Cb(l,11).onReset()&&b),b}),null,null)),t.pb(10,16384,null,0,e.x,[],null,null),t.pb(11,4210688,null,0,e.p,[[8,null],[8,null]],null,null),t.Gb(2048,null,e.b,null,[e.p]),t.pb(13,16384,null,0,e.o,[[4,e.b]],null,null),(l()(),t.qb(14,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,5,"input",[["class","form-control"],["placeholder","search books"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var b=!0;return"input"===n&&(b=!1!==t.Cb(l,16)._handleInput(u.target.value)&&b),"blur"===n&&(b=!1!==t.Cb(l,16).onTouched()&&b),"compositionstart"===n&&(b=!1!==t.Cb(l,16)._compositionStart()&&b),"compositionend"===n&&(b=!1!==t.Cb(l,16)._compositionEnd(u.target.value)&&b),b}),null,null)),t.pb(16,16384,null,0,e.c,[t.C,t.k,[2,e.a]],null,null),t.Gb(1024,null,e.l,(function(l){return[l]}),[e.c]),t.pb(18,540672,null,0,e.f,[[8,null],[8,null],[6,e.l],[2,e.v]],{form:[0,"form"]},null),t.Gb(2048,null,e.m,null,[e.f]),t.pb(20,16384,null,0,e.n,[[4,e.m]],null,null),(l()(),t.qb(21,0,null,null,17,"div",[["class","table-responsive"]],null,null,null,null,null)),(l()(),t.qb(22,0,null,null,16,"table",[["class","table table-striped"]],null,null,null,null,null)),(l()(),t.qb(23,0,null,null,11,"thead",[],null,null,null,null,null)),(l()(),t.qb(24,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["#"])),(l()(),t.qb(27,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Image"])),(l()(),t.qb(29,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Title"])),(l()(),t.qb(31,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Author"])),(l()(),t.qb(33,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Description"])),(l()(),t.qb(35,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,2,null,C)),t.pb(37,278528,null,0,i.k,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null),t.Db(131072,i.b,[t.h])],(function(l,n){var u=n.component;l(n,18,0,u.filter),l(n,37,0,t.Kb(n,37,0,t.Cb(n,38).transform(u.books$)))}),(function(l,n){l(n,9,0,t.Cb(n,13).ngClassUntouched,t.Cb(n,13).ngClassTouched,t.Cb(n,13).ngClassPristine,t.Cb(n,13).ngClassDirty,t.Cb(n,13).ngClassValid,t.Cb(n,13).ngClassInvalid,t.Cb(n,13).ngClassPending),l(n,15,0,t.Cb(n,20).ngClassUntouched,t.Cb(n,20).ngClassTouched,t.Cb(n,20).ngClassPristine,t.Cb(n,20).ngClassDirty,t.Cb(n,20).ngClassValid,t.Cb(n,20).ngClassInvalid,t.Cb(n,20).ngClassPending)}))}function A(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-book-search",[],null,null,null,m,h)),t.pb(1,114688,null,0,c,[p.a,d.w,g.a],null,null)],(function(l,n){l(n,1,0)}),null)}var v=t.mb("app-book-search",c,A,{},{},[]),f=u("9AJC"),q=u("iInd");class k{}u.d(n,"LibraryModuleNgFactory",(function(){return w}));var w=t.nb(b,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[o.a,v,f.a,f.b,f.f,f.g,f.c,f.d,f.e]],[3,t.j],t.w]),t.Ab(4608,i.n,i.m,[t.t,[2,i.B]]),t.Ab(4608,e.u,e.u,[]),t.Ab(4608,e.d,e.d,[]),t.Ab(4608,d.w,d.w,[t.j,t.q,d.kb,d.x]),t.Ab(1073742336,i.c,i.c,[]),t.Ab(1073742336,q.o,q.o,[[2,q.t],[2,q.k]]),t.Ab(1073742336,k,k,[]),t.Ab(1073742336,e.t,e.t,[]),t.Ab(1073742336,e.j,e.j,[]),t.Ab(1073742336,e.r,e.r,[]),t.Ab(1073742336,d.c,d.c,[]),t.Ab(1073742336,d.g,d.g,[]),t.Ab(1073742336,d.h,d.h,[]),t.Ab(1073742336,d.l,d.l,[]),t.Ab(1073742336,d.m,d.m,[]),t.Ab(1073742336,d.s,d.s,[]),t.Ab(1073742336,d.u,d.u,[]),t.Ab(1073742336,d.y,d.y,[]),t.Ab(1073742336,d.A,d.A,[]),t.Ab(1073742336,d.E,d.E,[]),t.Ab(1073742336,d.H,d.H,[]),t.Ab(1073742336,d.K,d.K,[]),t.Ab(1073742336,d.N,d.N,[]),t.Ab(1073742336,d.Q,d.Q,[]),t.Ab(1073742336,d.V,d.V,[]),t.Ab(1073742336,d.Y,d.Y,[]),t.Ab(1073742336,d.Z,d.Z,[]),t.Ab(1073742336,d.ab,d.ab,[]),t.Ab(1073742336,d.z,d.z,[]),t.Ab(1073742336,b,b,[]),t.Ab(1024,q.i,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);