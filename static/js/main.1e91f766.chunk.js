(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n.p+"static/media/code_img.582c40ca.jpg"},24:function(e,t,n){e.exports=n(40)},29:function(e,t,n){},31:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),c=n.n(l),i=(n(29),n(5)),o=n(6),s=n(8),u=n(7),m=n(9),d=n(42),p=n(43),E=(n(31),n(32),n(11)),v=n(10);function f(){var e=Object(E.a)(['\n  display: flex;\n  padding: 0;\n  margin: 0;\n\n  li {\n    list-style-type: none;\n    margin-right: 25px;\n  }\n  a {\n    color: #555B5E;\n    font-size: 16px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    text-decoration: none;\n    position: relative;\n    font-weight: 100;\n    transition: 0.3s;\n\n    &::after {\n      content: "";\n      position: absolute;\n      left: 0; bottom: -4px; right: 0;\n      background: #fff;\n      width: 0;\n      height: 1px;\n      transition: 0.3s;\n      margin: 0 auto;\n    }\n\n    &:hover {\n      opacity: 0.7;\n\n      &::after {\n        width: 100%;\n      }\n    }\n  }\n']);return f=function(){return e},e}var h=v.a.ul(f()),g=n(41),b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement(d.a,null,r.a.createElement(h,null,r.a.createElement("li",null,r.a.createElement(g.a,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(g.a,{to:"/editor"},"Editor")))))}}]),t}(a.PureComponent),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("html"),t=document.getElementById("css"),n=document.getElementById("js"),a=document.getElementById("code").contentWindow.document;document.body.onkeyup=function(){a.open(),a.writeln(e.value+"<style>"+t.value+"</style><script>"+n.value+"<\/script>"),a.close()};for(var r=document.getElementsByTagName("textarea"),l=r.length,c=0;c<l;c++)r[c].onkeydown=function(e){if(9==e.keyCode||9==e.which){e.preventDefault();var t=this.selectionStart;this.value=this.value.substring(0,this.selectionStart)+"\t"+this.value.substring(this.selectionEnd),this.selectionEnd=t+1}}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"editor-interface"},r.a.createElement("div",{className:"instructions"},r.a.createElement("h1",null,"Instructions"),r.a.createElement("h2",null,"Initialiser les styles par d\xe9fault des navigateurs"),r.a.createElement("ul",null,r.a.createElement("li",null,"\xc0 l'aide du tag html et body, mettre l'\xe9lement \"margin\" et \"padding\" \xe0 0 dans la section CSS afin qu'il n'y ait pas d'espace blanc sur votre page web"),r.a.createElement("li",null)),r.a.createElement("h2",null,'Cr\xe9er une bani\xe8re "hero"'),r.a.createElement("ul",null,r.a.createElement("li",null,"Cr\xe9er une balise header dans la section HTML"),r.a.createElement("li",null))),r.a.createElement("div",{className:"code-inputs"},r.a.createElement("div",{className:"textarea-code"},r.a.createElement("div",{className:"textarea-title"},"HMTL ",r.a.createElement("span",null," > ")," "),r.a.createElement("textarea",{id:"html"})),r.a.createElement("div",{className:"textarea-code"},r.a.createElement("div",{className:"textarea-title"},"CSS ",r.a.createElement("span",null," > ")," "),r.a.createElement("textarea",{id:"css"})),r.a.createElement("div",{className:"textarea-code"},r.a.createElement("div",{className:"textarea-title"},"JavaScript ",r.a.createElement("span",null," > ")," "),r.a.createElement("textarea",{id:"js"})))),r.a.createElement("div",null,r.a.createElement("iframe",{id:"code"})))}}]),t}(a.PureComponent),j=n(20),x=n.n(j);function O(){var e=Object(E.a)(["\n      display: flex;\n    "]);return O=function(){return e},e}function w(){var e=Object(E.a)(["\n      width: 400px;\n    "]);return w=function(){return e},e}var k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=v.a.img(w()),t=v.a.div(O());return r.a.createElement("div",{className:"homepage"},r.a.createElement(t,null,r.a.createElement("div",null,r.a.createElement(e,{src:x.a,alt:""})),r.a.createElement("div",null,r.a.createElement("h1",null,"Bienvenue"),r.a.createElement("div",null,"Le but de la plate-forme est de permettre aux gens d'apprendre \xe0 coder \xe0 l'aide d'exercices pratiques. C'est pourquoi nous avons comme objectif de se d\xe9marquer en offrant des cours o\xf9 vous pourrez conserver les projets \xe0 des fins personnelles. Ainsi, vous batirez votre propre portfolio tout en apprenant \xe0 coder."),r.a.createElement("div",{className:"card-course"},r.a.createElement("h3",null,"Contruire une landing page"),r.a.createElement("p",null,"Contruisez votre propre landing page \xe9tape par \xe9tape"),r.a.createElement("a",{href:"#"},"Acc\xe9dez au cours")))))}}]),t}(a.PureComponent),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null),r.a.createElement(d.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{exact:!0,path:"/",component:k}),r.a.createElement(p.a,{path:"/editor",component:y}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.1e91f766.chunk.js.map