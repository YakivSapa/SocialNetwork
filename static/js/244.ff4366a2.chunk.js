"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[244],{244:(s,e,a)=>{a.r(e),a.d(e,{default:()=>p});var d=a(3003),i=a(7762),l=a(2426),n=a(5475),m=a(579);const c=s=>{let e="/dialogs/"+s.id;return(0,m.jsx)("div",{children:(0,m.jsx)(n.k2,{to:e,className:s=>s.isActive?l.A.active:l.A.dialog,children:s.name})})},r=s=>(0,m.jsx)("div",{className:l.A.message,children:s.message});var t=a(3216),o=a(5963),g=a(3842),x=a(5208),h=a(2580);const j=(0,x.d)(50),v=(0,g.A)({form:"dialogAddMessageForm"})((s=>(0,m.jsx)("form",{onSubmit:s.handleSubmit,children:(0,m.jsxs)("div",{className:l.A.textForm,children:[(0,m.jsx)("div",{children:(0,m.jsx)(o.A,{component:h.TM,validate:[x.m,j],className:l.A.textarea,name:"newMessageBody",placeholder:"Write a message..."})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{className:l.A.button,children:"Send"})})]})}))),A=s=>{let e=s.dialogsPage,a=e.dialogs.map((s=>(0,m.jsx)(c,{name:s.name,id:s.id},s.id))),d=e.messages.map((s=>(0,m.jsx)(r,{message:s.message},s.id)));return!1===s.isAuth?(0,m.jsx)(t.C5,{to:"/login"}):(0,m.jsxs)("div",{className:l.A.dialogs,children:[(0,m.jsx)("div",{className:l.A.dialogsItems,children:a}),(0,m.jsx)("div",{className:l.A.messages,children:(0,m.jsxs)("div",{children:[" ",d," "]})}),(0,m.jsx)("div",{className:l.A.form,children:(0,m.jsx)(v,{onSubmit:e=>{s.sendMessage(e.newMessageBody)}})})]})};var u=a(4947);const p=(0,a(3923).Zz)((0,d.Ng)((s=>({dialogsPage:s.dialogsPage})),(s=>({sendMessage:e=>{s((0,i.c)(e))}}))),u.H)(A)}}]);
//# sourceMappingURL=244.ff4366a2.chunk.js.map