(this.webpackJsonpcovid19_statistics=this.webpackJsonpcovid19_statistics||[]).push([[0],{10:function(e,t,n){e.exports={container:"container_container__20tPm"}},2:function(e,t,n){e.exports={modalTitle:"statistics_modalTitle__1WRy_",modalList:"statistics_modalList__23p-5",items:"statistics_items__xUXuf",modalButton:"statistics_modalButton__oynBb"}},25:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(3),A=n.n(r),i=n(10),o=n.n(i),s=n(1);function l(e){var t=e.children;return Object(s.jsx)("div",{className:o.a.container,children:t})}var j=n(5),u=n(7),d=n.n(u),h=n(11),p="https://api.covid19api.com/";function O(){return m.apply(this,arguments)}function m(){return m=Object(h.a)(d.a.mark((function e(){var t,n,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),m.apply(this,arguments)}var b=n.p+"static/media/logo.588ddb26.png",g=n(8),f=n.n(g);function v(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:f.a.wrapper,children:[Object(s.jsx)("img",{src:b,alt:"logo"}),Object(s.jsx)("h1",{className:f.a.title,children:"Statistic"})]})})}var x=n(12),B=n(13),w=n(16),C=n(14),y=n(4),E=n.n(y),S=(n(25),document.querySelector("#modal-root")),k=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(x.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(B.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(s.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(s.jsx)("div",{className:"Modal",children:this.props.children})}),S)}}]),n}(c.Component);k.protoType={onClick:E.a.func};n(26);function I(e){var t=e.country,n=e.info;return Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"\u2116"}),Object(s.jsx)("th",{children:"Country"}),Object(s.jsx)("th",{children:"Total Confirmed"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t}),Object(s.jsx)("td",{onClick:n,children:e.Country}),Object(s.jsx)("td",{children:e.TotalConfirmed})]},e.ID)}))})]})}var N=n(9),Y=n.n(N);n(27);function R(e){var t=e.value,n=e.onHandleFilter;return Object(s.jsxs)("form",{children:[Object(s.jsx)("input",{className:Y.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search...",value:t,onChange:n}),Object(s.jsx)("img",{className:Y.a.icon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgBxVZNbtpAFB5PAZVVWGbpniDACcwNuAGOxN8uzgmanqB0gYQAqc6qy5AT4K66Q+4NnBvQBQtAQL+HhsiYN2YcBeWTLI+f5803P+99byyRAs/zSovFomFZloPPMh6b7Lvdbo5XKKUMN5vN83g8DkRGWCmED2gSaUmcR4jJ3I5Go1AY4lPS0O12neVy+YdWieezMMM1+nYrlYo1m80CE4cj4lar5eL1lIHwCDTZarVqg/z5XN9X4na7XYfjr5S+Ef6HeCK06YyvNeRlE/L9GWN77e12OxUqeOKAfYLBeji/33G767p2oVCoo3mn8btH0PVSiTudzk8Eh8v8d4fD4aNIgZrAyaQp8tfr9Rff9+ecn6TVcqSweedICRg4Wq1WNTSjuJ2yIZfL3en8JPLQYUh9bO0PYQgiR07fJu0q/3lioMHYjUkPGAwGAYiCJDGOgtUBidXZCVuURQjiwFgnfvl8/obrK8VpUETijYDv36QNq7aFhvhDIJXgx2GizTpcJQ26HZRKiV5ByqMLiHNAoDqM+R/bF0+QNKblnw5KD+oJszZQKZ1ONBWr9mggkQEg/crYAl1/qcm/Emm3KTkKzAOnfpDMbzofqYi4DvvCgUEbOmeaGP4/ocmt1idF0/lasVl/x8vT9KNzmmCwF/V9hSOqY2Jl3Q2FqhNiZYIdjVKJCc1m09dI6JugUrXGBdiRgKB+unj1xDtB7cYUN5tyKjEBpfCeLm4iUeYM0KNSakrOSia2xqcaqyagLRhqK4nQoQkjih8ZJWTJLWEAUrJisXiD2m2rgeYInLDf778k+6rBp1zQxc/ciDgrTMgvQmxCfrGyqFKopjnz+cVWfACz8v3l8OLEB3IQk7QKIiUp/Q/hfFQMNVd/FgAAAABJRU5ErkJggg==",alt:"",width:"40",height:"40"})]})}R.propType={value:E.a.string,onSubmit:E.a.func,onChange:E.a.func};var V=n(2),D=n.n(V);function L(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),A=Object(j.a)(r,2),i=A[0],o=A[1],l=Object(c.useState)([]),u=Object(j.a)(l,2),d=u[0],h=u[1],m=Object(c.useState)(""),b=Object(j.a)(m,2),g=b[0],f=b[1];Object(c.useEffect)((function(){O("".concat(p,"summary")).then((function(e){return a(e.Countries)}))}),[]);var x=function(){o((function(e){return!e}))};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("header",{children:[Object(s.jsx)(v,{}),Object(s.jsx)(R,{value:g,onHandleFilter:function(e){f(e.currentTarget.value)}})]}),Object(s.jsx)(I,{country:function(){var e=g.toLowerCase();return n.filter((function(t){return t.Country.toLowerCase().includes(e)}))}(),info:function(e){x(),function(e){return O("".concat(p,"live/country/").concat(e,"/status/confirmed"))}(e.target.innerText).then((function(e){return h(e.slice(-1)[0])}))}}),i&&Object(s.jsxs)(k,{onClose:x,children:[Object(s.jsx)("h1",{className:D.a.modalTitle,children:d.Country}),Object(s.jsxs)("ul",{className:D.a.modalList,children:[Object(s.jsxs)("li",{className:D.a.items,children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJbSURBVHgBvZbbjdpAFIbPmIt4JB04HWw6gA42FSxIgHgLHWBXEPPGTVqnguxWwFJB6GBdgt9AIEH+3ztEjteXsRftL5kZj8+cb85cziCSo/F4bPORkjLpp5INo9HoXin143K5dK5tqIeWZT2h3Z3P50EGrHM+n6N+sGvH+r7g3V8ul79SwRwhjB7jwDTBubter51423A49DjYvH4cQK1W618Hrq5QONygaouB4MRfrVZ91geDgY/ZeBAzBcfj8Zvv+2FdO5qaQqPRKtVDlOynSkApu9Fo/EbZVXptNvKJAq9rYdRlRnwTYa0fCL6TTxY3sIXSCIzpcVA8yW1kWyZW3MU4Qi52ZF9uJIIDAzs/+sExkIyosdPvUXhiIASys6R4+gKc2e1kMomyEY7PLMWRv1gsnjEjLrOcFGtnwXhWYOTwZ7/f/0Sy6CDzMAW+xA1Op5PLkjOCb4VR096CcSA5U4SBbVlyJ/IYsM6cff3OaOmDOV7bz/Ki5ialvRIDIUv1AHvUjr8wMoD+4PUO7181+BXvTvIyyFI9/sJ1PBwO7aQRkwyetw71Oi8DrqVPMKEcmLylXAeZcJsGarVaoed5YSo4DENpNpvMpZlnG5FPer3eDOvEyJ5121R/5mXzmtJtB9/d//wkLeC0DfgmD8514rlmPb4MGdphObr6KP7TuwRCAxpKzvlm1LH6VLLFa/B7Ehr1y+qByG0duZ1h4vFazPkDEOhIg7SPubvaAC5VoIXgivBCqBG4JNwIagw2hBtDS4EL4KWgpcEZ8NLQSuAEXKpAPyRmOD5SUX8BZ/d6fr/nqHYAAAAASUVORK5CYII=",alt:"",width:"40",height:"40"}),Object(s.jsx)("p",{className:D.a.name,children:"Total Confirmed"}),Object(s.jsxs)("p",{children:[" ",d.Confirmed]})]}),Object(s.jsxs)("li",{className:D.a.items,children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgBvVc5jhpBFP3dLLJEYI6AT2BGcIAOnXl8ggGJTSTGJxgIHQ2OWIWZEwwOHQ1kTtD0nMDtG5CAxO73ED1qmmoMY5onFbX2f1X1f70qNDkCpVIpOh6Pb3Rdj6/Xa6aYpmlR9qE8QtlCkamHMYN6vW79y6Z2qLNQKBgwfItkyGnorVarb+12uy+nEIMwBrLvryDcNa5pXaSKagc0BamxXC4f7K08AyysPu1efcBZyWazKWQkfSPnQxT2UolEwhoOh892o+YgjWPAk/gIuO6q1WqZLOv8oU9B+iA+gxypVCr6QgyflpDFxH/EgsHg580kuFo4/7dcCDz38/n8nY7VGnJB8LSEQiGKkf5RLgyQGzol0GsA+vrIUoFAgArGOLAO2LM4Zjs2jbp5YGxcy+Vya1UP/F7Goa842xiR4XD4kR+6SWez2VW32x05G2H7DllJZV8Xj9m7SQkahmu+uNuxwk9uUgKTqTCYREXs0eG5TdDdvvMblm1R8JhoT/YnynZ97yM4XznLV0Kl+aa+DaAdwL/XtsK4USwW484LhOVMJmOIB1TBi2/6XPG9ooNBdOtu54NgsVjsSSts3KkmiuAqi0IR4fv7zSWRz+cfVXcv2kxMoood+IP8PdIhaeVxqiI9Y1wMk7nxsNlFTKSDrEyn0zTU5Ml9B6POberCiBwBXjRVJJtAOQhyuTktm/vYNM1RMpmcovhBfAQFptPp/HwhJnBJ/8JlzaIhPmArSF/t+s4LBOQDP8hVKqh87CEar5Gd5WHAAEMwDdztyqhpNps9njX5f/RUpJ7El4AnMf8tuNvoq+21t6PV2B26pqwwEz+ZWBRCwe2v1WoDp5az3Gg0fvCvi8qGl/QqianHciZEIpG3cizxZDKx5PBr4yjQDfizpzw5fwHsz1kMUbe0lQAAAABJRU5ErkJggg==",alt:"",width:"40",height:"40"}),Object(s.jsx)("p",{className:D.a.name,children:"Total Deaths "}),Object(s.jsx)("p",{children:d.Deaths})]}),Object(s.jsxs)("li",{className:D.a.items,children:[Object(s.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAeCAYAAADHJYVoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgB3VXdTcMwEHYS8p4RwgZlg7IBbJCH/L0xAukE9CVSEkVCbAAbMAIb4G7Q10RKwncSlgo4rt26IPpJVnzy3XfJ57uLkyTJ2nGcO2YA3/fDsiw3aZpO4ziu2rYtZH6uKfEPAte9j+O4kJ4xC5hLYIV8LoE1clkCq+TfE1gn30mwvGDHoVAdHkTedd0lHpumaVYqP4cagZmDY72hR7ZzDtM0vRwqS0gLBCoffpILFfh7cgyngoYVLUhxhbXVidPSHHXLaQp+mjQNiTzYG8dOCNWbc7GBLF9kQAlyUSl4BrADE/JnNMjtzBmr6/pa7PM8D5H8XeYnlUXVHCb4fc2h4wL/1kjYnue9VlXFhY1quSGtaT8MwwJfqk8OUMCjMKBpxHYuGHjAecj24P+2v+5ULLIsWwoDeoc6QbrkNFMiZogzH7nHkK+ZZdC87/v+6QOzwnyWh1UHXQAAAABJRU5ErkJggg==",alt:"",width:"40",height:"40"}),Object(s.jsx)("p",{className:D.a.name,children:"Total Recovered"}),Object(s.jsxs)("p",{children:[" ",d.Recovered]})]})]}),Object(s.jsx)("button",{className:D.a.modalButton,type:"button",onClick:x,children:"Ok"})]})]})}n(28);var Q=n(15);function U(){return Object(s.jsxs)(l,{children:[Object(s.jsx)(L,{}),Object(s.jsx)(Q.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}A.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={wrapper:"header_wrapper__26Jmq",title:"header_title__yz4uM"}},9:function(e,t,n){e.exports={SearchFormInput:"Searchbar_SearchFormInput__2QUT5",icon:"Searchbar_icon__alDV4"}}},[[29,1,2]]]);
//# sourceMappingURL=main.6a9a110e.chunk.js.map