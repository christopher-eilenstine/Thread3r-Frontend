(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(2),r=a(50),c=a.n(r),o=a(11),i=a(4),l=a(3),j=(a(58),a(59),a(13)),d=a.n(j),b="http://localhost:8080/api/auth/",u={register:function(e,t,a){return d.a.post(b+"register",{username:e,email:t,password:a})},login:function(e,t){return d.a.post(b+"login",{username:e,password:t}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user")},getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))}},m=a(19),h=a.n(m),O=a(14),g=a.n(O),v=a(20),x=a.n(v),f=function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},p=function(e){var t=Object(s.useRef)(),a=Object(s.useRef)(),r=Object(s.useState)(""),c=Object(i.a)(r,2),o=c[0],l=c[1],j=Object(s.useState)(""),d=Object(i.a)(j,2),b=d[0],m=d[1],O=Object(s.useState)(!1),v=Object(i.a)(O,2),p=v[0],N=v[1],S=Object(s.useState)(""),w=Object(i.a)(S,2),k=w[0],y=w[1];return Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"card card-container",children:[Object(n.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(n.jsxs)(h.a,{onSubmit:function(n){n.preventDefault(),y(""),N(!0),t.current.validateAll(),0===a.current.context._errors.length?u.login(o,b).then((function(){e.history.push("/profile"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();N(!1),y(t)})):N(!1)},ref:t,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"username",children:"Username"}),Object(n.jsx)(g.a,{type:"text",className:"form-control",name:"username",value:o,onChange:function(e){var t=e.target.value;l(t)},validations:[f]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(g.a,{type:"password",className:"form-control",name:"password",value:b,onChange:function(e){var t=e.target.value;m(t)},validations:[f]})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsxs)("button",{className:"btn btn-primary btn-block",disabled:p,children:[p&&Object(n.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(n.jsx)("span",{children:"Login"})]})}),k&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:k})}),Object(n.jsx)(x.a,{style:{display:"none"},ref:a})]})]})})},N=a(51),S=function(e){if(!e)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},w=function(e){if(!Object(N.isEmail)(e))return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},k=function(e){if(e.length<3||e.length>20)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},y=function(e){if(e.length<6||e.length>40)return Object(n.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},C=function(e){var t=Object(s.useRef)(),a=Object(s.useRef)(),r=Object(s.useState)(""),c=Object(i.a)(r,2),o=c[0],l=c[1],j=Object(s.useState)(""),d=Object(i.a)(j,2),b=d[0],m=d[1],O=Object(s.useState)(""),v=Object(i.a)(O,2),f=v[0],p=v[1],N=Object(s.useState)(!1),C=Object(i.a)(N,2),U=C[0],B=C[1],E=Object(s.useState)(""),I=Object(i.a)(E,2),T=I[0],A=I[1];return Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsxs)("div",{className:"card card-container",children:[Object(n.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(n.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),A(""),B(!1),t.current.validateAll(),0===a.current.context._errors.length&&u.register(o,b,f).then((function(e){A(e.data.message),B(!0)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();A(t),B(!1)}))},ref:t,children:[!U&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"username",children:"Username"}),Object(n.jsx)(g.a,{type:"text",className:"form-control",name:"username",value:o,onChange:function(e){var t=e.target.value;l(t)},validations:[S,k]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",children:"Email"}),Object(n.jsx)(g.a,{type:"text",className:"form-control",name:"email",value:b,onChange:function(e){var t=e.target.value;m(t)},validations:[S,w]})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",children:"Password"}),Object(n.jsx)(g.a,{type:"password",className:"form-control",name:"password",value:f,onChange:function(e){var t=e.target.value;p(t)},validations:[S,y]})]}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),T&&Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("div",{className:U?"alert alert-success":"alert alert-danger",role:"alert",children:T})}),Object(n.jsx)(x.a,{style:{display:"none"},ref:a})]})]})})};function U(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var B="http://localhost:8080/api/test/",E={getPublicContent:function(){return d.a.get(B+"all")},getUserBoard:function(){return d.a.get(B+"user",{headers:U()})},getModeratorBoard:function(){return d.a.get(B+"mod",{headers:U()})},getAdminBoard:function(){return d.a.get(B+"admin",{headers:U()})}},I=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){E.getPublicContent().then((function(e){r(e.data)}),(function(e){var t=e.response&&e.response.data||e.message||e.toString();r(t)}))}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("header",{className:"jumbotron",children:Object(n.jsx)("h3",{children:a})})})},T=function(){var e=u.getCurrentUser();return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("header",{className:"jumbotron",children:Object(n.jsxs)("h3",{children:[Object(n.jsx)("strong",{children:e.username})," Profile"]})}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Token:"})," ",e.token.substring(0,20)," ..."," ",e.token.substr(e.token.length-20)]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("strong",{children:"Email:"})," ",e.email]})]})},A=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){E.getUserBoard().then((function(e){r(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();r(t)}))}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("header",{className:"jumbotron",children:Object(n.jsx)("h3",{children:a})})})},F=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){E.getModeratorBoard().then((function(e){r(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();r(t)}))}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("header",{className:"jumbotron",children:Object(n.jsx)("h3",{children:a})})})},J=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){E.getAdminBoard().then((function(e){r(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();r(t)}))}),[]),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("header",{className:"jumbotron",children:Object(n.jsx)("h3",{children:a})})})},P=function(){var e=Object(s.useState)(void 0),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(s.useEffect)((function(){var e=u.getCurrentUser();e&&r(e)}),[]);return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(n.jsx)(o.b,{to:"/",className:"navbar-brand",children:"bezKoder"}),Object(n.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/home",className:"nav-link",children:"Home"})}),a&&Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/user",className:"nav-link",children:"User"})})]}),a?Object(n.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/profile",className:"nav-link",children:a.username})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{href:"/login",className:"nav-link",onClick:function(){u.logout()},children:"LogOut"})})]}):Object(n.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(n.jsx)("div",{className:"container mt-3",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:["/","/home"],component:I}),Object(n.jsx)(l.a,{exact:!0,path:"/login",component:p}),Object(n.jsx)(l.a,{exact:!0,path:"/register",component:C}),Object(n.jsx)(l.a,{exact:!0,path:"/profile",component:T}),Object(n.jsx)(l.a,{path:"/user",component:A}),Object(n.jsx)(l.a,{path:"/mod",component:F}),Object(n.jsx)(l.a,{path:"/admin",component:J})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(n.jsx)(o.a,{children:Object(n.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){}},[[161,1,2]]]);
//# sourceMappingURL=main.d05a5b85.chunk.js.map