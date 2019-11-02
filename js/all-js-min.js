/*!
 * Active Link states on scroll
 */
const links=document.querySelectorAll(".nav-links"),sections=document.querySelectorAll(".section-title");function changeLinkState(){let e=sections.length;for(;--e&&window.scrollY+135<sections[e].offsetTop;);links.forEach(e=>e.classList.remove("active")),links[e].classList.add("active"),0==window.scrollY&&links[e].classList.remove("active")}function sliderAuto(e,t){e.isLastSlide=function(){return e.page>=e.dots.childElementCount-1};var o=function(){e.slideTimeout=setTimeout((function(){e.scrollItem(e.isLastSlide()?0:e.page+1,!0)}),t)};e.ele.addEventListener("glider-animated",(function(t){window.clearInterval(e.slideTimeout),o()})),o()}
/*!
 * smooth-scroll v16.1.0
 * Animate scrolling to anchor links
 * (c) 2019 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */changeLinkState(),window.addEventListener("scroll",changeLinkState),
/* @preserve
    _____ __ _     __                _
   / ___// /(_)___/ /___  ____      (_)___
  / (_ // // // _  // -_)/ __/_    / /(_-<
  \___//_//_/ \_,_/ \__//_/  (_)__/ //___/
                              |___/

  Version: 1.7.1
  Author: Nick Piscitelli (pickykneee)
  Website: https://nickpiscitelli.com
  Documentation: http://nickpiscitelli.github.io/Glider.js
  License: MIT License
  Release Date: October 25th, 2018

*/
function(e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():e()}((function(){var e="undefined"!=typeof window?window:this,t=e.Glider=function(t,o){var n=this;if(t._glider)return t._glider;if(n.ele=t,n.ele.classList.add("glider"),n.ele._glider=n,n.opt=Object.assign({},{slidesToScroll:1,slidesToShow:1,resizeLock:!0,duration:.5,easing:function(e,t,o,n,i){return n*(t/=i)*t+o}},o),n.animate_id=n.page=n.slide=0,n.arrows={},n._opt=n.opt,n.opt.skipTrack)n.track=n.ele.children[0];else for(n.track=document.createElement("div"),n.ele.appendChild(n.track);1!==n.ele.children.length;)n.track.appendChild(n.ele.children[0]);n.track.classList.add("glider-track"),n.init(),n.resize=n.init.bind(n,!0),n.event(n.ele,"add",{scroll:n.updateControls.bind(n)}),n.event(e,"add",{resize:n.resize})},o=t.prototype;return o.init=function(e,t){var o=this,n=0,i=0;o.slides=o.track.children,[].forEach.call(o.slides,(function(e){e.classList.add("glider-slide")})),o.containerWidth=o.ele.clientWidth;var r=o.settingsBreakpoint();if(t||(t=r),"auto"===o.opt.slidesToShow||o.opt._autoSlide){var a=o.containerWidth/o.opt.itemWidth;o.opt._autoSlide=o.opt.slidesToShow=o.opt.exactWidth?a:Math.floor(a)}"auto"===o.opt.slidesToScroll&&(o.opt.slidesToScroll=Math.floor(o.opt.slidesToShow)),o.itemWidth=o.opt.exactWidth?o.opt.itemWidth:o.containerWidth/o.opt.slidesToShow,[].forEach.call(o.slides,(function(e){e.style.height="auto",e.style.width=o.itemWidth+"px",n+=o.itemWidth,i=Math.max(e.offsetHeight,i)})),o.track.style.width=n+"px",o.trackWidth=n,o.opt.resizeLock&&o.scrollTo(o.slide*o.itemWidth,0),(r||t)&&(o.bindArrows(),o.buildDots(),o.bindDrag()),o.updateControls(),o.emit(e?"refresh":"loaded")},o.bindDrag=function(){var e=this;e.mouse=e.mouse||e.handleMouse.bind(e);var t=function(){e.mouseDown=void 0,e.ele.classList.remove("drag")},o={mouseup:t,mouseleave:t,mousedown:function(t){e.mouseDown=t.clientX,e.ele.classList.add("drag")},mousemove:e.mouse};e.ele.classList.toggle("draggable",!0===e.opt.draggable),e.event(e.ele,"remove",o),e.opt.draggable&&e.event(e.ele,"add",o)},o.buildDots=function(){var e=this;if(e.opt.dots){if("string"==typeof e.opt.dots?e.dots=document.querySelector(e.opt.dots):e.dots=e.opt.dots,e.dots){e.dots.innerHTML="",e.dots.className+=" glider-dots";for(var t=0;t<Math.ceil(e.slides.length/e.opt.slidesToShow);++t){var o=document.createElement("button");o.dataset.index=t,o.setAttribute("aria-label","Page "+(t+1)),o.className="glider-dot "+(t?"":"active"),e.event(o,"add",{click:e.scrollItem.bind(e,t,!0)}),e.dots.appendChild(o)}}}else e.dots&&(e.dots.innerHTML="")},o.bindArrows=function(){var e=this;e.opt.arrows?["prev","next"].forEach((function(t){var o=e.opt.arrows[t];o&&("string"==typeof o&&(o=document.querySelector(o)),o._func=o._func||e.scrollItem.bind(e,t),e.event(o,"remove",{click:o._func}),e.event(o,"add",{click:o._func}),e.arrows[t]=o)})):Object.keys(e.arrows).forEach((function(t){var o=e.arrows[t];e.event(o,"remove",{click:o._func})}))},o.updateControls=function(e){var t=this;e&&!t.opt.scrollPropagate&&e.stopPropagation();var o=t.containerWidth>=t.trackWidth;t.opt.rewind||(t.arrows.prev&&t.arrows.prev.classList.toggle("disabled",t.ele.scrollLeft<=0||o),t.arrows.next&&t.arrows.next.classList.toggle("disabled",t.ele.scrollLeft+t.containerWidth>=Math.floor(t.trackWidth)||o)),t.slide=Math.round(t.ele.scrollLeft/t.itemWidth),t.page=Math.round(t.ele.scrollLeft/t.containerWidth);var n=t.slide+Math.floor(Math.floor(t.opt.slidesToShow)/2),i=Math.floor(t.opt.slidesToShow)%2?0:n+1;1===Math.floor(t.opt.slidesToShow)&&(i=0),t.ele.scrollLeft+t.containerWidth>=Math.floor(t.trackWidth)&&(t.page=t.dots?t.dots.children.length-1:0),[].forEach.call(t.slides,(function(e,o){var r=e.classList,a=r.contains("visible"),s=t.ele.scrollLeft,l=t.ele.scrollLeft+t.containerWidth,c=t.itemWidth*o,d=c+t.itemWidth;[].forEach.call(r,(function(e){/^left|right/.test(e)&&r.remove(e)})),r.toggle("active",t.slide===o),n===o||i&&i===o?r.add("center"):(r.remove("center"),r.add([o<n?"left":"right",Math.abs(o-(o<n?n:i||n))].join("-")));var u=Math.ceil(c)>=s&&Math.floor(d)<=l;r.toggle("visible",u),u!==a&&t.emit("slide-"+(u?"visible":"hidden"),{slide:o})})),t.dots&&[].forEach.call(t.dots.children,(function(e,o){e.classList.toggle("active",t.page===o)})),e&&t.opt.scrollLock&&(clearTimeout(t.scrollLock),t.scrollLock=setTimeout((function(){clearTimeout(t.scrollLock),Math.abs(t.ele.scrollLeft/t.itemWidth-t.slide)>.02&&(t.mouseDown||t.scrollItem(t.round(t.ele.scrollLeft/t.itemWidth)))}),t.opt.scrollLockDelay||250))},o.scrollItem=function(e,t,o){o&&o.preventDefault();var n=this,i=e;if(++n.animate_id,!0===t)e*=n.containerWidth,e=Math.round(e/n.itemWidth)*n.itemWidth;else{if("string"==typeof e){var r="prev"===e;if(e=n.opt.slidesToScroll%1||n.opt.slidesToShow%1?n.round(n.ele.scrollLeft/n.itemWidth):n.slide,r?e-=n.opt.slidesToScroll:e+=n.opt.slidesToScroll,n.opt.rewind){var a=n.ele.scrollLeft;e=r&&!a?n.slides.length:!r&&a+n.containerWidth>=Math.floor(n.trackWidth)?0:e}}e=Math.max(Math.min(e,n.slides.length),0),n.slide=e,e=n.itemWidth*e}return n.scrollTo(e,n.opt.duration*Math.abs(n.ele.scrollLeft-e),(function(){n.updateControls(),n.emit("animated",{value:i,type:"string"==typeof i?"arrow":t?"dot":"slide"})})),!1},o.settingsBreakpoint=function(){var t=this,o=t._opt.responsive;if(o){o.sort((function(e,t){return t.breakpoint-e.breakpoint}));for(var n=0;n<o.length;++n){var i=o[n];if(e.innerWidth>=i.breakpoint)return t.breakpoint!==i.breakpoint&&(t.opt=Object.assign({},t._opt,i.settings),t.breakpoint=i.breakpoint,!0)}}var r=0!==t.breakpoint;return t.opt=Object.assign({},t._opt),t.breakpoint=0,r},o.scrollTo=function(t,o,n){var i=this,r=(new Date).getTime(),a=i.animate_id,s=function(){var l=(new Date).getTime()-r;i.ele.scrollLeft=i.ele.scrollLeft+(t-i.ele.scrollLeft)*i.opt.easing(0,l,0,1,o),l<o&&a===i.animate_id?e.requestAnimationFrame(s):(i.ele.scrollLeft=t,n&&n.call(i))};e.requestAnimationFrame(s)},o.removeItem=function(e){var t=this;t.slides.length&&(t.track.removeChild(t.slides[e]),t.refresh(!0),t.emit("remove"))},o.addItem=function(e){var t=this;t.track.appendChild(e),t.refresh(!0),t.emit("add")},o.handleMouse=function(e){var t=this;t.mouseDown&&(t.ele.scrollLeft+=(t.mouseDown-e.clientX)*(t.opt.dragVelocity||3.3),t.mouseDown=e.clientX)},o.round=function(e){var t=1/(this.opt.slidesToScroll%1||1);return Math.round(e*t)/t},o.refresh=function(e){this.init(!0,e)},o.setOption=function(e,t){var o=this;o.breakpoint&&!t?o._opt.responsive.forEach((function(t){t.breakpoint===o.breakpoint&&(t.settings=Object.assign({},t.settings,e))})):o._opt=Object.assign({},o._opt,e),o.breakpoint=0,o.settingsBreakpoint()},o.destroy=function(){var t=this,o=t.ele.cloneNode(!0),n=function(e){e.removeAttribute("style"),[].forEach.call(e.classList,(function(t){/^glider/.test(t)&&e.classList.remove(t)}))};o.children[0].outerHTML=o.children[0].innerHTML,n(o),[].forEach.call(o.getElementsByTagName("*"),n),t.ele.parentNode.replaceChild(o,t.ele),t.event(e,"remove",{resize:t.resize}),t.emit("destroy")},o.emit=function(t,o){var n=new e.CustomEvent("glider-"+t,{bubbles:!this.opt.eventPropagate,detail:o});this.ele.dispatchEvent(n)},o.event=function(e,t,o){var n=e[t+"EventListener"].bind(e);Object.keys(o).forEach((function(e){n(e,o[e])}))},t})),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,o=(this.document||this.ownerDocument).querySelectorAll(e),n=this;do{for(t=o.length;--t>=0&&o.item(t)!==n;);}while(t<0&&(n=n.parentElement));return n}),function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var o=document.createEvent("CustomEvent");return o.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),o}e.prototype=window.Event.prototype,window.CustomEvent=e}(),
/**
 * requestAnimationFrame() polyfill
 * By Erik Möller. Fixes from Paul Irish and Tino Zijdel.
 * @link http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * @link http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 * @license MIT
 */
