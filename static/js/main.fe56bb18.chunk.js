(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a(39)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t){!function(e){var t,a,n,r={x:0,y:0,px:0,py:0,down:!0},o=10*Math.round(window.innerWidth/10),l=10*Math.round(window.innerHeight/10),i=o/10,c=l/10,s=Math.floor(window.innerWidth*window.innerHeight/100/4/2/2);console.log("speck_count: ".concat(s," particles"));var m=[],u=[],d=function e(){for(var i=r.x-r.px,c=r.y-r.py,s=0;s<m.length;s++)for(var d=m[s],g=0;g<d.length;g++){var f=d[g];r.down&&h(f,i,c,40),p(f)}a.clearRect(0,0,t.width,t.height),a.strokeStyle="dark"===n?"#00ffff":"#000",function(){for(var e=0;e<u.length;e++){var t=u[e];if(t.x>=0&&t.x<o&&t.y>=0&&t.y<l){var n=parseInt(t.x/10,10),r=parseInt(t.y/10,10),i=m[n][r],c=t.x%10/10,s=t.y%10/10;t.xv+=(1-c)*i.xv*.05,t.yv+=(1-s)*i.yv*.05,t.xv+=c*i.right.xv*.05,t.yv+=c*i.right.yv*.05,t.xv+=s*i.down.xv*.05,t.yv+=s*i.down.yv*.05,t.x+=t.xv,t.y+=t.yv;var d=t.px-t.x,h=t.py-t.y,p=Math.sqrt(d*d+h*h),v=.5*Math.random();p>v?(a.lineWidth=1,a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(t.px,t.py),a.stroke()):(a.beginPath(),a.moveTo(t.x,t.y),a.lineTo(t.x+v,t.y+v),a.stroke()),t.px=t.x,t.py=t.y}else t.x=t.px=Math.random()*o,t.y=t.py=Math.random()*l,t.xv=0,t.yv=0;t.xv*=.5,t.yv*=.5}}();for(var y=0;y<m.length;y++)for(var b=m[y],E=0;E<b.length;E++){var w=b[E];v(w)}r.px=r.x,r.py=r.y,window.Fluid.animId=requestAnimationFrame(e)},h=function(e,t,a,n){var o=e.x-r.x,l=e.y-r.y,i=Math.sqrt(l*l+o*o);if(i<n){i<4&&(i=n);var c=n/i;e.xv+=t*c,e.yv+=a*c}},p=function(e){var t=.5*e.up_left.xv+e.left.xv+.5*e.down_left.xv-.5*e.up_right.xv-e.right.xv-.5*e.down_right.xv,a=.5*e.up_left.yv+e.up.yv+.5*e.up_right.yv-.5*e.down_left.yv-e.down.yv-.5*e.down_right.yv;e.pressure=.25*(t+a)},v=function(e){e.xv+=.25*(.5*e.up_left.pressure+e.left.pressure+.5*e.down_left.pressure-.5*e.up_right.pressure-e.right.pressure-.5*e.down_right.pressure),e.yv+=.25*(.5*e.up_left.pressure+e.up.pressure+.5*e.up_right.pressure-.5*e.down_left.pressure-e.down.pressure-.5*e.down_right.pressure),e.xv*=.99,e.yv*=.99};function g(e,t,a){this.x=e,this.y=t,this.r=a,this.col=0,this.row=0,this.xv=0,this.yv=0,this.pressure=0}function f(e,t){this.x=this.px=e,this.y=this.py=t,this.xv=this.yv=0}var y=function(e){e.preventDefault(),r.down=!0},b=function(e){e.touches||(r.down=!1)},E=function(e){r.px=r.x,r.py=r.y,r.x=e.offsetX||e.layerX,r.y=e.offsetY||e.layerY},w=function(e){r.px=r.x,r.py=r.y;var a=t.getBoundingClientRect();r.x=e.touches[0].pageX-a.left,r.y=e.touches[0].pageY-a.top};e.Fluid={initialize:function(r){n=r,m=[],u=[],t=document.getElementById("c"),a=t.getContext("2d"),t.width=o,t.height=l;for(var h=0;h<s;h++)u.push(new f(Math.random()*o,Math.random()*l));for(var p=0;p<i;p++){m[p]=[];for(var v=0;v<c;v++){var k=new g(10*p,10*v,10);m[p][v]=k,m[p][v].col=p,m[p][v].row=v}}for(var N=0;N<i;N++)for(var x=0;x<c;x++){var M=m[N][x],j=x-1>=0?x-1:c-1,C=N-1>=0?N-1:i-1,A=N+1<i?N+1:0,O=m[N][j],S=m[C][x],_=m[C][j],I=m[A][j];M.up=O,M.left=S,M.up_left=_,M.up_right=I,O.down=m[N][x],S.right=m[N][x],_.down_right=m[N][x],I.down_left=m[N][x]}e.addEventListener("touchstart",y),e.addEventListener("touchend",b),t.addEventListener("mousemove",E),t.addEventListener("touchmove",w),d()},animId:void 0}}(window)},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=(a(21),a(2)),c=a(3),s=a(6),m=a(4),u=a(1),d=a(5),h=(a(22),a(23),a(24),function(e){console.log(e.target);var t=e.target.attributes.props.value;document.getElementById(t).scrollIntoView({behavior:"smooth"})}),p=function(e){var t=e.text,a=e.scrollTo;return r.a.createElement("button",{props:a,onClick:function(e){return h(e)},className:"StyledButton"},t||"Contact")},v=function(e){var t=e.themeMode;return r.a.createElement("div",{className:"Head "+t,id:"Home"},r.a.createElement("header",{className:"banner"},r.a.createElement(g,{text:["Hi, my name is <b>Raphael</b>.","I'm a <b>full</b> <b>stack</b> <b>developer</b> based in <b>Innsbruck,</b> <b>Austria</b>.","Currently I work as a freelancer building applications and online presences for clients from all around the globe."]}),r.a.createElement("span",{className:"toAppear appearOnLoad"},r.a.createElement(p,{scrollTo:"Contact"}))))},g=function(e){var t=e.text;return r.a.createElement("div",{className:"banner"},t.map(function(e,t){return r.a.createElement("p",{className:"toAppear appear",key:t},2===t&&r.a.createElement("div",{style:{margin:"6px"}}),e.split(" ").map(function(e,t){return r.a.createElement("span",{className:"appearOnLoad",dangerouslySetInnerHTML:{__html:" ".concat(e)},key:t})}))}))},f=(a(25),function(e){var t=e.themeMode;return r.a.createElement("div",{id:"about",className:"about "+t},r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",{className:"text"},r.a.createElement("i",{className:"fas fa-quote-left"}),r.a.createElement("br",null),"Being a naturally curious guy I ",r.a.createElement("b",null,"enjoy diving into new things")," and ",r.a.createElement("b",null,"figuring out problems")," as I stumble upon them.")),r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",{className:"text"},"I like to ",r.a.createElement("b",null,"prototype quickly")," for proof of concept, but am very ",r.a.createElement("b",null,"critical about code")," I intend to push to production.",r.a.createElement("br",null),r.a.createElement("i",{className:"fas fa-quote-right"}))))}),y=(a(26),[{title:"For Reddit, to Go",tagline:"Listen to Reddit while getting stuff done - through the power of Text to Speech. Only works in Chrome and Firefox.",features:["basic reddit functionality","log in with reddit","text-to-speech","basic audio player features like skip, back, pause"],thumbnail:"rtg_bg.png",images:["rtg_bg.png"],link:"https://raphaelmayer.github.io/ForRedditToGo",repo:"https://github.com/raphaelmayer/ForRedditToGo",tech:["react.js","javascript","Web Speech API"],type:"front end"},{title:"Crawl-Unsplash-CLI",tagline:"Small command line utility for crawling and downloading royalty-free images from unsplash.com.",features:["query images by category","download images","ensures unique directories recursively"],thumbnail:"crawl-unsplash-cl_bg.jpg",images:["crawl-unsplash-cl_bg.jpg","crawl.jpg"],link:"",repo:"https://github.com/raphaelmayer/crawl-unsplash-cl",tech:["node.js"],type:"misc"},{title:"Get Me a Goddamn Movie!",tagline:"My girlfriend and I spent way too much time scrolling through Netflix to find something to watch. You just can't judge a movie by its cover! Consult ratings and movie trailers with ease to make an educated desicion.",features:["search by actor or movie name","pagination","trailer"],thumbnail:"gmagm_bg2.png",images:["GMAGM3.jpg","GMAGM.jpg","GMAGM1.jpg"],link:"https://raphaelmayer.github.io/Get-Me-a-Goddamn-Movie",repo:"https://github.com/raphaelmayer/Get-Me-a-Goddamn-Movie",tech:["react.js"],type:"front end"},{title:"Weather App",tagline:"Lightweight, mobile-first web app to check your local weather or any location by name or ZIP-code in real time.",features:["weather info by query or GPS","5 day forecast","celsius and fahrenheit"],thumbnail:"weatherApp_bg.png",images:["weatherApp.png","weatherApp_mobile.png"],link:"https://raphaelmayer.github.io/weather-app",repo:"https://github.com/raphaelmayer/weather-app",tech:["javascript"],type:"front end"},{title:"Simon Game",tagline:"Simon Says is a classic game where the player has to reproduce a given sequence of button presses. With animation and sound.",features:["FUN!","hard mode"],thumbnail:"simon_bg.png",images:["simon-game.jpg"],link:"https://raphaelmayer.github.io/simon-game",repo:"https://github.com/raphaelmayer/simon-game",tech:["javascript"],type:"front end"},{title:"Choropleth Visualization",tagline:"A map showing percentages of adults of age 25 and older with a bachelor's degree or higher (2010-2014)",features:["interactive: hover for more info"],thumbnail:"choro_bg.png",images:["choro_bg.png"],link:"https://raphaelmayer.github.io/choropleth_map",repo:"https://github.com/raphaelmayer/choropleth_map",tech:["d3.js","javascript"],type:"misc"},{title:"YouVote - create and share polls",tagline:"YouVote is a web application where users can create and save custom polls and share them with people online.",features:["Authentication","basic CRUD operations"],thumbnail:"youvote-preview.jpg",images:["youvote-explore.png","youvote-main.png","youvote-new.png","youvote-poll.png","youvote-my.png"],link:"https://raphaelmayer.github.io/youvote",repo:"https://github.com/raphaelmayer/Voting-App",tech:["react.js","node.js","mongoDB"],type:"full stack"},{title:"tbd",tagline:"A platform to share and sell gigs.",features:["authentication","messaging","rating system"],thumbnail:"placeholder.jpg",images:["placeholder.jpg"],link:"",repo:"https://github.com/raphaelmayer/food-share",tech:["react.js","node.js","redux","mongoDB"],type:"full stack"},{title:"tbd",tagline:"A platform to share and sell gigs.",features:["authentication","messaging","rating system"],thumbnail:"placeholder.jpg",images:["placeholder.jpg"],link:"",repo:"https://github.com/raphaelmayer/food-share",tech:["react.js","node.js","mongoDB","redux","mongoDB","react.js","node.js","redux"],type:"full stack"}]),b=(a(27),function(e){var t=e.p,a=(e.i,e.onClick);return r.a.createElement("div",{className:"workbox",onClick:function(e){return a(t)}},r.a.createElement("img",{className:"workbox-img",alt:"",src:"".concat("/go","/images/").concat(t.thumbnail)}),r.a.createElement("p",{className:"workbox-title"},t.title))}),E=(a(28),function(e){var t=e.keyword,a=e.isActive,n=e.onClick;return a===t?r.a.createElement("button",{className:"filter-btn-active",onClick:n},t):r.a.createElement("button",{className:"filter-btn",onClick:n},t)}),w=function(e){var t=e.isActive,a=e.onClick,n=e.count;return r.a.createElement("div",{className:"filter-container"},r.a.createElement("div",{className:"filter"},r.a.createElement(E,{isActive:t,onClick:a,keyword:"front end"}),r.a.createElement(E,{isActive:t,onClick:a,keyword:"full stack"}),r.a.createElement(E,{isActive:t,onClick:a,keyword:"misc"}),r.a.createElement(E,{isActive:t,onClick:a,keyword:"react.js"}),r.a.createElement(E,{isActive:t,onClick:a,keyword:"node.js"})),t?r.a.createElement("p",null,"Active Filter: ",r.a.createElement("strong",null,t)):r.a.createElement("p",null,"Active Filter: none"),r.a.createElement("div",null,n," projects found"))},k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={projects:y,filter:!1},a.handleFilter=a.handleFilter.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleFilter",value:function(e){var t=e.target.innerHTML;if(this.state.filter)if(this.state.filter!==t){var a=y.filter(function(e){return e.tech.indexOf(t)>=0});this.setState({filter:t,projects:a})}else this.setState({filter:!1,projects:y});else{var n=y.filter(function(e){return e.tech.indexOf(t)>=0});this.setState({filter:t,projects:n})}}},{key:"render",value:function(){var e=this.state.projects,t=this.props,a=t.handleOverlay,n=t.themeMode;return e?r.a.createElement("div",{className:"work "+n,id:"Work"},r.a.createElement("span",{className:"toAppear"},r.a.createElement("h1",null,"Featured Work")),r.a.createElement("span",{className:"toAppear"},r.a.createElement(w,{isActive:this.state.filter,onClick:this.handleFilter,count:e.length})),this.state.filter&&!this.state.projects[0]&&r.a.createElement(N,null),r.a.createElement("div",{className:"work-box-container"},this.state.projects.map(function(e,t){return r.a.createElement("span",{className:"toAppear appear"},r.a.createElement(b,{p:e,i:t,onClick:a,key:t}))}))):r.a.createElement("div",null," no projects ")}}]),t}(n.Component),N=function(){return r.a.createElement("div",{className:"no-projects"},r.a.createElement("h2",null,"No projects found."),r.a.createElement("p",null,"I update these regularly so you could perhaps consider checking back in a bit.."))},x=(a(29),a(30),function(){return r.a.createElement("div",{className:"hexagon"},r.a.createElement("div",{className:"hex-top"}),r.a.createElement("div",{className:"hex-body"}),r.a.createElement("div",{className:"hex-bot"}))}),M=function(){return r.a.createElement("div",{className:"hex-grid"},r.a.createElement("div",{className:"hex-row-even"},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null)),r.a.createElement("div",{className:"hex-row"},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null)),r.a.createElement("div",{className:"hex-row-even"},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null)),r.a.createElement("div",{className:"hex-row"},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null)),r.a.createElement("div",{className:"hex-row-even"},r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null),r.a.createElement(x,null)))},j=function(e){var t=e.themeMode;return r.a.createElement("div",{className:"contact "+t,id:"Contact"},window.innerWidth<=1e3?null:r.a.createElement(M,null),r.a.createElement("span",{className:"toAppear"},r.a.createElement("h1",null,"get in touch")),r.a.createElement("span",{className:"toAppear"},r.a.createElement("p",null,"Whether you have a project you'd like to discuss or you just want to say ",r.a.createElement("b",null,"hello"),", shoot me an email and I will get back to you soon.")),r.a.createElement("form",{action:"https://formcarry.com/s/WlOMZiyHGVI",method:"POST",acceptCharset:"UTF-8"},r.a.createElement("span",{className:"toAppear"},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"name"}),r.a.createElement("input",{type:"text",name:"name",className:"form-control","aria-describedby":"nameHelp",placeholder:"Your name..",required:!0}))),r.a.createElement("span",{className:"toAppear"},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"email"}),r.a.createElement("input",{type:"email",name:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Your email..",required:!0}))),r.a.createElement("span",{className:"toAppear"},r.a.createElement("div",{className:"form-group "},r.a.createElement("label",{htmlFor:"contactTextarea"}),r.a.createElement("textarea",{type:"text",name:"message",className:"form-control",placeholder:"How can I help?",rows:"3"}))),r.a.createElement("div",{className:"toAppear"},r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit!"))))},C=function(e){var t=e.handleOverlay,a=e.isHidden,n=e.themeMode;return r.a.createElement("div",{className:"FrontPage ".concat(a&&"FrontPage-hidden")},r.a.createElement("div",null,r.a.createElement(v,{themeMode:n})),r.a.createElement(k,{handleOverlay:t,themeMode:n}),r.a.createElement(f,{themeMode:n}),r.a.createElement(j,{themeMode:n}),r.a.createElement("footer",{className:"footer "+n},(new Date).getFullYear()," - designed and built by Raphael Mayer"))},A=(a(31),a(32),function(){return r.a.createElement("div",{className:"social-media-icons"},r.a.createElement("a",{href:"https://github.com/raphaelmayer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/raphael-mayer",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin"})))}),O=(a(33),function(e){var t=e.themeMode,a=e.toggleDarkMode,n="light"===t;return r.a.createElement("label",{className:"switch"},r.a.createElement("i",{className:"fas fa-sun"}),r.a.createElement("i",{className:"fas fa-moon"}),r.a.createElement("input",{type:"checkbox",onChange:a,checked:n}),r.a.createElement("span",{className:"slider round"}))}),S=["Home","Work","Contact"],_=function(e){var t=e.className,a=e.bg,n=e.handleMobileNav,o=e.themeMode,l=e.toggleDarkMode,i={backgroundColor:"dark"===o?"rgb(28, 28, 28)":"#eee",padding:window.innerWidth<=800?"6vh 5vw":"1vh 5vw",boxShadow:"dark"===o?"0px 0px 6px 1px #111":"0px 0px 6px 1px #bbb"};return r.a.createElement("nav",{className:t+" "+o,style:a?i:{}},r.a.createElement("div",{className:"nav-btns-container"},S.map(function(e,t){return r.a.createElement(I,{text:e,nbr:t,key:t,onClick:function(e){h(e),n()}})})),r.a.createElement(A,null),r.a.createElement(O,{themeMode:o,toggleDarkMode:l}))},I=function(e){var t=e.text,a=e.onClick,n=e.nbr;return r.a.createElement("div",{props:t,className:"nav-btn btn".concat(n),onClick:a},r.a.createElement("div",{props:t,className:"nav-btn-text"}," ",t," "),r.a.createElement("div",{props:t,className:"nav-btn-border"}))},F=(a(34),function(e){var t=e.onClick,a=e.transform;return r.a.createElement("svg",{height:"24",width:"26",className:a?"nav-icon nav-icon-active":"nav-icon",onClick:t},r.a.createElement("line",{className:"line-1",x1:"0",y1:"3",x2:"26",y2:"3"}),r.a.createElement("line",{className:"line-2",x1:"0",y1:"12",x2:"26",y2:"12"}),r.a.createElement("line",{className:"line-3",x1:"0",y1:"21",x2:"26",y2:"21"}))}),L=(a(35),function(){return r.a.createElement("div",{className:"loading-screen"},r.a.createElement("div",{className:"center-piece"},r.a.createElement("div",{className:"loading-bar"})))}),T=(a(36),function(e){var t=e.p,a=e.visible,n=e.handleOverlay,o=e.themeMode;return t?r.a.createElement("div",{className:"overlay ".concat(o," ").concat(a&&"overlay-active")},r.a.createElement(F,{onClick:n,transform:!0}),r.a.createElement("div",{className:"overlay-bg",onClick:function(e){return n(e)}}),r.a.createElement("div",{className:"overlay-container"},r.a.createElement("div",{className:"overlay-head",style:{backgroundImage:"url(".concat("/go","/images/").concat(t.thumbnail,")")}},r.a.createElement("div",{className:"darken-bg"}),r.a.createElement("h1",null,t.title.toLowerCase())),r.a.createElement("div",{className:"overlay-section"},r.a.createElement("div",{className:"tech"},t.tech.map(function(e,t){return r.a.createElement("button",null,e," ")}))),r.a.createElement("div",{className:"overlay-section"},r.a.createElement("p",null,r.a.createElement("em",null,t.tagline)),r.a.createElement("h3",null,"in a nutshell"),r.a.createElement("ul",null,t.features&&t.features.map(function(e,t){return r.a.createElement("li",null,"> "+e)}))),t.link&&r.a.createElement(W,{src:t.link,text:"demo"}),t.repo&&r.a.createElement(W,{src:t.repo,text:"source"}))):r.a.createElement("div",{className:"overlay"},"error")}),W=function(e){var t=e.src,a=e.text;return r.a.createElement("a",{href:""===t?null:t,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("button",{className:"overlay-btn"},r.a.createElement("i",{className:"demo"===a?"fas fa-eye":"fas fa-code"}),a))},D=(a(37),a(38),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return q(e.props.themeMode)},60)}},{key:"componentDidUpdate",value:function(){var e=this;window.cancelAnimationFrame(window.Fluid.animId),setTimeout(function(){return q(e.props.themeMode)},60)}},{key:"shouldComponentUpdate",value:function(e){return e.themeMode!==this.props.themeMode}},{key:"render",value:function(){return r.a.createElement("div",{className:"parallax"},r.a.createElement("canvas",{id:"c"}))}}]),t}(n.Component)),q=function(e){window.Fluid.initialize(e)},G=function(e,t){var a=!1;return function(){a||(e.call(),a=!0,setTimeout(function(){a=!1},t))}};function H(e){var t=e.getBoundingClientRect(),a=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(t.bottom<100||t.top-a>=-100)}var B=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={showMobileNav:!1,navColor:!1,overlay:{p:null,visible:!1},themeMode:"dark"},e.handleMobileNav=e.handleMobileNav.bind(Object(u.a)(e)),e.handleScroll=e.handleScroll.bind(Object(u.a)(e)),e.handleOverlay=e.handleOverlay.bind(Object(u.a)(e)),e.toggleDarkMode=e.toggleDarkMode.bind(Object(u.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){setTimeout(function(){return document.querySelector(".loading-bar").className+=" loading-bar60"},50),window.addEventListener("load",this.handleLoad),window.addEventListener("scroll",G(this.handleScroll,50));var e=localStorage.getItem("themeMode");e&&"light"===e&&this.setState({themeMode:"light"})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.handleLoad),window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(e){var t=document.querySelectorAll(".toAppear");window.scrollY>=100?this.setState({navColor:!0}):this.setState({navColor:!1});for(var a=0;a<t.length;a++)H(t[a])?t[a].className="toAppear appear":t[a].className="toAppear"}},{key:"handleLoad",value:function(){document.querySelector(".loading-bar").className+=" loading-bar100",setTimeout(function(){return document.querySelector(".loading-screen").className+=" ls-done"},200);var e=document.querySelectorAll(".appearOnLoad");console.log(e),e.forEach(function(e,t){e&&setTimeout(function(){return e.className+=" appear"},30*t)})}},{key:"handleMobileNav",value:function(){this.state.showMobileNav?this.setState({showMobileNav:!1}):this.setState({showMobileNav:!0})}},{key:"handleOverlay",value:function(e){this.state.overlay.visible?(this.setState({overlay:{p:this.state.overlay.p,visible:!1}}),document.querySelector("body").className=""):(this.setState({overlay:{p:e,visible:!0}}),document.querySelector("body").className="noscroll")}},{key:"toggleDarkMode",value:function(e){var t="dark"===this.state.themeMode?"light":"dark";localStorage.setItem("themeMode",t),this.setState({themeMode:t})}},{key:"render",value:function(){var e=this.state,t=e.showMobileNav,a=e.navColor,n=e.overlay,o=e.themeMode;return r.a.createElement("div",{className:"App "+o},r.a.createElement(L,null),r.a.createElement(T,{p:n.p,visible:n.visible,handleOverlay:this.handleOverlay,themeMode:o}),r.a.createElement(D,{themeMode:o}),window.innerWidth<=800?r.a.createElement(F,{onClick:this.handleMobileNav,transform:t}):null,t&&window.innerWidth<=800?r.a.createElement(_,{className:"nav nav-active",handleMobileNav:this.handleMobileNav,themeMode:o,toggleDarkMode:this.toggleDarkMode}):r.a.createElement(_,{className:"nav",bg:a,handleMobileNav:this.handleMobileNav,themeMode:o,toggleDarkMode:this.toggleDarkMode}),r.a.createElement(C,{handleOverlay:this.handleOverlay,isHidden:n.visible,themeMode:o}))}}]),t}(n.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(r.a.createElement(B,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/go",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/go","/service-worker.js");R?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Y(e)})}}()}],[[12,1,2]]]);
//# sourceMappingURL=main.fe56bb18.chunk.js.map