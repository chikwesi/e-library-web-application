(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"e/ZQ":function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));var s=t("8Y7J"),n=t("s7LF");class r{constructor(e,o){this.activeModal=e,this.bookService=o,this.saved=new s.m}ngOnInit(){this.newBookForm=new n.h({title:new n.e("",[n.s.required]),author:new n.e("",[n.s.required]),description:new n.e("",[n.s.required]),bookImage:new n.e("",[n.s.required])})}getBookImage(e){const o=e.target.files[0],t=new FileReader;t.readAsDataURL(o),t.onload=()=>this.bookImage=t.result.toString()}addBook(){const e=this.newBookForm.value;e.bookImage=this.bookImage,this.bookService.addBook(e)&&this.saved.emit(!0)}}},hPJE:function(e,o,t){"use strict";t.d(o,"a",(function(){return r}));var s=t("8Y7J"),n=t("f2kA");let r=(()=>{class e{constructor(e){this.userService=e}getAllBooks(){return JSON.parse(localStorage.getItem("books"))||[]}saveBookInMemory(e){localStorage.setItem("books",JSON.stringify(e))}deleteBook(e){const o=this.getAllBooks(),t=o.findIndex(o=>o.id==e);o.splice(t,1),this.saveBookInMemory(o)}addBook(e){const o=this.getAllBooks(),t=Object.assign({},e,{id:o?o.reduce((e,o)=>o.id>e?o.id+1:e+1,1):1,dateCreated:new Date(Date.now())});return o.push(t),this.saveBookInMemory(o),{status:"Success",message:"book created successfully"}}updateBook(e){const o=this.getAllBooks(),t=o.findIndex(o=>o.id==e.id),s=Object.assign({},e);return o.splice(t,1,s),this.saveBookInMemory(o),{status:"Success",message:"book updated successfully"}}getAllLentBooks(){return JSON.parse(localStorage.getItem("lentbooks"))||[]}saveLentBooksInMemory(e){localStorage.setItem("lentbooks",JSON.stringify(e))}lendBook(e){const o=this.getAllLentBooks();return e.userIds.forEach(t=>{if(!o.find(o=>o.userId==t&&o.bookId==e.bookId)){const s={bookId:e.bookId,userId:t,numberLent:1,id:o?o.reduce((e,o)=>o.id>e?o.id+1:e+1,1):1,dateLent:new Date(Date.now())};o.push(s),this.saveLentBooksInMemory(o)}}),{status:"Success",message:"book lended successfully"}}getLentUsersByBookId(e){const o=this.userService.getAllUsers();return this.getAllLentBooks().filter(o=>o.bookId==e).map(e=>{let t=o.find(o=>e.userId==o.id);return e.user=t,e})}}return e.ngInjectableDef=s.Pb({factory:function(){return new e(s.Qb(n.a))},token:e,providedIn:"root"}),e})()}}]);