function(){for(var e=0,t=["ms","moz","webkit","o"],o=0;o<t.length&&!window.requestAnimationFrame;++o)window.requestAnimationFrame=window[t[o]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[o]+"CancelAnimationFrame"]||window[t[o]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,o){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),r=window.setTimeout((function(){t(n+i)}),i);return e=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(e,t){"function"==typeof define&&define.amd?define([],(function(){return t(e)})):"object"==typeof exports?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:this,(function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:25,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},o=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var o in t){if(!t.hasOwnProperty(o))return;e[o]=t[o]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,o=String(e),n=o.length,i=-1,r="",a=o.charCodeAt(0);++i<n;){if(0===(t=o.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");t>=1&&t<=31||127==t||0===i&&t>=48&&t<=57||1===i&&t>=48&&t<=57&&45===a?r+="\\"+t.toString(16)+" ":r+=t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?o.charAt(i):"\\"+o.charAt(i)}return"#"+r},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t){return t?(o=t,parseInt(e.getComputedStyle(o).height,10)+t.offsetTop):0;var o},a=function(t,o,n,i){if(o.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:i}});document.dispatchEvent(r)}};return function(s,l){var c,d,u,f,h={};h.cancelScroll=function(e){cancelAnimationFrame(f),f=null,e||a("scrollCancel",c)},h.animateScroll=function(n,s,l){h.cancelScroll();var d=o(c||t,l||{}),m="[object Number]"===Object.prototype.toString.call(n),p=m||!n.tagName?null:n;if(m||p){var v=e.pageYOffset;d.header&&!u&&(u=document.querySelector(d.header));var g,w,b,y=r(u),L=m?n:function(t,o,n,r){var a=0;if(t.offsetParent)do{a+=t.offsetTop,t=t.offsetParent}while(t);return a=Math.max(a-o-n,0),r&&(a=Math.min(a,i()-e.innerHeight)),a}(p,y,parseInt("function"==typeof d.offset?d.offset(n,s):d.offset,10),d.clip),k=L-v,S=i(),E=0,T=function(e,t){var o=t.speedAsDuration?t.speed:Math.abs(e/1e3*t.speed);return t.durationMax&&o>t.durationMax?t.durationMax:t.durationMin&&o<t.durationMin?t.durationMin:parseInt(o,10)}(k,d),M=function(t,o){var i=e.pageYOffset;if(t==o||i==o||(v<o&&e.innerHeight+i)>=S)return h.cancelScroll(!0),function(t,o,n){0===t&&document.body.focus(),n||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,o))}(n,o,m),a("scrollStop",d,n,s),g=null,f=null,!0},A=function(t){g||(g=t),E+=t-g,b=v+k*function(e,t){var o;return"easeInQuad"===e.easing&&(o=t*t),"easeOutQuad"===e.easing&&(o=t*(2-t)),"easeInOutQuad"===e.easing&&(o=t<.5?2*t*t:(4-2*t)*t-1),"easeInCubic"===e.easing&&(o=t*t*t),"easeOutCubic"===e.easing&&(o=--t*t*t+1),"easeInOutCubic"===e.easing&&(o=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(o=t*t*t*t),"easeOutQuart"===e.easing&&(o=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(o=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(o=t*t*t*t*t),"easeOutQuint"===e.easing&&(o=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(o=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(o=e.customEasing(t)),o||t}(d,w=(w=0===T?0:E/T)>1?1:w),e.scrollTo(0,Math.floor(b)),M(b,L)||(f=e.requestAnimationFrame(A),g=t)};0===e.pageYOffset&&e.scrollTo(0,0),function(e,t,o){t||history.pushState&&o.updateURL&&history.pushState({smoothScroll:JSON.stringify(o),anchor:e.id},document.title,e===document.documentElement?"#top":"#"+e.id)}(n,m,d),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(L)):(a("scrollStart",d,n,s),h.cancelScroll(!0),e.requestAnimationFrame(A))}};var m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(s))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var o,i=n(d.hash);if("#"===i){if(!c.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(i);(o=o||"#top"!==i?o:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var o=e.location.hash;o=o||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:o||e.pageYOffset},document.title,o||e.location.href)}}(c),h.animateScroll(o,d))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(n(history.state.anchor)))||h.animateScroll(t,null,{updateURL:!1})}};h.destroy=function(){c&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),h.cancelScroll(),c=null,null,d=null,u=null,null,f=null)};return function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),c=o(t,l||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",p,!1)}(),h}}));
/*!
 * Sticky Header Navigation
 */
let headerNav=document.getElementById("header"),sticky=headerNav.offsetTop;function stickyNav(){window.pageYOffset>=sticky?headerNav.classList.add("sticky-header"):headerNav.classList.remove("sticky-header"),window.pageYOffset<=sticky&&headerNav.classList.remove("sticky-header")}