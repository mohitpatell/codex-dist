function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"5i8M":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerViewBlogModule",(function(){return u}));var o,l,i=n("ofXK"),r=n("fXoL"),a=n("N+K7"),c=n("dz5x"),s=n("tyNb"),d=[{path:"",component:(o=function(){function e(t,n,o){_classCallCheck(this,e),this.http=t,this.share=n,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.http.postToBackend("/users/blog/details",{userName:e.share.user.username,blogId:t.id}).then((function(t){console.log(t),e.blog=t.data})).catch((function(e){console.log(e)}))}))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.a),r["\u0275\u0275directiveInject"](s.a))},o.\u0275cmp=r["\u0275\u0275defineComponent"]({type:o,selectors:[["app-employer-view-blog"]],decls:11,vars:2,consts:[[1,"header","bg-black-gradient","pb-2"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],[1,"sub-heading","p-2","border-bottom","my-4"],[3,"innerHTML"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275elementStart"](1,"div",1),r["\u0275\u0275elementStart"](2,"div",2),r["\u0275\u0275elementStart"](3,"div",3),r["\u0275\u0275elementStart"](4,"div",4),r["\u0275\u0275elementStart"](5,"h6",5),r["\u0275\u0275text"](6,"Single Blog View"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](7,"div",1),r["\u0275\u0275elementStart"](8,"h2",6),r["\u0275\u0275text"](9),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](10,"div",7),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate"](null==t.blog?null:t.blog.title),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("innerHTML",null==t.blog?null:t.blog.content,r["\u0275\u0275sanitizeHtml"]))},styles:[""]}),o)}],u=((l=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||l)},imports:[[i.CommonModule,s.h.forChild(d)]]}),l)}}]);