(this["webpackJsonpcode-sandbox-examples"]=this["webpackJsonpcode-sandbox-examples"]||[]).push([[0],{29:function(e,a,t){e.exports=t(56)},52:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(7),c=t.n(s),o=t(6),l=t.n(o),u=t(9),i=t(21),m=t(22),w=t(28),p=t(27),d=t(26),f=t(10),h=t(25),E=t(11),b=t(23),v=t.n(b),x=(t(52),function(e){Object(w.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={clue:"Click Generate to start!",answer:"",showAnswer:!1},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.clue,n=a.answer,s=a.showAnswer;return r.a.createElement("div",{className:"facade"},r.a.createElement("div",{className:"card"},r.a.createElement("span",null," ",t," ")),r.a.createElement("div",null,r.a.createElement(E.a,{onClick:Object(u.a)(l.a.mark((function a(){var t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,v.a.get("https://krx9x5v1j2.execute-api.us-east-1.amazonaws.com/prod");case 2:t=a.sent,e.setState((function(e){return{clue:t.data.gab.toUpperCase(),answer:t.data.answer.toUpperCase()}}));case 4:case"end":return a.stop()}}),a)})))}," Generate New "),r.a.createElement(E.a,{onClick:Object(u.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==n){a.next=2;break}return a.abrupt("return");case 2:e.setState((function(e){return{showAnswer:!e.showAnswer}}));case 3:case"end":return a.stop()}}),a)})))}," ",s?"Hide Answer":"Show Answer"," ")),r.a.createElement("div",{className:"card-answer"},r.a.createElement(f.a,{show:s&&""!==n,onClose:Object(u.a)(l.a.mark((function a(){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e.setState((function(e){return{showAnswer:!1}}));case 1:case"end":return a.stop()}}),a)})))},r.a.createElement(f.a.Header,null,r.a.createElement("strong",{className:"mr-auto"},"Answer")),r.a.createElement(f.a.Body,null,n))))}}]),t}(r.a.Component)),k=function(){return r.a.createElement(h.a,{className:"p-3"},r.a.createElement(d.a,null,r.a.createElement("h1",{className:"header"},"Mad Gab"),r.a.createElement(x,null," Click Generate to start! ")))};t(55);c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.f7a015da.chunk.js.map