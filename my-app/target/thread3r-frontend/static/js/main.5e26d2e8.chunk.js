(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{113:function(e,t,r){},311:function(e,t,r){},337:function(e,t,r){},407:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(0),c=r(21),s=r.n(c),i=r(34),o=r(2),u=r(6),l=r(26),j=(r(190),r(36)),d=r.n(j),b="http://csci4830.ddns.net:8080/thread3r-backend/api/auth/",h={register:function(e,t,r){return d.a.post(b+"register",{username:e,email:t,password:r})},login:function(e,t){return d.a.post(b+"login",{username:e,password:t}).then((function(e){return e.data.token&&localStorage.setItem("user",JSON.stringify(e.data)),e.data}))},logout:function(){localStorage.removeItem("user")},getCurrentUser:function(){return JSON.parse(localStorage.getItem("user"))}},p=r(104),O=r.n(p),m=r(66),f=r.n(m),x=r(105),v=r.n(x),g=(r(113),function(e){if(!e)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})}),w=function(e){var t=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],p=Object(n.useState)(!1),m=Object(u.a)(p,2),x=m[0],w=m[1],y=Object(n.useState)(""),N=Object(u.a)(y,2),S=N[0],C=N[1];return Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"card card-container",children:[Object(a.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(a.jsxs)(O.a,{onSubmit:function(a){a.preventDefault(),C(""),w(!0),t.current.validateAll(),0===r.current.context._errors.length?h.login(i,d).then((function(){e.history.push("/profile"),window.location.reload()}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();w(!1),C(t)})):w(!1)},ref:t,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)(f.a,{type:"text",className:"form-control",name:"username",value:i,onChange:function(e){var t=e.target.value;o(t)},validations:[g]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(f.a,{type:"password",className:"form-control",name:"password",value:d,onChange:function(e){var t=e.target.value;b(t)},validations:[g]})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("button",{className:"btn btn-primary btn-block",disabled:x,children:[x&&Object(a.jsx)("span",{className:"spinner-border spinner-border-sm"}),Object(a.jsx)("span",{children:"Login"})]})}),S&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:S})}),Object(a.jsx)(v.a,{style:{display:"none"},ref:r})]})]})})},y=r(166),N=function(e){if(!e)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This field is required!"})},S=function(e){if(!Object(y.isEmail)(e))return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"This is not a valid email."})},C=function(e){if(e.length<3||e.length>20)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The username must be between 3 and 20 characters."})},k=function(e){if(e.length<6||e.length>40)return Object(a.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The password must be between 6 and 40 characters."})},T=function(e){var t=Object(n.useRef)(),r=Object(n.useRef)(),c=Object(n.useState)(""),s=Object(u.a)(c,2),i=s[0],o=s[1],l=Object(n.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],p=Object(n.useState)(""),m=Object(u.a)(p,2),x=m[0],g=m[1],w=Object(n.useState)(""),y=Object(u.a)(w,2),T=y[0],G=y[1],I=Object(n.useState)(!1),E=Object(u.a)(I,2),P=E[0],F=E[1],U=Object(n.useState)(""),z=Object(u.a)(U,2),A=z[0],q=z[1];return Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsxs)("div",{className:"card card-container",children:[Object(a.jsx)("img",{src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png",alt:"profile-img",className:"profile-img-card"}),Object(a.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),q(""),F(!1),t.current.validateAll(),0===r.current.context._errors.length&&(x!==T?(q("The passwords do not match"),F(!1)):h.register(i,d,x).then((function(e){q(e.data.message),F(!0)}),(function(e){var t=e.response&&e.response.data&&e.response.data.message||e.message||e.toString();q(t),F(!1)})))},ref:t,children:[!P&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"username",children:"Username"}),Object(a.jsx)(f.a,{type:"text",className:"form-control",name:"username",value:i,onChange:function(e){var t=e.target.value;o(t)},validations:[N,C]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email"}),Object(a.jsx)(f.a,{type:"text",className:"form-control",name:"email",value:d,onChange:function(e){var t=e.target.value;b(t)},validations:[N,S]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)(f.a,{type:"password",className:"form-control",name:"password",value:x,onChange:function(e){var t=e.target.value;g(t)},validations:[N,k]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"verifypassword",children:"Verify Password"}),Object(a.jsx)(f.a,{type:"password",className:"form-control",name:"verifyPassword",value:T,onChange:function(e){var t=e.target.value;G(t)}})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{className:"btn btn-primary btn-block",children:"Sign Up"})})]}),A&&Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("div",{className:P?"alert alert-success":"alert alert-danger",role:"alert",children:A})}),Object(a.jsx)(v.a,{style:{display:"none"},ref:r})]})]})})},G=r(11),I=r.n(G),E=r(29);function P(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.token?{Authorization:"Bearer "+e.token}:{}}var F="http://csci4830.ddns.net:8080/thread3r-backend/api/groups/",U=function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+"subscribed",{userId:t,headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+t,{headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A={getSubscribed:U,searchGroups:function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+"search?name=",{searchToken:t,headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getAllGroups:function(){var e=Object(E.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F,{headers:P()});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getAllThreads:function(){var e=Object(E.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+"threads",{headers:P()});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getGroupThreads:function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+t+"/threads",{headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),postThread:function(){var e=Object(E.a)(I.a.mark((function e(t,r,a){var n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(F+t+"/threads",{title:r,content:a},{headers:P()});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r,a){return e.apply(this,arguments)}}(),getThread:function(){var e=Object(E.a)(I.a.mark((function e(t,r){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+t+"/threads/"+r,{headers:P()});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),getGroup:z,getComments:function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(F+"threads/"+t+"/comments",{headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),postComment:function(){var e=Object(E.a)(I.a.mark((function e(t,r){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(F+"threads/"+t+"/comments",{content:r},{headers:P()});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Subscribe:function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(F+t+"/subscribe",{},{headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unSubscribe:function(){var e=Object(E.a)(I.a.mark((function e(t){var r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(F+t+"/unsubscribe",{},{headers:P()});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),createGroup:function(){var e=Object(E.a)(I.a.mark((function e(t,r){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post(F,{name:t,description:r},{headers:P()});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},q=r(83),R=r(52),J=r(414),B=r(67),Y=(r(96),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){A.getAllThreads().then((function(e){c(e)})).catch((function(e){console.error(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("center",{children:Object(a.jsx)("h1",{children:"Recent Threads"})}),Object(a.jsx)("ul",{children:r.map((function(e){return Object(a.jsx)(q.a,{gutter:16,className:"group-row",children:Object(a.jsx)(R.a,{span:23,children:Object(a.jsx)(J.a,{title:e.title,bordered:!0,children:Object(a.jsxs)(i.b,{to:"/threads/"+e.group+"/"+e.id,children:[Object(a.jsx)(B.a,{type:"primary",children:"Go To Thread"}),Object(a.jsx)("br",{})]})})})})}))})]})}),_=function(){var e=h.getCurrentUser();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("header",{className:"jumbotron",children:Object(a.jsxs)("h3",{children:["Profile: ",Object(a.jsx)("strong",{children:e.username})]})}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"Email:"})," ",e.email]})]})},D=r(413),L=r(124),W=r(415),V=(r(311),D.a.Search),H=L.a.TabPane,$=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],c=t[1],s=Object(n.useState)([]),o=Object(u.a)(s,2),l=o[0],j=o[1],d=Object(n.useState)([]),b=Object(u.a)(d,2),h=b[0],p=b[1],O=Object(n.useState)([]),m=Object(u.a)(O,2),f=m[0],x=m[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),w=g[0],y=g[1];Object(n.useEffect)((function(){A.getAllGroups().then((function(e){j(e),p(e)})).catch((function(e){console.error(e)}))}),[]),Object(n.useEffect)((function(){A.getSubscribed().then((function(e){x(e)})).catch((function(e){console.error(e)}))}),[]);return Object(a.jsxs)(L.a,{onChange:function(e){"1"===e&&window.location.reload(!1)},type:"card",children:[Object(a.jsx)(H,{tab:"Subscribed Groups",children:Object(a.jsx)("div",{className:"group-cards",children:Object(a.jsx)("ul",{children:f.map((function(e){return Object(a.jsx)(q.a,{gutter:16,className:"group-row",children:Object(a.jsx)(R.a,{span:23,children:Object(a.jsx)(J.a,{title:e.name,bordered:!0,children:Object(a.jsxs)(i.b,{to:"/groups/"+e.id,children:[" ",Object(a.jsx)(B.a,{type:"primary",size:"small",children:"Go To Group"})]})})})})}))})})},"1"),Object(a.jsx)(H,{tab:"Search Groups",children:Object(a.jsxs)("div",{className:"group-search",children:[Object(a.jsx)("div",{className:"search-bar",children:Object(a.jsx)(V,{placeholder:"Search for group",size:"large",onSearch:function(e){if(e){var t=l.filter((function(t){var r=t.name?t.name.toUpperCase():"".toUpperCase(),a=e.toUpperCase();return r.indexOf(a)>-1}));p(t),c(e),console.log(r)}else p(l),c(e)}})}),Object(a.jsxs)("div",{className:"group-cards",children:[w&&Object(a.jsx)(W.a,{message:w,type:"info"}),Object(a.jsx)("ul",{children:h.map((function(e){return Object(a.jsx)(q.a,{gutter:16,className:"group-row",children:Object(a.jsx)(R.a,{span:23,children:Object(a.jsxs)(J.a,{title:e.name,bordered:!0,children:[Object(a.jsx)(B.a,{type:"primary",size:"small",onClick:function(){return t=e.id,void A.Subscribe(t).then((function(e){y("You have subscribed successfully!")}),(function(e){y("You are already subscribed!")}));var t},children:"Subscribe"})," ",Object(a.jsx)(B.a,{type:"primary",size:"small",onClick:function(){return t=e.id,void A.unSubscribe(t).then((function(e){y("You have unsubscribed successfully!")}),(function(e){y("You are not subscribed or you're the creator of this group!")}));var t},children:"Unsubscribe"})," ",Object(a.jsxs)(i.b,{to:"/groups/"+e.id,children:[" ",Object(a.jsx)(B.a,{type:"primary",size:"small",children:"Go To Group"})]})]})})})}))})]})]})},"2")]})},K=r(412),M=r(411),Q=(r(337),{labelCol:{span:8},wrapperCol:{span:16}}),X={wrapperCol:{offset:8,span:16}},Z=function(e){var t=function(){window.location.reload(!1)},r=Object(n.useState)([]),c=Object(u.a)(r,2),s=c[0],l=c[1],j=Object(n.useState)([]),d=Object(u.a)(j,2),b=d[0],h=d[1],p=e.match.params.id,O=Object(n.useState)(!1),m=Object(u.a)(O,2),f=m[0],x=m[1],v=function(){x(!1)};return Object(n.useEffect)((function(){A.getGroup(p).then((function(e){l(e)})).catch((function(e){console.error(e)}))}),[p]),Object(n.useEffect)((function(){A.getGroupThreads(p).then((function(e){h(e)})).catch((function(e){console.error(e)}))}),[p]),Object(a.jsxs)("div",{className:"group-page",children:[Object(a.jsx)(q.a,{gutter:16,children:Object(a.jsx)(R.a,{span:24,children:Object(a.jsxs)(J.a,{title:s.name,bordered:!0,children:[Object(a.jsx)("p",{children:s.description}),Object(a.jsxs)("p",{children:["Creator: ",s.creator]}),Object(a.jsxs)("p",{children:["Created: ",s.created]}),Object(a.jsx)(B.a,{size:"small",type:"primary",onClick:function(){x(!0)},children:"Create Thread"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("ul",{children:b.map((function(e){return Object(a.jsx)(q.a,{gutter:16,className:"group-row",children:Object(a.jsx)(R.a,{span:23,children:Object(a.jsx)(J.a,{title:e.title,bordered:!0,children:Object(a.jsxs)(i.b,{to:"/threads/"+s.id+"/"+e.id,children:[Object(a.jsx)(B.a,{size:"small",type:"primary",children:"Go To Thread"}),Object(a.jsx)("br",{})]})})})})}))})]})})}),Object(a.jsx)(K.a,{title:"Create a new thread!",visible:f,onOk:function(e){x(!1)},onCancel:v,allowClear:"true",footer:[Object(a.jsx)(B.a,{onClick:v,children:"Cancel"},"back")],children:Object(a.jsxs)(M.a,Object(o.a)(Object(o.a)({},Q),{},{name:"basic",initialValues:{remember:!0},onFinish:function(e){A.postThread(s.id,e.ThreadTitle,e.ThreadContent).then((function(){x(!1),t()}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(a.jsx)(M.a.Item,{label:"Thread Title",name:"ThreadTitle",rules:[{required:!0,message:"Please input a title!"}],children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(M.a.Item,{label:"Thread Content",name:"ThreadContent",rules:[{required:!0,message:"Please input some content!"}],children:Object(a.jsx)(D.a,{})}),Object(a.jsx)(M.a.Item,Object(o.a)(Object(o.a)({},X),{},{children:Object(a.jsx)(B.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})]})},ee=r(410),te=r(180),re=D.a.Search,ae=function(e){var t=Object(n.useState)([]),r=Object(u.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),l=o[0],j=o[1],d=e.match.params.threadId,b=e.match.params.groupId,h=Object(n.useState)(!1),p=Object(u.a)(h,2),O=p[0],m=p[1],f=function(){window.location.reload(!1)},x=function(){m(!1)};return Object(n.useEffect)((function(){A.getComments(d).then((function(e){j(e)})).catch((function(e){console.error(e)}))}),[d]),Object(n.useEffect)((function(){A.getThread(b,d).then((function(e){s(e)})).catch((function(e){console.error(e)}))}),[d,b]),Object(n.useEffect)((function(){A.getComments(d).then((function(e){j(e)})).catch((function(e){console.error(e)}))}),[d]),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)(q.a,{gutter:16,className:"group-row",children:Object(a.jsx)(R.a,{span:23,children:Object(a.jsxs)(J.a,{title:c.title,bordered:!0,children:[Object(a.jsx)("p",{children:c.content}),Object(a.jsx)(B.a,{type:"primary",onClick:function(){m(!0)},children:"Add Comment"}),Object(a.jsx)("br",{})]})})})}),Object(a.jsx)(K.a,{title:"Post a Comment!",visible:O,onOk:function(e){m(!1)},onCancel:x,allowClear:"true",footer:[Object(a.jsx)(B.a,{onClick:x,children:"Cancel"},"back")],children:Object(a.jsx)(re,{placeholder:"Write your comment here!",enterButton:"Post",size:"large",onSearch:function(e){A.postComment(d,e).then((function(){m(!1),f()}))}})}),Object(a.jsx)("ul",{children:l.map((function(e){return Object(a.jsx)(ee.a,{author:e.creator,content:Object(a.jsx)("p",{children:e.content}),datetime:Object(a.jsx)(te.a,{title:e.created,children:Object(a.jsx)("span",{children:e.created})})})}))})]})},ne={labelCol:{span:8},wrapperCol:{span:10}},ce={wrapperCol:{offset:8,span:16}},se=function(e){var t=Object(n.useState)(""),r=Object(u.a)(t,2),c=r[0],s=r[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),j=l[0],d=l[1],b=Object(n.useState)(""),h=Object(u.a)(b,2),p=h[0],O=h[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:Object(a.jsx)("center",{children:Object(a.jsx)("h1",{children:"Group Creation"})})}),Object(a.jsx)("div",{children:p&&Object(a.jsx)(W.a,{message:p,type:"info"})}),Object(a.jsx)("br",{}),Object(a.jsxs)(M.a,Object(o.a)(Object(o.a)({},ne),{},{name:"basic",children:[Object(a.jsx)(M.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please give your group a name!"}],children:Object(a.jsx)(D.a,{onChange:function(e){var t=e.target.value;s(t)}})}),Object(a.jsx)(M.a.Item,{label:"Description",name:"description",rules:[{required:!0,message:"Please give your group a description!"}],children:Object(a.jsx)(D.a,{onChange:function(e){var t=e.target.value;d(t)}})}),Object(a.jsx)(M.a.Item,Object(o.a)(Object(o.a)({},ce),{},{children:Object(a.jsx)(B.a,{type:"primary",htmlType:"submit",onSubmit:function(t){A.createGroup(c,j).then((function(t){e.history.push("/groups/"+t.id)}),(function(e){O("A group with that name already exists!")}))},children:"Create"})}))]}))]})},ie=function(){var e=Object(n.useState)(void 0),t=Object(u.a)(e,2),r=t[0],c=t[1];Object(n.useEffect)((function(){var e=h.getCurrentUser();e&&c(e)}),[]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:[r?Object(a.jsx)(i.b,{to:"/",className:"navbar-brand",children:"Thread3r"}):Object(a.jsx)(i.b,{to:"/login",className:"navbar-brand",children:"Thread3r"}),Object(a.jsxs)("div",{className:"navbar-nav mr-auto",children:[r&&Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/home",className:"nav-link",children:"Home"})}),r&&Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/groupsearch",className:"nav-link",children:"Groups"})}),r&&Object(a.jsx)("li",{children:Object(a.jsx)(i.b,{to:"/groupcreate",className:"nav-link",children:"Create Group"})})]}),r?Object(a.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/profile",className:"nav-link",children:r.username})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/login",className:"nav-link",onClick:function(){h.logout(),c(void 0)},children:"Log Out"})})]}):Object(a.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{to:"/register",className:"nav-link",children:"Register"})})]})]}),Object(a.jsx)("div",{className:"container mt-3",children:Object(a.jsxs)(l.c,{children:[Object(a.jsx)(l.a,{exact:!0,path:["/","/home"],component:Y}),Object(a.jsx)(l.a,{exact:!0,path:"/login",component:w}),Object(a.jsx)(l.a,{exact:!0,path:"/register",component:T}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",component:_}),Object(a.jsx)(l.a,{exact:!0,path:"/groupsearch",component:$}),Object(a.jsx)(l.a,{exact:!0,path:"/groupcreate",component:se}),Object(a.jsx)(l.a,{exact:!0,path:"/groups/:id",render:function(e){return Object(a.jsx)(Z,Object(o.a)({},e))}}),Object(a.jsx)(l.a,{exact:!0,path:"/threads/:groupId/:threadId",render:function(e){return Object(a.jsx)(ae,Object(o.a)({},e))}})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(a.jsx)(i.a,{basename:"/thread3r-frontend",children:Object(a.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[407,1,2]]]);
//# sourceMappingURL=main.5e26d2e8.chunk.js.map