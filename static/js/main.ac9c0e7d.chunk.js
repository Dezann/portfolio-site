(window["webpackJsonpportfolio-site"]=window["webpackJsonpportfolio-site"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/poznajmy-sie.d9a03262.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/cardman.42310385.svg"},function(e,t,a){e.exports=a.p+"static/media/my_photo.16bf2304.jpg"},function(e,t,a){e.exports=a.p+"static/media/github.e618bb41.svg"},function(e,t,a){e.exports=a.p+"static/media/e_mail.4cd529fe.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.3af095f8.svg"},function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),l=a.n(r),i=(a(30),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),p=(a(31),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"welcome-page-content"},c.a.createElement("div",{className:"dark-bg"},c.a.createElement("div",{className:"middle-text"},c.a.createElement("div",{className:"name"},c.a.createElement("p",null,c.a.createElement("span",{style:{color:"#FFCC0A"}},"Bartosz")," K\u0119pka")),c.a.createElement("div",{className:"job"},c.a.createElement("p",null,"front-end developer"),c.a.createElement("p",null,"Warsaw, Poland")))))}}]),t}(n.Component)),d=a(20),f=a.n(d),E=a(15),h=a.n(E),v=(a(32),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{href:this.props.link},c.a.createElement("div",{className:"project-wrapper"},c.a.createElement("img",{className:"project-img",src:this.props.image}),c.a.createElement("p",{className:"project-title"},this.props.title),c.a.createElement("p",{className:"project-info"},this.props.info)))}}]),t}(n.Component)),g=(a(33),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"projects-page-content"},c.a.createElement("div",{className:"primary-projects-txt"},c.a.createElement("p",null,"MY PRIMARY PROJECTS")),c.a.createElement("div",{className:"projects-wrapper"},c.a.createElement(v,{link:"https://github.com/VengelStudio/cardman-multiplayer",title:"Cardman Multiplayer",image:f.a,info:"A multiplayer hangman with elements of card game."}),c.a.createElement(v,{title:"Poznajmy si\u0119",image:h.a,info:"A fortune wheel party game with intriguing questions."}),c.a.createElement(v,{title:"Placeholder",image:h.a,info:"A fortune wheel party game with intriguing questions."})))}}]),t}(n.Component)),b=(a(34),a(21)),j=a.n(b),k=a(22),w=a.n(k),y=a(23),O=a.n(y),N=a(24),C=a.n(N),x=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"links-content"},c.a.createElement("div",{className:"links-wrapper"},c.a.createElement("p",{className:"contact-me-txt"},"Contact me"),c.a.createElement("div",{className:"line"}),c.a.createElement("div",{className:"links"},c.a.createElement("a",{href:"https://github.com/dezann",target:"_blank"},c.a.createElement("div",{className:"links-row"},c.a.createElement("img",{alt:"",src:w.a}),c.a.createElement("p",null,"Github"))),c.a.createElement("a",{href:"mailto: bartoszkepka1999@gmail.com",target:"_blank"},c.a.createElement("div",{className:"links-row"},c.a.createElement("img",{alt:"",src:O.a}),c.a.createElement("p",null,"Email"))),c.a.createElement("a",{href:"https://www.linkedin.com/in/bartosz-k%C4%99pka-118325181/"},c.a.createElement("div",{className:"links-row",target:"_blank"},c.a.createElement("img",{alt:"",src:C.a}),c.a.createElement("p",null,"Linkedin"))))),c.a.createElement("img",{src:j.a,className:"my-photo"}))}}]),t}(n.Component),A=a(6),z=(a(45),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a.detectSection=function(){var e=a.sections.current;console.log(e)},a.sections=c.a.createRef(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.detectSection()}},{key:"render",value:function(){return c.a.createElement("div",{className:"menu",id:"menu"},c.a.createElement("div",{className:"menu-pages-wrapper",ref:this.sections},c.a.createElement(A.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-70,duration:500},"About"),c.a.createElement(A.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,offset:-70,duration:500},"Projects"),c.a.createElement(A.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500},"Contact")))}}]),t}(n.Component));var P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(z,null),c.a.createElement("div",{className:"container"},c.a.createElement(A.Element,{name:"about"},c.a.createElement(p,null)),c.a.createElement(A.Element,{name:"projects"},c.a.createElement(g,null)),c.a.createElement(A.Element,{name:"contact"},c.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[25,1,2]]]);
//# sourceMappingURL=main.ac9c0e7d.chunk.js.map