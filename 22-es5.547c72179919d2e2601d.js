function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{UkwJ:function(e,t,n){"use strict";n.r(t),n.d(t,"FreelancerJobsModule",(function(){return j}));var i,r=n("ofXK"),a=n("fXoL"),o=n("tyNb"),s=((i=function e(){_classCallCheck(this,e),this.jobsArr=[{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"pending",price:60},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"30 March, 2020",status:"completed",price:120},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"active",price:60},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"active",price:500},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"pending",price:60},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"active",price:30},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"25 March, 2020",status:"rejected",price:125}]}).\u0275fac=function(e){return new(e||i)},i.\u0275prov=a["\u0275\u0275defineInjectable"]({token:i,factory:i.\u0275fac,providedIn:"root"}),i),l=n("N+K7");function c(e,t){if(1&e){var n=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"div",15),a["\u0275\u0275elementStart"](1,"a",16),a["\u0275\u0275element"](2,"i",17),a["\u0275\u0275text"](3," Filters"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"div",18),a["\u0275\u0275elementStart"](5,"a",19),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().filterAllJobs()})),a["\u0275\u0275element"](6,"i",20),a["\u0275\u0275elementStart"](7,"span"),a["\u0275\u0275text"](8,"Applied Jobs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](9,"a",19),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().filterActiveJobs()})),a["\u0275\u0275element"](10,"i",21),a["\u0275\u0275elementStart"](11,"span"),a["\u0275\u0275text"](12,"Active Jobs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](13,"a",19),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().filterCompletedJobs()})),a["\u0275\u0275element"](14,"i",22),a["\u0275\u0275elementStart"](15,"span"),a["\u0275\u0275text"](16,"Completed Jobs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](17,"a",19),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().filterPendingJobs()})),a["\u0275\u0275element"](18,"i",23),a["\u0275\u0275elementStart"](19,"span"),a["\u0275\u0275text"](20,"Pending Jobs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](21,"a",19),a["\u0275\u0275listener"]("click",(function(){return a["\u0275\u0275restoreView"](n),a["\u0275\u0275nextContext"]().filterRejectedJobs()})),a["\u0275\u0275element"](22,"i",24),a["\u0275\u0275elementStart"](23,"span"),a["\u0275\u0275text"](24,"Rejected Jobs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}}function d(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",40),a["\u0275\u0275element"](1,"i",41),a["\u0275\u0275text"](2," Pending "),a["\u0275\u0275elementEnd"]())}function m(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",42),a["\u0275\u0275element"](1,"i",43),a["\u0275\u0275text"](2," Completed "),a["\u0275\u0275elementEnd"]())}function u(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",44),a["\u0275\u0275element"](1,"i",45),a["\u0275\u0275text"](2," Rejected "),a["\u0275\u0275elementEnd"]())}function p(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",46),a["\u0275\u0275element"](1,"i",47),a["\u0275\u0275text"](2," Active "),a["\u0275\u0275elementEnd"]())}function f(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",48),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" $",n.jobBudget,"/hr ")}}function b(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",48),a["\u0275\u0275text"](1),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]().$implicit;a["\u0275\u0275advance"](1),a["\u0275\u0275textInterpolate1"](" $",n.jobBudget," ")}}var h=function(){return["/freelancer/job-desc"]};function g(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",25),a["\u0275\u0275elementStart"](1,"div",26),a["\u0275\u0275elementStart"](2,"div",27),a["\u0275\u0275elementStart"](3,"div",28),a["\u0275\u0275elementStart"](4,"h3",29),a["\u0275\u0275text"](5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"p",30),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](8,d,3,0,"div",31),a["\u0275\u0275template"](9,m,3,0,"div",32),a["\u0275\u0275template"](10,u,3,0,"div",33),a["\u0275\u0275template"](11,p,3,0,"div",34),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](12,"div",35),a["\u0275\u0275elementStart"](13,"div",36),a["\u0275\u0275text"](14),a["\u0275\u0275pipe"](15,"date"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](16,f,2,1,"div",37),a["\u0275\u0275template"](17,b,2,1,"div",37),a["\u0275\u0275elementStart"](18,"div",38),a["\u0275\u0275elementStart"](19,"a",39),a["\u0275\u0275text"](20," View Job "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;a["\u0275\u0275advance"](5),a["\u0275\u0275textInterpolate"](n.jobTitle),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](n.jobDesc),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf","pending"==n.status),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf","completed"==n.status),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf","rejected"==n.status),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf","active"==n.status),a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"](" ",a["\u0275\u0275pipeBind2"](15,10,n.jobPosted,"MMMM d,y")," "),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("ngIf","pay_by_hour"==(null==n?null:n.jobBudgetType)),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngIf","fixed_price"==(null==n?null:n.jobBudgetType)),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("routerLink",a["\u0275\u0275pureFunction0"](13,h))}}var v,y,x=[{path:"",component:(v=function(){function e(t,n,i){_classCallCheck(this,e),this.state=t,this.jobsArr=n,this.http=i,this.jobsToDisplay=[],this.jobs=this.jobsArr.jobsArr}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.state.params.subscribe((function(t){e.filter=t.state,"active"==e.filter?(e.getActiveJobs(),e.currentHeading="active"):"completed"==e.filter?(e.getCompletedJobs(),e.currentHeading="completed"):"pending"==e.filter?(e.getPendingJobs(),e.currentHeading="pending"):(e.getAllJobs(),e.currentHeading="applied")}))}},{key:"getAllJobs",value:function(){var e=this;this.showFilter=!0,this.http.postToBackend("/users/freelancer/applied/jobs",{}).then((function(t){console.log(t),e.jobsToDisplay=t.data})).catch((function(e){console.log(e)}))}},{key:"getActiveJobs",value:function(){this.showFilter=!1,this.filterActiveJobs()}},{key:"getCompletedJobs",value:function(){this.showFilter=!1,this.filterCompletedJobs()}},{key:"getPendingJobs",value:function(){this.showFilter=!1,this.filterPendingJobs()}},{key:"filterAllJobs",value:function(){this.jobsToDisplay=[],this.currentHeading="applied",this.jobsToDisplay=this.jobs}},{key:"filterActiveJobs",value:function(){var e=this;this.jobsToDisplay=[],this.currentHeading="active",this.jobs.forEach((function(t){"active"==t.status&&e.jobsToDisplay.push(t)}))}},{key:"filterCompletedJobs",value:function(){var e=this;this.jobsToDisplay=[],this.currentHeading="completed",this.jobs.forEach((function(t){"completed"==t.status&&e.jobsToDisplay.push(t)}))}},{key:"filterPendingJobs",value:function(){var e=this;this.jobsToDisplay=[],this.currentHeading="pending",this.jobs.forEach((function(t){"pending"==t.status&&e.jobsToDisplay.push(t)}))}},{key:"filterRejectedJobs",value:function(){var e=this;this.jobsToDisplay=[],this.currentHeading="rejected",this.jobs.forEach((function(t){"rejected"==t.status&&e.jobsToDisplay.push(t)}))}}]),e}(),v.\u0275fac=function(e){return new(e||v)(a["\u0275\u0275directiveInject"](o.a),a["\u0275\u0275directiveInject"](s),a["\u0275\u0275directiveInject"](l.a))},v.\u0275cmp=a["\u0275\u0275defineComponent"]({type:v,selectors:[["app-freelancer-jobs"]],decls:18,vars:5,consts:[[1,"header","bg-blue-gradient","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],["class","col-lg-6 col-5 text-right dropdown",4,"ngIf"],[1,"container-fluid","mt--6"],[1,"row","justify-content-center"],[1,"col"],[1,"card"],[1,"card-header"],[1,"h2","mb-0"],[1,"card-body","p-0"],["class","list-group list-group-flush job-card",4,"ngFor","ngForOf"],[1,"col-lg-6","col-5","text-right","dropdown"],["href","#","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-sm","btn-neutral"],["aria-hidden","true",1,"fa","fa-filter"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"click"],[1,"icofont-list","text-primary"],["aria-hidden","true",1,"icofont-light-bulb","text-yellow"],[1,"icofont-check","text-success"],["aria-hidden","true",1,"icofont-clock-time","text-warning"],["aria-hidden","true",1,"icofont-trash","text-danger"],[1,"list-group","list-group-flush","job-card"],[1,"list-group-item","list-group-item-action","flex-column","align-items-start","py-4","px-4"],[1,"row"],[1,"col-md-10"],[1,"mb-1"],[1,"text-sm","mb-0"],["class","btn btn-sm btn-outline-warning mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-primary mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-danger mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-success mt-2",4,"ngIf"],[1,"col-md-2"],[1,"date"],["class","price",4,"ngIf"],[1,"text-right","mt-2"],[1,"btn","btn-sm","btn-primary","text-white",3,"routerLink"],[1,"btn","btn-sm","btn-outline-warning","mt-2"],["aria-hidden","true",1,"icofont-clock-time"],[1,"btn","btn-sm","btn-outline-primary","mt-2"],["aria-hidden","true",1,"icofont-checked"],[1,"btn","btn-sm","btn-outline-danger","mt-2"],["aria-hidden","true",1,"icofont-trash"],[1,"btn","btn-sm","btn-outline-success","mt-2"],["aria-hidden","true",1,"icofont-light-bulb"],[1,"price"]],template:function(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",0),a["\u0275\u0275elementStart"](1,"div",1),a["\u0275\u0275elementStart"](2,"div",2),a["\u0275\u0275elementStart"](3,"div",3),a["\u0275\u0275elementStart"](4,"div",4),a["\u0275\u0275elementStart"](5,"h6",5),a["\u0275\u0275text"](6,"My Jobs"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275template"](7,c,25,0,"div",6),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](8,"div",7),a["\u0275\u0275elementStart"](9,"div",8),a["\u0275\u0275elementStart"](10,"div",9),a["\u0275\u0275elementStart"](11,"div",10),a["\u0275\u0275elementStart"](12,"div",11),a["\u0275\u0275elementStart"](13,"h5",12),a["\u0275\u0275text"](14),a["\u0275\u0275pipe"](15,"titlecase"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](16,"div",13),a["\u0275\u0275template"](17,g,21,14,"div",14),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("ngIf",t.showFilter),a["\u0275\u0275advance"](7),a["\u0275\u0275textInterpolate1"]("",a["\u0275\u0275pipeBind1"](15,3,t.currentHeading)," Jobs"),a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("ngForOf",t.jobsToDisplay))},directives:[r.NgIf,r.NgForOf,o.g],pipes:[r.TitleCasePipe,r.DatePipe],styles:[".date[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-weight:700;font-size:.8rem;text-align:right}.date[_ngcontent-%COMP%]{color:#212529}.price[_ngcontent-%COMP%]{font-size:1.2rem;color:#2dce89;margin-top:2rem}.job-card[_ngcontent-%COMP%]{cursor:pointer}"]}),v)}],j=((y=function e(){_classCallCheck(this,e)}).\u0275mod=a["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[r.CommonModule,o.h.forChild(x)]]}),y)}}]);