(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"5i8M":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerViewBlogModule",(function(){return s}));var l=n("ofXK"),o=n("fXoL"),i=n("N+K7"),r=n("dz5x"),a=n("tyNb");const d=[{path:"",component:(()=>{class e{constructor(e,t,n){this.http=e,this.share=t,this.route=n}ngOnInit(){this.route.params.subscribe(e=>{this.http.postToBackend("/users/blog/details",{userName:this.share.user.username,blogId:e.id}).then(e=>{console.log(e),this.blog=e.data}).catch(e=>{console.log(e)})})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](i.a),o["\u0275\u0275directiveInject"](r.a),o["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-employer-view-blog"]],decls:11,vars:2,consts:[[1,"header","bg-black-gradient","pb-2"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],[1,"sub-heading","p-2","border-bottom","my-4"],[3,"innerHTML"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"div",2),o["\u0275\u0275elementStart"](3,"div",3),o["\u0275\u0275elementStart"](4,"div",4),o["\u0275\u0275elementStart"](5,"h6",5),o["\u0275\u0275text"](6,"Single Blog View"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"div",1),o["\u0275\u0275elementStart"](8,"h2",6),o["\u0275\u0275text"](9),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](10,"div",7),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](9),o["\u0275\u0275textInterpolate"](null==t.blog?null:t.blog.title),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("innerHTML",null==t.blog?null:t.blog.content,o["\u0275\u0275sanitizeHtml"]))},styles:[""]}),e})()}];let s=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.CommonModule,a.h.forChild(d)]]}),e})()}}]);