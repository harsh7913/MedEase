"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[158],{3321:function(e,n,t){t(2791);var s=t(184);n.Z=function(){return(0,s.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var s=t(6355),r=t(184),a=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("footer",{children:[(0,r.jsx)("div",{className:"footer",children:(0,r.jsxs)("div",{className:"social",children:[(0,r.jsx)("h3",{children:"Social links"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"facebook",children:(0,r.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(s.tBk,{})})}),(0,r.jsx)("li",{className:"youtube",children:(0,r.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(s.V2E,{})})}),(0,r.jsx)("li",{className:"instagram",children:(0,r.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,r.jsx)(s.Zf_,{})})})]})]})}),(0,r.jsxs)("div",{className:"footer-bottom",children:["MedEase \xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,t){t.d(n,{Z:function(){return x}});var s=t(9439),r=t(2791),a=t(7689),o=t(1087),c=t(3495),i=t(9434),l=t(5318),d=t(3853),u=t(1213),m=t(456),h=t(184),x=function(){var e=(0,r.useState)(!1),n=(0,s.Z)(e,2),t=n[0],x=n[1],j=(0,i.I0)(),p=(0,a.s0)(),f=((0,i.v9)((function(e){return e.root.userInfo})),(0,r.useState)(localStorage.getItem("token")||"")),g=(0,s.Z)(f,2),v=g[0],N=(g[1],(0,r.useState)(localStorage.getItem("token")?(0,m.Z)(localStorage.getItem("token")):"")),b=(0,s.Z)(N,2),k=b[0];b[1];return(0,h.jsxs)("header",{children:[(0,h.jsxs)("nav",{className:t?"nav-active":"",children:[(0,h.jsx)("h2",{className:"nav-logo",children:(0,h.jsx)(o.OL,{to:"/",children:"MedEase"})}),(0,h.jsxs)("ul",{className:"nav-links",children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/",children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),k.isAdmin&&(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),!k.isAdmin&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,h.jsx)("li",{children:(0,h.jsx)(c.fO,{to:"/#contact",children:"Contact Us"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{to:"/profile",children:"Profile"})})]}),v?(0,h.jsx)("li",{children:(0,h.jsx)("span",{className:"btn",onClick:function(){j((0,l.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{className:"btn",to:"/login",children:"Login"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,h.jsxs)("div",{className:"menu-icons",children:[!t&&(0,h.jsx)(d.cur,{className:"menu-open",onClick:function(){x(!0)}}),t&&(0,h.jsx)(u.ySC,{className:"menu-close",onClick:function(){x(!1)}})]})]})}},3158:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var s=t(4165),r=t(5861),a=t(9439),o=t(2791),c=t(4942),i=t(1413),l=t(3263),d=t(3402),u=t(4373),m=t(4261),h=t(184),x=function(e){var n=e.setModalOpen,t=e.ele,x=(0,o.useState)({date:"",time:""}),j=(0,a.Z)(x,2),p=j[0],f=j[1],g=(0,o.useState)(""),v=(0,a.Z)(g,2),N=v[0],b=v[1];console.log(N);var k=function(e){var n=e.target,t=n.name,s=n.value;return f((0,i.Z)((0,i.Z)({},p),{},(0,c.Z)({},t,s)))},Z=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(r){var a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,d.ZP.promise(l.Z.post("/appointment/bookappointment",{doctorId:t.userId._id,date:p.date,time:p.time,doctorname:"".concat(t.userId.firstname," ").concat(t.userId.lastname),room_id:N},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 4:a=e.sent,a.data,n(!1),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}();return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:"modal flex-center",children:(0,h.jsxs)("div",{className:"modal__content",children:[(0,h.jsx)("h2",{className:"page-heading",children:"Book Appointment"}),(0,h.jsx)(u.QAE,{onClick:function(){n(!1)},className:"close-btn"}),(0,h.jsx)("div",{className:"register-container flex-center book",children:(0,h.jsxs)("form",{className:"register-form",children:[(0,h.jsx)("input",{type:"date",name:"date",className:"form-input",value:p.date,onChange:k}),(0,h.jsx)("input",{type:"time",name:"time",className:"form-input",value:p.time,onChange:k}),(0,h.jsx)("input",{type:"text",name:"room_id",className:"form-input 2",placeholder:"ROOM ID",onChange:function(e){return b(e.target.value)},value:N,readonly:"true"}),(0,h.jsx)("button",{onClick:function(e){e.preventDefault();var n=(0,m.Z)();b(n)},className:"btn form-btn",children:"Create Room_ID"}),(0,h.jsx)("button",{type:"submit",className:"btn form-btn",onClick:Z,children:"book"})]})})]})})})},j=function(e){var n=e.ele,t=(0,o.useState)(!1),s=(0,a.Z)(t,2),r=s[0],c=s[1];return(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-img flex-center",children:(0,h.jsx)("img",{src:n.userId.pic||"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",alt:"profile"})}),(0,h.jsxs)("h3",{className:"card-name",children:["Dr. ",n.userId.firstname+" "+n.userId.lastname]}),(0,h.jsxs)("p",{className:"specialization",children:[(0,h.jsx)("strong",{children:"Specialization: "}),n.specialization]}),(0,h.jsxs)("p",{className:"experience",children:[(0,h.jsx)("strong",{children:"Experience: "}),n.experience,"yrs"]}),(0,h.jsxs)("p",{className:"fees",children:[(0,h.jsx)("strong",{children:"Fees per consultation: "}),"$ ",n.fees]}),(0,h.jsxs)("p",{className:"phone",children:[(0,h.jsx)("strong",{children:"Phone: "}),n.userId.mobile]}),(0,h.jsx)("button",{className:"btn appointment-btn",onClick:function(){return c(!0)},children:"Book Appointment"}),r&&(0,h.jsx)(x,{setModalOpen:c,ele:n})]})},p=t(6794),f=t(3841),g=t(4971),v=t(3200),N=t(9434),b=t(5318),k=t(3321),Z=function(){var e=(0,o.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],i=(0,N.I0)(),l=(0,N.v9)((function(e){return e.root})).loading,d=function(){var e=(0,r.Z)((0,s.Z)().mark((function e(){var n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((0,b.K4)(!0)),e.next=3,(0,g.Z)("/doctor/getalldoctors");case 3:n=e.sent,c(n),i((0,b.K4)(!1));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){d()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(f.Z,{}),l&&(0,h.jsx)(v.Z,{}),!l&&(0,h.jsxs)("section",{className:"container doctors",children:[(0,h.jsx)("h2",{className:"page-heading",children:"Our Doctors"}),t.length>0?(0,h.jsx)("div",{className:"doctors-card-container",children:t.map((function(e){return(0,h.jsx)(j,{ele:e},e._id)}))}):(0,h.jsx)(k.Z,{})]}),(0,h.jsx)(p.Z,{})]})}}}]);
//# sourceMappingURL=158.6897d0e3.chunk.js.map