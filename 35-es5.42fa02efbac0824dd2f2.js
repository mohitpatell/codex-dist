function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{IGtO:function(e,t,n){"use strict";n.r(t),n.d(t,"PlaceBidFormModule",(function(){return P}));var o=n("ofXK"),r=n("3Pt+"),l=n("PSD3"),a=n.n(l),i=n("fXoL"),d=n("kufG"),m=n("tyNb"),c=n("N+K7"),s=n("dz5x");function u(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",48),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("$",null==n.job?null:n.job.jobBudget,"/hr")}}function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"span",48),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("$",null==n.job?null:n.job.jobBudget,"")}}function f(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275text"](1," Please enter the your proposal description! "),i["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275text"](1," Description should have minimum 50 characters! "),i["\u0275\u0275elementEnd"]())}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",49),i["\u0275\u0275template"](1,f,2,0,"p",50),i["\u0275\u0275template"](2,b,2,0,"p",50),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.form.get("proposalDesc").errors.required),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",n.form.get("proposalDesc").errors.minlength)}}function h(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",49),i["\u0275\u0275elementStart"](1,"p"),i["\u0275\u0275text"](2," Please enter bid amount! "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}function v(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",49),i["\u0275\u0275elementStart"](1,"p"),i["\u0275\u0275text"](2," Please enter the completion time for the project! "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]())}var x=function(){return{standalone:!0}};function S(e,t){if(1&e){var n=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",17),i["\u0275\u0275elementStart"](1,"label",53),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"textarea",54),i["\u0275\u0275listener"]("ngModelChange",(function(e){return i["\u0275\u0275restoreView"](n),t.$implicit.ans=e})),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){var o=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("for",o.id),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](o.que),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngModel",o.ans)("ngModelOptions",i["\u0275\u0275pureFunction0"](5,x))("id",o.que)}}function E(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",14),i["\u0275\u0275elementStart"](1,"h4",15),i["\u0275\u0275text"](2," Screening Questions "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"h6",51),i["\u0275\u0275text"](4," The questions below are posted by employer for selection process. Kindly answer the following questions to place your bid "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](5,S,4,6,"div",52),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngForOf",n.screeningQuestions)}}var j,y,C=function(e){return["/job-desc",e]},w=[{path:"",component:(j=function(){function e(t,n,o,l,a){_classCallCheck(this,e),this.questions=t,this.route=n,this.http=o,this.share=l,this.router=a,this.form=new r.e({jobId:new r.c(null),freelancerAccount:new r.c(null),proposalDesc:new r.c(null,{validators:[r.u.required,r.u.minLength(50)]}),offeredPrice:new r.c(null,{validators:[r.u.required]}),completeTime:new r.c("",{validators:[r.u.required]}),questionAnswered:new r.c([],{validators:[r.u.required]})}),this.screeningQuestions=[],this.submitted=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.jobId=t.id,e.http.postToBackend("/jobs/bid/screening-que",{jobId:t.id,freelancerAccount:e.share.user.username}).then((function(t){console.log(t),7e3===t.statusCode?(e.job=t.data,e.job.jobScreeningQuestions.forEach((function(t){e.screeningQuestions.push({que:t,ans:""})}))):e.router.navigate(["/job-desc",e.jobId])})).catch((function(t){console.log(t),e.router.navigate(["/job-desc",e.jobId])}))}))}},{key:"placeBid",value:function(){var e=this;this.submitted=!0,this.form.patchValue({jobId:this.jobId,freelancerAccount:this.share.user.username,questionAnswered:this.screeningQuestions}),console.log(this.form.value),this.form.invalid||a.a.fire({title:"Confirmation for your bid!",text:"Are you sure you want to place this bid.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(t){t.value&&e.http.postToBackend("/jobs/add/freelancer/applied",e.form.value).then((function(t){console.log(t),a.a.fire("Bidding Successfull!","Your bidding for the job is successfull","success"),e.form.reset(),e.router.navigate(["/find-job"])})).catch((function(e){console.log(e),a.a.fire("Bidding Failed!","Your bidding for the job failed. Please try after some time.","error")}))}))}}]),e}(),j.\u0275fac=function(e){return new(e||j)(i["\u0275\u0275directiveInject"](d.a),i["\u0275\u0275directiveInject"](m.a),i["\u0275\u0275directiveInject"](c.a),i["\u0275\u0275directiveInject"](s.a),i["\u0275\u0275directiveInject"](m.d))},j.\u0275cmp=i["\u0275\u0275defineComponent"]({type:j,selectors:[["app-place-bid-form"]],decls:87,vars:11,consts:[["id","page-banner",1,"banner-1","top-banner"],[1,"container"],[1,"row","justify-content-center"],[1,"col-12"],[1,"job-container"],[1,"job-card"],[1,"job-heading"],[1,"row"],[1,"col-lg-8"],[1,"job-section"],[1,"job-title"],["class","text-default",4,"ngIf"],[1,"place-bid-form"],[3,"formGroup"],[1,"form-segment"],[1,"form-title"],[1,"col-md-12"],[1,"form-group"],["formControlName","proposalDesc","type","text","placeholder","Enter the description of your bid","required","",1,"form-control"],[1,"field-info"],["class","validation",4,"ngIf"],[1,"col-md-6"],["for","bid-amount"],["formControlName","offeredPrice","id","bid-amount","type","number","placeholder","Enter the amount of your bid",1,"form-control"],["for","days"],["formControlName","completeTime","id","days",1,"form-control"],["value",""],["value","lessthanweek"],["value","lessthanmonth"],["value","1to3months"],["value","3to6months"],["value","morethan6months"],["class","form-segment",4,"ngIf"],[1,"text-right","mt-2"],["type","submit",1,"btn","btn-hero",3,"click"],[1,"col-lg-4"],[1,"place-bid"],[1,"btn","btn-hero",3,"routerLink"],["id","confirmModal",1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body"],[1,"modal-footer"],["type","button",1,"btn","btn-hero"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],[1,"text-default"],[1,"validation"],[4,"ngIf"],[1,"text-muted"],["class","form-group",4,"ngFor","ngForOf"],[3,"for"],["type","text","placeholder","Type answer here",1,"form-control",3,"ngModel","ngModelOptions","id","ngModelChange"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"div",5),i["\u0275\u0275elementStart"](6,"div",6),i["\u0275\u0275elementStart"](7,"h2"),i["\u0275\u0275text"](8," Place bid for the job "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](9,"div",7),i["\u0275\u0275elementStart"](10,"div",8),i["\u0275\u0275elementStart"](11,"div",9),i["\u0275\u0275elementStart"](12,"h4",10),i["\u0275\u0275text"](13," Job Title: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"h5"),i["\u0275\u0275text"](15),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](16,"hr"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"div",9),i["\u0275\u0275elementStart"](18,"h5"),i["\u0275\u0275text"](19," Price: "),i["\u0275\u0275template"](20,u,2,1,"span",11),i["\u0275\u0275template"](21,p,2,1,"span",11),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](22,"hr"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](23,"div",12),i["\u0275\u0275elementStart"](24,"form",13),i["\u0275\u0275elementStart"](25,"div",14),i["\u0275\u0275elementStart"](26,"h4",15),i["\u0275\u0275text"](27," Describe your Bid "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"div",7),i["\u0275\u0275elementStart"](29,"div",16),i["\u0275\u0275elementStart"](30,"div",17),i["\u0275\u0275element"](31,"textarea",18),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](32,"div",19),i["\u0275\u0275text"](33," 0/1000 characters (minimum 50 required) "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](34,g,3,2,"div",20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"div",14),i["\u0275\u0275elementStart"](36,"h4",15),i["\u0275\u0275text"](37," Enter your proposals: "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](38,"div",7),i["\u0275\u0275elementStart"](39,"div",21),i["\u0275\u0275elementStart"](40,"div",17),i["\u0275\u0275elementStart"](41,"label",22),i["\u0275\u0275text"](42,"Bid Amount"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](43,"input",23),i["\u0275\u0275template"](44,h,3,0,"div",20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](45,"div",21),i["\u0275\u0275elementStart"](46,"div",17),i["\u0275\u0275elementStart"](47,"label",24),i["\u0275\u0275text"](48,"How long will this project take"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](49,"select",25),i["\u0275\u0275elementStart"](50,"option",26),i["\u0275\u0275text"](51,"Select the duration"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](52,"option",27),i["\u0275\u0275text"](53,"Less than a week"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](54,"option",28),i["\u0275\u0275text"](55,"Less than a month"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](56,"option",29),i["\u0275\u0275text"](57,"1 to 3 months"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](58,"option",30),i["\u0275\u0275text"](59,"3 to 6 months"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](60,"option",31),i["\u0275\u0275text"](61,"More than 6 months"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](62,v,3,0,"div",20),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](63,E,6,1,"div",32),i["\u0275\u0275elementStart"](64,"div",33),i["\u0275\u0275elementStart"](65,"button",34),i["\u0275\u0275listener"]("click",(function(){return t.placeBid()})),i["\u0275\u0275text"](66," Submit Bid "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](67,"div",35),i["\u0275\u0275elementStart"](68,"div",36),i["\u0275\u0275elementStart"](69,"a",37),i["\u0275\u0275text"](70," View Job Description "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](71,"div",38),i["\u0275\u0275elementStart"](72,"div",39),i["\u0275\u0275elementStart"](73,"div",40),i["\u0275\u0275elementStart"](74,"div",41),i["\u0275\u0275elementStart"](75,"h4",42),i["\u0275\u0275text"](76,"Confirmation for your bid"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](77,"button",43),i["\u0275\u0275text"](78,"\xd7"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](79,"div",44),i["\u0275\u0275elementStart"](80,"div",14),i["\u0275\u0275text"](81," Are you sure you want to place this bid. "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](82,"div",45),i["\u0275\u0275elementStart"](83,"button",46),i["\u0275\u0275text"](84,"Yes"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](85,"button",47),i["\u0275\u0275text"](86,"No"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](15),i["\u0275\u0275textInterpolate1"](" ",null==t.job?null:t.job.jobTitle," "),i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngIf","pay by hour"==(null==t.job?null:t.job.jobBudgetType)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf","fixed price"==(null==t.job?null:t.job.jobBudgetType)),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("formGroup",t.form),i["\u0275\u0275advance"](10),i["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("proposalDesc").invalid),i["\u0275\u0275advance"](10),i["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("offeredPrice").invalid),i["\u0275\u0275advance"](18),i["\u0275\u0275property"]("ngIf",t.submitted&&t.form.get("completeTime").invalid),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",t.screeningQuestions.length),i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction1"](9,C,null==t.job?null:t.job.jobId)))},directives:[o.NgIf,r.w,r.l,r.f,r.a,r.k,r.d,r.s,r.p,r.t,r.o,r.v,m.g,o.NgForOf,r.n],styles:[".banner-1[_ngcontent-%COMP%]{background-size:30%;background-repeat:round}.top-banner[_ngcontent-%COMP%]{min-height:50vh}.job-container[_ngcontent-%COMP%]{margin-top:20vh}.job-card[_ngcontent-%COMP%]{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);border:1px solid #e4e4e4;background-color:#fff;border-radius:8px;padding:2rem 3rem}.job-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:.8rem}.job-heading[_ngcontent-%COMP%]{margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #ccc}.job-icon[_ngcontent-%COMP%]{display:flex}.job-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:#5e72e4}.job-icon[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%]{margin-left:.5rem}.job-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;color:#363636;font-weight:700}.tag[_ngcontent-%COMP%]{background-color:#f7f7f7;border-radius:4px;padding:4px;font-size:.85rem;color:#5e72e4;font-weight:700;margin-top:.5rem}.place-bid[_ngcontent-%COMP%]{text-align:right}.about-employer[_ngcontent-%COMP%]{border:1px solid #ccc;padding:1rem;border-radius:3px;margin-top:2rem}.about-employer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding-bottom:.5rem;border-bottom:1px solid #ccc}.field-info[_ngcontent-%COMP%]{font-size:.8rem;text-align:right;margin:4px 0}.form-segment[_ngcontent-%COMP%]{border-bottom:1px solid #e2e2e2;padding:1rem 0}"]}),j)}],P=((y=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[o.CommonModule,r.g,r.r,m.h.forChild(w)]]}),y)}}]);