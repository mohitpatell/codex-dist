function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{s646:function(e,t,n){"use strict";n.r(t),n.d(t,"ProposalPageModule",(function(){return f}));var o=n("ofXK"),r=n("fXoL"),l=n("kufG"),a=n("tyNb"),i=n("N+K7");function d(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"div"),r["\u0275\u0275elementStart"](1,"p",54),r["\u0275\u0275text"](2),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"p",55),r["\u0275\u0275text"](4),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,o=t.index;r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate2"]("Q",o+1,". ",n.que," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",n.ans," ")}}var m,c,s=function(){return["/employer/view-freelancer"]},p=[{path:"",component:(m=function(){function e(t,n,o,r){_classCallCheck(this,e),this.questions=t,this.route=n,this.http=o,this._location=r,this.screeningQuestions=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){console.log(t),e.http.postToBackend("/jobs/detail/proposal",{jobId:t.id,account_name:t.account}).then((function(t){console.log(t),e.info=t.data,e.screeningQuestions=t.data.question_answered})).catch((function(e){console.log(e)}))}))}},{key:"backClicked",value:function(){this._location.back()}}]),e}(),m.\u0275fac=function(e){return new(e||m)(r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](o.Location))},m.\u0275cmp=r["\u0275\u0275defineComponent"]({type:m,selectors:[["app-proposal-page"]],decls:103,vars:14,consts:[[1,"header","pb-6","d-flex","align-items-center"],[1,"mask"],[1,"container-fluid","d-flex","align-items-center"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"display-2","text-white"],[1,"btn","btn-secondary",3,"click"],[1,"icofont-long-arrow-left"],[1,"container-fluid","mt--6"],[1,"col-xl-4","order-xl-2"],[1,"card","border-0","card-profile"],["src","../../assets/img/bg/pattern-bg.jpg","alt","Image placeholder",1,"card-img-top","cover-photo"],[1,"row","justify-content-center"],[1,"col-lg-3","order-lg-2"],[1,"card-profile-image"],["href","#"],["src","../../assets/img/theme/team-4.jpg",1,"rounded-circle"],[1,"card-header","text-center","border-0","pt-8","pt-md-4","pb-0","pb-md-4"],[1,"d-flex","justify-content-center"],[1,"btn","btn-sm","btn-dark",3,"routerLink"],[1,"icofont-eye-alt"],[1,"parent-wrapper"],["id","basic-content",1,"card-body","pt-0"],[1,"text-center"],[1,"h3"],[1,"h5","font-weight-300"],[1,"ni","location_pin","mr-2"],[1,"h5","mt-4"],[1,"ni","business_briefcase-24","mr-2"],[1,"col-6"],[1,"job-data","text-dark"],[1,"number"],[1,"icofont-star","text-yellow"],[1,"icofont-tick-mark","text-primary"],[1,"icofont-money-bag","text-success"],[1,"col-xl-8","order-xl-1"],[1,"card"],[1,"card-header"],[1,"row","align-items-center"],[1,"col-12","header-flex"],[1,"mb-0"],[1,"action-btn"],[1,"btn","btn-dark","text-white"],[1,"icofont-listing-box"],[1,"btn","btn-default","text-white","ml-2"],[1,"icofont-tick-boxed"],[1,"card-body"],[1,"col-lg-12"],[1,"job-section"],[1,"text-default"],["href","",1,"text-default"],[1,"mt-2","text-justify"],[1,"mb-3"],[4,"ngFor","ngForOf"],[1,"question"],[1,"answer"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275element"](1,"span",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"h1",5),r["\u0275\u0275text"](6,"Proposal Page"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"a",6),r["\u0275\u0275listener"]("click",(function(){return t.backClicked()})),r["\u0275\u0275element"](8,"i",7),r["\u0275\u0275text"](9," Back to All Proposals"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](10,"div",8),r["\u0275\u0275elementStart"](11,"div",3),r["\u0275\u0275elementStart"](12,"div",9),r["\u0275\u0275elementStart"](13,"div",10),r["\u0275\u0275element"](14,"img",11),r["\u0275\u0275elementStart"](15,"div",12),r["\u0275\u0275elementStart"](16,"div",13),r["\u0275\u0275elementStart"](17,"div",14),r["\u0275\u0275elementStart"](18,"a",15),r["\u0275\u0275element"](19,"img",16),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](20,"div",17),r["\u0275\u0275elementStart"](21,"div",18),r["\u0275\u0275elementStart"](22,"button",19),r["\u0275\u0275element"](23,"i",20),r["\u0275\u0275text"](24," View Freelancer"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](25,"div",21),r["\u0275\u0275elementStart"](26,"div",22),r["\u0275\u0275elementStart"](27,"div",23),r["\u0275\u0275elementStart"](28,"h5",24),r["\u0275\u0275text"](29),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](30,"h6"),r["\u0275\u0275text"](31),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](32,"div",25),r["\u0275\u0275element"](33,"i",26),r["\u0275\u0275text"](34),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](35,"div",27),r["\u0275\u0275element"](36,"i",28),r["\u0275\u0275text"](37,"Frontend Developer "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](38,"div",3),r["\u0275\u0275elementStart"](39,"div",29),r["\u0275\u0275elementStart"](40,"div",30),r["\u0275\u0275elementStart"](41,"div",31),r["\u0275\u0275element"](42,"i",32),r["\u0275\u0275text"](43),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](44," Rating "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](45,"div",29),r["\u0275\u0275elementStart"](46,"div",30),r["\u0275\u0275elementStart"](47,"div",31),r["\u0275\u0275text"](48),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](49," per hour "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](50,"div",29),r["\u0275\u0275elementStart"](51,"div",30),r["\u0275\u0275elementStart"](52,"div",31),r["\u0275\u0275element"](53,"i",33),r["\u0275\u0275text"](54),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](55," Jobs Completed "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](56,"div",29),r["\u0275\u0275elementStart"](57,"div",30),r["\u0275\u0275elementStart"](58,"div",31),r["\u0275\u0275element"](59,"i",34),r["\u0275\u0275text"](60),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](61," Earned "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](62,"div",35),r["\u0275\u0275elementStart"](63,"div",36),r["\u0275\u0275elementStart"](64,"div",37),r["\u0275\u0275elementStart"](65,"div",38),r["\u0275\u0275elementStart"](66,"div",39),r["\u0275\u0275elementStart"](67,"div"),r["\u0275\u0275elementStart"](68,"h5"),r["\u0275\u0275text"](69,"Proposal By:"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](70,"h2",40),r["\u0275\u0275text"](71),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](72,"div",41),r["\u0275\u0275elementStart"](73,"a",42),r["\u0275\u0275element"](74,"i",43),r["\u0275\u0275text"](75," Shortlist "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](76,"a",44),r["\u0275\u0275element"](77,"i",45),r["\u0275\u0275text"](78," Hire "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](79,"div",46),r["\u0275\u0275elementStart"](80,"div",3),r["\u0275\u0275elementStart"](81,"div",47),r["\u0275\u0275elementStart"](82,"div",48),r["\u0275\u0275elementStart"](83,"h4"),r["\u0275\u0275text"](84," Can complete project in: "),r["\u0275\u0275elementStart"](85,"span",49),r["\u0275\u0275text"](86),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](87,"h4"),r["\u0275\u0275text"](88," Offered Price: "),r["\u0275\u0275elementStart"](89,"a",50),r["\u0275\u0275text"](90),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](91,"hr"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](92,"div",48),r["\u0275\u0275elementStart"](93,"h3"),r["\u0275\u0275text"](94," Propsal Description: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](95,"p",51),r["\u0275\u0275text"](96),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](97,"hr"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](98,"div",48),r["\u0275\u0275elementStart"](99,"h3",52),r["\u0275\u0275text"](100," Screening Questions Responses: "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275template"](101,d,5,3,"div",53),r["\u0275\u0275element"](102,"hr"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](22),r["\u0275\u0275property"]("routerLink",r["\u0275\u0275pureFunction0"](13,s)),r["\u0275\u0275advance"](7),r["\u0275\u0275textInterpolate1"](" ",null==t.info?null:t.info.full_name," "),r["\u0275\u0275advance"](2),r["\u0275\u0275textInterpolate1"](" ",null==t.info?null:t.info.email," "),r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate1"]("",null==t.info?null:t.info.address," "),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate1"](" ",null==t.info?null:t.info.rating," "),r["\u0275\u0275advance"](5),r["\u0275\u0275textInterpolate1"](" $",null==t.info?null:t.info.hourly_rate," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",null==t.info?null:t.info.total_hired_job," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" $",null==t.info?null:t.info.total_earned," "),r["\u0275\u0275advance"](11),r["\u0275\u0275textInterpolate1"](" ",null==t.info?null:t.info.full_name,""),r["\u0275\u0275advance"](15),r["\u0275\u0275textInterpolate"](null==t.info?null:t.info.complete_time),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate1"](" $",null==t.info?null:t.info.offered_price," "),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate1"](" ",null==t.info?null:t.info.proposal_desc," "),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("ngForOf",t.screeningQuestions))},directives:[a.e,o.NgForOf],styles:[".banner-1[_ngcontent-%COMP%]{background-size:30%;background-repeat:round}.top-banner[_ngcontent-%COMP%]{min-height:50vh}.job-container[_ngcontent-%COMP%]{margin-top:20vh}.job-card[_ngcontent-%COMP%]{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);border:1px solid #e4e4e4;background-color:#fff;border-radius:8px;padding:2rem 3rem}.job-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{margin-bottom:.8rem}.job-heading[_ngcontent-%COMP%]{margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid #ccc}.job-icon[_ngcontent-%COMP%]{display:flex}.job-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:#5e72e4}.job-icon[_ngcontent-%COMP%]   .icon-text[_ngcontent-%COMP%]{margin-left:.5rem}.job-icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem;color:#363636;font-weight:700}.tag[_ngcontent-%COMP%]{background-color:#f7f7f7;border-radius:4px;padding:4px;font-size:.85rem;color:#5e72e4;font-weight:700;margin-top:.5rem}.place-bid[_ngcontent-%COMP%]{text-align:right}.about-employer[_ngcontent-%COMP%]{border:1px solid #ccc;padding:1rem;border-radius:3px;margin-top:2rem}.about-employer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:1.5rem;padding-bottom:.5rem;border-bottom:1px solid #ccc}.header[_ngcontent-%COMP%]{min-height:250px;background-image:linear-gradient(135deg,rgba(17,17,17,.904),rgba(17,17,17,.842)),url(/assets/img/banner/pattern-3.png);background-size:50%;background-repeat:round;background-position:100%}.answer[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]{font-size:.9rem}.question[_ngcontent-%COMP%]{color:#222;margin-bottom:.2rem;font-weight:700}.card-img-top[_ngcontent-%COMP%]{height:200px;-o-object-fit:cover;object-fit:cover}.job-data[_ngcontent-%COMP%]{font-weight:600;font-size:.8rem;margin-bottom:.5rem}.job-data[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{font-weight:700;font-size:1.2rem;color:#32325d}.header-flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}@media (max-width:576px){.header-flex[_ngcontent-%COMP%]{flex-direction:column}}"]}),m)}],f=((c=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:c}),c.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||c)},imports:[[o.CommonModule,a.h.forChild(p)]]}),c)}}]);