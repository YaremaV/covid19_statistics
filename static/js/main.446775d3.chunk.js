(this.webpackJsonpcovid19_statistics=this.webpackJsonpcovid19_statistics||[]).push([[0],{11:function(e,t,n){e.exports={SearchFormInput:"Searchbar_SearchFormInput__2QUT5",icon:"Searchbar_icon__alDV4"}},12:function(e,t,n){e.exports={container:"container_container__20tPm"}},27:function(e,t,n){},29:function(e,t,n){},3:function(e,t,n){e.exports={modalTitle:"statistics_modalTitle__1WRy_",modalList:"statistics_modalList__23p-5",items:"statistics_items__xUXuf",item:"statistics_item__tlLi_",modalButton:"statistics_modalButton__oynBb"}},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(4),o=n.n(a),s=n(12),i=n.n(s),A=n(1);function l(e){var t=e.children;return Object(A.jsx)("div",{className:i.a.container,children:t})}var u=n(6),j=n(7),d=n.n(j),p=n(13),h="https://api.covid19api.com/";function b(){return O.apply(this,arguments)}function O(){return O=Object(p.a)(d.a.mark((function e(){var t,n,c=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}var m=n.p+"static/media/logo.588ddb26.png",g=n(9),f=n.n(g);function v(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{className:f.a.wrapper,children:[Object(A.jsx)("img",{src:m,alt:"logo"}),Object(A.jsx)("h1",{className:f.a.title,children:"Statistic"})]})})}var B=n(14),x=n(15),w=n(18),C=n(16),y=n(5),S=n.n(y),E=(n(27),document.querySelector("#modal-root")),k=function(e){Object(w.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(B.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(a.createPortal)(Object(A.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(A.jsx)("div",{className:"Modal",children:this.props.children})}),E)}}]),n}(c.Component);k.protoType={onClick:S.a.func};var N=n(2),R=n(10),Y=[{Header:"Country",accessor:"Country"},{Header:"Total Confirmed",accessor:"TotalConfirmed"}];n(29);function I(e){var t=e.country,n=e.info,r=Object(c.useMemo)((function(){return Y}),[]),a=Object(c.useMemo)((function(){return t}),[t]),o=Object(R.useTable)({columns:r,data:a},R.useSortBy),s=o.getTableProps,i=o.getTableBodyProps,l=o.headerGroups,u=o.rows,j=o.prepareRow;return Object(A.jsxs)("table",Object(N.a)(Object(N.a)({},s()),{},{children:[Object(A.jsx)("thead",{children:l.map((function(e){return Object(A.jsxs)("tr",Object(N.a)(Object(N.a)({},e.getHeaderGroupProps()),{},{children:[Object(A.jsx)("th",{children:"\u2116"}),e.headers.map((function(e){return Object(A.jsxs)("th",Object(N.a)(Object(N.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{children:[e.render("Header"),Object(A.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))}))]}))}))}),Object(A.jsx)("tbody",Object(N.a)(Object(N.a)({},i()),{},{children:u.map((function(e){return j(e),Object(A.jsxs)("tr",Object(N.a)(Object(N.a)({},e.getRowProps),{},{children:[Object(A.jsxs)("td",{children:[" ",e.index+1]}),e.cells.map((function(e){return Object(A.jsx)("td",Object(N.a)(Object(N.a)({onClick:n},e.getCellProps()),{},{children:e.render("Cell")}))}))]}),e.index)}))}))]}))}var V=n(11),D=n.n(V);n(30);function L(e){var t=e.value,n=e.onHandleFilter;return Object(A.jsxs)("form",{children:[Object(A.jsx)("input",{className:D.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search...",value:t,onChange:n}),Object(A.jsx)("img",{className:D.a.icon,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgBxVZNbtpAFB5PAZVVWGbpniDACcwNuAGOxN8uzgmanqB0gYQAqc6qy5AT4K66Q+4NnBvQBQtAQL+HhsiYN2YcBeWTLI+f5803P+99byyRAs/zSovFomFZloPPMh6b7Lvdbo5XKKUMN5vN83g8DkRGWCmED2gSaUmcR4jJ3I5Go1AY4lPS0O12neVy+YdWieezMMM1+nYrlYo1m80CE4cj4lar5eL1lIHwCDTZarVqg/z5XN9X4na7XYfjr5S+Ef6HeCK06YyvNeRlE/L9GWN77e12OxUqeOKAfYLBeji/33G767p2oVCoo3mn8btH0PVSiTudzk8Eh8v8d4fD4aNIgZrAyaQp8tfr9Rff9+ecn6TVcqSweedICRg4Wq1WNTSjuJ2yIZfL3en8JPLQYUh9bO0PYQgiR07fJu0q/3lioMHYjUkPGAwGAYiCJDGOgtUBidXZCVuURQjiwFgnfvl8/obrK8VpUETijYDv36QNq7aFhvhDIJXgx2GizTpcJQ26HZRKiV5ByqMLiHNAoDqM+R/bF0+QNKblnw5KD+oJszZQKZ1ONBWr9mggkQEg/crYAl1/qcm/Emm3KTkKzAOnfpDMbzofqYi4DvvCgUEbOmeaGP4/ocmt1idF0/lasVl/x8vT9KNzmmCwF/V9hSOqY2Jl3Q2FqhNiZYIdjVKJCc1m09dI6JugUrXGBdiRgKB+unj1xDtB7cYUN5tyKjEBpfCeLm4iUeYM0KNSakrOSia2xqcaqyagLRhqK4nQoQkjih8ZJWTJLWEAUrJisXiD2m2rgeYInLDf778k+6rBp1zQxc/ciDgrTMgvQmxCfrGyqFKopjnz+cVWfACz8v3l8OLEB3IQk7QKIiUp/Q/hfFQMNVd/FgAAAABJRU5ErkJggg==",alt:"",width:"40",height:"40"})]})}L.propType={value:S.a.string,onSubmit:S.a.func,onChange:S.a.func};var Q=n(3),T=n.n(Q);function U(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),o=Object(u.a)(a,2),s=o[0],i=o[1],l=Object(c.useState)([]),j=Object(u.a)(l,2),d=j[0],p=j[1],O=Object(c.useState)(""),m=Object(u.a)(O,2),g=m[0],f=m[1];Object(c.useEffect)((function(){b("".concat(h,"summary")).then((function(e){return r(e.Countries)}))}),[]);var B=function(){i((function(e){return!e}))};return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("header",{children:[Object(A.jsx)(v,{}),Object(A.jsx)(L,{value:g,onHandleFilter:function(e){f(e.currentTarget.value)}})]}),Object(A.jsx)(I,{country:function(){var e=g.toLowerCase();return n.filter((function(t){return t.Country.toLowerCase().includes(e)}))}(),info:function(e){B(),function(e){return b("".concat(h,"live/country/").concat(e,"/status/confirmed"))}(e.target.innerText).then((function(e){return p(e.slice(-1)[0])}))}}),s&&Object(A.jsxs)(k,{onClose:B,children:[Object(A.jsx)("h1",{className:T.a.modalTitle,children:d.Country}),Object(A.jsxs)("ul",{className:T.a.modalList,children:[Object(A.jsxs)("li",{className:T.a.items,children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJbSURBVHgBvZbbjdpAFIbPmIt4JB04HWw6gA42FSxIgHgLHWBXEPPGTVqnguxWwFJB6GBdgt9AIEH+3ztEjteXsRftL5kZj8+cb85cziCSo/F4bPORkjLpp5INo9HoXin143K5dK5tqIeWZT2h3Z3P50EGrHM+n6N+sGvH+r7g3V8ul79SwRwhjB7jwDTBubter51423A49DjYvH4cQK1W618Hrq5QONygaouB4MRfrVZ91geDgY/ZeBAzBcfj8Zvv+2FdO5qaQqPRKtVDlOynSkApu9Fo/EbZVXptNvKJAq9rYdRlRnwTYa0fCL6TTxY3sIXSCIzpcVA8yW1kWyZW3MU4Qi52ZF9uJIIDAzs/+sExkIyosdPvUXhiIASys6R4+gKc2e1kMomyEY7PLMWRv1gsnjEjLrOcFGtnwXhWYOTwZ7/f/0Sy6CDzMAW+xA1Op5PLkjOCb4VR096CcSA5U4SBbVlyJ/IYsM6cff3OaOmDOV7bz/Ki5ialvRIDIUv1AHvUjr8wMoD+4PUO7181+BXvTvIyyFI9/sJ1PBwO7aQRkwyetw71Oi8DrqVPMKEcmLylXAeZcJsGarVaoed5YSo4DENpNpvMpZlnG5FPer3eDOvEyJ5121R/5mXzmtJtB9/d//wkLeC0DfgmD8514rlmPb4MGdphObr6KP7TuwRCAxpKzvlm1LH6VLLFa/B7Ehr1y+qByG0duZ1h4vFazPkDEOhIg7SPubvaAC5VoIXgivBCqBG4JNwIagw2hBtDS4EL4KWgpcEZ8NLQSuAEXKpAPyRmOD5SUX8BZ/d6fr/nqHYAAAAASUVORK5CYII=",alt:"",width:"30",height:"26"}),Object(A.jsx)("p",{className:T.a.name,children:"Total Confirmed"}),Object(A.jsxs)("p",{children:[" ",d.Confirmed]})]}),Object(A.jsxs)("li",{className:T.a.items,children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKoSURBVHgBvVc5jhpBFP3dLLJEYI6AT2BGcIAOnXl8ggGJTSTGJxgIHQ2OWIWZEwwOHQ1kTtD0nMDtG5CAxO73ED1qmmoMY5onFbX2f1X1f70qNDkCpVIpOh6Pb3Rdj6/Xa6aYpmlR9qE8QtlCkamHMYN6vW79y6Z2qLNQKBgwfItkyGnorVarb+12uy+nEIMwBrLvryDcNa5pXaSKagc0BamxXC4f7K08AyysPu1efcBZyWazKWQkfSPnQxT2UolEwhoOh892o+YgjWPAk/gIuO6q1WqZLOv8oU9B+iA+gxypVCr6QgyflpDFxH/EgsHg580kuFo4/7dcCDz38/n8nY7VGnJB8LSEQiGKkf5RLgyQGzol0GsA+vrIUoFAgArGOLAO2LM4Zjs2jbp5YGxcy+Vya1UP/F7Goa842xiR4XD4kR+6SWez2VW32x05G2H7DllJZV8Xj9m7SQkahmu+uNuxwk9uUgKTqTCYREXs0eG5TdDdvvMblm1R8JhoT/YnynZ97yM4XznLV0Kl+aa+DaAdwL/XtsK4USwW484LhOVMJmOIB1TBi2/6XPG9ooNBdOtu54NgsVjsSSts3KkmiuAqi0IR4fv7zSWRz+cfVXcv2kxMoood+IP8PdIhaeVxqiI9Y1wMk7nxsNlFTKSDrEyn0zTU5Ml9B6POberCiBwBXjRVJJtAOQhyuTktm/vYNM1RMpmcovhBfAQFptPp/HwhJnBJ/8JlzaIhPmArSF/t+s4LBOQDP8hVKqh87CEar5Gd5WHAAEMwDdztyqhpNps9njX5f/RUpJ7El4AnMf8tuNvoq+21t6PV2B26pqwwEz+ZWBRCwe2v1WoDp5az3Gg0fvCvi8qGl/QqianHciZEIpG3cizxZDKx5PBr4yjQDfizpzw5fwHsz1kMUbe0lQAAAABJRU5ErkJggg==",alt:"",width:"30",height:"30"}),Object(A.jsx)("p",{className:T.a.name,children:"Total Deaths "}),Object(A.jsx)("p",{children:d.Deaths})]}),Object(A.jsxs)("li",{className:T.a.items,children:[Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAeCAYAAADHJYVoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFSSURBVHgB3VXdTcMwEHYS8p4RwgZlg7IBbJCH/L0xAukE9CVSEkVCbAAbMAIb4G7Q10RKwncSlgo4rt26IPpJVnzy3XfJ57uLkyTJ2nGcO2YA3/fDsiw3aZpO4ziu2rYtZH6uKfEPAte9j+O4kJ4xC5hLYIV8LoE1clkCq+TfE1gn30mwvGDHoVAdHkTedd0lHpumaVYqP4cagZmDY72hR7ZzDtM0vRwqS0gLBCoffpILFfh7cgyngoYVLUhxhbXVidPSHHXLaQp+mjQNiTzYG8dOCNWbc7GBLF9kQAlyUSl4BrADE/JnNMjtzBmr6/pa7PM8D5H8XeYnlUXVHCb4fc2h4wL/1kjYnue9VlXFhY1quSGtaT8MwwJfqk8OUMCjMKBpxHYuGHjAecj24P+2v+5ULLIsWwoDeoc6QbrkNFMiZogzH7nHkK+ZZdC87/v+6QOzwnyWh1UHXQAAAABJRU5ErkJggg==",alt:"",width:"22.5",height:"30"}),Object(A.jsx)("p",{className:T.a.name,children:"Total Recovered"}),Object(A.jsxs)("p",{children:[" ",d.Recovered]})]})]}),Object(A.jsx)("button",{className:T.a.modalButton,type:"button",onClick:B,children:"Ok"})]})]})}n(31);var K=n(17);function M(){return Object(A.jsxs)(l,{children:[Object(A.jsx)(U,{}),Object(A.jsx)(K.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(M,{})}),document.getElementById("root"))},9:function(e,t,n){e.exports={wrapper:"header_wrapper__26Jmq",title:"header_title__yz4uM"}}},[[32,1,2]]]);
//# sourceMappingURL=main.446775d3.chunk.js.map