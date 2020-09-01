(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"kcl+":function(e,t,n){"use strict";n.r(t),n.d(t,"EmployerPostBlogModule",(function(){return f}));var l=n("ofXK"),o=n("3Pt+"),a=n("kzlf"),r=n.n(a),i=(n("gJae"),n("TDHc")),m=n.n(i),s=n("PSD3"),d=n.n(s),u=n("fXoL"),g=n("N+K7"),c=n("dz5x"),p=n("CzEO");let h=(()=>{class e{constructor(e,t){this.http=e,this.share=t,this.image=new o.f({image:new o.d(null)}),this.blogForm=new o.f({title:new o.d(null,{validators:[o.v.required]}),category:new o.d(null,{validators:[o.v.required]}),image:new o.d(null,{validators:[o.v.required]}),content:new o.d(null,{validators:[o.v.required]}),hashTag:new o.d([])}),this.submitted=!1,this.config={imageUpload:{upload:e=>{console.log(e),this.image.patchValue({image:e}),this.image.get("image").updateValueAndValidity(),console.log("form hit",this.image.value);const t=new FormData;return t.append("image",this.image.value.image),t.append("userName",this.share.user.username),new Promise((e,n)=>{this.http.postToBackend("/users/addimage",t).then(t=>{console.log("res hit",t),e(t.data)}).catch(e=>{console.log(e),n(e)})})}}}}ngOnInit(){r.a.register("modules/imageUpload",m.a)}addImage(e){const t=e.target.files[0];if("image"!=t.type.split("/")[0])return alert("Please Select Image file!");this.blogForm.patchValue({image:t});const n=new FileReader;n.onload=()=>{this.imagePreview=n.result},n.readAsDataURL(t)}postBlog(){if(console.log(this.blogForm.value),this.blogForm.invalid)return;console.log(this.blogForm.value);const e=new FormData;e.append("title",this.blogForm.value.title),e.append("category",this.blogForm.value.category),e.append("image",this.blogForm.value.image),e.append("content",this.blogForm.value.content),e.append("hashTag",JSON.stringify(this.blogForm.value.hashTag)),e.append("userName",this.share.user.username),e.append("isFreelancer","false"),this.http.postToBackend("/users/add/blog",e).then(e=>{console.log(e),7e3===e.statusCode?d.a.fire("Posted","Congratulations  your blogs has been successfully posted!","success"):d.a.fire("Failed",7007===e.statusCode?"Sorry a blog with same title already exists. Please choose a diffrent title":7011===e.statusCode?"Sorry you are not authenticated to post a blog. Please login":"Sorry an internal server error occured. Please try later","error")}).catch(e=>{console.log(e),d.a.fire("Failed","Sorry an internal server error occured. Please try later","error")})}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](g.a),u["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["app-employer-post-blog"]],decls:53,vars:2,consts:[[1,"header","bg-blue-gradient","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h1","text-white","d-inline-block","mb-0"],[1,"container-fluid","mt--6"],[1,"card"],[1,"card-header","bg-transparent"],[1,"mb-0"],[1,"card-body"],[3,"formGroup","submit"],[1,"row"],[1,"col-md-10"],[1,"form-group"],["for","blog-title"],["formControlName","title","type","text","id","blog-title","placeholder","Enter the title of blog",1,"form-control"],["formControlName","category","id","country",1,"form-control"],["value","null"],["value","food"],["value","travel"],["value","music"],["value","lifestyle"],["value","business"],["value","personal"],["value","news"],["for","blog-thumb"],["type","file","id","blog-thumb",1,"form-control",3,"change"],[1,"com-md-10"],["formControlName","content",3,"modules"],["type","submit",1,"btn","btn-primary","edit-btn"],[1,"row","justify-content-center"],[1,"col"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",0),u["\u0275\u0275elementStart"](1,"div",1),u["\u0275\u0275elementStart"](2,"div",2),u["\u0275\u0275elementStart"](3,"div",3),u["\u0275\u0275elementStart"](4,"div",4),u["\u0275\u0275elementStart"](5,"h6",5),u["\u0275\u0275text"](6,"Post New Blog"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"div",6),u["\u0275\u0275elementStart"](8,"div",7),u["\u0275\u0275elementStart"](9,"div",8),u["\u0275\u0275elementStart"](10,"h2",9),u["\u0275\u0275text"](11,"Blog Editor"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"div",10),u["\u0275\u0275elementStart"](13,"form",11),u["\u0275\u0275listener"]("submit",(function(){return t.postBlog()})),u["\u0275\u0275elementStart"](14,"div",12),u["\u0275\u0275elementStart"](15,"div",13),u["\u0275\u0275elementStart"](16,"div",14),u["\u0275\u0275elementStart"](17,"label",15),u["\u0275\u0275text"](18,"Blog Title"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](19,"input",16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"div",13),u["\u0275\u0275elementStart"](21,"div",14),u["\u0275\u0275elementStart"](22,"label",15),u["\u0275\u0275text"](23,"Blog Category"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"select",17),u["\u0275\u0275elementStart"](25,"option",18),u["\u0275\u0275text"](26,"Select your blog category"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](27,"option",19),u["\u0275\u0275text"](28,"Food Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"option",20),u["\u0275\u0275text"](30,"Travel Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](31,"option",21),u["\u0275\u0275text"](32,"Music Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](33,"option",22),u["\u0275\u0275text"](34,"Lifestyle Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](35,"option",23),u["\u0275\u0275text"](36,"Business Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](37,"option",24),u["\u0275\u0275text"](38,"Personal Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](39,"option",25),u["\u0275\u0275text"](40,"News Blogs"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](41,"div",13),u["\u0275\u0275elementStart"](42,"div",14),u["\u0275\u0275elementStart"](43,"label",26),u["\u0275\u0275text"](44,"Blog Thumbnail"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](45,"input",27),u["\u0275\u0275listener"]("change",(function(e){return t.addImage(e)})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](46,"div",28),u["\u0275\u0275element"](47,"quill-editor",29),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](48,"button",30),u["\u0275\u0275text"](49,"Post"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](50,"div",31),u["\u0275\u0275elementStart"](51,"div",32),u["\u0275\u0275element"](52,"div",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](13),u["\u0275\u0275property"]("formGroup",t.blogForm),u["\u0275\u0275advance"](34),u["\u0275\u0275property"]("modules",t.config))},directives:[o.x,o.m,o.g,o.b,o.l,o.e,o.u,o.p,o.w,p.a],styles:[".header[_ngcontent-%COMP%]{background-image:linear-gradient(135deg,rgba(17,17,17,.904),rgba(17,17,17,.842)),url(/assets/img/banner/pattern-3.png)}"]}),e})();var v=n("tyNb");const b=[{path:"",component:h}];let f=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.CommonModule,v.h.forChild(b),o.s,o.h,p.b]]}),e})()}}]);