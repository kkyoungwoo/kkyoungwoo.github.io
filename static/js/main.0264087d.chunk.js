(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n(0),s=n.n(i),a=n(17),r=n.n(a),o=(n(66),n(43)),j=n(23),l=n(102),d=n(103),h=n(101),b=n(100),O=n(60),u=(n(67),[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}]),x=n(39),p=n(7),m=n(40);n(68);function f(){var e=Object(x.a)(["\n  font-size: 30px;\n  color : ","\n"]);return f=function(){return e},e}function g(){var e=Object(x.a)(["\nposition: inline-block;\nwidth: 100%;\nheight: 100px;\n  padding : 20px;\n"]);return g=function(){return e},e}var v=m.a.div(g()),N=m.a.h4(f(),(function(e){return e.title}));function S(e){return Object(c.jsxs)("p",{children:["\uc7ac\uace0: ",e.score[0]," "]})}var k=function(e){var t=Object(p.g)().id,n=Object(p.f)(),s=e.shoes.find((function(e){return e.id==t})),a=Object(i.useState)(!0),r=Object(j.a)(a,2),o=r[0],l=r[1],d=Object(i.useState)(""),h=Object(j.a)(d,2),b=h[0],O=h[1];return Object(i.useEffect)((function(){var e=setTimeout((function(){l(!1)}),2e3);return console.log("\uc548\ub155"),function(){clearTimeout(e)}}),[o]),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(v,{children:Object(c.jsx)(N,{title:"gray",className:"red",children:"Detail"})}),b,Object(c.jsx)("input",{type:"text",onChange:function(e){O(e.target.value)}}),!0===o?Object(c.jsx)("div",{className:"my-alert my-alert2",children:Object(c.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4."})}):null,Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+t+".jpg",width:"100%"})}),Object(c.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(c.jsx)("h4",{className:"pt-5",children:s.title}),Object(c.jsx)("p",{children:s.content}),Object(c.jsx)("p",{children:s.price}),Object(c.jsx)(S,{score:e.score}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){e.setScore([9,10,11])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){n.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},w=n(57),y=n.n(w),C=n(22);function B(e){return Object(c.jsxs)("div",{className:"col-md-4",children:[Object(c.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",width:"100%"}),Object(c.jsxs)("h4",{children:[" ",e.shoes.title,"  "]}),Object(c.jsxs)("p",{children:[" ",e.shoes.content," "]}),Object(c.jsxs)("p",{children:[" ",e.shoes.price," "]})]})}var F=function(){var e=Object(i.useState)(u),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(i.useState)([10,11,12]),r=Object(j.a)(a,2),x=r[0],m=r[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)(l.a,{bg:"light",expand:"lg",children:[Object(c.jsx)(l.a.Brand,{href:"#home",children:"shoose shop"}),Object(c.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(c.jsx)(l.a.Collapse,{id:"basic-navbar-nav",children:Object(c.jsxs)(d.a,{className:"ml-auto",children:[Object(c.jsx)(d.a.Link,{as:C.b,to:"/",children:"Home"}),Object(c.jsx)(d.a.Link,{as:C.b,to:"/detail",children:"Detail"}),Object(c.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(c.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(c.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(c.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(c.jsx)(h.a.Divider,{}),Object(c.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(c.jsxs)(p.c,{children:[Object(c.jsxs)(p.a,{exact:!0,path:"/",children:[Object(c.jsxs)(b.a,{className:"background",children:[Object(c.jsx)("h1",{children:"20% season oFF"}),Object(c.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(c.jsx)("p",{children:Object(c.jsx)(O.a,{variant:"primary",children:"Learn more"})})]}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return Object(c.jsx)(B,{shoes:n[t],i:t},t)}))}),Object(c.jsx)("button",{className:"btn btn-primary",onClick:function(){y.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),s([].concat(Object(o.a)(n),Object(o.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc5b4\uc694")}))},children:" \ub354\ubcf4\uae30 "})]})]}),Object(c.jsx)(p.a,{path:"/detail/:id",children:Object(c.jsx)(k,{shoes:n,score:x,setScore:m})})]})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(C.a,{children:Object(c.jsx)(F,{})})}),document.getElementById("root")),I()}},[[94,1,2]]]);
//# sourceMappingURL=main.0264087d.chunk.js.map