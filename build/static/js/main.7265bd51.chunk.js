(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,n){e.exports=n(65)},35:function(e,t,n){},55:function(e,t){},65:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n.n(o),r=n(10),i=n.n(r),c=(n(34),n(35),n(3)),s=n(12),l=n(13),u=n(15),d=n(14),h=n(16),p=n(26),f=n.n(p),g=(n(55),n(67)),m=n(70),w=n(69),O=n(68),b=n(27),v=(a.a.PureComponent,o.Component,function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).refreshList=function(){f.a.get("http://localhost:8000/api/foods/").then(function(e){n.setState({foodList:e.data,horse:"hi"}),console.log(n.state.foodList.get(0).name)}).catch(function(e){return console.log(e)})},n.toggle=n.toggle.bind(Object(c.a)(n)),n.state={horse:"neigh",foodList:[],dropdownOpen:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return a.a.createElement(g.a,{isOpen:this.state.dropdownOpen,toggle:this.toggle},a.a.createElement(m.a,{caret:!0,color:"primary"},"Select Food"),a.a.createElement(w.a,null,this.state.foodList.map(function(e){return a.a.createElement(O.a,null," ",e.name," ")})))}}]),t}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.7265bd51.chunk.js.map