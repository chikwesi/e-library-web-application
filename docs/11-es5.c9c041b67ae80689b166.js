(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tw2N:function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=function(){},c=u("pMnS"),e=u("SVse"),a=function(){function l(l,n){this.bookService=l,this.userService=n}return l.prototype.ngOnInit=function(){this.dashboardStats=[{icon:"fa fa-book",title:"No of Books",count:this.bookService.getAllBooks().length},{icon:"fa fa-users",title:"No of Users",count:this.userService.getAllUsers().length},{icon:"fa fa-book-reader",title:"No of Lent Books",count:this.bookService.getAllLentBooks().length}],this.getRecentBooks()},l.prototype.getRecentBooks=function(){this.recentlyAddedBooks=this.bookService.getAllBooks().sort((function(l,n){return l.dateCreated>n.dateCreated?-1:1})).slice(0,3)},l}(),r=u("hPJE"),d=u("f2kA"),i=o.ob({encapsulation:0,styles:[[".card.dashboard-card[_ngcontent-%COMP%]{padding-top:2rem;padding-bottom:2rem;border:none;text-align:center;cursor:pointer}.card.dashboard-card[_ngcontent-%COMP%]   .card-icon[_ngcontent-%COMP%]{background-color:#c4c4c4;width:40px;height:40px;border-radius:40em;display:flex;margin:auto;align-items:center;justify-content:center}.card.dashboard-card[_ngcontent-%COMP%]   .card-icon.fa-users[_ngcontent-%COMP%]{color:#00f;background-color:#add8e6}.card.dashboard-card[_ngcontent-%COMP%]   .card-icon.fa-book[_ngcontent-%COMP%]{color:brown;background-color:#fcce9b}.card.dashboard-card[_ngcontent-%COMP%]   .card-icon.fa-book-reader[_ngcontent-%COMP%]{color:green;background-color:#90ee90}.card.dashboard-card[_ngcontent-%COMP%]   .card-stats[_ngcontent-%COMP%]{font-size:3em;font-weight:bolder}.card.dashboard-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#a5a5a5}.card.dashboard-card[_ngcontent-%COMP%]:hover{box-shadow:0 13px 21px -11px rgba(6,42,97,.45)}"]],data:{}});function s(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,7,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,6,"div",[["class","card dashboard-card"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,5,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),o.qb(3,0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null)),(l()(),o.qb(4,0,null,null,1,"h4",[["class","card-stats mt-3"]],null,null,null,null,null)),(l()(),o.Jb(5,null,["",""])),(l()(),o.qb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(7,null,[" "," "]))],null,(function(l,n){l(n,3,0,"card-icon "+n.context.$implicit.icon),l(n,5,0,n.context.$implicit.count),l(n,7,0,n.context.$implicit.title)}))}function b(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,7,"div",[["class","col-md-4"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,6,"div",[["class","card book-card"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,0,"img",[["class","card-image"]],[[8,"src",4]],null,null,null,null)),(l()(),o.qb(3,0,null,null,4,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),o.qb(4,0,null,null,1,"h4",[["class","card-title"]],null,null,null,null,null)),(l()(),o.Jb(5,null,[" "," "])),(l()(),o.qb(6,0,null,null,1,"p",[["class",""]],null,null,null,null,null)),(l()(),o.Jb(7,null,[" "," "]))],null,(function(l,n){l(n,2,0,n.context.$implicit.bookImage),l(n,5,0,n.context.$implicit.title),l(n,7,0,n.context.$implicit.description)}))}function g(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,20,"div",[["class","main-wrapper bg-light"]],null,null,null,null,null)),(l()(),o.qb(1,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(2,0,null,null,8,"div",[["class","py-5"]],null,null,null,null,null)),(l()(),o.qb(3,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o.qb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Dashboard"])),(l()(),o.qb(6,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Quickly see the data the matters to you"])),(l()(),o.qb(8,0,null,null,2,"div",[["class","row mt-5"]],null,null,null,null,null)),(l()(),o.fb(16777216,null,null,1,null,s)),o.pb(10,278528,null,0,e.k,[o.N,o.K,o.r],{ngForOf:[0,"ngForOf"]},null),(l()(),o.qb(11,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(l()(),o.qb(12,0,null,null,8,"div",[["class","py-5"]],null,null,null,null,null)),(l()(),o.qb(13,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),o.qb(14,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["Recently Added Books"])),(l()(),o.qb(16,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(-1,null,["The widest collection of books"])),(l()(),o.qb(18,0,null,null,2,"div",[["class","row mt-5"]],null,null,null,null,null)),(l()(),o.fb(16777216,null,null,1,null,b)),o.pb(20,278528,null,0,e.k,[o.N,o.K,o.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,10,0,u.dashboardStats),l(n,20,0,u.recentlyAddedBooks)}),null)}var p=o.mb("app-dashboard-view",a,(function(l){return o.Lb(0,[(l()(),o.qb(0,0,null,null,1,"app-dashboard-view",[],null,null,null,g,i)),o.pb(1,114688,null,0,a,[r.a,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),f=u("iInd"),h=function(){};u.d(n,"DashboardModuleNgFactory",(function(){return k}));var k=o.nb(t,[],(function(l){return o.zb([o.Ab(512,o.j,o.Y,[[8,[c.a,p]],[3,o.j],o.w]),o.Ab(4608,e.n,e.m,[o.t,[2,e.B]]),o.Ab(1073742336,e.c,e.c,[]),o.Ab(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),o.Ab(1073742336,h,h,[]),o.Ab(1073742336,t,t,[]),o.Ab(1024,f.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);