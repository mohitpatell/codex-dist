(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"4FCr":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerBlogsModule",(function(){return g}));var l=n("ofXK"),i=n("fXoL"),o=n("tyNb"),r=n("bg57"),s=n("N+K7"),a=n("dz5x");function d(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",12),i["\u0275\u0275elementStart"](1,"a",13),i["\u0275\u0275element"](2,"i",14),i["\u0275\u0275text"](3," Filters"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",15),i["\u0275\u0275elementStart"](5,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().filterAllBlogs()})),i["\u0275\u0275element"](6,"i",17),i["\u0275\u0275elementStart"](7,"span"),i["\u0275\u0275text"](8,"All Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().filterApprovedBlogs()})),i["\u0275\u0275element"](10,"i",18),i["\u0275\u0275elementStart"](11,"span"),i["\u0275\u0275text"](12,"Approved Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().filterPendingBlogs()})),i["\u0275\u0275element"](14,"i",19),i["\u0275\u0275elementStart"](15,"span"),i["\u0275\u0275text"](16,"Pending Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"a",16),i["\u0275\u0275listener"]("click",(function(){return i["\u0275\u0275restoreView"](e),i["\u0275\u0275nextContext"]().filterRejectedBlogs()})),i["\u0275\u0275element"](18,"i",20),i["\u0275\u0275elementStart"](19,"span"),i["\u0275\u0275text"](20,"Rejected Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}}const m=function(e){return["/employer/view-blog",e]};function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",21),i["\u0275\u0275elementStart"](1,"div",22),i["\u0275\u0275element"](2,"img",23),i["\u0275\u0275elementStart"](3,"div",24),i["\u0275\u0275elementStart"](4,"h5",25),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"div",26),i["\u0275\u0275elementStart"](7,"small",27),i["\u0275\u0275text"](8,"by "),i["\u0275\u0275elementStart"](9,"strong",28),i["\u0275\u0275text"](10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"div",26),i["\u0275\u0275elementStart"](12,"small",27),i["\u0275\u0275text"](13),i["\u0275\u0275pipe"](14,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](15,"hr",29),i["\u0275\u0275elementStart"](16,"div",30),i["\u0275\u0275elementStart"](17,"div",31),i["\u0275\u0275elementStart"](18,"div",32),i["\u0275\u0275element"](19,"i",33),i["\u0275\u0275text"](20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"a",34),i["\u0275\u0275text"](22,"View Blog"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("src",null==e?null:e.thumbnailImage,i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate1"]("",null==e?null:e.title," "),i["\u0275\u0275advance"](5),i["\u0275\u0275textInterpolate"](null==e?null:e.author),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind2"](14,6,null==e?null:e.postedOn,"MMMM y,d")),i["\u0275\u0275advance"](7),i["\u0275\u0275textInterpolate1"](" ",0==(null==e?null:e.status)?"pending":1==(null==e?null:e.status)?"approved":"rejected"," "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction1"](9,m,null==e?null:e.id))}}const c=[{path:"",component:(()=>{class e{constructor(e,t,n,l){this.state=e,this.blogsArr=t,this.http=n,this.share=l,this.blogs=[]}ngOnInit(){this.state.params.subscribe(e=>{this.filter=e.state,"approved"==this.filter?(this.getApprovedBlogs(),this.blogsType="approved"):"pending"==this.filter?(this.getPendingBlogs(),this.blogsType="pending"):(this.getAllBlogs(),this.blogsType="all")})}getAllBlogs(){this.showFilter=!0,this.http.postToBackend("/users/blogs/all",{userName:this.share.user.username,isFreelancer:!1}).then(e=>{console.log(e),7e3===e.statusCode&&(this.blogs=e.data,this.blogsToDisplay=this.blogs),console.log(this.blogsToDisplay,"###")}).catch(e=>{console.log(e)})}getApprovedBlogs(){this.showFilter=!1,this.filterApprovedBlogs()}getPendingBlogs(){this.showFilter=!1,this.filterPendingBlogs()}filterAllBlogs(){this.blogsToDisplay=[],this.blogsType="all",this.blogsToDisplay=this.blogs}filterApprovedBlogs(){this.blogsToDisplay=[],this.blogsType="approved",this.blogsToDisplay=this.blogs.filter(e=>1==e.status)}filterPendingBlogs(){this.blogsToDisplay=[],this.blogsType="pending",this.blogsToDisplay=this.blogs.filter(e=>0==e.status)}filterRejectedBlogs(){this.blogsToDisplay=[],this.blogsType="rejected",this.blogsToDisplay=this.blogs.filter(e=>2==e.status)}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](r.a),i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-employer-blogs"]],decls:16,vars:5,consts:[[1,"header","bg-blue-gradient","pb-2"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],["class","col-lg-6 col-5 text-right dropdown",4,"ngIf"],[1,"sub-heading","p-2","border-bottom","my-4"],[1,"row","justify-content-center"],[1,"col"],[1,"row"],["class","col-lg-4 col-md-6",4,"ngFor","ngForOf"],[1,"col-lg-6","col-5","text-right","dropdown"],["href","#","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-sm","btn-neutral"],["aria-hidden","true",1,"fa","fa-filter"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"click"],[1,"icofont-list","text-primary"],[1,"icofont-check","text-success"],["aria-hidden","true",1,"icofont-clock-time","text-warning"],["aria-hidden","true",1,"icofont-trash","text-warning"],[1,"col-lg-4","col-md-6"],[1,"card"],["alt","Image placeholder",1,"card-img-top",3,"src"],[1,"card-body"],[1,"h2","card-title","my-0","text-bold"],[1,"d-flex","justify-content-end","mt-2"],[1,"text-muted"],[1,"text-dark"],[1,"my-3"],[1,"d-flex","justify-content-between"],[1,"status"],[1,"btn","btn-sm","btn-outline-warning","mt-2"],["aria-hidden","true",1,"icofont-clock-time"],[1,"btn","btn-sm","btn-primary","text-white",3,"routerLink"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"h6",5),i["\u0275\u0275text"](6,"Employer Blogs"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](7,d,21,0,"div",6),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"div",1),i["\u0275\u0275elementStart"](9,"h2",7),i["\u0275\u0275text"](10),i["\u0275\u0275pipe"](11,"titlecase"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"div",8),i["\u0275\u0275elementStart"](13,"div",9),i["\u0275\u0275elementStart"](14,"div",10),i["\u0275\u0275template"](15,p,23,11,"div",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](7),i["\u0275\u0275property"]("ngIf",t.showFilter),i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate1"]("",i["\u0275\u0275pipeBind1"](11,3,t.blogsType)," Blogs"),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngForOf",t.blogsToDisplay))},directives:[l.NgIf,l.NgForOf,o.g],pipes:[l.TitleCasePipe,l.DatePipe],styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.CommonModule,o.h.forChild(c)]]}),e})()}}]);