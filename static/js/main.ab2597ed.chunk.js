(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){e.exports=a(45)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(23),i=a.n(o),c=a(10),l=a(4),s=a(25),d=(a(38),a(5)),u=a(6),p=a(8),v=a(7),f=a(9),m=(a(39),a(3)),b=a(26),h=(a(40),function(){return r.a.createElement("div",{id:"navBar"},r.a.createElement("div",{id:"navLeftBar"},r.a.createElement("div",{className:"navBrandIcon"},r.a.createElement(m.f,{size:23})),r.a.createElement("div",{id:"navBrandName"},"Schedular")),r.a.createElement("div",{id:"navRightBar"},r.a.createElement("button",{className:"navButton"},r.a.createElement(m.g,{size:17,color:"white"})),r.a.createElement("button",{className:"navButton"},r.a.createElement(b.a,{size:17,color:"white"}))))}),E=a(2),O=a(20),y=a.n(O),T=a(27),g=a(28),j=new(a.n(g).a.SHA256);var w=function(e){return j.hex(e)},S=function(e){return{type:"ADD_TODO",payload:e}},k=function(e){return{type:"DELETE_TODO",payload:e}},B=function(e){return{type:"ADD_SUB_TODO",payload:e}},D=function(e){return{type:"PREV_TODO",payload:e}},_=function(e){return{type:"ADD_SUB_PREV_TODO",payload:e}},N=function(e){return{type:"TOGGELE_TODO_STATE",payload:e}},A=function(e){return{type:"TOGGELE_SUB_TODO_STATE",payload:e}};function C(e){return function(t){t(N(e.id)),t(D(e))}}var L=function(e){return function(t){e.prev?t(D(Object(E.a)({},e,{prev:!0}))):t(D(Object(E.a)({},e,{prev:!1})))}},H=(a(22),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).clickHandler=function(){var e=a.props,t=e.title,n=e.state,r=e.steps,o=e.flag;(0,e.viewSideBar)({title:t,state:n,steps:r,flag:o,id:e.id,prev:!0})},a.stateHander=function(e){var t=!a.props.state;a.props.toggleTodoState(Object(E.a)({},a.props,{state:t}))},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.state,o=t.id,i=n?r.a.createElement("div",{className:"todoState"},r.a.createElement(m.a,{size:22,color:"green"})):r.a.createElement("div",{className:"todoState"},r.a.createElement(m.c,{size:22}));return r.a.createElement("div",{className:"todo"},r.a.createElement("button",{onClick:this.stateHander,className:"stateButton"},i),r.a.createElement("div",{onClick:this.clickHandler,className:"todoTitle"},a),r.a.createElement("button",{className:"stateButton",onClick:function(){return e.props.deleteTodo({id:o})}},r.a.createElement(m.h,{color:"red"})))}}]),t}(n.Component)),R=Object(l.b)(null,{viewSideBar:L,toggleTodoState:C,deleteTodo:function(e){return console.log("affff"),function(t){t(k(e.id))}}})(H);var z=Object(l.b)(function(e){return{todos:e.todoReducer.todos}},null)(function(e){var t=e.todos.map(function(e){return r.a.createElement(R,Object.assign({},e,{id:e.key,steps:e.steps}))});return r.a.createElement("div",null,t)}),G=function(e){var t=e.title,a=e.state,n=e.toggleSubTodoState,o=e.id,i=e.parentKey,c=e.prevTodo,l=a?r.a.createElement(m.a,{color:"green",size:18}):r.a.createElement(m.c,{size:18});return r.a.createElement("div",{className:"subTodo"},r.a.createElement("button",{className:"stateButton",onClick:function(){return n({id:o,parentKey:i,prevTodo:c})}},l),r.a.createElement("div",{className:"subTodo-card"},r.a.createElement("div",null,t)))},V=a(12),K=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={title:""},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"submitHandler",value:function(e){e.preventDefault();var t={title:this.state.title,parentKey:this.props.id};this.props.addSubTodo(t),this.setState({title:""})}},{key:"changeHandler",value:function(e){this.setState(Object(E.a)({},this.state,Object(V.a)({},e.target.name,e.target.value)))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitHandler.bind(this)},r.a.createElement("input",{type:"text",placeholder:"+ Add new Todo",name:"title",value:this.state.title,onChange:this.changeHandler.bind(this)}))}}]),t}(n.Component);var x=Object(l.b)(function(e){return{id:e.sideBarReducer.prevTodo.id,state:e}},{addSubTodo:function(e){var t=w(e.title),a=e.parentKey;return function(){var n=Object(T.a)(y.a.mark(function n(r){return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r(B(Object(E.a)({},e,{key:t,state:!1,parentKey:a})));case 2:r(_(Object(E.a)({},e,{key:t,state:!1,parentKey:a})));case 3:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}()}})(K);a(43);var U=Object(l.b)(function(e){return{prevTodo:e.sideBarReducer.prevTodo,prev:e.sideBarReducer.prev}},{toggleTodoState:C,toggleSubTodoState:function(e){return function(t){var a=e.prevTodo.steps.map(function(t){return t.key===e.id?Object(E.a)({},t,{state:!t.state}):t});t(A(e)),t(D(Object(E.a)({},e.prevTodo,{steps:a})))}},viewSideBar:L})(function(e){var t=e.prev,a=e.prevTodo,n=e.toggleTodoState,o=e.toggleSubTodoState,i=e.viewSideBar,c=r.a.createElement("li",null);if(t){var l=a.title,s=a.state,d=a.steps,u=a.flag,p=s?r.a.createElement(m.a,{color:"green",size:25}):r.a.createElement(m.c,{size:25}),v=d.map(function(e){return r.a.createElement(G,Object.assign({},e,{toggleSubTodoState:o,id:e.key,prevTodo:a}))});c=r.a.createElement("div",{className:"todoSideBarView"},r.a.createElement("div",{className:"todoSideBarViewHead",style:{borderBottom:"solid",borderBottomColor:u}},r.a.createElement("button",{className:"stateButton",onClick:function(){return n(Object(E.a)({},a,{state:!a.state}))}},p),r.a.createElement("div",{className:"todoSideBarViewHeadTitle"},l),r.a.createElement("div",{className:"todoSideBarViewHeadFlag"},r.a.createElement(m.e,{color:u})),r.a.createElement("button",{className:"sideBarCloser stateButton",onClick:function(){return i({prev:!1})}},r.a.createElement(m.h,{color:"gray",size:20}))),r.a.createElement("div",{className:"todoSideBarViewSteps"},v,r.a.createElement(x,null)))}else c=r.a.createElement("div",{className:"defaultSideBarView"},r.a.createElement(m.b,{size:40}));var f=t?"sideBarTodo":"sideBarDefault";return r.a.createElement("div",{id:f},c)}),W=(a(44),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={title:"",flag:"white"},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"submitHandler",value:function(e){e.preventDefault(),this.props.addTodo(this.state),this.setState({title:"",flag:"white"})}},{key:"changeHandler",value:function(e){this.setState(Object(E.a)({},this.state,Object(V.a)({},e.target.name,e.target.value)))}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitHandler.bind(this),className:"junk"},r.a.createElement("input",{type:"text",placeholder:"+ Add new Todo",name:"title",value:this.state.title,onChange:this.changeHandler.bind(this)}),r.a.createElement("select",{className:"flagChooser",name:"flag",value:this.state.flag,onChange:this.changeHandler.bind(this)},r.a.createElement("option",{value:"white"},"White"),r.a.createElement("option",{value:"green"},"Green"),r.a.createElement("option",{value:"red"},"Red")))}}]),t}(n.Component)),P=Object(l.b)(null,{addTodo:function(e){var t=w(e.title);return function(a){a(S(Object(E.a)({},e,{key:t,state:!1,steps:[]})))}}})(W),I=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return[r.a.createElement(h,null),r.a.createElement("div",{id:"App"},r.a.createElement("div",{id:"main"},r.a.createElement("div",{id:"headBar"},r.a.createElement("h1",null,r.a.createElement(m.d,null)," Tasks "),r.a.createElement("button",{className:"stateButton filterButton",onClick:function(){return e.props.filterList()}},"Hide Completed")),r.a.createElement("div",{id:"todoList"},r.a.createElement(z,null),r.a.createElement(P,null))),r.a.createElement(U,null))]}}]),t}(n.Component),F=Object(l.b)(null,{filterList:function(e){return function(t){t(function(e){return{type:"FILTER_LIST",payload:e}}(e))}}})(I),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var q=a(15),M={todos:[]},Q={prev:!1,prevTodo:null},X={todoReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"ADD_TODO":var a=t.payload;return{todos:[].concat(Object(q.a)(e.todos),[a])};case"DELETE_TODO":return{todos:e.todos.filter(function(e){return e.key!==t.payload})};case"ADD_SUB_TODO":return{todos:e.todos.map(function(e){if(e.key===t.payload.parentKey){var a={title:t.payload.title,state:t.payload.state,key:t.payload.key,parentKey:t.payload.parentKey};return Object(E.a)({},e,{steps:[].concat(Object(q.a)(e.steps),[a])})}return e})};case"TOGGELE_TODO_STATE":return{todos:e.todos.map(function(e){if(e.key===t.payload){var a=!e.state;return Object(E.a)({},e,{state:a})}return e})};case"TOGGELE_SUB_TODO_STATE":return{todos:e.todos.map(function(e){if(e.key===t.payload.parentKey){var a=e.steps.map(function(e){return e.key===t.payload.id?Object(E.a)({},e,{state:!e.state}):e});return Object(E.a)({},e,{steps:a})}return e})};case"FILTER_LIST":return{todos:e.todos.filter(function(e){return!1===e.state})};default:return e}},sideBarReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"PREV_TODO":return t.payload.prev?Object(E.a)({},e,{prev:!0,prevTodo:t.payload}):Object(E.a)({},e,{prev:!1,prevTodo:null});case"ADD_SUB_PREV_TODO":var a=Object(E.a)({},e.prevTodo,{steps:[].concat(Object(q.a)(e.prevTodo.steps),[t.payload])});return Object(E.a)({},e,{prevTodo:a});case"TOGGELE_PREV_TODO_STATE":default:return e}}},Y=Object(c.e)(Object(c.c)(X),Object(c.d)(Object(c.a)(s.a),window.devToolsExtension?window.devToolsExtension():function(e){return e}));i.a.render(r.a.createElement(l.a,{store:Y},r.a.createElement(F,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todoListApp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todoListApp","/service-worker.js");J?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):$(t,e)})}}()}},[[29,1,2]]]);
//# sourceMappingURL=main.ab2597ed.chunk.js.map