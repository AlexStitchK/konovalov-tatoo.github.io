!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var E=!1,C=!1,L=0,M=2e3,N=0,P=e,B=document,R=window,I=P(R),H=[],Y=R.requestAnimationFrame||R.webkitRequestAnimationFrame||R.mozRequestAnimationFrame||!1,O=R.cancelAnimationFrame||R.webkitCancelAnimationFrame||R.mozCancelAnimationFrame||!1;if(Y)R.cancelAnimationFrame||(O=function(e){});else{var n=0;Y=function(e,t){var o=(new Date).getTime(),r=Math.max(0,16-(o-n)),i=R.setTimeout(function(){e(o+r)},r);return n=o+r,i},O=function(e){R.clearTimeout(e)}}var t,o,r,A=R.MutationObserver||R.WebKitMutationObserver||!1,X=Date.now||function(){return(new Date).getTime()},_={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"6px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:40,mousescrollstep:27,touchbehavior:!1,emulatetouch:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:(o=B.currentScript||!!(t=B.getElementsByTagName("script")).length&&t[t.length-1],r=o?o.src.split("?")[0]:"",0<r.split("/").length?r.split("/").slice(0,-1).join("/")+"/":""),preventmultitouchscrolling:!0,disablemutationobserver:!1,enableobserver:!0,scrollbarid:!1},D=!1,l=function(e,t){function o(){var e=w.doc.css(S.trstyle);return!(!e||"matrix"!=e.substr(0,6))&&e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}function s(e,t,o){var r=e.css(t),i=parseFloat(r);if(isNaN(i)){var n=3==(i=h[r]||0)?o?w.win.outerHeight()-w.win.innerHeight():w.win.outerWidth()-w.win.innerWidth():1;return w.isie8&&i&&(i+=1),n?i:0}return i}function n(o,r,i,e){w._bind(o,r,function(e){var t={original:e=e||R.event,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return e.preventDefault?e.preventDefault():e.returnValue=!1,!1},stopImmediatePropagation:function(){e.stopImmediatePropagation?e.stopImmediatePropagation():e.cancelBubble=!0}};return"mousewheel"==r?(e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX),e.wheelDeltaY&&(t.deltaY=-.025*e.wheelDeltaY),!t.deltaY&&!t.deltaX&&(t.deltaY=-.025*e.wheelDelta)):t.deltaY=e.detail,i.call(o,t)},e)}function l(e,t,o,r){w.scrollrunning||(w.newscrolly=w.getScrollTop(),w.newscrollx=w.getScrollLeft(),b=X());var i=X()-b;if(b=X(),350<i?k=1:k+=(2-k)/10,t=t*k|0,e=e*k|0){if(r)if(e<0){if(w.getScrollLeft()>=w.page.maxw)return!0}else if(w.getScrollLeft()<=0)return!0;var n=0<e?1:-1;v!==n&&(w.scrollmom&&w.scrollmom.stop(),w.newscrollx=w.getScrollLeft(),v=n),w.lastdeltax-=e}if(t){if(function(){var e=w.getScrollTop();if(t<0){if(e>=w.page.maxh)return!0}else if(e<=0)return!0}()){if(x.nativeparentscrolling&&o&&!w.ispage&&!w.zoomactive)return!0;var s=w.view.h>>1;w.newscrolly<-s?(w.newscrolly=-s,t=-1):w.newscrolly>w.page.maxh+s?(w.newscrolly=w.page.maxh+s,t=1):t=0}var l=0<t?1:-1;g!==l&&(w.scrollmom&&w.scrollmom.stop(),w.newscrolly=w.getScrollTop(),g=l),w.lastdeltay-=t}(t||e)&&w.synched("relativexy",function(){var e=w.lastdeltay+w.newscrolly;w.lastdeltay=0;var t=w.lastdeltax+w.newscrollx;w.lastdeltax=0,w.rail.drag||w.doScrollPos(t,e)})}function i(e,t,o){var r,i;return!(o||!T)||(0===e.deltaMode?(r=-e.deltaX*(x.mousescrollstep/54)|0,i=-e.deltaY*(x.mousescrollstep/54)|0):1===e.deltaMode&&(r=-e.deltaX*x.mousescrollstep*50/80|0,i=-e.deltaY*x.mousescrollstep*50/80|0),t&&x.oneaxismousemode&&0===r&&i&&(r=i,i=0,o&&(r<0?w.getScrollLeft()>=w.page.maxw:w.getScrollLeft()<=0)&&(i=r,r=0)),w.isrtlmode&&(r=-r),l(r,i,o,!0)?void(o&&(T=!0)):(T=!1,e.stopImmediatePropagation(),e.preventDefault()))}var w=this;this.version="3.7.6",this.name="nicescroll",this.me=t;var y=P("body"),x=this.opt={doc:y,win:!1};if(P.extend(x,_),x.snapbackspeed=80,e)for(var r in x)void 0!==e[r]&&(x[r]=e[r]);if(x.disablemutationobserver&&(A=!1),this.doc=x.doc,this.iddoc=this.doc&&this.doc[0]&&this.doc[0].id||"",this.ispage=/^BODY|HTML/.test(x.win?x.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=!1!==x.win,this.win=x.win||(this.ispage?I:this.doc),this.docscroll=this.ispage&&!this.haswrapper?I:this.win,this.body=y,this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=x.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,"auto"==x.rtlmode){var a=this.win[0]==R?this.body:this.win,c=a.css("writing-mode")||a.css("-webkit-writing-mode")||a.css("-ms-writing-mode")||a.css("-moz-writing-mode");"horizontal-tb"==c||"lr-tb"==c||""===c?(this.isrtlmode="rtl"==a.css("direction"),this.isvertical=!1):(this.isrtlmode="vertical-rl"==c||"tb"==c||"tb-rl"==c||"rl-tb"==c,this.isvertical="vertical-rl"==c||"tb"==c||"tb-rl"==c)}else this.isrtlmode=!0===x.rtlmode,this.isvertical=!1;if(this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1,(this.observerbody=!1)!==x.scrollbarid)this.id=x.scrollbarid;else for(;this.id="ascrail"+M++,B.getElementById(this.id););this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.railslocked=!1,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=x.overflowx,this.overflowy=x.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=function(){if(D)return D;var e=B.createElement("DIV"),n=e.style,t=navigator.userAgent,o=navigator.platform,s={};return s.haspointerlock="pointerLockElement"in B||"webkitPointerLockElement"in B||"mozPointerLockElement"in B,s.isopera="opera"in R,s.isopera12=s.isopera&&"getUserMedia"in navigator,s.isoperamini="[object OperaMini]"===Object.prototype.toString.call(R.operamini),s.isie="all"in B&&"attachEvent"in e&&!s.isopera,s.isieold=s.isie&&!("msInterpolationMode"in n),s.isie7=s.isie&&!s.isieold&&(!("documentMode"in B)||7===B.documentMode),s.isie8=s.isie&&"documentMode"in B&&8===B.documentMode,s.isie9=s.isie&&"performance"in R&&9===B.documentMode,s.isie10=s.isie&&"performance"in R&&10===B.documentMode,s.isie11="msRequestFullscreen"in e&&11<=B.documentMode,s.ismsedge="msCredentials"in R,s.ismozilla="MozAppearance"in n,s.iswebkit=!s.ismsedge&&"WebkitAppearance"in n,s.ischrome=s.iswebkit&&"chrome"in R,s.ischrome38=s.ischrome&&"touchAction"in n,s.ischrome22=!s.ischrome38&&s.ischrome&&s.haspointerlock,s.ischrome26=!s.ischrome38&&s.ischrome&&"transition"in n,s.cantouch="ontouchstart"in B.documentElement||"ontouchstart"in R,s.hasw3ctouch=!!R.PointerEvent&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints),s.hasmstouch=!s.hasw3ctouch&&(R.MSPointerEvent||!1),s.ismac=/^mac$/i.test(o),s.isios=s.cantouch&&/iphone|ipad|ipod/i.test(o),s.isios4=s.isios&&!("seal"in Object),s.isios7=s.isios&&"webkitHidden"in B,s.isios8=s.isios&&"hidden"in B,s.isios10=s.isios&&R.Proxy,s.isandroid=/android/i.test(t),s.haseventlistener="addEventListener"in e,s.trstyle=!1,s.hastransform=!1,s.hastranslate3d=!1,s.transitionstyle=!1,s.hastransition=!1,s.transitionend=!1,s.trstyle="transform",s.hastransform="transform"in n||function(){for(var e=["msTransform","webkitTransform","MozTransform","OTransform"],t=0,o=e.length;t<o;t++)if(void 0!==n[e[t]]){s.trstyle=e[t];break}s.hastransform=!!s.trstyle}(),s.hastransform&&(n[s.trstyle]="translate3d(1px,2px,3px)",s.hastranslate3d=/translate3d/.test(n[s.trstyle])),s.transitionstyle="transition",s.prefixstyle="",s.transitionend="transitionend",s.hastransition="transition"in n||function(){s.transitionend=!1;for(var e=["webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"],t=["-webkit-","-ms-","-moz-","-o-","-o","-khtml-"],o=["webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"],r=0,i=e.length;r<i;r++)if(e[r]in n){s.transitionstyle=e[r],s.prefixstyle=t[r],s.transitionend=o[r];break}s.ischrome26&&(s.prefixstyle=t[1]),s.hastransition=s.transitionstyle}(),s.cursorgrabvalue=function(){var e=["grab","-webkit-grab","-moz-grab"];(s.ischrome&&!s.ischrome38||s.isie)&&(e=[]);for(var t=0,o=e.length;t<o;t++){var r=e[t];if(n.cursor=r,n.cursor==r)return r}return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"}(),s.hasmousecapture="setCapture"in e,s.hasMutationObserver=!1!==A,e=null,D=s}();var S=P.extend({},this.detected);this.canhwscroll=S.hastransform&&x.hwacceleration,this.ishwscroll=this.canhwscroll&&w.haswrapper,this.isrtlmode?this.isvertical?this.hasreversehr=!(S.iswebkit||S.isie||S.isie11):this.hasreversehr=!(S.iswebkit||S.isie&&!S.isie10&&!S.isie11):this.hasreversehr=!1,this.istouchcapable=!1,(S.cantouch||!S.hasw3ctouch&&!S.hasmstouch)&&(!S.cantouch||S.isios||S.isandroid||!S.iswebkit&&!S.ismozilla)||(this.istouchcapable=!0),x.enablemouselockapi||(S.hasmousecapture=!1,S.haspointerlock=!1),this.debounced=function(e,t,o){w&&(w.delaylist[e]||(w.delaylist[e]={h:Y(function(){w.delaylist[e].fn.call(w),w.delaylist[e]=!1},o)},t.call(w)),w.delaylist[e].fn=t)},this.synched=function(e,t){w.synclist[e]?w.synclist[e]=t:(w.synclist[e]=t,Y(function(){w&&(w.synclist[e]&&w.synclist[e].call(w),w.synclist[e]=null)}))},this.unsynched=function(e){w.synclist[e]&&(w.synclist[e]=!1)},this.css=function(e,t){for(var o in t)w.saved.css.push([e,o,e.css(o)]),e.css(o,t[o])},this.scrollTop=function(e){return void 0===e?w.getScrollTop():w.setScrollTop(e)},this.scrollLeft=function(e){return void 0===e?w.getScrollLeft():w.setScrollLeft(e)};var u=function(e,t,o,r,i,n,s){this.st=e,this.ed=t,this.spd=o,this.p1=r||0,this.p2=i||1,this.p3=n||0,this.p4=s||1,this.ts=X(),this.df=t-e};if(u.prototype={B2:function(e){return 3*(1-e)*(1-e)*e},B3:function(e){return 3*(1-e)*e*e},B4:function(e){return e*e*e},getPos:function(){return(X()-this.ts)/this.spd},getNow:function(){var e=(X()-this.ts)/this.spd,t=this.B2(e)+this.B3(e)+this.B4(e);return 1<=e?this.ed:this.st+this.df*t|0},update:function(e,t){return this.st=this.getNow(),this.ed=e,this.spd=t,this.ts=X(),this.df=this.ed-this.st,this}},this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},S.hastranslate3d&&S.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(e){if(!e){var t=o();if(t)return 16==t.length?-t[13]:-t[5];if(w.timerscroll&&w.timerscroll.bz)return w.timerscroll.bz.getNow()}return w.doc.translate.y},this.getScrollLeft=function(e){if(!e){var t=o();if(t)return 16==t.length?-t[12]:-t[4];if(w.timerscroll&&w.timerscroll.bh)return w.timerscroll.bh.getNow()}return w.doc.translate.x},this.notifyScrollEvent=function(e){var t=B.createEvent("UIEvents");t.initUIEvent("scroll",!1,!1,R,1),t.niceevent=!0,e.dispatchEvent(t)};var d=this.isrtlmode?1:-1;S.hastranslate3d&&x.enabletranslate3d?(this.setScrollTop=function(e,t){w.doc.translate.y=e,w.doc.translate.ty=-1*e+"px",w.doc.css(S.trstyle,"translate3d("+w.doc.translate.tx+","+w.doc.translate.ty+",0)"),t||w.notifyScrollEvent(w.win[0])},this.setScrollLeft=function(e,t){w.doc.translate.x=e,w.doc.translate.tx=e*d+"px",w.doc.css(S.trstyle,"translate3d("+w.doc.translate.tx+","+w.doc.translate.ty+",0)"),t||w.notifyScrollEvent(w.win[0])}):(this.setScrollTop=function(e,t){w.doc.translate.y=e,w.doc.translate.ty=-1*e+"px",w.doc.css(S.trstyle,"translate("+w.doc.translate.tx+","+w.doc.translate.ty+")"),t||w.notifyScrollEvent(w.win[0])},this.setScrollLeft=function(e,t){w.doc.translate.x=e,w.doc.translate.tx=e*d+"px",w.doc.css(S.trstyle,"translate("+w.doc.translate.tx+","+w.doc.translate.ty+")"),t||w.notifyScrollEvent(w.win[0])})}else this.getScrollTop=function(){return w.docscroll.scrollTop()},this.setScrollTop=function(e){w.docscroll.scrollTop(e)},this.getScrollLeft=function(){return w.hasreversehr?w.detected.ismozilla?w.page.maxw-Math.abs(w.docscroll.scrollLeft()):w.page.maxw-w.docscroll.scrollLeft():w.docscroll.scrollLeft()},this.setScrollLeft=function(e){return setTimeout(function(){if(w)return w.hasreversehr&&(e=w.detected.ismozilla?-(w.page.maxw-e):w.page.maxw-e),w.docscroll.scrollLeft(e)},1)};this.getTarget=function(e){return!!e&&(e.target?e.target:!!e.srcElement&&e.srcElement)},this.hasParent=function(e,t){if(!e)return!1;for(var o=e.target||e.srcElement||e||!1;o&&o.id!=t;)o=o.parentNode||!1;return!1!==o};var h={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:R.pageYOffset||B.documentElement.scrollTop,left:R.pageXOffset||B.documentElement.scrollLeft}},this.getOffset=function(){if(w.isfixed){var e=w.win.offset(),t=w.getDocumentScrollOffset();return e.top-=t.top,e.left-=t.left,e}var o=w.win.offset();if(!w.viewport)return o;var r=w.viewport.offset();return{top:o.top-r.top,left:o.left-r.left}},this.updateScrollBar=function(e){var t,o;if(w.ishwscroll)w.rail.css({height:w.win.innerHeight()-(x.railpadding.top+x.railpadding.bottom)}),w.railh&&w.railh.css({width:w.win.innerWidth()-(x.railpadding.left+x.railpadding.right)});else{var r=w.getOffset();if((t={top:r.top,left:r.left-(x.railpadding.left+x.railpadding.right)}).top+=s(w.win,"border-top-width",!0),t.left+=w.rail.align?w.win.outerWidth()-s(w.win,"border-right-width")-w.rail.width:s(w.win,"border-left-width"),(o=x.railoffset)&&(o.top&&(t.top+=o.top),o.left&&(t.left+=o.left)),w.railslocked||w.rail.css({top:t.top,left:t.left,height:(e?e.h:w.win.innerHeight())-(x.railpadding.top+x.railpadding.bottom)}),w.zoom&&w.zoom.css({top:t.top+1,left:1==w.rail.align?t.left-20:t.left+w.rail.width+4}),w.railh&&!w.railslocked){t={top:r.top,left:r.left},(o=x.railhoffset)&&(o.top&&(t.top+=o.top),o.left&&(t.left+=o.left));var i=w.railh.align?t.top+s(w.win,"border-top-width",!0)+w.win.innerHeight()-w.railh.height:t.top+s(w.win,"border-top-width",!0),n=t.left+s(w.win,"border-left-width");w.railh.css({top:i-(x.railpadding.top+x.railpadding.bottom),left:n,width:w.railh.width})}}},this.doRailClick=function(e,t,o){var r,i,n,s;w.railslocked||(w.cancelEvent(e),"pageY"in e||(e.pageX=e.clientX+B.documentElement.scrollLeft,e.pageY=e.clientY+B.documentElement.scrollTop),t?(r=o?w.doScrollLeft:w.doScrollTop,n=o?(e.pageX-w.railh.offset().left-w.cursorwidth/2)*w.scrollratio.x:(e.pageY-w.rail.offset().top-w.cursorheight/2)*w.scrollratio.y,w.unsynched("relativexy"),r(0|n)):(r=o?w.doScrollLeftBy:w.doScrollBy,n=o?w.scroll.x:w.scroll.y,s=o?e.pageX-w.railh.offset().left:e.pageY-w.rail.offset().top,i=o?w.view.w:w.view.h,r(s<=n?i:-i)))},w.newscrolly=w.newscrollx=0,w.hasanimationframe="requestAnimationFrame"in R,w.hascancelanimationframe="cancelAnimationFrame"in R,w.hasborderbox=!1,this.init=function(){if(w.saved.css=[],S.isoperamini)return!0;if(S.isandroid&&!("hidden"in B))return!0;x.emulatetouch=x.emulatetouch||x.touchbehavior,w.hasborderbox=R.getComputedStyle&&"border-box"===R.getComputedStyle(B.body)["box-sizing"];var o={"overflow-y":"hidden"};if((S.isie11||S.isie10)&&(o["-ms-overflow-style"]="none"),w.ishwscroll&&(this.doc.css(S.transitionstyle,S.prefixstyle+"transform 0ms ease-out"),S.transitionend&&w.bind(w.doc,S.transitionend,w.onScrollTransitionEnd,!1)),w.zindex="auto",w.ispage||"auto"!=x.zindex?w.zindex=x.zindex:w.zindex=function(){var e=w.win;if("zIndex"in e)return e.zIndex();for(;0<e.length;){if(9==e[0].nodeType)return!1;var t=e.css("zIndex");if(!isNaN(t)&&0!==t)return parseInt(t);e=e.parent()}return!1}()||"auto",!w.ispage&&"auto"!=w.zindex&&w.zindex>N&&(N=w.zindex),w.isie&&0===w.zindex&&"auto"==x.zindex&&(w.zindex="auto"),!w.ispage||!S.isieold){var e=w.docscroll;w.ispage&&(e=w.haswrapper?w.win:w.doc),w.css(e,o),w.ispage&&(S.isie11||S.isie)&&w.css(P("html"),o),!S.isios||w.ispage||w.haswrapper||w.css(y,{"-webkit-overflow-scrolling":"touch"});var t=P(B.createElement("div"));t.css({position:"relative",top:0,float:"right",width:x.cursorwidth,height:0,"background-color":x.cursorcolor,border:x.cursorborder,"background-clip":"padding-box","-webkit-border-radius":x.cursorborderradius,"-moz-border-radius":x.cursorborderradius,"border-radius":x.cursorborderradius}),t.addClass("nicescroll-cursors"),w.cursor=t;var r=P(B.createElement("div"));r.attr("id",w.id),r.addClass("nicescroll-rails nicescroll-rails-vr");var i,n,s=["left","right","top","bottom"];for(var l in s)n=s[l],(i=x.railpadding[n]||0)&&r.css("padding-"+n,i+"px");r.append(t),r.width=Math.max(parseFloat(x.cursorwidth),t.outerWidth()),r.css({width:r.width+"px",zIndex:w.zindex,background:x.background,cursor:"default"}),r.visibility=!0,r.scrollable=!0,r.align="left"==x.railalign?0:1,w.rail=r;var a,c=w.rail.drag=!1;if(!x.boxzoom||w.ispage||S.isieold||(c=B.createElement("div"),w.bind(c,"click",w.doZoom),w.bind(c,"mouseenter",function(){w.zoom.css("opacity",x.cursoropacitymax)}),w.bind(c,"mouseleave",function(){w.zoom.css("opacity",x.cursoropacitymin)}),w.zoom=P(c),w.zoom.css({cursor:"pointer",zIndex:w.zindex,backgroundImage:"url("+x.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0 0"}),x.dblclickzoom&&w.bind(w.win,"dblclick",w.doZoom),S.cantouch&&x.gesturezoom&&(w.ongesturezoom=function(e){return 1.5<e.scale&&w.doZoomIn(e),e.scale<.8&&w.doZoomOut(e),w.cancelEvent(e)},w.bind(w.win,"gestureend",w.ongesturezoom))),w.railh=!1,x.horizrailenabled&&(w.css(e,{overflowX:"hidden"}),(t=P(B.createElement("div"))).css({position:"absolute",top:0,height:x.cursorwidth,width:0,backgroundColor:x.cursorcolor,border:x.cursorborder,backgroundClip:"padding-box","-webkit-border-radius":x.cursorborderradius,"-moz-border-radius":x.cursorborderradius,"border-radius":x.cursorborderradius}),S.isieold&&t.css("overflow","hidden"),t.addClass("nicescroll-cursors"),w.cursorh=t,(a=P(B.createElement("div"))).attr("id",w.id+"-hr"),a.addClass("nicescroll-rails nicescroll-rails-hr"),a.height=Math.max(parseFloat(x.cursorwidth),t.outerHeight()),a.css({height:a.height+"px",zIndex:w.zindex,background:x.background}),a.append(t),a.visibility=!0,a.scrollable=!0,a.align="top"==x.railvalign?0:1,w.railh=a,w.railh.drag=!1),w.ispage)r.css({position:"fixed",top:0,height:"100%"}),r.css(r.align?{right:0}:{left:0}),w.body.append(r),w.railh&&(a.css({position:"fixed",left:0,width:"100%"}),a.css(a.align?{bottom:0}:{top:0}),w.body.append(a));else{if(w.ishwscroll){"static"==w.win.css("position")&&w.css(w.win,{position:"relative"});var u="HTML"==w.win[0].nodeName?w.body:w.win;P(u).scrollTop(0).scrollLeft(0),w.zoom&&(w.zoom.css({position:"absolute",top:1,right:0,"margin-right":r.width+4}),u.append(w.zoom)),r.css({position:"absolute",top:0}),r.css(r.align?{right:0}:{left:0}),u.append(r),a&&(a.css({position:"absolute",left:0,bottom:0}),a.css(a.align?{bottom:0}:{top:0}),u.append(a))}else{w.isfixed="fixed"==w.win.css("position");var d=w.isfixed?"fixed":"absolute";w.isfixed||(w.viewport=w.getViewport(w.win[0])),w.viewport&&(w.body=w.viewport,/fixed|absolute/.test(w.viewport.css("position"))||w.css(w.viewport,{position:"relative"})),r.css({position:d}),w.zoom&&w.zoom.css({position:d}),w.updateScrollBar(),w.body.append(r),w.zoom&&w.body.append(w.zoom),w.railh&&(a.css({position:d}),w.body.append(a))}S.isios&&w.css(w.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),x.disableoutline&&(S.isie&&w.win.attr("hideFocus","true"),S.iswebkit&&w.win.css("outline","none"))}if(!1===x.autohidemode?(w.autohidedom=!1,w.rail.css({opacity:x.cursoropacitymax}),w.railh&&w.railh.css({opacity:x.cursoropacitymax})):!0===x.autohidemode||"leave"===x.autohidemode?(w.autohidedom=P().add(w.rail),S.isie8&&(w.autohidedom=w.autohidedom.add(w.cursor)),w.railh&&(w.autohidedom=w.autohidedom.add(w.railh)),w.railh&&S.isie8&&(w.autohidedom=w.autohidedom.add(w.cursorh))):"scroll"==x.autohidemode?(w.autohidedom=P().add(w.rail),w.railh&&(w.autohidedom=w.autohidedom.add(w.railh))):"cursor"==x.autohidemode?(w.autohidedom=P().add(w.cursor),w.railh&&(w.autohidedom=w.autohidedom.add(w.cursorh))):"hidden"==x.autohidemode&&(w.autohidedom=!1,w.hide(),w.railslocked=!1),S.cantouch||w.istouchcapable||x.emulatetouch||S.hasmstouch){w.scrollmom=new q(w),w.ontouchstart=function(e){if(w.locked)return!1;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;if(w.hasmoving=!1,w.scrollmom.timer&&(w.triggerScrollEnd(),w.scrollmom.stop()),!w.railslocked){var t=w.getTarget(e);if(t&&/INPUT/i.test(t.nodeName)&&/range/i.test(t.type))return w.stopPropagation(e);var o="mousedown"===e.type;if(!("clientX"in e)&&"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),w.forcescreen){var r=e;(e={original:e.original?e.original:e}).clientX=r.screenX,e.clientY=r.screenY}if(w.rail.drag={x:e.clientX,y:e.clientY,sx:w.scroll.x,sy:w.scroll.y,st:w.getScrollTop(),sl:w.getScrollLeft(),pt:2,dl:!1,tg:t},w.ispage||!x.directionlockdeadzone)w.rail.drag.dl="f";else{var i=I.width(),n=I.height(),s=w.getContentSize(),l=s.h-n,a=s.w-i;w.rail.scrollable&&!w.railh.scrollable?w.rail.drag.ck=0<l&&"v":!w.rail.scrollable&&w.railh.scrollable?w.rail.drag.ck=0<a&&"h":w.rail.drag.ck=!1}if(x.emulatetouch&&w.isiframe&&S.isie){var c=w.win.position();w.rail.drag.x+=c.left,w.rail.drag.y+=c.top}if(w.hasmoving=!1,w.lastmouseup=!1,w.scrollmom.reset(e.clientX,e.clientY),t&&o){if(!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(t.nodeName))return S.hasmousecapture&&t.setCapture(),x.emulatetouch?(t.onclick&&!t._onclick&&(t._onclick=t.onclick,t.onclick=function(e){if(w.hasmoving)return!1;t._onclick.call(this,e)}),w.cancelEvent(e)):w.stopPropagation(e);/SUBMIT|CANCEL|BUTTON/i.test(P(t).attr("type"))&&(w.preventclick={tg:t,click:!1})}}},w.ontouchend=function(e){if(!w.rail.drag)return!0;if(2==w.rail.drag.pt){if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;w.rail.drag=!1;var t="mouseup"===e.type;if(w.hasmoving&&(w.scrollmom.doMomentum(),w.lastmouseup=!0,w.hideCursor(),S.hasmousecapture&&B.releaseCapture(),t))return w.cancelEvent(e)}else if(1==w.rail.drag.pt)return w.onmouseup(e)};var m=x.emulatetouch&&w.isiframe&&!S.hasmousecapture,f=.3*x.directionlockdeadzone|0;w.ontouchmove=function(e,t){if(!w.rail.drag)return!0;if(e.targetTouches&&x.preventmultitouchscrolling&&1<e.targetTouches.length)return!0;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!0;if(2==w.rail.drag.pt){var o,r;if("changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),r=o=0,m&&!t){var i=w.win.position();r=-i.left,o=-i.top}var n=e.clientY+o,s=n-w.rail.drag.y,l=e.clientX+r,a=l-w.rail.drag.x,c=w.rail.drag.st-s;if(w.ishwscroll&&x.bouncescroll)c<0?c=Math.round(c/2):c>w.page.maxh&&(c=w.page.maxh+Math.round((c-w.page.maxh)/2));else if(c<0?n=c=0:c>w.page.maxh&&(c=w.page.maxh,n=0),0===n&&!w.hasmoving)return w.ispage||(w.rail.drag=!1),!0;var u=w.getScrollLeft();if(w.railh&&w.railh.scrollable&&(u=w.isrtlmode?a-w.rail.drag.sl:w.rail.drag.sl-a,w.ishwscroll&&x.bouncescroll?u<0?u=Math.round(u/2):u>w.page.maxw&&(u=w.page.maxw+Math.round((u-w.page.maxw)/2)):(u<0&&(l=u=0),u>w.page.maxw&&(u=w.page.maxw,l=0))),!w.hasmoving){if(w.rail.drag.y===e.clientY&&w.rail.drag.x===e.clientX)return w.cancelEvent(e);var d=Math.abs(s),h=Math.abs(a),p=x.directionlockdeadzone;if(w.rail.drag.ck?"v"==w.rail.drag.ck?p<h&&d<=f?w.rail.drag=!1:p<d&&(w.rail.drag.dl="v"):"h"==w.rail.drag.ck&&(p<d&&h<=f?w.rail.drag=!1:p<h&&(w.rail.drag.dl="h")):p<d&&p<h?w.rail.drag.dl="f":p<d?w.rail.drag.dl=f<h?"f":"v":p<h&&(w.rail.drag.dl=f<d?"f":"h"),!w.rail.drag.dl)return w.cancelEvent(e);w.triggerScrollStart(e.clientX,e.clientY,0,0,0),w.hasmoving=!0}return w.preventclick&&!w.preventclick.click&&(w.preventclick.click=w.preventclick.tg.onclick||!1,w.preventclick.tg.onclick=w.onpreventclick),w.rail.drag.dl&&("v"==w.rail.drag.dl?u=w.rail.drag.sl:"h"==w.rail.drag.dl&&(c=w.rail.drag.st)),w.synched("touchmove",function(){w.rail.drag&&2==w.rail.drag.pt&&(w.prepareTransition&&w.resetTransition(),w.rail.scrollable&&w.setScrollTop(c),w.scrollmom.update(l,n),w.railh&&w.railh.scrollable?(w.setScrollLeft(u),w.showCursor(c,u)):w.showCursor(c),S.isie10&&B.selection.clear())}),w.cancelEvent(e)}return 1==w.rail.drag.pt?w.onmousemove(e):void 0},w.ontouchstartCursor=function(e,t){if(!w.rail.drag||3==w.rail.drag.pt){if(w.locked)return w.cancelEvent(e);w.cancelScroll(),w.rail.drag={x:e.touches[0].clientX,y:e.touches[0].clientY,sx:w.scroll.x,sy:w.scroll.y,pt:3,hr:!!t};var o=w.getTarget(e);return!w.ispage&&S.hasmousecapture&&o.setCapture(),w.isiframe&&!S.hasmousecapture&&(w.saved.csspointerevents=w.doc.css("pointer-events"),w.css(w.doc,{"pointer-events":"none"})),w.cancelEvent(e)}},w.ontouchendCursor=function(e){if(w.rail.drag){if(S.hasmousecapture&&B.releaseCapture(),w.isiframe&&!S.hasmousecapture&&w.doc.css("pointer-events",w.saved.csspointerevents),3!=w.rail.drag.pt)return;return w.rail.drag=!1,w.cancelEvent(e)}},w.ontouchmoveCursor=function(e){if(w.rail.drag){if(3!=w.rail.drag.pt)return;if(w.cursorfreezed=!0,w.rail.drag.hr){w.scroll.x=w.rail.drag.sx+(e.touches[0].clientX-w.rail.drag.x),w.scroll.x<0&&(w.scroll.x=0);var t=w.scrollvaluemaxw;w.scroll.x>t&&(w.scroll.x=t)}else{w.scroll.y=w.rail.drag.sy+(e.touches[0].clientY-w.rail.drag.y),w.scroll.y<0&&(w.scroll.y=0);var o=w.scrollvaluemax;w.scroll.y>o&&(w.scroll.y=o)}return w.synched("touchmove",function(){w.rail.drag&&3==w.rail.drag.pt&&(w.showCursor(),w.rail.drag.hr?w.doScrollLeft(Math.round(w.scroll.x*w.scrollratio.x),x.cursordragspeed):w.doScrollTop(Math.round(w.scroll.y*w.scrollratio.y),x.cursordragspeed))}),w.cancelEvent(e)}}}if(w.onmousedown=function(e,t){if(!w.rail.drag||1==w.rail.drag.pt){if(w.railslocked)return w.cancelEvent(e);w.cancelScroll(),w.rail.drag={x:e.clientX,y:e.clientY,sx:w.scroll.x,sy:w.scroll.y,pt:1,hr:t||!1};var o=w.getTarget(e);return S.hasmousecapture&&o.setCapture(),w.isiframe&&!S.hasmousecapture&&(w.saved.csspointerevents=w.doc.css("pointer-events"),w.css(w.doc,{"pointer-events":"none"})),w.hasmoving=!1,w.cancelEvent(e)}},w.onmouseup=function(e){if(w.rail.drag)return 1!=w.rail.drag.pt||(S.hasmousecapture&&B.releaseCapture(),w.isiframe&&!S.hasmousecapture&&w.doc.css("pointer-events",w.saved.csspointerevents),w.rail.drag=!1,w.cursorfreezed=!1,w.hasmoving&&w.triggerScrollEnd(),w.cancelEvent(e))},w.onmousemove=function(e){if(w.rail.drag){if(1!==w.rail.drag.pt)return;if(S.ischrome&&0===e.which)return w.onmouseup(e);if(w.cursorfreezed=!0,w.hasmoving||w.triggerScrollStart(e.clientX,e.clientY,0,0,0),w.hasmoving=!0,w.rail.drag.hr){w.scroll.x=w.rail.drag.sx+(e.clientX-w.rail.drag.x),w.scroll.x<0&&(w.scroll.x=0);var t=w.scrollvaluemaxw;w.scroll.x>t&&(w.scroll.x=t)}else{w.scroll.y=w.rail.drag.sy+(e.clientY-w.rail.drag.y),w.scroll.y<0&&(w.scroll.y=0);var o=w.scrollvaluemax;w.scroll.y>o&&(w.scroll.y=o)}return w.synched("mousemove",function(){w.cursorfreezed&&(w.showCursor(),w.rail.drag.hr?w.scrollLeft(Math.round(w.scroll.x*w.scrollratio.x)):w.scrollTop(Math.round(w.scroll.y*w.scrollratio.y)))}),w.cancelEvent(e)}w.checkarea=0},S.cantouch||x.emulatetouch)w.onpreventclick=function(e){if(w.preventclick)return w.preventclick.tg.onclick=w.preventclick.click,w.preventclick=!1,w.cancelEvent(e)},w.onclick=!S.isios&&function(e){return!w.lastmouseup||(w.lastmouseup=!1,w.cancelEvent(e))},x.grabcursorenabled&&S.cursorgrabvalue&&(w.css(w.ispage?w.doc:w.win,{cursor:S.cursorgrabvalue}),w.css(w.rail,{cursor:S.cursorgrabvalue}));else{var h=function(e){if(w.selectiondrag){if(e){var t=w.win.outerHeight(),o=e.pageY-w.selectiondrag.top;0<o&&o<t&&(o=0),t<=o&&(o-=t),w.selectiondrag.df=o}if(0!==w.selectiondrag.df){var r=-2*w.selectiondrag.df/6|0;w.doScrollBy(r),w.debounced("doselectionscroll",function(){h()},50)}}};w.hasTextSelected="getSelection"in B?function(){return 0<B.getSelection().rangeCount}:"selection"in B?function(){return"None"!=B.selection.type}:function(){return!1},w.onselectionstart=function(e){w.ispage||(w.selectiondrag=w.win.offset())},w.onselectionend=function(e){w.selectiondrag=!1},w.onselectiondrag=function(e){w.selectiondrag&&w.hasTextSelected()&&w.debounced("selectionscroll",function(){h(e)},250)}}if(S.hasw3ctouch?(w.css(w.ispage?P("html"):w.win,{"touch-action":"none"}),w.css(w.rail,{"touch-action":"none"}),w.css(w.cursor,{"touch-action":"none"}),w.bind(w.win,"pointerdown",w.ontouchstart),w.bind(B,"pointerup",w.ontouchend),w.delegate(B,"pointermove",w.ontouchmove)):S.hasmstouch?(w.css(w.ispage?P("html"):w.win,{"-ms-touch-action":"none"}),w.css(w.rail,{"-ms-touch-action":"none"}),w.css(w.cursor,{"-ms-touch-action":"none"}),w.bind(w.win,"MSPointerDown",w.ontouchstart),w.bind(B,"MSPointerUp",w.ontouchend),w.delegate(B,"MSPointerMove",w.ontouchmove),w.bind(w.cursor,"MSGestureHold",function(e){e.preventDefault()}),w.bind(w.cursor,"contextmenu",function(e){e.preventDefault()})):S.cantouch&&(w.bind(w.win,"touchstart",w.ontouchstart,!1,!0),w.bind(B,"touchend",w.ontouchend,!1,!0),w.bind(B,"touchcancel",w.ontouchend,!1,!0),w.delegate(B,"touchmove",w.ontouchmove,!1,!0)),x.emulatetouch&&(w.bind(w.win,"mousedown",w.ontouchstart,!1,!0),w.bind(B,"mouseup",w.ontouchend,!1,!0),w.bind(B,"mousemove",w.ontouchmove,!1,!0)),(x.cursordragontouch||!S.cantouch&&!x.emulatetouch)&&(w.rail.css({cursor:"default"}),w.railh&&w.railh.css({cursor:"default"}),w.jqbind(w.rail,"mouseenter",function(){if(!w.ispage&&!w.win.is(":visible"))return!1;w.canshowonmouseevent&&w.showCursor(),w.rail.active=!0}),w.jqbind(w.rail,"mouseleave",function(){w.rail.active=!1,w.rail.drag||w.hideCursor()}),x.sensitiverail&&(w.bind(w.rail,"click",function(e){w.doRailClick(e,!1,!1)}),w.bind(w.rail,"dblclick",function(e){w.doRailClick(e,!0,!1)}),w.bind(w.cursor,"click",function(e){w.cancelEvent(e)}),w.bind(w.cursor,"dblclick",function(e){w.cancelEvent(e)})),w.railh&&(w.jqbind(w.railh,"mouseenter",function(){if(!w.ispage&&!w.win.is(":visible"))return!1;w.canshowonmouseevent&&w.showCursor(),w.rail.active=!0}),w.jqbind(w.railh,"mouseleave",function(){w.rail.active=!1,w.rail.drag||w.hideCursor()}),x.sensitiverail&&(w.bind(w.railh,"click",function(e){w.doRailClick(e,!1,!0)}),w.bind(w.railh,"dblclick",function(e){w.doRailClick(e,!0,!0)}),w.bind(w.cursorh,"click",function(e){w.cancelEvent(e)}),w.bind(w.cursorh,"dblclick",function(e){w.cancelEvent(e)})))),x.cursordragontouch&&(this.istouchcapable||S.cantouch)&&(w.bind(w.cursor,"touchstart",w.ontouchstartCursor),w.bind(w.cursor,"touchmove",w.ontouchmoveCursor),w.bind(w.cursor,"touchend",w.ontouchendCursor),w.cursorh&&w.bind(w.cursorh,"touchstart",function(e){w.ontouchstartCursor(e,!0)}),w.cursorh&&w.bind(w.cursorh,"touchmove",w.ontouchmoveCursor),w.cursorh&&w.bind(w.cursorh,"touchend",w.ontouchendCursor)),x.emulatetouch||S.isandroid||S.isios?(w.bind(S.hasmousecapture?w.win:B,"mouseup",w.ontouchend),w.onclick&&w.bind(B,"click",w.onclick),x.cursordragontouch?(w.bind(w.cursor,"mousedown",w.onmousedown),w.bind(w.cursor,"mouseup",w.onmouseup),w.cursorh&&w.bind(w.cursorh,"mousedown",function(e){w.onmousedown(e,!0)}),w.cursorh&&w.bind(w.cursorh,"mouseup",w.onmouseup)):(w.bind(w.rail,"mousedown",function(e){e.preventDefault()}),w.railh&&w.bind(w.railh,"mousedown",function(e){e.preventDefault()}))):(w.bind(S.hasmousecapture?w.win:B,"mouseup",w.onmouseup),w.bind(B,"mousemove",w.onmousemove),w.onclick&&w.bind(B,"click",w.onclick),w.bind(w.cursor,"mousedown",w.onmousedown),w.bind(w.cursor,"mouseup",w.onmouseup),w.railh&&(w.bind(w.cursorh,"mousedown",function(e){w.onmousedown(e,!0)}),w.bind(w.cursorh,"mouseup",w.onmouseup)),!w.ispage&&x.enablescrollonselection&&(w.bind(w.win[0],"mousedown",w.onselectionstart),w.bind(B,"mouseup",w.onselectionend),w.bind(w.cursor,"mouseup",w.onselectionend),w.cursorh&&w.bind(w.cursorh,"mouseup",w.onselectionend),w.bind(B,"mousemove",w.onselectiondrag)),w.zoom&&(w.jqbind(w.zoom,"mouseenter",function(){w.canshowonmouseevent&&w.showCursor(),w.rail.active=!0}),w.jqbind(w.zoom,"mouseleave",function(){w.rail.active=!1,w.rail.drag||w.hideCursor()}))),x.enablemousewheel&&(w.isiframe||w.mousewheel(S.isie&&w.ispage?B:w.win,w.onmousewheel),w.mousewheel(w.rail,w.onmousewheel),w.railh&&w.mousewheel(w.railh,w.onmousewheelhr)),w.ispage||S.cantouch||/HTML|^BODY/.test(w.win[0].nodeName)||(w.win.attr("tabindex")||w.win.attr({tabindex:++L}),w.bind(w.win,"focus",function(e){E=w.getTarget(e).id||w.getTarget(e)||!1,w.hasfocus=!0,w.canshowonmouseevent&&w.noticeCursor()}),w.bind(w.win,"blur",function(e){E=!1,w.hasfocus=!1}),w.bind(w.win,"mouseenter",function(e){C=w.getTarget(e).id||w.getTarget(e)||!1,w.hasmousefocus=!0,w.canshowonmouseevent&&w.noticeCursor()}),w.bind(w.win,"mouseleave",function(e){C=!1,w.hasmousefocus=!1,w.rail.drag||w.hideCursor()})),w.onkeypress=function(e){if(w.railslocked&&0===w.page.maxh)return!0;e=e||R.event;var t=w.getTarget(e);if(t&&/INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName)&&(!t.getAttribute("type")&&!t.type||!/submit|button|cancel/i.tp))return!0;if(P(t).attr("contenteditable"))return!0;if(w.hasfocus||w.hasmousefocus&&!E||w.ispage&&!E&&!C){var o=e.keyCode;if(w.railslocked&&27!=o)return w.cancelEvent(e);var r=e.ctrlKey||!1,i=e.shiftKey||!1,n=!1;switch(o){case 38:case 63233:w.doScrollBy(72),n=!0;break;case 40:case 63235:w.doScrollBy(-72),n=!0;break;case 37:case 63232:w.railh&&(r?w.doScrollLeft(0):w.doScrollLeftBy(72),n=!0);break;case 39:case 63234:w.railh&&(r?w.doScrollLeft(w.page.maxw):w.doScrollLeftBy(-72),n=!0);break;case 33:case 63276:w.doScrollBy(w.view.h),n=!0;break;case 34:case 63277:w.doScrollBy(-w.view.h),n=!0;break;case 36:case 63273:w.railh&&r?w.doScrollPos(0,0):w.doScrollTo(0),n=!0;break;case 35:case 63275:w.railh&&r?w.doScrollPos(w.page.maxw,w.page.maxh):w.doScrollTo(w.page.maxh),n=!0;break;case 32:x.spacebarenabled&&(i?w.doScrollBy(w.view.h):w.doScrollBy(-w.view.h),n=!0);break;case 27:w.zoomactive&&(w.doZoom(),n=!0)}if(n)return w.cancelEvent(e)}},x.enablekeyboard&&w.bind(B,S.isopera&&!S.isopera12?"keypress":"keydown",w.onkeypress),w.bind(B,"keydown",function(e){e.ctrlKey&&(w.wheelprevented=!0)}),w.bind(B,"keyup",function(e){e.ctrlKey||(w.wheelprevented=!1)}),w.bind(R,"blur",function(e){w.wheelprevented=!1}),w.bind(R,"resize",w.onscreenresize),w.bind(R,"orientationchange",w.onscreenresize),w.bind(R,"load",w.lazyResize),S.ischrome&&!w.ispage&&!w.haswrapper){var p=w.win.attr("style"),g=parseFloat(w.win.css("width"))+1;w.win.css("width",g),w.synched("chromefix",function(){w.win.attr("style",p)})}if(w.onAttributeChange=function(e){w.lazyResize(w.isieold?250:30)},x.enableobserver&&(w.isie11||!1===A||(w.observerbody=new A(function(e){if(e.forEach(function(e){if("attributes"==e.type)return y.hasClass("modal-open")&&y.hasClass("modal-dialog")&&!P.contains(P(".modal-dialog")[0],w.doc[0])?w.hide():w.show()}),w.me.clientWidth!=w.page.width||w.me.clientHeight!=w.page.height)return w.lazyResize(30)}),w.observerbody.observe(B.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]})),!w.ispage&&!w.haswrapper)){var v=w.win[0];!1!==A?(w.observer=new A(function(e){e.forEach(w.onAttributeChange)}),w.observer.observe(v,{childList:!0,characterData:!1,attributes:!0,subtree:!1}),w.observerremover=new A(function(e){e.forEach(function(e){if(0<e.removedNodes.length)for(var t in e.removedNodes)if(w&&e.removedNodes[t]===v)return w.remove()})}),w.observerremover.observe(v.parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(w.bind(v,S.isie&&!S.isie9?"propertychange":"DOMAttrModified",w.onAttributeChange),S.isie9&&v.attachEvent("onpropertychange",w.onAttributeChange),w.bind(v,"DOMNodeRemoved",function(e){e.target===v&&w.remove()}))}!w.ispage&&x.boxzoom&&w.bind(R,"resize",w.resizeZoom),w.istextarea&&(w.bind(w.win,"keydown",w.lazyResize),w.bind(w.win,"mouseup",w.lazyResize)),w.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var b=function(){var t;w.iframexd=!1;try{(t="contentDocument"in this?this.contentDocument:this.contentWindow._doc).domain}catch(e){t=!(w.iframexd=!0)}if(w.iframexd)return"console"in R&&console.log("NiceScroll error: policy restriced iframe"),!0;if(w.forcescreen=!0,w.isiframe&&(w.iframe={doc:P(t),html:w.doc.contents().find("html")[0],body:w.doc.contents().find("body")[0]},w.getContentSize=function(){return{w:Math.max(w.iframe.html.scrollWidth,w.iframe.body.scrollWidth),h:Math.max(w.iframe.html.scrollHeight,w.iframe.body.scrollHeight)}},w.docscroll=P(w.iframe.body)),!S.isios&&x.iframeautoresize&&!w.isiframe){w.win.scrollTop(0),w.doc.height("");var e=Math.max(t.getElementsByTagName("html")[0].scrollHeight,t.body.scrollHeight);w.doc.height(e)}w.lazyResize(30),w.css(P(w.iframe.body),o),S.isios&&w.haswrapper&&w.css(P(t.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?w.bind(this.contentWindow,"scroll",w.onscroll):w.bind(t,"scroll",w.onscroll),x.enablemousewheel&&w.mousewheel(t,w.onmousewheel),x.enablekeyboard&&w.bind(t,S.isopera?"keypress":"keydown",w.onkeypress),S.cantouch?(w.bind(t,"touchstart",w.ontouchstart),w.bind(t,"touchmove",w.ontouchmove)):x.emulatetouch&&(w.bind(t,"mousedown",w.ontouchstart),w.bind(t,"mousemove",function(e){return w.ontouchmove(e,!0)}),x.grabcursorenabled&&S.cursorgrabvalue&&w.css(P(t.body),{cursor:S.cursorgrabvalue})),w.bind(t,"mouseup",w.ontouchend),w.zoom&&(x.dblclickzoom&&w.bind(t,"dblclick",w.doZoom),w.ongesturezoom&&w.bind(t,"gestureend",w.ongesturezoom))};this.doc[0].readyState&&"complete"===this.doc[0].readyState&&setTimeout(function(){b.call(w.doc[0],!1)},500),w.bind(this.doc,"load",b)}},this.showCursor=function(e,t){if(w.cursortimeout&&(clearTimeout(w.cursortimeout),w.cursortimeout=0),w.rail){if(w.autohidedom&&(w.autohidedom.stop().css({opacity:x.cursoropacitymax}),w.cursoractive=!0),w.rail.drag&&1==w.rail.drag.pt||(void 0!==e&&!1!==e&&(w.scroll.y=e/w.scrollratio.y|0),void 0!==t&&(w.scroll.x=t/w.scrollratio.x|0)),w.cursor.css({height:w.cursorheight,top:w.scroll.y}),w.cursorh){var o=w.hasreversehr?w.scrollvaluemaxw-w.scroll.x:w.scroll.x;w.cursorh.css({width:w.cursorwidth,left:!w.rail.align&&w.rail.visibility?o+w.rail.width:o}),w.cursoractive=!0}w.zoom&&w.zoom.stop().css({opacity:x.cursoropacitymax})}},this.hideCursor=function(e){w.cursortimeout||w.rail&&w.autohidedom&&(w.hasmousefocus&&"leave"===x.autohidemode||(w.cursortimeout=setTimeout(function(){w.rail.active&&w.showonmouseevent||(w.autohidedom.stop().animate({opacity:x.cursoropacitymin}),w.zoom&&w.zoom.stop().animate({opacity:x.cursoropacitymin}),w.cursoractive=!1),w.cursortimeout=0},e||x.hidecursordelay)))},this.noticeCursor=function(e,t,o){w.showCursor(t,o),w.rail.active||w.hideCursor(e)},this.getContentSize=w.ispage?function(){return{w:Math.max(B.body.scrollWidth,B.documentElement.scrollWidth),h:Math.max(B.body.scrollHeight,B.documentElement.scrollHeight)}}:w.haswrapper?function(){return{w:w.doc[0].offsetWidth,h:w.doc[0].offsetHeight}}:function(){return{w:w.docscroll[0].scrollWidth,h:w.docscroll[0].scrollHeight}},this.onResize=function(e,t){if(!w||!w.win)return!1;var o=w.page.maxh,r=w.page.maxw,i=w.view.h,n=w.view.w;if(w.view={w:w.ispage?w.win.width():w.win[0].clientWidth,h:w.ispage?w.win.height():w.win[0].clientHeight},w.page=t||w.getContentSize(),w.page.maxh=Math.max(0,w.page.h-w.view.h),w.page.maxw=Math.max(0,w.page.w-w.view.w),w.page.maxh==o&&w.page.maxw==r&&w.view.w==n&&w.view.h==i){if(w.ispage)return w;var s=w.win.offset();if(w.lastposition){var l=w.lastposition;if(l.top==s.top&&l.left==s.left)return w}w.lastposition=s}return 0===w.page.maxh?(w.hideRail(),w.scrollvaluemax=0,w.scroll.y=0,w.scrollratio.y=0,w.cursorheight=0,w.setScrollTop(0),w.rail&&(w.rail.scrollable=!1)):(w.page.maxh-=x.railpadding.top+x.railpadding.bottom,w.rail.scrollable=!0),0===w.page.maxw?(w.hideRailHr(),w.scrollvaluemaxw=0,w.scroll.x=0,w.scrollratio.x=0,w.cursorwidth=0,w.setScrollLeft(0),w.railh&&(w.railh.scrollable=!1)):(w.page.maxw-=x.railpadding.left+x.railpadding.right,w.railh&&(w.railh.scrollable=x.horizrailenabled)),w.railslocked=w.locked||0===w.page.maxh&&0===w.page.maxw,w.railslocked?(w.ispage||w.updateScrollBar(w.view),!1):(w.hidden||(w.rail.visibility||w.showRail(),w.railh&&!w.railh.visibility&&w.showRailHr()),w.istextarea&&w.win.css("resize")&&"none"!=w.win.css("resize")&&(w.view.h-=20),w.cursorheight=Math.min(w.view.h,Math.round(w.view.h*(w.view.h/w.page.h))),w.cursorheight=x.cursorfixedheight?x.cursorfixedheight:Math.max(x.cursorminheight,w.cursorheight),w.cursorwidth=Math.min(w.view.w,Math.round(w.view.w*(w.view.w/w.page.w))),w.cursorwidth=x.cursorfixedheight?x.cursorfixedheight:Math.max(x.cursorminheight,w.cursorwidth),w.scrollvaluemax=w.view.h-w.cursorheight-(x.railpadding.top+x.railpadding.bottom),w.hasborderbox||(w.scrollvaluemax-=w.cursor[0].offsetHeight-w.cursor[0].clientHeight),w.railh&&(w.railh.width=0<w.page.maxh?w.view.w-w.rail.width:w.view.w,w.scrollvaluemaxw=w.railh.width-w.cursorwidth-(x.railpadding.left+x.railpadding.right)),w.ispage||w.updateScrollBar(w.view),w.scrollratio={x:w.page.maxw/w.scrollvaluemaxw,y:w.page.maxh/w.scrollvaluemax},w.getScrollTop()>w.page.maxh?w.doScrollTop(w.page.maxh):(w.scroll.y=w.getScrollTop()/w.scrollratio.y|0,w.scroll.x=w.getScrollLeft()/w.scrollratio.x|0,w.cursoractive&&w.noticeCursor()),w.scroll.y&&0===w.getScrollTop()&&w.doScrollTo(w.scroll.y*w.scrollratio.y|0),w)},this.resize=w.onResize;var p=0;this.onscreenresize=function(e){clearTimeout(p);var t=!w.ispage&&!w.haswrapper;t&&w.hideRails(),p=setTimeout(function(){w&&(t&&w.showRails(),w.resize()),p=0},120)},this.lazyResize=function(e){return clearTimeout(p),e=isNaN(e)?240:e,p=setTimeout(function(){w&&w.resize(),p=0},e),w},this.jqbind=function(e,t,o){w.events.push({e:e,n:t,f:o,q:!0}),P(e).on(t,o)};var m=!(this.mousewheel=function(e,t,o){var r="jquery"in e?e[0]:e;if("onwheel"in B.createElement("div"))w._bind(r,"wheel",t,o||!1);else{var i=void 0!==B.onmousewheel?"mousewheel":"DOMMouseScroll";n(r,i,t,o||!1),"DOMMouseScroll"==i&&n(r,"MozMousePixelScroll",t,o||!1)}});if(S.haseventlistener){try{var f=Object.defineProperty({},"passive",{get:function(){m=!0}});R.addEventListener("test",null,f)}catch(e){}this.stopPropagation=function(e){return!!e&&((e=e.original?e.original:e).stopPropagation(),!1)},this.cancelEvent=function(e){return e.cancelable&&e.preventDefault(),e.stopImmediatePropagation(),e.preventManipulation&&e.preventManipulation(),!1}}else Event.prototype.preventDefault=function(){this.returnValue=!1},Event.prototype.stopPropagation=function(){this.cancelBubble=!0},R.constructor.prototype.addEventListener=B.constructor.prototype.addEventListener=Element.prototype.addEventListener=function(e,t,o){this.attachEvent("on"+e,t)},R.constructor.prototype.removeEventListener=B.constructor.prototype.removeEventListener=Element.prototype.removeEventListener=function(e,t,o){this.detachEvent("on"+e,t)},this.cancelEvent=function(e){return(e=e||R.event)&&(e.cancelBubble=!0,e.cancel=!0,e.returnValue=!1),!1},this.stopPropagation=function(e){return(e=e||R.event)&&(e.cancelBubble=!0),!1};this.delegate=function(e,t,o,r,i){var n=H[t]||!1;n||(n={a:[],l:[],f:function(e){for(var t=n.l,o=!1,r=t.length-1;0<=r;r--)if(!1===(o=t[r].call(e.target,e)))return!1;return o}},w.bind(e,t,n.f,r,i),H[t]=n),w.ispage?(n.a=[w.id].concat(n.a),n.l=[o].concat(n.l)):(n.a.push(w.id),n.l.push(o))},this.undelegate=function(e,t,o,r,i){var n=H[t]||!1;if(n&&n.l)for(var s=0,l=n.l.length;s<l;s++)n.a[s]===w.id&&(n.a.splice(s),n.l.splice(s),0===n.a.length&&(w._unbind(e,t,n.l.f),H[t]=null))},this.bind=function(e,t,o,r,i){var n="jquery"in e?e[0]:e;w._bind(n,t,o,r||!1,i||!1)},this._bind=function(e,t,o,r,i){w.events.push({e:e,n:t,f:o,b:r,q:!1}),m&&i?e.addEventListener(t,o,{passive:!1,capture:r}):e.addEventListener(t,o,r||!1)},this._unbind=function(e,t,o,r){H[t]?w.undelegate(e,t,o,r):e.removeEventListener(t,o,r)},this.unbindAll=function(){for(var e=0;e<w.events.length;e++){var t=w.events[e];t.q?t.e.unbind(t.n,t.f):w._unbind(t.e,t.n,t.f,t.b)}},this.showRails=function(){return w.showRail().showRailHr()},this.showRail=function(){return 0===w.page.maxh||!w.ispage&&"none"==w.win.css("display")||(w.rail.visibility=!0,w.rail.css("display","block"),w.rail.parent().removeClass("noscroll")),w},this.showRailHr=function(){return w.railh&&(0===w.page.maxw||!w.ispage&&"none"==w.win.css("display")||(w.railh.visibility=!0,w.railh.css("display","block"))),w},this.hideRails=function(){return w.hideRail().hideRailHr()},this.hideRail=function(){return w.rail.visibility=!1,w.rail.css("display","none"),w.rail.parent().addClass("noscroll"),w},this.hideRailHr=function(){return w.railh&&(w.railh.visibility=!1,w.railh.css("display","none")),w},this.show=function(){return w.hidden=!1,w.railslocked=!1,w.showRails()},this.hide=function(){return w.hidden=!0,w.railslocked=!0,w.hideRails()},this.toggle=function(){return w.hidden?w.show():w.hide()},this.remove=function(){for(var e in w.stop(),w.cursortimeout&&clearTimeout(w.cursortimeout),w.delaylist)w.delaylist[e]&&O(w.delaylist[e].h);w.doZoomOut(),w.unbindAll(),S.isie9&&w.win[0].detachEvent("onpropertychange",w.onAttributeChange),!1!==w.observer&&w.observer.disconnect(),!1!==w.observerremover&&w.observerremover.disconnect(),!1!==w.observerbody&&w.observerbody.disconnect(),w.events=null,w.cursor&&w.cursor.remove(),w.cursorh&&w.cursorh.remove(),w.rail&&w.rail.remove(),w.railh&&w.railh.remove(),w.zoom&&w.zoom.remove();for(var t=0;t<w.saved.css.length;t++){var o=w.saved.css[t];o[0].css(o[1],void 0===o[2]?"":o[2])}w.saved=!1,w.me.data("__nicescroll","");var r=P.nicescroll;for(var i in r.each(function(e){if(this&&this.id===w.id){delete r[e];for(var t=++e;t<r.length;t++,e++)r[e]=r[t];--r.length&&delete r[r.length]}}),w)w[i]=null,delete w[i];w=null},this.scrollstart=function(e){return this.onscrollstart=e,w},this.scrollend=function(e){return this.onscrollend=e,w},this.scrollcancel=function(e){return this.onscrollcancel=e,w},this.zoomin=function(e){return this.onzoomin=e,w},this.zoomout=function(e){return this.onzoomout=e,w},this.isScrollable=function(e){var t=e.target?e.target:e;if("OPTION"==t.nodeName)return!0;for(;t&&1==t.nodeType&&t!==this.me[0]&&!/^BODY|HTML/.test(t.nodeName);){var o=P(t),r=o.css("overflowY")||o.css("overflowX")||o.css("overflow")||"";if(/scroll|auto/.test(r))return t.clientHeight!=t.scrollHeight;t=!!t.parentNode&&t.parentNode}return!1},this.getViewport=function(e){for(var t=!(!e||!e.parentNode)&&e.parentNode;t&&1==t.nodeType&&!/^BODY|HTML/.test(t.nodeName);){var o=P(t);if(/fixed|absolute/.test(o.css("position")))return o;var r=o.css("overflowY")||o.css("overflowX")||o.css("overflow")||"";if(/scroll|auto/.test(r)&&t.clientHeight!=t.scrollHeight)return o;if(0<o.getNiceScroll().length)return o;t=!!t.parentNode&&t.parentNode}return!1},this.triggerScrollStart=function(e,t,o,r,i){if(w.onscrollstart){var n={type:"scrollstart",current:{x:e,y:t},request:{x:o,y:r},end:{x:w.newscrollx,y:w.newscrolly},speed:i};w.onscrollstart.call(w,n)}},this.triggerScrollEnd=function(){if(w.onscrollend){var e=w.getScrollLeft(),t=w.getScrollTop(),o={type:"scrollend",current:{x:e,y:t},end:{x:e,y:t}};w.onscrollend.call(w,o)}};var g=0,v=0,b=0,k=1,T=!1;if(this.onmousewheel=function(e){if(w.wheelprevented||w.locked)return!1;if(w.railslocked)return w.debounced("checkunlock",w.resize,250),!1;if(w.rail.drag)return w.cancelEvent(e);if("auto"===x.oneaxismousemode&&0!==e.deltaX&&(x.oneaxismousemode=!1),x.oneaxismousemode&&0===e.deltaX&&!w.rail.scrollable)return!w.railh||!w.railh.scrollable||w.onmousewheelhr(e);var t=X(),o=!1;if(x.preservenativescrolling&&w.checkarea+600<t&&(w.nativescrollingarea=w.isScrollable(e),o=!0),w.checkarea=t,w.nativescrollingarea)return!0;var r=i(e,!1,o);return r&&(w.checkarea=0),r},this.onmousewheelhr=function(e){if(!w.wheelprevented){if(w.railslocked||!w.railh.scrollable)return!0;if(w.rail.drag)return w.cancelEvent(e);var t=X(),o=!1;return x.preservenativescrolling&&w.checkarea+600<t&&(w.nativescrollingarea=w.isScrollable(e),o=!0),w.checkarea=t,!!w.nativescrollingarea||(w.railslocked?w.cancelEvent(e):i(e,!0,o))}},this.stop=function(){return w.cancelScroll(),w.scrollmon&&w.scrollmon.stop(),w.cursorfreezed=!1,w.scroll.y=Math.round(w.getScrollTop()*(1/w.scrollratio.y)),w.noticeCursor(),w},this.getTransitionSpeed=function(e){return 80+e/72*x.scrollspeed|0},x.smoothscroll)if(w.ishwscroll&&S.hastransition&&x.usetransition&&x.smoothscroll){var z="";this.resetTransition=function(){z="",w.doc.css(S.prefixstyle+"transition-duration","0ms")},this.prepareTransition=function(e,t){var o=t?e:w.getTransitionSpeed(e),r=o+"ms";return z!==r&&(z=r,w.doc.css(S.prefixstyle+"transition-duration",r)),o},this.doScrollLeft=function(e,t){var o=w.scrollrunning?w.newscrolly:w.getScrollTop();w.doScrollPos(e,o,t)},this.doScrollTop=function(e,t){var o=w.scrollrunning?w.newscrollx:w.getScrollLeft();w.doScrollPos(o,e,t)},this.cursorupdate={running:!1,start:function(){var e=this;if(!e.running){e.running=!0;var t=function(){e.running&&Y(t),w.showCursor(w.getScrollTop(),w.getScrollLeft()),w.notifyScrollEvent(w.win[0])};Y(t)}},stop:function(){this.running=!1}},this.doScrollPos=function(e,t,o){var r=w.getScrollTop(),i=w.getScrollLeft();if(((w.newscrolly-r)*(t-r)<0||(w.newscrollx-i)*(e-i)<0)&&w.cancelScroll(),x.bouncescroll?(t<0?t=t/2|0:t>w.page.maxh&&(t=w.page.maxh+(t-w.page.maxh)/2|0),e<0?e=e/2|0:e>w.page.maxw&&(e=w.page.maxw+(e-w.page.maxw)/2|0)):(t<0?t=0:t>w.page.maxh&&(t=w.page.maxh),e<0?e=0:e>w.page.maxw&&(e=w.page.maxw)),w.scrollrunning&&e==w.newscrollx&&t==w.newscrolly)return!1;w.newscrolly=t,w.newscrollx=e;var n=w.getScrollTop(),s=w.getScrollLeft(),l={};l.x=e-s,l.y=t-n;var a=0|Math.sqrt(l.x*l.x+l.y*l.y),c=w.prepareTransition(a);w.scrollrunning||(w.scrollrunning=!0,w.triggerScrollStart(s,n,e,t,c),w.cursorupdate.start()),w.scrollendtrapped=!0,S.transitionend||(w.scrollendtrapped&&clearTimeout(w.scrollendtrapped),w.scrollendtrapped=setTimeout(w.onScrollTransitionEnd,c)),w.setScrollTop(w.newscrolly),w.setScrollLeft(w.newscrollx)},this.cancelScroll=function(){if(!w.scrollendtrapped)return!0;var e=w.getScrollTop(),t=w.getScrollLeft();return w.scrollrunning=!1,S.transitionend||clearTimeout(S.transitionend),w.scrollendtrapped=!1,w.resetTransition(),w.setScrollTop(e),w.railh&&w.setScrollLeft(t),w.timerscroll&&w.timerscroll.tm&&clearInterval(w.timerscroll.tm),w.timerscroll=!1,w.cursorfreezed=!1,w.cursorupdate.stop(),w.showCursor(e,t),w},this.onScrollTransitionEnd=function(){if(w.scrollendtrapped){var e=w.getScrollTop(),t=w.getScrollLeft();if(e<0?e=0:e>w.page.maxh&&(e=w.page.maxh),t<0?t=0:t>w.page.maxw&&(t=w.page.maxw),e!=w.newscrolly||t!=w.newscrollx)return w.doScrollPos(t,e,x.snapbackspeed);w.scrollrunning&&w.triggerScrollEnd(),w.scrollrunning=!1,w.scrollendtrapped=!1,w.resetTransition(),w.timerscroll=!1,w.setScrollTop(e),w.railh&&w.setScrollLeft(t),w.cursorupdate.stop(),w.noticeCursor(!1,e,t),w.cursorfreezed=!1}}}else this.doScrollLeft=function(e,t){var o=w.scrollrunning?w.newscrolly:w.getScrollTop();w.doScrollPos(e,o,t)},this.doScrollTop=function(e,t){var o=w.scrollrunning?w.newscrollx:w.getScrollLeft();w.doScrollPos(o,e,t)},this.doScrollPos=function(e,t,o){var r=w.getScrollTop(),i=w.getScrollLeft();((w.newscrolly-r)*(t-r)<0||(w.newscrollx-i)*(e-i)<0)&&w.cancelScroll();var n=!1;if(w.bouncescroll&&w.rail.visibility||(t<0?n=!(t=0):t>w.page.maxh&&(t=w.page.maxh,n=!0)),w.bouncescroll&&w.railh.visibility||(e<0?n=!(e=0):e>w.page.maxw&&(e=w.page.maxw,n=!0)),w.scrollrunning&&w.newscrolly===t&&w.newscrollx===e)return!0;w.newscrolly=t,w.newscrollx=e,w.dst={},w.dst.x=e-i,w.dst.y=t-r,w.dst.px=i,w.dst.py=r;var s=0|Math.sqrt(w.dst.x*w.dst.x+w.dst.y*w.dst.y),l=w.getTransitionSpeed(s);w.bzscroll={};var a=n?1:.58;w.bzscroll.x=new u(i,w.newscrollx,l,0,0,a,1),w.bzscroll.y=new u(r,w.newscrolly,l,0,0,a,1),X();var c=function(){if(w.scrollrunning){var e=w.bzscroll.y.getPos();w.setScrollLeft(w.bzscroll.x.getNow()),w.setScrollTop(w.bzscroll.y.getNow()),e<=1?w.timer=Y(c):(w.scrollrunning=!1,w.timer=0,w.triggerScrollEnd())}};w.scrollrunning||(w.triggerScrollStart(i,r,e,t,l),w.scrollrunning=!0,w.timer=Y(c))},this.cancelScroll=function(){return w.timer&&O(w.timer),w.timer=0,w.bzscroll=!1,w.scrollrunning=!1,w};else this.doScrollLeft=function(e,t){var o=w.getScrollTop();w.doScrollPos(e,o,t)},this.doScrollTop=function(e,t){var o=w.getScrollLeft();w.doScrollPos(o,e,t)},this.doScrollPos=function(e,t,o){var r=e>w.page.maxw?w.page.maxw:e;r<0&&(r=0);var i=t>w.page.maxh?w.page.maxh:t;i<0&&(i=0),w.synched("scroll",function(){w.setScrollTop(i),w.setScrollLeft(r)})},this.cancelScroll=function(){};this.doScrollBy=function(e,t){l(0,e)},this.doScrollLeftBy=function(e,t){l(e,0)},this.doScrollTo=function(e,t){var o=t?Math.round(e*w.scrollratio.y):e;o<0?o=0:o>w.page.maxh&&(o=w.page.maxh),w.cursorfreezed=!1,w.doScrollTop(e)},this.checkContentSize=function(){var e=w.getContentSize();e.h==w.page.h&&e.w==w.page.w||w.resize(!1,e)},w.onscroll=function(e){w.rail.drag||w.cursorfreezed||w.synched("scroll",function(){w.scroll.y=Math.round(w.getScrollTop()/w.scrollratio.y),w.railh&&(w.scroll.x=Math.round(w.getScrollLeft()/w.scrollratio.x)),w.noticeCursor()})},w.bind(w.docscroll,"scroll",w.onscroll),this.doZoomIn=function(e){if(!w.zoomactive){w.zoomactive=!0,w.zoomrestore={style:{}};var t=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],o=w.win[0].style;for(var r in t){var i=t[r];w.zoomrestore.style[i]=void 0!==o[i]?o[i]:""}w.zoomrestore.style.width=w.win.css("width"),w.zoomrestore.style.height=w.win.css("height"),w.zoomrestore.padding={w:w.win.outerWidth()-w.win.width(),h:w.win.outerHeight()-w.win.height()},S.isios4&&(w.zoomrestore.scrollTop=I.scrollTop(),I.scrollTop(0)),w.win.css({position:S.isios4?"absolute":"fixed",top:0,left:0,zIndex:N+100,margin:0});var n=w.win.css("backgroundColor");return(""===n||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n))&&w.win.css("backgroundColor","#fff"),w.rail.css({zIndex:N+101}),w.zoom.css({zIndex:N+102}),w.zoom.css("backgroundPosition","0 -18px"),w.resizeZoom(),w.onzoomin&&w.onzoomin.call(w),w.cancelEvent(e)}},this.doZoomOut=function(e){if(w.zoomactive)return w.zoomactive=!1,w.win.css("margin",""),w.win.css(w.zoomrestore.style),S.isios4&&I.scrollTop(w.zoomrestore.scrollTop),w.rail.css({"z-index":w.zindex}),w.zoom.css({"z-index":w.zindex}),w.zoomrestore=!1,w.zoom.css("backgroundPosition","0 0"),w.onResize(),w.onzoomout&&w.onzoomout.call(w),w.cancelEvent(e)},this.doZoom=function(e){return w.zoomactive?w.doZoomOut(e):w.doZoomIn(e)},this.resizeZoom=function(){if(w.zoomactive){var e=w.getScrollTop();w.win.css({width:I.width()-w.zoomrestore.padding.w+"px",height:I.height()-w.zoomrestore.padding.h+"px"}),w.onResize(),w.setScrollTop(Math.min(w.page.maxh,e))}},this.init(),P.nicescroll.push(this)},q=function(e){var f=this;this.nc=e,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.reset=function(e,t){f.stop(),f.steptime=0,f.lasttime=X(),f.speedx=0,f.speedy=0,f.lastx=e,f.lasty=t,f.lastscrollx=-1,f.lastscrolly=-1},this.update=function(e,t){var o=X();f.steptime=o-f.lasttime,f.lasttime=o;var r=t-f.lasty,i=e-f.lastx,n=f.nc.getScrollTop()+r,s=f.nc.getScrollLeft()+i;f.snapx=s<0||s>f.nc.page.maxw,f.snapy=n<0||n>f.nc.page.maxh,f.speedx=i,f.speedy=r,f.lastx=e,f.lasty=t},this.stop=function(){f.nc.unsynched("domomentum2d"),f.timer&&clearTimeout(f.timer),f.timer=0,f.lastscrollx=-1,f.lastscrolly=-1},this.doSnapy=function(e,t){var o=!1;t<0?o=!(t=0):t>f.nc.page.maxh&&(t=f.nc.page.maxh,o=!0),e<0?o=!(e=0):e>f.nc.page.maxw&&(e=f.nc.page.maxw,o=!0),o?f.nc.doScrollPos(e,t,f.nc.opt.snapbackspeed):f.nc.triggerScrollEnd()},this.doMomentum=function(e){var t=X(),o=e?t+e:f.lasttime,r=f.nc.getScrollLeft(),i=f.nc.getScrollTop(),n=f.nc.page.maxh,s=f.nc.page.maxw;f.speedx=0<s?Math.min(60,f.speedx):0,f.speedy=0<n?Math.min(60,f.speedy):0;var l=o&&t-o<=60;(i<0||n<i||r<0||s<r)&&(l=!1);var a=!(!f.speedy||!l)&&f.speedy,c=!(!f.speedx||!l)&&f.speedx;if(a||c){var u=Math.max(16,f.steptime);if(50<u){var d=u/50;f.speedx*=d,f.speedy*=d,u=50}f.demulxy=0,f.lastscrollx=f.nc.getScrollLeft(),f.chkx=f.lastscrollx,f.lastscrolly=f.nc.getScrollTop(),f.chky=f.lastscrolly;var h=f.lastscrollx,p=f.lastscrolly,m=function(){var e=600<X()-t?.04:.02;f.speedx&&(h=Math.floor(f.lastscrollx-f.speedx*(1-f.demulxy)),((f.lastscrollx=h)<0||s<h)&&(e=.1)),f.speedy&&(p=Math.floor(f.lastscrolly-f.speedy*(1-f.demulxy)),((f.lastscrolly=p)<0||n<p)&&(e=.1)),f.demulxy=Math.min(1,f.demulxy+e),f.nc.synched("domomentum2d",function(){f.speedx&&(f.nc.getScrollLeft(),f.chkx=h,f.nc.setScrollLeft(h)),f.speedy&&(f.nc.getScrollTop(),f.chky=p,f.nc.setScrollTop(p)),f.timer||(f.nc.hideCursor(),f.doSnapy(h,p))}),f.demulxy<1?f.timer=setTimeout(m,u):(f.stop(),f.nc.hideCursor(),f.doSnapy(h,p))};m()}else f.doSnapy(f.nc.getScrollLeft(),f.nc.getScrollTop())}},i=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(e,t,o){var r=P.data(e,"__nicescroll")||!1;return r&&r.ishwscroll?r.getScrollTop():i.call(e)},set:function(e,t){var o=P.data(e,"__nicescroll")||!1;return o&&o.ishwscroll?o.setScrollTop(parseInt(t)):i.call(e,t),this}},e.fn.scrollTop=function(t){if(void 0===t){var e=!!this[0]&&(P.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollTop():i.call(this)}return this.each(function(){var e=P.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollTop(parseInt(t)):i.call(P(this),t)})};var s=e.fn.scrollLeft;P.cssHooks.pageXOffset={get:function(e,t,o){var r=P.data(e,"__nicescroll")||!1;return r&&r.ishwscroll?r.getScrollLeft():s.call(e)},set:function(e,t){var o=P.data(e,"__nicescroll")||!1;return o&&o.ishwscroll?o.setScrollLeft(parseInt(t)):s.call(e,t),this}},e.fn.scrollLeft=function(t){if(void 0===t){var e=!!this[0]&&(P.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollLeft():s.call(this)}return this.each(function(){var e=P.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollLeft(parseInt(t)):s.call(P(this),t)})};var a=function(e){var t=this;if(this.length=0,this.name="nicescrollarray",this.each=function(e){return P.each(t,e),t},this.push=function(e){t[t.length]=e,t.length++},this.eq=function(e){return t[e]},e)for(var o=0;o<e.length;o++){var r=P.data(e[o],"__nicescroll")||!1;r&&(this[this.length]=r,this.length++)}return this};!function(e,t,o){for(var r=0,i=t.length;r<i;r++)o(e,t[r])}(a.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,t){e[t]=function(){var e=arguments;return this.each(function(){this[t].apply(this,e)})}}),e.fn.getNiceScroll=function(e){return void 0===e?new a(this):this[e]&&P.data(this[e],"__nicescroll")||!1},(e.expr.pseudos||e.expr[":"]).nicescroll=function(e){return void 0!==P.data(e,"__nicescroll")},P.fn.niceScroll=function(i,n){void 0!==n||"object"!=typeof i||"jquery"in i||(n=i,i=!1);var s=new a;return this.each(function(){var e=P(this),t=P.extend({},n);if(i){var o=P(i);t.doc=1<o.length?P(i,e):o,t.win=e}!("doc"in t)||"win"in t||(t.win=e);var r=e.data("__nicescroll")||!1;r||(t.doc=t.doc||e,r=new l(t,e),e.data("__nicescroll",r)),s.push(r)}),1===s.length?s[0]:s},R.NiceScroll={getjQuery:function(){return e}},P.nicescroll||(P.nicescroll=new a,P.nicescroll.options=_)}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.baguetteBox=t()}(this,function(){"use strict";function a(e){if(Y.hasOwnProperty(e)){var t=Y[e].galleries;[].forEach.call(t,function(e){[].forEach.call(e,function(e){g(e.imageElement,"click",e.eventHandler)}),N===e&&(N=[])}),delete Y[e]}}function t(e){switch(e.keyCode){case 37:s();break;case 39:n();break;case 27:r();break;case 36:!function(e){e&&e.preventDefault();l(0)}(e);break;case 35:!function(e){e&&e.preventDefault();l(N.length-1)}(e)}}function c(e,t){if(N!==e){for(N=e,function(e){e||(e={});for(var t in L)C[t]=L[t],void 0!==e[t]&&(C[t]=e[t]);y.style.transition=y.style.webkitTransition="fadeIn"===C.animation?"opacity .4s ease":"slideIn"===C.animation?"":"none","auto"===C.buttons&&("ontouchstart"in window||1===N.length)&&(C.buttons=!1);x.style.display=S.style.display=C.buttons?"":"none";try{w.style.backgroundColor=C.overlayBackgroundColor}catch(e){}}(t);y.firstChild;)y.removeChild(y.firstChild);for(var o,r=[],i=[],n=O.length=0;n<e.length;n++)(o=b("div")).className="full-image",o.id="baguette-img-"+n,O.push(o),r.push("baguetteBox-figure-"+n),i.push("baguetteBox-figcaption-"+n),y.appendChild(O[n]);w.setAttribute("aria-labelledby",r.join(" ")),w.setAttribute("aria-describedby",i.join(" "))}}function u(e){C.noScrollbars&&(document.documentElement.style.overflowY="hidden",document.body.style.overflowY="scroll"),"block"!==w.style.display&&(f(document,"keydown",t),R={count:0,startX:null,startY:null},i(P=e,function(){p(P),m(P)}),h(),w.style.display="block",C.fullScreen&&(w.requestFullscreen?w.requestFullscreen():w.webkitRequestFullscreen?w.webkitRequestFullscreen():w.mozRequestFullScreen&&w.mozRequestFullScreen()),setTimeout(function(){w.className="visible",C.bodyClass&&document.body.classList&&document.body.classList.add(C.bodyClass),C.afterShow&&C.afterShow()},50),C.onChange&&C.onChange(P,O.length),A=document.activeElement,o(),B=!0)}function o(){C.buttons?x.focus():k.focus()}function r(){C.noScrollbars&&(document.documentElement.style.overflowY="auto",document.body.style.overflowY="auto"),"none"!==w.style.display&&(g(document,"keydown",t),w.className="",setTimeout(function(){w.style.display="none",document.fullscreen&&(document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()),C.bodyClass&&document.body.classList&&document.body.classList.remove(C.bodyClass),C.afterHide&&C.afterHide(),A&&A.focus(),B=!1},500))}function i(t,o){var e=O[t],r=N[t];if(void 0!==e&&void 0!==r)if(e.getElementsByTagName("img")[0])o&&o();else{var i=r.imageElement,n=i.getElementsByTagName("img")[0],s="function"==typeof C.captions?C.captions.call(N,i):i.getAttribute("data-caption")||i.title,l=function(e){var t=e.href;if(e.dataset){var o=[];for(var r in e.dataset)"at-"!==r.substring(0,3)||isNaN(r.substring(3))||(o[r.replace("at-","")]=e.dataset[r]);for(var i=Object.keys(o).sort(function(e,t){return parseInt(e,10)<parseInt(t,10)?-1:1}),n=window.innerWidth*window.devicePixelRatio,s=0;s<i.length-1&&i[s]<n;)s++;t=o[i[s]]||t}return t}(i),a=b("figure");if(a.id="baguetteBox-figure-"+t,a.innerHTML='<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>',C.captions&&s){var c=b("figcaption");c.id="baguetteBox-figcaption-"+t,c.innerHTML=s,a.appendChild(c)}e.appendChild(a);var u=b("img");u.onload=function(){var e=document.querySelector("#baguette-img-"+t+" .baguetteBox-spinner");a.removeChild(e),!C.async&&o&&o()},u.setAttribute("src",l),u.alt=n&&n.alt||"",C.titleTag&&s&&(u.title=s),a.appendChild(u),C.async&&o&&o()}}function n(){return l(P+1)}function s(){return l(P-1)}function l(e,t){return!B&&0<=e&&e<t.length?(c(t,C),u(e),!0):e<0?(C.animation&&d("left"),!1):e>=O.length?(C.animation&&d("right"),!1):(i(P=e,function(){p(P),m(P)}),h(),C.onChange&&C.onChange(P,O.length),!0)}function d(e){y.className="bounce-from-"+e,setTimeout(function(){y.className=""},400)}function h(){var e=100*-P+"%";"fadeIn"===C.animation?(y.style.opacity=0,setTimeout(function(){M.transforms?y.style.transform=y.style.webkitTransform="translate3d("+e+",0,0)":y.style.left=e,y.style.opacity=1},400)):M.transforms?y.style.transform=y.style.webkitTransform="translate3d("+e+",0,0)":y.style.left=e}function p(e){e-P>=C.preload||i(e+1,function(){p(e+1)})}function m(e){P-e>=C.preload||i(e-1,function(){m(e-1)})}function f(e,t,o,r){e.addEventListener?e.addEventListener(t,o,r):e.attachEvent("on"+t,function(e){(e=e||window.event).target=e.target||e.srcElement,o(e)})}function g(e,t,o,r){e.removeEventListener?e.removeEventListener(t,o,r):e.detachEvent("on"+t,o)}function v(e){return document.getElementById(e)}function b(e){return document.createElement(e)}var w,y,x,S,k,T='<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',z='<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',E='<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',C={},L={captions:!0,buttons:"auto",fullScreen:!1,noScrollbars:!1,bodyClass:"baguetteBox-open",titleTag:!1,async:!1,preload:2,animation:"slideIn",afterShow:null,afterHide:null,onChange:null,overlayBackgroundColor:"rgba(0,0,0,.8)"},M={},N=[],P=0,B=!1,R={},I=!1,H=/.+\.(gif|jpe?g|png|webp)/i,Y={},O=[],A=null,X=function(e){-1!==e.target.id.indexOf("baguette-img")&&r()},_=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,s()},D=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,n()},q=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,r()},j=function(e){R.count++,1<R.count&&(R.multitouch=!0),R.startX=e.changedTouches[0].pageX,R.startY=e.changedTouches[0].pageY},F=function(e){if(!I&&!R.multitouch){e.preventDefault?e.preventDefault():e.returnValue=!1;var t=e.touches[0]||e.changedTouches[0];40<t.pageX-R.startX?(I=!0,s()):t.pageX-R.startX<-40?(I=!0,n()):100<R.startY-t.pageY&&r()}},W=function(){R.count--,R.count<=0&&(R.multitouch=!1),I=!1},Z=function(){W()},U=function(e){"block"===w.style.display&&w.contains&&!w.contains(e.target)&&(e.stopPropagation(),o())};return[].forEach||(Array.prototype.forEach=function(e,t){for(var o=0;o<this.length;o++)e.call(t,this[o],o,this)}),[].filter||(Array.prototype.filter=function(e,t,o,r,i){for(o=this,r=[],i=0;i<o.length;i++)e.call(t,o[i],i,o)&&r.push(o[i]);return r}),{run:function(e,t){var o,r,i,n,s,l;return M.transforms=void 0!==(o=b("div")).style.perspective||void 0!==o.style.webkitPerspective,M.svg=((r=b("div")).innerHTML="<svg/>","http://www.w3.org/2000/svg"===(r.firstChild&&r.firstChild.namespaceURI)),M.passiveEvents=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(e){}return e}(),function(){if(w=v("baguetteBox-overlay"))return y=v("baguetteBox-slider"),x=v("previous-button"),S=v("next-button"),k=v("close-button");var e;(w=b("div")).setAttribute("role","dialog"),w.id="baguetteBox-overlay",document.getElementsByTagName("body")[0].appendChild(w),(y=b("div")).id="baguetteBox-slider",w.appendChild(y),(x=b("button")).setAttribute("type","button"),x.id="previous-button",x.setAttribute("aria-label","Previous"),x.innerHTML=M.svg?T:"&lt;",w.appendChild(x),(S=b("button")).setAttribute("type","button"),S.id="next-button",S.setAttribute("aria-label","Next"),S.innerHTML=M.svg?z:"&gt;",w.appendChild(S),(k=b("button")).setAttribute("type","button"),k.id="close-button",k.setAttribute("aria-label","Close"),k.innerHTML=M.svg?E:"&times;",w.appendChild(k),x.className=S.className=k.className="baguetteBox-button",e=M.passiveEvents?{passive:!0}:null,f(w,"click",X),f(x,"click",_),f(S,"click",D),f(k,"click",q),f(y,"contextmenu",Z),f(w,"touchstart",j,e),f(w,"touchmove",F,e),f(w,"touchend",W),f(document,"focus",U,!0)}(),a(e),i=e,n=t,s=document.querySelectorAll(i),l={galleries:[],nodeList:s},Y[i]=l,[].forEach.call(s,function(e){n&&n.filter&&(H=n.filter);var t=[];if(t="A"===e.tagName?[e]:e.getElementsByTagName("a"),0!==(t=[].filter.call(t,function(e){if(-1===e.className.indexOf(n&&n.ignoreClass))return H.test(e.href)})).length){var i=[];[].forEach.call(t,function(e,t){var o=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1,c(i,n),u(t)},r={eventHandler:o,imageElement:e};f(e,"click",o),i.push(r)}),l.galleries.push(i)}}),l.galleries},show:l,showNext:n,showPrevious:s,hide:r,destroy:function(){var e;e=M.passiveEvents?{passive:!0}:null,g(w,"click",X),g(x,"click",_),g(S,"click",D),g(k,"click",q),g(y,"contextmenu",Z),g(w,"touchstart",j,e),g(w,"touchmove",F,e),g(w,"touchend",W),g(document,"focus",U,!0),function(){for(var e in Y)Y.hasOwnProperty(e)&&a(e)}(),g(document,"keydown",t),document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")),Y={},N=[],P=0}}});




//@prepros-append jq-start.js
//@prepros-append forms.js
//@prepros-append script.js
//@prepros-append jq-end.js
$(document).ready(function() {
  var w=$(window).outerWidth();
  var h=$(window).outerHeight();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
function isIE() {
  ua = navigator.userAgent;
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  return is_ie;
}
if(isIE()){
  $('body').addClass('ie');
}
if(isMobile.any()){
  $('body').addClass('touch');
}
//FORMS
function forms(){
//SELECT
if($('select').length>0){
  function selectscrolloptions(){
      var scs=100;
      var mss=50;
    if(isMobile.any()){
      scs=10;
      mss=1;
    }
    var opt={
      cursorcolor:"#2078e5",
      cursorwidth: "3px",
      background: "",
      autohidemode:false,
      bouncescroll:false,
      cursorborderradius: "0px",
      scrollspeed:scs,
      mousescrollstep:mss,
      directionlockdeadzone:0,
      cursorborder: "0px solid #fff",
    };
    return opt;
  }

  function select(){
    $.each($('select'), function(index, val) {
        var ind=index;
      $(this).hide();
      if($(this).parent('.select-block').length==0){
        $(this).wrap("<div class='select-block "+$(this).attr('class')+"-select-block'></div>");
      }else{
        $(this).parent('.select-block').find('.select').remove();
      }
        var milti='';
        var check='';
        var sblock=$(this).parent('.select-block');
        var soptions="<div class='select-options'><div class='select-options-scroll'><div class='select-options-list'>";
      if($(this).attr('multiple')=='multiple'){
        milti='multiple';
        check='check';
      }
      $.each($(this).find('option'), function(index, val) {
        if($(this).attr('value')!=''){
          soptions=soptions+"<div data-value='"+$(this).attr('value')+"' class='select-options__value_"+ind+" select-options__value value_"+$(this).val()+" "+$(this).attr('class')+" "+check+"'>"+$(this).html()+"</div>";
        }else if($(this).parent().attr('data-label')=='on'){
          if(sblock.find('.select__label').length==0){
            sblock.prepend('<div class="select__label">'+$(this).html()+'</div>');
          }
        }
      });
        soptions=soptions+"</div></div></div>";
      if($(this).attr('data-type')=='search'){
          sblock.append("<div data-type='search' class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
                      "<div class='select-title'>"+
                        "<div class='select-title__arrow ion-ios-arrow-down'></div>"+
                        "<input data-value='"+$(this).find('option[selected="selected"]').html()+"' class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"' />"+
                      "</div>"+
                      soptions+
                    "</div>");
          $('.select_'+ind).find('input.select-title__value').jcOnPageFilter({
            parentSectionClass:'select-options_'+ind,
            parentLookupClass:'select-options__value_'+ind,
            childBlockClass:'select-options__value_'+ind
          });
      }else{
        sblock.append("<div class='select_"+ind+" select"+" "+$(this).attr('class')+"__select "+milti+"'>"+
                    "<div class='select-title'>"+
                      "<div class='select-title__arrow ion-ios-arrow-down'></div>"+
                      "<div class='select-title__value value_"+$(this).find('option[selected="selected"]').val()+"'>"+$(this).find('option[selected="selected"]').html()+"</div>"+
                    "</div>"+
                    soptions+
                  "</div>");
      }
      if($(this).find('option[selected="selected"]').val()!=''){
        sblock.find('.select').addClass('focus');
      }
      if($(this).attr('data-req')=='on'){
        $(this).addClass('req');
      }
      $(".select_"+ind+" .select-options-scroll").niceScroll('.select-options-list',selectscrolloptions());
    });
  }
    select();

  $('body').on('keyup','input.select-title__value',function() {
    $('.select').not($(this).parents('.select')).removeClass('active').find('.select-options').slideUp(50);
    $(this).parents('.select').addClass('active');
    $(this).parents('.select').find('.select-options').slideDown(50,function() {
      $(this).find(".select-options-scroll").getNiceScroll().resize();
    });
    $(this).parents('.select-block').find('select').val('');
  });
  $('body').on('click','.select',function(){
    if(!$(this).hasClass('disabled')){
      $('.select').not(this).removeClass('active').find('.select-options').slideUp(50);
      $(this).toggleClass('active');
      $(this).find('.select-options').slideToggle(50,function() {
        $(this).find(".select-options-scroll").getNiceScroll().resize();
      });

      //	var input=$(this).parent().find('select');
      //removeError(input);

      if($(this).attr('data-type')=='search'){
        if(!$(this).hasClass('active')){
          searchselectreset();
        }
        $(this).find('.select-options__value').show();
      }
    }
  });
  $('body').on('click','.select-options__value',function() {
    if($(this).parents('.select').hasClass('multiple')){
      if($(this).hasClass('active')){
        if($(this).parents('.select').find('.select-title__value span').length>0){
          $(this).parents('.select').find('.select-title__value').append('<span data-value="'+$(this).data('value')+'">, '+$(this).html()+'</span>');
        }else{
          $(this).parents('.select').find('.select-title__value').data('label',$(this).parents('.select').find('.select-title__value').html());
          $(this).parents('.select').find('.select-title__value').html('<span data-value="'+$(this).data('value')+'">'+$(this).html()+'</span>');
        }
        $(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', true);
        $(this).parents('.select').addClass('focus');
      }else{
        $(this).parents('.select').find('.select-title__value').find('span[data-value="'+$(this).data('value')+'"]').remove();
        if($(this).parents('.select').find('.select-title__value span').length==0){
          $(this).parents('.select').find('.select-title__value').html($(this).parents('.select').find('.select-title__value').data('label'));
          $(this).parents('.select').removeClass('focus');
        }
        $(this).parents('.select-block').find('select').find('option').eq($(this).index()+1).prop('selected', false);
      }
      return false;
    }

    if($(this).parents('.select').attr('data-type')=='search'){
      $(this).parents('.select').find('.select-title__value').val($(this).html());
      $(this).parents('.select').find('.select-title__value').attr('data-value',$(this).html());
    }else{
      $(this).parents('.select').find('.select-title__value').attr('class','select-title__value value_'+$(this).data('value'));
      $(this).parents('.select').find('.select-title__value').html($(this).html());

    }

      $(this).parents('.select-block').find('select').find('option').removeAttr("selected");
    if($.trim($(this).data('value'))!=''){
      $(this).parents('.select-block').find('select').val($(this).data('value'));
      $(this).parents('.select-block').find('select').find('option[value="'+$(this).data('value')+'"]').attr('selected','selected');
    }else{
      $(this).parents('.select-block').find('select').val($(this).html());
      $(this).parents('.select-block').find('select').find('option[value="'+$(this).html()+'"]').attr('selected','selected');
    }


    if($(this).parents('.select-block').find('select').val()!=''){
      $(this).parents('.select-block').find('.select').addClass('focus');
    }else{
      $(this).parents('.select-block').find('.select').removeClass('focus');

      $(this).parents('.select-block').find('.select').removeClass('err');
      $(this).parents('.select-block').parent().removeClass('err');
      $(this).parents('.select-block').removeClass('err').find('.form__error').remove();
    }
    if(!$(this).parents('.select').data('tags')!=""){
      if($(this).parents('.form-tags').find('.form-tags__item[data-value="'+$(this).data('value')+'"]').length==0){
        $(this).parents('.form-tags').find('.form-tags-items').append('<a data-value="'+$(this).data('value')+'" href="" class="form-tags__item">'+$(this).html()+'<span class="fa fa-times"></span></a>');
      }
    }
    $(this).parents('.select-block').find('select').change();

    if($(this).parents('.select-block').find('select').data('update')=='on'){
      select();
    }
  });
  $(document).on('click touchstart',function(e) {
    if (!$(e.target).is(".select *") && !$(e.target).is(".select")) {
      $('.select').removeClass('active');
      $('.select-options').slideUp(50,function() {});
      searchselectreset();
    };
  });
  $(document).on('keydown',function(e) {
    if(e.which==27){
      $('.select').removeClass('active');
      $('.select-options').slideUp(50,function() {});
      searchselectreset();
    }
  });
}
//FIELDS
$('input,textarea').focus(function(){
  if($(this).val() == $(this).attr('data-value')){
      $(this).addClass('focus');
      $(this).parent().addClass('focus');
    if($(this).attr('data-type')=='pass'){
      $(this).attr('type','password');
    };
    $(this).val('');
  };
  removeError($(this));
});
$('input[data-value], textarea[data-value]').each(function() {
  if (this.value == '' || this.value == $(this).attr('data-value')) {
    this.value = $(this).attr('data-value');
    if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
      $(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
    }
  }
  if(this.value!=$(this).attr('data-value') && this.value!=''){
    $(this).addClass('focus');
    $(this).parent().addClass('focus');
    if($(this).hasClass('l') && $(this).parent().find('.form__label').length==0){
      $(this).parent().append('<div class="form__label">'+$(this).attr('data-value')+'</div>');
    }
  }

  $(this).click(function() {
    if (this.value == $(this).attr('data-value')) {
      if($(this).attr('data-type')=='pass'){
        $(this).attr('type','password');
      };
      this.value = '';
    };
  });
  $(this).blur(function() {
    if (this.value == '') {
      this.value = $(this).attr('data-value');
        $(this).removeClass('focus');
        $(this).parent().removeClass('focus');
      if($(this).attr('data-type')=='pass'){
        $(this).attr('type','text');
      };
    };
  });
});
$('.form-input__viewpass').click(function(event) {
  if($(this).hasClass('active')){
    $(this).parent().find('input').attr('type','password');
  }else{
    $(this).parent().find('input').attr('type','text');
  }
  $(this).toggleClass('active');
});

//$('textarea').autogrow({vertical: true, horizontal: false});


//MASKS//
//'+7(999) 999 9999'
//'+38(999) 999 9999'
//'+375(99)999-99-99'
//'a{3,1000}' только буквы минимум 3
//'9{3,1000}' только цифры минимум 3
$.each($('input.phone'), function(index, val) {
  $(this).attr('type','tel');
  $(this).focus(function(){
    $(this).inputmask('+7(999) 999 9999',{clearIncomplete: true,clearMaskOnLostFocus: true,
      "onincomplete": function(){maskclear($(this));}
    });
    $(this).addClass('focus');
    $(this).parent().addClass('focus');
    $(this).parent().removeClass('err');
    $(this).removeClass('err');
  });
});
$('input.phone').focusout(function(event) {
  maskclear($(this));
});
$.each($('input.num'), function(index, val) {
  $(this).focus(function(){
    $(this).inputmask('9{1,1000}',{clearIncomplete: true,placeholder:"",clearMaskOnLostFocus: true,"onincomplete": function(){maskclear($(this));}});
    $(this).addClass('focus');
    $(this).parent().addClass('focus');
    $(this).parent().removeClass('err');
    $(this).removeClass('err');
  });
});
$('input.num').focusout(function(event) {
  maskclear($(this));
});
//CHECK
$.each($('.check'), function(index, val) {
  if($(this).find('input').prop('checked')==true){
    $(this).addClass('active');
  }
});
$('body').off('click','.check',function(event){});
$('body').on('click','.check',function(event){
  if(!$(this).hasClass('disable')){
      var target = $(event.target);
    if (!target.is("a")){
        $(this).toggleClass('active');
      if($(this).hasClass('active')){
        $(this).find('input').prop('checked', true);
      }else{
        $(this).find('input').prop('checked', false);
      }
    }
  }
});

//OPTION
$.each($('.option.active'), function(index, val) {
  $(this).find('input').prop('checked', true);
});
$('.option').click(function(event) {
  if(!$(this).hasClass('disable')){
    if($(this).hasClass('active') && $(this).hasClass('order') ){
      $(this).toggleClass('orderactive');
    }
      $(this).parents('.options').find('.option').removeClass('active');
      $(this).toggleClass('active');
      $(this).children('input').prop('checked', true);
  }
});
//RATING
$('.rating.edit .star').hover(function() {
    var block=$(this).parents('.rating');
  block.find('.rating__activeline').css({width:'0%'});
    var ind=$(this).index()+1;
    var linew=ind/block.find('.star').length*100;
  setrating(block,linew);
},function() {
    var block=$(this).parents('.rating');
  block.find('.star').removeClass('active');
    var ind=block.find('input').val();
    var linew=ind/block.find('.star').length*100;
  setrating(block,linew);
});
$('.rating.edit .star').click(function(event) {
    var block=$(this).parents('.rating');
    var re=$(this).index()+1;
    block.find('input').val(re);
    var linew=re/block.find('.star').length*100;
  setrating(block,linew);
});
$.each($('.rating'), function(index, val) {
    var ind=$(this).find('input').val();
    var linew=ind/$(this).parent().find('.star').length*100;
  setrating($(this),linew);
});
function setrating(th,val) {
  th.find('.rating__activeline').css({width:val+'%'});
}
//QUANTITY
$('.quantity__btn').click(function(event) {
    var n=parseInt($(this).parent().find('.quantity__input').val());
  if($(this).hasClass('dwn')){
    n=n-1;
    if(n<1){n=1;}
  }else{
    n=n+1;
  }
    $(this).parent().find('.quantity__input').val(n);
  return false;
});
//RANGE
if($("#range" ).length>0){
  $("#range" ).slider({
    range: true,
    min: 0,
    max: 5000,
    values: [0, 5000],
    slide: function( event, ui ){
      $('#rangefrom').val(ui.values[0]);
      $('#rangeto').val(ui.values[1]);
      $(this).find('.ui-slider-handle').eq(0).html('<span>'+ui.values[0]+'</span>');
      $(this).find('.ui-slider-handle').eq(1).html('<span>'+ui.values[1]+'</span>');
    },
    change: function( event, ui ){
      if(ui.values[0]!=$( "#range" ).slider( "option","min") || ui.values[1]!=$( "#range" ).slider( "option","max")){
        $('#range').addClass('act');
      }else{
        $('#range').removeClass('act');
      }
    }
  });
  $('#rangefrom').val($( "#range" ).slider( "values", 0 ));
  $('#rangeto').val($( "#range" ).slider( "values", 1 ));

  $("#range" ).find('.ui-slider-handle').eq(0).html('<span>'+$( "#range" ).slider( "option","min")+'</span>');
  $("#range" ).find('.ui-slider-handle').eq(1).html('<span>'+$( "#range" ).slider( "option","max")+'</span>');

  $( "#rangefrom" ).bind("change", function(){
    if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
      $(this).val($( "#range" ).slider( "option","max"));
    }
    if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
      $(this).val($( "#range" ).slider( "option","min"));
    }
    $("#range" ).slider( "values",0,$(this).val());
  });
  $( "#rangeto" ).bind("change", function(){
    if($(this).val()*1>$( "#range" ).slider( "option","max")*1){
      $(this).val($( "#range" ).slider( "option","max"));
    }
    if($(this).val()*1<$( "#range" ).slider( "option","min")*1){
      $(this).val($( "#range" ).slider( "option","min"));
    }
    $("#range" ).slider( "values",1,$(this).val());
  });
  $("#range" ).find('.ui-slider-handle').eq(0).addClass('left');
  $("#range" ).find('.ui-slider-handle').eq(1).addClass('right');
}
//ADDFILES
$('.form-addfile__input').change(function(e){
  if($(this).val()!=''){
        var ts=$(this);
      ts.parents('.form-addfile').find('ul.form-addfile-list').html('');
    $.each(e.target.files, function(index, val) {
      if(ts.parents('.form-addfile').find('ul.form-addfile-list>li:contains("'+e.target.files[index].name+'")').length==0){
        ts.parents('.form-addfile').find('ul.form-addfile-list').append('<li>'+e.target.files[index].name+'</li>');
      }
    });
  }
});
}
forms();

function digi(str){
var r=str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
return r;
}

//VALIDATE FORMS
$('form button[type=submit]').click(function(){
  var er=0;
  var form=$(this).parents('form');
  var ms=form.data('ms');
$.each(form.find('.req'), function(index, val) {
  er+=formValidate($(this));
});
if(er==0){
  removeFormError(form);
  /*
    var messagehtml='';
  if(form.hasClass('editprofile')){
    var messagehtml='';
  }
  formLoad();
  */

  //ОПТРАВКА ФОРМЫ
  /*
  function showResponse(html){
    if(!form.hasClass('nomessage')){
      showMessage(messagehtml);
    }
    if(!form.hasClass('noclear')){
      clearForm(form);
    }
  }
  var options={
    success:showResponse
  };
    form.ajaxForm(options);


  setTimeout(function(){
    if(!form.hasClass('nomessage')){
      //showMessage(messagehtml);
      showMessageByClass(ms);
    }
    if(!form.hasClass('noclear')){
      clearForm(form);
    }
  },0);

  return false;
  */

  if(ms!=null && ms!=''){
    showMessageByClass(ms);
    return false;
  }
}else{
  return false;
}
});
function formValidate(input){
  var er=0;
  var form=input.parents('form');
if(input.attr('name')=='email' || input.hasClass('email')){
  if(input.val()!=input.attr('data-value')){
    var em=input.val().replace(" ","");
    input.val(em);
  }
  if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.val())) || input.val()==input.attr('data-value')){
      er++;
    addError(input);
  }else{
    removeError(input);
  }
}else{
  if(input.val()=='' || input.val()==input.attr('data-value')){
    er++;
    addError(input);
  }else{
    removeError(input);
  }
}
if(input.attr('type')=='checkbox'){
  if(input.prop('checked') == true){
    input.removeClass('err').parent().removeClass('err');
  }else{
    er++;
    input.addClass('err').parent().addClass('err');
  }
}
if(input.hasClass('name')){
  if(!(/^[А-Яа-яa-zA-Z-]+( [А-Яа-яa-zA-Z-]+)$/.test(input.val()))){
      er++;
    addError(input);
  }
}
if(input.hasClass('pass-2')){
  if(form.find('.pass-1').val()!=form.find('.pass-2').val()){
    addError(input);
  }else{
    removeError(input);
  }
}
  return er;
}
function formLoad(){
$('.popup').hide();
$('.popup-message-body').hide();
$('.popup-message .popup-body').append('<div class="popup-loading"><div class="popup-loading__title">Идет загрузка...</div><div class="popup-loading__icon"></div></div>');
$('.popup-message').addClass('active').fadeIn(300);
}
function showMessageByClass(ms){
$('.popup').hide();
popupOpen('message.'+ms,'');
}
function showMessage(html){
$('.popup-loading').remove();
$('.popup-message-body').show().html(html);
}
function clearForm(form){
$.each(form.find('.input'), function(index, val) {
    $(this).removeClass('focus').val($(this).data('value'));
    $(this).parent().removeClass('focus');
  if($(this).hasClass('phone')){
    maskclear($(this));
  }
});
}
function addError(input){
  input.addClass('err');
  input.parent().addClass('err');
  input.parent().find('.form__error').remove();
if(input.hasClass('email')){
    var error='';
  if(input.val()=='' || input.val()==input.attr('data-value')){
    error=input.data('error');
  }else{
    error=input.data('error');
  }
  if(error!=null){
    input.parent().append('<div class="form__error">'+error+'</div>');
  }
}else{
  if(input.data('error')!=null && input.parent().find('.form__error').length==0){
    input.parent().append('<div class="form__error">'+input.data('error')+'</div>');
  }
}
if(input.parents('.select-block').length>0){
  input.parents('.select-block').parent().addClass('err');
  input.parents('.select-block').find('.select').addClass('err');
}
}
function addErrorByName(form,input__name,error_text){
  var input=form.find('[name="'+input__name+'"]');
input.attr('data-error',error_text);
addError(input);
}
function addFormError(form, error_text){
form.find('.form__generalerror').show().html(error_text);
}
function removeFormError(form){
form.find('.form__generalerror').hide().html('');
}
function removeError(input){
input.removeClass('err');
input.parent().removeClass('err');
input.parent().find('.form__error').remove();

if(input.parents('.select-block').length>0){
  input.parents('.select-block').parent().removeClass('err');
  input.parents('.select-block').find('.select').removeClass('err').removeClass('active');
  //input.parents('.select-block').find('.select-options').hide();
}
}
function removeFormErrors(form){
form.find('.err').removeClass('err');
form.find('.form__error').remove();
}
function maskclear(n){
if(n.val()==""){
  n.inputmask('remove');
  n.val(n.attr('data-value'));
  n.removeClass('focus');
  n.parent().removeClass('focus');
}
}
function searchselectreset() {
$.each($('.select[data-type="search"]'), function(index, val){
    var block=$(this).parent();
    var select=$(this).parent().find('select');
  if($(this).find('.select-options__value:visible').length==1){
    $(this).addClass('focus');
    $(this).parents('.select-block').find('select').val($('.select-options__value:visible').data('value'));
    $(this).find('.select-title__value').val($('.select-options__value:visible').html());
    $(this).find('.select-title__value').attr('data-value',$('.select-options__value:visible').html());
  }else if(select.val()==''){
    $(this).removeClass('focus');
    block.find('input.select-title__value').val(select.find('option[selected="selected"]').html());
    block.find('input.select-title__value').attr('data-value',select.find('option[selected="selected"]').html());
  }
});
}
var isMobile = {Android: function() {return navigator.userAgent.match(/Android/i);},BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},Windows: function() {return navigator.userAgent.match(/IEMobile/i);},any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}};
if(isMobile.any()){}

if(location.hash){
  var hsh=location.hash.replace('#','');
if($('.popup-'+hsh).length>0){
  popupOpen(hsh);
}else if($('div.'+hsh).length>0){
  $('body,html').animate({scrollTop:$('div.'+hsh).offset().top,},500, function(){});
}
}
$('.wrapper').addClass('loaded');

var act="click";
if(isMobile.iOS()){
var act="touchstart";
}

$('.header-menu__icon').click(function(event) {
$(this).toggleClass('active');
$('.header-menu').toggleClass('active');
if($(this).hasClass('active')){
  $('body').data('scroll',$(window).scrollTop());
}
  $('body').toggleClass('lock');
if(!$(this).hasClass('active')){
  $('body,html').scrollTop(parseInt($('body').data('scroll')));
}
});

//ZOOM
if($('.gallery').length>0){
baguetteBox.run('.gallery', {
  // Custom options
});
}
/*
CLOUD-ZOOM
<a rel="position:'right',adjustX:25,adjustY:0,Width: 432" href="img/product/zoom.jpg" class="cloud-zoom product-main-mainimage__item">
<img class="cloudzoom-gallery" src="img/product/zoom.jpg" alt="" />
</a>
*/


//POPUP
$('.pl').click(function(event) {
  var pl=$(this).attr('href').replace('#','');
  var v=$(this).data('vid');
popupOpen(pl,v);
return false;
});
function popupOpen(pl,v){
$('.popup').removeClass('active').hide();
if(!$('.header-menu').hasClass('active')){
  $('body').data('scroll',$(window).scrollTop());
}
if(!isMobile.any()){
  $('body').css({paddingRight:$(window).outerWidth()-$('.wrapper').outerWidth()}).addClass('lock');
  $('.pdb').css({paddingRight:$(window).outerWidth()-$('.wrapper').outerWidth()});
}else{
  setTimeout(function() {
    $('body').addClass('lock');
  },300);
}
history.pushState('', '', '#'+pl);
if(v!='' && v!=null){
  $('.popup-'+pl+' .popup-video__value').html('<iframe src="https://www.youtube.com/embed/'+v+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>');
}
$('.popup-'+pl).fadeIn(300).delay(300).addClass('active');

if($('.popup-'+pl).find('.slick-slider').length>0){
  $('.popup-'+pl).find('.slick-slider').slick('setPosition');
}
}
function openPopupById(popup_id){
$('#'+popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose(){
$('.popup').removeClass('active').fadeOut(300);
if(!$('.header-menu').hasClass('active')){
  if(!isMobile.any()){
    setTimeout(function() {
      $('body').css({paddingRight:0});
      $('.pdb').css({paddingRight:0});
    },200);
    setTimeout(function() {
      $('body').removeClass('lock');
      $('body,html').scrollTop(parseInt($('body').data('scroll')));
    },200);
  }else{
    $('body').removeClass('lock');
    $('body,html').scrollTop(parseInt($('body').data('scroll')));
  }
}
$('.popup-video__value').html('');



history.pushState('', '', window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function(event) {
popupClose();
return false;
});
$('.popup').click(function(e) {
if (!$(e.target).is(".popup>.popup-table>.cell *") || $(e.target).is(".popup-close") || $(e.target).is(".popup__close")) {
  popupClose();
  return false;
}
});
$(document).on('keydown',function(e) {
if(e.which==27){
  popupClose();
}
});

$('.goto').click(function() {
  var el=$(this).attr('href').replace('#','');
  var offset=0;
$('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500, function() {});

if($('.header-menu').hasClass('active')){
  $('.header-menu,.header-menu__icon').removeClass('active');
  $('body').removeClass('lock');
}
return false;
});

function ibg(){
$.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
});
}
ibg();

//Клик вне области
$(document).on('click touchstart',function(e) {
if (!$(e.target).is(".select *")) {
  $('.select').removeClass('active');
};
});

//UP
$(window).scroll(function() {
  var w=$(window).width();
if($(window).scrollTop()>50){
  $('#up').fadeIn(300);
}else{
  $('#up').fadeOut(300);
}
});
$('#up').click(function(event) {
$('body,html').animate({scrollTop:0},300);
});

$('body').on('click','.tab__navitem',function(event) {
    var eq=$(this).index();
  if($(this).hasClass('parent')){
    var eq=$(this).parent().index();
  }
if(!$(this).hasClass('active')){
    $(this).closest('.tabs').find('.tab__navitem').removeClass('active');
    $(this).addClass('active');
    $(this).closest('.tabs').find('.tab__item').removeClass('active').eq(eq).addClass('active');
  if($(this).closest('.tabs').find('.slick-slider').length>0){
    $(this).closest('.tabs').find('.slick-slider').slick('setPosition');
  }
}
});
$.each($('.spoller.active'), function(index, val) {
$(this).next().show();
});
$('body').on('click','.spoller',function(event) {
if($(this).hasClass('mob') && !isMobile.any()){
  return false;
}
if($(this).hasClass('closeall') && !$(this).hasClass('active')){
  $.each($(this).closest('.spollers').find('.spoller'), function(index, val) {
    $(this).removeClass('active');
    $(this).next().slideUp(300);
  });
}
$(this).toggleClass('active').next().slideToggle(300,function(index, val) {
    if($(this).parent().find('.slick-slider').length>0){
      $(this).parent().find('.slick-slider').slick('setPosition');
    }
});
return false;
});



function scrolloptions(){
  var scs=100;
  var mss=50;
  var bns=false;
if(isMobile.any()){
  scs=10;
  mss=1;
  bns=true;
}
var opt={
  cursorcolor:"#fff",
  cursorwidth: "4px",
  background: "",
  autohidemode:true,
  cursoropacitymax: 0.4,
  bouncescroll:bns,
  cursorborderradius: "0px",
  scrollspeed:scs,
  mousescrollstep:mss,
  directionlockdeadzone:0,
  cursorborder: "0px solid #fff",
};
return opt;
}
function scroll(){
$('.scroll-body').niceScroll('.scroll-list',scrolloptions());
}
if(navigator.appVersion.indexOf("Mac")!=-1){
}else{
if($('.scroll-body').length>0){scroll();}
}

if($('.t,.tip').length>0){
tip();
}
function tip(){
$('.t,.tip').webuiPopover({
  placement:'top',
  trigger:'hover',
  backdrop: false,
  //selector:true,
  animation:'fade',
  dismissible: true,
  padding:false,
  //hideEmpty: true
  onShow: function($element) {},
  onHide: function($element) {},
}).on('show.webui.popover hide.webui.popover', function(e){
  $(this).toggleClass('active');
});
}


$(window).resize(function(event) {
mainblock();
});
function mainblock(){
  var h=$(window).outerHeight();
$('.mainblock').css('min-height',h);
}
mainblock();



$('.filter__item').click(function(event) {
  var i=$(this).data('filter');
if (i==1) {
  $('.portfolio__column').show();
}else{
  $('.portfolio__column').hide();
  $('.portfolio__column.f_'+i).show();
}
$('.filter__item').removeClass('active');
$(this).addClass('active');

return false;
});

$(window).scroll(function(event) {
  var s=0-$(this).scrollTop()/3;
$('.mainblock__image').css('transform','translate3d(0, '+s+'px, 0)');
});
});
