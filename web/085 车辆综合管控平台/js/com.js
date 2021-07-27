/*大屏*/
!function(a){function b(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=0,g=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),g=e,void 0!==c.axis&&c.axis===c.HORIZONTAL_AXIS&&(g=0,f=-1*e),void 0!==c.wheelDeltaY&&(g=c.wheelDeltaY/120),void 0!==c.wheelDeltaX&&(f=-1*c.wheelDeltaX/120),d.unshift(b,e,f,g),(a.event.dispatch||a.event.handle).apply(this,d)}var c=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var d=c.length;d;)a.event.fixHooks[c[--d]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=c.length;a;)this.addEventListener(c[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=c.length;a;)this.removeEventListener(c[--a],b,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*e-f)*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=.3*e*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),function(a){function b(a){return"object"==typeof a?a:{top:a,left:a}}var c=a.scrollTo=function(b,c,d){a(window).scrollTo(b,c,d)};c.defaults={axis:"xy",duration:parseFloat(a.fn.jquery)>=1.3?0:1,limit:!0},c.window=function(){return a(window)._scrollable()},a.fn._scrollable=function(){return this.map(function(){var b=this,c=!b.nodeName||-1!=a.inArray(b.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!c)return b;var d=(b.contentWindow||b).document||b.ownerDocument||b;return/webkit/i.test(navigator.userAgent)||"BackCompat"==d.compatMode?d.body:d.documentElement})},a.fn.scrollTo=function(d,e,f){return"object"==typeof e&&(f=e,e=0),"function"==typeof f&&(f={onAfter:f}),"max"==d&&(d=9e9),f=a.extend({},c.defaults,f),e=e||f.duration,f.queue=f.queue&&f.axis.length>1,f.queue&&(e/=2),f.offset=b(f.offset),f.over=b(f.over),this._scrollable().each(function(){function g(a){j.animate(l,e,f.easing,a&&function(){a.call(this,d,f)})}if(null!=d){var h,i=this,j=a(i),k=d,l={},m=j.is("html,body");switch(typeof k){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(k)){k=b(k);break}if(k=a(k,this),!k.length)return;case"object":(k.is||k.style)&&(h=(k=a(k)).offset())}a.each(f.axis.split(""),function(a,b){var d="x"==b?"Left":"Top",e=d.toLowerCase(),n="scroll"+d,o=i[n],p=c.max(i,b);if(h)l[n]=h[e]+(m?0:o-j.offset()[e]),f.margin&&(l[n]-=parseInt(k.css("margin"+d))||0,l[n]-=parseInt(k.css("border"+d+"Width"))||0),l[n]+=f.offset[e]||0,f.over[e]&&(l[n]+=k["x"==b?"width":"height"]()*f.over[e]);else{var q=k[e];l[n]=q.slice&&"%"==q.slice(-1)?parseFloat(q)/100*p:q}f.limit&&/^\d+$/.test(l[n])&&(l[n]=l[n]<=0?0:Math.min(l[n],p)),!a&&f.queue&&(o!=l[n]&&g(f.onAfterFirst),delete l[n])}),g(f.onAfter)}}).end()},c.max=function(b,c){var d="x"==c?"Width":"Height",e="scroll"+d;if(!a(b).is("html,body"))return b[e]-a(b)[d.toLowerCase()]();var f="client"+d,g=b.ownerDocument.documentElement,h=b.ownerDocument.body;return Math.max(g[e],h[e])-Math.min(g[f],h[f])}}(jQuery),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var e,f=b||window.event,g=[].slice.call(arguments,1),h=0,i=0,j=0,k=0,l=0;return b=a.event.fix(f),b.type="mousewheel",f.wheelDelta&&(h=f.wheelDelta),f.detail&&(h=-1*f.detail),f.deltaY&&(j=-1*f.deltaY,h=j),f.deltaX&&(i=f.deltaX,h=-1*i),void 0!==f.wheelDeltaY&&(j=f.wheelDeltaY),void 0!==f.wheelDeltaX&&(i=-1*f.wheelDeltaX),k=Math.abs(h),(!c||c>k)&&(c=k),l=Math.max(Math.abs(j),Math.abs(i)),(!d||d>l)&&(d=l),e=h>0?"floor":"ceil",h=Math[e](h/c),i=Math[e](i/d),j=Math[e](j/d),g.unshift(b,h,i,j),(a.event.dispatch||a.event.handle).apply(this,g)}var c,d,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],f="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"];if(a.event.fixHooks)for(var g=e.length;g;)a.event.fixHooks[e[--g]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=f.length;a;)this.addEventListener(f[--a],b,!1);else this.onmousewheel=b},teardown:function(){if(this.removeEventListener)for(var a=f.length;a;)this.removeEventListener(f[--a],b,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})}),
$(document).ready(function(){
	mainObj.init(),mainObj.resizeFn(),
	$(window).resize(function(){mainObj.resizeFn()}),
	mainObj.judgeBro()&&($("#style").attr("href","css/style_ie2.0.css"),
		mainObj.scrollSetPos(),$(window).scroll(function(){mainObj.scrollSetPos()})),
	setTimeout(function(){
		var a=window.location.href,b=a.split("#@");
		mainObj.scroll_To(b.length>1?parseInt(b[1]):0)
	},200),
	$(document).mousewheel(function(a,b){
		a=a||window.event,
		a.preventDefault(),
		0>b?mainObj.scroll_To(mainObj.getNextSuffix(!0)):0!=mainObj.suffix&&mainObj.
		scroll_To(mainObj.getNextSuffix(!1))
	}),
	$(document).keydown(function(a){
		40==a.keyCode?mainObj.scroll_To(mainObj.getNextSuffix(!0)):38==a.which&&0!=mainObj.suffix&&mainObj.scroll_To(mainObj.getNextSuffix(!1))
	})
});
var mainObj={
	suffix:0,
	$par:$("#contPar"),
	$menu:$("#btnlistpar"),
	$btnNext:$(".btn-down"),
	$btnPrev:$(".btn-up"),
	anitime:600,
	ifScroll:1,
	doOne:1,
	subCls:{
		def:"cont",
		clsArr:["cont_0","cont_1","cont_2"],
		clsRespArr:["resp0","resp1"]
	},
	init:function(){
		if(this.is_pc()){
			var a=this.$par.children().eq(0),
				b=a.find(".img1,.img2"),
				c=a.find(".img6,.img7"),
				d=a.find(".img3"),
				e=a.find(".img4"),
				f=a.find(".img5"),
				g={
					margin_left:parseInt(a.find(".img1").css("margin-left")),
					margin_top:parseInt(a.find(".img1").css("margin-top"))
				},
				h={
					margin_left:parseInt(a.find(".img6").css("margin-left")),
					margin_top:parseInt(a.find(".img6").css("margin-top"))
				},
				i={
					margin_left:parseInt(a.find(".img3").css("margin-left")),
					margin_top:parseInt(a.find(".img3").css("margin-top"))
				},
				j={
					margin_left:parseInt(a.find(".img4").css("margin-left")),
					margin_top:parseInt(a.find(".img4").css("margin-top"))
				},
				k={
					margin_left:parseInt(a.find(".img5").css("margin-left")),
					margin_top:parseInt(a.find(".img5").css("margin-top"))
				};
			a.mousemove(function(a){
				var l=mainObj.getWinW(),
					m=mainObj.getWinH(),
					n=a.screenX,
					o=a.screenY,
					p=.03*(n-l/2),
					q=.02*(o-m/2);
				b.css({
					"margin-left":g.margin_left-.3*p+"px",
					"margin-top":g.margin_top-.3*q+"px"}),
				c.css({"margin-left":h.margin_left-.3*p+"px","margin-top":h.margin_top-.3*q+"px"}),
				d.css({"margin-left":i.margin_left+1.2*p+"px","margin-top":i.margin_top+1.2*q+"px"}),
				e.css({"margin-left":j.margin_left-1.2*p+"px","margin-top":j.margin_top-1.2*q+"px"}),
				f.css({"margin-left":k.margin_left-.6*p+"px","margin-top":k.margin_top-.6*q+"px"})})
		}else 
			this.$menu.hide(),
			this.$btnNext.show().click(function(){
				mainObj.scroll_To(mainObj.getNextSuffix(!0))
			}),
			this.$btnPrev.click(function(){
				0!=mainObj.suffix&&mainObj.scroll_To(mainObj.getNextSuffix(!1))
			}),
			$(document).bind("touchmove",function(a){a.preventDefault()}),
			$("img").bind("touchend",function(a){a.preventDefault()});
		$("img").each(function(){
			var a=$(this).attr("data-src");
			null!=a&&$(this).attr("src",a).removeAttr("data-src").addClass("png")
		})
	},
	resizeFn:function(){
		var a=this.getWinH(),
			b=this.getWinW();
		this.$par.children().css({height:a+"px"}),
		mainObj.reScrollTop();
		var c=this.$par.children().eq(0),
			d=mainObj.subCls.clsRespArr[0],
			e=mainObj.subCls.clsRespArr[1];
		switch(!0){
			case 780>b||780>a:c.addClass(d).removeClass(e);
			break;
			case 1024>b||850>a:c.addClass(e).removeClass(d);
			break;
			default:c.removeClass(e).removeClass(d)
		}
	},
	reScrollTop:function(){
		$(document).scrollTop(mainObj.$par.children().eq(mainObj.suffix)[0].offsetTop)
	},
	getWinW:function(){return $(window).width()},
	getWinH:function(){return $(window).height()},
	scroll_To:function(a){
		if(this.ifScroll){
			this.changeCls(a),this.suffix=a,this.ifScroll=0;
			var b=this.$par.children().eq(a);
			mainObj.judgeBro()||3==mainObj.suffix||mainObj.$par.children().eq(3).find(".img0").css("opacity",0),
			$.scrollTo(b,{
				duration:800,
				easing:"easeInOutExpo",
				axis:"y",
				onAfter:function(){
					switch(b.addClass(mainObj.subCls.clsArr[1]).removeClass(mainObj.subCls.clsArr[0]).removeClass(mainObj.subCls.clsArr[2]),
						mainObj.$menu.children().eq(a).addClass("sel").siblings().removeClass("sel"),
						mainObj.judgeBro()||(4==mainObj.suffix?b.find(".imgDel").css("opacity",1):mainObj.$par.children().eq(4).find(".imgDel").css("opacity",0),
						3==mainObj.suffix&&setTimeout(function(){
							b.find(".img0").css("opacity",1)
						},500)),
						mainObj.suffix){
							case 0:mainObj.anitime=0;
							break;
							case 4:mainObj.anitime=1e3;
							break;
							default:mainObj.anitime=600
						}
						mainObj.is_pc()||(0==mainObj.suffix?mainObj.$btnPrev.hide():mainObj.$btnPrev.show(),1==mainObj.suffix&&mainObj.reScrollTop()),
						setTimeout(function(){mainObj.ifScroll=1},mainObj.anitime)
					}
				})
		}
	},
	getNextSuffix:function(a){
		var b=this.$par.children().length,
			c=this.suffix;
		return c=a?b>c+1?c+1:0:c-1>=0?c-1:b-1
	},
	changeCls:function(a){
		this.$par.children().each(function(b){
			var c=mainObj.subCls.clsArr[0],d=mainObj.subCls.clsArr[1],e=mainObj.subCls.clsArr[2];
			a>b?$(this).addClass(c).removeClass(d).removeClass(e):b>a&&$(this).addClass(e).removeClass(c).removeClass(d)
		})
	},
	is_pc:function(){
		for(var a=new Array("Android","iPhone","Windows Phone","iPod","iPad","BlackBerry","MeeGo","SymbianOS"),
				b=navigator.userAgent,c=a.length,d=0;c>d;
				d++)
			if(b.indexOf(a[d])>0)return!1;return!0
	},
	fromPosGeiIdx:function(){
		for(var a=mainObj.$par.children(),b=$(document).scrollTop(),c=a.length-1;c>=0;c--){
			var d=a.eq(c)[0].offsetTop;if(b>=d)return c
		}
	},
	scrollSetPos:function(){
		var a=mainObj.fromPosGeiIdx();
		mainObj.$menu.children().eq(a).addClass("sel").siblings().removeClass("sel"),
		mainObj.suffix=a
	},
	judgeBro:function(){return $.browser.opera||$.browser.msie&&("6.0"==$.browser.version||"7.0"==$.browser.version||"8.0"==$.browser.version||"9.0"==$.browser.version)}};