!function(t){function e(e){for(var o,s,a=e[0],l=e[1],c=e[2],u=0,h=[];u<a.length;u++)s=a[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);for(p&&p(e);h.length;)h.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var o={},r={0:0},i=[];function s(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=o,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(n,o,function(e){return t[e]}.bind(null,o));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=l;i.push([3,1]),n()}([,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0);e.mkComp=function(t){return function(e){return o.h("div",{className:t,onClick:e.onClick,dangerouslySetInnerHTML:e.dangerouslySetInnerHTML},e.children)}}},,function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(5),a=n(6);n(13);var l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.componentDidMount=function(){window.location.hash=window.location.hash||"/"},e.prototype.render=function(){return i.h("div",null,i.h(s.Header,null),i.h("div",{style:"width: 173px;\n    margin: 0px auto;\n          position: relative;\n          top: 30px;\n\n    "},i.h("a",{href:"https://stackoverflow.com/users/6105824/tiagolisalves?tab=profile",target:"_blank"},i.h("img",{src:"assets/icons8-stack-overflow.svg",alt:"",style:"position: relative;\n            bottom: 3px;",srcset:""})),i.h("a",{href:"https://github.com/tiagolisalves",target:"_blank"},i.h("img",{src:"assets/icons8-github.svg",style:"height: 32px;",alt:"",srcset:""})),i.h("a",{href:"https://www.instagram.com/tiagolisalves/",target:"_blank"},i.h("img",{src:"assets/icons8-instagram.svg",style:"height: 36px;    position: relative;\n            top: 2px;",alt:"",srcset:""})),i.h("a",{href:"https://www.linkedin.com/in/tiago-lisboa-alves-7aa44a115/",target:"_blank"},i.h("img",{src:"assets/icons8-linkedin.svg",style:"position: relative;\n            bottom: 3px;\n            height: 26px;\n            margin-right: 7px;",alt:"",srcset:""})),i.h("a",{href:"mailto:tiagolisalves@gmail.com",target:"_blank"},i.h("img",{src:"assets/iconfinder_mail_115714.svg",style:"width: 41px;\n            position: relative;\n            top: 5px;",alt:"",srcset:""}))),i.h(a.Content,null))},e}(i.Component);i.render(i.h(l,null),document.querySelector("#blog-container"))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(1),i=r.mkComp("header-bar"),s=r.mkComp("header-bar-content");r.mkComp("header-links");e.Header=function(){return o.h(i,null,o.h(s,null,"tiagolisalves"))}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(7),a=n(10),l=function(t){function e(){var e=t.call(this)||this;return e.state={},e}return r(e,t),e.prototype.componentDidMount=function(){console.log(this.state,"didMount"),window.addEventListener("hashchange",this.changeContent.bind(this),!1),this.changeContent()},e.prototype.changeContent=function(){var t=location.hash.replace("#","");console.log(t,t.match(/\/post\/*/g)),"/"===t?this.setState({content:i.h(s.Home,null)}):t.match(/\/post\/*/g)&&this.setState({content:i.h(a.Post,{path:"/assets/content"+t})})},e.prototype.render=function(){return console.log(this.state,"render"),i.h("div",null,this.state.content)},e}(i.Component);e.Content=l},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(8),a=n(9),l=n(1).mkComp("post-container"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.componentDidMount=function(){s.setPostsStorage(),this.setState({posts:s.getPostsStorage()})},e.prototype.render=function(){return i.h("div",null,(this.state.posts||[]).map((function(t){return i.h(l,null,i.h(a.PostPreview,{post:t}))})))},e}(i.Component);e.Home=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.setPostsStorage=function(){return!sessionStorage.getItem("postsOrder")&&sessionStorage.setItem("postsOrder",JSON.stringify([{title:" How to get content between html tags with non-greedy regex operators",subtitle:" A regex exercise: Suppose that you want get the content between html tags, basically the equivalent result returned by the https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML[Element.innerHtml] function. How you could accomplish this using only Regex?",path:"posts/capturing-text-fragments.adoc",date:"Tue Dec 31 2019"}]))};e.getPostsStorage=function(){return JSON.parse(sessionStorage.getItem("postsOrder"))}},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=n(1),a=s.mkComp("post-title-container"),l=s.mkComp("post-title link");e.PostTitle=l;var c=s.mkComp("post-date"),p=s.mkComp("post-date-container"),u=s.mkComp("post-sub-title"),h=s.mkComp("continue-link"),f=s.mkComp("link"),d=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.handleClick=function(){console.log("click"),window.location.hash="/"+this.props.post.path.replace(".adoc","")},e.prototype.render=function(){return i.h("div",null,i.h(a,null,i.h(l,{onClick:this.handleClick.bind(this)},this.props.post.title)),i.h(p,null,i.h(c,null,this.props.post.date)),i.h(u,null,this.props.post.subtitle),i.h(h,null,i.h(f,{onClick:this.handleClick.bind(this)},"continue...")))},e}(i.Component);e.PostPreview=d},function(t,e,n){"use strict";var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=new(n(11).HttpClient);n(12);var a=n(1).mkComp("post-container"),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.createMarkup=function(t){return{__html:t}},e.prototype.componentDidMount=function(){var t=this;s.get(this.props.path.concat(".html"),(function(e){t.setState({content:e})}))},e.prototype.componentDidUpdate=function(){console.time("init"),PR.prettyPrint(),console.timeEnd("init")},e.prototype.render=function(){return i.h(a,{dangerouslySetInnerHTML:this.createMarkup(this.state.content)})},e}(i.Component);e.Post=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){}return t.prototype.get=function(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==n.readyState&&200==n.status&&e(n.responseText)},n.open("GET",t,!0),n.send(null)},t}();e.HttpClient=o},,function(t,e,n){var o=n(14),r=n(15);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1},s=(o(t.i,r,i),r.locals?r.locals:{});t.exports=s},,function(t,e,n){var o=n(2),r=n(16);(e=o(!1)).i(r),e.push([t.i,"body{font-family:'Roboto Slab', serif}ol.linenums{overflow-y:hidden;padding-top:10px;background-color:black;color:white}p code{background-color:black;color:white;padding-left:4px;padding-right:4px}body{margin:0px;position:relative}.link{cursor:pointer;text-decoration:underline;display:inline;color:inherit}.post-title{font-size:3em;color:black;text-align:left;font-weight:inherit}.post-title.link{text-decoration:none}.post-date{font-weight:bold;color:black}.post-date-container{margin:15px 0}.post-title-container{margin-bottom:15px;position:relative}.post-sub-title{font-size:1.2em;color:dimgray;font-weight:bold;text-align:left;position:relative}.post-container{box-sizing:border-box;margin:60px auto;width:90%}.post-container>div{margin-bottom:30px}@media (min-width: 800px){.post-container{width:80%}}@media (min-width: 1000px){.post-container{width:70%}}@media (min-width: 1200px){.post-container{width:60%}}@media (min-width: 1300px){.post-container{width:50%}}.post-container h1{font-size:3em;color:black;text-align:left;font-weight:inherit}.post-container #preamble{font-size:1.2em;color:dimgray;font-weight:bold;text-align:left;position:relative}.post-container h2{font-weight:bold}.header-bar{height:50px;background-color:black;color:white;text-align:center;font-size:2em;position:relative}.header-bar-content{position:absolute;top:50%;transform:translate(-50%, -50%);-ms-transform:translate(-50%, -50%);left:50%}.continue-link{font-size:1.2em;display:block;margin-top:10px}.sidebarblock .content{padding:5px;border-left:4px solid black;padding-left:10px}.sidebarblock .content .title{color:black;font-weight:bold}a{cursor:pointer;text-decoration:underline;display:inline;color:inherit}xmp{margin:0}\n",""]),t.exports=e}]);