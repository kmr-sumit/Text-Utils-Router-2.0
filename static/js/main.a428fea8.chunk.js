(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),l=a.n(c),s=a(12),n=a.n(s),o=(a(19),a(5)),r=(a(20),a(0));var i=function(e){return Object(r.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(r.jsx)("strong",{children:e.alert.type})," : ",e.alert.msg]})})};var d=function(){var e=Object(c.useState)({color:"black",backgroundColor:"white",border:"1px solid black"}),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)("Enable Dark Mode"),n=Object(o.a)(s,2),i=n[0],d=n[1];return Object(r.jsxs)("div",{className:"container",style:a,children:[Object(r.jsx)("h1",{children:"About Us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header",id:"headingOne",children:Object(r.jsx)("h2",{className:"mb-0",children:Object(r.jsx)("button",{className:"btn btn-link btn-block text-left",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:a,children:"Collapsible Group Item #1"})})}),Object(r.jsx)("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"card-body",style:a,children:["Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the ",Object(r.jsx)("code",{children:".show"})," className."]})})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header",id:"headingTwo",children:Object(r.jsx)("h2",{className:"mb-0",children:Object(r.jsx)("button",{className:"btn btn-link btn-block text-left collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:a,children:"Collapsible Group Item #2"})})}),Object(r.jsx)("div",{id:"collapseTwo",className:"collapse","aria-labelledby":"headingTwo","data-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"card-body",style:a,children:"Some placeholder content for the second accordion panel. This panel is hidden by default."})})]}),Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"card-header",id:"headingThree",children:Object(r.jsx)("h2",{className:"mb-0",children:Object(r.jsx)("button",{className:"btn btn-link btn-block text-left collapsed",type:"button","data-toggle":"collapse","data-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:a,children:"Collapsible Group Item #3"})})}),Object(r.jsx)("div",{id:"collapseThree",className:"collapse","aria-labelledby":"headingThree","data-parent":"#accordionExample",children:Object(r.jsx)("div",{className:"card-body",style:a,children:"And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default."})})]})]}),Object(r.jsx)("div",{className:"container my-3",children:Object(r.jsx)("button",{type:"button",onClick:function(){"white"===a.color?(d("Enable Dark Mode"),l({color:"black",backgroundColor:"white",border:"1px solid white"})):(d("Enable Light Mode"),l({color:"white",backgroundColor:"black"}))},className:"btn btn-primary",children:i})})]})},b=a(6);var h=function(e){return Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.modePassed," bg-").concat(e.modePassed),children:[Object(r.jsx)(b.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(r.jsx)("li",{className:"nav-item active",children:Object(r.jsxs)(b.b,{className:"nav-link",to:"/",children:[e.homeText," ",Object(r.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(b.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(r.jsxs)("div",{className:"custom-control custom-switch text-".concat("light"===e.modePassed?"dark":"light"),children:[Object(r.jsx)("input",{type:"checkbox",onClick:e.changeMode,className:"custom-control-input",id:"customSwitch1"}),Object(r.jsx)("label",{className:"custom-control-label",htmlFor:"customSwitch1",children:"Enable DarkMode"})]})]})]})};var j=function(e){var t=Object(c.useState)(""),a=Object(o.a)(t,2),l=a[0],s=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"dark"===e.modePassed?"white":"#042743"},children:[Object(r.jsx)("h1",{className:"mb-4",children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",id:"myBox",style:{backgroundColor:"dark"===e.modePassed?"#13466e":"white",color:"dark"===e.modePassed?"white":"#042743"},rows:"5",onChange:function(e){s(e.target.value)},value:l,placeholder:"Enter text here"})}),Object(r.jsx)("button",{type:"button",disabled:0===l.length,onClick:function(){var t=l.toUpperCase();s(t),e.showAlert("Converted to Upper Case ","Sucess")},className:"btn btn-primary mx-2 my-1",children:"Convert to Upper Case"}),Object(r.jsx)("button",{type:"button",disabled:0===l.length,onClick:function(){var t=l.toLowerCase();s(t),e.showAlert("Converted to Lower Case ","Sucess")},className:"btn btn-primary mx-2 my-1",children:"Convert to Lower Case"}),Object(r.jsx)("button",{type:"button",disabled:0===l.length,onClick:function(){s(""),e.showAlert("Cleared the TextArea","Sucess")},className:"btn btn-primary mx-2 my-1",children:"Clear Text"}),Object(r.jsx)("button",{type:"button",disabled:0===l.length,onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied Text to Clipboard","Sucess"),document.getSelection().removeAllRanges()},className:"btn btn-primary mx-2 my-1",children:"Copy Text"}),Object(r.jsx)("button",{type:"button",disabled:0===l.length,onClick:function(){var t=l.split(/[  ]+/);s(t.join(" ")),e.showAlert("Removed Extra Spaces","Sucess")},className:"btn btn-primary mx-2 my-1",children:"Remove Extra Spaces"})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.modePassed?"white":"#042743"},children:[Object(r.jsx)("h1",{children:"Your text summary"}),Object(r.jsxs)("p",{children:[l.split(/\s+/).filter((function(e){return 0!==e.length})).length," words and ",l.length," characters"]}),Object(r.jsxs)("p",{children:[.008*l.split(/\s+/).filter((function(e){return 0!==e.length})).length," minutes will be required to read the text"]}),Object(r.jsx)("h2",{children:" Preview"}),Object(r.jsx)("p",{children:l.length>0?l:"Nothing to preview Yet"})]})]})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(c.useState)(null),n=Object(o.a)(s,2),u=n[0],x=n[1];function p(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)}return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)(h,{title:"Text-Utils",homeText:"Home",aboutText:"About",modePassed:a,changeMode:function(){"light"===a?(l("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","Success"),document.title="TextUtils - Dark Mode"):(l("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","Success"),document.title="TextUtils - Light Mode")}}),Object(r.jsx)(i,{alert:u}),Object(r.jsx)("div",{className:"container","my-3":!0,children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/about",children:Object(r.jsx)(d,{})}),Object(r.jsx)(m.a,{exact:!0,path:"/",children:Object(r.jsx)(j,{heading:"Enter the text to analyze below",modePassed:a,showAlert:p})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),l(e),s(e),n(e)}))};n.a.render(Object(r.jsx)(l.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.a428fea8.chunk.js.map