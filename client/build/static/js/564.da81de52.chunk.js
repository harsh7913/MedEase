"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{3321:function(e,t,n){n(2791);var r=n(184);t.Z=function(){return(0,r.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,t,n){n.d(t,{Z:function(){return i}});n(2791);var r=n(6355),s=n(184),i=function(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("footer",{children:[(0,s.jsx)("div",{className:"footer",children:(0,s.jsxs)("div",{className:"social",children:[(0,s.jsx)("h3",{children:"Social links"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{className:"facebook",children:(0,s.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.tBk,{})})}),(0,s.jsx)("li",{className:"youtube",children:(0,s.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.V2E,{})})}),(0,s.jsx)("li",{className:"instagram",children:(0,s.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,s.jsx)(r.Zf_,{})})})]})]})}),(0,s.jsxs)("div",{className:"footer-bottom",children:["MedEase \xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(9439),s=n(2791),i=n(7689),c=n(1087),o=n(3495),a=n(9434),l=n(5318),d=n(3853),h=n(1213),u=n(456),x=n(184),j=function(){var e=(0,s.useState)(!1),t=(0,r.Z)(e,2),n=t[0],j=t[1],m=(0,a.I0)(),p=(0,i.s0)(),f=((0,a.v9)((function(e){return e.root.userInfo})),(0,s.useState)(localStorage.getItem("token")||"")),g=(0,r.Z)(f,2),v=g[0],b=(g[1],(0,s.useState)(localStorage.getItem("token")?(0,u.Z)(localStorage.getItem("token")):"")),k=(0,r.Z)(b,2),N=k[0];k[1];return(0,x.jsxs)("header",{children:[(0,x.jsxs)("nav",{className:n?"nav-active":"",children:[(0,x.jsx)("h2",{className:"nav-logo",children:(0,x.jsx)(c.OL,{to:"/",children:"MedEase"})}),(0,x.jsxs)("ul",{className:"nav-links",children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/",children:"Home"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/doctors",children:"Doctors"})}),N.isAdmin&&(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/dashboard/users",children:"Dashboard"})}),!N.isAdmin&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/appointments",children:"Appointments"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/notifications",children:"Notifications"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{to:"/profile",children:"Profile"})})]}),v?(0,x.jsx)("li",{children:(0,x.jsx)("span",{className:"btn",onClick:function(){m((0,l.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{className:"btn",to:"/login",children:"Login"})}),(0,x.jsx)("li",{children:(0,x.jsx)(c.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,x.jsxs)("div",{className:"menu-icons",children:[!n&&(0,x.jsx)(d.cur,{className:"menu-open",onClick:function(){j(!0)}}),n&&(0,x.jsx)(h.ySC,{className:"menu-close",onClick:function(){j(!1)}})]})]})}},564:function(e,t,n){n.r(t);var r=n(4165),s=n(5861),i=n(9439),c=n(2791),o=n(3321),a=n(6794),l=n(3841),d=n(4971),h=n(5318),u=n(3200),x=n(9434),j=n(456),m=n(3263),p=n(3402),f=n(7689),g=n(3900),v=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),n=t[0],b=t[1],k=(0,x.I0)(),N=(0,x.v9)((function(e){return e.root})).loading,I=(0,j.Z)(localStorage.getItem("token")).userId,Z=(0,g.s)(),w=(0,f.s0)(),S=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k((0,h.K4)(!0)),e.next=4,(0,d.Z)("/appointment/getallappointments?search=".concat(I));case 4:n=e.sent,b(n),k((0,h.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){S()}),[]);var _=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(t){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.promise(m.Z.put("/appointment/completed",{appointid:t._id,doctorId:t.doctorId._id,doctorname:"".concat(t.userId.firstname," ").concat(t.userId.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:n=e.sent,n.data,S(),e.next=11;break;case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Z,{}),N?(0,v.jsx)(u.Z,{}):(0,v.jsxs)("section",{className:"container notif-section",children:[(0,v.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),n.length>0?(0,v.jsx)("div",{className:"appointments",children:(0,v.jsxs)("table",{children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"S.No"}),(0,v.jsx)("th",{children:"Doctor"}),(0,v.jsx)("th",{children:"Patient"}),(0,v.jsx)("th",{children:"Appointment Date"}),(0,v.jsx)("th",{children:"Appointment Time"}),(0,v.jsx)("th",{children:"Booking Date"}),(0,v.jsx)("th",{children:"Booking Time"}),(0,v.jsx)("th",{children:"Status"}),I===n[0].doctorId._id?(0,v.jsx)("th",{children:"Action"}):(0,v.jsx)(v.Fragment,{}),I===n[0].doctorId._id?(0,v.jsx)("th",{children:"Join"}):(0,v.jsx)(v.Fragment,{})]})}),(0,v.jsx)("tbody",{children:null===n||void 0===n?void 0:n.map((function(e,t){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:t+1}),(0,v.jsx)("td",{children:e.doctorId.firstname+" "+e.doctorId.lastname}),(0,v.jsx)("td",{children:e.userId.firstname+" "+e.userId.lastname}),(0,v.jsx)("td",{children:e.date}),(0,v.jsx)("td",{children:e.time}),(0,v.jsx)("td",{children:e.createdAt.split("T")[0]}),(0,v.jsx)("td",{children:e.updatedAt.split("T")[1].split(".")[0]}),(0,v.jsx)("td",{children:e.status}),I===e.doctorId._id?(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===e.status?"disable-btn":""),disabled:"Completed"===e.status,onClick:function(){return _(e)},children:"Complete"})}):(0,v.jsx)(v.Fragment,{}),I===(e.doctorId._id||e.userId._id)&&""!==e.room_id?(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"meet",onClick:function(){return t=e.room_id,n=e.userId.email,Z.emit("room:join",{email:n,room:t}),void w("/room/".concat(t));var t,n},children:(0,v.jsx)("img",{width:"30px",src:"/videocall.png",alt:"Videocall Meet"})})}):(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"meet",children:(0,v.jsx)("img",{width:"30px",src:"/users.png",alt:"Offline Meet"})})})]},e._id)}))})]})}):(0,v.jsx)(o.Z,{})]}),(0,v.jsx)(a.Z,{})]})}}}]);
//# sourceMappingURL=564.da81de52.chunk.js.map