(this["webpackJsonpbudget-tracker"]=this["webpackJsonpbudget-tracker"]||[]).push([[0],[,,,,,,,function(t,e,n){t.exports=n(15)},,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),u=n(5),h=(n(13),n(14),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).handleTyping=function(t){a.setState({currentTransaction:parseInt(t.target.value)})},a.handleSave=function(){var t=a.state.transactions.concat(a.state.currentTransaction);a.setState({transactions:t})},a.state={transactions:[],currentTransaction:0},a}return Object(i.a)(n,[{key:"render",value:function(){console.log("this is our state!!!",this.state);for(var t=0,e=0;e<this.state.transactions.length;e++)t+=this.state.transactions[e];return r.a.createElement("div",null,r.a.createElement("h1",null," Add a transaction "),r.a.createElement("input",{onChange:this.handleTyping}),r.a.createElement("button",{onClick:this.handleSave},"Save Transaction"),r.a.createElement("h1",null," Grand Total: $",t," "),r.a.createElement("ul",null,this.state.transactions.map((function(t){return r.a.createElement("li",null,t)}))))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.28ce0b47.chunk.js.map