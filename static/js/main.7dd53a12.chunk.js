(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{10:function(e,t,a){e.exports={content__image:"ProfileInfo_content__image__2itkw",profileBlock:"ProfileInfo_profileBlock__1Tl-n",avatarBlock:"ProfileInfo_avatarBlock__1yytu",avatar_img:"ProfileInfo_avatar_img__26JxK",informationBlock:"ProfileInfo_informationBlock__RozSX",nameBlock:"ProfileInfo_nameBlock__2E1u-",changeAvatar__container:"ProfileInfo_changeAvatar__container__1gz-k",loaging_fogging:"ProfileInfo_loaging_fogging__YhFiT",otherInformation:"ProfileInfo_otherInformation__3ownT",contancts:"ProfileInfo_contancts__1ENsG",label:"ProfileInfo_label__3EksU",showMore__block:"ProfileInfo_showMore__block__1jTs7",editContacts:"ProfileInfo_editContacts__2Nr6U",saveButton:"ProfileInfo_saveButton__wVTpW",btn_save:"ProfileInfo_btn_save__31jnB"}},100:function(e,t,a){},11:function(e,t,a){e.exports={nav:"Navbar_nav__3AP48",nav__link:"Navbar_nav__link__1rwRK",activeLink:"Navbar_activeLink__1rOZb",adaptive__container:"Navbar_adaptive__container__4mHfV",adaptive__block:"Navbar_adaptive__block__iIGRh",adaptive_activeLink:"Navbar_adaptive_activeLink__153mr"}},12:function(e,t,a){e.exports={formControl:"FormControls_formControl__12TY2",formControl_dContents:"FormControls_formControl_dContents__2Y_3b",error:"FormControls_error__3PEaW",error_message:"FormControls_error_message__SBxiB",error_icon:"FormControls_error_icon__c8NFY",Input:"FormControls_Input__3SinC",checkboxBlock:"FormControls_checkboxBlock__tchY-",checkbox:"FormControls_checkbox__2f0eT",checkboxBlock__label:"FormControls_checkboxBlock__label__Ym39K",checkboxBlock__left:"FormControls_checkboxBlock__left__1iWMu",checkboxBlock__right:"FormControls_checkboxBlock__right__3yxTw",submitButton:"FormControls_submitButton__1c_l5"}},130:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));var n=a(50),r=a(8),o={dialogs:[{id:1,name:"\u0421\u0442\u0435\u043f\u0430\u043d"},{id:2,name:"Mashtapok"},{id:3,name:"\u041f\u043e\u0440\u043e\u0441\u0451\u043d\u043e\u043a \u041f\u0451\u0442\u0440"},{id:4,name:"\u0411\u043e\u0440\u0438\u0441"}],messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041a\u0430\u043a \u0442\u0432\u043e\u0438 \u0434\u0435\u043b\u0430?"},{id:2,message:"\u0412\u0441\u0451 \u043f\u043e\u043d\u044f\u0442\u043d\u043e..."},{id:3,message:"\u043d\u0443 \u0438 \u043c\u043e\u043b\u0447\u0438 \u0434\u0430\u043b\u044c\u0448\u0435"}],newMessageText:""},c=function(e){return{type:"dialogs/SEND-NEW-MESSAGE",newMessageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND-NEW-MESSAGE":if(!t.newMessageText)return e;var a=t.newMessageText;return Object(r.a)({},e,{messages:[].concat(Object(n.a)(e.messages),[{id:6,message:a}])});default:return e}}},131:function(e,t,a){"use strict";a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return E})),a.d(t,"f",(function(){return b}));var n=a(5),r=a.n(n),o=a(15),c=a(50),s=a(8),i=a(14),l="users/FOLLOW",u={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,isFollowing:[]},m=function(e){return{type:l,userId:e}},f=function(e){return{type:"users/UNFOLLOW",userId:e}},p=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},_=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},d=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING",isFollowing:e,userId:t}},h=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(p(e)),n(_(!0)),a.next=4,i.d.getUsers(e,t);case 4:o=a.sent,n(_(!1)),n({type:"users/SET_USERS",users:o.items}),n({type:"users/SET_TOTAL_USERS_COUNT",count:o.totalCount});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},v=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(d(!0,a)),e.next=3,n(a);case 3:0===e.sent.resultCode&&t(o(a)),t(d(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.d.followUser.bind(i.d),t.next=3,v(a,e,n,m);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=i.d.unfollowUser.bind(i.d),v(a,e,n,f);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW":return Object(s.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(s.a)({},e,{followed:!1}):e}))});case"users/SET_USERS":return Object(s.a)({},e,{users:t.users});case"users/SET_CURRENT_PAGE":return Object(s.a)({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{totalUsersCount:t.count});case"users/TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING":return Object(s.a)({},e,{isFollowing:t.isFollowing?[].concat(Object(c.a)(e.isFollowing),[t.userId]):e.isFollowing.filter((function(e){return e!==t.userId}))});default:return e}}},132:function(e,t,a){"use strict";a.d(t,"b",(function(){return l}));var n=a(5),r=a.n(n),o=a(15),c=a(8),s=a(14),i={articles:[]},l=function(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.getNews();case 2:"ok"===(a=e.sent).status&&t({type:"news/SET_ARTICLES",articles:a.articles});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"news/SET_ARTICLES":return Object(c.a)({},e,{articles:t.articles});default:return e}}},137:function(e,t,a){e.exports=a.p+"static/media/preloader.e5007e6d.svg"},14:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return i}));var n=a(98),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"03264173-eec8-4502-908e-4f5cb750fde1"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e}).then((function(e){return e.data}))},updatePhoto:function(e){var t=new FormData;return t.append("file",e),r.put("profile/photo",t).then((function(e){return e.data}))},updateProfile:function(e){return r.put("profile",e).then((function(e){return e.data}))}},s={getAuth:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={getNews:function(){return n.get("https://newsapi.org/v2/top-headlines?country=ru&apiKey=3349251321fe4848b5273444970c2b98").then((function(e){return e.data}))}}},140:function(e,t,a){e.exports=a.p+"static/media/header-logo.4527c867.svg"},168:function(e,t,a){e.exports=a(294)},173:function(e,t,a){},178:function(e,t,a){},22:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a(57),r=a(0),o=a.n(r),c=a(12),s=a.n(c),i=function(e){var t=e.input,a=e.meta,r=a.touched,c=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&c;return o.a.createElement("div",{className:s.a.formControl_dContents+" "+(l?s.a.error:"")},o.a.createElement("textarea",Object.assign({},t,i)),l&&o.a.createElement("span",{className:s.a.error_message},c))},l=function(e){var t=e.input,a=e.meta,r=a.touched,c=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&c;return o.a.createElement("div",{className:s.a.formControl+" "+(l?s.a.error:"")},o.a.createElement("input",Object.assign({},t,i,{className:s.a.Input})),l&&o.a.createElement("i",{className:s.a.error_icon+" fas fa-exclamation-circle"}))},u=function(e){var t=e.input,a=e.meta,r=a.touched,c=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&c;return o.a.createElement("div",{className:s.a.checkboxBlock+" "+(l?s.a.error:"")},o.a.createElement("div",{className:s.a.checkboxBlock__left},o.a.createElement("label",{className:s.a.checkboxBlock__label},o.a.createElement("input",Object.assign({type:"checkbox"},t,i,{className:s.a.checkbox})),"\u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f")),o.a.createElement("div",{className:s.a.checkboxBlock__right},o.a.createElement("button",{className:s.a.submitButton},"\u0412\u043e\u0439\u0442\u0438")))},m=function(e){var t=e.input,a=e.meta,r=a.touched,c=a.error,i=Object(n.a)(e,["input","meta"]),l=r&&c;return o.a.createElement("div",{className:s.a.checkboxBlock+" "+(l?s.a.error:"")},o.a.createElement("div",{className:s.a.checkboxBlock__left},o.a.createElement("input",Object.assign({type:"checkbox"},t,i,{className:s.a.checkbox}))))}},27:function(e,t,a){e.exports={post:"Post_post__1_Bw2",post__header:"Post_post__header__3WixS",post__date:"Post_post__date__1R9Ui",post__content:"Post_post__content__Kgp3a",post__activity:"Post_post__activity__3h7DM",activities:"Post_activities__rWT-u"}},28:function(e,t,a){e.exports={header:"Header_header__31Spg",header__container:"Header_header__container__1X4Xa",header__row:"Header_header__row__Sb-1l",header__logo:"Header_header__logo__1tg88",logo_name:"Header_logo_name__2pKRy",header__loginBlock:"Header_header__loginBlock__Bg-F8",header__nameBlock:"Header_header__nameBlock__1fuQz",header__afterAuthBlock:"Header_header__afterAuthBlock__FAqkY"}},294:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(71),c=a.n(o),s=(a(173),a(42)),i=a(43),l=a(44),u=a(45),m=(a(100),a(11)),f=a.n(m),p=a(13),_=function(e){return r.a.createElement("div",{className:f.a.adaptive__container},r.a.createElement("div",{className:f.a.adaptive__block},r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.adaptive_activeLink},r.a.createElement("i",{className:"fas fa-house-user"}))),r.a.createElement("div",{className:f.a.adaptive__block},r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.adaptive_activeLink},r.a.createElement("i",{className:"fas fa-comments"}))),r.a.createElement("div",{className:f.a.adaptive__block},r.a.createElement(p.b,{to:"/users",activeClassName:f.a.adaptive_activeLink},r.a.createElement("i",{className:"fas fa-users"}))),r.a.createElement("div",{className:f.a.adaptive__block},r.a.createElement(p.b,{to:"/music",activeClassName:f.a.adaptive_activeLink},r.a.createElement("i",{className:"fas fa-music"}))),r.a.createElement("div",{className:f.a.adaptive__block},r.a.createElement(p.b,{to:"/news",activeClassName:f.a.adaptive_activeLink},r.a.createElement("i",{className:"fas fa-newspaper"}))))},d=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav__column"},r.a.createElement("div",{className:"nav__list"},r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.activeLink},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.activeLink},"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(p.b,{to:"/users",activeClassName:f.a.activeLink},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(p.b,{to:"/music",activeClassName:f.a.activeLink},"\u041c\u0443\u0437\u044b\u043a\u0430")),r.a.createElement("div",{className:f.a.nav__link},r.a.createElement(p.b,{to:"/news",activeClassName:f.a.activeLink},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")))))),r.a.createElement(_,null))},h=a(34),v=(a(178),a(39)),E=a(10),b=a.n(E),g=a(72),k=a.n(g),N=a(37),O=a(76),w=a.n(O),S=function(e){var t=Object(n.useState)(!1),a=Object(v.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(e.status),i=Object(v.a)(s,2),l=i[0],u=i[1];Object(n.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",{className:w.a.statusBlock},r.a.createElement("div",null,o?r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},autoFocus:!0,onBlur:function(){e.isOwner&&(c(!1),e.updateUserStatus(l))},onKeyPress:function(t){e.isOwner&&"Enter"===t.key&&(c(!1),e.updateUserStatus(l))},type:"text",value:l}):r.a.createElement("p",{onDoubleClick:function(){e.isOwner&&c(!0)},className:w.a.status},e.status||r.a.createElement("span",{className:w.a.no_current_status},e.isOwner?"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441":"\u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"))))},y=a(133),P=a(134),j=a(22),x=Object(P.a)({form:"editProfile"})((function(e){var t=e.profile,a=e.handleSubmit,o=Object(n.useState)(!1),c=Object(v.a)(o,2),s=c[0],i=c[1];return r.a.createElement("form",{className:b.a.otherInformation,onSubmit:a},r.a.createElement("fieldset",null,r.a.createElement("div",null,r.a.createElement("p",{className:b.a.label},"\u0418\u043c\u044f:"),r.a.createElement(y.a,{placeholder:"\u043d\u043e\u0432\u043e\u0435 \u0438\u043c\u044f",name:"fullName",component:j.b,type:"text"})),r.a.createElement("div",{className:b.a.aboutMe},r.a.createElement("p",{className:b.a.label},"\u041e\u0431\u043e \u043c\u043d\u0435:"),r.a.createElement(y.a,{placeholder:"\u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0441\u0435\u0431\u0435",name:"aboutMe",component:j.b,type:"text"})),r.a.createElement("div",{className:b.a.job},r.a.createElement("label",{style:{display:"flex",alignItems:"center"}},r.a.createElement("p",{style:{fontSize:"12px"}},"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443"),r.a.createElement(y.a,{name:"lookingForAJob",component:j.a,style:{position:"relative",top:"2px"}})),r.a.createElement("p",{className:b.a.label},"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:"),r.a.createElement(y.a,{placeholder:"\u0432\u0430\u0448\u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438",name:"lookingForAJobDescription",component:j.b,type:"text"})),s?r.a.createElement("div",{className:b.a.showMore__block},r.a.createElement("p",{onClick:function(){return i(!1)}},"\u0421\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e")):r.a.createElement("div",{className:b.a.showMore__block},r.a.createElement("p",{onClick:function(){return i(!0)}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u043e\u043b\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"))),s&&r.a.createElement("fieldset",null,r.a.createElement("div",null,"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: "),r.a.createElement("div",{className:b.a.editContacts},Object.keys(t.contacts).map((function(e){return r.a.createElement("p",{className:b.a.label},e," : ",r.a.createElement(y.a,{placeholder:e,name:"contacts."+e,component:j.b,type:"text"}))})))),r.a.createElement("div",{className:b.a.saveButton},r.a.createElement("button",{className:b.a.btn_save},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")))})),C=function(e){var t=e.profile,a=e.isOwner,n=e.activateEditMode,o=!1;for(var c in t.contacts)null!==t.contacts[c]&&""!==t.contacts[c]&&(o=!0,console.log("has"));return r.a.createElement("div",{className:b.a.otherInformation},t.aboutMe&&r.a.createElement("div",{className:b.a.aboutMe},r.a.createElement("i",{className:"fas fa-address-card"})," ",t.aboutMe),(t.lookingForAJob||t.lookingForAJobDescription)&&r.a.createElement("div",{className:b.a.job},r.a.createElement("i",{className:"fas fa-briefcase"})," \u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b ","( ".concat(t.lookingForAJobDescription," )")),o&&r.a.createElement("div",{className:b.a.contancts},"\u041c\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b: ",Object.keys(t.contacts).map((function(e){return t.contacts[e]&&r.a.createElement(I,{contactTitle:e,contactValue:t.contacts[e]})}))),a&&r.a.createElement("div",null,r.a.createElement("button",{onClick:n},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c")))},I=function(e){var t=e.contactTitle,a=e.contactValue;return r.a.createElement("div",null,t," : ",a)},T=function(e){var t=e.profile,a=e.isFetching,o=e.status,c=e.updateUserStatus,s=e.isOwner,i=e.updatePhoto,l=e.isAvatarUpdating,u=e.updateProfile,m=Object(n.useState)(!1),f=Object(v.a)(m,2),p=f[0],_=f[1];return a||!t?r.a.createElement(N.a,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:b.a.profileBlock},r.a.createElement("div",{className:b.a.avatarBlock},r.a.createElement("img",{src:t.photos.large||k.a,alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:b.a.avatar_img}),r.a.createElement("div",{style:l?{display:"flex"}:{display:"none"},className:b.a.loaging_fogging},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),s&&r.a.createElement("label",{htmlFor:"avatar",className:b.a.changeAvatar__container},r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-cloud-upload-alt"}),r.a.createElement("input",{onInput:function(e){e.target.files.length&&i(e.target.files[0])},type:"file",id:"avatar",style:{display:"none"}})))),r.a.createElement("div",{className:b.a.informationBlock},r.a.createElement("div",{className:b.a.nameBlock},t.fullName),r.a.createElement(S,{isOwner:s,status:o,updateUserStatus:c}),p?r.a.createElement(x,{initialValues:t,profile:t,deActivateEditMode:function(){return _(!1)},onSubmit:function(e){u(e),_(!1)}}):r.a.createElement(C,{profile:t,isOwner:s,activateEditMode:function(){return _(!0)}}))))},A=a(5),F=a.n(A),B=a(15),U=a(50),L=a(8),M=a(14),R=a(31),D={userId:null,email:null,login:null,isAuth:!1},G=function(e,t,a,n){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:a,isAuth:n}}},W=function(){return function(){var e=Object(B.a)(F.a.mark((function e(t){var a,n,r,o,c;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.getAuth();case 2:0===(a=e.sent).resultCode&&(n=a.data,r=n.id,o=n.email,c=n.login,t(G(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(L.a)({},e,{},t.payload);default:return e}},H="profile/ADD-POST",J={posts:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442, Whoosh!",likesCount:100},{id:2,message:"\u042d\u0442\u043e \u0442\u0432\u043e\u0439 \u043f\u0435\u0440\u0432\u044b\u0439 \u043f\u043e\u0441\u0442",likesCount:1}],newPostText:"",profile:null,isFetching:!1,status:"",isAvatarUpdating:!1},K=function(e){return{type:"profile/PROFILE_IS_FETCHING",isFetching:e}},Y=function(e){return{type:"profile/SET_STATUS",status:e}},V=function(e){return{type:"profile/AVATAR_IS_UPDATING",isAvatarUpdating:e}},Z=function(e){return function(){var t=Object(B.a)(F.a.mark((function t(a){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(K(!0)),t.next=3,M.c.getProfile(e);case 3:n=t.sent,a(K(!1)),a({type:"profile/SET_USER_PROFILE",profile:n});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:if(!t.newPostText)return e;var a={id:6,message:t.newPostText,likesCount:0};return Object(L.a)({},e,{posts:[].concat(Object(U.a)(e.posts),[a])});case"profile/SET_USER_PROFILE":return Object(L.a)({},e,{profile:t.profile});case"profile/PROFILE_IS_FETCHING":return Object(L.a)({},e,{isFetching:t.isFetching});case"profile/SET_STATUS":return Object(L.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(L.a)({},e,{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"profile/UPDATE_PHOTO_SUCCESS":return Object(L.a)({},e,{profile:Object(L.a)({},e.profile,{photos:t.photos})});case"profile/AVATAR_IS_UPDATING":return Object(L.a)({},e,{isAvatarUpdating:t.isAvatarUpdating});default:return e}},Q=a(62),q=a.n(Q),$=a(27),ee=a.n($),te=function(e){return r.a.createElement("div",{className:ee.a.post},r.a.createElement("div",{className:ee.a.post__header},r.a.createElement("img",{src:null===e.profile.photos.small?k.a:e.profile.photos.small,alt:"avatar"}),r.a.createElement("div",null,r.a.createElement("h2",null,e.profile.fullName),r.a.createElement("div",{className:ee.a.post__date},"15:30:12"))),r.a.createElement("div",{className:ee.a.post__content},r.a.createElement("span",null,e.message)),r.a.createElement("div",{className:ee.a.post__activity},r.a.createElement("div",{className:ee.a.activities},r.a.createElement("i",{className:"far fa-heart"})," ",e.likesCount),"\xa0",r.a.createElement("div",{className:ee.a.activities},r.a.createElement("i",{className:"far fa-comment"})," 0"),"\xa0",r.a.createElement("div",{className:ee.a.activities},r.a.createElement("i",{className:"fas fa-share"})," 0")))},ae=a(56),ne=Object(ae.a)(100),re=Object(P.a)({form:"addNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:q.a.postsBlock__row},r.a.createElement(y.a,{name:"newPostText",component:j.d,placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",validate:[ne]}),r.a.createElement("button",{className:q.a.postsBlock__addButton},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))})),oe=function(e){var t=e.posts.map((function(t){return r.a.createElement(te,{message:t.message,likesCount:t.likesCount,profile:e.profile})}));return r.a.createElement("div",{className:q.a.postsBlock},r.a.createElement("h2",null,"\u0412\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement(re,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:q.a.posts},t))},ce=a(17),se=Object(ce.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText,profile:e.profilePage.profile}}),(function(e){return{addPost:function(t){e(function(e){return{type:H,newPostText:e}}(t)),e(Object(R.a)("addNewPostForm"))}}}))(oe),ie=function(e){return e.isFetching||null===e.profile?r.a.createElement(N.a,null):r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container"},r.a.createElement(T,{isOwner:e.isOwner,profile:e.profile,isFetching:e.isFetching,status:e.status,updateUserStatus:e.updateUserStatus,updatePhoto:e.updatePhoto,isAvatarUpdating:e.isAvatarUpdating,updateProfile:e.updateProfile}),e.profile.userId===e.myUserId&&r.a.createElement(se,null)))},le=a(9),ue=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.myUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile(),document.title="\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(ie,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,isFetching:this.props.isFetching,status:this.props.status,updateUserStatus:this.props.updateUserStatus,updatePhoto:this.props.updatePhoto,isAvatarUpdating:this.props.isAvatarUpdating,updateProfile:this.props.updateProfile}))}}]),a}(r.a.Component),me=Object(le.compose)(Object(ce.b)((function(e){return{profile:e.profilePage.profile,isFetching:e.profilePage.isFetching,status:e.profilePage.status,myUserId:e.auth.userId,isAuth:e.auth.isAuth,isAvatarUpdating:e.profilePage.isAvatarUpdating}}),{getUserProfile:Z,getUserStatus:function(e){return function(){var t=Object(B.a)(F.a.mark((function t(a){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.c.getStatus(e);case 2:n=t.sent,a(Y(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateUserStatus:function(e){return function(){var t=Object(B.a)(F.a.mark((function t(a){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M.c.updateStatus(e);case 2:0===t.sent.resultCode&&a(Y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updatePhoto:function(e){return function(){var t=Object(B.a)(F.a.mark((function t(a){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(V(!0)),t.next=3,M.c.updatePhoto(e);case 3:0===(n=t.sent).resultCode&&(a({type:"profile/UPDATE_PHOTO_SUCCESS",photos:n.data.photos}),a(V(!1)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateProfile:function(e){return function(){var t=Object(B.a)(F.a.mark((function t(a,n){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,M.c.updateProfile(e);case 3:0===t.sent.resultCode&&a(Z(r));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}),h.g)(ue),fe=a(28),pe=a.n(fe),_e=a(140),de=a.n(_e),he=function(e){return r.a.createElement("header",{className:pe.a.header},r.a.createElement("div",{className:pe.a.header__container},r.a.createElement("div",{className:pe.a.header__row},r.a.createElement("div",{className:pe.a.header__logo},r.a.createElement("img",{src:de.a,alt:"\u0441\u0430\u043c\u043e\u043b\u0451\u0442\u0438\u043a"}),r.a.createElement("span",{className:pe.a.logo_name},"Whoosh")),r.a.createElement(p.b,{to:"/profile"},r.a.createElement("div",{className:pe.a.header__nameBlock},e.isAuth?r.a.createElement("div",{className:pe.a.header__afterAuthBlock},e.login):null)),r.a.createElement(p.b,{to:"/login"},r.a.createElement("div",{className:pe.a.header__loginBlock},e.isAuth?r.a.createElement("div",{onClick:e.logout},"\u0412\u044b\u0439\u0442\u0438"):r.a.createElement("div",null,"\u0412\u043e\u0439\u0442\u0438"))))))},ve=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(he,this.props)}}]),a}(r.a.Component),Ee=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId}}),{logout:function(){return function(){var e=Object(B.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.a.logout();case 2:0===e.sent.resultCode&&t(G(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ve),be=a(40),ge=a.n(be),ke=Object(P.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:ge.a.loginForm__block},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",r.a.createElement(y.a,{placeholder:"example@gmail.com",name:"email",component:j.b,validate:[ae.b],type:"email"}))),r.a.createElement("div",{className:ge.a.loginForm__block},r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",r.a.createElement(y.a,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",component:j.b,validate:[ae.b],type:"password"}))),a&&r.a.createElement("div",{className:ge.a.formErorr},a),r.a.createElement("div",{className:ge.a.loginForm__block},r.a.createElement(y.a,{component:j.c,name:"rememberMe",type:"checkbox"})))})),Ne=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a){return function(){var n=Object(B.a)(F.a.mark((function n(r){var o,c;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.login(e,t,a);case 2:0===(o=n.sent).resultCode?r(W()):(c="(".concat(o.messages[0],")"),r(Object(R.b)("login",{_error:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u043e\u0439\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 ".concat(c)})));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})((function(e){Object(n.useEffect)((function(){document.title="\u0412\u043e\u0439\u0442\u0438 | Whoosh"}),[]);return e.isAuth?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",{className:ge.a.loginContent+" content"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:ge.a.login__header},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),r.a.createElement(ke,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})))})),Oe={initialized:!1},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(L.a)({},e,{initialized:!0});default:return e}},Se=a(141),ye=a(135),Pe=a(130),je=a(131),xe=a(142),Ce=a(132),Ie=Object(le.combineReducers)({profilePage:X,dialogsPage:Pe.a,usersPage:je.a,auth:z,form:ye.a,app:we,news:Ce.a}),Te=Object(le.createStore)(Ie,Object(Se.composeWithDevTools)(Object(le.applyMiddleware)(xe.a)));window.store=Te;var Ae=Te,Fe=r.a.lazy((function(){return a.e(5).then(a.bind(null,304))})),Be=r.a.lazy((function(){return a.e(3).then(a.bind(null,305))})),Ue=(r.a.lazy((function(){return a.e(4).then(a.bind(null,302))})),r.a.lazy((function(){return a.e(6).then(a.bind(null,306))}))),Le=r.a.lazy((function(){return a.e(7).then(a.bind(null,303))})),Me=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Ee,null),r.a.createElement(d,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(N.a,null)},r.a.createElement(h.d,null,r.a.createElement(h.a,{exact:!0,from:"/",to:"/profile"}),r.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(h.b,{path:"/dialogs",render:function(){return r.a.createElement(Fe,null)}}),r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(Be,null)}}),r.a.createElement(h.b,{path:"/news",render:function(){return r.a.createElement(Ue,null)}}),r.a.createElement(h.b,{path:"/music",component:Le}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(h.b,{render:function(){return r.a.createElement(Le,null)}})))):r.a.createElement(N.a,null)}}]),a}(n.Component),Re=Object(le.compose)(h.g,Object(ce.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(W());Promise.all([t]).then((function(){e({type:"app/INITIALIZED_SUCCESS"})}))}}}))(Me),De=function(e){return r.a.createElement(p.a,{basename:"/"},r.a.createElement(ce.a,{store:Ae},r.a.createElement(Re,null)))};c.a.render(r.a.createElement(De,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},37:function(e,t,a){"use strict";var n=a(137),r=a.n(n),o=a(0),c=a.n(o);t.a=function(){return c.a.createElement("img",{src:r.a,style:{position:"absolute",left:"45%",top:"10%"}})}},40:function(e,t,a){e.exports={loginContent:"Login_loginContent__2w7O5",login__header:"Login_login__header__30HIh",loginForm__block:"Login_loginForm__block__1ms65",formErorr:"Login_formErorr__12U9m"}},56:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"\u041f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435"},r=function(e){return function(t){if(t&&t.length>e)return"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432")}}},62:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1o35Z",postsBlock__row:"MyPosts_postsBlock__row__29Zwj",postsBlock__addButton:"MyPosts_postsBlock__addButton__1QjAP",posts:"MyPosts_posts__3k9O3"}},72:function(e,t,a){e.exports=a.p+"static/media/user.d3569aa1.svg"},76:function(e,t,a){e.exports={statusBlock:"ProfileStatus_statusBlock__20BWJ",status:"ProfileStatus_status__3KL3I",no_current_status:"ProfileStatus_no_current_status__86MZC"}}},[[168,1,2]]]);
//# sourceMappingURL=main.7dd53a12.chunk.js.map