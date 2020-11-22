(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{161:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(2),n=a(50),c=a.n(n),l=a(11),o=a(3),i=a(4),j=(a(58),a(59),a(14)),d=a.n(j),b="http://localhost:8080/api/auth/",m={register:function(e,t,a){return d.a.post(b+"register",{username:e,email:t,password:a})},login:function(e,t){return d.a.post(b+"login",{username:e,password:t}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user")},getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))}},u=a(16),h=a.n(u),O=a(12),x=a.n(O),g=a(17),v=a.n(g),f=function(e){if(!e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},p=function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useState)(""),c=Object(o.a)(n,2),l=c[0],i=c[1],j=Object(r.useState)(""),d=Object(o.a)(j,2),b=d[0],u=d[1],O=Object(r.useState)(!1),g=Object(o.a)(O,2),p=g[0],N=g[1],S=Object(r.useState)(""),k=Object(o.a)(S,2),w=k[0],y=k[1];return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(s.jsxs)(h.a,{onSubmit:function(s){s.preventDefault(),y(""),N(!0),t.current.validateAll(),0===a.current.context._errors.length?m.login(l,b).then((function(){e.history.push("/profile"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();N(!1),y(t)})):N(!1)},ref:t,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"username",value:l,onChange:function(e){var t=e.target.value;i(t)},validations:[f]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)(x.a,{type:"password",className:"form-control",name:"password",value:b,onChange:function(e){var t=e.target.value;u(t)},validations:[f]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("button",{className:"btn btn-primary btn-block",disabled:p,children:[p&&Object(s.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(s.jsx)("span",{children:"Login"})]})}),w&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:w})}),Object(s.jsx)(v.a,{style:{display:"none"},ref:a})]})]})})},N=a(51),S=function(e){if(!e)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},k=function(e){if(!Object(N.isEmail)(e))return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},w=function(e){if(e.length<3||e.length>20)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},y=function(e){if(e.length<6||e.length>40)return Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},C=function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useState)(""),c=Object(o.a)(n,2),l=c[0],i=c[1],j=Object(r.useState)(""),d=Object(o.a)(j,2),b=d[0],u=d[1],O=Object(r.useState)(""),g=Object(o.a)(O,2),f=g[0],p=g[1],N=Object(r.useState)(!1),C=Object(o.a)(N,2),U=C[0],B=C[1],E=Object(r.useState)(""),T=Object(o.a)(E,2),A=T[0],F=T[1];return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsxs)("div",{className:"card card-container",children:[Object(s.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(s.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),F(""),B(!1),t.current.validateAll(),0===a.current.context._errors.length&&m.register(l,b,f).then((function(e){F(e.data.message),B(!0)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();F(t),B(!1)}))},ref:t,children:[!U&&Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Username"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"username",value:l,onChange:function(e){var t=e.target.value;i(t)},validations:[S,w]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"email",children:"Email"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"email",value:b,onChange:function(e){var t=e.target.value;u(t)},validations:[S,k]})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"password",children:"Password"}),Object(s.jsx)(x.a,{type:"password",className:"form-control",name:"password",value:f,onChange:function(e){var t=e.target.value;p(t)},validations:[S,y]})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),A&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:U?"alert alert-success":"alert alert-danger",role:"alert",children:A})}),Object(s.jsx)(v.a,{style:{display:"none"},ref:a})]})]})})};function U(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var B="http://localhost:8080/api/test/",E={getPublicContent:function(){return d.a.get(B+"all")},getUserBoard:function(){return d.a.get(B+"user",{headers:U()})},getModeratorBoard:function(){return d.a.get(B+"mod",{headers:U()})},getAdminBoard:function(){return d.a.get(B+"admin",{headers:U()})}},T=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){E.getPublicContent().then((function(e){n(e.data)}),(function(e){var t=e.response&&e.response.data||e.message||e.toString();n(t)}))}),[]),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:a})})})},A=function(){var e=m.getCurrentUser();return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsxs)("h3",{children:[Object(s.jsx)("strong",{children:e.username})," Profile"]})}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Token:"})," ",e.token.substring(0,20)," ..."," ",e.token.substr(e.token.length-20)]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Id:"})," ",e.id]}),Object(s.jsxs)("p",{children:[Object(s.jsx)("strong",{children:"Email:"})," ",e.email]})]})},F=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){E.getUserBoard().then((function(e){n(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();n(t)}))}),[]),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:a})})})},I=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){E.getModeratorBoard().then((function(e){n(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();n(t)}))}),[]),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:a})})})},R=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){E.getAdminBoard().then((function(e){n(e.data)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();n(t)}))}),[]),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("header",{className:"jumbotron",children:Object(s.jsx)("h3",{children:a})})})},J=function(e){var t=Object(r.useRef)(),a=Object(r.useRef)(),n=Object(r.useState)(""),c=Object(o.a)(n,2),l=c[0],i=c[1],j=Object(r.useState)(!1),d=Object(o.a)(j,2),b=d[0],m=d[1],u=Object(r.useState)(""),O=Object(o.a)(u,2),g=O[0],f=O[1];return Object(s.jsx)("div",{className:"col-md-12",children:Object(s.jsx)("div",{className:"card card-container",children:Object(s.jsxs)(h.a,{onSubmit:function(e){e.preventDefault(),f(""),m(!0),t.current.validateAll(),0===a.current.context._errors.length||m(!1)},ref:t,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{htmlFor:"username",children:"Search for a group!"}),Object(s.jsx)(x.a,{type:"text",className:"form-control",name:"username",value:l,onChange:function(e){var t=e.target.value;i(t)}})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsxs)("button",{className:"btn btn-primary btn-block",disabled:b,children:[b&&Object(s.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(s.jsx)("span",{children:"Submit"})]})}),g&&Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:g})}),Object(s.jsx)(v.a,{style:{display:"none"},ref:a})]})})})},P=function(){var e=Object(r.useState)(void 0),t=Object(o.a)(e,2),a=t[0],n=t[1];Object(r.useEffect)((function(){var e=m.getCurrentUser();e&&n(e)}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[Object(s.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Thread3r"}),Object(s.jsxs)("div",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{to:"/home",className:"nav-link",children:"Home"})}),Object(s.jsx)("li",{children:Object(s.jsx)(l.b,{to:"/groups",className:"nav-link",children:"Group Search"})}),a&&Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{to:"/user",className:"nav-link",children:"User"})})]}),a?Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{to:"/profile",className:"nav-link",children:a.username})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)("a",{href:"/login",className:"nav-link",onClick:function(){m.logout()},children:"LogOut"})})]}):Object(s.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(s.jsx)("li",{className:"nav-item",children:Object(s.jsx)(l.b,{to:"/register",className:"nav-link",children:"Sign Up"})})]})]}),Object(s.jsx)("div",{className:"container mt-3",children:Object(s.jsxs)(i.c,{children:[Object(s.jsx)(i.a,{basename:"/thread3r",exact:!0,path:["/","/home"],component:T}),Object(s.jsx)(i.a,{basename:"/thread3r",exact:!0,path:"/login",component:p}),Object(s.jsx)(i.a,{basename:"/thread3r",exact:!0,path:"/register",component:C}),Object(s.jsx)(i.a,{basename:"/thread3r",exact:!0,path:"/profile",component:A}),Object(s.jsx)(i.a,{basename:"/thread3r",path:"/user",component:F}),Object(s.jsx)(i.a,{basename:"/thread3r",path:"/mod",component:I}),Object(s.jsx)(i.a,{basename:"/thread3r",path:"/admin",component:R}),Object(s.jsx)(i.a,{basename:"/thread3r",exact:!0,path:"/groups",component:J})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(s.jsx)(l.a,{children:Object(s.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){}},[[161,1,2]]]);
//# sourceMappingURL=main.547b40aa.chunk.js.map