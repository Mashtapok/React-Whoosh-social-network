(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{10:function(e,t,a){e.exports={formControl:"FormControls_formControl__12TY2",formControl_dContents:"FormControls_formControl_dContents__2Y_3b",error:"FormControls_error__3PEaW",error_message:"FormControls_error_message__SBxiB",error_icon:"FormControls_error_icon__c8NFY",Input:"FormControls_Input__3SinC",checkboxBlock:"FormControls_checkboxBlock__tchY-",checkbox:"FormControls_checkbox__2f0eT",checkboxBlock__label:"FormControls_checkboxBlock__label__Ym39K",checkboxBlock__left:"FormControls_checkboxBlock__left__1iWMu",checkboxBlock__right:"FormControls_checkboxBlock__right__3yxTw",submitButton:"FormControls_submitButton__1c_l5"}},128:function(e,t,a){"use strict";a.d(t,"b",(function(){return s}));var n=a(49),r=a(9),o={dialogs:[{id:1,name:"\u0421\u0442\u0435\u043f\u0430\u043d"},{id:2,name:"Mashtapok"},{id:3,name:"\u041f\u043e\u0440\u043e\u0441\u0451\u043d\u043e\u043a \u041f\u0451\u0442\u0440"},{id:4,name:"\u0411\u043e\u0440\u0438\u0441"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,message:"\u041a\u0430\u043a \u0442\u0432\u043e\u0438 \u0434\u0435\u043b\u0430?"}],newMessageText:""},s=function(e){return{type:"dialogs/SEND-NEW-MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-NEW-MESSAGE":if(!t.newMessageText)return e;var a=t.newMessageText;return Object(r.a)({},e,{messages:[].concat(Object(n.a)(e.messages),[{id:6,message:a}])});default:return e}}},129:function(e,t,a){"use strict";a.d(t,"d",(function(){return _})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return v})),a.d(t,"f",(function(){return g}));var n=a(8),r=a.n(n),o=a(19),s=a(49),c=a(9),i=a(15),l="users/FOLLOW",u={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowing:[]},m=function(e){return{type:l,userId:e}},f=function(e){return{type:"users/UNFOLLOW",userId:e}},_=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},p=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},d=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING",isFollowing:e,userId:t}},h=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(_(e)),n(p(!0)),a.next=4,i.c.getUsers(e,t);case 4:o=a.sent,n(p(!1)),n({type:"users/SET_USERS",users:o.items}),n({type:"users/SET_TOTAL_USERS_COUNT",count:o.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},E=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d(!0,a)),e.next=3,n(a);case 3:0===e.sent.resultCode&&t(o(a)),t(d(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.c.followUser.bind(i.c),t.next=3,E(a,e,n,m);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=i.c.unfollowUser.bind(i.c),E(a,e,n,f);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW":return Object(c.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(c.a)({},e,{followed:!1}):e}))});case"users/SET_USERS":return Object(c.a)({},e,{users:t.users});case"users/SET_CURRENT_PAGE":return Object(c.a)({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(c.a)({},e,{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return Object(c.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING":return Object(c.a)({},e,{isFollowing:t.isFollowing?[].concat(Object(s.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!==t.userId}))});default:return e}}},134:function(e,t,a){e.exports=a.p+"static/media/preloader.e5007e6d.svg"},15:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));var n=a(135),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"03264173-eec8-4502-908e-4f5cb750fde1"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},s={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))}},c={getAuth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}}},165:function(e,t,a){e.exports=a(291)},170:function(e,t,a){},175:function(e,t,a){},21:function(e,t,a){e.exports={nav:"Navbar_nav__3AP48",nav__link:"Navbar_nav__link__1rwRK",activeLink:"Navbar_activeLink__1rOZb"}},25:function(e,t,a){e.exports={content__image:"ProfileInfo_content__image__2itkw",profileBlock:"ProfileInfo_profileBlock__1Tl-n",avatarBlock:"ProfileInfo_avatarBlock__1yytu",avatar_img:"ProfileInfo_avatar_img__26JxK",informationBlock:"ProfileInfo_informationBlock__RozSX",nameBlock:"ProfileInfo_nameBlock__2E1u-",statusBlock:"ProfileInfo_statusBlock__-ya0P",status:"ProfileInfo_status__3hJhj",no_current_status:"ProfileInfo_no_current_status__1vdhU"}},26:function(e,t,a){e.exports={post:"Post_post__1_Bw2",post__header:"Post_post__header__3WixS",post__date:"Post_post__date__1R9Ui",post__content:"Post_post__content__Kgp3a",post__activity:"Post_post__activity__3h7DM",activities:"Post_activities__rWT-u"}},27:function(e,t,a){e.exports={header:"Header_header__31Spg",header__container:"Header_header__container__1X4Xa",header__row:"Header_header__row__Sb-1l",header__logo:"Header_header__logo__1tg88",logo_name:"Header_logo_name__2pKRy",header__loginBlock:"Header_header__loginBlock__Bg-F8",header__nameBlock:"Header_header__nameBlock__1fuQz",header__afterAuthBlock:"Header_header__afterAuthBlock__FAqkY"}},291:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(69),s=a.n(o),c=(a(170),a(40)),i=a(41),l=a(43),u=a(44),m=(a(98),a(21)),f=a.n(m),_=a(17),p=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav__column"},r.a.createElement("div",{className:"nav__list"},r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(_.b,{to:"/profile",activeClassName:f.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(_.b,{to:"/dialogs",activeClassName:f.a.activeLink},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(_.b,{to:"/users",activeClassName:f.a.activeLink},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(_.b,{to:"/music",activeClassName:f.a.activeLink},"\u041c\u0443\u0437\u044b\u043a\u0430")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(_.b,{to:"/news",activeClassName:f.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"))))))},d=a(33),h=(a(175),a(25)),E=a.n(h),v=a(70),g=a.n(v),b=a(30),k=a(92),O=function(e){var t=Object(n.useState)(!1),a=Object(k.a)(t,2),o=a[0],s=a[1],c=Object(n.useState)(e.status),i=Object(k.a)(c,2),l=i[0],u=i[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",{className:E.a.statusBlock},r.a.createElement("div",null,o?r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){e.isOwner&&(s(!1),e.updateUserStatus(l))},onKeyPress:function(t){e.isOwner&&"Enter"===t.key&&(s(!1),e.updateUserStatus(l))},type:"text",value:l}):r.a.createElement("p",{onDoubleClick:function(){e.isOwner&&s(!0)},className:E.a.status},e.status||r.a.createElement("span",{className:E.a.no_current_status},e.isOwner?"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441":"\u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"))))},w=function(e){var t=e.profile,a=e.isFetching,n=e.status,o=e.updateUserStatus,s=e.isOwner;return t?a?r.a.createElement(b.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:E.a.profileBlock},r.a.createElement("div",{className:E.a.avatarBlock},r.a.createElement("img",{src:t.photos.large||g.a,alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:E.a.avatar_img}),s&&r.a.createElement("label",{htmlFor:"avatar"},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-cloud-upload-alt"}),r.a.createElement("input",{type:"file",id:"avatar",style:{display:"none"}})))),r.a.createElement("div",{className:E.a.informationBlock},r.a.createElement("div",{className:E.a.nameBlock},t.fullName),r.a.createElement(O,{isOwner:s,status:n,updateUserStatus:o})))):r.a.createElement(b.a,null)},N=a(8),S=a.n(N),j=a(19),y=a(49),x=a(9),P=a(15),C="profile/ADD-POST",I={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, Whoosh!",likesCount:100},{id:2,message:"\u042d\u0442\u043e \u0442\u0432\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:1}],newPostText:"",profile:null,isFetching:!1,status:""},F=function(e){return{type:"profile/PROFILE_IS_FETCHING",isFetching:e}},B=function(e){return{type:"profile/SET_STATUS",status:e}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:if(!t.newPostText)return e;var a={id:6,message:t.newPostText,likesCount:0};return Object(x.a)({},e,{posts:[].concat(Object(y.a)(e.posts),[a])});case"profile/SET_USER_PROFILE":return Object(x.a)({},e,{profile:t.profile});case"profile/PROFILE_IS_FETCHING":return Object(x.a)({},e,{isFetching:t.isFetching});case"profile/SET_STATUS":return Object(x.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(x.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}},U=a(60),A=a.n(U),L=a(26),R=a.n(L),M=function(e){return r.a.createElement("div",{className:R.a.post},r.a.createElement("div",{className:R.a.post__header},r.a.createElement("img",{src:null===e.profile.photos.small?g.a:e.profile.photos.small,alt:"avatar"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.profile.fullName),r.a.createElement("div",{className:R.a.post__date},"15:30:12"))),r.a.createElement("div",{className:R.a.post__content},r.a.createElement("span",null,e.message)),r.a.createElement("div",{className:R.a.post__activity},r.a.createElement("div",{className:R.a.activities},r.a.createElement("i",{className:"far fa-heart"})," ",e.likesCount),"\xa0",r.a.createElement("div",{className:R.a.activities},r.a.createElement("i",{className:"far fa-comment"})," 0"),"\xa0",r.a.createElement("div",{className:R.a.activities},r.a.createElement("i",{className:"fas fa-share"})," 0")))},G=a(130),W=a(131),D=a(53),z=a(45),H=Object(D.a)(100),K=Object(W.a)({form:"addNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:A.a.postsBlock__row},r.a.createElement(G.a,{name:"newPostText",component:z.c,placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",validate:[H]}),r.a.createElement("button",{className:A.a.postsBlock__addButton},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),Y=function(e){var t=e.posts.map((function(t){return r.a.createElement(M,{message:t.message,likesCount:t.likesCount,profile:e.profile})}));return r.a.createElement("div",{className:A.a.postsBlock},r.a.createElement("h2",null,"\u0412\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement(K,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:A.a.posts},t))},Z=a(12),J=a(36),X=Object(Z.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(function(e){return{type:C,newPostText:e}}(t)),e(Object(J.a)("addNewPostForm"))}}}))(Y),Q=function(e){return e.isFetching||null===e.profile?r.a.createElement(b.a,null):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement(w,{isOwner:e.isOwner,profile:e.profile,isFetching:e.isFetching,status:e.status,updateUserStatus:e.updateUserStatus}),e.profile.userId===e.myUserId&&r.a.createElement(X,null)))},q=a(7),$=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile(),document.title="\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Q,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,isFetching:this.props.isFetching,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))}}]),a}(r.a.Component),V=Object(q.compose)(Object(Z.b)((function(e){return{profile:e.profilePage.profile,isFetching:e.profilePage.isFetching,status:e.profilePage.status,myUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{profileIsFetching:F,getUserProfile:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(F(!0)),t.next=3,P.b.getProfile(e);case 3:n=t.sent,a(F(!1)),a({type:"profile/SET_USER_PROFILE",profile:n});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getUserStatus:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(a){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.b.getStatus(e);case 2:n=t.sent,a(B(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(j.a)(S.a.mark((function t(a){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P.b.updateStatus(e);case 2:0===t.sent.resultCode&&a(B(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),d.g)($),ee=a(27),te=a.n(ee),ae=function(e){return r.a.createElement("header",{className:te.a.header},r.a.createElement("div",{className:te.a.header__container},r.a.createElement("div",{className:te.a.header__row},r.a.createElement("div",{className:te.a.header__logo},r.a.createElement("img",{src:"https://tlgrm.ru/img/top-logo-icon_monochrome.svg",alt:""}),r.a.createElement("span",{className:te.a.logo_name},"Whoosh")),r.a.createElement(_.b,{to:"/profile"},r.a.createElement("div",{className:te.a.header__nameBlock},e.isAuth?r.a.createElement("div",{className:te.a.header__afterAuthBlock},e.login):null)),r.a.createElement(_.b,{to:"/login"},r.a.createElement("div",{className:te.a.header__loginBlock},e.isAuth?r.a.createElement("div",{onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement("div",null,"\u0412\u043e\u0439\u0442\u0438"))))))},ne={userId:null,email:null,login:null,isAuth:!1},re=function(e,t,a,n){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},oe=function(){return function(){var e=Object(j.a)(S.a.mark((function e(t){var a,n,r,o,s;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.getAuth();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.id,o=n.email,s=n.login,t(re(r,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(x.a)({},e,{},t.payload);default:return e}},ce=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(ae,this.props)}}]),a}(r.a.Component),ie=Object(Z.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId}}),{logout:function(){return function(){var e=Object(j.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.resultCode&&t(re(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ce),le=a(38),ue=a.n(le),me=Object(W.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:ue.a.loginForm__block},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",r.a.createElement(G.a,{placeholder:"example@gmail.com",name:"email",component:z.a,validate:[D.b],type:"email"}))),r.a.createElement("div",{className:ue.a.loginForm__block},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",r.a.createElement(G.a,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",component:z.a,validate:[D.b],type:"password"}))),a&&r.a.createElement("div",{className:ue.a.formErorr},a),r.a.createElement("div",{className:ue.a.loginForm__block},r.a.createElement(G.a,{component:z.b,name:"rememberMe",type:"checkbox"})))})),fe=Object(Z.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(j.a)(S.a.mark((function n(r){var o,s;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,P.a.login(e,t,a);case 2:0===(o=n.sent).resultCode?r(oe()):(s="(".concat(o.messages[0],")"),r(Object(J.b)("login",{_error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 ".concat(s)})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){Object(n.useEffect)((function(){document.title="\u0412\u043e\u0439\u0442\u0438 | Whoosh"}),[]);return e.isAuth?r.a.createElement(d.a,{to:"/profile"}):r.a.createElement("div",{className:ue.a.loginContent+" content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:ue.a.login__header},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),r.a.createElement(me,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})))})),_e={initialized:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(x.a)({},e,{initialized:!0});default:return e}},de=a(138),he=a(132),Ee=a(128),ve=a(129),ge=a(139),be=Object(q.combineReducers)({profilePage:T,dialogsPage:Ee.a,usersPage:ve.a,auth:se,form:he.a,app:pe}),ke=Object(q.createStore)(be,Object(de.composeWithDevTools)(Object(q.applyMiddleware)(ge.a)));window.store=ke;var Oe=ke,we=r.a.lazy((function(){return a.e(5).then(a.bind(null,300))})),Ne=r.a.lazy((function(){return a.e(3).then(a.bind(null,301))})),Se=r.a.lazy((function(){return a.e(4).then(a.bind(null,298))})),je=r.a.lazy((function(){return a.e(6).then(a.bind(null,299))})),ye=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ie,null),r.a.createElement(p,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(b.a,null)},r.a.createElement(d.d,null,r.a.createElement(d.a,{exact:!0,from:"/",to:"/profile"}),r.a.createElement(d.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(d.b,{path:"/dialogs",render:function(){return r.a.createElement(we,null)}}),r.a.createElement(d.b,{path:"/users",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(d.b,{path:"/news",component:je}),r.a.createElement(d.b,{path:"/music",component:Se}),r.a.createElement(d.b,{path:"/login",render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(d.b,{render:function(){return r.a.createElement(je,null)}})))):r.a.createElement(b.a,null)}}]),a}(n.Component),xe=Object(q.compose)(d.g,Object(Z.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(oe());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(ye),Pe=function(e){return r.a.createElement(_.a,{basename:"/"},r.a.createElement(Z.a,{store:Oe},r.a.createElement(xe,null)))};s.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){"use strict";var n=a(134),r=a.n(n),o=a(0),s=a.n(o);t.a=function(){return s.a.createElement("img",{src:r.a,style:{position:"absolute",left:"45%",top:"10%"}})}},38:function(e,t,a){e.exports={loginContent:"Login_loginContent__2w7O5",login__header:"Login_login__header__30HIh",loginForm__block:"Login_loginForm__block__1ms65",formErorr:"Login_formErorr__12U9m"}},45:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(72),r=a(0),o=a.n(r),s=a(10),c=a.n(s),i=function(e){var t=e.input,a=e.meta,r=a.touched,s=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&s;return o.a.createElement("div",{className:c.a.formControl_dContents+" "+(l?c.a.error:"")},o.a.createElement("textarea",Object.assign({},t,i)),l&&o.a.createElement("span",{className:c.a.error_message},s))},l=function(e){var t=e.input,a=e.meta,r=a.touched,s=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&s;return o.a.createElement("div",{className:c.a.formControl+" "+(l?c.a.error:"")},o.a.createElement("input",Object.assign({},t,i,{className:c.a.Input})),l&&o.a.createElement("i",{className:c.a.error_icon+" fas fa-exclamation-circle"}))},u=function(e){var t=e.input,a=e.meta,r=a.touched,s=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&s;return o.a.createElement("div",{className:c.a.checkboxBlock+" "+(l?c.a.error:"")},o.a.createElement("div",{className:c.a.checkboxBlock__left},o.a.createElement("label",{className:c.a.checkboxBlock__label},o.a.createElement("input",Object.assign({type:"checkbox"},t,i,{className:c.a.checkbox})),"\u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f")),o.a.createElement("div",{className:c.a.checkboxBlock__right},o.a.createElement("button",{className:c.a.submitButton},"\u0412\u043e\u0439\u0442\u0438")))}},53:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435"},r=function(e){return function(t){if(t&&t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},60:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1o35Z",postsBlock__row:"MyPosts_postsBlock__row__29Zwj",postsBlock__addButton:"MyPosts_postsBlock__addButton__1QjAP",posts:"MyPosts_posts__3k9O3"}},70:function(e,t,a){e.exports=a.p+"static/media/user.d3569aa1.svg"},98:function(e,t,a){}},[[165,1,2]]]);
//# sourceMappingURL=main.f5972d1c.chunk.js.map