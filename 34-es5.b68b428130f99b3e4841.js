function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{QM9R:function(e,t,n){"use strict";n.r(t),n.d(t,"BlogSingleModule",(function(){return p}));var a,r,l=n("ofXK"),i=n("fXoL"),o=n("tyNb"),m=n("N+K7"),s=n("dz5x"),d=function(e){return{"background-image":e}},c=function(){return["/welcome/","employer","login"]},g=[{path:"",component:(a=function(){function e(t,n,a){_classCallCheck(this,e),this.route=t,this.http=n,this.share=a}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(n){e.http.postToBackend("/users/blog/details",{userId:e.share.user.id,userName:e.share.user.username,blogId:n.id,typeUser:"freelancer"==e.share.role?0:1}).then((function(n){console.log(n),7e3===n.statusCode&&(e.blog=n.data,e.blog.isLiked&&(t.classList.toggle("active"),document.querySelector(".like-text").textContent="Liked!"))})).catch((function(e){console.log(e)}))}));var t=document.querySelector(".like-btn");t.addEventListener("click",(function(){t.classList.contains("active")||(t.classList.toggle("active"),document.querySelector(".like-text").textContent="Liked!",e.http.postToBackend("/users/blog/like",{userName:e.share.user.username,userId:e.share.user.id,blogId:e.blog.id,typeUser:"freelancer"==e.share.role?0:1}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})))}))}}]),e}(),a.\u0275fac=function(e){return new(e||a)(i["\u0275\u0275directiveInject"](o.a),i["\u0275\u0275directiveInject"](m.a),i["\u0275\u0275directiveInject"](s.a))},a.\u0275cmp=i["\u0275\u0275defineComponent"]({type:a,selectors:[["app-blog-single"]],decls:158,vars:13,consts:[["id","page-banner",1,"page-banner-area","page-contact","position-relative",3,"ngStyle"],[1,"overlay","dark-overlay"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-8","m-auto","text-center","col-sm-12","col-md-12"],[1,"banner-content","content-padding"],[1,"text-white",2,"z-index","20","position","relative"],[1,"section","blog-wrap"],[1,"row"],[1,"col-lg-8"],[1,"col-lg-12"],[1,""],["src","images/blog/blog-lg.jpg","alt","",1,"img-fluid"],[1,"author-details","author-details-big"],["alt","",1,"author-img",3,"src"],[1,"more-details"],[1,"author-name","font-weight-600"],[1,"date","mt-3"],[3,"innerHTML"],[1,"mt-5","mb-3"],[1,"d-inline-block","mr-3"],[1,"list-inline","d-inline-block"],[1,"list-inline-item"],["href","#"],[1,"mt-2","mb-3"],[1,"d-flex","align-items-center"],[1,"like-btn"],["viewBox","0 0 100 90","width","100","height","90"],["cx","25","cy","25","r","25"],["cx","75","cy","25","r","25"],["d","M 0 25 q 0 40 50 65 q 50 -25 50 -65"],[1,"like-text"],[1,"tip-wrapper"],["data-toggle","modal","data-target","#tipModal",1,"btn","btn-dark","btn-sm","tip-btn"],["src","assets/img/icon/tip.svg","alt",""],[1,"my-4","social-icons"],[1,"fab","fa-facebook"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin"],[1,"col-lg-4","blog-side-bar"],[1,"mb-4"],[1,"blog-post","blog-post-small"],[1,"mt-4","mb-3","d-flex","justify-content-between"],[1,"post-author","mr-3"],[1,"h5","text-capitalize"],["href",""],[1,"post-info"],[1,"fa","fa-calendar-check"],["routerLink","./post",1,"h4"],[1,"mt-3"],["routerLink","./post",1,"read-more"],[1,"fa","fa-angle-right"],[1,"author-details"],["src","assets/img/team/team-1.svg","alt","",1,"author-img"],[1,"author-name"],["id","tipModal",1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body"],[1,"form-segment"],[1,"text-center"],[1,"col-md-10","text-center"],["type","text","id","blog-title","placeholder","Enter no of cdex you want to tip",1,"form-control","my-4"],["data-dismiss","modal",1,"btn","btn-sm","btn-hero",3,"routerLink"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275element"](1,"div",1),i["\u0275\u0275elementStart"](2,"div",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"div",4),i["\u0275\u0275elementStart"](5,"div",5),i["\u0275\u0275elementStart"](6,"h1",6),i["\u0275\u0275text"](7),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"section",7),i["\u0275\u0275elementStart"](9,"div",2),i["\u0275\u0275elementStart"](10,"div",8),i["\u0275\u0275elementStart"](11,"div",9),i["\u0275\u0275elementStart"](12,"div",8),i["\u0275\u0275elementStart"](13,"div",10),i["\u0275\u0275elementStart"](14,"div",11),i["\u0275\u0275element"](15,"img",12),i["\u0275\u0275elementStart"](16,"div",13),i["\u0275\u0275element"](17,"img",14),i["\u0275\u0275elementStart"](18,"div",15),i["\u0275\u0275elementStart"](19,"span",16),i["\u0275\u0275text"](20," Posted by: "),i["\u0275\u0275element"](21,"br"),i["\u0275\u0275elementStart"](22,"strong"),i["\u0275\u0275text"](23),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"div",17),i["\u0275\u0275text"](25),i["\u0275\u0275pipe"](26,"date"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](27,"div",18),i["\u0275\u0275elementStart"](28,"div",19),i["\u0275\u0275elementStart"](29,"h5",20),i["\u0275\u0275text"](30,"Tags:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](31,"ul",21),i["\u0275\u0275elementStart"](32,"li",22),i["\u0275\u0275elementStart"](33,"a",23),i["\u0275\u0275text"](34,"Agency"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](35,","),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](36,"li",22),i["\u0275\u0275elementStart"](37,"a",23),i["\u0275\u0275text"](38,"Marketing"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](39,","),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](40,"li",22),i["\u0275\u0275elementStart"](41,"a",23),i["\u0275\u0275text"](42,"Business"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](43,"div",24),i["\u0275\u0275elementStart"](44,"div",25),i["\u0275\u0275elementStart"](45,"div",26),i["\u0275\u0275namespaceSVG"](),i["\u0275\u0275elementStart"](46,"svg",27),i["\u0275\u0275element"](47,"circle",28),i["\u0275\u0275element"](48,"circle",29),i["\u0275\u0275element"](49,"path",30),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275namespaceHTML"](),i["\u0275\u0275elementStart"](50,"span",31),i["\u0275\u0275text"](51," Like Blog "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](52,"div",32),i["\u0275\u0275elementStart"](53,"p"),i["\u0275\u0275text"](54,"Like the content of this author? "),i["\u0275\u0275element"](55,"br"),i["\u0275\u0275text"](56," Support the author by giving him a tip in cDEX! "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](57,"button",33),i["\u0275\u0275element"](58,"img",34),i["\u0275\u0275text"](59," Tip "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](60,"div",35),i["\u0275\u0275elementStart"](61,"h5",20),i["\u0275\u0275text"](62,"Share Now:"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](63,"ul",21),i["\u0275\u0275elementStart"](64,"li",22),i["\u0275\u0275elementStart"](65,"a",23),i["\u0275\u0275element"](66,"i",36),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](67,"li",22),i["\u0275\u0275elementStart"](68,"a",23),i["\u0275\u0275element"](69,"i",37),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](70,"li",22),i["\u0275\u0275elementStart"](71,"a",23),i["\u0275\u0275element"](72,"i",38),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](73,"div",39),i["\u0275\u0275elementStart"](74,"div",8),i["\u0275\u0275elementStart"](75,"div",10),i["\u0275\u0275elementStart"](76,"h3",40),i["\u0275\u0275text"](77,"You may also like"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](78,"div",41),i["\u0275\u0275elementStart"](79,"div",42),i["\u0275\u0275elementStart"](80,"div",43),i["\u0275\u0275elementStart"](81,"span",44),i["\u0275\u0275elementStart"](82,"a",45),i["\u0275\u0275text"](83," Working Remotely "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](84,"div",46),i["\u0275\u0275element"](85,"i",47),i["\u0275\u0275elementStart"](86,"span"),i["\u0275\u0275text"](87,"19 jun 18"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](88,"a",48),i["\u0275\u0275text"](89,"Falling in lin in google strategy"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](90,"p",49),i["\u0275\u0275text"](91,"Lorem ipsum dolo, amet consectetur consectetur adipisicing...."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](92,"a",50),i["\u0275\u0275text"](93,"Read More "),i["\u0275\u0275element"](94,"i",51),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](95,"div",52),i["\u0275\u0275element"](96,"img",53),i["\u0275\u0275elementStart"](97,"span",54),i["\u0275\u0275text"](98," Author Name "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](99,"div",41),i["\u0275\u0275elementStart"](100,"div",42),i["\u0275\u0275elementStart"](101,"div",43),i["\u0275\u0275elementStart"](102,"span",44),i["\u0275\u0275elementStart"](103,"a",45),i["\u0275\u0275text"](104," Working Remotely "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](105,"div",46),i["\u0275\u0275element"](106,"i",47),i["\u0275\u0275elementStart"](107,"span"),i["\u0275\u0275text"](108,"19 jun 18"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](109,"a",48),i["\u0275\u0275text"](110,"Falling in lin in google strategy"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](111,"p",49),i["\u0275\u0275text"](112,"Lorem ipsum dolo, amet consectetur consectetur adipisicing...."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](113,"a",50),i["\u0275\u0275text"](114,"Read More "),i["\u0275\u0275element"](115,"i",51),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](116,"div",52),i["\u0275\u0275element"](117,"img",53),i["\u0275\u0275elementStart"](118,"span",54),i["\u0275\u0275text"](119," Author Name "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](120,"div",41),i["\u0275\u0275elementStart"](121,"div",42),i["\u0275\u0275elementStart"](122,"div",43),i["\u0275\u0275elementStart"](123,"span",44),i["\u0275\u0275elementStart"](124,"a",45),i["\u0275\u0275text"](125," Working Remotely "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](126,"div",46),i["\u0275\u0275element"](127,"i",47),i["\u0275\u0275elementStart"](128,"span"),i["\u0275\u0275text"](129,"19 jun 18"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](130,"a",48),i["\u0275\u0275text"](131,"Falling in lin in google strategy"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](132,"p",49),i["\u0275\u0275text"](133,"Lorem ipsum dolo, amet consectetur consectetur adipisicing...."),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](134,"a",50),i["\u0275\u0275text"](135,"Read More "),i["\u0275\u0275element"](136,"i",51),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](137,"div",52),i["\u0275\u0275element"](138,"img",53),i["\u0275\u0275elementStart"](139,"span",54),i["\u0275\u0275text"](140," Author Name "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](141,"div",55),i["\u0275\u0275elementStart"](142,"div",56),i["\u0275\u0275elementStart"](143,"div",57),i["\u0275\u0275elementStart"](144,"div",58),i["\u0275\u0275elementStart"](145,"button",59),i["\u0275\u0275text"](146," \xd7 "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](147,"div",60),i["\u0275\u0275elementStart"](148,"div",61),i["\u0275\u0275elementStart"](149,"h4",62),i["\u0275\u0275text"](150," Enter the amount to tip "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](151,"div",2),i["\u0275\u0275elementStart"](152,"div",3),i["\u0275\u0275elementStart"](153,"div",63),i["\u0275\u0275element"](154,"input",64),i["\u0275\u0275elementStart"](155,"div",62),i["\u0275\u0275elementStart"](156,"a",65),i["\u0275\u0275text"](157,"Tip"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275property"]("ngStyle",i["\u0275\u0275pureFunction1"](10,d,"url("+(null==t.blog?null:t.blog.thumbnailImage)+")")),i["\u0275\u0275advance"](7),i["\u0275\u0275textInterpolate"](null==t.blog?null:t.blog.title),i["\u0275\u0275advance"](10),i["\u0275\u0275property"]("src",null==t.blog?null:t.blog.authorImage,i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](6),i["\u0275\u0275textInterpolate1"](" ",null==t.blog?null:t.blog.authorName," "),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind2"](26,7,null==t.blog?null:t.blog.postedOn,"d MMMM, y")),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("innerHTML",null==t.blog?null:t.blog.content,i["\u0275\u0275sanitizeHtml"]),i["\u0275\u0275advance"](129),i["\u0275\u0275property"]("routerLink",i["\u0275\u0275pureFunction0"](12,c)))},directives:[l.NgStyle,o.g],pipes:[l.DatePipe],styles:['@charset "UTF-8";.page-banner-area[_ngcontent-%COMP%]{background:linear-gradient(135deg,rgba(32,32,32,.98),rgba(13,13,13,.83) 30%,rgba(17,17,17,.85)),url(/assets/img/blog/blog-lg.jpeg),no-repeat 50% 50%}.blog-post[_ngcontent-%COMP%]{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);border:1px solid #e0e0e0;border-radius:8px;padding:1rem 1rem 0}.post-info[_ngcontent-%COMP%]{font-weight:600}.category[_ngcontent-%COMP%]{margin-top:1.5rem;padding-top:2rem;border-top:1px solid #ccc}.category-box[_ngcontent-%COMP%]{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);border:1px solid #e0e0e0;transition:all .3s;text-align:center;border-radius:6px;padding:.2rem .5rem;margin-bottom:1rem;min-height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center}.category-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;margin-bottom:.5rem}.category-box[_ngcontent-%COMP%]:hover{box-shadow:0 8px 10px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06);transform:translateY(-10px)}.author-details[_ngcontent-%COMP%]{padding:1rem 0;display:flex;margin-top:.5rem;align-items:center;justify-content:space-between;border-top:1px solid #ccc}.author-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:3rem;height:3rem;-o-object-fit:cover;object-fit:cover;-o-object-position:top center;object-position:top center;border-radius:50%;border:1px solid #222;padding:2px}.author-details[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{font-weight:700;color:#000;margin-left:.5rem}.read-more[_ngcontent-%COMP%]{font-weight:600;cursor:pointer}.blog-post-small[_ngcontent-%COMP%]{padding:0 1rem}.blog-post-small[_ngcontent-%COMP%]   .author-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem}.all-blogs[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:2rem 0;margin:1rem 0}.all-blogs[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:2rem}.all-blogs[_ngcontent-%COMP%]   .blog-post-small[_ngcontent-%COMP%]{padding:1rem 1rem 0}@media (max-width:991px){.blog-side-bar[_ngcontent-%COMP%]{margin-top:2rem}}.like-wrapper[_ngcontent-%COMP%]{position:relative;margin:.5rem}.like-number[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;color:#000}.like-icon[_ngcontent-%COMP%]{cursor:pointer;margin-right:4px;background:#fff;border-radius:50%;display:inline-block;color:#aaa;transition:.2s}.like-icon[_ngcontent-%COMP%]:hover{color:#666}.like-icon[_ngcontent-%COMP%]:before{font-family:fontawesome;content:"\uf004";font-size:1.2rem;font-style:normal}.like-icon.press[_ngcontent-%COMP%]{-webkit-animation:size .4s;animation:size .4s;color:#e23b3b}.like-text[_ngcontent-%COMP%]{position:absolute;bottom:70px;left:0;right:0;visibility:hidden;transition:.6s;z-index:-2;font-size:2px;color:transparent;font-weight:400}.like-text.press[_ngcontent-%COMP%]{bottom:120px;font-size:14px;visibility:visible;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{color:transparent}50%{color:#e23b3b}to{color:transparent}}@keyframes fade{0%{color:transparent}50%{color:#e23b3b}to{color:transparent}}@-webkit-keyframes size{0%{padding:10px 12px 8px}50%{padding:14px 16px 12px;margin-top:-4px}to{padding:10px 12px 8px}}@keyframes size{0%{padding:10px 12px 8px}50%{padding:14px 16px 12px;margin-top:-4px}to{padding:10px 12px 8px}}.blog-wrap[_ngcontent-%COMP%]{padding:3.5rem 0}@media screen and (max-width:575px){.blog-wrap[_ngcontent-%COMP%]{padding-top:1.5rem}}.page-banner-area[_ngcontent-%COMP%]{background-size:cover}.blog-post-small[_ngcontent-%COMP%]{margin-bottom:20px}.dark-overlay[_ngcontent-%COMP%]{display:block;z-index:5!important;background:linear-gradient(135deg,rgba(32,32,32,.98),rgba(13,13,13,.83) 30%,rgba(17,17,17,.85))}.author-details-big[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;border-top:0}.author-details-big[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:5rem;height:5rem}.author-details-big[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]{margin-left:1rem}.author-details-big[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{margin:0;font-weight:400}.social-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{border:1px solid #ccc;padding:.5rem;font-size:1rem}.tip-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.tip-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1rem;-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1)}.like-text[_ngcontent-%COMP%]{font-weight:600;font-size:1rem;color:#101010;margin-left:1rem}.like-btn[_ngcontent-%COMP%]{border:none;background:none;outline:none;display:inline-block;font-family:inherit;position:relative;z-index:5}.like-btn[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);width:60px;height:60px;background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><circle id="circle" r="1"/></defs><g transform="translate(45 12)" fill="%23f0d78e"><use href="%23circle"/><use href="%23circle" x="2" y="-1" transform="scale(2)"/></g><g transform="translate(78 27)" fill="%23bff08e"><use href="%23circle"/><use href="%23circle" x="3" y="1" transform="scale(2)"/></g><g transform="translate(83 58)" fill="%238ef0a6"><use href="%23circle"/><use href="%23circle" x="1.5" y="3" transform="scale(2)"/></g><g transform="translate(65 83)" fill="%238ef0f0"><use href="%23circle"/><use href="%23circle" x="3.5" y="1" transform="scale(2)"/></g><g transform="translate(32 81)" fill="%238ea6f0"><use href="%23circle"/><use href="%23circle" x="1" y="1.5" transform="scale(2)"/></g><g transform="translate(15 53)" fill="%23bf8ef0"><use href="%23circle"/><use href="%23circle" x="-2" y="-1" transform="scale(2)"/></g><g transform="translate(20 28)" fill="%23f08ed7"><use href="%23circle"/><use href="%23circle" x=".5" y="-2" transform="scale(2)"/></g><g><circle r="30" stroke="%23f08e8e" stroke-width="4" fill="none" transform="translate(50 50)"/></g></svg>\');pointer-events:none}.like-btn[_ngcontent-%COMP%]:after{content:"Like";position:absolute;bottom:100%;left:50%;font-size:.9rem;padding:.35rem .6rem;color:#f0f0f0;background:#0d0d0d;border-radius:5px;transform:translate(-50%,-30%);opacity:0;visibility:hidden;transition-property:transform,opacity,visibility;transition-duration:.25s;transition-timing-function:ease-out;transition-delay:0}.like-btn[_ngcontent-%COMP%]:focus:after, .like-btn[_ngcontent-%COMP%]:hover:after{transform:translate(-50%,-50%);opacity:1;visibility:visible}.like-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#adb5ce;height:20px;width:auto;display:block}.like-btn.active[_ngcontent-%COMP%]:after{content:"Undo like";white-space:nowrap}.like-btn.active[_ngcontent-%COMP%]:before{-webkit-animation:scaleOpacity .6s cubic-bezier(.03,1,.65,1.22);animation:scaleOpacity .6s cubic-bezier(.03,1,.65,1.22);z-index:-5}.like-btn.active[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{fill:#f74b42;-webkit-animation:scale .3s cubic-bezier(.03,1,.65,1.22) .14s both;animation:scale .3s cubic-bezier(.03,1,.65,1.22) .14s both}@-webkit-keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes scale{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes scaleOpacity{0%{transform:translate(-50%,-50%) scale(0);opacity:1}70%{opacity:1}to{opacity:0;transform:translate(-50%,-50%) scale(1)}}@keyframes scaleOpacity{0%{transform:translate(-50%,-50%) scale(0);opacity:1}70%{opacity:1}to{opacity:0;transform:translate(-50%,-50%) scale(1)}}']}),a)}],p=((r=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:r}),r.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||r)},imports:[[l.CommonModule,o.h.forChild(g)]]}),r)}}]);