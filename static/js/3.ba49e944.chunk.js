(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{297:function(e,a,t){e.exports={pageTitle:"users_pageTitle__20YzM",body:"users_body__4tW86",userBlock:"users_userBlock__3j0EK",avatar_img:"users_avatar_img__1KKc2",avatar_follow_block:"users_avatar_follow_block__3PjwU",followButton:"users_followButton__olwdj",unfollowButton:"users_unfollowButton__2zHp9",aboutUser_block:"users_aboutUser_block__3Jd61",name_block:"users_name_block__1hsaz",name:"users_name__1z1Yd",status_block:"users_status_block__3x33W"}},299:function(e,a,t){e.exports={paginator:"Paginator_paginator__2h-qX",arrows:"Paginator_arrows__I10ww",selectedPage:"Paginator_selectedPage__1B1i5"}},306:function(e,a,t){"use strict";t.r(a);var n=t(42),o=t(43),s=t(44),r=t(45),l=t(0),c=t.n(l),i=t(17),u=t(133),g=t(58),m=t(297),f=t.n(m),p=t(47),_=t(34),d=t(299),w=t.n(d),b=function(e){for(var a=e.totalItemsCount,t=e.pageSize,n=e.currentPage,o=e.onPageChanged,s=e.portionSize,r=void 0===s?10:s,i=Math.ceil(a/t),u=[],g=1;g<=i;g++)u.push(g);var m=Math.ceil(i/r),f=Object(l.useState)(1),p=Object(_.a)(f,2),d=p[0],b=p[1],h=(d-1)*r+1,v=d*r,P=!(d>1),E=!(m>d);return c.a.createElement("div",{className:w.a.paginator},c.a.createElement("button",{className:w.a.arrows,disabled:P,onClick:function(){b(d-1)}},c.a.createElement("i",{className:"fas fa-angle-left"})),u.filter((function(e){return e>=h&&e<=v})).map((function(e,a){return c.a.createElement("button",{key:a,className:n===e?w.a.selectedPage:void 0,onClick:function(a){o(e)}},e)})),c.a.createElement("button",{className:w.a.arrows,disabled:E,onClick:function(){b(d+1)}},c.a.createElement("i",{className:"fas fa-angle-right"})))},h=t(73),v=t.n(h),P=t(14),E=function(e){var a=e.user,t=e.isFollowing,n=e.follow,o=e.unfollow;Object(g.a)(e,["user","isFollowing","follow","unfollow"]);return c.a.createElement("div",{className:f.a.userBlock,key:a.id},c.a.createElement("div",{className:f.a.avatar_follow_block},c.a.createElement(P.b,{to:"/profile/"+a.id},c.a.createElement("div",null,c.a.createElement("img",{src:null!=a.photos.large?a.photos.large:v.a,alt:"\u0424\u043e\u0442\u043e",className:f.a.avatar_img}))),a.followed?c.a.createElement("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){o(a.id)},className:f.a.unfollowButton},"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"):c.a.createElement("button",{disabled:t.some((function(e){return e===a.id})),onClick:function(){n(a.id)},className:f.a.followButton},"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f")),c.a.createElement("div",{className:f.a.aboutUser_block},c.a.createElement("div",{className:f.a.name_block},c.a.createElement("div",{className:f.a.name},a.name)),c.a.createElement("div",{className:f.a.status_block},"C\u0442\u0430\u0442\u0443\u0441: ",c.a.createElement("p",null,a.status))))},k=function(e){var a=e.totalUsersCount,t=e.currentPage,n=e.onPageChanged,o=e.pageSize,s=Object(g.a)(e,["totalUsersCount","currentPage","onPageChanged","pageSize"]);return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:f.a.pageTitle},"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),c.a.createElement(b,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:o}),s.isFetching?c.a.createElement(p.a,null):c.a.createElement("div",{className:f.a.body},s.users.map((function(e){return c.a.createElement(E,{user:e,key:e.id,unfollow:s.unfollow,isFollowing:s.isFollowing,follow:s.follow})})))))},C=t(10),N=function(e){return e.usersPage.users},z=function(e){return e.usersPage.pageSize},F=function(e){return e.usersPage.totalUsersCount},j=function(e){return e.usersPage.currentPage},U=function(e){return e.usersPage.isFetching},S=function(e){return e.usersPage.isFollowing},y=function(e){Object(r.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(e=a.call.apply(a,[this].concat(s))).onPageChanged=function(a){var t=e.props.pageSize;e.props.requestUsers(a,t)},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,a=e.currentPage,t=e.pageSize;this.props.requestUsers(a,t),document.title="\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(k,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,users:this.props.users,isFetching:this.props.isFetching,isFollowing:this.props.isFollowing}))}}]),t}(c.a.Component);a.default=Object(C.compose)(Object(i.b)((function(e){return{users:N(e),pageSize:z(e),totalUsersCount:F(e),currentPage:j(e),isFetching:U(e),isFollowing:S(e)}}),{follow:u.b,unfollow:u.f,setCurrentPage:u.d,toggleIsFollowing:u.e,requestUsers:u.c}))(y)}}]);
//# sourceMappingURL=3.ba49e944.chunk.js.map