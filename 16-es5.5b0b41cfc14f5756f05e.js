function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Rc7n:function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerJobsModule",(function(){return I}));var o,i=n("ofXK"),r=n("PSD3"),a=n.n(r),l=n("fXoL"),s=n("tyNb"),d=((o=function e(){_classCallCheck(this,e),this.jobsArr=[{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"posted",price:60,proposals:12,shortlisted:2,hire:0},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"30 March, 2020",status:"completed",price:120,proposals:122,shortlisted:15,hire:2},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"active",price:60,proposals:45,shortlisted:5,hire:1},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"active",price:500,proposals:78,shortlisted:25,hire:2},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"posted",price:500,proposals:78,shortlisted:25,hire:2},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"12 March, 2020",status:"active",price:120,proposals:122,shortlisted:15,hire:2},{title:"Lorem ipsum dolor sit amet",desc:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae neque amet beatae accusantium, quae eum nostrum error tempora iste rerum vero quidem, iusto ratione nulla!",date:"25 March, 2020",status:"rejected",price:120,proposals:122,shortlisted:15,hire:2}]}).\u0275fac=function(e){return new(e||o)},o.\u0275prov=l["\u0275\u0275defineInjectable"]({token:o,factory:o.\u0275fac,providedIn:"root"}),o),c=n("N+K7"),m=n("dz5x");function u(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"div",16),l["\u0275\u0275elementStart"](1,"a",17),l["\u0275\u0275element"](2,"i",18),l["\u0275\u0275text"](3," Filters"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](4,"div",19),l["\u0275\u0275elementStart"](5,"a",20),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().filterAllJobs()})),l["\u0275\u0275element"](6,"i",21),l["\u0275\u0275elementStart"](7,"span"),l["\u0275\u0275text"](8,"Posted Jobs"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](9,"a",20),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().filterActiveJobs()})),l["\u0275\u0275element"](10,"i",22),l["\u0275\u0275elementStart"](11,"span"),l["\u0275\u0275text"](12,"Active Jobs"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](13,"a",20),l["\u0275\u0275listener"]("click",(function(){return l["\u0275\u0275restoreView"](n),l["\u0275\u0275nextContext"]().filterDeletedJobs()})),l["\u0275\u0275element"](14,"i",23),l["\u0275\u0275elementStart"](15,"span"),l["\u0275\u0275text"](16,"Deleted Jobs"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()}}function p(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",49),l["\u0275\u0275element"](1,"i",50),l["\u0275\u0275text"](2," Posted "),l["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",51),l["\u0275\u0275element"](1,"i",52),l["\u0275\u0275text"](2," Completed "),l["\u0275\u0275elementEnd"]())}function f(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",53),l["\u0275\u0275element"](1,"i",54),l["\u0275\u0275text"](2," Deleted "),l["\u0275\u0275elementEnd"]())}function h(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",55),l["\u0275\u0275element"](1,"i",56),l["\u0275\u0275text"](2," Active "),l["\u0275\u0275elementEnd"]())}function v(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",57),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" $",n.jobBudget," ")}}function g(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",57),l["\u0275\u0275text"](1),l["\u0275\u0275elementEnd"]()),2&e){var n=l["\u0275\u0275nextContext"]().$implicit;l["\u0275\u0275advance"](1),l["\u0275\u0275textInterpolate1"](" $",n.jobBudget,"/hr ")}}function x(e,t){if(1&e){var n=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"a",58),l["\u0275\u0275listener"]("click",(function(){l["\u0275\u0275restoreView"](n);var e=l["\u0275\u0275nextContext"]().$implicit;return l["\u0275\u0275nextContext"]().deleteJob(e.jobId,e.jobStatus)})),l["\u0275\u0275text"](1," Delete "),l["\u0275\u0275elementEnd"]()}}var y=function(e){return["/employer/job-proposals",e]},j=function(e){return["/employer/view-job",e]};function S(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"div",24),l["\u0275\u0275elementStart"](1,"div",25),l["\u0275\u0275elementStart"](2,"div",26),l["\u0275\u0275elementStart"](3,"div",27),l["\u0275\u0275elementStart"](4,"h3",28),l["\u0275\u0275text"](5),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"div",29),l["\u0275\u0275elementStart"](7,"span",30),l["\u0275\u0275text"](8,"Posted on: "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](9),l["\u0275\u0275pipe"](10,"date"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](11,"div",31),l["\u0275\u0275elementStart"](12,"div",32),l["\u0275\u0275elementStart"](13,"div",26),l["\u0275\u0275elementStart"](14,"div",33),l["\u0275\u0275elementStart"](15,"div",34),l["\u0275\u0275elementStart"](16,"div",35),l["\u0275\u0275text"](17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](18," Proposals "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](19,"div",33),l["\u0275\u0275elementStart"](20,"div",36),l["\u0275\u0275elementStart"](21,"div",35),l["\u0275\u0275text"](22),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](23," Shortlisted "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](24,"div",33),l["\u0275\u0275elementStart"](25,"div",37),l["\u0275\u0275elementStart"](26,"div",35),l["\u0275\u0275text"](27),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](28," Hire "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](29,"div",38),l["\u0275\u0275elementStart"](30,"div",39),l["\u0275\u0275template"](31,p,3,0,"div",40),l["\u0275\u0275template"](32,b,3,0,"div",41),l["\u0275\u0275template"](33,f,3,0,"div",42),l["\u0275\u0275template"](34,h,3,0,"div",43),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](35,v,2,1,"div",44),l["\u0275\u0275template"](36,g,2,1,"div",44),l["\u0275\u0275elementStart"](37,"div",45),l["\u0275\u0275elementStart"](38,"a",46),l["\u0275\u0275text"](39," View All Proposals "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](40,"div",45),l["\u0275\u0275elementStart"](41,"a",47),l["\u0275\u0275text"](42," View "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](43,x,2,0,"a",48),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate"](n.jobTitle),l["\u0275\u0275advance"](4),l["\u0275\u0275textInterpolate1"](" ",l["\u0275\u0275pipeBind2"](10,14,n.jobDate,"MMMM d,y")," "),l["\u0275\u0275advance"](8),l["\u0275\u0275textInterpolate1"](" ",n.totalFreelancerApplied," "),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate1"](" ",n.totalFreelancerShortlisted," "),l["\u0275\u0275advance"](5),l["\u0275\u0275textInterpolate1"](" ",n.totalFreelancerHired," "),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("ngIf","posted"==n.status),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","completed"==n.status),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","rejected"==n.status),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","active"==n.status),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","fixed_price"==(null==n?null:n.jobBudgetType)),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf","pay_by_hour"==(null==n?null:n.jobBudgetType)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction1"](17,y,null==n?null:n.jobId)),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("routerLink",l["\u0275\u0275pureFunction1"](19,j,null==n?null:n.jobId)),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("ngIf",3!=n.jobStatus)}}function E(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",13),l["\u0275\u0275elementStart"](1,"div",59),l["\u0275\u0275elementStart"](2,"p",60),l["\u0275\u0275text"](3," No Jobs To Display "),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]())}var w,k,C=[{path:"",component:(w=function(){function e(t,n,o,i){_classCallCheck(this,e),this.state=t,this.jobsArr=n,this.http=o,this.share=i,this.jobsToDisplay=[],this.jobs=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.state.params.subscribe((function(t){e.filter=t.state,"working"==e.filter?(e.getWorkingJobs(),e.currentHeading="working"):"completed"==e.filter?(e.getCompletedJobs(),e.currentHeading="completed"):(e.getAllJobs(),e.currentHeading="posted")}))}},{key:"getAllJobs",value:function(){var e=this;this.showFilter=!0,this.http.postToBackend("/users/employer/jobs",{userName:this.share.user.username}).then((function(t){console.log(t),e.jobsToDisplay=t.data,e.jobs=t.data})).catch((function(e){console.log(e)}))}},{key:"getActiveJobs",value:function(){this.showFilter=!1,this.getAllJobs(),this.filterActiveJobs()}},{key:"filterAllJobs",value:function(){this.jobsToDisplay=[],this.currentHeading="posted",this.jobsToDisplay=this.jobs}},{key:"filterActiveJobs",value:function(){var e=this;this.jobsToDisplay=[],this.currentHeading="active",this.jobs.forEach((function(t){2==t.jobStatus&&e.jobsToDisplay.push(t)}))}},{key:"getWorkingJobs",value:function(){var e=this;this.http.postToBackend("/users/employer/jobs",{userName:this.share.user.username}).then((function(t){console.log(t),e.jobs=t.data,e.jobsToDisplay=[],e.jobs.forEach((function(t){3==t.jobStatus&&e.jobsToDisplay.push(t)}))})).catch((function(e){console.log(e)})),console.log(this.jobsToDisplay,"-----")}},{key:"getCompletedJobs",value:function(){var e=this;this.http.postToBackend("/users/employer/jobs",{userName:this.share.user.username}).then((function(t){console.log(t),e.jobs=t.data,e.jobsToDisplay=[],e.currentHeading="completed",e.jobs.forEach((function(t){4==t.jobStatus&&e.jobsToDisplay.push(t)}))})).catch((function(e){console.log(e)}))}},{key:"filterDeletedJobs",value:function(){var e=this;this.jobsToDisplay=[],this.currentHeading="deleted",this.jobs.forEach((function(t){5==t.jobStatus&&e.jobsToDisplay.push(t)}))}},{key:"deleteJob",value:function(e,t){var n=this;a.a.fire({title:"Delete!",text:"Are you sure want to delete this job?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(o){o.value&&n.http.postToBackend("/jobs/delete",{jobId:e,currentJobStatus:t,userName:n.share.user.username}).then((function(e){console.log(e),7e3==e.statusCode?a.a.fire("Delete","Job Deleted Successfully!","success"):a.a.fire("Failed",e.msg,"error")}))}))}}]),e}(),w.\u0275fac=function(e){return new(e||w)(l["\u0275\u0275directiveInject"](s.a),l["\u0275\u0275directiveInject"](d),l["\u0275\u0275directiveInject"](c.a),l["\u0275\u0275directiveInject"](m.a))},w.\u0275cmp=l["\u0275\u0275defineComponent"]({type:w,selectors:[["app-employer-jobs"]],decls:19,vars:6,consts:[[1,"header","bg-black-gradient","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],["class","col-lg-6 col-5 text-right dropdown",4,"ngIf"],[1,"container-fluid","mt--6"],[1,"row","justify-content-center"],[1,"col"],[1,"card"],[1,"card-header"],[1,"h2","mb-0"],[1,"card-body","p-0"],["class","list-group list-group-flush job-card",4,"ngFor","ngForOf"],["class","card-body p-0",4,"ngIf"],[1,"col-lg-6","col-5","text-right","dropdown"],["href","#","role","button","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"btn","btn-sm","btn-neutral"],["aria-hidden","true",1,"fa","fa-filter"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"click"],[1,"icofont-list","text-primary"],["aria-hidden","true",1,"icofont-light-bulb","text-yellow"],["aria-hidden","true",1,"icofont-trash","text-danger"],[1,"list-group","list-group-flush","job-card"],[1,"list-group-item","list-group-item-action","flex-column","align-items-start","py-4","px-4"],[1,"row"],[1,"col-md-10"],[1,"mb-1"],[1,"date"],[1,"text-muted"],[1,"row","my-3"],[1,"col-md-6"],[1,"col-4"],[1,"job-data","text-default"],[1,"number"],[1,"job-data","text-warning"],[1,"job-data","text-success"],[1,"col-md-2"],[1,"status-btns"],["class","btn btn-sm btn-outline-warning mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-primary mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-danger mt-2",4,"ngIf"],["class","btn btn-sm btn-outline-success mt-2",4,"ngIf"],["class","price",4,"ngIf"],[1,"text-right","mt-2"],[1,"btn","btn-sm","btn-primary","text-white",3,"routerLink"],[1,"btn","btn-sm","btn-info","text-white",3,"routerLink"],["class","btn btn-sm btn-danger text-white",3,"click",4,"ngIf"],[1,"btn","btn-sm","btn-outline-warning","mt-2"],["aria-hidden","true",1,"icofont-clock-time"],[1,"btn","btn-sm","btn-outline-primary","mt-2"],["aria-hidden","true",1,"icofont-checked"],[1,"btn","btn-sm","btn-outline-danger","mt-2"],["aria-hidden","true",1,"icofont-trash"],[1,"btn","btn-sm","btn-outline-success","mt-2"],["aria-hidden","true",1,"icofont-light-bulb"],[1,"price"],[1,"btn","btn-sm","btn-danger","text-white",3,"click"],[1,"no-data-card"],[1,"text"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"div",0),l["\u0275\u0275elementStart"](1,"div",1),l["\u0275\u0275elementStart"](2,"div",2),l["\u0275\u0275elementStart"](3,"div",3),l["\u0275\u0275elementStart"](4,"div",4),l["\u0275\u0275elementStart"](5,"h6",5),l["\u0275\u0275text"](6,"My Jobs"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275template"](7,u,17,0,"div",6),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](8,"div",7),l["\u0275\u0275elementStart"](9,"div",8),l["\u0275\u0275elementStart"](10,"div",9),l["\u0275\u0275elementStart"](11,"div",10),l["\u0275\u0275elementStart"](12,"div",11),l["\u0275\u0275elementStart"](13,"h5",12),l["\u0275\u0275text"](14),l["\u0275\u0275pipe"](15,"titlecase"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](16,"div",13),l["\u0275\u0275template"](17,S,44,21,"div",14),l["\u0275\u0275template"](18,E,4,0,"div",15),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275advance"](7),l["\u0275\u0275property"]("ngIf",t.showFilter),l["\u0275\u0275advance"](7),l["\u0275\u0275textInterpolate1"]("",l["\u0275\u0275pipeBind1"](15,4,t.currentHeading)," Jobs"),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("ngForOf",t.jobsToDisplay),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("ngIf",0==t.jobsToDisplay.length))},directives:[i.NgIf,i.NgForOf,s.g],pipes:[i.TitleCasePipe,i.DatePipe],styles:[".date[_ngcontent-%COMP%], .price[_ngcontent-%COMP%]{font-weight:700;font-size:.8rem;text-align:right}.date[_ngcontent-%COMP%]{color:#212529}.price[_ngcontent-%COMP%]{font-size:1.2rem;color:#2dce89;margin-top:2rem}.job-card[_ngcontent-%COMP%]{cursor:pointer}.date[_ngcontent-%COMP%]{text-align:left}.job-data[_ngcontent-%COMP%]{font-weight:600;font-size:.8rem}.job-data[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-weight:700;font-size:1.5rem;color:#32325d}.status-btns[_ngcontent-%COMP%]{text-align:right}"]}),w)}],I=((k=function e(){_classCallCheck(this,e)}).\u0275mod=l["\u0275\u0275defineNgModule"]({type:k}),k.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(e){return new(e||k)},imports:[[i.CommonModule,s.h.forChild(C)]]}),k)}}]);